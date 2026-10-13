// ==========================================
// 5. KONU - 1: BİLGİSAYAR VE DONANIM (GİRİŞ VE ÇIKIŞ BİRİMLERİ)
// MEB 5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi
// BTY.5.1.5. Bilgisayar sistemlerini çözümleyebilme
// Hazırlayan: Öğretmen Bozok
// ==========================================

// Slayt 13 İnteraktif Sınıflandırma Oyunu Durum Yönetimi
window.slide13Game = {
    idx: 0,
    items: [
        { name: "Klavye", type: "giris", icon: "fa-keyboard", hint: "Üzerindeki tuşlarla metin ve komut girmemizi sağlar.", desc: "🎉 DOĞRU! Klavye dış dünyadan bilgisayara veri gönderen temel GİRİŞ birimidir." },
        { name: "Monitör (Ekran)", type: "cikis", icon: "fa-desktop", hint: "Bilgisayarda işlenen bilgileri görüntü olarak sunar.", desc: "🎉 DOĞRU! Monitör işlenen verileri bize aktaran temel ÇIKIŞ birimidir." },
        { name: "Mikrofon", type: "giris", icon: "fa-microphone", hint: "Ses dalgalarını dijital veriye dönüştürüp bilgisayara aktarır.", desc: "🎉 DOĞRU! Mikrofon ses verisini bilgisayara sokan GİRİŞ birimidir." },
        { name: "Hoparlör", type: "cikis", icon: "fa-volume-high", hint: "Bilgisayardaki dijital sesleri kulaklarımızın duyacağı sese çevirir.", desc: "🎉 DOĞRU! Hoparlör sesi dışarıya aktaran ÇIKIŞ birimidir." },
        { name: "Fare (Mouse)", type: "giris", icon: "fa-computer-mouse", hint: "Ekrandaki imleci yönetip tıklama komutlarını iletir.", desc: "🎉 DOĞRU! Fare komutlarımızı bilgisayara ileten GİRİŞ birimidir." },
        { name: "Yazıcı (Printer)", type: "cikis", icon: "fa-print", hint: "Bilgisayardaki belgeleri kağıda basarak dış dünyaya verir.", desc: "🎉 DOĞRU! Yazıcı dijital belgeleri dışa aktaran ÇIKIŞ birimidir." },
        { name: "Web Kamerası", type: "giris", icon: "fa-video", hint: "Görüntümüzü yakalayıp bilgisayara aktarır.", desc: "🎉 DOĞRU! Web kamerası video görüntüsünü içeriye aktaran GİRİŞ birimidir." },
        { name: "Dokunmatik Ekran", type: "cift", icon: "fa-mobile-screen", hint: "Hem görüntüyü sunar hem de parmakla dokunarak komut alır.", desc: "🎉 DOĞRU! Dokunmatik ekran hem görüntü sunar (ÇIKIŞ) hem dokunuşla komut alır (GİRİŞ)!" },
        { name: "USB Bellek", type: "cift", icon: "fa-usb", hint: "İçindeki veriler okunur ve bilgisayardan yeni dosyalar yazılır.", desc: "🎉 DOĞRU! USB bellek iki yönlü (okuma/yazma) çalışan ÇİFT YÖNLÜ birimdir!" },
        { name: "Harici Sabit Disk", type: "cift", icon: "fa-hard-drive", hint: "Geniş kapasitesiyle bilgisayardan dosya alır ve verir.", desc: "🎉 DOĞRU! Harici disk hem dosya yüklenen hem okunan ÇİFT YÖNLÜ depolama birimidir!" }
    ],
    check: function(selectedType) {
        const item = this.items[this.idx];
        const fb = document.getElementById("slide13-fb");
        if (!fb) return;
        fb.classList.remove("hidden");
        
        if (selectedType === item.type) {
            if (typeof sounds !== "undefined") sounds.playCorrect();
            fb.className = "p-3.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-between gap-3 text-left animate-pop bg-emerald-950/90 border-2 border-emerald-500 text-emerald-200 shadow-lg";
            fb.innerHTML = `
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-400 text-2xl shrink-0"></i>
                    <span>${item.desc}</span>
                </div>
                <button onclick="window.slide13Game.next()" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl shadow-md shrink-0 flex items-center gap-1">
                    <span>Sonraki</span> <i class="fa-solid fa-arrow-right"></i>
                </button>
            `;
        } else {
            if (typeof sounds !== "undefined") sounds.playWrong();
            const correctName = item.type === "giris" ? "GİRİŞ" : (item.type === "cikis" ? "ÇIKIŞ" : "HEM GİRİŞ HEM ÇIKIŞ");
            fb.className = "p-3.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-between gap-3 text-left animate-pop bg-rose-950/90 border-2 border-rose-500 text-rose-200 shadow-lg";
            fb.innerHTML = `
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-circle-xmark text-rose-400 text-2xl shrink-0"></i>
                    <div>
                        <span class="block font-black text-rose-300">⚠️ TEKRAR DÜŞÜN!</span>
                        <span>Bu cihaz verinin yönü açısından <strong>${correctName}</strong> birimidir. İpucu: ${item.hint}</span>
                    </div>
                </div>
                <button onclick="window.slide13Game.next()" class="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl border border-slate-600 shrink-0">
                    Geç 👉
                </button>
            `;
        }
    },
    next: function() {
        if (typeof sounds !== "undefined") sounds.playClick();
        this.idx = (this.idx + 1) % this.items.length;
        const item = this.items[this.idx];
        const titleEl = document.getElementById("slide13-title");
        const hintEl = document.getElementById("slide13-hint");
        const iconEl = document.getElementById("slide13-icon");
        const counterEl = document.getElementById("slide13-counter");
        const fb = document.getElementById("slide13-fb");

        if (titleEl) titleEl.innerText = item.name;
        if (hintEl) hintEl.innerText = "“" + item.hint + "”";
        if (iconEl) iconEl.className = "fa-solid " + item.icon;
        if (counterEl) counterEl.innerText = "Cihaz: " + (this.idx + 1) + " / " + this.items.length;
        if (fb) fb.classList.add("hidden");
    }
};

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
            "Hem giriş hem çıkış özelliği taşıyan çok yönlü donanımları (dokunmatik ekran, depolama aygıtları vb.) sorgulayabileceğim."
        ],
        images: {
            cover: "assets/slides/donanim_sistem_kapak.jpg",
            computerTypes: "assets/slides/bilgisayar_cesitleri.jpg",
            internalHardware: "assets/slides/ic_donanim_kasa.jpg",
            peripherals: "assets/slides/giris_cikis_donanimlari.jpg",
            dataCycle: "assets/slides/veri_isleme_dongusu.jpg",
            sayfa1: "assets/worksheets/1.5_sayfa1.png",
            sayfa2: "assets/worksheets/1.5_sayfa2.png",
            sayfa3: "assets/worksheets/1.5_sayfa3.png",
            sayfa4: "assets/worksheets/1.5_sayfa4.png"
        }
    },

    videos: [],

    // ========================================================
    // 🖥️ 1. İNTERAKTİF DERS SUNUSU (Akıllı Tahta Modu - 20 Slayt)
    // ========================================================
    slides: [
    {
        "id": 1,
        "title": "BİLGİSAYAR VE DONANIM",
        "subtitle": "5. KONU - 1 • BTY.5.1.5",
        "topic": "5. KONU - 1 • BTY.5.1.5",
        "badge": "GİRİŞ",
        "icon": "fa-solid fa-microchip",
        "bgColor": "from-slate-900 via-indigo-950 to-blue-900",
        "gradient": "from-slate-900 via-indigo-950 to-blue-900",
        "content": `
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

                    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-white tracking-tight leading-tight drop-shadow-xl">
                        BİLGİSAYAR VE DONANIM
                    </h1>

                    <div class="p-4 sm:p-5 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-indigo-400/50 shadow-xl space-y-1.5">
                        <div class="flex items-center gap-2 text-yellow-300 font-black text-xs sm:text-sm uppercase tracking-widest">
                            <i class="fa-solid fa-bullseye text-base text-yellow-400"></i>
                            <span>ÖĞRENME ÇIKTISI:</span>
                        </div>
                        <p class="text-xl sm:text-2xl md:text-[23px] font-extrabold text-white leading-snug">
                            <span class="text-yellow-300 font-black">BTY.5.1.5 –</span> Bilgisayar sistemlerini çözümleyebilme.
                        </p>
                    </div>

                    <div class="p-3.5 sm:p-4 bg-indigo-950/80 rounded-2xl border border-indigo-400/30 flex items-start gap-3 shadow-lg">
                        <div class="w-10 h-10 rounded-xl bg-indigo-500/30 text-yellow-300 flex items-center justify-center text-xl shrink-0 mt-0.5">
                            <i class="fa-solid fa-lightbulb"></i>
                        </div>
                        <p class="text-sm sm:text-base font-semibold text-indigo-100 leading-relaxed">
                            “Bilgisayarı oluşturan tüm parçaları, iç donanımları, kasanın gizemini, giriş ve çıkış birimlerini görsel deneylerle keşfetmeye hazır mısınız?”
                        </p>
                    </div>

                    <div class="pt-1 flex items-center gap-3">
                        <span class="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-yellow-300 font-bold text-xs sm:text-sm shadow-md">
                            <i class="fa-solid fa-chalkboard-user text-base"></i>
                            <span>Öğretmen Bozok • Bozok Bilişim Portalı</span>
                        </span>
                        <button onclick="app.nextSlide(); sounds.playClick();" class="px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
                            <span>Keşfe Başla</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>

                <div class="md:col-span-5 flex justify-center">
                    <div class="relative w-full max-w-sm sm:max-w-md rounded-3xl p-3 bg-gradient-to-tr from-cyan-400/30 via-indigo-500/20 to-purple-500/30 border-2 border-cyan-400/30 shadow-2xl backdrop-blur-sm group">
                        <div class="relative w-full aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                            <img src="assets/slides/donanim_sistem_kapak.jpg" alt="Bilgisayar ve Donanım Sistemi" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex flex-col justify-end p-3.5 pointer-events-none">
                                <span class="px-3 py-1 bg-cyan-500/90 text-white font-extrabold text-xs rounded-full shadow-lg backdrop-blur-md w-fit mb-1 border border-cyan-300/40">
                                    🖥️ Modern Donanım İstasyonu
                                </span>
                                <p class="text-[11px] sm:text-xs text-slate-200 font-semibold drop-shadow-md">
                                    Kasa, Monitör, Klavye, Fare ve Kulaklık
                                </p>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-2 mt-2.5">
                            <div class="p-2 bg-slate-900/90 rounded-xl border border-emerald-500/40 text-center">
                                <span class="text-xs font-black text-emerald-400 block"><i class="fa-solid fa-keyboard mr-1"></i>Giriş Birimleri</span>
                                <span class="text-[10px] text-slate-300">Veri Gönderenler</span>
                            </div>
                            <div class="p-2 bg-slate-900/90 rounded-xl border border-cyan-500/40 text-center">
                                <span class="text-xs font-black text-cyan-400 block"><i class="fa-solid fa-desktop mr-1"></i>Çıkış Birimleri</span>
                                <span class="text-[10px] text-slate-300">Bilgi Sunanlar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        "id": 2,
        "title": "BUGÜN NELER ÖĞRENECEĞİZ? 🎯",
        "subtitle": "Dersimizin Ana Durakları ve Öğrenme Kartları",
        "topic": "5. KONU - 1 • BTY.5.1.5",
        "badge": "HEDEFLER",
        "icon": "fa-solid fa-compass",
        "bgColor": "from-blue-950 via-slate-900 to-indigo-950",
        "gradient": "from-blue-950 via-slate-900 to-indigo-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-4 text-center my-auto py-2\">\n                <p class=\"text-base sm:text-xl text-indigo-200 font-semibold\">\n                    Aşağıdaki öğrenme kartlarına dokun ve dersteki kilit kavramların ilk ipucunu al!\n                </p>\n\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2.5 text-left\">\n                    <button onclick=\"document.getElementById('slide2-fb').innerText = '💻 BİLGİSAYAR: Verileri işleyen, saklayan ve sonuç üreten akıllı elektronik cihazdır.'; sounds.playClick();\" class=\"p-3 rounded-2xl bg-slate-850 hover:bg-indigo-900/60 border-2 border-indigo-500/40 hover:border-yellow-400 transition-all shadow-md group flex flex-col justify-between\">\n                        <span class=\"text-2xl mb-1 block group-hover:scale-110 transition-transform\">💻</span>\n                        <div>\n                            <h4 class=\"text-xs font-black text-white\">Bilgisayar Nedir?</h4>\n                            <p class=\"text-[10px] text-slate-400 mt-0.5\">Elektronik cihaz</p>\n                        </div>\n                    </button>\n\n                    <button onclick=\"document.getElementById('slide2-fb').innerText = '⚙️ DONANIM: Bilgisayarın elle tutulan, gözle görülen tüm fiziksel parçalarıdır!'; sounds.playClick();\" class=\"p-3 rounded-2xl bg-slate-850 hover:bg-indigo-900/60 border-2 border-purple-500/40 hover:border-yellow-400 transition-all shadow-md group flex flex-col justify-between\">\n                        <span class=\"text-2xl mb-1 block group-hover:scale-110 transition-transform\">⚙️</span>\n                        <div>\n                            <h4 class=\"text-xs font-black text-white\">Donanım Nedir?</h4>\n                            <p class=\"text-[10px] text-slate-400 mt-0.5\">Fiziksel parçalar</p>\n                        </div>\n                    </button>\n\n                    <button onclick=\"document.getElementById('slide2-fb').innerText = '🖥️ İÇ DONANIM: Kasanın içinde yer alan anakart, işlemci, RAM gibi parçalardır.'; sounds.playClick();\" class=\"p-3 rounded-2xl bg-slate-850 hover:bg-indigo-900/60 border-2 border-cyan-500/40 hover:border-yellow-400 transition-all shadow-md group flex flex-col justify-between\">\n                        <span class=\"text-2xl mb-1 block group-hover:scale-110 transition-transform\">🗄️</span>\n                        <div>\n                            <h4 class=\"text-xs font-black text-white\">İç Donanım</h4>\n                            <p class=\"text-[10px] text-slate-400 mt-0.5\">Kasa içi güçler</p>\n                        </div>\n                    </button>\n\n                    <button onclick=\"document.getElementById('slide2-fb').innerText = '🖱️ DIŞ DONANIM: Kasanın dışına kablo veya bluetooth ile bağlanan aygıtlardır.'; sounds.playClick();\" class=\"p-3 rounded-2xl bg-slate-850 hover:bg-indigo-900/60 border-2 border-blue-500/40 hover:border-yellow-400 transition-all shadow-md group flex flex-col justify-between\">\n                        <span class=\"text-2xl mb-1 block group-hover:scale-110 transition-transform\">🖱️</span>\n                        <div>\n                            <h4 class=\"text-xs font-black text-white\">Dış Donanım</h4>\n                            <p class=\"text-[10px] text-slate-400 mt-0.5\">Çevre birimleri</p>\n                        </div>\n                    </button>\n\n                    <button onclick=\"document.getElementById('slide2-fb').innerText = '🟢 GİRİŞ BİRİMLERİ: Klavye, fare, mikrofon gibi bilgisayara veri gönderen araçlardır.'; sounds.playClick();\" class=\"p-3 rounded-2xl bg-slate-850 hover:bg-indigo-900/60 border-2 border-emerald-500/40 hover:border-yellow-400 transition-all shadow-md group flex flex-col justify-between\">\n                        <span class=\"text-2xl mb-1 block group-hover:scale-110 transition-transform\">🟢</span>\n                        <div>\n                            <h4 class=\"text-xs font-black text-white\">Giriş Birimleri</h4>\n                            <p class=\"text-[10px] text-slate-400 mt-0.5\">Veri aktaranlar</p>\n                        </div>\n                    </button>\n\n                    <button onclick=\"document.getElementById('slide2-fb').innerText = '🔵 ÇIKIŞ BİRİMLERİ: Monitör, yazıcı, hoparlör gibi işlenen veriyi bize sunan araçlardır.'; sounds.playClick();\" class=\"p-3 rounded-2xl bg-slate-850 hover:bg-indigo-900/60 border-2 border-teal-500/40 hover:border-yellow-400 transition-all shadow-md group flex flex-col justify-between\">\n                        <span class=\"text-2xl mb-1 block group-hover:scale-110 transition-transform\">🔵</span>\n                        <div>\n                            <h4 class=\"text-xs font-black text-white\">Çıkış Birimleri</h4>\n                            <p class=\"text-[10px] text-slate-400 mt-0.5\">Bilgi sunanlar</p>\n                        </div>\n                    </button>\n\n                    <button onclick=\"document.getElementById('slide2-fb').innerText = '🟣 ÇİFT YÖNLÜ BİRİMLER: Dokunmatik ekran, USB bellek gibi hem veri alan hem verenlerdir!'; sounds.playClick();\" class=\"p-3 rounded-2xl bg-slate-850 hover:bg-indigo-900/60 border-2 border-rose-500/40 hover:border-yellow-400 transition-all shadow-md group flex flex-col justify-between\">\n                        <span class=\"text-2xl mb-1 block group-hover:scale-110 transition-transform\">🟣</span>\n                        <div>\n                            <h4 class=\"text-xs font-black text-white\">Hem Giriş / Çıkış</h4>\n                            <p class=\"text-[10px] text-slate-400 mt-0.5\">Çift yönlüler</p>\n                        </div>\n                    </button>\n                </div>\n\n                <div id=\"slide2-fb\" class=\"p-4 bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-blue-900/80 rounded-2xl border-2 border-yellow-400/50 text-yellow-300 font-extrabold text-sm sm:text-base min-h-[56px] flex items-center justify-center shadow-lg\">\n                    👆 Yukarıdaki 7 öğrenme kartından birine dokunarak ilk ipucunu al!\n                </div>\n            </div>\n        "
    },
    {
        "id": 3,
        "title": "BİLGİSAYAR NEDİR? 💻",
        "subtitle": "Verileri İşleyen ve Saklayan Elektronik Güç",
        "topic": "5. KONU - 1 • BTY.5.1.5",
        "badge": "TANIM",
        "icon": "fa-solid fa-laptop",
        "bgColor": "from-slate-900 via-indigo-950 to-blue-950",
        "gradient": "from-slate-900 via-indigo-950 to-blue-950",
        "content": `
            <div class="max-w-5xl mx-auto space-y-3.5 my-auto py-1">
                <div class="p-3.5 sm:p-4 bg-blue-950/70 rounded-2xl border-2 border-blue-400/50 shadow-xl text-center space-y-1">
                    <span class="px-3 py-0.5 bg-blue-500/20 text-blue-300 font-black text-[11px] uppercase tracking-widest rounded-full border border-blue-400/30">
                        Resmî Ders Tanımı
                    </span>
                    <h2 class="text-lg sm:text-xl md:text-2xl font-black text-yellow-300 leading-snug">
                        “Verileri işleyen, saklayan, gerektiğinde geri getiren ve çeşitli işlemleri yapan elektronik cihaza <span class="text-white underline decoration-cyan-400">bilgisayar</span> denir.”
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
                    <div class="md:col-span-5 rounded-2xl overflow-hidden border-2 border-indigo-400/40 shadow-xl group relative">
                        <img src="assets/slides/bilgisayar_cesitleri.jpg" alt="Bilgisayar Çeşitleri: Masaüstü, Laptop, Tablet" class="w-full h-44 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-500">
                        <div class="absolute bottom-0 inset-x-0 p-2 bg-slate-950/85 backdrop-blur-sm border-t border-indigo-500/40 text-center">
                            <span class="text-[11px] sm:text-xs font-bold text-yellow-300 flex items-center justify-center gap-1.5">
                                <i class="fa-solid fa-camera"></i> Masaüstü, Laptop ve Tablet Bilgisayarlar
                            </span>
                        </div>
                    </div>

                    <div class="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-2 text-left">
                        <div class="p-2.5 bg-slate-800/90 rounded-xl border border-slate-700 flex items-center gap-3 hover:border-cyan-400 transition-all">
                            <div class="w-9 h-9 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-lg shrink-0">
                                <i class="fa-solid fa-desktop"></i>
                            </div>
                            <div>
                                <h4 class="text-xs sm:text-sm font-black text-white">Masaüstü Bilgisayar</h4>
                                <p class="text-[11px] text-slate-300">Sabit masada kasa, monitör, klavye ve fareyle kullanılır.</p>
                            </div>
                        </div>

                        <div class="p-2.5 bg-slate-800/90 rounded-xl border border-slate-700 flex items-center gap-3 hover:border-indigo-400 transition-all">
                            <div class="w-9 h-9 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-lg shrink-0">
                                <i class="fa-solid fa-laptop"></i>
                            </div>
                            <div>
                                <h4 class="text-xs sm:text-sm font-black text-white">Dizüstü Bilgisayar (Laptop)</h4>
                                <p class="text-[11px] text-slate-300">Bataryalı, taşınabilir; ekran ve klavye tek gövdededir.</p>
                            </div>
                        </div>

                        <div class="p-2.5 bg-slate-800/90 rounded-xl border border-slate-700 flex items-center gap-3 hover:border-purple-400 transition-all">
                            <div class="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center text-lg shrink-0">
                                <i class="fa-solid fa-tablet-screen-button"></i>
                            </div>
                            <div>
                                <h4 class="text-xs sm:text-sm font-black text-white">Tablet Bilgisayar</h4>
                                <p class="text-[11px] text-slate-300">Dokunmatik ekranıyla hafif, taşınabilir pratik bilgisayardır.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sınıf İçi Etkileşim -->
                <div class="p-3.5 bg-indigo-950/80 rounded-2xl border-2 border-indigo-400/50 shadow-xl space-y-2 text-left">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                        <div class="flex items-center gap-2 text-yellow-300 font-bold text-xs sm:text-sm">
                            <i class="fa-solid fa-comments text-base"></i>
                            <span>SINIF TARTIŞMASI: “Bilgisayarlar günlük hayatımızda hangi işleri yapmamıza yardımcı olur?”</span>
                        </div>
                        <button id="slide3-btn" onclick="window.toggleSlideAnswer('slide3-answers', 'slide3-btn', 'Örnek Cevapları Aç', 'Cevapları Gizle')" class="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5">
                            <i class="fa-solid fa-eye"></i> Örnek Cevapları Aç
                        </button>
                    </div>

                    <div id="slide3-answers" class="hidden grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs pt-1 animate-pop">
                        <div class="p-2 bg-slate-900 rounded-xl border border-emerald-500/40 text-emerald-300 font-bold flex items-center gap-2">
                            <i class="fa-solid fa-graduation-cap"></i> Ödev & Araştırma
                        </div>
                        <div class="p-2 bg-slate-900 rounded-xl border border-cyan-500/40 text-cyan-300 font-bold flex items-center gap-2">
                            <i class="fa-solid fa-gamepad"></i> Oyun & Eğlence
                        </div>
                        <div class="p-2 bg-slate-900 rounded-xl border border-yellow-500/40 text-yellow-300 font-bold flex items-center gap-2">
                            <i class="fa-solid fa-video"></i> İletişim & Sohbet
                        </div>
                        <div class="p-2 bg-slate-900 rounded-xl border border-purple-500/40 text-purple-300 font-bold flex items-center gap-2">
                            <i class="fa-solid fa-hospital"></i> Sağlık & Bilim
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        "id": 4,
        "title": "BİLGİSAYAR GÜNLÜK HAYATIMIZDA 🌍",
        "subtitle": "Hayatımızın Her Alanında Çalışan Dijital Yardımcımız",
        "topic": "5. KONU - 1 • BTY.5.1.5",
        "badge": "UYGULAMA",
        "icon": "fa-solid fa-globe",
        "bgColor": "from-slate-900 via-blue-950 to-indigo-950",
        "gradient": "from-slate-900 via-blue-950 to-indigo-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-4 my-auto py-2\">\n                <p class=\"text-sm sm:text-base text-center text-slate-300 font-semibold\">\n                    Bilgisayarlar sadece oyun için mi vardır? Kartlara dokun ve kullanım alanlarını incele!\n                </p>\n\n                <div class=\"grid grid-cols-2 sm:grid-cols-3 gap-3\">\n                    <div class=\"p-4 bg-slate-850 hover:bg-indigo-950/70 border-2 border-blue-500/40 rounded-2xl space-y-1.5 transition-all text-left group\">\n                        <div class=\"w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform\">\n                            <i class=\"fa-solid fa-graduation-cap\"></i>\n                        </div>\n                        <h4 class=\"text-sm sm:text-base font-black text-white\">1. Eğitim & Okul</h4>\n                        <p class=\"text-xs text-slate-300\">EBA, akıllı tahta dersleri, dijital kitaplar ve araştırma ödevleri.</p>\n                    </div>\n\n                    <div class=\"p-4 bg-slate-850 hover:bg-indigo-950/70 border-2 border-emerald-500/40 rounded-2xl space-y-1.5 transition-all text-left group\">\n                        <div class=\"w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform\">\n                            <i class=\"fa-solid fa-comments\"></i>\n                        </div>\n                        <h4 class=\"text-sm sm:text-base font-black text-white\">2. İletişim</h4>\n                        <p class=\"text-xs text-slate-300\">Görüntülü konuşma, e-posta ve dünyanın öbür ucundakiyle anında mesajlaşma.</p>\n                    </div>\n\n                    <div class=\"p-4 bg-slate-850 hover:bg-indigo-950/70 border-2 border-purple-500/40 rounded-2xl space-y-1.5 transition-all text-left group\">\n                        <div class=\"w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform\">\n                            <i class=\"fa-solid fa-gamepad\"></i>\n                        </div>\n                        <h4 class=\"text-sm sm:text-base font-black text-white\">3. Oyun & Eğlence</h4>\n                        <p class=\"text-xs text-slate-300\">Zekâ oyunları, çizgi film izleme, müzik dinleme ve hobi aktiviteleri.</p>\n                    </div>\n\n                    <div class=\"p-4 bg-slate-850 hover:bg-indigo-950/70 border-2 border-amber-500/40 rounded-2xl space-y-1.5 transition-all text-left group\">\n                        <div class=\"w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform\">\n                            <i class=\"fa-solid fa-microscope\"></i>\n                        </div>\n                        <h4 class=\"text-sm sm:text-base font-black text-white\">4. Araştırma & Bilim</h4>\n                        <p class=\"text-xs text-slate-300\">Uzay fotoğrafları, hava tahminleri, tıp ve kütüphane taramaları.</p>\n                    </div>\n\n                    <div class=\"p-4 bg-slate-850 hover:bg-indigo-950/70 border-2 border-teal-500/40 rounded-2xl space-y-1.5 transition-all text-left group\">\n                        <div class=\"w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform\">\n                            <i class=\"fa-solid fa-cart-shopping\"></i>\n                        </div>\n                        <h4 class=\"text-sm sm:text-base font-black text-white\">5. Alışveriş & Banka</h4>\n                        <p class=\"text-xs text-slate-300\">Güvenli internet alışverişi, market barkod kasaları ve fatura işlemleri.</p>\n                    </div>\n\n                    <div class=\"p-4 bg-slate-850 hover:bg-indigo-950/70 border-2 border-rose-500/40 rounded-2xl space-y-1.5 transition-all text-left group\">\n                        <div class=\"w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform\">\n                            <i class=\"fa-solid fa-file-lines\"></i>\n                        </div>\n                        <h4 class=\"text-sm sm:text-base font-black text-white\">6. Belge Hazırlama</h4>\n                        <p class=\"text-xs text-slate-300\">Yazı yazma, renkli sunular hazırlama, hesaplama ve grafik çizme.</p>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 5,
        "title": "DONANIM (HARDWARE) NEDİR? ⚙️",
        "subtitle": "Elle Tutulur, Gözle Görülür Fiziksel Parçalar",
        "topic": "5. KONU - 1 • BTY.5.1.5",
        "badge": "KAVRAM",
        "icon": "fa-solid fa-screwdriver-wrench",
        "bgColor": "from-slate-900 via-indigo-950 to-blue-900",
        "gradient": "from-slate-900 via-indigo-950 to-blue-900",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-5 my-auto py-2\">\n                <div class=\"p-5 sm:p-6 bg-purple-950/70 rounded-3xl border-2 border-purple-400/50 shadow-2xl text-center space-y-2\">\n                    <span class=\"px-3.5 py-1 bg-purple-500/20 text-purple-300 font-black text-xs uppercase tracking-widest rounded-full border border-purple-400/30\">\n                        Temel Tanım\n                    </span>\n                    <h2 class=\"text-2xl sm:text-3xl font-black text-yellow-300 leading-snug\">\n                        “Bilgisayarı oluşturan, elle tutabildiğimiz ve gözle görebildiğimiz tüm fiziksel parçalara <span class=\"text-white underline decoration-yellow-400\">donanım</span> denir.”\n                    </h2>\n                    <p class=\"text-xs sm:text-sm text-slate-200\">\n                        Dokunabildiğin her parça bir donanımdır: Fare, klavye, ekran, kasa, kulaklık ve kasanın içindeki çipler!\n                    </p>\n                </div>\n\n                <div class=\"grid grid-cols-2 sm:grid-cols-5 gap-3\">\n                    <button onclick=\"document.getElementById('slide5-detail').innerText = '🖥️ MONİTÖR: Bilgisayarda yapılan işlemlerin sonucunu görüntü olarak gözümüze sunar.'; sounds.playClick();\" class=\"p-3.5 bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 hover:border-cyan-400 rounded-2xl text-center space-y-2 transition-all\">\n                        <i class=\"fa-solid fa-desktop text-3xl text-cyan-400\"></i>\n                        <h4 class=\"text-xs sm:text-sm font-black text-white\">Monitör</h4>\n                        <span class=\"text-[10px] text-cyan-300 block\">Ekran</span>\n                    </button>\n\n                    <button onclick=\"document.getElementById('slide5-detail').innerText = '⌨️ KLAVYE: Üzerindeki tuşlarla harf, sayı ve komutları bilgisayara yazmamızı sağlar.'; sounds.playClick();\" class=\"p-3.5 bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 hover:border-yellow-400 rounded-2xl text-center space-y-2 transition-all\">\n                        <i class=\"fa-solid fa-keyboard text-3xl text-yellow-400\"></i>\n                        <h4 class=\"text-xs sm:text-sm font-black text-white\">Klavye</h4>\n                        <span class=\"text-[10px] text-yellow-300 block\">Tuş Takımı</span>\n                    </button>\n\n                    <button onclick=\"document.getElementById('slide5-detail').innerText = '🖱️ FARE: Ekrandaki imleci hareket ettirip nesneleri seçmemize ve tıklamamıza yarar.'; sounds.playClick();\" class=\"p-3.5 bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 hover:border-emerald-400 rounded-2xl text-center space-y-2 transition-all\">\n                        <i class=\"fa-solid fa-computer-mouse text-3xl text-emerald-400\"></i>\n                        <h4 class=\"text-xs sm:text-sm font-black text-white\">Fare (Mouse)</h4>\n                        <span class=\"text-[10px] text-emerald-300 block\">İşaretçi</span>\n                    </button>\n\n                    <button onclick=\"document.getElementById('slide5-detail').innerText = '🗄️ BİLGİSAYAR KASASI: İç donanımları dış darbelerden koruyan ve bir arada tutan kutudur.'; sounds.playClick();\" class=\"p-3.5 bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 hover:border-indigo-400 rounded-2xl text-center space-y-2 transition-all\">\n                        <i class=\"fa-solid fa-server text-3xl text-indigo-400\"></i>\n                        <h4 class=\"text-xs sm:text-sm font-black text-white\">Kasa</h4>\n                        <span class=\"text-[10px] text-indigo-300 block\">Ana Gövde</span>\n                    </button>\n\n                    <button onclick=\"document.getElementById('slide5-detail').innerText = '🖨️ YAZICI: Bilgisayardaki metin veya fotoğrafları kağıda basıp çıkaran donanımdır.'; sounds.playClick();\" class=\"p-3.5 bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 hover:border-rose-400 rounded-2xl text-center space-y-2 transition-all col-span-2 sm:col-span-1\">\n                        <i class=\"fa-solid fa-print text-3xl text-rose-400\"></i>\n                        <h4 class=\"text-xs sm:text-sm font-black text-white\">Yazıcı</h4>\n                        <span class=\"text-[10px] text-rose-300 block\">Baskı Cihazı</span>\n                    </button>\n                </div>\n\n                <div id=\"slide5-detail\" class=\"p-3.5 bg-slate-900/90 rounded-2xl border-2 border-indigo-400/40 text-yellow-300 text-xs sm:text-sm font-bold text-center min-h-[48px] flex items-center justify-center\">\n                    👆 Parçalara dokunarak görevlerini incele!\n                </div>\n            </div>\n        "
    },
    {
        "id": 6,
        "title": "DONANIM TÜRLERİ: 2 FARKLI BAKIŞ AÇISI ⚡",
        "subtitle": "Konumuna Göre ve Veri Alışverişindeki Görevine Göre",
        "topic": "5. KONU - 1 • BTY.5.1.5",
        "badge": "SINIFLANDIRMA",
        "icon": "fa-solid fa-diagram-project",
        "bgColor": "from-blue-950 via-slate-900 to-indigo-950",
        "gradient": "from-blue-950 via-slate-900 to-indigo-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-4 my-auto py-2\">\n                <!-- 2 Sütun Karşılaştırmalı Şema -->\n                <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-left\">\n                    <!-- 1. AÇI: KONUMUNA GÖRE -->\n                    <div class=\"p-5 bg-slate-850 rounded-2xl border-2 border-cyan-500/50 space-y-3 shadow-xl\">\n                        <div class=\"flex items-center gap-2 text-cyan-300 font-black text-sm\">\n                            <span class=\"px-2.5 py-1 bg-cyan-500/20 rounded-lg\">1. BAKIŞ</span>\n                            <span>FİZİKSEL KONUMUNA GÖRE</span>\n                        </div>\n                        <h3 class=\"text-lg font-black text-white\">Parça Nerede Duruyor?</h3>\n                        <div class=\"space-y-2 text-xs\">\n                            <div class=\"p-3 bg-slate-900/90 rounded-xl border border-slate-700\">\n                                <span class=\"font-black text-cyan-300 text-sm block\">🗄️ İÇ DONANIM:</span>\n                                <span>Kasanın içine monte edilmiş parçalardır. (Örn: Anakart, İşlemci, RAM, Sabit Disk)</span>\n                            </div>\n                            <div class=\"p-3 bg-slate-900/90 rounded-xl border border-slate-700\">\n                                <span class=\"font-black text-indigo-300 text-sm block\">🖱️ DIŞ DONANIM:</span>\n                                <span>Kasanın dışına kablo/kablosuz bağlanan parçalardır. (Örn: Monitör, Klavye, Fare, Yazıcı)</span>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- 2. AÇI: VERİ ALIŞVERİŞİNE GÖRE -->\n                    <div class=\"p-5 bg-slate-850 rounded-2xl border-2 border-purple-500/50 space-y-3 shadow-xl\">\n                        <div class=\"flex items-center gap-2 text-purple-300 font-black text-sm\">\n                            <span class=\"px-2.5 py-1 bg-purple-500/20 rounded-lg\">2. BAKIŞ</span>\n                            <span>VERİ AKIŞINDAKİ GÖREVİNE GÖRE</span>\n                        </div>\n                        <h3 class=\"text-lg font-black text-white\">Veri Nereye Gidiyor?</h3>\n                        <div class=\"space-y-2 text-xs\">\n                            <div class=\"p-2.5 bg-slate-900/90 rounded-xl border border-emerald-500/30\">\n                                <span class=\"font-black text-emerald-400 block\">🟢 GİRİŞ BİRİMLERİ:</span>\n                                <span>Bilgisayara veri/komut sokar. (Klavye, Fare, Mikrofon)</span>\n                            </div>\n                            <div class=\"p-2.5 bg-slate-900/90 rounded-xl border border-blue-500/30\">\n                                <span class=\"font-black text-blue-400 block\">🔵 ÇIKIŞ BİRİMLERİ:</span>\n                                <span>İşlenen sonucu kullanıcıya verir. (Monitör, Hoparlör, Yazıcı)</span>\n                            </div>\n                            <div class=\"p-2.5 bg-slate-900/90 rounded-xl border border-rose-500/30\">\n                                <span class=\"font-black text-rose-400 block\">🟣 HEM GİRİŞ HEM ÇIKIŞ:</span>\n                                <span>İki yönlü çalışır. (Dokunmatik Ekran, USB Bellek)</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- ÖNEMLİ UYARI KUTUSU -->\n                <div class=\"p-4 bg-gradient-to-r from-amber-950/80 via-yellow-950/60 to-slate-900 rounded-2xl border-2 border-yellow-400/80 flex items-center gap-3 text-left shadow-2xl\">\n                    <div class=\"w-12 h-12 rounded-xl bg-yellow-400/20 text-yellow-300 flex items-center justify-center text-2xl shrink-0\">\n                        <i class=\"fa-solid fa-triangle-exclamation\"></i>\n                    </div>\n                    <div>\n                        <h4 class=\"text-sm font-black text-yellow-300 uppercase\">ÖNEMLİ KURAL – SAKIN KARIŞTIRMA!</h4>\n                        <p class=\"text-xs text-slate-200 mt-0.5\">\n                            İç/Dış ayrımı parçanın <strong>nerede durduğunu</strong> (fiziksel yeri), Giriş/Çıkış ayrımı ise <strong>bilginin akış yönünü</strong> gösterir! Örneğin klavye hem bir dış donanımdır hem de bir giriş birimidir.\n                        </p>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 7,
        "title": "İÇ DONANIM BİRİMLERİ (KASAYI AÇIYORUZ!) 🗄️",
        "subtitle": "Bilgisayar Kasasının İçinde Neler Var? Parçaları Keşfet!",
        "topic": "5. KONU - 1 • BTY.5.1.5",
        "badge": "İÇ DONANIM",
        "icon": "fa-solid fa-box-open",
        "bgColor": "from-slate-900 via-indigo-950 to-blue-900",
        "gradient": "from-slate-900 via-indigo-950 to-blue-900",
        "content": `
            <div class="max-w-6xl mx-auto space-y-2.5 my-auto py-1">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
                    <!-- Sol Taraf: Açık Kasa Gerçek Fotoğrafı -->
                    <div class="md:col-span-5 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-2xl group relative bg-slate-950">
                        <img src="assets/slides/ic_donanim_kasa.jpg" alt="Açık Bilgisayar Kasası İçi" class="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex flex-col justify-end p-3 pointer-events-none">
                            <span class="px-2.5 py-1 bg-cyan-500/90 text-white font-black text-xs rounded-lg shadow-md w-fit border border-cyan-300/40 mb-1">
                                📸 Gerçek Açık Kasa İçi
                            </span>
                            <p class="text-[11px] text-slate-200 font-semibold drop-shadow">
                                Anakart, CPU Sıvı Soğutma, RAM, RTX Ekran Kartı, Güç Kaynağı
                            </p>
                        </div>
                    </div>

                    <!-- Sağ Taraf: 10 Parça Butonu -->
                    <div class="md:col-span-7 space-y-2">
                        <div class="grid grid-cols-2 sm:grid-cols-5 gap-2 text-left">
                            <button onclick="document.getElementById('slide7-info').innerHTML = '<strong>1. ANAKART:</strong> Tüm iç donanımların üzerine takıldığı, parçalar arası veri iletişimini sağlayan ana devre kartıdır (İskelet/Otoyol).'; sounds.playClick();" class="p-2 bg-slate-850 hover:bg-slate-700 border-2 border-indigo-500/50 rounded-xl space-y-0.5 transition-all">
                                <span class="text-xs font-black text-yellow-300 block">1. ANAKART</span>
                                <p class="text-[10px] text-slate-300">Ana devre kartı</p>
                            </button>
                            <button onclick="document.getElementById('slide7-info').innerHTML = '<strong>2. İŞLEMCİ (CPU):</strong> Bilgisayarın beynidir! Tüm matematiksel ve mantıksal komutları ışık hızında işler.'; sounds.playClick();" class="p-2 bg-slate-850 hover:bg-slate-700 border-2 border-cyan-500/50 rounded-xl space-y-0.5 transition-all">
                                <span class="text-xs font-black text-cyan-300 block">2. İŞLEMCİ (CPU)</span>
                                <p class="text-[10px] text-slate-300">Bilgisayarın beyni</p>
                            </button>
                            <button onclick="document.getElementById('slide7-info').innerHTML = '<strong>3. RAM BELLEK:</strong> Geçici hafızadır! Bilgisayar açıkken çalışan programların verilerini tutar, kapanınca silinir.'; sounds.playClick();" class="p-2 bg-slate-850 hover:bg-slate-700 border-2 border-emerald-500/50 rounded-xl space-y-0.5 transition-all">
                                <span class="text-xs font-black text-emerald-300 block">3. RAM BELLEK</span>
                                <p class="text-[10px] text-slate-300">Geçici hafıza</p>
                            </button>
                            <button onclick="document.getElementById('slide7-info').innerHTML = '<strong>4. SABİT DİSK (HDD):</strong> Verileri kalıcı olarak manyetik diskler üzerinde saklayan depolama birimidir.'; sounds.playClick();" class="p-2 bg-slate-850 hover:bg-slate-700 border-2 border-amber-500/50 rounded-xl space-y-0.5 transition-all">
                                <span class="text-xs font-black text-amber-300 block">4. SABİT DİSK</span>
                                <p class="text-[10px] text-slate-300">Kalıcı depolama</p>
                            </button>
                            <button onclick="document.getElementById('slide7-info').innerHTML = '<strong>5. SSD:</strong> Yeni nesil kalıcı depolama! HDD\\'ye göre çok daha hızlı, sessiz ve darbelere dayanıklıdır.'; sounds.playClick();" class="p-2 bg-slate-850 hover:bg-slate-700 border-2 border-rose-500/50 rounded-xl space-y-0.5 transition-all">
                                <span class="text-xs font-black text-rose-300 block">5. SSD</span>
                                <p class="text-[10px] text-slate-300">Hızlı depolama</p>
                            </button>
                            <button onclick="document.getElementById('slide7-info').innerHTML = '<strong>6. EKRAN KARTI (GPU):</strong> Bilgisayardaki görüntüleri işleyip monitöre yüksek kalitede aktaran grafik birimidir.'; sounds.playClick();" class="p-2 bg-slate-850 hover:bg-slate-700 border-2 border-purple-500/50 rounded-xl space-y-0.5 transition-all">
                                <span class="text-xs font-black text-purple-300 block">6. EKRAN KARTI</span>
                                <p class="text-[10px] text-slate-300">Grafik & Görüntü</p>
                            </button>
                            <button onclick="document.getElementById('slide7-info').innerHTML = '<strong>7. SES KARTI:</strong> Bilgisayardaki sesleri hoparlöre veya kulaklığa aktarır, mikrofon sesini dijitale çevirir.'; sounds.playClick();" class="p-2 bg-slate-850 hover:bg-slate-700 border-2 border-teal-500/50 rounded-xl space-y-0.5 transition-all">
                                <span class="text-xs font-black text-teal-300 block">7. SES KARTI</span>
                                <p class="text-[10px] text-slate-300">Ses işleme</p>
                            </button>
                            <button onclick="document.getElementById('slide7-info').innerHTML = '<strong>8. AĞ KARTI (WI-FI/ETHERNET):</strong> Bilgisayarın kablolu veya kablosuz olarak internete/yerel ağa bağlanmasını sağlar.'; sounds.playClick();" class="p-2 bg-slate-850 hover:bg-slate-700 border-2 border-blue-500/50 rounded-xl space-y-0.5 transition-all">
                                <span class="text-xs font-black text-blue-300 block">8. AĞ KARTI</span>
                                <p class="text-[10px] text-slate-300">İnternet bağlantısı</p>
                            </button>
                            <button onclick="document.getElementById('slide7-info').innerHTML = '<strong>9. GÜÇ KAYNAĞI (PSU):</strong> Şehir elektriğini (220V) bilgisayar parçalarının güvenle kullanabileceği seviyeye dönüştürür.'; sounds.playClick();" class="p-2 bg-slate-850 hover:bg-slate-700 border-2 border-yellow-500/50 rounded-xl space-y-0.5 transition-all">
                                <span class="text-xs font-black text-yellow-300 block">9. GÜÇ KAYNAĞI</span>
                                <p class="text-[10px] text-slate-300">Elektrik enerjisi</p>
                            </button>
                            <button onclick="document.getElementById('slide7-info').innerHTML = '<strong>10. SOĞUTUCU (FAN):</strong> Özellikle işlemcinin aşırı ısınıp yavaşlamasını veya yanmasını önleyen fan ve soğutma bloğudur.'; sounds.playClick();" class="p-2 bg-slate-850 hover:bg-slate-700 border-2 border-cyan-400/50 rounded-xl space-y-0.5 transition-all">
                                <span class="text-xs font-black text-cyan-300 block">10. SOĞUTUCU</span>
                                <p class="text-[10px] text-slate-300">Fan & Soğutma</p>
                            </button>
                        </div>
                        <div id="slide7-info" class="p-3 bg-slate-900 rounded-2xl border-2 border-indigo-400 text-yellow-300 text-xs sm:text-sm font-semibold text-center min-h-[50px] flex items-center justify-center shadow-lg">
                            👆 Parçalardan birine dokunarak fotoğraftaki yerini ve görevini öğren!
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        "id": 8,
        "title": "İÇ DONANIM BİRİMLERİNİN GÖREVLERİ 🧠",
        "subtitle": "Hangi Parça Bilgisayarda Ne İşe Yarar?",
        "topic": "5. KONU - 1 • BTY.5.1.5",
        "badge": "GÖREVLER",
        "icon": "fa-solid fa-microchip",
        "bgColor": "from-blue-950 via-slate-900 to-indigo-950",
        "gradient": "from-blue-950 via-slate-900 to-indigo-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-3.5 my-auto py-2\">\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-left\">\n                    <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-indigo-500/40 space-y-1\">\n                        <div class=\"flex items-center gap-2 text-yellow-300 font-bold text-xs sm:text-sm\">\n                            <i class=\"fa-solid fa-chess-board text-base\"></i>\n                            <span>Anakart</span>\n                        </div>\n                        <p class=\"text-xs text-slate-200\">Bilgisayar parçalarının birbiriyle iletişim kurmasını ve bağlanmasını sağlar (Otoyol / İskelet).</p>\n                    </div>\n\n                    <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-cyan-500/40 space-y-1\">\n                        <div class=\"flex items-center gap-2 text-cyan-300 font-bold text-xs sm:text-sm\">\n                            <i class=\"fa-solid fa-brain text-base\"></i>\n                            <span>İşlemci (CPU)</span>\n                        </div>\n                        <p class=\"text-xs text-slate-200\">Komutları işler, hesaplamaları yapar ve tüm işlemleri yürütür. Bilgisayarın beynidir.</p>\n                    </div>\n\n                    <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-emerald-500/40 space-y-1\">\n                        <div class=\"flex items-center gap-2 text-emerald-300 font-bold text-xs sm:text-sm\">\n                            <i class=\"fa-solid fa-memory text-base\"></i>\n                            <span>RAM Bellek</span>\n                        </div>\n                        <p class=\"text-xs text-slate-200\">Çalışan program ve verileri geçici olarak tutar. Bilgisayar kapanınca içindeki veriler silinir.</p>\n                    </div>\n\n                    <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-amber-500/40 space-y-1\">\n                        <div class=\"flex items-center gap-2 text-amber-300 font-bold text-xs sm:text-sm\">\n                            <i class=\"fa-solid fa-hard-drive text-base\"></i>\n                            <span>Sabit Disk (HDD)</span>\n                        </div>\n                        <p class=\"text-xs text-slate-200\">Verileri kalıcı olarak depolar. Dosyalar, oyunlar ve işletim sistemi burada saklanır.</p>\n                    </div>\n\n                    <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-rose-500/40 space-y-1\">\n                        <div class=\"flex items-center gap-2 text-rose-300 font-bold text-xs sm:text-sm\">\n                            <i class=\"fa-solid fa-bolt-lightning text-base\"></i>\n                            <span>SSD</span>\n                        </div>\n                        <p class=\"text-xs text-slate-200\">Verileri kalıcı olarak depolar. Mekanik parçası yoktur; HDD'ye göre çok daha hızlıdır.</p>\n                    </div>\n\n                    <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-purple-500/40 space-y-1\">\n                        <div class=\"flex items-center gap-2 text-purple-300 font-bold text-xs sm:text-sm\">\n                            <i class=\"fa-solid fa-vr-cardboard text-base\"></i>\n                            <span>Ekran Kartı</span>\n                        </div>\n                        <p class=\"text-xs text-slate-200\">Görüntü işleme görevlerini yürütür ve monitöre yüksek kaliteli görüntü iletir.</p>\n                    </div>\n\n                    <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-teal-500/40 space-y-1\">\n                        <div class=\"flex items-center gap-2 text-teal-300 font-bold text-xs sm:text-sm\">\n                            <i class=\"fa-solid fa-headphones text-base\"></i>\n                            <span>Ses Kartı</span>\n                        </div>\n                        <p class=\"text-xs text-slate-200\">Ses sinyallerinin işlenmesini ve hoparlör/mikrofon iletişimini sağlar.</p>\n                    </div>\n\n                    <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-blue-500/40 space-y-1\">\n                        <div class=\"flex items-center gap-2 text-blue-300 font-bold text-xs sm:text-sm\">\n                            <i class=\"fa-solid fa-network-wired text-base\"></i>\n                            <span>Ağ Kartı</span>\n                        </div>\n                        <p class=\"text-xs text-slate-200\">Bilgisayarın kablolu veya kablosuz (Wi-Fi) ağa bağlanmasını sağlar.</p>\n                    </div>\n\n                    <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-yellow-500/40 space-y-1\">\n                        <div class=\"flex items-center gap-2 text-yellow-300 font-bold text-xs sm:text-sm\">\n                            <i class=\"fa-solid fa-plug text-base\"></i>\n                            <span>Güç Kaynağı</span>\n                        </div>\n                        <p class=\"text-xs text-slate-200\">Bilgisayar parçalarına ihtiyaç duydukları elektrik enerjisini düzenli sağlar.</p>\n                    </div>\n\n                    <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-cyan-400/40 space-y-1\">\n                        <div class=\"flex items-center gap-2 text-cyan-300 font-bold text-xs sm:text-sm\">\n                            <i class=\"fa-solid fa-fan text-base\"></i>\n                            <span>Soğutucu (Fan)</span>\n                        </div>\n                        <p class=\"text-xs text-slate-200\">Parçaların aşırı ısınmasını önler, sistemin serin ve kararlı çalışmasını sağlar.</p>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 9,
        "title": "DIŞ DONANIM BİRİMLERİ 🖱️",
        "subtitle": "Kasaya Dışarıdan Bağlanan Çevre Birimleri",
        "topic": "5. KONU - 1 • BTY.5.1.5",
        "badge": "DIŞ DONANIM",
        "icon": "fa-solid fa-desktop",
        "bgColor": "from-slate-900 via-indigo-950 to-blue-950",
        "gradient": "from-slate-900 via-indigo-950 to-blue-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-4 my-auto py-2\">\n                <p class=\"text-xs sm:text-sm text-center text-slate-300 font-semibold\">\n                    Aşağıdaki 12 çevre birimine dokunarak kullanım amaçlarını incele!\n                </p>\n\n                <div class=\"grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2.5\">\n                    <button onclick=\"document.getElementById('slide9-fb').innerText = '🗄️ KASA: İç donanımları koruyan ve dış donanımların kabloyla bağlandığı ana gövdedir.'; sounds.playClick();\" class=\"p-3 bg-slate-850 hover:bg-slate-700 border border-slate-700 hover:border-yellow-400 rounded-xl text-center space-y-1 transition-all\">\n                        <i class=\"fa-solid fa-server text-2xl text-yellow-400\"></i>\n                        <span class=\"text-xs font-black text-white block\">Kasa</span>\n                    </button>\n\n                    <button onclick=\"document.getElementById('slide9-fb').innerText = '🖥️ MONİTÖR: Bilgisayarın ürettiği görsel sonuçları görmemizi sağlayan ekrandır.'; sounds.playClick();\" class=\"p-3 bg-slate-850 hover:bg-slate-700 border border-slate-700 hover:border-cyan-400 rounded-xl text-center space-y-1 transition-all\">\n                        <i class=\"fa-solid fa-desktop text-2xl text-cyan-400\"></i>\n                        <span class=\"text-xs font-black text-white block\">Monitör</span>\n                    </button>\n\n                    <button onclick=\"document.getElementById('slide9-fb').innerText = '⌨️ KLAVYE: Yazı yazmamızı, sayı girmemizi ve komut vermemizi sağlayan tuşlu cihazdır.'; sounds.playClick();\" class=\"p-3 bg-slate-850 hover:bg-slate-700 border border-slate-700 hover:border-emerald-400 rounded-xl text-center space-y-1 transition-all\">\n                        <i class=\"fa-solid fa-keyboard text-2xl text-emerald-400\"></i>\n                        <span class=\"text-xs font-black text-white block\">Klavye</span>\n                    </button>\n\n                    <button onclick=\"document.getElementById('slide9-fb').innerText = '🖱️ FARE: Ekrandaki imleci kontrol ederek tıklama ve seçme işlemlerini yapar.'; sounds.playClick();\" class=\"p-3 bg-slate-850 hover:bg-slate-700 border border-slate-700 hover:border-indigo-400 rounded-xl text-center space-y-1 transition-all\">\n                        <i class=\"fa-solid fa-computer-mouse text-2xl text-indigo-400\"></i>\n                        <span class=\"text-xs font-black text-white block\">Fare</span>\n                    </button>\n\n                    <button onclick=\"document.getElementById('slide9-fb').innerText = '🖨️ YAZICI: Bilgisayardaki metin veya resimleri kağıda basan çıkış cihazıdır.'; sounds.playClick();\" class=\"p-3 bg-slate-850 hover:bg-slate-700 border border-slate-700 hover:border-rose-400 rounded-xl text-center space-y-1 transition-all\">\n                        <i class=\"fa-solid fa-print text-2xl text-rose-400\"></i>\n                        <span class=\"text-xs font-black text-white block\">Yazıcı</span>\n                    </button>\n\n                    <button onclick=\"document.getElementById('slide9-fb').innerText = '📑 TARAYICI (SCANNER): Kağıttaki bir resmi veya yazıyı dijital fotoğrafa çevirip bilgisayara aktarır.'; sounds.playClick();\" class=\"p-3 bg-slate-850 hover:bg-slate-700 border border-slate-700 hover:border-amber-400 rounded-xl text-center space-y-1 transition-all\">\n                        <i class=\"fa-solid fa-scanner text-2xl text-amber-400\"></i>\n                        <span class=\"text-xs font-black text-white block\">Tarayıcı</span>\n                    </button>\n\n                    <button onclick=\"document.getElementById('slide9-fb').innerText = '🔊 HOPARLÖR: Bilgisayardaki sesleri dışarıya vererek duymamızı sağlar.'; sounds.playClick();\" class=\"p-3 bg-slate-850 hover:bg-slate-700 border border-slate-700 hover:border-teal-400 rounded-xl text-center space-y-1 transition-all\">\n                        <i class=\"fa-solid fa-volume-high text-2xl text-teal-400\"></i>\n                        <span class=\"text-xs font-black text-white block\">Hoparlör</span>\n                    </button>\n\n                    <button onclick=\"document.getElementById('slide9-fb').innerText = '🎧 KULAKLIK: Sesi sadece takan kişinin duymasını sağlayan kişisel ses çıkış cihazıdır.'; sounds.playClick();\" class=\"p-3 bg-slate-850 hover:bg-slate-700 border border-slate-700 hover:border-purple-400 rounded-xl text-center space-y-1 transition-all\">\n                        <i class=\"fa-solid fa-headphones text-2xl text-purple-400\"></i>\n                        <span class=\"text-xs font-black text-white block\">Kulaklık</span>\n                    </button>\n\n                    <button onclick=\"document.getElementById('slide9-fb').innerText = '🎙️ MİKROFON: Konuştuğumuz sesleri bilgisayara aktararak kaydetmeyi veya iletmeyi sağlar.'; sounds.playClick();\" class=\"p-3 bg-slate-850 hover:bg-slate-700 border border-slate-700 hover:border-rose-400 rounded-xl text-center space-y-1 transition-all\">\n                        <i class=\"fa-solid fa-microphone text-2xl text-rose-400\"></i>\n                        <span class=\"text-xs font-black text-white block\">Mikrofon</span>\n                    </button>\n\n                    <button onclick=\"document.getElementById('slide9-fb').innerText = '📷 WEB KAMERASI: Canlı video görüntümüzü bilgisayara aktararak görüntülü görüşmeyi sağlar.'; sounds.playClick();\" class=\"p-3 bg-slate-850 hover:bg-slate-700 border border-slate-700 hover:border-blue-400 rounded-xl text-center space-y-1 transition-all\">\n                        <i class=\"fa-solid fa-video text-2xl text-blue-400\"></i>\n                        <span class=\"text-xs font-black text-white block\">Web Kamerası</span>\n                    </button>\n\n                    <button onclick=\"document.getElementById('slide9-fb').innerText = '🌐 MODEM: Bilgisayarı telefon veya fiber kablosuyla internet ağına bağlayan cihazdır.'; sounds.playClick();\" class=\"p-3 bg-slate-850 hover:bg-slate-700 border border-slate-700 hover:border-cyan-400 rounded-xl text-center space-y-1 transition-all\">\n                        <i class=\"fa-solid fa-wifi text-2xl text-cyan-400\"></i>\n                        <span class=\"text-xs font-black text-white block\">Modem</span>\n                    </button>\n\n                    <button onclick=\"document.getElementById('slide9-fb').innerText = '🕹️ JOYSTICK (OYUN KOLU): Bilgisayarda oyun oynarken yön ve hareket komutlarını hızlı iletir.'; sounds.playClick();\" class=\"p-3 bg-slate-850 hover:bg-slate-700 border border-slate-700 hover:border-yellow-400 rounded-xl text-center space-y-1 transition-all\">\n                        <i class=\"fa-solid fa-gamepad text-2xl text-yellow-400\"></i>\n                        <span class=\"text-xs font-black text-white block\">Joystick</span>\n                    </button>\n                </div>\n\n                <div id=\"slide9-fb\" class=\"p-3.5 bg-slate-900 rounded-2xl border-2 border-indigo-500/50 text-yellow-300 text-xs sm:text-sm font-bold text-center min-h-[48px] flex items-center justify-center\">\n                    👆 Cihazlara dokunarak görevlerini oku!\n                </div>\n            </div>\n        "
    },
    {
        "id": 10,
        "title": "DAHA FAZLA DIŞ DONANIM ÖRNEĞİ 🔌",
        "subtitle": "Günlük Yaşamda ve Farklı Alanlarda Karşılaştığımız Cihazlar",
        "topic": "5. KONU - 1 • BTY.5.1.5",
        "badge": "ÇEVRE BİRİMLERİ",
        "icon": "fa-solid fa-plug-circle-bolt",
        "bgColor": "from-blue-950 via-slate-900 to-indigo-950",
        "gradient": "from-blue-950 via-slate-900 to-indigo-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-4 my-auto py-2\">\n                <div class=\"grid grid-cols-2 sm:grid-cols-3 gap-3 text-left\">\n                    <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-slate-700 space-y-1.5\">\n                        <div class=\"flex items-center gap-2 text-cyan-400 font-bold text-sm\">\n                            <i class=\"fa-solid fa-chalkboard-user text-lg\"></i>\n                            <span>Projeksiyon Cihazı</span>\n                        </div>\n                        <p class=\"text-xs text-slate-300\">Bilgisayardaki görüntüyü dev perdeye veya duvara yansıtır (Sınıflarda ve sinemalarda).</p>\n                    </div>\n\n                    <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-slate-700 space-y-1.5\">\n                        <div class=\"flex items-center gap-2 text-purple-400 font-bold text-sm\">\n                            <i class=\"fa-solid fa-pen-nib text-lg\"></i>\n                            <span>Çizim Tableti (Grafik)</span>\n                        </div>\n                        <p class=\"text-xs text-slate-300\">Özel kalemiyle yapılan çizimleri ve el yazılarını doğrudan bilgisayara aktarır.</p>\n                    </div>\n\n                    <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-slate-700 space-y-1.5\">\n                        <div class=\"flex items-center gap-2 text-emerald-400 font-bold text-sm\">\n                            <i class=\"fa-solid fa-hand-pointer text-lg\"></i>\n                            <span>Dokunmatik Yüzey (Touchpad)</span>\n                        </div>\n                        <p class=\"text-xs text-slate-300\">Dizüstü bilgisayarlarda parmak dokunuşuyla fare imlecini yönetmeyi sağlar.</p>\n                    </div>\n\n                    <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-slate-700 space-y-1.5\">\n                        <div class=\"flex items-center gap-2 text-amber-400 font-bold text-sm\">\n                            <i class=\"fa-solid fa-barcode text-lg\"></i>\n                            <span>Barkod Okuyucu</span>\n                        </div>\n                        <p class=\"text-xs text-slate-300\">Market kasalarında ürün üzerindeki siyah-beyaz çizgileri okuyup bilgisayara aktarır.</p>\n                    </div>\n\n                    <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-rose-400 space-y-1.5\">\n                        <div class=\"flex items-center gap-2 text-rose-300 font-bold text-sm\">\n                            <i class=\"fa-brands fa-usb text-lg\"></i>\n                            <span>USB Bellek (Flash Disk)</span>\n                        </div>\n                        <p class=\"text-xs text-slate-300\">Cepte taşınabilir küçük dijital hafıza kutusu! Bilgisayardan dosya alır ve verir.</p>\n                    </div>\n\n                    <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-indigo-400 space-y-1.5\">\n                        <div class=\"flex items-center gap-2 text-indigo-300 font-bold text-sm\">\n                            <i class=\"fa-solid fa-hard-drive text-lg\"></i>\n                            <span>Harici Disk (External HDD)</span>\n                        </div>\n                        <p class=\"text-xs text-slate-300\">Büyük boyutlu dosyaları ve yedekleri USB kablosuyla bilgisayarın dışında saklar.</p>\n                    </div>\n                </div>\n\n                <!-- Önemli Not Kutusu -->\n                <div class=\"p-3.5 bg-indigo-950/80 rounded-2xl border-2 border-indigo-400/50 flex items-start gap-3 text-left\">\n                    <div class=\"w-9 h-9 rounded-xl bg-indigo-500/30 text-yellow-300 flex items-center justify-center text-lg shrink-0 mt-0.5\">\n                        <i class=\"fa-solid fa-circle-info\"></i>\n                    </div>\n                    <p class=\"text-xs text-slate-200\">\n                        <strong>Önemli Kural:</strong> USB bellek ve harici disk gibi cihazlar kasaya dışarıdan takıldıkları için <strong>dış donanımdır</strong>. Ancak içlerine dosya kaydedilip okunduğu için veri akışında <strong>hem giriş hem çıkış</strong> birimi işlevi görürler!\n                    </p>\n                </div>\n            </div>\n        "
    },
    {
        "id": 11,
        "title": "GİRİŞ, ÇIKIŞ VE ÇİFT YÖNLÜ BİRİMLER 🔄",
        "subtitle": "Veri Alışverişindeki Görevine Göre 3 Büyük Sınıf",
        "topic": "5. KONU - 1 • BTY.5.1.5",
        "badge": "VERİ AKIŞI",
        "icon": "fa-solid fa-arrows-split-up-and-left",
        "bgColor": "from-slate-900 via-indigo-950 to-blue-900",
        "gradient": "from-slate-900 via-indigo-950 to-blue-900",
        "content": `
            <div class="max-w-5xl mx-auto space-y-3 my-auto py-1">
                <!-- Üst Görsel Şerit: Knolling Düzeninde Gerçek Çevre Birimleri -->
                <div class="relative rounded-2xl overflow-hidden border-2 border-indigo-400/50 shadow-xl max-h-36 sm:max-h-40 group">
                    <img src="assets/slides/giris_cikis_donanimlari.jpg" alt="Giriş ve Çıkış Donanımları" class="w-full h-36 sm:h-40 object-cover object-center group-hover:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-slate-950/90 flex flex-wrap items-center justify-between px-4 py-2 pointer-events-none gap-2">
                        <span class="px-3 py-1 bg-emerald-600/90 text-white font-black text-xs rounded-full border border-emerald-400/50 shadow-md">
                            🟢 Giriş: Klavye, Fare, Mikrofon, Kamera
                        </span>
                        <span class="px-3 py-1 bg-cyan-600/90 text-white font-black text-xs rounded-full border border-cyan-400/50 shadow-md">
                            🔵 Çıkış: Monitör, Kulaklık, Yazıcı
                        </span>
                        <span class="px-3 py-1 bg-purple-600/90 text-white font-black text-xs rounded-full border border-purple-400/50 shadow-md">
                            🟣 Çift Yönlü: USB Bellek
                        </span>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-left">
                    <!-- GİRİŞ BİRİMLERİ -->
                    <div class="p-3.5 bg-slate-850 rounded-2xl border-2 border-emerald-500/60 space-y-2 shadow-lg">
                        <div class="flex items-center gap-2 text-emerald-400 font-black text-xs sm:text-sm">
                            <i class="fa-solid fa-right-to-bracket text-base"></i>
                            <span>GİRİŞ BİRİMLERİ</span>
                        </div>
                        <p class="text-xs text-slate-300">
                            Bilgisayara dış dünyadan <strong>veri, ses, görüntü veya komut</strong> girmemizi sağlayan araçlardır.
                        </p>
                        <div class="p-2 bg-slate-900 rounded-xl border border-slate-700 text-xs space-y-0.5">
                            <p class="text-white font-bold">Örnekler:</p>
                            <p class="text-emerald-300">• Klavye • Fare • Mikrofon</p>
                            <p class="text-emerald-300">• Web Kamerası • Tarayıcı • Joystick</p>
                        </div>
                        <span class="text-[10px] text-slate-400 block text-center">Akış: Dış Dünya ➔ Bilgisayar</span>
                    </div>

                    <!-- ÇIKIŞ BİRİMLERİ -->
                    <div class="p-3.5 bg-slate-850 rounded-2xl border-2 border-cyan-500/60 space-y-2 shadow-lg">
                        <div class="flex items-center gap-2 text-cyan-400 font-black text-xs sm:text-sm">
                            <i class="fa-solid fa-arrow-up-right-from-square text-base"></i>
                            <span>ÇIKIŞ BİRİMLERİ</span>
                        </div>
                        <p class="text-xs text-slate-300">
                            Bilgisayarda işlenen bilgileri kullanıcıya <strong>görüntü, ses veya kağıt çıktısı</strong> olarak sunar.
                        </p>
                        <div class="p-2 bg-slate-900 rounded-xl border border-slate-700 text-xs space-y-0.5">
                            <p class="text-white font-bold">Örnekler:</p>
                            <p class="text-cyan-300">• Monitör (Ekran) • Hoparlör</p>
                            <p class="text-cyan-300">• Kulaklık • Yazıcı • Projeksiyon</p>
                        </div>
                        <span class="text-[10px] text-slate-400 block text-center">Akış: Bilgisayar ➔ Kullanıcı</span>
                    </div>

                    <!-- HEM GİRİŞ HEM ÇIKIŞ -->
                    <div class="p-3.5 bg-slate-850 rounded-2xl border-2 border-purple-500/60 space-y-2 shadow-lg">
                        <div class="flex items-center gap-2 text-purple-400 font-black text-xs sm:text-sm">
                            <i class="fa-solid fa-arrows-rotate text-base"></i>
                            <span>HEM GİRİŞ HEM ÇIKIŞ</span>
                        </div>
                        <p class="text-xs text-slate-300">
                            Aynı anda veya farklı zamanlarda <strong>hem veri alabilen hem de veri gönderebilen</strong> cihazlardır.
                        </p>
                        <div class="p-2 bg-slate-900 rounded-xl border border-slate-700 text-xs space-y-0.5">
                            <p class="text-white font-bold">Örnekler:</p>
                            <p class="text-purple-300">• Dokunmatik Ekran • Modem</p>
                            <p class="text-purple-300">• USB Bellek • Harici Disk</p>
                        </div>
                        <span class="text-[10px] text-slate-400 block text-center">Akış: Çift Yönlü İletişim 🔁</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        "id": 12,
        "title": "ÖRNEKLERLE İNCELEYELİM 🔍",
        "subtitle": "Gerçek Yaşam Senaryolarında Veri Akışını Tahmin Et!",
        "topic": "5. KONU - 1 • BTY.5.1.5",
        "badge": "SENARYOLAR",
        "icon": "fa-solid fa-magnifying-glass-chart",
        "bgColor": "from-blue-950 via-slate-900 to-indigo-950",
        "gradient": "from-blue-950 via-slate-900 to-indigo-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-3.5 my-auto py-2\">\n                <p class=\"text-xs sm:text-sm text-center text-slate-300 font-semibold\">\n                    Aşağıdaki durumlara tıkla; verinin bilgisayara girdiği mi yoksa çıktığı mı ortaya çıksın!\n                </p>\n\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-left\">\n                    <button onclick=\"window.toggleSlideAnswer('sc1-ans', null); sounds.playClick();\" class=\"p-3.5 bg-slate-850 hover:bg-slate-750 border-2 border-emerald-500/40 rounded-2xl space-y-1.5 transition-all\">\n                        <div class=\"flex items-center justify-between\">\n                            <span class=\"font-black text-white text-xs\">Klavyeyle Metin Yazmak</span>\n                            <i class=\"fa-solid fa-keyboard text-emerald-400\"></i>\n                        </div>\n                        <p class=\"text-[11px] text-slate-400\">Öğrenci ne yapıyor? Tuşlara basıyor.</p>\n                        <div id=\"sc1-ans\" class=\"hidden p-2 bg-emerald-950 rounded-xl text-emerald-300 text-xs font-bold border border-emerald-500\">\n                            🟢 GİRİŞ BİRİMİ: Harf komutları bilgisayara içeri girer.\n                        </div>\n                    </button>\n\n                    <button onclick=\"window.toggleSlideAnswer('sc2-ans', null); sounds.playClick();\" class=\"p-3.5 bg-slate-850 hover:bg-slate-750 border-2 border-emerald-500/40 rounded-2xl space-y-1.5 transition-all\">\n                        <div class=\"flex items-center justify-between\">\n                            <span class=\"font-black text-white text-xs\">Fareyle Simge Seçmek</span>\n                            <i class=\"fa-solid fa-computer-mouse text-emerald-400\"></i>\n                        </div>\n                        <p class=\"text-[11px] text-slate-400\">Öğrenci ne yapıyor? Tıklama yapıyor.</p>\n                        <div id=\"sc2-ans\" class=\"hidden p-2 bg-emerald-950 rounded-xl text-emerald-300 text-xs font-bold border border-emerald-500\">\n                            🟢 GİRİŞ BİRİMİ: Tıklama ve koordinat bilgisi bilgisayara girer.\n                        </div>\n                    </button>\n\n                    <button onclick=\"window.toggleSlideAnswer('sc3-ans', null); sounds.playClick();\" class=\"p-3.5 bg-slate-850 hover:bg-slate-750 border-2 border-emerald-500/40 rounded-2xl space-y-1.5 transition-all\">\n                        <div class=\"flex items-center justify-between\">\n                            <span class=\"font-black text-white text-xs\">Mikrofonla Ses Kaydetmek</span>\n                            <i class=\"fa-solid fa-microphone text-emerald-400\"></i>\n                        </div>\n                        <p class=\"text-[11px] text-slate-400\">Öğrenci ne yapıyor? Şarkı söylüyor.</p>\n                        <div id=\"sc3-ans\" class=\"hidden p-2 bg-emerald-950 rounded-xl text-emerald-300 text-xs font-bold border border-emerald-500\">\n                            🟢 GİRİŞ BİRİMİ: Ses dalgaları dijital veriye dönüşüp içeri girer.\n                        </div>\n                    </button>\n\n                    <button onclick=\"window.toggleSlideAnswer('sc4-ans', null); sounds.playClick();\" class=\"p-3.5 bg-slate-850 hover:bg-slate-750 border-2 border-cyan-500/40 rounded-2xl space-y-1.5 transition-all\">\n                        <div class=\"flex items-center justify-between\">\n                            <span class=\"font-black text-white text-xs\">Monitörde Film İzlemek</span>\n                            <i class=\"fa-solid fa-desktop text-cyan-400\"></i>\n                        </div>\n                        <p class=\"text-[11px] text-slate-400\">Kullanıcı ne yapıyor? Ekrana bakıyor.</p>\n                        <div id=\"sc4-ans\" class=\"hidden p-2 bg-cyan-950 rounded-xl text-cyan-300 text-xs font-bold border border-cyan-500\">\n                            🔵 ÇIKIŞ BİRİMİ: İşlenen pikseller kullanıcıya sunulur.\n                        </div>\n                    </button>\n\n                    <button onclick=\"window.toggleSlideAnswer('sc5-ans', null); sounds.playClick();\" class=\"p-3.5 bg-slate-850 hover:bg-slate-750 border-2 border-cyan-500/40 rounded-2xl space-y-1.5 transition-all\">\n                        <div class=\"flex items-center justify-between\">\n                            <span class=\"font-black text-white text-xs\">Yazıcıyla Belge Basmak</span>\n                            <i class=\"fa-solid fa-print text-cyan-400\"></i>\n                        </div>\n                        <p class=\"text-[11px] text-slate-400\">Kullanıcı ne yapıyor? Kağıt çıktı alıyor.</p>\n                        <div id=\"sc5-ans\" class=\"hidden p-2 bg-cyan-950 rounded-xl text-cyan-300 text-xs font-bold border border-cyan-500\">\n                            🔵 ÇIKIŞ BİRİMİ: Dijital belge basılarak dışarı verilir.\n                        </div>\n                    </button>\n\n                    <button onclick=\"window.toggleSlideAnswer('sc6-ans', null); sounds.playClick();\" class=\"p-3.5 bg-slate-850 hover:bg-slate-750 border-2 border-purple-500/40 rounded-2xl space-y-1.5 transition-all\">\n                        <div class=\"flex items-center justify-between\">\n                            <span class=\"font-black text-white text-xs\">USB Belleğe Dosya Kopyalamak</span>\n                            <i class=\"fa-brands fa-usb text-purple-400\"></i>\n                        </div>\n                        <p class=\"text-[11px] text-slate-400\">Dosya yazılıyor ve içinden okunuyor.</p>\n                        <div id=\"sc6-ans\" class=\"hidden p-2 bg-purple-950 rounded-xl text-purple-300 text-xs font-bold border border-purple-500\">\n                            🟣 HEM GİRİŞ HEM ÇIKIŞ: İki yönlü okuma ve yazma yapılır.\n                        </div>\n                    </button>\n                </div>\n            </div>\n        "
    },
    {
        "id": 13,
        "title": "HANGİ TÜRDE? – SINIFLANDIRMA OYUNU 🎮",
        "subtitle": "Ekrana Gelen Cihazı Doğru Kategoriye Gönder!",
        "topic": "5. KONU - 1 • BTY.5.1.5",
        "badge": "OYUN",
        "icon": "fa-solid fa-gamepad",
        "bgColor": "from-slate-900 via-purple-950 to-indigo-950",
        "gradient": "from-slate-900 via-purple-950 to-indigo-950",
        "content": "\n            <div class=\"max-w-4xl mx-auto space-y-4 my-auto py-2 text-center\">\n                <!-- Oyun Alanı -->\n                <div class=\"p-6 bg-slate-900/90 rounded-3xl border-2 border-indigo-400/60 shadow-2xl space-y-4\">\n                    <div class=\"flex items-center justify-between text-xs font-bold text-slate-400 border-b border-slate-800 pb-2\">\n                        <span id=\"slide13-counter\" class=\"text-yellow-400\">Cihaz: 1 / 10</span>\n                        <span>Akıllı Tahta Etkileşimi</span>\n                    </div>\n\n                    <div class=\"py-3 space-y-2\">\n                        <div id=\"slide13-icon-wrap\" class=\"w-20 h-20 rounded-2xl bg-indigo-500/20 text-yellow-300 flex items-center justify-center text-4xl mx-auto shadow-inner border border-indigo-400/30\">\n                            <i id=\"slide13-icon\" class=\"fa-solid fa-keyboard\"></i>\n                        </div>\n                        <h2 id=\"slide13-title\" class=\"text-2xl sm:text-3xl font-black text-white\">\n                            Klavye\n                        </h2>\n                        <p id=\"slide13-hint\" class=\"text-xs text-indigo-200\">\n                            “Üzerindeki tuşlarla metin ve komut girmemizi sağlar.”\n                        </p>\n                    </div>\n\n                    <!-- 3 Büyük Seçim Butonu -->\n                    <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2\">\n                        <button onclick=\"window.slide13Game.check('giris')\" class=\"p-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm sm:text-base rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2\">\n                            <i class=\"fa-solid fa-right-to-bracket\"></i>\n                            <span>GİRİŞ</span>\n                        </button>\n\n                        <button onclick=\"window.slide13Game.check('cikis')\" class=\"p-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-black text-sm sm:text-base rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2\">\n                            <i class=\"fa-solid fa-arrow-up-right-from-square\"></i>\n                            <span>ÇIKIŞ</span>\n                        </button>\n\n                        <button onclick=\"window.slide13Game.check('cift')\" class=\"p-3.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-black text-sm sm:text-base rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2\">\n                            <i class=\"fa-solid fa-arrows-rotate\"></i>\n                            <span>HEM GİRİŞ / ÇIKIŞ</span>\n                        </button>\n                    </div>\n\n                    <!-- Geri Bildirim ve Sonraki Butonu -->\n                    <div id=\"slide13-fb\" class=\"hidden p-3.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-between gap-3 text-left animate-pop\">\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 14,
        "title": "DONANIM KARŞILAŞTIRMA TABLOSU 📊",
        "subtitle": "Veri Girişi mi, Çıkışı mı, Yoksa Her İkisi mi?",
        "topic": "5. KONU - 1 • BTY.5.1.5",
        "badge": "ANALİZ",
        "icon": "fa-solid fa-table-list",
        "bgColor": "from-blue-950 via-slate-900 to-indigo-950",
        "gradient": "from-blue-950 via-slate-900 to-indigo-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-4 my-auto py-2\">\n                <div class=\"overflow-x-auto rounded-2xl border-2 border-indigo-500/40 shadow-2xl bg-slate-900/90\">\n                    <table class=\"w-full text-left text-xs sm:text-sm\">\n                        <thead class=\"bg-indigo-950/90 text-yellow-300 font-black border-b border-indigo-500/40\">\n                            <tr>\n                                <th class=\"p-3\">Donanım Birimi</th>\n                                <th class=\"p-3 text-center\">Veri Girişi</th>\n                                <th class=\"p-3 text-center\">Veri Çıkışı</th>\n                                <th class=\"p-3 text-center\">Çift Yönlü</th>\n                                <th class=\"p-3\">Kısa Görev Açıklaması</th>\n                            </tr>\n                        </thead>\n                        <tbody class=\"divide-y divide-slate-800 text-slate-200 font-medium\">\n                            <tr class=\"hover:bg-slate-850\">\n                                <td class=\"p-3 font-black text-white flex items-center gap-2\">\n                                    <i class=\"fa-solid fa-keyboard text-emerald-400\"></i> Klavye\n                                </td>\n                                <td class=\"p-3 text-center text-emerald-400 font-bold\">✅ VAR</td>\n                                <td class=\"p-3 text-center text-rose-400\">❌ YOK</td>\n                                <td class=\"p-3 text-center text-slate-500\">-</td>\n                                <td class=\"p-3 text-xs\">Yazı, sayı ve komutları bilgisayara aktarır.</td>\n                            </tr>\n                            <tr class=\"hover:bg-slate-850\">\n                                <td class=\"p-3 font-black text-white flex items-center gap-2\">\n                                    <i class=\"fa-solid fa-desktop text-cyan-400\"></i> Monitör\n                                </td>\n                                <td class=\"p-3 text-center text-rose-400\">❌ YOK</td>\n                                <td class=\"p-3 text-center text-cyan-400 font-bold\">✅ VAR</td>\n                                <td class=\"p-3 text-center text-slate-500\">-</td>\n                                <td class=\"p-3 text-xs\">İşlenen görüntüleri kullanıcıya yansıtır.</td>\n                            </tr>\n                            <tr class=\"hover:bg-slate-850\">\n                                <td class=\"p-3 font-black text-white flex items-center gap-2\">\n                                    <i class=\"fa-solid fa-microphone text-emerald-400\"></i> Mikrofon\n                                </td>\n                                <td class=\"p-3 text-center text-emerald-400 font-bold\">✅ VAR</td>\n                                <td class=\"p-3 text-center text-rose-400\">❌ YOK</td>\n                                <td class=\"p-3 text-center text-slate-500\">-</td>\n                                <td class=\"p-3 text-xs\">Ses dalgalarını dijital veriye dönüştürüp kaydeder.</td>\n                            </tr>\n                            <tr class=\"hover:bg-slate-850\">\n                                <td class=\"p-3 font-black text-white flex items-center gap-2\">\n                                    <i class=\"fa-solid fa-volume-high text-cyan-400\"></i> Hoparlör\n                                </td>\n                                <td class=\"p-3 text-center text-rose-400\">❌ YOK</td>\n                                <td class=\"p-3 text-center text-cyan-400 font-bold\">✅ VAR</td>\n                                <td class=\"p-3 text-center text-slate-500\">-</td>\n                                <td class=\"p-3 text-xs\">Bilgisayardaki sesleri duymamızı sağlar.</td>\n                            </tr>\n                            <tr class=\"hover:bg-slate-850\">\n                                <td class=\"p-3 font-black text-white flex items-center gap-2\">\n                                    <i class=\"fa-brands fa-usb text-purple-400\"></i> USB Bellek\n                                </td>\n                                <td class=\"p-3 text-center text-purple-300 font-bold\">✅ (Okuma)</td>\n                                <td class=\"p-3 text-center text-purple-300 font-bold\">✅ (Yazma)</td>\n                                <td class=\"p-3 text-center text-purple-400 font-bold\">EVET 🔁</td>\n                                <td class=\"p-3 text-xs\">Verileri depolar, hem okunur hem yazılır.</td>\n                            </tr>\n                            <tr class=\"hover:bg-slate-850\">\n                                <td class=\"p-3 font-black text-white flex items-center gap-2\">\n                                    <i class=\"fa-solid fa-mobile-screen text-purple-400\"></i> Dokunmatik Ekran\n                                </td>\n                                <td class=\"p-3 text-center text-purple-300 font-bold\">✅ (Dokunma)</td>\n                                <td class=\"p-3 text-center text-purple-300 font-bold\">✅ (Görüntü)</td>\n                                <td class=\"p-3 text-center text-purple-400 font-bold\">EVET 🔁</td>\n                                <td class=\"p-3 text-xs\">Hem görüntüyü sunar hem de dokunuşla komut alır.</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        "
    },
    {
        "id": 15,
        "title": "GÜNLÜK YAŞAMDA DONANIM KOMBİNASYONLARI 🧩",
        "subtitle": "Hangi İşi Yaparken Hangi Donanım Parçalarını Kullanıyoruz?",
        "topic": "5. KONU - 1 • BTY.5.1.5",
        "badge": "HAYATTAN",
        "icon": "fa-solid fa-puzzle-piece",
        "bgColor": "from-slate-900 via-indigo-950 to-blue-900",
        "gradient": "from-slate-900 via-indigo-950 to-blue-900",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-4 my-auto py-2\">\n                <p class=\"text-xs sm:text-sm text-center text-slate-300 font-semibold\">\n                    Aşağıdaki günlük aktivitelere dokun; arka planda çalışan donanım takımını gör!\n                </p>\n\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-left\">\n                    <button onclick=\"window.toggleSlideAnswer('act1', null); sounds.playClick();\" class=\"p-3.5 bg-slate-850 hover:bg-slate-750 border-2 border-indigo-500/40 rounded-2xl space-y-1.5 transition-all\">\n                        <div class=\"flex items-center justify-between\">\n                            <span class=\"font-black text-white text-xs sm:text-sm\">1. Oyun Oynamak</span>\n                            <i class=\"fa-solid fa-gamepad text-purple-400\"></i>\n                        </div>\n                        <p class=\"text-[11px] text-slate-400\">Hangi donanımlar sahnede?</p>\n                        <div id=\"act1\" class=\"hidden p-2.5 bg-slate-900 rounded-xl text-yellow-300 text-xs font-bold border border-yellow-400/40 space-y-1\">\n                            <p>🎮 <strong>Giriş:</strong> Klavye, Fare veya Oyun Kolu</p>\n                            <p>🖥️ <strong>Çıkış:</strong> Monitör, Kulaklık / Hoparlör</p>\n                            <p>⚡ <strong>İç Donanım:</strong> Ekran Kartı, İşlemci, RAM</p>\n                        </div>\n                    </button>\n\n                    <button onclick=\"window.toggleSlideAnswer('act2', null); sounds.playClick();\" class=\"p-3.5 bg-slate-850 hover:bg-slate-750 border-2 border-blue-500/40 rounded-2xl space-y-1.5 transition-all\">\n                        <div class=\"flex items-center justify-between\">\n                            <span class=\"font-black text-white text-xs sm:text-sm\">2. Ödev Yazıp Çıkarmak</span>\n                            <i class=\"fa-solid fa-file-pen text-blue-400\"></i>\n                        </div>\n                        <p class=\"text-[11px] text-slate-400\">Hangi donanımlar sahnede?</p>\n                        <div id=\"act2\" class=\"hidden p-2.5 bg-slate-900 rounded-xl text-cyan-300 text-xs font-bold border border-cyan-400/40 space-y-1\">\n                            <p>⌨️ <strong>Giriş:</strong> Klavye, Fare</p>\n                            <p>🖨️ <strong>Çıkış:</strong> Monitör, Yazıcı</p>\n                            <p>💾 <strong>Kayıt:</strong> SSD veya Sabit Disk</p>\n                        </div>\n                    </button>\n\n                    <button onclick=\"window.toggleSlideAnswer('act3', null); sounds.playClick();\" class=\"p-3.5 bg-slate-850 hover:bg-slate-750 border-2 border-teal-500/40 rounded-2xl space-y-1.5 transition-all\">\n                        <div class=\"flex items-center justify-between\">\n                            <span class=\"font-black text-white text-xs sm:text-sm\">3. Müzik Dinlemek</span>\n                            <i class=\"fa-solid fa-music text-teal-400\"></i>\n                        </div>\n                        <p class=\"text-[11px] text-slate-400\">Hangi donanımlar sahnede?</p>\n                        <div id=\"act3\" class=\"hidden p-2.5 bg-slate-900 rounded-xl text-teal-300 text-xs font-bold border border-teal-400/40 space-y-1\">\n                            <p>🎧 <strong>Çıkış:</strong> Kulaklık veya Hoparlör</p>\n                            <p>🎶 <strong>İç Donanım:</strong> Ses Kartı, İşlemci</p>\n                            <p>🖱️ <strong>Kontrol:</strong> Fare ile şarkı seçimi</p>\n                        </div>\n                    </button>\n\n                    <button onclick=\"window.toggleSlideAnswer('act4', null); sounds.playClick();\" class=\"p-3.5 bg-slate-850 hover:bg-slate-750 border-2 border-emerald-500/40 rounded-2xl space-y-1.5 transition-all\">\n                        <div class=\"flex items-center justify-between\">\n                            <span class=\"font-black text-white text-xs sm:text-sm\">4. E-Posta Göndermek</span>\n                            <i class=\"fa-solid fa-envelope text-emerald-400\"></i>\n                        </div>\n                        <p class=\"text-[11px] text-slate-400\">Hangi donanımlar sahnede?</p>\n                        <div id=\"act4\" class=\"hidden p-2.5 bg-slate-900 rounded-xl text-emerald-300 text-xs font-bold border border-emerald-400/40 space-y-1\">\n                            <p>⌨️ <strong>Giriş:</strong> Klavye ile metin yazma</p>\n                            <p>🖥️ <strong>Çıkış:</strong> Monitörde kontrol</p>\n                            <p>🌐 <strong>İletişim:</strong> Ağ Kartı ve Modem</p>\n                        </div>\n                    </button>\n\n                    <button onclick=\"window.toggleSlideAnswer('act5', null); sounds.playClick();\" class=\"p-3.5 bg-slate-850 hover:bg-slate-750 border-2 border-rose-500/40 rounded-2xl space-y-1.5 transition-all\">\n                        <div class=\"flex items-center justify-between\">\n                            <span class=\"font-black text-white text-xs sm:text-sm\">5. Görüntülü Görüşme</span>\n                            <i class=\"fa-solid fa-video text-rose-400\"></i>\n                        </div>\n                        <p class=\"text-[11px] text-slate-400\">Hangi donanımlar sahnede?</p>\n                        <div id=\"act5\" class=\"hidden p-2.5 bg-slate-900 rounded-xl text-rose-300 text-xs font-bold border border-rose-400/40 space-y-1\">\n                            <p>📹 <strong>Giriş:</strong> Web Kamerası, Mikrofon</p>\n                            <p>🔊 <strong>Çıkış:</strong> Monitör, Hoparlör</p>\n                            <p>🌐 <strong>İletişim:</strong> Ağ Kartı, İnternet Modemi</p>\n                        </div>\n                    </button>\n\n                    <button onclick=\"window.toggleSlideAnswer('act6', null); sounds.playClick();\" class=\"p-3.5 bg-slate-850 hover:bg-slate-750 border-2 border-amber-500/40 rounded-2xl space-y-1.5 transition-all\">\n                        <div class=\"flex items-center justify-between\">\n                            <span class=\"font-black text-white text-xs sm:text-sm\">6. Fotoğraf Çekip Yüklemek</span>\n                            <i class=\"fa-solid fa-camera text-amber-400\"></i>\n                        </div>\n                        <p class=\"text-[11px] text-slate-400\">Hangi donanımlar sahnede?</p>\n                        <div id=\"act6\" class=\"hidden p-2.5 bg-slate-900 rounded-xl text-amber-300 text-xs font-bold border border-amber-400/40 space-y-1\">\n                            <p>📸 <strong>Giriş:</strong> Kamera, Hafıza Kartı Okuyucu</p>\n                            <p>💾 <strong>Kayıt:</strong> SSD veya Sabit Disk</p>\n                            <p>🖥️ <strong>İzleme:</strong> Monitör</p>\n                        </div>\n                    </button>\n                </div>\n            </div>\n        "
    },
    {
        "id": 16,
        "title": "BİLGİSAYARIN ÇALIŞMA DÖNGÜSÜ 🔄",
        "subtitle": "Veri Girişinden Çıkışa Kusursuz Dijital Akış",
        "topic": "5. KONU - 1 • BTY.5.1.5",
        "badge": "MANTIK",
        "icon": "fa-solid fa-network-wired",
        "bgColor": "from-blue-950 via-slate-900 to-indigo-950",
        "gradient": "from-blue-950 via-slate-900 to-indigo-950",
        "content": `
            <div class="max-w-5xl mx-auto space-y-3 my-auto py-1">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
                    <!-- Sol Taraf: Görsel Akış Şeması -->
                    <div class="md:col-span-5 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-2xl group relative bg-slate-950">
                        <img src="assets/slides/veri_isleme_dongusu.jpg" alt="Bilgisayarın Veri İşleme Döngüsü" class="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex flex-col justify-end p-3 pointer-events-none">
                            <span class="px-2.5 py-1 bg-cyan-500/90 text-white font-black text-xs rounded-lg shadow-md w-fit border border-cyan-300/40 mb-1">
                                ⚡ Veri İşleme Döngüsü
                            </span>
                            <p class="text-[11px] text-slate-200 font-semibold drop-shadow">
                                Giriş Verisi ➔ CPU İşlemci ➔ Depolama ➔ Monitör Çıktısı
                            </p>
                        </div>
                    </div>

                    <!-- Sağ Taraf: 4 Adım -->
                    <div class="md:col-span-7 grid grid-cols-2 gap-2.5 text-left">
                        <div class="p-3 bg-slate-850 rounded-2xl border-2 border-emerald-500/60 space-y-1 shadow-lg">
                            <div class="flex items-center justify-between">
                                <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-black text-[10px] rounded-full">1. ADIM</span>
                                <i class="fa-solid fa-keyboard text-emerald-400"></i>
                            </div>
                            <h4 class="text-xs sm:text-sm font-black text-white">GİRİŞ (Input)</h4>
                            <p class="text-[11px] text-slate-300 leading-snug">Kullanıcı klavye, fare veya mikrofonla veriyi sisteme gönderir.</p>
                        </div>

                        <div class="p-3 bg-slate-850 rounded-2xl border-2 border-cyan-500/60 space-y-1 shadow-lg">
                            <div class="flex items-center justify-between">
                                <span class="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 font-black text-[10px] rounded-full">2. ADIM</span>
                                <i class="fa-solid fa-microchip text-cyan-400"></i>
                            </div>
                            <h4 class="text-xs sm:text-sm font-black text-white">İŞLEME (Process)</h4>
                            <p class="text-[11px] text-slate-300 leading-snug">İşlemci (CPU) ve RAM gelen veriyi ışık hızında hesaplar ve çözer.</p>
                        </div>

                        <div class="p-3 bg-slate-850 rounded-2xl border-2 border-purple-500/60 space-y-1 shadow-lg">
                            <div class="flex items-center justify-between">
                                <span class="px-2 py-0.5 bg-purple-500/20 text-purple-300 font-black text-[10px] rounded-full">3. ADIM</span>
                                <i class="fa-solid fa-database text-purple-400"></i>
                            </div>
                            <h4 class="text-xs sm:text-sm font-black text-white">SAKLAMA (Storage)</h4>
                            <p class="text-[11px] text-slate-300 leading-snug">Gerektiğinde SSD veya Sabit Diske kalıcı olarak kaydedilir.</p>
                        </div>

                        <div class="p-3 bg-slate-850 rounded-2xl border-2 border-amber-500/60 space-y-1 shadow-lg">
                            <div class="flex items-center justify-between">
                                <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 font-black text-[10px] rounded-full">4. ADIM</span>
                                <i class="fa-solid fa-desktop text-amber-400"></i>
                            </div>
                            <h4 class="text-xs sm:text-sm font-black text-white">ÇIKIŞ (Output)</h4>
                            <p class="text-[11px] text-slate-300 leading-snug">Ekranda görüntü, hoparlörde ses veya yazıcıda çıktı olarak sunulur.</p>
                        </div>
                    </div>
                </div>

                <div class="p-3 bg-slate-900/90 rounded-2xl border border-indigo-500/40 text-center text-xs sm:text-sm text-yellow-300 font-bold">
                    💡 Formül: <span class="text-white">Veri Girişi</span> ➔ <span class="text-cyan-300">İşlemci Analizi</span> ➔ <span class="text-purple-300">Depolama</span> ➔ <span class="text-emerald-300">Kullanıcıya Çıkış</span>
                </div>
            </div>
        `
    },
    {
        "id": 17,
        "title": "UNUTMA! DERSİN ALTIN BİLGİLERİ ⭐",
        "subtitle": "Sınavda ve Hayatta Bilmen Gereken 6 Kritik Madde",
        "topic": "5. KONU - 1 • BTY.5.1.5",
        "badge": "ÖZET KURALLAR",
        "icon": "fa-solid fa-star",
        "bgColor": "from-slate-900 via-indigo-950 to-blue-900",
        "gradient": "from-slate-900 via-indigo-950 to-blue-900",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-3.5 my-auto py-2 text-left\">\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3\">\n                    <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-blue-500/40 flex items-start gap-3\">\n                        <div class=\"w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-lg shrink-0\">\n                            1\n                        </div>\n                        <div>\n                            <h4 class=\"text-xs sm:text-sm font-black text-white\">Bilgisayar Elektronik Bir Cihazdır</h4>\n                            <p class=\"text-xs text-slate-300\">Verileri işler, saklar ve komutlarımıza göre sonuç üretir.</p>\n                        </div>\n                    </div>\n\n                    <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-purple-500/40 flex items-start gap-3\">\n                        <div class=\"w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-lg shrink-0\">\n                            2\n                        </div>\n                        <div>\n                            <h4 class=\"text-xs sm:text-sm font-black text-white\">Donanım Fiziksel Parçalardır</h4>\n                            <p class=\"text-xs text-slate-300\">Elle tutabildiğimiz, gözle görebildiğimiz tüm aygıtlar donanımdır.</p>\n                        </div>\n                    </div>\n\n                    <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-amber-500/40 flex items-start gap-3\">\n                        <div class=\"w-9 h-9 rounded-xl bg-amber-500/20 text-yellow-300 flex items-center justify-center text-lg shrink-0\">\n                            3\n                        </div>\n                        <div>\n                            <h4 class=\"text-xs sm:text-sm font-black text-white\">İç ve Dış Donanım Konum Belirtir</h4>\n                            <p class=\"text-xs text-slate-300\">Kasanın içinde olanlar iç donanım, dışına bağlananlar dış donanımdır.</p>\n                        </div>\n                    </div>\n\n                    <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-emerald-500/40 flex items-start gap-3\">\n                        <div class=\"w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg shrink-0\">\n                            4\n                        </div>\n                        <div>\n                            <h4 class=\"text-xs sm:text-sm font-black text-white\">Giriş Birimleri Bilgisayara Veri Taşır</h4>\n                            <p class=\"text-xs text-slate-300\">Klavye, fare, mikrofon gibi cihazlar bilgiyi içeri aktarır.</p>\n                        </div>\n                    </div>\n\n                    <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-cyan-500/40 flex items-start gap-3\">\n                        <div class=\"w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-lg shrink-0\">\n                            5\n                        </div>\n                        <div>\n                            <h4 class=\"text-xs sm:text-sm font-black text-white\">Çıkış Birimleri Sonucu Bize Verir</h4>\n                            <p class=\"text-xs text-slate-300\">Monitör, yazıcı, hoparlör gibi cihazlar sonucu dışa aktarır.</p>\n                        </div>\n                    </div>\n\n                    <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-rose-500/40 flex items-start gap-3\">\n                        <div class=\"w-9 h-9 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-lg shrink-0\">\n                            6\n                        </div>\n                        <div>\n                            <h4 class=\"text-xs sm:text-sm font-black text-white\">Bazı Birimler Çift Yönlüdür</h4>\n                            <p class=\"text-xs text-slate-300\">Dokunmatik ekran ve USB bellek hem veri alır hem veri gönderir.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 18,
        "title": "MİNİ TEST – KENDİNİ DENE! 📝",
        "subtitle": "5 Kısa Soruda Donanım Bilgini Test Et!",
        "topic": "5. KONU - 1 • BTY.5.1.5",
        "badge": "TEST",
        "icon": "fa-solid fa-circle-question",
        "bgColor": "from-blue-950 via-slate-900 to-indigo-950",
        "gradient": "from-blue-950 via-slate-900 to-indigo-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-3.5 my-auto py-2 text-left\">\n                <!-- Soru 1 -->\n                <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-indigo-500/40 space-y-2\">\n                    <p class=\"text-xs sm:text-sm font-bold text-white\">\n                        <span class=\"text-yellow-300 font-black\">1.</span> Bilgisayarın tüm işlemlerini yürüten ve 'beyin' olarak adlandırılan iç donanım hangisidir?\n                    </p>\n                    <div class=\"flex items-center gap-2 flex-wrap\">\n                        <button onclick=\"window.handleSlideOption('q1-fb', false, 'RAM geçici bellektir, beyin değildir.', this)\" class=\"px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-slate-200\">A) RAM Bellek</button>\n                        <button onclick=\"window.handleSlideOption('q1-fb', true, 'Tebrikler! İşlemci (CPU) bilgisayarın beynidir ve tüm komutları yürütür.', this)\" class=\"px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-slate-200\">B) İşlemci (CPU)</button>\n                        <button onclick=\"window.handleSlideOption('q1-fb', false, 'Sabit disk depolama birimidir.', this)\" class=\"px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-slate-200\">C) Sabit Disk (HDD)</button>\n                    </div>\n                    <div id=\"q1-fb\" class=\"hidden\"></div>\n                </div>\n\n                <!-- Soru 2 -->\n                <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-indigo-500/40 space-y-2\">\n                    <p class=\"text-xs sm:text-sm font-bold text-white\">\n                        <span class=\"text-yellow-300 font-black\">2.</span> Aşağıdakilerden hangisi doğrudan bir GİRİŞ birimidir?\n                    </p>\n                    <div class=\"flex items-center gap-2 flex-wrap\">\n                        <button onclick=\"window.handleSlideOption('q2-fb', false, 'Monitör görüntüyü sunar, çıkış birimidir.', this)\" class=\"px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-slate-200\">A) Monitör</button>\n                        <button onclick=\"window.handleSlideOption('q2-fb', true, 'Harika! Mikrofon sesimizi bilgisayara aktararak içeri veri girmesini sağlar.', this)\" class=\"px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-slate-200\">B) Mikrofon</button>\n                        <button onclick=\"window.handleSlideOption('q2-fb', false, 'Hoparlör sesi dışarı verir, çıkış birimidir.', this)\" class=\"px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-slate-200\">C) Hoparlör</button>\n                    </div>\n                    <div id=\"q2-fb\" class=\"hidden\"></div>\n                </div>\n\n                <!-- Soru 3 -->\n                <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-indigo-500/40 space-y-2\">\n                    <p class=\"text-xs sm:text-sm font-bold text-white\">\n                        <span class=\"text-yellow-300 font-black\">3.</span> Aşağıdakilerden hangisi bir ÇIKIŞ birimidir?\n                    </p>\n                    <div class=\"flex items-center gap-2 flex-wrap\">\n                        <button onclick=\"window.handleSlideOption('q3-fb', true, 'Süper! Yazıcı işlenen belgeleri kağıda basarak dışarı aktarır.', this)\" class=\"px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-slate-200\">A) Yazıcı (Printer)</button>\n                        <button onclick=\"window.handleSlideOption('q3-fb', false, 'Klavye yazı girmeyi sağlar, giriş birimidir.', this)\" class=\"px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-slate-200\">B) Klavye</button>\n                        <button onclick=\"window.handleSlideOption('q3-fb', false, 'Tarayıcı kağıttaki resmi bilgisayara aktarır, giriş birimidir.', this)\" class=\"px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-slate-200\">C) Tarayıcı</button>\n                    </div>\n                    <div id=\"q3-fb\" class=\"hidden\"></div>\n                </div>\n\n                <!-- Soru 4 -->\n                <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-indigo-500/40 space-y-2\">\n                    <p class=\"text-xs sm:text-sm font-bold text-white\">\n                        <span class=\"text-yellow-300 font-black\">4.</span> RAM bellek bilgisayar kapatıldığında verileri kalıcı olarak saklar mı?\n                    </p>\n                    <div class=\"flex items-center gap-2 flex-wrap\">\n                        <button onclick=\"window.handleSlideOption('q4-fb', false, 'Hayır! Kalıcı depolama Sabit Disk (HDD) ve SSD tarafından yapılır.', this)\" class=\"px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-slate-200\">A) Evet, asla silinmez</button>\n                        <button onclick=\"window.handleSlideOption('q4-fb', true, 'Doğru! RAM geçici bellektir; bilgisayar kapanınca içindeki veriler silinir.', this)\" class=\"px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-slate-200\">B) Hayır, geçicidir silinir</button>\n                    </div>\n                    <div id=\"q4-fb\" class=\"hidden\"></div>\n                </div>\n\n                <!-- Soru 5 -->\n                <div class=\"p-3.5 bg-slate-850 rounded-2xl border border-indigo-500/40 space-y-2\">\n                    <p class=\"text-xs sm:text-sm font-bold text-white\">\n                        <span class=\"text-yellow-300 font-black\">5.</span> Dokunmatik ekran neden HEM GİRİŞ HEM ÇIKIŞ birimidir?\n                    </p>\n                    <div class=\"flex items-center gap-2 flex-wrap\">\n                        <button onclick=\"window.handleSlideOption('q5-fb', true, 'Tebrikler! Hem görüntüyü sunar (çıkış) hem parmağımızla komut alır (giriş).', this)\" class=\"px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-slate-200\">A) Hem görüntüyü sunar hem dokunuşla komut alır</button>\n                        <button onclick=\"window.handleSlideOption('q5-fb', false, 'Kabloyla bağlanması giriş/çıkış sınıflandırmasını belirlemez.', this)\" class=\"px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-slate-200\">B) Sadece kabloyla kasaya bağlandığı için</button>\n                    </div>\n                    <div id=\"q5-fb\" class=\"hidden\"></div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 19,
        "title": "SIRA SENDE! – SINIF TARTIŞMASI 🗣️",
        "subtitle": "Fikirlerini Paylaş, Bilişim Dünyasını Yorumla!",
        "topic": "5. KONU - 1 • BTY.5.1.5",
        "badge": "TARTIŞMA",
        "icon": "fa-solid fa-lightbulb",
        "bgColor": "from-slate-900 via-indigo-950 to-purple-950",
        "gradient": "from-slate-900 via-indigo-950 to-purple-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-4 my-auto py-2\">\n                <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-left\">\n                    <!-- Soru 1 -->\n                    <div class=\"p-5 bg-slate-850 rounded-3xl border-2 border-yellow-400/50 space-y-3 shadow-xl\">\n                        <div class=\"flex items-center gap-2 text-yellow-300 font-black text-sm\">\n                            <span class=\"px-2.5 py-1 bg-yellow-400/20 rounded-xl\">SORU 1</span>\n                            <span>KİŞİSEL TERCİH</span>\n                        </div>\n                        <h3 class=\"text-base sm:text-lg font-black text-white leading-snug\">\n                            “Günlük hayatında en çok hangi donanım birimini kullanıyorsun? Neden?”\n                        </h3>\n                        <p class=\"text-xs text-slate-300\">\n                            Fare mi, dokunmatik ekran mı, klavye mi yoksa kulaklık mı? Hangisi olmadan bir gün bile bilgisayar kullanamazdın?\n                        </p>\n                        <button onclick=\"window.toggleSlideAnswer('q19-1-ans', null); sounds.playClick();\" class=\"px-4 py-2 bg-slate-800 hover:bg-slate-700 text-yellow-300 font-bold text-xs rounded-xl border border-slate-700 transition-all flex items-center gap-1.5\">\n                            <i class=\"fa-solid fa-comments\"></i> Tartışma İpuçlarını Aç\n                        </button>\n                        <div id=\"q19-1-ans\" class=\"hidden p-3 bg-slate-900 rounded-xl text-xs text-slate-200 border border-slate-700 space-y-1\">\n                            <p>💡 Telefon ve tablette en çok <strong>dokunmatik ekran</strong> kullanılır.</p>\n                            <p>💡 Oyun oynayanlar en çok <strong>fare ve kulaklık</strong> tercih eder.</p>\n                        </div>\n                    </div>\n\n                    <!-- Soru 2 -->\n                    <div class=\"p-5 bg-slate-850 rounded-3xl border-2 border-cyan-400/50 space-y-3 shadow-xl\">\n                        <div class=\"flex items-center gap-2 text-cyan-300 font-black text-sm\">\n                            <span class=\"px-2.5 py-1 bg-cyan-400/20 rounded-xl\">SORU 2</span>\n                            <span>BEYİN FIRTINASI</span>\n                        </div>\n                        <h3 class=\"text-base sm:text-lg font-black text-white leading-snug\">\n                            “Bilgisayarda klavye hiç olmasaydı hangi işlemleri yapmak zorlaşırdı?”\n                        </h3>\n                        <p class=\"text-xs text-slate-300\">\n                            Yerine hangi teknolojileri kullanabilirdik? Sesli komut mu, sanal klavye mi yoksa göz takibi mi?\n                        </p>\n                        <button onclick=\"window.toggleSlideAnswer('q19-2-ans', null); sounds.playClick();\" class=\"px-4 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-xs rounded-xl border border-slate-700 transition-all flex items-center gap-1.5\">\n                            <i class=\"fa-solid fa-lightbulb\"></i> Geleceğin Çözümlerini Gör\n                        </button>\n                        <div id=\"q19-2-ans\" class=\"hidden p-3 bg-slate-900 rounded-xl text-xs text-slate-200 border border-slate-700 space-y-1\">\n                            <p>🎤 <strong>Sesle Yazma:</strong> Mikrofon aracılığıyla konuşarak yazı yazdırma.</p>\n                            <p>👁️ <strong>Göz Takibi & Yapay Zekâ:</strong> Ekrana bakarak harfleri seçme.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 20,
        "title": "DERSİN ÖZETİ & TEBRİKLER! 🎓",
        "subtitle": "BİLGİSAYARI TANI, DONANIMI KEŞFET!",
        "topic": "5. KONU - 1 • BTY.5.1.5",
        "badge": "KAPANIŞ",
        "icon": "fa-solid fa-trophy",
        "bgColor": "from-slate-900 via-indigo-950 to-blue-900",
        "gradient": "from-slate-900 via-indigo-950 to-blue-900",
        "content": "\n            <div class=\"max-w-4xl mx-auto space-y-5 my-auto py-2 text-center\">\n                <div class=\"w-20 h-20 rounded-3xl bg-gradient-to-tr from-yellow-400 to-amber-500 text-slate-950 flex items-center justify-center text-4xl mx-auto shadow-2xl animate-bounce\" style=\"animation-duration: 2.5s;\">\n                    <i class=\"fa-solid fa-award\"></i>\n                </div>\n\n                <div class=\"space-y-1.5\">\n                    <span class=\"px-3.5 py-1 bg-emerald-500/20 text-emerald-300 font-black text-xs uppercase tracking-widest rounded-full border border-emerald-400/30\">\n                        DERS BAŞARIYLA TAMAMLANDI\n                    </span>\n                    <h2 class=\"text-3xl sm:text-4xl font-black text-white\">\n                        BİLGİSAYARI TANI, DONANIMI KEŞFET!\n                    </h2>\n                    <p class=\"text-xs sm:text-sm text-indigo-200 font-medium max-w-xl mx-auto\">\n                        Tebrikler! Bilgisayarın kasanın içindeki ve dışındaki tüm donanımlarını, giriş ve çıkış birimlerini başarıyla öğrendiniz.\n                    </p>\n                </div>\n\n                <!-- Hızlı Aksiyon Butonları -->\n                <div class=\"flex items-center justify-center gap-3 flex-wrap pt-2\">\n                    <button onclick=\"app.goToSlide(0); sounds.playClick();\" class=\"px-5 py-3 bg-slate-800 hover:bg-slate-700 text-yellow-300 font-black text-xs sm:text-sm rounded-xl border border-slate-600 shadow-lg transition-all flex items-center gap-2 active:scale-95\">\n                        <i class=\"fa-solid fa-rotate-left\"></i>\n                        <span>Sunuyu Baştan Başlat</span>\n                    </button>\n\n                    <button onclick=\"app.goToSlide(17); sounds.playClick();\" class=\"px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs sm:text-sm rounded-xl border border-indigo-400 shadow-lg transition-all flex items-center gap-2 active:scale-95\">\n                        <i class=\"fa-solid fa-circle-question\"></i>\n                        <span>Mini Teste Git</span>\n                    </button>\n\n                    <button onclick=\"app.switchTab('games'); sounds.playClick();\" class=\"px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-black text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center gap-2 active:scale-95\">\n                        <i class=\"fa-solid fa-gamepad\"></i>\n                        <span>Tekrar Oyunları 🎮</span>\n                    </button>\n                </div>\n\n                <div class=\"pt-3\">\n                    <span class=\"inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full text-slate-400 text-xs\">\n                        <i class=\"fa-solid fa-chalkboard-user text-yellow-400\"></i>\n                        <span>Öğretmen Bozok • Bozok Bilişim Portalı 2026</span>\n                    </span>\n                </div>\n            </div>\n        "
    }
],

    // ========================================================
    // 📄 2. YAZDIRILABİLİR DİJİTAL METİN & ÇALIŞMA KAĞIDI (4 SAYFA)
    // ========================================================
    worksheetDocs: {
        hasTwoPages: false,
        sayfa1Html: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <!-- Başlık & Bilgi Kartı -->
                <div class="border-b-2 border-indigo-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            5. KONU - 1 • BTY.5.1.5
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 1: BİLGİSAYAR VE DONANIM GENEL BAKIŞ
                        </h1>
                        <p class="text-xs text-indigo-300">Öğretmen Bozok • Bozok Bilişim Portalı 2026</p>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        Sayfa: 1 / 4
                    </span>
                </div>

                <!-- 1. BİLGİSAYAR NEDİR? -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-indigo-500/30 space-y-3">
                    <div class="flex items-center gap-2">
                        <span class="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black text-sm">1</span>
                        <h3 class="text-base font-black text-yellow-300">BİLGİSAYAR NEDİR?</h3>
                    </div>
                    <p class="text-sm leading-relaxed">
                        Kullanıcıdan aldığı verileri işleyen, saklayan, gerektiğinde geri getiren ve mantıksal işlemler sonucunda bilgi üreten elektronik cihaza <strong>bilgisayar</strong> denir.
                    </p>
                    <div class="p-3 bg-slate-900 rounded-xl border border-slate-700/80 flex items-center justify-around text-center text-xs font-bold gap-2">
                        <div class="text-emerald-400"><i class="fa-solid fa-arrow-right-to-bracket block text-lg mb-1"></i>1. GİRDİ (Veri Girişi)</div>
                        <div class="text-yellow-400">➔</div>
                        <div class="text-cyan-400"><i class="fa-solid fa-microchip block text-lg mb-1"></i>2. İŞLEM (CPU & Bellek)</div>
                        <div class="text-yellow-400">➔</div>
                        <div class="text-purple-400"><i class="fa-solid fa-desktop block text-lg mb-1"></i>3. ÇIKTI (Bilgi Sunumu)</div>
                        <div class="text-yellow-400">➔</div>
                        <div class="text-amber-400"><i class="fa-solid fa-hard-drive block text-lg mb-1"></i>4. DEPOLAMA (Kalıcı Saklama)</div>
                    </div>
                </div>

                <!-- 2. DONANIM NEDİR? -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-cyan-500/30 space-y-3">
                    <div class="flex items-center gap-2">
                        <span class="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-white font-black text-sm">2</span>
                        <h3 class="text-base font-black text-cyan-300">DONANIM (HARDWARE) NEDİR?</h3>
                    </div>
                    <p class="text-sm leading-relaxed">
                        Bilgisayarı oluşturan, elle tutabildiğimiz, gözle görebildiğimiz tüm fiziksel ve elektronik parçalara <strong>donanım</strong> denir.
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                        <div class="p-3 bg-slate-900/90 rounded-xl border border-indigo-400/30">
                            <h4 class="font-black text-indigo-300 text-sm mb-1"><i class="fa-solid fa-cube mr-1"></i>İç Donanım (Kasa İçi)</h4>
                            <p class="text-slate-300">Kasanın içinde bulunan ve bilgisayarın temel çalışma fonksiyonlarını üstlenen parçalardır.</p>
                            <span class="text-[11px] text-yellow-300 font-semibold block mt-1">Örnek: Anakart, İşlemci, RAM, Sabit Disk, Ekran Kartı, Güç Kaynağı.</span>
                        </div>
                        <div class="p-3 bg-slate-900/90 rounded-xl border border-emerald-400/30">
                            <h4 class="font-black text-emerald-300 text-sm mb-1"><i class="fa-solid fa-network-wired mr-1"></i>Dış Donanım (Çevre Birimleri)</h4>
                            <p class="text-slate-300">Kasanın dışında yer alan, kablolu veya kablosuz olarak kasaya bağlanan parçalardır.</p>
                            <span class="text-[11px] text-yellow-300 font-semibold block mt-1">Örnek: Klavye, Fare, Monitör, Yazıcı, Hoparlör, Web Kamerası.</span>
                        </div>
                    </div>
                </div>

                <!-- 3. VERİ AKIŞINA GÖRE DONANIMLAR -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-purple-500/30 space-y-3">
                    <div class="flex items-center gap-2">
                        <span class="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white font-black text-sm">3</span>
                        <h3 class="text-base font-black text-purple-300">VERİ AKIŞINA GÖRE BİRİMLER</h3>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div class="p-3 bg-emerald-950/40 rounded-xl border border-emerald-500/30">
                            <span class="px-2 py-0.5 bg-emerald-500/30 text-emerald-300 font-black rounded text-[10px] uppercase">Giriş Birimleri</span>
                            <p class="text-slate-200 mt-2 font-medium">Dış dünyadan bilgisayara veri, komut ve ses/görüntü aktarır.</p>
                            <p class="text-emerald-300 font-bold mt-1.5">• Klavye, Fare, Mikrofon, Kamera, Tarayıcı, Barkod Okuyucu</p>
                        </div>
                        <div class="p-3 bg-cyan-950/40 rounded-xl border border-cyan-500/30">
                            <span class="px-2 py-0.5 bg-cyan-500/30 text-cyan-300 font-black rounded text-[10px] uppercase">Çıkış Birimleri</span>
                            <p class="text-slate-200 mt-2 font-medium">Bilgisayarda işlenen bilgileri kullanıcıya ses, görüntü veya kağıt olarak iletir.</p>
                            <p class="text-cyan-300 font-bold mt-1.5">• Monitör, Hoparlör, Kulaklık, Yazıcı, Projeksiyon</p>
                        </div>
                        <div class="p-3 bg-amber-950/40 rounded-xl border border-amber-500/30">
                            <span class="px-2 py-0.5 bg-amber-500/30 text-amber-300 font-black rounded text-[10px] uppercase">Çift Yönlü Birimler</span>
                            <p class="text-slate-200 mt-2 font-medium">Hem veri girişi yapabilir hem de veriyi kullanıcıya çıktı olarak verebilir.</p>
                            <p class="text-amber-300 font-bold mt-1.5">• Dokunmatik Ekran, Modem, USB Bellek, Harici Disk</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        sayfa2Html: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <!-- Başlık & Bilgi Kartı -->
                <div class="border-b-2 border-indigo-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            5. KONU - 1 • BTY.5.1.5
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 2: İÇ DONANIM BİRİMLERİ & ETKİNLİKLER
                        </h1>
                        <p class="text-xs text-indigo-300">Kasa İçindeki Parçalar, Görevleri ve Pekiştirme Alıştırmaları</p>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        Sayfa: 2 / 4
                    </span>
                </div>

                <!-- İÇ DONANIM LİSTESİ -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div class="p-3 bg-slate-850 rounded-xl border border-slate-700">
                        <strong class="text-yellow-300 font-black text-sm block">1. Anakart (Motherboard)</strong>
                        <p class="text-slate-300 mt-1">Tüm iç ve dış parçaların bağlandığı, parçalar arası iletişimi ve veri akışını sağlayan ana devredir.</p>
                    </div>
                    <div class="p-3 bg-slate-850 rounded-xl border border-slate-700">
                        <strong class="text-cyan-300 font-black text-sm block">2. İşlemci (CPU)</strong>
                        <p class="text-slate-300 mt-1">Bilgisayarın beynidir. Tüm komutları işler, hesaplamaları yapar ve sistemin yönetimini sağlar.</p>
                    </div>
                    <div class="p-3 bg-slate-850 rounded-xl border border-slate-700">
                        <strong class="text-emerald-300 font-black text-sm block">3. RAM Bellek (Geçici Hafıza)</strong>
                        <p class="text-slate-300 mt-1">Çalışmakta olan program ve verilerin geçici olarak tutulduğu hızlı hafızadır. Bilgisayar kapanınca silinir.</p>
                    </div>
                    <div class="p-3 bg-slate-850 rounded-xl border border-slate-700">
                        <strong class="text-amber-300 font-black text-sm block">4. Sabit Disk (HDD) / SSD</strong>
                        <p class="text-slate-300 mt-1">Dosyaların, programların ve işletim sisteminin kalıcı olarak saklandığı depolama alanıdır. SSD çok daha hızlıdır.</p>
                    </div>
                    <div class="p-3 bg-slate-850 rounded-xl border border-slate-700">
                        <strong class="text-purple-300 font-black text-sm block">5. Ekran Kartı (GPU)</strong>
                        <p class="text-slate-300 mt-1">Görüntü verilerini işler ve monitöre aktararak ekranda görüntü oluşmasını sağlar.</p>
                    </div>
                    <div class="p-3 bg-slate-850 rounded-xl border border-slate-700">
                        <strong class="text-rose-300 font-black text-sm block">6. Güç Kaynağı (PSU)</strong>
                        <p class="text-slate-300 mt-1">Prizden gelen 220V alternatif akımı parçaların çalışacağı doğru akıma çevirir ve elektriği dağıtır.</p>
                    </div>
                    <div class="p-3 bg-slate-850 rounded-xl border border-slate-700">
                        <strong class="text-blue-300 font-black text-sm block">7. Ses Kartı</strong>
                        <p class="text-slate-300 mt-1">Dijital ses sinyallerini analog sese, mikrofondan gelen analog sesi ise dijital veriye dönüştürür.</p>
                    </div>
                    <div class="p-3 bg-slate-850 rounded-xl border border-slate-700">
                        <strong class="text-teal-300 font-black text-sm block">8. Ağ Kartı (Ethernet) & Soğutucu</strong>
                        <p class="text-slate-300 mt-1">Ağ kartı internet ve yerel ağa bağlanmayı; soğutucu/fan ise işlemcinin aşırı ısınmasını önlemeyi sağlar.</p>
                    </div>
                </div>

                <!-- ETKİNLİK 1: GÖREVLERİ EŞLEŞTİRELİM -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-indigo-500/40 space-y-3">
                    <h3 class="text-sm font-black text-yellow-300 uppercase flex items-center gap-2">
                        <i class="fa-solid fa-list-check"></i> ETKİNLİK 1: GÖREVLERİ EŞLEŞTİRELİM
                    </h3>
                    <div class="space-y-1.5 text-xs">
                        <div class="p-2 bg-slate-900 rounded-lg flex justify-between items-center">
                            <span>1. Bilgisayarın beyni olup tüm hesaplamaları ve komutları yürütür:</span>
                            <span class="font-black text-yellow-300 bg-yellow-400/20 px-2 py-0.5 rounded">İşlemci (CPU)</span>
                        </div>
                        <div class="p-2 bg-slate-900 rounded-lg flex justify-between items-center">
                            <span>2. Elektrik enerjisini dönüştürerek diğer tüm parçalara dağıtır:</span>
                            <span class="font-black text-yellow-300 bg-yellow-400/20 px-2 py-0.5 rounded">Güç Kaynağı (PSU)</span>
                        </div>
                        <div class="p-2 bg-slate-900 rounded-lg flex justify-between items-center">
                            <span>3. Tüm iç ve dış parçaların birbirine bağlandığı ana devredir:</span>
                            <span class="font-black text-yellow-300 bg-yellow-400/20 px-2 py-0.5 rounded">Anakart</span>
                        </div>
                        <div class="p-2 bg-slate-900 rounded-lg flex justify-between items-center">
                            <span>4. Geçici hafızadır, bilgisayar kapandığında içindeki bilgiler silinir:</span>
                            <span class="font-black text-yellow-300 bg-yellow-400/20 px-2 py-0.5 rounded">RAM Bellek</span>
                        </div>
                        <div class="p-2 bg-slate-900 rounded-lg flex justify-between items-center">
                            <span>5. Görüntüyü işleyerek ekranda görmemizi sağlar:</span>
                            <span class="font-black text-yellow-300 bg-yellow-400/20 px-2 py-0.5 rounded">Ekran Kartı</span>
                        </div>
                        <div class="p-2 bg-slate-900 rounded-lg flex justify-between items-center">
                            <span>6. Verileri kalıcı olarak depolar, manyetik disklerle çalışır:</span>
                            <span class="font-black text-yellow-300 bg-yellow-400/20 px-2 py-0.5 rounded">Sabit Disk (HDD)</span>
                        </div>
                        <div class="p-2 bg-slate-900 rounded-lg flex justify-between items-center">
                            <span>7. Çip tabanlı, mekanik parçası olmayan çok hızlı kalıcı depolama:</span>
                            <span class="font-black text-yellow-300 bg-yellow-400/20 px-2 py-0.5 rounded">SSD</span>
                        </div>
                        <div class="p-2 bg-slate-900 rounded-lg flex justify-between items-center">
                            <span>8. Bilgisayarın kablolu veya kablosuz ağa/internete bağlanmasını sağlar:</span>
                            <span class="font-black text-yellow-300 bg-yellow-400/20 px-2 py-0.5 rounded">Ağ Kartı (Ethernet)</span>
                        </div>
                        <div class="p-2 bg-slate-900 rounded-lg flex justify-between items-center">
                            <span>9. İşlemcinin aşırı ısınıp kapanmasını ve yanmasını önler:</span>
                            <span class="font-black text-yellow-300 bg-yellow-400/20 px-2 py-0.5 rounded">Soğutucu / Fan</span>
                        </div>
                    </div>
                </div>

                <!-- ETKİNLİK 2: DOĞRU MU YANLIŞ MI? -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-emerald-500/40 space-y-3">
                    <h3 class="text-sm font-black text-emerald-300 uppercase flex items-center gap-2">
                        <i class="fa-solid fa-square-check"></i> ETKİNLİK 2: DOĞRU MU YANLIŞ MI? (D / Y)
                    </h3>
                    <div class="space-y-1 text-xs">
                        <p>1. [ <strong class="text-rose-400">Y</strong> ] RAM bellekteki bilgiler bilgisayar kapandığında silinmez. <em>(Silinir, geçicidir)</em></p>
                        <p>2. [ <strong class="text-emerald-400">D</strong> ] İşlemci (CPU), bilgisayarın beyni olarak kabul edilir.</p>
                        <p>3. [ <strong class="text-emerald-400">D</strong> ] Ekran kartı, ekrana yansıtılacak grafikleri ve pikselleri işler.</p>
                        <p>4. [ <strong class="text-emerald-400">D</strong> ] SSD'ler, geleneksel HDD'lere göre katbekat hızlı çalışır.</p>
                        <p>5. [ <strong class="text-rose-400">Y</strong> ] Güç kaynağı sadece fareye elektrik vermekle görevlidir. <em>(Tüm kasaya elektrik verir)</em></p>
                        <p>6. [ <strong class="text-emerald-400">D</strong> ] Anakart arızalanırsa bilgisayar parçaları birbirleriyle iletişim kuramaz.</p>
                        <p>7. [ <strong class="text-emerald-400">D</strong> ] Fan ve soğutucu sistemi yetersiz kalırsa işlemci kendini korumak için bilgisayarı kapatabilir.</p>
                        <p>8. [ <strong class="text-rose-400">Y</strong> ] Ağ kartı müzik seslerini hoparlöre iletmek için kullanılır. <em>(Ses kartı yapar)</em></p>
                        <p>9. [ <strong class="text-emerald-400">D</strong> ] Sabit disk (HDD/SSD) elektrik kesilse bile verileri saklamaya devam eder.</p>
                    </div>
                </div>

                <!-- KENDİMİ DENİYORUM -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-yellow-500/40 space-y-2 text-xs">
                    <h3 class="text-sm font-black text-yellow-300 uppercase">✍️ KENDİMİ DENİYORUM</h3>
                    <div class="space-y-2">
                        <div class="p-2.5 bg-slate-900 rounded-xl">
                            <p class="font-bold text-white">Soru 1: RAM bellek ile Sabit Disk (HDD/SSD) arasındaki en belirgin fark nedir?</p>
                            <p class="text-emerald-300 mt-1"><strong>Cevap:</strong> RAM bellek geçici hafızadır, bilgisayar kapanınca sıfırlanır; Sabit Disk ise kalıcı depolamadır, veriler silinmeden yıllarca saklanabilir.</p>
                        </div>
                        <div class="p-2.5 bg-slate-900 rounded-xl">
                            <p class="font-bold text-white">Soru 2: Bir bilgisayarda güç kaynağı (PSU) bozulursa ne gibi bir sorun yaşanır?</p>
                            <p class="text-emerald-300 mt-1"><strong>Cevap:</strong> Parçalara elektrik gitmeyeceği için bilgisayar kesinlikle açılmaz ve hiçbir donanım çalışmaz.</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        sayfa3Html: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <!-- Başlık & Bilgi Kartı -->
                <div class="border-b-2 border-indigo-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            5. KONU - 1 • BTY.5.1.5
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 3: DIŞ DONANIM BİRİMLERİ & SINIFLANDIRMA
                        </h1>
                        <p class="text-xs text-indigo-300">Giriş, Çıkış ve Çift Yönlü Çevre Birimleri Tablosu</p>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        Sayfa: 3 / 4
                    </span>
                </div>

                <!-- 8 DIŞ DONANIMIN TANITIMI -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                    <div class="p-3 bg-slate-850 rounded-xl border border-emerald-500/30 text-center">
                        <i class="fa-solid fa-keyboard text-emerald-400 text-xl mb-1"></i>
                        <strong class="block text-white">Klavye</strong>
                        <span class="text-[10px] text-emerald-300 font-bold">GİRİŞ BİRİMİ</span>
                        <p class="text-slate-300 text-[11px] mt-1">Yazı ve komut girmeyi sağlar.</p>
                    </div>
                    <div class="p-3 bg-slate-850 rounded-xl border border-emerald-500/30 text-center">
                        <i class="fa-solid fa-computer-mouse text-emerald-400 text-xl mb-1"></i>
                        <strong class="block text-white">Fare</strong>
                        <span class="text-[10px] text-emerald-300 font-bold">GİRİŞ BİRİMİ</span>
                        <p class="text-slate-300 text-[11px] mt-1">İmleçle tıklama ve seçim yapar.</p>
                    </div>
                    <div class="p-3 bg-slate-850 rounded-xl border border-cyan-500/30 text-center">
                        <i class="fa-solid fa-desktop text-cyan-400 text-xl mb-1"></i>
                        <strong class="block text-white">Monitör</strong>
                        <span class="text-[10px] text-cyan-300 font-bold">ÇIKIŞ BİRİMİ</span>
                        <p class="text-slate-300 text-[11px] mt-1">Görüntüleri ekrana yansıtır.</p>
                    </div>
                    <div class="p-3 bg-slate-850 rounded-xl border border-cyan-500/30 text-center">
                        <i class="fa-solid fa-print text-cyan-400 text-xl mb-1"></i>
                        <strong class="block text-white">Yazıcı</strong>
                        <span class="text-[10px] text-cyan-300 font-bold">ÇIKIŞ BİRİMİ</span>
                        <p class="text-slate-300 text-[11px] mt-1">Belgeleri kağıda basar.</p>
                    </div>
                    <div class="p-3 bg-slate-850 rounded-xl border border-emerald-500/30 text-center">
                        <i class="fa-solid fa-microphone text-emerald-400 text-xl mb-1"></i>
                        <strong class="block text-white">Mikrofon</strong>
                        <span class="text-[10px] text-emerald-300 font-bold">GİRİŞ BİRİMİ</span>
                        <p class="text-slate-300 text-[11px] mt-1">Sesimizi bilgisayara aktarır.</p>
                    </div>
                    <div class="p-3 bg-slate-850 rounded-xl border border-cyan-500/30 text-center">
                        <i class="fa-solid fa-headphones text-cyan-400 text-xl mb-1"></i>
                        <strong class="block text-white">Kulaklık</strong>
                        <span class="text-[10px] text-cyan-300 font-bold">ÇIKIŞ BİRİMİ</span>
                        <p class="text-slate-300 text-[11px] mt-1">Sesi yalnızca kulağımıza verir.</p>
                    </div>
                    <div class="p-3 bg-slate-850 rounded-xl border border-emerald-500/30 text-center">
                        <i class="fa-solid fa-video text-emerald-400 text-xl mb-1"></i>
                        <strong class="block text-white">Web Kamerası</strong>
                        <span class="text-[10px] text-emerald-300 font-bold">GİRİŞ BİRİMİ</span>
                        <p class="text-slate-300 text-[11px] mt-1">Canlı görüntüyü kasaya aktarır.</p>
                    </div>
                    <div class="p-3 bg-slate-850 rounded-xl border border-cyan-500/30 text-center">
                        <i class="fa-solid fa-volume-high text-cyan-400 text-xl mb-1"></i>
                        <strong class="block text-white">Hoparlör</strong>
                        <span class="text-[10px] text-cyan-300 font-bold">ÇIKIŞ BİRİMİ</span>
                        <p class="text-slate-300 text-[11px] mt-1">Sesi odaya yayarak dinletir.</p>
                    </div>
                </div>

                <!-- ETKİNLİK: HANGİ DONANIM HANGİ TÜRDE? TABLOSU -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-cyan-500/40 space-y-3">
                    <h3 class="text-sm font-black text-cyan-300 uppercase flex items-center gap-2">
                        <i class="fa-solid fa-table-list"></i> ETKİNLİK 1: HANGİ DONANIM HANGİ TÜRDE?
                    </h3>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs border-collapse">
                            <thead>
                                <tr class="border-b border-slate-700 bg-slate-900 text-slate-300">
                                    <th class="p-2 font-bold">Donanım Birimi</th>
                                    <th class="p-2 font-bold text-center text-emerald-400">Giriş Birimi</th>
                                    <th class="p-2 font-bold text-center text-cyan-400">Çıkış Birimi</th>
                                    <th class="p-2 font-bold text-center text-amber-400">Hem Giriş Hem Çıkış</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-800">
                                <tr><td class="p-2 font-semibold">1. Klavye</td><td class="p-2 text-center text-emerald-400 font-black">✔</td><td class="p-2 text-center">-</td><td class="p-2 text-center">-</td></tr>
                                <tr><td class="p-2 font-semibold">2. Monitör (Standart)</td><td class="p-2 text-center">-</td><td class="p-2 text-center text-cyan-400 font-black">✔</td><td class="p-2 text-center">-</td></tr>
                                <tr><td class="p-2 font-semibold">3. Fare (Mouse)</td><td class="p-2 text-center text-emerald-400 font-black">✔</td><td class="p-2 text-center">-</td><td class="p-2 text-center">-</td></tr>
                                <tr><td class="p-2 font-semibold">4. Hoparlör</td><td class="p-2 text-center">-</td><td class="p-2 text-center text-cyan-400 font-black">✔</td><td class="p-2 text-center">-</td></tr>
                                <tr><td class="p-2 font-semibold">5. Mikrofon</td><td class="p-2 text-center text-emerald-400 font-black">✔</td><td class="p-2 text-center">-</td><td class="p-2 text-center">-</td></tr>
                                <tr><td class="p-2 font-semibold">6. Yazıcı (Printer)</td><td class="p-2 text-center">-</td><td class="p-2 text-center text-cyan-400 font-black">✔</td><td class="p-2 text-center">-</td></tr>
                                <tr><td class="p-2 font-semibold">7. Kulaklık</td><td class="p-2 text-center">-</td><td class="p-2 text-center text-cyan-400 font-black">✔</td><td class="p-2 text-center">-</td></tr>
                                <tr><td class="p-2 font-semibold">8. Web Kamerası</td><td class="p-2 text-center text-emerald-400 font-black">✔</td><td class="p-2 text-center">-</td><td class="p-2 text-center">-</td></tr>
                                <tr><td class="p-2 font-semibold">9. Dokunmatik Ekran</td><td class="p-2 text-center">-</td><td class="p-2 text-center">-</td><td class="p-2 text-center text-amber-400 font-black">✔</td></tr>
                                <tr><td class="p-2 font-semibold">10. USB Bellek / Harici Disk</td><td class="p-2 text-center">-</td><td class="p-2 text-center">-</td><td class="p-2 text-center text-amber-400 font-black">✔</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- ETKİNLİK 2: DOĞRU MU YANLIŞ MI? -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-emerald-500/40 space-y-2 text-xs">
                    <h3 class="text-sm font-black text-emerald-300 uppercase flex items-center gap-2">
                        <i class="fa-solid fa-square-check"></i> ETKİNLİK 2: DOĞRU MU YANLIŞ MI? (D / Y)
                    </h3>
                    <p>1. [ <strong class="text-rose-400">Y</strong> ] Klavye ekrandaki yazıları bize gösteren bir çıkış birimidir. <em>(Giriş birimidir)</em></p>
                    <p>2. [ <strong class="text-emerald-400">D</strong> ] Monitör, bilgisayarda yapılan işlemleri görselleştiren bir çıkış birimidir.</p>
                    <p>3. [ <strong class="text-emerald-400">D</strong> ] Mikrofon sesimizi bilgisayara aktardığı için giriş birimidir.</p>
                    <p>4. [ <strong class="text-emerald-400">D</strong> ] Yazıcı, dijital belgeleri kağıda dökerek dışarıya aktaran çıkış birimidir.</p>
                    <p>5. [ <strong class="text-rose-400">Y</strong> ] Hoparlör dış dünyadaki sesleri bilgisayara kaydeder. <em>(Çıkış birimidir, sesi dışa verir)</em></p>
                    <p>6. [ <strong class="text-emerald-400">D</strong> ] Web kamerası görüntümüzü dijital ortama aktaran bir giriş birimidir.</p>
                    <p>7. [ <strong class="text-rose-400">Y</strong> ] Dokunmatik ekran yalnızca bir çıkış birimidir. <em>(Hem giriş hem çıkıştır)</em></p>
                    <p>8. [ <strong class="text-emerald-400">D</strong> ] Tarayıcı (Scanner), basılı resim veya yazıları bilgisayara aktaran giriş birimidir.</p>
                </div>
            </div>
        `,
        sayfa4Html: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <!-- Başlık & Bilgi Kartı -->
                <div class="border-b-2 border-indigo-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            5. KONU - 1 • BTY.5.1.5
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 4: KLAVYE VE FAREYİ TANIYALIM
                        </h1>
                        <p class="text-xs text-indigo-300">Tuş Grupları, Kısayollar, Fare Hareketleri ve İşlevleri</p>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        Sayfa: 4 / 4
                    </span>
                </div>

                <!-- 1. KLAVYENİN 5 ANA BÖLÜMÜ -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-indigo-500/30 space-y-3">
                    <h3 class="text-sm font-black text-yellow-300 uppercase flex items-center gap-2">
                        <i class="fa-solid fa-keyboard"></i> 1. KLAVYENİN 5 TEMEL BÖLÜMÜ
                    </h3>
                    <div class="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs text-center">
                        <div class="p-2.5 bg-slate-900 rounded-xl border border-indigo-400/30">
                            <span class="font-black text-indigo-300 block">F1 - F12</span>
                            <span class="text-[11px] text-slate-300">Fonksiyon Tuşları</span>
                        </div>
                        <div class="p-2.5 bg-slate-900 rounded-xl border border-indigo-400/30">
                            <span class="font-black text-indigo-300 block">Esc, Ctrl, Alt</span>
                            <span class="text-[11px] text-slate-300">Özel Kontrol Tuşları</span>
                        </div>
                        <div class="p-2.5 bg-slate-900 rounded-xl border border-indigo-400/30">
                            <span class="font-black text-indigo-300 block">A-Z, 0-9</span>
                            <span class="text-[11px] text-slate-300">Harf ve Rakam Alanı</span>
                        </div>
                        <div class="p-2.5 bg-slate-900 rounded-xl border border-indigo-400/30">
                            <span class="font-black text-indigo-300 block">⬆ ⬇ ⬅ ➡</span>
                            <span class="text-[11px] text-slate-300">Yön / Ok Tuşları</span>
                        </div>
                        <div class="p-2.5 bg-slate-900 rounded-xl border border-indigo-400/30">
                            <span class="font-black text-indigo-300 block">Numpad</span>
                            <span class="text-[11px] text-slate-300">Sayısal Tuş Takımı</span>
                        </div>
                    </div>
                </div>

                <!-- 2. ÖNEMLİ KLAVYE TUŞLARI & KISAYOLLAR -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div class="p-4 bg-slate-850 rounded-2xl border border-cyan-500/30 space-y-2">
                        <h4 class="font-black text-cyan-300 uppercase text-xs">En Çok Kullanılan Tuşlar</h4>
                        <ul class="space-y-1.5 text-slate-300">
                            <li>• <strong>Enter:</strong> Komutu onaylar veya alt satıra geçer.</li>
                            <li>• <strong>Space (Boşluk):</strong> Kelimeler arasına bir harflik boşluk bırakır.</li>
                            <li>• <strong>Backspace:</strong> İmlecin solundaki karakteri siler.</li>
                            <li>• <strong>Delete:</strong> İmlecin sağındaki karakteri veya seçili ögeyi siler.</li>
                            <li>• <strong>Caps Lock:</strong> Sürekli BÜYÜK harf yazma kilididir.</li>
                            <li>• <strong>Shift:</strong> Geçici büyük harf ve tuşların üst simgelerini yazar.</li>
                            <li>• <strong>Tab:</strong> İmleci belirli bir mesafe ileri kaydırır.</li>
                            <li>• <strong>Esc (Escape):</strong> Yapılan işlemi iptal eder veya pencereden çıkar.</li>
                        </ul>
                    </div>
                    <div class="p-4 bg-slate-850 rounded-2xl border border-purple-500/30 space-y-2">
                        <h4 class="font-black text-purple-300 uppercase text-xs">Pratik Kısayol Tuşları</h4>
                        <div class="space-y-1.5 text-slate-300">
                            <p class="p-1.5 bg-slate-900 rounded-lg flex justify-between"><span>Kopyala:</span><strong class="text-yellow-300">Ctrl + C</strong></p>
                            <p class="p-1.5 bg-slate-900 rounded-lg flex justify-between"><span>Yapıştır:</span><strong class="text-yellow-300">Ctrl + V</strong></p>
                            <p class="p-1.5 bg-slate-900 rounded-lg flex justify-between"><span>Kes:</span><strong class="text-yellow-300">Ctrl + X</strong></p>
                            <p class="p-1.5 bg-slate-900 rounded-lg flex justify-between"><span>Geri Al:</span><strong class="text-yellow-300">Ctrl + Z</strong></p>
                            <p class="p-1.5 bg-slate-900 rounded-lg flex justify-between"><span>Tümünü Seç:</span><strong class="text-yellow-300">Ctrl + A</strong></p>
                            <p class="p-1.5 bg-slate-900 rounded-lg flex justify-between"><span>Kaydet:</span><strong class="text-yellow-300">Ctrl + S</strong></p>
                        </div>
                    </div>
                </div>

                <!-- 3. FARE ANATOMİSİ VE İŞLEMLERİ -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-emerald-500/30 space-y-3">
                    <h3 class="text-sm font-black text-emerald-300 uppercase flex items-center gap-2">
                        <i class="fa-solid fa-computer-mouse"></i> 3. FARE ANATOMİSİ VE İŞLEMLERİ
                    </h3>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                        <div class="p-3 bg-slate-900 rounded-xl border border-emerald-400/30">
                            <strong class="text-emerald-400 font-black block">1. Sol Tuş</strong>
                            <p class="text-slate-300 mt-1">Ögeleri seçme, butonlara basma ve çift tıklayarak programları açma işlevi görür.</p>
                        </div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-cyan-400/30">
                            <strong class="text-cyan-400 font-black block">2. Sağ Tuş</strong>
                            <p class="text-slate-300 mt-1">Tıklanan nesneye ait seçenekler ve kısayol bağlam menüsünü ekrana getirir.</p>
                        </div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-yellow-400/30">
                            <strong class="text-yellow-400 font-black block">3. Kaydırma Tekerleği</strong>
                            <p class="text-slate-300 mt-1">Uzun sayfalarda ve web sitelerinde sayfayı aşağı/yukarı hızlıca kaydırır.</p>
                        </div>
                    </div>
                    <div class="p-3 bg-slate-900/90 rounded-xl border border-slate-700 text-xs space-y-1">
                        <strong class="text-white block font-bold">Temel Fare İşlemleri:</strong>
                        <p>• <strong>Tek Tık:</strong> Nesneyi veya simgeyi seçer.</p>
                        <p>• <strong>Çift Tık:</strong> Dosyayı, klasörü veya uygulamayı çalıştırıp açar.</p>
                        <p>• <strong>Sürükle & Bırak:</strong> Nesneyi sol tuşa basılı tutarak taşır veya yeni bir klasöre bırakır.</p>
                    </div>
                </div>
            </div>
        `
    },

    // ========================================================
    // ❓ 3. PEKİŞTİRME TESTİ & SORULARI
    // ==========================================
    questions: [
        // 0. İndeks: Placeholder (Eşleştirme etkinliği bu konuda yok)
        null,

        // 1. İndeks: 15 Soruluk Doğru / Yanlış Pekiştirme Testi
        {
            id: 2,
            type: "true_false",
            title: "Bilgisayar ve Donanım – Doğru / Yanlış Testi (15 Soru)",
            description: "Aşağıdaki ifadeleri dikkatle okuyarak Doğru veya Yanlış butonuna basınız:",
            items: [
                {
                    statement: "Bilgisayarı oluşturan, elle tutabildiğimiz ve gözle görebildiğimiz fiziksel parçalara donanım denir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Donanım (hardware), bilgisayarın fiziksel bileşenlerinin tamamına verilen addır."
                },
                {
                    statement: "RAM bellek kalıcı bir depolama birimidir; bilgisayar kapansa bile içindeki veriler silinmez.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! RAM geçici (volatile) bir hafızadır. Bilgisayar kapandığında içindeki tüm veriler silinir. Kalıcı depolama HDD ve SSD tarafından yapılır."
                },
                {
                    statement: "İşlemci (CPU), bilgisayarın beyni olarak kabul edilir ve tüm komutları işleyerek hesaplamaları yürütür.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! CPU bilgisayarın beynidir; programlardan gelen tüm komutları işler ve yönetir."
                },
                {
                    statement: "Klavye, bilgisayarın işlediği bilgileri kullanıcıya aktaran bir çıkış birimidir.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! Klavye dış dünyadan bilgisayara veri ve komut gönderen bir GİRİŞ birimidir, çıkış birimi değildir."
                },
                {
                    statement: "Monitör, bilgisayarın işlediği verileri görüntü olarak kullanıcıya sunan bir çıkış birimidir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Monitör işlenmiş verileri ekrana yansıtarak kullanıcıya aktarır; temel çıkış birimidir."
                },
                {
                    statement: "Güç kaynağı (PSU) yalnızca monitöre elektrik sağlamakla görevlidir.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! Güç kaynağı prizden gelen elektriği dönüştürerek kasanın içindeki TÜM parçalara (anakart, CPU, diskler, fanlar vb.) dağıtır."
                },
                {
                    statement: "Anakart, tüm iç ve dış donanım parçalarının birbirine bağlandığı ve iletişim kurduğu ana devredir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Anakart, bilgisayarın tüm bileşenlerini birbirine bağlayan ve veri iletişimini sağlayan temel platformdur."
                },
                {
                    statement: "Hoparlör, dış dünyadan bilgisayara ses aktaran bir giriş birimidir.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! Hoparlör bilgisayardaki dijital ses verilerini dışarıya ses olarak aktaran bir ÇIKIŞ birimidir. Sesi bilgisayara aktaran giriş birimi mikrofondur."
                },
                {
                    statement: "Dokunmatik ekran hem görüntü gösterdiği (çıkış) hem de parmakla komut aldığı (giriş) için çift yönlü bir birimdir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Dokunmatik ekran hem giriş hem çıkış işlevi gören çift yönlü bir donanımdır."
                },
                {
                    statement: "SSD, geleneksel sabit diske (HDD) göre genellikle daha yavaş çalışır.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! SSD'ler hareketli mekanik parça içermediği için HDD'lere göre çok daha hızlı veri okuma ve yazma yapar."
                },
                {
                    statement: "Farenin sağ tuşuna tıklamak, tıklanan nesneye ait bağlam menüsünü (kısayol menüsü) açar.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Sağ tık, ilgili nesne için kopyala, yapıştır, sil gibi seçeneklerin bulunduğu bağlam menüsünü getirir."
                },
                {
                    statement: "Ctrl+C klavye kısayolu, seçili metni veya dosyayı keser (taşımak için alır).",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! Ctrl+C seçili ögeyi KOPYALAR. Kesmek (taşımak) için kullanılan kısayol Ctrl+X'tir."
                },
                {
                    statement: "USB bellek hem veri okuyabilir hem de veri yazabilir; bu nedenle hem giriş hem çıkış özelliği taşıyan çift yönlü bir birimdir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! USB bellek bilgisayardan dosya alabilir (yazma) ve bilgisayara dosya verebilir (okuma); bu yüzden çift yönlü birimdir."
                },
                {
                    statement: "Ekran kartı (GPU), bilgisayarın internet ağına bağlanmasını sağlayan iç donanım birimidir.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! Ekran kartı görüntü verilerini işleyerek monitöre aktarır. Bilgisayarı ağa bağlayan parça Ağ Kartı'dır (Ethernet / Wi-Fi kartı)."
                },
                {
                    statement: "Caps Lock tuşu, sürekli büyük harf yazma kilidini açar ve kapatır.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Caps Lock aktifken tüm harfler büyük yazılır; tekrar basıldığında kilit kalkar ve küçük harfe döner."
                }
            ]
        }
    ],

    // ========================================================
    // 🎮 4. TEKRAR OYUNLARI & ETKİNLİKLER (11 ÖZEL OYUN)
    // ========================================================
    hideStandardGames: true,
    gameData: null,
    extraGames: [
        {
            badge: "Vaka Çözümü",
            badgeColor: "text-amber-300",
            title: "Donanım Dedektifleri",
            desc: "5 gizemli arıza ve donanım vakasını incele! İpuçlarını topla, şüpheli donanım parçalarını tespit et ve baş dedektif rozetini kazan!",
            icon: "fa-solid fa-user-secret",
            iconBg: "bg-amber-500/30 text-amber-300",
            cardGradient: "from-amber-950/80 via-slate-900 to-indigo-950/90",
            border: "border-amber-500/50",
            descColor: "text-amber-100",
            btnText: "Dedektifliği Başlat!",
            btnIcon: "fa-solid fa-magnifying-glass",
            btnGradient: "from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/donanim_dedektifleri.html', 'Donanım Dedektifleri | Öğretmen Bozok')"
        },
        {
            badge: "Kasa İçi Keşif",
            badgeColor: "text-cyan-300",
            title: "Bilgisayarın İçine Yolculuk",
            desc: "Gerçek açık bilgisayar kasası fotoğrafı üzerinde parçaları keşfet, İpucu Avcısı modunda donanımları bul ve kasayı baştan monte et!",
            icon: "fa-solid fa-microchip",
            iconBg: "bg-cyan-500/30 text-cyan-300",
            cardGradient: "from-cyan-950/80 via-slate-900 to-blue-950/90",
            border: "border-cyan-500/50",
            descColor: "text-cyan-100",
            btnText: "Yolculuğa Başla!",
            btnIcon: "fa-solid fa-rocket",
            btnGradient: "from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-black",
            action: "app.openStandaloneGame('games/bilgisayarin_icine_yolculuk.html', 'Bilgisayarın İçine Yolculuk | Öğretmen Bozok')"
        },
        {
            badge: "Dava & Hüküm",
            badgeColor: "text-orange-300",
            title: "Donanım Mahkemesi",
            desc: "Sınıfça mahkeme salonuna girin! Şüpheli teknik iddiaları delillerle yargılayın, tokmak vurup adil kararı ve gerekçeyi açıklayın!",
            icon: "fa-solid fa-gavel",
            iconBg: "bg-orange-500/30 text-orange-300",
            cardGradient: "from-orange-950/80 via-slate-900 to-stone-950/90",
            border: "border-orange-500/50",
            descColor: "text-orange-100",
            btnText: "Mahkemeyi Başlat!",
            btnIcon: "fa-solid fa-gavel",
            btnGradient: "from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-black",
            action: "app.openStandaloneGame('games/donanim_mahkemesi.html', 'Donanım Mahkemesi | Öğretmen Bozok')"
        },
        {
            badge: "Montaj Simülasyonu",
            badgeColor: "text-emerald-300",
            title: "Bilgisayar Kurma Atölyesi",
            desc: "3 farklı kullanım profili için kısıtlı bütçeyle 7 temel donanımı seç, kasaya tak, uyumluluk kontrolünü geç ve sistemi test et!",
            icon: "fa-solid fa-screwdriver-wrench",
            iconBg: "bg-emerald-500/30 text-emerald-300",
            cardGradient: "from-emerald-950/80 via-slate-900 to-teal-950/90",
            border: "border-emerald-500/50",
            descColor: "text-emerald-100",
            btnText: "Atölyeye Gir!",
            btnIcon: "fa-solid fa-play",
            btnGradient: "from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/bilgisayar_kurma_atolyesi.html', 'Bilgisayar Kurma Atölyesi | Öğretmen Bozok')"
        },
        {
            badge: "Veri Akış Şeması",
            badgeColor: "text-blue-300",
            title: "Veri Yolculuğu",
            desc: "Giriş, İşleme (İşlemci) ve Çıkış istasyonları arasında 5 farklı günlük hayat senaryosunu çöz, veri akış animasyonunu canlı başlat!",
            icon: "fa-solid fa-network-wired",
            iconBg: "bg-blue-500/30 text-blue-300",
            cardGradient: "from-blue-950/80 via-slate-900 to-indigo-950/90",
            border: "border-blue-500/50",
            descColor: "text-blue-100",
            btnText: "Veriyi Akıt!",
            btnIcon: "fa-solid fa-play",
            btnGradient: "from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black",
            action: "app.openStandaloneGame('games/veri_yolculugu.html', 'Veri Yolculuğu | Öğretmen Bozok')"
        },
        {
            badge: "Kilitli Laboratuvar",
            badgeColor: "text-teal-300",
            title: "Donanım Kaçış Odası",
            desc: "Kilitli kalan bilişim laboratuvarının 5 kapısındaki şifreleri donanım bilmecelerini çözerek aç ve kaçışı başarıyla tamamla!",
            icon: "fa-solid fa-door-closed",
            iconBg: "bg-teal-500/30 text-teal-300",
            cardGradient: "from-teal-950/80 via-slate-900 to-slate-950/90",
            border: "border-teal-500/50",
            descColor: "text-teal-100",
            btnText: "Odaya Gir!",
            btnIcon: "fa-solid fa-key",
            btnGradient: "from-teal-500 via-emerald-600 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-black",
            action: "app.openStandaloneGame('games/donanim_kacis_odasi.html', 'Donanım Kaçış Odası | Öğretmen Bozok')"
        },
        {
            badge: "Teknik Servis",
            badgeColor: "text-rose-300",
            title: "Bozuk Bilgisayarı Kurtar",
            desc: "Görüntü yok, ses yok, klavye yazmıyor! 5 kritik arıza belirtisini incele, doğru teşhisi koy, onarımı yap ve bilgisayarı kurtar!",
            icon: "fa-solid fa-heart-pulse",
            iconBg: "bg-rose-500/30 text-rose-300",
            cardGradient: "from-rose-950/80 via-slate-900 to-orange-950/90",
            border: "border-rose-500/50",
            descColor: "text-rose-100",
            btnText: "Bilgisayarı Kurtar!",
            btnIcon: "fa-solid fa-screwdriver-wrench",
            btnGradient: "from-rose-600 via-orange-600 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-black",
            action: "app.openStandaloneGame('games/bozuk_bilgisayari_kurtar.html', 'Bozuk Bilgisayarı Kurtar | Öğretmen Bozok')"
        },
        {
            badge: "Açık Artırma",
            badgeColor: "text-yellow-300",
            title: "Donanım Müzayedesi",
            desc: "1000 sanal krediyle açık artırma kürsüsüne çık! İhtiyaca uygun parçaları satın al, gereksizleri pas geç ve bütçeni stratejik koru!",
            icon: "fa-solid fa-coins",
            iconBg: "bg-yellow-500/30 text-yellow-300",
            cardGradient: "from-yellow-950/80 via-slate-900 to-amber-950/90",
            border: "border-yellow-500/50",
            descColor: "text-yellow-100",
            btnText: "Müzayedeye Katıl!",
            btnIcon: "fa-solid fa-gavel",
            btnGradient: "from-yellow-500 via-amber-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/donanim_muzayedesi.html', 'Donanım Müzayedesi | Öğretmen Bozok')"
        },
        {
            badge: "Hafıza & Görev",
            badgeColor: "text-pink-300",
            title: "Görsel Hafıza Arenası",
            desc: "Kartları 5 saniye incele, kapanan kartların arkasındaki donanımları görev ipuçlarına göre bularak görsel hafızanı konuştur!",
            icon: "fa-solid fa-brain",
            iconBg: "bg-pink-500/30 text-pink-300",
            cardGradient: "from-pink-950/80 via-slate-900 to-purple-950/90",
            border: "border-pink-500/50",
            descColor: "text-pink-100",
            btnText: "Arenayı Başlat!",
            btnIcon: "fa-solid fa-eye",
            btnGradient: "from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white font-black",
            action: "app.openStandaloneGame('games/gorsel_hafiza_arenasi.html', 'Görsel Hafıza Arenası | Öğretmen Bozok')"
        },
        {
            badge: "İki Ayrı Mod",
            badgeColor: "text-emerald-300",
            title: "Sınıflandırma Arenası",
            desc: "17 donanım kartını Mod A'da İç/Dış donanıma göre, Mod B'de Giriş/Çıkış görevine göre doğru kutulara sürükleyip sınıflandır!",
            icon: "fa-solid fa-table-cells-large",
            iconBg: "bg-emerald-500/30 text-emerald-300",
            cardGradient: "from-emerald-950/80 via-slate-900 to-cyan-950/90",
            border: "border-emerald-500/50",
            descColor: "text-emerald-100",
            btnText: "Sınıflandırmaya Başla!",
            btnIcon: "fa-solid fa-layer-group",
            btnGradient: "from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-black",
            action: "app.openStandaloneGame('games/siniflandirma_arenasi.html', 'Sınıflandırma Arenası | Öğretmen Bozok')"
        },
        {
            badge: "2 Kişilik Canlı Düello",
            badgeColor: "text-purple-300",
            title: "Hafıza Düellosu: Donanım Avcıları",
            desc: "Akıllı tahtada karşılıklı 2 öğrenci yarışın! 15 turda donanım parçaları ile görevlerini eşleştirip hafıza düellosunu kazanın!",
            icon: "fa-solid fa-users",
            iconBg: "bg-purple-500/30 text-purple-300",
            cardGradient: "from-purple-950/80 via-slate-900 to-rose-950/90",
            border: "border-purple-500/50",
            descColor: "text-purple-100",
            btnText: "Düelloyu Başlat!",
            btnIcon: "fa-solid fa-swords",
            btnGradient: "from-cyan-500 via-indigo-600 to-rose-600 hover:from-cyan-400 hover:to-rose-500 text-white font-black",
            action: "app.openStandaloneGame('games/hafiza_duellosu_donanim_avcilari.html', 'Hafıza Düellosu: Donanım Avcıları | Öğretmen Bozok')"
        }
    ]
};
