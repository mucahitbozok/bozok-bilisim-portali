// ==========================================
// 6. Konu: Dosya ve Klasör Yönetimi
// MEB 5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi
// BTY.5.1.6. Dosya ve klasör yönetimi ile ilgili temel işlemlerle çalışabilme
// Hazırlayan: Öğretmen Bozok
// ==========================================

// --- SLAYT 18 VE 19 İNTERAKTİF YARDIMCILARI ---
window.slide18MatchGame = {
    selectedLeft: null,
    matchedCount: 0,
    selectLeft: function(key, val, el) {
        if (typeof sounds !== "undefined") sounds.playClick();
        document.querySelectorAll(".s18-left-btn").forEach(b => b.classList.remove("ring-4", "ring-yellow-400", "bg-yellow-950/80"));
        el.classList.add("ring-4", "ring-yellow-400", "bg-yellow-950/80");
        this.selectedLeft = { key, val, el };
        const fb = document.getElementById("s18-fb");
        if (fb) {
            fb.className = "p-3 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-200 text-xs sm:text-sm font-bold text-center";
            fb.innerText = "Şimdi sağ taraftan '" + val + "' uzantısına ait doğru dosya türünü seçin!";
        }
    },
    selectRight: function(targetKey, targetName, el) {
        const fb = document.getElementById("s18-fb");
        if (!this.selectedLeft) {
            if (fb) {
                fb.className = "p-3 rounded-2xl bg-amber-950/80 border border-amber-500/40 text-amber-200 text-xs sm:text-sm font-bold text-center";
                fb.innerText = "Lütfen önce sol taraftan bir uzantı seçiniz!";
            }
            return;
        }

        if (this.selectedLeft.key === targetKey) {
            if (typeof sounds !== "undefined") sounds.playCorrect();
            this.selectedLeft.el.classList.remove("ring-4", "ring-yellow-400", "bg-yellow-950/80");
            this.selectedLeft.el.classList.add("opacity-40", "pointer-events-none", "bg-emerald-900/60", "border-emerald-500");
            el.classList.add("opacity-40", "pointer-events-none", "bg-emerald-900/60", "border-emerald-500");
            this.matchedCount++;
            if (fb) {
                fb.className = "p-3 rounded-2xl bg-emerald-950/90 border-2 border-emerald-500 text-emerald-200 text-xs sm:text-sm font-bold text-center animate-pop";
                fb.innerHTML = "🎉 DOĞRU EŞLEŞTİRME! <strong>" + this.selectedLeft.val + "</strong> → <strong>" + targetName + "</strong>";
            }
            this.selectedLeft = null;
            if (this.matchedCount === 6) {
                setTimeout(() => {
                    if (typeof sounds !== "undefined") sounds.playFanfare();
                    if (fb) {
                        fb.className = "p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-black text-sm text-center shadow-2xl animate-pop";
                        fb.innerHTML = "🏆 TEBRİKLER! 6 uzantının tamamını doğru eşleştirdiniz!";
                    }
                }, 500);
            }
        } else {
            if (typeof sounds !== "undefined") sounds.playWrong();
            if (fb) {
                fb.className = "p-3 rounded-2xl bg-rose-950/90 border-2 border-rose-500 text-rose-200 text-xs sm:text-sm font-bold text-center animate-pop";
                fb.innerHTML = "⚠️ Yanlış Eşleştirme! <strong>" + this.selectedLeft.val + "</strong> uzantısı '" + targetName + "' değildir. Tekrar deneyin!";
            }
            this.selectedLeft.el.classList.remove("ring-4", "ring-yellow-400", "bg-yellow-950/80");
            this.selectedLeft = null;
        }
    },
    reset: function() {
        if (typeof sounds !== "undefined") sounds.playClick();
        this.selectedLeft = null;
        this.matchedCount = 0;
        document.querySelectorAll(".s18-left-btn, .s18-right-btn").forEach(b => {
            b.className = b.className.replace(/opacity-40|pointer-events-none|bg-emerald-900\/60|border-emerald-500|ring-4|ring-yellow-400|bg-yellow-950\/80/g, "").trim();
        });
        const fb = document.getElementById("s18-fb");
        if (fb) {
            fb.className = "p-3 rounded-2xl bg-slate-800/80 border border-slate-700 text-slate-300 text-xs sm:text-sm text-center";
            fb.innerText = "Önce sol taraftan bir uzantıya, ardından sağdaki doğru dosya türüne dokunun.";
        }
    }
};

