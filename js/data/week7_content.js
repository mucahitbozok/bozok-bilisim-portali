// ==========================================
// 2. TEMA: DİJİTAL ÜRÜN TASARIMI VE GELİŞTİRME
// 7. Konu: Görsel Düzenleme Programlarına Giriş
// Kazanım: BTY.5.2.1 Görsel düzenleme programlarından yararlanabilme
// Hazırlayan: Öğretmen Bozok
// ==========================================

window.WEEK7_CONTENT = {
    weekInfo: {
        weekNumber: 7,
        customLabel: "7. Konu",
        title: "2. Tema: Görsel Düzenleme Programlarına Giriş",
        code: "BTY.5.2.1 Görsel düzenleme programlarından yararlanabilme",
        theme: "2. Tema: Dijital Ürün Tasarımı ve Geliştirme",
        isPending: false,
        themeColor: "from-purple-600 to-pink-700",
        images: {
            sayfa1: "assets/worksheets/2.1_sayfa1.png",
            sayfa2: "assets/worksheets/2.1_sayfa2.png",
            sayfa3: "assets/worksheets/2.1_sayfa3.png",
            sayfa4: "assets/worksheets/2.1_sayfa4.png",
            tekrar: "assets/worksheets/bilgisayar_konusu_tekrar.png",
            cevap: "assets/worksheets/2.1_sayfa1.png",
            defter: "assets/worksheets/2.1_sayfa2.png"
        }
    },

    videos: [
        {
            title: "Görsel ve Görüntü Türleri: Piksel, Bitmap ve Vektör",
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            desc: "Piksel nedir? Bitmap ve vektörel görüntüler arasındaki farklar nelerdir? Büyütüldüğünde hangisi bozulur?"
        },
        {
            title: "Görüntü Dosya Uzantıları: JPG, PNG, GIF, SVG ve AI",
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            desc: "Hangi durumda hangi dosya uzantısını seçmeliyiz? Şeffaf arka plan için PNG, hareket için GIF, vektör için SVG."
        },
        {
            title: "Görsel İşleme Programları: Paint, Canva, Photoshop ve GIMP",
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            desc: "Tasarım stüdyosunda program seçimi ve temel düzenleme işlemleri: Kırpma, döndürme, renk ayarı."
        },
        {
            title: "Dijital Ürün Tasarımı: Afiş Hazırlama, Telif Hakkı ve Yapay Zekâ Etiği",
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            desc: "Tasarım sürecinin 4 aşaması, görsel bütünlük, okunabilirlik kuralları ve dijital etik."
        }
    ],

    hideStandardGames: true,

    extraGames: [
        {
            id: "piksel_dedektifleri",
            title: "1. Piksel Dedektifleri",
            desc: "Bitmap, vektörel görüntü ve piksellerin gizemini büyüteçle çöz! 10 gizemli soru, 100 puan.",
            icon: "fa-solid fa-magnifying-glass",
            gradient: "from-indigo-600 to-purple-600",
            badge: "Dedektif Görevi",
            action: "app.openStandaloneGame('games/piksel_dedektifleri.html', 'Piksel Dedektifleri | Öğretmen Bozok')"
        },
        {
            id: "uzanti_avcilari",
            title: "2. Uzantı Avcıları",
            desc: "JPG, PNG, GIF, BMP, SVG, AI dosya uzantılarını hedefe al ve doğru biçimleri avla!",
            icon: "fa-solid fa-crosshairs",
            gradient: "from-emerald-600 to-teal-600",
            badge: "Uzantı Avı",
            action: "app.openStandaloneGame('games/uzanti_avcilari.html', 'Uzantı Avcıları | Öğretmen Bozok')"
        },
        {
            id: "hangi_programi_secmeliyim",
            title: "3. Hangi Programı Seçmeliyim?",
            desc: "Paint, Canva, Photoshop, Illustrator, GIMP ve Tinkercad arasından göreve en uygun aracı seç!",
            icon: "fa-solid fa-palette",
            gradient: "from-fuchsia-600 to-pink-600",
            badge: "Tasarım Stüdyosu",
            action: "app.openStandaloneGame('games/hangi_programi_secmeliyim.html', 'Hangi Programı Seçmeliyim? | Öğretmen Bozok')"
        },
        {
            id: "tasarim_ustalari",
            title: "4. Tasarım Ustaları",
            desc: "Afiş analizi, görsel bütünlük, okunabilirlik, telif hakları ve yapay zekâ etiği arenası!",
            icon: "fa-solid fa-crown",
            gradient: "from-amber-500 to-orange-600",
            badge: "Usta Tasarımcı",
            action: "app.openStandaloneGame('games/tasarim_ustalari.html', 'Tasarım Ustaları | Öğretmen Bozok')"
        }
    ],

    slides: [
        // Slayt 1: Kapak & Kazanım (Kural 2: İlk slaytta yalnızca kazanım numarası ve tam adı, Öğretmen Bozok markası)
        {
            title: "BTY.5.2.1 – Görsel düzenleme programlarından yararlanabilme",
            type: "cover",
            html: `
                <div class="h-full flex flex-col items-center justify-center text-center p-6 sm:p-10 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 rounded-3xl border-4 border-indigo-500/50 shadow-2xl relative overflow-hidden">
                    <div class="absolute -top-16 -right-16 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
                    <div class="absolute -bottom-16 -left-16 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl"></div>
                    
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-amber-300 font-bold text-sm mb-6 shadow-lg">
                        <i class="fa-solid fa-crown"></i> Öğretmen Bozok • Bilişim Portalı
                    </div>

                    <div class="w-24 h-24 rounded-3xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center text-white text-5xl mb-6 shadow-2xl shadow-purple-600/50 animate-pulse">
                        <i class="fa-solid fa-wand-magic-sparkles"></i>
                    </div>

                    <div class="inline-block px-4 py-1.5 bg-purple-500/30 text-purple-200 font-black rounded-xl text-xs sm:text-sm uppercase tracking-widest border border-purple-400/40 mb-3">
                        2. Tema • 7. Konu (BTY.5.2.1)
                    </div>

                    <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 max-w-3xl leading-tight">
                        BTY.5.2.1<br>
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-400 to-indigo-300">
                            Görsel düzenleme programlarından yararlanabilme
                        </span>
                    </h1>

                    <p class="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed mt-2">
                        Piksellerden vektörlere, dosya uzantılarından afiş tasarımına kadar dijital görsel dünyasını birlikte keşfediyoruz!
                    </p>
                </div>
            `
        },

        // Slayt 2: Bölüm 1 - Görsel Nedir? Fotoğraf, Resim ve Çizim Farkı
        {
            title: "Bölüm 1: Görsel Nedir? Fotoğraf, Resim ve Çizim Arasındaki Farklar",
            html: `
                <div class="h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 rounded-3xl border-2 border-indigo-500/40 space-y-4">
                    <div class="border-b border-slate-700 pb-3 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-indigo-600 text-white font-black text-sm flex items-center justify-center">1</span>
                            <h2 class="text-xl sm:text-2xl font-black text-white">Görsel Nedir? Farklı Görsel Türleri</h2>
                        </div>
                        <span class="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">Bölüm 1: Görsel ve Görüntü Türleri</span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                        <!-- Fotoğraf -->
                        <div class="bg-slate-800/80 p-5 rounded-2xl border border-sky-500/40 space-y-3 flex flex-col justify-between">
                            <div class="space-y-2">
                                <div class="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center text-2xl">
                                    <i class="fa-solid fa-camera"></i>
                                </div>
                                <h3 class="text-lg font-bold text-white">Fotoğraf</h3>
                                <p class="text-xs text-slate-300 leading-relaxed">
                                    Fotoğraf makinesi veya telefonla çekilen, gerçek dünyadaki ışık ve renklerin pikseller hâlinde kaydedildiği görüntülerdir.
                                </p>
                            </div>
                            <div class="bg-slate-900/60 p-2.5 rounded-xl text-[11px] text-sky-300 font-semibold">
                                <i class="fa-solid fa-check mr-1"></i> Milyonlarca ton ve gölge içerir.
                            </div>
                        </div>

                        <!-- Resim (Sanatsal) -->
                        <div class="bg-slate-800/80 p-5 rounded-2xl border border-purple-500/40 space-y-3 flex flex-col justify-between">
                            <div class="space-y-2">
                                <div class="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl">
                                    <i class="fa-solid fa-palette"></i>
                                </div>
                                <h3 class="text-lg font-bold text-white">Resim</h3>
                                <p class="text-xs text-slate-300 leading-relaxed">
                                    Geleneksel boyalarla (fırça, tuval) veya dijital çizim tabletleriyle sanatçı tarafından oluşturulan sanatsal eserlerdir.
                                </p>
                            </div>
                            <div class="bg-slate-900/60 p-2.5 rounded-xl text-[11px] text-purple-300 font-semibold">
                                <i class="fa-solid fa-check mr-1"></i> İnsan hayal gücü ve duygu taşır.
                            </div>
                        </div>

                        <!-- Çizim / Grafik -->
                        <div class="bg-slate-800/80 p-5 rounded-2xl border border-emerald-500/40 space-y-3 flex flex-col justify-between">
                            <div class="space-y-2">
                                <div class="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl">
                                    <i class="fa-solid fa-pen-ruler"></i>
                                </div>
                                <h3 class="text-lg font-bold text-white">Çizim & Grafik</h3>
                                <p class="text-xs text-slate-300 leading-relaxed">
                                    Çizgiler, geometrik şekiller ve sembollerle oluşturulmuş, genellikle bilgi verme veya simge amaçlı kullanılan grafiklerdir.
                                </p>
                            </div>
                            <div class="bg-slate-900/60 p-2.5 rounded-xl text-[11px] text-emerald-300 font-semibold">
                                <i class="fa-solid fa-check mr-1"></i> Şemalar, ikonlar, logolar ve kroki.
                            </div>
                        </div>
                    </div>

                    <div class="bg-indigo-950/40 p-3 rounded-2xl border border-indigo-500/30 flex items-center gap-3 text-xs text-indigo-200">
                        <i class="fa-solid fa-lightbulb text-amber-400 text-lg shrink-0"></i>
                        <span><strong>Akıllı Tahta Notu:</strong> Tüm bu görseller bilgisayar ortamında ya <strong>Piksel (Bitmap)</strong> ya da <strong>Vektörel (Çizgisel)</strong> olarak saklanır!</span>
                    </div>
                </div>
            `
        },

        // Slayt 3: Piksel Nedir?
        {
            title: "Piksel Nedir? Görüntünün Mikroskobik Renkli Kareleri",
            html: `
                <div class="h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 rounded-3xl border-2 border-indigo-500/40 space-y-4">
                    <div class="border-b border-slate-700 pb-3 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-indigo-600 text-white font-black text-sm flex items-center justify-center">2</span>
                            <h2 class="text-xl sm:text-2xl font-black text-white">Piksel (Pixel) Nedir?</h2>
                        </div>
                        <span class="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">Görüntünün Yapı Taşı</span>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center flex-1">
                        <div class="space-y-4">
                            <div class="bg-indigo-900/30 p-4 rounded-2xl border border-indigo-500/40 space-y-2">
                                <h3 class="text-lg font-bold text-amber-300 flex items-center gap-2">
                                    <i class="fa-solid fa-cubes"></i> Resmin Atomu: Piksel
                                </h3>
                                <p class="text-slate-200 text-xs sm:text-sm leading-relaxed">
                                    Dijital ekranlarda (monitör, telefon, televizyon) ve dijital fotoğraflarda görüntüyü oluşturan <strong>en küçük bağımsız renkli kare birime</strong> piksel denir.
                                </p>
                            </div>

                            <div class="space-y-2 text-xs text-slate-300">
                                <div class="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                                    <i class="fa-solid fa-circle-check text-emerald-400 mt-0.5"></i>
                                    <div><strong>Picture + Element:</strong> Piksel kelimesi, İngilizce 'Picture' (resim) ve 'Element' (öğe) kelimelerinin birleşiminden türetilmiştir.</div>
                                </div>
                                <div class="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                                    <i class="fa-solid fa-circle-check text-emerald-400 mt-0.5"></i>
                                    <div><strong>Çözünürlük (Resolution):</strong> Bir ekrandaki veya görseldeki yatay ve dikey piksel sayısıdır. (Örn: 1920 x 1080 = Yaklaşık 2 Milyon Piksel)</div>
                                </div>
                            </div>
                        </div>

                        <!-- Görsel Mozaik Simülasyonu -->
                        <div class="bg-slate-950 p-6 rounded-2xl border border-indigo-500/30 text-center space-y-4 shadow-inner">
                            <div class="text-xs font-bold text-slate-400">Akıllı Tahtada Mikroskop Altında Bir Göz Fotoğrafı:</div>
                            <div class="grid grid-cols-6 gap-1 max-w-[240px] mx-auto p-2 bg-slate-900 rounded-xl border border-slate-700">
                                <div class="w-8 h-8 bg-sky-400 rounded-sm"></div>
                                <div class="w-8 h-8 bg-sky-500 rounded-sm"></div>
                                <div class="w-8 h-8 bg-indigo-600 rounded-sm"></div>
                                <div class="w-8 h-8 bg-slate-900 rounded-sm border border-slate-700"></div>
                                <div class="w-8 h-8 bg-indigo-700 rounded-sm"></div>
                                <div class="w-8 h-8 bg-sky-400 rounded-sm"></div>
                                
                                <div class="w-8 h-8 bg-sky-300 rounded-sm"></div>
                                <div class="w-8 h-8 bg-slate-900 rounded-sm border border-slate-700"></div>
                                <div class="w-8 h-8 bg-slate-950 rounded-sm"></div>
                                <div class="w-8 h-8 bg-slate-950 rounded-sm"></div>
                                <div class="w-8 h-8 bg-slate-900 rounded-sm border border-slate-700"></div>
                                <div class="w-8 h-8 bg-sky-500 rounded-sm"></div>

                                <div class="w-8 h-8 bg-sky-400 rounded-sm"></div>
                                <div class="w-8 h-8 bg-slate-900 rounded-sm border border-slate-700"></div>
                                <div class="w-8 h-8 bg-slate-950 rounded-sm"></div>
                                <div class="w-8 h-8 bg-white rounded-sm shadow-sm"></div>
                                <div class="w-8 h-8 bg-slate-900 rounded-sm border border-slate-700"></div>
                                <div class="w-8 h-8 bg-sky-400 rounded-sm"></div>

                                <div class="w-8 h-8 bg-sky-500 rounded-sm"></div>
                                <div class="w-8 h-8 bg-indigo-600 rounded-sm"></div>
                                <div class="w-8 h-8 bg-slate-900 rounded-sm border border-slate-700"></div>
                                <div class="w-8 h-8 bg-slate-900 rounded-sm border border-slate-700"></div>
                                <div class="w-8 h-8 bg-indigo-700 rounded-sm"></div>
                                <div class="w-8 h-8 bg-sky-500 rounded-sm"></div>
                            </div>
                            <div class="text-[11px] text-amber-300 font-semibold italic">
                                "Uzaktan bakınca pürüzsüz bir göz bebeği görünür, çok yakından bakınca ise renkli kareler!"
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 4: Bitmap (Nokta Eşlemli) Görüntüler
        {
            title: "Bitmap (Nokta Eşlemli) Görüntüler ve Özellikleri",
            html: `
                <div class="h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 rounded-3xl border-2 border-indigo-500/40 space-y-4">
                    <div class="border-b border-slate-700 pb-3 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-indigo-600 text-white font-black text-sm flex items-center justify-center">3</span>
                            <h2 class="text-xl sm:text-2xl font-black text-white">Bitmap (Nokta Eşlemli) Görüntüler</h2>
                        </div>
                        <span class="text-xs font-bold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">Piksel Izgarası</span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                        <div class="bg-slate-800/80 p-5 rounded-2xl border border-sky-500/30 space-y-3">
                            <h3 class="text-base font-bold text-white flex items-center gap-2">
                                <i class="fa-solid fa-table-cells text-sky-400"></i> Bitmap Nedir?
                            </h3>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Piksellerin bir satranç tahtası gibi satır ve sütunlar hâlinde dizilerek renk kodlarıyla eşleştiği görüntü türüdür.
                            </p>
                            <ul class="space-y-2 text-xs text-slate-200">
                                <li class="flex items-center gap-2"><i class="fa-solid fa-circle-dot text-sky-400 text-[10px]"></i> Fotoğraf makineleri ve telefonlar Bitmap kaydeder.</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-circle-dot text-sky-400 text-[10px]"></i> Renk geçişleri, gölgeler ve ışık son derece zengindir.</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-circle-dot text-sky-400 text-[10px]"></i> Yaygın uzantıları: <strong>JPG, PNG, GIF, BMP, TIFF</strong>.</li>
                            </ul>
                        </div>

                        <div class="bg-rose-950/30 p-5 rounded-2xl border border-rose-500/40 space-y-3">
                            <h3 class="text-base font-bold text-rose-300 flex items-center gap-2">
                                <i class="fa-solid fa-triangle-exclamation text-rose-400"></i> En Büyük Dezavantajı: Pikselleşme
                            </h3>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Bir Bitmap görsel çok fazla büyütüldüğünde yeni piksel üretilemez; var olan pikseller irileşir.
                            </p>
                            <div class="p-3 bg-slate-900/80 rounded-xl border border-rose-500/30 text-xs text-rose-200 space-y-1">
                                <div class="font-bold">⚠️ Sonuç:</div>
                                <div>Kenarlarda tırtıklı yapı, bulanıklık ve kalite kaybı (Pikselleşme - Pixelation) meydana gelir.</div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-slate-800/60 p-3 rounded-2xl border border-slate-700 flex items-center justify-between text-xs text-slate-300">
                        <span><strong>Örnek Senaryo:</strong> Telefonunuzla çektiğiniz bir manzara fotoğrafı tipik bir Bitmap görüntüdür.</span>
                        <span class="px-2.5 py-1 bg-sky-500/20 text-sky-300 rounded-md font-bold">Fotoğraflar = Bitmap</span>
                    </div>
                </div>
            `
        },

        // Slayt 5: Vektörel (Çizgisel) Görüntüler
        {
            title: "Vektörel (Çizgisel) Görüntüler ve Matematiksel Gücü",
            html: `
                <div class="h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 rounded-3xl border-2 border-indigo-500/40 space-y-4">
                    <div class="border-b border-slate-700 pb-3 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-indigo-600 text-white font-black text-sm flex items-center justify-center">4</span>
                            <h2 class="text-xl sm:text-2xl font-black text-white">Vektörel (Çizgisel) Görüntüler</h2>
                        </div>
                        <span class="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">Matematiksel Formüller</span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                        <div class="bg-slate-800/80 p-5 rounded-2xl border border-emerald-500/30 space-y-3">
                            <h3 class="text-base font-bold text-white flex items-center gap-2">
                                <i class="fa-solid fa-bezier-curve text-emerald-400"></i> Vektörel Nedir?
                            </h3>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Piksellerden değil; matematiksel koordinatlar, doğrular, eğriler ve geometrik şekillerden oluşan görüntü türüdür.
                            </p>
                            <ul class="space-y-2 text-xs text-slate-200">
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> Bilgisayar her yakınlaştırmada çizgileri yeniden hesaplar.</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> Ne kadar büyütülürse büyütülsün <strong>asla bulanıklaşmaz</strong>.</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> Yaygın uzantıları: <strong>SVG, EPS, AI</strong>.</li>
                            </ul>
                        </div>

                        <div class="bg-emerald-950/30 p-5 rounded-2xl border border-emerald-500/40 space-y-3">
                            <h3 class="text-base font-bold text-emerald-300 flex items-center gap-2">
                                <i class="fa-solid fa-crown text-amber-400"></i> Neden Logolarda Tercih Edilir?
                            </h3>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Bir şirket logosu küçücük bir tükenmez kalemde de, dev bir stadyum panosunda da aynı netlikte basılmalıdır.
                            </p>
                            <div class="p-3 bg-slate-900/80 rounded-xl border border-emerald-500/30 text-xs text-emerald-200 space-y-1">
                                <div class="font-bold text-amber-300">⭐ Süper Gücü: Sonsuz Ölçeklenebilirlik</div>
                                <div>İster 1 cm, ister 100 metre yapın; kenar çizgileri jilet gibi pürüzsüz kalır!</div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-slate-800/60 p-3 rounded-2xl border border-slate-700 flex items-center justify-between text-xs text-slate-300">
                        <span><strong>Kullanım Alanları:</strong> Şirket logoları, ikonlar, yazı tipleri (fontlar) ve teknik çizimler.</span>
                        <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 rounded-md font-bold">Logolar & İkonlar = Vektörel</span>
                    </div>
                </div>
            `
        },

        // Slayt 6: Büyük Karşılaştırma Tablosu
        {
            title: "Büyük Karşılaştırma: Bitmap vs Vektörel (Büyütmede Kalite Değişimi)",
            html: `
                <div class="h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 rounded-3xl border-2 border-indigo-500/40 space-y-4">
                    <div class="border-b border-slate-700 pb-3 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-indigo-600 text-white font-black text-sm flex items-center justify-center">5</span>
                            <h2 class="text-xl sm:text-2xl font-black text-white">Bitmap vs Vektörel Karşılaştırma Tablosu</h2>
                        </div>
                        <span class="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Hızlı Özet Tablo</span>
                    </div>

                    <div class="overflow-x-auto flex-1">
                        <table class="w-full text-left text-xs text-slate-200 border-collapse">
                            <thead>
                                <tr class="border-b border-slate-700 bg-slate-800/80 text-white font-black text-xs uppercase">
                                    <th class="p-3">Özellik</th>
                                    <th class="p-3 text-sky-400">Bitmap (Piksel Tabanlı)</th>
                                    <th class="p-3 text-emerald-400">Vektörel (Çizgisel)</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-800">
                                <tr>
                                    <td class="p-3 font-bold text-white">Yapı Taşı</td>
                                    <td class="p-3 text-slate-300">Renkli küçük kareler (Pikseller)</td>
                                    <td class="p-3 text-slate-300">Matematiksel çizgi ve formüller</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-bold text-white">Büyütüldüğünde</td>
                                    <td class="p-3 text-rose-400 font-semibold">Bulanıklaşır ve piksellenir ✗</td>
                                    <td class="p-3 text-emerald-400 font-semibold">Asla bozulmaz, jilet gibi kalır ✓</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-bold text-white">Detay Yeteneği</td>
                                    <td class="p-3 text-slate-300">Gerçekçi tonlar, fotoğraflar ve doğa</td>
                                    <td class="p-3 text-slate-300">Sade çizgiler, logolar ve semboller</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-bold text-white">Dosya Boyutu</td>
                                    <td class="p-3 text-slate-300">Çözünürlük arttıkça çok büyür (MB)</td>
                                    <td class="p-3 text-slate-300">Genellikle çok küçük ve hafiftir (KB)</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-bold text-white">Örnek Formatlar</td>
                                    <td class="p-3 font-mono text-sky-300 font-bold">.JPG, .PNG, .GIF, .BMP, .TIFF</td>
                                    <td class="p-3 font-mono text-emerald-300 font-bold">.SVG, .EPS, .AI</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="bg-gradient-to-r from-sky-950/60 to-emerald-950/60 p-3 rounded-2xl border border-slate-700 text-xs text-center font-bold text-white">
                        💡 <strong>Altın Kural:</strong> Fotoğraf için <strong>Bitmap</strong>, her boyutta büyüyecek logo ve çizim için <strong>Vektörel</strong>!
                    </div>
                </div>
            `
        },

        // Slayt 7: İnteraktif Sınıf Oyunu
        {
            title: "Sınıf İçi Soru: Dedektif Kararı!",
            html: `
                <div class="h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 rounded-3xl border-2 border-indigo-500/40 space-y-4">
                    <div class="border-b border-slate-700 pb-3 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center"><i class="fa-solid fa-question"></i></span>
                            <h2 class="text-xl sm:text-2xl font-black text-white">Akıllı Tahta Mini Oyunu: Hangisi Bitmap, Hangisi Vektörel?</h2>
                        </div>
                        <span class="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Parmak Kaldır!</span>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 items-center">
                        <div class="p-5 bg-slate-800 rounded-2xl border border-slate-700 text-center space-y-3">
                            <div class="text-4xl text-sky-400"><i class="fa-solid fa-camera-retro"></i></div>
                            <h3 class="font-bold text-white text-sm">1. Okul Gezisinde Çekilen Toplu Fotoğraf</h3>
                            <p class="text-xs text-slate-400">Bu görsel hangi türdendir?</p>
                            <div class="pt-2">
                                <span class="px-4 py-2 bg-sky-500/20 text-sky-300 border border-sky-500/40 rounded-xl font-black text-xs">
                                    Cevap: BITMAP (Piksel Tabanlı)
                                </span>
                            </div>
                        </div>

                        <div class="p-5 bg-slate-800 rounded-2xl border border-slate-700 text-center space-y-3">
                            <div class="text-4xl text-emerald-400"><i class="fa-solid fa-school"></i></div>
                            <h3 class="font-bold text-white text-sm">2. Okulun Yeni Tasarlanan Resmi Amblemi / Logosu</h3>
                            <p class="text-xs text-slate-400">Bu görsel hangi tür olmalıdır?</p>
                            <div class="pt-2">
                                <span class="px-4 py-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-xl font-black text-xs">
                                    Cevap: VEKTÖREL (Çizgisel)
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-indigo-950/40 p-3 rounded-2xl border border-indigo-500/30 text-center text-xs text-indigo-200">
                        🎯 <strong>Öğretmen Sorusu:</strong> Eğer okul amblemini düşük çözünürlüklü bir JPG fotoğraf yapsaydık, dev bina pankartına bastığımızda ne olurdu? (Pikselleşir ve bozulurdu!)
                    </div>
                </div>
            `
        },

        // Slayt 8: Bölüm 2 - Görüntü Dosyaları ve Uzantılar
        {
            title: "Bölüm 2: Görüntü Dosyası Nedir? Dosya Adı ve Uzantısı",
            html: `
                <div class="h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 rounded-3xl border-2 border-indigo-500/40 space-y-4">
                    <div class="border-b border-slate-700 pb-3 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-indigo-600 text-white font-black text-sm flex items-center justify-center">6</span>
                            <h2 class="text-xl sm:text-2xl font-black text-white">Görüntü Dosyası Nedir?</h2>
                        </div>
                        <span class="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">Bölüm 2: Dosyalar & Uzantılar</span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center flex-1">
                        <div class="space-y-4">
                            <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                                Görseller bilgisayarımızda depolanırken belirli standart biçimlerde kaydedilir. Bir dosyanın yapısı iki ana kısımdan oluşur:
                            </p>
                            <div class="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-2">
                                <div class="text-xs font-bold text-amber-400 uppercase">Dosya Anatomisi:</div>
                                <div class="text-xl sm:text-2xl font-mono font-black text-white flex items-center gap-1">
                                    <span class="text-indigo-300">manzara_resmi</span>
                                    <span class="text-slate-500">.</span>
                                    <span class="text-emerald-400">jpg</span>
                                </div>
                                <div class="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-slate-700">
                                    <div><strong class="text-indigo-300">Dosya Adı:</strong> Bizim verdiğimiz isim</div>
                                    <div><strong class="text-emerald-400">Uzantı:</strong> Türünü belirten kısım</div>
                                </div>
                            </div>
                        </div>

                        <div class="space-y-3 bg-slate-800/60 p-5 rounded-2xl border border-slate-700">
                            <h3 class="text-sm font-bold text-white flex items-center gap-2">
                                <i class="fa-solid fa-fingerprint text-purple-400"></i> Dosya Uzantısının Önemi
                            </h3>
                            <ul class="space-y-2 text-xs text-slate-300">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-emerald-400 mt-0.5"></i>
                                    <span>İşletim sistemine bu dosyanın bir <strong>resim, ses veya metin</strong> olduğunu bildirir.</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-emerald-400 mt-0.5"></i>
                                    <span>Çift tıklandığında hangi programla (Paint, Fotoğraflar vb.) açılacağını belirler.</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-emerald-400 mt-0.5"></i>
                                    <span>Doğru uzantı seçilmezse görsel bozulabilir veya açılmayabilir.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 9: Bitmap Uzantıları
        {
            title: "Bitmap Görüntü Dosyası Uzantıları",
            html: `
                <div class="h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 rounded-3xl border-2 border-indigo-500/40 space-y-4">
                    <div class="border-b border-slate-700 pb-3 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-sky-600 text-white font-black text-sm flex items-center justify-center">7</span>
                            <h2 class="text-xl sm:text-2xl font-black text-white">Bitmap Uzantıları (Piksel Tabanlı)</h2>
                        </div>
                        <span class="text-xs font-bold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">Fotoğraf & Web Formatları</span>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 flex-1">
                        <div class="bg-slate-800/80 p-3.5 rounded-2xl border border-sky-500/30 space-y-1.5">
                            <div class="flex items-center justify-between">
                                <span class="font-mono font-black text-sky-400 text-base">.JPG / .JPEG</span>
                                <i class="fa-solid fa-camera text-slate-500"></i>
                            </div>
                            <div class="text-xs font-bold text-white">Standart Fotoğraf</div>
                            <p class="text-[11px] text-slate-300 leading-relaxed">Fotoğraflar için en yaygın format. Renkleri sıkıştırarak hafifletir. Şeffaflığı desteklemez.</p>
                        </div>

                        <div class="bg-slate-800/80 p-3.5 rounded-2xl border border-emerald-500/30 space-y-1.5">
                            <div class="flex items-center justify-between">
                                <span class="font-mono font-black text-emerald-400 text-base">.PNG</span>
                                <i class="fa-solid fa-border-none text-slate-500"></i>
                            </div>
                            <div class="text-xs font-bold text-white">Saydam / Şeffaf Ağ Grafiği</div>
                            <p class="text-[11px] text-slate-300 leading-relaxed"><strong>Şeffaf (transparan) arka planı</strong> destekler. Web logoları ve simgeleri için mükemmeldir.</p>
                        </div>

                        <div class="bg-slate-800/80 p-3.5 rounded-2xl border border-amber-500/30 space-y-1.5">
                            <div class="flex items-center justify-between">
                                <span class="font-mono font-black text-amber-400 text-base">.GIF</span>
                                <i class="fa-solid fa-film text-slate-500"></i>
                            </div>
                            <div class="text-xs font-bold text-white">Hareketli Animasyon</div>
                            <p class="text-[11px] text-slate-300 leading-relaxed">256 renk destekler. Kısa süreli hareketli animasyonlar ve döngüsel klipler için kullanılır.</p>
                        </div>

                        <div class="bg-slate-800/80 p-3.5 rounded-2xl border border-rose-500/30 space-y-1.5">
                            <div class="flex items-center justify-between">
                                <span class="font-mono font-black text-rose-400 text-base">.BMP</span>
                                <i class="fa-solid fa-floppy-disk text-slate-500"></i>
                            </div>
                            <div class="text-xs font-bold text-white">Sıkıştırmasız Bitmap</div>
                            <p class="text-[11px] text-slate-300 leading-relaxed">Paint'in eski temel biçimi. Pikselleri hiç sıkıştırmadığı için dosya boyutu çok büyüktür.</p>
                        </div>

                        <div class="bg-slate-800/80 p-3.5 rounded-2xl border border-purple-500/30 space-y-1.5">
                            <div class="flex items-center justify-between">
                                <span class="font-mono font-black text-purple-400 text-base">.TIFF</span>
                                <i class="fa-solid fa-print text-slate-500"></i>
                            </div>
                            <div class="text-xs font-bold text-white">Matbaa & Kayıpsız Baskı</div>
                            <p class="text-[11px] text-slate-300 leading-relaxed">Profesyonel fotoğrafçılıkta ve matbaada sıfır kalite kaybı için tercih edilir.</p>
                        </div>

                        <div class="bg-gradient-to-br from-indigo-900/60 to-purple-900/60 p-3.5 rounded-2xl border border-indigo-500/40 flex flex-col justify-center text-center space-y-1">
                            <div class="text-xs font-bold text-amber-300">En Çok Kullanılan İkili:</div>
                            <div class="text-sm font-black text-white">Fotoğrafta JPG, Saydamlıkta PNG!</div>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 10: Vektörel Uzantılar
        {
            title: "Vektörel Dosya Uzantıları (SVG, EPS, AI)",
            html: `
                <div class="h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 rounded-3xl border-2 border-indigo-500/40 space-y-4">
                    <div class="border-b border-slate-700 pb-3 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-emerald-600 text-white font-black text-sm flex items-center justify-center">8</span>
                            <h2 class="text-xl sm:text-2xl font-black text-white">Vektörel Görüntü Uzantıları</h2>
                        </div>
                        <span class="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">Bozulmayan Çizim Formatları</span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                        <div class="bg-slate-800/80 p-5 rounded-2xl border border-emerald-500/40 space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl font-mono font-black">&lt;/&gt;</div>
                            <h3 class="text-lg font-bold text-emerald-300 font-mono">.SVG</h3>
                            <div class="text-xs font-bold text-white">Scalable Vector Graphics</div>
                            <p class="text-xs text-slate-300 leading-relaxed">Web tarayıcılarında açılabilen, XML kodlu vektörel formattır. Web sitelerindeki logolar için vazgeçilmezdir.</p>
                        </div>

                        <div class="bg-slate-800/80 p-5 rounded-2xl border border-teal-500/40 space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center text-2xl font-mono font-black">EPS</div>
                            <h3 class="text-lg font-bold text-teal-300 font-mono">.EPS</h3>
                            <div class="text-xs font-bold text-white">Encapsulated PostScript</div>
                            <p class="text-xs text-slate-300 leading-relaxed">Profesyonel matbaa ve baskı standardıdır. Farklı vektör yazılımları arasında çizim aktarımı sağlar.</p>
                        </div>

                        <div class="bg-slate-800/80 p-5 rounded-2xl border border-amber-500/40 space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl font-mono font-black">Ai</div>
                            <h3 class="text-lg font-bold text-amber-300 font-mono">.AI</h3>
                            <div class="text-xs font-bold text-white">Adobe Illustrator File</div>
                            <p class="text-xs text-slate-300 leading-relaxed">Illustrator'ın yerel proje uzantısıdır. Çizimdeki tüm katmanlar ve düzenleme noktaları saklanır.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 11: Rehber Tablo
        {
            title: "Doğru Dosya Biçimini Seçme Rehberi (Hangi Durumda Hangisi?)",
            html: `
                <div class="h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 rounded-3xl border-2 border-indigo-500/40 space-y-4">
                    <div class="border-b border-slate-700 pb-3 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-indigo-600 text-white font-black text-sm flex items-center justify-center">9</span>
                            <h2 class="text-xl sm:text-2xl font-black text-white">Hangi Durumda Hangi Uzantıyı Seçmeliyiz?</h2>
                        </div>
                        <span class="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Karar Rehberi</span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                        <div class="space-y-3">
                            <div class="p-3 bg-slate-800/80 rounded-2xl border-l-4 border-sky-400 flex items-start gap-3">
                                <span class="text-lg text-sky-400 mt-0.5"><i class="fa-solid fa-camera"></i></span>
                                <div><h4 class="text-xs font-bold text-white">Fotoğraf çektim, arkadaşıma göndereceğim:</h4><p class="text-[11px] text-slate-300">➡️ <strong>.JPG</strong> (Hafif ve hızlı yüklenir)</p></div>
                            </div>
                            <div class="p-3 bg-slate-800/80 rounded-2xl border-l-4 border-emerald-400 flex items-start gap-3">
                                <span class="text-lg text-emerald-400 mt-0.5"><i class="fa-solid fa-shapes"></i></span>
                                <div><h4 class="text-xs font-bold text-white">Arka planı şeffaf bir logo koyacağım:</h4><p class="text-[11px] text-slate-300">➡️ <strong>.PNG</strong> (Transparan alanları korur)</p></div>
                            </div>
                            <div class="p-3 bg-slate-800/80 rounded-2xl border-l-4 border-amber-400 flex items-start gap-3">
                                <span class="text-lg text-amber-400 mt-0.5"><i class="fa-solid fa-clapperboard"></i></span>
                                <div><h4 class="text-xs font-bold text-white">Sosyal medyada hareketli çıkartma yapacağım:</h4><p class="text-[11px] text-slate-300">➡️ <strong>.GIF</strong> (Kısa animasyonları oynatır)</p></div>
                            </div>
                        </div>

                        <div class="space-y-3">
                            <div class="p-3 bg-slate-800/80 rounded-2xl border-l-4 border-teal-400 flex items-start gap-3">
                                <span class="text-lg text-teal-400 mt-0.5"><i class="fa-solid fa-globe"></i></span>
                                <div><h4 class="text-xs font-bold text-white">Web sitesi için hiç bozulmayan ikon ve logo:</h4><p class="text-[11px] text-slate-300">➡️ <strong>.SVG</strong> (Web vektörel standardı)</p></div>
                            </div>
                            <div class="p-3 bg-slate-800/80 rounded-2xl border-l-4 border-purple-400 flex items-start gap-3">
                                <span class="text-lg text-purple-400 mt-0.5"><i class="fa-solid fa-print"></i></span>
                                <div><h4 class="text-xs font-bold text-white">Matbaada yüksek kaliteli kitap kapağı basılacak:</h4><p class="text-[11px] text-slate-300">➡️ <strong>.TIFF</strong> veya <strong>.EPS</strong> (Kayıpsız baskı)</p></div>
                            </div>
                            <div class="p-3 bg-slate-800/80 rounded-2xl border-l-4 border-rose-400 flex items-start gap-3">
                                <span class="text-lg text-rose-400 mt-0.5"><i class="fa-solid fa-layer-group"></i></span>
                                <div><h4 class="text-xs font-bold text-white">Grafik tasarımcıya düzenlenebilir proje göndereceğim:</h4><p class="text-[11px] text-slate-300">➡️ <strong>.AI</strong> (Illustrator) veya <strong>.PSD</strong> (Photoshop)</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 12: Görsel İşleme Programı Nedir?
        {
            title: "Bölüm 3: Görsel İşleme Programı Nedir?",
            html: `
                <div class="h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 rounded-3xl border-2 border-indigo-500/40 space-y-4">
                    <div class="border-b border-slate-700 pb-3 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-indigo-600 text-white font-black text-sm flex items-center justify-center">10</span>
                            <h2 class="text-xl sm:text-2xl font-black text-white">Görsel İşleme Programı Nedir?</h2>
                        </div>
                        <span class="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">Bölüm 3: Programlar & Araçlar</span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center flex-1">
                        <div class="space-y-4">
                            <div class="bg-indigo-900/30 p-5 rounded-2xl border border-indigo-500/40 space-y-2">
                                <h3 class="text-base font-bold text-amber-300">Görsel İşleme Yazılımı</h3>
                                <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                                    Dijital fotoğrafları, çizimleri veya grafikleri oluşturmamızı, boyutlandırmamızı, renklerini değiştirmemizi ve üzerinde değişiklik yapmamızı sağlayan yazılımlara <strong>görsel işleme programı</strong> denir.
                                </p>
                            </div>
                            <div class="text-xs text-slate-300 space-y-2">
                                <div class="flex items-center gap-2"><i class="fa-solid fa-paintbrush text-pink-400"></i> Sıfırdan çizim ve illüstrasyon üretimi</div>
                                <div class="flex items-center gap-2"><i class="fa-solid fa-wand-magic text-sky-400"></i> Kusurlu fotoğrafları düzeltme ve rötuşlama</div>
                                <div class="flex items-center gap-2"><i class="fa-solid fa-rectangle-ad text-amber-400"></i> Afiş, broşür, logo ve dijital ürün tasarımı</div>
                            </div>
                        </div>

                        <div class="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-3">
                            <h4 class="text-xs font-bold text-white uppercase tracking-wider">İki Temel Program Ailesi:</h4>
                            <div class="p-3 bg-slate-900/80 rounded-xl border border-sky-500/30 space-y-1">
                                <div class="font-bold text-sky-400 text-xs flex items-center gap-1.5"><i class="fa-solid fa-image"></i> Piksel / Fotoğraf Düzenleyiciler</div>
                                <div class="text-[11px] text-slate-300">Piksel piksellerle çalışır. Örn: Paint, Photoshop, GIMP.</div>
                            </div>
                            <div class="p-3 bg-slate-900/80 rounded-xl border border-emerald-500/30 space-y-1">
                                <div class="font-bold text-emerald-400 text-xs flex items-center gap-1.5"><i class="fa-solid fa-pen-nib"></i> Vektörel Çizim Programları</div>
                                <div class="text-[11px] text-slate-300">Çizgiler ve eğrilerle çalışır. Örn: Illustrator, Google Çizimler.</div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 13: Giriş Programları
        {
            title: "Giriş & Pratik Araçlar: Paint, Canva, Google Çizimler",
            html: `
                <div class="h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 rounded-3xl border-2 border-indigo-500/40 space-y-4">
                    <div class="border-b border-slate-700 pb-3 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-pink-600 text-white font-black text-sm flex items-center justify-center">11</span>
                            <h2 class="text-xl sm:text-2xl font-black text-white">Giriş ve Pratik Programlar</h2>
                        </div>
                        <span class="text-xs font-bold text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">Öğrenci Dostu Araçlar</span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                        <div class="bg-slate-800/80 p-5 rounded-2xl border border-sky-500/30 space-y-3 flex flex-col justify-between">
                            <div class="space-y-2">
                                <div class="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center text-2xl"><i class="fa-solid fa-paintbrush"></i></div>
                                <h3 class="text-lg font-bold text-white">Paint</h3>
                                <p class="text-xs text-slate-300 leading-relaxed">Windows ile hazır gelen, fırça ve geometrik şekillerle serbest çizim yapılabilen pratik araçtır.</p>
                            </div>
                            <div class="text-[11px] text-sky-300 bg-slate-900/60 p-2 rounded-xl"><strong>Kullanım:</strong> Hızlı çizim ve kırpma.</div>
                        </div>

                        <div class="bg-slate-800/80 p-5 rounded-2xl border border-teal-500/30 space-y-3 flex flex-col justify-between">
                            <div class="space-y-2">
                                <div class="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center text-2xl"><i class="fa-solid fa-layer-group"></i></div>
                                <h3 class="text-lg font-bold text-white">Canva</h3>
                                <p class="text-xs text-slate-300 leading-relaxed">Tarayıcıdan çalışan; binlerce hazır şablon, afiş ve sunum içeren dev bir tasarım platformudur.</p>
                            </div>
                            <div class="text-[11px] text-teal-300 bg-slate-900/60 p-2 rounded-xl"><strong>Kullanım:</strong> Okul afişi ve sunumlar.</div>
                        </div>

                        <div class="bg-slate-800/80 p-5 rounded-2xl border border-rose-500/30 space-y-3 flex flex-col justify-between">
                            <div class="space-y-2">
                                <div class="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-2xl"><i class="fa-solid fa-draw-polygon"></i></div>
                                <h3 class="text-lg font-bold text-white">Google Çizimler</h3>
                                <p class="text-xs text-slate-300 leading-relaxed">Google Drive üzerinde tarayıcıda çalışan; arkadaşlarla aynı anda ortaklaşa şemalar çizilebilen araçtır.</p>
                            </div>
                            <div class="text-[11px] text-rose-300 bg-slate-900/60 p-2 rounded-xl"><strong>Kullanım:</strong> Ortak proje şemaları.</div>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 14: İleri Programlar
        {
            title: "İleri ve Profesyonel Programlar: Photoshop, Illustrator, GIMP, Tinkercad",
            html: `
                <div class="h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 rounded-3xl border-2 border-indigo-500/40 space-y-4">
                    <div class="border-b border-slate-700 pb-3 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-purple-600 text-white font-black text-sm flex items-center justify-center">12</span>
                            <h2 class="text-xl sm:text-2xl font-black text-white">İleri Düzey & Profesyonel Araçlar</h2>
                        </div>
                        <span class="text-xs font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">Endüstri Standartları</span>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 flex-1">
                        <div class="bg-slate-800/80 p-4 rounded-2xl border border-blue-500/30 space-y-2 flex flex-col justify-between">
                            <div class="space-y-1">
                                <span class="px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded text-[10px] font-bold">Bitmap Lideri</span>
                                <h3 class="text-base font-bold text-white">Adobe Photoshop</h3>
                                <p class="text-[11px] text-slate-300 leading-relaxed">Profesyonel fotoğraf düzenleme, rötuş ve montaj dünya lideridir.</p>
                            </div>
                            <div class="text-[10px] text-slate-400 bg-slate-900/80 p-1.5 rounded">Katmanlı çalışma & filtreler</div>
                        </div>

                        <div class="bg-slate-800/80 p-4 rounded-2xl border border-amber-500/30 space-y-2 flex flex-col justify-between">
                            <div class="space-y-1">
                                <span class="px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded text-[10px] font-bold">Vektör Lideri</span>
                                <h3 class="text-base font-bold text-white">Adobe Illustrator</h3>
                                <p class="text-[11px] text-slate-300 leading-relaxed">Matematiksel çizgilerle logo, amblem ve vektörel afiş illüstrasyonu üretir.</p>
                            </div>
                            <div class="text-[10px] text-slate-400 bg-slate-900/80 p-1.5 rounded">Sıfır kalite kaybı (.ai)</div>
                        </div>

                        <div class="bg-slate-800/80 p-4 rounded-2xl border border-orange-500/30 space-y-2 flex flex-col justify-between">
                            <div class="space-y-1">
                                <span class="px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded text-[10px] font-bold">Açık Kaynak</span>
                                <h3 class="text-base font-bold text-white">GIMP</h3>
                                <p class="text-[11px] text-slate-300 leading-relaxed">Tamamen ücretsiz ve açık kaynak kodlu, gelişmiş katmanlı fotoğraf programıdır.</p>
                            </div>
                            <div class="text-[10px] text-slate-400 bg-slate-900/80 p-1.5 rounded">Ücretsiz Photoshop alternatifi</div>
                        </div>

                        <div class="bg-slate-800/80 p-4 rounded-2xl border border-sky-500/30 space-y-2 flex flex-col justify-between">
                            <div class="space-y-1">
                                <span class="px-2 py-0.5 bg-sky-500/20 text-sky-400 rounded text-[10px] font-bold">3 Boyutlu Tasarım</span>
                                <h3 class="text-base font-bold text-white">Tinkercad</h3>
                                <p class="text-[11px] text-slate-300 leading-relaxed">3D yazıcılar için katı model, nesne ve robot tasarlamaya yarayan eğitim aracıdır.</p>
                            </div>
                            <div class="text-[10px] text-slate-400 bg-slate-900/80 p-1.5 rounded">3B baskı ve kod blokları</div>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 15: Karşılaştırma Matrisi
        {
            title: "Görsel Programları Karşılaştırma Matrisi",
            html: `
                <div class="h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 rounded-3xl border-2 border-indigo-500/40 space-y-4">
                    <div class="border-b border-slate-700 pb-3 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-indigo-600 text-white font-black text-sm flex items-center justify-center">13</span>
                            <h2 class="text-xl sm:text-2xl font-black text-white">Program Seçim Matrisi (Avantaj & Dezavantaj)</h2>
                        </div>
                        <span class="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Hızlı Kıyaslama</span>
                    </div>

                    <div class="overflow-x-auto flex-1">
                        <table class="w-full text-left text-xs text-slate-200 border-collapse">
                            <thead>
                                <tr class="border-b border-slate-700 bg-slate-800/80 text-white font-black text-xs uppercase">
                                    <th class="p-3">Program</th>
                                    <th class="p-3">Tür</th>
                                    <th class="p-3">Kullanım Amacı</th>
                                    <th class="p-3 text-emerald-400">Avantajı</th>
                                    <th class="p-3 text-rose-400">Dezavantajı</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-800 text-[11px]">
                                <tr>
                                    <td class="p-2.5 font-bold text-white">Paint</td>
                                    <td class="p-2.5 text-sky-400">Bitmap</td>
                                    <td class="p-2.5">Basit çizim</td>
                                    <td class="p-2.5 text-emerald-300">Hızlı, hazır gelir</td>
                                    <td class="p-2.5 text-rose-300">Katman desteği yok</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 font-bold text-white">Canva</td>
                                    <td class="p-2.5 text-teal-400">Web / Hibrit</td>
                                    <td class="p-2.5">Afiş, broşür, sunum</td>
                                    <td class="p-2.5 text-emerald-300">Hazır şablonlar</td>
                                    <td class="p-2.5 text-rose-300">İnternet bağlantısı şart</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 font-bold text-white">Photoshop</td>
                                    <td class="p-2.5 text-sky-400">Bitmap</td>
                                    <td class="p-2.5">Profesyonel rötuş</td>
                                    <td class="p-2.5 text-emerald-300">Sektör lideri</td>
                                    <td class="p-2.5 text-rose-300">Ücretli ve ağır</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 font-bold text-white">Illustrator</td>
                                    <td class="p-2.5 text-emerald-400">Vektörel</td>
                                    <td class="p-2.5">Logo, illüstrasyon</td>
                                    <td class="p-2.5 text-emerald-300">Sıfır bozulma</td>
                                    <td class="p-2.5 text-rose-300">Öğrenmesi zordur</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `
        },

        // Slayt 16: Düzenleme 1
        {
            title: "Temel Düzenleme İşlemleri: Kırpma, Döndürme, Boyutlandırma",
            html: `
                <div class="h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 rounded-3xl border-2 border-indigo-500/40 space-y-4">
                    <div class="border-b border-slate-700 pb-3 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-indigo-600 text-white font-black text-sm flex items-center justify-center">14</span>
                            <h2 class="text-xl sm:text-2xl font-black text-white">Görsel Düzenleme İşlemleri - 1</h2>
                        </div>
                        <span class="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Temel Araçlar</span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                        <div class="bg-slate-800/80 p-5 rounded-2xl border border-sky-500/40 space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center text-2xl"><i class="fa-solid fa-crop-simple"></i></div>
                            <h3 class="text-base font-bold text-white">Kırpma (Crop)</h3>
                            <p class="text-xs text-slate-300 leading-relaxed">Görselin istenmeyen dış kenarlarını kesip atarak yalnızca odaklanılan nesneyi çerçeveye alma işlemidir.</p>
                        </div>

                        <div class="bg-slate-800/80 p-5 rounded-2xl border border-purple-500/40 space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl"><i class="fa-solid fa-rotate"></i></div>
                            <h3 class="text-base font-bold text-white">Döndürme (Rotate)</h3>
                            <p class="text-xs text-slate-300 leading-relaxed">Görselin açısını saat yönünde veya tersinde çevirerek yan veya ters duran resmi düzeltme işlemidir.</p>
                        </div>

                        <div class="bg-slate-800/80 p-5 rounded-2xl border border-emerald-500/40 space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl"><i class="fa-solid fa-up-right-and-down-left-from-center"></i></div>
                            <h3 class="text-base font-bold text-white">Boyutlandırma (Resize)</h3>
                            <p class="text-xs text-slate-300 leading-relaxed">Görselin piksel genişlik ve yükseklik ölçülerini küçültme veya büyütme işlemidir.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 17: Düzenleme 2
        {
            title: "İleri Düzenleme: Renk Ayarları, Metin, Şekil ve Efekt Ekleme",
            html: `
                <div class="h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 rounded-3xl border-2 border-indigo-500/40 space-y-4">
                    <div class="border-b border-slate-700 pb-3 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-indigo-600 text-white font-black text-sm flex items-center justify-center">15</span>
                            <h2 class="text-xl sm:text-2xl font-black text-white">Görsel Düzenleme İşlemleri - 2</h2>
                        </div>
                        <span class="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Zenginleştirme</span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                        <div class="bg-slate-800/80 p-5 rounded-2xl border border-amber-500/40 space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl"><i class="fa-solid fa-sliders"></i></div>
                            <h3 class="text-base font-bold text-white">Renk ve Işık Ayarı</h3>
                            <p class="text-xs text-slate-300 leading-relaxed">Parlaklık (Brightness), Kontrast ve Doygunluk ayarlarıyla karanlık fotoğrafları canlandırma.</p>
                        </div>

                        <div class="bg-slate-800/80 p-5 rounded-2xl border border-fuchsia-500/40 space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center text-2xl"><i class="fa-solid fa-font"></i></div>
                            <h3 class="text-base font-bold text-white">Metin & Şekil Ekleme</h3>
                            <p class="text-xs text-slate-300 leading-relaxed">Görsel üzerine başlık, slogan, konuşma balonu ve geometrik çerçeveler yerleştirme.</p>
                        </div>

                        <div class="bg-slate-800/80 p-5 rounded-2xl border border-cyan-500/40 space-y-3">
                            <div class="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
                            <h3 class="text-base font-bold text-white">Filtreler ve Efektler</h3>
                            <p class="text-xs text-slate-300 leading-relaxed">Siyah-beyaz, sepya, bulanıklaştırma veya keskinleştirme uygulayarak sanatsal hava katma.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 18: Dijital Ürün Nedir?
        {
            title: "Bölüm 4: Dijital Ürün Nedir? Afiş, Broşür, Sunum, Logo",
            html: `
                <div class="h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 rounded-3xl border-2 border-indigo-500/40 space-y-4">
                    <div class="border-b border-slate-700 pb-3 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-indigo-600 text-white font-black text-sm flex items-center justify-center">16</span>
                            <h2 class="text-xl sm:text-2xl font-black text-white">Dijital Ürün Nedir?</h2>
                        </div>
                        <span class="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">Bölüm 4: Dijital Ürün Tasarımı</span>
                    </div>

                    <div class="space-y-4 flex-1">
                        <div class="bg-indigo-900/30 p-4 rounded-2xl border border-indigo-500/40">
                            <h3 class="text-sm font-bold text-amber-300 mb-1">Dijital Ürün Tanımı:</h3>
                            <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">Bilgisayar ve dijital teknolojiler kullanılarak bir amaca veya probleme çözüm üretmek üzere tasarlanan elektronik içeriklere <strong>dijital ürün</strong> denir.</p>
                        </div>

                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                            <div class="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-2">
                                <div class="text-3xl text-amber-400"><i class="fa-solid fa-rectangle-ad"></i></div>
                                <div class="text-xs font-bold text-white">Afiş (Poster)</div>
                                <div class="text-[10px] text-slate-400">Tek bakışta büyük mesaj</div>
                            </div>
                            <div class="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-2">
                                <div class="text-3xl text-emerald-400"><i class="fa-solid fa-book-open"></i></div>
                                <div class="text-xs font-bold text-white">Broşür (El İlanı)</div>
                                <div class="text-[10px] text-slate-400">Detaylı katlamalı bilgi</div>
                            </div>
                            <div class="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-2">
                                <div class="text-3xl text-sky-400"><i class="fa-solid fa-shapes"></i></div>
                                <div class="text-xs font-bold text-white">Logo & Amblem</div>
                                <div class="text-[10px] text-slate-400">Kurumsal kimlik simgesi</div>
                            </div>
                            <div class="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-2">
                                <div class="text-3xl text-purple-400"><i class="fa-solid fa-file-powerpoint"></i></div>
                                <div class="text-xs font-bold text-white">Sunum Dosyası</div>
                                <div class="text-[10px] text-slate-400">Adım adım görsel anlatım</div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 19: Tasarım Sürecinin 4 Aşaması (Görsel Akış Şeması)
        {
            title: "Tasarım Sürecinin 4 Aşaması (Görsel Akış Şeması)",
            html: `
                <div class="h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 rounded-3xl border-2 border-indigo-500/40 space-y-4">
                    <div class="border-b border-slate-700 pb-3 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-indigo-600 text-white font-black text-sm flex items-center justify-center">17</span>
                            <h2 class="text-xl sm:text-2xl font-black text-white">Tasarım Sürecinin 4 Altın Aşaması</h2>
                        </div>
                        <span class="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Akış Şeması</span>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-4 gap-3 flex-1 items-stretch my-auto">
                        <div class="bg-slate-800 p-4 rounded-2xl border-2 border-indigo-500 flex flex-col justify-between text-center relative">
                            <div class="w-8 h-8 rounded-full bg-indigo-600 text-white font-black text-xs flex items-center justify-center mx-auto mb-2">1</div>
                            <div class="text-2xl text-indigo-400 mb-1"><i class="fa-solid fa-bullseye"></i></div>
                            <h3 class="text-xs font-black text-white uppercase">Problemi Belirle</h3>
                            <p class="text-[10px] text-slate-300 mt-2">Bu tasarımı neden yapıyorum? Hedef kitlem kim? Vermek istediğim ana mesaj ne?</p>
                        </div>

                        <div class="bg-slate-800 p-4 rounded-2xl border-2 border-purple-500 flex flex-col justify-between text-center relative">
                            <div class="w-8 h-8 rounded-full bg-purple-600 text-white font-black text-xs flex items-center justify-center mx-auto mb-2">2</div>
                            <div class="text-2xl text-purple-400 mb-1"><i class="fa-solid fa-clipboard-list"></i></div>
                            <h3 class="text-xs font-black text-white uppercase">Planla & Kurgu</h3>
                            <p class="text-[10px] text-slate-300 mt-2">Kâğıt üzerinde taslak çiz, başlık ve görsellerin nerede duracağını kurgula.</p>
                        </div>

                        <div class="bg-slate-800 p-4 rounded-2xl border-2 border-pink-500 flex flex-col justify-between text-center relative">
                            <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-black text-xs flex items-center justify-center mx-auto mb-2">3</div>
                            <div class="text-2xl text-pink-400 mb-1"><i class="fa-solid fa-palette"></i></div>
                            <h3 class="text-xs font-black text-white uppercase">Tasarla & Geliştir</h3>
                            <p class="text-[10px] text-slate-300 mt-2">Uygun programı seç (Canva, Paint vb.), renkleri, görselleri ve yazıları birleştir.</p>
                        </div>

                        <div class="bg-slate-800 p-4 rounded-2xl border-2 border-emerald-500 flex flex-col justify-between text-center relative">
                            <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center mx-auto mb-2">4</div>
                            <div class="text-2xl text-emerald-400 mb-1"><i class="fa-solid fa-share-nodes"></i></div>
                            <h3 class="text-xs font-black text-white uppercase">Kontrol Et & Paylaş</h3>
                            <p class="text-[10px] text-slate-300 mt-2">Yazım hatalarını kontrol et, geri bildirim al, anlamlı adla kaydet ve yayınla.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 20: Tasarım İlkeleri, Telif Hakkı, Yapay Zekâ Etiği & Büyük Özet
        {
            title: "Tasarım İlkeleri, Telif Hakkı, Yapay Zekâ Etiği ve Büyük Özet",
            html: `
                <div class="h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 rounded-3xl border-2 border-indigo-500/40 space-y-4">
                    <div class="border-b border-slate-700 pb-3 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-emerald-600 text-white font-black text-sm flex items-center justify-center"><i class="fa-solid fa-check-double"></i></span>
                            <h2 class="text-xl sm:text-2xl font-black text-white">7. Konu Kapsamlı Özeti & Büyük Değerlendirme</h2>
                        </div>
                        <span class="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Son Slayt: Büyük Özet</span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                        <div class="bg-slate-800/80 p-4 rounded-2xl border border-amber-500/30 space-y-2">
                            <h3 class="text-xs font-bold text-amber-400 uppercase flex items-center gap-1.5"><i class="fa-solid fa-eye"></i> Tasarım İlkeleri</h3>
                            <ul class="text-[11px] text-slate-300 space-y-1.5 leading-relaxed">
                                <li>• <strong>Görsel Bütünlük:</strong> Uyumlu renk paleti ve sade düzen.</li>
                                <li>• <strong>Okunabilirlik:</strong> Koyu zemin üzerine açık renk yüksek kontrast.</li>
                                <li>• <strong>Sadelik:</strong> Sayfayı gereksiz kalabalıklaştırmamak.</li>
                            </ul>
                        </div>

                        <div class="bg-slate-800/80 p-4 rounded-2xl border border-rose-500/30 space-y-2">
                            <h3 class="text-xs font-bold text-rose-400 uppercase flex items-center gap-1.5"><i class="fa-solid fa-shield-halved"></i> Telif & Dijital Etik</h3>
                            <ul class="text-[11px] text-slate-300 space-y-1.5 leading-relaxed">
                                <li>• <strong>Telif Hakkı:</strong> Başkasının eserini izinsiz sahiplenme, kaynak belirt!</li>
                                <li>• <strong>Yapay Zekâ Etiği:</strong> İnsanları kandıracak sahte görsellerden kaçın.</li>
                                <li>• <strong>Dosya Adlandırma:</strong> 'Ali_Cevre_Afisi_v1.png' gibi düzenli kaydet.</li>
                            </ul>
                        </div>

                        <div class="bg-gradient-to-br from-indigo-950 to-purple-950 p-4 rounded-2xl border border-indigo-500/50 space-y-2 text-center flex flex-col justify-center">
                            <div class="text-3xl text-amber-300 animate-bounce"><i class="fa-solid fa-trophy"></i></div>
                            <div class="text-xs font-black text-white">Tebrikler Tasarımcı!</div>
                            <p class="text-[10px] text-indigo-200">Çalışma kağıtlarını incele, 25 soruluk pekiştirme testini çöz ve 4 özel oyunda şampiyonluğa ulaş!</p>
                        </div>
                    </div>
                </div>
            `
        }
    ],

    worksheetDocs: {
        sayfa1Html: `
            <div class="max-w-4xl mx-auto bg-slate-900 text-slate-100 p-6 sm:p-10 rounded-3xl border-2 border-indigo-500/40 space-y-6">
                <header class="border-b border-indigo-500/30 pb-4 flex items-center justify-between">
                    <div>
                        <div class="text-xs font-bold text-indigo-400 uppercase">Öğretmen Bozok • 5. Sınıf Bilişim Teknolojileri ve Yazılım</div>
                        <h1 class="text-2xl font-black text-white">Bölüm 1: Görsel ve Görüntü Türleri (1. Sayfa)</h1>
                    </div>
                    <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 font-bold rounded-lg text-xs">BTY.5.2.1 • Sayfa 1</span>
                </header>

                <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <div class="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-2">
                        <h3 class="font-bold text-white text-base text-indigo-300">1. Görsel Nedir? Fotoğraf, Resim ve Çizim Farkı</h3>
                        <p>
                            Görsel; gözle görülebilen, bir anlam veya duygu aktaran resim, fotoğraf, şema ve çizimlerin genel adıdır. Fotoğraf makineyle gerçek dünyanın kaydıdır. Resim sanatçının el emeği ve duygusudur. Çizim/Grafik ise sembol, şema ve krokilerdir.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-slate-800/80 p-4 rounded-2xl border border-sky-500/30 space-y-2">
                            <h4 class="font-bold text-sky-400 text-sm">Piksel (Pixel) Nedir?</h4>
                            <p>
                                Dijital ekranlarda görüntüyü oluşturan en küçük renkli kare birimdir. Milyonlarca piksel yan yana gelerek gördüğümüz pürüzsüz fotoğrafları oluşturur. Çözünürlük ne kadar yüksekse görüntü o kadar nettir.
                            </p>
                        </div>

                        <div class="bg-slate-800/80 p-4 rounded-2xl border border-emerald-500/30 space-y-2">
                            <h4 class="font-bold text-emerald-400 text-sm">Bitmap vs Vektörel</h4>
                            <p>
                                <strong>Bitmap:</strong> Piksel ızgarasından oluşur (JPG, PNG). Büyütüldüğünde piksellenir ve bozulur.<br>
                                <strong>Vektörel:</strong> Matematiksel formüllerle çizilir (SVG, AI). Ne kadar büyütülürse büyütülsün kalitesini korur.
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
                        <h1 class="text-2xl font-black text-white">Bölüm 2: Görüntü Dosyaları ve Uzantıları (2. Sayfa)</h1>
                    </div>
                    <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 font-bold rounded-lg text-xs">BTY.5.2.1 • Sayfa 2</span>
                </header>

                <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <div class="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-2">
                        <h3 class="font-bold text-white text-base text-emerald-300">Dosya Uzantısı Nedir ve Neden Önemlidir?</h3>
                        <p>
                            Dosya adından sonra gelen nokta ve harfler (örn: <code>.jpg</code>, <code>.png</code>) dosyanın türünü belirtir. İşletim sistemi bu uzantıya bakarak dosyayı doğru grafik yazılımıyla açar.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-slate-800/80 p-4 rounded-2xl border border-sky-500/30 space-y-2">
                            <h4 class="font-bold text-sky-400 text-sm">Bitmap Uzantıları:</h4>
                            <ul class="space-y-1 text-xs">
                                <li>• <strong>.JPG / .JPEG:</strong> Standart fotoğraf, yüksek sıkıştırma.</li>
                                <li>• <strong>.PNG:</strong> Saydam (şeffaf) arka plan, net web grafikleri.</li>
                                <li>• <strong>.GIF:</strong> Kısa hareketli animasyonlar.</li>
                                <li>• <strong>.BMP:</strong> Windows Paint'in eski sıkıştırmasız büyük formatı.</li>
                                <li>• <strong>.TIFF:</strong> Kayıpsız matbaa baskı standardı.</li>
                            </ul>
                        </div>

                        <div class="bg-slate-800/80 p-4 rounded-2xl border border-emerald-500/30 space-y-2">
                            <h4 class="font-bold text-emerald-400 text-sm">Vektörel Uzantılar:</h4>
                            <ul class="space-y-1 text-xs">
                                <li>• <strong>.SVG:</strong> Web tarayıcılarında açılan ölçeklenebilir vektör.</li>
                                <li>• <strong>.EPS:</strong> Matbaalar arası evrensel vektörel aktarım.</li>
                                <li>• <strong>.AI:</strong> Adobe Illustrator yerel proje dosyası.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `,

        sayfa3Html: `
            <div class="max-w-4xl mx-auto bg-slate-900 text-slate-100 p-6 sm:p-10 rounded-3xl border-2 border-indigo-500/40 space-y-6">
                <header class="border-b border-indigo-500/30 pb-4 flex items-center justify-between">
                    <div>
                        <div class="text-xs font-bold text-indigo-400 uppercase">Öğretmen Bozok • 5. Sınıf Bilişim Teknolojileri ve Yazılım</div>
                        <h1 class="text-2xl font-black text-white">Bölüm 3: Görsel İşleme Programları & Düzenleme (3. Sayfa)</h1>
                    </div>
                    <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 font-bold rounded-lg text-xs">BTY.5.2.1 • Sayfa 3</span>
                </header>

                <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <div class="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-2">
                        <h3 class="font-bold text-white text-base text-fuchsia-300">Popüler Grafik Programları</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs pt-1">
                            <div class="p-2 bg-slate-900 rounded-xl"><strong>Paint:</strong> Temel serbest çizim</div>
                            <div class="p-2 bg-slate-900 rounded-xl"><strong>Canva:</strong> Hazır şablonlu afiş</div>
                            <div class="p-2 bg-slate-900 rounded-xl"><strong>Photoshop:</strong> Profesyonel rötuş</div>
                            <div class="p-2 bg-slate-900 rounded-xl"><strong>Illustrator:</strong> Vektörel logo</div>
                        </div>
                    </div>

                    <div class="bg-slate-800/80 p-4 rounded-2xl border border-amber-500/30 space-y-2">
                        <h4 class="font-bold text-amber-300 text-sm">Görsel Düzenleme İşlemleri</h4>
                        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                            <li>• <strong>Kırpma (Crop):</strong> İstenmeyen kenar boşluklarını kesip çıkarma.</li>
                            <li>• <strong>Döndürme (Rotate):</strong> Yan duran görseli dik konuma getirme.</li>
                            <li>• <strong>Boyutlandırma (Resize):</strong> En ve boy ölçülerini değiştirme.</li>
                            <li>• <strong>Renk Ayarı:</strong> Parlaklık, kontrast ve doygunluğu düzenleme.</li>
                        </ul>
                    </div>
                </div>
            </div>
        `,

        sayfa4Html: `
            <div class="max-w-4xl mx-auto bg-slate-900 text-slate-100 p-6 sm:p-10 rounded-3xl border-2 border-indigo-500/40 space-y-6">
                <header class="border-b border-indigo-500/30 pb-4 flex items-center justify-between">
                    <div>
                        <div class="text-xs font-bold text-indigo-400 uppercase">Öğretmen Bozok • 5. Sınıf Bilişim Teknolojileri ve Yazılım</div>
                        <h1 class="text-2xl font-black text-white">Bölüm 4: Dijital Ürün Tasarımı, Telif ve Etik (4. Sayfa)</h1>
                    </div>
                    <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 font-bold rounded-lg text-xs">BTY.5.2.1 • Sayfa 4</span>
                </header>

                <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <div class="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-2">
                        <h3 class="font-bold text-white text-base text-amber-300">Tasarım Sürecinin 4 Aşaması</h3>
                        <div class="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs text-center pt-1">
                            <div class="p-2 bg-slate-900 rounded-xl border border-indigo-500/30">1. Problemi Belirle</div>
                            <div class="p-2 bg-slate-900 rounded-xl border border-purple-500/30">2. Planla & Kurgu</div>
                            <div class="p-2 bg-slate-900 rounded-xl border border-pink-500/30">3. Tasarla & Geliştir</div>
                            <div class="p-2 bg-slate-900 rounded-xl border border-emerald-500/30">4. Kontrol Et & Paylaş</div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-slate-800/80 p-4 rounded-2xl border border-rose-500/30 space-y-2">
                            <h4 class="font-bold text-rose-300 text-sm">Telif Hakkı & Yapay Zekâ Etiği</h4>
                            <p class="text-xs">
                                Başkalarının ürettiği eserler telif hakkı ile korunur. İzinsiz kullanılamaz, kaynak belirtilmelidir. Yapay zekâ ile görsel üretirken sahte ve yanıltıcı içeriklerden kaçınılmalıdır.
                            </p>
                        </div>

                        <div class="bg-slate-800/80 p-4 rounded-2xl border border-emerald-500/30 space-y-2">
                            <h4 class="font-bold text-emerald-300 text-sm">Düzenli Dosya Adlandırma</h4>
                            <p class="text-xs">
                                Dosyalar 'Ad_Soyad_Cevre_Afisi_v1.png' gibi konu ve isim belirten anlamlı adlarla kaydedilmeli, masaüstü karmaşasından kaçınılmalıdır.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `,

        cevapHtml: `
            <div class="max-w-4xl mx-auto bg-slate-900 text-slate-100 p-6 sm:p-10 rounded-3xl border-2 border-emerald-500/40 space-y-6">
                <header class="border-b border-emerald-500/30 pb-4 flex items-center justify-between">
                    <div>
                        <div class="text-xs font-bold text-emerald-400 uppercase">Öğretmen Bozok • Resmî Çözüm Rehberi</div>
                        <h1 class="text-2xl font-black text-white">7. Konu (BTY.5.2.1) Resmî Cevap Anahtarı</h1>
                    </div>
                    <span class="px-3 py-1 bg-emerald-500/20 text-emerald-300 font-bold rounded-lg text-xs">25 Soru Çözümü</span>
                </header>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs leading-relaxed">
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>1. Soru:</strong> B (Fotoğraf)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>2. Soru:</strong> C (Piksellerden)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>3. Soru:</strong> A (Görüntünün piksellerden oluşması)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>4. Soru:</strong> D (Büyütüldüğünde kalitesini koruması)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>5. Soru:</strong> A (Vektörel görüntü)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>6. Soru:</strong> B (Dosyanın uzantısını)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>7. Soru:</strong> C (SVG)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>8. Soru:</strong> A (GIF)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>9. Soru:</strong> D (resim.png)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>10. Soru:</strong> B (JPG)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>11. Soru:</strong> C (Paint)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>12. Soru:</strong> A (Canva)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>13. Soru:</strong> D (GIMP)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>14. Soru:</strong> B (Adobe Photoshop)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>15. Soru:</strong> C (Adobe Illustrator)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>16. Soru:</strong> A (Kırpma)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>17. Soru:</strong> C (Döndürme)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>18. Soru:</strong> B (Boyutlandırma)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>19. Soru:</strong> D (Renk düzenleme)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>20. Soru:</strong> A (Metin ve şekil ekleme)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>21. Soru:</strong> B (Problemi belirlemelidir)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>22. Soru:</strong> C (Görsel bütünlük ve okunabilirlik)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>23. Soru:</strong> A (Görselin telif hakkına dikkat etmeli)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>24. Soru:</strong> D (Etik kurallara ve telif haklarına dikkat etmek)</div>
                    <div class="p-3 bg-slate-800 rounded-xl"><strong>25. Soru:</strong> B (Ad_Soyad_Cevre_Afisi.png)</div>
                </div>
            </div>
        `,

        defterHtml: `
            <div class="max-w-4xl mx-auto bg-slate-900 text-slate-100 p-6 sm:p-10 rounded-3xl border-2 border-purple-500/40 space-y-6">
                <header class="border-b border-purple-500/30 pb-4 flex items-center justify-between">
                    <div>
                        <div class="text-xs font-bold text-purple-400 uppercase">Öğretmen Bozok • Öğrenci Defter Notları</div>
                        <h1 class="text-2xl font-black text-white">7. Konu (BTY.5.2.1) Deftere Yazılacaklar</h1>
                    </div>
                    <span class="px-3 py-1 bg-purple-500/20 text-purple-300 font-bold rounded-lg text-xs">Özet Not</span>
                </header>

                <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    <div class="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2">
                        <h3 class="font-bold text-white text-sm text-amber-300">📌 Deftere Not: Piksel, Bitmap ve Vektör</h3>
                        <p>
                            • <strong>Piksel:</strong> Ekrandaki en küçük renkli karedir.<br>
                            • <strong>Bitmap:</strong> Piksellerden oluşur, büyütülünce piksellenir (JPG, PNG).<br>
                            • <strong>Vektörel:</strong> Matematiksel formüllerle çizilir, büyütülünce ASLA bozulmaz (SVG, AI).
                        </p>
                    </div>

                    <div class="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2">
                        <h3 class="font-bold text-white text-sm text-sky-300">📌 Deftere Not: Dosya Uzantıları ve Programlar</h3>
                        <p>
                            • <strong>JPG:</strong> Fotoğraflar için standart format.<br>
                            • <strong>PNG:</strong> Şeffaf (saydam) arka plan desteği.<br>
                            • <strong>GIF:</strong> Kısa hareketli animasyonlar.<br>
                            • <strong>SVG:</strong> Web vektörel çizim formatı.<br>
                            • <strong>Canva / Paint:</strong> Hızlı ve pratik çizim/afiş araçları.<br>
                            • <strong>Photoshop:</strong> Fotoğraf düzenleme • <strong>Illustrator:</strong> Vektörel logo çizimi.
                        </p>
                    </div>

                    <div class="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2">
                        <h3 class="font-bold text-white text-sm text-emerald-300">📌 Deftere Not: Tasarımın 4 Aşaması</h3>
                        <p>
                            1. Problemi Belirle ➔ 2. Planla ve Kurgu Oluştur ➔ 3. Tasarla ve Geliştir ➔ 4. Kontrol Et ve Paylaş.<br>
                            • <strong>Telif Hakkı:</strong> Başkalarının eserine saygı duy, izin al ve kaynak belirt!
                        </p>
                    </div>
                </div>
            </div>
        `
    },

    questions: {
        trueFalse: [
        {
                "q": "Kamera veya akıllı telefonla çekilen tüm fotoğraflar piksel tabanlı (Bitmap) görüntülerdir.",
                "answer": true,
                "explanation": "Doğru! Gerçek dünya kayıtları sensörlerin kaydettiği renkli piksellerden oluşur."
        },
        {
                "q": "Vektörel görüntüler büyütüldüğünde kenarları tırtıklı hâle gelir ve kalitesi hemen bozulur.",
                "answer": false,
                "explanation": "Yanlış! Vektörel görüntüler matematiksel formüllerle çizildiği için ne kadar büyütülürse büyütülsün kalitesini korur."
        },
        {
                "q": "PNG formatı şeffaf (saydam) arka planı destekler ve logolarda sıkça kullanılır.",
                "answer": true,
                "explanation": "Doğru! PNG şeffaflığı desteklediği için web logoları ve simgeleri için en popüler formattır."
        },
        {
                "q": "GIF dosya biçimi kısa süreli döngüsel hareketli animasyonlar oluşturmak için kullanılır.",
                "answer": true,
                "explanation": "Doğru! GIF birden fazla kareyi ardışık oynatarak hareketli animasyonlar sağlar."
        },
        {
                "q": "SVG, EPS ve AI dosya uzantıları piksel tabanlı bitmap formatlarıdır.",
                "answer": false,
                "explanation": "Yanlış! SVG, EPS ve AI formatları Vektörel (çizgisel) görüntü formatlarıdır."
        },
        {
                "q": "Paint, Windows işletim sistemiyle hazır gelen temel ve pratik bir çizim programıdır.",
                "answer": true,
                "explanation": "Doğru! Paint, temel çizim ve düzenleme işlemleri için kullanılan standart bir programdır."
        },
        {
                "q": "Adobe Photoshop programı, yalnızca vektörel logo çizimi için tasarlanmış bir programdır.",
                "answer": false,
                "explanation": "Yanlış! Photoshop piksel tabanlı fotoğraf düzenleme yazılımıdır; vektörel logo için Illustrator kullanılır."
        },
        {
                "q": "Kırpma (Crop) işlemi, bir fotoğrafın istenmeyen kenar alanlarını kesip çıkarmayı sağlar.",
                "answer": true,
                "explanation": "Doğru! Kırpma ile istenmeyen kenar detayları kesilerek ana nesneye odaklanılır."
        },
        {
                "q": "Dijital ürün tasarım sürecinin ilk aşaması hemen renkleri seçip afişi baskıya göndermektir.",
                "answer": false,
                "explanation": "Yanlış! Tasarım sürecinin ilk aşaması 'Problemi Belirleme' ve hedef kitleyi analiz etmektir."
        },
        {
                "q": "İnternette bulunan tüm görseller telifsizdir ve sahibinden izin almadan istenildiği gibi kullanılabilir.",
                "answer": false,
                "explanation": "Yanlış! Eserler telif hakkı ile korunur; izin almak, telifsiz görselleri seçmek veya kaynak belirtmek gerekir."
        }
],
        multipleChoice: [
        {
                "q": "1. Ece, telefonuyla okul bahçesinin fotoğrafını çekiyor. Bu görüntü aşağıdakilerden hangisine örnektir?",
                "options": [
                        "Vektörel çizim",
                        "Fotoğraf",
                        "Animasyon",
                        "Metin belgesi"
                ],
                "answer": 1,
                "explanation": "Kamera ve telefonla çekilen gerçek dünya kayıtları 'Fotoğraf'tır ve piksel tabanlı (bitmap) görüntülerdir."
        },
        {
                "q": "2. Bitmap (nokta eşlemli) görüntüler hangi temel yapılardan oluşur?",
                "options": [
                        "Seslerden",
                        "Harflerden",
                        "Piksellerden",
                        "Klasörlerden"
                ],
                "answer": 2,
                "explanation": "Bitmap görüntüler milyonlarca küçük renkli kare olan 'piksel'lerin yan yana gelmesiyle oluşur."
        },
        {
                "q": "3. Bir fotoğraf bilgisayarda çok fazla büyütüldüğünde küçük kareler belirginleşiyor. Bunun temel nedeni nedir?",
                "options": [
                        "Görüntünün piksellerden oluşması",
                        "Dosyanın silinmesi",
                        "Bilgisayarın kapanması",
                        "Görüntünün ses içermesi"
                ],
                "answer": 0,
                "explanation": "Fotoğraflar sabit sayıda pikselden oluştuğu için aşırı büyütüldüklerinde bu kareler gözle görünür hâle gelir (pikselleşme)."
        },
        {
                "q": "4. Aşağıdakilerden hangisi VEKTÖREL görüntülerin en önemli özelliklerinden biridir?",
                "options": [
                        "Yalnızca fotoğraflardan oluşması",
                        "Büyütüldüğünde mutlaka bozulması",
                        "Sadece siyah-beyaz olması",
                        "Büyütüldüğünde kalitesini koruması"
                ],
                "answer": 3,
                "explanation": "Vektörel görseller matematiksel çizgi ve formüllerle oluşturulduğu için ne kadar büyütülürse büyütülsün kalitesini korur."
        },
        {
                "q": "5. Bir şirket logosunun hem küçücük bir kalemde hem de dev bir bina afişinde kullanılacağı düşünülürse hangi görüntü türü daha uygun olur?",
                "options": [
                        "Vektörel görüntü",
                        "Ses dosyası",
                        "Metin dosyası",
                        "Video dosyası"
                ],
                "answer": 0,
                "explanation": "Logolar farklı boyutlarda esnekçe ve sıfır kalite kaybıyla kullanılabilmesi için vektörel olarak hazırlanmalıdır."
        },
        {
                "q": "6. 'tatil_fotografi.jpg' dosyasındaki '.jpg' ifadesi neyi belirtir?",
                "options": [
                        "Dosyanın boyutunu",
                        "Dosyanın uzantısını",
                        "Dosyanın oluşturulduğu kişiyi",
                        "Bilgisayarın adını"
                ],
                "answer": 1,
                "explanation": "Noktadan sonraki kısım (.jpg) dosyanın türünü ve formatını belirten 'dosya uzantısı'dır."
        },
        {
                "q": "7. Aşağıdakilerden hangisi kaynaklarda VEKTÖREL görüntü dosya uzantısı olarak verilmiştir?",
                "options": [
                        "JPG",
                        "BMP",
                        "SVG",
                        "JPEG"
                ],
                "answer": 2,
                "explanation": "SVG (Scalable Vector Graphics), webde ve dijital ortamda en yaygın kullanılan vektörel dosya uzantısıdır."
        },
        {
                "q": "8. Kısa süreli hareketli görsellerle (animasyonlarla) karşılaşabileceğimiz dosya biçimi hangisidir?",
                "options": [
                        "GIF",
                        "TXT",
                        "DOCX",
                        "XLSX"
                ],
                "answer": 0,
                "explanation": "GIF formatı hareketli kareleri ardışık oynatarak animasyonlar oluşturulmasına olanak tanır."
        },
        {
                "q": "9. Aşağıdaki dosyalardan hangisi bir GÖRÜNTÜ (resim) dosyasıdır?",
                "options": [
                        "odev.docx",
                        "liste.xlsx",
                        "muzik.mp3",
                        "resim.png"
                ],
                "answer": 3,
                "explanation": "resim.png bir görsel (resim) dosyasıdır. docx metin, xlsx tablo, mp3 ise ses dosyasıdır."
        },
        {
                "q": "10. Aşağıdakilerden hangisi kaynaklarda VEKTÖREL dosya uzantısı örneği olarak VERİLMEMİŞTİR?",
                "options": [
                        "EPS",
                        "JPG",
                        "AI",
                        "SVG"
                ],
                "answer": 1,
                "explanation": "JPG piksel tabanlı (Bitmap) bir fotoğraf formatıdır; EPS, AI ve SVG ise vektörel formatlardır."
        },
        {
                "q": "11. Ali, bilgisayarında temel araçlarla basit bir resim çizmek istiyor. Hangi programdan yararlanabilir?",
                "options": [
                        "Hesap makinesi",
                        "Müzik çalar",
                        "Paint",
                        "Takvim"
                ],
                "answer": 2,
                "explanation": "Paint, Windows ile gelen basit ve pratik resim çizim programıdır."
        },
        {
                "q": "12. Okul etkinliği için hazır şablonlar ve zengin grafiklerle renkli bir afiş hazırlamak isteyen Zeynep hangi programdan yararlanabilir?",
                "options": [
                        "Canva",
                        "Hesap makinesi",
                        "Dosya yöneticisi",
                        "Not Defteri"
                ],
                "answer": 0,
                "explanation": "Canva, zengin şablon kütüphanesi ve kolay arayüzü ile afiş, broşür ve sunum hazırlamak için ideal bir web programıdır."
        },
        {
                "q": "13. Aşağıdakilerden hangisi ücretsiz ve açık kaynak kodlu gelişmiş bir görsel işleme programıdır?",
                "options": [
                        "Saat",
                        "Takvim",
                        "Müzik çalar",
                        "GIMP"
                ],
                "answer": 3,
                "explanation": "GIMP, katman destekli ve açık kaynak kodlu güçlü bir görsel düzenleme yazılımıdır."
        },
        {
                "q": "14. Profesyonel fotoğraf düzenleme ve rötuş konusunda dünyada en yaygın kullanılan program aşağıdakilerden hangisidir?",
                "options": [
                        "Paint dışındaki hiçbir program kullanılamaz.",
                        "Adobe Photoshop",
                        "Hesap makinesi",
                        "Dosya sıkıştırma aracı"
                ],
                "answer": 1,
                "explanation": "Adobe Photoshop, piksel tabanlı profesyonel fotoğraf düzenlemede endüstri standardıdır."
        },
        {
                "q": "15. Vektörel çizimler ve logolar hazırlamak isteyen bir tasarımcı aşağıdaki programlardan hangisini tercih edebilir?",
                "options": [
                        "Müzik çalar",
                        "Takvim",
                        "Adobe Illustrator",
                        "Hesap makinesi"
                ],
                "answer": 2,
                "explanation": "Adobe Illustrator, vektörel grafikler, amblemler ve çizimler hazırlamak için geliştirilmiş profesyonel bir yazılımdır."
        },
        {
                "q": "16. Bir fotoğrafın gereksiz kenarlarını kaldırıp yalnızca istenen bölümünü bırakmak isteyen öğrenci hangi işlemi yapmalıdır?",
                "options": [
                        "Kırpma",
                        "Döndürme",
                        "Yazdırma",
                        "Silme"
                ],
                "answer": 0,
                "explanation": "Kırpma (Crop) işlemi, fotoğrafın istenmeyen kenar alanlarını keserek odaklanılan kısmı çerçeveler."
        },
        {
                "q": "17. Yan çekilmiş bir fotoğrafı dik ve düzgün hâle getirmek için hangi işlem kullanılır?",
                "options": [
                        "Kopyalama",
                        "Boyutlandırma",
                        "Döndürme",
                        "Dosya adlandırma"
                ],
                "answer": 2,
                "explanation": "Döndürme (Rotate) işlemi, görselin açısını çevirerek yatay veya dikey konuma getirir."
        },
        {
                "q": "18. Hazırladığı afişin boyutları ekrana göre çok büyük olan Mert, afişi küçültmek istiyor. Hangi işlemi kullanmalıdır?",
                "options": [
                        "Kırpma",
                        "Boyutlandırma",
                        "Silme",
                        "Yeniden adlandırma"
                ],
                "answer": 1,
                "explanation": "Boyutlandırma (Resize) işlemi, görselin en-boy piksel ölçülerini büyütmek veya küçültmek için kullanılır."
        },
        {
                "q": "19. Bir fotoğrafın renklerini daha canlı, parlak ve net hâle getirmek isteyen öğrenci hangi düzenlemeyi yapmalıdır?",
                "options": [
                        "Dosyayı silme",
                        "Klasör oluşturma",
                        "Dosyayı taşıma",
                        "Renk düzenleme"
                ],
                "answer": 3,
                "explanation": "Renk düzenleme (parlaklık, kontrast, doygunluk) işlemi ile görselin renk tonları canlılaştırılır."
        },
        {
                "q": "20. Bir öğrenci hazırladığı görsele konuyla ilgili başlık ve geometrik şekiller eklemek istiyor. Hangi işlemlerden yararlanabilir?",
                "options": [
                        "Metin ve şekil ekleme",
                        "Bilgisayarı kapatma",
                        "Dosyayı silme",
                        "Klasörü yeniden adlandırma"
                ],
                "answer": 0,
                "explanation": "Görsel işleme programlarındaki metin (T) ve şekil araçları ile görsele başlık, açıklama ve simgeler eklenir."
        },
        {
                "q": "21. Okulunda çevre temizliği konusunda farkındalık oluşturmak isteyen bir öğrenci, afiş tasarımına başlarken öncelikle ne yapmalıdır?",
                "options": [
                        "Bilgisayarı kapatmalıdır.",
                        "Problemi belirlemelidir.",
                        "Rastgele görseller seçmelidir.",
                        "Dosyalarını silmelidir."
                ],
                "answer": 1,
                "explanation": "Tasarım sürecinin ilk aşaması 'Problemi Belirleme'dir (Afiş neyi çözecek, kime hitap edecek?)."
        },
        {
                "q": "22. Dijital ürün tasarımında aşağıdakilerden hangisi en önemli ilkelerden biridir?",
                "options": [
                        "Yazıların okunamayacak kadar küçük olması",
                        "Her rengin bir arada kullanılması",
                        "Görsel bütünlük ve okunabilirlik",
                        "Konuyla ilgisiz görseller kullanılması"
                ],
                "answer": 2,
                "explanation": "Başarılı bir afiş veya broşürde görsel bütünlük, sade tasarım ve uzaktan okunabilirlik esastır."
        },
        {
                "q": "23. Elif, internetten bulduğu bir görseli ödevinde kullanmak istiyor. Nasıl davranmalıdır?",
                "options": [
                        "Görselin telif hakkına dikkat etmeli ve gerektiğinde kaynağını belirtmelidir.",
                        "Görseli kendisininmiş gibi göstermelidir.",
                        "Görselin sahibini gizlemelidir.",
                        "Görseli izinsiz her yerde kullanmalıdır."
                ],
                "answer": 0,
                "explanation": "Başkalarının ürettiği eserler telif hakkıyla korunur; izin almak ve kaynak belirtmek ahlaki ve yasal kuraldır."
        },
        {
                "q": "24. Yapay zekâ ile görsel oluştururken aşağıdakilerden hangisi DOĞRU bir davranıştır?",
                "options": [
                        "İnsanları yanıltacak sahte görseller hazırlamak",
                        "Başkalarının haklarını önemsememek",
                        "Her üretilen görselin gerçek olduğunu düşünmek",
                        "Etik kurallara ve telif haklarına dikkat etmek"
                ],
                "answer": 3,
                "explanation": "Yapay zekâ araçlarıyla görsel üretirken etik kurallara, telif haklarına saygı gösterilmeli ve insanları aldatıcı sahte görseller üretilmemelidir."
        },
        {
                "q": "25. Öğrenci, hazırladığı çevre afişini daha sonra kolayca bulabilmek için hangi dosya adını tercih etmelidir?",
                "options": [
                        "12345.png",
                        "Ad_Soyad_Cevre_Afisi.png",
                        "Yeni_Dosya_1.png",
                        "Dosya.png"
                ],
                "answer": 1,
                "explanation": "Düzenli dosya adlandırma kuralına göre öğrenci adı, konu ve anlamlı kelimeler (örn: Ad_Soyad_Cevre_Afisi.png) kullanılmalıdır."
        }
]
    },

    gameData: null
};

window.WEEK_7_CONTENT = window.WEEK7_CONTENT;
