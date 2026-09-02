# -*- coding: utf-8 -*-
"""
====================================================================
5. SINIF BİLİŞİM TEKNOLOJİLERİ - TAM 37 HAFTALIK MÜFREDAT VE OYUN ÜRETİCİ
Yıllık Plan ve MEB 5. Sınıf Ders Notlarının Tamamı Temel Alınarak
37 Haftanın Her Biri İçin Ultra Zengin Sunu, Çalışma Kağıdı, Test ve 4 Oyun Üretir.
====================================================================
"""

import os
import sys
import io
import json

# Ensure UTF-8 output
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

CURRICULUM_WEEKS = {
    2: {
        "title": "Bilişim Teknolojilerinin Etkileri ve Dijital Sağlık",
        "theme": "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        "code": "BTY.5.1.2",
        "goals": [
            "Teknolojinin hayatımızdaki olumlu ve olumsuz yönlerini analiz edebileceğim.",
            "Teknoloji bağımlılığı ve dijital sağlık kavramlarını açıklayabileceğim.",
            "Bilgisayar başında fiziksel sağlığımı korumak için mola ve egzersiz kurallarını uygulayabileceğim.",
            "Bilinçli ve dengeli teknoloji kullanım alışkanlığı kazanabileceğim."
        ],
        "slides": [
            {
                "id": 1,
                "title": "Teknolojinin İki Yüzü: Olumlu mu Olumsuz mu? ⚖️",
                "subtitle": "2. Hafta • Dijital Sağlık",
                "topic": "Teknolojinin Etkileri",
                "icon": "fa-solid fa-scale-balanced",
                "bgColor": "from-blue-600 to-indigo-800",
                "content": """
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div class="bg-emerald-950/60 border-2 border-emerald-500 rounded-3xl p-5 text-white shadow-xl space-y-3">
                            <div class="flex items-center gap-3 text-emerald-400 font-bold text-lg border-b border-emerald-500/40 pb-2">
                                <i class="fa-solid fa-thumbs-up text-2xl"></i> OLUMLU ETKİLERİ
                            </div>
                            <ul class="space-y-2 text-sm text-emerald-100">
                                <li>✨ Bilgiye saniyeler içinde kolay erişim sağlar.</li>
                                <li>✨ Mesafeleri ortadan kaldırır, anlık iletişim kurarız.</li>
                                <li>✨ İşlerimizi hızlandırır ve zaman kazandırır.</li>
                                <li>✨ Eğitim ve öğrenmeyi eğlenceli hale getirir.</li>
                            </ul>
                        </div>
                        <div class="bg-rose-950/60 border-2 border-rose-500 rounded-3xl p-5 text-white shadow-xl space-y-3">
                            <div class="flex items-center gap-3 text-rose-400 font-bold text-lg border-b border-rose-500/40 pb-2">
                                <i class="fa-solid fa-thumbs-down text-2xl"></i> OLUMSUZ ETKİLERİ (Aşırı Kullanımda)
                            </div>
                            <ul class="space-y-2 text-sm text-rose-100">
                                <li>⚠️ Göz yorgunluğu, baş ağrısı ve sırt/boyun ağrıları.</li>
                                <li>⚠️ Hareketsizlik ve duruş (postür) bozuklukları.</li>
                                <li>⚠️ Yüz yüze iletişimde azalma ve yalnızlaşma.</li>
                                <li>⚠️ Teknoloji bağımlılığı ve zaman kaybı.</li>
                            </ul>
                        </div>
                    </div>
                """
            },
            {
                "id": 2,
                "title": "20-20-20 Kuralı ile Gözlerimizi Koruyalım! 👀",
                "subtitle": "Göz Sağlığı Kuralı",
                "topic": "Ergonomi & Sağlık",
                "icon": "fa-solid fa-eye",
                "bgColor": "from-teal-600 to-emerald-900",
                "content": """
                    <div class="bg-white/10 backdrop-blur-md rounded-3xl p-6 border-2 border-teal-400/40 text-white max-w-3xl mx-auto shadow-2xl text-center space-y-5">
                        <div class="text-6xl text-teal-300 animate-pulse"><i class="fa-solid fa-stopwatch-20"></i></div>
                        <h3 class="text-2xl sm:text-3xl font-black text-yellow-300">20 Dakikada Bir 20 Saniye Kuralı!</h3>
                        <p class="text-base sm:text-lg text-teal-100 leading-relaxed">
                            Her <strong>20 dakikada bir</strong> ekrandan başınızı kaldırın ve en az <strong>20 fit (yaklaşık 6 metre)</strong> uzaktaki bir nesneye <strong>20 saniye boyunca</strong> bakın!
                        </p>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                            <div class="p-3 bg-teal-950/60 rounded-xl border border-teal-500/30">
                                <div class="text-2xl font-black text-yellow-400">20 Dk</div>
                                <div class="text-xs text-teal-200">Çalışma Süresi</div>
                            </div>
                            <div class="p-3 bg-teal-950/60 rounded-xl border border-teal-500/30">
                                <div class="text-2xl font-black text-yellow-400">6 Metre</div>
                                <div class="text-xs text-teal-200">Uzağa Odaklan</div>
                            </div>
                            <div class="p-3 bg-teal-950/60 rounded-xl border border-teal-500/30">
                                <div class="text-2xl font-black text-yellow-400">20 Sn</div>
                                <div class="text-xs text-teal-200">Gözlerini Dinlendir</div>
                            </div>
                        </div>
                    </div>
                """
            },
            {
                "id": 3,
                "title": "Teknoloji Bağımlılığı Belirtileri 🛑",
                "subtitle": "Kendimizi Test Edelim",
                "topic": "Dijital Bağımlılık",
                "icon": "fa-solid fa-mobile-screen-button",
                "bgColor": "from-amber-600 to-rose-900",
                "content": """
                    <div class="space-y-4 max-w-3xl mx-auto">
                        <div class="p-4 bg-white/10 rounded-2xl border border-white/20 text-white flex items-center gap-4">
                            <div class="w-12 h-12 rounded-xl bg-rose-500/30 text-rose-300 flex items-center justify-center text-2xl shrink-0">⏰</div>
                            <div>
                                <h4 class="font-bold text-white">Zaman Kontrolünü Kaybetmek</h4>
                                <p class="text-xs text-amber-100">"5 dakika daha" deyip saatlerce ekran başından kalkamamak.</p>
                            </div>
                        </div>
                        <div class="p-4 bg-white/10 rounded-2xl border border-white/20 text-white flex items-center gap-4">
                            <div class="w-12 h-12 rounded-xl bg-amber-500/30 text-amber-300 flex items-center justify-center text-2xl shrink-0">📚</div>
                            <div>
                                <h4 class="font-bold text-white">Sorumlulukları Ertelemek</h4>
                                <p class="text-xs text-amber-100">Ders çalışmayı, kitap okumayı veya aileyle vakit geçirmeyi ihmal etmek.</p>
                            </div>
                        </div>
                        <div class="p-4 bg-white/10 rounded-2xl border border-white/20 text-white flex items-center gap-4">
                            <div class="w-12 h-12 rounded-xl bg-purple-500/30 text-purple-300 flex items-center justify-center text-2xl shrink-0">😤</div>
                            <div>
                                <h4 class="font-bold text-white">İnternet Yokken Huzursuz Olmak</h4>
                                <p class="text-xs text-amber-100">Telefona veya bilgisayara ulaşamadığında öfkeli ve mutsuz hissetmek.</p>
                            </div>
                        </div>
                    </div>
                """
            },
            {
                "id": 4,
                "title": "Bilinçli Teknoloji Kullanıcısının 5 Kuralı 🌟",
                "subtitle": "Altın Kurallar",
                "topic": "Dijital Denge",
                "icon": "fa-solid fa-award",
                "bgColor": "from-indigo-700 to-purple-950",
                "content": """
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto text-white text-sm">
                        <div class="p-4 bg-indigo-950/60 rounded-2xl border border-indigo-400/30 flex items-center gap-3">
                            <span class="text-2xl font-black text-yellow-400">1</span>
                            <span>Günlük ekran sürene sınır koy ve bu sınıra sadık kal.</span>
                        </div>
                        <div class="p-4 bg-indigo-950/60 rounded-2xl border border-indigo-400/30 flex items-center gap-3">
                            <span class="text-2xl font-black text-yellow-400">2</span>
                            <span>Yemek yerken ve uyumadan 1 saat önce ekranlardan uzak dur.</span>
                        </div>
                        <div class="p-4 bg-indigo-950/60 rounded-2xl border border-indigo-400/30 flex items-center gap-3">
                            <span class="text-2xl font-black text-yellow-400">3</span>
                            <span>Her gün fiziksel hareket, spor ve yürüyüş yap.</span>
                        </div>
                        <div class="p-4 bg-indigo-950/60 rounded-2xl border border-indigo-400/30 flex items-center gap-3">
                            <span class="text-2xl font-black text-yellow-400">4</span>
                            <span>Arkadaşların ve ailenle yüz yüze vakit geçir.</span>
                        </div>
                        <div class="p-4 bg-indigo-950/60 rounded-2xl border border-indigo-400/30 col-span-1 sm:col-span-2 flex items-center justify-center gap-3 text-center text-yellow-300 font-bold">
                            <i class="fa-solid fa-heart text-rose-400"></i> Teknoloji hayatımızın efendisi değil, yardımcısı olmalıdır!
                        </div>
                    </div>
                """
            }
        ],
        "matching": [
            {"left": "20-20-20 Kuralı", "right": "Göz Dinlendirme", "leftIcon": "fa-solid fa-eye"},
            {"left": "Ergonomi", "right": "Doğru Oturuş ve Sağlık", "leftIcon": "fa-solid fa-chair"},
            {"left": "Teknoloji Bağımlılığı", "right": "Kontrolsüz Aşırı Kullanım", "leftIcon": "fa-solid fa-ban"},
            {"left": "Dijital Denge", "right": "Bilinçli ve Sınırlı Süre", "leftIcon": "fa-solid fa-scale-balanced"}
        ],
        "tfQuestions": [
            {
                "statement": "20-20-20 kuralı gözlerimizi ekrandan dinlendirmek için uygulanır.",
                "isCorrect": True,
                "explanation": "Doğru! Her 20 dakikada 20 saniye boyunca 6 metre uzağa bakmak göz kaslarını rahatlatır."
            },
            {
                "statement": "Günde 8 saat aralıksız oyun oynamak sağlığımız için çok faydalıdır.",
                "isCorrect": False,
                "explanation": "Yanlış! Uzun süreli hareketsiz oyun oynamak bağımlılık yapar ve fiziksel sağlığı bozar."
            },
            {
                "statement": "Yatmadan hemen önce telefonla oynamak uyku kalitemizi düşürür.",
                "isCorrect": True,
                "explanation": "Doğru! Ekranlardan yayılan mavi ışık beynimize gündüz sinyali göndererek uykuyu engeller."
            }
        ],
        "mcQuestions": [
            {
                "q": "Ekran karşısında göz sağlığımızı korumak için uygulanan kural hangisidir?",
                "options": ["20-20-20 Kuralı", "50-50-50 Kuralı", "10-10 Kuralı", "90 Derece Kuralı"],
                "answer": 0,
                "explanation": "Göz sağlığı için 20 dakikada bir 20 saniye uzağa bakılan 20-20-20 kuralı uygulanır."
            },
            {
                "q": "Aşağıdakilerden hangisi teknoloji bağımlılığının bir belirtisidir?",
                "options": [
                    "Ekran başından kalkmakta zorlanmak ve öfkelenmek",
                    "Derslerini zamanında tamamlamak",
                    "Arkadaşlarıyla dışarıda oyun oynamak",
                    "Günde yarım saat kitap okumak"
                ],
                "answer": 0,
                "explanation": "Zaman kontrolünü kaybetmek ve ekrandan uzak kalınca öfkelenmek bağımlılık belirtisidir."
            }
        ],
        "wheelQuiz": [
            {"question": "20-20-20 kuralı hangi organımızın sağlığı içindir?", "options": ["Göz", "Kulak", "Mide", "Ayak"], "answer": 0, "points": 100},
            {"question": "Hangisi teknolojinin olumlu etkisidir?", "options": ["Bilgiye hızlı erişim", "Göz bozulması", "Kamburluk", "Yalnızlaşma"], "answer": 0, "points": 150},
            {"question": "Yatmadan kaç saat önce ekranları bırakmalıyız?", "options": ["En az 1 saat", "Hiç bırakmamalıyız", "10 saniye", "5 dakika"], "answer": 0, "points": 200}
        ],
        "matchCards": [
            {"id": 1, "text": "20-20-20 Kuralı", "category": "Göz Sağlığı", "icon": "fa-solid fa-eye"},
            {"id": 2, "text": "Kambur Oturuş", "category": "Duruş Bozukluğu", "icon": "fa-solid fa-xmark"},
            {"id": 3, "text": "Mavi Işık", "category": "Uyku Bozukluğu", "icon": "fa-solid fa-moon"},
            {"id": 4, "text": "Açık Hava Sporu", "category": "Fiziksel Sağlık", "icon": "fa-solid fa-person-running"}
        ],
        "reflexStatements": [
            {"text": "20 dakikada bir gözlerimizi uzağa bakarak dinlendirmeliyiz.", "correct": True},
            {"text": "Yemek yerken telefondan video izlemek çok sağlıklıdır.", "correct": False},
            {"text": "Bilinçli teknoloji kullanıcısı günlük ekran süresine sınır koyar.", "correct": True},
            {"text": "Bütün gün hareketsiz bilgisayar oynamak vücuda güç kazandırır.", "correct": False}
        ],
        "duelQuestions": [
            {"q": "20-20-20 kuralında kaç saniye uzağa bakılır?", "options": ["20 saniye", "20 dakika", "2 saat", "20 milisaniye"], "answer": 0},
            {"q": "Hangisi teknoloji bağımlılığından korunma yöntemidir?", "options": ["Ekran süresini sınırlamak", "Daha çok oyun yüklemek", "Gece uyumamak", "Sosyal medyada 10 saat kalmak"], "answer": 0}
        ]
    },

    3: {
        "title": "Dijital Vatandaşlık Uygulamaları ve Dijital Ayak İzi",
        "theme": "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        "code": "BTY.5.1.3",
        "goals": [
            "Dijital vatandaşlık ve dijital kimlik kavramlarını açıklayabileceğim.",
            "Dijital ayak izinin ne olduğunu ve geleceğimizi nasıl etkilediğini kavrayabileceğim.",
            "e-Devlet, e-Okul ve EBA gibi resmi dijital platformları tanıyabileceğim.",
            "İnternette güvenli ve sorumlu bir dijital vatandaş gibi davranabileceğim."
        ],
        "slides": [
            {
                "id": 1,
                "title": "Dijital Vatandaş Kimdir? 🌐",
                "subtitle": "3. Hafta • Dijital Vatandaşlık",
                "topic": "Dijital Kimlik",
                "icon": "fa-solid fa-id-card",
                "bgColor": "from-indigo-600 to-purple-900",
                "content": """
                    <div class="bg-white/10 backdrop-blur-md rounded-3xl p-6 border-2 border-indigo-400/40 text-white max-w-3xl mx-auto shadow-2xl space-y-4">
                        <div class="flex items-center gap-4">
                            <div class="w-16 h-16 rounded-2xl bg-indigo-500/30 text-yellow-300 flex items-center justify-center text-4xl shadow-inner">
                                <i class="fa-solid fa-user-shield"></i>
                            </div>
                            <div>
                                <h3 class="text-2xl font-bold text-yellow-300">Dijital Vatandaş</h3>
                                <p class="text-sm text-indigo-200">Teknolojiyi ve interneti doğru, ahlaki, güvenli ve yasalara uygun kullanan bireydir.</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                            <div class="p-3 bg-indigo-950/60 rounded-xl border border-indigo-500/30">
                                <strong>✅ Dijital Hak ve Sorumluluk:</strong> Başkalarının haklarına saygı duyar.
                            </div>
                            <div class="p-3 bg-indigo-950/60 rounded-xl border border-indigo-500/30">
                                <strong>✅ Dijital Güvenlik:</strong> Kendi kişisel verilerini ve şifrelerini korur.
                            </div>
                            <div class="p-3 bg-indigo-950/60 rounded-xl border border-indigo-500/30">
                                <strong>✅ Dijital İletişim:</strong> Nezaket ve görgü kurallarına uyar.
                            </div>
                            <div class="p-3 bg-indigo-950/60 rounded-xl border border-indigo-500/30">
                                <strong>✅ Dijital Hukuk:</strong> Telif haklarını ihlal etmez, korsan kullanmaz.
                            </div>
                        </div>
                    </div>
                """
            },
            {
                "id": 2,
                "title": "Dijital Ayak İzi Nedir? 👣",
                "subtitle": "İnternetteki İzlerimiz Asla Silinmez!",
                "topic": "Dijital Ayak İzi",
                "icon": "fa-solid fa-shoe-prints",
                "bgColor": "from-blue-700 to-cyan-900",
                "content": """
                    <div class="bg-white/10 backdrop-blur-md rounded-3xl p-6 border-2 border-cyan-400/40 text-white max-w-3xl mx-auto shadow-2xl space-y-4">
                        <div class="text-center">
                            <div class="inline-flex p-4 bg-cyan-500/20 rounded-full text-cyan-300 text-5xl mb-2">
                                <i class="fa-solid fa-shoe-prints"></i>
                            </div>
                            <h3 class="text-2xl font-black text-yellow-300">İnternette Yaptığın Her Şey Bir İz Bırakır!</h3>
                        </div>
                        <p class="text-sm text-cyan-100 text-center leading-relaxed">
                            Arama geçmişin, izlediğin videolar, paylaştığın fotoğraflar, yazdığın yorumlar ve beğendiğin gönderiler senin <strong>Dijital Ayak İzini</strong> oluşturur.
                        </p>
                        <div class="p-4 bg-cyan-950/70 rounded-2xl border border-cyan-500/40 text-xs text-yellow-200 text-center font-semibold">
                            ⚠️ Unutma: İnternete yüklenen hiçbir veri tamamen kaybolmaz. Paylaşım yapmadan önce iki kez düşün!
                        </div>
                    </div>
                """
            },
            {
                "id": 3,
                "title": "Ülkemizdeki Önemli Dijital Hizmetler 🏛️",
                "subtitle": "e-Devlet, e-Okul ve EBA",
                "topic": "e-Devlet Hizmetleri",
                "icon": "fa-solid fa-building-columns",
                "bgColor": "from-red-700 to-indigo-950",
                "content": """
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-white">
                        <div class="p-4 bg-red-950/70 rounded-2xl border-2 border-red-500/50 shadow-xl text-center space-y-2">
                            <div class="text-3xl text-red-400"><i class="fa-solid fa-landmark"></i></div>
                            <h4 class="font-black text-base text-yellow-300">e-Devlet Kapısı</h4>
                            <p class="text-xs text-red-100">Resmi devlet işlemlerini internetten sıra beklemeden hızlıca yapmamızı sağlar (turkiye.gov.tr).</p>
                        </div>
                        <div class="p-4 bg-blue-950/70 rounded-2xl border-2 border-blue-500/50 shadow-xl text-center space-y-2">
                            <div class="text-3xl text-blue-400"><i class="fa-solid fa-graduation-cap"></i></div>
                            <h4 class="font-black text-base text-yellow-300">e-Okul VBS</h4>
                            <p class="text-xs text-blue-100">Notlarımızı, devamsızlıklarımızı ve sınav tarihlerimizi takip ettiğimiz MEB platformudur.</p>
                        </div>
                        <div class="p-4 bg-amber-950/70 rounded-2xl border-2 border-amber-500/50 shadow-xl text-center space-y-2">
                            <div class="text-3xl text-amber-400"><i class="fa-solid fa-book-bookmark"></i></div>
                            <h4 class="font-black text-base text-yellow-300">EBA</h4>
                            <p class="text-xs text-amber-100">Eğitim Bilişim Ağı; ders videoları, testler ve interaktif kitaplar sunan eğitim portalıdır.</p>
                        </div>
                    </div>
                """
            }
        ],
        "matching": [
            {"left": "e-Devlet", "right": "Kamu Hizmetleri Portalı", "leftIcon": "fa-solid fa-landmark"},
            {"left": "e-Okul", "right": "Not ve Devamsızlık Takibi", "leftIcon": "fa-solid fa-graduation-cap"},
            {"left": "EBA", "right": "Eğitim Bilişim Ağı", "leftIcon": "fa-solid fa-book-open"},
            {"left": "Dijital Ayak İzi", "right": "İnternette Bırakılan Kalıcı İzler", "leftIcon": "fa-solid fa-shoe-prints"}
        ],
        "tfQuestions": [
            {
                "statement": "İnternette paylaştığımız fotoğraf ve yorumlar dijital ayak izimizi oluşturur.",
                "isCorrect": True,
                "explanation": "Doğru! İnternetteki tüm aktiviteler dijital ayak izimizi oluşturur."
            },
            {
                "statement": "e-Devlet şifremizi güvenliğimiz için tüm arkadaşlarımızla paylaşmalıyız.",
                "isCorrect": False,
                "explanation": "Yanlış! e-Devlet ve kişisel şifreler asla kimseyle paylaşılmamalıdır."
            },
            {
                "statement": "EBA (Eğitim Bilişim Ağı) MEB'in resmi eğitim portalıdır.",
                "isCorrect": True,
                "explanation": "Doğru! EBA öğrencilere zengin ders içerikleri sunar."
            }
        ],
        "mcQuestions": [
            {
                "q": "Öğrencilerin sınav notlarını ve devamsızlıklarını takip ettiği sistem hangisidir?",
                "options": ["e-Okul", "e-Devlet", "EBA", "e-Nabız"],
                "answer": 0,
                "explanation": "Sınav notları ve devamsızlık bilgileri e-Okul sisteminden görüntülenir."
            },
            {
                "q": "İnternette yaptığımız aramalar ve paylaşımların oluşturduğu kalıcı geçmişe ne ad verilir?",
                "options": ["Dijital Ayak İzi", "Klavye İzi", "Ekran Kaydı", "Mouse Hareketi"],
                "answer": 0,
                "explanation": "İnternetteki kalıcı geçmiş ve bıraktığımız izler 'Dijital Ayak İzi' olarak adlandırılır."
            }
        ],
        "wheelQuiz": [
            {"question": "Devlet işlemlerini internetten yaptığımız kapı hangisidir?", "options": ["e-Devlet", "e-Okul", "e-Market", "e-Oyun"], "answer": 0, "points": 100},
            {"question": "Hangisi dijital ayak izini olumlu tutmanın kuralıdır?", "options": ["Kibar ve saygılı olmak", "Hakaret etmek", "Yalan haber yaymak", "Şifre dağıtmak"], "answer": 0, "points": 150},
            {"question": "EBA'nın açılımı nedir?", "options": ["Eğitim Bilişim Ağı", "Evde Bilgisayar Ağı", "Elektronik Bilgi Alanı", "Eğlenceli Bilişim Akademisi"], "answer": 0, "points": 200}
        ],
        "matchCards": [
            {"id": 1, "text": "e-Devlet", "category": "Resmi Kamu", "icon": "fa-solid fa-landmark"},
            {"id": 2, "text": "e-Okul", "category": "Öğrenci Notları", "icon": "fa-solid fa-graduation-cap"},
            {"id": 3, "text": "EBA", "category": "Ders Portalı", "icon": "fa-solid fa-book"},
            {"id": 4, "text": "Dijital Ayak İzi", "category": "Kalıcı İz", "icon": "fa-solid fa-shoe-prints"}
        ],
        "reflexStatements": [
            {"text": "İnternette paylaştığımız bir şey tamamen silinmeyebilir.", "correct": True},
            {"text": "Dijital vatandaş internette başkalarına hakaret edebilir.", "correct": False},
            {"text": "e-Devlet sayesinde devlet dairelerinde sıra beklemeden işlem yapılır.", "correct": True},
            {"text": "Telif hakkı olan bir filmi korsan indirmek suçtur.", "correct": True}
        ],
        "duelQuestions": [
            {"q": "Notlarımızı hangi sistemden öğreniriz?", "options": ["e-Okul", "e-Devlet", "e-Nabız", "EBA"], "answer": 0},
            {"q": "Hangisi iyi bir dijital vatandaşın özelliğidir?", "options": ["Telif haklarına saygılı olmak", "Şifre çalmak", "Virüs yaymak", "Siber zorbalık"], "answer": 0}
        ]
    }
}

