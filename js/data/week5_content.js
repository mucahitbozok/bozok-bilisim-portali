// ==========================================
// 5. KONU - 1: BİLGİSAYAR VE DONANIM (GİRİŞ VE ÇIKIŞ BİRİMLERİ)
// MEB 5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi
// BTY.5.1.5. Bilgisayar sistemlerini çözümleyebilme
// Hazırlayan: Öğretmen Bozok
// ==========================================

window.WEEK5_CONTENT = {
    weekInfo: {
        weekNumber: 5,
        topicNumber: 5,
        customLabel: "5. Konu - 1",
        title: "Bilgisayar ve Donanım (Giriş ve Çıkış Birimleri)",
        code: "BTY.5.1.5. Bilgisayar sistemlerini çözümleyebilme",
        theme: "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        isPending: false,
        learningGoals: [
            "Bilgisayar sisteminin iki temel ayağı olan Donanım ve Yazılım kavramlarını ayırt edebileceğim.",
            "İç donanım (kasa içerisindeki parçalar) ve dış donanım birimlerini tanıyabileceğim.",
            "Bilgisayara veri ve komut aktaran Giriş Birimlerini (klavye, fare, mikrofon, kamera, tarayıcı vb.) işlevleriyle kavrayabileceğim.",
            "İşlenen verileri bize sunan Çıkış Birimlerini (monitör, hoparlör, yazıcı, projeksiyon, kulaklık vb.) sınıflandırabileceğim.",
            "Hem giriş hem çıkış özelliği taşıyan çok yönlü donanımları (dokunmatik ekran vb.) sorgulayabileceğim."
        ],
        images: {}
    },

    videos: [],

    // ========================================================
    // 🖥️ 1. İNTERAKTİF DERS SUNUSU (Akıllı Tahta Modu)
    // ========================================================
    slides: [
        // SLAYT 1 – KAPAK
        {
            id: 1,
            title: "BİLGİSAYAR VE DONANIM BİRİMLERİ",
            subtitle: "5. KONU - 1 • BTY.5.1.5",
            topic: "5. KONU - 1 • BTY.5.1.5",
            badge: "GİRİŞ",
            icon: "fa-solid fa-microchip",
            bgColor: "from-slate-900 via-indigo-950 to-blue-900",
            gradient: "from-slate-900 via-indigo-950 to-blue-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-6xl mx-auto my-auto py-2">
                    <div class="md:col-span-7 space-y-4 text-left">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="px-4 py-1.5 bg-yellow-400/20 text-yellow-300 font-extrabold text-sm sm:text-base uppercase tracking-wider rounded-full border border-yellow-400/40 shadow-sm">
                                5. KONU - 1 • 5. SINIF BİLİŞİM TEKNOLOJİLERİ VE YAZILIM
                            </span>
                            <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 font-bold text-xs rounded-full border border-cyan-400/30">
                                ⚡ Donanım & Çevre Birimleri
                            </span>
                        </div>

                        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-black text-white tracking-tight leading-tight drop-shadow-xl">
                            BİLGİSAYAR VE DONANIM BİRİMLERİ
                        </h1>

                        <div class="p-4 sm:p-5 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-indigo-400/50 shadow-xl space-y-1.5">
                            <div class="flex items-center gap-2 text-yellow-300 font-black text-xs sm:text-sm uppercase tracking-widest">
                                <i class="fa-solid fa-bullseye text-base text-yellow-400"></i>
                                <span>ÖĞRENME ÇIKTISI:</span>
                            </div>
                            <p class="text-xl sm:text-2xl md:text-[22px] font-extrabold text-white leading-snug">
                                <span class="text-yellow-300 font-black">BTY.5.1.5 –</span> Bilgisayar sistemlerini çözümleyebilme.
                            </p>
                        </div>

                        <div class="p-3.5 sm:p-4 bg-indigo-950/80 rounded-2xl border border-indigo-400/30 flex items-start gap-3 shadow-lg">
                            <div class="w-10 h-10 rounded-xl bg-indigo-500/30 text-yellow-300 flex items-center justify-center text-xl shrink-0 mt-0.5">
                                <i class="fa-solid fa-lightbulb"></i>
                            </div>
                            <p class="text-sm sm:text-base font-semibold text-indigo-100 leading-relaxed">
                                “Bir bilgisayara dokunduğumuzda hissettiğimiz tüm parçalar donanımdır! Peki hangi parçalar içeri veri sokar, hangileri sonucu dışarı verir?”
                            </p>
                        </div>

                        <div class="pt-1 flex items-center gap-3">
                            <span class="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-yellow-300 font-bold text-xs sm:text-sm shadow-md">
                                <i class="fa-solid fa-chalkboard-user text-base"></i>
                                <span>Öğretmen Bozok • Bozok Bilişim Portalı</span>
                            </span>
                        </div>
                    </div>

                    <div class="md:col-span-5 flex justify-center">
                        <div class="relative w-full max-w-sm sm:max-w-md aspect-square rounded-3xl p-3 bg-gradient-to-tr from-cyan-400/30 via-indigo-500/20 to-purple-500/30 border-2 border-white/20 shadow-2xl backdrop-blur-sm group">
                            <div class="w-full h-full rounded-2xl overflow-hidden shadow-inner flex flex-col items-center justify-center p-6 bg-slate-900/90 text-center space-y-4">
                                <div class="w-24 h-24 rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white text-5xl shadow-xl shadow-cyan-500/30 border border-cyan-400/40">
                                    <i class="fa-solid fa-computer animate-pulse"></i>
                                </div>
                                <div>
                                    <h3 class="text-2xl font-black text-white">Donanım Dünyası</h3>
                                    <p class="text-xs text-indigo-300 font-medium mt-1">İç Donanım & Dış Donanım Birimleri</p>
                                </div>
                                <div class="grid grid-cols-2 gap-2.5 w-full pt-2">
                                    <div class="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/80 text-center">
                                        <i class="fa-solid fa-keyboard text-emerald-400 text-lg mb-1 block"></i>
                                        <span class="text-[11px] font-bold text-white block">Giriş Birimleri</span>
                                        <span class="text-[9px] text-slate-400">Klavye, Fare, Mikrofon</span>
                                    </div>
                                    <div class="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/80 text-center">
                                        <i class="fa-solid fa-desktop text-cyan-400 text-lg mb-1 block"></i>
                                        <span class="text-[11px] font-bold text-white block">Çıkış Birimleri</span>
                                        <span class="text-[9px] text-slate-400">Ekran, Hoparlör, Yazıcı</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    ],

    // ========================================================
    // 📄 2. YAZDIRILABİLİR DİJİTAL METİN & ÇALIŞMA KAĞIDI
    // ========================================================
    worksheetDocs: null,

    // ========================================================
    // ❓ 3. PEKİŞTİRME TESTİ & SORULARI
    // ========================================================
    questions: [],

    // ========================================================
    // 🎮 4. TEKRAR OYUNLARI & ETKİNLİKLER
    // ========================================================
    gameData: null,
    extraGames: []
};
