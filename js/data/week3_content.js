// ==========================================
// 3. Hafta: Dijital Vatandaşlık Uygulamaları
// MEB 5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi
// Tam İnteraktif Ders Materyalleri ve Oyun Veritabanı
// Hazırlayan: Öğretmen Bozok
// ==========================================

window.WEEK3_CONTENT = {
    weekInfo: {
        weekNumber: 3,
        title: "Dijital Vatandaşlık Uygulamaları",
        code: "BTY.5.1.3. Dijital vatandaşlık uygulamalarını sınıflandırabilme",
        theme: "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        learningGoals: [
            "Dijital vatandaş ve dijital kimlik kavramlarını tanımlayabileceğim.",
            "İnternette bıraktığımız dijital ayak izinin kalıcılığını ve etkilerini fark edebileceğim.",
            "e-Devlet, e-Okul, EBA, e-Nabız ve MHRS gibi dijital vatandaşlık uygulamalarını sınıflandırabileceğim.",
            "Sanal ortamda dijital haklarımı, sorumluluklarımı ve dijital nezaket kurallarını uygulayabileceğim."
        ],
        images: {
            konu: "assets/worksheets/1.3_konu.png",
            soru: "assets/worksheets/1.3_soru.png",
            cevap: "assets/worksheets/1.3_cevap.png"
        }
    },

    // 🎬 3. HAFTA: KONU İLE ALAKALI VİDEOLAR (Öğretmen Bozok Video Arşivi)
    videos: [
        {
            id: 1,
            title: "Dijital Yurttaşlık Nedir?",
            desc: "Dijital vatandaşlığın ne olduğunu, temel boyutlarını, dijital hak ve sorumluluklar ile internette güvenli davranış kurallarını anlatan eğitici ders videosu.",
            url: "https://www.youtube.com/watch?v=1QVvGxxjw_4",
            youtubeId: "1QVvGxxjw_4",
            duration: "Ders Videosu",
            badge: "Dijital Vatandaşlık",
            author: "Eğitici Ders Videosu",
            icon: "fa-solid fa-shield-halved"
        }
    ],

    // ========================================================
    // 🖥️ 1. İNTERAKTİF DERS SUNUSU (Akıllı Tahta Modu - 22 Slayt)
    // ========================================================
    slides: [
        // SLAYT 1 — KAPAK
        {
            id: 1,
            title: "5. SINIF BİLİŞİM TEKNOLOJİLERİ",
            subtitle: "3. Hafta Ders Sunusu",
            topic: "KAZANIM: BTY.5.1.3",
            badge: "KAZANIM: BTY.5.1.3",
            icon: "fa-solid fa-chalkboard-user",
            bgColor: "from-blue-700 via-indigo-800 to-slate-900",
            gradient: "from-blue-700 via-indigo-800 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-6xl mx-auto my-auto py-2">
                    <!-- Sol Bilgi Alanı -->
                    <div class="md:col-span-7 space-y-4 text-left">
                        <!-- 5. Sınıf Bilişim Teknolojileri - 3. Hafta Rozeti -->
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="px-4 py-1.5 bg-yellow-400/20 text-yellow-300 font-extrabold text-sm sm:text-base uppercase tracking-wider rounded-full border border-yellow-400/40">
                                5. Sınıf Bilişim Teknolojileri • 3. Hafta
                            </span>
                        </div>

                        <!-- Çok Büyük Başlık: DİJİTAL VATANDAŞLIK UYGULAMALARI -->
                        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-white tracking-tight leading-tight drop-shadow-lg">
                            DİJİTAL VATANDAŞLIK UYGULAMALARI
                        </h1>

                        <!-- KAZANIM Kutusu (Belirgin, başlığın önüne geçmeyecek, en az 24-26 punto) -->
                        <div class="p-4 sm:p-5 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-indigo-400/50 shadow-xl space-y-1.5">
                            <div class="flex items-center gap-2 text-yellow-300 font-black text-xs sm:text-sm uppercase tracking-widest">
                                <i class="fa-solid fa-bullseye text-base text-yellow-400"></i>
                                <span>KAZANIM:</span>
                            </div>
                            <p class="text-xl sm:text-2xl md:text-[26px] font-extrabold text-white leading-snug">
                                <span class="text-yellow-300 font-black">BTY.5.1.3 –</span> Dijital vatandaşlık uygulamalarını tanıyabilme.
                            </p>
                        </div>

                        <!-- Alt Bölümde Küçük Bilgi Kutusu -->
                        <div class="p-3.5 sm:p-4 bg-indigo-950/80 rounded-2xl border border-indigo-400/30 flex items-start gap-3 shadow-lg">
                            <div class="w-9 h-9 rounded-xl bg-indigo-500/30 text-yellow-300 flex items-center justify-center text-lg shrink-0 mt-0.5">
                                <i class="fa-solid fa-circle-info"></i>
                            </div>
                            <p class="text-sm sm:text-base font-semibold text-indigo-100 leading-relaxed">
                                “Bu derste dijital vatandaşlık uygulamalarını, dijital kimliği ve dijital ayak izini öğreneceğiz.”
                            </p>
                        </div>

                        <!-- Öğretmen Bozok (küçük şekilde alt bölümde) -->
                        <div class="pt-1 flex items-center gap-2">
                            <span class="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-yellow-300 font-bold text-xs sm:text-sm shadow-md">
                                <i class="fa-solid fa-graduation-cap text-base"></i>
                                <span>Öğretmen Bozok • Bozok Bilişim Portalı</span>
                            </span>
                        </div>
                    </div>

                    <!-- Sağ Görsel Alanı (Öğrenci + bilgisayar + tablet + telefon + internet ağı temalı modern illüstrasyon) -->
                    <div class="md:col-span-5 flex justify-center">
                        <div class="relative group rounded-3xl overflow-hidden border-4 border-indigo-400/40 shadow-2xl bg-slate-900/50 w-full max-w-md">
                            <img src="assets/slides/dijital_vatandaslik_kapak.jpg" alt="Dijital Vatandaşlık Uygulamaları" class="w-full max-h-[380px] sm:max-h-[440px] md:max-h-[470px] object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-4">
                                <span class="text-xs sm:text-sm font-bold text-yellow-300 flex items-center gap-1.5">
                                    <i class="fa-solid fa-shield-halved text-blue-400"></i> Dijital Vatandaşlık & İnternet Ağı
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 2 — BUGÜN NE ÖĞRENECEĞİZ?
        {
            id: 2,
            title: "BUGÜN NE ÖĞRENECEĞİZ? 🎯",
            subtitle: "Dersimizin 4 Temel Hedefi",
            topic: "DERS HEDEFLERİ",
            badge: "HEDEFLER",
            icon: "fa-solid fa-compass",
            bgColor: "from-indigo-800 via-purple-900 to-slate-900",
            gradient: "from-indigo-800 via-purple-900 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-6 text-center my-auto py-2">
                    <p class="text-base sm:text-xl text-indigo-200 font-semibold">
                        Bu dersimizde dijital dünyada güvenle ilerlemek için 4 ana konuyu keşfedeceğiz:
                    </p>

                    <!-- Büyük İkonlarla 4 Hedef -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                        <div class="p-5 rounded-3xl bg-blue-950/70 border-2 border-blue-400/50 shadow-xl flex items-center gap-4 hover:scale-[1.02] transition-all">
                            <div class="w-16 h-16 rounded-2xl bg-blue-500/30 text-blue-300 flex items-center justify-center text-3xl shrink-0 shadow-lg">
                                <i class="fa-solid fa-globe"></i>
                            </div>
                            <div>
                                <span class="text-xs font-black text-blue-400 uppercase tracking-widest">1. HEDEF</span>
                                <h3 class="text-xl sm:text-2xl font-black text-white leading-tight">Dijital vatandaşlık nedir?</h3>
                            </div>
                        </div>

                        <div class="p-5 rounded-3xl bg-emerald-950/70 border-2 border-emerald-400/50 shadow-xl flex items-center gap-4 hover:scale-[1.02] transition-all">
                            <div class="w-16 h-16 rounded-2xl bg-emerald-500/30 text-emerald-300 flex items-center justify-center text-3xl shrink-0 shadow-lg">
                                <i class="fa-solid fa-building-columns"></i>
                            </div>
                            <div>
                                <span class="text-xs font-black text-emerald-400 uppercase tracking-widest">2. HEDEF</span>
                                <h3 class="text-xl sm:text-2xl font-black text-white leading-tight">Dijital vatandaşlık uygulamaları nelerdir?</h3>
                            </div>
                        </div>

                        <div class="p-5 rounded-3xl bg-amber-950/70 border-2 border-amber-400/50 shadow-xl flex items-center gap-4 hover:scale-[1.02] transition-all">
                            <div class="w-16 h-16 rounded-2xl bg-amber-500/30 text-amber-300 flex items-center justify-center text-3xl shrink-0 shadow-lg">
                                <i class="fa-solid fa-id-badge"></i>
                            </div>
                            <div>
                                <span class="text-xs font-black text-amber-400 uppercase tracking-widest">3. HEDEF</span>
                                <h3 class="text-xl sm:text-2xl font-black text-white leading-tight">Dijital kimlik nedir?</h3>
                            </div>
                        </div>

                        <div class="p-5 rounded-3xl bg-cyan-950/70 border-2 border-cyan-400/50 shadow-xl flex items-center gap-4 hover:scale-[1.02] transition-all">
                            <div class="w-16 h-16 rounded-2xl bg-cyan-500/30 text-cyan-300 flex items-center justify-center text-3xl shrink-0 shadow-lg">
                                <i class="fa-solid fa-shoe-prints"></i>
                            </div>
                            <div>
                                <span class="text-xs font-black text-cyan-400 uppercase tracking-widest">4. HEDEF</span>
                                <h3 class="text-xl sm:text-2xl font-black text-white leading-tight">Dijital ayak izi nedir?</h3>
                            </div>
                        </div>
                    </div>

                    <!-- Alt Vurgu Kutusu -->
                    <div class="p-4 sm:p-5 bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 rounded-2xl border-2 border-yellow-400/60 shadow-xl">
                        <p class="text-xl sm:text-2xl md:text-[26px] font-black text-yellow-300 flex items-center justify-center gap-3">
                            <i class="fa-solid fa-lightbulb text-2xl text-yellow-400 animate-pulse"></i>
                            <span>“İnterneti daha bilinçli kullanmayı öğreneceğiz.”</span>
                        </p>
                    </div>
                </div>
            `
        },

        // SLAYT 3 — DİJİTAL VATANDAŞLIK NEDİR?
        {
            id: 3,
            title: "DİJİTAL VATANDAŞLIK NEDİR? 🤝",
            subtitle: "Temel Tanım ve 4 Ana İlke",
            topic: "KAVRAM TANIMI",
            badge: "TANIM",
            icon: "fa-solid fa-users",
            bgColor: "from-blue-800 via-indigo-900 to-slate-900",
            gradient: "from-blue-800 via-indigo-900 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-6 text-center my-auto py-2">
                    <!-- Büyük Tanım Kutusu (En az 26 punto) -->
                    <div class="p-6 sm:p-8 bg-white/10 backdrop-blur-md rounded-3xl border-2 border-blue-400/50 shadow-2xl space-y-2">
                        <div class="text-xs sm:text-sm font-black text-yellow-300 uppercase tracking-widest">
                            <i class="fa-solid fa-bookmark"></i> TANIM
                        </div>
                        <h2 class="text-2xl sm:text-3xl md:text-[30px] font-black text-white leading-snug">
                            “Dijital vatandaşlık; interneti ve dijital teknolojileri <span class="text-yellow-300 underline underline-offset-4">SAYGILI</span>, <span class="text-cyan-300 underline underline-offset-4">GÜVENLİ</span> ve <span class="text-emerald-300 underline underline-offset-4">SORUMLU</span> şekilde kullanmaktır.”
                        </h2>
                    </div>

                    <!-- 4 Büyük Görsel Kart -->
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div class="p-5 rounded-3xl bg-pink-950/70 border-2 border-pink-500/50 shadow-xl space-y-3 flex flex-col items-center justify-center hover:scale-105 transition-all">
                            <div class="w-16 h-16 rounded-2xl bg-pink-500/30 text-pink-300 flex items-center justify-center text-4xl shadow-inner">
                                <i class="fa-solid fa-heart"></i>
                            </div>
                            <h3 class="text-xl sm:text-2xl font-black text-white">SAYGILI OL</h3>
                            <p class="text-xs sm:text-sm text-pink-200 font-semibold">Başkalarının haklarına değer ver</p>
                        </div>

                        <div class="p-5 rounded-3xl bg-cyan-950/70 border-2 border-cyan-500/50 shadow-xl space-y-3 flex flex-col items-center justify-center hover:scale-105 transition-all">
                            <div class="w-16 h-16 rounded-2xl bg-cyan-500/30 text-cyan-300 flex items-center justify-center text-4xl shadow-inner">
                                <i class="fa-solid fa-shield-halved"></i>
                            </div>
                            <h3 class="text-xl sm:text-2xl font-black text-white">GÜVENLİ OL</h3>
                            <p class="text-xs sm:text-sm text-cyan-200 font-semibold">Bilgilerini ve şifreni koru</p>
                        </div>

                        <div class="p-5 rounded-3xl bg-indigo-950/70 border-2 border-indigo-500/50 shadow-xl space-y-3 flex flex-col items-center justify-center hover:scale-105 transition-all">
                            <div class="w-16 h-16 rounded-2xl bg-indigo-500/30 text-indigo-300 flex items-center justify-center text-4xl shadow-inner">
                                <i class="fa-solid fa-scale-balanced"></i>
                            </div>
                            <h3 class="text-xl sm:text-2xl font-black text-white">SORUMLU OL</h3>
                            <p class="text-xs sm:text-sm text-indigo-200 font-semibold">Paylaşımlarının sonucunu bil</p>
                        </div>

                        <div class="p-5 rounded-3xl bg-amber-950/70 border-2 border-amber-500/50 shadow-xl space-y-3 flex flex-col items-center justify-center hover:scale-105 transition-all">
                            <div class="w-16 h-16 rounded-2xl bg-amber-500/30 text-amber-300 flex items-center justify-center text-4xl shadow-inner">
                                <i class="fa-solid fa-lightbulb"></i>
                            </div>
                            <h3 class="text-xl sm:text-2xl font-black text-white">BİLİNÇLİ OL</h3>
                            <p class="text-xs sm:text-sm text-amber-200 font-semibold">Teknolojiyi faydalı kullan</p>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 4 — İYİ BİR DİJİTAL VATANDAŞ NASIL DAVRANIR?
        {
            id: 4,
            title: "İYİ BİR DİJİTAL VATANDAŞ NASIL DAVRANIR? ⭐",
            subtitle: "Günlük İnternet Davranışlarımız",
            topic: "DAVRANIŞ REHBERİ",
            badge: "REHBER",
            icon: "fa-solid fa-star",
            bgColor: "from-slate-900 via-indigo-950 to-blue-900",
            gradient: "from-slate-900 via-indigo-950 to-blue-900",
            content: `
                <div class="max-w-5xl mx-auto w-full space-y-3.5 my-auto">
                    <p class="text-center text-base sm:text-lg text-indigo-200 font-bold">
                        Gerçek hayatta nezaketli olduğumuz gibi internette de örnek davranışlar sergileriz:
                    </p>

                    <!-- 2 Kolonlu Dengeli Izgara (Tam Ekrana Sığar) -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-800/80 border-2 border-pink-400/40 flex items-center gap-3.5 shadow-lg hover:border-pink-400 transition-all">
                            <div class="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center text-2xl shrink-0">
                                <i class="fa-solid fa-handshake-angle"></i>
                            </div>
                            <span class="text-base sm:text-lg md:text-xl font-black text-white">
                                Başkalarına <strong class="text-yellow-300">saygılı</strong> davranır.
                            </span>
                        </div>

                        <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-800/80 border-2 border-cyan-400/40 flex items-center gap-3.5 shadow-lg hover:border-cyan-400 transition-all">
                            <div class="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl shrink-0">
                                <i class="fa-solid fa-id-card-clip"></i>
                            </div>
                            <span class="text-base sm:text-lg md:text-xl font-black text-white">
                                Kişisel bilgilerini <strong class="text-cyan-300">korur</strong>.
                            </span>
                        </div>

                        <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-800/80 border-2 border-emerald-400/40 flex items-center gap-3.5 shadow-lg hover:border-emerald-400 transition-all">
                            <div class="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl shrink-0">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <span class="text-base sm:text-lg md:text-xl font-black text-white">
                                <strong class="text-emerald-300">Güvenilir kaynakları</strong> araştırır.
                            </span>
                        </div>

                        <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-800/80 border-2 border-amber-400/40 flex items-center gap-3.5 shadow-lg hover:border-amber-400 transition-all">
                            <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl shrink-0">
                                <i class="fa-solid fa-key"></i>
                            </div>
                            <span class="text-base sm:text-lg md:text-xl font-black text-white">
                                <strong class="text-amber-300">Şifrelerini</strong> asla paylaşmaz.
                            </span>
                        </div>

                        <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-800/80 border-2 border-purple-400/40 flex items-center justify-center gap-3.5 shadow-lg hover:border-purple-400 transition-all col-span-1 md:col-span-2">
                            <div class="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl shrink-0">
                                <i class="fa-solid fa-clock"></i>
                            </div>
                            <span class="text-base sm:text-lg md:text-xl font-black text-white">
                                İnternette geçirdiği <strong class="text-purple-300">zamanı dengeler</strong>.
                            </span>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 5 — DİJİTAL VATANDAŞLIK UYGULAMALARI
        {
            id: 5,
            title: "GÜNLÜK HAYATIMIZDA DİJİTAL HİZMETLER 📱",
            subtitle: "Dijital Vatandaşlık Uygulamaları",
            topic: "DİJİTAL UYGULAMALAR",
            badge: "UYGULAMALAR",
            icon: "fa-solid fa-laptop-code",
            bgColor: "from-blue-900 via-indigo-900 to-slate-900",
            gradient: "from-blue-900 via-indigo-900 to-slate-900",
            content: `
                <div class="max-w-6xl mx-auto space-y-5 my-auto py-2">
                    <p class="text-center text-base sm:text-xl text-indigo-200 font-semibold">
                        Devlet kurumları ve hizmetler artık internet üzerinden parmaklarımızın ucunda:
                    </p>

                    <!-- 7 Uygulama İçin Büyük Görsel Kartlar Izgarası -->
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                        <div class="p-4.5 rounded-2xl bg-blue-950/80 border-2 border-blue-400/50 flex flex-col items-center text-center space-y-2 shadow-lg hover:scale-105 transition-all">
                            <div class="w-14 h-14 rounded-2xl bg-blue-600/30 text-blue-300 flex items-center justify-center text-3xl">
                                <i class="fa-solid fa-landmark"></i>
                            </div>
                            <h4 class="text-xl font-black text-white">e-Devlet</h4>
                            <span class="text-xs text-blue-300 font-bold">Kamu Portalı</span>
                        </div>

                        <div class="p-4.5 rounded-2xl bg-emerald-950/80 border-2 border-emerald-400/50 flex flex-col items-center text-center space-y-2 shadow-lg hover:scale-105 transition-all">
                            <div class="w-14 h-14 rounded-2xl bg-emerald-600/30 text-emerald-300 flex items-center justify-center text-3xl">
                                <i class="fa-solid fa-school"></i>
                            </div>
                            <h4 class="text-xl font-black text-white">e-Okul</h4>
                            <span class="text-xs text-emerald-300 font-bold">Öğrenci & Not</span>
                        </div>

                        <div class="p-4.5 rounded-2xl bg-rose-950/80 border-2 border-rose-400/50 flex flex-col items-center text-center space-y-2 shadow-lg hover:scale-105 transition-all">
                            <div class="w-14 h-14 rounded-2xl bg-rose-600/30 text-rose-300 flex items-center justify-center text-3xl">
                                <i class="fa-solid fa-heart-pulse"></i>
                            </div>
                            <h4 class="text-xl font-black text-white">e-Nabız</h4>
                            <span class="text-xs text-rose-300 font-bold">Sağlık Kayıtları</span>
                        </div>

                        <div class="p-4.5 rounded-2xl bg-cyan-950/80 border-2 border-cyan-400/50 flex flex-col items-center text-center space-y-2 shadow-lg hover:scale-105 transition-all">
                            <div class="w-14 h-14 rounded-2xl bg-cyan-600/30 text-cyan-300 flex items-center justify-center text-3xl">
                                <i class="fa-solid fa-calendar-check"></i>
                            </div>
                            <h4 class="text-xl font-black text-white">e-Randevu</h4>
                            <span class="text-xs text-cyan-300 font-bold">MHRS Hastane</span>
                        </div>

                        <div class="p-4.5 rounded-2xl bg-amber-950/80 border-2 border-amber-400/50 flex flex-col items-center text-center space-y-2 shadow-lg hover:scale-105 transition-all">
                            <div class="w-14 h-14 rounded-2xl bg-amber-600/30 text-amber-300 flex items-center justify-center text-3xl">
                                <i class="fa-solid fa-receipt"></i>
                            </div>
                            <h4 class="text-xl font-black text-white">e-Vergi</h4>
                            <span class="text-xs text-amber-300 font-bold">Vergi & Harç</span>
                        </div>

                        <div class="p-4.5 rounded-2xl bg-indigo-950/80 border-2 border-indigo-400/50 flex flex-col items-center text-center space-y-2 shadow-lg hover:scale-105 transition-all">
                            <div class="w-14 h-14 rounded-2xl bg-indigo-600/30 text-indigo-300 flex items-center justify-center text-3xl">
                                <i class="fa-solid fa-credit-card"></i>
                            </div>
                            <h4 class="text-xl font-black text-white">e-Bankacılık</h4>
                            <span class="text-xs text-indigo-300 font-bold">Dijital Ödeme</span>
                        </div>

                        <div class="p-4.5 rounded-2xl bg-purple-950/80 border-2 border-purple-400/50 flex flex-col items-center text-center space-y-2 shadow-lg hover:scale-105 transition-all col-span-2 sm:col-span-2">
                            <div class="w-14 h-14 rounded-2xl bg-purple-600/30 text-purple-300 flex items-center justify-center text-3xl">
                                <i class="fa-solid fa-book-open-reader"></i>
                            </div>
                            <h4 class="text-xl font-black text-white">EBA</h4>
                            <span class="text-xs text-purple-300 font-bold">Eğitim Bilişim Ağı</span>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 6 — E-DEVLET
        {
            id: 6,
            title: "e-DEVLET İLE NELER YAPABİLİRİZ? 🏛️",
            subtitle: "Türkiye'nin Dijital Kapısı: turkiye.gov.tr",
            topic: "KAMU HİZMETLERİ",
            badge: "e-DEVLET",
            icon: "fa-solid fa-building-columns",
            bgColor: "from-blue-700 via-indigo-900 to-slate-900",
            gradient: "from-blue-700 via-indigo-900 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-6xl mx-auto my-auto py-2">
                    <div class="md:col-span-7 space-y-4 text-left">
                        <div class="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 font-black text-xs uppercase tracking-wider border border-blue-400/40">
                            <i class="fa-solid fa-shield-halved"></i> RESMİ DEVLET KAPISI
                        </div>

                        <!-- Kısa açıklama (En az 26 punto) -->
                        <div class="p-5 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-blue-400/50 shadow-xl">
                            <p class="text-xl sm:text-2xl md:text-[26px] font-black text-white leading-relaxed">
                                “Birçok kamu hizmetine internet üzerinden ulaşmamızı sağlar.”
                            </p>
                        </div>

                        <!-- Pratik Maddeler -->
                        <div class="space-y-2.5">
                            <div class="p-3.5 bg-slate-800/80 rounded-xl border border-blue-400/30 flex items-center gap-3">
                                <i class="fa-solid fa-circle-check text-yellow-400 text-xl shrink-0"></i>
                                <span class="text-base sm:text-lg font-bold text-slate-100">Tek şifreyle yüzlerce devlet kurumuna bağlanırız.</span>
                            </div>
                            <div class="p-3.5 bg-slate-800/80 rounded-xl border border-blue-400/30 flex items-center gap-3">
                                <i class="fa-solid fa-circle-check text-yellow-400 text-xl shrink-0"></i>
                                <span class="text-base sm:text-lg font-bold text-slate-100">İkametgâh, adli sicil ve öğrenci belgesini anında alırız.</span>
                            </div>
                            <div class="p-3.5 bg-slate-800/80 rounded-xl border border-blue-400/30 flex items-center gap-3">
                                <i class="fa-solid fa-circle-check text-yellow-400 text-xl shrink-0"></i>
                                <span class="text-base sm:text-lg font-bold text-slate-100">Sıra beklemeden, kâğıt israfı yapmadan hızlıca işlem yaparız.</span>
                            </div>
                        </div>
                    </div>

                    <!-- Görsel Alanı (edevlet_kamu.jpg) -->
                    <div class="md:col-span-5 flex justify-center">
                        <div class="relative group rounded-3xl overflow-hidden border-4 border-blue-400/40 shadow-2xl bg-slate-900/50 w-full max-w-md">
                            <img src="assets/slides/edevlet_kamu.jpg" alt="e-Devlet Kamu Hizmetleri" class="w-full max-h-[380px] sm:max-h-[440px] md:max-h-[470px] object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-4">
                                <span class="text-xs sm:text-sm font-bold text-yellow-300">
                                    🏛️ turkiye.gov.tr • Tek Tıkla Kamu Hizmetleri
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 7 — E-OKUL VE EBA
        {
            id: 7,
            title: "E-OKUL VE EBA 🎒",
            subtitle: "Eğitimde Dijitalleşme ve Öğrenci Sistemleri",
            topic: "EĞİTİM PLATFORMLARI",
            badge: "EĞİTİM",
            icon: "fa-solid fa-graduation-cap",
            bgColor: "from-blue-900 via-indigo-950 to-slate-900",
            gradient: "from-blue-900 via-indigo-950 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-6 my-auto py-2">
                    <p class="text-center text-base sm:text-xl text-indigo-200 font-semibold">
                        Millî Eğitim Bakanlığı'nın öğrenciler ve veliler için sunduğu iki dev eğitim sistemi:
                    </p>

                    <!-- İki Büyük Bölüm -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- e-Okul Kartı -->
                        <div class="p-6 sm:p-8 rounded-3xl bg-blue-950/80 border-2 border-blue-400/60 shadow-2xl space-y-4 text-left">
                            <div class="flex items-center gap-4">
                                <div class="w-16 h-16 rounded-2xl bg-blue-500/30 text-blue-300 flex items-center justify-center text-3xl shadow-inner">
                                    <i class="fa-solid fa-school"></i>
                                </div>
                                <div>
                                    <span class="text-xs font-black text-blue-400 uppercase tracking-wider">OKUL YÖNETİMİ</span>
                                    <h3 class="text-2xl sm:text-3xl font-black text-white">E-OKUL</h3>
                                </div>
                            </div>
                            <div class="p-4 bg-white/10 rounded-2xl border border-white/20">
                                <p class="text-lg sm:text-xl font-extrabold text-yellow-300 leading-snug">
                                    “Okulla ilgili bilgilere ulaşmamıza yardımcı olur.”
                                </p>
                            </div>
                            <ul class="space-y-2 text-sm sm:text-base text-slate-200 font-medium">
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-blue-400"></i> Sınav notları ve sözlü puanları</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-blue-400"></i> Devamsızlık bilgileri</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-blue-400"></i> Haftalık ders programı ve karne</li>
                            </ul>
                        </div>

                        <!-- EBA Kartı -->
                        <div class="p-6 sm:p-8 rounded-3xl bg-amber-950/80 border-2 border-amber-400/60 shadow-2xl space-y-4 text-left">
                            <div class="flex items-center gap-4">
                                <div class="w-16 h-16 rounded-2xl bg-amber-500/30 text-amber-300 flex items-center justify-center text-3xl shadow-inner">
                                    <i class="fa-solid fa-book-bookmark"></i>
                                </div>
                                <div>
                                    <span class="text-xs font-black text-amber-400 uppercase tracking-wider">ÖĞRENME PLATFORMU</span>
                                    <h3 class="text-2xl sm:text-3xl font-black text-white">EBA</h3>
                                </div>
                            </div>
                            <div class="p-4 bg-white/10 rounded-2xl border border-white/20">
                                <p class="text-lg sm:text-xl font-extrabold text-amber-300 leading-snug">
                                    “Eğitim içeriklerine ve öğrenme kaynaklarına ulaşmamızı sağlar.”
                                </p>
                            </div>
                            <ul class="space-y-2 text-sm sm:text-base text-slate-200 font-medium">
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-amber-400"></i> Ders videoları ve konu anlatımları</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-amber-400"></i> İnteraktif testler ve alıştırmalar</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-amber-400"></i> Canlı dersler ve dijital kütüphane</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 8 — E-NABIZ VE E-RANDEVU
        {
            id: 8,
            title: "E-NABIZ VE E-RANDEVU 🩺",
            subtitle: "Sağlık Hizmetlerinde Dijital Kolaylıklar",
            topic: "SAĞLIK HİZMETLERİ",
            badge: "SAĞLIK",
            icon: "fa-solid fa-heart-pulse",
            bgColor: "from-rose-950 via-slate-900 to-indigo-950",
            gradient: "from-rose-950 via-slate-900 to-indigo-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-6 my-auto py-2">
                    <p class="text-center text-base sm:text-xl text-rose-200 font-semibold">
                        Sağlık Bakanlığı'nın vatandaşlara sunduğu iki büyük sağlık çözümü:
                    </p>

                    <!-- İki Büyük Kart -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- e-Nabız Kartı -->
                        <div class="p-6 sm:p-8 rounded-3xl bg-rose-950/70 border-2 border-rose-400/60 shadow-2xl space-y-4 text-left">
                            <div class="flex items-center gap-4">
                                <div class="w-16 h-16 rounded-2xl bg-rose-500/30 text-rose-300 flex items-center justify-center text-3xl shadow-inner">
                                    <i class="fa-solid fa-notes-medical"></i>
                                </div>
                                <div>
                                    <span class="text-xs font-black text-rose-400 uppercase tracking-wider">KİŞİSEL SAĞLIK KAYDI</span>
                                    <h3 class="text-2xl sm:text-3xl font-black text-white">e-Nabız</h3>
                                </div>
                            </div>
                            <div class="p-4 bg-white/10 rounded-2xl border border-white/20">
                                <p class="text-lg sm:text-xl font-extrabold text-rose-200 leading-snug">
                                    “Sağlık bilgilerimize ulaşabileceğimiz dijital hizmet.”
                                </p>
                            </div>
                            <ul class="space-y-2 text-sm sm:text-base text-slate-200 font-medium">
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-rose-400"></i> Kan tahlili ve röntgen sonuçları</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-rose-400"></i> Geçmiş reçeteler ve kullanılan ilaçlar</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-rose-400"></i> Aşı takvimi ve doktor muayene kayıtları</li>
                            </ul>
                        </div>

                        <!-- e-Randevu (MHRS) Kartı -->
                        <div class="p-6 sm:p-8 rounded-3xl bg-cyan-950/70 border-2 border-cyan-400/60 shadow-2xl space-y-4 text-left">
                            <div class="flex items-center gap-4">
                                <div class="w-16 h-16 rounded-2xl bg-cyan-500/30 text-cyan-300 flex items-center justify-center text-3xl shadow-inner">
                                    <i class="fa-solid fa-calendar-check"></i>
                                </div>
                                <div>
                                    <span class="text-xs font-black text-cyan-400 uppercase tracking-wider">MHRS RANDEVU SİSTEMİ</span>
                                    <h3 class="text-2xl sm:text-3xl font-black text-white">e-Randevu</h3>
                                </div>
                            </div>
                            <div class="p-4 bg-white/10 rounded-2xl border border-white/20">
                                <p class="text-lg sm:text-xl font-extrabold text-cyan-200 leading-snug">
                                    “Sağlık hizmetleri için randevu işlemlerinde kullanılan dijital hizmet.”
                                </p>
                            </div>
                            <ul class="space-y-2 text-sm sm:text-base text-slate-200 font-medium">
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-cyan-400"></i> İstediğimiz hastaneyi ve hekimi seçme</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-cyan-400"></i> Uygun gün ve saati belirleme</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-cyan-400"></i> Hastanede saatlerce sıra beklemeden muayene olma</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 9 — E-VERGİ VE E-BANKACILIK
        {
            id: 9,
            title: "E-VERGİ VE E-BANKACILIK 💳",
            subtitle: "Finans ve Maliyede Güvenli Dijital Çözümler",
            topic: "FİNANS VE MALİYE",
            badge: "FİNANS",
            icon: "fa-solid fa-wallet",
            bgColor: "from-slate-900 via-indigo-950 to-blue-950",
            gradient: "from-slate-900 via-indigo-950 to-blue-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-6 my-auto py-2">
                    <p class="text-center text-base sm:text-xl text-indigo-200 font-semibold">
                        Ekonomik işlemlerimizi internetten güvenle ve saniyeler içinde tamamlarız:
                    </p>

                    <!-- İki Bölüm -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- e-Vergi Kartı -->
                        <div class="p-6 sm:p-8 rounded-3xl bg-amber-950/70 border-2 border-amber-400/60 shadow-2xl space-y-4 text-left">
                            <div class="flex items-center gap-4">
                                <div class="w-16 h-16 rounded-2xl bg-amber-500/30 text-amber-300 flex items-center justify-center text-3xl shadow-inner">
                                    <i class="fa-solid fa-file-invoice-dollar"></i>
                                </div>
                                <div>
                                    <span class="text-xs font-black text-amber-400 uppercase tracking-wider">GİB PORTALI</span>
                                    <h3 class="text-2xl sm:text-3xl font-black text-white">e-Vergi</h3>
                                </div>
                            </div>
                            <div class="p-4 bg-white/10 rounded-2xl border border-white/20">
                                <p class="text-lg sm:text-xl font-extrabold text-amber-200 leading-snug">
                                    “Vergi işlemleriyle ilgili dijital hizmet.”
                                </p>
                            </div>
                            <ul class="space-y-2 text-sm sm:text-base text-slate-200 font-medium">
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-amber-400"></i> İnteraktif Vergi Dairesi işlemleri</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-amber-400"></i> Harç ve vergi ödemelerini online yapma</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-amber-400"></i> Vergi borcu ve beyanname sorgulama</li>
                            </ul>
                        </div>

                        <!-- e-Bankacılık Kartı -->
                        <div class="p-6 sm:p-8 rounded-3xl bg-blue-950/70 border-2 border-blue-400/60 shadow-2xl space-y-4 text-left">
                            <div class="flex items-center gap-4">
                                <div class="w-16 h-16 rounded-2xl bg-blue-500/30 text-blue-300 flex items-center justify-center text-3xl shadow-inner">
                                    <i class="fa-solid fa-building-columns"></i>
                                </div>
                                <div>
                                    <span class="text-xs font-black text-blue-400 uppercase tracking-wider">DİJİTAL BANKACILIK</span>
                                    <h3 class="text-2xl sm:text-3xl font-black text-white">e-Bankacılık</h3>
                                </div>
                            </div>
                            <div class="p-4 bg-white/10 rounded-2xl border border-white/20">
                                <p class="text-lg sm:text-xl font-extrabold text-blue-200 leading-snug">
                                    “Bankacılık işlemlerini dijital ortamda yapmamıza yardımcı olur.”
                                </p>
                            </div>
                            <ul class="space-y-2 text-sm sm:text-base text-slate-200 font-medium">
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-blue-400"></i> Güvenli para transferi (Havale / FAST)</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-blue-400"></i> Elektrik, su, internet faturalarını ödeme</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-blue-400"></i> Hesap hareketlerini 7/24 takip etme</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 10 — DİJİTAL UYGULAMALARIN FAYDALARI
        {
            id: 10,
            title: "DİJİTAL UYGULAMALARIN FAYDALARI 🌟",
            subtitle: "Hayatımızı Kolaylaştıran 5 Temel Kazanım",
            topic: "UYGULAMA FAYDALARI",
            badge: "FAYDALAR",
            icon: "fa-solid fa-wand-magic-sparkles",
            bgColor: "from-indigo-900 via-purple-950 to-slate-900",
            gradient: "from-indigo-900 via-purple-950 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto w-full space-y-3 my-auto">
                    <!-- 2 Kolonlu Dengeli Izgara (Tam Ekrana Sığar) -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-800/80 border-2 border-yellow-400/40 flex items-center gap-3.5 shadow-lg hover:border-yellow-400 transition-all">
                            <div class="w-12 h-12 rounded-xl bg-yellow-400/20 text-yellow-300 flex items-center justify-center text-2xl shrink-0">
                                <i class="fa-solid fa-stopwatch"></i>
                            </div>
                            <span class="text-base sm:text-lg md:text-xl font-black text-white">
                                ⏱ <strong class="text-yellow-300">Zaman</strong> kazandırabilir.
                            </span>
                        </div>

                        <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-800/80 border-2 border-cyan-400/40 flex items-center gap-3.5 shadow-lg hover:border-cyan-400 transition-all">
                            <div class="w-12 h-12 rounded-xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center text-2xl shrink-0">
                                <i class="fa-solid fa-laptop"></i>
                            </div>
                            <span class="text-base sm:text-lg md:text-xl font-black text-white">
                                💻 İşlemleri <strong class="text-cyan-300">kolaylaştırabilir</strong>.
                            </span>
                        </div>

                        <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-800/80 border-2 border-emerald-400/40 flex items-center gap-3.5 shadow-lg hover:border-emerald-400 transition-all">
                            <div class="w-12 h-12 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center text-2xl shrink-0">
                                <i class="fa-solid fa-globe"></i>
                            </div>
                            <span class="text-base sm:text-lg md:text-xl font-black text-white">
                                🌐 Bilgiye ulaşmayı <strong class="text-emerald-300">kolaylaştırabilir</strong>.
                            </span>
                        </div>

                        <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-800/80 border-2 border-blue-400/40 flex items-center gap-3.5 shadow-lg hover:border-blue-400 transition-all">
                            <div class="w-12 h-12 rounded-xl bg-blue-400/20 text-blue-300 flex items-center justify-center text-2xl shrink-0">
                                <i class="fa-solid fa-house-laptop"></i>
                            </div>
                            <span class="text-base sm:text-lg md:text-xl font-black text-white">
                                🏠 Bazı işlemleri <strong class="text-blue-300">bulunduğumuz yerden</strong> yapmamızı sağlayabilir.
                            </span>
                        </div>

                        <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-800/80 border-2 border-rose-400/40 flex items-center justify-center gap-3.5 shadow-lg hover:border-rose-400 transition-all col-span-1 md:col-span-2">
                            <div class="w-12 h-12 rounded-xl bg-rose-400/20 text-rose-300 flex items-center justify-center text-2xl shrink-0">
                                <i class="fa-solid fa-user-shield"></i>
                            </div>
                            <span class="text-base sm:text-lg md:text-xl font-black text-white text-center">
                                🔐 Kişisel verilerin <strong class="text-rose-300">güvenliği</strong> konusunda bilinçlenmemize yardımcı olabilir.
                            </span>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 11 — DİJİTAL KİMLİK NEDİR?
        {
            id: 11,
            title: "DİJİTAL KİMLİK NEDİR? 🆔",
            subtitle: "Sanal Dünyadaki Temsilcimiz",
            topic: "DİJİTAL KİMLİK",
            badge: "KİMLİK",
            icon: "fa-solid fa-id-card",
            bgColor: "from-blue-800 via-indigo-950 to-slate-900",
            gradient: "from-blue-800 via-indigo-950 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-6xl mx-auto my-auto py-2">
                    <div class="md:col-span-7 space-y-5 text-left">
                        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 font-black text-xs uppercase tracking-wider border border-cyan-400/40">
                            <i class="fa-solid fa-fingerprint"></i> SANAL PROFİLİMİZ
                        </div>

                        <!-- Büyük Tanım (En az 26 punto) -->
                        <div class="p-6 bg-white/10 backdrop-blur-md rounded-3xl border-2 border-cyan-400/50 shadow-2xl">
                            <p class="text-2xl sm:text-3xl md:text-[30px] font-black text-white leading-relaxed">
                                “İnternette bizi temsil eden <span class="text-yellow-300">bilgiler</span> ve <span class="text-cyan-300">hesaplar</span> dijital kimliğimizin bir parçasıdır.”
                            </p>
                        </div>

                        <div class="p-4 bg-indigo-950/70 rounded-2xl border border-indigo-400/30 space-y-2">
                            <div class="text-xs uppercase font-extrabold text-yellow-300 flex items-center gap-2">
                                <i class="fa-solid fa-arrows-left-right"></i> Gerçek Hayat ➔ Dijital Dünya
                            </div>
                            <p class="text-sm sm:text-base text-slate-200">
                                Gerçek hayatta adımız, soyadımız ve kimlik kartımız vardır. İnternette ise kullanıcı adımız, avatarımız ve profil bilgilerimiz bizi temsil eder.
                            </p>
                        </div>
                    </div>

                    <!-- Görsel Alanı (dijital_kimlik.jpg) -->
                    <div class="md:col-span-5 flex justify-center">
                        <div class="relative group rounded-3xl overflow-hidden border-4 border-cyan-400/50 shadow-2xl bg-slate-900/50 w-full max-w-md">
                            <img src="assets/slides/dijital_kimlik.jpg" alt="Dijital Kimlik Avatarı" class="w-full max-h-[380px] sm:max-h-[440px] md:max-h-[470px] object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-4">
                                <span class="text-xs sm:text-sm font-bold text-cyan-300">
                                    👤 Gerçek Öğrenci ➔ Dijital Avatar Profili
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 12 — DİJİTAL KİMLİĞİMİZİ OLUŞTURANLAR
        {
            id: 12,
            title: "DİJİTAL KİMLİĞİMİZİ OLUŞTURANLAR 🧩",
            subtitle: "Sanal Dünyada Bizi Yansıtan Parçalar",
            topic: "KİMLİK BİLEŞENLERİ",
            badge: "BİLEŞENLER",
            icon: "fa-solid fa-puzzle-piece",
            bgColor: "from-indigo-900 via-purple-900 to-slate-900",
            gradient: "from-indigo-900 via-purple-900 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-6 my-auto py-2">
                    <!-- Büyük İkonlarla 6 Parça -->
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                        <div class="p-5 rounded-2xl bg-slate-800/90 border-2 border-indigo-400/40 flex items-center gap-3.5 shadow-lg">
                            <div class="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-2xl shrink-0">
                                <i class="fa-solid fa-user"></i>
                            </div>
                            <span class="text-lg sm:text-xl font-black text-white">Kullanıcı adı</span>
                        </div>

                        <div class="p-5 rounded-2xl bg-slate-800/90 border-2 border-pink-400/40 flex items-center gap-3.5 shadow-lg">
                            <div class="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center text-2xl shrink-0">
                                <i class="fa-solid fa-image"></i>
                            </div>
                            <span class="text-lg sm:text-xl font-black text-white">Profil fotoğrafı</span>
                        </div>

                        <div class="p-5 rounded-2xl bg-slate-800/90 border-2 border-cyan-400/40 flex items-center gap-3.5 shadow-lg">
                            <div class="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl shrink-0">
                                <i class="fa-solid fa-hashtag"></i>
                            </div>
                            <span class="text-lg sm:text-xl font-black text-white">Sosyal medya hesabı</span>
                        </div>

                        <div class="p-5 rounded-2xl bg-slate-800/90 border-2 border-emerald-400/40 flex items-center gap-3.5 shadow-lg">
                            <div class="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl shrink-0">
                                <i class="fa-solid fa-gamepad"></i>
                            </div>
                            <span class="text-lg sm:text-xl font-black text-white">Oyun hesabı</span>
                        </div>

                        <div class="p-5 rounded-2xl bg-slate-800/90 border-2 border-amber-400/40 flex items-center gap-3.5 shadow-lg">
                            <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl shrink-0">
                                <i class="fa-solid fa-address-card"></i>
                            </div>
                            <span class="text-lg sm:text-xl font-black text-white">Profil bilgileri</span>
                        </div>

                        <div class="p-5 rounded-2xl bg-slate-800/90 border-2 border-rose-400/40 flex items-center gap-3.5 shadow-lg">
                            <div class="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-2xl shrink-0">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <span class="text-lg sm:text-xl font-black text-white">E-posta adresi</span>
                        </div>
                    </div>

                    <!-- Ana Mesaj (En az 26 punto) -->
                    <div class="p-5 sm:p-6 bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 rounded-2xl border-2 border-yellow-400/60 shadow-xl text-center">
                        <p class="text-xl sm:text-2xl md:text-[26px] font-black text-yellow-300">
                            “İnternette bıraktığımız bilgiler bizi temsil edebilir.”
                        </p>
                    </div>
                </div>
            `
        },

        // SLAYT 13 — DİJİTAL AYAK İZİ NEDİR?
        {
            id: 13,
            title: "DİJİTAL AYAK İZİ NEDİR? 👣",
            subtitle: "İnternette Bıraktığımız Kalıcı İzler",
            topic: "DİJİTAL AYAK İZİ",
            badge: "AYAK İZİ",
            icon: "fa-solid fa-shoe-prints",
            bgColor: "from-blue-900 via-indigo-950 to-slate-900",
            gradient: "from-blue-900 via-indigo-950 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-6xl mx-auto my-auto py-2">
                    <div class="md:col-span-7 space-y-5 text-left">
                        <!-- Tanım (En az 26 punto) -->
                        <div class="p-6 bg-white/10 backdrop-blur-md rounded-3xl border-2 border-cyan-400/50 shadow-2xl">
                            <p class="text-xl sm:text-2xl md:text-[26px] font-black text-white leading-relaxed">
                                “İnternette yaptığımız işlemler sonucunda bıraktığımız dijital izlere <span class="text-cyan-300 underline underline-offset-4">dijital ayak izi</span> denir.”
                            </p>
                        </div>

                        <!-- Örnekler (Fotoğraf, Yorum, Video, Arama, Web sitesi, Uygulama) -->
                        <div>
                            <div class="text-xs font-black text-yellow-300 uppercase tracking-widest mb-2.5">
                                DİJİTAL AYAK İZİNE ÖRNEKLER:
                            </div>
                            <div class="grid grid-cols-3 gap-2.5 text-center">
                                <div class="p-3 bg-slate-800/80 rounded-xl border border-cyan-400/30 text-slate-100 font-bold text-sm sm:text-base flex items-center justify-center gap-2">
                                    <i class="fa-solid fa-camera text-cyan-400"></i> Fotoğraf
                                </div>
                                <div class="p-3 bg-slate-800/80 rounded-xl border border-cyan-400/30 text-slate-100 font-bold text-sm sm:text-base flex items-center justify-center gap-2">
                                    <i class="fa-solid fa-comment text-emerald-400"></i> Yorum
                                </div>
                                <div class="p-3 bg-slate-800/80 rounded-xl border border-cyan-400/30 text-slate-100 font-bold text-sm sm:text-base flex items-center justify-center gap-2">
                                    <i class="fa-solid fa-video text-rose-400"></i> Video
                                </div>
                                <div class="p-3 bg-slate-800/80 rounded-xl border border-cyan-400/30 text-slate-100 font-bold text-sm sm:text-base flex items-center justify-center gap-2">
                                    <i class="fa-solid fa-magnifying-glass text-yellow-400"></i> Arama
                                </div>
                                <div class="p-3 bg-slate-800/80 rounded-xl border border-cyan-400/30 text-slate-100 font-bold text-sm sm:text-base flex items-center justify-center gap-2">
                                    <i class="fa-solid fa-globe text-blue-400"></i> Web sitesi
                                </div>
                                <div class="p-3 bg-slate-800/80 rounded-xl border border-cyan-400/30 text-slate-100 font-bold text-sm sm:text-base flex items-center justify-center gap-2">
                                    <i class="fa-solid fa-mobile-screen text-purple-400"></i> Uygulama
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Görsel Alanı (dijital_ayak_izi.jpg) -->
                    <div class="md:col-span-5 flex justify-center">
                        <div class="relative group rounded-3xl overflow-hidden border-4 border-cyan-400/50 shadow-2xl bg-slate-900/50 w-full max-w-md">
                            <img src="assets/slides/dijital_ayak_izi.jpg" alt="Dijital Ayak İzi" class="w-full max-h-[380px] sm:max-h-[440px] md:max-h-[470px] object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-4">
                                <span class="text-xs sm:text-sm font-bold text-yellow-300">
                                    👣 İnternetteki Her Adım Kalıcı Bir İz Bırakır!
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 14 — AKTİF DİJİTAL AYAK İZİ
        {
            id: 14,
            title: "AKTİF DİJİTAL AYAK İZİ 👣",
            subtitle: "Ben Bilerek Oluşturuyorum!",
            topic: "AYAK İZİ TÜRLERİ",
            badge: "AKTİF İZ",
            icon: "fa-solid fa-user-pen",
            bgColor: "from-blue-900 via-indigo-900 to-slate-900",
            gradient: "from-blue-900 via-indigo-900 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-6 my-auto py-2">
                    <!-- Başlık & Tanım (En az 26 punto) -->
                    <div class="p-6 bg-white/10 backdrop-blur-md rounded-3xl border-2 border-yellow-400/50 shadow-xl text-center space-y-2">
                        <span class="px-4 py-1 rounded-full bg-yellow-400/20 text-yellow-300 font-black text-xs uppercase tracking-wider border border-yellow-400/40">
                            BİLEREK VE İSTEYEREK
                        </span>
                        <p class="text-xl sm:text-2xl md:text-[26px] font-black text-white leading-relaxed">
                            “Kişinin bilerek yaptığı dijital işlemler sonucunda oluşan izlerdir.”
                        </p>
                    </div>

                    <!-- 3 Büyük Örnek Kartı -->
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div class="p-6 rounded-3xl bg-pink-950/70 border-2 border-pink-400/60 shadow-xl space-y-3 flex flex-col items-center text-center hover:scale-105 transition-all">
                            <div class="w-20 h-20 rounded-3xl bg-pink-500/20 text-pink-300 flex items-center justify-center text-5xl shadow-inner">
                                <i class="fa-solid fa-camera-retro"></i>
                            </div>
                            <h3 class="text-xl sm:text-2xl font-black text-white">📷 Fotoğraf Paylaşmak</h3>
                            <p class="text-xs sm:text-sm text-pink-200">Sosyal medyaya resim yüklediğimizde</p>
                        </div>

                        <div class="p-6 rounded-3xl bg-emerald-950/70 border-2 border-emerald-400/60 shadow-xl space-y-3 flex flex-col items-center text-center hover:scale-105 transition-all">
                            <div class="w-20 h-20 rounded-3xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-5xl shadow-inner">
                                <i class="fa-solid fa-comment-dots"></i>
                            </div>
                            <h3 class="text-xl sm:text-2xl font-black text-white">💬 Yorum Yazmak</h3>
                            <p class="text-xs sm:text-sm text-emerald-200">Bir içeriğin altına fikir belirttiğimizde</p>
                        </div>

                        <div class="p-6 rounded-3xl bg-cyan-950/70 border-2 border-cyan-400/60 shadow-xl space-y-3 flex flex-col items-center text-center hover:scale-105 transition-all">
                            <div class="w-20 h-20 rounded-3xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-5xl shadow-inner">
                                <i class="fa-solid fa-cloud-arrow-up"></i>
                            </div>
                            <h3 class="text-xl sm:text-2xl font-black text-white">🎥 Video Yüklemek</h3>
                            <p class="text-xs sm:text-sm text-cyan-200">Kendi kanalımıza video eklediğimizde</p>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 15 — PASİF DİJİTAL AYAK İZİ
        {
            id: 15,
            title: "PASİF DİJİTAL AYAK İZİ 👣",
            subtitle: "Ben Farkında Olmadan Oluşabilir!",
            topic: "AYAK İZİ TÜRLERİ",
            badge: "PASİF İZ",
            icon: "fa-solid fa-ghost",
            bgColor: "from-slate-900 via-purple-950 to-indigo-950",
            gradient: "from-slate-900 via-purple-950 to-indigo-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-6 my-auto py-2">
                    <!-- Başlık & Tanım (En az 26 punto) -->
                    <div class="p-6 bg-white/10 backdrop-blur-md rounded-3xl border-2 border-purple-400/50 shadow-xl text-center space-y-2">
                        <span class="px-4 py-1 rounded-full bg-purple-400/20 text-purple-300 font-black text-xs uppercase tracking-wider border border-purple-400/40">
                            ARKA PLANDA VE SESSİZCE
                        </span>
                        <p class="text-xl sm:text-2xl md:text-[26px] font-black text-white leading-relaxed">
                            “Kişinin doğrudan paylaşım yapmadan oluşturduğu dijital izlerdir.”
                        </p>
                    </div>

                    <!-- 3 Büyük Örnek Kartı -->
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div class="p-6 rounded-3xl bg-indigo-950/70 border-2 border-indigo-400/60 shadow-xl space-y-3 flex flex-col items-center text-center hover:scale-105 transition-all">
                            <div class="w-20 h-20 rounded-3xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-5xl shadow-inner">
                                <i class="fa-solid fa-compass"></i>
                            </div>
                            <h3 class="text-xl sm:text-2xl font-black text-white">🌐 Web Sitesi Ziyareti</h3>
                            <p class="text-xs sm:text-sm text-indigo-200">Gezindiğimiz siteler ve çerezler</p>
                        </div>

                        <div class="p-6 rounded-3xl bg-amber-950/70 border-2 border-amber-400/60 shadow-xl space-y-3 flex flex-col items-center text-center hover:scale-105 transition-all">
                            <div class="w-20 h-20 rounded-3xl bg-amber-500/20 text-amber-300 flex items-center justify-center text-5xl shadow-inner">
                                <i class="fa-solid fa-magnifying-glass-arrow-right"></i>
                            </div>
                            <h3 class="text-xl sm:text-2xl font-black text-white">🔎 İnternette Arama</h3>
                            <p class="text-xs sm:text-sm text-amber-200">Arama motoruna yazdığımız sorgular</p>
                        </div>

                        <div class="p-6 rounded-3xl bg-cyan-950/70 border-2 border-cyan-400/60 shadow-xl space-y-3 flex flex-col items-center text-center hover:scale-105 transition-all">
                            <div class="w-20 h-20 rounded-3xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-5xl shadow-inner">
                                <i class="fa-solid fa-mobile-screen-button"></i>
                            </div>
                            <h3 class="text-xl sm:text-2xl font-black text-white">📱 Uygulamalar</h3>
                            <p class="text-xs sm:text-sm text-cyan-200">Konum ve cihaz kullanım verileri</p>
                        </div>
                    </div>

                    <!-- Fark Vurgu Bandı -->
                    <div class="p-4 bg-gradient-to-r from-blue-900/60 to-purple-900/60 rounded-2xl border border-white/20 text-center text-sm sm:text-base font-bold text-yellow-300">
                        ⚡ <strong>FARK:</strong> Aktif iz kendi isteğinle paylaştığındır. Pasif iz ise arkanda otomatik birikendir!
                    </div>
                </div>
            `
        },

        // SLAYT 16 — DİJİTAL AYAK İZİMİ NASIL KORURUM?
        {
            id: 16,
            title: "DİJİTAL AYAK İZİMİ NASIL KORURUM? 🛡️",
            subtitle: "Güvenli ve Bilinçli İnternet İçin 5 Altın Önlem",
            topic: "GÜVENLİK VE KORUMA",
            badge: "KORUMA",
            icon: "fa-solid fa-user-shield",
            bgColor: "from-blue-900 via-indigo-950 to-slate-900",
            gradient: "from-blue-900 via-indigo-950 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-6xl mx-auto my-auto py-2">
                    <!-- 5 Kural Sol Sütun (En az 26 punto) -->
                    <div class="md:col-span-7 space-y-3 text-left">
                        <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-800/80 border-2 border-emerald-400/40 flex items-center gap-3.5 shadow-md">
                            <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl shrink-0 font-black">1</div>
                            <span class="text-lg sm:text-xl md:text-[23px] font-black text-white">Güçlü şifreler kullan.</span>
                        </div>

                        <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-800/80 border-2 border-rose-400/40 flex items-center gap-3.5 shadow-md">
                            <div class="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-xl shrink-0 font-black">2</div>
                            <span class="text-lg sm:text-xl md:text-[23px] font-black text-white">Kişisel bilgilerini herkesle paylaşma.</span>
                        </div>

                        <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-800/80 border-2 border-cyan-400/40 flex items-center gap-3.5 shadow-md">
                            <div class="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xl shrink-0 font-black">3</div>
                            <span class="text-lg sm:text-xl md:text-[23px] font-black text-white">Gizlilik ayarlarını kontrol et.</span>
                        </div>

                        <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-800/80 border-2 border-amber-400/40 flex items-center gap-3.5 shadow-md">
                            <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl shrink-0 font-black">4</div>
                            <span class="text-lg sm:text-xl md:text-[23px] font-black text-white">Kullanmadığın hesap ve uygulamaları sil.</span>
                        </div>

                        <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-800/80 border-2 border-purple-400/40 flex items-center gap-3.5 shadow-md">
                            <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl shrink-0 font-black">5</div>
                            <span class="text-lg sm:text-xl md:text-[23px] font-black text-white">Paylaşmadan önce düşün.</span>
                        </div>
                    </div>

                    <!-- Görsel Alanı (guvenlik_kalkani.jpg) -->
                    <div class="md:col-span-5 flex justify-center">
                        <div class="relative group rounded-3xl overflow-hidden border-4 border-emerald-400/50 shadow-2xl bg-slate-900/50 w-full max-w-md">
                            <img src="assets/slides/guvenlik_kalkani.jpg" alt="Dijital Güvenlik Kalkanı" class="w-full max-h-[380px] sm:max-h-[440px] md:max-h-[470px] object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-4">
                                <span class="text-xs sm:text-sm font-bold text-emerald-300">
                                    🛡️ Siber Güvenlik Kalkanı ile İzini Koru!
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 17 — HANGİSİ DOĞRU?
        {
            id: 17,
            title: "HANGİSİ DOĞRU? BİRLİKTE CEVAPLAYALIM! 🤔",
            subtitle: "Öğrenciyi Derse Dahil Eden İnteraktif Soru Alanı",
            topic: "İNTERAKTİF TARTIŞMA",
            badge: "SORU-CEVAP",
            icon: "fa-solid fa-circle-question",
            bgColor: "from-indigo-950 via-slate-900 to-blue-900",
            gradient: "from-indigo-950 via-slate-900 to-blue-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 text-left my-auto py-1">
                    <p class="text-center text-sm sm:text-base text-yellow-300 font-bold mb-2">
                        👇 Soruları sınıfla birlikte tartışın, doğru şıkka dokunarak cevabı ve açıklamayı açın!
                    </p>

                    <!-- SORU 1 -->
                    <div class="p-4 sm:p-5 rounded-2xl bg-slate-800/90 border-2 border-indigo-400/40 shadow-xl space-y-3">
                        <div class="text-base sm:text-xl font-black text-white flex items-center gap-2">
                            <span class="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-sm shrink-0">1</span>
                            <span>“Arkadaşımın fotoğrafını izinsiz paylaşabilir miyim?”</span>
                        </div>
                        <div class="grid grid-cols-2 gap-3" id="s17-q1-buttons">
                            <button onclick="app.handleSlideChoice(this, false, 's17-fb1', 'Kişisel verilerin korunması ve arkadaşımızın özel hayatına saygı gereği izinsiz fotoğraf paylaşılmaz!')" class="py-3 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white font-black text-base sm:text-lg transition-all flex items-center justify-center gap-2">
                                <span>A) Evet</span>
                            </button>
                            <button onclick="app.handleSlideChoice(this, true, 's17-fb1', 'Tebrikler! Hiç kimsenin fotoğrafı veya bilgisi izinsiz olarak internette paylaşılamaz!')" class="py-3 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white font-black text-base sm:text-lg transition-all flex items-center justify-center gap-2">
                                <span>B) Hayır</span>
                            </button>
                        </div>
                        <div id="s17-fb1" class="hidden"></div>
                    </div>

                    <!-- SORU 2 -->
                    <div class="p-4 sm:p-5 rounded-2xl bg-slate-800/90 border-2 border-indigo-400/40 shadow-xl space-y-3">
                        <div class="text-base sm:text-xl font-black text-white flex items-center gap-2">
                            <span class="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-sm shrink-0">2</span>
                            <span>“Güvenilir bir bilim sitesinin bağlantısını paylaşabilir miyim?”</span>
                        </div>
                        <div class="grid grid-cols-2 gap-3" id="s17-q2-buttons">
                            <button onclick="app.handleSlideChoice(this, true, 's17-fb2', 'Tebrikler! Doğrulanmış ve faydalı bilimsel bilgileri paylaşmak iyi bir dijital vatandaşlık örneğidir.')" class="py-3 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white font-black text-base sm:text-lg transition-all flex items-center justify-center gap-2">
                                <span>A) Evet</span>
                            </button>
                            <button onclick="app.handleSlideChoice(this, false, 's17-fb2', 'Güvenilir bilimsel kaynakları paylaşmak faydalıdır, bilgi paylaşımında sakınca yoktur.')" class="py-3 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white font-black text-base sm:text-lg transition-all flex items-center justify-center gap-2">
                                <span>B) Hayır</span>
                            </button>
                        </div>
                        <div id="s17-fb2" class="hidden"></div>
                    </div>

                    <!-- SORU 3 -->
                    <div class="p-4 sm:p-5 rounded-2xl bg-slate-800/90 border-2 border-indigo-400/40 shadow-xl space-y-3">
                        <div class="text-base sm:text-xl font-black text-white flex items-center gap-2">
                            <span class="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-sm shrink-0">3</span>
                            <span>“Şifremi arkadaşlarımla paylaşmalı mıyım?”</span>
                        </div>
                        <div class="grid grid-cols-2 gap-3" id="s17-q3-buttons">
                            <button onclick="app.handleSlideChoice(this, false, 's17-fb3', 'Şifreler sadece bize özeldir. En yakın arkadaşlarımızla bile şifre paylaşılmamalıdır!')" class="py-3 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white font-black text-base sm:text-lg transition-all flex items-center justify-center gap-2">
                                <span>A) Evet</span>
                            </button>
                            <button onclick="app.handleSlideChoice(this, true, 's17-fb3', 'Harika! Şifreler kişiye özeldir; sadece anne-babamızla güvenlik amacıyla paylaşılabilir.')" class="py-3 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white font-black text-base sm:text-lg transition-all flex items-center justify-center gap-2">
                                <span>B) Hayır</span>
                            </button>
                        </div>
                        <div id="s17-fb3" class="hidden"></div>
                    </div>
                </div>
            `
        },

        // SLAYT 18 — DİJİTAL VATANDAŞIN 5 ALTIN KURALI
        {
            id: 18,
            title: "DİJİTAL VATANDAŞIN 5 ALTIN KURALI 🏆",
            subtitle: "Ders Sonu Özeti ve Çıkarımlar",
            topic: "KAPANIŞ VE ÖZET",
            badge: "KAPANIŞ",
            icon: "fa-solid fa-award",
            bgColor: "from-blue-900 via-indigo-950 to-slate-900",
            gradient: "from-blue-900 via-indigo-950 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2 text-center">
                    <!-- 5 Kural (Büyük ve Belirgin) -->
                    <div class="grid grid-cols-1 sm:grid-cols-5 gap-2.5 text-center">
                        <div class="p-3.5 rounded-2xl bg-pink-950/80 border-2 border-pink-400/50 shadow-lg flex flex-col items-center justify-center">
                            <span class="text-xs font-black text-pink-400">1. KURAL</span>
                            <span class="text-base sm:text-lg font-black text-white mt-1">SAYGILI OL.</span>
                        </div>
                        <div class="p-3.5 rounded-2xl bg-cyan-950/80 border-2 border-cyan-400/50 shadow-lg flex flex-col items-center justify-center">
                            <span class="text-xs font-black text-cyan-400">2. KURAL</span>
                            <span class="text-base sm:text-lg font-black text-white mt-1">GÜVENLİ DAVRAN.</span>
                        </div>
                        <div class="p-3.5 rounded-2xl bg-amber-950/80 border-2 border-amber-400/50 shadow-lg flex flex-col items-center justify-center">
                            <span class="text-xs font-black text-amber-400">3. KURAL</span>
                            <span class="text-base sm:text-lg font-black text-white mt-1">BİLGİLERİNİ KORU.</span>
                        </div>
                        <div class="p-3.5 rounded-2xl bg-purple-950/80 border-2 border-purple-400/50 shadow-lg flex flex-col items-center justify-center">
                            <span class="text-xs font-black text-purple-400">4. KURAL</span>
                            <span class="text-base sm:text-lg font-black text-white mt-1">ÖNCE DÜŞÜN.</span>
                        </div>
                        <div class="p-3.5 rounded-2xl bg-emerald-950/80 border-2 border-emerald-400/50 shadow-lg flex flex-col items-center justify-center">
                            <span class="text-xs font-black text-emerald-400">5. KURAL</span>
                            <span class="text-base sm:text-lg font-black text-white mt-1">AYAK İZİNİ BİL.</span>
                        </div>
                    </div>

                    <!-- Altına Büyük Slogan -->
                    <div class="p-4 sm:p-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl border-2 border-yellow-400/70 shadow-2xl text-center space-y-1">
                        <h2 class="text-2xl sm:text-3xl md:text-[34px] font-black text-yellow-300 tracking-wide uppercase drop-shadow-md">
                            “BİLİNÇLİ KULLAN • GÜVENDE KAL • SAYGILI OL”
                        </h2>
                    </div>

                    <!-- En Altta İnteraktif Tamamlama Alanı -->
                    <div class="p-4 sm:p-5 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-white/20 text-center shadow-lg">
                        <p class="text-lg sm:text-xl md:text-2xl font-black text-white flex items-center justify-center gap-2 flex-wrap">
                            <span>✨ Bugün öğrendiğim en önemli şey:</span>
                            <span class="text-yellow-300 underline decoration-wavy decoration-yellow-400 font-black">__________________________</span>
                        </p>
                    </div>

                    <!-- Butonlar & İmza -->
                    <div class="flex justify-center items-center gap-4 flex-wrap pt-1 text-xs text-slate-400">
                        <button onclick="app.switchTab('quiz')" class="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg flex items-center gap-2 transition-all">
                            <i class="fa-solid fa-clipboard-check"></i> Pekiştirme Testine Geç
                        </button>
                        <button onclick="app.switchTab('games')" class="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl shadow-lg flex items-center gap-2 transition-all">
                            <i class="fa-solid fa-gamepad"></i> Tekrar Oyunlarına Başla 🎮
                        </button>
                        <span class="text-yellow-300 font-semibold">👨‍🏫 Öğretmen Bozok • Bozok Bilişim Portalı</span>
                    </div>
                </div>
            `
        }
    ],

    // ========================================================
    // ========================================================
    // 📄 2. HAFTALIK ÇALIŞMA KAĞITLARI & DİJİTAL METİNLER
    // ========================================================
    worksheetDocs: {
        images: {
            konu: "assets/worksheets/1.3_konu.png",
            soru: "assets/worksheets/1.3_soru.png",
            cevap: "assets/worksheets/1.3_cevap.png"
        },
        konuHtml: `
        <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-indigo-500/50 shadow-2xl space-y-6">
            <!-- Belge Başlığı -->
            <div class="border-b-2 border-indigo-500/40 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                    <span class="px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black rounded-lg text-xs tracking-wider uppercase">1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri</span>
                    <h1 class="text-2xl sm:text-3xl font-black text-white mt-1">3. HAFTA: DİJİTAL VATANDAŞLIK UYGULAMALARI</h1>
                    <p class="text-xs text-indigo-200 font-semibold">T.C. Millî Eğitim Bakanlığı 5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi</p>
                </div>
                <div class="text-right text-xs text-yellow-300 font-bold bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <div>👨‍🏫 Öğretmen: Bozok</div>
                    <div>🎯 Kazanım: BTY.5.1.3</div>
                </div>
            </div>

            <!-- Konu Özeti -->
            <div class="bg-indigo-950/60 rounded-2xl p-5 border border-indigo-400/30 space-y-2">
                <h3 class="text-lg font-bold text-yellow-300 flex items-center gap-2">
                    <i class="fa-solid fa-book-open text-indigo-400"></i> Bu Hafta Ne Öğreniyoruz?
                </h3>
                <p class="text-sm text-indigo-100 leading-relaxed">
                    İnternet ortamında haklarımızı, sorumluluklarımızı ve güvenliğimizi bilmek en temel vatandaşlık bilincidir. Bu hafta; dijital vatandaş ve dijital kimliğin ne olduğunu, internette bıraktığımız aktif ve pasif dijital ayak izlerini, e-Devlet, e-Okul, e-Nabız, MHRS, e-Vergi, EBA ve e-Bankacılık gibi resmi dijital vatandaşlık uygulamalarını ve dijital nezaket kurallarını öğreniyoruz.
                </p>
            </div>

            <!-- Bölüm 1: Dijital Vatandaş Dedektifi -->
            <div class="p-5 bg-slate-800/90 rounded-2xl border border-slate-700 space-y-3">
                <h3 class="text-base font-bold text-cyan-300 flex items-center gap-2">
                    <i class="fa-solid fa-user-secret text-cyan-400"></i> 1. Dijital Vatandaş Dedektifi (Uygun Davranış İlkeleri)
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div class="p-3 bg-emerald-950/40 rounded-xl border border-emerald-500/40 space-y-1">
                        <span class="font-bold text-emerald-400 flex items-center gap-1.5">
                            <i class="fa-solid fa-circle-check"></i> UYGUN DAVRANIŞLAR:
                        </span>
                        <ul class="list-disc list-inside text-slate-300 space-y-0.5">
                            <li>En az 8 karakterli, güçlü ve tahmin edilemez şifre oluşturmak.</li>
                            <li>Güvenilir ve teyit edilmiş kaynaklardan araştırma yapmak.</li>
                            <li>İnternette başkalarının fikirlerine, telif haklarına ve emeğine saygı duymak.</li>
                        </ul>
                    </div>
                    <div class="p-3 bg-rose-950/40 rounded-xl border border-rose-500/40 space-y-1">
                        <span class="font-bold text-rose-400 flex items-center gap-1.5">
                            <i class="fa-solid fa-circle-xmark"></i> UYGUN OLMAYAN (RİSKLİ) DAVRANIŞLAR:
                        </span>
                        <ul class="list-disc list-inside text-slate-300 space-y-0.5">
                            <li>Arkadaşımızın fotoğrafını veya videosunu izinsiz paylaşmak.</li>
                            <li>Yazışmalarda hakaret, kaba söz kullanmak veya siber zorbalık yapmak.</li>
                            <li>Tanımadığımız kişilerle T.C. kimlik, adres ve telefon bilgilerini paylaşmak.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Bölüm 2: Dijital Vatandaşlık Uygulamaları Tablosu -->
            <div class="space-y-3">
                <h3 class="text-base font-bold text-yellow-400 flex items-center gap-2">
                    <i class="fa-solid fa-table text-yellow-400"></i> 2. Temel Dijital Vatandaşlık Uygulamaları (7 Ana Kapı)
                </h3>
                <div class="overflow-x-auto">
                    <table class="w-full text-xs text-left border-collapse border border-slate-700">
                        <thead class="bg-slate-800 text-yellow-300 font-bold uppercase">
                            <tr>
                                <th class="p-3 border border-slate-700">Uygulama Adı</th>
                                <th class="p-3 border border-slate-700">Alanı</th>
                                <th class="p-3 border border-slate-700">Vatandaşın İhtiyacı & Sağlanan Hizmet</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-800 text-slate-200">
                            <tr class="hover:bg-slate-800/50">
                                <td class="p-3 border border-slate-700 font-bold text-blue-400">e-Okul</td>
                                <td class="p-3 border border-slate-700">Eğitim</td>
                                <td class="p-3 border border-slate-700">Sınav notları, devamsızlık durumu, karne ve ders çizelgesine ulaşmak.</td>
                            </tr>
                            <tr class="hover:bg-slate-800/50">
                                <td class="p-3 border border-slate-700 font-bold text-red-400">e-Devlet Kapısı</td>
                                <td class="p-3 border border-slate-700">Kamu Hizmetleri</td>
                                <td class="p-3 border border-slate-700">Kimlik, ikametgah, adli sicil ve tüm resmi kamu işlemlerini tek şifreyle 7/24 yapmak.</td>
                            </tr>
                            <tr class="hover:bg-slate-800/50">
                                <td class="p-3 border border-slate-700 font-bold text-emerald-400">e-Nabız</td>
                                <td class="p-3 border border-slate-700">Sağlık</td>
                                <td class="p-3 border border-slate-700">Geçmiş muayeneler, tahlil sonuçları, aşı ve reçete bilgilerini görüntülemek.</td>
                            </tr>
                            <tr class="hover:bg-slate-800/50">
                                <td class="p-3 border border-slate-700 font-bold text-teal-400">e-Randevu (MHRS)</td>
                                <td class="p-3 border border-slate-700">Sağlık</td>
                                <td class="p-3 border border-slate-700">Devlet hastanelerinden hekim ve klinik seçerek sıra beklemeden muayene randevusu almak.</td>
                            </tr>
                            <tr class="hover:bg-slate-800/50">
                                <td class="p-3 border border-slate-700 font-bold text-amber-400">e-Vergi</td>
                                <td class="p-3 border border-slate-700">Maliye / Kamu</td>
                                <td class="p-3 border border-slate-700">Vergi borcu sorgulama, harç yatırma ve vergi dairesi işlemlerini internetten yapmak.</td>
                            </tr>
                            <tr class="hover:bg-slate-800/50">
                                <td class="p-3 border border-slate-700 font-bold text-purple-400">EBA</td>
                                <td class="p-3 border border-slate-700">Eğitim</td>
                                <td class="p-3 border border-slate-700">Ders videolarına, interaktif testlere, dijital kitaplara ve eğitim içeriklerine ulaşmak.</td>
                            </tr>
                            <tr class="hover:bg-slate-800/50">
                                <td class="p-3 border border-slate-700 font-bold text-cyan-400">e-Bankacılık</td>
                                <td class="p-3 border border-slate-700">Bankacılık</td>
                                <td class="p-3 border border-slate-700">Para transferi, fatura ödeme ve bankacılık işlemlerini şubeye gitmeden gerçekleştirmek.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Bölüm 3 & 4: Dijital Kimlik & Ayak İzi -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <!-- Dijital Kimlik -->
                <div class="p-4 bg-slate-800 rounded-2xl border border-indigo-400/40 space-y-2">
                    <h4 class="font-bold text-indigo-300 text-sm flex items-center gap-1.5">
                        <i class="fa-solid fa-id-card"></i> 3. Dijital Kimliğimi Tanıyorum
                    </h4>
                    <p class="text-slate-300">
                        İnternette bizi temsil eden bilgilerin bütününe <strong>dijital kimlik</strong> denir:
                    </p>
                    <div class="grid grid-cols-2 gap-1.5 text-slate-200">
                        <div class="p-1.5 bg-slate-900 rounded-lg">👤 Ad - Soyad</div>
                        <div class="p-1.5 bg-slate-900 rounded-lg">🏷️ Kullanıcı Adı</div>
                        <div class="p-1.5 bg-slate-900 rounded-lg">🖼️ Profil Fotoğrafı</div>
                        <div class="p-1.5 bg-slate-900 rounded-lg">🎮 Oyun Hesabı</div>
                        <div class="p-1.5 bg-slate-900 rounded-lg">📱 Sosyal Medya Profili</div>
                        <div class="p-1.5 bg-slate-900 rounded-lg">✉️ E-posta Adresi</div>
                    </div>
                </div>

                <!-- Aktif vs Pasif Ayak İzi -->
                <div class="p-4 bg-slate-800 rounded-2xl border border-cyan-400/40 space-y-2">
                    <h4 class="font-bold text-cyan-300 text-sm flex items-center gap-1.5">
                        <i class="fa-solid fa-shoe-prints"></i> 4. Ayak İzini Yakala (Aktif vs. Pasif)
                    </h4>
                    <div class="space-y-1.5 text-slate-300">
                        <div class="p-2 bg-blue-950/50 rounded-xl border border-blue-400/30">
                            <span class="font-bold text-blue-300">🐾 Aktif Dijital Ayak İzi:</span>
                            Kendi isteğimizle bilerek oluşturduğumuz izlerdir. (Fotoğraf/video yüklemek, yorum yazmak, e-posta atmak, beğeni yapmak).
                        </div>
                        <div class="p-2 bg-cyan-950/50 rounded-xl border border-cyan-400/30">
                            <span class="font-bold text-cyan-300">🐾 Pasif Dijital Ayak İzi:</span>
                            Farkında olmadan arkada kalan izlerdir. (Web sitelerini ziyaret etmek, arama motorunda aramak, çerezler, konum bilgisi).
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bölüm 5 & 6 & 7: Düşün Kuralı, Güvenlik Kalkanı & 5 Kural -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div class="p-3.5 bg-slate-850 rounded-xl border border-slate-700 space-y-1">
                    <span class="font-bold text-yellow-300 block text-sm">5. Paylaşmadan Önce DÜŞÜN</span>
                    <p class="text-slate-300 leading-snug">D: Doğru mu? Ü: Üretken mi? Ş: Şefkatli mi? Ü: Üzücü mü? N: Nazik mi? Kişisel veriler (TC No, şifre, adres) ASLA paylaşılmaz!</p>
                </div>
                <div class="p-3.5 bg-slate-850 rounded-xl border border-slate-700 space-y-1">
                    <span class="font-bold text-emerald-300 block text-sm">6. Güvenlik Kalkanı</span>
                    <p class="text-slate-300 leading-snug">En az 8 karakterli güçlü şifre belirle, gizlilik ayarlarını 'özel' yap, tanınmayan link ve e-posta eklerine tıklama!</p>
                </div>
                <div class="p-3.5 bg-slate-850 rounded-xl border border-slate-700 space-y-1">
                    <span class="font-bold text-pink-300 block text-sm">7. Dijital Vatandaşın 5 Kuralı</span>
                    <p class="text-slate-300 leading-snug">1) Saygılı ol, 2) Güvenli davran, 3) Sorumluluk al, 4) Düşünerek paylaş, 5) Bilinçli kullan.</p>
                </div>
            </div>
        </div>
        `,
        soruHtml: `
        <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-indigo-500/50 shadow-2xl space-y-6">
            <div class="border-b-2 border-indigo-500/40 pb-4">
                <span class="px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black rounded-lg text-xs tracking-wider uppercase">3. Hafta Çalışma Kağıdı Soruları</span>
                <h1 class="text-2xl font-black text-white mt-1">DİJİTAL VATANDAŞLIK ETKİNLİK & PEKİŞTİRME SORULARI</h1>
            </div>

            <!-- Bölüm 1: Dedektif -->
            <div class="space-y-2">
                <h3 class="text-sm font-black text-cyan-300 uppercase">1. Dijital Vatandaş Dedektifi: Aşağıdaki davranışların yanına Uygun veya Uygun Değil yazınız:</h3>
                <div class="space-y-1.5 text-xs text-slate-200">
                    <p>1. Arkadaşımızın fotoğrafını izinsiz olarak sosyal medyada paylaşmak. ( ........................................ )</p>
                    <p>2. Şifremizi en az 8 karakterli; büyük-küçük harf, sayı ve sembol içeren güçlü şifrelerden seçmek. ( ........................................ )</p>
                    <p>3. İnternette fikirlerimizi belirtirken hakaret ve kaba sözler kullanmak. ( ........................................ )</p>
                    <p>4. İnternette araştırma yaparken bilgiyi güvenilir ve doğrulanmış kaynaklardan almak. ( ........................................ )</p>
                    <p>5. Sosyal medyada tanımadığımız kişilerle ev adresimizi ve kimlik numaramızı paylaşmak. ( ........................................ )</p>
                    <p>6. Başkalarının fikirlerine, telif haklarına ve emeğine saygı göstermek. ( ........................................ )</p>
                </div>
            </div>

            <!-- Bölüm 2: Eşleştirme -->
            <div class="space-y-2 pt-3 border-t border-slate-800">
                <h3 class="text-sm font-black text-yellow-300 uppercase">2. Dijital Vatandaşlık Uygulamasını Bul: Durumları doğru uygulamayla eşleştiriniz:</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-200">
                    <div class="space-y-1 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                        <p class="font-bold text-yellow-300">Vatandaşın Durumu & İhtiyacı:</p>
                        <p>1. Okul bilgilerime ulaşmak istiyorum.</p>
                        <p>2. Kimlik ve resmi işlem yapmak istiyorum.</p>
                        <p>3. Sağlık bilgilerimi görüntülemek istiyorum.</p>
                        <p>4. Hastane randevusu almak istiyorum.</p>
                        <p>5. Vergi işlemlerini yapmak istiyorum.</p>
                        <p>6. Eğitim içeriklerine ulaşmak istiyorum.</p>
                        <p>7. Banka işlemlerini yapmak istiyorum.</p>
                    </div>
                    <div class="space-y-1 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                        <p class="font-bold text-emerald-300">Kullanılacak Dijital Uygulama:</p>
                        <p>( ... ) e-Devlet</p>
                        <p>( ... ) e-Okul</p>
                        <p>( ... ) e-Nabız</p>
                        <p>( ... ) e-Randevu (MHRS)</p>
                        <p>( ... ) e-Vergi</p>
                        <p>( ... ) EBA</p>
                        <p>( ... ) e-Bankacılık</p>
                    </div>
                </div>
            </div>

            <!-- Bölüm 4: Aktif / Pasif Ayak İzi -->
            <div class="space-y-2 pt-3 border-t border-slate-800">
                <h3 class="text-sm font-black text-emerald-300 uppercase">3. Ayak İzini Yakala: Durumların yanına Aktif Ayak İzi mi, Pasif Ayak İzi mi olduğunu yazınız:</h3>
                <div class="space-y-1.5 text-xs text-slate-200">
                    <p>1. Kendi isteğimizle sosyal medyaya video yüklemek. ( ........................................ )</p>
                    <p>2. Bir web sitesini ziyaret ettiğimizde arka planda çerezlerin kaydedilmesi. ( ........................................ )</p>
                    <p>3. Arkadaşımızın paylaştığı fotoğrafın altına fikir belirten bir yorum yazmak. ( ........................................ )</p>
                    <p>4. Arama motorunda '5. Sınıf Bilişim Konuları' şeklinde arama yapmak. ( ........................................ )</p>
                </div>
            </div>

            <!-- Bölüm B: Doğru mu Yanlış mı? -->
            <div class="space-y-2 pt-3 border-t border-slate-800">
                <h3 class="text-sm font-black text-pink-300 uppercase">4. Doğru mu? Yanlış mı?:</h3>
                <div class="space-y-1.5 text-xs text-slate-200">
                    <p>( ... ) 1. İnternete yüklediğimiz bir fotoğrafı silsek bile başkaları tarafından kaydedilmiş olabilir.</p>
                    <p>( ... ) 2. e-Devlet şifremizi güvenliğimiz için arkadaşlarımızla ve sosyal medyada paylaşmalıyız.</p>
                    <p>( ... ) 3. Mesaj yazarken KELİMELERİN TAMAMINI BÜYÜK HARFLE YAZMAK bağırmak anlamına gelir.</p>
                    <p>( ... ) 4. e-Nabız geçmiş tahlil, röntgen ve aşı kayıtlarımıza ulaşmamızı sağlar.</p>
                </div>
            </div>
        </div>
        `,
        cevapHtml: `
        <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-emerald-500/50 shadow-2xl space-y-6">
            <div class="border-b-2 border-emerald-500/40 pb-4">
                <span class="px-3 py-1 bg-emerald-500/30 text-emerald-300 font-black rounded-lg text-xs tracking-wider uppercase">Cevap Anahtarı</span>
                <h1 class="text-2xl font-black text-white mt-1">3. HAFTA ÇALIŞMA KAĞIDI RESMÎ ÇÖZÜMLERİ</h1>
            </div>

            <!-- 1. Dedektif Çözümleri -->
            <div class="space-y-2">
                <h3 class="text-sm font-black text-cyan-300 uppercase">1. Dijital Vatandaş Dedektifi Çözümleri:</h3>
                <div class="space-y-1 text-xs text-slate-200">
                    <p>1. İzinsiz fotoğraf paylaşmak ➔ <strong class="text-rose-400">Uygun Değil</strong> (Kişisel hak ihlali)</p>
                    <p>2. Güçlü şifre oluşturmak ➔ <strong class="text-emerald-400">Uygun</strong> (Siber güvenlik)</p>
                    <p>3. Hakaret ve kaba dil kullanmak ➔ <strong class="text-rose-400">Uygun Değil</strong> (Dijital nezakete aykırı)</p>
                    <p>4. Güvenilir kaynaklardan araştırma yapmak ➔ <strong class="text-emerald-400">Uygun</strong> (Bilinçli kullanım)</p>
                    <p>5. Tanımadığı kişilerle adres/kimlik paylaşmak ➔ <strong class="text-rose-400">Uygun Değil</strong> (Güvenlik tehlikesi)</p>
                    <p>6. Başkalarının fikirlerine ve haklarına saygı duymak ➔ <strong class="text-emerald-400">Uygun</strong> (Vatandaşlık görevi)</p>
                </div>
            </div>

            <!-- 2. Eşleştirme Çözümleri -->
            <div class="space-y-2 pt-3 border-t border-slate-800">
                <h3 class="text-sm font-black text-yellow-300 uppercase">2. Dijital Vatandaşlık Uygulamasını Bul Çözümleri:</h3>
                <div class="space-y-1 text-xs text-slate-200">
                    <p>1. Okul bilgilerime ulaşmak istiyorum ➔ <strong class="text-blue-400">e-Okul</strong></p>
                    <p>2. Kimlik ve resmi işlem yapmak istiyorum ➔ <strong class="text-red-400">e-Devlet</strong></p>
                    <p>3. Sağlık bilgilerimi görüntülemek istiyorum ➔ <strong class="text-emerald-400">e-Nabız</strong></p>
                    <p>4. Hastane randevusu almak istiyorum ➔ <strong class="text-teal-400">e-Randevu (MHRS)</strong></p>
                    <p>5. Vergi işlemlerini yapmak istiyorum ➔ <strong class="text-amber-400">e-Vergi</strong></p>
                    <p>6. Eğitim içeriklerine ulaşmak istiyorum ➔ <strong class="text-purple-400">EBA</strong></p>
                    <p>7. Banka işlemlerini yapmak istiyorum ➔ <strong class="text-cyan-400">e-Bankacılık</strong></p>
                </div>
            </div>

            <!-- 3. Ayak İzi Çözümleri -->
            <div class="space-y-2 pt-3 border-t border-slate-800">
                <h3 class="text-sm font-black text-emerald-300 uppercase">3. Ayak İzini Yakala Çözümleri:</h3>
                <div class="space-y-1 text-xs text-slate-200">
                    <p>1. Sosyal medyaya video yüklemek ➔ <strong class="text-blue-300">Aktif Dijital Ayak İzi</strong> (İsteğimizle oluşturuldu)</p>
                    <p>2. Web sitesinde gezinirken çerez bırakmak ➔ <strong class="text-cyan-300">Pasif Dijital Ayak İzi</strong> (Arka planda kaydedildi)</p>
                    <p>3. Fotoğraf altına yorum yazmak ➔ <strong class="text-blue-300">Aktif Dijital Ayak İzi</strong> (İsteğimizle oluşturuldu)</p>
                    <p>4. Arama motorunda arama yapmak ➔ <strong class="text-cyan-300">Pasif Dijital Ayak İzi</strong> (Sistem geçmişe kaydetti)</p>
                </div>
            </div>

            <!-- 4. Doğru / Yanlış Çözümleri -->
            <div class="space-y-2 pt-3 border-t border-slate-800">
                <h3 class="text-sm font-black text-pink-300 uppercase">4. Doğru / Yanlış Çözümleri:</h3>
                <div class="space-y-1 text-xs text-slate-200">
                    <p>1. <strong>( D ) DOĞRU:</strong> İnternete yüklenen içerikler ekran görüntüsü alınarak saklanabilir, kalıcıdır.</p>
                    <p>2. <strong>( Y ) YANLIŞ:</strong> e-Devlet şifresi gizlidir, anne-baba dışındaki kimseyle paylaşılmaz.</p>
                    <p>3. <strong>( D ) DOĞRU:</strong> Büyük harflerle yazmak internet dilinde bağırmak anlamına gelir.</p>
                    <p>4. <strong>( D ) DOĞRU:</strong> e-Nabız Sağlık Bakanlığı'nın tahlil ve aşı takibi sistemidir.</p>
                </div>
            </div>
        </div>
        `
    },

    // ========================================================
    // ❓ 3. PEKİŞTİRME TESTİ & SORULARI
    // ========================================================
    questions: [
        // 0. İndeks: Kavram & Durum Eşleştirme Etkinliği
        {
            id: 1,
            type: "matching",
            title: "Dijital Vatandaşlık Uygulamalarını Eşleştirme",
            description: "Aşağıdaki vatandaşlık durumlarını kullanılması gereken resmi dijital uygulama ile eşleştiriniz:",
            pairs: [
                { left: "Okul bilgilerime, notlarıma ve devamsızlığıma ulaşmak istiyorum", right: "e-Okul Sistemi", leftIcon: "fa-solid fa-graduation-cap" },
                { left: "Kimlik, ikametgah ve resmi kamu işlemlerimi tek noktadan yapmak istiyorum", right: "e-Devlet Kapısı", leftIcon: "fa-solid fa-landmark" },
                { left: "Geçmiş tahlil, reçete ve aşı bilgilerimi görüntülemek istiyorum", right: "e-Nabız Sistemi", leftIcon: "fa-solid fa-heart-pulse" },
                { left: "Devlet hastanesinden hekim seçerek randevu almak istiyorum", right: "e-Randevu (MHRS)", leftIcon: "fa-solid fa-calendar-check" },
                { left: "Vergi borcu sorgulama ve harç ödeme işlemlerimi internetten yapmak istiyorum", right: "e-Vergi (İnteraktif Vergi Dairesi)", leftIcon: "fa-solid fa-file-invoice-dollar" },
                { left: "Ders videolarına, interaktif testlere ve dijital kitaplara ulaşmak istiyorum", right: "EBA Portalı", leftIcon: "fa-solid fa-book-open-reader" },
                { left: "Para transferi ve bankacılık işlemlerimi şubeye gitmeden yapmak istiyorum", right: "e-Bankacılık", leftIcon: "fa-solid fa-credit-card" }
            ]
        },

        // 1. İndeks: Doğru mu? Yanlış mı? Testi (app.js renderQuiz() bu indeksi okur)
        {
            id: 2,
            type: "true_false",
            title: "Doğru mu? Yanlış mı? Pekiştirme Etkinliği",
            description: "İfadeleri dikkatle okuyarak Doğru veya Yanlış butonuna dokununuz:",
            items: [
                {
                    statement: "Arkadaşımızın fotoğrafını kendisinden izin almadan sosyal medyada paylaşmak uygun bir davranıştır.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! Başkalarının fotoğraflarını izinsiz paylaşmak kişisel hak ihlalidir; mutlaka izin alınmalıdır."
                },
                {
                    statement: "e-Devlet kapısı (turkiye.gov.tr) birçok kamu ve resmi kimlik işlemine tek şifreyle 7/24 ulaşmamızı sağlar.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! e-Devlet resmi kamu işlemlerinin tek noktadan sunulduğu güvenli portaldır."
                },
                {
                    statement: "İnternette arama yapmak ve web sitelerini ziyaret etmek 'Pasif Dijital Ayak İzi' oluşturur.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Ziyaret edilen siteler, arama geçmişi ve çerezler pasif dijital ayak izidir."
                },
                {
                    statement: "Sosyal medyaya kendi isteğimizle video yüklemek veya yorum yazmak 'Aktif Dijital Ayak İzi'dir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Kendi irademizle internete yüklediğimiz her paylaşım aktif ayak izini oluşturur."
                },
                {
                    statement: "Hastanelerden doktor seçerek online muayene randevusu almak için e-Okul sistemi kullanılır.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! Hastane randevusu e-Randevu (MHRS) üzerinden alınır. e-Okul ders ve notlar içindir."
                },
                {
                    statement: "İnternete yüklediğimiz bir içeriği daha sonra silsek bile başkaları tarafından kaydedilmiş olabilir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Dijital ayak izi kalıcıdır; internete konulan bir içeriğin tamamen yok olması zordur."
                },
                {
                    statement: "Güvenliğimiz için şifremizi '123456' veya doğum yılımız gibi basit kelimelerden oluşturmalıyız.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! Güçlü şifre en az 8 karakterden oluşmalı; harf, rakam ve semboller içermelidir."
                },
                {
                    statement: "e-Nabız sistemi geçmiş tahlil sonuçlarımızı, aşılarımızı ve reçetelerimizi incelememizi sağlar.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! e-Nabız Sağlık Bakanlığı'nın güvenli kişisel sağlık takip sistemidir."
                },
                {
                    statement: "Vergi, harç ve borç ödeme işlemlerini internet üzerinden yapmak için e-Vergi sistemi kullanılır.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! e-Vergi (İnteraktif Vergi Dairesi) resmi maliye işlemlerini dijital ortamda sunar."
                },
                {
                    statement: "Dijital vatandaş, internette farklı fikirlere saygı duyar ve siber zorbalık yapmaktan kaçınır.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Başkalarının fikirlerine saygı duymak ve nazik davranmak dijital vatandaşlığın temelidir."
                }
            ]
        },

        // 2. İndeks: Çoktan Seçmeli Değerlendirme Testi (app.js renderQuiz() bu indeksi okur)
        {
            id: 3,
            type: "multiple_choice",
            title: "Çoktan Seçmeli Değerlendirme Testi",
            questions: [
                {
                    q: "Dijital dünyada hak ve sorumluluklarını bilen, teknolojiyi ahlaki, yasal ve güvenli kullanan bireye ne ad verilir?",
                    options: ["Dijital Vatandaş", "Sanal Oyuncu", "İnternet Korsanı", "Web Tasarımcısı"],
                    answer: 0,
                    explanation: "Teknolojiyi bilinçli, etik ve güvenli kullanan, hak ve sorumluluklarının farkında olan kişiye Dijital Vatandaş denir."
                },
                {
                    q: "Aşağıdakilerden hangisi bir 'Aktif Dijital Ayak İzi' örneğidir?",
                    options: [
                        "Kendi isteğimizle sosyal medyaya video yüklemek",
                        "Bir web sitesini ziyaret ettiğimizde arka planda çerez oluşması",
                        "Arama motorunun yaptığımız aramaları geçmişe kaydetmesi",
                        "Telefonumuzun arka planda konum verisi toplaması"
                    ],
                    answer: 0,
                    explanation: "Kendi isteğimiz ve bilincimizle yüklediğimiz fotoğraflar, videolar ve yorumlar aktif dijital ayak izidir."
                },
                {
                    q: "Aşağıdakilerden hangisi 'Pasif Dijital Ayak İzi'ne örnek olarak gösterilebilir?",
                    options: [
                        "İnternet sitelerinde gezinirken tarayıcının bıraktığı çerez (cookie) kayıtları",
                        "Sosyal medya hesabına yeni profil fotoğrafı yüklemek",
                        "Bir videonun altına yorum yazmak",
                        "Arkadaşımıza e-posta göndermek"
                    ],
                    answer: 0,
                    explanation: "Biz doğrudan içerik paylaşmasak da arkaplanda kaydedilen çerezler, konum ve arama kayıtları pasif ayak izidir."
                },
                {
                    q: "Öğrencilerin sınav notlarını, devamsızlık durumlarını ve karne bilgilerini takip edebildikleri MEB platformu hangisidir?",
                    options: ["e-Okul", "e-Nabız", "MHRS", "e-Belediye"],
                    answer: 0,
                    explanation: "e-Okul Veli Bilgilendirme Sistemi, öğrencilerin ders notları ve devamsızlık bilgilerini sunar."
                },
                {
                    q: "Geçmiş muayenelerimizi, tahlil sonuçlarımızı ve aşı takvimimizi güvenli şekilde incelememizi sağlayan dijital sağlık uygulaması hangisidir?",
                    options: ["e-Nabız", "EBA", "e-Vergi", "e-Devlet"],
                    answer: 0,
                    explanation: "e-Nabız, Sağlık Bakanlığı'nın kişisel sağlık kayıtlarını arşivleyen resmi uygulamasıdır."
                },
                {
                    q: "Devlet hastanelerinden doktor ve klinik seçerek sıra beklemeden muayene randevusu almamızı sağlayan sistem hangisidir?",
                    options: ["e-Randevu (MHRS)", "e-Okul", "EBA", "e-Bankacılık"],
                    answer: 0,
                    explanation: "Merkezi Hekim Randevu Sistemi (MHRS - Alo 182), hastane randevusu almak için kullanılır."
                },
                {
                    q: "Resmi evrak, vergi borcu, harç ödeme ve beyanname işlemlerini internetten yapmamızı sağlayan dijital uygulama hangisidir?",
                    options: ["e-Vergi (İnteraktif Vergi Dairesi)", "e-Okul", "e-Nabız", "MHRS"],
                    answer: 0,
                    explanation: "Vergi ve harç işlemleri e-Vergi (İnteraktif Vergi Dairesi) üzerinden gerçekleştirilir."
                },
                {
                    q: "Para transferi, fatura ödeme ve bakiye sorgulama gibi işlemleri şubeye gitmeden yapmamızı sağlayan hizmet hangisidir?",
                    options: ["e-Bankacılık", "EBA", "e-Okul", "e-Nabız"],
                    answer: 0,
                    explanation: "Banka işlemlerini internet veya mobil uygulama üzerinden yapmaya e-Bankacılık denir."
                },
                {
                    q: "Ders videoları, etkileşimli konu anlatımları ve dijital kitaplara ulaşmamızı sağlayan MEB eğitim portalı hangisidir?",
                    options: ["EBA (Eğitim Bilişim Ağı)", "e-Nabız", "MHRS", "e-Vergi"],
                    answer: 0,
                    explanation: "EBA, Millî Eğitim Bakanlığı'nın zengin ders içerikleri sunduğu resmi dijital eğitim ağıdır."
                },
                {
                    q: "Aşağıdakilerden hangisi internette ASLA ve KESİNLİKLE paylaşılmaması gereken özel bilgilerden biridir?",
                    options: [
                        "T.C. Kimlik Numarası ve hesap şifreleri",
                        "Okulda hazırladığımız fen bilimleri proje ödevi",
                        "Beğendiğimiz eğitici bir bilim makalesi",
                        "Telif hakkı serbest olan bir doğa resmi"
                    ],
                    answer: 0,
                    explanation: "T.C. Kimlik numarası, ev adresi ve şifreler kişisel gizliliktir; internette asla yabancılarla paylaşılmamalıdır."
                },
                {
                    q: "İnternette paylaşım yapmadan önce hatırlamamız gereken 'D.Ü.Ş.Ü.N.' kuralındaki 'D' harfi ne anlama gelir?",
                    options: ["Doğru mu?", "Değerli mi?", "Dalgın mı?", "Deneme mi?"],
                    answer: 0,
                    explanation: "D.Ü.Ş.Ü.N. kuralında D harfi, paylaşacağımız bilginin 'Doğru mu?' olduğunu sorgulamamızı ifade eder."
                },
                {
                    q: "İnternette mesajlaşırken veya sosyal medyada yorum yazarken KELİMELERİN TAMAMINI BÜYÜK HARFLE YAZMAK ne anlama gelir?",
                    options: [
                        "Karşı tarafa bağırmak ve kaba davranmak",
                        "Çok neşeli olduğunu göstermek",
                        "Hızlı yazmak",
                        "Önemli bir gizli şifre göndermek"
                    ],
                    answer: 0,
                    explanation: "Dijital nezaket kurallarına göre büyük harflerle yazmak bağırmak ve saygısızlık olarak kabul edilir."
                }
            ]
        }
    ],

    // ========================================================
    // 🎮 4. TEKRAR OYUNLARI VERİTABANI
    // ========================================================
    gameData: {
        // Oyun 1: Çarkıfelek Soruları (quiz_game.js: question & q, points & pts)
        wheelQuiz: [
            {
                q: "Dijital dünyada haklarını ve sorumluluklarını bilen, teknolojiyi bilinçli kullanan bireye ne denir?",
                question: "Dijital dünyada haklarını ve sorumluluklarını bilen, teknolojiyi bilinçli kullanan bireye ne denir?",
                options: ["Dijital Vatandaş", "Sanal Oyuncu", "İnternet Korsanı", "Webmaster"],
                answer: 0,
                pts: 100,
                points: 100
            },
            {
                q: "İnternette attığımız her adımın ve aramanın arkasında bıraktığı kalıcı izlere ne ad verilir?",
                question: "İnternette attığımız her adımın ve aramanın arkasında bıraktığı kalıcı izlere ne ad verilir?",
                options: ["Parmak İzi", "Dijital Ayak İzi", "Ekran Görüntüsü", "İnternet Hızı"],
                answer: 1,
                pts: 200,
                points: 200
            },
            {
                q: "Kendi isteğimizle fotoğraf paylaşmak ve video yüklemek hangi ayak izi türüne örnektir?",
                question: "Kendi isteğimizle fotoğraf paylaşmak ve video yüklemek hangi ayak izi türüne örnektir?",
                options: ["Aktif Dijital Ayak İzi", "Pasif Dijital Ayak İzi", "Gizli Ayak İzi", "Geçici Ayak İzi"],
                answer: 0,
                pts: 250,
                points: 250
            },
            {
                q: "Resmi devlet hizmetlerine tek şifreyle 7/24 ulaşmamızı sağlayan resmi portal hangisidir?",
                question: "Resmi devlet hizmetlerine tek şifreyle 7/24 ulaşmamızı sağlayan resmi portal hangisidir?",
                options: ["e-Devlet", "Sosyal Medya", "Online Oyun", "Video Sitesi"],
                answer: 0,
                pts: 150,
                points: 150
            },
            {
                q: "Öğrencilerin sınav notlarını ve devamsızlık durumlarını takip ettikleri MEB sistemi hangisidir?",
                question: "Öğrencilerin sınav notlarını ve devamsızlık durumlarını takip ettikleri MEB sistemi hangisidir?",
                options: ["e-Nabız", "e-Okul", "MHRS", "e-Belediye"],
                answer: 1,
                pts: 300,
                points: 300
            },
            {
                q: "Hastanelerden sıra beklemeden doktor seçip randevu almamızı sağlayan sağlık sistemi hangisidir?",
                question: "Hastanelerden sıra beklemeden doktor seçip randevu almamızı sağlayan sağlık sistemi hangisidir?",
                options: ["e-Randevu (MHRS)", "e-Okul", "EBA", "ÖSYM"],
                answer: 0,
                pts: 250,
                points: 250
            },
            {
                q: "Vergi borcu sorgulama, harç yatırma gibi resmi mali işlemleri internetten yapmaya yarayan sistem hangisidir?",
                question: "Vergi borcu sorgulama, harç yatırma gibi resmi mali işlemleri internetten yapmaya yarayan sistem hangisidir?",
                options: ["e-Vergi", "e-Okul", "e-Nabız", "EBA"],
                answer: 0,
                pts: 200,
                points: 200
            },
            {
                q: "Geçmiş tahlil sonuçlarımızı, reçetelerimizi ve aşı takvimimizi görmemizi sağlayan dijital sağlık uygulaması hangisidir?",
                question: "Geçmiş tahlil sonuçlarımızı, reçetelerimizi ve aşı takvimimizi görmemizi sağlayan dijital sağlık uygulaması hangisidir?",
                options: ["e-Nabız", "EBA", "e-Okul", "Haritalar"],
                answer: 0,
                pts: 150,
                points: 150
            },
            {
                q: "İnternette kelimelerin tamamını büyük harflerle yazmak ne anlama gelir?",
                question: "İnternette kelimelerin tamamını büyük harflerle yazmak ne anlama gelir?",
                options: ["Bağırmak & Kaba Davranmak", "Daha Hızlı Yazmak", "Neşeli Olmak", "Şifre Koymak"],
                answer: 0,
                pts: 200,
                points: 200
            },
            {
                q: "İnternette görgü ve nezaket kurallarına verilen isim hangisidir?",
                question: "İnternette görgü ve nezaket kurallarına verilen isim hangisidir?",
                options: ["Dijital Nezaket", "Spam", "Hacker", "Download"],
                answer: 0,
                pts: 500,
                points: 500
            }
        ],

        // Oyun 2: Kavram & Uygulama Eşleştirme (Bölüm 2: 7 Durum - 7 Uygulama + 2 Temel Kavram)
        matchConfig: {
            leftTitle: "Vatandaşın Talebi & Durumu 📋",
            rightTitle: "Resmi Dijital Hizmet & Kapı 🎯",
            instruction: "💡 <strong>Nasıl Oynanır?</strong> Soldaki vatandaşın yapmak istediği resmi işleme dokunun, ardından sağdaki doğru dijital vatandaşlık uygulamasıyla eşleştirin!"
        },
        matchCards: [
            {
                id: 1,
                text: "Okul bilgilerime, sınav notlarıma ve devamsızlığıma ulaşmak istiyorum",
                category: "e-Okul (MEB Veli Bilgilendirme Sistemi)",
                icon: "fa-solid fa-graduation-cap",
                rightIcon: "fa-solid fa-school"
            },
            {
                id: 2,
                text: "Kimlik, ikametgah ve resmi kamu işlemlerimi tek noktadan yapmak istiyorum",
                category: "e-Devlet Kapısı (turkiye.gov.tr)",
                icon: "fa-solid fa-landmark",
                rightIcon: "fa-solid fa-key"
            },
            {
                id: 3,
                text: "Geçmiş tahlil, röntgen, aşı ve reçete bilgilerimi görüntülemek istiyorum",
                category: "e-Nabız (Kişisel Sağlık Kayıt Sistemi)",
                icon: "fa-solid fa-heart-pulse",
                rightIcon: "fa-solid fa-hospital"
            },
            {
                id: 4,
                text: "Devlet hastanesinden hekim seçerek muayene randevusu almak istiyorum",
                category: "e-Randevu / MHRS (Alo 182)",
                icon: "fa-solid fa-calendar-check",
                rightIcon: "fa-solid fa-user-doctor"
            },
            {
                id: 5,
                text: "Vergi borcu sorgulama, harç ödeme ve maliye işlemlerimi yapmak istiyorum",
                category: "e-Vergi (İnteraktif Vergi Dairesi)",
                icon: "fa-solid fa-file-invoice-dollar",
                rightIcon: "fa-solid fa-receipt"
            },
            {
                id: 6,
                text: "Ders videolarına, interaktif testlere ve dijital kitaplara ulaşmak istiyorum",
                category: "EBA Portalı (Eğitim Bilişim Ağı)",
                icon: "fa-solid fa-book-open-reader",
                rightIcon: "fa-solid fa-video"
            },
            {
                id: 7,
                text: "Para transferi ve hesap işlemlerini bankaya gitmeden yapmak istiyorum",
                category: "e-Bankacılık (Mobil & İnternet Bankacılığı)",
                icon: "fa-solid fa-credit-card",
                rightIcon: "fa-solid fa-building-columns"
            },
            {
                id: 8,
                text: "Kendi isteğimle fotoğraf paylaşmak, yorum yazmak ve video yüklemek",
                category: "Aktif Dijital Ayak İzi (Bilinçli Bırakılan İz)",
                icon: "fa-solid fa-shoe-prints",
                rightIcon: "fa-solid fa-database"
            }
        ],

        // Oyun 3: Hızlı Refleks Doğru / Yanlış İfadeleri (Bölüm 1 Dedektif + Bölüm 4 Ayak İzi + Bölüm 6 Güvenlik)
        reflexStatements: [
            {
                text: "Arkadaşımızın fotoğrafını izinsiz olarak sosyal medyada paylaşmak uygun bir davranıştır.",
                correct: false
            },
            {
                text: "e-Devlet kapısı birçok resmi kamu işlemine tek şifreyle 7/24 ulaşmamızı sağlar.",
                correct: true
            },
            {
                text: "İnternette arama yapmak ve web sitelerini gezmek 'Pasif Dijital Ayak İzi' oluşturur.",
                correct: true
            },
            {
                text: "Kendi isteğimizle sosyal medyaya video yüklemek veya yorum yazmak 'Aktif Dijital Ayak İzi'dir.",
                correct: true
            },
            {
                text: "Hastanelerden doktor seçerek randevu almak için e-Okul sistemi kullanılır.",
                correct: false
            },
            {
                text: "e-Nabız sistemi geçmiş tahlil, röntgen ve aşı kayıtlarımızı güvenle saklar.",
                correct: true
            },
            {
                text: "İnternete yüklediğimiz bir fotoğrafı silsek bile başkaları tarafından kaydedilmiş olabilir.",
                correct: true
            },
            {
                text: "e-Devlet şifremizi arkadaşlarımızla paylaşmamızda hiçbir sakınca yoktur.",
                correct: false
            },
            {
                text: "Vergi, harç ve borç ödeme işlemlerini internet üzerinden yapmak için e-Vergi sistemi kullanılır.",
                correct: true
            },
            {
                text: "Mesajlarda kelimeleri tamamı BÜYÜK HARFLERLE yazmak bağırmak anlamına gelir.",
                correct: true
            },
            {
                text: "Dijital vatandaş, internette farklı fikirlere ve kişisel haklara saygı duyar.",
                correct: true
            },
            {
                text: "Siber zorbalığa uğradığımızda o kişiye küfür ve kaba sözlerle karşılık vermeliyiz.",
                correct: false
            },
            {
                text: "T.C. Kimlik numaramızı ve ev adresimizi sosyal medyada tanımadığımız kişilerle paylaşabiliriz.",
                correct: false
            },
            {
                text: "Güçlü bir şifre en az 8 karakterden oluşmalı; harf, rakam ve sembol içermelidir.",
                correct: true
            }
        ],

        // Oyun 4: Sınıf Düellosu Soruları (duel_game.js: q & question, options, answer)
        duelQuestions: [
            {
                q: "Dijital dünyada haklarını ve sorumluluklarını bilen kişiye ne ad verilir?",
                question: "Dijital dünyada haklarını ve sorumluluklarını bilen kişiye ne ad verilir?",
                options: ["Sanal Oyuncu", "Dijital Vatandaş", "Bilgisayar Korsanı", "Sosyal Medyacı"],
                answer: 1
            },
            {
                q: "İnternette arkamızda bıraktığımız kalıcı arama ve paylaşım verilerine ne denir?",
                question: "İnternette arkamızda bıraktığımız kalıcı arama ve paylaşım verilerine ne denir?",
                options: ["Dijital Ayak İzi", "Ekran Parlaklığı", "İnternet Kotası", "Parmak İzi"],
                answer: 0
            },
            {
                q: "Tüm kamu hizmetlerine tek bir şifreyle ulaşmamızı sağlayan resmi devlet portalı hangisidir?",
                question: "Tüm kamu hizmetlerine tek bir şifreyle ulaşmamızı sağlayan resmi devlet portalı hangisidir?",
                options: ["Sosyal Ağ", "e-Devlet", "Video Kanalı", "Oyun Mağazası"],
                answer: 1
            },
            {
                q: "Öğrenci sınav notları ve devamsızlık durumları hangi MEB uygulamasından öğrenilir?",
                question: "Öğrenci sınav notları ve devamsızlık durumları hangi MEB uygulamasından öğrenilir?",
                options: ["e-Okul", "e-Nabız", "MHRS", "e-Belediye"],
                answer: 0
            },
            {
                q: "Hastanelerden online randevu almamızı sağlayan sağlık sistemi hangisidir?",
                question: "Hastanelerden online randevu almamızı sağlayan sağlık sistemi hangisidir?",
                options: ["EBA", "MHRS (e-Randevu)", "e-Okul", "ÖSYM"],
                answer: 1
            },
            {
                q: "Vergi borcu sorgulama ve harç ödeme gibi maliye işlemlerini yapan sistem hangisidir?",
                question: "Vergi borcu sorgulama ve harç ödeme gibi maliye işlemlerini yapan sistem hangisidir?",
                options: ["e-Vergi", "e-Nabız", "MHRS", "EBA"],
                answer: 0
            },
            {
                q: "İnternette bir içeriği kendi isteğimizle paylaşmak hangi ayak izi türüdür?",
                question: "İnternette bir içeriği kendi isteğimizle paylaşmak hangi ayak izi türüdür?",
                options: ["Pasif Ayak İzi", "Aktif Ayak İzi", "Geçici İzi", "Gizli İzi"],
                answer: 1
            },
            {
                q: "İnternette yazışırken tamamı büyük harfle yazmak ne anlama gelir?",
                question: "İnternette yazışırken tamamı büyük harfle yazmak ne anlama gelir?",
                options: ["Neşeli Olmak", "Hızlı Yazmak", "Bağırmak & Kaba Davranmak", "Gizli Şifre"],
                answer: 2
            }
        ]
    }
};
