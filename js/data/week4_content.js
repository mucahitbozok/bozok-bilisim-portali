// ==========================================
// 4. KONU – YAPAY ZEKÂ TEMELLERİ
// MEB 5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi
// BTY.5.1.4. Yapay zekâ ile ilgili temel kavramları ve özellikleri sorgulayabilme
// Hazırlayan: Öğretmen Bozok
// ==========================================

window.WEEK4_CONTENT = {
    weekInfo: {
        weekNumber: 4,
        topicNumber: 4,
        customLabel: "4. Konu",
        title: "Yapay Zekâ Temelleri",
        code: "BTY.5.1.4. Yapay zekâ ile ilgili temel kavramları ve özellikleri sorgulayabilme",
        theme: "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        isPending: false,
        learningGoals: [
            "Doğal zekâ ile makinelerin yapay zekâsı arasındaki temel farkları (öğrenme, duygu, esneklik, hız) sorgulayabileceğim.",
            "Yapay zekânın temel çalışma prensibini (Veri ➔ Öğrenme/Model ➔ Tahmin & Karar Verme) kavrayabileceğim.",
            "Günlük yaşamda ve farklı alanlarda (sağlık, eğitim, ulaşım, finans, güvenlik, eğlence vb.) yapay zekâ uygulamalarını tanıyabileceğim.",
            "Yapay zekânın sunduğu bilgilerin her zaman doğru olmayabileceğini bilerek güvenli ve sorgulayıcı kullanım ilkelerini uygulayabileceğim."
        ],
        images: {
            sayfa1: "assets/worksheets/1.4_sayfa1.png",
            sayfa2: "assets/worksheets/1.4_sayfa2.png",
            sayfa3: "assets/worksheets/1.4_sayfa3.png",
            sayfa4: "assets/worksheets/1.4_sayfa4.png",
            cevap: "assets/worksheets/1.4_cevap.png"
        }
    },

    videos: [],

    // ========================================================
    // 🖥️ 1. İNTERAKTİF DERS SUNUSU (Akıllı Tahta Modu - 24 Slayt)
    // ========================================================
    slides: [
        // SLAYT 1 – KAPAK
        {
            id: 1,
            title: "YAPAY ZEKÂ TEMELLERİ",
            subtitle: "4. KONU • BTY.5.1.4",
            topic: "4. KONU • BTY.5.1.4",
            badge: "GİRİŞ",
            icon: "fa-solid fa-brain",
            bgColor: "from-slate-900 via-indigo-950 to-blue-900",
            gradient: "from-slate-900 via-indigo-950 to-blue-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-6xl mx-auto my-auto py-2">
                    <div class="md:col-span-7 space-y-4 text-left">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="px-4 py-1.5 bg-yellow-400/20 text-yellow-300 font-extrabold text-sm sm:text-base uppercase tracking-wider rounded-full border border-yellow-400/40 shadow-sm">
                                4. KONU • 5. SINIF BİLİŞİM TEKNOLOJİLERİ VE YAZILIM
                            </span>
                            <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 font-bold text-xs rounded-full border border-cyan-400/30">
                                🤖 Akıllı Sistemler & Gelecek
                            </span>
                        </div>

                        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-white tracking-tight leading-tight drop-shadow-xl">
                            YAPAY ZEKÂ TEMELLERİ
                        </h1>

                        <div class="p-4 sm:p-5 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-indigo-400/50 shadow-xl space-y-1.5">
                            <div class="flex items-center gap-2 text-yellow-300 font-black text-xs sm:text-sm uppercase tracking-widest">
                                <i class="fa-solid fa-bullseye text-base text-yellow-400"></i>
                                <span>ÖĞRENME ÇIKTISI:</span>
                            </div>
                            <p class="text-xl sm:text-2xl md:text-[23px] font-extrabold text-white leading-snug">
                                <span class="text-yellow-300 font-black">BTY.5.1.4 –</span> Yapay zekâ ile ilgili temel kavramları ve özellikleri sorgulayabilme.
                            </p>
                        </div>

                        <div class="p-3.5 sm:p-4 bg-indigo-950/80 rounded-2xl border border-indigo-400/30 flex items-start gap-3 shadow-lg">
                            <div class="w-10 h-10 rounded-xl bg-indigo-500/30 text-yellow-300 flex items-center justify-center text-xl shrink-0 mt-0.5">
                                <i class="fa-solid fa-lightbulb"></i>
                            </div>
                            <p class="text-sm sm:text-base font-semibold text-indigo-100 leading-relaxed">
                                “Makineler gerçekten düşünebilir mi? Telefonumuz yüzümüzü nasıl tanıyor? Gelin yapay zekânın heyecan dolu dünyasını birlikte keşfedelim!”
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
                                    <i class="fa-solid fa-robot animate-bounce" style="animation-duration: 3s;"></i>
                                </div>
                                <div>
                                    <h3 class="text-2xl font-black text-white">Yapay Zekâ Dünyası</h3>
                                    <p class="text-xs text-indigo-300 font-medium mt-1">İnsan Zekâsı 🤝 Bilgisayar Algoritmaları</p>
                                </div>
                                <div class="grid grid-cols-2 gap-2.5 w-full pt-2">
                                    <div class="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/80 text-center">
                                        <i class="fa-solid fa-brain text-yellow-400 text-lg mb-1 block"></i>
                                        <span class="text-[11px] font-bold text-white block">Doğal Zekâ</span>
                                        <span class="text-[9px] text-slate-400">Deneyim & Duygu</span>
                                    </div>
                                    <div class="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/80 text-center">
                                        <i class="fa-solid fa-microchip text-cyan-400 text-lg mb-1 block"></i>
                                        <span class="text-[11px] font-bold text-white block">Yapay Zekâ</span>
                                        <span class="text-[9px] text-slate-400">Veri & Algoritma</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 2 – BUGÜN NE ÖĞRENECEĞİZ?
        {
            id: 2,
            title: "BUGÜN NE ÖĞRENECEĞİZ? 🎯",
            subtitle: "Dersimizin Temel Merak Konuları",
            topic: "4. KONU • BTY.5.1.4",
            badge: "HEDEFLER",
            icon: "fa-solid fa-compass",
            bgColor: "from-blue-950 via-slate-900 to-indigo-950",
            gradient: "from-blue-950 via-slate-900 to-indigo-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-5 text-center my-auto py-2">
                    <p class="text-base sm:text-xl text-indigo-200 font-semibold">
                        Aşağıdaki başlıklardan hangisini en çok merak ediyorsun? Dokun ve keşfet!
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-left">
                        <button onclick="document.getElementById('slide2-fb').innerText = '💡 Doğal zekâ, insanların ve hayvanların deneyim ve duygularıyla problem çözme gücüdür!'; sounds.playClick();" class="p-3.5 rounded-2xl bg-blue-950/70 border-2 border-blue-400/40 hover:border-yellow-400 hover:bg-blue-900/60 transition-all shadow-md group">
                            <span class="text-2xl mb-1 block group-hover:scale-110 transition-transform">🧠</span>
                            <h4 class="text-sm font-black text-white">Doğal zekâ nedir?</h4>
                            <p class="text-[11px] text-slate-300 mt-0.5">İnsan & hayvan zekâsı</p>
                        </button>

                        <button onclick="document.getElementById('slide2-fb').innerText = '🤖 Yapay zekâ, insan düşünmesini taklit eden bilgisayar programlarıdır!'; sounds.playClick();" class="p-3.5 rounded-2xl bg-indigo-950/70 border-2 border-indigo-400/40 hover:border-yellow-400 hover:bg-indigo-900/60 transition-all shadow-md group">
                            <span class="text-2xl mb-1 block group-hover:scale-110 transition-transform">💻</span>
                            <h4 class="text-sm font-black text-white">Yapay zekâ nedir?</h4>
                            <p class="text-[11px] text-slate-300 mt-0.5">Makinelerin düşünmesi</p>
                        </button>

                        <button onclick="document.getElementById('slide2-fb').innerText = '⚙️ Yapay zekâ öğrenir, düşünür/analiz eder ve karar verir!'; sounds.playClick();" class="p-3.5 rounded-2xl bg-purple-950/70 border-2 border-purple-400/40 hover:border-yellow-400 hover:bg-purple-900/60 transition-all shadow-md group">
                            <span class="text-2xl mb-1 block group-hover:scale-110 transition-transform">⚡</span>
                            <h4 class="text-sm font-black text-white">Özellikleri nelerdir?</h4>
                            <p class="text-[11px] text-slate-300 mt-0.5">3 anahtar özellik</p>
                        </button>

                        <button onclick="document.getElementById('slide2-fb').innerText = '📱 Telefon yüz tanıma, Siri, YouTube önerileri her gün yapay zekâ kullanır!'; sounds.playClick();" class="p-3.5 rounded-2xl bg-cyan-950/70 border-2 border-cyan-400/40 hover:border-yellow-400 hover:bg-cyan-900/60 transition-all shadow-md group">
                            <span class="text-2xl mb-1 block group-hover:scale-110 transition-transform">🔍</span>
                            <h4 class="text-sm font-black text-white">Günlük hayatta nerede?</h4>
                            <p class="text-[11px] text-slate-300 mt-0.5">Yüz tanıma, asistanlar</p>
                        </button>

                        <button onclick="document.getElementById('slide2-fb').innerText = '🏥 Sağlık, eğitim, ulaşım, güvenlik, sanat, finans ve tarımda kullanılır!'; sounds.playClick();" class="p-3.5 rounded-2xl bg-emerald-950/70 border-2 border-emerald-400/40 hover:border-yellow-400 hover:bg-emerald-900/60 transition-all shadow-md group">
                            <span class="text-2xl mb-1 block group-hover:scale-110 transition-transform">🌐</span>
                            <h4 class="text-sm font-black text-white">Hangi alanlarda var?</h4>
                            <p class="text-[11px] text-slate-300 mt-0.5">12 farklı kullanım alanı</p>
                        </button>

                        <button onclick="document.getElementById('slide2-fb').innerText = '📜 1950 Turing Testi, 1959 Cahit Arf, Deep Blue ve AlphaGo zaferleri!'; sounds.playClick();" class="p-3.5 rounded-2xl bg-amber-950/70 border-2 border-amber-400/40 hover:border-yellow-400 hover:bg-amber-900/60 transition-all shadow-md group">
                            <span class="text-2xl mb-1 block group-hover:scale-110 transition-transform">⏳</span>
                            <h4 class="text-sm font-black text-white">Geçmişte neler oldu?</h4>
                            <p class="text-[11px] text-slate-300 mt-0.5">Turing'den günümüze</p>
                        </button>

                        <button onclick="document.getElementById('slide2-fb').innerText = '⚖️ Olumlu: Hayatı kolaylaştırır, sağlıkta hayat kurtarır. Olumsuz: Yanlış bilgi ve güvenlik açığı!'; sounds.playClick();" class="p-3.5 rounded-2xl bg-rose-950/70 border-2 border-rose-400/40 hover:border-yellow-400 hover:bg-rose-900/60 transition-all shadow-md group">
                            <span class="text-2xl mb-1 block group-hover:scale-110 transition-transform">⚖️</span>
                            <h4 class="text-sm font-black text-white">Olumlu & olumsuz etkileri?</h4>
                            <p class="text-[11px] text-slate-300 mt-0.5">Faydaları ve riskleri</p>
                        </button>

                        <button onclick="document.getElementById('slide2-fb').innerText = '🕵️‍♂️ Yapay zekâ her zaman doğru söylemez! Farklı kaynaklardan kontrol etmeliyiz!'; sounds.playClick();" class="p-3.5 rounded-2xl bg-teal-950/70 border-2 border-teal-400/40 hover:border-yellow-400 hover:bg-teal-900/60 transition-all shadow-md group">
                            <span class="text-2xl mb-1 block group-hover:scale-110 transition-transform">🔎</span>
                            <h4 class="text-sm font-black text-white">Nasıl sorgularız?</h4>
                            <p class="text-[11px] text-slate-300 mt-0.5">Yapay Zekâ Dedektifi</p>
                        </button>
                    </div>

                    <div id="slide2-fb" class="p-4 bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-blue-900/80 rounded-2xl border-2 border-yellow-400/50 text-yellow-300 font-extrabold text-sm sm:text-base min-h-[56px] flex items-center justify-center shadow-lg">
                        👆 Yukarıdaki konulardan merak ettiğin birine dokun ve ilk ipucunu al!
                    </div>
                </div>
            `
        },

        // SLAYT 3 – DOĞAL ZEKÂ NEDİR?
        {
            id: 3,
            title: "DOĞAL ZEKÂ NEDİR? 🧠",
            subtitle: "İnsanların ve Hayvanların Düşünme Gücü",
            topic: "4. KONU • BTY.5.1.4",
            badge: "KAVRAM",
            icon: "fa-solid fa-person",
            bgColor: "from-slate-900 via-indigo-950 to-blue-950",
            gradient: "from-slate-900 via-indigo-950 to-blue-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-6 my-auto py-2">
                    <div class="p-6 bg-blue-950/60 rounded-3xl border-2 border-blue-400/50 shadow-2xl text-center space-y-3">
                        <span class="px-3.5 py-1 bg-blue-500/20 text-blue-300 font-black text-xs uppercase tracking-widest rounded-full border border-blue-400/30">
                            Resmî Ders Tanımı
                        </span>
                        <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-yellow-300 leading-snug">
                            “Doğal zekâ, insanların ve hayvanların düşünme, öğrenme ve problem çözme yeteneğidir.”
                        </h2>
                        <p class="text-sm sm:text-base text-slate-200 font-medium max-w-3xl mx-auto">
                            Canlılar doğdukları andan itibaren çevrelerini keşfeder, duyguları, hisleri ve tecrübeleriyle yeni durumlara uyum sağlarlar.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div class="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 text-center space-y-2">
                            <div class="w-12 h-12 rounded-xl bg-purple-500/30 text-purple-300 flex items-center justify-center text-2xl mx-auto">
                                <i class="fa-solid fa-lightbulb"></i>
                            </div>
                            <h4 class="text-base font-black text-white">Düşünme</h4>
                            <p class="text-xs text-slate-300">Olaylar arasında mantık kurar, hayal eder ve fikir üretir.</p>
                        </div>
                        <div class="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 text-center space-y-2">
                            <div class="w-12 h-12 rounded-xl bg-cyan-500/30 text-cyan-300 flex items-center justify-center text-2xl mx-auto">
                                <i class="fa-solid fa-graduation-cap"></i>
                            </div>
                            <h4 class="text-base font-black text-white">Öğrenme</h4>
                            <p class="text-xs text-slate-300">Deneyimler, hatalar ve tecrübeler sayesinde kendini geliştirir.</p>
                        </div>
                        <div class="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 text-center space-y-2">
                            <div class="w-12 h-12 rounded-xl bg-emerald-500/30 text-emerald-300 flex items-center justify-center text-2xl mx-auto">
                                <i class="fa-solid fa-puzzle-piece"></i>
                            </div>
                            <h4 class="text-base font-black text-white">Problem Çözme</h4>
                            <p class="text-xs text-slate-300">Karşılaştığı yeni zorluklara yaratıcı ve esnek çözümler bulur.</p>
                        </div>
                    </div>

                    <!-- Etkileşimli Soru -->
                    <div class="p-5 bg-indigo-950/80 rounded-2xl border-2 border-indigo-400/50 shadow-xl space-y-3">
                        <div class="flex items-center gap-2 text-yellow-300 font-bold text-sm">
                            <i class="fa-solid fa-circle-question text-lg"></i>
                            <span>ETKİLEŞİMLİ SORU: Bir insan yeni bir oyunu nasıl öğrenebilir?</span>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                            <button onclick="document.getElementById('slide3-fb').innerHTML = '<div class=\'p-3 bg-emerald-500/20 border border-emerald-400 rounded-xl text-emerald-300 font-bold text-sm\'>🎉 DOĞRU! İnsanlar oynayarak, kuralları deneyimleyerek ve duygularıyla öğrenirler.</div>'; sounds.playCorrect();" class="p-3 bg-slate-850 hover:bg-indigo-900 border border-slate-700 hover:border-yellow-400 rounded-xl text-xs sm:text-sm font-bold text-white text-left transition-all">
                                A) Oynayıp deneyimleyerek ve kuralları keşfederek
                            </button>
                            <button onclick="document.getElementById('slide3-fb').innerHTML = '<div class=\'p-3 bg-rose-500/20 border border-rose-400 rounded-xl text-rose-300 font-bold text-sm\'>🤔 Tekrar düşün! İnsanlar kod ezberlemez, yaşayarak öğrenir.</div>'; sounds.playWrong();" class="p-3 bg-slate-850 hover:bg-indigo-900 border border-slate-700 hover:border-yellow-400 rounded-xl text-xs sm:text-sm font-bold text-white text-left transition-all">
                                B) Milyonlarca satır kod ezberleyerek
                            </button>
                            <button onclick="document.getElementById('slide3-fb').innerHTML = '<div class=\'p-3 bg-rose-500/20 border border-rose-400 rounded-xl text-rose-300 font-bold text-sm\'>🤔 İnsanlar elektrikle şarj olmaz, canlıdır!</div>'; sounds.playWrong();" class="p-3 bg-slate-850 hover:bg-indigo-900 border border-slate-700 hover:border-yellow-400 rounded-xl text-xs sm:text-sm font-bold text-white text-left transition-all">
                                C) Elektrik prizine bağlanıp şarj olarak
                            </button>
                        </div>
                        <div id="slide3-fb"></div>
                    </div>
                </div>
            `
        },

        // SLAYT 4 – YAPAY ZEKÂ NEDİR?
        {
            id: 4,
            title: "YAPAY ZEKÂ NEDİR? 🤖",
            subtitle: "İnsan Zekâsını Taklit Eden Akıllı Programlar",
            topic: "4. KONU • BTY.5.1.4",
            badge: "TANIM",
            icon: "fa-solid fa-robot",
            bgColor: "from-slate-900 via-purple-950 to-indigo-950",
            gradient: "from-slate-900 via-purple-950 to-indigo-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-5 my-auto py-2">
                    <div class="p-6 bg-purple-950/60 rounded-3xl border-2 border-purple-400/50 shadow-2xl text-center space-y-3">
                        <span class="px-3.5 py-1 bg-purple-500/20 text-purple-300 font-black text-xs uppercase tracking-widest rounded-full border border-purple-400/30">
                            Resmî Ders Tanımı
                        </span>
                        <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-yellow-300 leading-snug">
                            “Yapay zekâ, makinelerin insan benzeri düşünme ve karar verme yeteneğini taklit eden bilgisayar programlarıdır.”
                        </h2>
                    </div>

                    <!-- 4 Anahtar Kelime Kartı -->
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                        <div class="p-4 bg-slate-850 rounded-2xl border-2 border-cyan-400/40 shadow-lg space-y-1">
                            <span class="text-3xl">⚙️</span>
                            <h4 class="text-base font-black text-cyan-300 uppercase">MAKİNE</h4>
                            <p class="text-[11px] text-slate-300">Bilgisayarlar, robotlar, telefonlar ve akıllı cihazlar</p>
                        </div>
                        <div class="p-4 bg-slate-850 rounded-2xl border-2 border-purple-400/40 shadow-lg space-y-1">
                            <span class="text-3xl">🧠</span>
                            <h4 class="text-base font-black text-purple-300 uppercase">DÜŞÜNME</h4>
                            <p class="text-[11px] text-slate-300">Verileri inceleme ve örüntüleri anlama yeteneği</p>
                        </div>
                        <div class="p-4 bg-slate-850 rounded-2xl border-2 border-yellow-400/40 shadow-lg space-y-1">
                            <span class="text-3xl">⚖️</span>
                            <h4 class="text-base font-black text-yellow-300 uppercase">KARAR VERME</h4>
                            <p class="text-[11px] text-slate-300">Öğrendiklerine göre en uygun seçeneği belirleme</p>
                        </div>
                        <div class="p-4 bg-slate-850 rounded-2xl border-2 border-emerald-400/40 shadow-lg space-y-1">
                            <span class="text-3xl">💻</span>
                            <h4 class="text-base font-black text-emerald-300 uppercase">PROGRAM</h4>
                            <p class="text-[11px] text-slate-300">Yazılımcıların yazdığı matematiksel algoritmalar</p>
                        </div>
                    </div>

                    <!-- Etkileşimli Soru -->
                    <div class="p-5 bg-slate-900/90 rounded-2xl border-2 border-yellow-400/40 shadow-xl space-y-3">
                        <div class="flex items-center gap-2 text-yellow-300 font-bold text-sm">
                            <i class="fa-solid fa-wand-magic-sparkles text-lg"></i>
                            <span>HANGİSİ YAPAY ZEKÂYA ÖRNEK OLABİLİR?</span>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                            <button onclick="document.getElementById('slide4-fb').innerHTML = '<div class=\'p-3 bg-emerald-500/20 border border-emerald-400 rounded-xl text-emerald-300 font-bold text-sm\'>🎉 TEBRİKLER! Telefonun kamerası yüz hatlarını analiz eder ve kilidi açar. Bu bir yapay zekâ uygulamasıdır!</div>'; sounds.playCorrect();" class="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-yellow-400 rounded-xl text-xs sm:text-sm font-bold text-white text-left transition-all">
                                📱 Telefonun bizi yüzümüzden tanıyarak kilidi açması
                            </button>
                            <button onclick="document.getElementById('slide4-fb').innerHTML = '<div class=\'p-3 bg-rose-500/20 border border-rose-400 rounded-xl text-rose-300 font-bold text-sm\'>❌ Kurşun kalem mekanik bir araçtır, yapay zekâ içermez.</div>'; sounds.playWrong();" class="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-yellow-400 rounded-xl text-xs sm:text-sm font-bold text-white text-left transition-all">
                                ✏️ Kurşun kalem ile deftere yazı yazmak
                            </button>
                            <button onclick="document.getElementById('slide4-fb').innerHTML = '<div class=\'p-3 bg-rose-500/20 border border-rose-400 rounded-xl text-rose-300 font-bold text-sm\'>❌ Kitap sayfaları kâğıttır, akıllı bir program değildir.</div>'; sounds.playWrong();" class="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-yellow-400 rounded-xl text-xs sm:text-sm font-bold text-white text-left transition-all">
                                📖 Okunan kitabın sayfasını el ile çevirmek
                            </button>
                        </div>
                        <div id="slide4-fb"></div>
                    </div>
                </div>
            `
        },

        // SLAYT 5 – YAPAY ZEKÂ NASIL ÇALIŞIR?
        {
            id: 5,
            title: "YAPAY ZEKÂ NASIL ÇALIŞIR? ⚙️",
            subtitle: "Veriden Karara Akıllı Akış Şeması",
            topic: "4. KONU • BTY.5.1.4",
            badge: "ÇALIŞMA MANTIĞI",
            icon: "fa-solid fa-gears",
            bgColor: "from-slate-900 via-indigo-950 to-cyan-950",
            gradient: "from-slate-900 via-indigo-950 to-cyan-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-6 my-auto py-2 text-center">
                    <!-- Büyük ve Animasyonlu Şema -->
                    <div class="p-6 bg-slate-900/80 rounded-3xl border-2 border-cyan-400/40 shadow-2xl">
                        <span class="text-xs uppercase tracking-widest text-cyan-300 font-black">YAPAY ZEKÂ ÇALIŞMA ŞEMASI</span>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mt-4">
                            <!-- 1. Adım: Veri -->
                            <div class="p-5 bg-blue-950/70 rounded-2xl border-2 border-blue-400/50 space-y-2 text-left shadow-lg hover:scale-105 transition-all">
                                <div class="flex items-center justify-between">
                                    <span class="w-8 h-8 rounded-lg bg-blue-500/30 text-blue-300 flex items-center justify-center font-black text-sm">1</span>
                                    <span class="text-2xl">📊</span>
                                </div>
                                <h4 class="text-lg font-black text-blue-300 uppercase">1. VERİ</h4>
                                <p class="text-xs text-slate-200">Görseller, metinler, sesler ve sayılar sisteme yüklenir.</p>
                                <span class="inline-block px-2 py-0.5 bg-blue-400/20 text-[10px] text-blue-200 rounded font-semibold">Ham Bilgi Havuzu</span>
                            </div>

                            <!-- 2. Adım: Yapay Zekâ -->
                            <div class="p-5 bg-purple-950/70 rounded-2xl border-2 border-purple-400/50 space-y-2 text-left shadow-lg hover:scale-105 transition-all">
                                <div class="flex items-center justify-between">
                                    <span class="w-8 h-8 rounded-lg bg-purple-500/30 text-purple-300 flex items-center justify-center font-black text-sm">2</span>
                                    <span class="text-2xl">🧠</span>
                                </div>
                                <h4 class="text-lg font-black text-purple-300 uppercase">2. YAPAY ZEKÂ</h4>
                                <p class="text-xs text-slate-200">Verileri analiz eder, öğrenir ve aralarındaki örüntüleri keşfeder.</p>
                                <span class="inline-block px-2 py-0.5 bg-purple-400/20 text-[10px] text-purple-200 rounded font-semibold">Model Eğitimi</span>
                            </div>

                            <!-- 3. Adım: Tahmin / Karar -->
                            <div class="p-5 bg-emerald-950/70 rounded-2xl border-2 border-emerald-400/50 space-y-2 text-left shadow-lg hover:scale-105 transition-all">
                                <div class="flex items-center justify-between">
                                    <span class="w-8 h-8 rounded-lg bg-emerald-500/30 text-emerald-300 flex items-center justify-center font-black text-sm">3</span>
                                    <span class="text-2xl">🎯</span>
                                </div>
                                <h4 class="text-lg font-black text-emerald-300 uppercase">3. TAHMİN / KARAR</h4>
                                <p class="text-xs text-slate-200">Öğrendiği bilgilere göre yeni durumlar için tahmin yapar ve karar verir.</p>
                                <span class="inline-block px-2 py-0.5 bg-emerald-400/20 text-[10px] text-emerald-200 rounded font-semibold">Sonuç & Çözüm</span>
                            </div>
                        </div>
                    </div>

                    <!-- Ana Mesaj Kutusu -->
                    <div class="p-5 bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-yellow-500/20 rounded-2xl border-2 border-yellow-400/70 shadow-xl">
                        <p class="text-xl sm:text-2xl font-black text-yellow-300 flex items-center justify-center gap-3">
                            <i class="fa-solid fa-star text-2xl text-yellow-400 animate-spin" style="animation-duration: 8s;"></i>
                            <span>ANA MESAJ: “Yapay zekâ = Veri ile öğrenen akıllı sistem.”</span>
                        </p>
                    </div>

                    <p class="text-xs sm:text-sm text-slate-300 font-medium">
                        💡 Tıpkı bir bebeğin konuşmayı çevresindeki sesleri dinleyerek öğrenmesi gibi, yapay zekâ da önüne verilen milyonlarca veriyi inceleyerek öğrenir.
                    </p>
                </div>
            `
        },

        // SLAYT 6 – YAPAY ZEKÂNIN ANAHTAR ÖZELLİKLERİ
        {
            id: 6,
            title: "YAPAY ZEKÂNIN ANAHTAR ÖZELLİKLERİ 🔑",
            subtitle: "Öğrenir • Düşünür • Karar Verir",
            topic: "4. KONU • BTY.5.1.4",
            badge: "3 ÖZELLİK",
            icon: "fa-solid fa-key",
            bgColor: "from-slate-900 via-indigo-950 to-blue-900",
            gradient: "from-slate-900 via-indigo-950 to-blue-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-6 my-auto py-2 text-center">
                    <p class="text-base sm:text-lg text-indigo-200 font-semibold">
                        Aşağıdaki 3 büyük karta dokunarak her özelliğin günlük hayattaki örneğini inceleyiniz:
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
                        <!-- Kart 1: ÖĞRENİR -->
                        <div class="p-6 bg-blue-950/70 rounded-3xl border-2 border-blue-400/50 shadow-xl space-y-3 cursor-pointer hover:border-yellow-400 transition-all group" onclick="document.getElementById('feat-det-1').classList.toggle('hidden'); sounds.playClick();">
                            <div class="w-14 h-14 rounded-2xl bg-blue-500/30 text-blue-300 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-inner">
                                <i class="fa-solid fa-book-open-reader"></i>
                            </div>
                            <span class="text-xs font-black text-blue-400 uppercase tracking-widest block">1. ÖZELLİK</span>
                            <h3 class="text-2xl font-black text-white">ÖĞRENİR</h3>
                            <div class="p-3 bg-white/10 rounded-xl border border-white/20">
                                <p class="text-sm font-extrabold text-blue-200">“Verilerden örüntüleri keşfeder.”</p>
                            </div>
                            <div id="feat-det-1" class="text-xs text-slate-300 space-y-1 pt-1 border-t border-slate-700">
                                <span class="font-bold text-yellow-300">🔍 Örnek:</span>
                                <p>Milyonlarca kedi fotoğrafına bakarak kulak, bıyık ve göz şekillerinden bir kediyi tanımayı öğrenir.</p>
                            </div>
                            <span class="text-[11px] text-yellow-300 font-bold block pt-1">👉 Dokunarak detayları aç/kapat</span>
                        </div>

                        <!-- Kart 2: DÜŞÜNÜR -->
                        <div class="p-6 bg-purple-950/70 rounded-3xl border-2 border-purple-400/50 shadow-xl space-y-3 cursor-pointer hover:border-yellow-400 transition-all group" onclick="document.getElementById('feat-det-2').classList.toggle('hidden'); sounds.playClick();">
                            <div class="w-14 h-14 rounded-2xl bg-purple-500/30 text-purple-300 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-inner">
                                <i class="fa-solid fa-brain"></i>
                            </div>
                            <span class="text-xs font-black text-purple-400 uppercase tracking-widest block">2. ÖZELLİK</span>
                            <h3 class="text-2xl font-black text-white">DÜŞÜNÜR</h3>
                            <div class="p-3 bg-white/10 rounded-xl border border-white/20">
                                <p class="text-sm font-extrabold text-purple-200">“Problemleri analiz eder.”</p>
                            </div>
                            <div id="feat-det-2" class="text-xs text-slate-300 space-y-1 pt-1 border-t border-slate-700">
                                <span class="font-bold text-yellow-300">🔍 Örnek:</span>
                                <p>Navigasyonda trafiği, yol çalışmalarını ve hava durumunu hesaplayarak en kısa rotayı düşünür.</p>
                            </div>
                            <span class="text-[11px] text-yellow-300 font-bold block pt-1">👉 Dokunarak detayları aç/kapat</span>
                        </div>

                        <!-- Kart 3: KARAR VERİR -->
                        <div class="p-6 bg-emerald-950/70 rounded-3xl border-2 border-emerald-400/50 shadow-xl space-y-3 cursor-pointer hover:border-yellow-400 transition-all group" onclick="document.getElementById('feat-det-3').classList.toggle('hidden'); sounds.playClick();">
                            <div class="w-14 h-14 rounded-2xl bg-emerald-500/30 text-emerald-300 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-inner">
                                <i class="fa-solid fa-scale-balanced"></i>
                            </div>
                            <span class="text-xs font-black text-emerald-400 uppercase tracking-widest block">3. ÖZELLİK</span>
                            <h3 class="text-2xl font-black text-white">KARAR VERİR</h3>
                            <div class="p-3 bg-white/10 rounded-xl border border-white/20">
                                <p class="text-sm font-extrabold text-emerald-200">“En uygun çözümü üretir.”</p>
                            </div>
                            <div id="feat-det-3" class="text-xs text-slate-300 space-y-1 pt-1 border-t border-slate-700">
                                <span class="font-bold text-yellow-300">🔍 Örnek:</span>
                                <p>Sürücüsüz bir araç yola aniden bir top veya yaya çıktığında saniyenin onda birinde frene basma kararı alır.</p>
                            </div>
                            <span class="text-[11px] text-yellow-300 font-bold block pt-1">👉 Dokunarak detayları aç/kapat</span>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 7 – DOĞAL ZEKÂ VE YAPAY ZEKÂ
        {
            id: 7,
            title: "DOĞAL ZEKÂ VE YAPAY ZEKÂ ⚖️",
            subtitle: "Öğrenme Şekli Karşılaştırması",
            topic: "4. KONU • BTY.5.1.4",
            badge: "KARŞILAŞTIRMA",
            icon: "fa-solid fa-code-compare",
            bgColor: "from-slate-900 via-indigo-950 to-purple-950",
            gradient: "from-slate-900 via-indigo-950 to-purple-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-6 my-auto py-2">
                    <p class="text-center text-base sm:text-xl text-indigo-200 font-semibold">
                        İnsan beyni ile yapay zekânın öğrenme şekli arasındaki temel farkı tahmin edebilir misin?
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Doğal Zekâ Kolonu -->
                        <div class="p-6 bg-blue-950/70 rounded-3xl border-2 border-blue-400/60 shadow-xl space-y-4 text-left">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 rounded-2xl bg-blue-500/30 text-blue-300 flex items-center justify-center text-3xl">
                                    <i class="fa-solid fa-brain"></i>
                                </div>
                                <div>
                                    <span class="text-xs font-black text-blue-400 uppercase">CANLI ZİHNİ</span>
                                    <h3 class="text-2xl font-black text-white">Doğal Zekâ</h3>
                                </div>
                            </div>
                            <div class="p-4 bg-white/10 rounded-2xl border border-white/20 space-y-1">
                                <span class="text-xs text-yellow-300 font-bold uppercase">Öğrenme Şekli:</span>
                                <p class="text-lg font-black text-white">Deneyim, duygular ve sezgi ile öğrenir.</p>
                            </div>
                            <ul class="text-xs sm:text-sm text-slate-200 space-y-1.5 font-medium">
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-yellow-400"></i> Bir kez eli yanan çocuk sıcaktan uzak durmayı hemen öğrenir.</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-yellow-400"></i> Sevinç, korku ve merak gibi duygular öğrenmeyi hızlandırır.</li>
                            </ul>
                        </div>

                        <!-- Yapay Zekâ Kolonu (Gizli / İnteraktif) -->
                        <div class="p-6 bg-purple-950/70 rounded-3xl border-2 border-purple-400/60 shadow-xl space-y-4 text-left">
                            <div class="flex items-center gap-4">
                                <div class="w-14 h-14 rounded-2xl bg-purple-500/30 text-purple-300 flex items-center justify-center text-3xl">
                                    <i class="fa-solid fa-microchip"></i>
                                </div>
                                <div>
                                    <span class="text-xs font-black text-purple-400 uppercase">BİLGİSAYAR SİSTEMİ</span>
                                    <h3 class="text-2xl font-black text-white">Yapay Zekâ</h3>
                                </div>
                            </div>

                            <div id="slide7-secret" class="hidden space-y-4">
                                <div class="p-4 bg-white/10 rounded-2xl border border-white/20 space-y-1">
                                    <span class="text-xs text-cyan-300 font-bold uppercase">Öğrenme Şekli:</span>
                                    <p class="text-lg font-black text-white">Veri ve algoritmalar ile öğrenir.</p>
                                </div>
                                <ul class="text-xs sm:text-sm text-slate-200 space-y-1.5 font-medium">
                                    <li class="flex items-center gap-2"><i class="fa-solid fa-check text-cyan-400"></i> Duygusu veya hissi yoktur; sayılar ve matematiksel formüllerle çalışır.</li>
                                    <li class="flex items-center gap-2"><i class="fa-solid fa-check text-cyan-400"></i> Öğrenebilmesi için yüz binlerce doğru örneğe (veriye) ihtiyaç duyar.</li>
                                </ul>
                            </div>

                            <button id="slide7-btn" onclick="const s = document.getElementById('slide7-secret'); s.classList.toggle('hidden'); this.innerHTML = s.classList.contains('hidden') ? '<i class=\'fa-solid fa-eye\'></i> Cevabı Göster' : '<i class=\'fa-solid fa-eye-slash\'></i> Cevabı Gizle'; sounds.playClick();" class="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl text-sm flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95">
                                <i class="fa-solid fa-eye"></i> Cevabı Göster
                            </button>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 8 – DOĞAL ZEKÂ VE YAPAY ZEKÂ: DİĞER FARKLAR
        {
            id: 8,
            title: "DOĞAL ZEKÂ VE YAPAY ZEKÂ: DİĞER FARKLAR 📊",
            subtitle: "5 Temel Alanda Kapsamlı Karşılaştırma",
            topic: "4. KONU • BTY.5.1.4",
            badge: "FARKLAR",
            icon: "fa-solid fa-scale-unbalanced-flip",
            bgColor: "from-slate-900 via-indigo-950 to-slate-950",
            gradient: "from-slate-900 via-indigo-950 to-slate-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <p class="text-center text-sm sm:text-base text-indigo-200 font-semibold">
                        İki zekâ türü arasındaki 5 temel fark tablosu:
                    </p>

                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse rounded-2xl overflow-hidden shadow-2xl">
                            <thead>
                                <tr class="bg-indigo-900/90 text-white border-b-2 border-indigo-500/50 text-xs sm:text-sm font-black">
                                    <th class="p-3 sm:p-4">ÖZELLİK ALANI</th>
                                    <th class="p-3 sm:p-4 text-blue-300">🧠 DOĞAL ZEKÂ (İNSAN)</th>
                                    <th class="p-3 sm:p-4 text-cyan-300">🤖 YAPAY ZEKÂ</th>
                                </tr>
                            </thead>
                            <tbody class="text-xs sm:text-sm divide-y divide-slate-800 bg-slate-900/90 font-medium">
                                <tr class="hover:bg-slate-800/60 transition-colors">
                                    <td class="p-3 sm:p-4 font-black text-yellow-300 flex items-center gap-2">
                                        <i class="fa-solid fa-arrows-spin"></i> Esneklik
                                    </td>
                                    <td class="p-3 sm:p-4 text-slate-200"><strong class="text-emerald-400">Yüksek:</strong> Yeni her duruma kolayca uyum sağlar.</td>
                                    <td class="p-3 sm:p-4 text-slate-200"><strong class="text-amber-400">Sınırlı:</strong> Sadece eğitildiği görevi yapar.</td>
                                </tr>
                                <tr class="hover:bg-slate-800/60 transition-colors">
                                    <td class="p-3 sm:p-4 font-black text-yellow-300 flex items-center gap-2">
                                        <i class="fa-solid fa-heart"></i> Duygusal Tepki
                                    </td>
                                    <td class="p-3 sm:p-4 text-slate-200"><strong class="text-emerald-400">Var:</strong> Sevgi, korku, empati ve vicdan hisseder.</td>
                                    <td class="p-3 sm:p-4 text-slate-200"><strong class="text-rose-400">Yok:</strong> Duygusuzdur, sadece matematiksel veridir.</td>
                                </tr>
                                <tr class="hover:bg-slate-800/60 transition-colors">
                                    <td class="p-3 sm:p-4 font-black text-yellow-300 flex items-center gap-2">
                                        <i class="fa-solid fa-circle-exclamation"></i> Hata Yapma
                                    </td>
                                    <td class="p-3 sm:p-4 text-slate-200"><strong class="text-blue-300">İnsanidir:</strong> Yanılır, ders çıkarır ve tecrübe edinir.</td>
                                    <td class="p-3 sm:p-4 text-slate-200"><strong class="text-purple-300">Veri Temelli:</strong> Hatalar yeni veriyle ve kodla düzeltilir.</td>
                                </tr>
                                <tr class="hover:bg-slate-800/60 transition-colors">
                                    <td class="p-3 sm:p-4 font-black text-yellow-300 flex items-center gap-2">
                                        <i class="fa-solid fa-bolt"></i> Hız ve Hesaplama
                                    </td>
                                    <td class="p-3 sm:p-4 text-slate-200"><strong class="text-amber-400">Yavaş ama sezgisel:</strong> Sayıları ezberden yavaş hesaplar.</td>
                                    <td class="p-3 sm:p-4 text-slate-200"><strong class="text-emerald-400">Çok Hızlı ve Kesin:</strong> Saniyede milyarlarca işlem yapar.</td>
                                </tr>
                                <tr class="hover:bg-slate-800/60 transition-colors">
                                    <td class="p-3 sm:p-4 font-black text-yellow-300 flex items-center gap-2">
                                        <i class="fa-solid fa-palette"></i> Yaratıcılık
                                    </td>
                                    <td class="p-3 sm:p-4 text-slate-200"><strong class="text-emerald-400">Özgün:</strong> Sanat, mizahi sezgi, yeni fikir buluşları.</td>
                                    <td class="p-3 sm:p-4 text-slate-200"><strong class="text-amber-400">Sınırlı:</strong> Var olan verileri harmanlayarak üretir.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `
        },

        // SLAYT 9 – GÜNLÜK HAYATTA YAPAY ZEKÂ
        {
            id: 9,
            title: "GÜNLÜK HAYATTA YAPAY ZEKÂ 📱",
            subtitle: "Farkında Olmadan Her Gün Kullandığımız 9 Akıllı Teknoloji",
            topic: "4. KONU • BTY.5.1.4",
            badge: "GÜNLÜK HAYAT",
            icon: "fa-solid fa-mobile-screen",
            bgColor: "from-slate-900 via-indigo-950 to-blue-900",
            gradient: "from-slate-900 via-indigo-950 to-blue-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2 text-center">
                    <p class="text-sm sm:text-base text-indigo-200 font-semibold">
                        Aşağıdaki kartlara dokunarak günlük yaşamımızdaki yapay zekâ örneklerini inceleyiniz:
                    </p>

                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
                        <button onclick="document.getElementById('slide9-fb').innerText = '📱 Telefonlarda Yüz Tanıma: Kameranın yüz hatlarını milimetrik analiz edip ekran kilidini anında açmasıdır.'; sounds.playClick();" class="p-3 bg-slate-850 hover:bg-indigo-900/60 border border-slate-700 hover:border-yellow-400 rounded-2xl transition-all shadow-md">
                            <span class="text-2xl">👤</span>
                            <h4 class="text-xs sm:text-sm font-bold text-white mt-1">Yüz Tanıma</h4>
                            <p class="text-[10px] text-slate-400">Telefon kilitleri & güvenlik</p>
                        </button>

                        <button onclick="document.getElementById('slide9-fb').innerText = '🎙️ Siri ve Asistanlar: Sesli komutları doğal dil işleme ile anlayıp sorulara cevap verir, alarm kurar.'; sounds.playClick();" class="p-3 bg-slate-850 hover:bg-indigo-900/60 border border-slate-700 hover:border-yellow-400 rounded-2xl transition-all shadow-md">
                            <span class="text-2xl">🎙️</span>
                            <h4 class="text-xs sm:text-sm font-bold text-white mt-1">Siri & Asistanlar</h4>
                            <p class="text-[10px] text-slate-400">Sesli yapay zekâ desteği</p>
                        </button>

                        <button onclick="document.getElementById('slide9-fb').innerText = '🎬 YouTube / Netflix: İzlediğiniz videoları analiz ederek ilginizi çekecek yeni videolar önerir.'; sounds.playClick();" class="p-3 bg-slate-850 hover:bg-indigo-900/60 border border-slate-700 hover:border-yellow-400 rounded-2xl transition-all shadow-md">
                            <span class="text-2xl">🎬</span>
                            <h4 class="text-xs sm:text-sm font-bold text-white mt-1">Video Önerileri</h4>
                            <p class="text-[10px] text-slate-400">YouTube & Netflix listeleri</p>
                        </button>

                        <button onclick="document.getElementById('slide9-fb').innerText = '🛡️ Güvenlik Kameraları: Şüpheli bir hareket veya yüz algıladığında güvenliğe anında alarm gönderir.'; sounds.playClick();" class="p-3 bg-slate-850 hover:bg-indigo-900/60 border border-slate-700 hover:border-yellow-400 rounded-2xl transition-all shadow-md">
                            <span class="text-2xl">📹</span>
                            <h4 class="text-xs sm:text-sm font-bold text-white mt-1">Güvenlik Kameraları</h4>
                            <p class="text-[10px] text-slate-400">Şüpheli hareket analizi</p>
                        </button>

                        <button onclick="document.getElementById('slide9-fb').innerText = '🧹 Robot Süpürgeler: Odanın haritasını çıkarır, eşyalara çarpmadan en uygun rotada temizlik yapar.'; sounds.playClick();" class="p-3 bg-slate-850 hover:bg-indigo-900/60 border border-slate-700 hover:border-yellow-400 rounded-2xl transition-all shadow-md">
                            <span class="text-2xl">🧹</span>
                            <h4 class="text-xs sm:text-sm font-bold text-white mt-1">Robot Süpürgeler</h4>
                            <p class="text-[10px] text-slate-400">Haritalama & akıllı temizlik</p>
                        </button>

                        <button onclick="document.getElementById('slide9-fb').innerText = '🚗 Otonom Araçlar: Sensör ve kameralarla trafiği izler, insan müdahalesi olmadan aracı güvenle sürer.'; sounds.playClick();" class="p-3 bg-slate-850 hover:bg-indigo-900/60 border border-slate-700 hover:border-yellow-400 rounded-2xl transition-all shadow-md">
                            <span class="text-2xl">🚗</span>
                            <h4 class="text-xs sm:text-sm font-bold text-white mt-1">Otonom Araçlar</h4>
                            <p class="text-[10px] text-slate-400">Sürücüsüz otomobiller</p>
                        </button>

                        <button onclick="document.getElementById('slide9-fb').innerText = '🗺️ Trafik Tahmini: Harita uygulamalarında yolların yoğunluğunu tahmin edip en hızlı yolu çizer.'; sounds.playClick();" class="p-3 bg-slate-850 hover:bg-indigo-900/60 border border-slate-700 hover:border-yellow-400 rounded-2xl transition-all shadow-md">
                            <span class="text-2xl">🗺️</span>
                            <h4 class="text-xs sm:text-sm font-bold text-white mt-1">Trafik Tahmini</h4>
                            <p class="text-[10px] text-slate-400">Navigasyon & canlı rota</p>
                        </button>

                        <button onclick="document.getElementById('slide9-fb').innerText = '🏥 Hastalık Tespiti: Röntgen ve MR fotoğraflarını inceleyerek doktora erken teşhis desteği verir.'; sounds.playClick();" class="p-3 bg-slate-850 hover:bg-indigo-900/60 border border-slate-700 hover:border-yellow-400 rounded-2xl transition-all shadow-md">
                            <span class="text-2xl">🩺</span>
                            <h4 class="text-xs sm:text-sm font-bold text-white mt-1">Hastalık Tespiti</h4>
                            <p class="text-[10px] text-slate-400">Röntgen & MR analizleri</p>
                        </button>

                        <button onclick="document.getElementById('slide9-fb').innerText = '🛍️ Alışveriş Önerileri: Aradığınız ürünlere benzer indirimli ürünleri sayfanıza getirir.'; sounds.playClick();" class="p-3 bg-slate-850 hover:bg-indigo-900/60 border border-slate-700 hover:border-yellow-400 rounded-2xl transition-all shadow-md">
                            <span class="text-2xl">🛍️</span>
                            <h4 class="text-xs sm:text-sm font-bold text-white mt-1">Alışveriş Önerileri</h4>
                            <p class="text-[10px] text-slate-400">E-ticaret tavsiyeleri</p>
                        </button>
                    </div>

                    <div id="slide9-fb" class="p-3.5 bg-indigo-950/90 rounded-2xl border border-yellow-400/50 text-yellow-300 font-bold text-xs sm:text-sm min-h-[48px] flex items-center justify-center shadow-lg">
                        👆 Kartlara dokunarak nasıl çalıştıklarını okuyabilirsiniz!
                    </div>
                </div>
            `
        },

        // SLAYT 10 – YAPAY ZEKÂ HANGİ ALANLARDA KULLANILIYOR?
        {
            id: 10,
            title: "YAPAY ZEKÂ HANGİ ALANLARDA KULLANILIYOR? 🌐",
            subtitle: "Hayatın Her Sektöründe Akıllı Çözümler",
            topic: "4. KONU • BTY.5.1.4",
            badge: "12 ALAN",
            icon: "fa-solid fa-shapes",
            bgColor: "from-slate-900 via-indigo-950 to-purple-950",
            gradient: "from-slate-900 via-indigo-950 to-purple-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2 text-center">
                    <p class="text-sm sm:text-base text-indigo-200 font-semibold">
                        Yapay zekâ sadece bilgisayarlarda değil, hayatın 12 temel alanında görev alır:
                    </p>

                    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2.5 text-left">
                        <button onclick="document.getElementById('slide10-fb').innerText = '🎓 EĞİTİM: Öğrencinin seviyesine özel öğrenme planları ve akıllı test sistemleri.'; sounds.playClick();" class="p-3 bg-slate-850 hover:bg-indigo-900 border border-slate-700 hover:border-yellow-400 rounded-xl transition-all">
                            <i class="fa-solid fa-graduation-cap text-yellow-400 text-lg mb-1 block"></i>
                            <span class="text-xs font-bold text-white block">Eğitim</span>
                        </button>
                        <button onclick="document.getElementById('slide10-fb').innerText = '🏠 GÜNLÜK YAŞAM: Sanal sesli asistanlar, akıllı saatler ve robot süpürgeler.'; sounds.playClick();" class="p-3 bg-slate-850 hover:bg-indigo-900 border border-slate-700 hover:border-yellow-400 rounded-xl transition-all">
                            <i class="fa-solid fa-house text-cyan-400 text-lg mb-1 block"></i>
                            <span class="text-xs font-bold text-white block">Günlük Yaşam</span>
                        </button>
                        <button onclick="document.getElementById('slide10-fb').innerText = '🚗 ULAŞIM: Sürücüsüz araçlar, akıllı trafik ışıkları ve navigasyon rotaları.'; sounds.playClick();" class="p-3 bg-slate-850 hover:bg-indigo-900 border border-slate-700 hover:border-yellow-400 rounded-xl transition-all">
                            <i class="fa-solid fa-car text-blue-400 text-lg mb-1 block"></i>
                            <span class="text-xs font-bold text-white block">Ulaşım</span>
                        </button>
                        <button onclick="document.getElementById('slide10-fb').innerText = '🏥 SAĞLIK: Erken hastalık teşhisi, ameliyat robotları ve yeni ilaç keşifleri.'; sounds.playClick();" class="p-3 bg-slate-850 hover:bg-indigo-900 border border-slate-700 hover:border-yellow-400 rounded-xl transition-all">
                            <i class="fa-solid fa-heart-pulse text-rose-400 text-lg mb-1 block"></i>
                            <span class="text-xs font-bold text-white block">Sağlık</span>
                        </button>
                        <button onclick="document.getElementById('slide10-fb').innerText = '💳 FİNANS: Banka dolandırıcılıklarını anında yakalama ve borsa analizleri.'; sounds.playClick();" class="p-3 bg-slate-850 hover:bg-indigo-900 border border-slate-700 hover:border-yellow-400 rounded-xl transition-all">
                            <i class="fa-solid fa-wallet text-emerald-400 text-lg mb-1 block"></i>
                            <span class="text-xs font-bold text-white block">Finans</span>
                        </button>
                        <button onclick="document.getElementById('slide10-fb').innerText = '🎨 SANAT & YARATICILIK: Yapay zekâ ile özgün resimler, müzikler ve şiirler üretme.'; sounds.playClick();" class="p-3 bg-slate-850 hover:bg-indigo-900 border border-slate-700 hover:border-yellow-400 rounded-xl transition-all">
                            <i class="fa-solid fa-palette text-purple-400 text-lg mb-1 block"></i>
                            <span class="text-xs font-bold text-white block">Sanat</span>
                        </button>
                        <button onclick="document.getElementById('slide10-fb').innerText = '🎮 EĞLENCE: Video oyunlarında akıllı rakipler, film/dizi tavsiye algoritmaları.'; sounds.playClick();" class="p-3 bg-slate-850 hover:bg-indigo-900 border border-slate-700 hover:border-yellow-400 rounded-xl transition-all">
                            <i class="fa-solid fa-gamepad text-amber-400 text-lg mb-1 block"></i>
                            <span class="text-xs font-bold text-white block">Eğlence</span>
                        </button>
                        <button onclick="document.getElementById('slide10-fb').innerText = '🌾 TARIM: Toprağın nemini ölçen akıllı sulama ve hasat verimliliği tahmini.'; sounds.playClick();" class="p-3 bg-slate-850 hover:bg-indigo-900 border border-slate-700 hover:border-yellow-400 rounded-xl transition-all">
                            <i class="fa-solid fa-wheat-awn text-lime-400 text-lg mb-1 block"></i>
                            <span class="text-xs font-bold text-white block">Tarım</span>
                        </button>
                        <button onclick="document.getElementById('slide10-fb').innerText = '🏭 SANAYİ & ÜRETİM: Fabrika montaj robotları ve hatasız parça kalite kontrolü.'; sounds.playClick();" class="p-3 bg-slate-850 hover:bg-indigo-900 border border-slate-700 hover:border-yellow-400 rounded-xl transition-all">
                            <i class="fa-solid fa-industry text-orange-400 text-lg mb-1 block"></i>
                            <span class="text-xs font-bold text-white block">Sanayi</span>
                        </button>
                        <button onclick="document.getElementById('slide10-fb').innerText = '🛡️ GÜVENLİK: Yüz tanıma kapıları, havaalanı güvenliği ve siber koruma kalkanları.'; sounds.playClick();" class="p-3 bg-slate-850 hover:bg-indigo-900 border border-slate-700 hover:border-yellow-400 rounded-xl transition-all">
                            <i class="fa-solid fa-shield-halved text-red-400 text-lg mb-1 block"></i>
                            <span class="text-xs font-bold text-white block">Güvenlik</span>
                        </button>
                        <button onclick="document.getElementById('slide10-fb').innerText = '⚡ ENERJİ: Şehir elektrik şebekelerini optimize ederek enerji israfını önleme.'; sounds.playClick();" class="p-3 bg-slate-850 hover:bg-indigo-900 border border-slate-700 hover:border-yellow-400 rounded-xl transition-all">
                            <i class="fa-solid fa-bolt text-yellow-300 text-lg mb-1 block"></i>
                            <span class="text-xs font-bold text-white block">Enerji</span>
                        </button>
                        <button onclick="document.getElementById('slide10-fb').innerText = '🌱 ÇEVRE: Hava kirliliği ölçümü, iklim krizi analizleri ve orman yangını tespiti.'; sounds.playClick();" class="p-3 bg-slate-850 hover:bg-indigo-900 border border-slate-700 hover:border-yellow-400 rounded-xl transition-all">
                            <i class="fa-solid fa-leaf text-teal-400 text-lg mb-1 block"></i>
                            <span class="text-xs font-bold text-white block">Çevre</span>
                        </button>
                    </div>

                    <div id="slide10-fb" class="p-3.5 bg-indigo-950/90 rounded-2xl border-2 border-yellow-400/50 text-yellow-300 font-bold text-xs sm:text-sm min-h-[48px] flex items-center justify-center shadow-lg">
                        👆 Bir alana dokunarak yapay zekânın oradaki görevini görebilirsiniz!
                    </div>
                </div>
            `
        },

        // SLAYT 11 – EĞİTİM VE GÜNLÜK YAŞAM
        {
            id: 11,
            title: "EĞİTİM VE GÜNLÜK YAŞAM 🎓🏠",
            subtitle: "Okulda ve Evde Akıllı Teknolojiler",
            topic: "4. KONU • BTY.5.1.4",
            badge: "SEKTÖRLER",
            icon: "fa-solid fa-school",
            bgColor: "from-slate-900 via-blue-950 to-indigo-950",
            gradient: "from-slate-900 via-blue-950 to-indigo-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-5 my-auto py-2">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
                        <!-- Eğitim -->
                        <div class="p-6 bg-blue-950/70 rounded-3xl border-2 border-blue-400/60 shadow-xl space-y-3">
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 rounded-xl bg-blue-500/30 text-blue-300 flex items-center justify-center text-2xl">
                                    <i class="fa-solid fa-graduation-cap"></i>
                                </div>
                                <h3 class="text-xl font-black text-white">EĞİTİMDE YAPAY ZEKÂ</h3>
                            </div>
                            <ul class="text-xs sm:text-sm text-slate-200 space-y-2">
                                <li class="p-2.5 bg-slate-900/80 rounded-xl border border-slate-700 flex items-center gap-2">
                                    <i class="fa-solid fa-check text-blue-400"></i>
                                    <span><strong>Kişiselleştirilmiş Öğrenme:</strong> Her öğrencinin hızına ve eksiğine göre özel ders planı sunar.</span>
                                </li>
                                <li class="p-2.5 bg-slate-900/80 rounded-xl border border-slate-700 flex items-center gap-2">
                                    <i class="fa-solid fa-check text-blue-400"></i>
                                    <span><strong>Akıllı Öğretim Sistemleri:</strong> Çözülemeyen soruları analiz eder ve takviye konular önerir.</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Günlük Yaşam -->
                        <div class="p-6 bg-purple-950/70 rounded-3xl border-2 border-purple-400/60 shadow-xl space-y-3">
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 rounded-xl bg-purple-500/30 text-purple-300 flex items-center justify-center text-2xl">
                                    <i class="fa-solid fa-couch"></i>
                                </div>
                                <h3 class="text-xl font-black text-white">GÜNLÜK YAŞAMDA YAPAY ZEKÂ</h3>
                            </div>
                            <ul class="text-xs sm:text-sm text-slate-200 space-y-2">
                                <li class="p-2.5 bg-slate-900/80 rounded-xl border border-slate-700 flex items-center gap-2">
                                    <i class="fa-solid fa-check text-purple-400"></i>
                                    <span><strong>Sanal Asistanlar:</strong> Siri veya Alexa ile hava durumunu öğrenir, hatırlatıcı kurarız.</span>
                                </li>
                                <li class="p-2.5 bg-slate-900/80 rounded-xl border border-slate-700 flex items-center gap-2">
                                    <i class="fa-solid fa-check text-purple-400"></i>
                                    <span><strong>Robot Süpürgeler:</strong> Lazer sensörlerle evin haritasını çıkararak engelleri aşar.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Etkileşim -->
                    <div class="p-4 bg-slate-900/90 rounded-2xl border-2 border-yellow-400/50 shadow-xl text-center space-y-3">
                        <span class="text-xs font-bold text-yellow-300 uppercase tracking-widest">🤔 SINIF ETKİLEŞİMİ</span>
                        <h4 class="text-base sm:text-lg font-black text-white">“Sen olsan yapay zekâyı okulda nerede kullanırdın?”</h4>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <button onclick="document.getElementById('slide11-fb').innerText = '🎉 Harika fikir! Yapay zekâ her öğrencinin zayıf konusunu tespit edip ona özel alıştırma verebilir.'; sounds.playClick();" class="p-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-yellow-400 rounded-xl text-xs font-bold text-white transition-all">
                                📚 Anlamadığım konularda bana özel test hazırlasın
                            </button>
                            <button onclick="document.getElementById('slide11-fb').innerText = '🎉 Çok yaratıcı! Kantin veya yemekhane kuyruğunu kamera analiziyle tahmin edebilir.'; sounds.playClick();" class="p-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-yellow-400 rounded-xl text-xs font-bold text-white transition-all">
                                🥪 Yemekhane sırasını tahmin edip yoğunluğu azaltsın
                            </button>
                            <button onclick="document.getElementById('slide11-fb').innerText = '🎉 Güzel bir hayal! Kütüphanedeki binlerce kitap arasından tam istediğimiz cümleyi bulabilir.'; sounds.playClick();" class="p-2.5 bg-slate-850 hover:bg-slate-700 border border-slate-700 hover:border-yellow-400 rounded-xl text-xs font-bold text-white transition-all">
                                📖 Kütüphanede aradığım kitabı ve sayfayı anında bulsun
                            </button>
                        </div>
                        <div id="slide11-fb" class="text-xs font-bold text-emerald-300 min-h-[20px]"></div>
                    </div>
                </div>
            `
        },

        // SLAYT 12 – ULAŞIM, SAĞLIK VE FİNANS
        {
            id: 12,
            title: "ULAŞIM, SAĞLIK VE FİNANS 🚗🩺💳",
            subtitle: "Kritik Sektörlerde Yapay Zekâ Gücü",
            topic: "4. KONU • BTY.5.1.4",
            badge: "SEKTÖRLER",
            icon: "fa-solid fa-network-wired",
            bgColor: "from-slate-900 via-indigo-950 to-emerald-950",
            gradient: "from-slate-900 via-indigo-950 to-emerald-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                        <!-- ULAŞIM -->
                        <div class="p-5 bg-blue-950/70 rounded-3xl border-2 border-blue-400/50 shadow-xl space-y-2">
                            <div class="w-12 h-12 rounded-xl bg-blue-500/30 text-blue-300 flex items-center justify-center text-2xl">
                                <i class="fa-solid fa-car"></i>
                            </div>
                            <h3 class="text-lg font-black text-white">ULAŞIM</h3>
                            <ul class="text-xs text-slate-200 space-y-2 pt-1">
                                <li class="p-2 bg-slate-900/80 rounded-lg border border-slate-700"><strong>📍 Navigasyon:</strong> Anlık kaza ve trafik verileriyle en hızlı yolu belirler.</li>
                                <li class="p-2 bg-slate-900/80 rounded-lg border border-slate-700"><strong>🚗 Sürücüsüz Araçlar:</strong> Çevresindeki yayaları ve tabelaları kameralarla görür.</li>
                            </ul>
                        </div>

                        <!-- SAĞLIK -->
                        <div class="p-5 bg-rose-950/70 rounded-3xl border-2 border-rose-400/50 shadow-xl space-y-2">
                            <div class="w-12 h-12 rounded-xl bg-rose-500/30 text-rose-300 flex items-center justify-center text-2xl">
                                <i class="fa-solid fa-heart-pulse"></i>
                            </div>
                            <h3 class="text-lg font-black text-white">SAĞLIK</h3>
                            <ul class="text-xs text-slate-200 space-y-2 pt-1">
                                <li class="p-2 bg-slate-900/80 rounded-lg border border-slate-700"><strong>🩺 Hastalık Teşhisi:</strong> İnsan gözünün kaçırabileceği mikro hücreleri yakalar.</li>
                                <li class="p-2 bg-slate-900/80 rounded-lg border border-slate-700"><strong>🩻 Röntgen & MR:</strong> Milyonlarca röntgen filmini karşılaştırıp doktora yol gösterir.</li>
                                <li class="p-2 bg-slate-900/80 rounded-lg border border-slate-700"><strong>💊 İlaç Geliştirme:</strong> Yeni ilaç moleküllerini aylar yerine günlerde test eder.</li>
                            </ul>
                        </div>

                        <!-- FİNANS -->
                        <div class="p-5 bg-emerald-950/70 rounded-3xl border-2 border-emerald-400/50 shadow-xl space-y-2">
                            <div class="w-12 h-12 rounded-xl bg-emerald-500/30 text-emerald-300 flex items-center justify-center text-2xl">
                                <i class="fa-solid fa-wallet"></i>
                            </div>
                            <h3 class="text-lg font-black text-white">FİNANS</h3>
                            <ul class="text-xs text-slate-200 space-y-2 pt-1">
                                <li class="p-2 bg-slate-900/80 rounded-lg border border-slate-700"><strong>🛡️ Dolandırıcılık Tespiti:</strong> Başka bir ülkeden yapılan şüpheli harcamayı bloke eder.</li>
                                <li class="p-2 bg-slate-900/80 rounded-lg border border-slate-700"><strong>📈 Borsa Tahminleri:</strong> Piyasa dalgalanmalarını matematiksel olarak tahmin eder.</li>
                                <li class="p-2 bg-slate-900/80 rounded-lg border border-slate-700"><strong>💳 Kredi Analizi:</strong> Geri ödeme güvenilirliğini saniyeler içinde hesaplar.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 13 – SANAT, EĞLENCE, TARIM VE ÜRETİM
        {
            id: 13,
            title: "SANAT, EĞLENCE, TARIM VE ÜRETİM 🎨🎮🌾🏭",
            subtitle: "Yaratıcılıktan Fabrikalara ve Tarlalara",
            topic: "4. KONU • BTY.5.1.4",
            badge: "SEKTÖRLER",
            icon: "fa-solid fa-paintbrush",
            bgColor: "from-slate-900 via-purple-950 to-amber-950",
            gradient: "from-slate-900 via-purple-950 to-amber-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                        <div class="p-4 bg-purple-950/70 rounded-2xl border-2 border-purple-400/50 space-y-2">
                            <span class="text-2xl">🎨</span>
                            <h4 class="text-base font-black text-purple-300">SANAT & YARATICILIK</h4>
                            <p class="text-xs text-slate-200">• Metinden resim üretme<br>• Melodilerden müzik besteleme<br>• Masal ve hikâye kurgulama</p>
                        </div>

                        <div class="p-4 bg-amber-950/70 rounded-2xl border-2 border-amber-400/50 space-y-2">
                            <span class="text-2xl">🎮</span>
                            <h4 class="text-base font-black text-amber-300">EĞLENCE</h4>
                            <p class="text-xs text-slate-200">• Oyunlarda zeki bilgisayar rakipleri<br>• Kişiye özel film/dizi tavsiyesi<br>• Akıllı ses efektleri</p>
                        </div>

                        <div class="p-4 bg-lime-950/70 rounded-2xl border-2 border-lime-400/50 space-y-2">
                            <span class="text-2xl">🌾</span>
                            <h4 class="text-base font-black text-lime-300">TARIM</h4>
                            <p class="text-xs text-slate-200">• Hasat verimliliği tahmini<br>• Toprak nemine göre akıllı sulama<br>• Zirai hastalık erken uyarısı</p>
                        </div>

                        <div class="p-4 bg-cyan-950/70 rounded-2xl border-2 border-cyan-400/50 space-y-2">
                            <span class="text-2xl">🏭</span>
                            <h4 class="text-base font-black text-cyan-300">SANAYİ & ÜRETİM</h4>
                            <p class="text-xs text-slate-200">• Fabrika montaj robotları<br>• Ürünlerde milimetrik kalite kontrolü<br>• Arıza önleyici bakım uyarıları</p>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 14 – GÜVENLİK, ENERJİ VE ÇEVRE
        {
            id: 14,
            title: "GÜVENLİK, ENERJİ VE ÇEVRE 🛡️⚡🌱",
            subtitle: "Daha Güvenli ve Temiz Bir Gelecek İçin",
            topic: "4. KONU • BTY.5.1.4",
            badge: "SEKTÖRLER",
            icon: "fa-solid fa-shield-halved",
            bgColor: "from-slate-900 via-teal-950 to-indigo-950",
            gradient: "from-slate-900 via-teal-950 to-indigo-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-5 my-auto py-2">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
                        <div class="p-6 bg-red-950/70 rounded-3xl border-2 border-red-400/50 shadow-xl space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-red-500/30 text-red-300 flex items-center justify-center text-2xl">
                                <i class="fa-solid fa-shield-halved"></i>
                            </div>
                            <h3 class="text-xl font-black text-white">GÜVENLİK</h3>
                            <ul class="text-xs sm:text-sm text-slate-200 space-y-2">
                                <li class="p-2 bg-slate-900/80 rounded-lg border border-slate-700"><strong>Yüz Tanıma:</strong> Havaalanlarında ve güvenli binalarda kimlik doğrular.</li>
                                <li class="p-2 bg-slate-900/80 rounded-lg border border-slate-700"><strong>Kamera Analizi:</strong> Kalabalık alanlarda kaybolan kişiyi veya tehlikeyi saniyeler içinde bulur.</li>
                            </ul>
                        </div>

                        <div class="p-6 bg-amber-950/70 rounded-3xl border-2 border-amber-400/50 shadow-xl space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-amber-500/30 text-amber-300 flex items-center justify-center text-2xl">
                                <i class="fa-solid fa-bolt"></i>
                            </div>
                            <h3 class="text-xl font-black text-white">ENERJİ</h3>
                            <ul class="text-xs sm:text-sm text-slate-200 space-y-2">
                                <li class="p-2 bg-slate-900/80 rounded-lg border border-slate-700"><strong>Şebeke Optimizasyonu:</strong> Elektrik tüketimini şehirlere göre dengeler.</li>
                                <li class="p-2 bg-slate-900/80 rounded-lg border border-slate-700"><strong>Tasarruf:</strong> Güneş ve rüzgâr santrallerinin en verimli çalışma saatlerini hesaplar.</li>
                            </ul>
                        </div>

                        <div class="p-6 bg-teal-950/70 rounded-3xl border-2 border-teal-400/50 shadow-xl space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-teal-500/30 text-teal-300 flex items-center justify-center text-2xl">
                                <i class="fa-solid fa-leaf"></i>
                            </div>
                            <h3 class="text-xl font-black text-white">ÇEVRE</h3>
                            <ul class="text-xs sm:text-sm text-slate-200 space-y-2">
                                <li class="p-2 bg-slate-900/80 rounded-lg border border-slate-700"><strong>Hava Kirliliği Analizi:</strong> Şehirlerdeki zehirli gaz yoğunluğunu tahmin eder.</li>
                                <li class="p-2 bg-slate-900/80 rounded-lg border border-slate-700"><strong>İklim ve Yangın:</strong> Uydu görüntüleriyle orman yangınlarını anında tespit eder.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 15 – GÜNLÜK HAYATTAN YAPAY ZEKÂ UYGULAMALARI
        {
            id: 15,
            title: "GÜNLÜK HAYATTAN YAPAY ZEKÂ UYGULAMALARI 📋",
            subtitle: "5 Temel Sistem Nasıl Çalışır?",
            topic: "4. KONU • BTY.5.1.4",
            badge: "UYGULAMALAR",
            icon: "fa-solid fa-table-list",
            bgColor: "from-slate-900 via-indigo-950 to-blue-950",
            gradient: "from-slate-900 via-indigo-950 to-blue-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <div class="grid grid-cols-1 gap-2.5 text-left text-xs sm:text-sm">
                        <div class="p-3.5 bg-blue-950/60 rounded-2xl border border-blue-400/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                            <div>
                                <span class="font-black text-blue-300 text-sm sm:text-base flex items-center gap-2">
                                    <i class="fa-solid fa-microphone"></i> Sesli Asistanlar (Siri, Alexa)
                                </span>
                                <p class="text-slate-300 text-xs">Sesli komutları algılar, cevap verir.</p>
                            </div>
                            <span class="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-xl text-xs font-bold shrink-0">
                                Doğal Dil İşleme (NLP) ile konuşmaları anlar
                            </span>
                        </div>

                        <div class="p-3.5 bg-purple-950/60 rounded-2xl border border-purple-400/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                            <div>
                                <span class="font-black text-purple-300 text-sm sm:text-base flex items-center gap-2">
                                    <i class="fa-solid fa-face-smile"></i> Yüz Tanıma Sistemleri
                                </span>
                                <p class="text-slate-300 text-xs">Yüzü algılar, tanır ve tepki verir.</p>
                            </div>
                            <span class="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-xl text-xs font-bold shrink-0">
                                Görüntü İşleme ile yüz hatlarını analiz eder
                            </span>
                        </div>

                        <div class="p-3.5 bg-cyan-950/60 rounded-2xl border border-cyan-400/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                            <div>
                                <span class="font-black text-cyan-300 text-sm sm:text-base flex items-center gap-2">
                                    <i class="fa-solid fa-car-side"></i> Otonom Arabalar
                                </span>
                                <p class="text-slate-300 text-xs">Trafikte kendi kendine güvenle hareket eder.</p>
                            </div>
                            <span class="px-3 py-1 bg-cyan-500/20 text-cyan-200 rounded-xl text-xs font-bold shrink-0">
                                Sensör verileriyle çevreyi algılar, rota/hız belirler
                            </span>
                        </div>

                        <div class="p-3.5 bg-amber-950/60 rounded-2xl border border-amber-400/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                            <div>
                                <span class="font-black text-amber-300 text-sm sm:text-base flex items-center gap-2">
                                    <i class="fa-solid fa-play"></i> Netflix / YouTube Önerileri
                                </span>
                                <p class="text-slate-300 text-xs">İzlenme alışkanlıklarına göre yeni içerik önerir.</p>
                            </div>
                            <span class="px-3 py-1 bg-amber-500/20 text-amber-200 rounded-xl text-xs font-bold shrink-0">
                                Kullanıcı verilerini analiz ederek tahmin üretir
                            </span>
                        </div>

                        <div class="p-3.5 bg-emerald-950/60 rounded-2xl border border-emerald-400/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                            <div>
                                <span class="font-black text-emerald-300 text-sm sm:text-base flex items-center gap-2">
                                    <i class="fa-solid fa-language"></i> Google Translate
                                </span>
                                <p class="text-slate-300 text-xs">Metinleri farklı dillere anında çevirir.</p>
                            </div>
                            <span class="px-3 py-1 bg-emerald-500/20 text-emerald-200 rounded-xl text-xs font-bold shrink-0">
                                Dil modeli ile anlamı çözüp hedef dile dönüştürür
                            </span>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 16 – DİĞER YAPAY ZEKÂ UYGULAMALARI
        {
            id: 16,
            title: "DİĞER YAPAY ZEKÂ UYGULAMALARI 🔍",
            subtitle: "Chatbotlar, Robot Süpürge, Duolingo, Lens",
            topic: "4. KONU • BTY.5.1.4",
            badge: "KEŞİF",
            icon: "fa-solid fa-wand-magic-sparkles",
            bgColor: "from-slate-900 via-indigo-950 to-purple-950",
            gradient: "from-slate-900 via-indigo-950 to-purple-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2 text-center">
                    <p class="text-sm sm:text-base text-indigo-200 font-semibold">
                        Her uygulamanın altındaki butona dokunarak yapay zekâ görevinin ne olduğunu tahmin ediniz:
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
                        <!-- Chatbotlar -->
                        <div class="p-4 bg-slate-850 rounded-2xl border border-indigo-500/40 shadow-lg space-y-2 flex flex-col justify-between">
                            <div>
                                <span class="text-3xl">💬</span>
                                <h4 class="text-base font-black text-white mt-1">Chatbotlar</h4>
                                <p class="text-xs text-slate-300">Web sitelerindeki akıllı sohbet balonları</p>
                            </div>
                            <div id="guess-det-1" class="hidden p-2.5 bg-indigo-900/60 rounded-xl border border-indigo-400 text-xs text-yellow-300 font-bold">
                                🎯 Soruları anlar, 7/24 müşteri desteği ve yönlendirme yapar.
                            </div>
                            <button onclick="document.getElementById('guess-det-1').classList.toggle('hidden'); sounds.playClick();" class="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs transition-all">
                                Ne Yaptığını Gör 👁️
                            </button>
                        </div>

                        <!-- Robot Süpürge -->
                        <div class="p-4 bg-slate-850 rounded-2xl border border-cyan-500/40 shadow-lg space-y-2 flex flex-col justify-between">
                            <div>
                                <span class="text-3xl">🤖</span>
                                <h4 class="text-base font-black text-white mt-1">Robot Akıllı Süpürge</h4>
                                <p class="text-xs text-slate-300">Evi kendi kendine temizleyen robot</p>
                            </div>
                            <div id="guess-det-2" class="hidden p-2.5 bg-cyan-900/60 rounded-xl border border-cyan-400 text-xs text-yellow-300 font-bold">
                                🎯 Odayı tanır, engelleri sensörle algılar, temizliği tamamlar.
                            </div>
                            <button onclick="document.getElementById('guess-det-2').classList.toggle('hidden'); sounds.playClick();" class="w-full py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl text-xs transition-all">
                                Ne Yaptığını Gör 👁️
                            </button>
                        </div>

                        <!-- Duolingo -->
                        <div class="p-4 bg-slate-850 rounded-2xl border border-emerald-500/40 shadow-lg space-y-2 flex flex-col justify-between">
                            <div>
                                <span class="text-3xl">🦉</span>
                                <h4 class="text-base font-black text-white mt-1">Duolingo</h4>
                                <p class="text-xs text-slate-300">Mobil yabancı dil öğrenme sistemi</p>
                            </div>
                            <div id="guess-det-3" class="hidden p-2.5 bg-emerald-900/60 rounded-xl border border-emerald-400 text-xs text-yellow-300 font-bold">
                                🎯 Hataları analiz eder, dil öğrenme sürecini kişiselleştirir.
                            </div>
                            <button onclick="document.getElementById('guess-det-3').classList.toggle('hidden'); sounds.playClick();" class="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition-all">
                                Ne Yaptığını Gör 👁️
                            </button>
                        </div>

                        <!-- Google Lens -->
                        <div class="p-4 bg-slate-850 rounded-2xl border border-amber-500/40 shadow-lg space-y-2 flex flex-col justify-between">
                            <div>
                                <span class="text-3xl">🔍</span>
                                <h4 class="text-base font-black text-white mt-1">Google Lens</h4>
                                <p class="text-xs text-slate-300">Kamera ile nesne ve metin arama</p>
                            </div>
                            <div id="guess-det-4" class="hidden p-2.5 bg-amber-900/60 rounded-xl border border-amber-400 text-xs text-yellow-300 font-bold">
                                🎯 Görseli tanır, bitki türünü söyler, metni kopyalar ve çevirir.
                            </div>
                            <button onclick="document.getElementById('guess-det-4').classList.toggle('hidden'); sounds.playClick();" class="w-full py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl text-xs transition-all">
                                Ne Yaptığını Gör 👁️
                            </button>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 17 – SES, GÖRÜNTÜ VE DİL İŞLEME
        {
            id: 17,
            title: "SES, GÖRÜNTÜ VE DİL İŞLEME 🎛️",
            subtitle: "Yapay Zekânın 3 Temel Algılama Yeteneği",
            topic: "4. KONU • BTY.5.1.4",
            badge: "YETENEKLER",
            icon: "fa-solid fa-sliders",
            bgColor: "from-slate-900 via-indigo-950 to-blue-900",
            gradient: "from-slate-900 via-indigo-950 to-blue-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-5 my-auto py-2">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
                        <!-- SES İŞLEME -->
                        <div class="p-5 bg-blue-950/70 rounded-3xl border-2 border-blue-400/50 shadow-xl space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-blue-500/30 text-blue-300 flex items-center justify-center text-2xl">
                                <i class="fa-solid fa-microphone-lines"></i>
                            </div>
                            <h3 class="text-lg font-black text-white">SES İŞLEME</h3>
                            <p class="text-xs text-slate-300">Ses dalgalarını dijital verilere çevirip tanır.</p>
                            <ul class="text-xs text-slate-200 space-y-1.5 pt-1">
                                <li class="p-2 bg-slate-900/80 rounded-lg border border-slate-700">🎤 Siri’ye alarm kurdurmak</li>
                                <li class="p-2 bg-slate-900/80 rounded-lg border border-slate-700">🎵 Shazam ile çalan müziği bulmak</li>
                                <li class="p-2 bg-slate-900/80 rounded-lg border border-slate-700">✍️ Konuşarak sesli yazı yazma</li>
                            </ul>
                        </div>

                        <!-- DOĞAL DİL İŞLEME -->
                        <div class="p-5 bg-purple-950/70 rounded-3xl border-2 border-purple-400/50 shadow-xl space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-purple-500/30 text-purple-300 flex items-center justify-center text-2xl">
                                <i class="fa-solid fa-comments"></i>
                            </div>
                            <h3 class="text-lg font-black text-white">DOĞAL DİL İŞLEME (NLP)</h3>
                            <p class="text-xs text-slate-300">İnsanların konuştuğu ve yazdığı dilleri anlar.</p>
                            <ul class="text-xs text-slate-200 space-y-1.5 pt-1">
                                <li class="p-2 bg-slate-900/80 rounded-lg border border-slate-700">💬 Chatbotlarla sohbet etmek</li>
                                <li class="p-2 bg-slate-900/80 rounded-lg border border-slate-700">😊 Yorumlardaki duygu analizi</li>
                                <li class="p-2 bg-slate-900/80 rounded-lg border border-slate-700">🌍 Google Translate ile çeviri</li>
                            </ul>
                        </div>

                        <!-- GÖRÜNTÜ İŞLEME -->
                        <div class="p-5 bg-cyan-950/70 rounded-3xl border-2 border-cyan-400/50 shadow-xl space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-cyan-500/30 text-cyan-300 flex items-center justify-center text-2xl">
                                <i class="fa-solid fa-eye"></i>
                            </div>
                            <h3 class="text-lg font-black text-white">GÖRÜNTÜ İŞLEME</h3>
                            <p class="text-xs text-slate-300">Pikselleri inceleyip nesneleri ve yüzleri tanır.</p>
                            <ul class="text-xs text-slate-200 space-y-1.5 pt-1">
                                <li class="p-2 bg-slate-900/80 rounded-lg border border-slate-700">👤 Telefonda yüz tanıma kilidi</li>
                                <li class="p-2 bg-slate-900/80 rounded-lg border border-slate-700">🖼️ Google Lens ile görsel tanıma</li>
                                <li class="p-2 bg-slate-900/80 rounded-lg border border-slate-700">🩻 Tıbbi röntgen taramaları</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 18 – YAPAY ZEKÂ TARİHİ
        {
            id: 18,
            title: "YAPAY ZEKÂ TARİHİ ⏳",
            subtitle: "Düşünceden Büyük Zaferlere Zaman Çizelgesi",
            topic: "4. KONU • BTY.5.1.4",
            badge: "TARİHÇE",
            icon: "fa-solid fa-timeline",
            bgColor: "from-slate-900 via-indigo-950 to-slate-950",
            gradient: "from-slate-900 via-indigo-950 to-slate-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-5 my-auto py-2">
                    <p class="text-center text-sm sm:text-base text-indigo-200 font-semibold">
                        Yapay zekânın doğuşundaki en önemli kilometre taşları:
                    </p>

                    <div class="relative border-l-4 border-indigo-500/40 ml-4 sm:ml-8 pl-4 sm:pl-6 space-y-4 text-left">
                        <div class="relative p-3 bg-slate-850 rounded-2xl border border-slate-700 shadow-md">
                            <span class="absolute -left-[30px] sm:-left-[38px] top-3 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold ring-4 ring-slate-900">1</span>
                            <span class="px-2 py-0.5 bg-blue-500/20 text-blue-300 font-black text-xs rounded">1950</span>
                            <h4 class="text-sm sm:text-base font-black text-white mt-1">Alan Turing – “Makineler Düşünebilir mi?”</h4>
                            <p class="text-xs text-slate-300">Ünlü matematikçi Alan Turing, yapay zekânın temelini atan Turing Testi'ni ortaya koydu.</p>
                        </div>

                        <div class="relative p-3 bg-slate-850 rounded-2xl border-2 border-yellow-400/50 shadow-md">
                            <span class="absolute -left-[30px] sm:-left-[38px] top-3 w-6 h-6 rounded-full bg-yellow-400 text-slate-900 flex items-center justify-center text-xs font-bold ring-4 ring-slate-900">2</span>
                            <span class="px-2 py-0.5 bg-yellow-400/20 text-yellow-300 font-black text-xs rounded">1959</span>
                            <h4 class="text-sm sm:text-base font-black text-yellow-300 mt-1">Cahit Arf – “Makine Düşünebilir mi ve Nasıl Düşünebilir?”</h4>
                            <p class="text-xs text-slate-200">Büyük Türk matematikçisi Ordinaryüs Prof. Dr. Cahit Arf, Erzurum Atatürk Üniversitesi'nde bu çığır açan konferansı verdi.</p>
                        </div>

                        <div class="relative p-3 bg-slate-850 rounded-2xl border border-slate-700 shadow-md">
                            <span class="absolute -left-[30px] sm:-left-[38px] top-3 w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs font-bold ring-4 ring-slate-900">3</span>
                            <span class="px-2 py-0.5 bg-purple-500/20 text-purple-300 font-black text-xs rounded">1997</span>
                            <h4 class="text-sm sm:text-base font-black text-white mt-1">IBM Deep Blue ➔ Satranç Şampiyonunu Yendi</h4>
                            <p class="text-xs text-slate-300">IBM'in geliştirdiği Deep Blue bilgisayarı, dünya satranç şampiyonu Garry Kasparov'u mağlup etti.</p>
                        </div>

                        <div class="relative p-3 bg-slate-850 rounded-2xl border border-slate-700 shadow-md">
                            <span class="absolute -left-[30px] sm:-left-[38px] top-3 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold ring-4 ring-slate-900">4</span>
                            <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-black text-xs rounded">2016</span>
                            <h4 class="text-sm sm:text-base font-black text-white mt-1">Google AlphaGo ➔ Dünyanın En İyi Go Oyuncusunu Yendi</h4>
                            <p class="text-xs text-slate-300">Dünyanın en zor ve sezgi gerektiren strateji oyunu olan Go'da dünya şampiyonunu yendi.</p>
                        </div>

                        <div class="relative p-3 bg-slate-850 rounded-2xl border border-cyan-500/40 shadow-md">
                            <span class="absolute -left-[30px] sm:-left-[38px] top-3 w-6 h-6 rounded-full bg-cyan-400 text-slate-900 flex items-center justify-center text-xs font-bold ring-4 ring-slate-900">5</span>
                            <span class="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 font-black text-xs rounded">GÜNÜMÜZDE</span>
                            <h4 class="text-sm sm:text-base font-black text-cyan-300 mt-1">Sağlık, Eğitim, Ulaşım ve Uzayda Her Yerde</h4>
                            <p class="text-xs text-slate-300">Yapay zekâ artık cebimizde, evimizde, hastanelerde ve tarlalarda hayatımızın merkezinde.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 19 – YAPAY ZEKÂNIN OLUMLU ETKİLERİ
        {
            id: 19,
            title: "YAPAY ZEKÂNIN OLUMLU ETKİLERİ 🌟",
            subtitle: "İnsanlığa Sağladığı 6 Büyük Kolaylık",
            topic: "4. KONU • BTY.5.1.4",
            badge: "FAYDALARI",
            icon: "fa-solid fa-thumbs-up",
            bgColor: "from-slate-900 via-indigo-950 to-emerald-950",
            gradient: "from-slate-900 via-indigo-950 to-emerald-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2 text-center">
                    <p class="text-sm sm:text-base text-indigo-200 font-semibold">
                        Sana göre bu olumlu etkilerden hangisi en önemlisidir? Dokun ve fikrini paylaş:
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-left">
                        <button onclick="document.getElementById('slide19-fb').innerText = '🌾 Ürün Verimliliği: Fabrika ve tarlalarda hata oranını düşürerek daha az kaynakla daha çok üretim sağlar.'; sounds.playClick();" class="p-4 bg-emerald-950/60 rounded-2xl border-2 border-emerald-400/40 hover:border-yellow-400 transition-all">
                            <span class="text-2xl">📈</span>
                            <h4 class="text-sm font-black text-white mt-1">Ürün Verimliliğini Artırır</h4>
                            <p class="text-xs text-slate-300">Sanayi ve tarımda hatasız üretim</p>
                        </button>

                        <button onclick="document.getElementById('slide19-fb').innerText = '🩺 Hastalık Tespiti: Erken evrede hastalıkları bularak milyonlarca insanın hayatını kurtarabilir.'; sounds.playClick();" class="p-4 bg-emerald-950/60 rounded-2xl border-2 border-emerald-400/40 hover:border-yellow-400 transition-all">
                            <span class="text-2xl">🩺</span>
                            <h4 class="text-sm font-black text-white mt-1">Hastalık Tespiti ve Tedavi</h4>
                            <p class="text-xs text-slate-300">Doktorlara erken teşhis desteği</p>
                        </button>

                        <button onclick="document.getElementById('slide19-fb').innerText = '🧭 Dijital Rehberlik: Trafikte, şehirde veya ders çalışırken 7/24 yol gösterici asistanlık yapar.'; sounds.playClick();" class="p-4 bg-emerald-950/60 rounded-2xl border-2 border-emerald-400/40 hover:border-yellow-400 transition-all">
                            <span class="text-2xl">🧭</span>
                            <h4 class="text-sm font-black text-white mt-1">Dijital Rehberlik Sağlar</h4>
                            <p class="text-xs text-slate-300">Navigasyon ve akıllı asistanlar</p>
                        </button>

                        <button onclick="document.getElementById('slide19-fb').innerText = '🎯 Kişisel Öneriler: Zaman kaybetmeden tam da senin zevkine uygun şarkı, kitap ve filmleri bulur.'; sounds.playClick();" class="p-4 bg-emerald-950/60 rounded-2xl border-2 border-emerald-400/40 hover:border-yellow-400 transition-all">
                            <span class="text-2xl">🎯</span>
                            <h4 class="text-sm font-black text-white mt-1">Kişisel Öneriler Sunar</h4>
                            <p class="text-xs text-slate-300">İlgi alanına göre tavsiyeler</p>
                        </button>

                        <button onclick="document.getElementById('slide19-fb').innerText = '♿ Erişilebilirlik: Görme engelliler için ekranı seslendirir, işitme engelliler için konuşmayı altyazı yapar.'; sounds.playClick();" class="p-4 bg-emerald-950/60 rounded-2xl border-2 border-emerald-400/40 hover:border-yellow-400 transition-all">
                            <span class="text-2xl">♿</span>
                            <h4 class="text-sm font-black text-white mt-1">Erişilebilirliği Artırır</h4>
                            <p class="text-xs text-slate-300">Engelli bireyler için hayatı kolaylaştırır</p>
                        </button>

                        <button onclick="document.getElementById('slide19-fb').innerText = '🌍 İletişim Kolaylığı: Farklı dilleri konuşan insanların anlık sesli çeviri ile anlaşmasını sağlar.'; sounds.playClick();" class="p-4 bg-emerald-950/60 rounded-2xl border-2 border-emerald-400/40 hover:border-yellow-400 transition-all">
                            <span class="text-2xl">🌍</span>
                            <h4 class="text-sm font-black text-white mt-1">İletişim Kolaylığı Sağlar</h4>
                            <p class="text-xs text-slate-300">Anında çok dilli çeviri köprüleri</p>
                        </button>
                    </div>

                    <div id="slide19-fb" class="p-3.5 bg-slate-900/90 rounded-2xl border border-emerald-400/50 text-emerald-300 font-bold text-xs sm:text-sm min-h-[48px] flex items-center justify-center shadow-lg">
                        👆 Bir faydaya dokunarak açıklamasını okuyabilirsiniz!
                    </div>
                </div>
            `
        },

        // SLAYT 20 – YAPAY ZEKÂNIN OLUMSUZ ETKİLERİ
        {
            id: 20,
            title: "YAPAY ZEKÂNIN OLUMSUZ ETKİLERİ ⚠️",
            subtitle: "Riskler, Yanılgılar ve Etik Sorunlar",
            topic: "4. KONU • BTY.5.1.4",
            badge: "RİSKLER",
            icon: "fa-solid fa-triangle-exclamation",
            bgColor: "from-slate-900 via-rose-950 to-indigo-950",
            gradient: "from-slate-900 via-rose-950 to-indigo-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <div class="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-center text-xs">
                        <div class="p-3 bg-rose-950/60 rounded-2xl border border-rose-400/40">
                            <span class="text-2xl">❌</span>
                            <h4 class="font-black text-white mt-1">Yanlış Bilgi</h4>
                            <p class="text-[10px] text-slate-300">Uydurma ve hatalı cevaplar</p>
                        </div>
                        <div class="p-3 bg-rose-950/60 rounded-2xl border border-rose-400/40">
                            <span class="text-2xl">🎭</span>
                            <h4 class="font-black text-white mt-1">Dolandırıcılık</h4>
                            <p class="text-[10px] text-slate-300">Sahte ses ve tuzaklar</p>
                        </div>
                        <div class="p-3 bg-rose-950/60 rounded-2xl border border-rose-400/40">
                            <span class="text-2xl">🖼️</span>
                            <h4 class="font-black text-white mt-1">Sahte İçerik</h4>
                            <p class="text-[10px] text-slate-300">Gerçek dışı deepfake videolar</p>
                        </div>
                        <div class="p-3 bg-rose-950/60 rounded-2xl border border-rose-400/40">
                            <span class="text-2xl">⚖️</span>
                            <h4 class="font-black text-white mt-1">Etik Sorunlar</h4>
                            <p class="text-[10px] text-slate-300">Gizlilik ve telif hakları</p>
                        </div>
                        <div class="p-3 bg-rose-950/60 rounded-2xl border border-rose-400/40 col-span-2 sm:col-span-1">
                            <span class="text-2xl">📉</span>
                            <h4 class="font-black text-white mt-1">İş Gücü Kaybı</h4>
                            <p class="text-[10px] text-slate-300">Bazı mesleklerin kaybolması</p>
                        </div>
                    </div>

                    <!-- Etkileşimli Senaryo -->
                    <div class="p-5 bg-slate-900/90 rounded-2xl border-2 border-rose-500/60 shadow-xl space-y-3 text-left">
                        <div class="flex items-center gap-2 text-rose-300 font-bold text-sm">
                            <i class="fa-solid fa-masks-theater text-lg"></i>
                            <span>DÜŞÜNME SENARYOSU:</span>
                        </div>
                        <p class="text-sm sm:text-base text-white font-bold">
                            “Bir yapay zekâ uygulaması gerçekte tarihte hiç yaşanmamış bir savaşı veya olayı sanki gerçekmiş gibi çok inandırıcı anlattı.”
                        </p>
                        <p class="text-xs text-yellow-300 font-semibold">
                            ❓ Buradaki temel problem nedir ve bu bilgiye neden hemen güvenmemeliyiz?
                        </p>
                        <button onclick="document.getElementById('slide20-ans').classList.toggle('hidden'); sounds.playClick();" class="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-xs flex items-center gap-2 transition-all">
                            <i class="fa-solid fa-lightbulb"></i> Çözüm ve Analizi Göster
                        </button>
                        <div id="slide20-ans" class="hidden p-3 bg-rose-950/80 rounded-xl border border-rose-400 text-xs sm:text-sm text-slate-100 space-y-1">
                            <strong>Analiz:</strong> Buna yapay zekâda <em>"Halüsinasyon (bilgi uydurma)"</em> denir. Yapay zekâ mantıklı cümleler kurabilir ama gerçeği bilmez, sadece kelime tahmin eder. Bu yüzden verilen bilgileri mutlaka kitaplardan ve güvenilir ansiklopedilerden doğrulamalıyız!
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 21 – YAPAY ZEKÂ SÖYLEDİ DİYE DOĞRU MUDUR?
        {
            id: 21,
            title: "YAPAY ZEKÂ SÖYLEDİ DİYE DOĞRU MUDUR? ❓",
            subtitle: "Eleştirel Düşünme ve Doğrulama Sanatı",
            topic: "4. KONU • BTY.5.1.4",
            badge: "SORGULAMA",
            icon: "fa-solid fa-magnifying-glass-chart",
            bgColor: "from-slate-900 via-indigo-950 to-blue-950",
            gradient: "from-slate-900 via-indigo-950 to-blue-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-5 my-auto py-2 text-center">
                    <div class="p-6 bg-slate-900/90 rounded-3xl border-2 border-yellow-400/60 shadow-2xl space-y-3">
                        <span class="text-xs uppercase tracking-widest text-yellow-300 font-black">BÜYÜK SORU</span>
                        <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-snug">
                            “Yapay zekâ bize çok hızlı ve kendinden emin bir cevap verdi. Bu cevap KESİNLİKLE doğru mudur?”
                        </h2>
                        <div class="pt-2">
                            <button id="slide21-btn" onclick="const a = document.getElementById('slide21-ans'); a.classList.toggle('hidden'); this.innerHTML = a.classList.contains('hidden') ? '<i class=\'fa-solid fa-eye\'></i> Cevabı ve Rehberi Aç' : '<i class=\'fa-solid fa-eye-slash\'></i> Rehberi Gizle'; sounds.playFanfare();" class="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black rounded-2xl text-base shadow-xl transition-all active:scale-95">
                                <i class="fa-solid fa-eye"></i> Cevabı ve Rehberi Aç
                            </button>
                        </div>
                    </div>

                    <div id="slide21-ans" class="hidden space-y-4">
                        <div class="p-4 bg-rose-600/20 border-2 border-rose-500 rounded-2xl text-rose-300 text-lg sm:text-xl font-black">
                            🛑 HAYIR! Yapay zekânın verdiği bilgiler her zaman doğru olmayabilir!
                        </div>

                        <!-- 3 Altın Kural -->
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                            <div class="p-4 bg-slate-850 rounded-2xl border border-blue-400/40 space-y-1">
                                <span class="text-2xl">📚</span>
                                <h4 class="text-sm font-black text-blue-300">1. Farklı Kaynaklardan Doğrula</h4>
                                <p class="text-xs text-slate-300">Tek bir cevaba bağlı kalma; kitap, ansiklopedi ve resmî sitelerden çapraz kontrol et.</p>
                            </div>
                            <div class="p-4 bg-slate-850 rounded-2xl border border-purple-400/40 space-y-1">
                                <span class="text-2xl">👨‍🏫</span>
                                <h4 class="text-sm font-black text-purple-300">2. Öğretmene veya Uzmana Danış</h4>
                                <p class="text-xs text-slate-300">Şüphelendiğin bilgileri öğretmenine, ailene veya konunun uzmanına sor.</p>
                            </div>
                            <div class="p-4 bg-slate-850 rounded-2xl border border-amber-400/40 space-y-1">
                                <span class="text-2xl">🧐</span>
                                <h4 class="text-sm font-black text-amber-300">3. Her Gördüğüne İnanma</h4>
                                <p class="text-xs text-slate-300">Çok düzgün yazılmış bir metin bile tamamen uydurma bir bilgi içerebilir.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 22 – YAPAY ZEKÂ KULLANIRKEN GÜVENLİK
        {
            id: 22,
            title: "YAPAY ZEKÂ KULLANIRKEN GÜVENLİK 🛡️",
            subtitle: "Dijital Dünyada Güvenli ve Bilinçli Kullanım İlkeleri",
            topic: "4. KONU • BTY.5.1.4",
            badge: "GÜVENLİK",
            icon: "fa-solid fa-user-shield",
            bgColor: "from-slate-900 via-indigo-950 to-blue-950",
            gradient: "from-slate-900 via-indigo-950 to-blue-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                        <div class="p-3.5 bg-slate-850 rounded-2xl border-2 border-red-400/40">
                            <span class="text-2xl block mb-1">🚫</span>
                            <strong class="text-white block">Kişisel Bilgini Paylaşma</strong>
                            <span class="text-[10px] text-slate-300">Adres, telefon, TC kimlik asla girilmez.</span>
                        </div>
                        <div class="p-3.5 bg-slate-850 rounded-2xl border-2 border-yellow-400/40">
                            <span class="text-2xl block mb-1">⚙️</span>
                            <strong class="text-white block">Gizlilik Ayarlarını İncele</strong>
                            <span class="text-[10px] text-slate-300">Kamera ve mikrofon izinlerini kontrol et.</span>
                        </div>
                        <div class="p-3.5 bg-slate-850 rounded-2xl border-2 border-emerald-400/40">
                            <span class="text-2xl block mb-1">🔑</span>
                            <strong class="text-white block">Güçlü Şifre Kullan</strong>
                            <span class="text-[10px] text-slate-300">Harf, rakam ve sembollerden oluştur.</span>
                        </div>
                        <div class="p-3.5 bg-slate-850 rounded-2xl border-2 border-cyan-400/40">
                            <span class="text-2xl block mb-1">🔍</span>
                            <strong class="text-white block">Her Şeye Hemen İnanma</strong>
                            <span class="text-[10px] text-slate-300">Bilgiyi güvenilir kaynaklardan doğrula.</span>
                        </div>
                    </div>

                    <!-- 2 Etkileşimli Senaryo -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        <div class="p-4 bg-slate-900 rounded-2xl border border-indigo-400/40 space-y-2">
                            <span class="text-xs font-bold text-yellow-300">SENARYO 1:</span>
                            <p class="text-xs sm:text-sm font-bold text-white">“Yapay zekâ sohbet robotu sana daha iyi yardım etmek için telefon numaranı ve ev adresini istedi.”</p>
                            <div class="flex gap-2 pt-1">
                                <button onclick="document.getElementById('sc1-fb').innerHTML = '<span class=\'text-emerald-400 font-bold\'>🎉 Bravo! Kişisel veriler asla yapay zekâya girilmez.</span>'; sounds.playCorrect();" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-xs font-bold text-white">Asla paylaşmam</button>
                                <button onclick="document.getElementById('sc1-fb').innerHTML = '<span class=\'text-rose-400 font-bold\'>⚠️ Tehlikeli! Kişisel veriler gizli kalmalıdır.</span>'; sounds.playWrong();" class="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 rounded-lg text-xs font-bold text-white">Yazarım</button>
                            </div>
                            <div id="sc1-fb" class="text-xs min-h-[16px]"></div>
                        </div>

                        <div class="p-4 bg-slate-900 rounded-2xl border border-indigo-400/40 space-y-2">
                            <span class="text-xs font-bold text-yellow-300">SENARYO 2:</span>
                            <p class="text-xs sm:text-sm font-bold text-white">“Yapay zekâ sana internette başka hiçbir yerde yazmayan inanılmaz bir bilimsel buluş söyledi.”</p>
                            <div class="flex gap-2 pt-1">
                                <button onclick="document.getElementById('sc2-fb').innerHTML = '<span class=\'text-emerald-400 font-bold\'>🎉 Harika! Bilimsel kitap ve öğretmen teyidi şarttır.</span>'; sounds.playCorrect();" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-xs font-bold text-white">Farklı kaynaklardan teyit ederim</button>
                                <button onclick="document.getElementById('sc2-fb').innerHTML = '<span class=\'text-rose-400 font-bold\'>⚠️ Yanlış! Uydurma bir bilgi olabilir, kontrol etmelisin.</span>'; sounds.playWrong();" class="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 rounded-lg text-xs font-bold text-white">Hemen inanırım</button>
                            </div>
                            <div id="sc2-fb" class="text-xs min-h-[16px]"></div>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 23 – YAPAY ZEKÂ DEDEKTİFİ
        {
            id: 23,
            title: "YAPAY ZEKÂ DEDEKTİFİ 🕵️‍♂️",
            subtitle: "5 Adımlı Bilimsel Sorgulama Süreci",
            topic: "4. KONU • BTY.5.1.4",
            badge: "DEDEKTİF",
            icon: "fa-solid fa-user-secret",
            bgColor: "from-slate-900 via-purple-950 to-indigo-950",
            gradient: "from-slate-900 via-purple-950 to-indigo-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-5 my-auto py-2 text-center">
                    <p class="text-xs sm:text-sm text-indigo-200 font-semibold">
                        Bir yapay zekâ bilgisiyle karşılaştığında sırasıyla bu 5 adımı izle:
                    </p>

                    <!-- 5 Adım Akışı -->
                    <div class="grid grid-cols-1 sm:grid-cols-5 gap-2 text-left">
                        <button onclick="document.getElementById('ded-fb').innerText = '1. MERAK ET: Zihninde bir merak uyansın. Hangi konuyu keşfetmek istiyorsun?'; sounds.playClick();" class="p-3 bg-blue-950/80 rounded-2xl border border-blue-400/50 hover:border-yellow-400 transition-all text-center">
                            <span class="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-black mx-auto mb-1">1</span>
                            <h4 class="text-xs font-black text-white">MERAK ET</h4>
                            <p class="text-[10px] text-slate-300">Merakını tanımla</p>
                        </button>

                        <button onclick="document.getElementById('ded-fb').innerText = '2. SORU SOR: Yapay zekâya ve çevrene doğru ve net sorular sor.'; sounds.playClick();" class="p-3 bg-indigo-950/80 rounded-2xl border border-indigo-400/50 hover:border-yellow-400 transition-all text-center">
                            <span class="w-7 h-7 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-black mx-auto mb-1">2</span>
                            <h4 class="text-xs font-black text-white">SORU SOR</h4>
                            <p class="text-[10px] text-slate-300">Sorularını oluştur</p>
                        </button>

                        <button onclick="document.getElementById('ded-fb').innerText = '3. BİLGİ TOPLA: Farklı kaynaklardan (kitap, internet, öğretmen) bilgi topla.'; sounds.playClick();" class="p-3 bg-purple-950/80 rounded-2xl border border-purple-400/50 hover:border-yellow-400 transition-all text-center">
                            <span class="w-7 h-7 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs font-black mx-auto mb-1">3</span>
                            <h4 class="text-xs font-black text-white">BİLGİ TOPLA</h4>
                            <p class="text-[10px] text-slate-300">Kaynakları araştır</p>
                        </button>

                        <button onclick="document.getElementById('ded-fb').innerText = '4. DOĞRULUĞUNU DEĞERLENDİR: Toplanan bilgileri birbiriyle karşılaştır ve doğrula.'; sounds.playClick();" class="p-3 bg-amber-950/80 rounded-2xl border border-amber-400/50 hover:border-yellow-400 transition-all text-center">
                            <span class="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-black mx-auto mb-1">4</span>
                            <h4 class="text-xs font-black text-white">DEĞERLENDİR</h4>
                            <p class="text-[10px] text-slate-300">Doğruluğu sına</p>
                        </button>

                        <button onclick="document.getElementById('ded-fb').innerText = '5. ÇIKARIM YAP: Kendi mantıklı, bağımsız ve güvenilir sonucunu üret.'; sounds.playClick();" class="p-3 bg-emerald-950/80 rounded-2xl border border-emerald-400/50 hover:border-yellow-400 transition-all text-center">
                            <span class="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-black mx-auto mb-1">5</span>
                            <h4 class="text-xs font-black text-white">ÇIKARIM YAP</h4>
                            <p class="text-[10px] text-slate-300">Kendi sonucuna ulaş</p>
                        </button>
                    </div>

                    <div id="ded-fb" class="p-3 bg-slate-900 rounded-xl border border-slate-700 text-xs sm:text-sm text-yellow-300 font-bold min-h-[40px] flex items-center justify-center">
                        👆 Adımlara dokunarak dedektiflik sürecini inceleyin!
                    </div>

                    <!-- Örnek Vaka -->
                    <div class="p-4 bg-slate-900/90 rounded-2xl border-2 border-indigo-400/50 text-left space-y-2">
                        <span class="text-xs font-bold text-cyan-300">ÖRNEK VAKA: “Yapay zekâ gelecekte öğretmenlerin yerini tamamen alabilir mi?”</span>
                        <div class="text-xs text-slate-200">
                            <strong>Dedektifin Çıkarımı:</strong> Yapay zekâ bilgi aktarabilir, test okuyabilir ve alıştırma önerebilir. Ancak sevgi, şefkat, empati, ahlak ve birebir rehberlik sadece <strong>gerçek öğretmenlere</strong> aittir. Dolayısıyla öğretmenlerin yerini asla tamamen alamaz!
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 24 – BÜYÜK FİNAL
        {
            id: 24,
            title: "BÜYÜK FİNAL & DEĞERLENDİRME 🏆",
            subtitle: "5 Temel Soru ve Kapanış Mottosu",
            topic: "4. KONU • BTY.5.1.4",
            badge: "FİNAL",
            icon: "fa-solid fa-trophy",
            bgColor: "from-slate-900 via-indigo-950 to-blue-900",
            gradient: "from-slate-900 via-indigo-950 to-blue-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <p class="text-center text-xs sm:text-sm text-indigo-200 font-semibold">
                        Dersimizin 5 altın sorusu! Cevapları görmek için butonlara dokununuz:
                    </p>

                    <div class="space-y-2 text-left">
                        <!-- Soru 1 -->
                        <div class="p-3 bg-slate-850 rounded-xl border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <span class="text-xs sm:text-sm font-bold text-white">1. Yapay zekâ nedir?</span>
                            <div class="flex items-center gap-2">
                                <span id="fin-ans-1" class="hidden text-xs text-emerald-300 font-bold bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-500/40">Makinelerin insan benzeri düşünme/karar vermesini taklit eden yazılımlardır.</span>
                                <button onclick="document.getElementById('fin-ans-1').classList.toggle('hidden'); sounds.playClick();" class="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold shrink-0">Cevabı Göster</button>
                            </div>
                        </div>

                        <!-- Soru 2 -->
                        <div class="p-3 bg-slate-850 rounded-xl border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <span class="text-xs sm:text-sm font-bold text-white">2. Yapay zekânın üç anahtar özelliği nedir?</span>
                            <div class="flex items-center gap-2">
                                <span id="fin-ans-2" class="hidden text-xs text-emerald-300 font-bold bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-500/40">Öğrenir, Düşünür (analiz eder), Karar verir.</span>
                                <button onclick="document.getElementById('fin-ans-2').classList.toggle('hidden'); sounds.playClick();" class="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold shrink-0">Cevabı Göster</button>
                            </div>
                        </div>

                        <!-- Soru 3 -->
                        <div class="p-3 bg-slate-850 rounded-xl border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <span class="text-xs sm:text-sm font-bold text-white">3. Günlük yaşamdan üç yapay zekâ örneği veriniz.</span>
                            <div class="flex items-center gap-2">
                                <span id="fin-ans-3" class="hidden text-xs text-emerald-300 font-bold bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-500/40">Yüz tanıma, Siri/asistanlar, YouTube önerileri, robot süpürge.</span>
                                <button onclick="document.getElementById('fin-ans-3').classList.toggle('hidden'); sounds.playClick();" class="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold shrink-0">Cevabı Göster</button>
                            </div>
                        </div>

                        <!-- Soru 4 -->
                        <div class="p-3 bg-slate-850 rounded-xl border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <span class="text-xs sm:text-sm font-bold text-white">4. Yapay zekânın bir olumlu ve bir olumsuz etkisini söyleyiniz.</span>
                            <div class="flex items-center gap-2">
                                <span id="fin-ans-4" class="hidden text-xs text-emerald-300 font-bold bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-500/40">Olumlu: Erken hastalık teşhisi. Olumsuz: Yanlış bilgi & sahte içerikler.</span>
                                <button onclick="document.getElementById('fin-ans-4').classList.toggle('hidden'); sounds.playClick();" class="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold shrink-0">Cevabı Göster</button>
                            </div>
                        </div>

                        <!-- Soru 5 -->
                        <div class="p-3 bg-slate-850 rounded-xl border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <span class="text-xs sm:text-sm font-bold text-white">5. Yapay zekâdan aldığımız bilgileri neden kontrol etmeliyiz?</span>
                            <div class="flex items-center gap-2">
                                <span id="fin-ans-5" class="hidden text-xs text-emerald-300 font-bold bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-500/40">Çünkü uydurma (halüsinasyon) veya eksik verilerden yanlış cevap üretebilir.</span>
                                <button onclick="document.getElementById('fin-ans-5').classList.toggle('hidden'); sounds.playClick();" class="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold shrink-0">Cevabı Göster</button>
                            </div>
                        </div>
                    </div>

                    <!-- Kapanış Ekranı & Motto -->
                    <div class="p-5 bg-gradient-to-r from-indigo-900/90 via-purple-900/90 to-blue-900/90 rounded-2xl border-2 border-yellow-400/80 shadow-2xl text-center space-y-2">
                        <h2 class="text-2xl sm:text-3xl font-black text-yellow-300 tracking-wide drop-shadow">
                            “YAPAY ZEKÂYI KULLAN, AMA HER BİLGİYİ SORGULA!”
                        </h2>
                        <div class="flex items-center justify-center gap-2 text-xs text-slate-300 font-semibold flex-wrap">
                            <span>BTY.5.1.4: Yapay zekâ ile ilgili temel kavramları ve özellikleri sorgulayabilme.</span>
                            <span>•</span>
                            <span class="text-yellow-300 font-bold">ÖĞRETMEN BOZOK</span>
                        </div>
                    </div>
                </div>
            `
        }
    ],

    // ========================================================
    // 📄 2. YAZDIRILABİLİR DİJİTAL METİN (4 Sayfa + Cevap Anahtarı)
    // ========================================================
    worksheetDocs: {
        hasTwoPages: false,
        sayfa1Html: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <div class="border-b-2 border-indigo-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            4. KONU • BTY.5.1.4
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 1: YAPAY ZEKÂ TEMEL KAVRAMLARI
                        </h1>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        Sayfa: 1 / 4
                    </span>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-indigo-500/30 space-y-3">
                    <h3 class="text-base font-black text-yellow-300">1. DOĞAL ZEKÂ</h3>
                    <p class="text-sm">Doğal zekâ, insanların ve hayvanların düşünme, öğrenme ve problem çözme yeteneğidir. İnsanlar deneyimle, sezgileriyle ve duygularıyla öğrenirler.</p>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-purple-500/30 space-y-3">
                    <h3 class="text-base font-black text-purple-300">2. YAPAY ZEKÂ</h3>
                    <p class="text-sm">Yapay zekâ, makinelerin insan benzeri düşünme ve karar verme yeteneğini taklit eden bilgisayar programlarıdır.</p>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs pt-2">
                        <div class="p-2 bg-slate-900 rounded-lg"><strong>MAKİNE:</strong> Cihaz ve bilgisayar</div>
                        <div class="p-2 bg-slate-900 rounded-lg"><strong>DÜŞÜNME:</strong> Veriyi analiz etme</div>
                        <div class="p-2 bg-slate-900 rounded-lg"><strong>KARAR:</strong> En iyi seçimi yapma</div>
                        <div class="p-2 bg-slate-900 rounded-lg"><strong>PROGRAM:</strong> Matematiksel kod</div>
                    </div>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-cyan-500/30 space-y-2">
                    <h3 class="text-base font-black text-cyan-300">3. YAPAY ZEKÂ ÇALIŞMA ŞEMASI</h3>
                    <p class="text-sm font-bold text-center p-2 bg-slate-900 rounded-xl text-yellow-300">
                        VERİ ➔ YAPAY ZEKÂ (ÖĞRENME & ANALİZ) ➔ TAHMİN / KARAR
                    </p>
                    <p class="text-xs text-slate-300 text-center">“Yapay zekâ = Veri ile öğrenen akıllı sistem.”</p>
                </div>
            </div>
        `,
        sayfa2Html: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <div class="border-b-2 border-indigo-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            4. KONU • BTY.5.1.4
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 2: YAPAY ZEKÂ KULLANIM ALANLARI VE UYGULAMALARI
                        </h1>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        Sayfa: 2 / 4
                    </span>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-blue-500/30 space-y-2 text-xs">
                    <h3 class="text-sm font-black text-blue-300 uppercase">Temel Uygulama Tablosu:</h3>
                    <p>• <strong>Sesli Asistanlar:</strong> Doğal dil işleme ile sesli komutları algılar, cevap verir.</p>
                    <p>• <strong>Yüz Tanıma:</strong> Görüntü işleme ile yüz hatlarını milimetrik analiz eder.</p>
                    <p>• <strong>Otonom Araçlar:</strong> Sensör verileriyle çevreyi algılar, hız ve rota belirler.</p>
                    <p>• <strong>YouTube / Netflix Önerileri:</strong> Kullanıcı verilerini analiz ederek tahmin üretir.</p>
                    <p>• <strong>Google Translate:</strong> Dil modeli ile anlamı çözüp hedef dile dönüştürür.</p>
                    <p>• <strong>Google Lens:</strong> Kameranın gördüğü nesneyi tanır, metni dijitalleştirir.</p>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-emerald-500/30 space-y-2 text-xs">
                    <h3 class="text-sm font-black text-emerald-300 uppercase">Kullanım Alanları:</h3>
                    <p>Eğitim, Günlük Yaşam, Ulaşım, Sağlık, Finans, Sanat & Yaratıcılık, Eğlence, Tarım, Sanayi & Üretim, Güvenlik, Enerji, Çevre.</p>
                </div>
            </div>
        `,
        sayfa3Html: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <div class="border-b-2 border-indigo-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            4. KONU • BTY.5.1.4
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 3: PEKİŞTİRME ETKİNLİKLERİ VE SORULARI
                        </h1>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        Sayfa: 3 / 4
                    </span>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-amber-500/30 space-y-2 text-xs">
                    <h3 class="text-sm font-black text-amber-300 uppercase">Etkinlik 1: Doğal Zekâ vs Yapay Zekâ</h3>
                    <p>1. İnsan zekâsı nasıl öğrenir? ➔ Deneyimle, duygularla ve sezgiyle.</p>
                    <p>2. Yapay zekâ nasıl öğrenir? ➔ Verilerle ve algoritmalarla.</p>
                    <p>3. Yapay zekânın insandan üstün olduğu yön nedir? ➔ Çok hızlı hesaplama ve veri tarama.</p>
                    <p>4. İnsanın yapay zekâdan üstün olduğu yön nedir? ➔ Duygular, empati, vicdan ve esneklik.</p>
                </div>
            </div>
        `,
        sayfa4Html: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <div class="border-b-2 border-indigo-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            4. KONU • BTY.5.1.4
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 4: ETİK, GÜVENLİK VE BİLGİ DOĞRULAMA
                        </h1>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        Sayfa: 4 / 4
                    </span>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-rose-500/30 space-y-2 text-xs">
                    <h3 class="text-sm font-black text-rose-300 uppercase">Yapay Zekâ Dedektifi Rehberi</h3>
                    <p>1. Kişisel bilgilerini (TC no, telefon, adres) asla yapay zekâ ile paylaşma.</p>
                    <p>2. Yapay zekânın verdiği her bilgiye hemen inanma, farklı kaynaklardan teyit et.</p>
                    <p>3. Şüpheli bir durum olduğunda öğretmenine veya güvenilir bir yetişkine danış.</p>
                </div>
            </div>
        `,
        cevapHtml: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <div class="border-b-2 border-emerald-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-emerald-500/30 text-emerald-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            4. KONU • RESMÎ CEVAP ANAHTARI
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            4. KONU ÇALIŞMA KAĞIDI RESMÎ ÇÖZÜMLERİ
                        </h1>
                    </div>
                    <span class="px-3 py-1 bg-emerald-400/20 text-emerald-300 border border-emerald-400/40 rounded-xl text-xs font-black">
                        Cevap Anahtarı
                    </span>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2 text-xs">
                    <h3 class="text-sm font-black text-cyan-300 uppercase">16 Soruluk Tekrar Testi Çözümleri:</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-200">
                        <p>1. Yapay zekâ taklit eder ➔ <strong>İnsanların düşünme, öğrenme ve karar verme becerilerini</strong></p>
                        <p>2. Yapabildiği işlem ➔ <strong>Öğrenme</strong></p>
                        <p>3. Yapay zekâ örneği ➔ <strong>Telefonun yüz tanıma özelliği</strong></p>
                        <p>4. YouTube önerileri ➔ <strong>Yapay zekâ ile öneri sistemi</strong></p>
                        <p>5. Ortak özellik ➔ <strong>İkisinin de öğrenebilmesi</strong></p>
                        <p>6. Temel fark ➔ <strong>İnsanlar duygulara sahiptir, yapay zekâ sahip değildir.</strong></p>
                        <p>7. İnsan zekâsı öğrenir ➔ <strong>Deneyimle</strong></p>
                        <p>8. Yapay zekâ öğrenir ➔ <strong>Verilerle</strong></p>
                        <p>9. İnsan karar verirken kullanır ➔ <strong>Duygular ve bilgi</strong></p>
                        <p>10. Yapay zekânın güçlü yanı ➔ <strong>Çok hızlı hesaplama</strong></p>
                        <p>11. PDF'de yer almayan alan ➔ <strong>Kalem kutuları</strong></p>
                        <p>12. Otonom sürüş alanı ➔ <strong>Arabalar (Ulaşım)</strong></p>
                        <p>13. Hastanelerde kullanım ➔ <strong>Hastalık tahmini</strong></p>
                        <p>14. Dikkat edilmesi gereken ➔ <strong>Bilgilerin güvenliği</strong></p>
                        <p>15. Bilgiye hemen inanmak yerine ➔ <strong>Bilgiyi kontrol etmeliyiz.</strong></p>
                        <p>16. Yanlış bilgi verildiğinde ➔ <strong>Bilgiyi başka güvenilir kaynaklardan kontrol etmek</strong></p>
                    </div>
                </div>
            </div>
        `
    },

    // ========================================================
    // ❓ 3. PEKİŞTİRME TESTİ & SORULARI
    // ========================================================
    questions: [
        // 0. İndeks: Eşleştirme Etkinliği
        {
            id: 1,
            type: "matching",
            title: "Yapay Zekâ Kavram ve Uygulama Eşleştirmesi",
            description: "Aşağıdaki yapay zekâ durumlarını doğru alan veya kavramla eşleştiriniz:",
            pairs: [
                { left: "Telefon kamerasının yüzümüzü tanıyarak kilidi açması", right: "Görüntü İşleme", leftIcon: "fa-solid fa-face-smile" },
                { left: "Siri'ye sesli komutla sabah alarmı kurdurmak", right: "Ses İşleme / Asistan", leftIcon: "fa-solid fa-microphone" },
                { left: "İzlediğimiz videolara göre YouTube'un yeni liste sunması", right: "Öneri Sistemi", leftIcon: "fa-solid fa-play" },
                { left: "Otomobilin sürücüsüz kendi kendine şeritte gitmesi", right: "Otonom Sürüş", leftIcon: "fa-solid fa-car" },
                { left: "Röntgen filmlerinden tümör ve hastalık tespiti yapmak", right: "Sağlık Alanı", leftIcon: "fa-solid fa-heart-pulse" },
                { left: "Banka kartından şüpheli harcamayı anında durdurmak", right: "Finans Güvenliği", leftIcon: "fa-solid fa-wallet" },
                { left: "Toprağın nemine göre otomatik sulama yapmak", right: "Akıllı Tarım", leftIcon: "fa-solid fa-wheat-awn" },
                { left: "Makineler düşünebilir mi sorusuyla testi tasarlayan bilim insanı", right: "Alan Turing (1950)", leftIcon: "fa-solid fa-user" }
            ]
        },

        // 1. İndeks: Doğru / Yanlış Testi (10 Soru)
        {
            id: 2,
            type: "true_false",
            title: "Doğru mu? Yanlış mı? Yapay Zekâ Testi",
            description: "Aşağıdaki ifadeleri dikkatle okuyarak Doğru veya Yanlış butonuna dokununuz:",
            items: [
                {
                    statement: "Yapay zekâ, makinelerin insan benzeri düşünme ve karar verme yeteneğini taklit eden bilgisayar programlarıdır.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Yapay zekânın temel tanımı budur."
                },
                {
                    statement: "Yapay zekâ insanlar gibi duygulara, sevince ve üzüntüye sahiptir.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! Yapay zekânın hisleri ve duyguları yoktur; veriler ve algoritmalarla çalışır."
                },
                {
                    statement: "İnsan zekâsı deneyimle öğrenirken, yapay zekâ kendisine verilen verilerle öğrenir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! İnsanlar tecrübe ve duyularıyla, yapay zekâ veri havuzlarıyla öğrenir."
                },
                {
                    statement: "Yapay zekâ saniyede milyarlarca hesaplama yaparak insandan çok daha hızlı işlem yapabilir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Hız ve devasa veri taramada bilgisayarlar çok güçlüdür."
                },
                {
                    statement: "Yapay zekâ ne söylerse söylesin her zaman %100 doğrudur, kontrol etmeye gerek yoktur.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! Yapay zekâ halüsinasyon görebilir, uydurabilir veya yanlış bilgi verebilir. Mutlaka teyit edilmelidir."
                },
                {
                    statement: "Otonom araçlar kameralar ve sensörler yardımıyla çevresini algılayarak kendi kendine hareket eder.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Otonom sürüş sensör ve yapay zekâ iş birliğiyle çalışır."
                },
                {
                    statement: "Yapay zekâ araçlarını kullanırken TC kimlik numarası ve telefon gibi kişisel verileri rahatça paylaşabiliriz.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! Kişisel gizlilik için özel bilgiler asla yapay zekâ araçlarıyla paylaşılmamalıdır."
                },
                {
                    statement: "1959 yılında Türk bilim insanı Cahit Arf, 'Makine düşünebilir mi ve nasıl düşünebilir?' başlıklı bildiri sunmuştur.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Cahit Arf yapay zekânın Türkiye'deki öncülerindendir."
                },
                {
                    statement: "Google Lens uygulaması kameranın gördüğü nesneyi ve metni yapay zekâ ile tanıyabilir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Google Lens görüntü işleme teknolojisi kullanır."
                },
                {
                    statement: "Yapay zekâ sadece robot süpürgelerde kullanılır, hastanelerde veya bankalarda kullanılmaz.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! Sağlık, finans, eğitim, ulaşım gibi birçok kritik sektörde yapay zekâ yoğun olarak kullanılır."
                }
            ]
        },

        // 2. İndeks: Çoktan Seçmeli Test (yapayzeja tekrar oyunnu.txt dosyasındaki 16 Soru Birebir)
        {
            id: 3,
            type: "multiple_choice",
            title: "4. Konu Yapay Zekâ Tekrar Testi (16 Soru)",
            questions: [
                {
                    q: "Yapay zekâ aşağıdakilerden hangisini taklit etmeye çalışır?",
                    options: [
                        "Bilgisayarın fiziksel parçalarını",
                        "İnsanların düşünme, öğrenme ve karar verme becerilerini",
                        "İnternet bağlantısını",
                        "Elektrik üretimini"
                    ],
                    answer: 1,
                    explanation: "Yapay zekâ insanların düşünme, öğrenme ve karar verme becerilerini taklit eder."
                },
                {
                    q: "Aşağıdakilerden hangisi yapay zekânın yapabildiği işlemlerden biridir?",
                    options: [
                        "Öğrenme",
                        "Uyuma",
                        "Acıkma",
                        "Üşüme"
                    ],
                    answer: 0,
                    explanation: "Yapay zekâ verilerden öğrenme yapabilir; uyuma, acıkma ve üşüme canlılara aittir."
                },
                {
                    q: "Aşağıdakilerden hangisi yapay zekâ kullanımına örnektir?",
                    options: [
                        "Kalem açmak",
                        "Deftere yazı yazmak",
                        "Telefonun yüz tanıma özelliği",
                        "Kitap sayfasını çevirmek"
                    ],
                    answer: 2,
                    explanation: "Telefonun yüz tanıma özelliği görüntü işleme yapay zekâsıdır."
                },
                {
                    q: "YouTube’un izlediğimiz videolara göre yeni videolar önermesi aşağıdakilerden hangisine örnektir?",
                    options: [
                        "Dosya sıkıştırma",
                        "Yazıcı kullanımı",
                        "Klavye kullanımı",
                        "Yapay zekâ ile öneri sistemi"
                    ],
                    answer: 3,
                    explanation: "İzleme geçmişini analiz edip tavsiye sunmak yapay zekâ öneri sistemidir."
                },
                {
                    q: "İnsan zekâsı ve yapay zekânın ortak özelliklerinden biri aşağıdakilerden hangisidir?",
                    options: [
                        "İkisinin de öğrenebilmesi",
                        "İkisinin de duygularının olması",
                        "İkisinin de uyuması",
                        "İkisinin de hayal kurması"
                    ],
                    answer: 0,
                    explanation: "Hem insan zekâsı hem de yapay zekâ öğrenme yeteneğine sahiptir."
                },
                {
                    q: "Aşağıdakilerden hangisi insan zekâsı ile yapay zekâ arasındaki farklardan biridir?",
                    options: [
                        "İkisi de karar verebilir.",
                        "İnsanlar duygulara sahiptir, yapay zekâ sahip değildir.",
                        "İkisi de hata yapabilir.",
                        "İkisi de yeni şeyler keşfedebilir."
                    ],
                    answer: 1,
                    explanation: "İnsanlar sevinç, hüzün gibi duygulara sahiptir; yapay zekânın duyguları yoktur."
                },
                {
                    q: "İnsan zekâsı nasıl öğrenir?",
                    options: [
                        "Sadece sayılarla",
                        "Kodlarla",
                        "Deneyimle",
                        "Yalnızca internetten"
                    ],
                    answer: 2,
                    explanation: "İnsan zekâsı hayatın içindeki deneyimlerle öğrenir."
                },
                {
                    q: "Yapay zekâ nasıl öğrenir?",
                    options: [
                        "Duygularla",
                        "Hayallerle",
                        "Sezgilerle",
                        "Verilerle"
                    ],
                    answer: 3,
                    explanation: "Yapay zekâ kendisine verilen veri kümelerini inceleyerek öğrenir."
                },
                {
                    q: "İnsanlar karar verirken aşağıdakilerden hangisini kullanabilir?",
                    options: [
                        "Duygular ve bilgi",
                        "Sadece sensörler",
                        "Sadece kod",
                        "Yalnızca rastgele seçim"
                    ],
                    answer: 0,
                    explanation: "İnsanlar karar alırken hem öğrendikleri bilgileri hem de duygularını kullanabilir."
                },
                {
                    q: "Aşağıdakilerden hangisi yapay zekânın insana göre daha güçlü olduğu alanlardan biridir?",
                    options: [
                        "Duygu hissetme",
                        "Çok hızlı hesaplama",
                        "Hayal kurma",
                        "Arkadaşlık kurma"
                    ],
                    answer: 1,
                    explanation: "Yapay zekâ saniyede milyarlarca hesaplamayı inanılmaz bir hızla tamamlar."
                },
                {
                    q: "Aşağıdakilerden hangisi PDF’de yapay zekânın kullanım alanlarından biri olarak verilmemiştir?",
                    options: [
                        "Hastaneler",
                        "Oyunlar",
                        "Kalem kutuları",
                        "Alışveriş siteleri"
                    ],
                    answer: 2,
                    explanation: "Kalem kutuları yapay zekânın kullanım alanlarından biri değildir."
                },
                {
                    q: "Otonom sürüş aşağıdaki alanlardan hangisiyle ilgilidir?",
                    options: [
                        "Hastaneler",
                        "Eğitim",
                        "Alışveriş",
                        "Arabalar"
                    ],
                    answer: 3,
                    explanation: "Otonom sürüş sürücüsüz arabalarla (ulaşım) ilgilidir."
                },
                {
                    q: "Hastanelerde yapay zekâ aşağıdakilerden hangisi için kullanılabilir?",
                    options: [
                        "Hastalık tahmini",
                        "Video oyunu oynama",
                        "Sınıf yoklaması",
                        "Müzik dinleme"
                    ],
                    answer: 0,
                    explanation: "Hastanelerde tahlil ve röntgen incelemelerinde hastalık tahmini ve teşhisinde kullanılır."
                },
                {
                    q: "Yapay zekâ sistemlerini kullanırken aşağıdakilerden hangisine dikkat etmeliyiz?",
                    options: [
                        "Ekran renginin güzel olmasına",
                        "Bilgilerin güvenliğine",
                        "Bilgisayar masasının rengine",
                        "Klavyenin büyüklüğüne"
                    ],
                    answer: 1,
                    explanation: "Yapay zekâda paylaştığımız bilgilerin ve kişisel verilerin güvenliğine dikkat etmeliyiz."
                },
                {
                    q: "Yapay zekânın verdiği her bilgiye hemen inanmak yerine ne yapmalıyız?",
                    options: [
                        "Her zaman doğru kabul etmeliyiz.",
                        "Sadece ilk cevabı kullanmalıyız.",
                        "Bilgiyi kontrol etmeliyiz.",
                        "Kimseye sormamalıyız."
                    ],
                    answer: 2,
                    explanation: "Yapay zekânın verdiği her bilgiye inanmak yerine bilgiyi güvenilir kaynaklardan kontrol etmeliyiz."
                },
                {
                    q: "Bir yapay zekâ uygulaması yanlış bilgi verdiğinde aşağıdakilerden hangisi en doğru davranıştır?",
                    options: [
                        "Yanlış bilgiyi hemen paylaşmak",
                        "Kontrol etmeden ödevde kullanmak",
                        "Yapay zekânın her zaman doğru olduğunu düşünmek",
                        "Bilgiyi başka güvenilir kaynaklardan kontrol etmek"
                    ],
                    answer: 3,
                    explanation: "En doğru davranış, bilgiyi kitap, öğretmen veya güvenilir resmî sitelerden doğrulamaktır."
                }
            ]
        }
    ],

    // ========================================================
    // 🎮 4. TEKRAR OYUNLARI VERİTABANI
    // ========================================================
    gameData: {
        // Oyun 1: Çarkıfelek Soruları (Senaryo & Kazanım Temelli Özgün Sorular)
        wheelQuiz: [
            {
                q: "Sürücüsüz bir otomobil (otonom araç), yoldaki yayaları ve trafik ışıklarını öncelikle hangi donanımla algılar?",
                question: "Sürücüsüz bir otomobil (otonom araç), yoldaki yayaları ve trafik ışıklarını öncelikle hangi donanımla algılar?",
                options: ["Kameralar ve Sensörler", "Egzoz Borusu", "Radyo Anteni", "Silecek Motoru"],
                answer: 0,
                pts: 200,
                points: 200
            },
            {
                q: "1950 yılında 'Makineler düşünebilir mi?' sorusunu ortaya atarak yapay zekâ testini tasarlayan dahi kimdir?",
                question: "1950 yılında 'Makineler düşünebilir mi?' sorusunu ortaya atarak yapay zekâ testini tasarlayan dahi kimdir?",
                options: ["Alan Turing", "Alexander Graham Bell", "Thomas Edison", "Isaac Newton"],
                answer: 0,
                pts: 250,
                points: 250
            },
            {
                q: "1959 yılında Atatürk Üniversitesi'nde 'Makineler Düşünebilir mi ve Nasıl Düşünebilir?' konferansını veren ünlü Türk matematikçi kimdir?",
                question: "1959 yılında Atatürk Üniversitesi'nde 'Makineler Düşünebilir mi ve Nasıl Düşünebilir?' konferansını veren ünlü Türk matematikçi kimdir?",
                options: ["Cahit Arf", "Ali Kuşçu", "Uluğ Bey", "Harezmi"],
                answer: 0,
                pts: 300,
                points: 300
            },
            {
                q: "1997 yılında dünya satranç şampiyonu Garry Kasparov'u mağlup eden ünlü süper bilgisayarın adı nedir?",
                question: "1997 yılında dünya satranç şampiyonu Garry Kasparov'u mağlup eden ünlü süper bilgisayarın adı nedir?",
                options: ["Deep Blue", "AlphaGo", "Siri", "ChatGPT"],
                answer: 0,
                pts: 250,
                points: 250
            },
            {
                q: "Yapay zekâ kesin bilmediği bir soruya sanki doğruymuş gibi gerçek dışı veya uydurma cevap ürettiğinde bu duruma ne ad verilir?",
                question: "Yapay zekâ kesin bilmediği bir soruya sanki doğruymuş gibi gerçek dışı veya uydurma cevap ürettiğinde bu duruma ne ad verilir?",
                options: ["Halüsinasyon (Yanılsama)", "Ekran Donması", "Güç Tasarrufu", "Ağ Bağlantısı Hatası"],
                answer: 0,
                pts: 350,
                points: 350
            },
            {
                q: "Akıllı bir robot süpürgenin evdeki koltuk ve masa bacaklarına çarpmadan harita çıkarabilmesini ne sağlar?",
                question: "Akıllı bir robot süpürgenin evdeki koltuk ve masa bacaklarına çarpmadan harita çıkarabilmesini ne sağlar?",
                options: ["Lidar / Mesafe Sensörleri ve Haritalama", "Toz Torbası Büyüklüğü", "Tekerlek Rengi", "Priz Kablosu"],
                answer: 0,
                pts: 200,
                points: 200
            },
            {
                q: "Bir yapay zekâ modelinin öğrenmesi ve doğru kararlar verebilmesi için en çok neye ihtiyacı vardır?",
                question: "Bir yapay zekâ modelinin öğrenmesi ve doğru kararlar verebilmesi için en çok neye ihtiyacı vardır?",
                options: ["Çok miktarda kaliteli veriye (Data)", "Çok pahalı bir monitöre", "Hızlı bir yazıcıya", "Renkli bir mouse pad'e"],
                answer: 0,
                pts: 250,
                points: 250
            },
            {
                q: "Hastanelerde doktorlara yardımcı olan yapay zekâ yazılımları en çok hangi alanda kullanılır?",
                question: "Hastanelerde doktorlara yardımcı olan yapay zekâ yazılımları en çok hangi alanda kullanılır?",
                options: ["Röntgen ve MR görüntülerinden hastalık teşhisi", "Hastane bahçesini sulamak", "Yemekhane menüsü seçmek", "Oda perdelerini takmak"],
                answer: 0,
                pts: 200,
                points: 200
            },
            {
                q: "Yapay zekânın ürettiği bir bilgiyi derslerimizde veya ödevlerimizde kullanırken en doğru davranış nedir?",
                question: "Yapay zekânın ürettiği bir bilgiyi derslerimizde veya ödevlerimizde kullanırken en doğru davranış nedir?",
                options: ["Güvenilir kaynaklardan ve kitaplardan doğrulamak", "Hiç okumadan hemen kopyalayıp yapıştırmak", "Her dediğini tartışmasız doğru saymak", "Öğretmenden gizlemek"],
                answer: 0,
                pts: 300,
                points: 300
            },
            {
                q: "İnsan beyni ve zekâsını yapay zekâdan ayıran ve makinelerde ASLA bulunmayan özellik hangisidir?",
                question: "İnsan beyni ve zekâsını yapay zekâdan ayıran ve makinelerde ASLA bulunmayan özellik hangisidir?",
                options: ["Duygular, vicdan, empati ve hisler", "Hızlı hesaplama yapabilme", "Veri depolama kapasitesi", "Elektrikle çalışma"],
                answer: 0,
                pts: 250,
                points: 250
            },
            {
                q: "Spotify veya YouTube gibi platformların tam da bizim zevkimize uyan müzik ve videolar önermesini sağlayan sistem nedir?",
                question: "Spotify veya YouTube gibi platformların tam da bizim zevkimize uyan müzik ve videolar önermesini sağlayan sistem nedir?",
                options: ["Tavsiye & Öneri Algoritmaları", "Ekran Kartı Fanı", "Ses Açma Düğmesi", "İnternet Modemi"],
                answer: 0,
                pts: 200,
                points: 200
            },
            {
                q: "Telefonumuzun ön kamerasını açtığımızda bizi tanıyıp ekran kilidini açması hangi yapay zekâ alanına girer?",
                question: "Telefonumuzun ön kamerasını açtığımızda bizi tanıyıp ekran kilidini açması hangi yapay zekâ alanına girer?",
                options: ["Görüntü İşleme & Yüz Tanıma", "Sesli Mesajlaşma", "Kablosuz Şarj", "Batarya Göstergesi"],
                answer: 0,
                pts: 200,
                points: 200
            }
        ],

        // Oyun 2: Eşleştirme Kartları (matchCards)
        matchConfig: {
            timer: 90,
            leftTitle: "Yapay Zekâ Durumu 📋",
            rightTitle: "Kavram & Alan 🎯",
            instruction: "💡 <strong>Nasıl Oynanır?</strong> Soldaki yapay zekâ durumuna dokunun, ardından sağdaki doğru kavram veya alanla eşleştirin!"
        },
        matchCards: [
            {
                id: 1,
                text: "Telefonun sahibini yüzünden tanıması",
                category: "Görüntü İşleme",
                icon: "fa-solid fa-face-smile",
                rightIcon: "fa-solid fa-camera"
            },
            {
                id: 2,
                text: "Siri'nin sesli komutları algılayıp cevap vermesi",
                category: "Doğal Dil İşleme (NLP)",
                icon: "fa-solid fa-microphone",
                rightIcon: "fa-solid fa-comments"
            },
            {
                id: 3,
                text: "Otomobilin sürücüsüz kendi kendine gitmesi",
                category: "Otonom Sürüş",
                icon: "fa-solid fa-car",
                rightIcon: "fa-solid fa-road"
            },
            {
                id: 4,
                text: "Röntgen filmlerinden erken hastalık teşhisi",
                category: "Sağlık Alanı",
                icon: "fa-solid fa-heart-pulse",
                rightIcon: "fa-solid fa-hospital"
            },
            {
                id: 5,
                text: "YouTube'un sevdiğimiz videoları önermesi",
                category: "Öneri Sistemi",
                icon: "fa-solid fa-play",
                rightIcon: "fa-solid fa-list-check"
            },
            {
                id: 6,
                text: "İnsanların tecrübeleriyle öğrenmesi",
                category: "Doğal Zekâ",
                icon: "fa-solid fa-brain",
                rightIcon: "fa-solid fa-person"
            },
            {
                id: 7,
                text: "Büyük veri havuzlarını analiz eden akıllı kod",
                category: "Yapay Zekâ",
                icon: "fa-solid fa-microchip",
                rightIcon: "fa-solid fa-robot"
            },
            {
                id: 8,
                text: "1950'de Makineler düşünebilir mi diyen bilgin",
                category: "Alan Turing",
                icon: "fa-solid fa-user",
                rightIcon: "fa-solid fa-award"
            }
        ],

        // Oyun 3: Hızlı Refleks Doğru/Yanlış İfadeleri
        reflexStatements: [
            {
                text: "Yapay zekâ insanların düşünme ve öğrenme becerilerini taklit eder.",
                correct: true
            },
            {
                text: "Yapay zekânın tıpkı insanlar gibi hisleri, duyguları ve korkuları vardır.",
                correct: false
            },
            {
                text: "İnsan zekâsı deneyimle öğrenirken, yapay zekâ verilerle öğrenir.",
                correct: true
            },
            {
                text: "Yapay zekâ insanlardan çok daha hızlı matematiksel hesaplama yapabilir.",
                correct: true
            },
            {
                text: "Yapay zekânın verdiği her cevap %100 doğrudur, sorgulamaya gerek yoktur.",
                correct: false
            },
            {
                text: "Telefonlardaki yüz tanıma sistemi bir yapay zekâ uygulamasıdır.",
                correct: true
            },
            {
                text: "Otonom araçlar sensörleri ve yapay zekâsı ile sürücüsüz hareket eder.",
                correct: true
            },
            {
                text: "Yapay zekâ uygulamalarıyla konuşurken ev adresimizi ve şifremizi paylaşmalıyız.",
                correct: false
            },
            {
                text: "1959'da Cahit Arf, 'Makine düşünebilir mi?' konferansını vermiştir.",
                correct: true
            },
            {
                text: "Google Lens uygulaması görüntü işleme ile nesneleri tanıyabilir.",
                correct: true
            },
            {
                text: "YouTube'un bize video önermesi yapay zekânın öneri sistemine örnektir.",
                correct: true
            },
            {
                text: "Yapay zekâ sadece kalem kutularında kullanılır, arabalarda kullanılmaz.",
                correct: false
            },
            {
                text: "Yapay zekâ yanlış bilgi verdiğinde bilgiyi güvenilir kaynaklardan teyit etmeliyiz.",
                correct: true
            },
            {
                text: "Robot süpürgeler evin haritasını çıkararak engellere çarpmadan temizlik yapar.",
                correct: true
            }
        ],

        // Oyun 4: Sınıf Düellosu Soruları (10 Dinamik Düello Sorusu)
        duelQuestions: [
            {
                q: "1997'de dünya satranç şampiyonu Kasparov'u mağlup eden yapay zekâ süper bilgisayarı hangisidir?",
                question: "1997'de dünya satranç şampiyonu Kasparov'u mağlup eden yapay zekâ süper bilgisayarı hangisidir?",
                options: ["Deep Blue", "AlphaGo", "ChatGPT", "Watson"],
                answer: 0
            },
            {
                q: "1959'da Erzurum'da 'Makineler Düşünebilir mi?' konferansını veren Türk matematik öncümüz kimdir?",
                question: "1959'da Erzurum'da 'Makineler Düşünebilir mi?' konferansını veren Türk matematik öncümüz kimdir?",
                options: ["Cahit Arf", "Ali Kuşçu", "Aziz Sancar", "Oktay Sinanoğlu"],
                answer: 0
            },
            {
                q: "Yapay zekânın bilmediği konuda uydurma veya hatalı bilgi üretmesine ne ad verilir?",
                question: "Yapay zekânın bilmediği konuda uydurma veya hatalı bilgi üretmesine ne ad verilir?",
                options: ["Halüsinasyon (Yanılsama)", "Format Atma", "Çökme", "Güncelleme"],
                answer: 0
            },
            {
                q: "Sürücüsüz otonom araçların yolu, şeritleri ve yayaları algılamak için kullandığı en önemli organ nedir?",
                question: "Sürücüsüz otonom araçların yolu, şeritleri ve yayaları algılamak için kullandığı en önemli organ nedir?",
                options: ["Sensörler, Radar ve Kameralar", "Radyo Anteni", "Korna", "Vites Kolu"],
                answer: 0
            },
            {
                q: "İnsan zekâsı yaşayarak ve deneyimle öğrenirken, yapay zekâ modelleri neyle öğrenir?",
                question: "İnsan zekâsı yaşayarak ve deneyimle öğrenirken, yapay zekâ modelleri neyle öğrenir?",
                options: ["Milyonlarca Veri Kümesiyle (Data)", "Rüyalarla", "Duygularla", "Sezgilerle"],
                answer: 0
            },
            {
                q: "Aşağıdakilerden hangisi yapay zekânın insanlardan çok daha üstün olduğu bir alandır?",
                question: "Aşağıdakilerden hangisi yapay zekânın insanlardan çok daha üstün olduğu bir alandır?",
                options: ["Saniyede milyarlarca veriyi çok hızlı hesaplama", "Empati ve sevgi duyma", "Vicdanlı karar verme", "Hayal kurma"],
                answer: 0
            },
            {
                q: "Google Lens veya telefon kamerasının bir bitkiyi ya da köpeğin cinsini tanıması hangi yapay zekâ dalıdır?",
                question: "Google Lens veya telefon kamerasının bir bitkiyi ya da köpeğin cinsini tanıması hangi yapay zekâ dalıdır?",
                options: ["Görüntü İşleme", "Metin Çevirisi", "Bluetooth Paylaşımı", "Pil Tasarrufu"],
                answer: 0
            },
            {
                q: "Yapay zekânın bize sunduğu bir cevabı ödevde kullanmadan önce ne yapmalıyız?",
                question: "Yapay zekânın bize sunduğu bir cevabı ödevde kullanmadan önce ne yapmalıyız?",
                options: ["Güvenilir kaynaklardan doğrulamalıyız", "Olduğu gibi hemen teslim etmeliyiz", "Hiç okumadan kabul etmeliyiz", "Kimseye göstermemeliyiz"],
                answer: 0
            },
            {
                q: "1950'de makinelerin insan gibi düşünüp düşünemediğini anlamak için Turing Testi'ni geliştiren dahi kimdir?",
                question: "1950'de makinelerin insan gibi düşünüp düşünemediğini anlamak için Turing Testi'ni geliştiren dahi kimdir?",
                options: ["Alan Turing", "Steve Jobs", "Bill Gates", "Nikola Tesla"],
                answer: 0
            },
            {
                q: "Akıllı süpürgelerin ve otonom araçların çevreyi anlamasını sağlayan teknolojiye ne ad verilir?",
                question: "Akıllı süpürgelerin ve otonom araçların çevreyi anlamasını sağlayan teknolojiye ne ad verilir?",
                options: ["Ortam Algılama ve Haritalama", "Şarj Tüketimi", "Müzik Çalma", "Ekran Kaydı"],
                answer: 0
            }
        ]
    },

    // ========================================================
    // 🌟 5. ÖZEL EK OYUNLAR (4. Konu Kapsamında Hazırlanan 3 Yeni Oyun)
    // ========================================================
    extraGames: [
        {
            badge: "Görev İstasyonu",
            badgeColor: "text-purple-300",
            title: "Yapay Zekâ Görev Merkezi",
            desc: "BTY.5.1.4 kazanımı için 5 farklı sorgulama görevi! Algoritmayı kandır, olay yerini incele, YZ beynine gir, alarm ver ve kendi sistemini tasarla!",
            icon: "fa-solid fa-satellite-dish",
            iconBg: "bg-purple-500/30 text-purple-300",
            cardGradient: "from-purple-950/90 via-indigo-950/90 to-slate-900",
            border: "border-purple-400/50",
            descColor: "text-purple-100",
            btnText: "Görev Merkezine Gir!",
            btnIcon: "fa-solid fa-rocket",
            btnGradient: "from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-black",
            action: "app.openStandaloneGame('games/yapay_zeka_gorev_merkezi.html', 'Yapay Zekâ Görev Merkezi | Öğretmen Bozok')"
        },
        {
            badge: "Kelime Avı",
            badgeColor: "text-cyan-300",
            title: "Yapay Zekâ Kelime Avı",
            desc: "12x12 harf matrisinde gizlenen 10 yapay zekâ kavramını bul! Her oyunda kelimelerin yerleri ve harfler rastgele değişir!",
            icon: "fa-solid fa-puzzle-piece",
            iconBg: "bg-cyan-500/30 text-cyan-300",
            cardGradient: "from-blue-900/90 via-indigo-950/90 to-purple-900/90",
            border: "border-cyan-500/50",
            descColor: "text-cyan-100",
            btnText: "Kelime Avına Başla!",
            btnIcon: "fa-solid fa-crosshairs",
            btnGradient: "from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-black",
            action: "app.openStandaloneGame('games/yapay_zeka_kelime_avi.html', 'Yapay Zekâ Kelime Avı | Öğretmen Bozok')"
        },
        {
            badge: "Özel Tekrar",
            badgeColor: "text-yellow-300",
            title: "16 Soruluk Yapay Zekâ Tekrar Oyunu",
            desc: "4. Konu çalışma kâğıtları için hazırlanan 16 özel soruluk akıllı tahta yarışması! Soruları bil, puanları topla ve yapay zekâ uzmanı ol!",
            icon: "fa-solid fa-trophy",
            iconBg: "bg-yellow-500/30 text-yellow-300",
            cardGradient: "from-indigo-950/90 via-slate-900 to-purple-950/90",
            border: "border-yellow-400/50",
            descColor: "text-yellow-100",
            btnText: "Tekrar Oyununu Başlat!",
            btnIcon: "fa-solid fa-gamepad",
            btnGradient: "from-yellow-500 via-amber-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/yapay_zeka_tekrar_oyunu.html', '16 Soruluk Yapay Zekâ Tekrar Oyunu | Öğretmen Bozok')"
        }
    ]
};
