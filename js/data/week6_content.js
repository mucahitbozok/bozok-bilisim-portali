// ==========================================
// 6. Konu: Dosya ve Klasör Yönetimi
// MEB 5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi
// BTY.5.1.6. Dosya ve klasör yönetimi ile ilgili temel işlemlerle çalışabilme
// Hazırlayan: Öğretmen Bozok
// ==========================================

window.WEEK6_CONTENT = {
    weekInfo: {
        weekNumber: 6,
        topicNumber: 6,
        customLabel: "6. Konu",
        title: "Dosya ve Klasör Yönetimi",
        code: "BTY.5.1.6. Dosya ve klasör yönetimi ile ilgili temel işlemlerle çalışabilme",
        theme: "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        isPending: false,
        learningGoals: [
            "Dosya ve klasör kavramlarını açıklayabilme ve aralarındaki ilişkiyi belirleyebilme.",
            "Dosya adı ve dosya uzantısını (.docx, .jpg, .mp3, .mp4, .pdf, .zip vb.) ayırt edebilme.",
            "Klasör (dizin) hiyerarşisini ve alt klasör ağacı yapısını kavrayabilme.",
            "Yeni klasör oluşturma, kopyalama, taşıma, yeniden adlandırma ve silme adımlarını uygulayabilme.",
            "Klavye kısayollarını (Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Z, Ctrl+Y, Delete) etkin kullanabilme.",
            "Geri Dönüşüm Kutusu'nun işlevini ve geri yükleme mantığını açıklayabilme.",
            "Dosya adı ve uzantısı üzerinden joker karakterli (*) arama ifadelerini yorumlayabilme.",
            "Dosya ve klasör sıkıştırmanın (ZIP, RAR) faydalarını disk ve paylaşım verimliliği kapsamında değerlendirebilme.",
            "Depolama araçlarını ve basılı verilerin (tarayıcı, kamera) dijital ortama aktarımını belirleyebilme."
        ],
        images: {
            sayfa1: "assets/worksheets/1.6_sayfa1.png",
            sayfa2: "assets/worksheets/1.6_sayfa2.png",
            sayfa3: "assets/worksheets/1.6_sayfa3.png",
            sayfa4: "assets/worksheets/1.6_sayfa4.png",
            cevap: "assets/docs/Cevap_Anahtari_BTY_5_1_6.pdf",
            defter: "assets/docs/Deftere_Yazilacaklar_BTY_5_1_6.pdf"
        }
    },

    hideStandardGames: true,

    extraGames: [
        {
            badge: "7 Oyun Tek Ekranda 🌟",
            badgeColor: "text-amber-300",
            title: "Dosya & Klasör Oyun Merkezi",
            desc: "7 dev mod bir arada: Dosya Dedektifleri, Klasör Düzenleme, Kısayol Ustası, Çöp Kutusu Kurtarma, Arama Uzmanı, Sıkıştırma ve 2 Takımlı Sınıf Arenası!",
            icon: "fa-solid fa-gamepad",
            iconBg: "bg-amber-500/30 text-amber-300",
            cardGradient: "from-amber-950/90 via-slate-900 to-indigo-950/90",
            border: "border-amber-500/50",
            descColor: "text-amber-100",
            btnText: "Oyun Merkezine Gir!",
            btnIcon: "fa-solid fa-crown",
            btnGradient: "from-amber-500 via-orange-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/dosya_klasor_oyun_merkezi.html', 'Dosya ve Klasör Yönetimi Oyun Merkezi | Öğretmen Bozok')"
        },
        {
            badge: "Görsel Eşleştirme 🎯",
            badgeColor: "text-emerald-300",
            title: "Dosya Uzantısı Eşleştirme",
            desc: "5 büyük kategori panosu: Resim, Video, Ses, Yazı/Belge ve Uygulama! Pinli dosya kartlarını sürükle veya tıkla, komboları topla!",
            icon: "fa-solid fa-thumbtack",
            iconBg: "bg-emerald-500/30 text-emerald-300",
            cardGradient: "from-emerald-950/90 via-slate-900 to-teal-950/90",
            border: "border-emerald-500/50",
            descColor: "text-emerald-100",
            btnText: "Eşleştirmeye Başla!",
            btnIcon: "fa-solid fa-play",
            btnGradient: "from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/dosya_uzantisi_eslestirme.html', 'Dosya Uzantısı Eşleştirme Oyunu | Öğretmen Bozok')"
        },
        {
            badge: "Laboratuvar Simülasyonu 🧪",
            badgeColor: "text-purple-300",
            title: "Dosya & Uzantı Laboratuvarı",
            desc: "Karışık gelen dosyaları uzantılarına (.docx, .jpg, .mp3, .mp4, .zip vb.) göre 6 doğru klasöre tasnif et! Sürükle veya tıkla, komboları topla!",
            icon: "fa-solid fa-folder-tree",
            iconBg: "bg-purple-500/30 text-purple-300",
            cardGradient: "from-purple-950/90 via-slate-900 to-indigo-950/90",
            border: "border-purple-500/50",
            descColor: "text-purple-100",
            btnText: "Laboratuvara Gir!",
            btnIcon: "fa-solid fa-flask",
            btnGradient: "from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-black",
            action: "app.openStandaloneGame('games/dosya_uzanti_laboratuvari.html', 'Dosya & Uzantı Laboratuvarı | Öğretmen Bozok')"
        },
        {
            badge: "Kelime Bulmaca 🧩",
            badgeColor: "text-cyan-300",
            title: "Dosya & Klasör Kelime Avı",
            desc: "12x12 matriste gizlenen 10 temel dosya ve klasör terimini bul! İpuçlarını kullan, puanları topla ve rekor sürede tamamla!",
            icon: "fa-solid fa-magnifying-glass",
            iconBg: "bg-cyan-500/30 text-cyan-300",
            cardGradient: "from-cyan-950/90 via-slate-900 to-blue-950/90",
            border: "border-cyan-500/50",
            descColor: "text-cyan-100",
            btnText: "Kelime Avına Başla!",
            btnIcon: "fa-solid fa-crosshairs",
            btnGradient: "from-cyan-500 via-teal-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/dosya_klasor_kelime_avi.html', 'Dosya ve Klasör Kelime Avı | Öğretmen Bozok')"
        },
        {
            badge: "Akıllı Tahta Sunumu 📽️",
            badgeColor: "text-yellow-300",
            title: "20 Slaytlık Tam Ekran Sunum",
            desc: "Öğretmen rehberliğinde akıllı tahtada ders anlatımı için hazırlanmış 20 slaytlık, etkileşimli eşleştirmeli ve hızlı quizli bağımsız sunum!",
            icon: "fa-solid fa-chalkboard-user",
            iconBg: "bg-yellow-500/30 text-yellow-300",
            cardGradient: "from-slate-900 via-indigo-950 to-purple-950",
            border: "border-yellow-500/50",
            descColor: "text-yellow-100",
            btnText: "Tam Ekran Sunuyu Başlat!",
            btnIcon: "fa-solid fa-expand",
            btnGradient: "from-yellow-500 via-amber-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/sunu_dosya_ve_klasor_yonetimi.html', 'Dosya ve Klasör Yönetimi Akıllı Tahta Sunumu | Öğretmen Bozok')"
        }
    ],

    videos: [],

    worksheetDocs: {
        sayfa1: "assets/worksheets/1.6_sayfa1.png",
        sayfa2: "assets/worksheets/1.6_sayfa2.png",
        sayfa3: "assets/worksheets/1.6_sayfa3.png",
        sayfa4: "assets/worksheets/1.6_sayfa4.png",
        cevap: "assets/docs/Cevap_Anahtari_BTY_5_1_6.pdf",
        defter: "assets/docs/Deftere_Yazilacaklar_BTY_5_1_6.pdf",
        pdfLinks: {
            cevapPdf: "assets/docs/Cevap_Anahtari_BTY_5_1_6.pdf",
            defterPdf: "assets/docs/Deftere_Yazilacaklar_BTY_5_1_6.pdf"
        }
    },

    slides: [
        {
            id: 1,
            title: "DOSYA VE KLASÖR YÖNETİMİ 📁",
            subtitle: "6. KONU • BTY.5.1.6",
            topic: "6. KONU • BTY.5.1.6",
            badge: "GİRİŞ & KAZANIM",
            icon: "fa-solid fa-folder-tree",
            bgColor: "from-slate-900 via-purple-950 to-indigo-950",
            gradient: "from-slate-900 via-purple-950 to-indigo-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-6 text-center my-auto py-2">
                    <div class="w-20 h-20 rounded-3xl bg-gradient-to-tr from-purple-500 via-indigo-500 to-cyan-500 text-white flex items-center justify-center text-4xl mx-auto shadow-2xl animate-bounce">
                        <i class="fa-solid fa-folder-tree"></i>
                    </div>

                    <div class="space-y-2">
                        <span class="px-4 py-1.5 bg-emerald-500/20 text-emerald-300 font-extrabold text-xs uppercase tracking-wider rounded-full border border-emerald-400/30">
                            6. KONU • BTY.5.1.6
                        </span>
                        <h2 class="text-3xl sm:text-4xl font-black text-white">
                            Dosya ve Klasör Yönetimi
                        </h2>
                        <p class="text-sm sm:text-base text-indigo-200 max-w-xl mx-auto leading-relaxed">
                            Dosya adı, dosya uzantısı, klasör hiyerarşisi, klavye kısayolları ve dosya sıkıştırma dünyasını keşfetmeye hazır mısınız?
                        </p>
                    </div>

                    <div class="flex items-center justify-center gap-3 pt-2 flex-wrap">
                        <button onclick="app.openStandaloneGame('games/sunu_dosya_ve_klasor_yonetimi.html', 'Dosya ve Klasör Sunumu | Öğretmen Bozok'); sounds.playClick();" class="px-6 py-3.5 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-slate-950 font-black text-sm rounded-2xl shadow-xl shadow-yellow-500/25 flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95">
                            <i class="fa-solid fa-expand"></i>
                            <span>20 Slaytlık Tam Ekran Sunuyu Başlat 📽️</span>
                        </button>
                        <button onclick="app.switchTab('games'); sounds.playClick();" class="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm rounded-2xl border border-slate-700 shadow-lg flex items-center gap-2 transition-all active:scale-95">
                            <i class="fa-solid fa-gamepad text-purple-400"></i>
                            <span>Oyun Arenasına Git (7 Mod) 🎮</span>
                        </button>
                    </div>

                    <div class="pt-2 text-xs text-slate-400 flex items-center justify-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>Öğretmen Bozok • Bozok Bilişim Portalı 2026</span>
                    </div>
                </div>
            `
        },
        {
            id: 2,
            title: "Öğrenme Hedefleri ve Yol Haritası 🗺️",
            subtitle: "Ders Boyunca Neler Keşfedeceğiz?",
            badge: "YOL HARİTASI",
            icon: "fa-solid fa-compass",
            bgColor: "from-slate-900 via-indigo-950 to-blue-950",
            gradient: "from-slate-900 via-indigo-950 to-blue-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-5 my-auto py-1">
                    <div class="text-center space-y-1">
                        <h3 class="text-xl sm:text-2xl font-black text-white">Bu Derste Kazanacağımız Bilişim Süper Güçleri:</h3>
                        <p class="text-xs sm:text-sm text-cyan-200">Dosyalarımızı düzenli, güvenli ve verimli bir şekilde yönetmeyi öğreniyoruz.</p>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-1">
                            <div class="text-2xl">📄</div>
                            <h4 class="font-black text-sm text-cyan-300">1. Dosya Nedir?</h4>
                            <p class="text-xs text-slate-400">Verilerin kaydedildiği temel dijital birim.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-1">
                            <div class="text-2xl">🏷️</div>
                            <h4 class="font-black text-sm text-purple-300">2. Dosya Uzantısı</h4>
                            <p class="text-xs text-slate-400">.docx, .mp3, .mp4, .jpg ne anlama gelir?</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-1">
                            <div class="text-2xl">📁</div>
                            <h4 class="font-black text-sm text-amber-300">3. Klasör & Dizin</h4>
                            <p class="text-xs text-slate-400">Ortak dosyaları düzenleme ve alt klasör ağacı.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-1">
                            <div class="text-2xl">⌨️</div>
                            <h4 class="font-black text-sm text-emerald-300">4. Kısayol Tuşları</h4>
                            <p class="text-xs text-slate-400">Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Z, Ctrl+Y.</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 3,
            title: "Dosya (File) Nedir? 📄",
            subtitle: "Dijital Dünyanın Yapı Taşı",
            badge: "TEMEL KAVRAM",
            icon: "fa-solid fa-file",
            bgColor: "from-slate-900 via-blue-950 to-indigo-950",
            gradient: "from-slate-900 via-blue-950 to-indigo-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-6 my-auto">
                    <div class="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 shadow-xl space-y-4">
                        <div class="flex items-center gap-3">
                            <span class="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl font-black">📄</span>
                            <div>
                                <h3 class="text-xl font-black text-white">Dosya (File) Tanımı:</h3>
                                <p class="text-xs text-slate-400">Bilgisayarda verilerin saklandığı en küçük anlamlı birim</p>
                            </div>
                        </div>
                        <p class="text-slate-200 text-base leading-relaxed">
                            Bilgisayarda <strong>metin, resim, ses, video veya çizim</strong> gibi bilgilerin kaydedildiği birimlere <strong>DOSYA</strong> denir. Tıpkı bir defter yaprağı gibi! Her dosya belirli bir türdeki içeriği içinde barındırır.
                        </p>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                        <div class="p-3 rounded-2xl bg-slate-800/60 border border-blue-500/30">
                            <div class="text-2xl mb-1">📝</div>
                            <div class="font-bold text-sm text-white">Metin Dosyaları</div>
                            <div class="text-xs text-slate-400">Ödev, dilekçe, not</div>
                        </div>
                        <div class="p-3 rounded-2xl bg-slate-800/60 border border-purple-500/30">
                            <div class="text-2xl mb-1">🖼️</div>
                            <div class="font-bold text-sm text-white">Görsel / Resim</div>
                            <div class="text-xs text-slate-400">Fotoğraf, afiş</div>
                        </div>
                        <div class="p-3 rounded-2xl bg-slate-800/60 border border-amber-500/30">
                            <div class="text-2xl mb-1">🎵</div>
                            <div class="font-bold text-sm text-white">Ses / Müzik</div>
                            <div class="text-xs text-slate-400">Şarkı, ses kaydı</div>
                        </div>
                        <div class="p-3 rounded-2xl bg-slate-800/60 border border-rose-500/30">
                            <div class="text-2xl mb-1">🎬</div>
                            <div class="font-bold text-sm text-white">Video / Film</div>
                            <div class="text-xs text-slate-400">Çizgi film, ders videosu</div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 4,
            title: "Dosya Adı ve Uzantısı (Soyadı) 🏷️",
            subtitle: "Bir Dosyanın 3 Parçalı Kimliği",
            badge: "DOSYA YAPISI",
            icon: "fa-solid fa-signature",
            bgColor: "from-slate-900 via-indigo-950 to-purple-950",
            gradient: "from-slate-900 via-indigo-950 to-purple-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-6 my-auto text-center">
                    <div class="p-8 rounded-3xl bg-slate-900/90 border-2 border-indigo-500/40 shadow-2xl space-y-6">
                        <div class="inline-flex items-center justify-center gap-2 p-4 bg-slate-950 rounded-2xl border-2 border-dashed border-slate-700 font-mono text-xl sm:text-3xl font-black">
                            <span class="text-cyan-400 px-3 py-1 bg-cyan-950/60 rounded-xl">Ali Babanın Çiftliği</span>
                            <span class="text-yellow-400 text-4xl">.</span>
                            <span class="text-purple-400 px-3 py-1 bg-purple-950/60 rounded-xl">mp3</span>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                            <div class="p-4 rounded-2xl bg-slate-800/80 border-t-4 border-cyan-400">
                                <h4 class="font-black text-cyan-300 text-sm mb-1">1. Dosya Adı (Biz Veririz)</h4>
                                <p class="text-xs text-slate-300 leading-relaxed">
                                    Dosyanın neyle ilgili olduğunu anlatır. Örneğin: <em>"Ali Babanın Çiftliği"</em>. İstediğimiz zaman değiştirebiliriz.
                                </p>
                            </div>
                            <div class="p-4 rounded-2xl bg-slate-800/80 border-t-4 border-purple-400">
                                <h4 class="font-black text-purple-300 text-sm mb-1">2. Dosya Uzantısı (Soyadı)</h4>
                                <p class="text-xs text-slate-300 leading-relaxed">
                                    Dosyanın <strong>hangi türde</strong> olduğunu gösterir. Örneğin: <em>.mp3 (Ses dosyası)</em>. Bilgisayar bu uzantıya bakarak hangi programla açacağını anlar.
                                </p>
                            </div>
                        </div>

                        <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm font-bold">
                            ⚡ Kural: Dosya adı ile uzantısı arasına mutlaka <strong>NOKTA (.)</strong> işareti konulur!
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 5,
            title: "Yaygın Dosya Uzantıları Tablosu 📊",
            subtitle: "Hangi Uzantı, Hangi Dosya Türü?",
            badge: "UZANTI LİSTESİ",
            icon: "fa-solid fa-table-list",
            bgColor: "from-slate-900 via-purple-950 to-slate-950",
            gradient: "from-slate-900 via-purple-950 to-slate-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-1">
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <div class="p-3.5 rounded-2xl bg-slate-800/80 border-t-4 border-cyan-400 text-left space-y-1">
                            <div class="flex items-center gap-2 font-black text-sm text-cyan-300">
                                <span>📝</span> <span>Metin / Belge</span>
                            </div>
                            <div class="text-xs text-slate-300 space-y-0.5">
                                <div><strong>.docx</strong> → Word belgesi</div>
                                <div><strong>.txt</strong> → Not defteri metni</div>
                                <div><strong>.pdf</strong> → Sayfa düzenli belge / e-kitap</div>
                            </div>
                        </div>

                        <div class="p-3.5 rounded-2xl bg-slate-800/80 border-t-4 border-amber-400 text-left space-y-1">
                            <div class="flex items-center gap-2 font-black text-sm text-amber-300">
                                <span>🖼️</span> <span>Görsel / Resim</span>
                            </div>
                            <div class="text-xs text-slate-300 space-y-0.5">
                                <div><strong>.jpg / .jpeg</strong> → Standart fotoğraf</div>
                                <div><strong>.png</strong> → Şeffaf arka planlı resim</div>
                                <div><strong>.gif</strong> → Hareketli animasyon</div>
                            </div>
                        </div>

                        <div class="p-3.5 rounded-2xl bg-slate-800/80 border-t-4 border-emerald-400 text-left space-y-1">
                            <div class="flex items-center gap-2 font-black text-sm text-emerald-300">
                                <span>🎵</span> <span>Ses / Müzik</span>
                            </div>
                            <div class="text-xs text-slate-300 space-y-0.5">
                                <div><strong>.mp3</strong> → Popüler müzik formatı</div>
                                <div><strong>.wav</strong> → Ham yüksek kalite ses</div>
                                <div><strong>.wma</strong> → Windows ses dosyası</div>
                            </div>
                        </div>

                        <div class="p-3.5 rounded-2xl bg-slate-800/80 border-t-4 border-rose-400 text-left space-y-1">
                            <div class="flex items-center gap-2 font-black text-sm text-rose-300">
                                <span>🎬</span> <span>Video / Film</span>
                            </div>
                            <div class="text-xs text-slate-300 space-y-0.5">
                                <div><strong>.mp4</strong> → Standart video</div>
                                <div><strong>.avi</strong> → Kaliteli video formatı</div>
                                <div><strong>.mov</strong> → Apple video formatı</div>
                            </div>
                        </div>

                        <div class="p-3.5 rounded-2xl bg-slate-800/80 border-t-4 border-purple-400 text-left space-y-1">
                            <div class="flex items-center gap-2 font-black text-sm text-purple-300">
                                <span>🗜️</span> <span>Sıkıştırılmış (Arşiv)</span>
                            </div>
                            <div class="text-xs text-slate-300 space-y-0.5">
                                <div><strong>.zip</strong> → Standart arşiv paketi</div>
                                <div><strong>.rar</strong> → WinRAR arşivi</div>
                                <div class="text-slate-400 italic">Boyutu küçülten paketler</div>
                            </div>
                        </div>

                        <div class="p-3.5 rounded-2xl bg-slate-800/80 border-t-4 border-orange-400 text-left space-y-1">
                            <div class="flex items-center gap-2 font-black text-sm text-orange-300">
                                <span>⚙️</span> <span>Uygulama / Kurulum</span>
                            </div>
                            <div class="text-xs text-slate-300 space-y-0.5">
                                <div><strong>.exe</strong> → Windows çalıştırılabilir program</div>
                                <div><strong>.apk</strong> → Android mobil uygulama</div>
                                <div class="text-rose-400 font-bold">⚠️ Bilinmeyen .exe açılmaz!</div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 6,
            title: "Klasör (Dizin) ve Alt Klasör Nedir? 📁",
            subtitle: "Dijital Çekmeceler ve Düzen",
            badge: "HİYERARŞİ",
            icon: "fa-solid fa-folder-open",
            bgColor: "from-slate-900 via-indigo-950 to-slate-900",
            gradient: "from-slate-900 via-indigo-950 to-slate-900",
            content: `
                <div class="max-w-4xl mx-auto space-y-5 my-auto">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
                            <div class="flex items-center gap-2 font-black text-amber-300 text-base">
                                <span>📁</span> <span>Klasör (Dizin)</span>
                            </div>
                            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                Ortak özelliğe sahip dosyaları bir arada topladığımız sarı simgeli birimlere <strong>KLASÖR</strong> denir. Klasörlerin dosya uzantısı (soyadı) <strong>OLMAZ</strong>!
                            </p>
                            <div class="p-3 bg-slate-900/60 rounded-xl text-xs text-slate-400">
                                💡 <em>Ödevler, Resimler, Müzikler klasörleri gibi!</em>
                            </div>
                        </div>

                        <div class="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
                            <div class="flex items-center gap-2 font-black text-purple-300 text-base">
                                <span>🌳</span> <span>Alt Klasör Ağacı</span>
                            </div>
                            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                Bir klasörün içine açılan yeni klasöre <strong>ALT KLASÖR</strong> denir. Böylece hiyerarşik bir ağaç yapısı kurulur.
                            </p>
                            <div class="p-3 bg-slate-900/60 rounded-xl font-mono text-xs text-cyan-300">
                                📁 OKUL<br>
                                ├── 📁 Ödevler (Alt Klasör)<br>
                                ├── 📁 Resimler (Alt Klasör)<br>
                                └── 📁 Projeler (Alt Klasör)
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 7,
            title: "Yeni Klasör Oluşturma Adımları 🖱️",
            subtitle: "4 Kolay Adımda Yeni Bir Klasör Aç",
            badge: "UYGULAMA ADIMI",
            icon: "fa-solid fa-folder-plus",
            bgColor: "from-slate-900 via-blue-950 to-indigo-950",
            gradient: "from-slate-900 via-blue-950 to-indigo-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-5 my-auto text-center">
                    <h3 class="text-xl font-black text-white">Fareyle Yeni Klasör Oluşturma:</h3>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                        <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                            <span class="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-black text-sm">1</span>
                            <h4 class="font-bold text-sm text-white">Boş Yere Sağ Tık</h4>
                            <p class="text-xs text-slate-400">Masaüstünde veya pencerede boş bir alana sağ tıklanır.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                            <span class="w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center font-black text-sm">2</span>
                            <h4 class="font-bold text-sm text-white">"Yeni"ye Gel</h4>
                            <p class="text-xs text-slate-400">Açılan menüde fare 'Yeni' seçeneğinin üzerine getirilir.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                            <span class="w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-black text-sm">3</span>
                            <h4 class="font-bold text-sm text-white">"Klasör" Seç</h4>
                            <p class="text-xs text-slate-400">Açılan alt menüden 'Klasör' seçeneğine sol tıklanır.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                            <span class="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-black text-sm">4</span>
                            <h4 class="font-bold text-sm text-white">İsim Yaz & Enter</h4>
                            <p class="text-xs text-slate-400">Klasöre bir ad verilir ve Enter tuşuna basılır.</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 8,
            title: "Sihirli Kısayol Tuşları ⌨️",
            subtitle: "Kes, Kopyala, Yapıştır, Geri Al, Yinele",
            badge: "KLAVYE KISAYOLLARI",
            icon: "fa-solid fa-keyboard",
            bgColor: "from-slate-900 via-slate-950 to-indigo-950",
            gradient: "from-slate-900 via-slate-950 to-indigo-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 my-auto">
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                        <div class="p-4 rounded-2xl bg-slate-800/80 border border-cyan-500/30 space-y-1">
                            <span class="px-2.5 py-1 bg-slate-950 rounded-lg font-mono text-cyan-300 font-black text-sm border border-slate-700">Ctrl + C</span>
                            <h4 class="font-bold text-sm text-white mt-1">KOPYALA</h4>
                            <p class="text-xs text-slate-400">Dosyayı çoğaltır, aslı yerinde kalır.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800/80 border border-rose-500/30 space-y-1">
                            <span class="px-2.5 py-1 bg-slate-950 rounded-lg font-mono text-rose-300 font-black text-sm border border-slate-700">Ctrl + X</span>
                            <h4 class="font-bold text-sm text-white mt-1">KES (TAŞI)</h4>
                            <p class="text-xs text-slate-400">Dosyayı eski yerinden tamamen söker.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800/80 border border-emerald-500/30 space-y-1">
                            <span class="px-2.5 py-1 bg-slate-950 rounded-lg font-mono text-emerald-300 font-black text-sm border border-slate-700">Ctrl + V</span>
                            <h4 class="font-bold text-sm text-white mt-1">YAPIŞTIR</h4>
                            <p class="text-xs text-slate-400">Kesilen veya kopyalananı yeni yere bırakır.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800/80 border border-amber-500/30 space-y-1">
                            <span class="px-2.5 py-1 bg-slate-950 rounded-lg font-mono text-amber-300 font-black text-sm border border-slate-700">Ctrl + Z</span>
                            <h4 class="font-bold text-sm text-white mt-1">GERİ AL (Undo)</h4>
                            <p class="text-xs text-slate-400">Son yapılan hatalı işlemi iptal eder.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800/80 border border-purple-500/30 space-y-1">
                            <span class="px-2.5 py-1 bg-slate-950 rounded-lg font-mono text-purple-300 font-black text-sm border border-slate-700">Ctrl + Y</span>
                            <h4 class="font-bold text-sm text-white mt-1">YİNELE (Redo)</h4>
                            <p class="text-xs text-slate-400">Geri alınan işlemi tekrar uygular.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800/80 border border-red-500/30 space-y-1">
                            <span class="px-2.5 py-1 bg-slate-950 rounded-lg font-mono text-red-300 font-black text-sm border border-slate-700">Delete</span>
                            <h4 class="font-bold text-sm text-white mt-1">SİL</h4>
                            <p class="text-xs text-slate-400">Geri Dönüşüm Kutusu'na gönderir.</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 9,
            title: "Silme ve Geri Dönüşüm Kutusu 🗑️",
            subtitle: "Çöp Kutusunun Güvenlik Mantığı",
            badge: "GÜVENLİK",
            icon: "fa-solid fa-trash-can",
            bgColor: "from-slate-900 via-rose-950 to-slate-900",
            gradient: "from-slate-900 via-rose-950 to-slate-900",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 my-auto">
                    <div class="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 shadow-xl space-y-3">
                        <div class="flex items-center gap-3">
                            <span class="text-3xl">🗑️</span>
                            <h3 class="text-lg font-black text-white">Geri Dönüşüm Kutusu (Recycle Bin)</h3>
                        </div>
                        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            Bilgisayarda silinen dosyalar ilk olarak Geri Dönüşüm Kutusu'na atılır. Kullanıcı <em>"Boşalt"</em> komutu verene kadar orada bekler. Yanlışlıkla silinen dosyalar sağ tıklanıp <strong>"Geri Yükle"</strong> denilerek kurtarılabilir.
                        </p>
                        <div class="p-3 bg-rose-950/40 border border-rose-500/40 rounded-xl text-xs text-rose-200 font-bold">
                            ⚠️ Dikkat: Çöp kutusu boşaltıldığında veya kalıcı silindiğinde (Shift+Delete) dosyaların geri getirilmesi garanti değildir!
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 10,
            title: "Dosya Arama ve Yıldız (*) İşareti 🔍",
            subtitle: "Dedektif Gibi Dosya Bulma",
            badge: "ARAMA İŞLEMİ",
            icon: "fa-solid fa-magnifying-glass",
            bgColor: "from-slate-900 via-indigo-950 to-cyan-950",
            gradient: "from-slate-900 via-indigo-950 to-cyan-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 my-auto">
                    <div class="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 shadow-xl space-y-3">
                        <div class="flex items-center gap-3">
                            <span class="text-3xl">⭐</span>
                            <h3 class="text-lg font-black text-white">Yıldız (*) Joker Karakteri Nedir?</h3>
                        </div>
                        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            Dosya arama kutusuna yazılan yıldız (*) işareti <strong>"burada herhangi bir isim veya harfler olabilir"</strong> anlamına gelir.
                        </p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <div class="p-3 bg-slate-900/60 rounded-xl border border-cyan-500/30">
                                <span class="font-mono text-cyan-300 font-bold">*.docx</span>
                                <div class="text-xs text-slate-400 mt-1">Bilgisayardaki TÜM Word belgelerini listeler.</div>
                            </div>
                            <div class="p-3 bg-slate-900/60 rounded-xl border border-purple-500/30">
                                <span class="font-mono text-purple-300 font-bold">Bil*.docx</span>
                                <div class="text-xs text-slate-400 mt-1">Adı "Bil" ile başlayan tüm Word belgelerini bulur.</div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 11,
            title: "Dosya Sıkıştırma (Arşivleme) 🗜️",
            subtitle: "ZIP, RAR ve Tasarruf",
            badge: "SIKIŞTIRMA",
            icon: "fa-solid fa-file-zipper",
            bgColor: "from-slate-900 via-purple-950 to-indigo-950",
            gradient: "from-slate-900 via-purple-950 to-indigo-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 my-auto">
                    <div class="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 shadow-xl space-y-3">
                        <div class="flex items-center gap-3">
                            <span class="text-3xl">📦</span>
                            <h3 class="text-lg font-black text-white">Sıkıştırmanın 3 Büyük Faydası:</h3>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                            <div class="p-3 bg-slate-900/60 rounded-xl border border-blue-500/30 text-center">
                                <div class="text-2xl mb-1">💾</div>
                                <div class="font-bold text-xs text-white">Alandan Tasarruf</div>
                                <div class="text-[11px] text-slate-400">Dosya boyutunu küçültür.</div>
                            </div>
                            <div class="p-3 bg-slate-900/60 rounded-xl border border-emerald-500/30 text-center">
                                <div class="text-2xl mb-1">🚀</div>
                                <div class="font-bold text-xs text-white">Hızlı Paylaşım</div>
                                <div class="text-[11px] text-slate-400">İnternette çabuk yüklenir.</div>
                            </div>
                            <div class="p-3 bg-slate-900/60 rounded-xl border border-purple-500/30 text-center">
                                <div class="text-2xl mb-1">🗂️</div>
                                <div class="font-bold text-xs text-white">Tek Paket</div>
                                <div class="text-[11px] text-slate-400">Onlarca dosyayı birleştirir.</div>
                            </div>
                        </div>
                        <div class="text-xs text-slate-400 italic text-center pt-2">
                            Popüler programlar: WinRAR, WinZip • Uzantılar: .zip, .rar
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 12,
            title: "Depolama ve Dijitale Aktarım 💾",
            subtitle: "Verileri Nerede Saklarız ve Nasıl Aktarırız?",
            badge: "DEPOLAMA",
            icon: "fa-solid fa-hard-drive",
            bgColor: "from-slate-900 via-indigo-950 to-slate-900",
            gradient: "from-slate-900 via-indigo-950 to-slate-900",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 my-auto">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                            <h4 class="font-black text-amber-300 text-sm flex items-center gap-2">
                                <span>💽</span> <span>Depolama Araçları</span>
                            </h4>
                            <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                                <li><strong>Sabit Disk (HDD/SSD):</strong> Bilgisayar içi ana depolama.</li>
                                <li><strong>Flash Bellek / SD Kart:</strong> Taşınabilir harici bellek.</li>
                                <li><strong>Bulut Depolama:</strong> İnternet üzerinden erişilen alan (Google Drive vb.).</li>
                            </ul>
                        </div>
                        <div class="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                            <h4 class="font-black text-cyan-300 text-sm flex items-center gap-2">
                                <span>📠</span> <span>Basılı Veriyi Dijitale Aktarma</span>
                            </h4>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Kâğıt üzerindeki metin ve resimler <strong>Tarayıcı (Scanner)</strong>, telefon veya tablet kamerasıyla bilgisayara taranıp dijital dosya (PDF / JPG) haline getirilebilir.
                            </p>
                        </div>
                    </div>
                </div>
            `
        }
    ],

    questions: {
        trueFalse: [
            { q: "Dosya uzantısı, dosyanın türü hakkında bilgi verebilir.", answer: true, explanation: "Doğru! Örneğin .mp3 ses, .jpg görsel, .docx ise metin belgesi olduğunu gösterir." },
            { q: "MP3 uzantısı genellikle video dosyalarında kullanılır.", answer: false, explanation: "Yanlış! MP3 ses ve müzik dosyaları için kullanılır. Video için MP4 veya AVI kullanılır." },
            { q: "Bir klasörün içinde başka klasörler bulunabilir.", answer: true, explanation: "Doğru! Bir klasörün içine açılan klasörlere alt klasör (subfolder) denir." },
            { q: "Ctrl + C kopyalama işlemi için kullanılan yaygın bir kısayoldur.", answer: true, explanation: "Doğru! Ctrl + C kopyalar, dosyanın aslı yerinde kalır." },
            { q: "Ctrl + X kesme işlemi için kullanılır.", answer: true, explanation: "Doğru! Ctrl + X kesme (taşıma) kısayoludur." },
            { q: "Ctrl + V, seçili dosyayı yapıştırmak için kullanılabilir.", answer: true, explanation: "Doğru! Kopyalanan veya kesilen dosya Ctrl + V ile yeni yere yapıştırılır." },
            { q: "Ctrl + Z, yapılan bir işlemi geri almaya yardımcı olur.", answer: true, explanation: "Doğru! Ctrl + Z yapılan son işlemi iptal edip geri alır." },
            { q: "Geri Dönüşüm Kutusu'ndaki bir dosya geri yüklenebilir.", answer: true, explanation: "Doğru! Dosyaya sağ tıklanıp 'Geri Yükle' denildiğinde silindiği eski yerine döner." },
            { q: "Bir dosya Geri Dönüşüm Kutusu'nda yoksa kesinlikle geri getirilebilir.", answer: false, explanation: "Yanlış! Çöp kutusu boşaltılmış veya kalıcı silinmiş dosyaların geri getirilmesi garanti değildir." },
            { q: "PDF uzantısı elektronik kitap ve belge dosyalarında kullanılabilir.", answer: true, explanation: "Doğru! PDF sayfa düzenli evrensel belge ve e-kitap formatıdır." },
            { q: "ZIP ve RAR, sıkıştırılmış dosyalarla ilişkili uzantılardır.", answer: true, explanation: "Doğru! .zip ve .rar en popüler sıkıştırılmış arşiv uzantılarıdır." },
            { q: "Bil*.docx araması, adı Bil ile başlayan DOCX dosyalarını bulmak için kullanılabilir.", answer: true, explanation: "Doğru! Yıldız (*) joker karakteri 'herhangi bir ek' anlamına gelir." },
            { q: "Dosyaları uygun klasörlerde toplamak, dosyaları düzenlemeyi kolaylaştırır.", answer: true, explanation: "Doğru! Klasörleme aranan dosyaya saniyeler içinde ulaşmayı sağlar." },
            { q: "Bir dosyanın adını değiştirmek için mutlaka dosyanın içeriğini değiştirmek gerekir.", answer: false, explanation: "Yanlış! Dosya adı içeriğe hiç dokunmadan sağ tık -> Yeniden Adlandır (veya F2) ile değiştirilebilir." },
            { q: "Tarayıcı, kâğıt üzerindeki bilgileri dijital ortama aktarmak için kullanılabilir.", answer: true, explanation: "Doğru! Tarayıcı (Scanner) fiziksel kâğıtları bilgisayara PDF veya resim olarak aktarır." }
        ],
        multipleChoice: [
            {
                q: "Aşağıdakilerden hangisi bir resim (görsel) dosyası uzantısıdır?",
                options: [".mp3", ".jpg", ".docx", ".exe"],
                answer: 1,
                explanation: ".jpg standart fotoğraf ve resim dosyası uzantısıdır."
            },
            {
                q: "'Ali Babanın Çiftliği.mp3' dosyasındaki '.mp3' bölümü neyi ifade eder?",
                options: ["Dosyanın boyutunu", "Dosyayı yazan kişiyi", "Dosyanın türünü (Uzantısını)", "Dosyanın silinme tarihini"],
                answer: 2,
                explanation: "Noktadan sonra gelen kısım dosya uzantısıdır ve dosyanın türünü belirtir."
            },
            {
                q: "Ortak özelliğe sahip dosyaların düzenli bir şekilde saklandığı birime ne ad verilir?",
                options: ["Klasör (Dizin)", "İkili Kod", "Bit", "Uzantı"],
                answer: 0,
                explanation: "Dosyaları düzenli tutmak için sarı renkli klasörler (dizinler) kullanılır."
            },
            {
                q: "Bir dosyayı bulunduğu yerden tamamen alıp başka bir klasöre TAŞIMAK için sırasıyla hangi kısayollar kullanılır?",
                options: ["Ctrl + C ve Ctrl + V", "Ctrl + X ve Ctrl + V", "Ctrl + Z ve Ctrl + Y", "Delete ve Enter"],
                answer: 1,
                explanation: "Taşıma işlemi için önce KES (Ctrl+X) sonra YAPIŞTIR (Ctrl+V) yapılır."
            },
            {
                q: "Yapılan son hatalı işlemi zamanı geriye sarar gibi iptal etmek (GERİ ALMAK) için hangi kısayol kullanılır?",
                options: ["Ctrl + Z", "Ctrl + Y", "Ctrl + C", "Ctrl + S"],
                answer: 0,
                explanation: "Ctrl + Z yapılan son işlemi geri almaya (Undo) yarar."
            },
            {
                q: "Arama kutusuna '*.mp4' yazıldığında bilgisayar hangi dosyaları listeler?",
                options: ["Tüm Word belgelerini", "Adı 'mp4' olan tek bir resmi", "Bilgisayardaki tüm video dosyalarını", "Tüm sıkıştırılmış dosyaları"],
                answer: 2,
                explanation: "*.mp4 ifadesi, adı ne olursa olsun tüm .mp4 video dosyalarını bulur."
            },
            {
                q: "Aşağıdakilerden hangisi sıkıştırılmış dosya (arşiv) uzantısıdır?",
                options: [".txt", ".zip", ".wav", ".bmp"],
                answer: 1,
                explanation: ".zip ve .rar dosyaları sıkıştırmak ve arşivlemek için kullanılır."
            },
            {
                q: "Geri Dönüşüm Kutusu'ndaki bir dosya silindiği eski konumuna nasıl geri getirilir?",
                options: ["Dosyaya sağ tıklayıp 'Geri Yükle' seçilerek", "Bilgisayarı yeniden başlatarak", "Delete tuşuna basarak", "Dosyayı kapatarak"],
                answer: 0,
                explanation: "Çöp kutusundaki dosyaya sağ tıklanıp 'Geri Yükle' denildiğinde eski yerine döner."
            },
            {
                q: "Dosyaları sıkıştırmanın (arşivlemenin) en büyük 2 faydası nedir?",
                options: [
                    "Bilgisayarı hızlandırmak ve ekranı büyütmek",
                    "Disk alanından tasarruf etmek ve dosya paylaşımını kolaylaştırmak",
                    "Dosyanın rengini değiştirmek ve sesini açmak",
                    "İnterneti kapatmak ve pili korumak"
                ],
                answer: 1,
                explanation: "Sıkıştırma dosya boyutunu küçülterek yer kazandırır ve internette hızlı gönderim sağlar."
            },
            {
                q: "Kâğıt üzerindeki bir resmi veya yazıyı bilgisayara dijital dosya olarak aktaran donanım hangisidir?",
                options: ["Yazıcı (Printer)", "Tarayıcı (Scanner)", "Hoparlör", "Klavye"],
                answer: 1,
                explanation: "Tarayıcı (Scanner) kâğıt üzerindeki basılı belgeleri tarayarak bilgisayara aktarır."
            }
        ]
    },

    gameData: null
};