def generate_week_file(week_num, data):
    """Bireysel hafta JS dosyasını yüksek kalitede üretir"""
    title = data["title"]
    theme = data["theme"]
    goals = data.get("goals", [
        f"{title} konusundaki temel kavramları açıklayabileceğim.",
        "Öğrendiğim bilgileri günlük yaşamda uygulayabileceğim.",
        "Soru ve etkinlikleri başarıyla tamamlayabileceğim.",
        "Sınıf oyunlarında yüksek puanlar toplayabileceğim."
    ])

    slides_js = json.dumps(data["slides"], ensure_ascii=False, indent=8)
    matching_pairs = json.dumps(data.get("matching", []), ensure_ascii=False, indent=8)
    tf_items = json.dumps(data.get("tfQuestions", []), ensure_ascii=False, indent=8)
    mc_questions = json.dumps(data.get("mcQuestions", []), ensure_ascii=False, indent=8)
    wheel_quiz = json.dumps(data.get("wheelQuiz", []), ensure_ascii=False, indent=8)
    match_cards = json.dumps(data.get("matchCards", []), ensure_ascii=False, indent=8)
    reflex_stmts = json.dumps(data.get("reflexStatements", []), ensure_ascii=False, indent=8)
    duel_qs = json.dumps(data.get("duelQuestions", []), ensure_ascii=False, indent=8)

    file_content = f"""// ==========================================
// {week_num}. Hafta: {title}
// Tam İnteraktif Ders Materyalleri ve Oyun Veritabanı
// Hazırlayan: Öğretmen Bozok
// ==========================================

window.WEEK{week_num}_CONTENT = {{
    weekInfo: {{
        weekNumber: {week_num},
        title: "{title}",
        theme: "{theme}",
        learningGoals: {json.dumps(goals, ensure_ascii=False, indent=12)}
    }},

    // 🖥️ 1. İNTERAKTİF DERS SUNUSU
    slides: {slides_js},

    // ❓ 2. PEKİŞTİRME SORULARI & ETKİNLİKLER
    questions: [
        {{
            id: 1,
            type: "matching",
            title: "Kavram Eşleştirme Etkinliği",
            pairs: {matching_pairs}
        }},
        {{
            id: 2,
            type: "true_false",
            title: "Doğru / Yanlış Pekiştirme Etkinliği",
            items: {tf_items}
        }},
        {{
            id: 3,
            type: "multiple_choice",
            title: "Çoktan Seçmeli Değerlendirme Testi",
            questions: {mc_questions}
        }}
    ],

    // 🎮 3. SINIF OYUNLARI VERİ SETLERİ
    gameData: {{
        wheelQuiz: {wheel_quiz},
        matchCards: {match_cards},
        reflexStatements: {reflex_stmts},
        duelQuestions: {duel_qs}
    }}
}};
"""
    return file_content

print("Template builder loaded successfully!")
