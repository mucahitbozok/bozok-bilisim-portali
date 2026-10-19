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
            badge: "Dedektiflik Görevi 🔍",
            badgeColor: "text-amber-300",
            title: "Dosya Dedektifleri",
            desc: "Dosyaların uzantılarını (.jpg, .mp3, .docx, .mp4, .pdf vb.) inceleyip doğru dosya türünü tespit eden usta bir bilişim dedektifi ol!",
            icon: "fa-solid fa-user-secret",
            iconBg: "bg-amber-500/30 text-amber-300",
            cardGradient: "from-amber-950/90 via-slate-900 to-indigo-950/90",
            border: "border-amber-500/50",
            descColor: "text-amber-100",
            btnText: "Dedektifliğe Başla!",
            btnIcon: "fa-solid fa-magnifying-glass",
            btnGradient: "from-amber-500 via-orange-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/dosya_dedektifleri.html', '1. Dosya Dedektifleri | Öğretmen Bozok')"
        },
        {
            badge: "Klasörleme Yarışı 📁",
            badgeColor: "text-cyan-300",
            title: "Klasör Düzenleme Yarışı",
            desc: "Karışık gelen belgeleri, müzikleri, fotoğrafları ve videoları doğru hedef klasörlere taşıyarak bilgisayarı düzenli hale getir!",
            icon: "fa-solid fa-folder-tree",
            iconBg: "bg-cyan-500/30 text-cyan-300",
            cardGradient: "from-blue-950/90 via-slate-900 to-cyan-950/90",
            border: "border-cyan-500/50",
            descColor: "text-cyan-100",
            btnText: "Düzenlemeye Başla!",
            btnIcon: "fa-solid fa-folder-open",
            btnGradient: "from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/klasor_duzenleme_yarisi.html', '2. Klasör Düzenleme Yarışı | Öğretmen Bozok')"
        },
        {
            badge: "Klavye Hızı ⌨️",
            badgeColor: "text-purple-300",
            title: "Kısayol Ustası",
            desc: "Ctrl+C (Kopyala), Ctrl+X (Kes), Ctrl+V (Yapıştır), Ctrl+Z (Geri Al) ve F2 kısayollarında kombolar yap, bonus puanları topla!",
            icon: "fa-solid fa-keyboard",
            iconBg: "bg-purple-500/30 text-purple-300",
            cardGradient: "from-purple-950/90 via-slate-900 to-indigo-950/90",
            border: "border-purple-500/50",
            descColor: "text-purple-100",
            btnText: "Kısayolları Çöz!",
            btnIcon: "fa-solid fa-bolt",
            btnGradient: "from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-black",
            action: "app.openStandaloneGame('games/kisayol_ustasi.html', '3. Kısayol Ustası | Öğretmen Bozok')"
        },
        {
            badge: "Teknik Destek 🛡️",
            badgeColor: "text-rose-300",
            title: "Geri Dönüşüm Kutusu Kurtarma",
            desc: "Silinen, kaybolan veya kurtarılmayı bekleyen dosyalar için kullanıcılara teknik destek ver! Kurtarma başarısını %100 yap!",
            icon: "fa-solid fa-trash-can-arrow-up",
            iconBg: "bg-rose-500/30 text-rose-300",
            cardGradient: "from-rose-950/90 via-slate-900 to-pink-950/90",
            border: "border-rose-500/50",
            descColor: "text-rose-100",
            btnText: "Dosyaları Kurtar!",
            btnIcon: "fa-solid fa-life-ring",
            btnGradient: "from-rose-500 via-pink-600 to-purple-600 hover:from-rose-400 hover:to-purple-500 text-white font-black",
            action: "app.openStandaloneGame('games/cop_kutusu_kurtarma.html', '4. Geri Dönüşüm Kutusu Kurtarma | Öğretmen Bozok')"
        },
        {
            badge: "Filtreleme Simülasyonu ⚡",
            badgeColor: "text-yellow-300",
            title: "Arama Uzmanı (*.uzantı)",
            desc: "Joker karakterler (*) ve dosya uzantılarıyla bilgisayardaki binlerce dosyayı saniyeler içinde filtrele ve bul!",
            icon: "fa-solid fa-magnifying-glass-chart",
            iconBg: "bg-yellow-500/30 text-yellow-300",
            cardGradient: "from-amber-950/90 via-slate-900 to-blue-950/90",
            border: "border-yellow-500/50",
            descColor: "text-yellow-100",
            btnText: "Aramaya Başla!",
            btnIcon: "fa-solid fa-filter",
            btnGradient: "from-yellow-500 via-amber-500 to-cyan-500 hover:from-yellow-400 hover:to-cyan-400 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/arama_uzmani.html', '5. Arama Uzmanı | Öğretmen Bozok')"
        },
        {
            badge: "Arşiv & Tasarruf 🗜️",
            badgeColor: "text-pink-300",
            title: "Sıkıştırma Görevi (ZIP & RAR)",
            desc: "Dosya boyutunu küçültme, disk tasarrufu sağlama ve onlarca dosyayı tek pakette paylaşma görevlerini tamamla!",
            icon: "fa-solid fa-file-zipper",
            iconBg: "bg-pink-500/30 text-pink-300",
            cardGradient: "from-pink-950/90 via-slate-900 to-purple-950/90",
            border: "border-pink-500/50",
            descColor: "text-pink-100",
            btnText: "Görevi Başlat!",
            btnIcon: "fa-solid fa-box-archive",
            btnGradient: "from-pink-500 via-rose-600 to-indigo-600 hover:from-pink-400 hover:to-indigo-500 text-white font-black",
            action: "app.openStandaloneGame('games/sikistirma_gorevi.html', '6. Sıkıştırma Görevi | Öğretmen Bozok')"
        },
        {
            badge: "Sınıf İçi Düello 👑",
            badgeColor: "text-amber-300",
            title: "Dosya Yönetimi Arenası (2 Takım)",
            desc: "Mavi Takım ve Turuncu Takım karşılıklı yarışıyor! 10 farklı kategoriden soru seç, doğru bil ve takımına puan kazandır!",
            icon: "fa-solid fa-trophy",
            iconBg: "bg-amber-500/30 text-amber-300",
            cardGradient: "from-amber-950/90 via-slate-900 to-orange-950/90",
            border: "border-amber-500/50",
            descColor: "text-amber-100",
            btnText: "Arenaya Gir!",
            btnIcon: "fa-solid fa-crown",
            btnGradient: "from-amber-500 via-orange-500 to-red-600 hover:from-amber-400 hover:to-red-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/dosya_yonetimi_arenasi.html', '7. Dosya Yönetimi Arenası | Öğretmen Bozok')"
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
            badge: "Tüm Oyunlar Bir Arada 🌟",
            badgeColor: "text-amber-300",
            title: "Dosya & Klasör Oyun Merkezi",
            desc: "7 dev mod tek bir ekranda: Dosya Dedektifleri, Klasör Düzenleme, Kısayol Ustası, Çöp Kutusu, Arama, Sıkıştırma ve Sınıf Arenası!",
            icon: "fa-solid fa-gamepad",
            iconBg: "bg-amber-500/30 text-amber-300",
            cardGradient: "from-amber-950/90 via-slate-900 to-indigo-950/90",
            border: "border-amber-500/50",
            descColor: "text-amber-100",
            btnText: "Oyun Merkezine Gir!",
            btnIcon: "fa-solid fa-crown",
            btnGradient: "from-amber-500 via-orange-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/dosya_klasor_oyun_merkezi.html', 'Dosya ve Klasör Yönetimi Oyun Merkezi | Öğretmen Bozok')"
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
    {
        "id": 1,
        "title": "DOSYA VE KLASÖR YÖNETİMİ 📁",
        "subtitle": "6. KONU • BTY.5.1.6",
        "topic": "6. KONU • BTY.5.1.6",
        "badge": "GİRİŞ & KAZANIM",
        "icon": "fa-solid fa-folder-tree",
        "bgColor": "from-slate-900 via-indigo-950 to-purple-950",
        "gradient": "from-slate-900 via-indigo-950 to-purple-950",
        "content": "\n            <div class=\"grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-6xl mx-auto my-auto py-2\">\n                <div class=\"md:col-span-7 space-y-4 text-left\">\n                    <div class=\"flex items-center gap-2 flex-wrap\">\n                        <span class=\"px-4 py-1.5 bg-yellow-400/20 text-yellow-300 font-extrabold text-sm sm:text-base uppercase tracking-wider rounded-full border border-yellow-400/40 shadow-sm\">\n                            6. KONU • 5. SINIF BİLİŞİM TEKNOLOJİLERİ\n                        </span>\n                        <span class=\"px-3 py-1 bg-cyan-500/20 text-cyan-300 font-bold text-xs rounded-full border border-cyan-400/30\">\n                            ⚡ BTY.5.1.6\n                        </span>\n                    </div>\n\n                    <h1 class=\"text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-white tracking-tight leading-tight drop-shadow-xl\">\n                        DOSYA VE KLASÖR <span class=\"text-cyan-400\">YÖNETİMİ</span>\n                    </h1>\n\n                    <div class=\"p-4 sm:p-5 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-yellow-400/40 shadow-xl space-y-2\">\n                        <div class=\"flex items-center gap-2 text-yellow-300 font-black text-xs sm:text-sm uppercase tracking-widest\">\n                            <i class=\"fa-solid fa-bullseye text-base text-yellow-400\"></i>\n                            <span>MEB RESMÎ DERS KAZANIMI:</span>\n                        </div>\n                        <div contenteditable=\"true\" spellcheck=\"false\" class=\"text-base sm:text-lg md:text-xl font-extrabold text-white leading-snug bg-black/30 p-2.5 rounded-xl border border-yellow-400/30 cursor-text focus:outline-none focus:ring-2 focus:ring-yellow-400\" title=\"Kazanım metnini akıllı tahtada doğrudan düzenleyebilirsiniz\">\n                            BTY.5.1.6. Dosya ve klasör yönetimi ile ilgili temel işlemlerle çalışabilme\n                        </div>\n                        <p class=\"text-[11px] text-slate-300\">\n                            💡 İpucu: Yukarıdaki kutucuğa tıklayarak kazanım metnini akıllı tahtada doğrudan değiştirebilirsiniz.\n                        </p>\n                    </div>\n\n                    <div class=\"p-3.5 sm:p-4 bg-indigo-950/80 rounded-2xl border border-indigo-400/30 flex items-start gap-3 shadow-lg\">\n                        <div class=\"w-10 h-10 rounded-xl bg-indigo-500/30 text-yellow-300 flex items-center justify-center text-xl shrink-0 mt-0.5\">\n                            <i class=\"fa-solid fa-lightbulb\"></i>\n                        </div>\n                        <p class=\"text-sm sm:text-base font-semibold text-indigo-100 leading-relaxed\">\n                            “Bilgisayarımızı düzenli bir kütüphaneye dönüştürmeye; dosyaların soyadlarını, klasör hiyerarşisini ve sihirli kısayolları keşfetmeye hazır mısınız?”\n                        </p>\n                    </div>\n\n                    <div class=\"pt-1 flex items-center gap-3 flex-wrap\">\n                        <span class=\"inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-yellow-300 font-bold text-xs sm:text-sm shadow-md\">\n                            <i class=\"fa-solid fa-chalkboard-user text-base\"></i>\n                            <span>Öğretmen Bozok • Bozok Bilişim Portalı</span>\n                        </span>\n                        <button onclick=\"app.nextSlide(); sounds.playClick();\" class=\"px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95\">\n                            <span>Ders Başlasın</span>\n                            <i class=\"fa-solid fa-arrow-right\"></i>\n                        </button>\n                    </div>\n                </div>\n\n                <div class=\"md:col-span-5 flex justify-center\">\n                    <div class=\"relative w-full max-w-sm sm:max-w-md rounded-3xl p-3 bg-gradient-to-tr from-cyan-400/30 via-indigo-500/20 to-purple-500/30 border-2 border-cyan-400/30 shadow-2xl backdrop-blur-sm group\">\n                        <div class=\"relative w-full aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/20\">\n                            <img src=\"assets/slides/veri_isleme_dongusu.jpg\" alt=\"Dosya ve Klasör Sistemi\" class=\"w-full h-full object-cover group-hover:scale-105 transition-transform duration-700\">\n                            <div class=\"absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex flex-col justify-end p-3.5 pointer-events-none\">\n                                <span class=\"px-3 py-1 bg-cyan-500/90 text-white font-extrabold text-xs rounded-full shadow-lg backdrop-blur-md w-fit mb-1 border border-cyan-300/40\">\n                                    📁 Dijital Düzen İstasyonu\n                                </span>\n                                <p class=\"text-[11px] sm:text-xs text-slate-200 font-semibold drop-shadow-md\">\n                                    Dosyalar, Klasör Ağacı, Kısayollar ve Arşivleme\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"grid grid-cols-3 gap-2 mt-2.5\">\n                            <div class=\"p-2 bg-slate-900/90 rounded-xl border border-cyan-500/40 text-center\">\n                                <span class=\"text-xs font-black text-cyan-400 block\"><i class=\"fa-solid fa-file mr-1\"></i>Dosyalar</span>\n                                <span class=\"text-[10px] text-slate-300\">Ad & Uzantı</span>\n                            </div>\n                            <div class=\"p-2 bg-slate-900/90 rounded-xl border border-amber-500/40 text-center\">\n                                <span class=\"text-xs font-black text-amber-400 block\"><i class=\"fa-solid fa-folder-tree mr-1\"></i>Klasörler</span>\n                                <span class=\"text-[10px] text-slate-300\">Hiyerarşi</span>\n                            </div>\n                            <div class=\"p-2 bg-slate-900/90 rounded-xl border border-purple-500/40 text-center\">\n                                <span class=\"text-xs font-black text-purple-400 block\"><i class=\"fa-solid fa-file-zipper mr-1\"></i>Sıkıştırma</span>\n                                <span class=\"text-[10px] text-slate-300\">ZIP & RAR</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 2,
        "title": "BUGÜN NELER ÖĞRENECEĞİZ? 🗺️",
        "subtitle": "Dersimizin Ana Durakları ve Öğrenme Kartları",
        "topic": "6. KONU • BTY.5.1.6",
        "badge": "HEDEFLER",
        "icon": "fa-solid fa-compass",
        "bgColor": "from-slate-900 via-indigo-950 to-blue-950",
        "gradient": "from-slate-900 via-indigo-950 to-blue-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-4 text-center my-auto py-2\">\n                <p class=\"text-base sm:text-xl text-indigo-200 font-semibold\">\n                    Aşağıdaki öğrenme kartlarına dokun ve dersteki kilit kavramların ilk ipucunu al!\n                </p>\n\n                <div class=\"grid grid-cols-2 sm:grid-cols-4 gap-3 text-left\">\n                    <button onclick=\"document.getElementById('slide2-fb').innerText = '📄 DOSYA: Bilgisayarda metin, resim, ses veya videoların kaydedildiği en temel veri birimidir.'; sounds.playClick();\" class=\"p-3.5 rounded-2xl bg-slate-850 hover:bg-indigo-900/60 border-2 border-cyan-500/40 hover:border-yellow-400 transition-all shadow-md group flex flex-col justify-between\">\n                        <span class=\"text-2xl mb-1 block group-hover:scale-110 transition-transform\">📄</span>\n                        <div>\n                            <h4 class=\"text-xs sm:text-sm font-black text-white\">1. Dosya Nedir?</h4>\n                            <p class=\"text-[10px] sm:text-xs text-slate-400 mt-0.5\">Temel veri birimi</p>\n                        </div>\n                    </button>\n                    <button onclick=\"document.getElementById('slide2-fb').innerText = '🏷️ UZANTI (SOYADI): Noktadan sonra gelen 3-4 harfli kısımdır (.jpg, .mp3, .docx). Dosyanın türünü belirtir!'; sounds.playClick();\" class=\"p-3.5 rounded-2xl bg-slate-850 hover:bg-indigo-900/60 border-2 border-purple-500/40 hover:border-yellow-400 transition-all shadow-md group flex flex-col justify-between\">\n                        <span class=\"text-2xl mb-1 block group-hover:scale-110 transition-transform\">🏷️</span>\n                        <div>\n                            <h4 class=\"text-xs sm:text-sm font-black text-white\">2. Dosya Uzantısı</h4>\n                            <p class=\"text-[10px] sm:text-xs text-slate-400 mt-0.5\">Dosyanın soyadı</p>\n                        </div>\n                    </button>\n                    <button onclick=\"document.getElementById('slide2-fb').innerText = '📁 KLASÖR (DİZİN): Ortak özelliğe sahip dosyaları toplayan sarı simgeli birimdir. Uzantısı OLMAZ!'; sounds.playClick();\" class=\"p-3.5 rounded-2xl bg-slate-850 hover:bg-indigo-900/60 border-2 border-amber-500/40 hover:border-yellow-400 transition-all shadow-md group flex flex-col justify-between\">\n                        <span class=\"text-2xl mb-1 block group-hover:scale-110 transition-transform\">📁</span>\n                        <div>\n                            <h4 class=\"text-xs sm:text-sm font-black text-white\">3. Klasör & Dizin</h4>\n                            <p class=\"text-[10px] sm:text-xs text-slate-400 mt-0.5\">Dijital çekmeceler</p>\n                        </div>\n                    </button>\n                    <button onclick=\"document.getElementById('slide2-fb').innerText = '🌳 AĞAÇ YAPISI: Bir klasörün içine açılan yeni klasöre Alt Klasör (Subfolder) denir. Hiyerarşik düzen kurulur.'; sounds.playClick();\" class=\"p-3.5 rounded-2xl bg-slate-850 hover:bg-indigo-900/60 border-2 border-emerald-500/40 hover:border-yellow-400 transition-all shadow-md group flex flex-col justify-between\">\n                        <span class=\"text-2xl mb-1 block group-hover:scale-110 transition-transform\">🌳</span>\n                        <div>\n                            <h4 class=\"text-xs sm:text-sm font-black text-white\">4. Alt Klasörler</h4>\n                            <p class=\"text-[10px] sm:text-xs text-slate-400 mt-0.5\">Klasör hiyerarşisi</p>\n                        </div>\n                    </button>\n                    <button onclick=\"document.getElementById('slide2-fb').innerText = '⌨️ KISAYOLLAR: Ctrl+C (Kopyala), Ctrl+X (Kes/Taşı), Ctrl+V (Yapıştır), Ctrl+Z (Geri Al), F2 (Yeniden Adlandır)!'; sounds.playClick();\" class=\"p-3.5 rounded-2xl bg-slate-850 hover:bg-indigo-900/60 border-2 border-cyan-500/40 hover:border-yellow-400 transition-all shadow-md group flex flex-col justify-between\">\n                        <span class=\"text-2xl mb-1 block group-hover:scale-110 transition-transform\">⌨️</span>\n                        <div>\n                            <h4 class=\"text-xs sm:text-sm font-black text-white\">5. Kısayol Tuşları</h4>\n                            <p class=\"text-[10px] sm:text-xs text-slate-400 mt-0.5\">Sihirli parmaklar</p>\n                        </div>\n                    </button>\n                    <button onclick=\"document.getElementById('slide2-fb').innerText = '🗑️ GERİ DÖNÜŞÜM: Silinen dosyaların ilk durağıdır. Sağ tıklayıp \\'Geri Yükle\\' denildiğinde eski yerine döner.'; sounds.playClick();\" class=\"p-3.5 rounded-2xl bg-slate-850 hover:bg-indigo-900/60 border-2 border-rose-500/40 hover:border-yellow-400 transition-all shadow-md group flex flex-col justify-between\">\n                        <span class=\"text-2xl mb-1 block group-hover:scale-110 transition-transform\">🗑️</span>\n                        <div>\n                            <h4 class=\"text-xs sm:text-sm font-black text-white\">6. Çöp Kutusu</h4>\n                            <p class=\"text-[10px] sm:text-xs text-slate-400 mt-0.5\">Kurtarma merkezi</p>\n                        </div>\n                    </button>\n                    <button onclick=\"document.getElementById('slide2-fb').innerText = '🔍 JOKER ARAMA: *.docx yazıldığında tüm Word belgeleri, Bil*.docx yazıldığında Bil ile başlayan Word belgeleri bulunur.'; sounds.playClick();\" class=\"p-3.5 rounded-2xl bg-slate-850 hover:bg-indigo-900/60 border-2 border-yellow-500/40 hover:border-yellow-400 transition-all shadow-md group flex flex-col justify-between\">\n                        <span class=\"text-2xl mb-1 block group-hover:scale-110 transition-transform\">🔍</span>\n                        <div>\n                            <h4 class=\"text-xs sm:text-sm font-black text-white\">7. Dosya Arama (*)</h4>\n                            <p class=\"text-[10px] sm:text-xs text-slate-400 mt-0.5\">Joker karakterler</p>\n                        </div>\n                    </button>\n                    <button onclick=\"document.getElementById('slide2-fb').innerText = '🗜️ SIKIŞTIRMA (ZIP/RAR): Dosya boyutunu küçülterek disk tasarrufu sağlar ve onlarca dosyayı tek pakette gönderir.'; sounds.playClick();\" class=\"p-3.5 rounded-2xl bg-slate-850 hover:bg-indigo-900/60 border-2 border-purple-500/40 hover:border-yellow-400 transition-all shadow-md group flex flex-col justify-between\">\n                        <span class=\"text-2xl mb-1 block group-hover:scale-110 transition-transform\">🗜️</span>\n                        <div>\n                            <h4 class=\"text-xs sm:text-sm font-black text-white\">8. Sıkıştırma</h4>\n                            <p class=\"text-[10px] sm:text-xs text-slate-400 mt-0.5\">ZIP & RAR Arşiv</p>\n                        </div>\n                    </button>\n                </div>\n\n                <div id=\"slide2-fb\" class=\"p-4 bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-blue-900/80 rounded-2xl border-2 border-yellow-400/50 text-yellow-300 font-extrabold text-sm sm:text-base min-h-[56px] flex items-center justify-center shadow-lg\">\n                    👆 Yukarıdaki 8 öğrenme durağına dokunarak ilk ipucunu al!\n                </div>\n            </div>\n        "
    },
    {
        "id": 3,
        "title": "Dosya (File) Nedir? 📄",
        "subtitle": "Dijital Dünyanın Yapı Taşı",
        "topic": "6. KONU • BTY.5.1.6",
        "badge": "TEMEL KAVRAM",
        "icon": "fa-solid fa-file",
        "bgColor": "from-slate-900 via-blue-950 to-indigo-950",
        "gradient": "from-slate-900 via-blue-950 to-indigo-950",
        "content": "\n            <div class=\"max-w-4xl mx-auto space-y-5 my-auto\">\n                <div class=\"p-6 rounded-3xl bg-slate-850 border-2 border-cyan-500/40 shadow-xl space-y-4\">\n                    <div class=\"flex items-center gap-3\">\n                        <span class=\"w-12 h-12 rounded-2xl bg-blue-500/20 text-cyan-300 flex items-center justify-center text-2xl font-black\">📄</span>\n                        <div>\n                            <h3 class=\"text-xl font-black text-white\">Dosya (File) Tanımı:</h3>\n                            <p class=\"text-xs text-slate-400\">Bilgisayarda verilerin saklandığı en temel birim</p>\n                        </div>\n                    </div>\n                    <p class=\"text-slate-200 text-base leading-relaxed\">\n                        Bilgisayarda <strong>yazı, resim, ses, video veya çizim</strong> gibi bilgilerin kaydedildiği birimlere <strong>DOSYA</strong> denir. Tıpkı bir defter yaprağı gibi! Her dosya belirli bir türdeki içeriği içinde barındırır.\n                    </p>\n                </div>\n\n                <div class=\"grid grid-cols-2 sm:grid-cols-4 gap-3 text-center\">\n                    <div class=\"p-4 rounded-2xl bg-slate-850 border-2 border-blue-500/40 shadow-md\">\n                        <div class=\"text-2xl mb-1\">📝</div>\n                        <div class=\"font-bold text-sm text-white\">Metin Dosyaları</div>\n                        <div class=\"text-xs text-slate-400\">Ödev, dilekçe, not</div>\n                    </div>\n                    <div class=\"p-4 rounded-2xl bg-slate-850 border-2 border-purple-500/40 shadow-md\">\n                        <div class=\"text-2xl mb-1\">🖼️</div>\n                        <div class=\"font-bold text-sm text-white\">Görsel / Resim</div>\n                        <div class=\"text-xs text-slate-400\">Fotoğraf, afiş</div>\n                    </div>\n                    <div class=\"p-4 rounded-2xl bg-slate-850 border-2 border-amber-500/40 shadow-md\">\n                        <div class=\"text-2xl mb-1\">🎵</div>\n                        <div class=\"font-bold text-sm text-white\">Ses / Müzik</div>\n                        <div class=\"text-xs text-slate-400\">Şarkı, ses kaydı</div>\n                    </div>\n                    <div class=\"p-4 rounded-2xl bg-slate-850 border-2 border-rose-500/40 shadow-md\">\n                        <div class=\"text-2xl mb-1\">🎬</div>\n                        <div class=\"font-bold text-sm text-white\">Video / Film</div>\n                        <div class=\"text-xs text-slate-400\">Çizgi film, ders videosu</div>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 4,
        "title": "Dosya Adı ve Uzantısı (Soyadı) 🏷️",
        "subtitle": "Bir Dosyanın 3 Parçalı Kimliği",
        "topic": "6. KONU • BTY.5.1.6",
        "badge": "DOSYA YAPISI",
        "icon": "fa-solid fa-signature",
        "bgColor": "from-slate-900 via-indigo-950 to-purple-950",
        "gradient": "from-slate-900 via-indigo-950 to-purple-950",
        "content": "\n            <div class=\"max-w-4xl mx-auto space-y-6 my-auto text-center\">\n                <div class=\"p-8 rounded-3xl bg-slate-850 border-2 border-indigo-500/40 shadow-2xl space-y-6\">\n                    <div class=\"inline-flex items-center justify-center gap-2 p-4 bg-slate-950 rounded-2xl border-2 border-dashed border-slate-700 font-mono text-xl sm:text-3xl font-black\">\n                        <span class=\"text-cyan-400 px-3 py-1 bg-cyan-950/60 rounded-xl\">Ali Babanın Çiftliği</span>\n                        <span class=\"text-yellow-400 text-4xl\">.</span>\n                        <span class=\"text-purple-400 px-3 py-1 bg-purple-950/60 rounded-xl\">mp3</span>\n                    </div>\n\n                    <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4 text-left\">\n                        <div class=\"p-4 rounded-2xl bg-slate-900/90 border-t-4 border-cyan-400\">\n                            <h4 class=\"font-black text-cyan-300 text-sm mb-1\">1. Dosya Adı (Biz Veririz)</h4>\n                            <p class=\"text-xs text-slate-300 leading-relaxed\">\n                                Dosyanın neyle ilgili olduğunu anlatır. Örneğin: <em>\"Ali Babanın Çiftliği\"</em>. İstediğimiz zaman değiştirebiliriz.\n                            </p>\n                        </div>\n                        <div class=\"p-4 rounded-2xl bg-slate-900/90 border-t-4 border-purple-400\">\n                            <h4 class=\"font-black text-purple-300 text-sm mb-1\">2. Dosya Uzantısı (Soyadı)</h4>\n                            <p class=\"text-xs text-slate-300 leading-relaxed\">\n                                Noktadan sonraki 3-4 harftir. <strong>Dosyanın türünü</strong> ve hangi programla açılacağını işletim sistemine söyler.\n                            </p>\n                        </div>\n                    </div>\n\n                    <div class=\"p-3 bg-yellow-950/30 border border-yellow-500/40 rounded-xl text-xs sm:text-sm text-yellow-200 font-bold\">\n                        ⭐ Nokta (.) dosya adı ile uzantıyı birbirinden ayıran sihirli köprüdür!\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 5,
        "title": "Popüler Dosya Uzantıları & Sınıflandırma 🗃️",
        "subtitle": "Hangi Uzantı Hangi Dosya Türüne Aittir?",
        "topic": "6. KONU • BTY.5.1.6",
        "badge": "UZANTI LİSTESİ",
        "icon": "fa-solid fa-list-check",
        "bgColor": "from-slate-900 via-indigo-950 to-slate-950",
        "gradient": "from-slate-900 via-indigo-950 to-slate-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-3.5 my-auto text-left\">\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3\">\n                    <div class=\"p-3.5 rounded-2xl bg-slate-850 border-2 border-blue-500/40\">\n                        <div class=\"flex items-center gap-2 text-cyan-300 font-black text-sm mb-1.5\">\n                            <span>📝</span> <span>Yazı / Belge</span>\n                        </div>\n                        <div class=\"text-xs text-slate-300 font-mono space-y-0.5\">\n                            <div><strong>.docx / .doc:</strong> Word Belgesi</div>\n                            <div><strong>.txt:</strong> Düz Metin Belgesi</div>\n                            <div><strong>.pdf:</strong> Elektronik Kitap / Belge</div>\n                        </div>\n                    </div>\n\n                    <div class=\"p-3.5 rounded-2xl bg-slate-850 border-2 border-purple-500/40\">\n                        <div class=\"flex items-center gap-2 text-purple-300 font-black text-sm mb-1.5\">\n                            <span>🖼️</span> <span>Görsel / Resim</span>\n                        </div>\n                        <div class=\"text-xs text-slate-300 font-mono space-y-0.5\">\n                            <div><strong>.jpg / .jpeg:</strong> Fotoğraf / Resim</div>\n                            <div><strong>.png:</strong> Şeffaf Arka Planlı Resim</div>\n                            <div><strong>.gif:</strong> Hareketli Resim (Animasyon)</div>\n                        </div>\n                    </div>\n\n                    <div class=\"p-3.5 rounded-2xl bg-slate-850 border-2 border-amber-500/40\">\n                        <div class=\"flex items-center gap-2 text-amber-300 font-black text-sm mb-1.5\">\n                            <span>🎵</span> <span>Ses / Müzik</span>\n                        </div>\n                        <div class=\"text-xs text-slate-300 font-mono space-y-0.5\">\n                            <div><strong>.mp3:</strong> Dijital Müzik Dosyası</div>\n                            <div><strong>.wav:</strong> Ham Ses Kaydı</div>\n                            <div><strong>.wma:</strong> Windows Medya Sesi</div>\n                        </div>\n                    </div>\n\n                    <div class=\"p-3.5 rounded-2xl bg-slate-850 border-2 border-rose-500/40\">\n                        <div class=\"flex items-center gap-2 text-rose-300 font-black text-sm mb-1.5\">\n                            <span>🎬</span> <span>Video / Film</span>\n                        </div>\n                        <div class=\"text-xs text-slate-300 font-mono space-y-0.5\">\n                            <div><strong>.mp4:</strong> Standart Video Dosyası</div>\n                            <div><strong>.avi:</strong> Yüksek Kaliteli Film</div>\n                            <div><strong>.mov:</strong> Apple Video Dosyası</div>\n                        </div>\n                    </div>\n\n                    <div class=\"p-3.5 rounded-2xl bg-slate-850 border-2 border-emerald-500/40\">\n                        <div class=\"flex items-center gap-2 text-emerald-300 font-black text-sm mb-1.5\">\n                            <span>🗜️</span> <span>Sıkıştırılmış Arşiv</span>\n                        </div>\n                        <div class=\"text-xs text-slate-300 font-mono space-y-0.5\">\n                            <div><strong>.zip:</strong> Sıkıştırılmış Klasör</div>\n                            <div><strong>.rar:</strong> WinRAR Arşiv Dosyası</div>\n                        </div>\n                    </div>\n\n                    <div class=\"p-3.5 rounded-2xl bg-slate-850 border-2 border-teal-500/40\">\n                        <div class=\"flex items-center gap-2 text-teal-300 font-black text-sm mb-1.5\">\n                            <span>⚙️</span> <span>Uygulama / Program</span>\n                        </div>\n                        <div class=\"text-xs text-slate-300 font-mono space-y-0.5\">\n                            <div><strong>.exe:</strong> Windows Kurulum Dosyası</div>\n                            <div><strong>.apk:</strong> Android Mobil Uygulama</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 6,
        "title": "Klasör (Dizin / Folder) Nedir? 📁",
        "subtitle": "Dijital Çekmeceler ve Düzen",
        "topic": "6. KONU • BTY.5.1.6",
        "badge": "HİYERARŞİ",
        "icon": "fa-solid fa-folder",
        "bgColor": "from-slate-900 via-indigo-950 to-slate-900",
        "gradient": "from-slate-900 via-indigo-950 to-slate-900",
        "content": "\n            <div class=\"max-w-4xl mx-auto space-y-5 my-auto\">\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4\">\n                    <div class=\"p-5 rounded-2xl bg-slate-850 border-2 border-amber-500/40 space-y-3\">\n                        <div class=\"flex items-center gap-2 font-black text-amber-300 text-base\">\n                            <span>📁</span> <span>Klasör (Dizin)</span>\n                        </div>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Ortak özelliğe sahip dosyaları bir arada topladığımız sarı simgeli birimlere <strong>KLASÖR</strong> denir. Klasörlerin dosya uzantısı (soyadı) <strong>OLMAZ</strong>!\n                        </p>\n                        <div class=\"p-3 bg-slate-900/60 rounded-xl text-xs text-slate-400\">\n                            💡 <em>Ödevler, Resimler, Müzikler klasörleri gibi!</em>\n                        </div>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-850 border-2 border-cyan-500/40 space-y-3\">\n                        <div class=\"flex items-center gap-2 font-black text-cyan-300 text-base\">\n                            <span>✨</span> <span>Neden Klasör Kullanırız?</span>\n                        </div>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Masaüstünde yüzlerce dosyanın birbirine karışmasını engeller. Aradığımız herhangi bir ödeve veya şarkıya saniyeler içinde ulaşmamızı sağlar.\n                        </p>\n                        <div class=\"p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 font-bold\">\n                            Düzenli Klasör = Hızlı ve Başarılı Çalışma!\n                        </div>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 7,
        "title": "Alt Klasör (Subfolder) ve Ağaç Yapısı 🌳",
        "subtitle": "İç İçe Klasörleme Düzeni",
        "topic": "6. KONU • BTY.5.1.6",
        "badge": "AĞAÇ YAPISI",
        "icon": "fa-solid fa-folder-tree",
        "bgColor": "from-slate-900 via-purple-950 to-indigo-950",
        "gradient": "from-slate-900 via-purple-950 to-indigo-950",
        "content": "\n            <div class=\"max-w-4xl mx-auto space-y-5 my-auto\">\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4\">\n                    <div class=\"p-5 rounded-2xl bg-slate-850 border-2 border-purple-500/40 space-y-3\">\n                        <div class=\"flex items-center gap-2 font-black text-purple-300 text-base\">\n                            <span>🌳</span> <span>Alt Klasör Tanımı</span>\n                        </div>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Bir klasörün içine açılan yeni klasöre <strong>ALT KLASÖR</strong> denir. Böylece hiyerarşik bir ağaç yapısı kurulur.\n                        </p>\n                        <p class=\"text-xs text-slate-400\">\n                            Tıpkı bir okul dolabının içindeki ders bölmeleri gibi!\n                        </p>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-900/90 border-2 border-slate-700 font-mono text-xs sm:text-sm text-cyan-300 space-y-1\">\n                        <div class=\"text-yellow-400 font-bold\">📁 OKUL (Ana Klasör)</div>\n                        <div class=\"pl-4 text-purple-300\">├── 📁 Ödevler (Alt Klasör)</div>\n                        <div class=\"pl-8 text-slate-400\">│   ├── 📄 Bilisim_Odevi.docx</div>\n                        <div class=\"pl-8 text-slate-400\">│   └── 📄 Matematik.pdf</div>\n                        <div class=\"pl-4 text-purple-300\">├── 📁 Resimler (Alt Klasör)</div>\n                        <div class=\"pl-8 text-slate-400\">│   └── 🖼️ 23_Nisan.jpg</div>\n                        <div class=\"pl-4 text-purple-300\">└── 📁 Projeler (Alt Klasör)</div>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 8,
        "title": "Adım Adım Yeni Klasör Oluşturma 🖱️",
        "subtitle": "4 Kolay Adımda Yeni Bir Klasör Aç",
        "topic": "6. KONU • BTY.5.1.6",
        "badge": "UYGULAMA ADIMI",
        "icon": "fa-solid fa-folder-plus",
        "bgColor": "from-slate-900 via-blue-950 to-indigo-950",
        "gradient": "from-slate-900 via-blue-950 to-indigo-950",
        "content": "\n            <div class=\"max-w-4xl mx-auto space-y-5 my-auto text-center\">\n                <h3 class=\"text-xl font-black text-white\">Fareyle Yeni Klasör Oluşturma Adımları:</h3>\n                <div class=\"grid grid-cols-2 sm:grid-cols-4 gap-3 text-left\">\n                    <div class=\"p-4 rounded-2xl bg-slate-850 border-2 border-cyan-500/40 space-y-2\">\n                        <span class=\"w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-black text-sm\">1</span>\n                        <h4 class=\"font-bold text-sm text-white\">Boş Yere Sağ Tık</h4>\n                        <p class=\"text-xs text-slate-400\">Masaüstünde veya pencerede boş bir alana sağ tıklanır.</p>\n                    </div>\n                    <div class=\"p-4 rounded-2xl bg-slate-850 border-2 border-purple-500/40 space-y-2\">\n                        <span class=\"w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center font-black text-sm\">2</span>\n                        <h4 class=\"font-bold text-sm text-white\">\"Yeni\"ye Gel</h4>\n                        <p class=\"text-xs text-slate-400\">Açılan menüde fare 'Yeni' seçeneğinin üzerine getirilir.</p>\n                    </div>\n                    <div class=\"p-4 rounded-2xl bg-slate-850 border-2 border-amber-500/40 space-y-2\">\n                        <span class=\"w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-black text-sm\">3</span>\n                        <h4 class=\"font-bold text-sm text-white\">\"Klasör\" Seç</h4>\n                        <p class=\"text-xs text-slate-400\">Açılan alt menüden 'Klasör' seçeneğine sol tıklanır.</p>\n                    </div>\n                    <div class=\"p-4 rounded-2xl bg-slate-850 border-2 border-emerald-500/40 space-y-2\">\n                        <span class=\"w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-black text-sm\">4</span>\n                        <h4 class=\"font-bold text-sm text-white\">İsim Yaz & Enter</h4>\n                        <p class=\"text-xs text-slate-400\">Klasöre bir ad verilir ve Enter tuşuna basılır.</p>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 9,
        "title": "Temel Dosya ve Klasör İşlemleri 🛠️",
        "subtitle": "5 Ana Dosya Yönetimi Hamlesi",
        "topic": "6. KONU • BTY.5.1.6",
        "badge": "TEMEL İŞLEMLER",
        "icon": "fa-solid fa-sliders",
        "bgColor": "from-slate-900 via-indigo-950 to-slate-900",
        "gradient": "from-slate-900 via-indigo-950 to-slate-900",
        "content": "\n            <div class=\"max-w-4xl mx-auto space-y-4 my-auto\">\n                <div class=\"grid grid-cols-2 sm:grid-cols-3 gap-3 text-center\">\n                    <div class=\"p-4 rounded-2xl bg-slate-850 border-2 border-cyan-500/40 space-y-1\">\n                        <div class=\"text-2xl\">✨</div>\n                        <h4 class=\"font-bold text-sm text-cyan-300\">1. Oluşturma</h4>\n                        <p class=\"text-xs text-slate-400\">İhtiyaç duyulan yeni bir dosya veya klasör açma.</p>\n                    </div>\n                    <div class=\"p-4 rounded-2xl bg-slate-850 border-2 border-yellow-500/40 space-y-1\">\n                        <div class=\"text-2xl\">📋</div>\n                        <h4 class=\"font-bold text-sm text-yellow-300\">2. Kopyalama</h4>\n                        <p class=\"text-xs text-slate-400\">Dosyanın ikizini üretme; aslı yerinde kalır!</p>\n                    </div>\n                    <div class=\"p-4 rounded-2xl bg-slate-850 border-2 border-emerald-500/40 space-y-1\">\n                        <div class=\"text-2xl\">🚚</div>\n                        <h4 class=\"font-bold text-sm text-emerald-300\">3. Taşıma (Kesme)</h4>\n                        <p class=\"text-xs text-slate-400\">Dosyayı eski yerinden alıp yeni yere götürme.</p>\n                    </div>\n                    <div class=\"p-4 rounded-2xl bg-slate-850 border-2 border-purple-500/40 space-y-1\">\n                        <div class=\"text-2xl\">✏️</div>\n                        <h4 class=\"font-bold text-sm text-purple-300\">4. Yeniden Adlandırma</h4>\n                        <p class=\"text-xs text-slate-400\">Dosya içeriği değişmeden ismini değiştirme (F2).</p>\n                    </div>\n                    <div class=\"p-4 rounded-2xl bg-slate-850 border-2 border-rose-500/40 space-y-1\">\n                        <div class=\"text-2xl\">🗑️</div>\n                        <h4 class=\"font-bold text-sm text-rose-300\">5. Silme</h4>\n                        <p class=\"text-xs text-slate-400\">Gerekmeyen dosyayı çöp kutusuna gönderme (Delete).</p>\n                    </div>\n                    <div class=\"p-4 rounded-2xl bg-slate-850 border-2 border-blue-500/40 space-y-1\">\n                        <div class=\"text-2xl\">🔍</div>\n                        <h4 class=\"font-bold text-sm text-blue-300\">6. Arama</h4>\n                        <p class=\"text-xs text-slate-400\">Aradığın dosyayı saniyeler içinde bulma.</p>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 10,
        "title": "Kopyalama ile Taşıma Arasındaki Fark ⚖️",
        "subtitle": "En Çok Karıştırılan İki Temel İşlem",
        "topic": "6. KONU • BTY.5.1.6",
        "badge": "KARŞILAŞTIRMA",
        "icon": "fa-solid fa-code-compare",
        "bgColor": "from-slate-900 via-indigo-950 to-blue-950",
        "gradient": "from-slate-900 via-indigo-950 to-blue-950",
        "content": "\n            <div class=\"max-w-4xl mx-auto space-y-5 my-auto\">\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4\">\n                    <div class=\"p-5 rounded-2xl bg-slate-850 border-2 border-yellow-500/40 space-y-3\">\n                        <div class=\"flex items-center gap-2 font-black text-yellow-300 text-base\">\n                            <span>📋</span> <span>KOPYALAMA (Copy)</span>\n                        </div>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Dosyanın bir örneğini (ikizini) oluşturur. Dosya hem <strong>eski yerinde</strong> kalır hem de <strong>yeni yere</strong> yapıştırılır. Dosya sayısı 2 olur.\n                        </p>\n                        <div class=\"p-3 bg-yellow-950/40 rounded-xl font-mono text-xs text-yellow-200\">\n                            Kısayol: Ctrl + C ve Ctrl + V\n                        </div>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-850 border-2 border-emerald-500/40 space-y-3\">\n                        <div class=\"flex items-center gap-2 font-black text-emerald-300 text-base\">\n                            <span>🚚</span> <span>TAŞIMA / KESME (Move / Cut)</span>\n                        </div>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Dosyayı bulunduğu yerden tamamen alır ve başka bir klasöre aktarır. Dosya eski yerinden <strong>SİLİNİR</strong>, sadece yeni yerinde bulunur. Dosya sayısı 1 kalır.\n                        </p>\n                        <div class=\"p-3 bg-emerald-950/40 rounded-xl font-mono text-xs text-emerald-200\">\n                            Kısayol: Ctrl + X ve Ctrl + V\n                        </div>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 11,
        "title": "Klavye Kısayolları Ustası ⌨️",
        "subtitle": "İşleri 10 Kat Hızlandıran Sihirli Tuşlar",
        "topic": "6. KONU • BTY.5.1.6",
        "badge": "KISAYOLLAR",
        "icon": "fa-solid fa-keyboard",
        "bgColor": "from-slate-900 via-purple-950 to-indigo-950",
        "gradient": "from-slate-900 via-purple-950 to-indigo-950",
        "content": "\n            <div class=\"max-w-4xl mx-auto space-y-4 my-auto\">\n                <div class=\"grid grid-cols-2 sm:grid-cols-3 gap-3\">\n                    <div class=\"p-3.5 rounded-2xl bg-slate-850 border-2 border-cyan-500/40\">\n                        <span class=\"px-2.5 py-1 bg-slate-950 rounded-lg text-cyan-400 font-mono font-bold text-xs\">Ctrl + C</span>\n                        <h4 class=\"font-bold text-sm text-white mt-2\">Kopyala</h4>\n                        <p class=\"text-xs text-slate-400\">Hafızaya kopyalar.</p>\n                    </div>\n                    <div class=\"p-3.5 rounded-2xl bg-slate-850 border-2 border-emerald-500/40\">\n                        <span class=\"px-2.5 py-1 bg-slate-950 rounded-lg text-emerald-400 font-mono font-bold text-xs\">Ctrl + X</span>\n                        <h4 class=\"font-bold text-sm text-white mt-2\">Kes (Taşı)</h4>\n                        <p class=\"text-xs text-slate-400\">Eski yerinden söker.</p>\n                    </div>\n                    <div class=\"p-3.5 rounded-2xl bg-slate-850 border-2 border-purple-500/40\">\n                        <span class=\"px-2.5 py-1 bg-slate-950 rounded-lg text-purple-400 font-mono font-bold text-xs\">Ctrl + V</span>\n                        <h4 class=\"font-bold text-sm text-white mt-2\">Yapıştır</h4>\n                        <p class=\"text-xs text-slate-400\">Yeni yere aktarır.</p>\n                    </div>\n                    <div class=\"p-3.5 rounded-2xl bg-slate-850 border-2 border-yellow-500/40\">\n                        <span class=\"px-2.5 py-1 bg-slate-950 rounded-lg text-yellow-400 font-mono font-bold text-xs\">Ctrl + Z</span>\n                        <h4 class=\"font-bold text-sm text-white mt-2\">Geri Al (Undo)</h4>\n                        <p class=\"text-xs text-slate-400\">Hatalı işlemi iptal eder.</p>\n                    </div>\n                    <div class=\"p-3.5 rounded-2xl bg-slate-850 border-2 border-blue-500/40\">\n                        <span class=\"px-2.5 py-1 bg-slate-950 rounded-lg text-blue-400 font-mono font-bold text-xs\">Ctrl + Y</span>\n                        <h4 class=\"font-bold text-sm text-white mt-2\">Yinele (Redo)</h4>\n                        <p class=\"text-xs text-slate-400\">Geri alınanı tekrarlar.</p>\n                    </div>\n                    <div class=\"p-3.5 rounded-2xl bg-slate-850 border-2 border-rose-500/40\">\n                        <span class=\"px-2.5 py-1 bg-slate-950 rounded-lg text-rose-400 font-mono font-bold text-xs\">Delete Tuşu</span>\n                        <h4 class=\"font-bold text-sm text-white mt-2\">Sil</h4>\n                        <p class=\"text-xs text-slate-400\">Çöp kutusuna gönderir.</p>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 12,
        "title": "Dosya Silme ve Geri Dönüşüm Kutusu 🗑️",
        "subtitle": "Silinen Dosyalar Tamamen Yok Olur Mu?",
        "topic": "6. KONU • BTY.5.1.6",
        "badge": "GÜVENLİK",
        "icon": "fa-solid fa-trash-can",
        "bgColor": "from-slate-900 via-rose-950 to-slate-950",
        "gradient": "from-slate-900 via-rose-950 to-slate-950",
        "content": "\n            <div class=\"max-w-4xl mx-auto space-y-4 my-auto\">\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4\">\n                    <div class=\"p-5 rounded-2xl bg-slate-850 border-2 border-rose-500/40 space-y-2\">\n                        <h4 class=\"font-black text-rose-300 text-sm flex items-center gap-2\">\n                            <span>🗑️</span> <span>Geri Dönüşüm Kutusu Nedir?</span>\n                        </h4>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Delete tuşuyla silinen dosyalar ilk önce <strong>Geri Dönüşüm Kutusu</strong>'na gider. Henüz tamamen yok olmamıştır!\n                        </p>\n                        <p class=\"text-xs text-slate-400\">\n                            Yanlışlıkla sildiyseniz sağ tıklayıp <strong>\"Geri Yükle\"</strong> seçeneğini seçebilirsiniz.\n                        </p>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-850 border-2 border-amber-500/40 space-y-2\">\n                        <h4 class=\"font-black text-amber-300 text-sm flex items-center gap-2\">\n                            <span>⚠️</span> <span>Kritik Bilişim Kuralı</span>\n                        </h4>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Geri Dönüşüm Kutusu <strong>boşaltılırsa</strong> veya dosya <strong>Shift + Delete</strong> ile silinirse dosya kalıcı olarak kaybolur. Kalıcı silinen dosyaların kurtarılması garanti değildir!\n                        </p>\n                        <div class=\"p-2.5 bg-rose-950/40 border border-rose-500/30 rounded-xl text-xs text-rose-200 font-bold\">\n                            Önemli dosyalarınızı mutlaka USB veya Bulutta yedekleyin!\n                        </div>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 13,
        "title": "Joker Karakterlerle Dosya Arama (*) 🔍",
        "subtitle": "Yıldız (*) Simgesiyle Sihirli Aramalar",
        "topic": "6. KONU • BTY.5.1.6",
        "badge": "ARAMA TEKNİĞİ",
        "icon": "fa-solid fa-magnifying-glass",
        "bgColor": "from-slate-900 via-indigo-950 to-cyan-950",
        "gradient": "from-slate-900 via-indigo-950 to-cyan-950",
        "content": "\n            <div class=\"max-w-4xl mx-auto space-y-4 my-auto\">\n                <div class=\"p-4 bg-slate-850 rounded-2xl border-2 border-cyan-500/40 text-center\">\n                    <p class=\"text-xs sm:text-sm text-cyan-200\">\n                        Arama kutusundaki <strong>yıldız (*)</strong> simgesi <em>\"herhangi bir yazı veya ek\"</em> anlamına gelir.\n                    </p>\n                </div>\n\n                <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-3\">\n                    <div class=\"p-4 rounded-2xl bg-slate-850 border-2 border-slate-700 space-y-2\">\n                        <span class=\"px-3 py-1 bg-cyan-950 border border-cyan-500 rounded-lg text-cyan-300 font-mono font-bold text-sm block text-center\">*.mp4</span>\n                        <h4 class=\"font-bold text-xs text-white\">Tüm Videolar</h4>\n                        <p class=\"text-xs text-slate-400\">Adı ne olursa olsun bilgisayardaki tüm .mp4 video dosyalarını listeler.</p>\n                    </div>\n                    <div class=\"p-4 rounded-2xl bg-slate-850 border-2 border-slate-700 space-y-2\">\n                        <span class=\"px-3 py-1 bg-yellow-950 border border-yellow-500 rounded-lg text-yellow-300 font-mono font-bold text-sm block text-center\">Bil*.docx</span>\n                        <h4 class=\"font-bold text-xs text-white\">\"Bil\" ile Başlayanlar</h4>\n                        <p class=\"text-xs text-slate-400\">Adı 'Bil' ile başlayan tüm Word (.docx) belgelerini bulur (Bilisim.docx vb.).</p>\n                    </div>\n                    <div class=\"p-4 rounded-2xl bg-slate-850 border-2 border-slate-700 space-y-2\">\n                        <span class=\"px-3 py-1 bg-purple-950 border border-purple-500 rounded-lg text-purple-300 font-mono font-bold text-sm block text-center\">odev.*</span>\n                        <h4 class=\"font-bold text-xs text-white\">Adı \"odev\" Olanlar</h4>\n                        <p class=\"text-xs text-slate-400\">Uzantısı ne olursa olsun adı 'odev' olan tüm dosyaları (odev.pdf, odev.txt vb.) bulur.</p>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 14,
        "title": "Dosya ve Klasör Sıkıştırma Nedir? 🗜️",
        "subtitle": "Bavula Eşyaları Düzenlice Sığdırmak Gibi!",
        "topic": "6. KONU • BTY.5.1.6",
        "badge": "ARŞİVLEME",
        "icon": "fa-solid fa-file-zipper",
        "bgColor": "from-slate-900 via-purple-950 to-slate-900",
        "gradient": "from-slate-900 via-purple-950 to-slate-900",
        "content": "\n            <div class=\"max-w-4xl mx-auto space-y-4 my-auto\">\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4\">\n                    <div class=\"p-5 rounded-2xl bg-slate-850 border-2 border-purple-500/40 space-y-3\">\n                        <h4 class=\"font-black text-purple-300 text-sm flex items-center gap-2\">\n                            <span>📦</span> <span>Sıkıştırma (Arşivleme)</span>\n                        </h4>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Dosyaların boyutunu özel algoritmalarla <strong>küçülterek</strong> diskte daha az yer kaplamasını sağlamaya ve birden fazla dosyayı <strong>tek bir paket</strong> içinde toplamaya <strong>SIKIŞTIRMA</strong> denir.\n                        </p>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-850 border-2 border-cyan-500/40 space-y-3\">\n                        <h4 class=\"font-black text-cyan-300 text-sm flex items-center gap-2\">\n                            <span>🗜️</span> <span>En Popüler Arşiv Uzantıları</span>\n                        </h4>\n                        <div class=\"space-y-2 font-mono text-xs sm:text-sm\">\n                            <div class=\"p-2 bg-slate-900 rounded-xl text-yellow-300\"><strong>.ZIP:</strong> Tüm işletim sistemlerinde doğrudan açılır.</div>\n                            <div class=\"p-2 bg-slate-900 rounded-xl text-purple-300\"><strong>.RAR:</strong> WinRAR programıyla oluşturulan güçlü arşiv.</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 15,
        "title": "Sıkıştırmanın 2 Büyük Faydası 💡",
        "subtitle": "Neden Dosyalarımızı Sıkıştırırız?",
        "topic": "6. KONU • BTY.5.1.6",
        "badge": "FAYDALAR",
        "icon": "fa-solid fa-gauge-high",
        "bgColor": "from-slate-900 via-emerald-950 to-indigo-950",
        "gradient": "from-slate-900 via-emerald-950 to-indigo-950",
        "content": "\n            <div class=\"max-w-4xl mx-auto space-y-4 my-auto\">\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4\">\n                    <div class=\"p-5 rounded-2xl bg-slate-850 border-2 border-emerald-500/40 space-y-2\">\n                        <div class=\"text-3xl\">💾</div>\n                        <h4 class=\"font-black text-emerald-300 text-base\">1. Disk Alanından Tasarruf</h4>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Dosyaların boyutu küçüldüğü için sabit diskte, flash bellekte veya telefonumuzda daha az yer kaplar. Hafıza dolmaz!\n                        </p>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-850 border-2 border-cyan-500/40 space-y-2\">\n                        <div class=\"text-3xl\">🚀</div>\n                        <h4 class=\"font-black text-cyan-300 text-base\">2. Hızlı ve Kolay Paylaşım</h4>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Örneğin 50 ayrı fotoğrafı tek tek e-posta ile göndermek yerine, hepsini tek bir <strong>.zip paketi</strong> yapıp bir saniyede gönderebiliriz.\n                        </p>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 16,
        "title": "Depolama Araçları ve Sınıflandırma 💽",
        "subtitle": "Dosyalarımız Nerede Yaşar?",
        "topic": "6. KONU • BTY.5.1.6",
        "badge": "DEPOLAMA",
        "icon": "fa-solid fa-hard-drive",
        "bgColor": "from-slate-900 via-blue-950 to-slate-950",
        "gradient": "from-slate-900 via-blue-950 to-slate-950",
        "content": "\n            <div class=\"max-w-4xl mx-auto space-y-4 my-auto\">\n                <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-3 text-center\">\n                    <div class=\"p-4 rounded-2xl bg-slate-850 border-2 border-cyan-500/40 space-y-2\">\n                        <div class=\"text-3xl\">🖥️</div>\n                        <h4 class=\"font-bold text-sm text-cyan-300\">Dahili (İç) Depolama</h4>\n                        <p class=\"text-xs text-slate-300 font-semibold\">SSD ve Sabit Disk (HDD)</p>\n                        <p class=\"text-xs text-slate-400\">Bilgisayarın içinde sürekli takılı olan ana hafızadır.</p>\n                    </div>\n\n                    <div class=\"p-4 rounded-2xl bg-slate-850 border-2 border-yellow-500/40 space-y-2\">\n                        <div class=\"text-3xl\">🔌</div>\n                        <h4 class=\"font-bold text-sm text-yellow-300\">Harici (Taşınabilir)</h4>\n                        <p class=\"text-xs text-slate-300 font-semibold\">USB Bellek, SD Kart, Harici Disk</p>\n                        <p class=\"text-xs text-slate-400\">Cebimizde taşıyıp başka bilgisayara taktığımız bellekler.</p>\n                    </div>\n\n                    <div class=\"p-4 rounded-2xl bg-slate-850 border-2 border-purple-500/40 space-y-2\">\n                        <div class=\"text-3xl\">☁️</div>\n                        <h4 class=\"font-bold text-sm text-purple-300\">Bulut Depolama</h4>\n                        <p class=\"text-xs text-slate-300 font-semibold\">Drive, OneDrive, iCloud</p>\n                        <p class=\"text-xs text-slate-400\">İnternet üzerinden her cihazdan eriştiğimiz güvenli alan.</p>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 17,
        "title": "Basılı Belgeleri Dijitale Aktarma 📠",
        "subtitle": "Kâğıttan Ekrana Veri Köprüsü",
        "topic": "6. KONU • BTY.5.1.6",
        "badge": "DİJİTALLEŞME",
        "icon": "fa-solid fa-print",
        "bgColor": "from-slate-900 via-indigo-950 to-teal-950",
        "gradient": "from-slate-900 via-indigo-950 to-teal-950",
        "content": "\n            <div class=\"max-w-4xl mx-auto space-y-4 my-auto\">\n                <div class=\"p-5 rounded-2xl bg-slate-850 border-2 border-teal-500/40 space-y-3\">\n                    <h4 class=\"font-black text-teal-300 text-sm flex items-center gap-2\">\n                        <span>📸</span> <span>Tarayıcı (Scanner) ve Kameralar</span>\n                    </h4>\n                    <p class=\"text-xs sm:text-sm text-slate-200 leading-relaxed\">\n                        Kâğıt üzerindeki resim, el yazısı, belge veya kitap sayfalarını dijital ortama aktarmak için <strong>Tarayıcı (Scanner)</strong> veya tablet/telefon kameraları kullanılır.\n                    </p>\n                    <p class=\"text-xs text-slate-400\">\n                        Bu işlem sonucunda basılı belge bilgisayarımızda <strong>.PDF</strong> veya <strong>.JPG</strong> formatında bir dijital dosyaya dönüşür.\n                    </p>\n                </div>\n            </div>\n        "
    },
    {
        "id": 18,
        "title": "İnteraktif Sınıf Eşleştirmesi 🎯",
        "subtitle": "Uzantıyı Seç, Doğru Dosya Türüne Dokun!",
        "topic": "6. KONU • BTY.5.1.6",
        "badge": "İNTERAKTİF ETKİNLİK",
        "icon": "fa-solid fa-gamepad",
        "bgColor": "from-slate-900 via-indigo-950 to-slate-900",
        "gradient": "from-slate-900 via-indigo-950 to-slate-900",
        "content": "\n            <div class=\"max-w-4xl mx-auto space-y-4 my-auto\">\n                <div class=\"text-center\">\n                    <span class=\"text-xs font-bold text-yellow-300 bg-yellow-400/20 px-3 py-1 rounded-full border border-yellow-400/30\">\n                        AKILLI TAHTA CANLI EŞLEŞTİRME\n                    </span>\n                    <p class=\"text-xs sm:text-sm text-indigo-200 mt-1\">Önce sol taraftan bir uzantıya dokun, ardından sağ taraftaki doğru dosya türünü seç!</p>\n                </div>\n\n                <div class=\"grid grid-cols-2 gap-4\">\n                    <!-- Sol: Uzantılar -->\n                    <div class=\"space-y-2\">\n                        <div class=\"text-xs font-black text-cyan-400 text-center uppercase tracking-wider mb-1\">DOSYA UZANTILARI</div>\n                        <button onclick=\"window.slide18MatchGame.selectLeft('doc', '.docx', this)\" class=\"s18-left-btn w-full p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 font-mono font-bold text-xs sm:text-sm text-white flex items-center justify-between\">\n                            <span>.docx</span> <span class=\"text-[10px] text-slate-400\">Belge</span>\n                        </button>\n                        <button onclick=\"window.slide18MatchGame.selectLeft('jpg', '.jpg', this)\" class=\"s18-left-btn w-full p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 font-mono font-bold text-xs sm:text-sm text-white flex items-center justify-between\">\n                            <span>.jpg</span> <span class=\"text-[10px] text-slate-400\">Resim</span>\n                        </button>\n                        <button onclick=\"window.slide18MatchGame.selectLeft('mp3', '.mp3', this)\" class=\"s18-left-btn w-full p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 font-mono font-bold text-xs sm:text-sm text-white flex items-center justify-between\">\n                            <span>.mp3</span> <span class=\"text-[10px] text-slate-400\">Müzik</span>\n                        </button>\n                        <button onclick=\"window.slide18MatchGame.selectLeft('mp4', '.mp4', this)\" class=\"s18-left-btn w-full p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 font-mono font-bold text-xs sm:text-sm text-white flex items-center justify-between\">\n                            <span>.mp4</span> <span class=\"text-[10px] text-slate-400\">Video</span>\n                        </button>\n                        <button onclick=\"window.slide18MatchGame.selectLeft('zip', '.zip', this)\" class=\"s18-left-btn w-full p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 font-mono font-bold text-xs sm:text-sm text-white flex items-center justify-between\">\n                            <span>.zip</span> <span class=\"text-[10px] text-slate-400\">Arşiv</span>\n                        </button>\n                        <button onclick=\"window.slide18MatchGame.selectLeft('exe', '.exe', this)\" class=\"s18-left-btn w-full p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 font-mono font-bold text-xs sm:text-sm text-white flex items-center justify-between\">\n                            <span>.exe</span> <span class=\"text-[10px] text-slate-400\">Program</span>\n                        </button>\n                    </div>\n\n                    <!-- Sağ: Dosya Türleri -->\n                    <div class=\"space-y-2\">\n                        <div class=\"text-xs font-black text-purple-400 text-center uppercase tracking-wider mb-1\">DOSYA TÜRLERİ</div>\n                        <button onclick=\"window.slide18MatchGame.selectRight('mp3', 'Ses / Müzik', this)\" class=\"s18-right-btn w-full p-2.5 rounded-xl bg-slate-850 hover:bg-indigo-900/60 border border-slate-700 font-bold text-xs sm:text-sm text-white flex items-center gap-2\">\n                            <span>🎵</span> <span>Ses / Müzik</span>\n                        </button>\n                        <button onclick=\"window.slide18MatchGame.selectRight('doc', 'Metin / Yazı Belgesi', this)\" class=\"s18-right-btn w-full p-2.5 rounded-xl bg-slate-850 hover:bg-indigo-900/60 border border-slate-700 font-bold text-xs sm:text-sm text-white flex items-center gap-2\">\n                            <span>📝</span> <span>Metin / Yazı Belgesi</span>\n                        </button>\n                        <button onclick=\"window.slide18MatchGame.selectRight('exe', 'Uygulama / Program', this)\" class=\"s18-right-btn w-full p-2.5 rounded-xl bg-slate-850 hover:bg-indigo-900/60 border border-slate-700 font-bold text-xs sm:text-sm text-white flex items-center gap-2\">\n                            <span>⚙️</span> <span>Uygulama / Program</span>\n                        </button>\n                        <button onclick=\"window.slide18MatchGame.selectRight('zip', 'Sıkıştırılmış Dosya', this)\" class=\"s18-right-btn w-full p-2.5 rounded-xl bg-slate-850 hover:bg-indigo-900/60 border border-slate-700 font-bold text-xs sm:text-sm text-white flex items-center gap-2\">\n                            <span>🗜️</span> <span>Sıkıştırılmış Dosya</span>\n                        </button>\n                        <button onclick=\"window.slide18MatchGame.selectRight('mp4', 'Video / Film', this)\" class=\"s18-right-btn w-full p-2.5 rounded-xl bg-slate-850 hover:bg-indigo-900/60 border border-slate-700 font-bold text-xs sm:text-sm text-white flex items-center gap-2\">\n                            <span>🎬</span> <span>Video / Film</span>\n                        </button>\n                        <button onclick=\"window.slide18MatchGame.selectRight('jpg', 'Görsel / Fotoğraf', this)\" class=\"s18-right-btn w-full p-2.5 rounded-xl bg-slate-850 hover:bg-indigo-900/60 border border-slate-700 font-bold text-xs sm:text-sm text-white flex items-center gap-2\">\n                            <span>🖼️</span> <span>Görsel / Fotoğraf</span>\n                        </button>\n                    </div>\n                </div>\n\n                <div id=\"s18-fb\" class=\"p-3 rounded-2xl bg-slate-800/80 border border-slate-700 text-slate-300 text-xs sm:text-sm font-semibold text-center min-h-[46px] flex items-center justify-center\">\n                    Eşleştirmek istediğin dosya uzantısına dokun!\n                </div>\n            </div>\n        "
    },
    {
        "id": 19,
        "title": "Hızlı Mini Quiz (5 Soru) 🧠",
        "subtitle": "Canlı Ders Değerlendirmesi",
        "topic": "6. KONU • BTY.5.1.6",
        "badge": "MİNİ TEST",
        "icon": "fa-solid fa-circle-question",
        "bgColor": "from-slate-900 via-indigo-950 to-slate-900",
        "gradient": "from-slate-900 via-indigo-950 to-slate-900",
        "content": "\n            <div class=\"max-w-3xl mx-auto space-y-4 my-auto text-left\" id=\"s19-quiz-box\">\n                <div class=\"flex items-center justify-between border-b border-slate-700/60 pb-2\">\n                    <span id=\"s19-badge\" class=\"px-3 py-1 bg-yellow-400/20 text-yellow-300 font-bold text-xs rounded-full border border-yellow-400/30\">\n                        Soru: 1 / 5\n                    </span>\n                    <span id=\"s19-score\" class=\"text-xs sm:text-sm font-black text-cyan-300\">Puan: 0 / 100</span>\n                </div>\n\n                <div class=\"p-5 rounded-2xl bg-slate-850 border-2 border-indigo-500/40 shadow-xl space-y-3\">\n                    <h4 id=\"s19-q-text\" class=\"text-sm sm:text-base font-black text-white leading-relaxed\">\n                        1. 'tatil.jpg' dosyasındaki '.jpg' kısmı dosyanın nesini belirtir?\n                    </h4>\n\n                    <div id=\"s19-opts-container\" class=\"grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1\">\n                        <button onclick=\"window.slide19MiniQuiz.answer(0)\" class=\"s19-opt-btn p-3 rounded-xl bg-slate-800 hover:bg-indigo-600/80 border border-slate-700 text-left font-bold text-xs sm:text-sm text-white transition-all flex items-center gap-2\">\n                            <span class=\"w-6 h-6 rounded-lg bg-slate-900 flex items-center justify-center font-black text-xs text-yellow-400 shrink-0\">A</span>\n                            <span>Dosyanın boyutunu</span>\n                        </button>\n                        <button onclick=\"window.slide19MiniQuiz.answer(1)\" class=\"s19-opt-btn p-3 rounded-xl bg-slate-800 hover:bg-indigo-600/80 border border-slate-700 text-left font-bold text-xs sm:text-sm text-white transition-all flex items-center gap-2\">\n                            <span class=\"w-6 h-6 rounded-lg bg-slate-900 flex items-center justify-center font-black text-xs text-yellow-400 shrink-0\">B</span>\n                            <span>Dosyanın türünü (Resim)</span>\n                        </button>\n                        <button onclick=\"window.slide19MiniQuiz.answer(2)\" class=\"s19-opt-btn p-3 rounded-xl bg-slate-800 hover:bg-indigo-600/80 border border-slate-700 text-left font-bold text-xs sm:text-sm text-white transition-all flex items-center gap-2\">\n                            <span class=\"w-6 h-6 rounded-lg bg-slate-900 flex items-center justify-center font-black text-xs text-yellow-400 shrink-0\">C</span>\n                            <span>Dosyanın oluşturulma yılını</span>\n                        </button>\n                        <button onclick=\"window.slide19MiniQuiz.answer(3)\" class=\"s19-opt-btn p-3 rounded-xl bg-slate-800 hover:bg-indigo-600/80 border border-slate-700 text-left font-bold text-xs sm:text-sm text-white transition-all flex items-center gap-2\">\n                            <span class=\"w-6 h-6 rounded-lg bg-slate-900 flex items-center justify-center font-black text-xs text-yellow-400 shrink-0\">D</span>\n                            <span>Dosyayı yazan kişiyi</span>\n                        </button>\n                    </div>\n\n                    <div id=\"s19-fb\" class=\"hidden\"></div>\n\n                    <div class=\"flex justify-end pt-2\">\n                        <button id=\"s19-next-btn\" onclick=\"window.slide19MiniQuiz.next()\" class=\"hidden px-4 py-2 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-black text-xs rounded-xl shadow-lg flex items-center gap-1.5 transition-all\">\n                            <span>Sonraki Soru 👉</span>\n                        </button>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 20,
        "title": "Konu Özeti ve Çıkış Bileti 🎫",
        "subtitle": "Ders Değerlendirmesi",
        "topic": "6. KONU • BTY.5.1.6",
        "badge": "ÖZET & ÇIKIŞ",
        "icon": "fa-solid fa-ticket",
        "bgColor": "from-slate-900 via-purple-950 to-slate-950",
        "gradient": "from-slate-900 via-purple-950 to-slate-950",
        "content": "\n            <div class=\"max-w-4xl mx-auto space-y-4 my-auto\">\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4\">\n                    <div class=\"p-5 rounded-2xl bg-slate-850 border-2 border-emerald-500/40 space-y-2\">\n                        <h4 class=\"font-black text-emerald-300 text-sm flex items-center gap-2\">\n                            <span>📌</span> <span>Günün Kritik Özeti</span>\n                        </h4>\n                        <ul class=\"text-xs text-slate-300 space-y-1 list-disc pl-4\">\n                            <li><strong>Dosya:</strong> Veri kayıt birimidir; adı ve uzantısı vardır.</li>\n                            <li><strong>Klasör:</strong> Ortak dosyaları düzenler; uzantısı olmaz.</li>\n                            <li><strong>Kısayollar:</strong> Ctrl+C (Kopyala), Ctrl+X (Kes), Ctrl+V (Yapıştır), Ctrl+Z (Geri Al).</li>\n                            <li><strong>Çöp Kutusu:</strong> Silinen dosyaların ilk bekleme yeridir.</li>\n                            <li><strong>Sıkıştırma:</strong> Boyutu küçültür ve tek arşivde toplar (.zip, .rar).</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-amber-950/40 border-2 border-amber-500/40 space-y-2\">\n                        <h4 class=\"font-black text-yellow-300 text-sm flex items-center gap-2\">\n                            <span>🎫</span> <span>Sınıf İçi Çıkış Soruları</span>\n                        </h4>\n                        <ol class=\"text-xs text-amber-100 space-y-1 list-decimal pl-4\">\n                            <li>Dosya uzantısı (soyadı) ne işe yarar?</li>\n                            <li>Kopyalama ile Taşıma arasındaki fark nedir?</li>\n                            <li>Çöp kutusundaki bir dosya nasıl kurtarılır?</li>\n                            <li>Dosya sıkıştırmanın 2 faydası nedir?</li>\n                            <li>Bulut depolamaya nasıl erişilir?</li>\n                        </ol>\n                    </div>\n                </div>\n\n                <div class=\"flex items-center justify-center gap-3 pt-2\">\n                    <button onclick=\"app.currentSlideIndex = 0; app.renderSlides(); sounds.playClick();\" class=\"px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg flex items-center gap-2\">\n                        <i class=\"fa-solid fa-rotate-left\"></i>\n                        <span>Sunumu Baştan Başlat 🔄</span>\n                    </button>\n                    <button onclick=\"app.switchTab('quiz'); sounds.playClick();\" class=\"px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs rounded-xl shadow-lg flex items-center gap-2\">\n                        <i class=\"fa-solid fa-circle-question\"></i>\n                        <span>Pekiştirme Sorularına Geç 👉</span>\n                    </button>\n                </div>\n            </div>\n        "
    }
],

    questions: [
        null,
        {
            id: 1,
            type: "true_false",
            title: "1. Etkinlik: Doğru / Yanlış Pekiştirme Etkinliği (15 Soru)",
            description: "Aşağıdaki 15 ifadeyi dikkatle okuyarak Doğru veya Yanlış butonuna basınız:",
            items: [
                {
                    statement: "Dosya uzantısı, dosyanın türü hakkında bilgi verebilir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Örneğin .mp3 ses, .jpg görsel, .docx ise metin belgesi olduğunu gösterir."
                },
                {
                    statement: "MP3 uzantısı genellikle video dosyalarında kullanılır.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! MP3 ses ve müzik dosyaları için kullanılır. Video için MP4 veya AVI kullanılır."
                },
                {
                    statement: "Bir klasörün içinde başka klasörler bulunabilir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Bir klasörün içine açılan klasörlere alt klasör (subfolder) denir."
                },
                {
                    statement: "Ctrl + C kopyalama işlemi için kullanılan yaygın bir kısayoldur.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Ctrl + C kopyalar, dosyanın aslı yerinde kalır."
                },
                {
                    statement: "Ctrl + X kesme işlemi için kullanılır.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Ctrl + X kesme (taşıma) kısayoludur."
                },
                {
                    statement: "Ctrl + V, seçili dosyayı yapıştırmak için kullanılabilir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Kopyalanan veya kesilen dosya Ctrl + V ile yeni yere yapıştırılır."
                },
                {
                    statement: "Ctrl + Z, yapılan bir işlemi geri almaya yardımcı olur.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Ctrl + Z yapılan son işlemi iptal edip geri alır."
                },
                {
                    statement: "Geri Dönüşüm Kutusu'ndaki bir dosya geri yüklenebilir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Dosyaya sağ tıklanıp 'Geri Yükle' denildiğinde silindiği eski yerine döner."
                },
                {
                    statement: "Bir dosya Geri Dönüşüm Kutusu'nda yoksa kesinlikle geri getirilebilir.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! Çöp kutusu boşaltılmış veya kalıcı silinmiş dosyaların geri getirilmesi garanti değildir."
                },
                {
                    statement: "PDF uzantısı elektronik kitap ve belge dosyalarında kullanılabilir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! PDF sayfa düzenli evrensel belge ve e-kitap formatıdır."
                },
                {
                    statement: "ZIP ve RAR, sıkıştırılmış dosyalarla ilişkili uzantılardır.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! .zip ve .rar en popüler sıkıştırılmış arşiv uzantılarıdır."
                },
                {
                    statement: "Bil*.docx araması, adı Bil ile başlayan DOCX dosyalarını bulmak için kullanılabilir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Yıldız (*) joker karakteri 'herhangi bir ek' anlamına gelir."
                },
                {
                    statement: "Dosyaları uygun klasörlerde toplamak, dosyaları düzenlemeyi kolaylaştırır.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Klasörleme aranan dosyaya saniyeler içinde ulaşmayı sağlar."
                },
                {
                    statement: "Bir dosyanın adını değiştirmek için mutlaka dosyanın içeriğini değiştirmek gerekir.",
                    isCorrect: false,
                    correct: false,
                    explanation: "Yanlış! Dosya adı içeriğe hiç dokunmadan sağ tık -> Yeniden Adlandır (veya F2) ile değiştirilebilir."
                },
                {
                    statement: "Tarayıcı, kâğıt üzerindeki bilgileri dijital ortama aktarmak için kullanılabilir.",
                    isCorrect: true,
                    correct: true,
                    explanation: "Doğru! Tarayıcı (Scanner) fiziksel kâğıtları bilgisayara PDF veya resim olarak aktarır."
                }
            ]
        },
        {
            id: 2,
            type: "multiple_choice",
            title: "2. Etkinlik: Çoktan Seçmeli Değerlendirme Testi (10 Soru)",
            description: "Aşağıdaki test sorularını dikkatle okuyarak doğru seçeneği işaretleyiniz:",
            questions: [
                {
                    q: "Aşağıdakilerden hangisi bir resim (görsel) dosyası uzantısıdır?",
                    options: [".mp3", ".jpg", ".docx", ".exe"],
                    answer: 1,
                    explanation: ".jpg standart fotoğraf ve resim dosyası uzantısıdır."
                },
                {
                    q: "'Ali Babanın Çiftliği.mp3' dosyasındaki '.mp3' bölümü neyi ifade eder?",
                    options: ["Dosyanın boyutunu", "Dosyayı yazan kişiyi", "Dosyanın türünü (ses/müzik)", "Dosyanın silinme tarihini"],
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
        }
    ],

    gameData: null
};
