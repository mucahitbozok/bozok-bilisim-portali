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
    // 📄 2. HAFTALIK ÇALIŞMA KAĞITLARI & DİJİTAL METİNLER
    // ========================================================
    worksheetDocs: {
        images: {
            konu: null,
            soru: null,
            cevap: null
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
            <div class="bg-indigo-950/60 rounded-2xl p-5 border border-indigo-400/30 space-y-3">
                <h3 class="text-lg font-bold text-yellow-300 flex items-center gap-2">
                    <i class="fa-solid fa-book-open text-indigo-400"></i> Bu Hafta Ne Öğreniyoruz?
                </h3>
                <p class="text-sm text-indigo-100 leading-relaxed">
                    İnternet ortamında haklarımızı, sorumluluklarımızı ve güvenliğimizi bilmek en temel vatandaşlık görevidir. Bu hafta; dijital kimliğin ne olduğunu, internette bıraktığımız dijital ayak izinin önemini, e-Devlet, e-Okul, EBA, e-Nabız gibi resmi uygulamaların hayatımıza katkılarını ve dijital nezaket kurallarını öğreniyoruz.
                </p>
            </div>

            <!-- 4 Temel Kavram -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div class="p-3.5 bg-slate-800 rounded-xl border border-slate-700 space-y-1">
                    <span class="font-black text-blue-400 block text-sm">1. DİJİTAL VATANDAŞ</span>
                    <p class="text-slate-300">Teknolojiyi ahlaki, yasal ve güvenli kullanan bilinçli birey.</p>
                </div>
                <div class="p-3.5 bg-slate-800 rounded-xl border border-slate-700 space-y-1">
                    <span class="font-black text-purple-400 block text-sm">2. DİJİTAL KİMLİK</span>
                    <p class="text-slate-300">İnternette bizi temsil eden profil, hesap ve bilgilerin bütünü.</p>
                </div>
                <div class="p-3.5 bg-slate-800 rounded-xl border border-slate-700 space-y-1">
                    <span class="font-black text-emerald-400 block text-sm">3. DİJİTAL AYAK İZİ</span>
                    <p class="text-slate-300">İnternette yaptığımız her arama ve paylaşımla bıraktığımız kalıcı izler.</p>
                </div>
                <div class="p-3.5 bg-slate-800 rounded-xl border border-slate-700 space-y-1">
                    <span class="font-black text-pink-400 block text-sm">4. DİJİTAL NEZAKET</span>
                    <p class="text-slate-300">İnternet dünyasındaki görgü ve nezaket kuralları (Centilmenlik).</p>
                </div>
            </div>

            <!-- Dijital Vatandaşlık Uygulamaları Tablosu -->
            <div class="space-y-3">
                <h3 class="text-base font-bold text-yellow-400 flex items-center gap-2">
                    <i class="fa-solid fa-table text-indigo-400"></i> Temel Dijital Vatandaşlık Uygulamaları
                </h3>
                <div class="overflow-x-auto">
                    <table class="w-full text-xs text-left border-collapse border border-slate-700">
                        <thead class="bg-slate-800 text-yellow-300 font-bold uppercase">
                            <tr>
                                <th class="p-3 border border-slate-700">Uygulama Adı</th>
                                <th class="p-3 border border-slate-700">Alanı</th>
                                <th class="p-3 border border-slate-700">Web Adresi</th>
                                <th class="p-3 border border-slate-700">Sağladığı Temel Hizmet</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-800 text-slate-200">
                            <tr class="hover:bg-slate-800/50">
                                <td class="p-3 border border-slate-700 font-bold text-red-400">e-Devlet Kapısı</td>
                                <td class="p-3 border border-slate-700">Kamu Hizmetleri</td>
                                <td class="p-3 border border-slate-700">turkiye.gov.tr</td>
                                <td class="p-3 border border-slate-700">Resmi belgeler, adli sicil, ikametgah, hat sorgulama vb.</td>
                            </tr>
                            <tr class="hover:bg-slate-800/50">
                                <td class="p-3 border border-slate-700 font-bold text-blue-400">e-Okul</td>
                                <td class="p-3 border border-slate-700">Eğitim</td>
                                <td class="p-3 border border-slate-700">e-okul.meb.gov.tr</td>
                                <td class="p-3 border border-slate-700">Sınav notları, devamsızlık durumu, karne ve ders çizelgesi.</td>
                            </tr>
                            <tr class="hover:bg-slate-800/50">
                                <td class="p-3 border border-slate-700 font-bold text-amber-400">EBA</td>
                                <td class="p-3 border border-slate-700">Eğitim</td>
                                <td class="p-3 border border-slate-700">eba.gov.tr</td>
                                <td class="p-3 border border-slate-700">Ders videoları, konu anlatımları, interaktif testler, canlı ders.</td>
                            </tr>
                            <tr class="hover:bg-slate-800/50">
                                <td class="p-3 border border-slate-700 font-bold text-emerald-400">e-Nabız</td>
                                <td class="p-3 border border-slate-700">Sağlık</td>
                                <td class="p-3 border border-slate-700">enabiz.gov.tr</td>
                                <td class="p-3 border border-slate-700">Geçmiş muayeneler, tahlil sonuçları, aşı ve ilaç takibi.</td>
                            </tr>
                            <tr class="hover:bg-slate-800/50">
                                <td class="p-3 border border-slate-700 font-bold text-teal-400">MHRS</td>
                                <td class="p-3 border border-slate-700">Sağlık</td>
                                <td class="p-3 border border-slate-700">mhrs.gov.tr (Alo 182)</td>
                                <td class="p-3 border border-slate-700">Devlet hastanelerinden ve doktorlardan online randevu alma.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        `,
        soruHtml: `
        <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-indigo-500/50 shadow-2xl space-y-6">
            <div class="border-b-2 border-indigo-500/40 pb-4">
                <span class="px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black rounded-lg text-xs tracking-wider uppercase">3. Hafta Çalışma Kağıdı Soruları</span>
                <h1 class="text-2xl font-black text-white mt-1">PEKİŞTİRME ETKİNLİĞİ & ÇALIŞMA SORULARI</h1>
            </div>

            <!-- Bölüm A: Boşluk Doldurma -->
            <div class="space-y-3">
                <h3 class="text-sm font-black text-yellow-300 uppercase">A) Aşağıdaki cümlelerdeki boşlukları uygun kelimelerle doldurunuz:</h3>
                <div class="space-y-2 text-xs text-slate-200">
                    <p>1. İnternette arama yaparken ve web sitelerinde gezinirken arkamızda bıraktığımız kalıcı elektronik izlere ........................................ denir.</p>
                    <p>2. Öğrencilerin sınav notlarını ve devamsızlık durumlarını takip ettikleri Millî Eğitim Bakanlığı sistemi ........................................ sistemidir.</p>
                    <p>3. Hastanelerden sıra beklemeden online randevu almamızı sağlayan resmi sistemin adı ........................................'dir.</p>
                    <p>4. İnternette yazışırken kelimelerin tamamını büyük harfle yazmak ........................................ anlamına gelir.</p>
                </div>
            </div>

            <!-- Bölüm B: Doğru mu Yanlış mı? -->
            <div class="space-y-3 pt-3 border-t border-slate-800">
                <h3 class="text-sm font-black text-emerald-300 uppercase">B) İfadelerin başına Doğru için (D), Yanlış için (Y) koyunuz:</h3>
                <div class="space-y-2 text-xs text-slate-200">
                    <p>( ... ) 1. İnternete yüklediğimiz bir fotoğrafı daha sonra silsek bile başkaları tarafından kaydedilmiş olabilir.</p>
                    <p>( ... ) 2. e-Devlet şifremizi güvenliğimiz için sosyal medyada arkadaşlarımızla paylaşmalıyız.</p>
                    <p>( ... ) 3. Siber zorbalığa uğradığımızda o kişiye aynı şekilde kaba sözlerle cevap vermeliyiz.</p>
                    <p>( ... ) 4. e-Nabız sistemi geçmiş tahlil ve aşı kayıtlarımıza ulaşmamızı sağlar.</p>
                </div>
            </div>
        </div>
        `,
        cevapHtml: `
        <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-emerald-500/50 shadow-2xl space-y-6">
            <div class="border-b-2 border-emerald-500/40 pb-4">
                <span class="px-3 py-1 bg-emerald-500/30 text-emerald-300 font-black rounded-lg text-xs tracking-wider uppercase">Cevap Anahtarı</span>
                <h1 class="text-2xl font-black text-white mt-1">3. HAFTA ÇALIŞMA KAĞIDI ÇÖZÜMLERİ</h1>
            </div>

            <div class="space-y-3">
                <h3 class="text-sm font-black text-yellow-300 uppercase">A) Boşluk Doldurma Çözümleri:</h3>
                <div class="space-y-1 text-xs text-slate-200">
                    <p>1. <strong>Dijital Ayak İzi</strong></p>
                    <p>2. <strong>e-Okul</strong></p>
                    <p>3. <strong>MHRS</strong> (Merkezi Hekim Randevu Sistemi)</p>
                    <p>4. <strong>Bağırmak</strong> (Kaba davranmak)</p>
                </div>
            </div>

            <div class="space-y-3 pt-3 border-t border-slate-800">
                <h3 class="text-sm font-black text-emerald-300 uppercase">B) Doğru / Yanlış Çözümleri:</h3>
                <div class="space-y-1 text-xs text-slate-200">
                    <p>1. <strong>( D ) DOĞRU:</strong> İnternete yüklenen içerikler ekran görüntüsü alınarak saklanabilir, kalıcıdır.</p>
                    <p>2. <strong>( Y ) YANLIŞ:</strong> e-Devlet ve tüm hesap şifreleri gizlidir, kimseyle paylaşılmaz.</p>
                    <p>3. <strong>( Y ) YANLIŞ:</strong> Siber zorbalık yapan kişiye misilleme yapılmaz; engellenip yetişkine haber verilir.</p>
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
        // 0. Çoktan Seçmeli Test Soruları
        {
            type: "quiz",
            title: "3. Hafta: Dijital Vatandaşlık Testi",
            desc: "10 soruluk interaktif pekiştirme testi. Başarılar!",
            questions: [
                {
                    q: "Dijital dünyada haklarını ve sorumluluklarını bilen, teknolojiyi bilinçli, ahlaki ve güvenli kullanan bireye ne ad verilir?",
                    options: ["Dijital Vatandaş", "Sanal Oyuncu", "Web Tasarımcısı", "İnternet Korsanı"],
                    answer: 0,
                    explanation: "Tebrikler! Dijital dünyadaki hak ve sorumluluklarını bilerek teknolojiyi doğru kullanan kişiye Dijital Vatandaş denir."
                },
                {
                    q: "İnternette arama yaparken, siteleri gezerken ve paylaşım yaparken arkamızda bıraktığımız kalıcı verilere ne ad verilir?",
                    options: ["Parmak İzi", "Dijital Ayak İzi", "Ekran Görüntüsü", "İnternet Şifresi"],
                    answer: 1,
                    explanation: "Doğru cevap! İnternetteki her işlemimiz geride kalıcı bir dijital ayak izi bırakır."
                },
                {
                    q: "Aşağıdakilerden hangisi bir 'Aktif Dijital Ayak İzi' örneğidir?",
                    options: [
                        "Kendi isteğimizle sosyal medyaya video yüklemek",
                        "Ziyaret ettiğimiz sitenin çerezleri kaydetmesi",
                        "Telefonun arka planda konum verisini tutması",
                        "Bağlandığımız internetin IP adresini kaydetmesi"
                    ],
                    answer: 0,
                    explanation: "Kendi isteğimiz ve bilincimizle internete koyduğumuz paylaşımlar aktif dijital ayak izidir."
                },
                {
                    q: "Öğrencilerin sınav notlarını, devamsızlık durumlarını ve karne bilgilerini takip edebildikleri MEB platformu hangisidir?",
                    options: ["e-Nabız", "e-Okul", "MHRS", "e-Belediye"],
                    answer: 1,
                    explanation: "e-Okul, öğrenci ve velilerin okul bilgilerini takip ettiği resmi platformdur."
                },
                {
                    q: "Geçmiş muayenelerimizi, tahlil sonuçlarımızı ve aşı takvimimizi güvenli şekilde incelememizi sağlayan dijital sağlık uygulaması hangisidir?",
                    options: ["e-Nabız", "EBA", "ÖSYM", "e-Devlet"],
                    answer: 0,
                    explanation: "e-Nabız, kişisel sağlık kayıtlarımızı arşivleyen resmi sağlık uygulamasıdır."
                },
                {
                    q: "Hastanelerde sıra beklemeden doktor ve klinik seçerek randevu almamızı sağlayan sistem hangisidir?",
                    options: ["MHRS", "e-Okul", "EBA", "HGS"],
                    answer: 0,
                    explanation: "Merkezi Hekim Randevu Sistemi (MHRS - Alo 182), hastane randevusu almak için kullanılır."
                },
                {
                    q: "İnternette mesajlaşırken veya yorum yazarken KELİMELERİN TAMAMINI BÜYÜK HARFLE YAZMAK ne anlama gelir?",
                    options: [
                        "Karşı tarafa bağırmak ve kaba davranmak",
                        "Çok neşeli olduğunu göstermek",
                        "Daha hızlı yazabilmek",
                        "Gizli bir şifre göndermek"
                    ],
                    answer: 0,
                    explanation: "Dijital nezaket kurallarına göre büyük harfle yazmak bağırmak anlamına gelir."
                },
                {
                    q: "İnternette tanımadığınız bir kişi sizi alaycı sözlerle rahatsız ederse (Siber Zorbalık) yapılması gereken İLK adım nedir?",
                    options: [
                        "Ona aynı kaba sözlerle cevap vermek",
                        "Kişiye cevap vermeden engelleyip ailemize ve öğretmenimize bildirmek",
                        "İnterneti ve bilgisayarı tamamen çöpe atmak",
                        "Kişiye şifremizi göndermek"
                    ],
                    answer: 1,
                    explanation: "Siber zorbalığa asla misilleme yapılmaz; kişi engellenir ve güvenilir bir yetişkine haber verilir."
                },
                {
                    q: "Aşağıdakilerden hangisi dijital vatandaşın SORUMLULUKLARINDAN biridir?",
                    options: [
                        "Başkalarına ait fotoğraf ve ödevleri izinsiz kopyalamamak (Telif hakkına saygı)",
                        "Arkadaşlarının şifrelerini ele geçirmeye çalışmak",
                        "Her gördüğü haberi doğrulamadan yaymak",
                        "Sadece büyük harflerle mesaj yazmak"
                    ],
                    answer: 0,
                    explanation: "Telif haklarına saygı duymak ve başkalarının içeriklerini izinsiz almamak temel sorumluluktur."
                },
                {
                    q: "İnternette bir paylaşım yapmadan önce aklımıza getirmemiz gereken 'DÜŞÜN' kuralındaki 'D' harfi neyi ifade eder?",
                    options: ["Doğru mu?", "Değerli mi?", "Dalgın mı?", "Deneme mi?"],
                    answer: 0,
                    explanation: "D.Ü.Ş.Ü.N. kuralında D harfi bilginin 'Doğru mu?' olduğunu sorgulamamızı temsil eder."
                }
            ]
        },

        // 1. Doğru / Yanlış Etkinliği
        {
            type: "true_false",
            title: "Doğru mu? Yanlış mı? Pekiştirme Etkinliği",
            items: [
                {
                    statement: "İnternete yüklediğimiz bir fotoğrafı sildiğimizde internet dünyasından her zaman tamamen silinmiş olur.",
                    correct: false,
                    explanation: "Yanlış! Ekran görüntüsü alınmış olabilir veya arama motoru sunucularında kalmış olabilir."
                },
                {
                    statement: "e-Devlet kapısı (turkiye.gov.tr) birçok kamu hizmetine tek şifreyle 7/24 ulaşmamızı sağlar.",
                    correct: true,
                    explanation: "Doğru! e-Devlet kapısı resmi devlet hizmetlerinin tek noktadan sunulduğu güvenli portaldır."
                },
                {
                    statement: "Dijital vatandaş, internette yazışırken ve oyun oynarken dijital nezaket kurallarına dikkat eder.",
                    correct: true,
                    explanation: "Doğru! İnternette saygılı ve kibar bir dil kullanmak dijital vatandaşlığın gereğidir."
                },
                {
                    statement: "e-Okul uygulaması hastanelerden tahlil sonuçlarımızı incelemek için kullanılır.",
                    correct: false,
                    explanation: "Yanlış! Tahlil sonuçları e-Nabız uygulamasından; okul notları ise e-Okul'dan incelenir."
                },
                {
                    statement: "İnternette tamamı büyük harflerle yazılan bir mesaj bağırmak anlamına gelir.",
                    correct: true,
                    explanation: "Doğru! Büyük harfle yazmak sanal ortamda bağırmak ve saygısızlık olarak algılanır."
                },
                {
                    statement: "Güvenliğimiz için ev adresimizi ve T.C. kimlik numaramızı sosyal medyada herkesle paylaşmalıyız.",
                    correct: false,
                    explanation: "Yanlış! Kişisel veriler gizli tutulmalı ve yabancılarla asla paylaşılmamalıdır."
                },
                {
                    statement: "EBA platformu Millî Eğitim Bakanlığı'nın ders videoları ve dijital kitaplar sunduğu resmi eğitim ağıdır.",
                    correct: true,
                    explanation: "Doğru! EBA (Eğitim Bilişim Ağı) öğrenci ve öğretmenlere zengin ders içeriği sunar."
                },
                {
                    statement: "Siber zorbalıkla karşılaştığımızda durumu ailemizden veya öğretmenimizden saklamalıyız.",
                    correct: false,
                    explanation: "Yanlış! Siber zorbalığa uğrandığında vakit kaybetmeden güvenilir bir yetişkine haber verilmelidir."
                }
            ]
        }
    ],

    // ========================================================
    // 🎮 4. TEKRAR OYUNLARI VERİTABANI
    // ========================================================
    gameData: {
        // Oyun 1: Çarkıfelek Soruları
        wheelQuiz: [
            {
                q: "Dijital dünyada haklarını ve sorumluluklarını bilen, teknolojiyi bilinçli kullanan bireye ne denir?",
                options: ["Dijital Vatandaş", "Sanal Oyuncu", "İnternet Korsanı", "Webmaster"],
                answer: 0,
                pts: 100
            },
            {
                q: "İnternette attığımız her adımın ve aramanın arkasında bıraktığı kalıcı izlere ne ad verilir?",
                options: ["Parmak İzi", "Dijital Ayak İzi", "Ekran Görüntüsü", "İnternet Hızı"],
                answer: 1,
                pts: 200
            },
            {
                q: "Resmi devlet hizmetlerine tek şifreyle 7/24 ulaşmamızı sağlayan resmi portal hangisidir?",
                options: ["e-Devlet", "Sosyal Medya", "Online Oyun", "Video Sitesi"],
                answer: 0,
                pts: 150
            },
            {
                q: "Öğrencilerin sınav notlarını ve devamsızlık durumlarını takip ettikleri MEB sistemi hangisidir?",
                options: ["e-Nabız", "e-Okul", "MHRS", "e-Belediye"],
                answer: 1,
                pts: 300
            },
            {
                q: "Hastanelerden sıra beklemeden randevu almamızı sağlayan sağlık sistemi hangisidir?",
                options: ["MHRS", "e-Okul", "EBA", "ÖSYM"],
                answer: 0,
                pts: 250
            },
            {
                q: "İnternette kelimelerin tamamını büyük harflerle yazmak ne anlama gelir?",
                options: ["Bağırmak & Kaba Davranmak", "Daha Hızlı Yazmak", "Neşeli Olmak", "Şifre Koymak"],
                answer: 0,
                pts: 200
            },
            {
                q: "Geçmiş tahlil sonuçlarımızı ve aşı takvimimizi görmemizi sağlayan dijital sağlık uygulaması hangisidir?",
                options: ["e-Nabız", "EBA", "e-Okul", "Haritalar"],
                answer: 0,
                pts: 150
            },
            {
                q: "İnternette görgü ve nezaket kurallarına verilen isim hangisidir?",
                options: ["Dijital Nezaket", "Spam", "Hacker", "Download"],
                answer: 0,
                pts: 500
            }
        ],

        // Oyun 2: Kavram & Uygulama Eşleştirme (1'e 1 Net Eşleşme)
        matchConfig: {
            leftTitle: "Dijital Vatandaşlık & Uygulamalar 📋",
            rightTitle: "Hizmet Alanı & Açıklamaları 🎯",
            instruction: "💡 <strong>Nasıl Oynanır?</strong> Soldaki kavrama dokunun, ardından sağdaki doğru hizmet açıklamasına dokunarak eşleştirin!"
        },
        matchCards: [
            {
                id: 1,
                text: "e-Okul Sistemi",
                category: "Öğrenci sınav notları, devamsızlık ve karne takibi (Eğitim)",
                icon: "fa-solid fa-graduation-cap",
                rightIcon: "fa-solid fa-school"
            },
            {
                id: 2,
                text: "e-Nabız Sistemi",
                category: "Geçmiş tahlil sonuçları, aşı ve reçete arşivi (Sağlık)",
                icon: "fa-solid fa-heart-pulse",
                rightIcon: "fa-solid fa-hospital"
            },
            {
                id: 3,
                text: "e-Devlet Kapısı",
                category: "Tüm resmi kamu hizmetlerine tek şifreyle 7/24 erişim",
                icon: "fa-solid fa-landmark",
                rightIcon: "fa-solid fa-key"
            },
            {
                id: 4,
                text: "MHRS (Alo 182)",
                category: "Hastanelerden doktor ve klinik seçerek randevu alma",
                icon: "fa-solid fa-calendar-check",
                rightIcon: "fa-solid fa-user-doctor"
            },
            {
                id: 5,
                text: "EBA Portalı",
                category: "Ders videoları, dijital kitaplar ve eğitici testler",
                icon: "fa-solid fa-book-open-reader",
                rightIcon: "fa-solid fa-video"
            },
            {
                id: 6,
                text: "Dijital Ayak İzi",
                category: "İnternette attığımız her adımla arkamızda kalan kalıcı izler",
                icon: "fa-solid fa-shoe-prints",
                rightIcon: "fa-solid fa-database"
            },
            {
                id: 7,
                text: "Dijital Kimlik",
                category: "İnternette bizi temsil eden profil, hesap ve bilgiler bütünü",
                icon: "fa-solid fa-id-card",
                rightIcon: "fa-solid fa-user-check"
            },
            {
                id: 8,
                text: "Dijital Nezaket",
                category: "Sanal ortamda saygılı, kibar ve görgülü iletişim kuralları",
                icon: "fa-solid fa-hand-holding-heart",
                rightIcon: "fa-solid fa-comments"
            }
        ],

        // Oyun 3: Hızlı Refleks Doğru / Yanlış İfadeleri
        reflexStatements: [
            {
                text: "İnternette paylaşılan hiçbir şey tamamen silinmeyebilir.",
                correct: true
            },
            {
                text: "e-Devlet şifremizi arkadaşlarımızla paylaşmamızda hiçbir sakınca yoktur.",
                correct: false
            },
            {
                text: "Mesajlarda kelimeleri tamamı büyük harflerle yazmak bağırmak anlamına gelir.",
                correct: true
            },
            {
                text: "e-Okul uygulaması hastanelerden doktor randevusu almak için kullanılır.",
                correct: false
            },
            {
                text: "Dijital vatandaş, internette başkalarının haklarına ve fikirlerine saygı duyar.",
                correct: true
            },
            {
                text: "Siber zorbalığa uğradığımızda o kişiye küfürle karşılık vermeliyiz.",
                correct: false
            },
            {
                text: "e-Nabız sistemi aşı kayıtlarımızı ve tahlil sonuçlarımızı güvenle saklar.",
                correct: true
            },
            {
                text: "İnternette doğru olup olmadığını bilmediğimiz haberleri yaymamalıyız.",
                correct: true
            }
        ],

        // Oyun 4: Sınıf Düellosu Soruları
        duelQuestions: [
            {
                q: "Dijital dünyada haklarını ve sorumluluklarını bilen kişiye ne ad verilir?",
                options: ["Sanal Oyuncu", "Dijital Vatandaş", "Bilgisayar Korsanı", "Sosyal Medyacı"],
                answer: 1
            },
            {
                q: "İnternette arkamızda bıraktığımız kalıcı arama ve paylaşım verilerine ne denir?",
                options: ["Dijital Ayak İzi", "Ekran Parlaklığı", "İnternet Kotası", "Parmak İzi"],
                answer: 0
            },
            {
                q: "Tüm kamu hizmetlerine tek bir şifreyle ulaşmamızı sağlayan resmi devlet portalı hangisidir?",
                options: ["Sosyal Ağ", "e-Devlet", "Video Kanalı", "Oyun Mağazası"],
                answer: 1
            },
            {
                q: "Öğrenci sınav notları ve devamsızlık durumları hangi MEB uygulamasından öğrenilir?",
                options: ["e-Okul", "e-Nabız", "MHRS", "e-Belediye"],
                answer: 0
            },
            {
                q: "Hastanelerden online randevu almamızı sağlayan sağlık sistemi hangisidir?",
                options: ["EBA", "MHRS", "e-Okul", "ÖSYM"],
                answer: 1
            },
            {
                q: "İnternette yazışırken tamamı büyük harfle yazmak ne anlama gelir?",
                options: ["Neşeli Olmak", "Hızlı Yazmak", "Bağırmak & Kaba Davranmak", "Gizli Şifre"],
                answer: 2
            }
        ]
    }
};
