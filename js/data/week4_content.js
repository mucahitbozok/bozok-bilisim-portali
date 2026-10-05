// ==========================================
// 3. Konu: Dijital Vatandaşlık Uygulamaları - 2
// (1, 2 ve 3. Konular Kapsamlı Genel Tekrar & Pekiştirme)
// MEB 5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi
// Hazırlayan: Öğretmen Bozok
// ==========================================

window.WEEK4_CONTENT = {
    weekInfo: {
        weekNumber: 4,
        title: "Dijital Vatandaşlık Uygulamaları - 2 (Genel Tekrar)",
        code: "BTY.5.1.3 – 1, 2 ve 3. Konular Kapsamlı Tekrar & Pekiştirme",
        theme: "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        isPending: false,
        learningGoals: [
            "1. Konu: Bilişim teknolojilerinin günlük yaşamdaki önemi ve kullanım alanlarını (sağlık, eğitim, ulaşım, bankacılık, güvenlik, iletişim) eksiksiz pekiştireceğim.",
            "2. Konu: Bilişimin birey ve toplum üzerindeki olumlu/olumsuz etkilerini analiz edip ergonomi ve dijital sağlık kurallarını uygulayabileceğim.",
            "3. Konu: Dijital vatandaşlık, dijital kimlik, aktif/pasif dijital ayak izi ve e-Devlet kapısı hizmetlerini sınıflandırabileceğim.",
            "1, 2 ve 3. konuları kapsayan 2 sayfalık büyük etkinlik kağıdı ve 5 farklı oyun moduyla bilgilerimi pekiştireceğim."
        ],
        images: {
            kagit1: "assets/worksheets/1.4_sayfa1_soru.png",
            kagit1_cevap: "assets/worksheets/1.4_sayfa1_cevap.png",
            kagit2: "assets/worksheets/1.4_sayfa2_soru.png",
            kagit2_cevap: "assets/worksheets/1.4_sayfa2_cevap.png",
            sayfa1_soru: "assets/worksheets/1.4_sayfa1_soru.png",
            sayfa1_cevap: "assets/worksheets/1.4_sayfa1_cevap.png",
            sayfa2_soru: "assets/worksheets/1.4_sayfa2_soru.png",
            sayfa2_cevap: "assets/worksheets/1.4_sayfa2_cevap.png",
            soru: "assets/worksheets/1.4_sayfa1_soru.png",
            cevap: "assets/worksheets/1.4_sayfa1_cevap.png"
        }
    },

    // 🎬 KONU İLE ALAKALI VİDEOLAR (Bu konu için video bulunmuyor)
    videos: [],

    // ========================================================
    // 🖥️ 1. İNTERAKTİF DERS SUNUSU (Akıllı Tahta Modu - 20 Slayt)
    // ========================================================
    slides: [
        // SLAYT 1 — KAPAK
        {
            id: 1,
            title: "5. SINIF BİLİŞİM TEKNOLOJİLERİ",
            subtitle: "3. Konu - 2: Dijital Vatandaşlık & 1-2-3. Konular Genel Tekrarı",
            topic: "KAZANIM: BTY.5.1.3",
            badge: "KAZANIM: BTY.5.1.3 (2. HAFTA)",
            icon: "fa-solid fa-chalkboard-user",
            bgColor: "from-blue-700 via-indigo-800 to-slate-900",
            gradient: "from-blue-700 via-indigo-800 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-6xl mx-auto my-auto py-2">
                    <div class="md:col-span-7 space-y-4 text-left">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="px-4 py-1.5 bg-yellow-400/20 text-yellow-300 font-extrabold text-sm sm:text-base uppercase tracking-wider rounded-full border border-yellow-400/40">
                                5. Sınıf Bilişim Teknolojileri • 3. Konu - 2
                            </span>
                            <span class="px-3 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-full border border-emerald-400/30">
                                🏆 1, 2 ve 3. Konular Genel Tekrarı
                            </span>
                        </div>

                        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-black text-white tracking-tight leading-tight drop-shadow-lg">
                            DİJİTAL VATANDAŞLIK UYGULAMALARI - 2
                        </h1>

                        <div class="p-4 sm:p-5 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-indigo-400/50 shadow-xl space-y-1.5">
                            <div class="flex items-center gap-2 text-yellow-300 font-black text-xs sm:text-sm uppercase tracking-widest">
                                <i class="fa-solid fa-bullseye text-base text-yellow-400"></i>
                                <span>KAZANIM:</span>
                            </div>
                            <p class="text-xl sm:text-2xl md:text-[24px] font-extrabold text-white leading-snug">
                                <span class="text-yellow-300 font-black">BTY.5.1.3 –</span> Dijital vatandaşlık uygulamalarını sınıflandırabilme & 1, 2 ve 3. konuları pekiştirme.
                            </p>
                        </div>

                        <div class="p-3.5 sm:p-4 bg-indigo-950/80 rounded-2xl border border-indigo-400/30 flex items-start gap-3 shadow-lg">
                            <div class="w-9 h-9 rounded-xl bg-indigo-500/30 text-yellow-300 flex items-center justify-center text-lg shrink-0 mt-0.5">
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="text-sm sm:text-base font-semibold text-indigo-100 leading-relaxed">
                                “Bu derste ilk 3 konunun tamamını özetleyecek, 2 sayfalık etkinlik kağıdı çözecek ve 5 farklı oyunla yarışacağız!”
                            </p>
                        </div>

                        <div class="pt-1 flex items-center gap-2">
                            <span class="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-yellow-300 font-bold text-xs sm:text-sm shadow-md">
                                <i class="fa-solid fa-graduation-cap text-base"></i>
                                <span>Öğretmen Bozok • Bozok Bilişim Portalı</span>
                            </span>
                        </div>
                    </div>

                    <div class="md:col-span-5 flex justify-center">
                        <div class="relative w-full max-w-sm sm:max-w-md aspect-square rounded-3xl p-3 bg-gradient-to-tr from-yellow-400/30 via-indigo-500/20 to-pink-500/30 border-2 border-white/20 shadow-2xl backdrop-blur-sm group">
                            <div class="w-full h-full rounded-2xl overflow-hidden shadow-inner flex flex-col items-center justify-center p-6 bg-slate-900/90 text-center space-y-4">
                                <div class="w-20 h-20 rounded-2xl bg-gradient-to-tr from-yellow-400 to-amber-500 flex items-center justify-center text-slate-950 text-4xl shadow-xl animate-bounce">
                                    <i class="fa-solid fa-award"></i>
                                </div>
                                <h3 class="text-xl font-black text-white">Büyük Pekiştirme İstasyonu</h3>
                                <p class="text-xs text-slate-300 leading-relaxed">
                                    1. Konu (Kullanım Alanları) + 2. Konu (Dijital Sağlık & Ergonomi) + 3. Konu (Dijital Vatandaşlık & e-Devlet) tek bir derste birleşiyor!
                                </p>
                                <div class="flex gap-2 justify-center flex-wrap pt-2">
                                    <span class="px-2.5 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-[11px] font-bold">📄 2 Sayfa Kağıt</span>
                                    <span class="px-2.5 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-[11px] font-bold">🎮 5 Oyun</span>
                                    <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 rounded-lg text-[11px] font-bold">🏆 Bilgi Arenası</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 2 — YOL HARİTASI
        {
            id: 2,
            title: "YOL HARİTAMIZ & NELERİ TEKRAR EDECEĞİZ?",
            subtitle: "1., 2. ve 3. Konuların 3 Ana Sütunu",
            topic: "KAZANIM: BTY.5.1.3",
            badge: "GENEL BAKIŞ",
            icon: "fa-solid fa-map-location-dot",
            bgColor: "from-indigo-900 via-slate-900 to-slate-950",
            gradient: "from-indigo-900 via-slate-900 to-slate-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-6 my-auto py-2">
                    <div class="text-center space-y-2">
                        <span class="px-4 py-1 bg-yellow-400/20 text-yellow-300 font-extrabold text-xs uppercase tracking-widest rounded-full border border-yellow-400/30">
                            🗺️ 3 Haftalık Bilişim Serüvenimiz
                        </span>
                        <h2 class="text-2xl sm:text-3xl font-black text-white">Bugüne Kadar Neler Başardık?</h2>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="bg-blue-950/60 p-5 rounded-2xl border-2 border-blue-500/50 shadow-xl space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-blue-500/30 text-blue-300 flex items-center justify-center text-2xl">
                                <i class="fa-solid fa-laptop-code"></i>
                            </div>
                            <span class="px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded text-[10px] font-black uppercase">1. Konu</span>
                            <h3 class="text-lg font-black text-white">Bilişim & Günlük Yaşam</h3>
                            <p class="text-xs text-blue-100 leading-relaxed">
                                Bilişim ve teknoloji kavramları, sağlık, eğitim, ulaşım, bankacılık ve güvenlikte hayatımızı kolaylaştıran teknolojiler.
                            </p>
                        </div>

                        <div class="bg-amber-950/60 p-5 rounded-2xl border-2 border-amber-500/50 shadow-xl space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-amber-500/30 text-amber-300 flex items-center justify-center text-2xl">
                                <i class="fa-solid fa-heart-pulse"></i>
                            </div>
                            <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded text-[10px] font-black uppercase">2. Konu</span>
                            <h3 class="text-lg font-black text-white">Etkiler & Dijital Sağlık</h3>
                            <p class="text-xs text-amber-100 leading-relaxed">
                                Teknolojinin olumlu ve olumsuz yönleri, ekran bağımlılığı, ergonomik oturuş kuralları ve 20-20-20 göz sağlığı kuralı.
                            </p>
                        </div>

                        <div class="bg-emerald-950/60 p-5 rounded-2xl border-2 border-emerald-500/50 shadow-xl space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-emerald-500/30 text-emerald-300 flex items-center justify-center text-2xl">
                                <i class="fa-solid fa-shield-halved"></i>
                            </div>
                            <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded text-[10px] font-black uppercase">3. Konu</span>
                            <h3 class="text-lg font-black text-white">Dijital Vatandaşlık & e-Devlet</h3>
                            <p class="text-xs text-emerald-100 leading-relaxed">
                                Dijital kimlik, aktif ve pasif dijital ayak izi, e-Devlet, e-Okul, e-Nabız, MHRS, EBA ve güçlü şifre güvenliği.
                            </p>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 3 — 1. KONU: BİLİŞİM VE TEKNOLOJİ HATIRLATMA
        {
            id: 3,
            title: "1. KONU HATIRLATMA: BİLİŞİM VE TEKNOLOJİ NEDİR?",
            subtitle: "Temel Kavramlarımızı Tazeleyelim",
            topic: "KAZANIM: BTY.5.1.1",
            badge: "1. KONU TEMELLERİ",
            icon: "fa-solid fa-brain",
            bgColor: "from-blue-900 via-indigo-950 to-slate-950",
            gradient: "from-blue-900 via-indigo-950 to-slate-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-6 my-auto py-2">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="bg-slate-900/90 p-5 sm:p-6 rounded-2xl border-2 border-blue-400/40 shadow-xl space-y-3">
                            <div class="flex items-center gap-3">
                                <div class="w-11 h-11 rounded-xl bg-blue-500/30 text-blue-300 flex items-center justify-center text-2xl">
                                    <i class="fa-solid fa-lightbulb"></i>
                                </div>
                                <h3 class="text-xl font-black text-white">BİLİŞİM Nedir?</h3>
                            </div>
                            <div class="p-3 bg-blue-950/60 rounded-xl border border-blue-400/30 text-sm font-bold text-yellow-300">
                                BİLGİ + İLETİŞİM = BİLİŞİM
                            </div>
                            <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                                Bilginin elektronik ortamlarda (bilgisayar, telefon, tablet) toplanması, saklanması, işlenmesi ve ağlar aracılığıyla bir yerden başka bir yere aktarılması sürecidir.
                            </p>
                        </div>

                        <div class="bg-slate-900/90 p-5 sm:p-6 rounded-2xl border-2 border-indigo-400/40 shadow-xl space-y-3">
                            <div class="flex items-center gap-3">
                                <div class="w-11 h-11 rounded-xl bg-indigo-500/30 text-indigo-300 flex items-center justify-center text-2xl">
                                    <i class="fa-solid fa-gears"></i>
                                </div>
                                <h3 class="text-xl font-black text-white">TEKNOLOJİ Nedir?</h3>
                            </div>
                            <div class="p-3 bg-indigo-950/60 rounded-xl border border-indigo-400/30 text-sm font-bold text-cyan-300">
                                Hayatı Kolaylaştıran Çözümler Bütünü
                            </div>
                            <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                                İnsanoğlunun bir işi daha hızlı, verimli ve kolay yapmak amacıyla geliştirdiği her türlü araç, gereç, alet, yöntem ve tekniklerin tamamına teknoloji denir.
                            </p>
                        </div>
                    </div>

                    <div class="p-4 bg-emerald-950/70 rounded-2xl border border-emerald-400/40 flex items-center gap-4">
                        <i class="fa-solid fa-circle-check text-2xl text-emerald-400 shrink-0"></i>
                        <p class="text-xs sm:text-sm text-emerald-100 font-semibold">
                            <strong>Altın Kural:</strong> Teknoloji sadece bilgisayar veya telefon değildir; tekerlekten uçağa, mikroskoptan akıllı saate kadar hayatı kolaylaştıran her icat teknolojidir!
                        </p>
                    </div>
                </div>
            `
        },

        // SLAYT 4 — 1. KONU: KULLANIM ALANLARI
        {
            id: 4,
            title: "1. KONU: BİLİŞİMİN KULLANIM ALANLARI",
            subtitle: "Hayatımızın Her Noktasında Bilişim Var!",
            topic: "KAZANIM: BTY.5.1.1",
            badge: "KULLANIM ALANLARI",
            icon: "fa-solid fa-cubes",
            bgColor: "from-slate-900 via-blue-950 to-indigo-950",
            gradient: "from-slate-900 via-blue-950 to-indigo-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                        <div class="p-3.5 bg-slate-850 rounded-xl border border-blue-500/40 space-y-1">
                            <span class="text-lg">🏥</span>
                            <h4 class="font-bold text-white text-xs sm:text-sm">Sağlık</h4>
                            <p class="text-[11px] text-slate-300 leading-tight">MHRS randevu, e-Nabız, dijital röntgen, MR cihazları ve robotik cerrahi.</p>
                        </div>
                        <div class="p-3.5 bg-slate-850 rounded-xl border border-purple-500/40 space-y-1">
                            <span class="text-lg">🎓</span>
                            <h4 class="font-bold text-white text-xs sm:text-sm">Eğitim</h4>
                            <p class="text-[11px] text-slate-300 leading-tight">Akıllı tahtalar, EBA ders portalı, e-Okul, dijital kütüphaneler ve tabletler.</p>
                        </div>
                        <div class="p-3.5 bg-slate-850 rounded-xl border border-cyan-500/40 space-y-1">
                            <span class="text-lg">🚗</span>
                            <h4 class="font-bold text-white text-xs sm:text-sm">Ulaşım</h4>
                            <p class="text-[11px] text-slate-300 leading-tight">Navigasyon, HGS/OGS gişeleri, online uçak/tren bileti ve radar sistemleri.</p>
                        </div>
                        <div class="p-3.5 bg-slate-850 rounded-xl border border-emerald-500/40 space-y-1">
                            <span class="text-lg">💳</span>
                            <h4 class="font-bold text-white text-xs sm:text-sm">Bankacılık</h4>
                            <p class="text-[11px] text-slate-300 leading-tight">ATM cihazları, mobil bankacılık, temassız kartlar ve online fatura ödeme.</p>
                        </div>
                        <div class="p-3.5 bg-slate-850 rounded-xl border border-rose-500/40 space-y-1">
                            <span class="text-lg">🛡️</span>
                            <h4 class="font-bold text-white text-xs sm:text-sm">Güvenlik</h4>
                            <p class="text-[11px] text-slate-300 leading-tight">MOBESE kameraları, parmak izi okuyucular, yüz tanıma ve yangın alarmları.</p>
                        </div>
                        <div class="p-3.5 bg-slate-850 rounded-xl border border-yellow-500/40 space-y-1">
                            <span class="text-lg">🏭</span>
                            <h4 class="font-bold text-white text-xs sm:text-sm">Sanayi & Üretim</h4>
                            <p class="text-[11px] text-slate-300 leading-tight">Fabrika montaj robotları, 3D yazıcılar ve otomatik paketleme sistemleri.</p>
                        </div>
                        <div class="p-3.5 bg-slate-850 rounded-xl border border-teal-500/40 space-y-1">
                            <span class="text-lg">💬</span>
                            <h4 class="font-bold text-white text-xs sm:text-sm">İletişim</h4>
                            <p class="text-[11px] text-slate-300 leading-tight">E-posta, anlık mesajlaşma, görüntülü konuşma ve sosyal ağlar.</p>
                        </div>
                        <div class="p-3.5 bg-slate-850 rounded-xl border border-pink-500/40 space-y-1">
                            <span class="text-lg">🎬</span>
                            <h4 class="font-bold text-white text-xs sm:text-sm">Sinema & Eğlence</h4>
                            <p class="text-[11px] text-slate-300 leading-tight">3D animasyon filmleri, dijital efektler, simülatörler ve video oyunları.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 5 — MİNİ KONTROL 1: KULLANIM ALANI
        {
            id: 5,
            title: "MİNİ KONTROL 1: HANGİ KULLANIM ALANI?",
            subtitle: "Hızlı Düşün, Doğru Alanı Tespit Et!",
            topic: "KAZANIM: BTY.5.1.1",
            badge: "İNTERAKTİF SORU",
            icon: "fa-solid fa-circle-question",
            bgColor: "from-blue-950 via-slate-900 to-indigo-950",
            gradient: "from-blue-950 via-slate-900 to-indigo-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-5 my-auto py-2 text-center">
                    <div class="p-5 bg-slate-850 rounded-2xl border-2 border-yellow-400/50 shadow-xl space-y-3">
                        <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 font-extrabold text-xs uppercase tracking-wider rounded-full">
                            ❓ Vaka Sorusu
                        </span>
                        <p class="text-base sm:text-xl font-bold text-white leading-relaxed">
                            “Mehmet Bey otomobiliyle giderken otoyol gişesinde durmadan HGS anteninin etiketini okuması sayesinde beklemeden geçmiştir.”
                        </p>
                        <p class="text-sm text-yellow-300 font-semibold">Bu durum bilişim teknolojilerinin hangi alanına örnektir?</p>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div class="p-4 bg-slate-800 rounded-xl border border-slate-700 font-bold text-slate-300">A) Sağlık</div>
                        <div class="p-4 bg-emerald-950/80 rounded-xl border-2 border-emerald-500 font-black text-emerald-300 ring-2 ring-emerald-400/40">B) Ulaşım (Doğru!)</div>
                        <div class="p-4 bg-slate-800 rounded-xl border border-slate-700 font-bold text-slate-300">C) Eğitim</div>
                        <div class="p-4 bg-slate-800 rounded-xl border border-slate-700 font-bold text-slate-300">D) Güvenlik</div>
                    </div>

                    <div class="p-3 bg-emerald-950/50 rounded-xl border border-emerald-400/30 text-xs text-emerald-200">
                        💡 <strong>Çözüm:</strong> HGS, OGS, navigasyon ve online bilet işlemleri <strong>Ulaşım</strong> alanına aittir.
                    </div>
                </div>
            `
        },

        // SLAYT 6 — 2. KONU: OLUMLU VE OLUMSUZ YÖNLER
        {
            id: 6,
            title: "2. KONU HATIRLATMA: TEKNOLOJİNİN İKİ YÜZÜ",
            subtitle: "Olumlu mu, Olumsuz mu?",
            topic: "KAZANIM: BTY.5.1.2",
            badge: "2. KONU TEMELLERİ",
            icon: "fa-solid fa-scale-balanced",
            bgColor: "from-amber-950 via-slate-900 to-slate-950",
            gradient: "from-amber-950 via-slate-900 to-slate-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-5 my-auto py-2">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="p-5 bg-emerald-950/60 rounded-2xl border-2 border-emerald-500/50 shadow-xl space-y-3 text-left">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-xl bg-emerald-500/30 text-emerald-300 flex items-center justify-center text-xl">
                                    <i class="fa-solid fa-thumbs-up"></i>
                                </div>
                                <h3 class="text-lg font-black text-emerald-300">🌟 OLUMLU YÖNLERİ</h3>
                            </div>
                            <ul class="space-y-2 text-xs sm:text-sm text-slate-200">
                                <li class="flex items-start gap-2">✅ <strong>Zamandan Tasarruf:</strong> İşler saniyeler içinde halledilir.</li>
                                <li class="flex items-start gap-2">✅ <strong>Hızlı İletişim:</strong> Dünyanın öbür ucuyla anında görüntülü konuşma.</li>
                                <li class="flex items-start gap-2">✅ <strong>Bilgiye Kolay Erişim:</strong> Kütüphaneler dolusu bilgi cebimizde.</li>
                                <li class="flex items-start gap-2">✅ <strong>Maliyet Düşüşü:</strong> Kağıt ve ulaşım masrafları azalır.</li>
                            </ul>
                        </div>

                        <div class="p-5 bg-rose-950/60 rounded-2xl border-2 border-rose-500/50 shadow-xl space-y-3 text-left">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-xl bg-rose-500/30 text-rose-300 flex items-center justify-center text-xl">
                                    <i class="fa-solid fa-thumbs-down"></i>
                                </div>
                                <h3 class="text-lg font-black text-rose-300">⚠️ OLUMSUZ YÖNLERİ (Kontrolsüz Kullanım)</h3>
                            </div>
                            <ul class="space-y-2 text-xs sm:text-sm text-slate-200">
                                <li class="flex items-start gap-2">❌ <strong>Hareketsizlik & Obezite:</strong> Saatlerce ekrana çakılı kalmak.</li>
                                <li class="flex items-start gap-2">❌ <strong>Göz & Beden Sağlığı:</strong> Görme kusurları, boyun ve bel fıtığı.</li>
                                <li class="flex items-start gap-2">❌ <strong>Sosyal İzolasyon:</strong> Yüz yüze arkadaşlıktan kopma.</li>
                                <li class="flex items-start gap-2">❌ <strong>Teknoloji Bağımlılığı:</strong> Bilgisayarı ve oyunu bırakamama.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 7 — 2. KONU: ERGONOMİ & DİJİTAL SAĞLIK
        {
            id: 7,
            title: "2. KONU: ERGONOMİ & DOĞRU DURUŞ KURALLARI",
            subtitle: "Bedenini ve Gözlerini Koru!",
            topic: "KAZANIM: BTY.5.1.2",
            badge: "ERGONOMİ REHBERİ",
            icon: "fa-solid fa-child-reaching",
            bgColor: "from-slate-900 via-teal-950 to-slate-950",
            gradient: "from-slate-900 via-teal-950 to-slate-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-5 my-auto py-2">
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                        <div class="p-4 bg-slate-850 rounded-2xl border border-teal-400/40 space-y-2">
                            <div class="w-10 h-10 rounded-xl bg-teal-500/30 text-teal-300 flex items-center justify-center text-xl">
                                <i class="fa-solid fa-ruler-horizontal"></i>
                            </div>
                            <h4 class="font-bold text-white text-sm">1. Ekran Mesafesi</h4>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Ekrana <strong>50 - 70 cm (Bir kol boyu)</strong> mesafede durulmalı. Ekran göz hizasında veya hafif aşağısında olmalıdır.
                            </p>
                        </div>

                        <div class="p-4 bg-slate-850 rounded-2xl border border-cyan-400/40 space-y-2">
                            <div class="w-10 h-10 rounded-xl bg-cyan-500/30 text-cyan-300 flex items-center justify-center text-xl">
                                <i class="fa-solid fa-chair"></i>
                            </div>
                            <h4 class="font-bold text-white text-sm">2. 90 Derece Oturuş</h4>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Sırt dik olmalı, bel sandalyeye yaslanmalı. Dirsekler ve dizler <strong>90 derecelik açıda</strong> olmalı, ayaklar yere tam basmalıdır.
                            </p>
                        </div>

                        <div class="p-4 bg-slate-850 rounded-2xl border border-amber-400/40 space-y-2">
                            <div class="w-10 h-10 rounded-xl bg-amber-500/30 text-amber-300 flex items-center justify-center text-xl">
                                <i class="fa-solid fa-eye"></i>
                            </div>
                            <h4 class="font-bold text-white text-sm">3. 20-20-20 Kuralı</h4>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Her <strong>20 dakikada bir</strong>, <strong>20 fit (6 metre)</strong> uzağa, en az <strong>20 saniye</strong> bakarak gözler dinlendirilmelidir.
                            </p>
                        </div>
                    </div>

                    <div class="p-3.5 bg-yellow-400/10 rounded-2xl border border-yellow-400/30 flex items-center gap-3">
                        <i class="fa-solid fa-triangle-exclamation text-yellow-400 text-xl shrink-0"></i>
                        <p class="text-xs text-yellow-200">
                            <strong>Unutma:</strong> Her 45-50 dakikalık ekran kullanımında en az 10 dakika ayağa kalkıp esneme ve hareket molası vermeliyiz!
                        </p>
                    </div>
                </div>
            `
        },

        // SLAYT 8 — MİNİ KONTROL 2: ERGONOMİ
        {
            id: 8,
            title: "MİNİ KONTROL 2: ERGONOMİ DEDEKTİFİ",
            subtitle: "Hangisi Doğru Bir Davranıştır?",
            topic: "KAZANIM: BTY.5.1.2",
            badge: "İNTERAKTİF SORU",
            icon: "fa-solid fa-user-check",
            bgColor: "from-teal-950 via-slate-900 to-slate-950",
            gradient: "from-teal-950 via-slate-900 to-slate-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-5 my-auto py-2 text-center">
                    <div class="p-5 bg-slate-850 rounded-2xl border-2 border-cyan-400/50 shadow-xl space-y-2">
                        <span class="px-3 py-1 bg-cyan-400/20 text-cyan-300 font-extrabold text-xs uppercase tracking-wider rounded-full">
                            ❓ Sağlık Sorusu
                        </span>
                        <p class="text-base sm:text-xl font-bold text-white">
                            Bilgisayar başında ödev yapan Selin'in göz sağlığını ve omurgasını korumak için yapması gereken EN DOĞRU davranış hangisidir?
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        <div class="p-3.5 bg-slate-800 rounded-xl border border-slate-700 text-xs font-semibold text-slate-300">
                            A) Ekrana 10 cm yaklaşıp kambur oturmak
                        </div>
                        <div class="p-3.5 bg-slate-800 rounded-xl border border-slate-700 text-xs font-semibold text-slate-300">
                            B) Hiç mola vermeden 5 saat kesintisiz çalışmak
                        </div>
                        <div class="p-3.5 bg-emerald-950/80 rounded-xl border-2 border-emerald-500 text-xs font-black text-emerald-300 ring-2 ring-emerald-400/40">
                            C) Bir kol boyu mesafeyi korumak ve 20-20-20 kuralıyla gözlerini dinlendirmek (Doğru!)
                        </div>
                        <div class="p-3.5 bg-slate-800 rounded-xl border border-slate-700 text-xs font-semibold text-slate-300">
                            D) Yatarak kucağında laptopla ders çalışmak
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 9 — 3. KONU: DİJİTAL VATANDAŞ & DİJİTAL KİMLİK
        {
            id: 9,
            title: "3. KONU: DİJİTAL VATANDAŞ & DİJİTAL KİMLİK",
            subtitle: "Sanal Dünyadaki Varlığımız",
            topic: "KAZANIM: BTY.5.1.3",
            badge: "3. KONU TEMELLERİ",
            icon: "fa-solid fa-id-card",
            bgColor: "from-blue-900 via-indigo-950 to-slate-950",
            gradient: "from-blue-900 via-indigo-950 to-slate-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-5 my-auto py-2">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
                        <div class="p-5 bg-slate-900/90 rounded-2xl border-2 border-blue-400/40 shadow-xl space-y-3">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-xl bg-blue-500/30 text-blue-300 flex items-center justify-center text-xl">
                                    <i class="fa-solid fa-user-shield"></i>
                                </div>
                                <h3 class="text-lg font-black text-white">Dijital Vatandaş Kimdir?</h3>
                            </div>
                            <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                                Bilgi ve iletişim teknolojilerini kullanırken <strong>etik, ahlaki, yasal ve saygılı</strong> davranan, hak ve sorumluluklarının bilincinde olan bireylere dijital vatandaş denir.
                            </p>
                        </div>

                        <div class="p-5 bg-slate-900/90 rounded-2xl border-2 border-purple-400/40 shadow-xl space-y-3">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-xl bg-purple-500/30 text-purple-300 flex items-center justify-center text-xl">
                                    <i class="fa-solid fa-address-card"></i>
                                </div>
                                <h3 class="text-lg font-black text-white">Dijital Kimlik Nedir?</h3>
                            </div>
                            <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                                İnternette bizi temsil eden kullanıcı adı, profil fotoğrafı/avatar, biyografi, e-posta ve çevrim içi hesaplarımızın bütününe dijital kimlik denir.
                            </p>
                        </div>
                    </div>

                    <div class="p-3.5 bg-indigo-950/60 rounded-xl border border-indigo-400/30 text-xs sm:text-sm text-indigo-100 font-semibold">
                        🔒 <strong>Güvenlik İpucu:</strong> Dijital profilimizde ev adresimizi, okulumuzun adını, T.C. kimlik numaramızı ve telefonumuzu asla açıkça paylaşmamalıyız!
                    </div>
                </div>
            `
        },

        // SLAYT 10 — 3. KONU: DİJİTAL AYAK İZİ NEDİR?
        {
            id: 10,
            title: "3. KONU: DİJİTAL AYAK İZİ NEDİR?",
            subtitle: "İnternette Attığımız Her Adım İz Bırakır!",
            topic: "KAZANIM: BTY.5.1.3",
            badge: "DİJİTAL AYAK İZİ",
            icon: "fa-solid fa-shoe-prints",
            bgColor: "from-indigo-950 via-slate-900 to-slate-950",
            gradient: "from-indigo-950 via-slate-900 to-slate-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-5 my-auto py-2">
                    <div class="p-5 bg-slate-850 rounded-2xl border-2 border-indigo-500/50 shadow-xl space-y-3 text-center">
                        <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-500 mx-auto flex items-center justify-center text-3xl text-slate-950 shadow-lg">
                            <i class="fa-solid fa-shoe-prints"></i>
                        </div>
                        <h3 class="text-xl sm:text-2xl font-black text-white">Dijital Ayak İzi Asla Tamamen Silinmez!</h3>
                        <p class="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            İnternette gezinirken, sosyal medyada paylaşım yaparken, video izlerken veya arama yaparken arkamızda bıraktığımız tüm veri ve bilgi kırıntılarına <strong>Dijital Ayak İzi</strong> denir.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                        <div class="p-4 bg-blue-950/60 rounded-xl border border-blue-400/30 space-y-1">
                            <span class="font-black text-blue-300 text-sm">🐾 Kalıcıdır:</span>
                            <p class="text-xs text-slate-300">Bir fotoğrafı silseniz bile, başkaları ekran görüntüsü almış veya sunucular yedeklemiş olabilir.</p>
                        </div>
                        <div class="p-4 bg-rose-950/60 rounded-xl border border-rose-400/30 space-y-1">
                            <span class="font-black text-rose-300 text-sm">⚠️ Geleceği Etkiler:</span>
                            <p class="text-xs text-slate-300">Gelecekte üniversite veya iş başvurularında geçmişteki dijital ayak izlerimiz incelenebilir.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 11 — AKTİF VS. PASİF AYAK İZİ
        {
            id: 11,
            title: "AKTİF AYAK İZİ vs. PASİF AYAK İZİ",
            subtitle: "İki Tür Ayak İzimiz Vardır",
            topic: "KAZANIM: BTY.5.1.3",
            badge: "AYAK İZİ TÜRLERİ",
            icon: "fa-solid fa-code-compare",
            bgColor: "from-blue-950 via-slate-900 to-cyan-950",
            gradient: "from-blue-950 via-slate-900 to-cyan-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-5 my-auto py-2">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
                        <div class="p-5 bg-blue-950/60 rounded-2xl border-2 border-blue-400/50 shadow-xl space-y-3">
                            <div class="flex items-center gap-3">
                                <span class="text-2xl">📸</span>
                                <h3 class="text-lg font-black text-blue-300">AKTİF DİJİTAL AYAK İZİ</h3>
                            </div>
                            <p class="text-xs text-slate-200">
                                Kendi isteğimizle, <strong>bilerek ve farkında olarak</strong> internete yüklediğimiz ve paylaştığımız verilerdir.
                            </p>
                            <div class="p-3 bg-slate-900/80 rounded-xl border border-slate-700 space-y-1 text-xs text-slate-300">
                                <div>• Sosyal medyaya fotoğraf/video yüklemek</div>
                                <div>• Bir yazının altına yorum yazmak</div>
                                <div>• E-posta göndermek veya blog yazısı paylaşmak</div>
                            </div>
                        </div>

                        <div class="p-5 bg-cyan-950/60 rounded-2xl border-2 border-cyan-400/50 shadow-xl space-y-3">
                            <div class="flex items-center gap-3">
                                <span class="text-2xl">🍪</span>
                                <h3 class="text-lg font-black text-cyan-300">PASİF DİJİTAL AYAK İZİ</h3>
                            </div>
                            <p class="text-xs text-slate-200">
                                Biz farkında olmadan, sistemlerin ve sitelerin <strong>arka planda otomatik topladığı</strong> verilerdir.
                            </p>
                            <div class="p-3 bg-slate-900/80 rounded-xl border border-slate-700 space-y-1 text-xs text-slate-300">
                                <div>• Web sitelerinde saklanan çerezler (cookies)</div>
                                <div>• Arama motorundaki arama geçmişi</div>
                                <div>• Harita uygulamasının kaydettiği konum bilgisi</div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 12 — MİNİ KONTROL 3: AYAK İZİ
        {
            id: 12,
            title: "MİNİ KONTROL 3: AKTİF Mİ, PASİF Mİ?",
            subtitle: "Hangi Ayak İzi Türü?",
            topic: "KAZANIM: BTY.5.1.3",
            badge: "İNTERAKTİF SORU",
            icon: "fa-solid fa-magnifying-glass",
            bgColor: "from-cyan-950 via-slate-900 to-slate-950",
            gradient: "from-cyan-950 via-slate-900 to-slate-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-5 my-auto py-2 text-center">
                    <div class="p-5 bg-slate-850 rounded-2xl border-2 border-cyan-400/50 shadow-xl space-y-2">
                        <span class="px-3 py-1 bg-cyan-400/20 text-cyan-300 font-extrabold text-xs uppercase tracking-wider rounded-full">
                            ❓ Durum Analizi
                        </span>
                        <p class="text-base sm:text-xl font-bold text-white">
                            “Ela'nın okul gezisinde çektiği müzeler videosunu kendi YouTube kanalına yüklemesi hangi ayak izi türüdür?”
                        </p>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-emerald-950/80 rounded-2xl border-2 border-emerald-500 font-black text-emerald-300 ring-2 ring-emerald-400/40 text-base">
                            A) Aktif Dijital Ayak İzi (Doğru!)
                        </div>
                        <div class="p-4 bg-slate-800 rounded-2xl border border-slate-700 font-bold text-slate-400 text-base">
                            B) Pasif Dijital Ayak İzi
                        </div>
                    </div>

                    <div class="p-3 bg-emerald-950/50 rounded-xl border border-emerald-400/30 text-xs text-emerald-200">
                        💡 <strong>Açıklama:</strong> Kendi isteğimizle bilerek internete yüklediğimiz içerikler <strong>Aktif Dijital Ayak İzi</strong>dir.
                    </div>
                </div>
            `
        },

        // SLAYT 13 — e-DEVLET KAPISI VE e-HİZMETLER
        {
            id: 13,
            title: "3. KONU: e-DEVLET KAPISI VE e-HİZMETLER",
            subtitle: "Devlet Kapısı Artık Cebimizde!",
            topic: "KAZANIM: BTY.5.1.3",
            badge: "KAMU e-HİZMETLERİ",
            icon: "fa-solid fa-landmark",
            bgColor: "from-blue-900 via-indigo-950 to-slate-950",
            gradient: "from-blue-900 via-indigo-950 to-slate-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-5 my-auto py-2 text-left">
                    <div class="p-5 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 rounded-2xl border-2 border-blue-400/50 shadow-xl flex items-center gap-4">
                        <div class="w-14 h-14 rounded-2xl bg-yellow-400 text-slate-950 flex items-center justify-center text-3xl shadow-lg shrink-0">
                            <i class="fa-solid fa-landmark"></i>
                        </div>
                        <div>
                            <span class="text-xs font-bold text-yellow-300 uppercase">turkiye.gov.tr</span>
                            <h3 class="text-xl sm:text-2xl font-black text-white">e-Devlet Kapısı Nedir?</h3>
                            <p class="text-xs sm:text-sm text-slate-200">
                                Kamu kurumlarının sunduğu resmi hizmetlere tek bir noktadan, tek bir şifreyle 7/24 güvenli biçimde ulaşmamızı sağlayan resmi web sitesidir.
                            </p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div class="p-3.5 bg-slate-850 rounded-xl border border-slate-700 space-y-1">
                            <h4 class="font-bold text-yellow-300 text-xs sm:text-sm">⚡ Hız & Kolaylık</h4>
                            <p class="text-[11px] text-slate-300">Kuyruklarda beklemeden dakikalar içinde resmi belge alınır.</p>
                        </div>
                        <div class="p-3.5 bg-slate-850 rounded-xl border border-slate-700 space-y-1">
                            <h4 class="font-bold text-emerald-300 text-xs sm:text-sm">🌱 Doğa Dostu</h4>
                            <p class="text-[11px] text-slate-300">Kağıt israfı önlenir, ağaçlar kesilmekten kurtulur.</p>
                        </div>
                        <div class="p-3.5 bg-slate-850 rounded-xl border border-slate-700 space-y-1">
                            <h4 class="font-bold text-cyan-300 text-xs sm:text-sm">🕒 7/24 Kesintisiz</h4>
                            <p class="text-[11px] text-slate-300">Mesai saatini beklemeden gece yarısı bile işlem yapılır.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 14 — TEMEL e-HİZMETLER TABLOSU
        {
            id: 14,
            title: "TEMEL e-HİZMETLER REHBERİ",
            subtitle: "Hangi İhtiyaç İçin Hangi Kapıyı Çalmalıyız?",
            topic: "KAZANIM: BTY.5.1.3",
            badge: "HİZMET REHBERİ",
            icon: "fa-solid fa-list-check",
            bgColor: "from-slate-900 via-indigo-950 to-slate-950",
            gradient: "from-slate-900 via-indigo-950 to-slate-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
                        <div class="p-3.5 bg-slate-850 rounded-xl border border-blue-500/40 space-y-1">
                            <div class="flex items-center gap-2">
                                <span class="text-base">🎓</span>
                                <h4 class="font-black text-blue-300 text-xs sm:text-sm">e-Okul</h4>
                            </div>
                            <p class="text-[11px] text-slate-300">Öğrenci sınav notları, devamsızlık durumu, ders programı ve karne bilgileri.</p>
                        </div>
                        <div class="p-3.5 bg-slate-850 rounded-xl border border-emerald-500/40 space-y-1">
                            <div class="flex items-center gap-2">
                                <span class="text-base">🩺</span>
                                <h4 class="font-black text-emerald-300 text-xs sm:text-sm">e-Nabız</h4>
                            </div>
                            <p class="text-[11px] text-slate-300">Geçmiş tahlil sonuçları, aşı geçmişi, e-reçeteler ve radyoloji filmleri.</p>
                        </div>
                        <div class="p-3.5 bg-slate-850 rounded-xl border border-teal-500/40 space-y-1">
                            <div class="flex items-center gap-2">
                                <span class="text-base">📅</span>
                                <h4 class="font-black text-teal-300 text-xs sm:text-sm">MHRS (Alo 182)</h4>
                            </div>
                            <p class="text-[11px] text-slate-300">Hastanelerden istediğimiz doktor ve poliklinikten muayene saati alma.</p>
                        </div>
                        <div class="p-3.5 bg-slate-850 rounded-xl border border-purple-500/40 space-y-1">
                            <div class="flex items-center gap-2">
                                <span class="text-base">📚</span>
                                <h4 class="font-black text-purple-300 text-xs sm:text-sm">EBA</h4>
                            </div>
                            <p class="text-[11px] text-slate-300">MEB ders kitapları, canlı dersler, eğitici testler ve konu anlatım videoları.</p>
                        </div>
                        <div class="p-3.5 bg-slate-850 rounded-xl border border-amber-500/40 space-y-1">
                            <div class="flex items-center gap-2">
                                <span class="text-base">🧾</span>
                                <h4 class="font-black text-amber-300 text-xs sm:text-sm">e-Vergi</h4>
                            </div>
                            <p class="text-[11px] text-slate-300">Vergi borcu sorgulama, motorlu taşıtlar vergisi (MTV) ve harç ödemeleri.</p>
                        </div>
                        <div class="p-3.5 bg-slate-850 rounded-xl border border-cyan-500/40 space-y-1">
                            <div class="flex items-center gap-2">
                                <span class="text-base">💳</span>
                                <h4 class="font-black text-cyan-300 text-xs sm:text-sm">e-Bankacılık</h4>
                            </div>
                            <p class="text-[11px] text-slate-300">Şubeye gitmeden 7/24 para transferi, fatura ödeme ve hesap takibi.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 15 — MİNİ KONTROL 4: HANGİ HİZMET?
        {
            id: 15,
            title: "MİNİ KONTROL 4: HANGİ KAPIDAN GİRMELİ?",
            subtitle: "Vatandaşın İhtiyacını Çöz!",
            topic: "KAZANIM: BTY.5.1.3",
            badge: "İNTERAKTİF SORU",
            icon: "fa-solid fa-hospital-user",
            bgColor: "from-slate-900 via-indigo-950 to-slate-950",
            gradient: "from-slate-900 via-indigo-950 to-slate-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-5 my-auto py-2 text-center">
                    <div class="p-5 bg-slate-850 rounded-2xl border-2 border-emerald-400/50 shadow-xl space-y-2">
                        <span class="px-3 py-1 bg-emerald-400/20 text-emerald-300 font-extrabold text-xs uppercase tracking-wider rounded-full">
                            ❓ Günlük Hayat Sorusu
                        </span>
                        <p class="text-base sm:text-xl font-bold text-white">
                            “Dişi şiddetle ağrıyan Can, devlet hastanesindeki diş hekiminden yarın saat 10.30 için sıra almak istemektedir. Can hangi dijital sistemi açmalıdır?”
                        </p>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div class="p-3.5 bg-emerald-950/80 rounded-xl border-2 border-emerald-500 font-black text-emerald-300 ring-2 ring-emerald-400/40 text-sm">
                            A) MHRS (Doğru!)
                        </div>
                        <div class="p-3.5 bg-slate-800 rounded-xl border border-slate-700 font-bold text-slate-400 text-sm">
                            B) e-Okul
                        </div>
                        <div class="p-3.5 bg-slate-800 rounded-xl border border-slate-700 font-bold text-slate-400 text-sm">
                            C) EBA
                        </div>
                        <div class="p-3.5 bg-slate-800 rounded-xl border border-slate-700 font-bold text-slate-400 text-sm">
                            D) e-Vergi
                        </div>
                    </div>

                    <div class="p-3 bg-emerald-950/50 rounded-xl border border-emerald-400/30 text-xs text-emerald-200">
                        💡 <strong>Çözüm:</strong> Hastane randevuları <strong>MHRS (Merkezi Hekim Randevu Sistemi)</strong> veya Alo 182 üzerinden alınır.
                    </div>
                </div>
            `
        },

        // SLAYT 16 — DİJİTAL GÜVENLİK KALKANI & DÜŞÜN
        {
            id: 16,
            title: "DİJİTAL GÜVENLİK KALKANI & DÜŞÜN KURALI",
            subtitle: "Kendini Siber Saldırılardan Koru!",
            topic: "KAZANIM: BTY.5.1.3",
            badge: "GÜVENLİK KALKANI",
            icon: "fa-solid fa-shield-halved",
            bgColor: "from-indigo-950 via-slate-900 to-slate-950",
            gradient: "from-indigo-950 via-slate-900 to-slate-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-5 my-auto py-2">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
                        <div class="p-5 bg-slate-900/90 rounded-2xl border-2 border-yellow-400/50 shadow-xl space-y-3">
                            <h3 class="text-lg font-black text-yellow-300 flex items-center gap-2">
                                <i class="fa-solid fa-key"></i> GÜÇLÜ ŞİFRE NASIL OLUR?
                            </h3>
                            <ul class="space-y-1.5 text-xs text-slate-200">
                                <li>🔑 <strong>En az 8-12 karakter</strong> uzunluğunda olmalıdır.</li>
                                <li>🔤 <strong>Büyük harf (A-Z) ve küçük harf (a-z)</strong> içermelidir.</li>
                                <li>🔢 <strong>Rakamlar (0-9)</strong> bulunmalıdır.</li>
                                <li>✨ <strong>Özel semboller (?, !, @, #, %)</strong> içermelidir.</li>
                                <li>❌ Doğum tarihi, isim veya '123456' ASLA şifre yapılmaz!</li>
                            </ul>
                        </div>

                        <div class="p-5 bg-slate-900/90 rounded-2xl border-2 border-cyan-400/50 shadow-xl space-y-3">
                            <h3 class="text-lg font-black text-cyan-300 flex items-center gap-2">
                                <i class="fa-solid fa-lightbulb"></i> D.Ü.Ş.Ü.N. KURALI
                            </h3>
                            <p class="text-xs text-slate-200">Bir mesaj veya fotoğraf paylaşmadan önce sorgula:</p>
                            <div class="space-y-1 text-xs text-slate-300">
                                <div><strong class="text-yellow-300">D:</strong> Doğru mu? (Yalan haber mi?)</div>
                                <div><strong class="text-emerald-300">Ü:</strong> Üretken mi? (Faydalı mı?)</div>
                                <div><strong class="text-pink-300">Ş:</strong> Şefkatli mi? (Kalp kırar mı?)</div>
                                <div><strong class="text-purple-300">Ü:</strong> Üzücü mü? (Korkutucu mu?)</div>
                                <div><strong class="text-cyan-300">N:</strong> Nazik mi? (Kibar mı?)</div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 17 — SİBER ZORBALIK
        {
            id: 17,
            title: "SİBER ZORBALIKLA MÜCADELE REHBERİ",
            subtitle: "Sanal Ortamda Asla Yalnız Değilsin!",
            topic: "KAZANIM: BTY.5.1.3",
            badge: "SİBER ZORBALIK",
            icon: "fa-solid fa-hand-fist",
            bgColor: "from-rose-950 via-slate-900 to-slate-950",
            gradient: "from-rose-950 via-slate-900 to-slate-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-5 my-auto py-2">
                    <div class="p-4 bg-rose-950/70 rounded-2xl border border-rose-500/40 text-center space-y-1">
                        <h3 class="text-lg font-black text-rose-300">Siber Zorbalık Nedir?</h3>
                        <p class="text-xs text-slate-200 max-w-xl mx-auto">
                            Dijital teknolojiler kullanılarak bir bireye hakaret etmek, tehdit savurmak, alay etmek veya utandırıcı içerikler yaymaktır.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div class="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2">
                            <div class="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-400 mx-auto flex items-center justify-center text-2xl font-black">1</div>
                            <h4 class="font-bold text-white text-sm">Cevap Verme!</h4>
                            <p class="text-xs text-slate-300">Zorbaya karşılık verme, öfkeyle yazılan kaba sözler durumu daha da büyütür.</p>
                        </div>
                        <div class="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2">
                            <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center text-2xl font-black">2</div>
                            <h4 class="font-bold text-white text-sm">Kanıtı Sakla & Engelle!</h4>
                            <p class="text-xs text-slate-300">Ekran görüntüsü alarak kanıt oluştur ve o kullanıcıyı profilden hemen engelle.</p>
                        </div>
                        <div class="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2">
                            <div class="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center text-2xl font-black">3</div>
                            <h4 class="font-bold text-white text-sm">Hemen Bildir!</h4>
                            <p class="text-xs text-slate-300">Durumu hiç çekinmeden öğretmenine, annene veya babana anlat.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 18 — DİJİTAL VATANDAŞIN 5 İLKESİ
        {
            id: 18,
            title: "BİLİNÇLİ DİJİTAL VATANDAŞIN 5 ALTIN KURALI",
            subtitle: "Geleceğin Dijital Liderleri Olacağız!",
            topic: "KAZANIM: BTY.5.1.3",
            badge: "5 ALTIN KURAL",
            icon: "fa-solid fa-ribbon",
            bgColor: "from-blue-900 via-indigo-950 to-slate-950",
            gradient: "from-blue-900 via-indigo-950 to-slate-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2 text-left">
                    <div class="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
                        <div class="p-4 bg-slate-850 rounded-2xl border border-blue-500/40 space-y-2">
                            <span class="text-2xl">🤝</span>
                            <h4 class="font-black text-blue-300 text-sm">1. SAYGILI OL</h4>
                            <p class="text-[11px] text-slate-300">Telif haklarına ve başkalarının özel hayatına saygı göster.</p>
                        </div>
                        <div class="p-4 bg-slate-850 rounded-2xl border border-emerald-500/40 space-y-2">
                            <span class="text-2xl">🔒</span>
                            <h4 class="font-black text-emerald-300 text-sm">2. GÜVENLİ DAVRAN</h4>
                            <p class="text-[11px] text-slate-300">Kişisel verilerini ve şifrelerini asla yabancılarla paylaşma.</p>
                        </div>
                        <div class="p-4 bg-slate-850 rounded-2xl border border-yellow-500/40 space-y-2">
                            <span class="text-2xl">⚖️</span>
                            <h4 class="font-black text-yellow-300 text-sm">3. SORUMLULUK AL</h4>
                            <p class="text-[11px] text-slate-300">İnternette attığın her adımın bir sonucu olduğunu unutma.</p>
                        </div>
                        <div class="p-4 bg-slate-850 rounded-2xl border border-cyan-500/40 space-y-2">
                            <span class="text-2xl">🤔</span>
                            <h4 class="font-black text-cyan-300 text-sm">4. DÜŞÜNEREK PAYLAŞ</h4>
                            <p class="text-[11px] text-slate-300">Yalan ve doğrulanmamış sahte haberleri yayma.</p>
                        </div>
                        <div class="p-4 bg-slate-850 rounded-2xl border border-pink-500/40 space-y-2">
                            <span class="text-2xl">⏳</span>
                            <h4 class="font-black text-pink-300 text-sm">5. BİLİNÇLİ KULLAN</h4>
                            <p class="text-[11px] text-slate-300">Ekran başında bağımlı olma, sağlığını ve gerçek hayatı ihmal etme.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 19 — 1-2-3 BÜYÜK ÖZET
        {
            id: 19,
            title: "BÜYÜK GENEL TEKRAR ÖZET TABLOSU",
            subtitle: "İlk 3 Konunun Özeti Tek Ekranda!",
            topic: "KAZANIM: BTY.5.1.3",
            badge: "BÜYÜK ÖZET",
            icon: "fa-solid fa-table-list",
            bgColor: "from-slate-900 via-indigo-950 to-slate-950",
            gradient: "from-slate-900 via-indigo-950 to-slate-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-3 my-auto py-2 text-left">
                    <div class="p-3.5 bg-blue-950/70 rounded-xl border border-blue-400/40 space-y-1">
                        <span class="font-black text-blue-300 text-xs uppercase">1. Konu: Bilişim & Alanlar</span>
                        <p class="text-xs text-slate-200">Bilgi + İletişim = Bilişim. Sağlık (MHRS), Eğitim (EBA, e-Okul), Ulaşım (Navigasyon, HGS), Bankacılık (ATM, mobil), Güvenlik (MOBESE).</p>
                    </div>
                    <div class="p-3.5 bg-amber-950/70 rounded-xl border border-amber-400/40 space-y-1">
                        <span class="font-black text-amber-300 text-xs uppercase">2. Konu: Etkiler & Dijital Sağlık</span>
                        <p class="text-xs text-slate-200">Olumlu: Hızlı iletişim, zaman tasarrufu. Olumsuz: Bağımlılık, hareketsizlik. Ergonomi: Bir kol boyu mesafe, 90 derece kuralı, 20-20-20 dinlenme kuralı.</p>
                    </div>
                    <div class="p-3.5 bg-emerald-950/70 rounded-xl border border-emerald-400/40 space-y-1">
                        <span class="font-black text-emerald-300 text-xs uppercase">3. Konu: Dijital Vatandaşlık & e-Devlet</span>
                        <p class="text-xs text-slate-200">Dijital kimlik (profil/avatar). Dijital ayak izi: Aktif (foto/video/yorum), Pasif (çerez/arama/konum). e-Devlet kapısı (turkiye.gov.tr), güçlü şifre ve DÜŞÜN kuralı.</p>
                    </div>
                </div>
            `
        },

        // SLAYT 20 — FİNAL & ETKİNLİK ZAMANI
        {
            id: 20,
            title: "TEBRİKLER! ŞİMDİ ETKİNLİK VE OYUN VAKTİ!",
            subtitle: "Akıllı Tahtada Eğlenceli Yarışmalar Başlıyor",
            topic: "KAZANIM: BTY.5.1.3",
            badge: "FİNAL & OYUNLAR",
            icon: "fa-solid fa-trophy",
            bgColor: "from-indigo-900 via-purple-950 to-slate-900",
            gradient: "from-indigo-900 via-purple-950 to-slate-900",
            content: `
                <div class="max-w-4xl mx-auto space-y-6 my-auto py-2 text-center">
                    <div class="w-20 h-20 rounded-3xl bg-gradient-to-tr from-yellow-400 to-amber-500 mx-auto flex items-center justify-center text-4xl text-slate-950 shadow-2xl animate-bounce">
                        <i class="fa-solid fa-gamepad"></i>
                    </div>

                    <div class="space-y-2">
                        <h2 class="text-2xl sm:text-4xl font-black text-white">Harikasınız! 1, 2 ve 3. Konuları Tamamladık!</h2>
                        <p class="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                            Şimdi 2 sayfalık çalışma kağıdını inceleyebilir veya Tekrar Oyunları sekmesine geçerek 5 farklı eğlenceli oyun modunda sınıfça yarışabilirsiniz!
                        </p>
                    </div>

                    <div class="flex gap-3 justify-center flex-wrap pt-2">
                        <button onclick="app.switchTab('worksheet')" class="px-5 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm rounded-2xl shadow-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
                            <i class="fa-solid fa-file-pen"></i> 2 Sayfalık Etkinlik Kağıdına Git
                        </button>
                        <button onclick="app.switchTab('games')" class="px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-black text-sm rounded-2xl shadow-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
                            <i class="fa-solid fa-gamepad"></i> 5 Farklı Oyun Modunu Başlat!
                        </button>
                    </div>
                </div>
            `
        }
    ],

    // ========================================================
    // 📄 2. ÇALIŞMA KAĞIDI (2 Sayfa Etkinlik & Çalışma Kağıdı)
    // ========================================================
    worksheetDocs: {
        hasTwoPages: true,

        // ==========================================
        // 📄 1. KAĞIT: SAYFA 1 ETKİNLİK KAĞIDI
        // ==========================================
        kagit1Html: `
        <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-indigo-500/50 shadow-2xl space-y-8">
            <div class="worksheet-page space-y-6">
                <div class="border-b-2 border-indigo-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            5. Sınıf Bilişim Teknolojileri • 1. Etkinlik & Çalışma Kağıdı
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            1. KAĞIT: BİLİŞİM ALANLARI VE DİJİTAL SAĞLIK ETKİNLİKLERİ
                        </h1>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        1. Kağıt (Sayfa 1 / 1)
                    </span>
                </div>

                <!-- Öğrenci Bilgi Kutusu -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs p-3 bg-slate-850 rounded-xl border border-slate-700">
                    <div><strong>Adı Soyadı:</strong> .....................................</div>
                    <div><strong>Sınıfı / No:</strong> ............. / .............</div>
                    <div><strong>Tarih:</strong> ...... / ...... / 2026</div>
                    <div><strong>Aldığı Not:</strong> ....................</div>
                </div>

                <!-- BÖLÜM A: BİLİŞİM ALANLARI VAKA DEDEKTİFİ -->
                <div class="space-y-3">
                    <h3 class="text-sm font-black text-cyan-300 uppercase">
                        Bölüm A) Bilişim Alanı Dedektifi: Aşağıdaki durumların hangi bilişim alanına girdiğini parantez içine yazınız:
                    </h3>
                    <p class="text-[11px] text-slate-400">(Kullanılacak Alanlar: Sağlık, Eğitim, Ulaşım, Bankacılık, Güvenlik, Sanayi/Üretim, İletişim)</p>
                    <div class="space-y-2 text-xs text-slate-200">
                        <p>1. Ahmet'in bilmediği bir adrese giderken cep telefonundan harita uygulamasını açıp rota çizmesi. ( ........................................ )</p>
                        <p>2. Ayşe'nin fen dersinde mikroskop ile çektiği hücre fotoğraflarını akıllı tahtaya aktarması. ( ........................................ )</p>
                        <p>3. Doktorun hastasının geçmiş akciğer grafisini ve kan tahlili sonuçlarını bilgisayar ekranından incelemesi. ( ........................................ )</p>
                        <p>4. Annemin elektrik faturasını bankaya gitmeden cep telefonu mobil uygulamasından ödemesi. ( ........................................ )</p>
                        <p>5. Şehir merkezindeki kavşakta kırmızı ışıkta geçen aracın MOBESE kamerası tarafından tespit edilmesi. ( ........................................ )</p>
                        <p>6. Otomobil fabrikasında insan gücü yerine robotik kolların araç gövdesini kaynak yapması. ( ........................................ )</p>
                        <p>7. Yurt dışında yaşayan teyzemizle internet üzerinden görüntülü olarak bayramlaşmamız. ( ........................................ )</p>
                    </div>
                </div>

                <!-- BÖLÜM B: DİJİTAL SAĞLIK DOĞRU / YANLIŞ -->
                <div class="space-y-3 pt-4 border-t border-slate-800">
                    <h3 class="text-sm font-black text-yellow-300 uppercase">
                        Bölüm B) Dijital Sağlık ve Ergonomi: İfadelerin başına Doğru ise ( D ), Yanlış ise ( Y ) yazınız:
                    </h3>
                    <div class="space-y-2 text-xs text-slate-200">
                        <p>( ... ) 1. Bilgisayar ekranına olan mesafemiz yaklaşık 50-70 cm (bir kol boyu) olmalıdır.</p>
                        <p>( ... ) 2. Boyun ve omurga sağlığımız için yatarak ve kucağımızda bilgisayarla çalışmak en sağlıklı yöntemdir.</p>
                        <p>( ... ) 3. 20-20-20 kuralı; her 20 dakikada bir, 20 saniye boyunca 20 fit (6 metre) uzağa bakarak gözleri dinlendirmektir.</p>
                        <p>( ... ) 4. Sandalyede otururken sırt dik olmalı ve bel desteği kullanılmalıdır.</p>
                        <p>( ... ) 5. Ekran başında günde 8 saat hiç mola vermeden oyun oynamak beden sağlığımızı olumlu etkiler.</p>
                        <p>( ... ) 6. Bilgisayar ekranının üst kenarı yaklaşık olarak göz hizamızda olmalıdır.</p>
                    </div>
                </div>

                <!-- BÖLÜM C: OLUMLU MU OLUMSUZ MU? -->
                <div class="space-y-3 pt-4 border-t border-slate-800">
                    <h3 class="text-sm font-black text-emerald-300 uppercase">
                        Bölüm C) Olumlu mu, Olumsuz mu?: Durumların yanına ( + ) veya ( - ) işareti koyunuz:
                    </h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                        <p>1. Uzaktaki akrabalarla görüntülü konuşarak hasret gidermek. ( ..... )</p>
                        <p>2. Sürekli ekrana bakmaktan dolayı arkadaşlarıyla oynamamak. ( ..... )</p>
                        <p>3. Faturaları online ödeyerek saatlerce kuyrukta beklemekten kurtulmak. ( ..... )</p>
                        <p>4. Uzun süre hareketsiz oturmaktan dolayı aşırı kilo (obezite) almak. ( ..... )</p>
                        <p>5. Ödevimiz için kütüphaneye gitmeden güvenilir bilgiye saniyeler içinde ulaşmak. ( ..... )</p>
                        <p>6. Bilgisayar oyununu bırakamadığı için gece geç saatlere kadar uykusuz kalmak. ( ..... )</p>
                    </div>
                </div>
            </div>
        </div>
        `,

        // ==========================================
        // 🔑 1. KAĞIT CEVAP ANAHTARI
        // ==========================================
        kagit1_cevapHtml: `
        <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-emerald-500/50 shadow-2xl space-y-8">
            <div class="worksheet-page space-y-6">
                <div class="border-b-2 border-emerald-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-emerald-500/30 text-emerald-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            Resmî Çözüm Anahtarı
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            1. KAĞIT RESMÎ ÇÖZÜM ANAHTARI
                        </h1>
                    </div>
                    <span class="px-3 py-1 bg-emerald-400/20 text-emerald-300 border border-emerald-400/40 rounded-xl text-xs font-black">
                        1. Kağıt Çözümleri
                    </span>
                </div>

                <!-- Bölüm A Çözümleri -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2">
                    <h3 class="text-sm font-black text-cyan-300 uppercase">Bölüm A) Bilişim Alanı Dedektifi Çözümleri:</h3>
                    <div class="space-y-1.5 text-xs text-slate-200">
                        <p>1. Harita uygulamasından rota çizmek ➔ <strong class="text-cyan-400">Ulaşım</strong></p>
                        <p>2. Hücre fotoğraflarını akıllı tahtaya aktarmak ➔ <strong class="text-purple-400">Eğitim</strong></p>
                        <p>3. Röntgen ve tahlil sonuçlarını incelemek ➔ <strong class="text-emerald-400">Sağlık</strong></p>
                        <p>4. Elektrik faturasını mobil bankacılıktan ödemek ➔ <strong class="text-amber-400">Bankacılık</strong></p>
                        <p>5. Kırmızı ışık ihlalini MOBESE kamerasının yakalaması ➔ <strong class="text-rose-400">Güvenlik</strong></p>
                        <p>6. Otomobil fabrikasındaki montaj robotları ➔ <strong class="text-yellow-400">Sanayi / Üretim</strong></p>
                        <p>7. İnternetten uzaktaki akrabayla görüntülü görüşmek ➔ <strong class="text-teal-400">İletişim</strong></p>
                    </div>
                </div>

                <!-- Bölüm B Çözümleri -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2">
                    <h3 class="text-sm font-black text-yellow-300 uppercase">Bölüm B) Dijital Sağlık ve Ergonomi Çözümleri:</h3>
                    <div class="space-y-1 text-xs text-slate-200">
                        <p>1. <strong>( D ) DOĞRU:</strong> Ekrana 50-70 cm (bir kol boyu) mesafede durulmalıdır.</p>
                        <p>2. <strong>( Y ) YANLIŞ:</strong> Yatarak bilgisayar kullanmak omurga ve boyun eğriliğine sebep olur.</p>
                        <p>3. <strong>( D ) DOĞRU:</strong> 20-20-20 kuralı göz kaslarını dinlendirerek göz yorgunluğunu önler.</p>
                        <p>4. <strong>( D ) DOĞRU:</strong> Sırt dik ve bel destekli olmalıdır.</p>
                        <p>5. <strong>( Y ) YANLIŞ:</strong> Günde 8 saat mola vermeden oynamak bağımlılık ve bedensel rahatsızlık yaratır.</p>
                        <p>6. <strong>( D ) DOĞRU:</strong> Ekran üst kenarı yaklaşık göz hizasında olmalıdır.</p>
                    </div>
                </div>

                <!-- Bölüm C Çözümleri -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2">
                    <h3 class="text-sm font-black text-emerald-300 uppercase">Bölüm C) Olumlu / Olumsuz Çözümleri:</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                        <p>1. Görüntülü hasret gidermek ➔ <strong class="text-emerald-400">( + ) Olumlu</strong></p>
                        <p>2. Arkadaşlarıyla oynamamak ➔ <strong class="text-rose-400">( - ) Olumsuz</strong></p>
                        <p>3. Online fatura ödemek ➔ <strong class="text-emerald-400">( + ) Olumlu</strong></p>
                        <p>4. Aşırı kilo (obezite) almak ➔ <strong class="text-rose-400">( - ) Olumsuz</strong></p>
                        <p>5. Bilgiye saniyeler içinde ulaşmak ➔ <strong class="text-emerald-400">( + ) Olumlu</strong></p>
                        <p>6. Gece uykusuz kalmak ➔ <strong class="text-rose-400">( - ) Olumsuz</strong></p>
                    </div>
                </div>
            </div>
        </div>
        `,

        // ==========================================
        // 📄 2. KAĞIT: SAYFA 2 ETKİNLİK KAĞIDI
        // ==========================================
        kagit2Html: `
        <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-blue-500/50 shadow-2xl space-y-8">
            <div class="worksheet-page space-y-6">
                <div class="border-b-2 border-blue-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-blue-500/30 text-blue-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            5. Sınıf Bilişim Teknolojileri • 2. Etkinlik & Çalışma Kağıdı
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            2. KAĞIT: DİJİTAL AYAK İZİ, e-DEVLET VE TEST
                        </h1>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        2. Kağıt (Sayfa 1 / 1)
                    </span>
                </div>

                <!-- Öğrenci Bilgi Kutusu -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs p-3 bg-slate-850 rounded-xl border border-slate-700">
                    <div><strong>Adı Soyadı:</strong> .....................................</div>
                    <div><strong>Sınıfı / No:</strong> ............. / .............</div>
                    <div><strong>Tarih:</strong> ...... / ...... / 2026</div>
                    <div><strong>Aldığı Not:</strong> ....................</div>
                </div>

                <!-- BÖLÜM D: DİJİTAL AYAK İZİ DEDEKTİFİ -->
                <div class="space-y-3">
                    <h3 class="text-sm font-black text-cyan-300 uppercase">
                        Bölüm D) Dijital Ayak İzi Dedektifi: Durumların yanına Aktif Ayak İzi mi, Pasif Ayak İzi mi olduğunu yazınız:
                    </h3>
                    <div class="space-y-2 text-xs text-slate-200">
                        <p>1. Ela'nın kendi yaptığı resmin fotoğrafını sosyal medya hesabında paylaşması. ( ........................................ )</p>
                        <p>2. Ziyaret ettiğimiz haber sitesinin bilgisayarımıza reklam çerezleri bırakması. ( ........................................ )</p>
                        <p>3. YouTube'da izlediğimiz bir ders videosunun altına teşekkür yorumu yazmak. ( ........................................ )</p>
                        <p>4. Harita uygulamasını açtığımızda telefonun arka planda geçtiğimiz caddeleri kaydetmesi. ( ........................................ )</p>
                        <p>5. Arama motorunda '5. Sınıf Bilişim Konuları' şeklinde arama yaptığımızda aramanın kaydedilmesi. ( ........................................ )</p>
                        <p>6. Öğretmenimize hazırladığımız proje ödevini e-posta eki olarak göndermek. ( ........................................ )</p>
                    </div>
                </div>

                <!-- BÖLÜM E: e-HİZMETLER EŞLEŞTİRMESİ -->
                <div class="space-y-3 pt-4 border-t border-slate-800">
                    <h3 class="text-sm font-black text-yellow-300 uppercase">
                        Bölüm E) e-Hizmetler Postanesi: Durumları doğru dijital kapı ile eşleştiriniz:
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-200">
                        <div class="p-3 bg-slate-850 rounded-xl border border-slate-700 space-y-1">
                            <p class="font-bold text-yellow-300 mb-1">Vatandaşın Talebi & Durumu:</p>
                            <p>1. Dönem sonu karneme ve sınav notlarıma bakmak istiyorum.</p>
                            <p>2. İkametgah belgesi ve resmi tapu kaydımı çıkarmak istiyorum.</p>
                            <p>3. Geçmiş aşı kartımı ve tahlil sonuçlarımı görmek istiyorum.</p>
                            <p>4. Devlet hastanesinden göz muayenesi randevusu almak istiyorum.</p>
                            <p>5. Bilişim dersi için eğitici video ve animasyonları izlemek istiyorum.</p>
                            <p>6. Otomobilimin motorlu taşıtlar vergisini (MTV) ödemek istiyorum.</p>
                            <p>7. Gece yarısı bankaya gitmeden para transferi yapmak istiyorum.</p>
                        </div>
                        <div class="p-3 bg-slate-850 rounded-xl border border-slate-700 space-y-1">
                            <p class="font-bold text-emerald-300 mb-1">Kullanılacak Dijital Sistem:</p>
                            <p>( ... ) e-Devlet Kapısı (turkiye.gov.tr)</p>
                            <p>( ... ) e-Okul Veli Bilgilendirme Sistemi</p>
                            <p>( ... ) e-Nabız Kişisel Sağlık Sistemi</p>
                            <p>( ... ) MHRS (Merkezi Hekim Randevu Sistemi)</p>
                            <p>( ... ) EBA Portalı (Eğitim Bilişim Ağı)</p>
                            <p>( ... ) e-Vergi (İnteraktif Vergi Dairesi)</p>
                            <p>( ... ) e-Bankacılık (Mobil Bankacılık)</p>
                        </div>
                    </div>
                </div>

                <!-- BÖLÜM F: 1-2-3 BÜYÜK DEĞERLENDİRME TESTİ (6 SORU) -->
                <div class="space-y-4 pt-4 border-t border-slate-800">
                    <h3 class="text-sm font-black text-pink-300 uppercase">
                        Bölüm F) 1, 2 ve 3. Konular Çoktan Seçmeli Değerlendirme Testi:
                    </h3>
                    <div class="space-y-3 text-xs text-slate-200">
                        <div class="p-3 bg-slate-850 rounded-xl border border-slate-700 space-y-1.5">
                            <p class="font-bold text-white">1. “Bilgi” ve “İletişim” kelimelerinin bir araya gelmesiyle oluşan temel kavram hangisidir?</p>
                            <p>A) Algoritma &nbsp;&nbsp;&nbsp;&nbsp; B) Bilişim &nbsp;&nbsp;&nbsp;&nbsp; C) Donanım &nbsp;&nbsp;&nbsp;&nbsp; D) Yazılım</p>
                        </div>
                        <div class="p-3 bg-slate-850 rounded-xl border border-slate-700 space-y-1.5">
                            <p class="font-bold text-white">2. Bilgisayar başında çalışırken ekrana olan mesafemiz yaklaşık ne kadar olmalıdır?</p>
                            <p>A) 10-15 cm çok yakın &nbsp;&nbsp;&nbsp;&nbsp; B) 50-70 cm (bir kol boyu) &nbsp;&nbsp;&nbsp;&nbsp; C) 2 metre uzakta &nbsp;&nbsp;&nbsp;&nbsp; D) Fark etmez</p>
                        </div>
                        <div class="p-3 bg-slate-850 rounded-xl border border-slate-700 space-y-1.5">
                            <p class="font-bold text-white">3. İnternette isteğimizle paylaştığımız fotoğraflar, videolar ve yorumlar hangi ayak izidir?</p>
                            <p>A) Pasif Dijital Ayak İzi &nbsp;&nbsp;&nbsp;&nbsp; B) Geçici Ayak İzi &nbsp;&nbsp;&nbsp;&nbsp; C) Aktif Dijital Ayak İzi &nbsp;&nbsp;&nbsp;&nbsp; D) Gizli Ayak İzi</p>
                        </div>
                        <div class="p-3 bg-slate-850 rounded-xl border border-slate-700 space-y-1.5">
                            <p class="font-bold text-white">4. Tüm kamu kurumlarına ait yüzlerce resmi hizmete tek bir şifreyle 7/24 ulaştığımız kapı hangisidir?</p>
                            <p>A) e-Devlet Kapısı &nbsp;&nbsp;&nbsp;&nbsp; B) Sosyal Medya &nbsp;&nbsp;&nbsp;&nbsp; C) Arama Motoru &nbsp;&nbsp;&nbsp;&nbsp; D) Video Kanalı</p>
                        </div>
                        <div class="p-3 bg-slate-850 rounded-xl border border-slate-700 space-y-1.5">
                            <p class="font-bold text-white">5. Aşağıdakilerden hangisi GÜÇLÜ bir şifre örneğidir?</p>
                            <p>A) 12345678 &nbsp;&nbsp;&nbsp;&nbsp; B) ahmet2014 &nbsp;&nbsp;&nbsp;&nbsp; C) B1l!s!m#2026 &nbsp;&nbsp;&nbsp;&nbsp; D) sifrem123</p>
                        </div>
                        <div class="p-3 bg-slate-850 rounded-xl border border-slate-700 space-y-1.5">
                            <p class="font-bold text-white">6. Sanal ortamda birisi sizi rahatsız ettiğinde yapılması gereken İLK doğru davranış nedir?</p>
                            <p>A) Ona küfürle karşılık vermek &nbsp;&nbsp;&nbsp;&nbsp; B) Şifremizi ona göndermek &nbsp;&nbsp;&nbsp;&nbsp; C) Engellemek ve güvenilir bir yetişkine bildirmek &nbsp;&nbsp;&nbsp;&nbsp; D) Hiç kimseye söylememek</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `,

        // ==========================================
        // 🔑 2. KAĞIT CEVAP ANAHTARI
        // ==========================================
        kagit2_cevapHtml: `
        <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-emerald-500/50 shadow-2xl space-y-8">
            <div class="worksheet-page space-y-6">
                <div class="border-b-2 border-emerald-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-purple-500/30 text-purple-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            Resmî Çözüm Anahtarı
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            2. KAĞIT RESMÎ ÇÖZÜM ANAHTARI
                        </h1>
                    </div>
                    <span class="px-3 py-1 bg-emerald-400/20 text-emerald-300 border border-emerald-400/40 rounded-xl text-xs font-black">
                        2. Kağıt Çözümleri
                    </span>
                </div>

                <!-- Bölüm D Çözümleri -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2">
                    <h3 class="text-sm font-black text-cyan-300 uppercase">Bölüm D) Dijital Ayak İzi Çözümleri:</h3>
                    <div class="space-y-1.5 text-xs text-slate-200">
                        <p>1. Sosyal medyaya resim yüklemek ➔ <strong class="text-blue-300">Aktif Dijital Ayak İzi</strong> (İsteğimizle paylaşıldı)</p>
                        <p>2. Ziyaret edilen sitenin çerez bırakması ➔ <strong class="text-cyan-300">Pasif Dijital Ayak İzi</strong> (Arka planda kaydedildi)</p>
                        <p>3. Videonun altına yorum yazmak ➔ <strong class="text-blue-300">Aktif Dijital Ayak İzi</strong> (İsteğimizle paylaşıldı)</p>
                        <p>4. Haritanın arka planda konumu kaydetmesi ➔ <strong class="text-cyan-300">Pasif Dijital Ayak İzi</strong> (Otomatik toplandı)</p>
                        <p>5. Arama motorundaki arama kayıtları ➔ <strong class="text-cyan-300">Pasif Dijital Ayak İzi</strong> (Geçmişe kaydedildi)</p>
                        <p>6. E-posta ile ödev göndermek ➔ <strong class="text-blue-300">Aktif Dijital Ayak İzi</strong> (İsteğimizle gönderildi)</p>
                    </div>
                </div>

                <!-- Bölüm E Çözümleri -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2">
                    <h3 class="text-sm font-black text-yellow-300 uppercase">Bölüm E) e-Hizmetler Postanesi Çözümleri:</h3>
                    <div class="space-y-1 text-xs text-slate-200">
                        <p>1. Karne ve sınav notlarına bakmak ➔ <strong class="text-blue-400">e-Okul</strong></p>
                        <p>2. İkametgah ve resmi tapu kaydı çıkarmak ➔ <strong class="text-red-400">e-Devlet</strong></p>
                        <p>3. Aşı kartı ve tahlil sonuçlarını görmek ➔ <strong class="text-emerald-400">e-Nabız</strong></p>
                        <p>4. Hastaneden muayene randevusu almak ➔ <strong class="text-teal-400">MHRS</strong></p>
                        <p>5. Eğitici video ve animasyonları izlemek ➔ <strong class="text-purple-400">EBA</strong></p>
                        <p>6. Motorlu taşıtlar vergisini (MTV) ödemek ➔ <strong class="text-amber-400">e-Vergi</strong></p>
                        <p>7. Gece yarısı para transferi yapmak ➔ <strong class="text-cyan-400">e-Bankacılık</strong></p>
                    </div>
                </div>

                <!-- Bölüm F Çözümleri -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2">
                    <h3 class="text-sm font-black text-pink-300 uppercase">Bölüm F) Çoktan Seçmeli Test Çözümleri:</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                        <p>1. Doğru Cevap: <strong class="text-yellow-300">B (Bilişim)</strong></p>
                        <p>2. Doğru Cevap: <strong class="text-yellow-300">B (50-70 cm - bir kol boyu)</strong></p>
                        <p>3. Doğru Cevap: <strong class="text-yellow-300">C (Aktif Dijital Ayak İzi)</strong></p>
                        <p>4. Doğru Cevap: <strong class="text-yellow-300">A (e-Devlet Kapısı)</strong></p>
                        <p>5. Doğru Cevap: <strong class="text-yellow-300">C (B1l!s!m#2026 - harf, rakam ve sembol)</strong></p>
                        <p>6. Doğru Cevap: <strong class="text-yellow-300">C (Engellemek ve güvenilir yetişkine bildirmek)</strong></p>
                    </div>
                </div>
            </div>
        </div>
        `,

        // ==========================================
        // 📖 KONU ÖZETİ (1, 2 VE 3. KONULAR GENEL TEKRAR REHBERİ)
        // ==========================================
        konuHtml: `
        <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-indigo-500/50 shadow-2xl space-y-8">
            <!-- SAYFA 1: 1. VE 2. KONULAR ÖZETİ -->
            <div class="worksheet-page space-y-6">
                <div class="border-b-2 border-indigo-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            BOZOK BİLİŞİM PORTALI • 1, 2 VE 3. KONULAR GENEL TEKRAR REHBERİ
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 1: BİLİŞİM TEKNOLOJİLERİ VE DİJİTAL SAĞLIK ÖZETİ
                        </h1>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        Sayfa: 1 / 2
                    </span>
                </div>

                <!-- BÖLÜM 1: 1. KONU TEKRARI -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-blue-500/40 space-y-3">
                    <h3 class="text-base font-black text-blue-300 flex items-center gap-2">
                        <i class="fa-solid fa-laptop-code"></i> 1. KONU: BİLİŞİM VE KULLANIM ALANLARI
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-200">
                        <div class="p-3 bg-slate-900 rounded-xl border border-slate-700 space-y-1">
                            <span class="font-bold text-yellow-300 text-sm">Bilişim Nedir?</span>
                            <p><strong>BİLGİ + İLETİŞİM = BİLİŞİM:</strong> Bilginin toplanması, saklanması, işlenmesi ve ağlar aracılığıyla aktarılmasını sağlayan araçların bütünüdür.</p>
                        </div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-slate-700 space-y-1">
                            <span class="font-bold text-cyan-300 text-sm">Teknoloji Nedir?</span>
                            <p>İnsanoğlunun hayatını kolaylaştırmak, bir işi daha hızlı ve verimli yapmak için ürettiği araç, gereç, alet ve yöntemlerin tamamıdır.</p>
                        </div>
                    </div>

                    <div class="pt-2">
                        <h4 class="font-bold text-white text-xs mb-2">Bilişim Teknolojilerinin Kullanım Alanları:</h4>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-slate-300">
                            <div class="p-2 bg-slate-900/80 rounded-lg border border-slate-700"><strong>🏥 Sağlık:</strong> MHRS, e-Nabız, dijital tahlil, MR.</div>
                            <div class="p-2 bg-slate-900/80 rounded-lg border border-slate-700"><strong>🎓 Eğitim:</strong> Akıllı tahta, EBA, e-Okul, tablet.</div>
                            <div class="p-2 bg-slate-900/80 rounded-lg border border-slate-700"><strong>🚗 Ulaşım:</strong> Navigasyon, HGS/OGS, online bilet.</div>
                            <div class="p-2 bg-slate-900/80 rounded-lg border border-slate-700"><strong>💳 Bankacılık:</strong> ATM, mobil bankacılık, temassız kart.</div>
                            <div class="p-2 bg-slate-900/80 rounded-lg border border-slate-700"><strong>🛡️ Güvenlik:</strong> MOBESE, parmak izi, alarm.</div>
                            <div class="p-2 bg-slate-900/80 rounded-lg border border-slate-700"><strong>🏭 Sanayi:</strong> Üretim robotları, 3D yazıcı.</div>
                            <div class="p-2 bg-slate-900/80 rounded-lg border border-slate-700"><strong>💬 İletişim:</strong> E-posta, görüntülü arama.</div>
                            <div class="p-2 bg-slate-900/80 rounded-lg border border-slate-700"><strong>🎬 Eğlence:</strong> 3D animasyon, video oyunları.</div>
                        </div>
                    </div>
                </div>

                <!-- BÖLÜM 2: 2. KONU TEKRARI -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-amber-500/40 space-y-3">
                    <h3 class="text-base font-black text-amber-300 flex items-center gap-2">
                        <i class="fa-solid fa-heart-pulse"></i> 2. KONU: TEKNOLOJİNİN ETKİLERİ & DİJİTAL SAĞLIK
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-200">
                        <div class="p-3 bg-emerald-950/40 rounded-xl border border-emerald-500/30 space-y-1">
                            <span class="font-bold text-emerald-300">🌟 Olumlu Yönler:</span>
                            <p>Bilgiye hızlı erişim, zamandan ve maliyetten tasarruf, küresel iletişim, eğitimde kolaylık.</p>
                        </div>
                        <div class="p-3 bg-rose-950/40 rounded-xl border border-rose-500/30 space-y-1">
                            <span class="font-bold text-rose-300">⚠️ Olumsuz Yönler:</span>
                            <p>Hareketsizlik, teknoloji/oyun bağımlılığı, göz yorgunluğu, sosyal bağların zayıflaması, duruş bozuklukları.</p>
                        </div>
                    </div>

                    <div class="p-3.5 bg-slate-900 rounded-xl border border-slate-700 space-y-2">
                        <span class="font-bold text-teal-300 text-xs uppercase block">🪑 Ergonomi & Sağlıklı Oturuş Kuralları:</span>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-slate-300">
                            <div>• <strong>Ekran Mesafesi:</strong> Ekrana 50-70 cm (bir kol boyu) uzaktan bakılmalı.</div>
                            <div>• <strong>90 Derece Kuralı:</strong> Sırt dik, bel destekli, dirsekler ve dizler 90 derece açıda olmalı.</div>
                            <div>• <strong>20-20-20 Kuralı:</strong> Her 20 dakikada bir, 20 fit (6 metre) uzağa 20 saniye bakılmalı.</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- SAYFA AYIRICI (PRINT PAGE BREAK) -->
            <div class="page-break my-8 border-t-4 border-dashed border-indigo-500/40 pt-8" style="page-break-before: always;">
                <div class="border-b-2 border-indigo-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-purple-500/30 text-purple-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            BOZOK BİLİŞİM PORTALI • 1, 2 VE 3. KONULAR GENEL TEKRAR REHBERİ
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 2: DİJİTAL VATANDAŞLIK & e-DEVLET HİZMETLERİ ÖZETİ
                        </h1>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        Sayfa: 2 / 2
                    </span>
                </div>

                <!-- BÖLÜM 3: 3. KONU TEKRARI -->
                <div class="mt-6 p-4 bg-slate-850 rounded-2xl border border-purple-500/40 space-y-4">
                    <h3 class="text-base font-black text-purple-300 flex items-center gap-2">
                        <i class="fa-solid fa-shield-halved"></i> 3. KONU: DİJİTAL VATANDAŞLIK & DİJİTAL AYAK İZİ
                    </h3>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
                        <div class="p-3 bg-slate-900 rounded-xl border border-slate-700 space-y-1">
                            <span class="font-bold text-yellow-300">🐾 Aktif Dijital Ayak İzi:</span>
                            <p>Kendi isteğimizle bilerek oluşturduğumuz izlerdir. (Fotoğraf/video yüklemek, yorum yazmak, e-posta atmak).</p>
                        </div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-slate-700 space-y-1">
                            <span class="font-bold text-cyan-300">🐾 Pasif Dijital Ayak İzi:</span>
                            <p>Biz farkında olmadan sistemlerin arkada bıraktığı izlerdir. (Çerezler, arama motoru geçmişi, konum verisi).</p>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-900 rounded-xl border border-slate-700 space-y-2">
                        <h4 class="font-bold text-emerald-300 text-xs uppercase">🏛️ Temel e-Hizmetler Tablosu:</h4>
                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] text-slate-300">
                            <div>• <strong>e-Devlet:</strong> turkiye.gov.tr, tüm kamu hizmetleri tek çatıda.</div>
                            <div>• <strong>e-Okul:</strong> Notlar, devamsızlık ve karne bilgileri.</div>
                            <div>• <strong>e-Nabız:</strong> Geçmiş tahliller, aşılar, reçeteler.</div>
                            <div>• <strong>MHRS (Alo 182):</strong> Hastane randevusu alma.</div>
                            <div>• <strong>EBA:</strong> Ders kitapları ve eğitim portalı.</div>
                            <div>• <strong>e-Vergi / e-Banka:</strong> Vergi ve online finans işlemleri.</div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div class="p-3 bg-slate-900 rounded-xl border border-slate-700 space-y-1">
                            <span class="font-bold text-yellow-300">🔑 Güçlü Şifre Kriterleri:</span>
                            <p class="text-slate-300">En az 8 karakter, büyük harf, küçük harf, rakam ve sembol (#, ?, !) içermelidir.</p>
                        </div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-slate-700 space-y-1">
                            <span class="font-bold text-pink-300">💡 D.Ü.Ş.Ü.N. Kuralı:</span>
                            <p class="text-slate-300">Paylaşmadan önce sor: <strong>D</strong>oğru mu? <strong>Ü</strong>retken mi? <strong>Ş</strong>efkatli mi? <strong>Ü</strong>zücü mü? <strong>N</strong>azik mi?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `,

        soruHtml: `
        <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-indigo-500/50 shadow-2xl space-y-8">
            <!-- SAYFA 1 ETKİNLİKLERİ: 1. VE 2. KONU -->
            <div class="worksheet-page space-y-6">
                <div class="border-b-2 border-indigo-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            5. Sınıf Bilişim Teknolojileri • Etkinlik & Çalışma Kağıdı
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 1: BİLİŞİM ALANLARI VE DİJİTAL SAĞLIK ETKİNLİKLERİ
                        </h1>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        Sayfa: 1 / 2
                    </span>
                </div>

                <!-- Öğrenci Bilgi Kutusu -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs p-3 bg-slate-850 rounded-xl border border-slate-700">
                    <div><strong>Adı Soyadı:</strong> .....................................</div>
                    <div><strong>Sınıfı / No:</strong> ............. / .............</div>
                    <div><strong>Tarih:</strong> ...... / ...... / 2026</div>
                    <div><strong>Aldığı Not:</strong> ....................</div>
                </div>

                <!-- BÖLÜM A: BİLİŞİM ALANLARI VAKA DEDEKTİFİ -->
                <div class="space-y-3">
                    <h3 class="text-sm font-black text-cyan-300 uppercase">
                        Bölüm A) Bilişim Alanı Dedektifi: Aşağıdaki durumların hangi bilişim alanına girdiğini parantez içine yazınız:
                    </h3>
                    <p class="text-[11px] text-slate-400">(Kullanılacak Alanlar: Sağlık, Eğitim, Ulaşım, Bankacılık, Güvenlik, Sanayi/Üretim, İletişim)</p>
                    <div class="space-y-2 text-xs text-slate-200">
                        <p>1. Ahmet'in bilmediği bir adrese giderken cep telefonundan harita uygulamasını açıp rota çizmesi. ( ........................................ )</p>
                        <p>2. Ayşe'nin fen dersinde mikroskop ile çektiği hücre fotoğraflarını akıllı tahtaya aktarması. ( ........................................ )</p>
                        <p>3. Doktorun hastasının geçmiş akciğer grafisini ve kan tahlili sonuçlarını bilgisayar ekranından incelemesi. ( ........................................ )</p>
                        <p>4. Annemin elektrik faturasını bankaya gitmeden cep telefonu mobil uygulamasından ödemesi. ( ........................................ )</p>
                        <p>5. Şehir merkezindeki kavşakta kırmızı ışıkta geçen aracın MOBESE kamerası tarafından tespit edilmesi. ( ........................................ )</p>
                        <p>6. Otomobil fabrikasında insan gücü yerine robotik kolların araç gövdesini kaynak yapması. ( ........................................ )</p>
                        <p>7. Yurt dışında yaşayan teyzemizle internet üzerinden görüntülü olarak bayramlaşmamız. ( ........................................ )</p>
                    </div>
                </div>

                <!-- BÖLÜM B: DİJİTAL SAĞLIK DOĞRU / YANLIŞ -->
                <div class="space-y-3 pt-4 border-t border-slate-800">
                    <h3 class="text-sm font-black text-yellow-300 uppercase">
                        Bölüm B) Dijital Sağlık ve Ergonomi: İfadelerin başına Doğru ise ( D ), Yanlış ise ( Y ) yazınız:
                    </h3>
                    <div class="space-y-2 text-xs text-slate-200">
                        <p>( ... ) 1. Bilgisayar ekranına olan mesafemiz yaklaşık 50-70 cm (bir kol boyu) olmalıdır.</p>
                        <p>( ... ) 2. Boyun ve omurga sağlığımız için yatarak ve kucağımızda bilgisayarla çalışmak en sağlıklı yöntemdir.</p>
                        <p>( ... ) 3. 20-20-20 kuralı; her 20 dakikada bir, 20 saniye boyunca 20 fit (6 metre) uzağa bakarak gözleri dinlendirmektir.</p>
                        <p>( ... ) 4. Sandalyede otururken sırt dik olmalı ve bel desteği kullanılmalıdır.</p>
                        <p>( ... ) 5. Ekran başında günde 8 saat hiç mola vermeden oyun oynamak beden sağlığımızı olumlu etkiler.</p>
                        <p>( ... ) 6. Bilgisayar ekranının üst kenarı yaklaşık olarak göz hizamızda olmalıdır.</p>
                    </div>
                </div>

                <!-- BÖLÜM C: OLUMLU MU OLUMSUZ MU? -->
                <div class="space-y-3 pt-4 border-t border-slate-800">
                    <h3 class="text-sm font-black text-emerald-300 uppercase">
                        Bölüm C) Olumlu mu, Olumsuz mu?: Durumların yanına ( + ) veya ( - ) işareti koyunuz:
                    </h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                        <p>1. Uzaktaki akrabalarla görüntülü konuşarak hasret gidermek. ( ..... )</p>
                        <p>2. Sürekli ekrana bakmaktan dolayı arkadaşlarıyla oynamamak. ( ..... )</p>
                        <p>3. Faturaları online ödeyerek saatlerce kuyrukta beklemekten kurtulmak. ( ..... )</p>
                        <p>4. Uzun süre hareketsiz oturmaktan dolayı aşırı kilo (obezite) almak. ( ..... )</p>
                        <p>5. Ödevimiz için kütüphaneye gitmeden güvenilir bilgiye saniyeler içinde ulaşmak. ( ..... )</p>
                        <p>6. Bilgisayar oyununu bırakamadığı için gece geç saatlere kadar uykusuz kalmak. ( ..... )</p>
                    </div>
                </div>
            </div>

            <!-- SAYFA AYIRICI (PRINT PAGE BREAK) -->
            <div class="page-break my-8 border-t-4 border-dashed border-indigo-500/40 pt-8" style="page-break-before: always;">
                <div class="border-b-2 border-indigo-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-purple-500/30 text-purple-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            5. Sınıf Bilişim Teknolojileri • Etkinlik & Çalışma Kağıdı
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 2: DİJİTAL AYAK İZİ, e-DEVLET VE ÇOKTAN SEÇMELİ TEST
                        </h1>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        Sayfa: 2 / 2
                    </span>
                </div>

                <!-- BÖLÜM D: DİJİTAL AYAK İZİ DEDEKTİFİ -->
                <div class="space-y-3 mt-6">
                    <h3 class="text-sm font-black text-cyan-300 uppercase">
                        Bölüm D) Dijital Ayak İzi Dedektifi: Durumların yanına Aktif Ayak İzi mi, Pasif Ayak İzi mi olduğunu yazınız:
                    </h3>
                    <div class="space-y-2 text-xs text-slate-200">
                        <p>1. Ela'nın kendi yaptığı resmin fotoğrafını sosyal medya hesabında paylaşması. ( ........................................ )</p>
                        <p>2. Ziyaret ettiğimiz haber sitesinin bilgisayarımıza reklam çerezleri bırakması. ( ........................................ )</p>
                        <p>3. YouTube'da izlediğimiz bir ders videosunun altına teşekkür yorumu yazmak. ( ........................................ )</p>
                        <p>4. Harita uygulamasını açtığımızda telefonun arka planda geçtiğimiz caddeleri kaydetmesi. ( ........................................ )</p>
                        <p>5. Arama motorunda '5. Sınıf Bilişim Konuları' şeklinde arama yaptığımızda aramanın kaydedilmesi. ( ........................................ )</p>
                        <p>6. Öğretmenimize hazırladığımız proje ödevini e-posta eki olarak göndermek. ( ........................................ )</p>
                    </div>
                </div>

                <!-- BÖLÜM E: e-HİZMETLER EŞLEŞTİRMESİ -->
                <div class="space-y-3 pt-4 border-t border-slate-800">
                    <h3 class="text-sm font-black text-yellow-300 uppercase">
                        Bölüm E) e-Hizmetler Postanesi: Durumları doğru dijital kapı ile eşleştiriniz:
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-200">
                        <div class="p-3 bg-slate-850 rounded-xl border border-slate-700 space-y-1">
                            <p class="font-bold text-yellow-300 mb-1">Vatandaşın Talebi & Durumu:</p>
                            <p>1. Dönem sonu karneme ve sınav notlarıma bakmak istiyorum.</p>
                            <p>2. İkametgah belgesi ve resmi tapu kaydımı çıkarmak istiyorum.</p>
                            <p>3. Geçmiş aşı kartımı ve tahlil sonuçlarımı görmek istiyorum.</p>
                            <p>4. Devlet hastanesinden göz muayenesi randevusu almak istiyorum.</p>
                            <p>5. Bilişim dersi için eğitici video ve animasyonları izlemek istiyorum.</p>
                            <p>6. Otomobilimin motorlu taşıtlar vergisini (MTV) ödemek istiyorum.</p>
                            <p>7. Gece yarısı bankaya gitmeden para transferi yapmak istiyorum.</p>
                        </div>
                        <div class="p-3 bg-slate-850 rounded-xl border border-slate-700 space-y-1">
                            <p class="font-bold text-emerald-300 mb-1">Kullanılacak Dijital Sistem:</p>
                            <p>( ... ) e-Devlet Kapısı (turkiye.gov.tr)</p>
                            <p>( ... ) e-Okul Veli Bilgilendirme Sistemi</p>
                            <p>( ... ) e-Nabız Kişisel Sağlık Sistemi</p>
                            <p>( ... ) MHRS (Merkezi Hekim Randevu Sistemi)</p>
                            <p>( ... ) EBA Portalı (Eğitim Bilişim Ağı)</p>
                            <p>( ... ) e-Vergi (İnteraktif Vergi Dairesi)</p>
                            <p>( ... ) e-Bankacılık (Mobil Bankacılık)</p>
                        </div>
                    </div>
                </div>

                <!-- BÖLÜM F: 1-2-3 BÜYÜK DEĞERLENDİRME TESTİ (6 SORU) -->
                <div class="space-y-4 pt-4 border-t border-slate-800">
                    <h3 class="text-sm font-black text-pink-300 uppercase">
                        Bölüm F) 1, 2 ve 3. Konular Çoktan Seçmeli Değerlendirme Testi:
                    </h3>
                    <div class="space-y-3 text-xs text-slate-200">
                        <div class="p-3 bg-slate-850 rounded-xl border border-slate-700 space-y-1.5">
                            <p class="font-bold text-white">1. “Bilgi” ve “İletişim” kelimelerinin bir araya gelmesiyle oluşan temel kavram hangisidir?</p>
                            <p>A) Algoritma &nbsp;&nbsp;&nbsp;&nbsp; B) Bilişim &nbsp;&nbsp;&nbsp;&nbsp; C) Donanım &nbsp;&nbsp;&nbsp;&nbsp; D) Yazılım</p>
                        </div>
                        <div class="p-3 bg-slate-850 rounded-xl border border-slate-700 space-y-1.5">
                            <p class="font-bold text-white">2. Bilgisayar başında çalışırken ekrana olan mesafemiz yaklaşık ne kadar olmalıdır?</p>
                            <p>A) 10-15 cm çok yakın &nbsp;&nbsp;&nbsp;&nbsp; B) 50-70 cm (bir kol boyu) &nbsp;&nbsp;&nbsp;&nbsp; C) 2 metre uzakta &nbsp;&nbsp;&nbsp;&nbsp; D) Fark etmez</p>
                        </div>
                        <div class="p-3 bg-slate-850 rounded-xl border border-slate-700 space-y-1.5">
                            <p class="font-bold text-white">3. İnternette isteğimizle paylaştığımız fotoğraflar, videolar ve yorumlar hangi ayak izidir?</p>
                            <p>A) Pasif Dijital Ayak İzi &nbsp;&nbsp;&nbsp;&nbsp; B) Geçici Ayak İzi &nbsp;&nbsp;&nbsp;&nbsp; C) Aktif Dijital Ayak İzi &nbsp;&nbsp;&nbsp;&nbsp; D) Gizli Ayak İzi</p>
                        </div>
                        <div class="p-3 bg-slate-850 rounded-xl border border-slate-700 space-y-1.5">
                            <p class="font-bold text-white">4. Tüm kamu kurumlarına ait yüzlerce resmi hizmete tek bir şifreyle 7/24 ulaştığımız kapı hangisidir?</p>
                            <p>A) e-Devlet Kapısı &nbsp;&nbsp;&nbsp;&nbsp; B) Sosyal Medya &nbsp;&nbsp;&nbsp;&nbsp; C) Arama Motoru &nbsp;&nbsp;&nbsp;&nbsp; D) Video Kanalı</p>
                        </div>
                        <div class="p-3 bg-slate-850 rounded-xl border border-slate-700 space-y-1.5">
                            <p class="font-bold text-white">5. Aşağıdakilerden hangisi GÜÇLÜ bir şifre örneğidir?</p>
                            <p>A) 12345678 &nbsp;&nbsp;&nbsp;&nbsp; B) ahmet2014 &nbsp;&nbsp;&nbsp;&nbsp; C) B1l!s!m#2026 &nbsp;&nbsp;&nbsp;&nbsp; D) sifrem123</p>
                        </div>
                        <div class="p-3 bg-slate-850 rounded-xl border border-slate-700 space-y-1.5">
                            <p class="font-bold text-white">6. Sanal ortamda birisi sizi rahatsız ettiğinde yapılması gereken İLK doğru davranış nedir?</p>
                            <p>A) Ona küfürle karşılık vermek &nbsp;&nbsp;&nbsp;&nbsp; B) Şifremizi ona göndermek &nbsp;&nbsp;&nbsp;&nbsp; C) Engellemek ve güvenilir bir yetişkine bildirmek &nbsp;&nbsp;&nbsp;&nbsp; D) Hiç kimseye söylememek</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `,

        cevapHtml: `
        <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-emerald-500/50 shadow-2xl space-y-8">
            <!-- SAYFA 1 CEVAPLARI -->
            <div class="worksheet-page space-y-6">
                <div class="border-b-2 border-emerald-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-emerald-500/30 text-emerald-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            Resmî Çözüm Anahtarı
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 1 ETKİNLİK ÇÖZÜMLERİ
                        </h1>
                    </div>
                    <span class="px-3 py-1 bg-emerald-400/20 text-emerald-300 border border-emerald-400/40 rounded-xl text-xs font-black">
                        Sayfa: 1 / 2
                    </span>
                </div>

                <!-- Bölüm A Çözümleri -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2">
                    <h3 class="text-sm font-black text-cyan-300 uppercase">Bölüm A) Bilişim Alanı Dedektifi Çözümleri:</h3>
                    <div class="space-y-1.5 text-xs text-slate-200">
                        <p>1. Harita uygulamasından rota çizmek ➔ <strong class="text-cyan-400">Ulaşım</strong></p>
                        <p>2. Hücre fotoğraflarını akıllı tahtaya aktarmak ➔ <strong class="text-purple-400">Eğitim</strong></p>
                        <p>3. Röntgen ve tahlil sonuçlarını incelemek ➔ <strong class="text-emerald-400">Sağlık</strong></p>
                        <p>4. Elektrik faturasını mobil bankacılıktan ödemek ➔ <strong class="text-amber-400">Bankacılık</strong></p>
                        <p>5. Kırmızı ışık ihlalini MOBESE kamerasının yakalaması ➔ <strong class="text-rose-400">Güvenlik</strong></p>
                        <p>6. Otomobil fabrikasındaki montaj robotları ➔ <strong class="text-yellow-400">Sanayi / Üretim</strong></p>
                        <p>7. İnternetten uzaktaki akrabayla görüntülü görüşmek ➔ <strong class="text-teal-400">İletişim</strong></p>
                    </div>
                </div>

                <!-- Bölüm B Çözümleri -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2">
                    <h3 class="text-sm font-black text-yellow-300 uppercase">Bölüm B) Dijital Sağlık ve Ergonomi Çözümleri:</h3>
                    <div class="space-y-1 text-xs text-slate-200">
                        <p>1. <strong>( D ) DOĞRU:</strong> Ekrana 50-70 cm (bir kol boyu) mesafede durulmalıdır.</p>
                        <p>2. <strong>( Y ) YANLIŞ:</strong> Yatarak bilgisayar kullanmak omurga ve boyun eğriliğine sebep olur.</p>
                        <p>3. <strong>( D ) DOĞRU:</strong> 20-20-20 kuralı göz kaslarını dinlendirerek göz yorgunluğunu önler.</p>
                        <p>4. <strong>( D ) DOĞRU:</strong> Sırt dik ve bel destekli olmalıdır.</p>
                        <p>5. <strong>( Y ) YANLIŞ:</strong> Günde 8 saat mola vermeden oynamak bağımlılık ve bedensel rahatsızlık yaratır.</p>
                        <p>6. <strong>( D ) DOĞRU:</strong> Ekran üst kenarı yaklaşık göz hizasında olmalıdır.</p>
                    </div>
                </div>

                <!-- Bölüm C Çözümleri -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2">
                    <h3 class="text-sm font-black text-emerald-300 uppercase">Bölüm C) Olumlu / Olumsuz Çözümleri:</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                        <p>1. Görüntülü hasret gidermek ➔ <strong class="text-emerald-400">( + ) Olumlu</strong></p>
                        <p>2. Arkadaşlarıyla oynamamak ➔ <strong class="text-rose-400">( - ) Olumsuz</strong></p>
                        <p>3. Online fatura ödemek ➔ <strong class="text-emerald-400">( + ) Olumlu</strong></p>
                        <p>4. Aşırı kilo (obezite) almak ➔ <strong class="text-rose-400">( - ) Olumsuz</strong></p>
                        <p>5. Bilgiye saniyeler içinde ulaşmak ➔ <strong class="text-emerald-400">( + ) Olumlu</strong></p>
                        <p>6. Gece uykusuz kalmak ➔ <strong class="text-rose-400">( - ) Olumsuz</strong></p>
                    </div>
                </div>
            </div>

            <!-- SAYFA 2 CEVAPLARI -->
            <div class="page-break my-8 border-t-4 border-dashed border-emerald-500/40 pt-8" style="page-break-before: always;">
                <div class="border-b-2 border-emerald-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-purple-500/30 text-purple-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            Resmî Çözüm Anahtarı
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 2 ETKİNLİK ÇÖZÜMLERİ
                        </h1>
                    </div>
                    <span class="px-3 py-1 bg-emerald-400/20 text-emerald-300 border border-emerald-400/40 rounded-xl text-xs font-black">
                        Sayfa: 2 / 2
                    </span>
                </div>

                <!-- Bölüm D Çözümleri -->
                <div class="mt-6 p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2">
                    <h3 class="text-sm font-black text-cyan-300 uppercase">Bölüm D) Dijital Ayak İzi Çözümleri:</h3>
                    <div class="space-y-1.5 text-xs text-slate-200">
                        <p>1. Sosyal medyaya resim yüklemek ➔ <strong class="text-blue-300">Aktif Dijital Ayak İzi</strong> (İsteğimizle paylaşıldı)</p>
                        <p>2. Ziyaret edilen sitenin çerez bırakması ➔ <strong class="text-cyan-300">Pasif Dijital Ayak İzi</strong> (Arka planda kaydedildi)</p>
                        <p>3. Videonun altına yorum yazmak ➔ <strong class="text-blue-300">Aktif Dijital Ayak İzi</strong> (İsteğimizle paylaşıldı)</p>
                        <p>4. Haritanın arka planda konumu kaydetmesi ➔ <strong class="text-cyan-300">Pasif Dijital Ayak İzi</strong> (Otomatik toplandı)</p>
                        <p>5. Arama motorundaki arama kayıtları ➔ <strong class="text-cyan-300">Pasif Dijital Ayak İzi</strong> (Geçmişe kaydedildi)</p>
                        <p>6. E-posta ile ödev göndermek ➔ <strong class="text-blue-300">Aktif Dijital Ayak İzi</strong> (İsteğimizle gönderildi)</p>
                    </div>
                </div>

                <!-- Bölüm E Çözümleri -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2">
                    <h3 class="text-sm font-black text-yellow-300 uppercase">Bölüm E) e-Hizmetler Postanesi Çözümleri:</h3>
                    <div class="space-y-1 text-xs text-slate-200">
                        <p>1. Karne ve sınav notlarına bakmak ➔ <strong class="text-blue-400">e-Okul</strong></p>
                        <p>2. İkametgah ve resmi tapu kaydı çıkarmak ➔ <strong class="text-red-400">e-Devlet</strong></p>
                        <p>3. Aşı kartı ve tahlil sonuçlarını görmek ➔ <strong class="text-emerald-400">e-Nabız</strong></p>
                        <p>4. Hastaneden muayene randevusu almak ➔ <strong class="text-teal-400">MHRS</strong></p>
                        <p>5. Eğitici video ve animasyonları izlemek ➔ <strong class="text-purple-400">EBA</strong></p>
                        <p>6. Motorlu taşıtlar vergisini (MTV) ödemek ➔ <strong class="text-amber-400">e-Vergi</strong></p>
                        <p>7. Gece yarısı para transferi yapmak ➔ <strong class="text-cyan-400">e-Bankacılık</strong></p>
                    </div>
                </div>

                <!-- Bölüm F Çözümleri -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2">
                    <h3 class="text-sm font-black text-pink-300 uppercase">Bölüm F) Çoktan Seçmeli Test Çözümleri:</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                        <p>1. Doğru Cevap: <strong class="text-yellow-300">B (Bilişim)</strong></p>
                        <p>2. Doğru Cevap: <strong class="text-yellow-300">B (50-70 cm - bir kol boyu)</strong></p>
                        <p>3. Doğru Cevap: <strong class="text-yellow-300">C (Aktif Dijital Ayak İzi)</strong></p>
                        <p>4. Doğru Cevap: <strong class="text-yellow-300">A (e-Devlet Kapısı)</strong></p>
                        <p>5. Doğru Cevap: <strong class="text-yellow-300">C (B1l!s!m#2026 - harf, rakam ve sembol)</strong></p>
                        <p>6. Doğru Cevap: <strong class="text-yellow-300">C (Engellemek ve güvenilir yetişkine bildirmek)</strong></p>
                    </div>
                </div>
            </div>
        </div>
        `
    },

    // ========================================================
    // ❓ 3. PEKİŞTİRME TESTİ & SORULARI (1-2-3 Genel Tekrarı)
    // ========================================================
    questions: [
        // 0. İndeks: Kapsamlı Durum & Alan Eşleştirmesi
        {
            id: 1,
            type: "matching",
            title: "1, 2 ve 3. Konular Kapsamlı Eşleştirme Etkinliği",
            description: "Aşağıdaki gerçek yaşam durumlarını doğru kavram, alan veya dijital sistemle eşleştiriniz:",
            pairs: [
                { left: "Mehmet Bey'in araç navigasyonunu açarak bilmediği şehre gitmesi", right: "Ulaşım Alanı", leftIcon: "fa-solid fa-map-location-dot" },
                { left: "Öğretmenin akıllı tahta ve tabletlerle ders işlemesi", right: "Eğitim Alanı", leftIcon: "fa-solid fa-chalkboard" },
                { left: "Doktorun MR filmlerini ve tahlilleri ekrandan incelemesi", right: "Sağlık Alanı", leftIcon: "fa-solid fa-hospital" },
                { left: "Her 20 dakikada bir 20 saniye 6 metre uzağa bakmak", right: "20-20-20 Kuralı", leftIcon: "fa-solid fa-eye" },
                { left: "Kendi çektiğimiz bir deney videosunu internete yüklemek", right: "Aktif Dijital Ayak İzi", leftIcon: "fa-solid fa-video" },
                { left: "Sitelerin arka planda çerez ve konum kaydetmesi", right: "Pasif Dijital Ayak İzi", leftIcon: "fa-solid fa-cookie-bite" },
                { left: "İkametgah ve tapu belgesini tek şifreyle almak", right: "e-Devlet Kapısı", leftIcon: "fa-solid fa-landmark" },
                { left: "Karnedeki sınav notlarını ve devamsızlığı görmek", right: "e-Okul Veli Sistemi", leftIcon: "fa-solid fa-graduation-cap" }
            ]
        },

        // 1. İndeks: Doğru mu? Yanlış mı? Testi (10 Soru - 5 Doğru, 5 Yanlış)
        {
            id: 2,
            type: "true_false",
            title: "Doğru mu? Yanlış mı? Genel Tekrar Testi",
            description: "Aşağıdaki ifadeleri dikkatle okuyarak Doğru veya Yanlış butonuna dokununuz:",
            items: [
                {
                    statement: "“Bilgi” ve “İletişim” kelimelerinin bir araya gelmesiyle “Bilişim” kavramı ortaya çıkmıştır.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Bilgi + İletişim = Bilişim kelimesini oluşturur."
                },
                {
                    statement: "Bilgisayar başında çalışırken ekrana olabildiğince yakın oturmak (10 cm) gözleri korumanın en iyi yoludur.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! Ekranla göz arasında en az 50-70 cm (bir kol boyu) mesafe olmalıdır."
                },
                {
                    statement: "Otomobil gişelerindeki HGS antenleri ve cep telefonundaki navigasyon Ulaşım alanındaki bilişim teknolojisidir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! HGS ve navigasyon sistemleri Ulaşım alanında zaman kazandırır."
                },
                {
                    statement: "İnternette paylaştığımız bir fotoğrafı hesabımızı kapatıp silersek, internetteki tüm kopyaları dünyadan sonsuza kadar yok olur.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! Dijital ayak izi kalıcıdır; başkaları ekran görüntüsü almış veya sunucular yedeklemiş olabilir."
                },
                {
                    statement: "20-20-20 kuralı; her 20 dakikada bir, 20 saniye boyunca 20 fit (6 metre) uzağa bakarak göz kaslarını dinlendirmeyi amaçlar.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Bu kural dijital göz yorgunluğunu önleyen en etkili yöntemdir."
                },
                {
                    statement: "e-Devlet şifremizi unutmamak için sosyal medya profilimizde veya sınıf panosunda herkesin göreceği şekilde paylaşmalıyız.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! Şifreler kişiye özeldir, hiç kimseyle paylaşılmamalıdır."
                },
                {
                    statement: "Arama motorunda aradığımız spor ayakkabının reklamlarını diğer sitelerde görmek pasif dijital ayak izine örnektir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Arka planda toplanan çerezler ve arama geçmişi pasif ayak izidir."
                },
                {
                    statement: "İnternette mesaj yazarken KELİMELERİN TAMAMINI BÜYÜK HARFLE YAZMAK çok sevinçli olduğumuzu gösterir.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! Büyük harflerle yazmak internet dilinde bağırmak ve kaba davranmak kabul edilir."
                },
                {
                    statement: "e-Okul Veli Bilgilendirme Sistemi sayesinde veliler okula gitmeden öğrencinin devamsızlık ve not durumunu 7/24 görebilir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! e-Okul sistemi okul-veli iletişimini hızlandırır."
                },
                {
                    statement: "Sanal ortamda bize kaba sözler söyleyen birine aynı şekilde küfürle cevap vermek iyi bir dijital vatandaşın görevidir.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! Siber zorbalığa karşılık verilmez; kişi engellenmeli, ekran görüntüsü alınmalı ve yetişkine bildirilmelidir."
                }
            ]
        },

        // 2. İndeks: Çoktan Seçmeli Test (10 Özgün Soru - A, B, C, D Dengeli)
        {
            id: 3,
            type: "multiple_choice",
            title: "1, 2 ve 3. Konular Büyük Değerlendirme Testi",
            questions: [
                {
                    q: "Ahmet Bey, yeni taşındığı evin ikametgah belgesini almak ve araç ceza kaydını sorgulamak için tek şifreyle resmi bir platforma giriş yapmıştır. Ahmet Bey hangi kapıyı kullanmıştır?",
                    options: [
                        "e-Devlet Kapısı (turkiye.gov.tr)",
                        "Video Paylaşım Platformu",
                        "Sosyal Medya Uygulaması",
                        "Online Oyun Mağazası"
                    ],
                    answer: 0,
                    explanation: "e-Devlet kapısı (turkiye.gov.tr), tüm kamu hizmetlerini tek şifreyle 7/24 sunar."
                },
                {
                    q: "Aşağıdaki işlemlerden hangisi bir kişinin internette isteyerek oluşturduğu 'Aktif Dijital Ayak İzi'ne örnektir?",
                    options: [
                        "Sitelerin arka planda bilgisayara çerez bırakması",
                        "Kendi hazırladığı fen deneyi videosunu internete yüklemek",
                        "Arama motorunun yapılan aramaları geçmişe kaydetmesi",
                        "Telefonun arka planda adım ve konum bilgisi toplaması"
                    ],
                    answer: 1,
                    explanation: "Kendi isteğimizle paylaştığımız video, fotoğraf veya yorumlar aktif dijital ayak izidir."
                },
                {
                    q: "Bilgisayar başında uzun süre ders çalışan Selin'in omurga ve göz sağlığını koruması için hangisi EN UYGUNDUR?",
                    options: [
                        "Ekrana 10 cm çok yakından bakmak",
                        "Yatarak ve kucağında bilgisayarla çalışmak",
                        "Bir kol boyu mesafe bırakmak ve 20-20-20 kuralına uymak",
                        "Hiç mola vermeden 6 saat boyunca çalışmak"
                    ],
                    answer: 2,
                    explanation: "50-70 cm (bir kol boyu) mesafe ve 20-20-20 dinlenme kuralı sağlığı korur."
                },
                {
                    q: "Hastaneden istediğimiz poliklinik ve doktordan muayene randevusu almamızı sağlayan dijital sağlık sistemi hangisidir?",
                    options: [
                        "e-Okul Veli Sistemi",
                        "EBA Ders Portalı",
                        "İnteraktif Vergi Dairesi",
                        "MHRS (Merkezi Hekim Randevu Sistemi)"
                    ],
                    answer: 3,
                    explanation: "Hastane randevuları MHRS ve Alo 182 üzerinden alınır."
                },
                {
                    q: "“Bilgi” ve “İletişim” kelimelerinin bir araya gelmesiyle oluşan ve bilgi akışını sağlayan temel kavram hangisidir?",
                    options: [
                        "Bilişim",
                        "Algoritma",
                        "Donanım",
                        "Tarayıcı"
                    ],
                    answer: 0,
                    explanation: "Bilgi + İletişim = Bilişim kavramını oluşturur."
                },
                {
                    q: "Siber ortamda güçlü bir şifre oluşturmak isteyen Burak, aşağıdaki şifrelerden hangisini seçerse EN GÜVENLİ şifreyi belirlemiş olur?",
                    options: [
                        "12345678",
                        "B@r@k_5.Sinif#2026",
                        "burak2014",
                        "sifre123"
                    ],
                    answer: 1,
                    explanation: "Büyük-küçük harf, rakam ve sembol içeren en az 8 haneli şifreler güçlü şifredir."
                },
                {
                    q: "Ela, 1. dönem sonu karne notlarını, haftalık devamsızlık durumunu ve sınav tarihlerini hangi MEB sisteminden takip eder?",
                    options: [
                        "MHRS",
                        "e-Nabız",
                        "e-Okul Veli Bilgilendirme Sistemi",
                        "e-Vergi"
                    ],
                    answer: 2,
                    explanation: "Öğrenci sınav notları ve devamsızlık kayıtları e-Okul'dadır."
                },
                {
                    q: "Aşağıdakilerden hangisi bilişim teknolojilerinin aşırı ve bilinçsiz kullanımının ortaya çıkardığı OLUMSUZ bir etkidir?",
                    options: [
                        "Faturaları internetten ödeyerek zaman kazanmak",
                        "Bilgiye saniyeler içinde ulaşmak",
                        "Uzaktaki akrabalarla görüntülü konuşmak",
                        "Hareketsizlik sebebiyle duruş bozukluğu ve kilo alma"
                    ],
                    answer: 3,
                    explanation: "Aşırı hareketsizlik obeziteye, kas erimesine ve omurga eğriliğine yol açar."
                },
                {
                    q: "Sanal ortamda bir paylaşım yapmadan önce aklımıza getirmemiz gereken D.Ü.Ş.Ü.N. kuralında 'D' harfi neyi temsil eder?",
                    options: [
                        "Doğru mu?",
                        "Değerli mi?",
                        "Dalgın mı?",
                        "Deneme mi?"
                    ],
                    answer: 0,
                    explanation: "D harfi bilginin 'Doğru mu?' olduğunu sorgulamamızı hatırlatır."
                },
                {
                    q: "Doktorun istediği geçmiş kan tahlili sonuçlarını, röntgen filmlerini ve aşı kartını arşivleyen dijital sağlık platformu hangisidir?",
                    options: [
                        "EBA",
                        "e-Nabız Kişisel Sağlık Sistemi",
                        "e-Okul",
                        "Haritalar"
                    ],
                    answer: 1,
                    explanation: "e-Nabız, vatandaşların tüm geçmiş sağlık verilerini güvenle saklar."
                }
            ]
        }
    ],

    // ========================================================
    // 🎮 4. TEKRAR OYUNLARI VERİTABANI (1, 2 ve 3. Konular Karması)
    // ========================================================
    gameData: {
        // Oyun 1: Çarkıfelek Soruları (10 Soru - 100-500 Puan)
        wheelQuiz: [
            {
                q: "“Bilgi” ve “İletişim” kelimelerinin bir araya gelmesiyle oluşan temel kavram hangisidir?",
                question: "“Bilgi” ve “İletişim” kelimelerinin bir araya gelmesiyle oluşan temel kavram hangisidir?",
                options: ["Bilişim", "Yazılım", "Donanım", "İnternet"],
                answer: 0,
                pts: 100,
                points: 100
            },
            {
                q: "Otomobillerde yol bulmak için kullanılan navigasyon bilişimin hangi alanına girer?",
                question: "Otomobillerde yol bulmak için kullanılan navigasyon bilişimin hangi alanına girer?",
                options: ["Ulaşım", "Sağlık", "Tarım", "Sanat"],
                answer: 0,
                pts: 150,
                points: 150
            },
            {
                q: "Bilgisayar başında çalışırken ekrana olan mesafemiz yaklaşık ne kadar olmalıdır?",
                question: "Bilgisayar başında çalışırken ekrana olan mesafemiz yaklaşık ne kadar olmalıdır?",
                options: ["Bir kol boyu (50-70 cm)", "10 cm çok yakın", "3 metre uzakta", "İstediğimiz kadar"],
                answer: 0,
                pts: 200,
                points: 200
            },
            {
                q: "Göz sağlığı için her 20 dakikada bir 20 saniye 6 metre uzağa bakma kuralı hangisidir?",
                question: "Göz sağlığı için her 20 dakikada bir 20 saniye 6 metre uzağa bakma kuralı hangisidir?",
                options: ["20-20-20 Kuralı", "50-50 Kuralı", "10 Kuralı", "Ekran Kuralı"],
                answer: 0,
                pts: 250,
                points: 250
            },
            {
                q: "İnternette yaptığımız paylaşımların geride bıraktığı kalıcı izlere ne ad verilir?",
                question: "İnternette yaptığımız paylaşımların geride bıraktığı kalıcı izlere ne ad verilir?",
                options: ["Dijital Ayak İzi", "Ekran Parlaklığı", "İnternet Hızı", "Parmak İzi"],
                answer: 0,
                pts: 300,
                points: 300
            },
            {
                q: "Kendi çektiğimiz bir videoyu sosyal medyaya yüklemek hangi ayak izi türüdür?",
                question: "Kendi çektiğimiz bir videoyu sosyal medyaya yüklemek hangi ayak izi türüdür?",
                options: ["Aktif Dijital Ayak İzi", "Pasif Ayak İzi", "Geçici İz", "Silinmiş İz"],
                answer: 0,
                pts: 250,
                points: 250
            },
            {
                q: "Tüm kamu kurumlarına ait resmi hizmetlere tek şifreyle ulaşılan resmi kapı hangisidir?",
                question: "Tüm kamu kurumlarına ait resmi hizmetlere tek şifreyle ulaşılan resmi kapı hangisidir?",
                options: ["e-Devlet", "Video Kanalı", "Oyun Mağazası", "Arama Motoru"],
                answer: 0,
                pts: 200,
                points: 200
            },
            {
                q: "Öğrencilerin sınav notlarını ve devamsızlık durumlarını takip ettiği MEB sistemi hangisidir?",
                question: "Öğrencilerin sınav notlarını ve devamsızlık durumlarını takip ettiği MEB sistemi hangisidir?",
                options: ["e-Okul", "e-Nabız", "MHRS", "e-Vergi"],
                answer: 0,
                pts: 200,
                points: 200
            },
            {
                q: "Hastaneden istediğimiz doktordan muayene randevusu almamızı sağlayan sağlık sistemi hangisidir?",
                question: "Hastaneden istediğimiz doktordan muayene randevusu almamızı sağlayan sağlık sistemi hangisidir?",
                options: ["MHRS (Alo 182)", "e-Okul", "EBA", "ÖSYM"],
                answer: 0,
                pts: 300,
                points: 300
            },
            {
                q: "İnternet dünyasında saygılı, kibar, görgülü ve centilmen iletişim kurallarına ne ad verilir?",
                question: "İnternet dünyasında saygılı, kibar, görgülü ve centilmen iletişim kurallarına ne ad verilir?",
                options: ["Dijital Nezaket", "Hacking", "Virüs", "Spam Mesaj"],
                answer: 0,
                pts: 500,
                points: 500
            }
        ],

        // Oyun 2: Kavram & Durum Eşleştirme (90 Saniye)
        matchConfig: {
            timer: 90,
            leftTitle: "Gerçek Yaşam Senaryoları 📋",
            rightTitle: "Kavram & Dijital Sistem 🎯",
            instruction: "💡 <strong>Nasıl Oynanır?</strong> Soldaki gerçek yaşam durumuna dokunun, ardından sağdaki doğru kavram veya dijital sistemle eşleştirin!"
        },
        matchCards: [
            {
                id: 1,
                text: "Ahmet Bey'in bilmediği bir şehre giderken haritadan rota çizmesi",
                category: "Ulaşım Alanı",
                icon: "fa-solid fa-map-location-dot",
                rightIcon: "fa-solid fa-car"
            },
            {
                id: 2,
                text: "Doktorun hastanın geçmiş tahlil ve aşı sonuçlarını incelemesi",
                category: "e-Nabız Sağlık Sistemi",
                icon: "fa-solid fa-heart-pulse",
                rightIcon: "fa-solid fa-hospital"
            },
            {
                id: 3,
                text: "Ela'nın karnesine kaç düşeceğini ve devamsızlığını öğrenmek istemesi",
                category: "e-Okul Veli Bilgilendirme",
                icon: "fa-solid fa-graduation-cap",
                rightIcon: "fa-solid fa-school"
            },
            {
                id: 4,
                text: "Dişi ağrıyan Can'ın hastaneden randevu saati belirlemesi",
                category: "MHRS (Alo 182)",
                icon: "fa-solid fa-calendar-check",
                rightIcon: "fa-solid fa-user-doctor"
            },
            {
                id: 5,
                text: "Göz sağlığı için her 20 dakikada 20 saniye 6 metre uzağa bakmak",
                category: "20-20-20 Kuralı",
                icon: "fa-solid fa-eye",
                rightIcon: "fa-solid fa-glasses"
            },
            {
                id: 6,
                text: "Ela'nın hazırladığı bilim videosunu internete yüklemesi",
                category: "Aktif Dijital Ayak İzi",
                icon: "fa-solid fa-video",
                rightIcon: "fa-solid fa-cloud-arrow-up"
            },
            {
                id: 7,
                text: "Ziyaret edilen sitelerin arka planda çerez bırakması",
                category: "Pasif Dijital Ayak İzi",
                icon: "fa-solid fa-cookie-bite",
                rightIcon: "fa-solid fa-shoe-prints"
            },
            {
                id: 8,
                text: "İkametgah ve resmi belgeleri tek şifreyle 7/24 almak",
                category: "e-Devlet Kapısı",
                icon: "fa-solid fa-landmark",
                rightIcon: "fa-solid fa-key"
            }
        ],

        // Oyun 3: Hızlı Refleks Doğru / Yanlış İfadeleri
        reflexStatements: [
            {
                text: "“Bilgi” ve “İletişim” kelimelerinin birleşimiyle “Bilişim” kavramı oluşur.",
                correct: true
            },
            {
                text: "Otomobil gişelerindeki HGS antenleri Sağlık alanındaki bilişim teknolojisidir.",
                correct: false
            },
            {
                text: "Bilgisayar başında ekrana 10 cm çok yakından bakmak gözleri dinlendirir.",
                correct: false
            },
            {
                text: "20-20-20 kuralı; her 20 dakikada bir, 20 saniye uzağa bakarak gözleri korur.",
                correct: true
            },
            {
                text: "İnternete yüklediğimiz bir fotoğrafı silsek bile başkaları tarafından kaydedilmiş olabilir.",
                correct: true
            },
            {
                text: "Kendi çektiğimiz bir videoyu internete yüklemek pasif ayak izine örnektir.",
                correct: false
            },
            {
                text: "e-Devlet kapısı resmi kamu hizmetlerini tek şifreyle 7/24 sunar.",
                correct: true
            },
            {
                text: "e-Okul sistemi sadece dönem sonu karnesini gösterir, devamsızlığı göstermez.",
                correct: false
            },
            {
                text: "MHRS sistemi üzerinden devlet hastanelerinden doktor randevusu alınır.",
                correct: true
            },
            {
                text: "İnternette mesajlaşırken kelimeleri BÜYÜK HARFLE yazmak bağırmak anlamına gelir.",
                correct: true
            },
            {
                text: "Güçlü şifre belirlerken doğum tarihi veya '123456' kullanmak en güvenli yoldur.",
                correct: false
            },
            {
                text: "Siber zorbalığa uğrayan bir öğrenci durumu hemen güvenilir bir yetişkine bildirmelidir.",
                correct: true
            },
            {
                text: "Bilişim teknolojilerini aşırı ve kontrolsüz kullanmak hareketsizliğe ve obeziteye yol açabilir.",
                correct: true
            },
            {
                text: "e-Nabız geçmiş tahlil ve aşı kayıtlarımıza ulaşmamızı sağlayan sağlık sistemidir.",
                correct: true
            }
        ],

        // Oyun 4: Sınıf Düellosu Soruları
        duelQuestions: [
            {
                q: "“Bilgi” ve “İletişim” kelimelerinin birleşimiyle oluşan temel kavram hangisidir?",
                question: "“Bilgi” ve “İletişim” kelimelerinin birleşimiyle oluşan temel kavram hangisidir?",
                options: ["Bilişim", "Yazılım", "Donanım", "İnternet"],
                answer: 0
            },
            {
                q: "Ahmet Bey'in otoyol gişesinden durmadan HGS ile geçmesi hangi bilişim alanıdır?",
                question: "Ahmet Bey'in otoyol gişesinden durmadan HGS ile geçmesi hangi bilişim alanıdır?",
                options: ["Sağlık", "Ulaşım", "Eğitim", "Güvenlik"],
                answer: 1
            },
            {
                q: "Göz sağlığı için her 20 dakikada bir 20 saniye 6 metre uzağa bakma kuralı hangisidir?",
                question: "Göz sağlığı için her 20 dakikada bir 20 saniye 6 metre uzağa bakma kuralı hangisidir?",
                options: ["20-20-20 Kuralı", "50-50 Kuralı", "Ekran Kuralı", "10 Kuralı"],
                answer: 0
            },
            {
                q: "Kendi isteğimizle internete yüklediğimiz video ve fotoğraflar hangi ayak izidir?",
                question: "Kendi isteğimizle internete yüklediğimiz video ve fotoğraflar hangi ayak izidir?",
                options: ["Pasif Ayak İzi", "Aktif Ayak İzi", "Geçici İz", "Silinmiş İz"],
                answer: 1
            },
            {
                q: "Tüm resmi kamu hizmetlerine tek şifreyle 7/24 ulaştığımız devlet kapısı hangisidir?",
                question: "Tüm resmi kamu hizmetlerine tek şifreyle 7/24 ulaştığımız devlet kapısı hangisidir?",
                options: ["e-Devlet", "Sosyal Medya", "Video Sitesi", "Oyun Mağazası"],
                answer: 0
            },
            {
                q: "Öğrencilerin sınav notlarını ve devamsızlık durumunu takip ettiği MEB sistemi hangisidir?",
                question: "Öğrencilerin sınav notlarını ve devamsızlık durumunu takip ettiği MEB sistemi hangisidir?",
                options: ["e-Nabız", "e-Okul", "MHRS", "e-Vergi"],
                answer: 1
            },
            {
                q: "Hastanelerden doktor ve poliklinik randevusu almamızı sağlayan sağlık sistemi hangisidir?",
                question: "Hastanelerden doktor ve poliklinik randevusu almamızı sağlayan sağlık sistemi hangisidir?",
                options: ["MHRS (Alo 182)", "e-Okul", "EBA", "ÖSYM"],
                answer: 0
            },
            {
                q: "İnternette mesajlaşırken KELİMELERİN TAMAMINI BÜYÜK HARFLE YAZMAK ne anlama gelir?",
                question: "İnternette mesajlaşırken KELİMELERİN TAMAMINI BÜYÜK HARFLE YAZMAK ne anlama gelir?",
                options: ["Çok Sevinçli Olmak", "Karşı Tarafa Bağırmak & Kaba Davranmak", "Hızlı Yazmak", "Gizli Şifre"],
                answer: 1
            }
        ]
    },

    // ========================================================
    // 🌟 5. ÖZEL EK OYUNLAR (123tekrar Kapsamında Hazırlanan 5 Yeni Oyun)
    // ========================================================
    extraGames: [
        {
            badge: "Dedektiflik",
            badgeColor: "text-amber-300",
            title: "Bilişim Gizemi: Kayıp Teknoloji",
            desc: "Laboratuvardaki kayıp teknolojiyi bulmak için 6 gizemli ipucunu çöz! 1, 2 ve 3. hafta kazanımlarıyla dedektif rozetini kazan.",
            icon: "fa-solid fa-user-secret",
            iconBg: "bg-amber-500/30 text-amber-300",
            cardGradient: "from-amber-950/80 via-slate-900 to-indigo-950/90",
            border: "border-amber-500/50",
            descColor: "text-amber-100",
            btnText: "Gizemi Çöz!",
            btnIcon: "fa-solid fa-magnifying-glass",
            btnGradient: "from-amber-500 via-orange-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/bilisim_gizemi_kayip_teknoloji.html', 'Bilişim Gizemi: Kayıp Teknoloji | Öğretmen Bozok')"
        },
        {
            badge: "Şans & Bilgi",
            badgeColor: "text-emerald-300",
            title: "Bilişim Çarkı – 3 Hafta 1 Çark",
            desc: "Akıllı tahtada çarkı çevir, 6 farklı kategoriden gelen 48+ soruyu bil, puanları topla ve 'Bilişim Şampiyonu' unvanını kazan!",
            icon: "fa-solid fa-dharmachakra",
            iconBg: "bg-emerald-500/30 text-emerald-300",
            cardGradient: "from-emerald-950/80 via-slate-900 to-blue-950/90",
            border: "border-emerald-500/50",
            descColor: "text-emerald-100",
            btnText: "Çarkı Çevir!",
            btnIcon: "fa-solid fa-rotate",
            btnGradient: "from-emerald-500 via-teal-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/bilisim_carki_3_hafta.html', 'Bilişim Çarkı – 3 Hafta 1 Çark | Öğretmen Bozok')"
        },
        {
            badge: "İlişkilendirme",
            badgeColor: "text-cyan-300",
            title: "3 Haftayı Birleştir",
            desc: "Kavram haritası üzerinde 1, 2 ve 3. haftadaki konular arasındaki gizli köprüleri kur, doğru kutulara yerleştir ve büyük bilişim haritasını tamamla!",
            icon: "fa-solid fa-diagram-project",
            iconBg: "bg-cyan-500/30 text-cyan-300",
            cardGradient: "from-cyan-950/80 via-slate-900 to-indigo-950/90",
            border: "border-cyan-500/50",
            descColor: "text-cyan-100",
            btnText: "Haritayı Birleştir!",
            btnIcon: "fa-solid fa-network-wired",
            btnGradient: "from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-black",
            action: "app.openStandaloneGame('games/uc_haftayi_birlestir.html', '3 Haftayı Birleştir | Öğretmen Bozok')"
        },
        {
            badge: "Günlük Yaşam",
            badgeColor: "text-purple-300",
            title: "Bir Günümüzde Bilişim",
            desc: "5. sınıf öğrencisi Efe'nin sabah 07:00'den geceye kadar geçen 24 saatlik gününü takip et; teknolojiyi bilinçli, sağlıklı ve güvenli kullanmasını sağla!",
            icon: "fa-solid fa-street-view",
            iconBg: "bg-purple-500/30 text-purple-300",
            cardGradient: "from-purple-950/80 via-slate-900 to-pink-950/90",
            border: "border-purple-500/50",
            descColor: "text-purple-100",
            btnText: "Güne Başla!",
            btnIcon: "fa-solid fa-sun",
            btnGradient: "from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black",
            action: "app.openStandaloneGame('games/bir_gunumuzde_bilisim.html', 'Bir Günümüzde Bilişim | Öğretmen Bozok')"
        },
        {
            badge: "Büyük Final",
            badgeColor: "text-rose-300",
            title: "Bilişim Büyük Finali",
            desc: "2, 3 veya 4 takımlı büyük sınıf turnuvası! Hızlı Hatırla, Görseli Yakala, Hatayı Bul, Karar Anı ve Büyük Final olmak üzere 5 aşamalı TV yarışması!",
            icon: "fa-solid fa-trophy",
            iconBg: "bg-rose-500/30 text-rose-300",
            cardGradient: "from-rose-950/80 via-slate-900 to-amber-950/90",
            border: "border-rose-500/50",
            descColor: "text-rose-100",
            btnText: "Turnuvayı Başlat!",
            btnIcon: "fa-solid fa-flag-checkered",
            btnGradient: "from-amber-500 via-orange-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/bilisim_buyuk_finali.html', 'Bilişim Büyük Finali | Öğretmen Bozok')"
        }
    ]
};
