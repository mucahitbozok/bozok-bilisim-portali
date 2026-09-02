// ==========================================
// 1. Hafta: Bilişim Teknolojilerinin Günlük Yaşamdaki Önemi
// Tam İnteraktif Ders Materyalleri ve Oyun Veritabanı
// Hazırlayan: Öğretmen Bozok
// ==========================================

window.WEEK1_CONTENT = {
    weekInfo: {
        weekNumber: 1,
        title: "Bilişim Teknolojilerinin Günlük Yaşamdaki Önemi",
        theme: "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        learningGoals: [
            "Bilişim, iletişim ve teknoloji kavramlarını açıklayabileceğim.",
            "Bilişim teknolojisinin ne olduğunu söyleyebileceğim.",
            "Bilişim teknolojilerinin günlük yaşamdaki kullanım alanlarını örnekleyebileceğim.",
            "Bilişim teknolojilerinin fayda ve zararlarını ayırt edebileceğim."
        ],
        images: {
            konu: "1.1 konu.png",
            soru: "1.1 soru.png",
            cevap: "1.1 cevap.png"
        }
    },

// 🖥️ 1. DERS SUNUSU (Akıllı Tahta Modu - 22 Slayt)
    // 🖥️ 1. İNTERAKTİF DERS SUNUSU (Akıllı Tahta Modu - 22 Slayt - Resimli Görsel Tasarım)
    slides: [
        // SLAYT 1: KAPAK
        {
            id: 1,
            title: "5. SINIF BİLİŞİM TEKNOLOJİLERİ",
            subtitle: "1. Hafta Ders Sunusu",
            topic: "KAZANIM: BTY.5.1.1",
            icon: "fa-solid fa-chalkboard-user",
            bgColor: "from-blue-700 via-indigo-800 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <span class="px-4 py-1.5 bg-yellow-400/20 text-yellow-300 font-extrabold text-xs uppercase tracking-widest rounded-full border border-yellow-400/40">
                            1. HAFTA • DERS SUNUSU
                        </span>
                        <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                            Bilişim Teknolojilerinin Günlük Yaşamdaki Önemi
                        </h1>
                        <p class="text-base sm:text-lg text-indigo-200 font-medium">
                            Kazanım: <span class="text-yellow-300 font-black">BTY.5.1.1</span>
                        </p>
                        <div class="pt-2">
                            <span class="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-yellow-300 font-bold text-sm shadow-lg">
                                <i class="fa-solid fa-graduation-cap text-lg"></i>
                                <span>Öğretmen Bozok • Bozok Bilişim Portalı</span>
                            </span>
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <div class="relative group rounded-3xl overflow-hidden border-4 border-indigo-400/40 shadow-2xl bg-slate-900/50">
                            <img src="assets/slides/tech_discovery.jpg" alt="Bilişim Teknolojileri" class="w-full max-h-72 object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                                <span class="text-xs font-bold text-yellow-300">✨ Bozok Bilişim Portalı'na Hoş Geldiniz!</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 2: DERSİN KAZANIMI
        {
            id: 2,
            title: "Dersimizin Kazanımı 🎯",
            subtitle: "Bu Derste Ne Öğreneceğiz?",
            topic: "Milli Eğitim Bakanlığı Müfredatı",
            icon: "fa-solid fa-bullseye",
            bgColor: "from-indigo-700 via-purple-800 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-7 space-y-4 text-left">
                        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 font-black text-xs uppercase tracking-wider">
                            <i class="fa-solid fa-award"></i> BTY.5.1.1
                        </div>
                        <div class="bg-white/10 backdrop-blur-md rounded-3xl p-6 border-2 border-indigo-400/40 shadow-xl space-y-3">
                            <h3 class="text-xl sm:text-2xl font-black text-white leading-snug">
                                “Bilişim teknolojilerinin günlük yaşamda kullanım alanlarını sınıflandırabilme.”
                            </h3>
                            <p class="text-sm text-indigo-100 font-medium">
                                Bu ders boyunca temel kavramları öğrenecek, bilişim teknolojilerinin sağladığı 5 temel faydayı ve hayatımızın 11 farklı alanındaki kullanımını keşfedeceğiz.
                            </p>
                        </div>
                        <div class="grid grid-cols-3 gap-3">
                            <div class="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                                <span class="text-xs font-bold text-emerald-300 block">5 Temel Kavram</span>
                                <span class="text-[10px] text-slate-300">Bilgi, İletişim, Teknoloji, Bilişim, BT</span>
                            </div>
                            <div class="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                                <span class="text-xs font-bold text-yellow-300 block">5 Temel Fayda</span>
                                <span class="text-[10px] text-slate-300">Hız, kolaylık, tasarruf</span>
                            </div>
                            <div class="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                                <span class="text-xs font-bold text-cyan-300 block">11 Kullanım Alanı</span>
                                <span class="text-[10px] text-slate-300">Sağlık, eğitim, uzay...</span>
                            </div>
                        </div>
                    </div>
                    <div class="md:col-span-5 flex justify-center">
                        <img src="assets/slides/tech_discovery.jpg" alt="Ders Kazanımı" class="rounded-3xl border-4 border-indigo-400/30 shadow-2xl max-h-64 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 3: BİLGİ NEDİR?
        {
            id: 3,
            title: "Bilgi Nedir? 📚",
            subtitle: "Temel Kavramlar (1/5)",
            topic: "1. Temel Tanım",
            icon: "fa-solid fa-book-open",
            bgColor: "from-blue-600 via-indigo-700 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <div class="bg-blue-950/70 border-2 border-blue-400/40 rounded-3xl p-6 shadow-xl space-y-3">
                            <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg font-black text-xs uppercase tracking-wider">RESMİ TANIM</span>
                            <h2 class="text-2xl sm:text-3xl font-black text-white leading-snug">
                                “Öğrenme, araştırma ve gözlem yoluyla elde edilen gerçeklere <span class="text-yellow-300 underline underline-offset-4">bilgi</span> denir.”
                            </h2>
                        </div>
                        <div class="grid grid-cols-3 gap-3">
                            <div class="p-3 bg-white/10 rounded-2xl border border-white/10 text-center">
                                <div class="text-xl text-yellow-300 mb-1"><i class="fa-solid fa-graduation-cap"></i></div>
                                <span class="font-bold text-xs text-white">Öğrenme</span>
                            </div>
                            <div class="p-3 bg-white/10 rounded-2xl border border-white/10 text-center">
                                <div class="text-xl text-cyan-300 mb-1"><i class="fa-solid fa-magnifying-glass"></i></div>
                                <span class="font-bold text-xs text-white">Araştırma</span>
                            </div>
                            <div class="p-3 bg-white/10 rounded-2xl border border-white/10 text-center">
                                <div class="text-xl text-emerald-300 mb-1"><i class="fa-solid fa-eye"></i></div>
                                <span class="font-bold text-xs text-white">Gözlem</span>
                            </div>
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/bilgi_arastirma.jpg" alt="Bilgi ve Araştırma" class="rounded-3xl border-4 border-blue-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 4: İLETİŞİM NEDİR?
        {
            id: 4,
            title: "İletişim Nedir? 💬",
            subtitle: "Temel Kavramlar (2/5)",
            topic: "2. Temel Tanım",
            icon: "fa-solid fa-comments",
            bgColor: "from-cyan-600 via-teal-700 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <div class="bg-cyan-950/70 border-2 border-cyan-400/40 rounded-3xl p-6 shadow-xl space-y-3">
                            <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-lg font-black text-xs uppercase tracking-wider">RESMİ TANIM</span>
                            <h2 class="text-xl sm:text-2xl font-black text-white leading-snug">
                                “Bilginin, duygunun veya düşüncenin göndericiden alıcıya aktarılması sürecine <span class="text-yellow-300 underline underline-offset-4">iletişim</span> denir.”
                            </h2>
                        </div>
                        <div class="flex items-center justify-between p-4 bg-slate-900/90 rounded-2xl border border-cyan-400/30 text-white text-xs sm:text-sm font-bold shadow-lg">
                            <div class="flex items-center gap-2 text-cyan-300"><i class="fa-solid fa-user"></i> Gönderici</div>
                            <div class="flex items-center gap-2 text-yellow-300"><i class="fa-solid fa-arrow-right animate-pulse"></i> Mesaj <i class="fa-solid fa-arrow-right animate-pulse"></i></div>
                            <div class="flex items-center gap-2 text-emerald-300"><i class="fa-solid fa-user-check"></i> Alıcı</div>
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/iletisim_ag.jpg" alt="İletişim Süreci" class="rounded-3xl border-4 border-cyan-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 5: TEKNOLOJİ NEDİR?
        {
            id: 5,
            title: "Teknoloji Nedir? ⚙️",
            subtitle: "Temel Kavramlar (3/5)",
            topic: "3. Temel Tanım",
            icon: "fa-solid fa-gears",
            bgColor: "from-amber-600 via-orange-700 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <div class="bg-orange-950/70 border-2 border-orange-400/40 rounded-3xl p-6 shadow-xl space-y-3">
                            <span class="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-lg font-black text-xs uppercase tracking-wider">RESMİ TANIM</span>
                            <h2 class="text-xl sm:text-2xl font-black text-white leading-snug">
                                “İnsan hayatını kolaylaştırmak için başvurulan bilgi, gelişim, yöntem, araç ve teknikler bütünüdür.”
                            </h2>
                        </div>
                        <div class="p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-2xl space-y-2">
                            <span class="text-xs font-black uppercase text-yellow-300 tracking-wider flex items-center gap-2">
                                <i class="fa-solid fa-triangle-exclamation"></i> ÖNEMLİ VURGU
                            </span>
                            <p class="text-sm font-bold text-white">
                                “Teknolojiler faydalı, faydasız veya zararlı olabilir.”
                            </p>
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/teknoloji_araclar.jpg" alt="Teknoloji Araçları" class="rounded-3xl border-4 border-orange-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 6: BİLİŞİM NEDİR?
        {
            id: 6,
            title: "Bilişim Nedir? 💡",
            subtitle: "Temel Kavramlar (4/5)",
            topic: "4. Temel Tanım",
            icon: "fa-solid fa-lightbulb",
            bgColor: "from-purple-600 via-indigo-700 to-slate-900",
            content: `
                <div class="max-w-4xl mx-auto space-y-6 my-auto text-center py-2">
                    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-400/40 font-black text-xs uppercase tracking-wider">
                        TEMEL FORMÜL
                    </div>
                    <div class="bg-gradient-to-r from-blue-900/60 via-purple-900/60 to-indigo-900/60 rounded-3xl p-8 border-2 border-purple-400/40 shadow-2xl space-y-6">
                        <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-2xl sm:text-4xl font-black text-white">
                            <span class="px-6 py-3 bg-blue-600/60 rounded-2xl border border-blue-400 shadow-lg text-blue-200">BİLGİ</span>
                            <span class="text-yellow-300 text-3xl font-black">+</span>
                            <span class="px-6 py-3 bg-teal-600/60 rounded-2xl border border-teal-400 shadow-lg text-teal-200">İLETİŞİM</span>
                            <span class="text-yellow-300 text-3xl font-black">=</span>
                            <span class="px-8 py-3 bg-purple-600 rounded-2xl border-2 border-purple-300 shadow-2xl text-yellow-300">BİLİŞİM</span>
                        </div>
                        <p class="text-base sm:text-lg text-purple-100 max-w-2xl mx-auto font-medium">
                            Bilginin teknoloji ve iletişim araçları vasıtasıyla işlenmesi ve aktarılmasıdır.
                        </p>
                    </div>
                </div>
            `
        },

        // SLAYT 7: BİLİŞİM TEKNOLOJİLERİ NEDİR?
        {
            id: 7,
            title: "Bilişim Teknolojileri (BT) Nedir? 🖥️",
            subtitle: "Temel Kavramlar (5/5)",
            topic: "5. Temel Tanım",
            icon: "fa-solid fa-laptop-code",
            bgColor: "from-blue-700 via-indigo-800 to-slate-900",
            content: `
                <div class="max-w-4xl mx-auto space-y-5 my-auto py-2">
                    <div class="bg-indigo-950/70 border-2 border-indigo-400/40 rounded-3xl p-6 shadow-xl text-center space-y-3">
                        <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-lg font-black text-xs uppercase tracking-wider">RESMİ TANIM</span>
                        <h2 class="text-lg sm:text-xl font-bold text-white leading-relaxed max-w-3xl mx-auto">
                            “Bilginin <span class="text-yellow-300 font-black">toplanması</span>, <span class="text-yellow-300 font-black">işlenmesi</span>, <span class="text-yellow-300 font-black">depolanması</span> ve <span class="text-yellow-300 font-black">kullanılması</span> ile ilgili süreçlerde kullanılan her türlü iletişim cihazları ve bilgisayarları kapsayan teknolojiler bütünüdür.”
                        </h2>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div class="p-3 bg-white/10 rounded-2xl border border-white/10 text-center">
                            <div class="w-10 h-10 bg-blue-500/30 text-blue-300 rounded-xl flex items-center justify-center text-xl mx-auto mb-1"><i class="fa-solid fa-cloud-arrow-down"></i></div>
                            <h4 class="font-black text-white text-xs sm:text-sm">1. Toplanması</h4>
                        </div>
                        <div class="p-3 bg-white/10 rounded-2xl border border-white/10 text-center">
                            <div class="w-10 h-10 bg-purple-500/30 text-purple-300 rounded-xl flex items-center justify-center text-xl mx-auto mb-1"><i class="fa-solid fa-microchip"></i></div>
                            <h4 class="font-black text-white text-xs sm:text-sm">2. İşlenmesi</h4>
                        </div>
                        <div class="p-3 bg-white/10 rounded-2xl border border-white/10 text-center">
                            <div class="w-10 h-10 bg-teal-500/30 text-teal-300 rounded-xl flex items-center justify-center text-xl mx-auto mb-1"><i class="fa-solid fa-hard-drive"></i></div>
                            <h4 class="font-black text-white text-xs sm:text-sm">3. Depolanması</h4>
                        </div>
                        <div class="p-3 bg-white/10 rounded-2xl border border-white/10 text-center">
                            <div class="w-10 h-10 bg-emerald-500/30 text-emerald-300 rounded-xl flex items-center justify-center text-xl mx-auto mb-1"><i class="fa-solid fa-circle-play"></i></div>
                            <h4 class="font-black text-white text-xs sm:text-sm">4. Kullanılması</h4>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 8: BİLİŞİM TEKNOLOJİLERİNİN FAYDALARI
        {
            id: 8,
            title: "Bilişim Teknolojilerinin Faydaları 🌟",
            subtitle: "5 Temel Fayda",
            topic: "Temel Faydalar",
            icon: "fa-solid fa-star",
            bgColor: "from-emerald-700 via-teal-800 to-slate-900",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 my-auto py-2">
                    <div class="text-center space-y-1">
                        <span class="text-xs font-black uppercase text-yellow-300 tracking-widest">KAYNAKTAKİ 5 FAYDA</span>
                        <h3 class="text-2xl sm:text-3xl font-black text-white">Hayatımıza Ne Kazandırır?</h3>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
                        <div class="p-4 bg-slate-900/90 rounded-2xl border border-emerald-500/40 text-center space-y-2 shadow-xl">
                            <div class="w-12 h-12 bg-emerald-500/20 text-emerald-300 rounded-xl flex items-center justify-center text-2xl mx-auto"><i class="fa-solid fa-magnifying-glass"></i></div>
                            <h4 class="font-black text-sm text-emerald-300">Bilgiye Kolay Ulaşma</h4>
                        </div>
                        <div class="p-4 bg-slate-900/90 rounded-2xl border border-emerald-500/40 text-center space-y-2 shadow-xl">
                            <div class="w-12 h-12 bg-teal-500/20 text-teal-300 rounded-xl flex items-center justify-center text-2xl mx-auto"><i class="fa-solid fa-coins"></i></div>
                            <h4 class="font-black text-sm text-teal-300">Maliyeti Azaltma</h4>
                        </div>
                        <div class="p-4 bg-slate-900/90 rounded-2xl border border-emerald-500/40 text-center space-y-2 shadow-xl">
                            <div class="w-12 h-12 bg-yellow-500/20 text-yellow-300 rounded-xl flex items-center justify-center text-2xl mx-auto"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
                            <h4 class="font-black text-sm text-yellow-300">Hayatı Kolaylaştırma</h4>
                        </div>
                        <div class="p-4 bg-slate-900/90 rounded-2xl border border-emerald-500/40 text-center space-y-2 shadow-xl">
                            <div class="w-12 h-12 bg-cyan-500/20 text-cyan-300 rounded-xl flex items-center justify-center text-2xl mx-auto"><i class="fa-solid fa-paper-plane"></i></div>
                            <h4 class="font-black text-sm text-cyan-300">Hızlı Haberleşme</h4>
                        </div>
                        <div class="p-4 bg-slate-900/90 rounded-2xl border border-emerald-500/40 text-center space-y-2 shadow-xl">
                            <div class="w-12 h-12 bg-blue-500/20 text-blue-300 rounded-xl flex items-center justify-center text-2xl mx-auto"><i class="fa-solid fa-stopwatch"></i></div>
                            <h4 class="font-black text-sm text-blue-300">Zamandan Tasarruf</h4>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 9: 1. ALAN - GÜNLÜK YAŞAM VE EĞLENCE
        {
            id: 9,
            title: "1. Alan: Günlük Yaşam ve Eğlence 🎮",
            subtitle: "Kullanım Alanları (1/11)",
            topic: "1. Kullanım Alanı",
            icon: "fa-solid fa-gamepad",
            bgColor: "from-pink-600 via-purple-700 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <div class="space-y-2">
                            <span class="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-lg font-black text-xs uppercase tracking-wider">1. ALAN</span>
                            <h3 class="text-2xl sm:text-3xl font-black text-white">Günlük Yaşam ve Eğlence</h3>
                        </div>
                        <p class="text-sm sm:text-base text-pink-100 leading-relaxed font-medium">
                            Boş zamanlarımızı değerlendirmek, müzik dinlemek, akıllı ev sistemlerini yönetmek ve oyun oynamak için bilişim araçlarını kullanırız.
                        </p>
                        <div class="space-y-2">
                            <div class="p-2.5 bg-white/10 rounded-xl border border-white/10 text-xs text-white flex items-center gap-2">
                                <i class="fa-solid fa-tv text-pink-300"></i> Akıllı TV ve dijital yayın platformları
                            </div>
                            <div class="p-2.5 bg-white/10 rounded-xl border border-white/10 text-xs text-white flex items-center gap-2">
                                <i class="fa-solid fa-headphones text-pink-300"></i> Çevrimiçi müzik dinleme ve eğitici oyunlar
                            </div>
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/teknoloji_araclar.jpg" alt="Günlük Yaşam ve Eğlence" class="rounded-3xl border-4 border-pink-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 10: 2. ALAN - EĞİTİM
        {
            id: 10,
            title: "2. Alan: Eğitim 🎓",
            subtitle: "Kullanım Alanları (2/11)",
            topic: "2. Kullanım Alanı",
            icon: "fa-solid fa-graduation-cap",
            bgColor: "from-blue-600 via-indigo-700 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <div class="space-y-2">
                            <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg font-black text-xs uppercase tracking-wider">2. ALAN</span>
                            <h3 class="text-2xl sm:text-3xl font-black text-white">Eğitim</h3>
                        </div>
                        <p class="text-sm sm:text-base text-blue-100 leading-relaxed font-medium">
                            Okullarda akıllı tahtalar, eğitim platformları (EBA), ders videoları ve dijital kütüphaneler sayesinde öğrenme çok daha kalıcı hale gelir.
                        </p>
                        <div class="space-y-2">
                            <div class="p-2.5 bg-white/10 rounded-xl border border-white/10 text-xs text-white flex items-center gap-2">
                                <i class="fa-solid fa-chalkboard text-blue-300"></i> Akıllı tahta ve etkileşimli ekranlar
                            </div>
                            <div class="p-2.5 bg-white/10 rounded-xl border border-white/10 text-xs text-white flex items-center gap-2">
                                <i class="fa-solid fa-tablet-screen-button text-blue-300"></i> EBA ve dijital ders kitapları
                            </div>
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/bilgi_arastirma.jpg" alt="Eğitim Alanı" class="rounded-3xl border-4 border-blue-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 11: 3. ALAN - ULAŞIM
        {
            id: 11,
            title: "3. Alan: Ulaşım 🚗",
            subtitle: "Kullanım Alanları (3/11)",
            topic: "3. Kullanım Alanı",
            icon: "fa-solid fa-car-side",
            bgColor: "from-teal-600 via-cyan-700 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <div class="space-y-2">
                            <span class="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-lg font-black text-xs uppercase tracking-wider">3. ALAN</span>
                            <h3 class="text-2xl sm:text-3xl font-black text-white">Ulaşım</h3>
                        </div>
                        <p class="text-sm sm:text-base text-teal-100 leading-relaxed font-medium">
                            Navigasyon cihazları en kısa yolu gösterir, akıllı bilet sistemleri sıra beklemeden yolculuk yapmamızı sağlar.
                        </p>
                        <div class="space-y-2">
                            <div class="p-2.5 bg-white/10 rounded-xl border border-white/10 text-xs text-white flex items-center gap-2">
                                <i class="fa-solid fa-map-location-dot text-teal-300"></i> GPS ve navigasyon harita sistemleri
                            </div>
                            <div class="p-2.5 bg-white/10 rounded-xl border border-white/10 text-xs text-white flex items-center gap-2">
                                <i class="fa-solid fa-ticket text-teal-300"></i> Çevrimiçi bilet alma ve akıllı toplu taşıma kartları
                            </div>
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/ulasim_navigasyon.jpg" alt="Ulaşım Alanı" class="rounded-3xl border-4 border-teal-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 12: 4. ALAN - İLETİŞİM
        {
            id: 12,
            title: "4. Alan: İletişim 📱",
            subtitle: "Kullanım Alanları (4/11)",
            topic: "4. Kullanım Alanı",
            icon: "fa-solid fa-tower-broadcast",
            bgColor: "from-blue-600 via-sky-700 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <div class="space-y-2">
                            <span class="px-3 py-1 bg-sky-500/20 text-sky-300 rounded-lg font-black text-xs uppercase tracking-wider">4. ALAN</span>
                            <h3 class="text-2xl sm:text-3xl font-black text-white">İletişim</h3>
                        </div>
                        <p class="text-sm sm:text-base text-sky-100 leading-relaxed font-medium">
                            Görüntülü konuşma uygulamaları, anlık mesajlaşma ve e-posta sistemleri sayesinde sevdiklerimizle kesintisiz haberleşiriz.
                        </p>
                        <div class="space-y-2">
                            <div class="p-2.5 bg-white/10 rounded-xl border border-white/10 text-xs text-white flex items-center gap-2">
                                <i class="fa-solid fa-video text-sky-300"></i> Görüntülü ve sesli konferans görüşmeleri
                            </div>
                            <div class="p-2.5 bg-white/10 rounded-xl border border-white/10 text-xs text-white flex items-center gap-2">
                                <i class="fa-solid fa-envelope text-sky-300"></i> E-posta ve anlık mesajlaşma programları
                            </div>
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/iletisim_ag.jpg" alt="İletişim Alanı" class="rounded-3xl border-4 border-sky-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 13: 5. ALAN - SAĞLIK
        {
            id: 13,
            title: "5. Alan: Sağlık 🏥",
            subtitle: "Kullanım Alanları (5/11)",
            topic: "5. Kullanım Alanı",
            icon: "fa-solid fa-heart-pulse",
            bgColor: "from-rose-600 via-red-700 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <div class="space-y-2">
                            <span class="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-lg font-black text-xs uppercase tracking-wider">5. ALAN</span>
                            <h3 class="text-2xl sm:text-3xl font-black text-white">Sağlık</h3>
                        </div>
                        <p class="text-sm sm:text-base text-rose-100 leading-relaxed font-medium">
                            Hastanelerde kullanılan dijital randevu sistemleri (MHRS), tahlil sonuçları ve modern tıbbi görüntüleme cihazları hayat kurtarır.
                        </p>
                        <div class="space-y-2">
                            <div class="p-2.5 bg-white/10 rounded-xl border border-white/10 text-xs text-white flex items-center gap-2">
                                <i class="fa-solid fa-hospital-user text-rose-300"></i> MHRS online hastane randevusu ve e-Nabız
                            </div>
                            <div class="p-2.5 bg-white/10 rounded-xl border border-white/10 text-xs text-white flex items-center gap-2">
                                <i class="fa-solid fa-x-ray text-rose-300"></i> Röntgen, MR ve ultrason gibi dijital tanı cihazları
                            </div>
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/saglik_teknoloji.jpg" alt="Sağlık Alanı" class="rounded-3xl border-4 border-rose-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 14: 6. ALAN - GÜVENLİK
        {
            id: 14,
            title: "6. Alan: Güvenlik 🛡️",
            subtitle: "Kullanım Alanları (6/11)",
            topic: "6. Kullanım Alanı",
            icon: "fa-solid fa-shield-halved",
            bgColor: "from-slate-700 via-indigo-900 to-slate-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <div class="space-y-2">
                            <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-lg font-black text-xs uppercase tracking-wider">6. ALAN</span>
                            <h3 class="text-2xl sm:text-3xl font-black text-white">Güvenlik</h3>
                        </div>
                        <p class="text-sm sm:text-base text-indigo-100 leading-relaxed font-medium">
                            Şehir güvenlik kameraları (MOBESE), parmak izi okuyucular ve akıllı alarm sistemleri toplumun güvenliğini sağlar.
                        </p>
                        <div class="space-y-2">
                            <div class="p-2.5 bg-white/10 rounded-xl border border-white/10 text-xs text-white flex items-center gap-2">
                                <i class="fa-solid fa-camera text-indigo-300"></i> Şehir güvenlik ve MOBESE kameraları
                            </div>
                            <div class="p-2.5 bg-white/10 rounded-xl border border-white/10 text-xs text-white flex items-center gap-2">
                                <i class="fa-solid fa-fingerprint text-indigo-300"></i> Biyometrik kimlik doğrulama (parmak izi, yüz tanıma)
                            </div>
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/guvenlik_bankacilik.jpg" alt="Güvenlik Alanı" class="rounded-3xl border-4 border-indigo-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 15: 7. ALAN - BANKACILIK VE ALIŞVERİŞ
        {
            id: 15,
            title: "7. Alan: Bankacılık ve Alışveriş 💳",
            subtitle: "Kullanım Alanları (7/11)",
            topic: "7. Kullanım Alanı",
            icon: "fa-solid fa-credit-card",
            bgColor: "from-emerald-700 via-teal-800 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <div class="space-y-2">
                            <span class="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-lg font-black text-xs uppercase tracking-wider">7. ALAN</span>
                            <h3 class="text-2xl sm:text-3xl font-black text-white">Bankacılık ve Alışveriş</h3>
                        </div>
                        <p class="text-sm sm:text-base text-teal-100 leading-relaxed font-medium">
                            ATM cihazları, mobil bankacılık uygulamaları ve çevrimiçi e-ticaret siteleri finansal işlemleri hızlandırır.
                        </p>
                        <div class="space-y-2">
                            <div class="p-2.5 bg-white/10 rounded-xl border border-white/10 text-xs text-white flex items-center gap-2">
                                <i class="fa-solid fa-money-bill-transfer text-teal-300"></i> ATM'ler ve temassız güvenli ödeme
                            </div>
                            <div class="p-2.5 bg-white/10 rounded-xl border border-white/10 text-xs text-white flex items-center gap-2">
                                <i class="fa-solid fa-cart-shopping text-teal-300"></i> İnternetten güvenli alışveriş ve mobil bankacılık
                            </div>
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/guvenlik_bankacilik.jpg" alt="Bankacılık ve Alışveriş" class="rounded-3xl border-4 border-teal-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 16: 8. ALAN - MÜHENDİSLİK VE MİMARİ
        {
            id: 16,
            title: "8. Alan: Mühendislik ve Mimari 📐",
            subtitle: "Kullanım Alanları (8/11)",
            topic: "8. Kullanım Alanı",
            icon: "fa-solid fa-compass-drafting",
            bgColor: "from-amber-700 via-orange-800 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <div class="space-y-2">
                            <span class="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-lg font-black text-xs uppercase tracking-wider">8. ALAN</span>
                            <h3 class="text-2xl sm:text-3xl font-black text-white">Mühendislik ve Mimari</h3>
                        </div>
                        <p class="text-sm sm:text-base text-amber-100 leading-relaxed font-medium">
                            Binaların, köprülerin ve makinelerin çizimi bilgisayar destekli 3 boyutlu tasarım programlarıyla sıfır hatayla yapılır.
                        </p>
                        <div class="space-y-2">
                            <div class="p-2.5 bg-white/10 rounded-xl border border-white/10 text-xs text-white flex items-center gap-2">
                                <i class="fa-solid fa-cubes text-amber-300"></i> 3 Boyutlu mimari modelleme ve CAD çizimleri
                            </div>
                            <div class="p-2.5 bg-white/10 rounded-xl border border-white/10 text-xs text-white flex items-center gap-2">
                                <i class="fa-solid fa-print text-amber-300"></i> 3D yazıcılar ile prototip üretimi
                            </div>
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/uretim_sanayi.jpg" alt="Mühendislik ve Mimari" class="rounded-3xl border-4 border-amber-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 17: 9. ALAN - SİNEMA VE TELEVİZYON
        {
            id: 17,
            title: "9. Alan: Sinema ve Televizyon 🎬",
            subtitle: "Kullanım Alanları (9/11)",
            topic: "9. Kullanım Alanı",
            icon: "fa-solid fa-clapperboard",
            bgColor: "from-purple-700 via-pink-800 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <div class="space-y-2">
                            <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg font-black text-xs uppercase tracking-wider">9. ALAN</span>
                            <h3 class="text-2xl sm:text-3xl font-black text-white">Sinema ve Televizyon</h3>
                        </div>
                        <p class="text-sm sm:text-base text-purple-100 leading-relaxed font-medium">
                            Çizgi filmler, büyüleyici görsel efektler (CGI), ses montajları ve dijital kurgular bilişim teknolojileriyle üretilir.
                        </p>
                        <div class="space-y-2">
                            <div class="p-2.5 bg-white/10 rounded-xl border border-white/10 text-xs text-white flex items-center gap-2">
                                <i class="fa-solid fa-wand-magic-sparkles text-purple-300"></i> Bilgisayar destekli görsel efektler (CGI)
                            </div>
                            <div class="p-2.5 bg-white/10 rounded-xl border border-white/10 text-xs text-white flex items-center gap-2">
                                <i class="fa-solid fa-film text-purple-300"></i> Dijital animasyonlar ve ses montaj stüdyoları
                            </div>
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/tech_discovery.jpg" alt="Sinema ve Televizyon" class="rounded-3xl border-4 border-purple-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 18: 10. ALAN - BİLİM VE UZAY
        {
            id: 18,
            title: "10. Alan: Bilim ve Uzay 🚀",
            subtitle: "Kullanım Alanları (10/11)",
            topic: "10. Kullanım Alanı",
            icon: "fa-solid fa-rocket",
            bgColor: "from-indigo-800 via-blue-900 to-slate-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <div class="space-y-2">
                            <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-lg font-black text-xs uppercase tracking-wider">10. ALAN</span>
                            <h3 class="text-2xl sm:text-3xl font-black text-white">Bilim ve Uzay</h3>
                        </div>
                        <p class="text-sm sm:text-base text-cyan-100 leading-relaxed font-medium">
                            Uzay teleskopları, yapay uydular ve süper bilgisayarlar evreni keşfetmemizi ve bilimsel araştırmalar yapmamızı sağlar.
                        </p>
                        <div class="space-y-2">
                            <div class="p-2.5 bg-white/10 rounded-xl border border-white/10 text-xs text-white flex items-center gap-2">
                                <i class="fa-solid fa-satellite text-cyan-300"></i> Yapay uydular ve uzay teleskopları
                            </div>
                            <div class="p-2.5 bg-white/10 rounded-xl border border-white/10 text-xs text-white flex items-center gap-2">
                                <i class="fa-solid fa-meteor text-cyan-300"></i> Gezegen araştırmaları ve hava tahmin modelleri
                            </div>
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/bilim_uzay.jpg" alt="Bilim ve Uzay Alanı" class="rounded-3xl border-4 border-cyan-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 19: 11. ALAN - ÜRETİM VE SANAYİ
        {
            id: 19,
            title: "11. Alan: Üretim ve Sanayi 🏭",
            subtitle: "Kullanım Alanları (11/11)",
            topic: "11. Kullanım Alanı",
            icon: "fa-solid fa-industry",
            bgColor: "from-slate-700 via-zinc-800 to-slate-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <div class="space-y-2">
                            <span class="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-lg font-black text-xs uppercase tracking-wider">11. ALAN</span>
                            <h3 class="text-2xl sm:text-3xl font-black text-white">Üretim ve Sanayi</h3>
                        </div>
                        <p class="text-sm sm:text-base text-zinc-100 leading-relaxed font-medium">
                            Fabrikalarda otomatik robot kollar, insansız üretim bantları ve akıllı depolar seri ve hatasız üretimi mümkün kılar.
                        </p>
                        <div class="space-y-2">
                            <div class="p-2.5 bg-white/10 rounded-xl border border-white/10 text-xs text-white flex items-center gap-2">
                                <i class="fa-solid fa-robot text-yellow-300"></i> Otomatik montaj yapan robot kollar
                            </div>
                            <div class="p-2.5 bg-white/10 rounded-xl border border-white/10 text-xs text-white flex items-center gap-2">
                                <i class="fa-solid fa-boxes-stacked text-yellow-300"></i> Akıllı depo ve otomatik lojistik sistemleri
                            </div>
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/uretim_sanayi.jpg" alt="Üretim ve Sanayi" class="rounded-3xl border-4 border-yellow-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 20: 11 KULLANIM ALANI ÖZET ŞEMASI
        {
            id: 20,
            title: "11 Kullanım Alanı Özet Şeması 🗺️",
            subtitle: "Toplu Bakış",
            topic: "Özet Tablo",
            icon: "fa-solid fa-sitemap",
            bgColor: "from-blue-800 via-indigo-900 to-slate-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <div class="text-center space-y-1">
                        <span class="text-xs font-black uppercase text-yellow-300 tracking-widest">GENEL BAKIŞ</span>
                        <h3 class="text-2xl sm:text-3xl font-black text-white">Bilişim Teknolojilerinin 11 Kullanım Alanı</h3>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2.5 pt-2 text-center text-xs">
                        <div class="p-3 bg-white/10 rounded-xl border border-white/10"><i class="fa-solid fa-gamepad text-pink-400 text-lg block mb-1"></i>1. Günlük Yaşam</div>
                        <div class="p-3 bg-white/10 rounded-xl border border-white/10"><i class="fa-solid fa-graduation-cap text-blue-400 text-lg block mb-1"></i>2. Eğitim</div>
                        <div class="p-3 bg-white/10 rounded-xl border border-white/10"><i class="fa-solid fa-car text-teal-400 text-lg block mb-1"></i>3. Ulaşım</div>
                        <div class="p-3 bg-white/10 rounded-xl border border-white/10"><i class="fa-solid fa-tower-broadcast text-sky-400 text-lg block mb-1"></i>4. İletişim</div>
                        <div class="p-3 bg-white/10 rounded-xl border border-white/10"><i class="fa-solid fa-heart-pulse text-red-400 text-lg block mb-1"></i>5. Sağlık</div>
                        <div class="p-3 bg-white/10 rounded-xl border border-white/10"><i class="fa-solid fa-shield text-indigo-400 text-lg block mb-1"></i>6. Güvenlik</div>
                        <div class="p-3 bg-white/10 rounded-xl border border-white/10"><i class="fa-solid fa-credit-card text-emerald-400 text-lg block mb-1"></i>7. Bankacılık</div>
                        <div class="p-3 bg-white/10 rounded-xl border border-white/10"><i class="fa-solid fa-compass-drafting text-amber-400 text-lg block mb-1"></i>8. Mimarlık</div>
                        <div class="p-3 bg-white/10 rounded-xl border border-white/10"><i class="fa-solid fa-clapperboard text-purple-400 text-lg block mb-1"></i>9. Sinema-TV</div>
                        <div class="p-3 bg-white/10 rounded-xl border border-white/10"><i class="fa-solid fa-rocket text-cyan-400 text-lg block mb-1"></i>10. Bilim-Uzay</div>
                        <div class="p-3 bg-white/10 rounded-xl border border-white/10 col-span-2 sm:col-span-2"><i class="fa-solid fa-industry text-yellow-400 text-lg block mb-1"></i>11. Üretim ve Sanayi</div>
                    </div>
                </div>
            `
        },

        // SLAYT 21: 1. HAFTA DERS ÖZETİ
        {
            id: 21,
            title: "1. Hafta Ders Özeti 📋",
            subtitle: "Neler Öğrendik?",
            topic: "Kavram Haritası",
            icon: "fa-solid fa-clipboard-check",
            bgColor: "from-indigo-800 via-purple-900 to-slate-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 my-auto py-2">
                    <div class="text-center space-y-1">
                        <span class="text-xs font-black uppercase text-yellow-300 tracking-widest">KAVRAM HARİTASI</span>
                        <h3 class="text-2xl sm:text-3xl font-black text-white">Dersimizin Özeti</h3>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                        <div class="p-3.5 bg-slate-900/90 rounded-2xl border border-blue-500/40 space-y-1">
                            <strong class="text-blue-300 block text-sm">BİLGİ & İLETİŞİM:</strong>
                            <span class="text-slate-200">Gerçeklerin öğrenilmesi ve bu bilgilerin göndericiden alıcıya aktarılması süreci.</span>
                        </div>
                        <div class="p-3.5 bg-slate-900/90 rounded-2xl border border-orange-500/40 space-y-1">
                            <strong class="text-orange-300 block text-sm">TEKNOLOJİ & BİLİŞİM:</strong>
                            <span class="text-slate-200">Hayatı kolaylaştıran araçlar ve Bilgi + İletişim birlikteliği.</span>
                        </div>
                        <div class="p-3.5 bg-slate-900/90 rounded-2xl border border-emerald-500/40 space-y-1">
                            <strong class="text-emerald-300 block text-sm">5 TEMEL FAYDA:</strong>
                            <span class="text-slate-200">Kolay bilgi, düşük maliyet, kolay hayat, hızlı haberleşme ve zaman tasarrufu.</span>
                        </div>
                        <div class="p-3.5 bg-slate-900/90 rounded-2xl border border-purple-500/40 space-y-1">
                            <strong class="text-purple-300 block text-sm">11 KULLANIM ALANI:</strong>
                            <span class="text-slate-200">Eğitimden sağlığa, uzaydan sanayiye kadar hayatın her alanında BT yanımızda.</span>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 22: KAPANIŞ
        {
            id: 22,
            title: "DERSİMİZ TAMAMLANDI! 👏",
            subtitle: "1. Hafta Kapanış",
            topic: "Kapanış Mesajı",
            icon: "fa-solid fa-flag-checkered",
            bgColor: "from-blue-700 via-indigo-900 to-slate-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-7 space-y-4 text-left">
                        <span class="px-4 py-1.5 bg-yellow-400/20 text-yellow-300 font-black text-xs uppercase tracking-wider rounded-full border border-yellow-400/40">
                            TEBRİKLER!
                        </span>
                        <h2 class="text-2xl sm:text-4xl font-black text-white leading-tight">
                            “BİLİŞİM TEKNOLOJİLERİ GÜNLÜK YAŞAMIMIZIN BİRÇOK ALANINDA KULLANILIR.”
                        </h2>
                        <div class="pt-2">
                            <span class="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-yellow-300 font-bold text-base shadow-xl">
                                <i class="fa-solid fa-award text-2xl"></i>
                                <span>1. Hafta • Öğretmen Bozok</span>
                            </span>
                        </div>
                    </div>
                    <div class="md:col-span-5 flex justify-center">
                        <img src="assets/slides/tech_discovery.jpg" alt="Kapanış" class="rounded-3xl border-4 border-yellow-400/40 shadow-2xl max-h-64 object-cover" />
                    </div>
                </div>
            `
        }
    ],

    worksheet: {
        title: "5. Sınıf Bilişim Teknolojileri - Çalışma Kağıdı",
        subtitle: "1. Hafta - 1. Konu: Bilişim Teknolojilerinin Günlük Yaşamdaki Önemi",
        author: "Öğretmen Bozok",
        tasks: [
            {
                id: "evde_uygula",
                title: "1. EVDE UYGULA",
                description: "Evinde veya çevrende bulunan 5 bilişim teknolojisini bul ve tabloya yaz:",
                items: [
                    { id: 1, sampleTech: "Akıllı Telefon", sampleArea: "İletişim", sampleUse: "Haberleşme, mesajlaşma, internete erişim sağlar." },
                    { id: 2, sampleTech: "ATM", sampleArea: "Bankacılık", sampleUse: "Para çekme, yatırma ve banka işlemlerini yapmayı sağlar." },
                    { id: 3, sampleTech: "Akıllı Tahta", sampleArea: "Eğitim", sampleUse: "Derslerin görsel ve etkileşimli işlenmesini sağlar." },
                    { id: 4, sampleTech: "Navigasyon", sampleArea: "Ulaşım", sampleUse: "Yol tarifi verir, hedefimize kolay ulaşmamızı sağlar." },
                    { id: 5, sampleTech: "Robot Süpürge", sampleArea: "Günlük Yaşam", sampleUse: "Ev temizliğini harita çıkararak otomatik yapar." }
                ]
            },
            {
                id: "teknoloji_dedektifi",
                title: "2. TEKNOLOJİ DEDEKTİFİ",
                description: "Evinde veya okulunda gördüğün bir teknolojiyi seç ve dedektif gibi incele:",
                fields: {
                    techName: "Akıllı Saat",
                    areas: ["Eğitim", "Ulaşım", "Sağlık", "İletişim", "Eğlence", "Bankacılık ve Alışveriş"],
                    selectedArea: "İletişim & Sağlık",
                    helpExplanation: "Aramaları ve mesajları takip etmemi sağlar. Ayrıca adım sayar, kalp ritmini ölçer ve sağlığımı kontrol eder."
                }
            },
            {
                id: "dusun_karar_ver",
                title: "3. DÜŞÜN VE KARAR VER",
                description: "Bir gün boyunca hiç bilişim teknolojisi kullanmasaydık hayatımızda neler değişirdi? 3 örnek yaz:",
                sampleAnswers: [
                    "Uzaklardaki akraba ve arkadaşlarımızla anında haberleşmek zorlaşırdı.",
                    "Ödevlerimiz için kütüphanelere gitmek ve saatlerce kitap aramak gerekirdi.",
                    "Yolumuzu bulmak için haritaları incelemek ve yolda kaybolma riski artardı."
                ]
            },
            {
                id: "mini_gorev",
                title: "4. MİNİ GÖREV",
                description: "Ailenden bir kişiye şu soruyu sor: 'Günlük hayatta en çok hangi teknolojiyi kullanıyorsun ve neden?'",
                sampleAnswer: "Anneme sordum: En çok akıllı telefonunu kullandığını, hem iş mesajlarını takip ettiğini hem de sevdikleriyle iletişimde kaldığını söyledi."
            },
            {
                id: "dogru_oturus",
                title: "5. ÖĞRENCİ HATALARI - DOĞRU OTURUŞ (ERGONOMİ)",
                wrongList: [
                    "Başın çok önde olması",
                    "Sırtın kambur durması",
                    "Ekrana aşırı yakından bakmak",
                    "Dirseklerin desteksiz boşta kalması",
                    "Ayakların yere basmayıp sallanması"
                ],
                correctList: [
                    "Baş dik ve gözler ekran hizasında olmalı",
                    "Sırt dik ve arkaya tam yaslanmalı",
                    "Ekran ile göz arasında kol mesafesi olmalı",
                    "Dirsekler ve dizler 90 derece açıda durmalı",
                    "Ayaklar yere düz ve dengeli basmalı"
                ]
            }
        ]
    },

    // ❓ 3. PEKİŞTİRME SORULARI & TESTLERİ (1.1 Soru ve 1.1 Cevap ile Birebir Uyumlu)
    questions: [
        {
            id: 1,
            type: "matching",
            title: "Teknoloji - Kullanım Alanı Eşleştirmesi",
            description: "Aşağıdaki bilişim teknolojilerini en çok kullanıldığı alanla eşleştiriniz:",
            pairs: [
                { left: "ATM", right: "Bankacılık ve Alışveriş", leftIcon: "fa-solid fa-credit-card" },
                { left: "Akıllı Saat", right: "İletişim ve Sağlık", leftIcon: "fa-solid fa-clock" },
                { left: "Online Ders Platformu (EBA)", right: "Eğitim", leftIcon: "fa-solid fa-graduation-cap" },
                { left: "Navigasyon Uygulaması", right: "Ulaşım", leftIcon: "fa-solid fa-location-dot" },
                { left: "Online Alışveriş Sitesi", right: "Bankacılık ve Alışveriş", leftIcon: "fa-solid fa-cart-shopping" }
            ]
        },
        {
            id: 2,
            type: "true_false",
            title: "Doğru / Yanlış Soruları",
            description: "Aşağıdaki ifadelerin doğru mu yoksa yanlış mı olduğunu işaretleyiniz:",
            items: [
                {
                    statement: "Bilişim teknolojileri sadece bilgisayar ve internetten oluşur.",
                    isCorrect: false,
                    explanation: "Yanlış! Bilişim teknolojileri akıllı saat, navigasyon, ATM, robotlar gibi tüm bilgi ve iletişim araçlarını kapsar."
                },
                {
                    statement: "Teknolojiler doğru kullanıldığında günlük hayatımızı kolaylaştırır ve zamandan tasarruf sağlar.",
                    isCorrect: true,
                    explanation: "Doğru! İşlemleri hızlandırır ve bilgiye anında ulaşmamızı sağlar."
                },
                {
                    statement: "Bilişim teknolojileri insanlara sadece zarar verir, hiçbir faydası yoktur.",
                    isCorrect: false,
                    explanation: "Yanlış! Bilişim teknolojilerinin sayısız faydası vardır; yalnızca bilinçsiz ve aşırı kullanıldığında zararlı olur."
                },
                {
                    statement: "Bankacılık işlemlerini yaparken ve para çekerken de bilişim teknolojilerinden yararlanırız.",
                    isCorrect: true,
                    explanation: "Doğru! ATM'ler ve mobil bankacılık bilişim teknolojisinin bankacılık alanındaki örnekleridir."
                },
                {
                    statement: "Teknolojileri bilinçli kullanmak beden ve ruh sağlığımızı korur.",
                    isCorrect: true,
                    explanation: "Doğru! Süre sınırlaması koymak ve doğru oturuş kurallarına uymak sağlığımızı korur."
                }
            ]
        },
        {
            id: 3,
            type: "multiple_choice",
            title: "Çoktan Seçmeli Pekiştirme Testi",
            questions: [
                {
                    q: "'Öğrenme, araştırma veya gözlem yoluyla elde edilen gerçekler' ifadesi hangi kavramın tanımıdır?",
                    options: ["Teknoloji", "Bilgi", "İletişim", "Donanım"],
                    answer: 1,
                    explanation: "Bilgi: Öğrenme, araştırma ve gözlem yoluyla elde edilen gerçeklerdir."
                },
                {
                    q: "'Bilgi + İletişim' formülünün karşılığı aşağıdakilerden hangisidir?",
                    options: ["İnternet", "Bilişim", "Yazılım", "Ergonomi"],
                    answer: 1,
                    explanation: "Bilgi ve İletişim kelimelerinin birleşimiyle 'Bilişim' kavramı oluşur."
                },
                {
                    q: "Bilgisayar karşısında otururken ekran ile gözümüz arasındaki mesafe ne kadar olmalıdır?",
                    options: ["10 cm", "Bir kol mesafesi (50-70 cm)", "2 metre", "Fark etmez"],
                    answer: 1,
                    explanation: "Göz sağlığımızı korumak için ekranla aramızda yaklaşık bir kol mesafesi (50-70 cm) bulunmalıdır."
                },
                {
                    q: "Aşağıdakilerden hangisi bilişim teknolojilerinin olumsuz (zararlı) bir etkisidir?",
                    options: [
                        "Bilgiye saniyeler içinde ulaşmak",
                        "Hareketsiz yaşam ve duruş bozuklukları",
                        "Zamandan ve maliyetten tasarruf sağlamak",
                        "Uzaklardaki insanlarla kolayca iletişim kurmak"
                    ],
                    answer: 1,
                    explanation: "Uzun süre hareketsiz bilgisayar başında oturmak duruş bozukluklarına ve hareketsizliğe yol açar."
                }
            ]
        }
    ],

    // 🎮 4. OYUNLAR İÇİN ÖZEL VERİ SETLERİ
    gameData: {
        // Çarkıfelek & Bilgi Yarışması Soruları
        wheelQuiz: [
            {
                question: "Bilgi ile iletişim kelimelerinin birleşimiyle oluşan kavram nedir?",
                options: ["Teknoloji", "Bilişim", "Yazılım", "Donanım"],
                answer: 1,
                points: 100
            },
            {
                question: "Hastane randevusu almak (MHRS) bilişim teknolojilerinin hangi alanına girer?",
                options: ["Eğitim", "Sağlık", "Ulaşım", "Güvenlik"],
                answer: 1,
                points: 100
            },
            {
                question: "Bilgisayar karşısında dirseklerimiz ve dizlerimiz kaç derece açıda olmalıdır?",
                options: ["45°", "90°", "180°", "30°"],
                answer: 1,
                points: 150
            },
            {
                question: "Harita ve yol tarifi almamızı sağlayan teknoloji hangisidir?",
                options: ["Navigasyon", "ATM", "Yazıcı", "Hoparlör"],
                answer: 0,
                points: 100
            },
            {
                question: "Hangisi bilişim teknolojilerinin faydalarından biridir?",
                options: ["Hareketsizliği artırması", "Zamandan tasarruf sağlaması", "Sosyal bağları koparması", "Gözleri yorması"],
                answer: 1,
                points: 100
            },
            {
                question: "Para çekip yatırdığımız banka cihazı hangisidir?",
                options: ["Modem", "ATM", "Projeksiyon", "Tarayıcı"],
                answer: 1,
                points: 100
            },
            {
                question: "İnsan hayatını kolaylaştırmak için geliştirilen araç ve teknikler bütününe ne denir?",
                options: ["Teknoloji", "İletişim", "Gözlem", "Problem"],
                answer: 0,
                points: 150
            },
            {
                question: "Bilgisayar ekranına bakarken başımızın duruşu nasıl olmalıdır?",
                options: ["Çok öne eğik", "Gözler ekran hizasında ve dik", "Çok geride", "Sağa yatık"],
                answer: 1,
                points: 150
            }
        ],

        // Eşleştirme Oyunu Kartları
        matchCards: [
            { id: 1, text: "ATM", category: "Bankacılık & Alışveriş", icon: "fa-solid fa-credit-card" },
            { id: 2, text: "Akıllı Tahta", category: "Eğitim", icon: "fa-solid fa-chalkboard" },
            { id: 3, text: "Navigasyon", category: "Ulaşım", icon: "fa-solid fa-location-arrow" },
            { id: 4, text: "Görüntülü Arama", category: "İletişim", icon: "fa-solid fa-video" },
            { id: 5, text: "MHRS Randevu", category: "Sağlık", icon: "fa-solid fa-hospital" },
            { id: 6, text: "Güvenlik Kamerası", category: "Güvenlik", icon: "fa-solid fa-shield-halved" },
            { id: 7, text: "Online Oyun", category: "Günlük Yaşam & Eğlence", icon: "fa-solid fa-gamepad" },
            { id: 8, text: "3D Çizim Programı", category: "Mühendislik & Mimari", icon: "fa-solid fa-pen-ruler" }
        ],

        // Hızlı Doğru / Yanlış Refleks Kartları
        reflexStatements: [
            { text: "ATM bankacılık alanında kullanılan bir bilişim teknolojisidir.", correct: true },
            { text: "Bilgisayar karşısında kambur oturmak omurga sağlığı için iyidir.", correct: false },
            { text: "Bilişim = Bilgi + İletişim kelimelerinden oluşur.", correct: true },
            { text: "Teknolojiyi günde 10 saat kesintisiz kullanmak çok sağlıklıdır.", correct: false },
            { text: "Navigasyon ulaşım alanında yol bulmayı kolaylaştırır.", correct: true },
            { text: "Bilişim teknolojileri bilgiye hızlı ve kolay ulaşmamızı sağlar.", correct: true },
            { text: "Monitör ile gözümüz arasında sadece 5 cm mesafe olmalıdır.", correct: false },
            { text: "EBA sistemi eğitim alanında kullanılan bir teknolojidir.", correct: true },
            { text: "Bilişim teknolojisi sadece masaüstü bilgisayarlardan ibarettir.", correct: false },
            { text: "Teknolojiyi bilinçli kullanmak zamandan tasarruf sağlar.", correct: true }
        ],

        // Sınıf Düellosu Soruları (2 Takımlı Yarışma)
        duelQuestions: [
            {
                q: "Bilgi + İletişim = ?",
                options: ["Teknoloji", "Bilişim", "İnternet", "Donanım"],
                answer: 1
            },
            {
                q: "ATM hangi alanda kullanılır?",
                options: ["Sağlık", "Bankacılık", "Eğitim", "Tarım"],
                answer: 1
            },
            {
                q: "Ekran ile göz arasındaki doğru mesafe?",
                options: ["10 cm", "Kol mesafesi (50-70 cm)", "2 metre", "5 metre"],
                answer: 1
            },
            {
                q: "MHRS ve Tomografi hangi alana örnektir?",
                options: ["Sağlık", "Ulaşım", "Eğlence", "Sanayi"],
                answer: 0
            },
            {
                q: "Hangisi teknolojinin olumsuz yönüdür?",
                options: ["Maliyeti azaltması", "Hareketsizlik ve obezite", "Hızlı haberleşme", "Zamandan tasarruf"],
                answer: 1
            },
            {
                q: "Hangisi iletişim alanına örnektir?",
                options: ["Akıllı Telefon", "Robot Süpürge", "Trafik Lambası", "Termometre"],
                answer: 0
            },
            {
                q: "Doğru oturuşta diz ve dirsek açısı kaç derece olmalıdır?",
                options: ["45°", "90°", "120°", "180°"],
                answer: 1
            },
            {
                q: "Akıllı tahta hangi alana örnektir?",
                options: ["Eğitim", "Ulaşım", "Bankacılık", "Mühendislik"],
                answer: 0
            }
        ]
    }
};
