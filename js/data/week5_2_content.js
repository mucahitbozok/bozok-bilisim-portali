// ==========================================
// 5. KONU - 2: YAZILIM, KAPASİTE BİRİMLERİ VE DOSYA YÖNETİMİ
// MEB 5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi
// BTY.5.1.5 - BTY.5.1.6. Yazılım ve Dosya Yönetimi
// Hazırlayan: Öğretmen Bozok
// ==========================================

// Slayt 13 İnteraktif Kapasite & Dosya Tahmin Oyunu Durum Yönetimi
window.slide13Game = {
    idx: 0,
    items: [
        { 
            name: "Klavyeden basılan tek bir 'A' harfi", 
            correct: "byte", 
            icon: "fa-font", 
            hint: "1 karakterlik veri bellekte 8 bitlik yer kaplar.", 
            desc: "🎉 DOĞRU! Klavyedeki her bir harf, rakam veya boşluk bellekte tam 1 Byte yer kaplar." 
        },
        { 
            name: "3 dakikalık bir MP3 müzik parçası", 
            correct: "mb", 
            icon: "fa-music", 
            hint: "Müzikler ve kaliteli fotoğraflar genellikle bu birimle ifade edilir.", 
            desc: "🎉 DOĞRU! Standart bir MP3 şarkı ortalama 3 ile 5 Megabyte (MB) boyutundadır." 
        },
        { 
            name: "2 saatlik yüksek kaliteli bir Full HD film", 
            correct: "gb", 
            icon: "fa-film", 
            hint: "Büyük videolar ve modern oyunlar bu birimle ölçülür.", 
            desc: "🎉 DOĞRU! Yüksek çözünürlüklü uzun bir film ortalama 2 ile 4 Gigabyte (GB) yer tutar." 
        },
        { 
            name: "Not defterine yazılmış 1 sayfalık kısa metin belgesi", 
            correct: "kb", 
            icon: "fa-file-lines", 
            hint: "Birkaç bin harflik küçük yazılar bu birim seviyesindedir.", 
            desc: "🎉 DOĞRU! Sade metin belgeleri birkaç Kilobyte (KB) büyüklüğündedir." 
        },
        { 
            name: "Bir veri merkezinin 5 yıllık devasa güvenlik kamerası arşivi", 
            correct: "tb", 
            icon: "fa-server", 
            hint: "1024 Gigabyte'tan oluşan devasa depolama birimidir.", 
            desc: "🎉 DOĞRU! Yüzlerce filmi ve devasa arşivleri saklamak için Terabyte (TB) kullanılır." 
        },
        { 
            name: "Bilgisayar işlemcisindeki tek bir 0 veya 1 elektrik sinyali", 
            correct: "bit", 
            icon: "fa-microchip", 
            hint: "Bilgisayarın en küçük temel veri parçacığıdır.", 
            desc: "🎉 DOĞRU! 0 veya 1 değerini alan en küçük dijital yapı taşı Bit'tir." 
        }
    ],
    check: function(selectedType) {
        const item = this.items[this.idx];
        const fb = document.getElementById("slide13-fb");
        if (!fb) return;
        fb.classList.remove("hidden");
        
        if (selectedType === item.correct) {
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
            const names = { bit: "Bit", byte: "Byte", kb: "Kilobyte (KB)", mb: "Megabyte (MB)", gb: "Gigabyte (GB)", tb: "Terabyte (TB)" };
            fb.className = "p-3.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-between gap-3 text-left animate-pop bg-rose-950/90 border-2 border-rose-500 text-rose-200 shadow-lg";
            fb.innerHTML = `
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-circle-xmark text-rose-400 text-2xl shrink-0"></i>
                    <div>
                        <span class="block font-black text-rose-300">⚠️ TEKRAR DÜŞÜN!</span>
                        <span>Bu veri için en uygun birim <strong>${names[item.correct]}</strong> olmalıdır. İpucu: ${item.hint}</span>
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
        if (counterEl) counterEl.innerText = "Soru: " + (this.idx + 1) + " / " + this.items.length;
        if (fb) fb.classList.add("hidden");
    }
};

window.WEEK5_2_CONTENT = {
    weekInfo: {
        weekNumber: '5_2',
        topicNumber: '5_2',
        customLabel: "5. Konu - 2",
        title: "Yazılım, Kapasite Birimleri ve Dosya Yönetimi",
        code: "BTY.5.1.5 - BTY.5.1.6. Yazılım ve dosya yönetimini çözümleyebilme",
        theme: "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        isPending: false,
        learningGoals: [
            "Bilgisayar sisteminin can damarı olan Yazılım kavramını ve Donanım ile ilişkisini ayırt edebileceğim.",
            "İşletim Sistemleri (Windows, Pardus, Linux, macOS, Android, iOS) ile Uygulama Yazılımlarını kavrayabileceğim.",
            "Yazılım lisans türlerini (Lisanslı, Ücretsiz, Demo, Açık Kaynak) etik ve yasal açıdan değerlendirebileceğim.",
            "Hafıza ve depolama kapasite birimlerini (Bit, Byte, KB, MB, GB, TB) 1024 kat kuralıyla sıralayabileceğim.",
            "Dosya yapısını (Dosya Adı . Dosya Uzantısı), temel uzantıları (.docx, .jpg, .mp3, .mp4, .pdf, .zip vb.) ve klasör hiyerarşisini yönetebileceğim."
        ],
        images: {
            cover: "assets/slides/donanim_sistem_kapak.jpg",
            softwareTypes: "assets/slides/bilgisayar_cesitleri.jpg",
            fileFolder: "assets/slides/veri_isleme_dongusu.jpg",
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
        // Slayt 1: Kapak
        {
            id: 1,
            title: "YAZILIM, KAPASİTE VE DOSYA YÖNETİMİ",
            subtitle: "5. KONU - 2 • BTY.5.1.5 - BTY.5.1.6",
            topic: "5. KONU - 2 • BTY.5.1.5 - BTY.5.1.6",
            badge: "GİRİŞ",
            icon: "fa-solid fa-laptop-code",
            bgColor: "from-slate-900 via-purple-950 to-indigo-950",
            gradient: "from-slate-900 via-purple-950 to-indigo-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-6xl mx-auto my-auto py-2">
                    <div class="md:col-span-7 space-y-4 text-left">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="px-4 py-1.5 bg-yellow-400/20 text-yellow-300 font-extrabold text-sm sm:text-base uppercase tracking-wider rounded-full border border-yellow-400/40 shadow-sm">
                                5. KONU - 2 • 5. SINIF BİLİŞİM TEKNOLOJİLERİ
                            </span>
                            <span class="px-3 py-1 bg-purple-500/20 text-purple-300 font-bold text-xs rounded-full border border-purple-400/30">
                                🚀 Yazılım & Dosya Mimarisi
                            </span>
                        </div>

                        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-black text-white tracking-tight leading-tight drop-shadow-xl">
                            YAZILIM, KAPASİTE VE DOSYA YÖNETİMİ
                        </h1>

                        <div class="p-4 sm:p-5 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-purple-400/50 shadow-xl space-y-1.5">
                            <div class="flex items-center gap-2 text-yellow-300 font-black text-xs sm:text-sm uppercase tracking-widest">
                                <i class="fa-solid fa-bullseye text-base text-yellow-400"></i>
                                <span>ÖĞRENME ÇIKTISI:</span>
                            </div>
                            <p class="text-xl sm:text-2xl md:text-[23px] font-extrabold text-white leading-snug">
                                <span class="text-yellow-300 font-black">BTY.5.1.5 - BTY.5.1.6 –</span> Yazılım türlerini belirleyebilme, kapasite birimlerini sıralayabilme ve dosya yönetimini çözümleyebilme.
                            </p>
                        </div>

                        <div class="p-3.5 sm:p-4 bg-purple-950/80 rounded-2xl border border-purple-400/30 flex items-start gap-3 shadow-lg">
                            <div class="w-10 h-10 rounded-xl bg-purple-500/30 text-yellow-300 flex items-center justify-center text-xl shrink-0 mt-0.5">
                                <i class="fa-solid fa-lightbulb"></i>
                            </div>
                            <p class="text-sm sm:text-base font-semibold text-purple-100 leading-relaxed">
                                “Donanıma can veren yazılımları, yerli gururumuz Pardus'u, Bit'ten Terabyte'a kapasite merdivenini ve dosyaların gizemli uzantılarını keşfetmeye hazır mısınız?”
                            </p>
                        </div>

                        <div class="pt-1 flex items-center gap-3">
                            <span class="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-yellow-300 font-bold text-xs sm:text-sm shadow-md">
                                <i class="fa-solid fa-chalkboard-user text-base"></i>
                                <span>Öğretmen Bozok • Bozok Bilişim Portalı</span>
                            </span>
                            <button onclick="app.nextSlide(); sounds.playClick();" class="px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
                                <span>Ders Başlasın</span>
                                <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                    <div class="md:col-span-5 flex justify-center">
                        <div class="relative w-full max-w-sm sm:max-w-md rounded-3xl p-3 bg-gradient-to-tr from-purple-500/30 via-indigo-500/20 to-cyan-500/30 border-2 border-purple-400/30 shadow-2xl backdrop-blur-sm group">
                            <div class="relative w-full aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-950 flex flex-col items-center justify-center p-6 text-center space-y-3">
                                <div class="w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center text-white text-4xl shadow-xl shadow-purple-500/40">
                                    <i class="fa-solid fa-code"></i>
                                </div>
                                <h3 class="text-xl font-black text-white">Yazılım & Dosya Sistemi</h3>
                                <p class="text-xs text-slate-300">
                                    Donanım beden ise, yazılım o bedene can veren akıldır!
                                </p>
                                <div class="flex items-center gap-2 flex-wrap justify-center pt-1">
                                    <span class="px-2.5 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-[11px] font-bold border border-purple-400/30">Pardus / Windows</span>
                                    <span class="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 rounded-lg text-[11px] font-bold border border-cyan-400/30">Bit - Byte - TB</span>
                                    <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 rounded-lg text-[11px] font-bold border border-emerald-400/30">.docx, .mp3, .zip</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 2: Bugün Neler Öğreneceğiz?
        {
            id: 2,
            title: "BUGÜN NELER ÖĞRENECEĞİZ? 🎯",
            subtitle: "Dersimizin Ana Durakları ve Öğrenme Kartları",
            topic: "5. KONU - 2 • BTY.5.1.5 - BTY.5.1.6",
            badge: "HEDEFLER",
            icon: "fa-solid fa-compass",
            bgColor: "from-purple-950 via-slate-900 to-indigo-950",
            gradient: "from-purple-950 via-slate-900 to-indigo-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 text-center my-auto py-2">
                    <p class="text-base sm:text-xl text-purple-200 font-semibold">
                        Aşağıdaki 7 öğrenme kartına dokun ve dersteki kilit kavramların ilk ipucunu al!
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2.5 text-left">
                        <button onclick="document.getElementById('slide2-fb').innerText = '💻 YAZILIM: Donanımın ne yapacağını söyleyen tüm programlar ve komutlardır.'; sounds.playClick();" class="p-3 rounded-2xl bg-slate-850 hover:bg-purple-900/60 border-2 border-purple-500/40 hover:border-yellow-400 transition-all shadow-md group flex flex-col justify-between">
                            <span class="text-2xl mb-1 block group-hover:scale-110 transition-transform">💻</span>
                            <div>
                                <h4 class="text-xs font-black text-white">Yazılım Nedir?</h4>
                                <p class="text-[10px] text-slate-400 mt-0.5">Program ve komut</p>
                            </div>
                        </button>

                        <button onclick="document.getElementById('slide2-fb').innerText = '🛡️ İŞLETİM SİSTEMİ: Bilgisayarı yöneten başkomutandır (Windows, Pardus, Android vb.).'; sounds.playClick();" class="p-3 rounded-2xl bg-slate-850 hover:bg-purple-900/60 border-2 border-indigo-500/40 hover:border-yellow-400 transition-all shadow-md group flex flex-col justify-between">
                            <span class="text-2xl mb-1 block group-hover:scale-110 transition-transform">🛡️</span>
                            <div>
                                <h4 class="text-xs font-black text-white">İşletim Sistemi</h4>
                                <p class="text-[10px] text-slate-400 mt-0.5">Ana yönetici</p>
                            </div>
                        </button>

                        <button onclick="document.getElementById('slide2-fb').innerText = '📱 UYGULAMA YAZILIMI: Belirli bir iş için kullandığımız araçlardır (Word, Paint, Oyunlar).'; sounds.playClick();" class="p-3 rounded-2xl bg-slate-850 hover:bg-purple-900/60 border-2 border-cyan-500/40 hover:border-yellow-400 transition-all shadow-md group flex flex-col justify-between">
                            <span class="text-2xl mb-1 block group-hover:scale-110 transition-transform">📱</span>
                            <div>
                                <h4 class="text-xs font-black text-white">Uygulamalar</h4>
                                <p class="text-[10px] text-slate-400 mt-0.5">Günlük araçlar</p>
                            </div>
                        </button>

                        <button onclick="document.getElementById('slide2-fb').innerText = '📜 LİSANS TÜRLERİ: Ücretsiz (Freeware), Lisanslı, Demo ve Açık Kaynaklı yazılımlardır.'; sounds.playClick();" class="p-3 rounded-2xl bg-slate-850 hover:bg-purple-900/60 border-2 border-emerald-500/40 hover:border-yellow-400 transition-all shadow-md group flex flex-col justify-between">
                            <span class="text-2xl mb-1 block group-hover:scale-110 transition-transform">📜</span>
                            <div>
                                <h4 class="text-xs font-black text-white">Lisans Türleri</h4>
                                <p class="text-[10px] text-slate-400 mt-0.5">Yasal kullanım</p>
                            </div>
                        </button>

                        <button onclick="document.getElementById('slide2-fb').innerText = '📶 KAPASİTE MERDİVENİ: Bit < Byte < KB < MB < GB < TB (1024 kat kuralı).'; sounds.playClick();" class="p-3 rounded-2xl bg-slate-850 hover:bg-purple-900/60 border-2 border-amber-500/40 hover:border-yellow-400 transition-all shadow-md group flex flex-col justify-between">
                            <span class="text-2xl mb-1 block group-hover:scale-110 transition-transform">📶</span>
                            <div>
                                <h4 class="text-xs font-black text-white">Kapasite</h4>
                                <p class="text-[10px] text-slate-400 mt-0.5">Hafıza basamağı</p>
                            </div>
                        </button>

                        <button onclick="document.getElementById('slide2-fb').innerText = '📄 DOSYA & UZANTI: [Dosya Adı] . [Dosya Uzantısı]. Uzantı dosyanın türünü belirler!'; sounds.playClick();" class="p-3 rounded-2xl bg-slate-850 hover:bg-purple-900/60 border-2 border-blue-500/40 hover:border-yellow-400 transition-all shadow-md group flex flex-col justify-between">
                            <span class="text-2xl mb-1 block group-hover:scale-110 transition-transform">📄</span>
                            <div>
                                <h4 class="text-xs font-black text-white">Dosya & Uzantı</h4>
                                <p class="text-[10px] text-slate-400 mt-0.5">Dosyanın kimliği</p>
                            </div>
                        </button>

                        <button onclick="document.getElementById('slide2-fb').innerText = '📁 KLASÖR YÖNETİMİ: Dosyalarımızı düzenli sakladığımız dolaplardır. Uzantıları yoktur!'; sounds.playClick();" class="p-3 rounded-2xl bg-slate-850 hover:bg-purple-900/60 border-2 border-rose-500/40 hover:border-yellow-400 transition-all shadow-md group flex flex-col justify-between">
                            <span class="text-2xl mb-1 block group-hover:scale-110 transition-transform">📁</span>
                            <div>
                                <h4 class="text-xs font-black text-white">Klasör Ağacı</h4>
                                <p class="text-[10px] text-slate-400 mt-0.5">Düzen & hiyerarşi</p>
                            </div>
                        </button>
                    </div>

                    <div id="slide2-fb" class="p-4 bg-gradient-to-r from-purple-900/80 via-indigo-900/80 to-slate-900/80 rounded-2xl border-2 border-yellow-400/50 text-yellow-300 font-extrabold text-sm sm:text-base min-h-[56px] flex items-center justify-center shadow-lg">
                        👆 Yukarıdaki 7 öğrenme kartından birine dokunarak ilk ipucunu al!
                    </div>
                </div>
            `
        },

        // Slayt 3: Donanım vs. Yazılım (Beden ve Ruh)
        {
            id: 3,
            title: "DONANIM VE YAZILIM İLİŞKİSİ 🤝",
            subtitle: "Beden ve Ruh Benzetmesiyle Bilgisayar Sistemi",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "TEMEL İLKE",
            icon: "fa-solid fa-people-arrows",
            bgColor: "from-slate-900 via-indigo-950 to-purple-950",
            gradient: "from-slate-900 via-indigo-950 to-purple-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <div class="p-4 bg-purple-950/70 rounded-2xl border-2 border-purple-400/50 text-center">
                        <h2 class="text-lg sm:text-2xl font-black text-yellow-300">
                            “Bilgisayar = Donanım (Beden) + Yazılım (Ruh)”
                        </h2>
                        <p class="text-xs sm:text-sm text-slate-200 mt-1">
                            Biri olmadan diğeri tek başına hiçbir işe yaramaz!
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        <div class="p-5 rounded-2xl bg-slate-900/90 border-2 border-cyan-500/40 space-y-3 shadow-xl">
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl">
                                    <i class="fa-solid fa-microchip"></i>
                                </div>
                                <div>
                                    <span class="px-2.5 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 text-xs font-black uppercase">Fiziksel Yapı</span>
                                    <h3 class="text-lg font-black text-white">DONANIM (Beden)</h3>
                                </div>
                            </div>
                            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                Bilgisayarı oluşturan tüm somut parçalardır. Elle tutulabilir, gözle görülebilir (Kasa, Ekran, Klavye, Anakart, İşlemci).
                            </p>
                            <div class="p-3 bg-slate-950 rounded-xl text-xs text-cyan-200 border border-slate-800">
                                💡 <strong>Benzetme:</strong> Arabanın motoru, tekerlekleri ve kasası donanımdır. Ama şoför veya yakıt olmadan araba çalışamaz!
                            </div>
                        </div>

                        <div class="p-5 rounded-2xl bg-slate-900/90 border-2 border-purple-500/40 space-y-3 shadow-xl">
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl">
                                    <i class="fa-solid fa-code"></i>
                                </div>
                                <div>
                                    <span class="px-2.5 py-0.5 rounded-md bg-purple-500/20 text-purple-300 text-xs font-black uppercase">Mantıksal Komut</span>
                                    <h3 class="text-lg font-black text-white">YAZILIM (Ruh / Zekâ)</h3>
                                </div>
                            </div>
                            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                Donanım parçalarının nasıl çalışacağını, ekranda ne görüneceğini ve komutların nasıl işleneceğini yöneten programlar bütünüdür.
                            </p>
                            <div class="p-3 bg-slate-950 rounded-xl text-xs text-purple-200 border border-slate-800">
                                💡 <strong>Benzetme:</strong> Arabayı süren şoför ve gideceği rotayı belirleyen harita yazılımdır!
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 4: Yazılım Nedir ve Nasıl Çalışır?
        {
            id: 4,
            title: "YAZILIM NEDİR? 💡",
            subtitle: "Bilgisayara Ne Yapacağını Söyleyen Kod Dünyası",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "TANIM",
            icon: "fa-solid fa-file-code",
            bgColor: "from-slate-900 via-purple-950 to-blue-950",
            gradient: "from-slate-900 via-purple-950 to-blue-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <div class="p-4 bg-indigo-950/70 rounded-2xl border-2 border-indigo-400/50 shadow-xl text-center space-y-1">
                        <span class="px-3 py-0.5 bg-indigo-500/20 text-indigo-300 font-black text-[11px] uppercase tracking-widest rounded-full border border-indigo-400/30">
                            Resmî Müfredat Tanımı
                        </span>
                        <h2 class="text-lg sm:text-xl md:text-2xl font-black text-yellow-300 leading-snug">
                            “Bilgisayarın donanım parçalarını yöneten, kullanıcının isteklerini yerine getiren program, komut ve veri bütününe <span class="text-white underline decoration-purple-400">YAZILIM</span> denir.”
                        </h2>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                        <div class="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2">
                            <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl">
                                <i class="fa-solid fa-keyboard"></i>
                            </div>
                            <h4 class="text-sm font-black text-white">Programcılar Yazar</h4>
                            <p class="text-xs text-slate-300">
                                Yazılımlar, yazılımcı ve mühendisler tarafından programlama dilleriyle (Python, Scratch, C++ vb.) kodlanır.
                            </p>
                        </div>

                        <div class="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2">
                            <div class="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xl">
                                <i class="fa-solid fa-microchip"></i>
                            </div>
                            <h4 class="text-sm font-black text-white">İşlemci Yürütür</h4>
                            <p class="text-xs text-slate-300">
                                Yazılan kodları bilgisayarın beyni olan işlemci (CPU) okur ve donanımlara uygun elektrik sinyallerine çevirir.
                            </p>
                        </div>

                        <div class="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2">
                            <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl">
                                <i class="fa-solid fa-user-check"></i>
                            </div>
                            <h4 class="text-sm font-black text-white">Kullanıcı Yararlanır</h4>
                            <p class="text-xs text-slate-300">
                                Bizler ekranda tek bir butona tıklayarak ödev yazarız, resim çizeriz veya oyun oynarız!
                            </p>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 5: Yazılım Çeşitleri Şeması
        {
            id: 5,
            title: "YAZILIM ÇEŞİTLERİ 📊",
            subtitle: "Sistem Yazılımları ve Uygulama Yazılımları",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "SINIFLANDIRMA",
            icon: "fa-solid fa-sitemap",
            bgColor: "from-slate-900 via-indigo-950 to-purple-950",
            gradient: "from-slate-900 via-indigo-950 to-purple-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <p class="text-center text-sm sm:text-base text-slate-200">
                        Bilgisayarda kullandığımız yazılımlar temel işlevlerine göre <strong>2 ana gruba</strong> ayrılır:
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        <!-- 1. Sistem Yazılımları -->
                        <div class="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/90 to-slate-900 border-2 border-indigo-500/50 space-y-3 shadow-xl">
                            <div class="flex items-center justify-between">
                                <span class="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-black text-xs uppercase border border-indigo-400/30">
                                    1. Grup
                                </span>
                                <i class="fa-solid fa-gears text-2xl text-indigo-400"></i>
                            </div>
                            <h3 class="text-lg font-black text-white">SİSTEM YAZILIMLARI (İşletim Sistemi)</h3>
                            <p class="text-xs text-slate-300">
                                Bilgisayar donanımının doğrudan çalışmasını, belleğin yönetilmesini ve diğer tüm programların çalışabilmesini sağlayan temel yazılımlardır.
                            </p>
                            <div class="p-3 bg-slate-950/80 rounded-xl border border-indigo-500/30 space-y-1 text-xs">
                                <strong class="text-yellow-300 block">Örnekler:</strong>
                                <p>• Windows, Pardus, Linux, macOS (Bilgisayarlar)</p>
                                <p>• Android, iOS (Telefon ve Tabletler)</p>
                            </div>
                        </div>

                        <!-- 2. Uygulama Yazılımları -->
                        <div class="p-5 rounded-2xl bg-gradient-to-br from-purple-950/90 to-slate-900 border-2 border-purple-500/50 space-y-3 shadow-xl">
                            <div class="flex items-center justify-between">
                                <span class="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 font-black text-xs uppercase border border-purple-400/30">
                                    2. Grup
                                </span>
                                <i class="fa-solid fa-shapes text-2xl text-purple-400"></i>
                            </div>
                            <h3 class="text-lg font-black text-white">UYGULAMA YAZILIMLARI</h3>
                            <p class="text-xs text-slate-300">
                                Kullanıcıların belirli bir ihtiyacını (yazı yazmak, internette gezinmek, resim çizmek, oyun oynamak) karşılamak amacıyla üretilen programlardır.
                            </p>
                            <div class="p-3 bg-slate-950/80 rounded-xl border border-purple-500/30 space-y-1 text-xs">
                                <strong class="text-yellow-300 block">Örnekler:</strong>
                                <p>• Microsoft Word, Paint, Google Chrome, Scratch</p>
                                <p>• VLC Medya Oynatıcı, WhatsApp, Minecraft</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 6: İşletim Sistemi Nedir?
        {
            id: 6,
            title: "İŞLETİM SİSTEMİ NEDİR? 🛡️",
            subtitle: "Bilgisayarın Başkomutanı ve Görünmez Yöneticisi",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "BAŞKOMUTAN",
            icon: "fa-solid fa-shield-halved",
            bgColor: "from-slate-900 via-blue-950 to-indigo-950",
            gradient: "from-slate-900 via-blue-950 to-indigo-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <div class="p-4 bg-blue-950/70 rounded-2xl border-2 border-blue-400/50 shadow-xl text-center">
                        <h2 class="text-lg sm:text-2xl font-black text-yellow-300">
                            “İşletim sistemi olmadan bilgisayar sadece bir demir yığınıdır!”
                        </h2>
                        <p class="text-xs sm:text-sm text-slate-200 mt-1">
                            Güç tuşuna bastığınız andan bilgisayar kapanana kadar her şeyi işletim sistemi yönetir.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                        <div class="p-4 bg-slate-850 rounded-2xl border border-blue-500/30 space-y-2">
                            <span class="text-2xl">🔌</span>
                            <h4 class="text-sm font-black text-white">Donanımları Yönetir</h4>
                            <p class="text-xs text-slate-300">
                                Klavyeden basılan tuşu, ekrandaki görüntüyü, yazıcıya giden belgeyi ve hoparlördeki sesi kontrol eder.
                            </p>
                        </div>

                        <div class="p-4 bg-slate-850 rounded-2xl border border-cyan-500/30 space-y-2">
                            <span class="text-2xl">📁</span>
                            <h4 class="text-sm font-black text-white">Dosyaları Saklar</h4>
                            <p class="text-xs text-slate-300">
                                Belgelerinizin, oyunlarınızın ve fotoğraflarınızın sabit diskte nerede duracağını ve nasıl açılacağını organize eder.
                            </p>
                        </div>

                        <div class="p-4 bg-slate-850 rounded-2xl border border-indigo-500/30 space-y-2">
                            <span class="text-2xl">🖥️</span>
                            <h4 class="text-sm font-black text-white">Arayüz Sunar</h4>
                            <p class="text-xs text-slate-300">
                                Masaüstü, pencereler, fare imleci ve simgeler sayesinde bilgisayarı kolayca kullanmamızı sağlar.
                            </p>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 7: Masaüstü ve Mobil İşletim Sistemleri (Pardus Vurgusu)
        {
            id: 7,
            title: "İŞLETİM SİSTEMLERİ AİLESİ 🌍",
            subtitle: "Masaüstü, Mobil ve Yerli Gururumuz PARDUS",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "AİLE",
            icon: "fa-solid fa-cubes",
            bgColor: "from-slate-900 via-indigo-950 to-slate-900",
            gradient: "from-slate-900 via-indigo-950 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        <!-- Masaüstü -->
                        <div class="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2.5">
                            <h3 class="text-sm font-black text-cyan-300 uppercase flex items-center gap-2">
                                <i class="fa-solid fa-desktop"></i> Bilgisayar İşletim Sistemleri
                            </h3>
                            <div class="space-y-2 text-xs">
                                <div class="p-2.5 bg-slate-900 rounded-xl border border-slate-700 flex items-center justify-between">
                                    <span class="font-bold text-white"><i class="fa-brands fa-windows text-blue-400 mr-2"></i>Windows</span>
                                    <span class="text-slate-400 text-[11px]">En yaygın masaüstü OS</span>
                                </div>
                                <div class="p-2.5 bg-slate-900 rounded-xl border-2 border-red-500/60 flex items-center justify-between bg-red-950/30">
                                    <span class="font-bold text-yellow-300"><i class="fa-solid fa-paw text-red-400 mr-2"></i>PARDUS</span>
                                    <span class="text-red-300 font-extrabold text-[11px]">🇹🇷 Yerli & Milli (TÜBİTAK)</span>
                                </div>
                                <div class="p-2.5 bg-slate-900 rounded-xl border border-slate-700 flex items-center justify-between">
                                    <span class="font-bold text-white"><i class="fa-brands fa-linux text-amber-400 mr-2"></i>Linux</span>
                                    <span class="text-slate-400 text-[11px]">Açık kaynak & özgür OS</span>
                                </div>
                                <div class="p-2.5 bg-slate-900 rounded-xl border border-slate-700 flex items-center justify-between">
                                    <span class="font-bold text-white"><i class="fa-brands fa-apple text-slate-300 mr-2"></i>macOS</span>
                                    <span class="text-slate-400 text-[11px]">Apple bilgisayarlar için</span>
                                </div>
                            </div>
                        </div>

                        <!-- Mobil -->
                        <div class="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2.5">
                            <h3 class="text-sm font-black text-purple-300 uppercase flex items-center gap-2">
                                <i class="fa-solid fa-mobile-screen"></i> Mobil İşletim Sistemleri
                            </h3>
                            <div class="space-y-2 text-xs">
                                <div class="p-3 bg-slate-900 rounded-xl border border-slate-700 flex items-center justify-between">
                                    <span class="font-bold text-white"><i class="fa-brands fa-android text-emerald-400 mr-2 text-base"></i>Android</span>
                                    <span class="text-emerald-300 font-bold text-[11px]">Telefon ve tabletlerin %75'i</span>
                                </div>
                                <div class="p-3 bg-slate-900 rounded-xl border border-slate-700 flex items-center justify-between">
                                    <span class="font-bold text-white"><i class="fa-brands fa-apple text-slate-300 mr-2 text-base"></i>iOS</span>
                                    <span class="text-slate-300 font-bold text-[11px]">iPhone ve iPad cihazlar</span>
                                </div>
                                <div class="p-3 bg-amber-950/40 border border-amber-500/40 rounded-xl text-amber-200">
                                    <span class="font-bold block mb-1">🐾 PARDUS'u Tanıyalım:</span>
                                    TÜBİTAK tarafından geliştirilen, adını Anadolu parsından alan, okullardaki etkileşimli tahtalarda ve kamu kurumlarında kullanılan güvenli, yerli ve ücretsiz milli işletim sistemimizdir!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 8: Uygulama Yazılımları
        {
            id: 8,
            title: "UYGULAMA YAZILIMLARI DÜNYASI 📱",
            subtitle: "Günlük Yaşamımızda Kullandığımız Programlar",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "UYGULAMALAR",
            icon: "fa-solid fa-shapes",
            bgColor: "from-slate-900 via-indigo-950 to-purple-950",
            gradient: "from-slate-900 via-indigo-950 to-purple-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <p class="text-center text-sm sm:text-base text-slate-200">
                        İşletim sistemi üzerine kurulan ve işlerimizi kolaylaştıran uygulamalar:
                    </p>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                        <div class="p-3.5 bg-slate-850 rounded-2xl border border-blue-500/30 space-y-2">
                            <span class="text-2xl text-blue-400"><i class="fa-solid fa-file-word"></i></span>
                            <h4 class="text-xs sm:text-sm font-black text-white">Kelime İşlemciler</h4>
                            <p class="text-[11px] text-slate-300">Metin ve ödev yazmak için (Word, LibreOffice Writer, Google Dokümanlar).</p>
                        </div>

                        <div class="p-3.5 bg-slate-850 rounded-2xl border border-emerald-500/30 space-y-2">
                            <span class="text-2xl text-emerald-400"><i class="fa-solid fa-palette"></i></span>
                            <h4 class="text-xs sm:text-sm font-black text-white">Çizim & Tasarım</h4>
                            <p class="text-[11px] text-slate-300">Resim ve grafik oluşturmak için (Paint, Photoshop, Canva, Tinkercad).</p>
                        </div>

                        <div class="p-3.5 bg-slate-850 rounded-2xl border border-cyan-500/30 space-y-2">
                            <span class="text-2xl text-cyan-400"><i class="fa-solid fa-globe"></i></span>
                            <h4 class="text-xs sm:text-sm font-black text-white">Web Tarayıcılar</h4>
                            <p class="text-[11px] text-slate-300">İnternette gezinmek için (Chrome, Edge, Firefox, Safari).</p>
                        </div>

                        <div class="p-3.5 bg-slate-850 rounded-2xl border border-purple-500/30 space-y-2">
                            <span class="text-2xl text-purple-400"><i class="fa-solid fa-gamepad"></i></span>
                            <h4 class="text-xs sm:text-sm font-black text-white">Eğlence & Oyunlar</h4>
                            <p class="text-[11px] text-slate-300">Müzik dinleme, video izleme ve oyun oynama yazılımları (Spotify, VLC).</p>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 9: Yazılım Lisans Türleri
        {
            id: 9,
            title: "YAZILIM LİSANS TÜRLERİ 📜",
            subtitle: "Hangi Yazılımı Nasıl Kullanabiliriz? Etik ve Hukuk",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "LİSANSLAR",
            icon: "fa-solid fa-certificate",
            bgColor: "from-slate-900 via-purple-950 to-slate-900",
            gradient: "from-slate-900 via-purple-950 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-left">
                        <div class="p-4 bg-slate-850 rounded-2xl border-2 border-emerald-500/40 space-y-2">
                            <div class="flex items-center justify-between">
                                <span class="text-2xl">🆓</span>
                                <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-black uppercase">Ücretsiz</span>
                            </div>
                            <h4 class="text-sm font-black text-white">Ücretsiz (Freeware)</h4>
                            <p class="text-xs text-slate-300">
                                Hiçbir ücret talep edilmeden herkesin süresiz kullanabileceği yazılımlardır. (Örn: Chrome, VLC).
                            </p>
                        </div>

                        <div class="p-4 bg-slate-850 rounded-2xl border-2 border-blue-500/40 space-y-2">
                            <div class="flex items-center justify-between">
                                <span class="text-2xl">💳</span>
                                <span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-black uppercase">Lisanslı</span>
                            </div>
                            <h4 class="text-sm font-black text-white">Lisanslı (Ticari)</h4>
                            <p class="text-xs text-slate-300">
                                Kullanım hakkı ücret ödenerek satın alınan yazılımlardır. İzinsiz kopyalamak suçtur! (Örn: Windows, Office).
                            </p>
                        </div>

                        <div class="p-4 bg-slate-850 rounded-2xl border-2 border-amber-500/40 space-y-2">
                            <div class="flex items-center justify-between">
                                <span class="text-2xl">⏳</span>
                                <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-black uppercase">Demo</span>
                            </div>
                            <h4 class="text-sm font-black text-white">Demo / Paylaşımlı</h4>
                            <p class="text-xs text-slate-300">
                                Tanıtım amacıyla 30 gün gibi kısıtlı süre veya sınırlı özelliklerle sunulan deneme sürümleridir.
                            </p>
                        </div>

                        <div class="p-4 bg-slate-850 rounded-2xl border-2 border-purple-500/40 space-y-2">
                            <div class="flex items-center justify-between">
                                <span class="text-2xl">🔓</span>
                                <span class="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] font-black uppercase">Açık Kaynak</span>
                            </div>
                            <h4 class="text-sm font-black text-white">Açık Kaynak Kodlu</h4>
                            <p class="text-xs text-slate-300">
                                Kodları herkese açık olan, geliştirilebilen ve paylaşılan özgür yazılımlardır. (Örn: Pardus, Linux, Blender).
                            </p>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 10: En Küçük Veri Birimi: BİT ve BYTE
        {
            id: 10,
            title: "HAFIZANIN TEMELİ: BİT VE BYTE 🧩",
            subtitle: "Bilgisayarın Dili: 0'lar ve 1'ler (İkili Sistem)",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "TEMEL BİRİM",
            icon: "fa-solid fa-microchip",
            bgColor: "from-slate-900 via-indigo-950 to-blue-950",
            gradient: "from-slate-900 via-indigo-950 to-blue-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        <div class="p-5 rounded-2xl bg-slate-850 border-2 border-blue-500/40 space-y-3">
                            <div class="flex items-center gap-2">
                                <span class="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-black text-xs">EN KÜÇÜK BİRİM</span>
                                <h3 class="text-lg font-black text-white">BİT (Binary Digit)</h3>
                            </div>
                            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                Bilgisayar elektrikle çalışır ve sadece iki durumu anlar: <strong>Elektrik var (1)</strong> veya <strong>Elektrik yok (0)</strong>.
                            </p>
                            <div class="p-3 bg-slate-900 rounded-xl text-center border border-slate-700">
                                <span class="text-2xl font-black text-yellow-300 tracking-widest">0 veya 1</span>
                                <span class="block text-[11px] text-slate-400 mt-1">= 1 Bit (En küçük dijital parça)</span>
                            </div>
                        </div>

                        <div class="p-5 rounded-2xl bg-slate-850 border-2 border-purple-500/40 space-y-3">
                            <div class="flex items-center gap-2">
                                <span class="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 font-black text-xs">8 BİT'İN GÜCÜ</span>
                                <h3 class="text-lg font-black text-white">BYTE (Bayt)</h3>
                            </div>
                            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                Yan yana gelen <strong>8 tane Bit</strong> birleşerek <strong>1 Byte</strong> oluşturur. Klavyeden bastığımız 1 harf tam 1 Byte'tır!
                            </p>
                            <div class="p-3 bg-slate-900 rounded-xl text-center border border-slate-700">
                                <span class="text-2xl font-black text-emerald-400">8 Bit = 1 Byte</span>
                                <span class="block text-[11px] text-slate-400 mt-1">Örn: "A" harfi = 1 Byte yer tutar!</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 11: Kapasite Merdiveni (1024 Kat Kuralı)
        {
            id: 11,
            title: "KAPASİTE MERDİVENİ 📶",
            subtitle: "Büyükten Küçüğe 1024 Kat Kuralı",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "MERDİVEN",
            icon: "fa-solid fa-stairs",
            bgColor: "from-slate-900 via-indigo-950 to-slate-900",
            gradient: "from-slate-900 via-indigo-950 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <div class="p-3.5 bg-yellow-400/10 border border-yellow-400/30 rounded-2xl text-center text-xs sm:text-sm text-yellow-200">
                        ⚡ <strong>Altın Kural:</strong> Kapasite birimleri biner biner değil, tam olarak <strong>1024'er 1024'er</strong> büyür!
                    </div>

                    <div class="space-y-1.5 max-w-2xl mx-auto text-left text-xs sm:text-sm">
                        <div class="p-2.5 rounded-xl bg-purple-950/80 border border-purple-500/50 flex justify-between items-center text-white">
                            <span class="font-black text-purple-300"><i class="fa-solid fa-hard-drive mr-2"></i>1 Terabyte (TB)</span>
                            <span class="font-bold text-yellow-300">= 1024 Gigabyte (GB)</span>
                        </div>
                        <div class="p-2.5 rounded-xl bg-indigo-950/80 border border-indigo-500/50 flex justify-between items-center text-white">
                            <span class="font-black text-indigo-300"><i class="fa-solid fa-film mr-2"></i>1 Gigabyte (GB)</span>
                            <span class="font-bold text-yellow-300">= 1024 Megabyte (MB)</span>
                        </div>
                        <div class="p-2.5 rounded-xl bg-blue-950/80 border border-blue-500/50 flex justify-between items-center text-white">
                            <span class="font-black text-blue-300"><i class="fa-solid fa-music mr-2"></i>1 Megabyte (MB)</span>
                            <span class="font-bold text-yellow-300">= 1024 Kilobyte (KB)</span>
                        </div>
                        <div class="p-2.5 rounded-xl bg-teal-950/80 border border-teal-500/50 flex justify-between items-center text-white">
                            <span class="font-black text-teal-300"><i class="fa-solid fa-file-lines mr-2"></i>1 Kilobyte (KB)</span>
                            <span class="font-bold text-yellow-300">= 1024 Byte</span>
                        </div>
                        <div class="p-2.5 rounded-xl bg-slate-900 border border-slate-700 flex justify-between items-center text-white">
                            <span class="font-black text-slate-300"><i class="fa-solid fa-font mr-2"></i>1 Byte</span>
                            <span class="font-bold text-emerald-400">= 8 Bit</span>
                        </div>
                    </div>

                    <div class="text-center text-xs font-black text-cyan-300 uppercase tracking-widest">
                        Büyüklük Sırası: Bit &lt; Byte &lt; KB &lt; MB &lt; GB &lt; TB
                    </div>
                </div>
            `
        },

        // Slayt 12: Gerçek Hayatta Hangi Veri Ne Kadar Yer Tutar?
        {
            id: 12,
            title: "GERÇEK HAYAT KAPASİTELERİ 📊",
            subtitle: "Hangi Dosya Bellekte Ne Kadar Yer Kaplar?",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "ÖRNEKLER",
            icon: "fa-solid fa-database",
            bgColor: "from-slate-900 via-indigo-950 to-purple-950",
            gradient: "from-slate-900 via-indigo-950 to-purple-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left text-xs sm:text-sm">
                        <div class="p-3.5 bg-slate-850 rounded-2xl border border-slate-700 space-y-1">
                            <span class="text-xs font-black text-blue-400 block">1 Byte</span>
                            <strong class="text-white block">Tek Bir Harf ("B")</strong>
                            <p class="text-[11px] text-slate-400">Klavyedeki herhangi bir karakter.</p>
                        </div>

                        <div class="p-3.5 bg-slate-850 rounded-2xl border border-slate-700 space-y-1">
                            <span class="text-xs font-black text-teal-400 block">~50 KB</span>
                            <strong class="text-white block">1 Sayfalık Word Ödevi</strong>
                            <p class="text-[11px] text-slate-400">Yazılmış ödev ve kompozisyon.</p>
                        </div>

                        <div class="p-3.5 bg-slate-850 rounded-2xl border border-slate-700 space-y-1">
                            <span class="text-xs font-black text-emerald-400 block">~4 MB</span>
                            <strong class="text-white block">1 Adet MP3 Müzik</strong>
                            <p class="text-[11px] text-slate-400">Kulaklıkla dinlenen bir şarkı.</p>
                        </div>

                        <div class="p-3.5 bg-slate-850 rounded-2xl border border-slate-700 space-y-1">
                            <span class="text-xs font-black text-amber-400 block">~2 GB</span>
                            <strong class="text-white block">1 Adet HD Sinema Filmi</strong>
                            <p class="text-[11px] text-slate-400">Televizyonda izlenen 2 saatlik film.</p>
                        </div>

                        <div class="p-3.5 bg-slate-850 rounded-2xl border border-slate-700 space-y-1">
                            <span class="text-xs font-black text-purple-400 block">~60 GB</span>
                            <strong class="text-white block">Büyük Bir 3D Bilgisayar Oyunu</strong>
                            <p class="text-[11px] text-slate-400">Grafikleri zengin modern bir oyun.</p>
                        </div>

                        <div class="p-3.5 bg-slate-850 rounded-2xl border border-slate-700 space-y-1">
                            <span class="text-xs font-black text-rose-400 block">1 - 2 TB</span>
                            <strong class="text-white block">Harici Sabit Disk (HDD/SSD)</strong>
                            <p class="text-[11px] text-slate-400">Yüz binlerce fotoğraf ve yüzlerce film.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 13: İnteraktif Sınıflandırma Mini Oyunu
        {
            id: 13,
            title: "MİNİ OYUN: KAPASİTE TAHMİNİ 🎮",
            subtitle: "Verilen Dosya İçin En Uygun Birimi Seç!",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "İNTERAKTİF",
            icon: "fa-solid fa-gamepad",
            bgColor: "from-slate-900 via-indigo-950 to-slate-900",
            gradient: "from-slate-900 via-indigo-950 to-slate-900",
            content: `
                <div class="max-w-2xl mx-auto space-y-4 my-auto py-2 text-center">
                    <div class="p-5 rounded-3xl bg-slate-850 border-2 border-purple-500/50 shadow-2xl space-y-3">
                        <div class="flex items-center justify-between">
                            <span id="slide13-counter" class="px-3 py-1 bg-purple-500/20 text-purple-300 font-black text-xs rounded-full border border-purple-400/30">
                                Soru: 1 / 6
                            </span>
                            <div class="w-12 h-12 rounded-2xl bg-purple-500/20 text-yellow-400 flex items-center justify-center text-2xl shadow-inner">
                                <i id="slide13-icon" class="fa-solid fa-font"></i>
                            </div>
                        </div>

                        <h3 id="slide13-title" class="text-lg sm:text-2xl font-black text-white">
                            Klavyeden basılan tek bir 'A' harfi
                        </h3>

                        <p id="slide13-hint" class="text-xs sm:text-sm text-slate-300 italic">
                            “1 karakterlik veri bellekte 8 bitlik yer kaplar.”
                        </p>

                        <!-- 6 Seçenek Butonu -->
                        <div class="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-2">
                            <button onclick="window.slide13Game.check('bit')" class="p-2.5 rounded-xl bg-slate-800 hover:bg-purple-600 text-white font-black text-xs border border-slate-700 transition-all active:scale-95">
                                Bit
                            </button>
                            <button onclick="window.slide13Game.check('byte')" class="p-2.5 rounded-xl bg-slate-800 hover:bg-purple-600 text-white font-black text-xs border border-slate-700 transition-all active:scale-95">
                                Byte
                            </button>
                            <button onclick="window.slide13Game.check('kb')" class="p-2.5 rounded-xl bg-slate-800 hover:bg-purple-600 text-white font-black text-xs border border-slate-700 transition-all active:scale-95">
                                KB
                            </button>
                            <button onclick="window.slide13Game.check('mb')" class="p-2.5 rounded-xl bg-slate-800 hover:bg-purple-600 text-white font-black text-xs border border-slate-700 transition-all active:scale-95">
                                MB
                            </button>
                            <button onclick="window.slide13Game.check('gb')" class="p-2.5 rounded-xl bg-slate-800 hover:bg-purple-600 text-white font-black text-xs border border-slate-700 transition-all active:scale-95">
                                GB
                            </button>
                            <button onclick="window.slide13Game.check('tb')" class="p-2.5 rounded-xl bg-slate-800 hover:bg-purple-600 text-white font-black text-xs border border-slate-700 transition-all active:scale-95">
                                TB
                            </button>
                        </div>

                        <div id="slide13-fb" class="hidden"></div>
                    </div>
                </div>
            `
        },

        // Slayt 14: Dosya Nedir? Dosya Anatomisi
        {
            id: 14,
            title: "DOSYA NEDİR VE NASIL OLUŞUR? 📄",
            subtitle: "Dijital Dünyanın Bilgi Paketleri: Dosya Anatomisi",
            topic: "5. KONU - 2 • BTY.5.1.6",
            badge: "DOSYA",
            icon: "fa-solid fa-file",
            bgColor: "from-slate-900 via-indigo-950 to-blue-950",
            gradient: "from-slate-900 via-indigo-950 to-blue-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <div class="p-4 bg-indigo-950/70 rounded-2xl border-2 border-indigo-400/50 shadow-xl text-center">
                        <span class="px-3 py-0.5 bg-indigo-500/20 text-indigo-300 font-black text-[11px] uppercase tracking-widest rounded-full border border-indigo-400/30">
                            Tanım
                        </span>
                        <h2 class="text-lg sm:text-2xl font-black text-yellow-300 mt-1">
                            “Bilgisayarda üretilen, kaydedilen ve saklanan her türlü bilgi ögesine <span class="text-white underline decoration-cyan-400">DOSYA</span> denir.”
                        </h2>
                    </div>

                    <!-- Dosya Anatomisi Formülü -->
                    <div class="p-5 bg-slate-900/90 rounded-2xl border-2 border-purple-500/40 text-center space-y-3">
                        <span class="text-xs font-black text-purple-300 uppercase tracking-wider block">Dosya Adlandırma Formülü:</span>
                        <div class="flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-base sm:text-2xl font-black">
                            <span class="px-4 py-2 bg-blue-600/30 border border-blue-400 text-blue-200 rounded-xl">
                                [ Dosya Adı ]
                            </span>
                            <span class="text-yellow-400 text-3xl font-black">.</span>
                            <span class="px-4 py-2 bg-purple-600/30 border border-purple-400 text-purple-200 rounded-xl">
                                [ Dosya Uzantısı ]
                            </span>
                        </div>
                        <p class="text-xs text-slate-300 max-w-lg mx-auto">
                            Örnek: <code class="px-2 py-1 bg-black/50 text-yellow-300 rounded font-mono font-bold">fen_odevim.docx</code> veya <code class="px-2 py-1 bg-black/50 text-cyan-300 rounded font-mono font-bold">tatil_resmi.jpg</code>
                        </p>
                    </div>
                </div>
            `
        },

        // Slayt 15: Dosya Adında Kullanılamayan Yasak Karakterler
        {
            id: 15,
            title: "YASAKLI KARAKTERLER 🚫",
            subtitle: "Dosya ve Klasör Adı Verirken Bunları Asla Kullanamazsın!",
            topic: "5. KONU - 2 • BTY.5.1.6",
            badge: "YASAKLAR",
            icon: "fa-solid fa-ban",
            bgColor: "from-slate-900 via-rose-950 to-slate-900",
            gradient: "from-slate-900 via-rose-950 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <div class="p-3.5 bg-rose-950/80 border border-rose-500/50 rounded-2xl text-center text-xs sm:text-sm text-rose-200">
                        ⚠️ İşletim sistemi bu 9 özel karakteri kendi sistem komutları için ayırmıştır. Dosya adına yazmaya çalışırsanız hata alırsınız!
                    </div>

                    <div class="grid grid-cols-3 sm:grid-cols-9 gap-2 text-center">
                        <div class="p-3 bg-slate-900 rounded-xl border border-rose-500/50 text-2xl font-black text-rose-400">\\</div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-rose-500/50 text-2xl font-black text-rose-400">/</div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-rose-500/50 text-2xl font-black text-rose-400">:</div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-rose-500/50 text-2xl font-black text-rose-400">*</div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-rose-500/50 text-2xl font-black text-rose-400">?</div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-rose-500/50 text-2xl font-black text-rose-400">"</div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-rose-500/50 text-2xl font-black text-rose-400">&lt;</div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-rose-500/50 text-2xl font-black text-rose-400">&gt;</div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-rose-500/50 text-2xl font-black text-rose-400">|</div>
                    </div>

                    <div class="p-4 bg-slate-900/90 rounded-2xl border border-slate-700 text-left text-xs sm:text-sm text-slate-300 space-y-1">
                        <strong class="text-white block">💡 Neden Yasak?</strong>
                        <p>• <strong>/ ve \\ :</strong> Klasörler arası geçiş işaretidir (C:\\Kullanicilar\\).</p>
                        <p>• <strong>: (İki nokta) :</strong> Sürücü harfini gösterir (C: , D:).</p>
                        <p>• <strong>* ve ? :</strong> Arama yaparken joker karakter olarak kullanılır.</p>
                    </div>
                </div>
            `
        },

        // Slayt 16: Dosya Uzantısı Nedir ve Neden Önemlidir?
        {
            id: 16,
            title: "DOSYA UZANTISI: DOSYANIN SOYADI 🏷️",
            subtitle: "Uzantı Olmazsa Bilgisayar Dosyayı Açamaz!",
            topic: "5. KONU - 2 • BTY.5.1.6",
            badge: "UZANTI",
            icon: "fa-solid fa-tag",
            bgColor: "from-slate-900 via-indigo-950 to-purple-950",
            gradient: "from-slate-900 via-indigo-950 to-purple-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <div class="p-4 bg-purple-950/70 rounded-2xl border-2 border-purple-400/50 text-center">
                        <h2 class="text-lg sm:text-2xl font-black text-yellow-300">
                            “Dosya uzantısı, dosyanın SOYADIDIR!”
                        </h2>
                        <p class="text-xs sm:text-sm text-slate-200 mt-1">
                            Nasıl ki soyadımız kimliğimizi gösterirse, uzantı da dosyanın ne tür bir dosya olduğunu gösterir.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                        <div class="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2">
                            <span class="text-2xl">🔍</span>
                            <h4 class="text-sm font-black text-white">Türünü Belirler</h4>
                            <p class="text-xs text-slate-300">
                                Dosyanın bir resim mi, müzik mi, video mu yoksa yazı mı olduğunu işletim sistemine söyler.
                            </p>
                        </div>

                        <div class="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2">
                            <span class="text-2xl">⚙️</span>
                            <h4 class="text-sm font-black text-white">Programı Eşleştirir</h4>
                            <p class="text-xs text-slate-300">
                                Çift tıkladığınızda dosyanın hangi programla açılması gerektiğini işletim sistemine bildirir (örn: Word veya Medya Oynatıcı).
                            </p>
                        </div>

                        <div class="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-2">
                            <span class="text-2xl">⚠️</span>
                            <h4 class="text-sm font-black text-white">Asla Silinmemeli!</h4>
                            <p class="text-xs text-slate-300">
                                Dosyayı yeniden adlandırırken noktadan sonraki uzantıyı silerseniz dosya çalışmaz ve açılmaz hale gelir!
                            </p>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 17: Temel Dosya Uzantıları Kataloğu
        {
            id: 17,
            title: "TEMEL DOSYA UZANTILARI REHBERİ 📚",
            subtitle: "En Çok Karşılaştığımız Popüler Dosya Formatları",
            topic: "5. KONU - 2 • BTY.5.1.6",
            badge: "KATALOG",
            icon: "fa-solid fa-list-check",
            bgColor: "from-slate-900 via-indigo-950 to-slate-900",
            gradient: "from-slate-900 via-indigo-950 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-left text-xs">
                        <div class="p-3 bg-slate-850 rounded-xl border border-blue-500/40">
                            <span class="font-black text-blue-400 block text-sm">.docx / .txt</span>
                            <strong class="text-white block mt-0.5">Kelime Belgesi</strong>
                            <span class="text-[10px] text-slate-400">Yazı, rapor, kompozisyon</span>
                        </div>
                        <div class="p-3 bg-slate-850 rounded-xl border border-emerald-500/40">
                            <span class="font-black text-emerald-400 block text-sm">.jpg / .png</span>
                            <strong class="text-white block mt-0.5">Resim / Görsel</strong>
                            <span class="text-[10px] text-slate-400">Fotoğraf ve grafik dosyası</span>
                        </div>
                        <div class="p-3 bg-slate-850 rounded-xl border border-purple-500/40">
                            <span class="font-black text-purple-400 block text-sm">.mp3 / .wav</span>
                            <strong class="text-white block mt-0.5">Ses / Müzik</strong>
                            <span class="text-[10px] text-slate-400">Şarkı veya ses kaydı</span>
                        </div>
                        <div class="p-3 bg-slate-850 rounded-xl border border-rose-500/40">
                            <span class="font-black text-rose-400 block text-sm">.mp4 / .avi</span>
                            <strong class="text-white block mt-0.5">Video / Film</strong>
                            <span class="text-[10px] text-slate-400">Görüntülü film ve klipler</span>
                        </div>
                        <div class="p-3 bg-slate-850 rounded-xl border border-amber-500/40">
                            <span class="font-black text-amber-400 block text-sm">.pptx</span>
                            <strong class="text-white block mt-0.5">Sunum Dosyası</strong>
                            <span class="text-[10px] text-slate-400">PowerPoint ders slaytları</span>
                        </div>
                        <div class="p-3 bg-slate-850 rounded-xl border border-emerald-600/40">
                            <span class="font-black text-emerald-300 block text-sm">.xlsx</span>
                            <strong class="text-white block mt-0.5">Hesap Tablosu</strong>
                            <span class="text-[10px] text-slate-400">Excel formül ve tabloları</span>
                        </div>
                        <div class="p-3 bg-slate-850 rounded-xl border border-yellow-500/40">
                            <span class="font-black text-yellow-400 block text-sm">.zip / .rar</span>
                            <strong class="text-white block mt-0.5">Sıkıştırılmış Arşiv</strong>
                            <span class="text-[10px] text-slate-400">Boyutu küçültülmüş paket</span>
                        </div>
                        <div class="p-3 bg-slate-850 rounded-xl border border-cyan-500/40">
                            <span class="font-black text-cyan-400 block text-sm">.exe</span>
                            <strong class="text-white block mt-0.5">Çalıştırılabilir Program</strong>
                            <span class="text-[10px] text-slate-400">Oyun/program kurulumu</span>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 18: Klasör (Dizin) Mantığı ve Klasör Hiyerarşisi
        {
            id: 18,
            title: "KLASÖR (DİZİN) VE AĞAÇ HİYERARŞİSİ 📁",
            subtitle: "Dijital Dünyanın Düzenli Dosya Dolapları",
            topic: "5. KONU - 2 • BTY.5.1.6",
            badge: "KLASÖR",
            icon: "fa-solid fa-folder-tree",
            bgColor: "from-slate-900 via-purple-950 to-slate-900",
            gradient: "from-slate-900 via-purple-950 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        <div class="p-5 bg-slate-850 rounded-2xl border border-purple-500/40 space-y-3">
                            <h3 class="text-base font-black text-yellow-300 flex items-center gap-2">
                                <i class="fa-solid fa-folder-open text-yellow-400"></i> Klasör Nedir?
                            </h3>
                            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                Dosyaları sınıflandırarak bir arada tutmamızı sağlayan sanal kaplardır.
                            </p>
                            <div class="p-3 bg-slate-900 rounded-xl border border-slate-700 text-xs text-purple-200">
                                ⚠️ <strong>Çok Önemli Kural:</strong> Klasörlerin DOSYA UZANTISI OLMAZ! Klasörün boyutu ise içindeki dosyaların toplam ağırlığı kadardır.
                            </div>
                        </div>

                        <!-- Klasör Ağacı Örneği -->
                        <div class="p-5 bg-slate-900/90 rounded-2xl border border-slate-700 font-mono text-xs space-y-2">
                            <span class="text-slate-400 font-bold block font-sans">Klasör Ağacı Örneği:</span>
                            <div class="pl-2 border-l-2 border-purple-500 space-y-1.5 text-slate-200">
                                <div>💾 Yerel Disk (C:)</div>
                                <div class="pl-4">📁 Okul_Derslerim</div>
                                <div class="pl-8">📁 Bilişim_Teknolojileri</div>
                                <div class="pl-12 text-cyan-300">📄 donanim_ozeti.docx</div>
                                <div class="pl-12 text-amber-300">📊 notlarim.xlsx</div>
                                <div class="pl-8">📁 Fen_Bilimleri</div>
                                <div class="pl-12 text-rose-300">🎬 deney_videosu.mp4</div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 19: Doğru Dosya Düzenleme İpuçları
        {
            id: 19,
            title: "DÜZENLİ BİLGİSAYAR KULLANIMI İPUÇLARI 🌟",
            subtitle: "Bilişim Okuryazarı Öğrencinin Altın Kuralları",
            topic: "5. KONU - 2 • BTY.5.1.6",
            badge: "İPUÇLARI",
            icon: "fa-solid fa-wand-magic-sparkles",
            bgColor: "from-slate-900 via-indigo-950 to-purple-950",
            gradient: "from-slate-900 via-indigo-950 to-purple-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                        <div class="p-4 bg-slate-850 rounded-2xl border border-emerald-500/40 space-y-2">
                            <span class="text-2xl">🏷️</span>
                            <h4 class="text-sm font-black text-white">Anlamlı Dosya Adı Ver</h4>
                            <p class="text-xs text-slate-300">
                                <code>adsiz1.docx</code> veya <code>yeni_belge.docx</code> yerine <code>5A_bozok_fen_odevi.docx</code> gibi içeriği anlatan isimler kullan.
                            </p>
                        </div>

                        <div class="p-4 bg-slate-850 rounded-2xl border border-cyan-500/40 space-y-2">
                            <span class="text-2xl">🧹</span>
                            <h4 class="text-sm font-black text-white">Masaüstünü Temiz Tut</h4>
                            <p class="text-xs text-slate-300">
                                Masaüstüne yüzlerce dosya yığma! İlgili dosyaları Belgeler, Resimler veya Müzikler klasörlerine yerleştir.
                            </p>
                        </div>

                        <div class="p-4 bg-slate-850 rounded-2xl border border-purple-500/40 space-y-2">
                            <span class="text-2xl">💾</span>
                            <h4 class="text-sm font-black text-white">Düzenli Yedek Al</h4>
                            <p class="text-xs text-slate-300">
                                Önemli dosyalarını bir USB belleğe veya güvenli bulut depolama alanına kopyalayarak veri kaybını önle.
                            </p>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 20: Günün Özeti & Arenaya Geçiş
        {
            id: 20,
            title: "GÜNÜN ÖZETİ VE ŞAMPİYONLAR ARENASI 🏆",
            subtitle: "Tebrikler! Şimdi Öğrendiklerimizi Oyunlarla Pekiştirme Vakti!",
            topic: "5. KONU - 2 • BTY.5.1.5 - BTY.5.1.6",
            badge: "FİNAL",
            icon: "fa-solid fa-trophy",
            bgColor: "from-slate-900 via-purple-950 to-indigo-950",
            gradient: "from-slate-900 via-purple-950 to-indigo-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-5 text-center my-auto py-2">
                    <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-3xl bg-gradient-to-tr from-yellow-400 to-amber-500 flex items-center justify-center text-slate-950 text-3xl sm:text-4xl shadow-2xl animate-bounce">
                        <i class="fa-solid fa-medal"></i>
                    </div>

                    <div class="space-y-2">
                        <h2 class="text-2xl sm:text-4xl font-black text-white">
                            Harika Bir Ders Tamamladın! 🌟
                        </h2>
                        <p class="text-sm sm:text-base text-purple-200 max-w-xl mx-auto">
                            Yazılım türlerini, Pardus'u, Bit'ten Terabyte'a kapasite basamaklarını ve dosya uzantılarını eksiksiz öğrendin.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-bold text-slate-200">
                        <div class="p-3 bg-slate-900/90 rounded-xl border border-purple-500/40">
                            ⚙️ Donanım (Beden) + Yazılım (Zekâ)
                        </div>
                        <div class="p-3 bg-slate-900/90 rounded-xl border border-cyan-500/40">
                            📶 Bit &lt; Byte &lt; KB &lt; MB &lt; GB &lt; TB
                        </div>
                        <div class="p-3 bg-slate-900/90 rounded-xl border border-emerald-500/40">
                            📄 [Dosya Adı] . [Uzantı]
                        </div>
                    </div>

                    <div class="pt-2 flex items-center justify-center gap-4 flex-wrap">
                        <button onclick="app.setTab('games'); sounds.playClick();" class="px-6 py-3.5 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black rounded-2xl text-sm shadow-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
                            <i class="fa-solid fa-gamepad text-lg"></i>
                            <span>Oyunlar Arenasına Gir</span>
                        </button>
                        <button onclick="app.setTab('questions'); sounds.playClick();" class="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-black rounded-2xl text-sm border border-slate-600 shadow-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
                            <i class="fa-solid fa-circle-check text-lg text-emerald-400"></i>
                            <span>Pekiştirme Testini Çöz</span>
                        </button>
                    </div>
                </div>
            `
        }
    ],

    // ========================================================
    // 📄 2. ÇALIŞMA KÂĞITLARI & DOKÜMANLAR
    // ========================================================
    worksheetDocs: {
        totalWorksheets: 3,
        totalPages: 3,
        items: [
            { id: 1, title: "Çalışma Kâğıdı Sayfa 1: Yazılım Türleri ve İşletim Sistemleri", page: 1, type: "html", key: "sayfa1Html" },
            { id: 2, title: "Çalışma Kâğıdı Sayfa 2: Kapasite Merdiveni ve Hafıza Problemleri", page: 2, type: "html", key: "sayfa2Html" },
            { id: 3, title: "Çalışma Kâğıdı Sayfa 3: Dosya Uzantıları, Yasaklar ve Klasör Ağacı", page: 3, type: "html", key: "sayfa3Html" }
        ],
        sayfa1Html: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <div class="border-b-2 border-purple-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-purple-500/30 text-purple-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            5. KONU - 2 • BTY.5.1.5
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 1: YAZILIM TÜRLERİ VE İŞLETİM SİSTEMLERİ
                        </h1>
                        <p class="text-xs text-purple-300">Sistem Yazılımları, Uygulama Yazılımları ve Pardus İncelemesi</p>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        Sayfa: 1 / 3
                    </span>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-purple-500/30 space-y-3">
                    <h3 class="text-sm font-black text-yellow-300 uppercase flex items-center gap-2">
                        <i class="fa-solid fa-code"></i> ETKİNLİK 1: YAZILIM TÜRLERİNİ AYIRT EDELİM
                    </h3>
                    <p class="text-xs text-slate-300">
                        Aşağıdaki yazılımların hangi türe ait olduğunu işaretleyiniz (Sistem Yazılımı veya Uygulama Yazılımı):
                    </p>
                    <div class="space-y-1.5 text-xs text-slate-200">
                        <p>1. [ <strong>Sistem Yazılımı</strong> ] Windows 11 <em>(Bilgisayarın donanımını yöneten işletim sistemi)</em></p>
                        <p>2. [ <strong>Uygulama Yazılımı</strong> ] Microsoft Word <em>(Ödev ve yazı hazırlama kelime işlemcisi)</em></p>
                        <p>3. [ <strong>Sistem Yazılımı</strong> ] PARDUS <em>(TÜBİTAK tarafından geliştirilen milli işletim sistemi)</em></p>
                        <p>4. [ <strong>Uygulama Yazılımı</strong> ] Paint <em>(Resim ve çizim yapma aracı)</em></p>
                        <p>5. [ <strong>Sistem Yazılımı</strong> ] Android <em>(Akıllı telefon ve tablet işletim sistemi)</em></p>
                        <p>6. [ <strong>Uygulama Yazılımı</strong> ] Google Chrome <em>(Web sitelerini ziyaret etme tarayıcısı)</em></p>
                    </div>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-indigo-500/30 space-y-2 text-xs">
                    <h3 class="text-sm font-black text-indigo-300 uppercase">🇹🇷 GURURUMUZ PARDUS</h3>
                    <p class="text-slate-300">Pardus, 2003 yılında TÜBİTAK tarafından başlatılan, Linux çekirdeği üzerine kurulu, güvenli, açık kaynak kodlu ve milli işletim sistemimizdir. Okullarımızdaki etkileşimli tahtalarda PARDUS ETAP sürümü kullanılmaktadır.</p>
                </div>
            </div>
        `,
        sayfa2Html: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <div class="border-b-2 border-cyan-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-cyan-500/30 text-cyan-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            5. KONU - 2 • BTY.5.1.5
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 2: KAPASİTE MERDİVENİ VE BİRİM DÖNÜŞÜMLERİ
                        </h1>
                        <p class="text-xs text-cyan-300">Bit, Byte, KB, MB, GB, TB Sıralaması ve Gerçek Hayat Problemleri</p>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        Sayfa: 2 / 3
                    </span>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-cyan-500/30 space-y-3">
                    <h3 class="text-sm font-black text-yellow-300 uppercase flex items-center gap-2">
                        <i class="fa-solid fa-stairs"></i> ETKİNLİK 2: 1024 KAT KURALI VE KAPASİTE MERDİVENİ
                    </h3>
                    <div class="p-3 bg-slate-900 rounded-xl border border-slate-700 text-xs space-y-1 font-mono text-cyan-300">
                        <p>• 8 Bit = 1 Byte (Klavyeden basılan 1 karakter)</p>
                        <p>• 1024 Byte = 1 Kilobyte (KB)</p>
                        <p>• 1024 KB = 1 Megabyte (MB)</p>
                        <p>• 1024 MB = 1 Gigabyte (GB)</p>
                        <p>• 1024 GB = 1 Terabyte (TB)</p>
                    </div>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-indigo-500/30 space-y-2 text-xs">
                    <h3 class="text-sm font-black text-indigo-300 uppercase">🧠 PRATİK ZEKA SORULARI</h3>
                    <p>1. 4 GB kapasiteli bir USB belleğe her biri 4 MB olan müziklerden yaklaşık kaç adet sığar? <em>(Cevap: 4 GB = 4096 MB -> 4096 / 4 = yaklaşık 1000 şarkı)</em></p>
                    <p>2. "BİLİŞİM" kelimesi bellekte kaç Byte ve kaç Bit yer kaplar? <em>(Cevap: 7 harf = 7 Byte -> 7 x 8 = 56 Bit)</em></p>
                </div>
            </div>
        `,
        sayfa3Html: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <div class="border-b-2 border-emerald-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-emerald-500/30 text-emerald-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            5. KONU - 2 • BTY.5.1.6
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 3: DOSYA UZANTILARI VE KLASÖR HİYERARŞİSİ
                        </h1>
                        <p class="text-xs text-emerald-300">Dosya Anatomisi, Yasaklı Karakterler ve Klasör Ağacı</p>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        Sayfa: 3 / 3
                    </span>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-emerald-500/30 space-y-3">
                    <h3 class="text-sm font-black text-yellow-300 uppercase flex items-center gap-2">
                        <i class="fa-solid fa-tag"></i> ETKİNLİK 3: UZANTI VE TÜR EŞLEŞTİRMESİ
                    </h3>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        <div class="p-2 bg-slate-900 rounded-lg border border-slate-700"><strong>.docx:</strong> Word Belgesi</div>
                        <div class="p-2 bg-slate-900 rounded-lg border border-slate-700"><strong>.jpg:</strong> Resim Dosyası</div>
                        <div class="p-2 bg-slate-900 rounded-lg border border-slate-700"><strong>.mp3:</strong> Ses Dosyası</div>
                        <div class="p-2 bg-slate-900 rounded-lg border border-slate-700"><strong>.mp4:</strong> Video Dosyası</div>
                        <div class="p-2 bg-slate-900 rounded-lg border border-slate-700"><strong>.pptx:</strong> Sunum Dosyası</div>
                        <div class="p-2 bg-slate-900 rounded-lg border border-slate-700"><strong>.xlsx:</strong> Hesap Tablosu</div>
                        <div class="p-2 bg-slate-900 rounded-lg border border-slate-700"><strong>.zip:</strong> Sıkıştırılmış Dosya</div>
                        <div class="p-2 bg-slate-900 rounded-lg border border-slate-700"><strong>.exe:</strong> Uygulama / Program</div>
                    </div>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-rose-500/30 space-y-2 text-xs">
                    <h3 class="text-sm font-black text-rose-300 uppercase">🚫 DOSYA ADINDA KULLANILAMAYAN 9 KARAKTER</h3>
                    <p class="font-mono text-sm text-yellow-300">\\  /  :  *  ?  "  &lt;  &gt;  |</p>
                    <p class="text-slate-300">Bu karakterler işletim sistemi tarafından özel komut ve yol ayırıcı olarak ayrılmıştır.</p>
                </div>
            </div>
        `
    },

    // ========================================================
    // ❓ 3. PEKİŞTİRME TESTİ & SORULARI
    // ========================================================
    questions: [
        null,
        {
            id: 2,
            type: "true_false",
            title: "Yazılım, Kapasite ve Dosya Yönetimi – Doğru / Yanlış Testi (15 Soru)",
            description: "Aşağıdaki ifadeleri dikkatle okuyarak Doğru veya Yanlış butonuna basınız:",
            items: [
                {
                    statement: "Bilgisayarın donanım parçalarını yöneten ve çalışmasını sağlayan tüm programlara yazılım denir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Donanım fiziksel parçalarken, bu parçalara ne yapacağını söyleyen komut ve programlar yazılımdır."
                },
                {
                    statement: "İşletim sistemi olmadan bir bilgisayara oyun veya kelime işlemci programı yükleyip çalıştırabiliriz.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! İşletim sistemi bilgisayarın temel yöneticisidir. İşletim sistemi olmadan hiçbir uygulama yazılımı çalışamaz."
                },
                {
                    statement: "PARDUS, TÜBİTAK tarafından geliştirilen yerli, milli ve açık kaynak kodlu işletim sistemimizdir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Pardus, ülkemizin milli işletim sistemi olup etkileşimli tahtalarda ve kamu kurumlarında güvenle kullanılmaktadır."
                },
                {
                    statement: "Android ve iOS mobil cihazlar (akıllı telefon ve tablet) için geliştirilmiş işletim sistemleridir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Android ve iOS akıllı telefon ve tabletlerde en yaygın kullanılan mobil işletim sistemleridir."
                },
                {
                    statement: "Freeware (Ücretsiz) yazılımları kullanmak için her ay belirli bir lisans ücreti ödememiz gerekir.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! Freeware yazılımlar kullanıcılara tamamen ücretsiz olarak sunulan yasal yazılımlardır."
                },
                {
                    statement: "Bilgisayarın hafızasındaki en küçük temel veri birimi Bit'tir (0 veya 1).",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Binary digit (ikili basamak) kelimelerinden türetilen Bit, 0 veya 1 değerini alan en küçük birimdir."
                },
                {
                    statement: "Klavyeden basılan tek bir harf veya karakter bellekte tam 1 Byte (8 Bit) yer kaplar.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! 8 Bit birleşerek 1 Byte'ı oluşturur ve klavyedeki her harf veya boşluk 1 Byte yer tutar."
                },
                {
                    statement: "1 Kilobyte (KB) tam olarak 1000 Byte'a eşittir.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! Bilgisayarda birimler 1000 değil, ikili sistem kuralı gereği 1024'er kat büyür (1 KB = 1024 Byte)."
                },
                {
                    statement: "1 Terabyte (TB), 1024 Gigabyte'a (GB) eşit olan devasa bir depolama kapasitesidir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! 1 TB = 1024 GB'tır ve binlerce filmi, yüzbinlerce fotoğrafı saklayabilir."
                },
                {
                    statement: "Kapasite büyüklük sıralaması Bit < Byte < KB < MB < GB < TB şeklindedir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! En küçük birim Bit, ardından Byte, KB, MB, GB ve en büyükleri Terabyte (TB)'tır."
                },
                {
                    statement: "Bir dosya adında araya konulan nokta (.) dosya adı ile dosya uzantısını birbirinden ayırır.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Dosya adı formülü [Dosya Adı] . [Dosya Uzantısı] şeklindedir."
                },
                {
                    statement: "Dosya adı verirken soru işareti (?), yıldız (*) veya iki nokta (:) karakterlerini serbestçe kullanabiliriz.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! \\ / : * ? \" < > | karakterleri işletim sistemi için özel anlam taşıdığından dosya adlarında yasaktır."
                },
                {
                    statement: ".docx uzantılı bir dosya Microsoft Word veya kelime işlemci ile açılan bir metin belgesidir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! .docx, .txt ve .pdf temel metin/belge dosya uzantılarıdır."
                },
                {
                    statement: ".mp3 uzantılı bir dosya yüksek çözünürlüklü bir sinema filmi videosudur.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! .mp3 ses ve müzik dosyasıdır. Video dosyaları .mp4 veya .avi uzantılı olur."
                },
                {
                    statement: "Klasörlerin de tıpkı dosyalar gibi .docx veya .jpg gibi uzantıları vardır.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! Klasörlerin uzantısı OLMAZ. Klasörler sadece dosyaları düzenli saklamak için kullanılan dizinlerdir."
                }
            ]
        }
    ],

    // ========================================================
    // 🎮 4. TEKRAR OYUNLARI & ETKİNLİKLER
    // ========================================================
    gameData: {
        // Oyun 1: Çarkıfelek Soruları (12 Senaryo & Yazılım/Dosya Sorusu)
        wheelQuiz: [
            {
                q: "Bilgisayar donanımının çalışmasını sağlayan ve kullanıcı isteklerini yerine getiren tüm komutlara ne denir?",
                question: "Bilgisayar donanımının çalışmasını sağlayan ve kullanıcı isteklerini yerine getiren tüm komutlara ne denir?",
                options: ["Donanım", "Yazılım", "Anakart", "İşlemci"],
                answer: 1,
                pts: 200,
                points: 200
            },
            {
                q: "TÜBİTAK tarafından geliştirilen ülkemizin yerli, milli ve açık kaynaklı işletim sistemi hangisidir?",
                question: "TÜBİTAK tarafından geliştirilen ülkemizin yerli, milli ve açık kaynaklı işletim sistemi hangisidir?",
                options: ["Windows", "macOS", "Pardus", "Android"],
                answer: 2,
                pts: 250,
                points: 250
            },
            {
                q: "Klavyeden basılan tek bir harf veya boşluk karakteri bellekte ne kadar yer kaplar?",
                question: "Klavyeden basılan tek bir harf veya boşluk karakteri bellekte ne kadar yer kaplar?",
                options: ["1 Bit", "1 KB", "1 MB", "1 Byte"],
                answer: 3,
                pts: 200,
                points: 200
            },
            {
                q: "1024 Gigabyte (GB) büyüklüğündeki depolama kapasitesi hangisine eşittir?",
                question: "1024 Gigabyte (GB) büyüklüğündeki depolama kapasitesi hangisine eşittir?",
                options: ["1 Terabyte (TB)", "1 Megabyte (MB)", "1 Kilobyte (KB)", "1 Byte"],
                answer: 0,
                pts: 200,
                points: 200
            },
            {
                q: "Aşağıdaki dosya uzantılarından hangisi bir ses veya müzik dosyasına aittir?",
                question: "Aşağıdaki dosya uzantılarından hangisi bir ses veya müzik dosyasına aittir?",
                options: [".docx", ".mp3", ".xlsx", ".pptx"],
                answer: 1,
                pts: 150,
                points: 150
            },
            {
                q: "Aşağıdakilerden hangisi bir işletim sistemi (sistem yazılımı) DEĞİLDİR?",
                question: "Aşağıdakilerden hangisi bir işletim sistemi (sistem yazılımı) DEĞİLDİR?",
                options: ["Windows", "Linux", "Microsoft Word", "Android"],
                answer: 2,
                pts: 200,
                points: 200
            },
            {
                q: "Dosya veya klasör adlandırırken aşağıdaki karakterlerden hangisini kullanmak YASAKTIR?",
                question: "Dosya veya klasör adlandırırken aşağıdaki karakterlerden hangisini kullanmak YASAKTIR?",
                options: ["_ (Alt çizgi)", "- (Tire)", "A (Büyük harf)", "? (Soru işareti)"],
                answer: 3,
                pts: 250,
                points: 250
            },
            {
                q: "Boyutu çok büyük olan dosyaları sıkıştırıp tek bir pakette saklamak için hangi uzantı kullanılır?",
                question: "Boyutu çok büyük olan dosyaları sıkıştırıp tek bir pakette saklamak için hangi uzantı kullanılır?",
                options: [".zip / .rar", ".mp3", ".docx", ".jpg"],
                answer: 0,
                pts: 200,
                points: 200
            },
            {
                q: "Aşağıdaki kapasite birimlerinden hangisi diğerlerinden DAHA BÜYÜKTÜR?",
                question: "Aşağıdaki kapasite birimlerinden hangisi diğerlerinden DAHA BÜYÜKTÜR?",
                options: ["Megabyte (MB)", "Gigabyte (GB)", "Kilobyte (KB)", "Byte"],
                answer: 1,
                pts: 200,
                points: 200
            },
            {
                q: "Akıllı telefon ve tabletlerde dünyada en yaygın kullanılan mobil işletim sistemi hangisidir?",
                question: "Akıllı telefon ve tabletlerde dünyada en yaygın kullanılan mobil işletim sistemi hangisidir?",
                options: ["Windows 11", "Pardus", "Android", "Linux"],
                answer: 2,
                pts: 150,
                points: 150
            },
            {
                q: "Bir dosyanın türünü ve hangi programla açılacağını belirleyen kısma ne denir?",
                question: "Bir dosyanın türünü ve hangi programla açılacağını belirleyen kısma ne denir?",
                options: ["Klasör Adı", "Sürücü Harfi", "Kısayol Tuşu", "Dosya Uzantısı"],
                answer: 3,
                pts: 200,
                points: 200
            },
            {
                q: "Hiçbir ücret ödemeden yasal olarak süresiz kullanabildiğimiz yazılım lisans türü hangisidir?",
                question: "Hiçbir ücret ödemeden yasal olarak süresiz kullanabildiğimiz yazılım lisans türü hangisidir?",
                options: ["Ücretsiz (Freeware)", "Lisanslı (Ticari)", "Demo Sürüm", "Virüs"],
                answer: 0,
                pts: 200,
                points: 200
            }
        ],

        // Oyun 2: Kavram Eşleştirme Kartları (8 Çift)
        matchConfig: {
            timer: 90,
            leftTitle: "Kavram / Uzantı 💻",
            rightTitle: "Açıklama / Görevi 🎯",
            instruction: "💡 <strong>Nasıl Oynanır?</strong> Soldan bir kavram veya dosya uzantısına dokunun, ardından sağdaki doğru tanımıyla eşleştirin!"
        },
        matchCards: [
            {
                id: 1,
                text: "Pardus / Windows",
                category: "Bilgisayarı Yöneten İşletim Sistemi",
                icon: "fa-solid fa-shield-halved",
                rightIcon: "fa-solid fa-gears"
            },
            {
                id: 2,
                text: "1 Byte",
                category: "8 Bit'e Eşit (Klavyedeki 1 Harf)",
                icon: "fa-solid fa-font",
                rightIcon: "fa-solid fa-calculator"
            },
            {
                id: 3,
                text: ".docx",
                category: "Word / Metin Belgesi Dosyası",
                icon: "fa-solid fa-file-word",
                rightIcon: "fa-solid fa-pen-nib"
            },
            {
                id: 4,
                text: ".mp3",
                category: "Ses ve Müzik Dosyası",
                icon: "fa-solid fa-music",
                rightIcon: "fa-solid fa-headphones"
            },
            {
                id: 5,
                text: ".mp4",
                category: "Video ve Film Dosyası",
                icon: "fa-solid fa-film",
                rightIcon: "fa-solid fa-video"
            },
            {
                id: 6,
                text: ".zip / .rar",
                category: "Sıkıştırılmış Arşiv Dosyası",
                icon: "fa-solid fa-box-archive",
                rightIcon: "fa-solid fa-compress"
            },
            {
                id: 7,
                text: "1 Terabyte (TB)",
                category: "1024 Gigabyte (GB) Kapasite",
                icon: "fa-solid fa-hard-drive",
                rightIcon: "fa-solid fa-server"
            },
            {
                id: 8,
                text: ".exe",
                category: "Çalıştırılabilir Uygulama / Program",
                icon: "fa-solid fa-gear",
                rightIcon: "fa-solid fa-play"
            }
        ],

        // Oyun 3: Hızlı Refleks Doğru/Yanlış İfadeleri (16 İfade)
        reflexStatements: [
            {
                text: "Donanımın ne yapacağını söyleyen tüm program ve komutlara yazılım denir.",
                correct: true
            },
            {
                text: "İşletim sistemi olmadan bir bilgisayarda oyun veya yazı programı çalıştırabiliriz.",
                correct: false
            },
            {
                text: "Pardus, TÜBİTAK tarafından geliştirilen yerli ve milli işletim sistemimizdir.",
                correct: true
            },
            {
                text: "Klavyeden basılan bir harf bellekte tam 1 Byte yer kaplar.",
                correct: true
            },
            {
                text: "1 Kilobyte (KB) tam olarak 1000 Byte'a eşittir.",
                correct: false
            },
            {
                text: "1024 Megabyte (MB) birleşerek 1 Gigabyte (GB) oluşturur.",
                correct: true
            },
            {
                text: "Terabyte (TB) günümüzde yaygın en büyük depolama kapasitesi birimidir.",
                correct: true
            },
            {
                text: ".docx uzantılı dosya bir müzik ve ses kaydı dosyasıdır.",
                correct: false
            },
            {
                text: ".mp4 ve .avi uzantıları video ve film formatlarıdır.",
                correct: true
            },
            {
                text: "Dosya adlarında soru işareti (?) veya yıldız (*) karakteri kullanılabilir.",
                correct: false
            },
            {
                text: "Klasörlerin (dizinlerin) tıpkı dosyalar gibi .docx uzantısı olur.",
                correct: false
            },
            {
                text: "Freeware yazılımlar tamamen ücretsiz ve yasal olarak kullanılabilen programlardır.",
                correct: true
            },
            {
                text: "Açık kaynak kodlu yazılımların kodları herkes tarafından incelenebilir ve geliştirilebilir.",
                correct: true
            },
            {
                text: ".zip ve .rar uzantıları dosyaları sıkıştırarak yer tasarrufu sağlar.",
                correct: true
            },
            {
                text: "Dosya uzantısını silersek dosya bozulabilir veya açılmayabilir.",
                correct: true
            },
            {
                text: "Kapasite sıralamasında Gigabyte (GB), Terabyte (TB)'tan daha büyüktür.",
                correct: false
            }
        ],

        // Oyun 4: Sınıf Düellosu Soruları (15 Canlı Akıllı Tahta Sorusu)
        duelQuestions: [
            {
                q: "Bilgisayar donanımına ne yapacağını söyleyen tüm programlar ve komutlar bütünü hangisidir?",
                options: ["Yazıcı", "Yazılım", "Monitör", "Klavye"],
                answer: 1
            },
            {
                q: "TÜBİTAK tarafından geliştirilen ve etkileşimli tahtalarda kullanılan milli işletim sistemimiz hangisidir?",
                options: ["Windows", "macOS", "Pardus", "Android"],
                answer: 2
            },
            {
                q: "Bilgisayarın hafızasındaki 0 veya 1 elektrik sinyalinden oluşan en küçük veri birimi hangisidir?",
                options: ["Byte", "Kilobyte", "Megabyte", "Bit"],
                answer: 3
            },
            {
                q: "Klavyeden basılan tek bir harf veya boşluk karakteri bellekte ne kadar yer kaplar?",
                options: ["1 Byte (8 Bit)", "1 KB", "1 MB", "1 GB"],
                answer: 0
            },
            {
                q: "1024 Megabyte (MB) birleştiğinde hangi kapasite birimine eşit olur?",
                options: ["1 Terabyte", "1 Gigabyte (GB)", "1 Kilobyte", "1 Byte"],
                answer: 1
            },
            {
                q: "Word veya LibreOffice Writer ile hazırlanan bir ödevin dosya uzantısı hangisidir?",
                options: [".mp3", ".xlsx", ".docx", ".zip"],
                answer: 2
            },
            {
                q: "Aşağıdaki dosya uzantılarından hangisi hareketli bir video / film dosyasına aittir?",
                options: [".txt", ".jpg", ".mp3", ".mp4"],
                answer: 3
            },
            {
                q: "Dosyaları sıkıştırıp kapladığı alanı küçülten ve arşivleyen dosya uzantısı hangisidir?",
                options: [".zip / .rar", ".exe", ".pdf", ".png"],
                answer: 0
            },
            {
                q: "Aşağıdakilerden hangisi bir işletim sistemi (sistem yazılımı) DEĞİLDİR?",
                options: ["Windows", "Paint", "Linux", "macOS"],
                answer: 1
            },
            {
                q: "Dosya ve klasör adlandırırken aşağıdaki karakterlerden hangisini kullanmak YASAKTIR?",
                options: ["Tire (-)", "Alt çizgi (_)", "Bölü işareti (/)", "Rakamlar (1-9)"],
                answer: 2
            },
            {
                q: "1024 Gigabyte (GB) kapasiteye eşit olan devasa depolama birimi hangisidir?",
                options: ["Megabyte", "Kilobyte", "Byte", "Terabyte (TB)"],
                answer: 3
            },
            {
                q: "Kullanım hakkı ücret ödenerek satın alınan ticari yazılım türü hangisidir?",
                options: ["Lisanslı Yazılım", "Ücretsiz Yazılım", "Demo Sürüm", "Virüs"],
                answer: 0
            },
            {
                q: "Bir dosyanın türünü ve hangi programla açılacağını belirleyen kısma ne ad verilir?",
                options: ["Dosya Sürücüsü", "Dosya Uzantısı", "Klasör Ağacı", "Kısayol"],
                answer: 1
            },
            {
                q: "Aşağıdaki kapasite birimlerinden hangisi EN KÜÇÜKTÜR?",
                options: ["Gigabyte", "Megabyte", "Kilobyte (KB)", "Terabyte"],
                answer: 2
            },
            {
                q: "Dosyalarımızı düzenli saklamak için kullandığımız sanal dolaplara ne ad verilir?",
                options: ["Uzantı", "Piksel", "Format", "Klasör (Dizin)"],
                answer: 3
            }
        ]
    },

    extraGames: [
        {
            badge: "Sıralama Simülasyonu",
            badgeColor: "text-purple-300",
            title: "Dosya & Uzantı Laboratuvarı",
            desc: "Karışık gelen dosyaları uzantılarına (.docx, .jpg, .mp3, .mp4, .zip vb.) göre 6 doğru klasöre tasnif et! Sürükle veya tıkla, komboları topla!",
            icon: "fa-solid fa-folder-tree",
            iconBg: "bg-purple-500/30 text-purple-300",
            cardGradient: "from-purple-950/90 via-slate-900 to-indigo-950/90",
            border: "border-purple-500/50",
            descColor: "text-purple-100",
            btnText: "Laboratuvara Gir!",
            btnIcon: "fa-solid fa-play",
            btnGradient: "from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-black",
            action: "app.openStandaloneGame('games/dosya_uzanti_laboratuvari.html', 'Dosya & Uzantı Laboratuvarı | Öğretmen Bozok')"
        },
        {
            badge: "Hafıza Deposu",
            badgeColor: "text-cyan-300",
            title: "Kapasite Merdiveni & Hafıza Deposu",
            desc: "Bit'ten Terabyte'a kadar basamakları 1024 kat kuralıyla doğru diz, ardından gerçek hayat dosyalarının boyutlarını doğru tahmin et!",
            icon: "fa-solid fa-stairs",
            iconBg: "bg-cyan-500/30 text-cyan-300",
            cardGradient: "from-cyan-950/90 via-slate-900 to-blue-950/90",
            border: "border-cyan-500/50",
            descColor: "text-cyan-100",
            btnText: "Merdiveni Tırman!",
            btnIcon: "fa-solid fa-stairs",
            btnGradient: "from-cyan-500 via-teal-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/kapasite_merdiveni_oyunu.html', 'Kapasite Merdiveni | Öğretmen Bozok')"
        },
        {
            badge: "Kelime Avı",
            badgeColor: "text-amber-300",
            title: "Yazılım ve Dosya Kelime Avı",
            desc: "12x12 harf matrisinde gizlenen 10 yazılım, kapasite ve dosya terimini bul! Her oyunda kelimelerin yerleri ve harfler rastgele değişir!",
            icon: "fa-solid fa-puzzle-piece",
            iconBg: "bg-amber-500/30 text-amber-300",
            cardGradient: "from-indigo-950/90 via-slate-900 to-purple-950/90",
            border: "border-amber-500/50",
            descColor: "text-amber-100",
            btnText: "Kelime Avına Başla!",
            btnIcon: "fa-solid fa-crosshairs",
            btnGradient: "from-amber-500 via-orange-500 to-purple-600 hover:from-amber-400 hover:to-purple-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/yazilim_dosya_kelime_avi.html', 'Yazılım & Dosya Kelime Avı | Öğretmen Bozok')"
        }
    ]
};
