// ==========================================
// 5. SINIF BİLİŞİM TEKNOLOJİLERİ VE YAZILIM
// 2. TEMA: DİJİTAL ÜRÜN TASARIMI VE GELİŞTİRME
// 8. KONU (BTY.5.2.2 & BTY.5.2.3): Canva ile Görsel Tasarlama
// Kurgu Oluşturma ve Görsel Dosyası Geliştirme
// Hazırlayan: Öğretmen Bozok • Eksiksiz Akıllı Tahta Paketi
// ==========================================

window.WEEK8_CONTENT = {
    weekInfo: {
        weekNumber: 8,
        topicNumber: 8,
        customLabel: "8. Konu",
        title: "Canva ile Görsel Tasarlama (Kurgu ve Görsel Dosyası Geliştirme)",
        code: "BTY.5.2.2 Görsel için kurgu oluşturabilme, BTY.5.2.3 Görsel dosyası geliştirebilme",
        theme: "2. Tema: Dijital Ürün Tasarımı ve Geliştirme",
        isPending: false,
        themeColor: "from-purple-600 via-indigo-600 to-cyan-700",
        learningGoals: [
            "Görsel tasarlanacak gerçek hayat problemlerini fark eder ve açıklar.",
            "Görsel tasarımın hedef kitlesini ve temel amacını (bilgilendirme, uyarma, farkındalık) belirler.",
            "Hikâye unsurlarını (Karakter, Mekân, Olay, Mesaj) kullanarak 3 karelik storyboard kurgusu oluşturur.",
            "Canva arayüzünü, hazır şablonları, metin, öğeler ve yükleme araçlarını etkin kullanır.",
            "Yapay zekâ araçlarına uygun ve ayrıntılı promptlar yazar, tasarımlarını kalite ölçütlerine göre değerlendirir."
        ],
        images: {
            cover: "assets/slides/tech_discovery.jpg",
            sayfa1: "assets/worksheets/2.2_sayfa1.png",
            sayfa2: "assets/worksheets/2.2_sayfa2.png",
            sayfa3: "assets/worksheets/2.2_sayfa3.png",
            sayfa4: "assets/worksheets/2.2_sayfa4.png"
        }
    },

    extraGames: [
        {
            id: "problem_avcisi",
            badge: "Hedef Avı 🎯",
            badgeColor: "text-cyan-300",
            title: "1. Problem Avcısı",
            desc: "Günlük yaşam durumlarını incele; temel problemi, hedef kitleyi ve tasarım amacını eksiksiz yakala!",
            icon: "fa-solid fa-bullseye",
            iconBg: "bg-cyan-500/30 text-cyan-300",
            cardGradient: "from-cyan-950/90 via-slate-900 to-blue-950/90",
            border: "border-cyan-500/50",
            descColor: "text-cyan-100",
            btnText: "Problemleri Avla!",
            btnIcon: "fa-solid fa-bullseye",
            btnGradient: "from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-black",
            action: "app.openStandaloneGame('games/problem_avcisi.html', 'Problem Avcısı | Öğretmen Bozok')"
        },
        {
            id: "senaryo_mimari",
            badge: "Kurgu & Storyboard 🎬",
            badgeColor: "text-indigo-300",
            title: "2. Senaryo Mimarı",
            desc: "Karakter, mekân, olay ve mesajı birleştir; olayları Başlangıç-Gelişme-Sonuç olarak sıralayıp senaryonu inşa et!",
            icon: "fa-solid fa-clapperboard",
            iconBg: "bg-indigo-500/30 text-indigo-300",
            cardGradient: "from-indigo-950/90 via-slate-900 to-purple-950/90",
            border: "border-indigo-500/50",
            descColor: "text-indigo-100",
            btnText: "Senaryoyu Kur!",
            btnIcon: "fa-solid fa-masks-theater",
            btnGradient: "from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-black",
            action: "app.openStandaloneGame('games/senaryo_mimari.html', 'Senaryo Mimarı | Öğretmen Bozok')"
        },
        {
            id: "canva_ustasi",
            badge: "Tasarım Atölyesi 🎨",
            badgeColor: "text-purple-300",
            title: "3. Canva Ustası",
            desc: "Canva araçlarını (Şablonlar, Öğeler, Metin, Yüklemeler) tanı, afiş iş akışını yönet ve yapay zekâ komutunu güçlendir!",
            icon: "fa-solid fa-wand-magic-sparkles",
            iconBg: "bg-purple-500/30 text-purple-300",
            cardGradient: "from-purple-950/90 via-slate-900 to-pink-950/90",
            border: "border-purple-500/50",
            descColor: "text-purple-100",
            btnText: "Atölyeye Gir!",
            btnIcon: "fa-solid fa-wand-magic-sparkles",
            btnGradient: "from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-black",
            action: "app.openStandaloneGame('games/canva_ustasi.html', 'Canva Ustası | Öğretmen Bozok')"
        },
        {
            id: "tasarim_dedektifleri",
            badge: "Dedektiflik & Rubrik 🔍",
            badgeColor: "text-emerald-300",
            title: "4. Tasarım Dedektifleri",
            desc: "Kusurlu afişlerdeki tipografi, renk ve içerik hatalarını yakala, tasarımları düzelt ve 5 altın kalite kuralını onayla!",
            icon: "fa-solid fa-magnifying-glass-chart",
            iconBg: "bg-emerald-500/30 text-emerald-300",
            cardGradient: "from-emerald-950/90 via-slate-900 to-teal-950/90",
            border: "border-emerald-500/50",
            descColor: "text-emerald-100",
            btnText: "Hataları Yakala!",
            btnIcon: "fa-solid fa-user-secret",
            btnGradient: "from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black",
            action: "app.openStandaloneGame('games/tasarim_dedektifleri.html', 'Tasarım Dedektifleri | Öğretmen Bozok')"
        }
    ],

    gameData: {
        wheelQuiz: [
            {
                question: "Bir görsel tasarlamaya başlamadan önceki İLK adım hangisidir?",
                options: ["Görseli hemen kaydetmek", "Problemi ve afişin amacını belirlemek", "Rastgele resimler eklemek", "Yazı rengini seçmek"],
                answer: 1
            },
            {
                question: "Görselin kimler için hazırlandığını belirten kavrama ne ad verilir?",
                options: ["Hedef kitle", "Dosya formatı", "Görsel boyutu", "İndirme alanı"],
                answer: 0
            },
            {
                question: "Bir hikâyede olayların yaşandığı çevre ve fiziki alana ne ad verilir?",
                options: ["Karakter", "Mekân", "Mesaj", "Olay"],
                answer: 1
            },
            {
                question: "Afiş veya görsel senaryosunda izleyiciye aktarılmak istenen temel düşünceye ne ad verilir?",
                options: ["Mesaj", "Şablon", "Araç", "Font"],
                answer: 0
            },
            {
                question: "Canva'da hazır profesyonel tasarım düzenlerini bulmak için hangi bölüme gidilir?",
                options: ["Şablonlar", "Yüklemeler", "Projeler", "İndir"],
                answer: 0
            },
            {
                question: "Canva'da tasarıma simge, şekil, çizgi ve çıkartmalar eklemek için hangi sekme kullanılır?",
                options: ["Metin", "Öğeler", "Dosya", "Katman"],
                answer: 1
            },
            {
                question: "Bilgisayarındaki bir fotoğrafı Canva afişine eklemek için hangi araç seçilir?",
                options: ["Şablonlar", "Metin", "Yüklemeler", "Bileşenler"],
                answer: 2
            },
            {
                question: "Hikâyeyi 3 karede görsel taslağa dönüştürme planına ne ad verilir?",
                options: ["Storyboard", "Vektör", "Bitmap", "Piksel"],
                answer: 0
            },
            {
                question: "Yapay zekâya görsel ürettirirken yazılan yönlendirici komutlara ne ad verilir?",
                options: ["Prompt", "Piksel", "Uzantı", "Format"],
                answer: 0
            },
            {
                question: "Afişte ana başlık ile alt metin arasındaki boyutsal vurgu farkına ne ad verilir?",
                options: ["Görsel Hiyerarşi", "Kırpma", "Döndürme", "Şeffaflık"],
                answer: 0
            },
            {
                question: "Açık renk arka plan üzerine açık renk yazı yazılması hangi tasarım kuralına aykırıdır?",
                options: ["Kontrast (Zıtlık) ve Okunabilirlik", "Telif Hakkı", "Dosya Boyutu", "Çözünürlük"],
                answer: 0
            },
            {
                question: "Okul panosuna kaliteli fiziksel baskı almak için hangi dosya formatı tercih edilmelidir?",
                options: ["Baskı PDF'si (PDF Print)", "Düşük kaliteli GIF", "Ham metin .txt", "MP3 ses"],
                answer: 0
            }
        ]
    },

    slides: [
        // BÖLÜM 1: GÖRSEL TASARIMI TANIMA (Slayt 1 - 4)
        {
            id: 1,
            title: "CANVA İLE GÖRSEL TASARLAMA 🎨",
            subtitle: "8. KONU • BTY.5.2.2 & BTY.5.2.3",
            topic: "2. TEMA • BTY.5.2.2 & BTY.5.2.3",
            badge: "GİRİŞ & KAZANIM",
            icon: "fa-solid fa-wand-magic-sparkles",
            bgColor: "from-slate-900 via-purple-950 to-indigo-950",
            gradient: "from-slate-900 via-purple-950 to-indigo-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-6xl mx-auto my-auto py-2">
                    <div class="md:col-span-7 space-y-4 text-left">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="px-4 py-1.5 bg-purple-500/20 text-purple-300 font-extrabold text-sm sm:text-base uppercase tracking-wider rounded-full border border-purple-400/40 shadow-sm">
                                2. TEMA: DİJİTAL ÜRÜN TASARIMI VE GELİŞTİRME
                            </span>
                            <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 font-bold text-xs rounded-full border border-cyan-400/30">
                                ⚡ BTY.5.2.2 & BTY.5.2.3
                            </span>
                        </div>
                        <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                            Canva ile <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Görsel Tasarlama</span>
                        </h1>
                        <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
                            Bir görsel yalnızca renk ve çizgilerden ibaret değildir! Güçlü bir afiş; gerçek bir <strong>problemi</strong> fark etmekle başlar, <strong>hedef kitleyi</strong> belirler, etkileyici bir <strong>senaryo</strong> kurar ve <strong>Canva</strong> ile yapay zekâ araçlarıyla hayat bulur.
                        </p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <div class="p-3 bg-purple-900/40 border border-purple-500/30 rounded-2xl flex items-center gap-3">
                                <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-black text-lg">1</div>
                                <div>
                                    <div class="font-black text-white text-xs sm:text-sm">BTY.5.2.2: Kurgu</div>
                                    <div class="text-[11px] text-purple-200">Problem, hedef kitle & senaryo</div>
                                </div>
                            </div>
                            <div class="p-3 bg-cyan-900/40 border border-cyan-500/30 rounded-2xl flex items-center gap-3">
                                <div class="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-black text-lg">2</div>
                                <div>
                                    <div class="font-black text-white text-xs sm:text-sm">BTY.5.2.3: Geliştirme</div>
                                    <div class="text-[11px] text-cyan-200">Canva araçları & AI prompt</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:col-span-5 flex flex-col items-center justify-center">
                        <div class="relative group">
                            <div class="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500"></div>
                            <div class="relative bg-slate-900 border-2 border-purple-400/50 p-6 rounded-3xl text-center space-y-4 shadow-2xl">
                                <div class="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white text-3xl font-black shadow-lg">
                                    MB
                                </div>
                                <div>
                                    <h3 class="text-lg font-black text-white">Öğretmen Bozok</h3>
                                    <p class="text-xs text-purple-300 font-bold uppercase tracking-wider">İnteraktif Akıllı Tahta Dersi</p>
                                </div>
                                <div class="p-3 bg-slate-800/80 rounded-xl border border-slate-700 text-xs text-slate-300">
                                    🎯 24 Etkileşimli Slayt • 4 Özel Oyun • Pekiştirme Testi & Defter Notları
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            teacherNotes: "Giriş slaytı. İki kazanımın (kurgu oluşturma ve görsel geliştirme) birbirinden ayrılmaz bir süreç olduğunu vurgulayın. 'Bir afişe baktığımızda gördüğümüz tasarım, arkasında yatan düşünce ve planın sonucudur' mesajını verin."
        },
        {
            id: 2,
            title: "BİR GÖRSEL NEDEN HAZIRLANIR? 🤔",
            subtitle: "BÖLÜM 1: GÖRSEL TASARIMI TANIMA",
            topic: "2. TEMA • BTY.5.2.2",
            badge: "İHTİYAÇ & AMAC",
            icon: "fa-solid fa-eye",
            bgColor: "from-slate-900 via-indigo-950 to-blue-950",
            gradient: "from-slate-900 via-indigo-950 to-blue-950",
            content: `
                <div class="space-y-6 max-w-5xl mx-auto my-auto text-left">
                    <div class="bg-indigo-950/60 border-2 border-indigo-500/40 p-5 rounded-3xl">
                        <div class="flex items-center gap-3 mb-2">
                            <span class="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-lg text-xs font-bold uppercase"><i class="fa-solid fa-comment-dots"></i> Sınıfa Soru</span>
                            <h3 class="text-lg font-black text-white">“Bir afiş veya poster gördüğünde ilk olarak nereye bakarsın?”</h3>
                        </div>
                        <p class="text-xs sm:text-sm text-slate-300">
                            İnsan beyni görselleri yazılardan 60.000 kat daha hızlı işler! Bu yüzden günlük yaşamda mesajları etkili iletmek için görseller tasarlarız.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div class="p-4 bg-slate-900/80 border border-cyan-500/30 rounded-2xl hover:border-cyan-400 transition">
                            <div class="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xl mb-3"><i class="fa-solid fa-school"></i></div>
                            <h4 class="font-bold text-white text-sm">Okul Etkinliği Afişi</h4>
                            <p class="text-xs text-slate-400 mt-1">Bilim şenliği, satranç turnuvası veya kermes duyurularını tüm okula ulaştırmak için.</p>
                        </div>
                        <div class="p-4 bg-slate-900/80 border border-emerald-500/30 rounded-2xl hover:border-emerald-400 transition">
                            <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xl mb-3"><i class="fa-solid fa-leaf"></i></div>
                            <h4 class="font-bold text-white text-sm">Çevreyi Koruma Posteri</h4>
                            <p class="text-xs text-slate-400 mt-1">Suyu israf etmeme, geri dönüşüm ve temiz çevre alışkanlığı kazandırmak için.</p>
                        </div>
                        <div class="p-4 bg-slate-900/80 border border-purple-500/30 rounded-2xl hover:border-purple-400 transition">
                            <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center text-xl mb-3"><i class="fa-solid fa-shield-halved"></i></div>
                            <h4 class="font-bold text-white text-sm">Dijital Güvenlik Uyarısı</h4>
                            <p class="text-xs text-slate-400 mt-1">Güçlü şifre kullanımı ve siber zorbalığa karşı öğrencileri korumak ve bilinçlendirmek için.</p>
                        </div>
                        <div class="p-4 bg-slate-900/80 border border-amber-500/30 rounded-2xl hover:border-amber-400 transition">
                            <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center text-xl mb-3"><i class="fa-solid fa-book-open"></i></div>
                            <h4 class="font-bold text-white text-sm">Kitap Tanıtım Görseli</h4>
                            <p class="text-xs text-slate-400 mt-1">Yeni çıkan bir kitabın konusunu ve kahramanını ilgi çekici şekilde anlatmak için.</p>
                        </div>
                        <div class="p-4 bg-slate-900/80 border border-rose-500/30 rounded-2xl hover:border-rose-400 transition">
                            <div class="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-300 flex items-center justify-center text-xl mb-3"><i class="fa-solid fa-envelope-open-text"></i></div>
                            <h4 class="font-bold text-white text-sm">Kutlama & Davetiye</h4>
                            <p class="text-xs text-slate-400 mt-1">29 Ekim Cumhuriyet Bayramı törenine veya doğum gününe insanları davet etmek için.</p>
                        </div>
                        <div class="p-4 bg-slate-900/80 border border-blue-500/30 rounded-2xl hover:border-blue-400 transition">
                            <div class="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center text-xl mb-3"><i class="fa-solid fa-bullhorn"></i></div>
                            <h4 class="font-bold text-white text-sm">Sosyal Farkındalık</h4>
                            <p class="text-xs text-slate-400 mt-1">Trafik kuralları veya sağlık kurallarında toplumu ortak bir amaçta birleştirmek için.</p>
                        </div>
                    </div>
                </div>
            `,
            teacherNotes: "Öğrencilere okulda ya da sokakta yakın zamanda gördükleri afişleri sorun. Hangi afişlerin dikkatlerini çektiğini, hangilerini ise fark etmeden geçtiklerini tartışın."
        },
        {
            id: 3,
            title: "GÖRSEL TASARIM NEDİR? 📐",
            subtitle: "BÖLÜM 1: GÖRSEL TASARIMI TANIMA",
            topic: "2. TEMA • BTY.5.2.2",
            badge: "TEMEL KAVRAM",
            icon: "fa-solid fa-shapes",
            bgColor: "from-slate-900 via-purple-950 to-slate-950",
            gradient: "from-slate-900 via-purple-950 to-slate-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto my-auto text-left">
                    <div class="p-6 bg-slate-900/90 border-2 border-purple-500/40 rounded-3xl space-y-4">
                        <span class="px-3 py-1 bg-purple-500/20 text-purple-300 font-bold text-xs rounded-lg uppercase">Tanım</span>
                        <h3 class="text-xl sm:text-2xl font-black text-white">Görsel Tasarım</h3>
                        <p class="text-slate-300 text-xs sm:text-sm leading-relaxed">
                            Bir düşünceyi, problemi, bilgiyi veya duyguyu; <strong>yazı, renk, şekil, fotoğraf ve çizimleri</strong> bir düzen içinde birleştirerek izleyiciye aktarma sanatıdır.
                        </p>
                        <div class="p-3 bg-purple-950/60 rounded-xl border border-purple-500/30 text-xs text-purple-200">
                            💡 Görsel tasarım sadece 'güzel resim yapmak' değil; <strong>mesajı en anlaşılır yoldan iletmektir!</strong>
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div class="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl flex items-start gap-3">
                            <div class="w-9 h-9 rounded-lg bg-pink-500/20 text-pink-300 flex items-center justify-center font-bold text-base shrink-0 mt-0.5"><i class="fa-solid fa-font"></i></div>
                            <div>
                                <h4 class="font-bold text-white text-sm">Yazı (Tipografi)</h4>
                                <p class="text-xs text-slate-400">Başlıklar, sloganlar ve açıklamaların boyutu, rengi ve yazı tipi seçimi.</p>
                            </div>
                        </div>
                        <div class="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl flex items-start gap-3">
                            <div class="w-9 h-9 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-base shrink-0 mt-0.5"><i class="fa-solid fa-palette"></i></div>
                            <div>
                                <h4 class="font-bold text-white text-sm">Renkler ve Kontrast</h4>
                                <p class="text-xs text-slate-400">Duyguları harekete geçiren, okunabilirliği artıran renk paleti ve zemin uyumu.</p>
                            </div>
                        </div>
                        <div class="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl flex items-start gap-3">
                            <div class="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-base shrink-0 mt-0.5"><i class="fa-solid fa-image"></i></div>
                            <div>
                                <h4 class="font-bold text-white text-sm">Görseller ve Simgeler</h4>
                                <p class="text-xs text-slate-400">Konuyu tek bakışta anlatan fotoğraflar, vektörel ikonlar ve çizimler.</p>
                            </div>
                        </div>
                        <div class="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl flex items-start gap-3">
                            <div class="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-base shrink-0 mt-0.5"><i class="fa-solid fa-border-all"></i></div>
                            <div>
                                <h4 class="font-bold text-white text-sm">Düzen ve Boşluk (Layout)</h4>
                                <p class="text-xs text-slate-400">Öğelerin gözü yormayacak şekilde hizalanması ve nefes alanı bırakılması.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            teacherNotes: "Görsel tasarımın temel yapı taşlarını anlatın. Bir afişte sadece yazının ya da sadece resmin tek başına yeterli olmadığını, hepsinin bir harmoni içinde çalışması gerektiğini belirtin."
        },
        {
            id: 4,
            title: "İYİ BİR GÖRSEL TASARIMIN 6 ÖZELLİĞİ ✨",
            subtitle: "BÖLÜM 1: GÖRSEL TASARIMI TANIMA",
            topic: "2. TEMA • BTY.5.2.2",
            badge: "KALİTE ÖLÇÜTLERİ",
            icon: "fa-solid fa-star",
            bgColor: "from-slate-900 via-indigo-950 to-slate-950",
            gradient: "from-slate-900 via-indigo-950 to-slate-950",
            content: `
                <div class="space-y-5 max-w-5xl mx-auto my-auto text-left">
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <div class="p-3 bg-slate-900/90 border border-cyan-500/40 rounded-2xl">
                            <span class="text-cyan-400 text-lg font-black">1.</span>
                            <h4 class="font-bold text-white text-sm mt-1">Amaca Uygunluk</h4>
                            <p class="text-[11px] text-slate-400 mt-1">Afiş neyi anlatmak istiyorsa doğrudan o amaca odaklanmalıdır.</p>
                        </div>
                        <div class="p-3 bg-slate-900/90 border border-purple-500/40 rounded-2xl">
                            <span class="text-purple-400 text-lg font-black">2.</span>
                            <h4 class="font-bold text-white text-sm mt-1">Hedef Kitleye Uygunluk</h4>
                            <p class="text-[11px] text-slate-400 mt-1">Kimin için yapıldıysa (öğrenci, veli, çocuk) onun anlayacağı dilde olmalıdır.</p>
                        </div>
                        <div class="p-3 bg-slate-900/90 border border-emerald-500/40 rounded-2xl">
                            <span class="text-emerald-400 text-lg font-black">3.</span>
                            <h4 class="font-bold text-white text-sm mt-1">Okunabilirlik</h4>
                            <p class="text-[11px] text-slate-400 mt-1">Yazılar uzaktan net seçilmeli, arka planla çatışmamalıdır.</p>
                        </div>
                        <div class="p-3 bg-slate-900/90 border border-amber-500/40 rounded-2xl">
                            <span class="text-amber-400 text-lg font-black">4.</span>
                            <h4 class="font-bold text-white text-sm mt-1">Sadelik</h4>
                            <p class="text-[11px] text-slate-400 mt-1">Gereksiz süsler ve göz yoran kalabalıktan arındırılmış olmalıdır.</p>
                        </div>
                        <div class="p-3 bg-slate-900/90 border border-rose-500/40 rounded-2xl">
                            <span class="text-rose-400 text-lg font-black">5.</span>
                            <h4 class="font-bold text-white text-sm mt-1">Renk Uyumu</h4>
                            <p class="text-[11px] text-slate-400 mt-1">En fazla 2-3 birbiriyle uyumlu ana renk tercih edilmelidir.</p>
                        </div>
                        <div class="p-3 bg-slate-900/90 border border-sky-500/40 rounded-2xl">
                            <span class="text-sky-400 text-lg font-black">6.</span>
                            <h4 class="font-bold text-white text-sm mt-1">Görsel Bütünlük</h4>
                            <p class="text-[11px] text-slate-400 mt-1">Tüm çizimler ve yazı tipleri aynı tarzı konuşmalıdır.</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                        <div class="p-4 bg-rose-950/30 border border-rose-500/40 rounded-2xl">
                            <div class="flex items-center gap-2 text-rose-300 font-bold text-xs uppercase mb-1">
                                <i class="fa-solid fa-circle-xmark"></i> Başarısız Tasarım Örneği
                            </div>
                            <p class="text-xs text-slate-300">Sarı zemine beyaz küçük yazı, alakasız resimler, 8 farklı yazı tipi, göz yoran karmaşa.</p>
                        </div>
                        <div class="p-4 bg-emerald-950/30 border border-emerald-500/40 rounded-2xl">
                            <div class="flex items-center gap-2 text-emerald-300 font-bold text-xs uppercase mb-1">
                                <i class="fa-solid fa-circle-check"></i> Başarılı Tasarım Örneği
                            </div>
                            <p class="text-xs text-slate-300">Lacivert zemine net beyaz başlık, odaklanmış tek bir anlamlı simge, 2 uyumlu font, ferah düzen.</p>
                        </div>
                    </div>
                </div>
            `,
            teacherNotes: "Bu 6 kural tüm dersin temel değerlendirme rubriğidir. Tahtada 'Sadelik = Güç' prensibini açıklayın. Çok fazla süslemenin mesajı nasıl boğduğunu örnekleyin."
        },

        // BÖLÜM 2: PROBLEM VE KURGU OLUŞTURMA (Slayt 5 - 11)
        {
            id: 5,
            title: "TASARIMA BİR PROBLEM İLE BAŞLA 🎯",
            subtitle: "BÖLÜM 2: PROBLEM VE KURGU OLUŞTURMA",
            topic: "2. TEMA • BTY.5.2.2",
            badge: "GERÇEK HAYAT PROBLEMİ",
            icon: "fa-solid fa-bullseye",
            bgColor: "from-slate-900 via-cyan-950 to-slate-950",
            gradient: "from-slate-900 via-cyan-950 to-slate-950",
            content: `
                <div class="space-y-6 max-w-5xl mx-auto my-auto text-left">
                    <div class="p-4 bg-cyan-950/60 border border-cyan-500/40 rounded-2xl">
                        <h3 class="text-base font-black text-white flex items-center gap-2">
                            <i class="fa-solid fa-lightbulb text-amber-400"></i> Bir Görsel Tasarım Daima Bir Problemi Çözmek İçin Doğar!
                        </h3>
                        <p class="text-xs text-slate-300 mt-1">
                            Afiş yapmaya doğrudan programı açıp rastgele çizerek başlanmaz. Önce etrafımıza bakar, çözülmesi gereken bir sorunu fark ederiz.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        <div class="p-4 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500 transition">
                            <div class="text-cyan-400 text-xl mb-2"><i class="fa-solid fa-key"></i></div>
                            <h4 class="font-bold text-white text-sm">Zayıf Şifre Kullanımı</h4>
                            <p class="text-xs text-slate-400 mt-1">Hesapların '123456' gibi kolay tahmin edilen şifrelerle çalınma riski.</p>
                        </div>
                        <div class="p-4 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500 transition">
                            <div class="text-cyan-400 text-xl mb-2"><i class="fa-solid fa-faucet-drip"></i></div>
                            <h4 class="font-bold text-white text-sm">Açık Kalan Musluklar</h4>
                            <p class="text-xs text-slate-400 mt-1">Okul lavabolarında suların boşa akması ve su kaynaklarının israfı.</p>
                        </div>
                        <div class="p-4 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500 transition">
                            <div class="text-cyan-400 text-xl mb-2"><i class="fa-solid fa-trash-can"></i></div>
                            <h4 class="font-bold text-white text-sm">Bahçeye Çöp Atılması</h4>
                            <p class="text-xs text-slate-400 mt-1">Teneffüslerde ambalaj atıklarının yere atılması ve çevre kirliliği.</p>
                        </div>
                        <div class="p-4 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500 transition">
                            <div class="text-cyan-400 text-xl mb-2"><i class="fa-solid fa-comment-slash"></i></div>
                            <h4 class="font-bold text-white text-sm">Siber Zorbalık</h4>
                            <p class="text-xs text-slate-400 mt-1">Sohbet gruplarında kırıcı ve alaycı mesajlarla arkadaşların üzülmesi.</p>
                        </div>
                        <div class="p-4 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500 transition">
                            <div class="text-cyan-400 text-xl mb-2"><i class="fa-solid fa-hourglass-half"></i></div>
                            <h4 class="font-bold text-white text-sm">Ekran Bağımlılığı</h4>
                            <p class="text-xs text-slate-400 mt-1">Saatlerce hareketsiz telefon başında kalmak ve fiziksel sağlık sorunları.</p>
                        </div>
                        <div class="p-4 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500 transition">
                            <div class="text-cyan-400 text-xl mb-2"><i class="fa-solid fa-book"></i></div>
                            <h4 class="font-bold text-white text-sm">Yıpranan Kitaplar</h4>
                            <p class="text-xs text-slate-400 mt-1">Kütüphane kitaplarının karalanması ve sayfalarının yırtılması.</p>
                        </div>
                    </div>

                    <div class="p-3 bg-slate-800/80 rounded-xl border border-slate-700 text-center text-xs text-cyan-200 font-bold">
                        👉 Sen bugün okulunda hangi problemi çözmek için bir afiş tasarlamak isterdin?
                    </div>
                </div>
            `,
            teacherNotes: "Öğrencilere sınıfta söz hakkı verin. Okulda en çok rahatsız oldukları problemi seçmelerini isteyin. Bu seçim, sonraki slaytlarda yapacakları kurgunun temeli olacaktır."
        },
        {
            id: 6,
            title: "HEDEF KİTLEYİ BELİRLE 👥",
            subtitle: "BÖLÜM 2: PROBLEM VE KURGU OLUŞTURMA",
            topic: "2. TEMA • BTY.5.2.2",
            badge: "HEDEF KİTLE ANALİZİ",
            icon: "fa-solid fa-users",
            bgColor: "from-slate-900 via-blue-950 to-slate-950",
            gradient: "from-slate-900 via-blue-950 to-slate-950",
            content: `
                <div class="space-y-6 max-w-5xl mx-auto my-auto text-left">
                    <div class="bg-blue-950/60 border border-blue-500/40 p-4 rounded-2xl">
                        <span class="text-xs font-bold text-blue-300 uppercase tracking-wider">Hedef Kitle Nedir?</span>
                        <h3 class="text-lg font-black text-white mt-1">Görselin Doğrudan Hitap Ettiği Kişi veya Topluluktur!</h3>
                        <p class="text-xs text-slate-300 mt-1">
                            Aynı mesaj (örneğin internet güvenliği); çocuklara çizgi karakterlerle anlatılırken, velilere daha ciddi ve rehberlik eden bir dille anlatılır.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                        <div class="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-center space-y-2">
                            <div class="w-12 h-12 mx-auto rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl"><i class="fa-solid fa-child-reaching"></i></div>
                            <h4 class="font-bold text-white text-sm">Öğrenciler İçin</h4>
                            <p class="text-[11px] text-slate-400">Renkli, enerjik, çizgi karakterli ve kısa çarpıcı sloganlar.</p>
                        </div>
                        <div class="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-center space-y-2">
                            <div class="w-12 h-12 mx-auto rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl"><i class="fa-solid fa-person-breastfeeding"></i></div>
                            <h4 class="font-bold text-white text-sm">Veliler İçin</h4>
                            <p class="text-[11px] text-slate-400">Açıklayıcı, güven veren, filtre ve denetim kurallarını içeren net bilgiler.</p>
                        </div>
                        <div class="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-center space-y-2">
                            <div class="w-12 h-12 mx-auto rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl"><i class="fa-solid fa-chalkboard-user"></i></div>
                            <h4 class="font-bold text-white text-sm">Öğretmenler İçin</h4>
                            <p class="text-[11px] text-slate-400">Ders saatleri, müfredat ve seminer takvimine uygun pedagojik duyurular.</p>
                        </div>
                        <div class="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-center space-y-2">
                            <div class="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl"><i class="fa-solid fa-car"></i></div>
                            <h4 class="font-bold text-white text-sm">Sürücüler İçin</h4>
                            <p class="text-[11px] text-slate-400">Okul çıkışında hız yapmama, yaya geçidi ve emniyet kemeri uyarıları.</p>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-900/90 border border-indigo-500/30 rounded-2xl flex items-center gap-4">
                        <div class="text-2xl text-amber-400 shrink-0"><i class="fa-solid fa-triangle-exclamation"></i></div>
                        <p class="text-xs text-slate-300">
                            <strong>Altın Kural:</strong> Hedef kitlesi doğru seçilmeyen bir tasarım, ne kadar güzel olursa olsun amacına ulaşamaz!
                        </p>
                    </div>
                </div>
            `,
            teacherNotes: "Farklı hedef kitlelere göre bir afişin dilinin nasıl değişeceğini vurgulayın. 'Okul bahçesini temiz tutalım' mesajının öğrencilere ve kantin görevlilerine nasıl farklı aktarılabileceğini tartışın."
        },
        {
            id: 7,
            title: "TASARIMIN AMACINI BELİRLE 🧭",
            subtitle: "BÖLÜM 2: PROBLEM VE KURGU OLUŞTURMA",
            topic: "2. TEMA • BTY.5.2.2",
            badge: "İLETİŞİM AMACI",
            icon: "fa-solid fa-compass",
            bgColor: "from-slate-900 via-indigo-950 to-slate-950",
            gradient: "from-slate-900 via-indigo-950 to-slate-950",
            content: `
                <div class="space-y-6 max-w-5xl mx-auto my-auto text-left">
                    <p class="text-sm text-slate-300">
                        Bir görsel tasarımın temel amacı genellikle şu 4 kategoriden birine girer:
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="p-5 bg-slate-900/90 border-2 border-cyan-500/40 rounded-2xl space-y-2">
                            <div class="flex items-center gap-2 text-cyan-300 font-black text-sm uppercase">
                                <i class="fa-solid fa-info-circle text-lg"></i> 1. Bilgilendirmek
                            </div>
                            <p class="text-xs text-slate-300">
                                Bir kuralı, etkinliği, tarihi veya kavramı kitleye öğretmek.
                            </p>
                            <div class="text-[11px] text-cyan-200 bg-cyan-950/40 p-2 rounded-lg font-mono">
                                Örnek: "Bilişim Sınıfı Kullanım Kuralları: 1. İçecekle girilmez..."
                            </div>
                        </div>

                        <div class="p-5 bg-slate-900/90 border-2 border-rose-500/40 rounded-2xl space-y-2">
                            <div class="flex items-center gap-2 text-rose-300 font-black text-sm uppercase">
                                <i class="fa-solid fa-triangle-exclamation text-lg"></i> 2. Uyarmak
                            </div>
                            <p class="text-xs text-slate-300">
                                Tehlikeli veya zararlı bir duruma karşı dikkat çekip engellemek.
                            </p>
                            <div class="text-[11px] text-rose-200 bg-rose-950/40 p-2 rounded-lg font-mono">
                                Örnek: "DİKKAT! Tanımadığınız linklere asla tıklamayın!"
                            </div>
                        </div>

                        <div class="p-5 bg-slate-900/90 border-2 border-purple-500/40 rounded-2xl space-y-2">
                            <div class="flex items-center gap-2 text-purple-300 font-black text-sm uppercase">
                                <i class="fa-solid fa-brain text-lg"></i> 3. Farkındalık Oluşturmak
                            </div>
                            <p class="text-xs text-slate-300">
                                İnsanların düşünmesini sağlamak ve konunun önemini hissettirmek.
                            </p>
                            <div class="text-[11px] text-purple-200 bg-purple-950/40 p-2 rounded-lg font-mono">
                                Örnek: "Günde 5 saat kambur oturmak vs 1 saat dik durup spor yapmak."
                            </div>
                        </div>

                        <div class="p-5 bg-slate-900/90 border-2 border-emerald-500/40 rounded-2xl space-y-2">
                            <div class="flex items-center gap-2 text-emerald-300 font-black text-sm uppercase">
                                <i class="fa-solid fa-hand-holding-heart text-lg"></i> 4. Davranışı Teşvik Etmek
                            </div>
                            <p class="text-xs text-slate-300">
                                İnsanları olumlu bir eylemi yapmaya doğrudan davet etmek ve yönlendirmek.
                            </p>
                            <div class="text-[11px] text-emerald-200 bg-emerald-950/40 p-2 rounded-lg font-mono">
                                Örnek: "Musluğu sıkıca kapat, damlayan her damla geleceğimizdir!"
                            </div>
                        </div>
                    </div>
                </div>
            `,
            teacherNotes: "Öğrencilere 4 amacı örneklerle kavratın. 'Bir afiş bazen hem bilgilendirip hem teşvik edebilir mi?' sorusuyla derinleştirin."
        },
        {
            id: 8,
            title: "HİKÂYE VE SENARYO NEDİR? 📜",
            subtitle: "BÖLÜM 2: PROBLEM VE KURGU OLUŞTURMA",
            topic: "2. TEMA • BTY.5.2.2",
            badge: "KURGU MİMARİSİ",
            icon: "fa-solid fa-scroll",
            bgColor: "from-slate-900 via-purple-950 to-slate-950",
            gradient: "from-slate-900 via-purple-950 to-slate-950",
            content: `
                <div class="space-y-6 max-w-5xl mx-auto my-auto text-left">
                    <div class="p-5 bg-purple-950/60 border-2 border-purple-500/40 rounded-3xl">
                        <span class="text-xs font-bold text-purple-300 uppercase">Senaryo Kavramı</span>
                        <h3 class="text-xl font-black text-white mt-1">Görselde Anlatılacak Olayın Önceden Planlanmasıdır</h3>
                        <p class="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                            Afiş tek bir kare resim gibi görünse bile arkasında bir hikâye taşır. İnsanlar hikâyeleri asla unutmaz! İyi bir senaryo afişin mesajını katbekat güçlendirir.
                        </p>
                    </div>

                    <div class="p-5 bg-slate-900 border border-slate-800 rounded-3xl space-y-3">
                        <div class="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase">
                            <i class="fa-solid fa-film"></i> Örnek Dijital Güvenlik Senaryosu:
                        </div>
                        <div class="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2 text-xs sm:text-sm text-slate-200 leading-relaxed">
                            <p>
                                <strong>Giriş:</strong> 5. sınıf öğrencisi Mert, oyun hesabının şifresini '123456' yapar.
                            </p>
                            <p>
                                <strong>Gelişme:</strong> Bir sabah hesabına giremez; tahmin edilmesi çok kolay olduğu için hesabı ele geçirilmiştir. Çok üzülür ve bilişim öğretmenine danışarak güçlü şifre kurallarını öğrenir.
                            </p>
                            <p>
                                <strong>Sonuç:</strong> Şifresini büyük harf, sayı ve sembolle yeniler. Ardından tüm okul arkadaşlarını uyarmak için okul panosuna bir afiş asar: <em>"Şifren senin kapı kilidindir, güçlü tut!"</em>
                            </p>
                        </div>
                    </div>
                </div>
            `,
            teacherNotes: "Hikâyeleştirmenin gücünü vurgulayın. İnsanların sadece kuralları değil, kuralların yaşandığı hikâyeleri hatırladığını anlatın."
        },
        {
            id: 9,
            title: "HİKÂYENİN DÖRT TEMEL UNSURU 🧩",
            subtitle: "BÖLÜM 2: PROBLEM VE KURGU OLUŞTURMA",
            topic: "2. TEMA • BTY.5.2.2",
            badge: "4 ALTIN UNSUR",
            icon: "fa-solid fa-puzzle-piece",
            bgColor: "from-slate-900 via-indigo-950 to-slate-950",
            gradient: "from-slate-900 via-indigo-950 to-slate-950",
            content: `
                <div class="space-y-6 max-w-5xl mx-auto my-auto text-left">
                    <p class="text-sm text-slate-300">
                        Bir görsel kurgu hazırlarken bu 4 sorunun cevabını eksiksiz vermeliyiz:
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="p-5 bg-slate-900 border-2 border-cyan-500/40 rounded-2xl space-y-2">
                            <div class="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl font-bold"><i class="fa-solid fa-user"></i></div>
                            <h4 class="font-black text-white text-sm uppercase">1. Karakter</h4>
                            <div class="text-xs text-cyan-300 font-bold">Hikâyede kim var?</div>
                            <p class="text-[11px] text-slate-400">Öğrenci Can, Öğretmen Bozok, sevimli maskot veya robot rehber.</p>
                        </div>

                        <div class="p-5 bg-slate-900 border-2 border-emerald-500/40 rounded-2xl space-y-2">
                            <div class="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl font-bold"><i class="fa-solid fa-location-dot"></i></div>
                            <h4 class="font-black text-white text-sm uppercase">2. Mekân</h4>
                            <div class="text-xs text-emerald-300 font-bold">Olay nerede geçiyor?</div>
                            <p class="text-[11px] text-slate-400">Okul bahçesi, bilişim laboratuvarı, kütüphane veya evdeki çalışma masası.</p>
                        </div>

                        <div class="p-5 bg-slate-900 border-2 border-amber-500/40 rounded-2xl space-y-2">
                            <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl font-bold"><i class="fa-solid fa-bolt"></i></div>
                            <h4 class="font-black text-white text-sm uppercase">3. Olay</h4>
                            <div class="text-xs text-amber-300 font-bold">Ne yaşanıyor?</div>
                            <p class="text-[11px] text-slate-400">Musluğun açık kalması, çöpün kutuya atılması veya şifrenin paylaşılması.</p>
                        </div>

                        <div class="p-5 bg-slate-900 border-2 border-rose-500/40 rounded-2xl space-y-2">
                            <div class="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-2xl font-bold"><i class="fa-solid fa-bullhorn"></i></div>
                            <h4 class="font-black text-white text-sm uppercase">4. Mesaj</h4>
                            <div class="text-xs text-rose-300 font-bold">İzleyici ne öğrenmeli?</div>
                            <p class="text-[11px] text-slate-400">"Suyu boşa akıtma!", "Şifreni gizli tut!", "Kitap oku hayal gücün gelişsin!"</p>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-900/90 border border-slate-700 rounded-2xl text-center text-xs text-slate-300">
                        Bu 4 unsur birbiriyle uyumlu olduğunda görsel tasarım inandırıcı ve güçlü olur.
                    </div>
                </div>
            `,
            teacherNotes: "Tahtaya rastgele bir konu yazıp (örneğin kitap sevgisi) sınıftan hızla bir Karakter, Mekân, Olay ve Mesaj türetmelerini isteyin."
        },
        {
            id: 10,
            title: "BAŞLANGIÇ, GELİŞME VE SONUÇ ⏳",
            subtitle: "BÖLÜM 2: PROBLEM VE KURGU OLUŞTURMA",
            topic: "2. TEMA • BTY.5.2.2",
            badge: "ZAMAN AKIŞI",
            icon: "fa-solid fa-arrow-down-1-9",
            bgColor: "from-slate-900 via-indigo-950 to-slate-950",
            gradient: "from-slate-900 via-indigo-950 to-slate-950",
            content: `
                <div class="space-y-6 max-w-5xl mx-auto my-auto text-left">
                    <p class="text-sm text-slate-300">
                        Hikâyeler zaman içinde 3 mantıksal aşamayla akar:
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="p-5 bg-slate-900 border-2 border-cyan-500/40 rounded-2xl space-y-3">
                            <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full font-black text-xs uppercase">1. Başlangıç (Giriş)</span>
                            <h4 class="font-bold text-white text-sm">Durum ve Problem Tanıtılır</h4>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Karakter ve mekân tanıtılır, ortaya bir problem veya ihtiyaç çıkar.
                            </p>
                            <div class="p-2.5 bg-slate-800 rounded-xl text-[11px] text-cyan-200">
                                <em>Örnek:</em> Ali lavaboya girer ve açık unutulmuş musluktan suların boşa aktığını görür.
                            </div>
                        </div>

                        <div class="p-5 bg-slate-900 border-2 border-purple-500/40 rounded-2xl space-y-3">
                            <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full font-black text-xs uppercase">2. Gelişme</span>
                            <h4 class="font-bold text-white text-sm">Olay Yaşanır & Çözüm Aranır</h4>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Karakter olaya müdahale eder, durumu düzeltmek için harekete geçer.
                            </p>
                            <div class="p-2.5 bg-slate-800 rounded-xl text-[11px] text-purple-200">
                                <em>Örnek:</em> Musluğu hemen kapatır ve arkadaşlarına suyun ne kadar değerli olduğunu açıklar.
                            </div>
                        </div>

                        <div class="p-5 bg-slate-900 border-2 border-emerald-500/40 rounded-2xl space-y-3">
                            <span class="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full font-black text-xs uppercase">3. Sonuç</span>
                            <h4 class="font-bold text-white text-sm">Problem Çözülür & Mesaj Verilir</h4>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Kalıcı çözüm üretilir ve ana ders izleyiciye posterle sunulur.
                            </p>
                            <div class="p-2.5 bg-slate-800 rounded-xl text-[11px] text-emerald-200">
                                <em>Örnek:</em> Lavabo aynasının yanına "Geleceğini kurutma, musluğu kapat!" afişi asılır.
                            </div>
                        </div>
                    </div>
                </div>
            `,
            teacherNotes: "Giriş-gelişme-sonuç yapısını öğrencilerin Türkçe dersindeki bilgilerle bağdaştırın. Bu 3 adımın birazdan storyboard karelerine dönüşeceğini belirtin."
        },
        {
            id: 11,
            title: "STORYBOARD: HİKÂYEYİ KARELERE DÖNÜŞTÜR 🎬",
            subtitle: "BÖLÜM 2: PROBLEM VE KURGU OLUŞTURMA",
            topic: "2. TEMA • BTY.5.2.2",
            badge: "GÖRSEL TASLAK",
            icon: "fa-solid fa-table-cells-large",
            bgColor: "from-slate-900 via-indigo-950 to-purple-950",
            gradient: "from-slate-900 via-indigo-950 to-purple-950",
            content: `
                <div class="space-y-6 max-w-5xl mx-auto my-auto text-left">
                    <div class="p-4 bg-purple-950/60 border border-purple-500/40 rounded-2xl">
                        <span class="text-xs font-bold text-purple-300 uppercase">Storyboard (Görsel Taslak) Nedir?</span>
                        <h3 class="text-lg font-black text-white mt-1">Hikâyenin Sıralı Çizim Kutularıyla Adım Adım Tasarlanmasıdır</h3>
                        <p class="text-xs text-slate-300 mt-1">
                            Animasyoncular ve tasarımcılar bilgisayar başına geçmeden önce kâğıt üzerine 3 karelik taslak çizerler.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="p-4 bg-slate-900 border-2 border-dashed border-cyan-400/60 rounded-2xl space-y-2">
                            <div class="text-xs font-black text-cyan-300 uppercase flex items-center justify-between">
                                <span>1. KARE: BAŞLANGIÇ</span>
                                <i class="fa-regular fa-image"></i>
                            </div>
                            <div class="h-28 bg-slate-800/80 rounded-xl flex items-center justify-center border border-slate-700 text-cyan-200 text-xs text-center p-3">
                                💧 Lavaboda şarıl şarıl boşa akan açık musluk ve yerdeki su birikintisi.
                            </div>
                            <p class="text-[11px] text-slate-400">Problem karesi.</p>
                        </div>

                        <div class="p-4 bg-slate-900 border-2 border-dashed border-purple-400/60 rounded-2xl space-y-2">
                            <div class="text-xs font-black text-purple-300 uppercase flex items-center justify-between">
                                <span>2. KARE: GELİŞME</span>
                                <i class="fa-regular fa-image"></i>
                            </div>
                            <div class="h-28 bg-slate-800/80 rounded-xl flex items-center justify-center border border-slate-700 text-purple-200 text-xs text-center p-3">
                                ✋ Karakterin musluğu sıkıca kapatırken kararlı yüz ifadesi.
                            </div>
                            <p class="text-[11px] text-slate-400">Müdahale karesi.</p>
                        </div>

                        <div class="p-4 bg-slate-900 border-2 border-dashed border-emerald-400/60 rounded-2xl space-y-2">
                            <div class="text-xs font-black text-emerald-300 uppercase flex items-center justify-between">
                                <span>3. KARE: SONUÇ</span>
                                <i class="fa-regular fa-image"></i>
                            </div>
                            <div class="h-28 bg-slate-800/80 rounded-xl flex items-center justify-center border border-slate-700 text-emerald-200 text-xs text-center p-3">
                                🚰 Damlayan su damlasının içinde yeşeren bir dünya ve afiş sloganı!
                            </div>
                            <p class="text-[11px] text-slate-400">Mesaj ve afiş karesi.</p>
                        </div>
                    </div>

                    <div class="p-3 bg-slate-800/80 rounded-xl border border-slate-700 text-xs text-slate-300 text-center">
                        Artık kurgumuz hazır! Sıra bu kurguyu <strong>Canva</strong> programında tasarlamaya geldi!
                    </div>
                </div>
            `,
            teacherNotes: "Storyboard'un tasarımın yol haritası olduğunu vurgulayın. Öğrencilerden defterlerine 3 kare çizip basit bir çöp adamla kendi fikirlerini taslaklaştırmalarını isteyebilirsiniz."
        },

        // BÖLÜM 3: CANVA'YI TANIMA VE KULLANMA (Slayt 12 - 19)
        {
            id: 12,
            title: "CANVA NEDİR? 🌐",
            subtitle: "BÖLÜM 3: CANVA'YI TANIMA VE KULLANMA",
            topic: "2. TEMA • BTY.5.2.3",
            badge: "BULUT GRAFİK ARACI",
            icon: "fa-solid fa-palette",
            bgColor: "from-slate-900 via-purple-950 to-slate-950",
            gradient: "from-slate-900 via-purple-950 to-slate-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-5xl mx-auto my-auto text-left items-center">
                    <div class="md:col-span-7 space-y-4">
                        <div class="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-xs font-bold uppercase">
                            <i class="fa-solid fa-cloud"></i> Bulut Tabanlı Tasarım
                        </div>
                        <h3 class="text-2xl sm:text-3xl font-black text-white">Canva</h3>
                        <p class="text-slate-300 text-xs sm:text-sm leading-relaxed">
                            İnternet tarayıcısı üzerinden çalışan, kurulum gerektirmeyen, sürükle-bırak mantığıyla herkesin profesyonel görseller hazırlamasını sağlayan modern bir tasarım platformudur.
                        </p>
                        <div class="space-y-2 text-xs text-slate-300">
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> Binlerce hazır ücretsiz şablon</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> Zengin simge, şekil ve fotoğraf kütüphanesi</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> Yapay zekâ destekli görsel oluşturma araçları</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> Akıllı tahtada ve tablette sorunsuz kullanım</div>
                        </div>
                    </div>
                    <div class="md:col-span-5 space-y-3">
                        <div class="p-3 bg-slate-900 border border-slate-800 rounded-2xl flex items-center gap-3">
                            <i class="fa-solid fa-file-powerpoint text-amber-400 text-xl"></i>
                            <div><div class="font-bold text-white text-xs">Sunumlar</div><div class="text-[11px] text-slate-400">Ders ve proje sunuları</div></div>
                        </div>
                        <div class="p-3 bg-slate-900 border border-slate-800 rounded-2xl flex items-center gap-3">
                            <i class="fa-solid fa-image text-cyan-400 text-xl"></i>
                            <div><div class="font-bold text-white text-xs">Afişler & Posterler</div><div class="text-[11px] text-slate-400">Okul ve kulüp duyuruları</div></div>
                        </div>
                        <div class="p-3 bg-slate-900 border border-slate-800 rounded-2xl flex items-center gap-3">
                            <i class="fa-solid fa-chart-pie text-emerald-400 text-xl"></i>
                            <div><div class="font-bold text-white text-xs">İnfografikler</div><div class="text-[11px] text-slate-400">Görsel bilgi şemaları</div></div>
                        </div>
                        <div class="p-3 bg-slate-900 border border-slate-800 rounded-2xl flex items-center gap-3">
                            <i class="fa-solid fa-share-nodes text-purple-400 text-xl"></i>
                            <div><div class="font-bold text-white text-xs">Sosyal Medya Görselleri</div><div class="text-[11px] text-slate-400">Kare ve hikâye formatları</div></div>
                        </div>
                    </div>
                </div>
            `,
            teacherNotes: "Canva'nın temel avantajını (kurulum gerektirmemesi ve her cihazda çalışması) anlatın. Öğrencilerin MEB e-posta adresleriyle Canva for Education hesabı açabileceklerini hatırlatabilirsiniz."
        },
        {
            id: 13,
            title: "CANVA'DA TASARIMA BAŞLAMA 🚀",
            subtitle: "BÖLÜM 3: CANVA'YI TANIMA VE KULLANMA",
            topic: "2. TEMA • BTY.5.2.3",
            badge: "ADIM ADIM İŞ AKIŞI",
            icon: "fa-solid fa-play",
            bgColor: "from-slate-900 via-indigo-950 to-slate-950",
            gradient: "from-slate-900 via-indigo-950 to-slate-950",
            content: `
                <div class="space-y-6 max-w-5xl mx-auto my-auto text-left">
                    <p class="text-sm text-slate-300">
                        Canva'da sıfırdan bir tasarım oluştururken izlenen 5 temel adım:
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-5 gap-3">
                        <div class="p-4 bg-slate-900 border border-cyan-500/30 rounded-2xl text-center space-y-2">
                            <div class="w-10 h-10 mx-auto rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-black">1</div>
                            <h4 class="font-bold text-white text-xs">Canva'yı Aç</h4>
                            <p class="text-[11px] text-slate-400">canva.com adresine giriş yap.</p>
                        </div>
                        <div class="p-4 bg-slate-900 border border-indigo-500/30 rounded-2xl text-center space-y-2">
                            <div class="w-10 h-10 mx-auto rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-black">2</div>
                            <h4 class="font-bold text-white text-xs">Boyut Seç</h4>
                            <p class="text-[11px] text-slate-400">Afiş (Poster), Sunum veya Özel Boyut.</p>
                        </div>
                        <div class="p-4 bg-slate-900 border border-purple-500/30 rounded-2xl text-center space-y-2">
                            <div class="w-10 h-10 mx-auto rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center font-black">3</div>
                            <h4 class="font-bold text-white text-xs">Şablon İncele</h4>
                            <p class="text-[11px] text-slate-400">Konuna uygun bir şablon seç veya boş sayfa aç.</p>
                        </div>
                        <div class="p-4 bg-slate-900 border border-pink-500/30 rounded-2xl text-center space-y-2">
                            <div class="w-10 h-10 mx-auto rounded-full bg-pink-500/20 text-pink-300 flex items-center justify-center font-black">4</div>
                            <h4 class="font-bold text-white text-xs">Düzenle</h4>
                            <p class="text-[11px] text-slate-400">Metin, öğe ve renkleri kurguna göre uyarla.</p>
                        </div>
                        <div class="p-4 bg-slate-900 border border-emerald-500/30 rounded-2xl text-center space-y-2">
                            <div class="w-10 h-10 mx-auto rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-black">5</div>
                            <h4 class="font-bold text-white text-xs">Kaydet & İndir</h4>
                            <p class="text-[11px] text-slate-400">PNG veya PDF olarak indir ve paylaş.</p>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl flex items-center gap-3">
                        <i class="fa-solid fa-circle-info text-cyan-400 text-xl"></i>
                        <span class="text-xs text-slate-300">
                            <strong>İpucu:</strong> Afiş yaparken arama kutusuna 'Okul Afişi', 'Çevre Afişi' veya 'Teknoloji' yazarak doğrudan ilgili şablonlara ulaşabilirsiniz.
                        </span>
                    </div>
                </div>
            `,
            teacherNotes: "Tasarım adımlarını sırayla gösterin. Tasarıma başlamadan önce boyut seçiminin (Afiş mi, Sunum mu?) neden önemli olduğunu anlatın."
        },
        {
            id: 14,
            title: "CANVA ŞABLONLARI (TEMPLATES) 📋",
            subtitle: "BÖLÜM 3: CANVA'YI TANIMA VE KULLANMA",
            topic: "2. TEMA • BTY.5.2.3",
            badge: "HAZIR ŞABLON KULLANIMI",
            icon: "fa-solid fa-layer-group",
            bgColor: "from-slate-900 via-purple-950 to-slate-950",
            gradient: "from-slate-900 via-purple-950 to-slate-950",
            content: `
                <div class="space-y-6 max-w-5xl mx-auto my-auto text-left">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="p-5 bg-slate-900/90 border border-purple-500/40 rounded-3xl space-y-3">
                            <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-xs font-bold uppercase">Şablon Nedir?</span>
                            <h3 class="text-xl font-black text-white">Hazır Tasarım Düzeni</h3>
                            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                Profesyonel grafik tasarımcılar tarafından önceden renkleri, yazı tipleri ve yerleşimi hazırlanmış örnek tasarımlardır.
                            </p>
                            <div class="p-3 bg-purple-950/50 rounded-xl border border-purple-500/30 text-xs text-purple-200">
                                ⚡ Zamandan tasarruf sağlar ve ilham verir.
                            </div>
                        </div>

                        <div class="p-5 bg-slate-900/90 border border-amber-500/40 rounded-3xl space-y-3">
                            <span class="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-lg text-xs font-bold uppercase">Önemli Kural</span>
                            <h3 class="text-xl font-black text-white">Şablonu Olduğu Gibi Bırakma!</h3>
                            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                Bir şablon seçtiğinde üzerindeki yazıları kendi mesajınla değiştirmeli, renkleri konuna uydurmalı ve kendi özgün kurgunu eklemelisin.
                            </p>
                            <div class="p-3 bg-amber-950/50 rounded-xl border border-amber-500/30 text-xs text-amber-200">
                                💡 Gerçek tasarımcı şablonu bir kılavuz gibi kullanır, kendi fikrini işler!
                            </div>
                        </div>
                    </div>
                </div>
            `,
            teacherNotes: "Öğrencilerin şablonu aynen kopyalamak yerine üzerinde değişiklik yapmalarını teşvik edin: başlığı değiştir, gereksiz resmi sil, kendi mesajını yaz."
        },
        {
            id: 15,
            title: "CANVA ÖĞELER (ELEMENTS) 🔺⭐",
            subtitle: "BÖLÜM 3: CANVA'YI TANIMA VE KULLANMA",
            topic: "2. TEMA • BTY.5.2.3",
            badge: "GÖRSEL ÖGELER",
            icon: "fa-solid fa-shapes",
            bgColor: "from-slate-900 via-indigo-950 to-slate-950",
            gradient: "from-slate-900 via-indigo-950 to-slate-950",
            content: `
                <div class="space-y-6 max-w-5xl mx-auto my-auto text-left">
                    <p class="text-sm text-slate-300">
                        Canva'nın sol panelindeki <strong>Öğeler (Elements)</strong> sekmesi afişimizi zenginleştiren binlerce grafik içerir:
                    </p>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div class="p-4 bg-slate-900 border border-cyan-500/30 rounded-2xl text-center space-y-2">
                            <i class="fa-solid fa-shapes text-cyan-400 text-3xl"></i>
                            <h4 class="font-bold text-white text-sm">Geometrik Şekiller</h4>
                            <p class="text-[11px] text-slate-400">Kare, daire, dikdörtgen ve yazı arkası arka plan bantları.</p>
                        </div>
                        <div class="p-4 bg-slate-900 border border-purple-500/30 rounded-2xl text-center space-y-2">
                            <i class="fa-solid fa-icons text-purple-400 text-3xl"></i>
                            <h4 class="font-bold text-white text-sm">Simgeler & İkonlar</h4>
                            <p class="text-[11px] text-slate-400">Kilit, su damlası, geri dönüşüm kutusu, ampul, ağaç simgeleri.</p>
                        </div>
                        <div class="p-4 bg-slate-900 border border-pink-500/30 rounded-2xl text-center space-y-2">
                            <i class="fa-solid fa-pen-nib text-pink-400 text-3xl"></i>
                            <h4 class="font-bold text-white text-sm">Çizimler & Çıkartmalar</h4>
                            <p class="text-[11px] text-slate-400">Vektörel çocuk karakterleri, neşeli hayvanlar ve okul araçları.</p>
                        </div>
                        <div class="p-4 bg-slate-900 border border-emerald-500/30 rounded-2xl text-center space-y-2">
                            <i class="fa-solid fa-arrows-left-right text-emerald-400 text-3xl"></i>
                            <h4 class="font-bold text-white text-sm">Çizgiler & Oklar</h4>
                            <p class="text-[11px] text-slate-400">Gözü yönlendiren oklar, ayırıcı çizgiler ve çerçeveler.</p>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-900/90 border border-slate-700 rounded-2xl flex items-center gap-3">
                        <i class="fa-solid fa-magnifying-glass text-cyan-400 text-xl shrink-0"></i>
                        <p class="text-xs text-slate-300">
                            <strong>Arama İpucu:</strong> İhtiyacınız olan simgeyi bulmak için arama çubuğuna Türkçe veya İngilizce anahtar kelime yazabilirsiniz (ör: <em>su tasarrufu, kalkan, şifre, okul</em>).
                        </p>
                    </div>
                </div>
            `,
            teacherNotes: "Öğeler bölümünün zenginliğini anlatın. Doğru anahtar kelimelerle arama yapmanın tasarım hızını nasıl artırdığını gösterin."
        },
        {
            id: 16,
            title: "CANVA METİN ARAÇLARI ✍️",
            subtitle: "BÖLÜM 3: CANVA'YI TANIMA VE KULLANMA",
            topic: "2. TEMA • BTY.5.2.3",
            badge: "TİPOGRAFİ & HİYERARŞİ",
            icon: "fa-solid fa-font",
            bgColor: "from-slate-900 via-indigo-950 to-slate-950",
            gradient: "from-slate-900 via-indigo-950 to-slate-950",
            content: `
                <div class="space-y-6 max-w-5xl mx-auto my-auto text-left">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="p-4 bg-slate-900 border border-purple-500/40 rounded-2xl space-y-2">
                            <span class="text-xs font-black text-purple-300 uppercase">1. Bir Başlık Ekle</span>
                            <div class="text-2xl font-black text-white">ANA BAŞLIK</div>
                            <p class="text-xs text-slate-400">En büyük punto, kalın ve ilk göze çarpan dikkat çekici slogan.</p>
                        </div>
                        <div class="p-4 bg-slate-900 border border-cyan-500/40 rounded-2xl space-y-2">
                            <span class="text-xs font-black text-cyan-300 uppercase">2. Bir Alt Başlık Ekle</span>
                            <div class="text-lg font-bold text-slate-200">Alt Açıklama Başlığı</div>
                            <p class="text-xs text-slate-400">Orta boyutta, konunun detayını ve amacını belirten ara yazı.</p>
                        </div>
                        <div class="p-4 bg-slate-900 border border-emerald-500/40 rounded-2xl space-y-2">
                            <span class="text-xs font-black text-emerald-300 uppercase">3. Bir Gövde Metni Ekle</span>
                            <div class="text-sm font-normal text-slate-300">Tarih, saat, yer veya kısa bilgilendirme metni...</div>
                            <p class="text-xs text-slate-400">En küçük punto, sade ve okunması kolay açıklayıcı satırlar.</p>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-3">
                        <h4 class="font-bold text-white text-sm">Metin Düzenleme Araç Çubuğu:</h4>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-300">
                            <div class="p-2 bg-slate-800 rounded-lg flex items-center gap-2"><i class="fa-solid fa-text-height text-cyan-400"></i> Yazı Boyutu</div>
                            <div class="p-2 bg-slate-800 rounded-lg flex items-center gap-2"><i class="fa-solid fa-palette text-purple-400"></i> Yazı Rengi</div>
                            <div class="p-2 bg-slate-800 rounded-lg flex items-center gap-2"><i class="fa-solid fa-bold text-pink-400"></i> Kalın (Bold)</div>
                            <div class="p-2 bg-slate-800 rounded-lg flex items-center gap-2"><i class="fa-solid fa-align-center text-emerald-400"></i> Hizalama</div>
                        </div>
                    </div>
                </div>
            `,
            teacherNotes: "Görsel hiyerarşiyi tahtada gösterin. 'Eğer başlıktan gövde metnine her şey aynı boyutta olursa göz nereye bakacağını şaşırır' vurgusu yapın."
        },
        {
            id: 17,
            title: "YÜKLEMELER, ARKA PLAN VE PROJELER 📂",
            subtitle: "BÖLÜM 3: CANVA'YI TANIMA VE KULLANMA",
            topic: "2. TEMA • BTY.5.2.3",
            badge: "MEDYA & YÖNETİM",
            icon: "fa-solid fa-cloud-arrow-up",
            bgColor: "from-slate-900 via-indigo-950 to-slate-950",
            gradient: "from-slate-900 via-indigo-950 to-slate-950",
            content: `
                <div class="space-y-6 max-w-5xl mx-auto my-auto text-left">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="p-5 bg-slate-900 border border-cyan-500/40 rounded-2xl space-y-2">
                            <div class="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xl mb-1"><i class="fa-solid fa-upload"></i></div>
                            <h4 class="font-bold text-white text-sm">Yüklemeler (Uploads)</h4>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Kendi çektiğin fotoğrafları, okul logosunu veya çizimlerini bilgisayardan Canva'ya aktarmanı sağlar.
                            </p>
                        </div>

                        <div class="p-5 bg-slate-900 border border-purple-500/40 rounded-2xl space-y-2">
                            <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl mb-1"><i class="fa-solid fa-fill-drip"></i></div>
                            <h4 class="font-bold text-white text-sm">Arka Plan (Background)</h4>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Tasarımın zemin rengini, degrade (renk geçişi) efektlerini veya dokulu desenlerini düzenler.
                            </p>
                        </div>

                        <div class="p-5 bg-slate-900 border border-emerald-500/40 rounded-2xl space-y-2">
                            <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl mb-1"><i class="fa-solid fa-folder-open"></i></div>
                            <h4 class="font-bold text-white text-sm">Projeler (Projects)</h4>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Daha önce hazırladığın tüm çalışmaları klasörlerde düzenli tutar, istediğinde yeniden düzenlemeni sağlar.
                            </p>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-900/90 border border-slate-700 rounded-2xl text-xs text-slate-300 space-y-1">
                        <div class="font-bold text-amber-400 flex items-center gap-1.5"><i class="fa-solid fa-triangle-exclamation"></i> Arka Plan İpucu:</div>
                        <p>Arka plan çok desenli ve karmaşık olursa üzerindeki yazılar okunmaz. Zemin her zaman sade ve yazıyla yüksek kontrastlı olmalıdır!</p>
                    </div>
                </div>
            `,
            teacherNotes: "Yüklemeler panelini ve arka plan seçimini anlatın. Öğrencilerin kendi fotoğraflarını yüklerken dosya kalitesine (bulanık olmamasına) dikkat etmelerini söyleyin."
        },
        {
            id: 18,
            title: "SÜRÜKLE, YERLEŞTİR VE DÜZENLE 🖱️",
            subtitle: "BÖLÜM 3: CANVA'YI TANIMA VE KULLANMA",
            topic: "2. TEMA • BTY.5.2.3",
            badge: "UYGULAMA PRATİĞİ",
            icon: "fa-solid fa-hand-pointer",
            bgColor: "from-slate-900 via-purple-950 to-slate-950",
            gradient: "from-slate-900 via-purple-950 to-slate-950",
            content: `
                <div class="space-y-6 max-w-5xl mx-auto my-auto text-left">
                    <p class="text-sm text-slate-300">
                        Canva'da bir öğeyi sayfaya ekledikten sonra şu pratik düzenleme kontrollerini kullanırız:
                    </p>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div class="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-1 text-center">
                            <i class="fa-solid fa-up-right-and-down-left-from-center text-cyan-400 text-2xl mb-1"></i>
                            <h4 class="font-bold text-white text-xs">Boyutlandır</h4>
                            <p class="text-[11px] text-slate-400">Köşelerdeki yuvarlak tutamaçlardan çekerek orantılı büyüt/küçült.</p>
                        </div>
                        <div class="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-1 text-center">
                            <i class="fa-solid fa-rotate text-purple-400 text-2xl mb-1"></i>
                            <h4 class="font-bold text-white text-xs">Döndür</h4>
                            <p class="text-[11px] text-slate-400">Altındaki dairesel ok simgesiyle istediğin açıda çevir.</p>
                        </div>
                        <div class="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-1 text-center">
                            <i class="fa-solid fa-crop-simple text-emerald-400 text-2xl mb-1"></i>
                            <h4 class="font-bold text-white text-xs">Kırp (Crop)</h4>
                            <p class="text-[11px] text-slate-400">Çift tıklayarak resmin istemediğin kenarlarını kesip çıkar.</p>
                        </div>
                        <div class="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-1 text-center">
                            <i class="fa-solid fa-clone text-amber-400 text-2xl mb-1"></i>
                            <h4 class="font-bold text-white text-xs">Katman (Layer)</h4>
                            <p class="text-[11px] text-slate-400">Öğeyi arkaya veya öne göndererek üst üste bindirmeleri ayarla.</p>
                        </div>
                    </div>

                    <div class="p-4 bg-purple-950/40 border border-purple-500/30 rounded-2xl flex items-center gap-3">
                        <i class="fa-solid fa-magnet text-purple-300 text-xl"></i>
                        <p class="text-xs text-purple-200">
                            <strong>Akıllı Kılavuz Çizgileri:</strong> Bir öğeyi taşırken beliren mor çizgiler, öğenin sayfanın tam ortasında veya diğer öğelerle aynı hizada olup olmadığını gösterir.
                        </p>
                    </div>
                </div>
            `,
            teacherNotes: "Akıllı kılavuz çizgilerinin tasarımda ne kadar kurtarıcı olduğunu anlatın. Orantısız çekiştirip resmi yayvanlaştırmama uyarısında bulunun."
        },
        {
            id: 19,
            title: "TASARIMI İNDİRME VE SAKLAMA 💾",
            subtitle: "BÖLÜM 3: CANVA'YI TANIMA VE KULLANMA",
            topic: "2. TEMA • BTY.5.2.3",
            badge: "DIŞA AKTARMA",
            icon: "fa-solid fa-download",
            bgColor: "from-slate-900 via-indigo-950 to-slate-950",
            gradient: "from-slate-900 via-indigo-950 to-slate-950",
            content: `
                <div class="space-y-6 max-w-5xl mx-auto my-auto text-left">
                    <div class="p-4 bg-indigo-950/60 border border-indigo-500/40 rounded-2xl">
                        <span class="text-xs font-bold text-indigo-300 uppercase">Sağ Üst Köşe: Paylaş ➔ İndir (Download)</span>
                        <h3 class="text-lg font-black text-white mt-1">Hangi Dosya Formatını Seçmelisin?</h3>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="p-4 bg-slate-900 border-2 border-cyan-500/40 rounded-2xl space-y-2">
                            <span class="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 rounded font-black text-xs font-mono">.PNG</span>
                            <h4 class="font-bold text-white text-sm">Yüksek Kaliteli Görsel</h4>
                            <p class="text-xs text-slate-400">Şeffaf arka plan desteği ve dijital ekranlarda en net görünüm için standart format.</p>
                        </div>
                        <div class="p-4 bg-slate-900 border-2 border-purple-500/40 rounded-2xl space-y-2">
                            <span class="px-2.5 py-1 bg-purple-500/20 text-purple-300 rounded font-black text-xs font-mono">.JPG</span>
                            <h4 class="font-bold text-white text-sm">Küçük Dosya Boyutu</h4>
                            <p class="text-xs text-slate-400">E-posta ile hızlı göndermek veya web sitesine yüklemek için hafif format.</p>
                        </div>
                        <div class="p-4 bg-slate-900 border-2 border-emerald-500/40 rounded-2xl space-y-2">
                            <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 rounded font-black text-xs font-mono">.PDF (Baskı)</span>
                            <h4 class="font-bold text-white text-sm">Fiziksel Çıktı & Baskı</h4>
                            <p class="text-xs text-slate-400">Renkli yazıcıdan çıkış alıp sınıf panosuna asmak için en yüksek çözünürlüklü format.</p>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-900/90 border border-slate-700 rounded-2xl text-xs text-slate-300 space-y-1">
                        <div class="font-bold text-amber-400"><i class="fa-solid fa-tag"></i> Dosya Adlandırma Kuralı:</div>
                        <p class="font-mono text-cyan-300">Ad_Soyad_Sinif_Afiş_Konusu.png (Örnek: Ali_Yilmaz_5B_Su_Tasarrufu.pdf)</p>
                    </div>
                </div>
            `,
            teacherNotes: "Dosyayı isimlendirmeden 'Adsız Tasarım.png' şeklinde indirmeme alışkanlığı kazandırın. Doğru adlandırmanın arşivleme ve ödev teslimindeki önemini açıklayın."
        },

        // BÖLÜM 4: YAPAY ZEKÂ İLE GÖRSEL TASARIM (Slayt 20 - 22)
        {
            id: 20,
            title: "CANVA VE YAPAY ZEKÂ (AI) 🤖",
            subtitle: "BÖLÜM 4: YAPAY ZEKÂ İLE GÖRSEL TASARIM",
            topic: "2. TEMA • BTY.5.2.3",
            badge: "YAPAY ZEKÂ ÇAĞI",
            icon: "fa-solid fa-robot",
            bgColor: "from-slate-900 via-indigo-950 to-purple-950",
            gradient: "from-slate-900 via-indigo-950 to-purple-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto my-auto text-left">
                    <div class="p-5 bg-slate-900 border-2 border-purple-500/40 rounded-3xl space-y-3">
                        <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-xs font-bold uppercase"><i class="fa-solid fa-wand-magic-sparkles"></i> Sihirli Tasarım</span>
                        <h3 class="text-xl font-black text-white">Yapay Zekâ Tasarımcının Asistanıdır!</h3>
                        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            Canva'daki yapay zekâ araçları (Magic Studio / Sihirli Medya), sadece birkaç kelimelik tarifimizden saniyeler içinde benzersiz resimler ve şablonlar üretebilir.
                        </p>
                        <div class="p-3 bg-purple-950/60 rounded-xl border border-purple-500/30 text-xs text-purple-200">
                            💡 Hayal ettiğin ama internette fotoğrafını bulamadığın çizimleri üretmeni sağlar!
                        </div>
                    </div>

                    <div class="p-5 bg-slate-900 border-2 border-rose-500/40 rounded-3xl space-y-3">
                        <span class="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-lg text-xs font-bold uppercase"><i class="fa-solid fa-triangle-exclamation"></i> Kritik Uyarı</span>
                        <h3 class="text-xl font-black text-white">Yapay Zekâ Her Zaman Kusursuz Değildir!</h3>
                        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            Yapay zekâ bazen bozuk eller çizebilir, yazıları anlamsız harflerle doldurabilir veya konuyla ilgisiz nesneler ekleyebilir.
                        </p>
                        <div class="p-3 bg-rose-950/60 rounded-xl border border-rose-500/30 text-xs text-rose-200">
                            ⚠️ Üretilen görsel mutlaka <strong>kontrol edilmeli</strong> ve tasarımcı gözüyle düzenlenmelidir.
                        </div>
                    </div>
                </div>
            `,
            teacherNotes: "Yapay zekânın tasarımcıyı işsiz bırakmadığını, aksine iyi komut yazabilen tasarımcıların en büyük yardımcısı olduğunu açıklayın."
        },
        {
            id: 21,
            title: "PROMPT NEDİR? NASIL YAZILIR? 💬",
            subtitle: "BÖLÜM 4: YAPAY ZEKÂ İLE GÖRSEL TASARIM",
            topic: "2. TEMA • BTY.5.2.3",
            badge: "KOMUT MÜHENDİSLİĞİ",
            icon: "fa-solid fa-terminal",
            bgColor: "from-slate-900 via-indigo-950 to-slate-950",
            gradient: "from-slate-900 via-indigo-950 to-slate-950",
            content: `
                <div class="space-y-6 max-w-5xl mx-auto my-auto text-left">
                    <div class="p-4 bg-cyan-950/60 border border-cyan-500/40 rounded-2xl">
                        <span class="text-xs font-bold text-cyan-300 uppercase">Tanım</span>
                        <h3 class="text-lg font-black text-white mt-1">Prompt: Yapay zekâya ne yapmasını istediğimizi anlatan komuttur!</h3>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-5 gap-3">
                        <div class="p-3 bg-slate-900 border border-slate-800 rounded-2xl text-center">
                            <span class="text-cyan-400 font-black text-lg">1</span>
                            <div class="font-bold text-white text-xs mt-1">Kim / Ne?</div>
                            <div class="text-[11px] text-slate-400 mt-1">Öğrenci, robot, su damlası...</div>
                        </div>
                        <div class="p-3 bg-slate-900 border border-slate-800 rounded-2xl text-center">
                            <span class="text-indigo-400 font-black text-lg">2</span>
                            <div class="font-bold text-white text-xs mt-1">Ne Yapıyor?</div>
                            <div class="text-[11px] text-slate-400">Musluğu kapatıyor, kitap okuyor...</div>
                        </div>
                        <div class="p-3 bg-slate-900 border border-slate-800 rounded-2xl text-center">
                            <span class="text-purple-400 font-black text-lg">3</span>
                            <div class="font-bold text-white text-xs mt-1">Nerede?</div>
                            <div class="text-[11px] text-slate-400">Okul lavabosunda, kütüphanede...</div>
                        </div>
                        <div class="p-3 bg-slate-900 border border-slate-800 rounded-2xl text-center">
                            <span class="text-pink-400 font-black text-lg">4</span>
                            <div class="font-bold text-white text-xs mt-1">Hangi Tarz?</div>
                            <div class="text-[11px] text-slate-400">Renkli vektörel çizim, 3D animasyon...</div>
                        </div>
                        <div class="p-3 bg-slate-900 border border-emerald-400 font-black text-center">
                            <span class="text-emerald-400 font-black text-lg">5</span>
                            <div class="font-bold text-white text-xs mt-1">Hangi Detay?</div>
                            <div class="text-[11px] text-slate-400">Güneş ışığı, sade zemin, okunaklı...</div>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-900 border border-slate-700 rounded-2xl text-xs text-slate-300">
                        Bu 5 soruya cevap veren bir prompt yazdığınızda yapay zekâ aklınızdaki görseli neredeyse bire bir çizer!
                    </div>
                </div>
            `,
            teacherNotes: "5 N 1 K mantığını prompt yazımına uyarlayın: Kim, Ne yapıyor, Nerede, Hangi tarz, Hangi detay. Tahtada öğrencilerle beraber bir komut kurgulayın."
        },
        {
            id: 22,
            title: "İYİ VE ZAYIF PROMPT KARŞILAŞTIRMASI ⚔️",
            subtitle: "BÖLÜM 4: YAPAY ZEKÂ İLE GÖRSEL TASARIM",
            topic: "2. TEMA • BTY.5.2.3",
            badge: "PROMPT DÜELLOSU",
            icon: "fa-solid fa-code-compare",
            bgColor: "from-slate-900 via-indigo-950 to-slate-950",
            gradient: "from-slate-900 via-indigo-950 to-slate-950",
            content: `
                <div class="space-y-6 max-w-5xl mx-auto my-auto text-left">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="p-5 bg-rose-950/40 border-2 border-rose-500/50 rounded-3xl space-y-3">
                            <div class="flex items-center gap-2 text-rose-300 font-black text-sm uppercase">
                                <i class="fa-solid fa-circle-xmark text-lg"></i> Zayıf ve Yetersiz Komut
                            </div>
                            <div class="p-4 bg-slate-900 rounded-2xl border border-rose-500/30 font-mono text-sm text-rose-200">
                                "Bir afiş yap."
                            </div>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                <strong>Neden zayıf?</strong> Konu belirsiz, hedef kitle yok, görselin tarzı yok, nelerin çizileceği belli değil. Yapay zekâ rastgele ve alakasız bir sonuç verir.
                            </p>
                        </div>

                        <div class="p-5 bg-emerald-950/40 border-2 border-emerald-500/50 rounded-3xl space-y-3">
                            <div class="flex items-center gap-2 text-emerald-300 font-black text-sm uppercase">
                                <i class="fa-solid fa-circle-check text-lg"></i> Güçlü ve Profesyonel Komut
                            </div>
                            <div class="p-4 bg-slate-900 rounded-2xl border border-emerald-500/30 font-mono text-xs text-emerald-200 leading-relaxed">
                                "5. sınıf öğrencileri için su tasarrufunu anlatan; musluğu kapatan güler yüzlü bir öğrenci karakteri içeren, renkli, sade ve okunaklı vektörel afiş tasarımı."
                            </div>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                <strong>Neden güçlü?</strong> Konu, hedef kitle, ana karakter, tarz ve detaylar açıkça belirtilmiştir. Sonuç tam amaca hizmet eder.
                            </p>
                        </div>
                    </div>
                </div>
            `,
            teacherNotes: "İki komutun farkını inceletin. 'Ne kadar net anlatırsan yapay zekâ o kadar net çizer' ilkesini vurgulayın."
        },

        // BÖLÜM 5: DEĞERLENDİRME VE PEKİŞTİRME (Slayt 23 - 24)
        {
            id: 23,
            title: "TASARIMINI DEĞERLENDİR VE GELİŞTİR ✅",
            subtitle: "BÖLÜM 5: DEĞERLENDİRME VE PEKİŞTİRME",
            topic: "2. TEMA • BTY.5.2.3",
            badge: "SON KONTROL LİSTESİ",
            icon: "fa-solid fa-clipboard-check",
            bgColor: "from-slate-900 via-emerald-950 to-slate-950",
            gradient: "from-slate-900 via-emerald-950 to-slate-950",
            content: `
                <div class="space-y-6 max-w-5xl mx-auto my-auto text-left">
                    <p class="text-sm text-slate-300">
                        Afişini sınıf panosuna asmadan önce şu 8 altın soruyu kendine sor:
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div class="p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-3">
                            <i class="fa-solid fa-check text-emerald-400"></i>
                            <span class="text-xs text-slate-200">1. Problem ve tasarım amacı birbiriyle uyumlu mu?</span>
                        </div>
                        <div class="p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-3">
                            <i class="fa-solid fa-check text-emerald-400"></i>
                            <span class="text-xs text-slate-200">2. Hedef kitle (ör. 5. sınıflar) doğru belirlenmiş mi?</span>
                        </div>
                        <div class="p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-3">
                            <i class="fa-solid fa-check text-emerald-400"></i>
                            <span class="text-xs text-slate-200">3. Hikâye ve senaryo parçaları tutarlı mı?</span>
                        </div>
                        <div class="p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-3">
                            <i class="fa-solid fa-check text-emerald-400"></i>
                            <span class="text-xs text-slate-200">4. Ana mesaj ilk bakışta açık ve net anlaşılıyor mu?</span>
                        </div>
                        <div class="p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-3">
                            <i class="fa-solid fa-check text-emerald-400"></i>
                            <span class="text-xs text-slate-200">5. Yazılar ve başlık birkaç metre uzaktan rahat okunuyor mu?</span>
                        </div>
                        <div class="p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-3">
                            <i class="fa-solid fa-check text-emerald-400"></i>
                            <span class="text-xs text-slate-200">6. Renkler birbiriyle ve arka planla uyumlu mu (yüksek kontrast)?</span>
                        </div>
                        <div class="p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-3">
                            <i class="fa-solid fa-check text-emerald-400"></i>
                            <span class="text-xs text-slate-200">7. Görseller ve simgeler konuyla doğrudan ilgili mi?</span>
                        </div>
                        <div class="p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-3">
                            <i class="fa-solid fa-check text-emerald-400"></i>
                            <span class="text-xs text-slate-200">8. Gözü yoran gereksiz kalabalıklar temizlenmiş mi?</span>
                        </div>
                    </div>
                </div>
            `,
            teacherNotes: "Kontrol listesi öğrencilerin kendi çalışmalarını öz-değerlendirme (self-assessment) süzgecinden geçirmelerini sağlar. Tasarım Dedektifleri oyunundaki rubrikle bağdaştırın."
        },
        {
            id: 24,
            title: "GENEL TEKRAR VE BÜYÜK GÖREV 🏆",
            subtitle: "BÖLÜM 5: DEĞERLENDİRME VE PEKİŞTİRME",
            topic: "2. TEMA • BTY.5.2.2 & BTY.5.2.3",
            badge: "FİNAL & ÇIKIŞ ETKİNLİĞİ",
            icon: "fa-solid fa-trophy",
            bgColor: "from-slate-900 via-purple-950 to-indigo-950",
            gradient: "from-slate-900 via-purple-950 to-indigo-950",
            content: `
                <div class="space-y-6 max-w-5xl mx-auto my-auto text-left">
                    <div class="p-4 bg-slate-900 border border-cyan-500/40 rounded-2xl">
                        <span class="text-xs font-bold text-cyan-300 uppercase">Tasarım Süreci Akış Şeması:</span>
                        <div class="flex flex-wrap items-center gap-2 mt-2 text-xs font-bold text-slate-200">
                            <span class="px-2.5 py-1 bg-cyan-900/50 rounded-lg">1. Problem</span> ➔ 
                            <span class="px-2.5 py-1 bg-blue-900/50 rounded-lg">2. Hedef & Amaç</span> ➔ 
                            <span class="px-2.5 py-1 bg-indigo-900/50 rounded-lg">3. Senaryo</span> ➔ 
                            <span class="px-2.5 py-1 bg-purple-900/50 rounded-lg">4. Storyboard</span> ➔ 
                            <span class="px-2.5 py-1 bg-pink-900/50 rounded-lg">5. Canva Tasarımı</span> ➔ 
                            <span class="px-2.5 py-1 bg-emerald-900/50 rounded-lg">6. Kontrol & İndir</span>
                        </div>
                    </div>

                    <div class="p-5 bg-gradient-to-r from-purple-950/60 to-indigo-950/60 border-2 border-purple-400/50 rounded-3xl space-y-3">
                        <div class="flex items-center gap-2 text-amber-400 font-black text-sm uppercase">
                            <i class="fa-solid fa-medal text-lg"></i> Büyük Görev: Dijital Güvenlik Afişi!
                        </div>
                        <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                            "Okul arkadaşlarını güçlü şifre kullanmaya teşvik eden ve hesaplarını koruyan bir afiş hazırlayacaksın."
                        </p>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-purple-200">
                            <div>• Problemi belirle</div>
                            <div>• Hedef kitleyi seç</div>
                            <div>• 3 karelik taslak kur</div>
                            <div>• Canva'da tasarla!</div>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-between flex-wrap gap-3">
                        <div class="text-xs text-slate-300">
                            <strong>Çıkış Sorusu:</strong> "Bir görsel tasarımın başarılı olması için yalnızca süslü görünmesi yeterli midir? Neden?"
                        </div>
                        <div class="px-3 py-1.5 bg-emerald-500/20 text-emerald-300 rounded-xl font-black text-xs">
                            Tebrikler! 8. Konu Tamamlandı 🎉
                        </div>
                    </div>
                </div>
            `,
            teacherNotes: "Dersi toparlayan final slaytı. Tüm akış şemasını baştan sona özetleyin. Çıkış sorusunu sınıfa yönlendirip 'Tasarım sadece süs değil, problem çözen bir iletişimdir' vurgusuyla dersi kapatın."
        }
    ],

    worksheetDocs: {
        sayfa1Html: `
            <div class="max-w-4xl mx-auto bg-slate-900 text-slate-100 p-6 sm:p-10 rounded-3xl border-2 border-cyan-500/40 space-y-6">
                <header class="border-b border-cyan-500/30 pb-4 flex items-center justify-between">
                    <div>
                        <div class="text-xs font-bold text-cyan-400 uppercase">Öğretmen Bozok • 5. Sınıf Bilişim Teknolojileri ve Yazılım</div>
                        <h1 class="text-2xl font-black text-white">Bölüm 1: Problemi ve Hedef Kitleyi Belirleme (1. Sayfa)</h1>
                    </div>
                    <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 font-bold rounded-lg text-xs">BTY.5.2.2 • Sayfa 1</span>
                </header>

                <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <div class="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-2">
                        <h3 class="font-bold text-white text-base text-cyan-300">1. Gerçek Hayat Problemleri ve Tasarım</h3>
                        <p>
                            Görsel tasarım doğrudan bir ihtiyaca veya probleme çözüm üretmek için başlar. Okul bahçesine atılan çöpler, açık unutulan musluklar, gereksiz yanan lambalar veya internette zayıf şifre kullanımı gibi durumlar önce fark edilir, ardından afiş kurgusu planlanır.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-slate-800/80 p-4 rounded-2xl border border-blue-500/30 space-y-2">
                            <h4 class="font-bold text-blue-400 text-sm">Hedef Kitle Kimdir?</h4>
                            <p>
                                Afişin doğrudan ulaştığı ve etkilemeyi amaçladığı insan grubudur. Öğrencilere yönelik bir tasarım ile büyüklere yönelik bir tasarımın dili, renkleri ve çizimleri birbirinden farklı kurgulanmalıdır.
                            </p>
                        </div>
                        <div class="bg-slate-800/80 p-4 rounded-2xl border border-emerald-500/30 space-y-2">
                            <h4 class="font-bold text-emerald-400 text-sm">Tasarımın Amacı</h4>
                            <p>
                                Tasarım bilgilendirmek, uyarmak, farkındalık yaratmak veya olumlu bir davranışı doğrudan teşvik etmek amacıyla hayata geçirilir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `,

        sayfa2Html: `
            <div class="max-w-4xl mx-auto bg-slate-900 text-slate-100 p-6 sm:p-10 rounded-3xl border-2 border-indigo-500/40 space-y-6">
                <header class="border-b border-indigo-500/30 pb-4 flex items-center justify-between">
                    <div>
                        <div class="text-xs font-bold text-indigo-400 uppercase">Öğretmen Bozok • 5. Sınıf Bilişim Teknolojileri ve Yazılım</div>
                        <h1 class="text-2xl font-black text-white">Bölüm 2: Hikâye ve Storyboard Kurgusu (2. Sayfa)</h1>
                    </div>
                    <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 font-bold rounded-lg text-xs">BTY.5.2.2 • Sayfa 2</span>
                </header>

                <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <div class="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-2">
                        <h3 class="font-bold text-white text-base text-indigo-300">Hikâyenin Dört Temel Unsuru</h3>
                        <p>
                            • <strong>Karakter:</strong> Hikâyede yer alan canlı veya varlık.<br>
                            • <strong>Mekân:</strong> Olayın yaşandığı fiziki ortam (sınıf, kütüphane, bahçe).<br>
                            • <strong>Olay:</strong> Yaşanan eylem, problem veya durum.<br>
                            • <strong>Mesaj:</strong> İzleyicinin öğrenmesi hedeflenen ana fikir.
                        </p>
                    </div>

                    <div class="bg-slate-800/80 p-4 rounded-2xl border border-purple-500/30 space-y-2">
                        <h4 class="font-bold text-purple-400 text-sm">Storyboard (3 Karelik Görsel Taslak)</h4>
                        <p>
                            1. Kare (Başlangıç): Problemin ortaya çıkışı.<br>
                            2. Kare (Gelişme): Karakterin duruma müdahale etmesi ve çözüm araması.<br>
                            3. Kare (Sonuç): Problemin çözülmesi ve afiş sloganının sunulması.
                        </p>
                    </div>
                </div>
            </div>
        `,

        sayfa3Html: `
            <div class="max-w-4xl mx-auto bg-slate-900 text-slate-100 p-6 sm:p-10 rounded-3xl border-2 border-purple-500/40 space-y-6">
                <header class="border-b border-purple-500/30 pb-4 flex items-center justify-between">
                    <div>
                        <div class="text-xs font-bold text-purple-400 uppercase">Öğretmen Bozok • 5. Sınıf Bilişim Teknolojileri ve Yazılım</div>
                        <h1 class="text-2xl font-black text-white">Bölüm 3: Canva Tasarım Araçları (3. Sayfa)</h1>
                    </div>
                    <span class="px-3 py-1 bg-purple-500/20 text-purple-300 font-bold rounded-lg text-xs">BTY.5.2.3 • Sayfa 3</span>
                </header>

                <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-2">
                            <h4 class="font-bold text-purple-300 text-sm">Canva Panelleri</h4>
                            <p>
                                • <strong>Şablonlar:</strong> Hazır profesyonel tasarım düzenleri.<br>
                                • <strong>Öğeler:</strong> Şekiller, çizgiler, simgeler, çıkartmalar.<br>
                                • <strong>Metin:</strong> Başlık, alt başlık ve gövde metinleri ekleme.<br>
                                • <strong>Yüklemeler:</strong> Bilgisayardaki kendi fotoğraflarını yükleme.
                            </p>
                        </div>
                        <div class="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-2">
                            <h4 class="font-bold text-pink-300 text-sm">Dosya Formatları ve İndirme</h4>
                            <p>
                                • <strong>PNG:</strong> Şeffaf arka plan ve yüksek ekran netliği.<br>
                                • <strong>JPG:</strong> Küçük boyutlu dosya paylaşımı.<br>
                                • <strong>Baskı PDF:</strong> Yazıcıdan kaliteli çıktı ve panoya asma formatı.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `,

        sayfa4Html: `
            <div class="max-w-4xl mx-auto bg-slate-900 text-slate-100 p-6 sm:p-10 rounded-3xl border-2 border-emerald-500/40 space-y-6">
                <header class="border-b border-emerald-500/30 pb-4 flex items-center justify-between">
                    <div>
                        <div class="text-xs font-bold text-emerald-400 uppercase">Öğretmen Bozok • 5. Sınıf Bilişim Teknolojileri ve Yazılım</div>
                        <h1 class="text-2xl font-black text-white">Bölüm 4: Yapay Zekâ Promptları & Kontrol (4. Sayfa)</h1>
                    </div>
                    <span class="px-3 py-1 bg-emerald-500/20 text-emerald-300 font-bold rounded-lg text-xs">BTY.5.2.3 • Sayfa 4</span>
                </header>

                <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <div class="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-2">
                        <h4 class="font-bold text-emerald-300 text-sm">Prompt Güçlendirme</h4>
                        <p>
                            Zayıf komut ("Bir afiş yap.") yerine; konu, hedef kitle, görsel tarz ve istenen ayrıntıları içeren güçlü promptlar yazılmalıdır.
                        </p>
                    </div>
                    <div class="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-2">
                        <h4 class="font-bold text-cyan-300 text-sm">Tasarım Değerlendirme Ölçütleri</h4>
                        <p>
                            1. Amaca uygunluk &nbsp; 2. Hedef kitle uyumu &nbsp; 3. Okunabilirlik ve kontrast &nbsp; 4. Sadelik &nbsp; 5. Görsel bütünlük.
                        </p>
                    </div>
                </div>
            </div>
        `,

        cevapHtml: `
            <div class="max-w-4xl mx-auto bg-slate-900 text-slate-100 p-6 sm:p-10 rounded-3xl border-2 border-amber-500/40 space-y-6">
                <header class="border-b border-amber-500/30 pb-4 flex items-center justify-between">
                    <div>
                        <div class="text-xs font-bold text-amber-400 uppercase">Öğretmen Bozok • Resmî Çözüm Rehberi</div>
                        <h1 class="text-2xl font-black text-white">8. Konu (BTY.5.2.2 & 5.2.3) Resmî Cevap Anahtarı</h1>
                    </div>
                    <span class="px-3 py-1 bg-amber-500/20 text-amber-300 font-bold rounded-lg text-xs">25 Soru Çözümü</span>
                </header>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                    <div class="p-2.5 bg-slate-800 rounded-xl"><strong>1:</strong> B (Problem & Amaç)</div>
                    <div class="p-2.5 bg-slate-800 rounded-xl"><strong>2:</strong> B (Hedef Kitle)</div>
                    <div class="p-2.5 bg-slate-800 rounded-xl"><strong>3:</strong> A (Mekân)</div>
                    <div class="p-2.5 bg-slate-800 rounded-xl"><strong>4:</strong> C (Mesaj)</div>
                    <div class="p-2.5 bg-slate-800 rounded-xl"><strong>5:</strong> A (Şablonlar)</div>
                    <div class="p-2.5 bg-slate-800 rounded-xl"><strong>6:</strong> B (Öğeler)</div>
                    <div class="p-2.5 bg-slate-800 rounded-xl"><strong>7:</strong> C (Yüklemeler)</div>
                    <div class="p-2.5 bg-slate-800 rounded-xl"><strong>8:</strong> C (Güçlü Prompt)</div>
                    <div class="p-2.5 bg-slate-800 rounded-xl"><strong>9:</strong> DOĞRU</div>
                    <div class="p-2.5 bg-slate-800 rounded-xl"><strong>10:</strong> DOĞRU</div>
                    <div class="p-2.5 bg-slate-800 rounded-xl"><strong>11:</strong> DOĞRU</div>
                    <div class="p-2.5 bg-slate-800 rounded-xl"><strong>12:</strong> YANLIŞ</div>
                    <div class="p-2.5 bg-slate-800 rounded-xl"><strong>13:</strong> DOĞRU</div>
                    <div class="p-2.5 bg-slate-800 rounded-xl"><strong>14:</strong> YANLIŞ</div>
                    <div class="p-2.5 bg-slate-800 rounded-xl"><strong>15:</strong> B (Hedef Kitle)</div>
                    <div class="p-2.5 bg-slate-800 rounded-xl"><strong>16:</strong> C (Mekân)</div>
                    <div class="p-2.5 bg-slate-800 rounded-xl"><strong>17:</strong> A (Metin)</div>
                    <div class="p-2.5 bg-slate-800 rounded-xl"><strong>18:</strong> D (Öğeler)</div>
                    <div class="p-2.5 bg-slate-800 rounded-xl col-span-2"><strong>19:</strong> 4, 1, 5, 2, 3</div>
                </div>
            </div>
        `,

        defterHtml: `
            <div class="max-w-4xl mx-auto bg-slate-900 text-slate-100 p-6 sm:p-10 rounded-3xl border-2 border-purple-500/40 space-y-6">
                <header class="border-b border-purple-500/30 pb-4 flex items-center justify-between">
                    <div>
                        <div class="text-xs font-bold text-purple-400 uppercase">Öğretmen Bozok • Öğrenci Defter Notları</div>
                        <h1 class="text-2xl font-black text-white">8. Konu (BTY.5.2.2 & 5.2.3) Deftere Yazılacaklar</h1>
                    </div>
                    <span class="px-3 py-1 bg-purple-500/20 text-purple-300 font-bold rounded-lg text-xs">Özet Not</span>
                </header>

                <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    <div class="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2">
                        <h3 class="font-bold text-white text-sm text-cyan-300">📌 Deftere Not: Görsel Tasarımın 4 Aşaması</h3>
                        <p>
                            1. <strong>Problemi Belirle:</strong> Gerçek hayattaki ihtiyacı veya sorunu tespit et.<br>
                            2. <strong>Hedef Kitle ve Amacı Seç:</strong> Kime hitap edeceğini ve amacını belirle.<br>
                            3. <strong>Senaryo ve Storyboard Kur:</strong> Karakter, mekân, olay ve mesajı 3 karede tasarla.<br>
                            4. <strong>Canva'da Geliştir ve Paylaş:</strong> Şablonları, metinleri ve öğeleri düzenleyip kaydet.
                        </p>
                    </div>

                    <div class="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2">
                        <h3 class="font-bold text-white text-sm text-purple-300">📌 Deftere Not: Canva Araçları ve Prompt</h3>
                        <p>
                            • <strong>Şablonlar:</strong> Hazır tasarım düzenleri.<br>
                            • <strong>Öğeler:</strong> Şekil, simge, çizgi ve ikonlar.<br>
                            • <strong>Metin:</strong> Başlık, alt başlık ve gövde yazıları.<br>
                            • <strong>Yüklemeler:</strong> Kendi fotoğraflarını yükleme alanı.<br>
                            • <strong>Prompt:</strong> Yapay zekâya verilen detaylı yönlendirici komut (Konu + Hedef Kitle + Tarz + Detay).
                        </p>
                    </div>
                </div>
            </div>
        `
    },

    questions: {
        trueFalse: [
            {
                q: "Görsel hazırlamadan önce gerçek hayat probleminin belirlenmesi tasarım sürecine yardımcı olur.",
                answer: true,
                explanation: "Doğru! Problem ve amaç önceden netleşirse tasarım tam ihtiyacı karşılar."
            },
            {
                q: "Hedef kitle, görselin kimlere yönelik hazırlandığını belirten gruptur.",
                answer: true,
                explanation: "Doğru! Hedef kitle görselin dilini ve tarzını belirler."
            },
            {
                q: "Bir senaryoda karakter, mekân, olay ve mesaj gibi unsurlar bulunabilir.",
                answer: true,
                explanation: "Doğru! Bu dört unsur kurgunun temel yapı taşlarıdır."
            },
            {
                q: "Tasarımda yazıların okunaklı olması ve arka planla zıtlık (kontrast) oluşturması önemli değildir.",
                answer: false,
                explanation: "Yanlış! Okunabilirlik bir afişin en temel kalite ölçütüdür."
            },
            {
                q: "Canva'da metinlerin boyutu, rengi, yazı tipi ve hizalaması düzenlenebilir.",
                answer: true,
                explanation: "Doğru! Üstteki metin araç çubuğu ile tüm biçimlendirmeler yapılır."
            },
            {
                q: "Yapay zekâya verilen görsel üretim komutunun (prompt) açık ve ayrıntılı olması gerekmez.",
                answer: false,
                explanation: "Yanlış! Zayıf komutlar rastgele sonuç verir; iyi komutlar detay içerir."
            },
            {
                q: "Afiş başlığı, birkaç metre uzaktan rahatça okunabilecek büyüklükte ve vurguda olmalıdır.",
                answer: true,
                explanation: "Doğru! Görsel hiyerarşide ana başlık en dikkat çekici unsur olmalıdır."
            },
            {
                q: "Bir şablon seçildiğinde üzerindeki hiçbir yazı ve görsel değiştirilmeden aynen bırakılmalıdır.",
                answer: false,
                explanation: "Yanlış! Şablon bir kılavuzdur; yazılar ve öğeler kendi konumuza göre uyarlanmalıdır."
            },
            {
                q: "PNG formatı şeffaf (saydam) arka plan desteği sunduğu için logolarda sıkça kullanılır.",
                answer: true,
                explanation: "Doğru! PNG şeffaf zemin desteğiyle öne çıkan kaliteli bir formattır."
            },
            {
                q: "Fiziksel baskı ve okul panosuna çıktı almak için en uygun format Baskı PDF'sidir.",
                answer: true,
                explanation: "Doğru! Baskı PDF'si en yüksek çözünürlüğü koruyarak net çıktı sağlar."
            }
        ],

        multipleChoice: [
            {
                q: "Bir öğrenci okul koridorlarında çöplerin yere atıldığını fark ediyor. Bu sorun için bir afiş hazırlamak istiyor. İlk olarak ne yapmalıdır?",
                options: [
                    "Afişi hemen indirmek",
                    "Problemi ve afişin amacını belirlemek",
                    "Rastgele görseller eklemek",
                    "Yazıların rengini seçmek"
                ],
                answer: 1,
                explanation: "Tasarım sürecinin ilk adımı problemi ve amacı doğru tanımlamaktır."
            },
            {
                q: "Bir görselin kimlere hitap edeceğini belirlemek aşağıdakilerden hangisidir?",
                options: [
                    "Dosya uzantısı",
                    "Hedef kitle",
                    "İndirme işlemi",
                    "Görsel boyutu"
                ],
                answer: 1,
                explanation: "Görselin hitap edeceği kitleye 'Hedef Kitle' adı verilir."
            },
            {
                q: "Bir hikâyede olayların gerçekleştiği yer aşağıdakilerden hangisidir?",
                options: [
                    "Mekân",
                    "Karakter",
                    "Mesaj",
                    "Başlık"
                ],
                answer: 0,
                explanation: "Olayın yaşandığı fiziki ortama 'Mekân' denir."
            },
            {
                q: "Bir senaryoda verilmek istenen temel düşünce ve öğüde ne ad verilir?",
                options: [
                    "Araç",
                    "Mekân",
                    "Mesaj",
                    "Şablon"
                ],
                answer: 2,
                explanation: "İzleyiciye aktarılmak istenen ana fikir ve öğüt 'Mesaj'dır."
            },
            {
                q: "Canva'da hazır profesyonel tasarım örneklerini bulmak için öncelikle hangi bölümden yararlanılır?",
                options: [
                    "Şablonlar (Templates)",
                    "Yüklemeler",
                    "Projeler",
                    "İndir"
                ],
                answer: 0,
                explanation: "Hazır tasarımlar sol menüdeki 'Şablonlar' sekmesindedir."
            },
            {
                q: "Canva'da tasarıma şekil, çizgi, simge veya grafik ögeler eklemek için hangi bölüm kullanılır?",
                options: [
                    "Metin",
                    "Öğeler (Elements)",
                    "İndir",
                    "Projeler"
                ],
                answer: 1,
                explanation: "Şekil, çizgi ve simgeler 'Öğeler' bölümünde yer alır."
            },
            {
                q: "Bir tasarıma kendi bilgisayarındaki bir fotoğrafı eklemek isteyen öğrenci hangi bölümden yararlanır?",
                options: [
                    "Şablonlar",
                    "Metin",
                    "Yüklemeler (Uploads)",
                    "Projeler"
                ],
                answer: 2,
                explanation: "Kullanıcı kendi dosyalarını 'Yüklemeler' panelinden sisteme aktarır."
            },
            {
                q: "Yapay zekâya görsel hazırlatırken aşağıdakilerden hangisi daha iyi ve güçlü bir komuttur?",
                options: [
                    "Güzel bir şey yap.",
                    "Bir görsel oluştur.",
                    "Doğayı korumayla ilgili, çocuklara hitap eden, renkli ve okunaklı bir afiş oluştur.",
                    "Her şeyi ekle."
                ],
                answer: 2,
                explanation: "Güçlü promptlar konu, hedef kitle, stil ve detay içeren net komutlardır."
            },
            {
                q: "Hikâyeyi 3 sıralı çizim karesiyle planlama taslağına ne ad verilir?",
                options: [
                    "Storyboard",
                    "Vektör",
                    "Font",
                    "Kırpma"
                ],
                answer: 0,
                explanation: "Sıralı çizim taslaklarına 'Storyboard' (görsel taslak) adı verilir."
            },
            {
                q: "Afiş üzerinde başlık, görsel ve yazıların gözü yormadan dengeli yerleştirilmesine ne ad verilir?",
                options: [
                    "Düzen ve Hizalama (Layout)",
                    "Dosya Boyutu",
                    "İndirme",
                    "Uzantı"
                ],
                answer: 0,
                explanation: "Öğelerin dengeli ve okunabilir yerleşimine layout (düzen) denir."
            }
        ]
    }
};
