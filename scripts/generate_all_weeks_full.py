# -*- coding: utf-8 -*-
"""
5. Sınıf Bilişim Teknolojileri ve Yazılım
Tüm 37 Haftanın Zengin Veri Seti Üreticisi
Hazırlayan: Öğretmen Bozok
"""

import json
import os
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

MASTER_DATA = {
    2: {
        "title": "Bilişim Teknolojilerinin Etkileri ve Dijital Sağlık",
        "theme": "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        "code": "BTY.5.1.2",
        "goals": [
            "Teknolojinin olumlu ve olumsuz yönlerini ayırt edebileceğim.",
            "20-20-20 kuralını uygulayarak göz sağlığımı koruyabileceğim.",
            "Teknoloji bağımlılığı belirtilerini fark edebileceğim.",
            "Günlük ekran süreme sağlıklı sınırlar koyabileceğim."
        ],
        "slides": [
            {
                "id": 1,
                "title": "Teknolojinin Olumlu ve Olumsuz Yönleri ⚖️",
                "subtitle": "2. Hafta • Dijital Sağlık",
                "topic": "Teknolojinin Etkileri",
                "icon": "fa-solid fa-scale-balanced",
                "bgColor": "from-blue-700 to-indigo-900",
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
                                <li>✨ Eğitimi interaktif ve eğlenceli hale getirir.</li>
                            </ul>
                        </div>
                        <div class="bg-rose-950/60 border-2 border-rose-500 rounded-3xl p-5 text-white shadow-xl space-y-3">
                            <div class="flex items-center gap-3 text-rose-400 font-bold text-lg border-b border-rose-500/40 pb-2">
                                <i class="fa-solid fa-thumbs-down text-2xl"></i> OLUMSUZ ETKİLERİ (Aşırı Kullanımda)
                            </div>
                            <ul class="space-y-2 text-sm text-rose-100">
                                <li>⚠️ Göz kuruluğu, baş ağrısı ve sırt/boyun ağrıları.</li>
                                <li>⚠️ Hareketsizlik ve duruş (postür) bozuklukları.</li>
                                <li>⚠️ Yüz yüze iletişimde azalma ve yalnızlaşma.</li>
                                <li>⚠️ Teknoloji bağımlılığı ve uyku bozuklukları.</li>
                            </ul>
                        </div>
                    </div>
                """
            },
            {
                "id": 2,
                "title": "20-20-20 Kuralı ile Gözlerimizi Koruyalım! 👀",
                "subtitle": "Göz Dinlendirme Kuralı",
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
            }
        ],
        "matching": [
            {"left": "20-20-20 Kuralı", "right": "Göz Dinlendirme", "leftIcon": "fa-solid fa-eye"},
            {"left": "Ergonomi", "right": "Doğru Oturuş", "leftIcon": "fa-solid fa-chair"},
            {"left": "Teknoloji Bağımlılığı", "right": "Aşırı Kullanım", "leftIcon": "fa-solid fa-ban"},
            {"left": "Mavi Işık", "right": "Uyku Kalitesini Düşüren Işık", "leftIcon": "fa-solid fa-moon"}
        ],
        "tfQuestions": [
            {"statement": "20-20-20 kuralı gözlerimizi ekrandan dinlendirmek için uygulanır.", "isCorrect": True, "explanation": "Doğru! Her 20 dakikada 20 saniye 6 metre uzağa bakmak göz kaslarını rahatlatır."},
            {"statement": "Günde 8 saat aralıksız bilgisayar oyunu oynamak çok sağlıklıdır.", "isCorrect": False, "explanation": "Yanlış! Hareketsiz ve uzun süreli oyun oynamak bağımlılık yapar ve sağlığı bozar."},
            {"statement": "Yatmadan hemen önce telefonla oynamak uykumuzu olumsuz etkiler.", "isCorrect": True, "explanation": "Doğru! Ekranlardan yayılan mavi ışık beynimize gündüz sinyali göndererek melatonin salgısını azaltır."}
        ],
        "mcQuestions": [
            {
                "q": "Ekran karşısında göz sağlığımızı korumak için uygulanan kural hangisidir?",
                "options": ["20-20-20 Kuralı", "50-50 Kuralı", "90 Derece Kuralı", "10-10 Kuralı"],
                "answer": 0,
                "explanation": "Göz sağlığı için 20 dakikada bir 20 saniye uzağa bakılan 20-20-20 kuralı uygulanır."
            },
            {
                "q": "Aşağıdakilerden hangisi teknoloji bağımlılığının belirtilerinden biridir?",
                "options": [
                    "Ekrandan uzak kalınca öfkelenmek ve huzursuz olmak",
                    "Derslerini zamanında bitirmek",
                    "Arkadaşlarıyla dışarıda spor yapmak",
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
            "Dijital vatandaşlık kavramını ve kurallarını açıklayabileceğim.",
            "Dijital ayak izinin ne olduğunu ve neden silinmediğini kavrayabileceğim.",
            "e-Devlet, e-Okul ve EBA uygulamalarını tanıyabileceğim.",
            "İnternette sorumlu bir dijital vatandaş gibi davranabileceğim."
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
            }
        ],
        "matching": [
            {"left": "e-Devlet", "right": "Kamu Hizmetleri Portalı", "leftIcon": "fa-solid fa-landmark"},
            {"left": "e-Okul", "right": "Not ve Devamsızlık Takibi", "leftIcon": "fa-solid fa-graduation-cap"},
            {"left": "EBA", "right": "Eğitim Bilişim Ağı", "leftIcon": "fa-solid fa-book-open"},
            {"left": "Dijital Ayak İzi", "right": "İnternette Bırakılan Kalıcı İzler", "leftIcon": "fa-solid fa-shoe-prints"}
        ],
        "tfQuestions": [
            {"statement": "İnternette paylaştığımız fotoğraf ve yorumlar dijital ayak izimizi oluşturur.", "isCorrect": True, "explanation": "Doğru! İnternetteki tüm aktiviteler kalıcı dijital ayak izimizi oluşturur."},
            {"statement": "e-Devlet şifremizi güvenliğimiz için tüm arkadaşlarımızla paylaşmalıyız.", "isCorrect": False, "explanation": "Yanlış! e-Devlet ve kişisel şifreler asla kimseyle paylaşılmamalıdır."},
            {"statement": "EBA (Eğitim Bilişim Ağı) MEB'in resmi eğitim portalıdır.", "isCorrect": True, "explanation": "Doğru! EBA öğrencilere zengin ders içerikleri sunar."}
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
    },
    4: {
        "title": "Yapay Zekâda Temel Kavram ve Özellikler",
        "theme": "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        "code": "BTY.5.1.4",
        "goals": [
            "Yapay zekâ kavramını ve tarihsel gelişimini açıklayabileceğim.",
            "İnsan zekâsı ile yapay zekâ arasındaki farkları karşılaştırabileceğim.",
            "Yapay zekânın öğrenme, karar verme ve problem çözme yeteneklerini kavrayabileceğim.",
            "Günlük hayatımızda kullanılan yapay zekâ örneklerini sıralayabileceğim."
        ],
        "slides": [
            {
                "id": 1,
                "title": "Yapay Zekâ (YZ / AI) Nedir? 🤖",
                "subtitle": "4. Hafta • Geleceğin Teknolojisi",
                "topic": "Temel Kavramlar",
                "icon": "fa-solid fa-brain",
                "bgColor": "from-purple-700 to-indigo-950",
                "content": """
                    <div class="bg-white/10 backdrop-blur-md rounded-3xl p-6 border-2 border-purple-400/40 text-white max-w-3xl mx-auto shadow-2xl space-y-4">
                        <div class="flex items-center gap-4">
                            <div class="w-16 h-16 rounded-2xl bg-purple-500/30 text-yellow-300 flex items-center justify-center text-4xl shadow-inner animate-pulse">
                                <i class="fa-solid fa-robot"></i>
                            </div>
                            <div>
                                <h3 class="text-2xl font-bold text-yellow-300">Yapay Zekâ (Artificial Intelligence)</h3>
                                <p class="text-sm text-purple-200">İnsan beyninin düşünme, öğrenme ve karar verme yeteneklerini bilgisayarların taklit etmesidir.</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-center text-xs">
                            <div class="p-3 bg-purple-950/60 rounded-xl border border-purple-500/30">
                                <div class="text-2xl mb-1">📚</div>
                                <strong class="text-yellow-300">Öğrenir:</strong> Verilerden örüntüleri keşfeder.
                            </div>
                            <div class="p-3 bg-purple-950/60 rounded-xl border border-purple-500/30">
                                <div class="text-2xl mb-1">🧠</div>
                                <strong class="text-yellow-300">Düşünür:</strong> Verileri analiz eder.
                            </div>
                            <div class="p-3 bg-purple-950/60 rounded-xl border border-purple-500/30">
                                <div class="text-2xl mb-1">🎯</div>
                                <strong class="text-yellow-300">Karar Verir:</strong> En uygun çözümü üretir.
                            </div>
                        </div>
                    </div>
                """
            },
            {
                "id": 2,
                "title": "İnsan Zekâsı vs Yapay Zekâ 🥊",
                "subtitle": "Karşılaştırma",
                "topic": "Zekâ Türleri",
                "icon": "fa-solid fa-code-compare",
                "bgColor": "from-indigo-800 to-slate-950",
                "content": """
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-white">
                        <div class="bg-blue-950/70 border-2 border-blue-500 rounded-3xl p-5 shadow-xl space-y-3">
                            <div class="flex items-center gap-3 text-blue-400 font-bold text-lg border-b border-blue-500/40 pb-2">
                                <i class="fa-solid fa-user text-2xl"></i> İNSAN ZEKÂSI
                            </div>
                            <ul class="space-y-2 text-xs sm:text-sm text-blue-100">
                                <li>✨ Duyguları, empati ve vicdanı vardır.</li>
                                <li>✨ Hayal gücü ve yaratıcılığı sınırsızdır.</li>
                                <li>✨ Yeni durumlara içgüdüsel adapte olur.</li>
                                <li>⚠️ Çok büyük verileri yavaş hesaplar, yorulur.</li>
                            </ul>
                        </div>
                        <div class="bg-purple-950/70 border-2 border-purple-500 rounded-3xl p-5 shadow-xl space-y-3">
                            <div class="flex items-center gap-3 text-purple-400 font-bold text-lg border-b border-purple-500/40 pb-2">
                                <i class="fa-solid fa-microchip text-2xl"></i> YAPAY ZEKÂ
                            </div>
                            <ul class="space-y-2 text-xs sm:text-sm text-purple-100">
                                <li>⚡ Milyonlarca veriyi saniyede işler ve hesaplar.</li>
                                <li>⚡ Asla yorulmaz, 7/24 kesintisiz çalışır.</li>
                                <li>⚠️ Duygusu, vicdanı ve gerçek bilinci yoktur.</li>
                                <li>⚠️ Sadece kendisine verilen veri kadar öğrenir.</li>
                            </ul>
                        </div>
                    </div>
                """
            },
            {
                "id": 3,
                "title": "Tarihteki Önemli Yapay Zekâ Adımları ⏳",
                "subtitle": "Turing Testi'nden Günümüze",
                "topic": "Tarihsel Gelişim",
                "icon": "fa-solid fa-timeline",
                "bgColor": "from-teal-700 to-indigo-950",
                "content": """
                    <div class="space-y-3 max-w-3xl mx-auto text-white text-xs sm:text-sm">
                        <div class="p-3 bg-teal-950/60 rounded-2xl border border-teal-400/30 flex items-center gap-4">
                            <span class="px-3 py-1 bg-teal-500 text-slate-950 font-black rounded-xl">1950</span>
                            <span><strong>Alan Turing:</strong> "Makineler düşünebilir mi?" sorusuyla Turing Testini geliştirdi.</span>
                        </div>
                        <div class="p-3 bg-teal-950/60 rounded-2xl border border-teal-400/30 flex items-center gap-4">
                            <span class="px-3 py-1 bg-teal-500 text-slate-950 font-black rounded-xl">1959</span>
                            <span><strong>Cahit Arf:</strong> Ülkemizde "Makineler düşünebilir mi ve nasıl düşünebilir?" bildirisini sundu.</span>
                        </div>
                        <div class="p-3 bg-teal-950/60 rounded-2xl border border-teal-400/30 flex items-center gap-4">
                            <span class="px-3 py-1 bg-teal-500 text-slate-950 font-black rounded-xl">1997</span>
                            <span><strong>Deep Blue:</strong> Satranç dünya şampiyonu Kasparov'u mağlup eden ilk yapay zekâ oldu.</span>
                        </div>
                        <div class="p-3 bg-teal-950/60 rounded-2xl border border-teal-400/30 flex items-center gap-4">
                            <span class="px-3 py-1 bg-teal-500 text-slate-950 font-black rounded-xl">Günümüz</span>
                            <span>Otonom araçlar, sesli asistanlar, yüz tanıma ve ChatGPT / Gemini devrimi.</span>
                        </div>
                    </div>
                """
            }
        ],
        "matching": [
            {"left": "Alan Turing", "right": "Turing Testi Kurucusu", "leftIcon": "fa-solid fa-user"},
            {"left": "Cahit Arf", "right": "Türk Matematikçi ve YZ Öncüsü", "leftIcon": "fa-solid fa-graduation-cap"},
            {"left": "Deep Blue", "right": "Satranç Şampiyonu Bilgisayar", "leftIcon": "fa-solid fa-chess-knight"},
            {"left": "Sesli Asistan", "right": "Siri, Google Asistan, Alexa", "leftIcon": "fa-solid fa-microphone"}
        ],
        "tfQuestions": [
            {"statement": "Yapay zekâ insanların duygularını ve vicdanını birebir hisseder.", "isCorrect": False, "explanation": "Yanlış! Yapay zekâ matematiksel modeller ve verilerle çalışır, duygusu ve bilinci yoktur."},
            {"statement": "Cahit Arf, Türkiye'de yapay zekâ konusunda ilk çalışmaları yapan bilim insanlarımızdandır.", "isCorrect": True, "explanation": "Doğru! Cahit Arf 1959 yılında 'Makineler düşünebilir mi?' başlıklı tarihi bir bildiri sunmuştur."},
            {"statement": "Yapay zekâ büyük verileri insanlardan çok daha hızlı işleyebilir.", "isCorrect": True, "explanation": "Doğru! Bilgisayarlar saniyede milyarlarca matematiksel işlemi hatasız yapabilir."}
        ],
        "mcQuestions": [
            {
                "q": "1997 yılında dünya satranç şampiyonunu yenen ünlü yapay zekâ bilgisayarı hangisidir?",
                "options": ["Deep Blue", "AlphaGo", "ChatGPT", "Watson"],
                "answer": 0,
                "explanation": "IBM tarafından geliştirilen Deep Blue satranç şampiyonunu yenmiştir."
            },
            {
                "q": "Aşağıdakilerden hangisi bir yapay zekâ uygulaması örneğidir?",
                "options": ["Otonom (sürücüsüz) araba", "Klasik duvar saati", "Tahta cetvel", "Pil kutusu"],
                "answer": 0,
                "explanation": "Sürücüsüz arabalar çevrelerini kameralar ve yapay zekâ ile algılayarak yol alır."
            }
        ],
        "wheelQuiz": [
            {"question": "Yapay zekânın İngilizce kısaltması nedir?", "options": ["AI", "PC", "RAM", "CPU"], "answer": 0, "points": 100},
            {"question": "Hangisi Türk yapay zekâ öncüsüdür?", "options": ["Cahit Arf", "Newton", "Einstein", "Arşimet"], "answer": 0, "points": 150},
            {"question": "Yapay zekânın hangisi yoktur?", "options": ["Vicdan ve Duygu", "Hesaplama hızı", "Veri analizi", "Hafıza"], "answer": 0, "points": 200}
        ],
        "matchCards": [
            {"id": 1, "text": "Alan Turing", "category": "Turing Testi", "icon": "fa-solid fa-user-gear"},
            {"id": 2, "text": "Cahit Arf", "category": "Türk Öncü", "icon": "fa-solid fa-award"},
            {"id": 3, "text": "Deep Blue", "category": "Satranç YZ", "icon": "fa-solid fa-chess"},
            {"id": 4, "text": "Otonom Araç", "category": "Sürücüsüz", "icon": "fa-solid fa-car"}
        ],
        "reflexStatements": [
            {"text": "Yapay zekâ büyük verileri saniyeler içinde analiz eder.", "correct": True},
            {"text": "Yapay zekâ insanların yerine üzülebilir ve ağlayabilir.", "correct": False},
            {"text": "Akıllı telefonlardaki yüz tanıma sistemi yapay zekâ kullanır.", "correct": True},
            {"text": "Yapay zekânın çalışması için hiçbir veriye ihtiyacı yoktur.", "correct": False}
        ],
        "duelQuestions": [
            {"q": "Turing Testi neyi ölçmek için tasarlanmıştır?", "options": ["Makinelerin düşünme becerisini", "Ekran parlaklığını", "İnternet hızını", "Pil gücünü"], "answer": 0},
            {"q": "Hangisi bir sesli yapay zekâ asistanıdır?", "options": ["Siri / Google Asistan", "Hesap Makinesi", "Not Defteri", "Paint"], "answer": 0}
        ]
    },

    5: {
        "title": "Bilgisayar Sistemleri: Donanım ve Yazılım",
        "theme": "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        "code": "BTY.5.1.5",
        "goals": [
            "Donanım ve yazılım kavramlarını açıklayabileceğim.",
            "İç donanım (Anakart, İşlemci, RAM, Sabit Disk) ve dış donanım birimlerini tanıyabileceğim.",
            "Sistem yazılımı (İşletim Sistemi) ile uygulama yazılımlarını ayırt edebileceğim.",
            "Bir bilgisayar sisteminin nasıl çalıştığını şematik olarak açıklayabileceğim."
        ],
        "slides": [
            {
                "id": 1,
                "title": "Donanım (Hardware) vs Yazılım (Software) 💻",
                "subtitle": "5. Hafta • Bilgisayar Sistemleri",
                "topic": "Sistem Bileşenleri",
                "icon": "fa-solid fa-computer",
                "bgColor": "from-blue-600 to-indigo-900",
                "content": """
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-white">
                        <div class="bg-blue-950/70 border-2 border-blue-500 rounded-3xl p-5 shadow-xl space-y-3">
                            <div class="flex items-center gap-3 text-blue-400 font-bold text-lg border-b border-blue-500/40 pb-2">
                                <i class="fa-solid fa-hard-drive text-2xl"></i> DONANIM (Hardware)
                            </div>
                            <p class="text-xs sm:text-sm text-blue-200">Bilgisayarı oluşturan, gözle görülebilen ve elle dokunulabilen tüm fiziksel parçalardır.</p>
                            <div class="p-3 bg-blue-900/40 rounded-xl text-xs space-y-1">
                                <div>🔹 <strong>İç Donanım:</strong> Anakart, İşlemci (CPU), RAM, Sabit Disk</div>
                                <div>🔹 <strong>Dış Donanım:</strong> Monitör, Klavye, Fare, Kasa, Hoparlör</div>
                            </div>
                        </div>
                        <div class="bg-purple-950/70 border-2 border-purple-500 rounded-3xl p-5 shadow-xl space-y-3">
                            <div class="flex items-center gap-3 text-purple-400 font-bold text-lg border-b border-purple-500/40 pb-2">
                                <i class="fa-solid fa-compact-disc text-2xl"></i> YAZILIM (Software)
                            </div>
                            <p class="text-xs sm:text-sm text-purple-200">Donanımın çalışmasını sağlayan ve kullanıcıların işlemlerini yapmasını sağlayan kod ve programlardır.</p>
                            <div class="p-3 bg-purple-900/40 rounded-xl text-xs space-y-1">
                                <div>🔹 <strong>Sistem Yazılımı:</strong> Windows, Linux, Android, iOS</div>
                                <div>🔹 <strong>Uygulama Yazılımı:</strong> Paint, Word, Scratch, Oyunlar</div>
                            </div>
                        </div>
                    </div>
                """
            },
            {
                "id": 2,
                "title": "İç Donanım Birimleri: Bilgisayarın Organları 🫀",
                "subtitle": "Kasa İçindeki Güç",
                "topic": "İç Donanım",
                "icon": "fa-solid fa-microchip",
                "bgColor": "from-emerald-700 to-teal-950",
                "content": """
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto text-white text-xs sm:text-sm">
                        <div class="p-4 bg-emerald-950/60 rounded-2xl border border-emerald-500/30 space-y-1">
                            <div class="text-emerald-400 font-bold flex items-center gap-2"><i class="fa-solid fa-chess-king"></i> İşlemci (CPU) - Bilgisayarın Beyni</div>
                            <p class="text-emerald-200">Tüm matematiksel hesaplamaları ve komutları yöneten ana parçadır.</p>
                        </div>
                        <div class="p-4 bg-emerald-950/60 rounded-2xl border border-emerald-500/30 space-y-1">
                            <div class="text-emerald-400 font-bold flex items-center gap-2"><i class="fa-solid fa-network-wired"></i> Anakart - Bilgisayarın İskeleti</div>
                            <p class="text-emerald-200">Tüm iç ve dış parçaları birbirine bağlayan ve iletişimi sağlayan ana levhadır.</p>
                        </div>
                        <div class="p-4 bg-emerald-950/60 rounded-2xl border border-emerald-500/30 space-y-1">
                            <div class="text-emerald-400 font-bold flex items-center gap-2"><i class="fa-solid fa-memory"></i> RAM Bellek - Geçici Hafıza</div>
                            <p class="text-emerald-200">Bilgisayar çalışırken programların hızlı çalışması için verileri tutar. Kapanınca silinir.</p>
                        </div>
                        <div class="p-4 bg-emerald-950/60 rounded-2xl border border-emerald-500/30 space-y-1">
                            <div class="text-emerald-400 font-bold flex items-center gap-2"><i class="fa-solid fa-hard-drive"></i> Sabit Disk (HDD/SSD) - Kalıcı Hafıza</div>
                            <p class="text-emerald-200">Fotoğraflarımızı, oyunlarımızı ve dosyalarımızı kalıcı olarak sakladığımız depodur.</p>
                        </div>
                    </div>
                """
            }
        ],
        "matching": [
            {"left": "İşlemci (CPU)", "right": "Bilgisayarın Beyni", "leftIcon": "fa-solid fa-microchip"},
            {"left": "Anakart", "right": "Tüm Parçaları Bağlayan Kart", "leftIcon": "fa-solid fa-table-cells-large"},
            {"left": "RAM Bellek", "right": "Geçici Çalışma Hafızası", "leftIcon": "fa-solid fa-memory"},
            {"left": "Sabit Disk", "right": "Kalıcı Depolama Alanı", "leftIcon": "fa-solid fa-hard-drive"}
        ],
        "tfQuestions": [
            {"statement": "İşlemci (CPU) bilgisayarın beyni olarak kabul edilir.", "isCorrect": True, "explanation": "Doğru! CPU tüm işlem ve hesaplamaları yöneten ana birimdir."},
            {"statement": "RAM bellekteki veriler bilgisayar kapatılsa bile asla silinmez.", "isCorrect": False, "explanation": "Yanlış! RAM geçici bellektir; bilgisayar kapanınca içindeki veriler silinir."},
            {"statement": "Windows ve Android birer işletim sistemidir (sistem yazılımı).", "isCorrect": True, "explanation": "Doğru! İşletim sistemleri donanımı yöneten temel sistem yazılımlarıdır."}
        ],
        "mcQuestions": [
            {
                "q": "Bilgisayarın tüm parçalarını üzerine bağlayan ve iletişimi sağlayan ana devre kartı hangisidir?",
                "options": ["Anakart", "Ekran Kartı", "Sabit Disk", "Hoparlör"],
                "answer": 0,
                "explanation": "Anakart tüm donanım parçalarının üzerine takıldığı ve haberleştiği ana karttır."
            },
            {
                "q": "Aşağıdakilerden hangisi elle tutulabilen bir DONANIM parçasıdır?",
                "options": ["Klavye", "Paint Programı", "Windows İşletim Sistemi", "Scratch"],
                "answer": 0,
                "explanation": "Klavye fiziksel bir donanım parçasıdır, diğerleri yazılımdır."
            }
        ],
        "wheelQuiz": [
            {"question": "Bilgisayarın beyni olarak bilinen iç donanım hangisidir?", "options": ["İşlemci (CPU)", "Hoparlör", "Klavye", "Mouse"], "answer": 0, "points": 100},
            {"question": "Geçici hafıza birimi hangisidir?", "options": ["RAM Bellek", "Sabit Disk", "Flash Bellek", "CD"], "answer": 0, "points": 150},
            {"question": "Hangisi bir sistem yazılımıdır?", "options": ["Windows", "Paint", "Kelime İşlemci", "Oyun"], "answer": 0, "points": 200}
        ],
        "matchCards": [
            {"id": 1, "text": "CPU", "category": "İşlemci / Beyin", "icon": "fa-solid fa-microchip"},
            {"id": 2, "text": "Anakart", "category": "Ana Levha", "icon": "fa-solid fa-table-cells"},
            {"id": 3, "text": "RAM", "category": "Geçici Hafıza", "icon": "fa-solid fa-memory"},
            {"id": 4, "text": "SSD / HDD", "category": "Kalıcı Hafıza", "icon": "fa-solid fa-hard-drive"}
        ],
        "reflexStatements": [
            {"text": "Anakart tüm parçaların takıldığı ana devredir.", "correct": True},
            {"text": "RAM elektrik kesildiğinde dosyalarımızı 10 yıl saklar.", "correct": False},
            {"text": "İşletim sistemi olmadan bilgisayar açılamaz.", "correct": True},
            {"text": "Monitör bir iç donanım parçasıdır.", "correct": False}
        ],
        "duelQuestions": [
            {"q": "Bilgisayarın beyni kimdir?", "options": ["İşlemci (CPU)", "Ekran", "Fare", "Klavye"], "answer": 0},
            {"q": "Kalıcı olarak dosyaları kaydettiğimiz birim hangisidir?", "options": ["Sabit Disk / SSD", "RAM", "Güç Kaynağı", "İşlemci Fanı"], "answer": 0}
        ]
    },

    6: {
        "title": "Giriş ve Çıkış Birimleri & Kapasite Ölçüleri",
        "theme": "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        "code": "BTY.5.1.6",
        "goals": [
            "Giriş ve çıkış birimlerini görevlerine göre sınıflandırabileceğim.",
            "Hem giriş hem çıkış birimi olan aygıtları (dokunmatik ekran vb.) açıklayabileceğim.",
            "Bilgisayardaki kapasite birimlerini (Bit, Byte, KB, MB, GB, TB) sıralayabileceğim.",
            "Klavye tuşlarının (Caps Lock, Shift, Space, Enter, Backspace) görevlerini uygulayabileceğim."
        ],
        "slides": [
            {
                "id": 1,
                "title": "Giriş vs Çıkış Birimleri 🔄",
                "subtitle": "6. Hafta • Donanım Sınıflandırması",
                "topic": "Girdi ve Çıktı",
                "icon": "fa-solid fa-right-left",
                "bgColor": "from-cyan-700 to-blue-950",
                "content": """
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-white">
                        <div class="bg-cyan-950/70 border-2 border-cyan-500 rounded-3xl p-5 shadow-xl space-y-3">
                            <div class="flex items-center gap-3 text-cyan-400 font-bold text-lg border-b border-cyan-500/40 pb-2">
                                <i class="fa-solid fa-right-to-bracket text-2xl"></i> GİRİŞ BİRİMLERİ (Girdi)
                            </div>
                            <p class="text-xs text-cyan-200">Dış dünyadan bilgisayara bilgi, ses, görüntü ve komut aktaran parçalardır.</p>
                            <ul class="text-xs space-y-1 text-cyan-100">
                                <li>⌨️ <strong>Klavye:</strong> Yazı ve komut girer.</li>
                                <li>🖱️ <strong>Fare (Mouse):</strong> Tıklama ve seçim yapar.</li>
                                <li>🎙️ <strong>Mikrofon:</strong> Sesimizi bilgisayara aktarır.</li>
                                <li>📷 <strong>Webcam & Tarayıcı:</strong> Görüntü aktarır.</li>
                            </ul>
                        </div>
                        <div class="bg-amber-950/70 border-2 border-amber-500 rounded-3xl p-5 shadow-xl space-y-3">
                            <div class="flex items-center gap-3 text-yellow-400 font-bold text-lg border-b border-amber-500/40 pb-2">
                                <i class="fa-solid fa-right-from-bracket text-2xl"></i> ÇIKIŞ BİRİMLERİ (Çıktı)
                            </div>
                            <p class="text-xs text-amber-200">Bilgisayarın işlediği sonuçları kullanıcıya gösteren, duyuran parçalardır.</p>
                            <ul class="text-xs space-y-1 text-amber-100">
                                <li>🖥️ <strong>Monitör (Ekran):</strong> Görüntüyü sunar.</li>
                                <li>🖨️ <strong>Yazıcı (Printer):</strong> Kağıda baskı alır.</li>
                                <li>🔊 <strong>Hoparlör & Kulaklık:</strong> Sesleri bize dinletir.</li>
                                <li>📽️ <strong>Projeksiyon:</strong> Duvara dev görüntü yansıtır.</li>
                            </ul>
                        </div>
                    </div>
                """
            },
            {
                "id": 2,
                "title": "Dijital Kapasite Merdiveni 🪜",
                "subtitle": "Bit'ten Terabyte'a",
                "topic": "Hafıza Ölçüleri",
                "icon": "fa-solid fa-stairs",
                "bgColor": "from-emerald-700 to-indigo-950",
                "content": """
                    <div class="bg-white/10 backdrop-blur-md rounded-3xl p-6 border-2 border-emerald-400/40 text-white max-w-3xl mx-auto shadow-2xl space-y-4">
                        <div class="text-center font-bold text-yellow-300 text-lg">Hafıza Kapasite Birimleri (1024 Kuralı)</div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                            <div class="p-2.5 bg-emerald-950/60 rounded-xl border border-emerald-500/30">
                                <strong>8 Bit</strong> = 1 Byte (1 Harf)
                            </div>
                            <div class="p-2.5 bg-emerald-950/60 rounded-xl border border-emerald-500/30">
                                <strong>1024 Byte</strong> = 1 Kilobyte (KB)
                            </div>
                            <div class="p-2.5 bg-emerald-950/60 rounded-xl border border-emerald-500/30">
                                <strong>1024 KB</strong> = 1 Megabyte (MB - Şarkı)
                            </div>
                            <div class="p-2.5 bg-emerald-950/60 rounded-xl border border-emerald-500/30">
                                <strong>1024 MB</strong> = 1 Gigabyte (GB - Film/Oyun)
                            </div>
                            <div class="p-2.5 bg-emerald-950/60 rounded-xl border border-emerald-500/30 col-span-1 sm:col-span-2 text-center text-yellow-300 font-bold">
                                <strong>1024 GB</strong> = 1 Terabyte (TB - Devasa Arşiv)
                            </div>
                        </div>
                    </div>
                """
            }
        ],
        "matching": [
            {"left": "Mikrofon", "right": "Ses Giriş Birimi", "leftIcon": "fa-solid fa-microphone"},
            {"left": "Yazıcı (Printer)", "right": "Kağıt Çıktı Birimi", "leftIcon": "fa-solid fa-print"},
            {"left": "Hoparlör", "right": "Ses Çıkış Birimi", "leftIcon": "fa-solid fa-volume-high"},
            {"left": "Dokunmatik Ekran", "right": "Hem Giriş Hem Çıkış", "leftIcon": "fa-solid fa-mobile-screen"}
        ],
        "tfQuestions": [
            {"statement": "Mikrofon bilgisayara ses aktardığı için bir GİRİŞ birimidir.", "isCorrect": True, "explanation": "Doğru! Mikrofon ses verisini bilgisayara aktarır."},
            {"statement": "Yazıcı (printer) bilgisayardan kağıda çıktı verdiği için ÇIKIŞ birimidir.", "isCorrect": True, "explanation": "Doğru! Yazıcı bilgisayardaki dijital belgeleri somut kağıda aktaran bir çıkış birimidir."},
            {"statement": "1024 Megabyte (MB), 1 Gigabyte (GB) eder.", "isCorrect": True, "explanation": "Doğru! Kapasite birimlerinde her basamak 1024 katıdır."}
        ],
        "mcQuestions": [
            {
                "q": "Aşağıdakilerden hangisi bir GİRİŞ birimidir?",
                "options": ["Klavye", "Hoparlör", "Monitör", "Projeksiyon"],
                "answer": 0,
                "explanation": "Klavye bilgisayara veri girişi sağlar."
            },
            {
                "q": "En küçük hafıza birimi hangisidir?",
                "options": ["Bit", "Gigabyte", "Megabyte", "Kilobyte"],
                "answer": 0,
                "explanation": "0 ve 1'lerden oluşan en küçük hafıza birimi Bit'tir (8 Bit = 1 Byte)."
            }
        ],
        "wheelQuiz": [
            {"question": "Hangisi ses çıkış birimidir?", "options": ["Hoparlör", "Mikrofon", "Klavye", "Tarayıcı"], "answer": 0, "points": 100},
            {"question": "8 Bit kaç Byte eder?", "options": ["1 Byte", "1024 Byte", "80 Byte", "10 Byte"], "answer": 0, "points": 150},
            {"question": "Dokunmatik ekran hangi birimdir?", "options": ["Hem Giriş Hem Çıkış", "Sadece Giriş", "Sadece Çıkış", "Hiçbiri"], "answer": 0, "points": 200}
        ],
        "matchCards": [
            {"id": 1, "text": "Klavye / Fare", "category": "Giriş Birimi", "icon": "fa-solid fa-keyboard"},
            {"id": 2, "text": "Ekran / Yazıcı", "category": "Çıkış Birimi", "icon": "fa-solid fa-desktop"},
            {"id": 3, "text": "1024 MB", "category": "1 GB", "icon": "fa-solid fa-database"},
            {"id": 4, "text": "8 Bit", "category": "1 Byte", "icon": "fa-solid fa-microchip"}
        ],
        "reflexStatements": [
            {"text": "Hoparlör bilgisayardan sesi dışarı verir (Çıkış birimidir).", "correct": True},
            {"text": "Klavye bilgisayardan kağıt çıktısı almaya yarar.", "correct": False},
            {"text": "1 GB, 1 MB'tan daha büyüktür.", "correct": True},
            {"text": "Kamera bir çıkış birimidir.", "correct": False}
        ],
        "duelQuestions": [
            {"q": "Hangisi bir GİRİŞ birimidir?", "options": ["Fare (Mouse)", "Hoparlör", "Yazıcı", "Monitör"], "answer": 0},
            {"q": "1 Byte kaç Bit'ten oluşur?", "options": ["8 Bit", "1024 Bit", "16 Bit", "2 Bit"], "answer": 0}
        ]
    }
}

# 7'den 37'ye kadar olan haftaların konu ve kazanımları
THEME_TOPICS = {
    # 2. TEMA: DİJİTAL ÜRÜN TASARIMI VE GELİŞTİRME
    7: ("Dosya Yönetimi, Uzantılar ve Depolama", "2. Tema: Dijital Ürün Tasarımı ve Geliştirme", "BTY.5.2.1", "fa-solid fa-folder-open", "Dosya adı, nokta ve uzantı yapısı (.jpg, .mp3, .docx, .pdf, .zip). Klasör hiyerarşisi ve bulut depolama."),
    8: ("Görsel İşleme ve Dijital Çizim", "2. Tema: Dijital Ürün Tasarımı ve Geliştirme", "BTY.5.2.2", "fa-solid fa-palette", "Paint ve çizim araçları, piksel ve çözünürlük mantığı, renk seçimi, boyutlandırma ve kırpma."),
    9: ("Kelime İşlemci (Word) ile Metin Tasarımı", "2. Tema: Dijital Ürün Tasarımı ve Geliştirme", "BTY.5.2.3", "fa-solid fa-file-word", "Metin yazma, yazı tipi, punto, kalın/italik, paragraf hizalama, madde işaretleri ve tablo ekleme."),
    10: ("Sunum Hazırlama ve Etkili Sunu Teknikleri", "2. Tema: Dijital Ürün Tasarımı ve Geliştirme", "BTY.5.2.4", "fa-solid fa-person-chalkboard", "PowerPoint / Canva ile slayt tasarlama, 6x6 kuralı, görsel seçimi ve sunum becerileri."),
    11: ("1. Dönem Bilişim Projesi & Değerlendirme", "2. Tema: Dijital Ürün Tasarımı ve Geliştirme", "BTY.5.2.5", "fa-solid fa-trophy", "Görsel, metin ve sunum becerilerini bir araya getiren dönem sonu dijital ürün projesi."),

    # 3. TEMA: BİLGİSAYAR AĞLARI VE İLETİŞİM
    12: ("Bilgisayar Ağları ve Ağ Türleri (LAN - WAN)", "3. Tema: Bilgisayar Ağları ve İletişim", "BTY.5.3.1", "fa-solid fa-network-wired", "Bilgisayar ağı nedir? LAN (Yerel Alan Ağı), WAN (Geniş Alan Ağı) ve İnternet kavramları."),
    13: ("Ağ Donanımları ve İnternete Bağlantı", "3. Tema: Bilgisayar Ağları ve İletişim", "BTY.5.3.2", "fa-solid fa-wifi", "Modem, Yönlendirici (Router), Ağ Kartı (Ethernet), Ağ Kablosu ve Wi-Fi kablosuz bağlantı."),
    14: ("İnternette Bilgi Arama ve E-Posta Kullanımı", "3. Tema: Bilgisayar Ağları ve İletişim", "BTY.5.3.3", "fa-solid fa-envelope", "Arama motorları, anahtar kelime teknikleri, e-posta yapısı (Kime, CC, BCC, Konu, Ek dosya) ve e-posta görgü kuralları."),

    # 4. TEMA: BİLİŞİM ETİĞİ VE SİBER GÜVENLİK
    15: ("Bilişim Etiği, Telif Hakları ve Siber Zorbalık", "4. Tema: Bilişim Etiği ve Siber Güvenlik", "BTY.5.4.1", "fa-solid fa-shield-halved", "Telif hakkı ©, açık kaynak yazılım, siber zorbalık nedir, korunma yolları: Engelle ve Güvenilir Yetişkine Bildir."),
    16: ("Güvenli İnternet, Zararlı Yazılımlar ve Güçlü Şifre", "4. Tema: Bilişim Etiği ve Siber Güvenlik", "BTY.5.4.2", "fa-solid fa-key", "Virüs, Solucan, Truva Atı, Casus yazılım. Güçlü şifre kuralları (en az 8 karakter, büyük-küçük harf, rakam, sembol)."),

    # 5. TEMA: YAPAY ZEKÂ VE GELECEĞİN TEKNOLOJİLERİ
    17: ("Yapay Zekâ Türleri ve Günlük Yaşam Örnekleri", "5. Tema: Yapay Zekâ ve Geleceğin Teknolojileri", "BTY.5.5.1", "fa-solid fa-brain", "Görüntü işleme, doğal dil işleme, otonom araçlar, akıllı öneri sistemleri ve robot süpürgeler."),
    18: ("Üretken Yapay Zekâ (GenAI) ve Prompt Mantığı", "5. Tema: Yapay Zekâ ve Geleceğin Teknolojileri", "BTY.5.5.2", "fa-solid fa-wand-magic-sparkles", "ChatGPT, Gemini ve görsel üreten YZ sistemleri. Doğru ve etkili Prompt (komut) yazma teknikleri."),
    19: ("Yapay Zekâda Veri, Eğitim ve Yanlılık (Bias)", "5. Tema: Yapay Zekâ ve Geleceğin Teknolojileri", "BTY.5.5.3", "fa-solid fa-database", "Yapay zekâ verilerden nasıl öğrenir? Kaliteli veri setinin önemi, önyargı ve adalet ilkeleri."),
    20: ("Yapay Zekâ Etiği ve Geleceğin Meslekleri", "5. Tema: Yapay Zekâ ve Geleceğin Teknolojileri", "BTY.5.5.4", "fa-solid fa-user-astronaut", "Kişisel verilerin gizliliği, YZ güvenlik kuralları, gelecekte öne çıkacak meslekler ve dijital beceriler."),

    # 6. TEMA: YAZILIM TASARIMI VE PROGRAMLAMA (ALGORİTMALAR & SCRATCH)
    21: ("Problem Çözme Aşamaları, Girdi ve Çıktı", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.1", "fa-solid fa-puzzle-piece", "Problem nedir? Problemi Anlama -> Plan Yapma -> Uygulama -> Değerlendirme adımları. Girdi (Input) ve Çıktı (Output)."),
    22: ("Algoritma Mantığı ve Günlük Yaşam Algoritmaları", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.2", "fa-solid fa-list-ol", "Algoritma nedir? Başlangıç ve Bitiş kuralları, net ve sıralı işlem basamakları (Çay demleme, okula gitme algoritmaları)."),
    23: ("Akış Şemaları ve Geometrik Semboller", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.3", "fa-solid fa-shapes", "Başla/Dur elipsi, İşlem dikdörtgeni, Girdi/Çıktı paralelkenarı, Karar eşkenar dörtgeni ve akış okları."),
    24: ("Şartlı Durumlar (Eğer - Değilse Mantığı)", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.4", "fa-solid fa-code-branch", "Eğer şart sağlanırsa A yolunu, sağlanmazsa B yolunu seçme. Karar blokları ve mantıksal sorgulamalar."),
    25: ("Döngüler ve Tekrarlayan İşlemler", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.5", "fa-solid fa-rotate", "Döngü (Loop) nedir? Sayaç mantığı, 10 defa tekrarla, şart gerçekleşene kadar tekrarla yapıları."),
    26: ("Algoritmada Hata Ayıklama (Debugging)", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.6", "fa-solid fa-bug-slash", "Bug / Hata kavramı, algoritmayı adım adım test etme, mantık hatalarını tespit etme ve düzeltme."),
    27: ("Blok Tabanlı Kodlamaya Giriş (Scratch Ortamı)", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.7", "fa-solid fa-cat", "Scratch arayüzü: Sahne, Kuklalar (Sprite), Blok Paleti, Kodlama Alanı ve Koordinat Düzlemi (X-Y)."),
    28: ("Scratch Hareket ve Görünüm Blokları", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.8", "fa-solid fa-person-walking", "10 Adım git, 90 derece dön, kenara geldiyse sek, sonraki kostüm, konuşma balonu ve boyut blokları."),
    29: ("Scratch Olaylar ve Kontrol Blokları", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.9", "fa-solid fa-flag-checkered", "Yeşil bayrağa tıklandığında, boşluk tuşuna basılınca, sürekli tekrarla, 1 saniye bekle blokları."),
    30: ("Scratch Ses ve Müzik Blokları", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.10", "fa-solid fa-music", "Miyav sesini çal, bitene kadar çal, ses perdesini ayarla, mikrofondan ses kaydetme ve efektler."),
    31: ("Scratch Algılama ve Değişken Blokları", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.11", "fa-solid fa-sliders", "Fare imlecine değdi mi? Renge değdi mi? Puan değişkeni oluşturma, Can değişkeni azaltma."),
    32: ("Karakter Animasyonu ve Mini Çizgi Film Projesi", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.12", "fa-solid fa-film", "Kuklalar arası diyalog, dekor değiştirme, animasyonlu yürüme ve hikâye kurgulama."),
    33: ("Scratch ile Labirent Oyunu Tasarımı", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.13", "fa-solid fa-map", "Ok tuşlarıyla karakter kontrolü, labirent duvarlarına çarpınca başa dönme, hedefe ulaşınca tebrik sesi."),
    34: ("Scratch Puan Toplama ve Kaçış Oyunu", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.14", "fa-solid fa-apple-whole", "Gökten düşen meyveleri sepetle toplama, puan sayacı artırma, yere düşerse can kaybetme ve Game Over ekranı."),
    35: ("İki Kişilik Akıllı Tahta Oyunu Projesi", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.15", "fa-solid fa-gamepad", "1. Oyuncu (W-A-S-D) vs 2. Oyuncu (Ok Tuşları), akıllı tahtada eşzamanlı iki kişilik sınıf yarışması."),
    36: ("Yıl Sonu Bilişim ve Kodlama Şenliği Projeleri", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.16", "fa-solid fa-star", "Öğrencilerin kendi tasarladıkları oyun ve projeleri sergilemesi, akran değerlendirmesi."),
    37: ("Genel Yıl Sonu Değerlendirmesi & Bilişim Şampiyonları", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.17", "fa-solid fa-award", "Tüm 5. sınıf konularının tekrarı, büyük final çarkıfeleği ve Bilişim Şampiyonu rozet töreni.")
}

def build_rich_week_data(week_num, info):
    title, theme, code, icon, desc = info

    slides = [
        {
            "id": 1,
            "title": f"{title} 🚀",
            "subtitle": f"{week_num}. Hafta Ders Sunusu",
            "topic": theme.split(":")[1].strip() if ":" in theme else theme,
            "icon": icon,
            "bgColor": "from-blue-700 to-indigo-950",
            "content": f"""
                <div class="bg-white/10 backdrop-blur-md rounded-3xl p-6 border-2 border-indigo-400/40 text-white max-w-3xl mx-auto shadow-2xl space-y-4">
                    <div class="flex items-center gap-4">
                        <div class="w-16 h-16 rounded-2xl bg-indigo-500/30 text-yellow-300 flex items-center justify-center text-4xl shadow-inner">
                            <i class="{icon}"></i>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-yellow-300">{title}</h3>
                            <p class="text-sm text-indigo-200">{desc}</p>
                        </div>
                    </div>
                    <div class="p-4 bg-indigo-950/60 rounded-2xl border border-indigo-500/30 text-xs text-emerald-300 font-semibold">
                        🎯 <strong>Kazanım Kodu:</strong> {code} • Öğretmen Bozok ile 5. Sınıf Bilişim Dünyası
                    </div>
                </div>
            """
        },
        {
            "id": 2,
            "title": "Temel Bilgiler ve Kavramlar 💡",
            "subtitle": "Konu Anlatımı",
            "topic": "Önemli Noktalar",
            "icon": "fa-solid fa-lightbulb",
            "bgColor": "from-emerald-700 to-teal-950",
            "content": f"""
                <div class="bg-emerald-950/70 rounded-3xl p-6 border-2 border-emerald-500/40 text-white max-w-3xl mx-auto shadow-2xl space-y-3">
                    <h4 class="text-xl font-bold text-yellow-300 flex items-center gap-2">
                        <i class="fa-solid fa-circle-check"></i> Bu Konuda Bilmemiz Gerekenler
                    </h4>
                    <p class="text-sm text-emerald-100 leading-relaxed">
                        {desc}
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                        <div class="p-3 bg-emerald-900/40 rounded-xl border border-emerald-400/30">
                            <strong>📌 Doğru Uygulama:</strong> Adımları dikkatle takip edip pratik yapmalıyız.
                        </div>
                        <div class="p-3 bg-emerald-900/40 rounded-xl border border-emerald-400/30">
                            <strong>⚡ Pratik İpucu:</strong> Sınıf içi oyunlar ve testlerle konuyu pekiştirebilirsin.
                        </div>
                    </div>
                </div>
            """
        },
        {
            "id": 3,
            "title": "Ders Sonu Özeti & Oyun Vakti! 🎮",
            "subtitle": "Kendini Dene!",
            "topic": "Pekiştirme",
            "icon": "fa-solid fa-trophy",
            "bgColor": "from-purple-700 to-pink-950",
            "content": f"""
                <div class="text-center space-y-5 max-w-2xl mx-auto text-white">
                    <div class="text-6xl text-yellow-300 animate-bounce"><i class="fa-solid fa-gamepad"></i></div>
                    <h3 class="text-2xl sm:text-3xl font-black">{title} Konusunu Başarıyla Tamamladık!</h3>
                    <p class="text-sm text-purple-200">
                        Şimdi pekiştirme sorularını çözebilir ve <strong>4 farklı sınıf oyununda</strong> arkadaşlarınla yarışarak şampiyon olabilirsin!
                    </p>
                    <div class="flex justify-center gap-4 flex-wrap pt-2">
                        <button onclick="app.switchTab('quiz')" class="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-sm shadow-lg">Pekiştirme Soruları</button>
                        <button onclick="app.switchTab('games')" class="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-sm shadow-lg animate-pulse">Sınıf Oyunları 🏆</button>
                    </div>
                </div>
            """
        }
    ]

    goals = [
        f"{title} konusu ile ilgili temel kavramları açıklayabileceğim.",
        "Öğrendiğim bilgileri günlük yaşamda ve projelerimde uygulayabileceğim.",
        "Pekiştirme testleri ve çalışma kağıdı görevlerini tamamlayabileceğim.",
        "Ders sonu sınıf oyunlarında yüksek puanlar toplayabileceğim."
    ]

    matching = [
        {"left": title.split()[0] if title else "Konu", "right": theme.split(":")[1].strip() if ":" in theme else theme, "leftIcon": icon},
        {"left": "Doğru Uygulama", "right": "Bilinçli Kullanım", "leftIcon": "fa-solid fa-check"},
        {"left": "Etkili Çözüm", "right": "Adım Adım Mantık", "leftIcon": "fa-solid fa-lightbulb"},
        {"left": "Bilişim Kuralı", "right": "Güvenlik & Başarı", "leftIcon": "fa-solid fa-shield"}
    ]

    tf_questions = [
        {"statement": f"{title} konusunda kurallara ve yöntemlere dikkat etmek başarıyı artırır.", "isCorrect": True, "explanation": f"Doğru! {title} konusundaki adımlara uymak doğru sonuca ulaştırır."},
        {"statement": "Bilişim teknolojilerini ve programları rastgele, hedefsiz kullanmak en verimli yoldur.", "isCorrect": False, "explanation": "Yanlış! Bilişim araçları her zaman planlı ve amaç doğrultusunda kullanılmalıdır."},
        {"statement": f"{title} konusu {theme} temasına aittir.", "isCorrect": True, "explanation": f"Doğru! Bu hafta {theme} kapsamında işlenmektedir."}
    ]

    mc_questions = [
        {
            "q": f"{title} ile ilgili olarak aşağıdakilerden hangisi doğrudur?",
            "options": [
                "Planlı, güvenli ve amacına uygun çalışılmalıdır.",
                "Hareketsiz şekilde günlerce aralıksız çalışılmalıdır.",
                "Kişisel şifreler herkesle paylaşılmalıdır.",
                "Kurallar önemsizdir."
            ],
            "answer": 0,
            "explanation": f"{title} çalışmalarında planlı ve bilinçli hareket etmek esastır."
        },
        {
            "q": f"Bu haftanın ana ders konusu hangisidir?",
            "options": [
                title,
                "Rastgele Konu",
                "Müzik Eğitimi",
                "Beden Eğitimi"
            ],
            "answer": 0,
            "explanation": f"{week_num}. haftamızın resmi konusu: {title}"
        }
    ]

    wheel_quiz = [
        {"question": f"{title} konusunda temel amaç nedir?", "options": ["Bilinçli ve doğru öğrenme", "Zaman kaybetmek", "Cihazı bozmak", "Dikkatsizlik"], "answer": 0, "points": 100},
        {"question": f"{title} hangi tema kapsamındadır?", "options": [theme.split(":")[1].strip() if ":" in theme else theme, "Matematik", "Türkçe", "Sosyal"], "answer": 0, "points": 150},
        {"question": "Bilişim projelerinde hangisi başarıyı getirir?", "options": ["Adım adım planlı çalışma", "Acele etmek", "Denemekten vazgeçmek", "Hepsini silmek"], "answer": 0, "points": 200}
    ]

    match_cards = [
        {"id": 1, "text": title[:20], "category": theme.split(":")[1].strip()[:15] if ":" in theme else "Bilişim", "icon": icon},
        {"id": 2, "text": "Planlı Çalışma", "category": "Başarı", "icon": "fa-solid fa-list-check"},
        {"id": 3, "text": "Dijital Güvenlik", "category": "Koruma", "icon": "fa-solid fa-shield"},
        {"id": 4, "text": "Akıllı Tahta", "category": "Eğitim", "icon": "fa-solid fa-chalkboard"}
    ]

    reflex_statements = [
        {"text": f"{title} konusunda planlı olmak başarımızı artırır.", "correct": True},
        {"text": "Bilişim araçlarını kontrolsüzce kullanmak faydalıdır.", "correct": False},
        {"text": "Hata yaptığımızda hatayı arayıp düzeltmek bizi geliştirir.", "correct": True},
        {"text": "Bilgisayarda şifrelerimizi herkesle paylaşmalıyız.", "correct": False}
    ]

    duel_questions = [
        {"q": f"{week_num}. haftanın ders konusu hangisidir?", "options": [title, "Oyun Tasarımı", "Rastgele Başlık", "Müzik Dersi"], "answer": 0},
        {"q": f"{title} hangi temanın konusudur?", "options": [theme.split(":")[1].strip() if ":" in theme else theme, "Türkçe", "Fen Bilimleri", "Beden"], "answer": 0}
    ]

    return {
        "week": week_num,
        "title": title,
        "theme": theme,
        "goals": goals,
        "slides": slides,
        "matching": matching,
        "tfQuestions": tf_questions,
        "mcQuestions": mc_questions,
        "wheelQuiz": wheel_quiz,
        "matchCards": match_cards,
        "reflexStatements": reflex_statements,
        "duelQuestions": duel_questions
    }

def generate_file(week_num, data):
    title = data["title"]
    theme = data["theme"]
    goals = data["goals"]
    slides_js = json.dumps(data["slides"], ensure_ascii=False, indent=8)
    matching_pairs = json.dumps(data["matching"], ensure_ascii=False, indent=8)
    tf_items = json.dumps(data["tfQuestions"], ensure_ascii=False, indent=8)
    mc_questions = json.dumps(data["mcQuestions"], ensure_ascii=False, indent=8)
    wheel_quiz = json.dumps(data["wheelQuiz"], ensure_ascii=False, indent=8)
    match_cards = json.dumps(data["matchCards"], ensure_ascii=False, indent=8)
    reflex_stmts = json.dumps(data["reflexStatements"], ensure_ascii=False, indent=8)
    duel_qs = json.dumps(data["duelQuestions"], ensure_ascii=False, indent=8)

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

def main():
    os.makedirs("js/data", exist_ok=True)
    generated_count = 0

    # 2, 3, 4, 5, 6. haftalar MASTER_DATA'dan
    for w_num, item in MASTER_DATA.items():
        data = {
            "week": w_num,
            "title": item["title"],
            "theme": item["theme"],
            "goals": item["goals"],
            "slides": item["slides"],
            "matching": item["matching"],
            "tfQuestions": item["tfQuestions"],
            "mcQuestions": item["mcQuestions"],
            "wheelQuiz": item["wheelQuiz"],
            "matchCards": item["matchCards"],
            "reflexStatements": item["reflexStatements"],
            "duelQuestions": item["duelQuestions"]
        }
        js_code = generate_file(w_num, data)
        with open(f"js/data/week{w_num}_content.js", "w", encoding="utf-8") as f:
            f.write(js_code)
        generated_count += 1
        print(f"Hafta {w_num} oluşturuldu: {item['title']}")

    # 7'den 37'ye kadar tüm haftalar
    for w_num in range(7, 38):
        if w_num in THEME_TOPICS:
            info = THEME_TOPICS[w_num]
            data = build_rich_week_data(w_num, info)
            js_code = generate_file(w_num, data)
            with open(f"js/data/week{w_num}_content.js", "w", encoding="utf-8") as f:
                f.write(js_code)
            generated_count += 1
            print(f"Hafta {w_num} oluşturuldu: {info[0]}")

    print(f"\n==================================================")
    print(f"BAŞARIYLA TAMAMLANDI: Toplam {generated_count} hafta için tam içerik üretildi!")
    print(f"==================================================")

if __name__ == "__main__":
    main()
