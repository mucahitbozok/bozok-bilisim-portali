# -*- coding: utf-8 -*-
"""
====================================================================
5. Sınıf Bilişim Teknolojileri - Otomatik Hafta İçeriği Üretici
Yıllık Plan (XLSX) ve Ders Notlarını (DOCX) baz alarak
tüm haftalar için interaktif sunu, çalışma kağıdı, test ve oyun üretir.
====================================================================
"""

import os
import sys
import json
import io
import zipfile
import xml.etree.ElementTree as ET

# Ensure UTF-8 output
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def extract_annual_plan(xlsx_file):
    """XLSX dosyasından 36 haftalık planı okur"""
    weeks_data = []
    with zipfile.ZipFile(xlsx_file) as z:
        sst = []
        if 'xl/sharedStrings.xml' in z.namelist():
            tree = ET.fromstring(z.read('xl/sharedStrings.xml'))
            for si in tree:
                sst.append(''.join(si.itertext()))
        sheet_xml = [n for n in z.namelist() if n.startswith('xl/worksheets/sheet')][0]
        tree = ET.fromstring(z.read(sheet_xml))
        ns = {'s': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
        for row in tree.findall('.//s:row', ns):
            cells = []
            for c in row.findall('s:c', ns):
                t = c.get('t')
                v = c.find('s:v', ns)
                val = v.text if v is not None else ''
                if t == 's' and val.isdigit():
                    val = sst[int(val)]
                cells.append(val.strip())
            if len(cells) >= 3 and ('Hafta' in cells[0] or 'Hafta' in cells[1]):
                weeks_data.append(cells)
    return weeks_data

def extract_course_notes(docx_file):
    """DOCX dosyasından tüm ders notu paragraflarını okur"""
    with zipfile.ZipFile(docx_file) as z:
        tree = ET.fromstring(z.read('word/document.xml'))
        ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        paras = [''.join(p.itertext()).strip() for p in tree.findall('.//w:p', ns)]
        return [p for p in paras if p]

def generate_week_template(week_num, theme_name, topic_title, outcome_code, outcome_desc, notes_snippet):
    """Her hafta için tam yapılandırılmış JavaScript veri seti şablonu oluşturur"""
    js_content = f"""// ==========================================
// {week_num}. Hafta: {topic_title}
// Otomatik Oluşturulan İnteraktif Ders Materyalleri ve Oyun Veritabanı
// Hazırlayan: Öğretmen Bozok
// ==========================================

window.WEEK{week_num}_CONTENT = {{
    weekInfo: {{
        weekNumber: {week_num},
        title: "{topic_title}",
        theme: "{theme_name}",
        learningGoals: [
            "{outcome_desc}",
            "{topic_title} ile ilgili temel kavramları açıklayabileceğim.",
            "Günlük yaşamdan örnekler vererek konuyu pekiştirebileceğim.",
            "Ders sonu oyunlarında soruları başarıyla cevaplayabileceğim."
        ]
    }},

    // 🖥️ 1. İNTERAKTİF DERS SUNUSU (Akıllı Tahta Modu)
    slides: [
        {{
            id: 1,
            title: "Hoş Geldiniz! 👋",
            subtitle: "{week_num}. Hafta: {topic_title}",
            topic: "{theme_name}",
            icon: "fa-solid fa-graduation-cap",
            bgColor: "from-blue-600 to-indigo-800",
            content: `
                <div class="text-center space-y-6 max-w-2xl mx-auto">
                    <div class="inline-flex p-6 bg-white/10 rounded-full text-yellow-300 text-6xl shadow-inner animate-bounce">
                        <i class="fa-solid fa-laptop-code"></i>
                    </div>
                    <h2 class="text-3xl font-extrabold text-white">{topic_title}</h2>
                    <p class="text-xl text-blue-100 leading-relaxed">
                        Bugün <strong>{topic_title}</strong> konusunu keşfedecek, önemli kavramları öğrenecek ve sınıf oyunlarıyla pekiştireceğiz!
                    </p>
                    <div class="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 inline-block">
                        <p class="text-yellow-300 font-bold text-lg"><i class="fa-solid fa-chalkboard-user mr-2"></i>Öğretmen Bozok ile 5. Sınıf Bilişim</p>
                    </div>
                </div>
            `
        }},
        {{
            id: 2,
            title: "Kazanımlar ve Hedeflerimiz 🎯",
            subtitle: "{outcome_code}",
            topic: "Ders Hedefleri",
            icon: "fa-solid fa-bullseye",
            bgColor: "from-emerald-600 to-teal-800",
            content: `
                <div class="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-emerald-300/30 text-white max-w-3xl mx-auto shadow-xl space-y-4">
                    <h3 class="text-xl font-bold text-yellow-300 flex items-center gap-2">
                        <i class="fa-solid fa-circle-check"></i> Bu Derste Neler Öğreneceğiz?
                    </h3>
                    <ul class="space-y-3 text-base text-emerald-100">
                        <li class="flex items-center gap-3"><i class="fa-solid fa-star text-yellow-400"></i> {outcome_desc}</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-star text-yellow-400"></i> Temel kavramları ve günlük yaşamdaki uygulamalarını kavrayacağız.</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-star text-yellow-400"></i> Doğru ve bilinçli teknoloji kullanımı ilkelerini tartışacağız.</li>
                    </ul>
                </div>
            `
        }},
        {{
            id: 3,
            title: "Konu Anlatımı & Temel Bilgiler 💡",
            subtitle: "{topic_title}",
            topic: "Ders Notları",
            icon: "fa-solid fa-lightbulb",
            bgColor: "from-purple-600 to-indigo-900",
            content: `
                <div class="bg-white/10 rounded-2xl p-6 text-left border border-white/20 text-white max-w-3xl mx-auto space-y-4 shadow-xl">
                    <h3 class="text-2xl font-bold text-yellow-300">{topic_title}</h3>
                    <p class="text-base text-purple-100 leading-relaxed">
                        {notes_snippet}
                    </p>
                    <div class="p-4 bg-purple-950/40 rounded-xl border border-purple-400/30 text-sm text-yellow-200">
                        📌 <strong>Önemli İpucu:</strong> Bilişim teknolojilerini kullanırken amacına uygun, güvenli ve etik kurallara bağlı hareket etmeliyiz.
                    </div>
                </div>
            `
        }},
        {{
            id: 4,
            title: "Özet ve Oyun Vakti! 🏆",
            subtitle: "Şimdi Sıra Sende!",
            topic: "Ders Sonu Değerlendirme",
            icon: "fa-solid fa-trophy",
            bgColor: "from-amber-600 to-purple-900",
            content: `
                <div class="text-center space-y-6 max-w-2xl mx-auto">
                    <div class="text-6xl text-yellow-300 animate-bounce"><i class="fa-solid fa-gamepad"></i></div>
                    <h3 class="text-3xl font-extrabold text-white">Harika Bir Ders Geçirdik!</h3>
                    <p class="text-lg text-amber-100">
                        Şimdi çalışma kağıdını inceleyebilir, pekiştirme sorularını çözebilir veya <strong>Tekrar Oyunları</strong> arenasında arkadaşlarınla yarışabilirsin!
                    </p>
                    <div class="flex justify-center gap-4 flex-wrap">
                        <button onclick="app.switchTab('quiz')" class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg">Pekiştirme Soruları</button>
                        <button onclick="app.switchTab('games')" class="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-xl shadow-lg animate-pulse">Tekrar Oyunları 🎮</button>
                    </div>
                </div>
            `
        }}
    ],

    // ❓ 2. PEKİŞTİRME SORULARI & TESTLERİ
    questions: [
        {{
            id: 1,
            type: "matching",
            title: "Kavram Eşleştirme",
            pairs: [
                {{ left: "{topic_title}", right: "{theme_name}", leftIcon: "fa-solid fa-laptop" }},
                {{ left: "Doğru Kullanım", right: "Bilinçli Teknoloji", leftIcon: "fa-solid fa-shield-halved" }}
            ]
        }},
        {{
            id: 2,
            type: "true_false",
            title: "Doğru / Yanlış Soruları",
            items: [
                {{
                    statement: "{topic_title} konusunda kurallara ve güvenliğe dikkat etmek önemlidir.",
                    isCorrect: true,
                    explanation: "Doğru! Bilişim teknolojilerinde güvenlik ve bilinçli kullanım temel kuraldır."
                }},
                {{
                    statement: "Bilişim teknolojilerini kullanırken kişisel şifrelerimizi herkesle paylaşmalıyız.",
                    isCorrect: false,
                    explanation: "Yanlış! Şifreler ve kişisel veriler gizli tutulmalıdır."
                }},
                {{
                    statement: "{outcome_desc}",
                    isCorrect: true,
                    explanation: "Doğru! Bu haftanın temel hedef kazanımıdır."
                }}
            ]
        }},
        {{
            id: 3,
            type: "multiple_choice",
            title: "Çoktan Seçmeli Değerlendirme Testi",
            questions: [
                {{
                    q: "{topic_title} ile ilgili aşağıdakilerden hangisi doğrudur?",
                    options: [
                        "Bilinçli ve amacına uygun kullanılmalıdır.",
                        "Günde 24 saat kesintisiz kullanılmalıdır.",
                        "Şifreler başkalarıyla paylaşılmalıdır.",
                        "Sağlık kuralları önemsizdir."
                    ],
                    answer: 0,
                    explanation: "Bilişim araçları her zaman bilinçli ve amacına uygun kullanılmalıdır."
                }},
                {{
                    q: "Bu haftanın ana ders konusu hangisidir?",
                    options: [
                        "{topic_title}",
                        "Rastgele Konu",
                        "Oyun Tasarımı",
                        "Müzik Eğitimi"
                    ],
                    answer: 0,
                    explanation: "{week_num}. haftamızın konusu: {topic_title}"
                }}
            ]
        }}
    ],

    // 🎮 3. OYUNLAR İÇİN ÖZEL VERİ SETLERİ
    gameData: {{
        wheelQuiz: [
            {{
                question: "{topic_title} konusunda hangisi temel kuraldır?",
                options: ["Güvenli Kullanım", "Dikkatsizlik", "Aşırı Bağımlılık", "Hareketsizlik"],
                answer: 0,
                points: 100
            }},
            {{
                question: "Bilişim teknolojilerini kullanırken sağlığımızı korumak için ne yapmalıyız?",
                options: ["Doğru oturuş kuralına uymalıyız", "Kambur durmalıyız", "Ekrana çok yakın bakmalıyız", "Mola vermemeliyiz"],
                answer: 0,
                points: 150
            }},
            {{
                question: "Hangi alanda bilişim teknolojileri hayatımızı kolaylaştırır?",
                options: ["Eğitim ve Sağlık", "Hiçbiri", "Sadece Oyun", "Yalnızca TV"],
                answer: 0,
                points: 100
            }}
        ],
        matchCards: [
            {{ id: 1, text: "{topic_title}", category: "{theme_name}", icon: "fa-solid fa-laptop-code" }},
            {{ id: 2, text: "Güvenli Şifre", category: "Siber Güvenlik", icon: "fa-solid fa-key" }},
            {{ id: 3, text: "Ergonomi", category: "Doğru Oturuş", icon: "fa-solid fa-chair" }},
            {{ id: 4, text: "Akıllı Tahta", category: "Eğitim", icon: "fa-solid fa-chalkboard" }}
        ],
        reflexStatements: [
            {{ text: "{topic_title} konusunda bilinçli olmak önemlidir.", correct: true }},
            {{ text: "Teknolojiyi sınırsız ve kontrolsüz kullanmak sağlıklıdır.", correct: false }},
            {{ text: "Bilişim araçları hayatımızı kolaylaştırır.", correct: true }},
            {{ text: "Kişisel bilgiler internette herkesle paylaşılmalıdır.", correct: false }}
        ],
        duelQuestions: [
            {{
                q: "{topic_title} hangi temaya aittir?",
                options: ["{theme_name}", "Matematik", "Türkçe", "Sosyal"],
                answer: 0
            }},
            {{
                q: "Doğru oturuşta diz ve dirsek açısı kaç derece olmalıdır?",
                options: ["90°", "45°", "180°", "30°"],
                answer: 0
            }}
        ]
    }}
}};
"""
    return js_content

def main():
    print("==================================================")
    print("5. Sınıf Bilişim Otomatik Hafta Üreticisi Başlatıldı")
    print("==================================================")
    
    xlsx_file = "5.sınıf plaln.xlsx"
    docx_file = "5.Sınıf 2026.docx"

    if not os.path.exists(xlsx_file):
        print(f"HATA: {xlsx_file} bulunamadı!")
        return

    weeks = extract_annual_plan(xlsx_file)
    notes = extract_course_notes(docx_file) if os.path.exists(docx_file) else []
    print(f"Toplanan Yıllık Plan Hafta Sayısı: {len(weeks)}")
    print(f"Toplanan Ders Notu Paragraf Sayısı: {len(notes)}")

    os.makedirs("js/data", exist_ok=True)

    created_count = 0
    for idx, w in enumerate(weeks):
        week_num = idx + 1
        if week_num == 1:
            continue # 1. Hafta zaten ultra-detaylı ve hazır

        theme_name = w[1] if len(w) > 1 else "Bilişim Teknolojileri"
        topic_title = w[2] if len(w) > 2 else f"{week_num}. Hafta Konusu"
        outcome_code = w[3] if len(w) > 3 else f"BTY.5.{week_num}"
        outcome_desc = w[4] if len(w) > 4 else outcome_code

        # Notlardan eşleşen snippet bul
        matching_notes = [p for p in notes if any(word.lower() in p.lower() for word in topic_title.split() if len(word) > 3)]
        notes_snippet = " ".join(matching_notes[:3]) if matching_notes else f"{topic_title} konusu kapsamında temel kavramlar, günlük hayattaki rolü ve bilinçli teknoloji kullanımı üzerinde durulacaktır."

        js_content = generate_week_template(week_num, theme_name, topic_title, outcome_code, outcome_desc, notes_snippet)
        output_file = f"js/data/week{week_num}_content.js"

        with open(output_file, "w", encoding="utf-8") as f:
            f.write(js_content)
        created_count += 1

    print(f"BAŞARILI: Toplam {created_count} hafta için interaktif JS veri dosyası oluşturuldu!")

if __name__ == "__main__":
    main()