window.slide19MiniQuiz = {
    idx: 0,
    score: 0,
    questions: [
        {
            q: "1. 'tatil.jpg' dosyasındaki '.jpg' kısmı dosyanın nesini belirtir?",
            opts: ["Dosyanın boyutunu", "Dosyanın türünü (Resim)", "Dosyanın oluşturulma yılını", "Dosyayı yazan kişiyi"],
            ans: 1,
            exp: "Noktadan sonra gelen dosya uzantısı dosyanın türünü (Resim/Görsel) belirtir."
        },
        {
            q: "2. Ortak özelliğe sahip dosyaların düzenli tutulduğu sarı renkli dijital birime ne denir?",
            opts: ["Uzantı", "İkili Kod", "Klasör (Dizin)", "Bit"],
            ans: 2,
            exp: "Dosyaları düzenlemek için sarı renkli klasörler (dizinler) kullanılır."
        },
        {
            q: "3. Bir dosyayı aslına dokunmadan yeni bir yere çoğaltmak için hangi kısayol kullanılır?",
            opts: ["Ctrl + C", "Ctrl + X", "Ctrl + Z", "Delete"],
            ans: 0,
            exp: "Ctrl + C kopyalama (çoğaltma) kısayoludur; aslı yerinde kalır."
        },
        {
            q: "4. Arama kutusuna '*.docx' yazıldığında bilgisayar neyi bulur?",
            opts: ["Yalnızca adı 'docx' olan bir dosyayı", "Bilgisayardaki TÜM Word belgelerini", "Tüm müzik dosyalarını", "Hiçbir şey bulamaz"],
            ans: 1,
            exp: "Yıldız (*) joker karakteri 'adı ne olursa olsun tüm .docx dosyalarını bul' anlamına gelir."
        },
        {
            q: "5. Dosyaları sıkıştırmanın (.zip, .rar) en önemli 2 faydası nedir?",
            opts: [
                "Ekranı büyütmek ve pili korumak",
                "Disk tasarrufu sağlamak ve paylaşımı kolaylaştırmak",
                "Dosyanın rengini ve sesini değiştirmek",
                "İnterneti hızlandırıp bilgisayarı kapatmak"
            ],
            ans: 1,
            exp: "Sıkıştırma dosya boyutunu küçülterek disk alanı kazandırır ve internette hızlı gönderim sunar."
        }
    ],
    answer: function(chosen) {
        const q = this.questions[this.idx];
        const fb = document.getElementById("s19-fb");
        const nextBtn = document.getElementById("s19-next-btn");
        document.querySelectorAll(".s19-opt-btn").forEach(b => b.disabled = true);

        if (chosen === q.ans) {
            if (typeof sounds !== "undefined") sounds.playCorrect();
            this.score += 20;
            const scoreEl = document.getElementById("s19-score");
            if (scoreEl) scoreEl.innerText = "Puan: " + this.score + " / 100";
            if (fb) {
                fb.className = "p-3 rounded-2xl bg-emerald-950/90 border-2 border-emerald-500 text-emerald-200 text-xs sm:text-sm font-bold shadow-lg animate-pop";
                fb.innerHTML = "🎉 DOĞRU! " + q.exp;
            }
        } else {
            if (typeof sounds !== "undefined") sounds.playWrong();
            if (fb) {
                fb.className = "p-3 rounded-2xl bg-rose-950/90 border-2 border-rose-500 text-rose-200 text-xs sm:text-sm font-bold shadow-lg animate-pop";
                fb.innerHTML = "⚠️ YANLIŞ! Doğru seçenek <strong>" + String.fromCharCode(65 + q.ans) + "</strong> olmalıydı. " + q.exp;
            }
        }

        if (nextBtn) nextBtn.classList.remove("hidden");
    },
    next: function() {
        if (typeof sounds !== "undefined") sounds.playClick();
        if (this.idx < this.questions.length - 1) {
            this.idx++;
            this.render();
        } else {
            const box = document.getElementById("s19-quiz-box");
            if (box) {
                if (typeof sounds !== "undefined") sounds.playFanfare();
                box.innerHTML = `
                    <div class="text-center p-6 space-y-4 animate-pop">
                        <div class="text-5xl">🏆 🎉</div>
                        <h3 class="text-2xl font-black text-white">Yarışma Tamamlandı!</h3>
                        <p class="text-base text-yellow-300 font-bold">Toplam Puanınız: ${this.score} / 100</p>
                        <p class="text-xs sm:text-sm text-slate-300">Dosya ve klasör yönetiminin temellerini başarıyla öğrendiniz!</p>
                        <button onclick="window.slide19MiniQuiz.reset()" class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg">
                            Testi Tekrar Çöz 🔄
                        </button>
                    </div>
                `;
            }
        }
    },
    render: function() {
        const q = this.questions[this.idx];
        const qText = document.getElementById("s19-q-text");
        const qBadge = document.getElementById("s19-q-badge");
        const optsContainer = document.getElementById("s19-opts-container");
        const fb = document.getElementById("s19-fb");
        const nextBtn = document.getElementById("s19-next-btn");

        if (qText) qText.innerText = q.q;
        if (qBadge) qBadge.innerText = "Soru: " + (this.idx + 1) + " / " + this.questions.length;
        if (fb) fb.className = "hidden";
        if (nextBtn) nextBtn.classList.add("hidden");

        if (optsContainer) {
            optsContainer.innerHTML = q.opts.map((opt, i) => `
                <button onclick="window.slide19MiniQuiz.answer(${i})" class="s19-opt-btn p-3.5 rounded-xl bg-slate-800 hover:bg-indigo-600/80 border border-slate-700 text-left font-bold text-xs sm:text-sm text-white transition-all flex items-center gap-3">
                    <span class="w-7 h-7 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center font-black text-xs text-yellow-400 shrink-0">${String.fromCharCode(65 + i)}</span>
                    <span>${opt}</span>
                </button>
            `).join("");
        }
    },
    reset: function() {
        this.idx = 0;
        this.score = 0;
        const scoreEl = document.getElementById("s19-score");
        if (scoreEl) scoreEl.innerText = "Puan: 0 / 100";
        this.render();
    }
};

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

    // =========================================================================
    // 20 SLAYTLIK TAM EĞİTSEL DERS SUNUSU (BTY.5.1.6 DOSYA VE KLASÖR YÖNETİMİ)
    // =========================================================================
    slides: [
        // SLAYT 1: KAPAK
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
                            Dosya adı, dosya uzantısı, klasör hiyerarşisi, kısayollar ve sıkıştırma ile bilgisayarımızı düzenli bir kütüphaneye dönüştürüyoruz!
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

        // SLAYT 2: NELER ÖĞRENECEĞİZ?
        {
            id: 2,
            title: "Bu Derste Neler Öğreneceğiz? 🗺️",
            subtitle: "Öğrenme Yol Haritası",
            badge: "YOL HARİTASI",
            icon: "fa-solid fa-compass",
            bgColor: "from-slate-900 via-indigo-950 to-blue-950",
            gradient: "from-slate-900 via-indigo-950 to-blue-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-1">
                    <div class="text-center space-y-1">
                        <h3 class="text-xl sm:text-2xl font-black text-white">Ders Boyunca Keşfedeceğimiz 8 Temel Bilişim Durağı:</h3>
                        <p class="text-xs sm:text-sm text-cyan-200">Dosyalarımızı düzenli, güvenli ve verimli bir şekilde yönetmeyi adım adım öğreniyoruz.</p>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div class="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-1">
                            <div class="text-2xl">📄</div>
                            <h4 class="font-black text-sm text-cyan-300">1. Dosya Nedir?</h4>
                            <p class="text-xs text-slate-400">Verilerin kaydedildiği temel dijital birim.</p>
                        </div>
                        <div class="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-1">
                            <div class="text-2xl">🏷️</div>
                            <h4 class="font-black text-sm text-purple-300">2. Dosya Uzantısı</h4>
                            <p class="text-xs text-slate-400">.docx, .mp3, .mp4, .jpg ne anlama gelir?</p>
                        </div>
                        <div class="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-1">
                            <div class="text-2xl">📁</div>
                            <h4 class="font-black text-sm text-amber-300">3. Klasör & Dizin</h4>
                            <p class="text-xs text-slate-400">Ortak dosyaları düzenleme ve alt klasör ağacı.</p>
                        </div>
                        <div class="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-1">
                            <div class="text-2xl">🖱️</div>
                            <h4 class="font-black text-sm text-emerald-300">4. Temel İşlemler</h4>
                            <p class="text-xs text-slate-400">Oluşturma, kopyalama, taşıma, silme, yeniden adlandırma.</p>
                        </div>
                        <div class="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-1">
                            <div class="text-2xl">⌨️</div>
                            <h4 class="font-black text-sm text-cyan-300">5. Kısayol Tuşları</h4>
                            <p class="text-xs text-slate-400">Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Z, Ctrl+Y.</p>
                        </div>
                        <div class="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-1">
                            <div class="text-2xl">🗑️</div>
                            <h4 class="font-black text-sm text-rose-300">6. Geri Dönüşüm</h4>
                            <p class="text-xs text-slate-400">Çöp kutusu mantığı ve geri yükleme.</p>
                        </div>
                        <div class="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-1">
                            <div class="text-2xl">🔍</div>
                            <h4 class="font-black text-sm text-yellow-300">7. Dosya Arama</h4>
                            <p class="text-xs text-slate-400">*.docx ve Bil*.docx gibi arama ifadeleri.</p>
                        </div>
                        <div class="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-1">
                            <div class="text-2xl">🗜️</div>
                            <h4 class="font-black text-sm text-purple-300">8. Sıkıştırma (.zip)</h4>
                            <p class="text-xs text-slate-400">Boyutu küçültme ve tek pakette arşivleme.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 3: DOSYA NEDİR?
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
                                <p class="text-xs text-slate-400">Bilgisayarda verilerin saklandığı en temel birim</p>
                            </div>
                        </div>
                        <p class="text-slate-200 text-base leading-relaxed">
                            Bilgisayarda <strong>yazı, resim, ses, video veya çizim</strong> gibi bilgilerin kaydedildiği birimlere <strong>DOSYA</strong> denir. Tıpkı bir defter yaprağı gibi! Her dosya belirli bir türdeki içeriği içinde barındırır.
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

        // SLAYT 4: DOSYA ADI VE UZANTISI
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

        // SLAYT 5: YAYGIN DOSYA UZANTILARI TABLOSU
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

        // SLAYT 6: KLASÖR NEDİR?
        {
            id: 6,
            title: "Klasör (Dizin / Folder) Nedir? 📁",
            subtitle: "Dijital Çekmeceler ve Düzen",
            badge: "HİYERARŞİ",
            icon: "fa-solid fa-folder",
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
                            <div class="flex items-center gap-2 font-black text-cyan-300 text-base">
                                <span>✨</span> <span>Neden Klasör Kullanırız?</span>
                            </div>
                            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                Masaüstünde yüzlerce dosyanın birbirine karışmasını engeller. Aradığımız herhangi bir ödeve veya şarkıya saniyeler içinde ulaşmamızı sağlar.
                            </p>
                            <div class="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 font-bold">
                                Düzenli Klasör = Hızlı ve Başarılı Çalışma!
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 7: ALT KLASÖR NEDİR?
        {
            id: 7,
            title: "Alt Klasör (Subfolder) ve Ağaç Yapısı 🌳",
            subtitle: "İç İçe Klasörleme Düzeni",
            badge: "AĞAÇ YAPISI",
            icon: "fa-solid fa-folder-tree",
            bgColor: "from-slate-900 via-purple-950 to-indigo-950",
            gradient: "from-slate-900 via-purple-950 to-indigo-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-5 my-auto">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
                            <div class="flex items-center gap-2 font-black text-purple-300 text-base">
                                <span>🌳</span> <span>Alt Klasör Tanımı</span>
                            </div>
                            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                Bir klasörün içine açılan yeni klasöre <strong>ALT KLASÖR</strong> denir. Böylece hiyerarşik bir ağaç yapısı kurulur.
                            </p>
                            <p class="text-xs text-slate-400">
                                Tıpkı bir okul dolabının içindeki ders bölmeleri gibi!
                            </p>
                        </div>

                        <div class="p-5 rounded-2xl bg-slate-900/90 border border-slate-700 font-mono text-xs sm:text-sm text-cyan-300 space-y-1">
                            <div class="text-yellow-400 font-bold">📁 OKUL (Ana Klasör)</div>
                            <div class="pl-4 text-purple-300">├── 📁 Ödevler (Alt Klasör)</div>
                            <div class="pl-8 text-slate-400">│   ├── 📄 Bilisim_Odevi.docx</div>
                            <div class="pl-8 text-slate-400">│   └── 📄 Matematik.pdf</div>
                            <div class="pl-4 text-purple-300">├── 📁 Resimler (Alt Klasör)</div>
                            <div class="pl-8 text-slate-400">│   └── 🖼️ 23_Nisan.jpg</div>
                            <div class="pl-4 text-purple-300">└── 📁 Projeler (Alt Klasör)</div>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 8: YENİ KLASÖR OLUŞTURMA
        {
            id: 8,
            title: "Adım Adım Yeni Klasör Oluşturma 🖱️",
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

        // SLAYT 9: DOSYA VE KLASÖR İŞLEMLERİ
        {
            id: 9,
            title: "Temel Dosya ve Klasör İşlemleri 🛠️",
            subtitle: "5 Ana Dosya Yönetimi Hamlesi",
            badge: "TEMEL İŞLEMLER",
            icon: "fa-solid fa-sliders",
            bgColor: "from-slate-900 via-indigo-950 to-slate-900",
            gradient: "from-slate-900 via-indigo-950 to-slate-900",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 my-auto">
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                        <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                            <div class="text-2xl">✨</div>
                            <h4 class="font-bold text-sm text-cyan-300">1. Oluşturma</h4>
                            <p class="text-xs text-slate-400">İhtiyaç duyulan yeni bir dosya veya klasör açma.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                            <div class="text-2xl">📋</div>
                            <h4 class="font-bold text-sm text-yellow-300">2. Kopyalama</h4>
                            <p class="text-xs text-slate-400">Dosyanın ikizini üretme; aslı yerinde kalır!</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                            <div class="text-2xl">🚚</div>
                            <h4 class="font-bold text-sm text-emerald-300">3. Taşıma (Kesme)</h4>
                            <p class="text-xs text-slate-400">Dosyayı eski yerinden alıp yeni yere götürme.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                            <div class="text-2xl">✏️</div>
                            <h4 class="font-bold text-sm text-purple-300">4. Yeniden Adlandırma</h4>
                            <p class="text-xs text-slate-400">Dosya içeriği değişmeden ismini değiştirme (F2).</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                            <div class="text-2xl">🗑️</div>
                            <h4 class="font-bold text-sm text-rose-300">5. Silme</h4>
                            <p class="text-xs text-slate-400">Gerekmeyen dosyayı çöp kutusuna gönderme (Delete).</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/40 space-y-1">
                            <div class="text-2xl">💡</div>
                            <h4 class="font-bold text-sm text-white">Önemli Fark</h4>
                            <p class="text-xs text-cyan-300">Kopyalamada 2 dosya oluşur; Taşımada dosya sadece yer değiştirir.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 10: KES, KOPYALA VE YAPIŞTIR
        {
            id: 10,
            title: "Kes, Kopyala ve Yapıştır Kısayolları ⌨️",
            subtitle: "Ctrl+X, Ctrl+C ve Ctrl+V Gücü",
            badge: "KISAYOLLAR",
            icon: "fa-solid fa-copy",
            bgColor: "from-slate-900 via-slate-950 to-indigo-950",
            gradient: "from-slate-900 via-slate-950 to-indigo-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 my-auto">
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div class="p-5 rounded-2xl bg-slate-800/80 border-t-4 border-rose-400 space-y-2">
                            <div class="text-3xl">✂️</div>
                            <span class="px-3 py-1 bg-slate-950 rounded-lg font-mono text-rose-300 font-black text-sm border border-slate-700">Ctrl + X</span>
                            <h4 class="font-bold text-sm text-white mt-1">KES (Taşıma)</h4>
                            <p class="text-xs text-slate-300">Dosyayı bulunduğu yerden söker ve panoya alır.</p>
                        </div>
                        <div class="p-5 rounded-2xl bg-slate-800/80 border-t-4 border-cyan-400 space-y-2">
                            <div class="text-3xl">📄📄</div>
                            <span class="px-3 py-1 bg-slate-950 rounded-lg font-mono text-cyan-300 font-black text-sm border border-slate-700">Ctrl + C</span>
                            <h4 class="font-bold text-sm text-white mt-1">KOPYALA (Çoğaltma)</h4>
                            <p class="text-xs text-slate-300">Aslına dokunmaz, tıpatıp aynısını hafızaya çoğaltır.</p>
                        </div>
                        <div class="p-5 rounded-2xl bg-slate-800/80 border-t-4 border-emerald-400 space-y-2">
                            <div class="text-3xl">📋</div>
                            <span class="px-3 py-1 bg-slate-950 rounded-lg font-mono text-emerald-300 font-black text-sm border border-slate-700">Ctrl + V</span>
                            <h4 class="font-bold text-sm text-white mt-1">YAPIŞTIR</h4>
                            <p class="text-xs text-slate-300">Kesilen veya kopyalananı yeni klasöre bırakır.</p>
                        </div>
                    </div>
                    <div class="p-3 bg-slate-900/60 rounded-xl text-center text-xs text-slate-400">
                        🔑 <em>Unutma: Yapıştırma (Ctrl+V) yapılmadan Kesme veya Kopyalama işlemi tamamlanmış sayılmaz!</em>
                    </div>
                </div>
            `
        },

        // SLAYT 11: SİLME VE GERİ DÖNÜŞÜM KUTUSU
        {
            id: 11,
            title: "Silme ve Geri Dönüşüm Kutusu 🗑️",
            subtitle: "Çöp Kutusunun Güvenlik Mantığı",
            badge: "GÜVENLİK",
            icon: "fa-solid fa-trash-can",
            bgColor: "from-slate-900 via-rose-950 to-slate-900",
            gradient: "from-slate-900 via-rose-950 to-slate-900",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 my-auto">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
                            <div class="flex items-center gap-2 font-black text-cyan-300 text-base">
                                <span>🗑️</span> <span>Geri Dönüşüm Kutusu</span>
                            </div>
                            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                Silinen dosyalar doğrudan yok olmaz; Geri Dönüşüm Kutusu'na taşınır. Yanlışlıkla silinen bir dosya sağ tıklanıp <strong>"Geri Yükle"</strong> denilerek kurtarılabilir.
                            </p>
                        </div>

                        <div class="p-5 rounded-2xl bg-rose-950/40 border-2 border-rose-500/40 space-y-3">
                            <div class="flex items-center gap-2 font-black text-rose-300 text-base">
                                <span>⚠️</span> <span>Kalıcı Silme Uyarısı</span>
                            </div>
                            <p class="text-xs sm:text-sm text-rose-200 leading-relaxed">
                                Çöp kutusu <em>"Boşaltıldığında"</em> veya <span class="font-mono bg-black/40 px-1.5 py-0.5 rounded">Shift + Delete</span> yapıldığında dosya kalıcı silinir. Kalıcı silinen dosyaların kurtarılması garanti değildir!
                            </p>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 12: GERİ AL VE YİNELE
        {
            id: 12,
            title: "Zaman Makinesi: Geri Al ve Yinele ⏱️",
            subtitle: "Ctrl+Z ve Ctrl+Y Kısayolları",
            badge: "ZAMAN MAKİNESİ",
            icon: "fa-solid fa-clock-rotate-left",
            bgColor: "from-slate-900 via-indigo-950 to-purple-950",
            gradient: "from-slate-900 via-indigo-950 to-purple-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 my-auto">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                        <div class="p-6 rounded-2xl bg-slate-800/80 border-t-4 border-amber-400 space-y-2">
                            <div class="text-4xl">↩️</div>
                            <span class="px-3 py-1 bg-slate-950 rounded-lg font-mono text-amber-300 font-black text-sm border border-slate-700">Ctrl + Z</span>
                            <h4 class="font-bold text-base text-white mt-1">GERİ AL (Undo)</h4>
                            <p class="text-xs text-slate-300">
                                Az önce yapılan son hatalı işlemi iptal eder ve zamanı bir adım geriye sarar!
                            </p>
                        </div>
                        <div class="p-6 rounded-2xl bg-slate-800/80 border-t-4 border-cyan-400 space-y-2">
                            <div class="text-4xl">↪️</div>
                            <span class="px-3 py-1 bg-slate-950 rounded-lg font-mono text-cyan-300 font-black text-sm border border-slate-700">Ctrl + Y</span>
                            <h4 class="font-bold text-base text-white mt-1">YİNELE (Redo)</h4>
                            <p class="text-xs text-slate-300">
                                Geri alınan işlemi "aslında doğruymuş" diyerek tekrarlar ve ileri sarar!
                            </p>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 13: DOSYA ARAMA
        {
            id: 13,
            title: "Dedektif Gibi Dosya Arama (*) 🔍",
            subtitle: "Joker Karakter Yıldızın Gücü",
            badge: "ARAMA",
            icon: "fa-solid fa-magnifying-glass",
            bgColor: "from-slate-900 via-indigo-950 to-cyan-950",
            gradient: "from-slate-900 via-indigo-950 to-cyan-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 my-auto">
                    <div class="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 shadow-xl space-y-4">
                        <div class="flex items-center gap-3">
                            <span class="text-3xl">⭐</span>
                            <div>
                                <h3 class="text-lg font-black text-white">Yıldız (*) Ne Anlama Gelir?</h3>
                                <p class="text-xs text-slate-400">Arama yaparken 'burada herhangi bir harf olabilir' demektir.</p>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div class="p-4 bg-slate-900/60 rounded-xl border border-cyan-500/30">
                                <span class="font-mono text-cyan-300 font-bold text-sm">*.docx</span>
                                <div class="text-xs text-slate-300 mt-1">Bilgisayardaki <strong>tüm Word belgelerini</strong> listeler.</div>
                            </div>
                            <div class="p-4 bg-slate-900/60 rounded-xl border border-purple-500/30">
                                <span class="font-mono text-purple-300 font-bold text-sm">Bil*.docx</span>
                                <div class="text-xs text-slate-300 mt-1">Adı <strong>"Bil" ile başlayan</strong> tüm Word belgelerini bulur.</div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 14: SIKIŞTIRMA (ARŞİVLEME) NEDİR?
        {
            id: 14,
            title: "Dosya Sıkıştırma (Arşivleme) Nedir? 🗜️",
            subtitle: "ZIP ve RAR Paketleme Mantığı",
            badge: "ARŞİVLEME",
            icon: "fa-solid fa-file-zipper",
            bgColor: "from-slate-900 via-purple-950 to-indigo-950",
            gradient: "from-slate-900 via-purple-950 to-indigo-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 my-auto">
                    <div class="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 shadow-xl space-y-4">
                        <div class="flex items-center gap-3">
                            <span class="text-3xl">📦</span>
                            <div>
                                <h3 class="text-lg font-black text-white">Sıkıştırma Tanımı:</h3>
                                <p class="text-xs text-slate-400">Bavul hazırlar gibi dosyaları paketleme sanatı!</p>
                            </div>
                        </div>
                        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            Dosya ve klasörlerin boyutunu <strong>küçültmek</strong> ve birden fazla dosyayı <strong>tek bir arşiv paketi</strong> haline getirmek için yapılan işleme <strong>SIKIŞTIRMA</strong> denir.
                        </p>
                        <div class="grid grid-cols-2 gap-3 text-center pt-2">
                            <div class="p-3 bg-slate-900/60 rounded-xl border border-purple-500/30">
                                <div class="font-mono font-bold text-purple-300">.zip / .rar</div>
                                <div class="text-[11px] text-slate-400">En yaygın uzantılar</div>
                            </div>
                            <div class="p-3 bg-slate-900/60 rounded-xl border border-cyan-500/30">
                                <div class="font-bold text-cyan-300">WinRAR / WinZip</div>
                                <div class="text-[11px] text-slate-400">Arşivleme programları</div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 15: SIKIŞTIRMANIN FAYDALARI
        {
            id: 15,
            title: "Dosyaları Neden Sıkıştırırız? 📦",
            subtitle: "Sıkıştırmanın 3 Büyük Faydası",
            badge: "VERİMLİLİK",
            icon: "fa-solid fa-box-archive",
            bgColor: "from-slate-900 via-indigo-950 to-slate-900",
            gradient: "from-slate-900 via-indigo-950 to-slate-900",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 my-auto">
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                        <div class="p-4 rounded-2xl bg-slate-800/80 border-t-4 border-cyan-400 space-y-2">
                            <div class="text-3xl">💾</div>
                            <h4 class="font-bold text-sm text-white">1. Yer Tasarrufu</h4>
                            <p class="text-xs text-slate-300">Diskte kapladığı alanı küçülterek hafızada yer açar.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800/80 border-t-4 border-emerald-400 space-y-2">
                            <div class="text-3xl">🚀</div>
                            <h4 class="font-bold text-sm text-white">2. Hızlı Paylaşım</h4>
                            <p class="text-xs text-slate-300">İnternette e-posta veya mesajla çok daha çabuk gönderilir.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800/80 border-t-4 border-purple-400 space-y-2">
                            <div class="text-3xl">🗂️</div>
                            <h4 class="font-bold text-sm text-white">3. Tek Paketleme</h4>
                            <p class="text-xs text-slate-300">50 farklı dosyayı tek bir .zip paketinde birleştirir.</p>
                        </div>
                    </div>
                    <div class="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-center text-xs text-amber-200">
                        💡 <em>Not: Her dosya aynı oranda küçülmez! Metinler çok küçülürken zaten sıkışmış olan MP3/MP4 dosyaları az küçülür.</em>
                    </div>
                </div>
            `
        },

        // SLAYT 16: DEPOLAMA ARAÇLARI
        {
            id: 16,
            title: "Dosyalarımızı Nerede Saklarız? 💾",
            subtitle: "Dahili, Harici ve Bulut Depolama",
            badge: "DEPOLAMA",
            icon: "fa-solid fa-hard-drive",
            bgColor: "from-slate-900 via-blue-950 to-indigo-950",
            gradient: "from-slate-900 via-blue-950 to-indigo-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-1">
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                        <div class="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                            <div class="text-3xl">💽</div>
                            <h4 class="font-bold text-sm text-cyan-300">Sabit Disk (HDD/SSD)</h4>
                            <p class="text-xs text-slate-400">Bilgisayar kasası içindeki ana depolama alanı.</p>
                        </div>
                        <div class="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                            <div class="text-3xl">🔌</div>
                            <h4 class="font-bold text-sm text-yellow-300">USB Flash Bellek</h4>
                            <p class="text-xs text-slate-400">Cebimizde taşıdığımız taşınabilir bellek.</p>
                        </div>
                        <div class="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                            <div class="text-3xl">📱</div>
                            <h4 class="font-bold text-sm text-emerald-300">Hafıza Kartı (SD)</h4>
                            <p class="text-xs text-slate-400">Telefon ve kameralardaki minik kartlar.</p>
                        </div>
                        <div class="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                            <div class="text-3xl">☁️</div>
                            <h4 class="font-bold text-sm text-purple-300">Bulut Depolama</h4>
                            <p class="text-xs text-slate-400">İnternet üzerinden erişilen alan (Drive, OneDrive).</p>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 17: BASILI VERİLERİ DİJİTALE AKTARMA
        {
            id: 17,
            title: "Basılı Verileri Dijitale Aktarma 📠",
            subtitle: "Kâğıttan Ekrana Yolculuk",
            badge: "DİJİTALLEŞTİRME",
            icon: "fa-solid fa-print",
            bgColor: "from-slate-900 via-indigo-950 to-slate-900",
            gradient: "from-slate-900 via-indigo-950 to-slate-900",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 my-auto">
                    <div class="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 shadow-xl space-y-4">
                        <div class="flex items-center gap-3">
                            <span class="text-3xl">📸</span>
                            <h3 class="text-lg font-black text-white">Kâğıt Üzerindeki Bilgi Nasıl Dosya Olur?</h3>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center pt-2">
                            <div class="p-4 bg-slate-900/60 rounded-xl border border-cyan-500/30 space-y-1">
                                <div class="text-2xl">📠</div>
                                <div class="font-bold text-xs text-cyan-300">Tarayıcı (Scanner)</div>
                                <div class="text-[11px] text-slate-400">Kâğıdı ışıkla tarayıp PDF veya JPG yapar.</div>
                            </div>
                            <div class="p-4 bg-slate-900/60 rounded-xl border border-yellow-500/30 space-y-1">
                                <div class="text-2xl">📱</div>
                                <div class="font-bold text-xs text-yellow-300">Telefon Kamerası</div>
                                <div class="text-[11px] text-slate-400">Belgenin fotoğrafını çekip anında dijitalleştirir.</div>
                            </div>
                            <div class="p-4 bg-slate-900/60 rounded-xl border border-emerald-500/30 space-y-1">
                                <div class="text-2xl">📲</div>
                                <div class="font-bold text-xs text-emerald-300">Tabletler</div>
                                <div class="text-[11px] text-slate-400">Taranan notun üzerinde kalemle düzenleme sunar.</div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 18: ETKİLEŞİMLİ EŞLEŞTİRME
        {
            id: 18,
            title: "Uzantıları Dosya Türleriyle Eşleştirelim! 🎯",
            subtitle: "Akıllı Tahta Etkileşimli Eşleştirme Alanı",
            badge: "ETKİLEŞİM",
            icon: "fa-solid fa-gamepad",
            bgColor: "from-slate-900 via-purple-950 to-indigo-950",
            gradient: "from-slate-900 via-purple-950 to-indigo-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 my-auto">
                    <div id="s18-fb" class="p-3 rounded-2xl bg-slate-800/80 border border-slate-700 text-slate-300 text-xs sm:text-sm text-center">
                        Önce sol taraftan bir uzantıya, ardından sağdaki doğru dosya türüne dokunun.
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <!-- Sol Sütun: Uzantılar -->
                        <div class="space-y-2">
                            <button onclick="window.slide18MatchGame.selectLeft(1, '.mp3', this)" class="s18-left-btn w-full p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left font-mono font-bold text-xs sm:text-sm text-cyan-300 transition-all flex items-center gap-2">
                                <span>🎵</span> <span>.mp3</span>
                            </button>
                            <button onclick="window.slide18MatchGame.selectLeft(2, '.docx', this)" class="s18-left-btn w-full p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left font-mono font-bold text-xs sm:text-sm text-blue-300 transition-all flex items-center gap-2">
                                <span>📄</span> <span>.docx</span>
                            </button>
                            <button onclick="window.slide18MatchGame.selectLeft(3, '.jpg', this)" class="s18-left-btn w-full p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left font-mono font-bold text-xs sm:text-sm text-amber-300 transition-all flex items-center gap-2">
                                <span>🖼️</span> <span>.jpg</span>
                            </button>
                            <button onclick="window.slide18MatchGame.selectLeft(4, '.mp4', this)" class="s18-left-btn w-full p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left font-mono font-bold text-xs sm:text-sm text-rose-300 transition-all flex items-center gap-2">
                                <span>🎬</span> <span>.mp4</span>
                            </button>
                            <button onclick="window.slide18MatchGame.selectLeft(5, '.zip', this)" class="s18-left-btn w-full p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left font-mono font-bold text-xs sm:text-sm text-purple-300 transition-all flex items-center gap-2">
                                <span>🗜️</span> <span>.zip</span>
                            </button>
                            <button onclick="window.slide18MatchGame.selectLeft(6, '.pdf', this)" class="s18-left-btn w-full p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left font-mono font-bold text-xs sm:text-sm text-emerald-300 transition-all flex items-center gap-2">
                                <span>📚</span> <span>.pdf</span>
                            </button>
                        </div>

                        <!-- Sağ Sütun: Dosya Türleri -->
                        <div class="space-y-2">
                            <button onclick="window.slide18MatchGame.selectRight(2, 'Metin / Belge', this)" class="s18-right-btn w-full p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left font-bold text-xs sm:text-sm text-white transition-all">
                                Metin / Belge
                            </button>
                            <button onclick="window.slide18MatchGame.selectRight(1, 'Ses / Müzik', this)" class="s18-right-btn w-full p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left font-bold text-xs sm:text-sm text-white transition-all">
                                Ses / Müzik
                            </button>
                            <button onclick="window.slide18MatchGame.selectRight(4, 'Video / Film', this)" class="s18-right-btn w-full p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left font-bold text-xs sm:text-sm text-white transition-all">
                                Video / Film
                            </button>
                            <button onclick="window.slide18MatchGame.selectRight(3, 'Görsel / Resim', this)" class="s18-right-btn w-full p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left font-bold text-xs sm:text-sm text-white transition-all">
                                Görsel / Resim
                            </button>
                            <button onclick="window.slide18MatchGame.selectRight(6, 'E-Kitap / Belge', this)" class="s18-right-btn w-full p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left font-bold text-xs sm:text-sm text-white transition-all">
                                E-Kitap / Belge
                            </button>
                            <button onclick="window.slide18MatchGame.selectRight(5, 'Sıkıştırılmış Arşiv', this)" class="s18-right-btn w-full p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left font-bold text-xs sm:text-sm text-white transition-all">
                                Sıkıştırılmış Arşiv
                            </button>
                        </div>
                    </div>

                    <div class="text-center pt-1">
                        <button onclick="window.slide18MatchGame.reset()" class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl border border-slate-700">
                            Eşleştirmeyi Sıfırla 🔄
                        </button>
                    </div>
                </div>
            `
        },

        // SLAYT 19: HIZLI BİLGİ YARIŞMASI
        {
            id: 19,
            title: "Hızlı Bilgi Yarışması 🏆",
            subtitle: "5 Soruluk Hızlı Quiz",
            badge: "MİNİ TEST",
            icon: "fa-solid fa-trophy",
            bgColor: "from-slate-900 via-indigo-950 to-blue-950",
            gradient: "from-slate-900 via-indigo-950 to-blue-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 my-auto" id="s19-quiz-box">
                    <div class="flex items-center justify-between">
                        <span id="s19-q-badge" class="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-black text-xs">Soru: 1 / 5</span>
                        <span id="s19-score" class="font-black text-xs sm:text-sm text-yellow-400">Puan: 0 / 100</span>
                    </div>

                    <div class="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 shadow-xl space-y-3">
                        <h4 id="s19-q-text" class="text-sm sm:text-base font-black text-white leading-relaxed">
                            1. 'tatil.jpg' dosyasındaki '.jpg' kısmı dosyanın nesini belirtir?
                        </h4>

                        <div id="s19-opts-container" class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                            <button onclick="window.slide19MiniQuiz.answer(0)" class="s19-opt-btn p-3 rounded-xl bg-slate-800 hover:bg-indigo-600/80 border border-slate-700 text-left font-bold text-xs sm:text-sm text-white transition-all flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-slate-900 flex items-center justify-center font-black text-xs text-yellow-400 shrink-0">A</span>
                                <span>Dosyanın boyutunu</span>
                            </button>
                            <button onclick="window.slide19MiniQuiz.answer(1)" class="s19-opt-btn p-3 rounded-xl bg-slate-800 hover:bg-indigo-600/80 border border-slate-700 text-left font-bold text-xs sm:text-sm text-white transition-all flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-slate-900 flex items-center justify-center font-black text-xs text-yellow-400 shrink-0">B</span>
                                <span>Dosyanın türünü (Resim)</span>
                            </button>
                            <button onclick="window.slide19MiniQuiz.answer(2)" class="s19-opt-btn p-3 rounded-xl bg-slate-800 hover:bg-indigo-600/80 border border-slate-700 text-left font-bold text-xs sm:text-sm text-white transition-all flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-slate-900 flex items-center justify-center font-black text-xs text-yellow-400 shrink-0">C</span>
                                <span>Dosyanın oluşturulma yılını</span>
                            </button>
                            <button onclick="window.slide19MiniQuiz.answer(3)" class="s19-opt-btn p-3 rounded-xl bg-slate-800 hover:bg-indigo-600/80 border border-slate-700 text-left font-bold text-xs sm:text-sm text-white transition-all flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-slate-900 flex items-center justify-center font-black text-xs text-yellow-400 shrink-0">D</span>
                                <span>Dosyayı yazan kişiyi</span>
                            </button>
                        </div>

                        <div id="s19-fb" class="hidden"></div>

                        <div class="flex justify-end pt-2">
                            <button id="s19-next-btn" onclick="window.slide19MiniQuiz.next()" class="hidden px-4 py-2 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-black text-xs rounded-xl shadow-lg flex items-center gap-1.5 transition-all">
                                <span>Sonraki Soru 👉</span>
                            </button>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 20: KONU ÖZETİ VE ÇIKIŞ BİLETİ
        {
            id: 20,
            title: "Konu Özeti ve Çıkış Bileti 🎫",
            subtitle: "Ders Değerlendirmesi",
            badge: "ÖZET & ÇIKIŞ",
            icon: "fa-solid fa-ticket",
            bgColor: "from-slate-900 via-purple-950 to-slate-950",
            gradient: "from-slate-900 via-purple-950 to-slate-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 my-auto">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                            <h4 class="font-black text-emerald-300 text-sm flex items-center gap-2">
                                <span>📌</span> <span>Günün Kritik Özeti</span>
                            </h4>
                            <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                                <li><strong>Dosya:</strong> Veri kayıt birimidir; adı ve uzantısı vardır.</li>
                                <li><strong>Klasör:</strong> Ortak dosyaları düzenler; uzantısı olmaz.</li>
                                <li><strong>Kısayollar:</strong> Ctrl+C (Kopyala), Ctrl+X (Kes), Ctrl+V (Yapıştır), Ctrl+Z (Geri Al).</li>
                                <li><strong>Çöp Kutusu:</strong> Silinen dosyaların ilk bekleme yeridir.</li>
                                <li><strong>Sıkıştırma:</strong> Boyutu küçültür ve tek arşivde toplar (.zip, .rar).</li>
                            </ul>
                        </div>

                        <div class="p-5 rounded-2xl bg-amber-950/40 border border-amber-500/40 space-y-2">
                            <h4 class="font-black text-yellow-300 text-sm flex items-center gap-2">
                                <span>🎫</span> <span>Sınıf İçi Çıkış Soruları</span>
                            </h4>
                            <ol class="text-xs text-amber-100 space-y-1 list-decimal pl-4">
                                <li>Dosya uzantısı (soyadı) ne işe yarar?</li>
                                <li>Kopyalama ile Taşıma arasındaki fark nedir?</li>
                                <li>Çöp kutusundaki bir dosya nasıl kurtarılır?</li>
                                <li>Dosya sıkıştırmanın 2 faydası nedir?</li>
                                <li>Bulut depolamaya nasıl erişilir?</li>
                            </ol>
                        </div>
                    </div>

                    <div class="flex items-center justify-center gap-3 pt-2">
                        <button onclick="app.currentSlideIndex = 0; app.renderSlides(); sounds.playClick();" class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg flex items-center gap-2">
                            <i class="fa-solid fa-rotate-left"></i>
                            <span>Sunumu Baştan Başlat 🔄</span>
                        </button>
                        <button onclick="app.switchTab('quiz'); sounds.playClick();" class="px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs rounded-xl shadow-lg flex items-center gap-2">
                            <i class="fa-solid fa-circle-question"></i>
                            <span>Pekiştirme Sorularına Geç 👉</span>
                        </button>
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
