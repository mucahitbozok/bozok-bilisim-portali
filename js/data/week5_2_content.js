// ==========================================
// 5. KONU - 2: YAZILIM, KAPASİTE BİRİMLERİ VE DEPOLAMA BİRİMLERİ
// MEB 5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi
// BTY.5.1.5. Bilgisayar sistemlerini çözümleyebilme
// Hazırlayan: Öğretmen Bozok
// ==========================================

// Slayt 14 İnteraktif Yazılım Tanıma Oyunu
window.slide14SoftwareGame = {
    idx: 0,
    items: [
        { name: "PARDUS", type: "os", icon: "fa-linux", desc: "🎉 DOĞRU! Pardus, TÜBİTAK tarafından geliştirilen milli İŞLETİM SİSTEMİMİZDİR." },
        { name: "Microsoft Word", type: "app", icon: "fa-file-word", desc: "🎉 DOĞRU! Word, ödev ve yazı yazmak için kullandığımız bir UYGULAMA YAZILIMIDIR." },
        { name: "Android", type: "os", icon: "fa-android", desc: "🎉 DOĞRU! Android, akıllı telefon ve tabletleri yöneten bir İŞLETİM SİSTEMİDİR." },
        { name: "Scratch", type: "app", icon: "fa-cat", desc: "🎉 DOĞRU! Scratch, blok tabanlı kodlama ve oyun yapma UYGULAMA YAZILIMIDIR." }
    ],
    check: function(choice) {
        const item = this.items[this.idx];
        const fb = document.getElementById("s14-fb");
        if (!fb) return;
        fb.classList.remove("hidden");
        if (choice === item.type) {
            if (typeof sounds !== "undefined") sounds.playCorrect();
            fb.className = "p-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-between gap-3 text-left animate-pop bg-emerald-950/90 border-2 border-emerald-500 text-emerald-200 shadow-lg";
            fb.innerHTML = `
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-400 text-2xl shrink-0"></i>
                    <span>${item.desc}</span>
                </div>
                <button onclick="window.slide14SoftwareGame.next()" class="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl shadow-md shrink-0 flex items-center gap-1">
                    <span>Sonraki</span> <i class="fa-solid fa-arrow-right"></i>
                </button>
            `;
        } else {
            if (typeof sounds !== "undefined") sounds.playWrong();
            const correctText = item.type === "os" ? "İşletim Sistemi" : "Uygulama Yazılımı";
            fb.className = "p-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-between gap-3 text-left animate-pop bg-rose-950/90 border-2 border-rose-500 text-rose-200 shadow-lg";
            fb.innerHTML = `
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-circle-xmark text-rose-400 text-2xl shrink-0"></i>
                    <span>⚠️ Tekrar düşün! ${item.name} bir <strong>${correctText}</strong> örneğidir.</span>
                </div>
                <button onclick="window.slide14SoftwareGame.next()" class="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl border border-slate-600 shrink-0">
                    Geç 👉
                </button>
            `;
        }
    },
    next: function() {
        if (typeof sounds !== "undefined") sounds.playClick();
        this.idx = (this.idx + 1) % this.items.length;
        const item = this.items[this.idx];
        const titleEl = document.getElementById("s14-name");
        const iconEl = document.getElementById("s14-icon");
        const countEl = document.getElementById("s14-counter");
        const fb = document.getElementById("s14-fb");
        if (titleEl) titleEl.innerText = item.name;
        if (iconEl) iconEl.className = "fa-solid " + item.icon + " text-3xl text-cyan-300";
        if (countEl) countEl.innerText = "Soru: " + (this.idx + 1) + " / " + this.items.length;
        if (fb) fb.classList.add("hidden");
    }
};

// Slayt 15 İnteraktif Kapasite Sıralama Oyunu
window.slide15SortGame = {
    units: [
        { id: "bit", label: "Bit", order: 0 },
        { id: "byte", label: "Byte", order: 1 },
        { id: "kb", label: "Kilobyte (KB)", order: 2 },
        { id: "mb", label: "Megabyte (MB)", order: 3 },
        { id: "gb", label: "Gigabyte (GB)", order: 4 },
        { id: "tb", label: "Terabyte (TB)", order: 5 }
    ],
    selected: [],
    pick: function(unitId) {
        if (this.selected.length >= 6) return;
        const targetOrder = this.selected.length;
        const unit = this.units.find(u => u.id === unitId);
        if (!unit) return;

        const fb = document.getElementById("s15-fb");
        if (unit.order === targetOrder) {
            if (typeof sounds !== "undefined") sounds.playCorrect();
            this.selected.push(unit);
            const slotEl = document.getElementById("s15-slot-" + targetOrder);
            if (slotEl) {
                slotEl.innerText = (targetOrder + 1) + ". " + unit.label;
                slotEl.className = "p-2.5 rounded-xl bg-emerald-600/30 border-2 border-emerald-400 text-emerald-200 font-extrabold text-xs sm:text-sm text-center shadow-md animate-pop";
            }
            const btn = document.getElementById("s15-btn-" + unitId);
            if (btn) btn.classList.add("hidden");

            if (this.selected.length === 6) {
                if (typeof sounds !== "undefined") sounds.playVictory();
                if (fb) {
                    fb.className = "p-3 rounded-2xl bg-emerald-950/90 border-2 border-emerald-400 text-emerald-200 font-bold text-xs sm:text-sm shadow-lg text-center animate-pop";
                    fb.innerHTML = "🏆 TEBRİKLER! Kapasite merdivenini küçükten büyüğe (bit → Byte → KB → MB → GB → TB) eksiksiz tamamladınız!";
                }
            }
        } else {
            if (typeof sounds !== "undefined") sounds.playWrong();
            if (fb) {
                fb.className = "p-3 rounded-2xl bg-rose-950/90 border-2 border-rose-500 text-rose-200 font-bold text-xs sm:text-sm shadow-lg text-center animate-pop";
                fb.innerHTML = "⚠️ Hatalı Sıra! Bu basamağa <strong>" + unit.label + "</strong> gelemez. Küçükten büyüğe: bit → Byte → KB → MB → GB → TB";
            }
        }
    },
    reset: function() {
        if (typeof sounds !== "undefined") sounds.playClick();
        this.selected = [];
        for (let i = 0; i < 6; i++) {
            const slot = document.getElementById("s15-slot-" + i);
            if (slot) {
                slot.innerText = (i + 1) + ". [Seçiniz]";
                slot.className = "p-2.5 rounded-xl bg-slate-900/60 border-2 border-dashed border-slate-700 text-slate-400 font-bold text-xs sm:text-sm text-center";
            }
        }
        this.units.forEach(u => {
            const btn = document.getElementById("s15-btn-" + u.id);
            if (btn) btn.classList.remove("hidden");
        });
        const fb = document.getElementById("s15-fb");
        if (fb) {
            fb.className = "p-3 rounded-2xl bg-slate-800/80 border border-slate-700 text-slate-300 font-semibold text-xs sm:text-sm text-center";
            fb.innerHTML = "Aşağıdaki butonlara tıklayarak kapasite birimlerini en küçükten en büyüğe doğru basamaklara yerleştirin.";
        }
    }
};

// Slayt 16 İnteraktif Depolama Seçim Oyunu
window.slide16StorageGame = {
    idx: 0,
    scenarios: [
        {
            text: "Ödev dosyanızı evdeki bilgisayardan okulun etkileşimli tahtasına taşımak istiyorsunuz.",
            correct: "harici",
            desc: "🎉 DOĞRU! Dosyaları farklı cihazlara fiziksel olarak taşımak için USB bellek veya harici disk (Harici Depolama) en pratiktir."
        },
        {
            text: "Bilgisayarın açılmasını sağlayan İşletim Sistemini (Pardus / Windows) bilgisayarın içinde sürekli saklamak.",
            correct: "dahili",
            desc: "🎉 DOĞRU! İşletim sistemi ve programlar bilgisayarın içindeki dahili depolama birimlerinde (SSD veya HDD) saklanır."
        },
        {
            text: "Fotoğraflarınıza hem akıllı telefonunuzdan hem okuldan hem de tatildeki tabletten internetle erişmek.",
            correct: "bulut",
            desc: "🎉 DOĞRU! Her yerden, her cihazdan internet üzerinden dosyalara erişmek için Bulut Depolama (Google Drive, OneDrive vb.) kullanılır."
        }
    ],
    check: function(choice) {
        const sc = this.scenarios[this.idx];
        const fb = document.getElementById("s16-fb");
        if (!fb) return;
        fb.classList.remove("hidden");
        if (choice === sc.correct) {
            if (typeof sounds !== "undefined") sounds.playCorrect();
            fb.className = "p-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-between gap-3 text-left animate-pop bg-emerald-950/90 border-2 border-emerald-500 text-emerald-200 shadow-lg";
            fb.innerHTML = `
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-400 text-2xl shrink-0"></i>
                    <span>${sc.desc}</span>
                </div>
                <button onclick="window.slide16StorageGame.next()" class="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl shadow-md shrink-0 flex items-center gap-1">
                    <span>Sonraki Senaryo</span> <i class="fa-solid fa-arrow-right"></i>
                </button>
            `;
        } else {
            if (typeof sounds !== "undefined") sounds.playWrong();
            const names = { dahili: "Dahili Depolama (SSD/HDD)", harici: "Harici Depolama (USB/Disk)", bulut: "Bulut Depolama (İnternet Sunucusu)" };
            fb.className = "p-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-between gap-3 text-left animate-pop bg-rose-950/90 border-2 border-rose-500 text-rose-200 shadow-lg";
            fb.innerHTML = `
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-circle-xmark text-rose-400 text-2xl shrink-0"></i>
                    <span>⚠️ Tekrar düşün! Bu durum için en uygun seçenek: <strong>${names[sc.correct]}</strong> olmalıdır.</span>
                </div>
                <button onclick="window.slide16StorageGame.next()" class="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl border border-slate-600 shrink-0">
                    Geç 👉
                </button>
            `;
        }
    },
    next: function() {
        if (typeof sounds !== "undefined") sounds.playClick();
        this.idx = (this.idx + 1) % this.scenarios.length;
        const sc = this.scenarios[this.idx];
        const scText = document.getElementById("s16-scenario-text");
        const scBadge = document.getElementById("s16-counter");
        const fb = document.getElementById("s16-fb");
        if (scText) scText.innerText = sc.text;
        if (scBadge) scBadge.innerText = "Senaryo: " + (this.idx + 1) + " / " + this.scenarios.length;
        if (fb) fb.classList.add("hidden");
    }
};

// Slayt 17 İnteraktif Mini Değerlendirme Testi
window.slide17MiniQuiz = {
    idx: 0,
    score: 0,
    questions: [
        {
            q: "Bilgisayarın donanım parçalarını yöneten ve çalışmasını sağlayan tüm programlara ne ad verilir?",
            opts: ["Donanım", "Yazılım", "Anakart", "İşlemci"],
            ans: 1,
            exp: "Tebrikler! Fiziksel parçalar donanım, onlara can veren tüm programlar ise YAZILIMDIR."
        },
        {
            q: "TÜBİTAK tarafından geliştirilen ülkemizin yerli ve milli işletim sistemi hangisidir?",
            opts: ["Windows", "macOS", "Pardus", "Android"],
            ans: 2,
            exp: "Tebrikler! PARDUS, etkileşimli tahtalarımızda da kullanılan milli gururumuzdur."
        },
        {
            q: "Bilgisayarların ikili sayı sisteminde kullandığı en küçük veri birimi (0 veya 1) hangisidir?",
            opts: ["Byte", "Bit", "Kilobyte", "Gigabyte"],
            ans: 1,
            exp: "Tebrikler! Bilgisayarın en küçük yapı taşı 0 veya 1 sinyalinden oluşan BIT'tir."
        },
        {
            q: "1024 Megabyte (MB) birleşerek hangi kapasite birimini oluşturur?",
            opts: ["1 Terabyte", "1 Kilobyte", "1 Gigabyte (GB)", "1 Byte"],
            ans: 2,
            exp: "Tebrikler! 1024 MB tam 1 GB (Gigabyte) eder."
        },
        {
            q: "İnternet üzerinden uzak sunucularda veri saklama yöntemine ne ad verilir?",
            opts: ["Dahili Depolama", "Bulut Depolama", "Optik Disk", "RAM Bellek"],
            ans: 1,
            exp: "Tebrikler! Google Drive, OneDrive gibi sistemler BULUT DEPOLAMADIR."
        }
    ],
    answer: function(chosenIdx) {
        const q = this.questions[this.idx];
        const fb = document.getElementById("s17-fb");
        const allBtns = document.querySelectorAll(".s17-opt-btn");
        allBtns.forEach(b => b.disabled = true);

        if (chosenIdx === q.ans) {
            if (typeof sounds !== "undefined") sounds.playCorrect();
            this.score += 20;
            const scoreEl = document.getElementById("s17-score");
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

        setTimeout(() => {
            this.idx++;
            this.render();
        }, 2200);
    },
    render: function() {
        const card = document.getElementById("s17-card");
        if (!card) return;
        if (this.idx >= this.questions.length) {
            if (typeof sounds !== "undefined") sounds.playVictory();
            card.innerHTML = `
                <div class="text-center space-y-3 py-3 animate-pop">
                    <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-yellow-400 to-amber-500 text-slate-950 text-3xl flex items-center justify-center mx-auto shadow-xl">
                        <i class="fa-solid fa-trophy"></i>
                    </div>
                    <h3 class="text-2xl font-black text-white">Mini Değerlendirme Tamamlandı!</h3>
                    <p class="text-yellow-300 font-extrabold text-xl">Toplam Puanınız: ${this.score} / 100</p>
                    <p class="text-xs text-slate-300 max-w-md mx-auto">
                        Yazılım türleri, makine dili, kapasite merdiveni ve depolama birimleri konusundaki tüm temel kazanımları başarıyla tamamladınız!
                    </p>
                    <button onclick="window.slide17MiniQuiz.restart()" class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs sm:text-sm rounded-xl shadow-lg border border-indigo-400 transition-all hover:scale-105 active:scale-95">
                        <i class="fa-solid fa-rotate-left mr-1"></i> Testi Yeniden Çöz
                    </button>
                </div>
            `;
            return;
        }

        const q = this.questions[this.idx];
        const counterEl = document.getElementById("s17-counter");
        const qTextEl = document.getElementById("s17-qtext");
        const optsContainer = document.getElementById("s17-opts");
        const fb = document.getElementById("s17-fb");
        if (counterEl) counterEl.innerText = "Soru " + (this.idx + 1) + " / " + this.questions.length;
        if (qTextEl) qTextEl.innerText = q.q;
        if (fb) {
            fb.className = "hidden";
            fb.innerHTML = "";
        }
        if (optsContainer) {
            optsContainer.innerHTML = q.opts.map((opt, i) => `
                <button onclick="window.slide17MiniQuiz.answer(${i})" class="s17-opt-btn p-3 rounded-xl bg-slate-800 hover:bg-indigo-900/60 border border-slate-700 hover:border-cyan-400 text-left text-xs sm:text-sm font-bold text-white transition-all flex items-center gap-2 group active:scale-98">
                    <span class="w-6 h-6 rounded-lg bg-indigo-500/20 text-cyan-300 flex items-center justify-center text-xs group-hover:bg-cyan-400 group-hover:text-slate-950 font-black">${String.fromCharCode(65 + i)}</span>
                    <span>${opt}</span>
                </button>
            `).join('');
        }
    },
    restart: function() {
        if (typeof sounds !== "undefined") sounds.playClick();
        this.idx = 0;
        this.score = 0;
        const card = document.getElementById("s17-card");
        if (card) {
            card.innerHTML = `
                <div class="flex items-center justify-between mb-2">
                    <span id="s17-counter" class="px-3 py-1 bg-yellow-400/20 text-yellow-300 font-extrabold text-xs rounded-full border border-yellow-400/30">Soru 1 / 5</span>
                    <span id="s17-score" class="px-3 py-1 bg-indigo-500/20 text-cyan-300 font-bold text-xs rounded-full border border-indigo-400/30">Puan: 0 / 100</span>
                </div>
                <h3 id="s17-qtext" class="text-sm sm:text-base font-black text-white mb-3 min-h-[44px]">Soru yükleniyor...</h3>
                <div id="s17-opts" class="grid grid-cols-1 sm:grid-cols-2 gap-2.5"></div>
                <div id="s17-fb" class="mt-3 hidden"></div>
            `;
        }
        this.render();
    }
};

window.WEEK5_2_CONTENT = {
    weekInfo: {
        weekNumber: '5_2',
        topicNumber: '5_2',
        customLabel: "5. Konu - 2",
        title: "Yazılım, Kapasite Birimleri ve Depolama Birimleri",
        code: "BTY.5.1.5. Bilgisayar sistemlerini çözümleyebilme",
        theme: "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        isPending: false,
        learningGoals: [
            "Bilgisayar sisteminin can damarı olan Yazılım kavramını ve Donanım ile ilişkisini ayırt edebileceğim.",
            "İşletim Sistemleri (Windows, Pardus, Linux, Android, iOS) ile Uygulama Yazılımlarını (Word, Scratch vb.) karşılaştırabileceğim.",
            "Bilgisayarların dili olan ikili sayı sistemini (0 ve 1 makine dili) kavrayabileceğim.",
            "Hafıza ve depolama kapasite birimlerini (Bit, Byte, KB, MB, GB, TB) 1024 kat kuralıyla sıralayabileceğim.",
            "Dahili (SSD, HDD), harici (USB, SD kart) ve bulut depolama birimlerini kullanım senaryolarına göre seçebileceğim."
        ],
        images: {
            cover: "assets/slides/donanim_sistem_kapak.jpg",
            softwareTypes: "assets/slides/bilgisayar_cesitleri.jpg",
            fileFolder: "assets/slides/veri_isleme_dongusu.jpg",
            sayfa1: "assets/worksheets/1.5_2_sayfa1.png",
            sayfa2: "assets/worksheets/1.5_2_sayfa2.png",
            sayfa3: "assets/worksheets/1.5_2_sayfa3.png",
            sayfa4: "assets/worksheets/1.5_2_sayfa4.png",
            tekrar: "assets/worksheets/bilgisayar_konusu_tekrar.png",
            cevap: "assets/docs/Cevap_Anahtari_BTY_5_1_5_Konu_2.pdf",
            defter: "assets/docs/Deftere_Yazilacaklar_BTY_5_1_5_Konu_2.pdf"
        }
    },

    videos: [],

    // ========================================================
    // 🖥️ 1. İNTERAKTİF DERS SUNUSU (BTY.5.1.5 • 18 Slayt)
    // ========================================================
    slides: [
        // Slayt 1 — Kapak ve kazanım
        {
            id: 1,
            title: "YAZILIM, KAPASİTE BİRİMLERİ VE DEPOLAMA BİRİMLERİ",
            subtitle: "5. KONU - 2 • BTY.5.1.5",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "GİRİŞ & KAZANIM",
            icon: "fa-solid fa-microchip",
            bgColor: "from-slate-900 via-indigo-950 to-purple-950",
            gradient: "from-slate-900 via-indigo-950 to-purple-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-6xl mx-auto my-auto py-2">
                    <div class="md:col-span-7 space-y-4 text-left">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="px-4 py-1.5 bg-yellow-400/20 text-yellow-300 font-extrabold text-sm sm:text-base uppercase tracking-wider rounded-full border border-yellow-400/40 shadow-sm">
                                5. KONU - 2 • 5. SINIF BİLİŞİM TEKNOLOJİLERİ
                            </span>
                            <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 font-bold text-xs rounded-full border border-cyan-400/30">
                                ⚡ BTY.5.1.5
                            </span>
                        </div>

                        <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-xl">
                            YAZILIM, KAPASİTE BİRİMLERİ VE <span class="text-cyan-400">DEPOLAMA BİRİMLERİ</span>
                        </h1>

                        <div class="p-4 sm:p-5 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-yellow-400/40 shadow-xl space-y-2">
                            <div class="flex items-center gap-2 text-yellow-300 font-black text-xs sm:text-sm uppercase tracking-widest">
                                <i class="fa-solid fa-bullseye text-base text-yellow-400"></i>
                                <span>MEB RESMÎ DERS KAZANIMI:</span>
                            </div>
                            <div contenteditable="true" spellcheck="false" class="text-base sm:text-lg md:text-xl font-extrabold text-white leading-snug bg-black/30 p-2.5 rounded-xl border border-yellow-400/30 cursor-text focus:outline-none focus:ring-2 focus:ring-yellow-400" title="Kazanım adını akıllı tahtada doğrudan düzenleyebilirsiniz">
                                BTY.5.1.5. Bilgisayar sistemlerini çözümleyebilme
                            </div>
                            <p class="text-[11px] text-slate-300">
                                💡 İpucu: Yukarıdaki kutucuğa tıklayarak kazanım metnini akıllı tahtada doğrudan değiştirebilirsiniz.
                            </p>
                        </div>

                        <div class="pt-1 flex items-center gap-3 flex-wrap">
                            <a href="sunu_yazilim_kapasite_depolama.html" target="_blank" class="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black rounded-xl text-xs sm:text-sm shadow-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
                                <i class="fa-solid fa-desktop"></i>
                                <span>16:9 Bağımsız Tam Ekran Sunuyu Aç</span>
                            </a>
                            <button onclick="app.nextSlide(); sounds.playClick();" class="px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
                                <span>Ders Başlasın</span>
                                <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                    <div class="md:col-span-5 flex justify-center">
                        <div class="w-full max-w-sm rounded-3xl p-4 bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-blue-500/20 border-2 border-cyan-400/40 shadow-2xl backdrop-blur-sm text-center space-y-4">
                            <div class="grid grid-cols-3 gap-2">
                                <div class="p-3 bg-cyan-950/80 rounded-2xl border border-cyan-400/30 text-cyan-300 flex flex-col items-center">
                                    <i class="fa-solid fa-code text-2xl mb-1"></i>
                                    <span class="text-[11px] font-black">Yazılım</span>
                                </div>
                                <div class="p-3 bg-purple-950/80 rounded-2xl border border-purple-400/30 text-purple-300 flex flex-col items-center">
                                    <i class="fa-solid fa-stairs text-2xl mb-1"></i>
                                    <span class="text-[11px] font-black">Kapasite</span>
                                </div>
                                <div class="p-3 bg-yellow-950/80 rounded-2xl border border-yellow-400/30 text-yellow-300 flex flex-col items-center">
                                    <i class="fa-solid fa-cloud text-2xl mb-1"></i>
                                    <span class="text-[11px] font-black">Depolama</span>
                                </div>
                            </div>
                            <div class="p-4 bg-slate-900/90 rounded-2xl border border-white/10 space-y-1.5">
                                <h3 class="text-base font-black text-white">Akıllı Tahta İnteraktif Sunusu</h3>
                                <p class="text-xs text-indigo-200">
                                    Donanıma can veren yazılımları, 0-1 makine dilini, hafıza merdivenini ve depolama türlerini keşfediyoruz!
                                </p>
                            </div>
                            <div class="flex items-center justify-center gap-2 text-xs text-slate-400">
                                <i class="fa-solid fa-chalkboard-user text-yellow-400"></i>
                                <span>Öğretmen Bozok • Bozok Bilişim Portalı 2026</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 2 — Öğrenme hedefleri
        {
            id: 2,
            title: "ÖĞRENME HEDEFLERİ 🎯",
            subtitle: "Bu Dersin Sonunda Neler Kazanacağız?",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "HEDEFLER",
            icon: "fa-solid fa-bullseye",
            bgColor: "from-slate-900 via-indigo-950 to-slate-950",
            gradient: "from-slate-900 via-indigo-950 to-slate-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-5 text-left my-auto py-2">
                    <div class="text-center space-y-1">
                        <span class="px-3 py-1 bg-indigo-500/20 text-cyan-300 font-bold text-xs rounded-full border border-indigo-400/30">
                            DERS KAZANIM HARİTASI
                        </span>
                        <h2 class="text-2xl sm:text-3xl font-black text-white">
                            Bu Dersin Sonunda Öğreneceklerimiz
                        </h2>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div class="p-4 rounded-2xl bg-slate-850 border-2 border-cyan-500/40 shadow-lg flex items-start gap-3.5">
                            <span class="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-black text-base shrink-0">01</span>
                            <div>
                                <h4 class="text-sm font-black text-white">Yazılım Nedir?</h4>
                                <p class="text-xs text-slate-300 mt-1">Yazılım kavramını, donanım ile ilişkisini ve bilgisayara nasıl komut verdiğini açıklayabileceksiniz.</p>
                            </div>
                        </div>

                        <div class="p-4 rounded-2xl bg-slate-850 border-2 border-purple-500/40 shadow-lg flex items-start gap-3.5">
                            <span class="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-black text-base shrink-0">02</span>
                            <div>
                                <h4 class="text-sm font-black text-white">Yazılım Türleri</h4>
                                <p class="text-xs text-slate-300 mt-1">İşletim sistemi (Windows, Pardus vb.) ile uygulama yazılımlarını (Word, Scratch vb.) ayırt edebileceksiniz.</p>
                            </div>
                        </div>

                        <div class="p-4 rounded-2xl bg-slate-850 border-2 border-yellow-500/40 shadow-lg flex items-start gap-3.5">
                            <span class="w-9 h-9 rounded-xl bg-yellow-500/20 text-yellow-300 flex items-center justify-center font-black text-base shrink-0">03</span>
                            <div>
                                <h4 class="text-sm font-black text-white">Makine Dili & 0-1</h4>
                                <p class="text-xs text-slate-300 mt-1">Bilgisayarın elektriksel mantığını ve ikili sayı sistemini (Binary 0 ve 1) kavrayacaksınız.</p>
                            </div>
                        </div>

                        <div class="p-4 rounded-2xl bg-slate-850 border-2 border-emerald-500/40 shadow-lg flex items-start gap-3.5">
                            <span class="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-black text-base shrink-0">04</span>
                            <div>
                                <h4 class="text-sm font-black text-white">Kapasite & Depolama</h4>
                                <p class="text-xs text-slate-300 mt-1">Bit-TB merdivenini sıralayacak; dahili, harici ve bulut depolama birimlerini doğru yerde kullanacaksınız.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 3 — Yazılım nedir?
        {
            id: 3,
            title: "YAZILIM NEDİR? 💡",
            subtitle: "Donanımı Hayata Geçiren Akıl ve Komutlar",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "TEMEL KAVRAM",
            icon: "fa-solid fa-code",
            bgColor: "from-slate-900 via-indigo-950 to-slate-900",
            gradient: "from-slate-900 via-indigo-950 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 text-left my-auto py-2">
                    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                        <div class="md:col-span-7 space-y-3">
                            <div class="p-4 rounded-2xl bg-gradient-to-r from-blue-900/60 to-purple-900/60 border-2 border-cyan-400/40 shadow-lg">
                                <h3 class="text-lg font-black text-white flex items-center gap-2">
                                    <i class="fa-solid fa-lightbulb text-yellow-400"></i>
                                    <span>Yazılımın Tanımı</span>
                                </h3>
                                <p class="text-sm text-cyan-100 mt-1.5 leading-relaxed font-medium">
                                    Bilgisayarın belirli bir görevi yerine getirmesi için yazılmış olan <strong>tüm programlara ve komut dizilerine</strong> <span class="text-yellow-300 font-extrabold">YAZILIM</span> denir.
                                </p>
                            </div>

                            <div class="p-3.5 rounded-2xl bg-slate-850 border border-slate-700 shadow-md">
                                <h4 class="text-xs font-black text-yellow-300 uppercase tracking-wider mb-2">
                                    🤝 Beden ve Ruh Benzetmesi:
                                </h4>
                                <div class="grid grid-cols-2 gap-2 text-xs">
                                    <div class="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300">
                                        <span class="block font-bold text-white text-sm">🦾 DONANIM:</span>
                                        Bilgisayarın elle tutulup gözle görülen fiziksel bedenidir (Kasa, Ekran, Klavye).
                                    </div>
                                    <div class="p-2.5 rounded-xl bg-indigo-950/80 border border-indigo-400/30 text-indigo-200">
                                        <span class="block font-bold text-cyan-300 text-sm">🧠 YAZILIM:</span>
                                        O bedene ne yapacağını söyleyen akıl, fikir ve ruhtur. Yazılım olmadan donanım çalışamaz!
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="md:col-span-5 space-y-2">
                            <div class="p-3.5 rounded-2xl bg-slate-900/90 border border-purple-500/30 space-y-2 text-xs">
                                <span class="font-extrabold text-purple-300 block">⚡ Yazılım Bilgisayara Neler Yaptırır?</span>
                                <div class="space-y-1.5 text-slate-300">
                                    <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i><span>Donanımları tanır ve birbiriyle konuşturur.</span></div>
                                    <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i><span>Klavyeden basılan harfleri ekranda yazıya dönüştürür.</span></div>
                                    <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i><span>Müzik çalar, video oynatır, internete bağlanır.</span></div>
                                    <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i><span>Oyunları kurallarına göre çalıştırır ve yönetir.</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 4 — Yazılım türleri
        {
            id: 4,
            title: "YAZILIM TÜRLERİ 📊",
            subtitle: "İşletim Sistemi ve Uygulama Yazılımları",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "SINIFLANDIRMA",
            icon: "fa-solid fa-layer-group",
            bgColor: "from-slate-900 via-purple-950 to-slate-900",
            gradient: "from-slate-900 via-purple-950 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 text-left my-auto py-2">
                    <p class="text-center text-sm text-indigo-200 font-semibold">
                        Yazılımlar görevlerine göre temel olarak 2 büyük gruba ayrılır:
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- 1. İşletim Sistemi -->
                        <div class="p-4 rounded-2xl bg-gradient-to-b from-slate-850 to-indigo-950/80 border-2 border-cyan-400/40 shadow-xl space-y-3">
                            <div class="flex items-center justify-between">
                                <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 font-black text-xs rounded-full">1. GRUP</span>
                                <i class="fa-solid fa-shield-halved text-2xl text-cyan-400"></i>
                            </div>
                            <h3 class="text-lg font-black text-white">İşletim Sistemi Yazılımları</h3>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Bilgisayarın açılışından kapanışına kadar tüm donanım ve diğer programları yöneten <strong>ana yazılımdır (Başkomutan)</strong>.
                            </p>
                            <div class="p-2.5 rounded-xl bg-slate-900/90 border border-slate-700 space-y-1">
                                <span class="text-[11px] font-bold text-yellow-300 block">Örnekler:</span>
                                <div class="flex flex-wrap gap-1.5 text-[11px] font-bold">
                                    <span class="px-2 py-0.5 bg-cyan-950 text-cyan-300 rounded border border-cyan-400/40">🇹🇷 PARDUS (Milli)</span>
                                    <span class="px-2 py-0.5 bg-blue-950 text-blue-300 rounded border border-blue-400/40">Windows</span>
                                    <span class="px-2 py-0.5 bg-purple-950 text-purple-300 rounded border border-purple-400/40">Linux</span>
                                    <span class="px-2 py-0.5 bg-emerald-950 text-emerald-300 rounded border border-emerald-400/40">Android</span>
                                    <span class="px-2 py-0.5 bg-slate-800 text-slate-200 rounded border border-slate-600">iOS</span>
                                </div>
                            </div>
                        </div>

                        <!-- 2. Uygulama Yazılımları -->
                        <div class="p-4 rounded-2xl bg-gradient-to-b from-slate-850 to-purple-950/80 border-2 border-purple-400/40 shadow-xl space-y-3">
                            <div class="flex items-center justify-between">
                                <span class="px-3 py-1 bg-purple-500/20 text-purple-300 font-black text-xs rounded-full">2. GRUP</span>
                                <i class="fa-solid fa-cubes text-2xl text-purple-400"></i>
                            </div>
                            <h3 class="text-lg font-black text-white">Uygulama Yazılımları</h3>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Kullanıcıların belirli bir işi (yazı yazma, resim yapma, kodlama vb.) yapması için üretilen <strong>özel amaçlı programlardır</strong>.
                            </p>
                            <div class="p-2.5 rounded-xl bg-slate-900/90 border border-slate-700 space-y-1">
                                <span class="text-[11px] font-bold text-yellow-300 block">Örnekler:</span>
                                <div class="flex flex-wrap gap-1.5 text-[11px] font-bold">
                                    <span class="px-2 py-0.5 bg-blue-950 text-blue-300 rounded border border-blue-400/40">Microsoft Word</span>
                                    <span class="px-2 py-0.5 bg-emerald-950 text-emerald-300 rounded border border-emerald-400/40">Microsoft Excel</span>
                                    <span class="px-2 py-0.5 bg-amber-950 text-amber-300 rounded border border-amber-400/40">Scratch</span>
                                    <span class="px-2 py-0.5 bg-teal-950 text-teal-300 rounded border border-teal-400/40">WhatsApp</span>
                                    <span class="px-2 py-0.5 bg-rose-950 text-rose-300 rounded border border-rose-400/40">Paint / Photoshop</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 5 — Hangi yazılım, hangi iş?
        {
            id: 5,
            title: "HANGİ YAZILIM, HANGİ İŞ? ⚖️",
            subtitle: "İşletim Sistemi ile Uygulama Yazılımlarının Görev Karşılaştırması",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "KARŞILAŞTIRMA",
            icon: "fa-solid fa-scale-balanced",
            bgColor: "from-slate-900 via-indigo-950 to-slate-900",
            gradient: "from-slate-900 via-indigo-950 to-slate-900",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 text-left my-auto py-2">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs sm:text-sm border-collapse rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
                            <thead>
                                <tr class="bg-indigo-950/90 text-yellow-300 border-b border-indigo-500/40">
                                    <th class="p-3 font-extrabold">Özellik / Görev</th>
                                    <th class="p-3 font-extrabold text-cyan-300">🛡️ İşletim Sistemi</th>
                                    <th class="p-3 font-extrabold text-purple-300">📱 Uygulama Yazılımı</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-800 bg-slate-900/80 text-slate-200">
                                <tr>
                                    <td class="p-3 font-bold text-white">Temel Amacı</td>
                                    <td class="p-3 text-cyan-100">Bilgisayarı yönetmek ve çalıştırmak</td>
                                    <td class="p-3 text-purple-100">Kullanıcının özel bir işini yapmak</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-bold text-white">Olmazsa Ne Olur?</td>
                                    <td class="p-3 text-cyan-100 font-semibold text-rose-300">Bilgisayar hiç açılmaz ve çalışmaz!</td>
                                    <td class="p-3 text-purple-100">Sadece o iş (örneğin yazı yazma) yapılamaz.</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-bold text-white">Çalışma Sırası</td>
                                    <td class="p-3 text-cyan-100">İlk önce ve sürekli arka planda çalışır</td>
                                    <td class="p-3 text-purple-100">İşletim sistemi açıldıktan sonra kullanıcı açar</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-bold text-white">Donanım Denetimi</td>
                                    <td class="p-3 text-cyan-100">Tüm parçaları (RAM, CPU, Ekran) yönetir</td>
                                    <td class="p-3 text-purple-100">Donanıma doğrudan değil, işletim sistemiyle erişir</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `
        },

        // Slayt 6 — Makine dili ve ikili sayı sistemi
        {
            id: 6,
            title: "MAKİNE DİLİ: 0 VE 1 🤖",
            subtitle: "Bilgisayarlar Nasıl Düşünür ve Konuşur?",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "MAKİNE DİLİ",
            icon: "fa-solid fa-binary",
            bgColor: "from-slate-900 via-blue-950 to-slate-900",
            gradient: "from-slate-900 via-blue-950 to-slate-900",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 text-left my-auto py-2">
                    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                        <div class="md:col-span-7 space-y-3">
                            <p class="text-sm sm:text-base text-slate-200 leading-relaxed">
                                İnsanlar Türkçe veya İngilizce gibi dillerle anlaşırken; bilgisayarlar sadece <span class="text-yellow-300 font-extrabold">elektrik akımı</span> ile çalışır.
                            </p>

                            <div class="p-4 rounded-2xl bg-slate-850 border-2 border-cyan-400/40 space-y-2 shadow-lg">
                                <h4 class="text-sm font-black text-cyan-300">İkili Sayı Sistemi (Binary):</h4>
                                <div class="grid grid-cols-2 gap-2 text-xs">
                                    <div class="p-3 rounded-xl bg-slate-900 border border-slate-700 text-center">
                                        <span class="text-3xl font-black text-rose-400 block mb-1">0</span>
                                        <span class="font-bold text-white">ELEKTRİK YOK</span>
                                        <p class="text-[10px] text-slate-400 mt-0.5">Kapalı devre (Yanmayan lamba)</p>
                                    </div>
                                    <div class="p-3 rounded-xl bg-slate-900 border border-slate-700 text-center">
                                        <span class="text-3xl font-black text-emerald-400 block mb-1">1</span>
                                        <span class="font-bold text-white">ELEKTRİK VAR</span>
                                        <p class="text-[10px] text-slate-400 mt-0.5">Açık devre (Yanan lamba)</p>
                                    </div>
                                </div>
                            </div>

                            <p class="text-xs text-slate-300">
                                💡 Ekranda gördüğümüz tüm renkli fotoğraflar, müzikler ve oyunlar arka planda milyarlarca <strong>0 ve 1</strong> elektrik sinyalinden meydana gelir!
                            </p>
                        </div>

                        <div class="md:col-span-5 flex justify-center">
                            <div class="w-full max-w-xs p-5 rounded-2xl bg-slate-900 border-2 border-cyan-500/50 shadow-2xl text-center space-y-3 font-mono">
                                <span class="text-xs text-slate-400 uppercase tracking-widest block font-sans">Elektriksel Akış</span>
                                <div class="text-2xl font-black text-cyan-400 tracking-widest animate-pulse">
                                    01000001
                                </div>
                                <div class="text-xs font-sans text-yellow-300 font-bold">
                                    = Klavyedeki 'A' Harfi
                                </div>
                                <p class="text-[11px] font-sans text-slate-400">
                                    8 adet 0 ve 1 sinyali birleşerek alfabemizdeki bir harfi oluşturur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 7 — Veri ve kapasite
        {
            id: 7,
            title: "DİJİTAL VERİ VE KAPASİTE 📦",
            subtitle: "Dosyalarımızın Bellekte Kapladığı Alan",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "VERİ KAVRAMI",
            icon: "fa-solid fa-database",
            bgColor: "from-slate-900 via-indigo-950 to-slate-900",
            gradient: "from-slate-900 via-indigo-950 to-slate-900",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 text-left my-auto py-2">
                    <p class="text-sm sm:text-base text-slate-200 leading-relaxed">
                        Bilgisayarda oluşturduğumuz veya sakladığımız her şeye (fotoğraf, video, ses, metin, oyun) <span class="text-yellow-300 font-extrabold">DİJİTAL VERİ</span> denir.
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div class="p-3.5 rounded-2xl bg-slate-850 border border-slate-700 shadow-md text-center space-y-1">
                            <i class="fa-solid fa-file-lines text-2xl text-cyan-400 mb-1"></i>
                            <h4 class="text-xs font-black text-white">Metin & Belgeler</h4>
                            <p class="text-[11px] text-slate-400">Ödevler, notlar, sunular</p>
                        </div>
                        <div class="p-3.5 rounded-2xl bg-slate-850 border border-slate-700 shadow-md text-center space-y-1">
                            <i class="fa-solid fa-image text-2xl text-purple-400 mb-1"></i>
                            <h4 class="text-xs font-black text-white">Görsel & Ses</h4>
                            <p class="text-[11px] text-slate-400">Fotoğraflar, şarkılar, ses kayıtları</p>
                        </div>
                        <div class="p-3.5 rounded-2xl bg-slate-850 border border-slate-700 shadow-md text-center space-y-1">
                            <i class="fa-solid fa-film text-2xl text-yellow-400 mb-1"></i>
                            <h4 class="text-xs font-black text-white">Video & Programlar</h4>
                            <p class="text-[11px] text-slate-400">Filmler, animasyonlar, oyunlar</p>
                        </div>
                    </div>

                    <div class="p-4 rounded-2xl bg-indigo-950/80 border-2 border-yellow-400/40 space-y-1.5 shadow-lg">
                        <div class="flex items-center gap-2 text-yellow-300 font-black text-xs uppercase tracking-wider">
                            <i class="fa-solid fa-weight-hanging"></i>
                            <span>Kapasite Nedir?</span>
                        </div>
                        <p class="text-xs sm:text-sm text-cyan-100 leading-relaxed font-medium">
                            Nasıl ki ağırlıkları kilogramla (kg), sıvıları litreyle (L) ölçüyorsak; dijital verilerin diskte kapladığı alanı da <span class="text-yellow-300 font-extrabold">KAPASİTE BİRİMLERİ</span> ile ölçeriz.
                        </p>
                    </div>
                </div>
            `
        },

        // Slayt 8 — Kapasite birimleri
        {
            id: 8,
            title: "KAPASİTE BİRİMLERİ VE 1024 KURALI 📶",
            subtitle: "Küçükten Büyüğe Kapasite Merdiveni",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "KAPASİTE MERDİVENİ",
            icon: "fa-solid fa-stairs",
            bgColor: "from-slate-900 via-indigo-950 to-purple-950",
            gradient: "from-slate-900 via-indigo-950 to-purple-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 text-left my-auto py-2">
                    <!-- 8 Bit = 1 Byte Kutusu -->
                    <div class="p-3.5 rounded-2xl bg-gradient-to-r from-cyan-950 to-indigo-950 border-2 border-cyan-400/50 flex items-center justify-between shadow-lg flex-wrap gap-2">
                        <div class="flex items-center gap-3">
                            <span class="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xl font-black shrink-0">8</span>
                            <div>
                                <h4 class="text-sm font-black text-white">8 Bit = 1 Byte</h4>
                                <p class="text-xs text-cyan-200">Klavyeden basılan tek bir harf veya boşluk bellekte tam 1 Byte yer kaplar.</p>
                            </div>
                        </div>
                        <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 font-black text-xs rounded-xl border border-yellow-400/30">
                            1024 Kat Kuralı ⚡
                        </span>
                    </div>

                    <!-- 1024 Kat İlişkileri -->
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        <div class="p-2.5 rounded-xl bg-slate-850 border border-slate-700 text-center">
                            <span class="font-bold text-slate-400 block text-[10px]">1024 Byte =</span>
                            <span class="font-black text-cyan-300 text-sm">1 KB (Kilobyte)</span>
                        </div>
                        <div class="p-2.5 rounded-xl bg-slate-850 border border-slate-700 text-center">
                            <span class="font-bold text-slate-400 block text-[10px]">1024 KB =</span>
                            <span class="font-black text-indigo-300 text-sm">1 MB (Megabyte)</span>
                        </div>
                        <div class="p-2.5 rounded-xl bg-slate-850 border border-slate-700 text-center">
                            <span class="font-bold text-slate-400 block text-[10px]">1024 MB =</span>
                            <span class="font-black text-purple-300 text-sm">1 GB (Gigabyte)</span>
                        </div>
                        <div class="p-2.5 rounded-xl bg-slate-850 border border-slate-700 text-center">
                            <span class="font-bold text-slate-400 block text-[10px]">1024 GB =</span>
                            <span class="font-black text-yellow-300 text-sm">1 TB (Terabyte)</span>
                        </div>
                    </div>

                    <!-- Sıralama Vurgusu -->
                    <div class="p-3.5 rounded-2xl bg-slate-900 border-2 border-yellow-400/40 text-center space-y-1.5 shadow-lg">
                        <span class="text-xs font-black text-yellow-300 uppercase tracking-widest block">
                            KÜÇÜKTEN BÜYÜĞE SIRALAMA:
                        </span>
                        <div class="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-base font-black text-white flex-wrap">
                            <span class="px-2.5 py-1 bg-cyan-950 text-cyan-300 rounded-lg border border-cyan-500/40">bit</span>
                            <span>→</span>
                            <span class="px-2.5 py-1 bg-blue-950 text-blue-300 rounded-lg border border-blue-500/40">Byte</span>
                            <span>→</span>
                            <span class="px-2.5 py-1 bg-indigo-950 text-indigo-300 rounded-lg border border-indigo-500/40">KB</span>
                            <span>→</span>
                            <span class="px-2.5 py-1 bg-purple-950 text-purple-300 rounded-lg border border-purple-500/40">MB</span>
                            <span>→</span>
                            <span class="px-2.5 py-1 bg-pink-950 text-pink-300 rounded-lg border border-pink-500/40">GB</span>
                            <span>→</span>
                            <span class="px-2.5 py-1 bg-yellow-950 text-yellow-300 rounded-lg border border-yellow-500/40">TB</span>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 9 — Kapasiteyi günlük yaşamla ilişkilendirelim
        {
            id: 9,
            title: "GÜNLÜK YAŞAMDA DOSYA BOYUTLARI 📊",
            subtitle: "Hangi Veri Yaklaşık Ne Kadar Yer Tutar?",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "GÜNLÜK YAŞAM",
            icon: "fa-solid fa-chart-pie",
            bgColor: "from-slate-900 via-indigo-950 to-slate-900",
            gradient: "from-slate-900 via-indigo-950 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-3.5 text-left my-auto py-2">
                    <p class="text-xs sm:text-sm text-indigo-200 font-semibold text-center">
                        (Not: Dosya boyutları içerik kalitesine ve çözünürlüğe göre değişiklik gösterebilir.)
                    </p>

                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                        <div class="p-3.5 rounded-2xl bg-slate-850 border border-slate-700 shadow-md space-y-1">
                            <span class="font-extrabold text-cyan-300 text-sm block">1 Byte</span>
                            <span class="font-bold text-white">Tek Bir Harf</span>
                            <p class="text-[11px] text-slate-400">Klavyeden yazılan "A" veya "B" harfi.</p>
                        </div>

                        <div class="p-3.5 rounded-2xl bg-slate-850 border border-slate-700 shadow-md space-y-1">
                            <span class="font-extrabold text-blue-300 text-sm block">10 - 100 KB</span>
                            <span class="font-bold text-white">Kısa Metin Belgesi</span>
                            <p class="text-[11px] text-slate-400">Not defterine yazılmış birkaç sayfalık ödev metni.</p>
                        </div>

                        <div class="p-3.5 rounded-2xl bg-slate-850 border border-slate-700 shadow-md space-y-1">
                            <span class="font-extrabold text-purple-300 text-sm block">3 - 5 MB</span>
                            <span class="font-bold text-white">MP3 Müzik / Fotoğraf</span>
                            <p class="text-[11px] text-slate-400">Akıllı telefonla çekilmiş yüksek çözünürlüklü bir fotoğraf.</p>
                        </div>

                        <div class="p-3.5 rounded-2xl bg-slate-850 border border-slate-700 shadow-md space-y-1">
                            <span class="font-extrabold text-pink-300 text-sm block">2 - 4 GB</span>
                            <span class="font-bold text-white">Full HD Uzun Film</span>
                            <p class="text-[11px] text-slate-400">2 saatlik yüksek kaliteli bir sinema filmi veya oyun.</p>
                        </div>

                        <div class="p-3.5 rounded-2xl bg-slate-850 border border-slate-700 shadow-md space-y-1">
                            <span class="font-extrabold text-yellow-300 text-sm block">16 - 64 GB</span>
                            <span class="font-bold text-white">USB Bellek Kapasitesi</span>
                            <p class="text-[11px] text-slate-400">Ödevlerimizi ve binlerce şarkıyı taşıyan cep belleği.</p>
                        </div>

                        <div class="p-3.5 rounded-2xl bg-slate-850 border border-slate-700 shadow-md space-y-1">
                            <span class="font-extrabold text-emerald-300 text-sm block">1 - 2 TB</span>
                            <span class="font-bold text-white">Büyük Bilgisayar Diski</span>
                            <p class="text-[11px] text-slate-400">Yüzlerce filmi ve onlarca modern oyunu saklayan sabit disk.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 10 — Dahili depolama
        {
            id: 10,
            title: "DAHİLİ DEPOLAMA BİRİMLERİ 💽",
            subtitle: "Bilgisayarın İçindeki Kalıcı Hafıza: HDD ve SSD",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "DAHİLİ DEPOLAMA",
            icon: "fa-solid fa-hard-drive",
            bgColor: "from-slate-900 via-indigo-950 to-slate-900",
            gradient: "from-slate-900 via-indigo-950 to-slate-900",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 text-left my-auto py-2">
                    <p class="text-sm text-slate-200 leading-relaxed">
                        Kasa veya dizüstü bilgisayarın <strong>içinde yer alan</strong>, işletim sistemi ve dosyalarımızı kalıcı saklayan birimlerdir.
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="p-4 rounded-2xl bg-slate-850 border-2 border-slate-700 shadow-lg space-y-2">
                            <div class="flex items-center justify-between">
                                <span class="px-2.5 py-1 bg-slate-700 text-slate-300 font-black text-xs rounded-lg">Mekanik Disk</span>
                                <i class="fa-solid fa-compact-disc text-xl text-slate-400"></i>
                            </div>
                            <h3 class="text-base font-black text-white">HDD (Hard Disk Drive)</h3>
                            <p class="text-xs text-slate-300">
                                İçinde dönen manyetik diskler ve okuyucu kafa bulunur. Kapasitesi yüksek ve uygundur ancak mekanik olduğu için daha yavaş çalışır ve darbelere duyarlıdır.
                            </p>
                        </div>

                        <div class="p-4 rounded-2xl bg-slate-850 border-2 border-cyan-400/50 shadow-lg space-y-2">
                            <div class="flex items-center justify-between">
                                <span class="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 font-black text-xs rounded-lg">Modern & Hızlı</span>
                                <i class="fa-solid fa-bolt text-xl text-yellow-400"></i>
                            </div>
                            <h3 class="text-base font-black text-white">SSD (Solid State Drive)</h3>
                            <p class="text-xs text-cyan-100">
                                İçinde hiçbir hareketli mekanik parça yoktur; flash bellek yongalarından oluşur. HDD'ye göre <strong>çok daha hızlı, sessiz ve darbelere dayanıklıdır</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 11 — Harici depolama
        {
            id: 11,
            title: "HARİCİ DEPOLAMA BİRİMLERİ 💾",
            subtitle: "Verilerimizi Cebimizde Taşımanın En Kolay Yolu",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "HARİCİ DEPOLAMA",
            icon: "fa-solid fa-sd-card",
            bgColor: "from-slate-900 via-purple-950 to-slate-900",
            gradient: "from-slate-900 via-purple-950 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 text-left my-auto py-2">
                    <p class="text-sm text-slate-200 leading-relaxed text-center">
                        Bilgisayara dışarıdan takılıp çıkarılabilen, verileri taşımak ve yedeklemek için kullanılan birimlerdir:
                    </p>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                        <div class="p-3.5 rounded-2xl bg-slate-850 border border-slate-700 shadow-md text-center space-y-1.5">
                            <i class="fa-brands fa-usb text-3xl text-cyan-400 mb-1"></i>
                            <h4 class="text-xs font-black text-white">USB Bellek (Flash Disk)</h4>
                            <p class="text-[11px] text-slate-400">Küçük boyutlu, anahtarlıkta taşınabilen en popüler harici bellek.</p>
                        </div>

                        <div class="p-3.5 rounded-2xl bg-slate-850 border border-slate-700 shadow-md text-center space-y-1.5">
                            <i class="fa-solid fa-sd-card text-3xl text-purple-400 mb-1"></i>
                            <h4 class="text-xs font-black text-white">Hafıza Kartı (SD Kart)</h4>
                            <p class="text-[11px] text-slate-400">Telefon ve fotoğraf makinelerinde veri depolamak için kullanılır.</p>
                        </div>

                        <div class="p-3.5 rounded-2xl bg-slate-850 border border-slate-700 shadow-md text-center space-y-1.5">
                            <i class="fa-solid fa-hard-drive text-3xl text-yellow-400 mb-1"></i>
                            <h4 class="text-xs font-black text-white">Taşınabilir Harici Disk</h4>
                            <p class="text-[11px] text-slate-400">USB kablosuyla bağlanan 1-2 TB'lık devasa taşınabilir arşiv diski.</p>
                        </div>

                        <div class="p-3.5 rounded-2xl bg-slate-850 border border-slate-700 shadow-md text-center space-y-1.5">
                            <i class="fa-solid fa-compact-disc text-3xl text-emerald-400 mb-1"></i>
                            <h4 class="text-xs font-black text-white">CD / DVD / Blu-Ray</h4>
                            <p class="text-[11px] text-slate-400">Lazer ışığıyla yazılan ve okunan optik depolama ortamlarıdır.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 12 — Bulut depolama
        {
            id: 12,
            title: "BULUT DEPOLAMA ☁️",
            subtitle: "İnternet Üzerinden Dosyaları Saklama ve Güvenlik",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "BULUT DEPOLAMA",
            icon: "fa-solid fa-cloud",
            bgColor: "from-slate-900 via-blue-950 to-indigo-950",
            gradient: "from-slate-900 via-blue-950 to-indigo-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 text-left my-auto py-2">
                    <div class="p-4 rounded-2xl bg-slate-850 border-2 border-cyan-400/40 space-y-2 shadow-lg">
                        <h3 class="text-base font-black text-white flex items-center gap-2">
                            <i class="fa-solid fa-cloud-arrow-up text-cyan-400"></i>
                            <span>Bulut Depolama Nedir?</span>
                        </h3>
                        <p class="text-xs sm:text-sm text-cyan-100 leading-relaxed">
                            Dosyalarımızın kendi bilgisayarımızda değil; internet üzerinden erişilen <strong>güvenli veri merkezlerindeki uzak sunucularda</strong> saklanması yöntemidir.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div class="p-3.5 rounded-2xl bg-slate-900 border border-slate-700 space-y-2">
                            <span class="text-xs font-black text-yellow-300 block">Popüler Örnekler:</span>
                            <div class="flex flex-wrap gap-2 text-xs font-bold">
                                <span class="px-2.5 py-1 bg-slate-800 text-blue-300 rounded-lg border border-slate-600">Google Drive</span>
                                <span class="px-2.5 py-1 bg-slate-800 text-cyan-300 rounded-lg border border-slate-600">Microsoft OneDrive</span>
                                <span class="px-2.5 py-1 bg-slate-800 text-yellow-300 rounded-lg border border-slate-600">Yandex Disk</span>
                                <span class="px-2.5 py-1 bg-slate-800 text-slate-200 rounded-lg border border-slate-600">Apple iCloud</span>
                            </div>
                        </div>

                        <div class="p-3.5 rounded-2xl bg-slate-900 border border-slate-700 space-y-1.5 text-xs text-slate-300">
                            <span class="font-black text-cyan-300 block">⚠️ Önemli Kurallar:</span>
                            <div class="flex items-center gap-1.5"><i class="fa-solid fa-wifi text-cyan-400"></i><span>Erişebilmek için internet bağlantısı şarttır.</span></div>
                            <div class="flex items-center gap-1.5"><i class="fa-solid fa-lock text-yellow-400"></i><span>Hesap şifresi güçlü olmalı, kimseyle paylaşılmamalıdır.</span></div>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 13 — Depolama türlerini karşılaştıralım
        {
            id: 13,
            title: "DEPOLAMA TÜRLERİNİ KARŞILAŞTIRALIM 📋",
            subtitle: "Dahili, Harici ve Bulut Depolama Ne Zaman Tercih Edilir?",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "ÖZET TABLO",
            icon: "fa-solid fa-table-columns",
            bgColor: "from-slate-900 via-indigo-950 to-slate-900",
            gradient: "from-slate-900 via-indigo-950 to-slate-900",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 text-left my-auto py-2">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs sm:text-sm border-collapse rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
                            <thead>
                                <tr class="bg-indigo-950 text-yellow-300 border-b border-indigo-500/40">
                                    <th class="p-3 font-extrabold">Depolama Türü</th>
                                    <th class="p-3 font-extrabold">Örnek Birimler</th>
                                    <th class="p-3 font-extrabold">İnternet Gerekir mi?</th>
                                    <th class="p-3 font-extrabold">En Uygun Kullanım Alanı</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-800 bg-slate-900/80 text-slate-200">
                                <tr>
                                    <td class="p-3 font-bold text-cyan-300">💽 Dahili Depolama</td>
                                    <td class="p-3">SSD, Dahili HDD</td>
                                    <td class="p-3 text-emerald-400 font-bold">Hayır (Çevrimdışı)</td>
                                    <td class="p-3">İşletim sistemi ve yüklü programları bilgisayarda sürekli çalıştırmak.</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-bold text-purple-300">💾 Harici Depolama</td>
                                    <td class="p-3">USB Bellek, SD Kart, Harici Disk</td>
                                    <td class="p-3 text-emerald-400 font-bold">Hayır (Çevrimdışı)</td>
                                    <td class="p-3">Dosyaları arkadaşa vermek veya okul tahtasına fiziksel taşımak.</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-bold text-yellow-300">☁️ Bulut Depolama</td>
                                    <td class="p-3">Google Drive, OneDrive</td>
                                    <td class="p-3 text-rose-400 font-bold">Evet (İnternet Şart)</td>
                                    <td class="p-3">Dosyalara hem telefondan hem okuldan erişmek ve güvenli yedeklemek.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `
        },

        // Slayt 14 — Etkileşimli soru: Yazılımı tanı
        {
            id: 14,
            title: "ETKİLEŞİMLİ SORU: YAZILIMI TANI! 🎮",
            subtitle: "İşletim Sistemi mi, Uygulama Yazılımı mı?",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "ETKİLEŞİM 1",
            icon: "fa-solid fa-gamepad",
            bgColor: "from-slate-900 via-indigo-950 to-slate-900",
            gradient: "from-slate-900 via-indigo-950 to-slate-900",
            content: `
                <div class="max-w-2xl mx-auto space-y-4 text-center my-auto py-2">
                    <span id="s14-counter" class="px-3.5 py-1 bg-yellow-400/20 text-yellow-300 font-extrabold text-xs rounded-full border border-yellow-400/30">
                        Soru: 1 / 4
                    </span>

                    <div class="p-6 rounded-3xl bg-slate-850 border-2 border-indigo-500/40 shadow-2xl space-y-4">
                        <div class="flex items-center justify-center gap-3">
                            <i id="s14-icon" class="fa-solid fa-linux text-4xl text-cyan-300"></i>
                            <h3 id="s14-name" class="text-2xl sm:text-3xl font-black text-white">PARDUS</h3>
                        </div>
                        <p class="text-xs sm:text-sm text-slate-300">
                            Yukarıdaki yazılım hangi kategoriye aittir? Seçeneğe dokun:
                        </p>

                        <div class="grid grid-cols-2 gap-3 pt-2">
                            <button onclick="window.slide14SoftwareGame.check('os')" class="p-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-sm sm:text-base border border-indigo-400 shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                                <i class="fa-solid fa-shield-halved"></i>
                                <span>İşletim Sistemi</span>
                            </button>
                            <button onclick="window.slide14SoftwareGame.check('app')" class="p-4 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-black text-sm sm:text-base border border-purple-400 shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                                <i class="fa-solid fa-cubes"></i>
                                <span>Uygulama Yazılımı</span>
                            </button>
                        </div>

                        <div id="s14-fb" class="mt-3 hidden"></div>
                    </div>
                </div>
            `
        },

        // Slayt 15 — Etkileşimli soru: Kapasite sıralaması
        {
            id: 15,
            title: "ETKİLEŞİMLİ SORU: KAPASİTE SIRALAMASI 📶",
            subtitle: "Birimleri En Küçükten En Büyüğe Doğru Sırala!",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "ETKİLEŞİM 2",
            icon: "fa-solid fa-arrow-down-short-wide",
            bgColor: "from-slate-900 via-purple-950 to-slate-900",
            gradient: "from-slate-900 via-purple-950 to-slate-900",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 text-left my-auto py-2">
                    <p class="text-xs sm:text-sm text-center text-cyan-200 font-semibold">
                        Aşağıdaki karışık birimlere tıklayarak merdiven basamaklarını küçükten büyüğe (1'den 6'ya) doğru doldurun:
                    </p>

                    <!-- Basamak Slotları -->
                    <div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
                        <div id="s15-slot-0" class="p-2.5 rounded-xl bg-slate-900/60 border-2 border-dashed border-slate-700 text-slate-400 font-bold text-xs sm:text-sm text-center">1. [Seçiniz]</div>
                        <div id="s15-slot-1" class="p-2.5 rounded-xl bg-slate-900/60 border-2 border-dashed border-slate-700 text-slate-400 font-bold text-xs sm:text-sm text-center">2. [Seçiniz]</div>
                        <div id="s15-slot-2" class="p-2.5 rounded-xl bg-slate-900/60 border-2 border-dashed border-slate-700 text-slate-400 font-bold text-xs sm:text-sm text-center">3. [Seçiniz]</div>
                        <div id="s15-slot-3" class="p-2.5 rounded-xl bg-slate-900/60 border-2 border-dashed border-slate-700 text-slate-400 font-bold text-xs sm:text-sm text-center">4. [Seçiniz]</div>
                        <div id="s15-slot-4" class="p-2.5 rounded-xl bg-slate-900/60 border-2 border-dashed border-slate-700 text-slate-400 font-bold text-xs sm:text-sm text-center">5. [Seçiniz]</div>
                        <div id="s15-slot-5" class="p-2.5 rounded-xl bg-slate-900/60 border-2 border-dashed border-slate-700 text-slate-400 font-bold text-xs sm:text-sm text-center">6. [Seçiniz]</div>
                    </div>

                    <!-- Tıklanabilir Havuz -->
                    <div class="p-3.5 rounded-2xl bg-slate-850 border border-slate-700 text-center space-y-2">
                        <div class="flex flex-wrap items-center justify-center gap-2">
                            <button id="s15-btn-gb" onclick="window.slide15SortGame.pick('gb')" class="px-3.5 py-2 bg-slate-800 hover:bg-indigo-600 text-white font-extrabold text-xs rounded-xl border border-slate-600 shadow-md">Gigabyte (GB)</button>
                            <button id="s15-btn-bit" onclick="window.slide15SortGame.pick('bit')" class="px-3.5 py-2 bg-slate-800 hover:bg-indigo-600 text-white font-extrabold text-xs rounded-xl border border-slate-600 shadow-md">Bit</button>
                            <button id="s15-btn-tb" onclick="window.slide15SortGame.pick('tb')" class="px-3.5 py-2 bg-slate-800 hover:bg-indigo-600 text-white font-extrabold text-xs rounded-xl border border-slate-600 shadow-md">Terabyte (TB)</button>
                            <button id="s15-btn-byte" onclick="window.slide15SortGame.pick('byte')" class="px-3.5 py-2 bg-slate-800 hover:bg-indigo-600 text-white font-extrabold text-xs rounded-xl border border-slate-600 shadow-md">Byte</button>
                            <button id="s15-btn-mb" onclick="window.slide15SortGame.pick('mb')" class="px-3.5 py-2 bg-slate-800 hover:bg-indigo-600 text-white font-extrabold text-xs rounded-xl border border-slate-600 shadow-md">Megabyte (MB)</button>
                            <button id="s15-btn-kb" onclick="window.slide15SortGame.pick('kb')" class="px-3.5 py-2 bg-slate-800 hover:bg-indigo-600 text-white font-extrabold text-xs rounded-xl border border-slate-600 shadow-md">Kilobyte (KB)</button>
                        </div>
                    </div>

                    <div id="s15-fb" class="p-3 rounded-2xl bg-slate-800/80 border border-slate-700 text-slate-300 font-semibold text-xs sm:text-sm text-center">
                        Yukarıdaki butonlara tıklayarak kapasite birimlerini en küçükten en büyüğe doğru basamaklara yerleştirin.
                    </div>

                    <div class="text-center pt-1">
                        <button onclick="window.slide15SortGame.reset()" class="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-yellow-300 font-bold text-xs rounded-xl border border-slate-600">
                            🔄 Sıralamayı Sıfırla
                        </button>
                    </div>
                </div>
            `
        },

        // Slayt 16 — Etkileşimli soru: Depolamayı seç
        {
            id: 16,
            title: "ETKİLEŞİMLİ SORU: DEPOLAMAYI SEÇ! 🎯",
            subtitle: "Günlük Yaşam Senaryosuna En Uygun Depolama Türü Hangisi?",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "ETKİLEŞİM 3",
            icon: "fa-solid fa-arrows-split-up-and-left",
            bgColor: "from-slate-900 via-indigo-950 to-slate-900",
            gradient: "from-slate-900 via-indigo-950 to-slate-900",
            content: `
                <div class="max-w-2xl mx-auto space-y-4 text-center my-auto py-2">
                    <span id="s16-counter" class="px-3.5 py-1 bg-cyan-400/20 text-cyan-300 font-extrabold text-xs rounded-full border border-cyan-400/30">
                        Senaryo: 1 / 3
                    </span>

                    <div class="p-5 rounded-3xl bg-slate-850 border-2 border-indigo-500/40 shadow-2xl space-y-3">
                        <div class="w-12 h-12 rounded-2xl bg-indigo-500/20 text-yellow-300 flex items-center justify-center text-2xl mx-auto">
                            <i class="fa-solid fa-lightbulb"></i>
                        </div>
                        <h4 class="text-xs font-black text-slate-400 uppercase tracking-widest">GÜNLÜK YAŞAM SENARYOSU:</h4>
                        <p id="s16-scenario-text" class="text-sm sm:text-base font-extrabold text-white leading-relaxed min-h-[48px] flex items-center justify-center">
                            Ödev dosyanızı evdeki bilgisayardan okulun etkileşimli tahtasına taşımak istiyorsunuz.
                        </p>

                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                            <button onclick="window.slide16StorageGame.check('dahili')" class="p-3 rounded-2xl bg-slate-800 hover:bg-indigo-600 text-white font-bold text-xs sm:text-sm border border-slate-700 shadow-md transition-all active:scale-95 flex flex-col items-center gap-1">
                                <i class="fa-solid fa-hard-drive text-cyan-400 text-lg"></i>
                                <span>Dahili (SSD/HDD)</span>
                            </button>
                            <button onclick="window.slide16StorageGame.check('harici')" class="p-3 rounded-2xl bg-slate-800 hover:bg-purple-600 text-white font-bold text-xs sm:text-sm border border-slate-700 shadow-md transition-all active:scale-95 flex flex-col items-center gap-1">
                                <i class="fa-brands fa-usb text-purple-400 text-lg"></i>
                                <span>Harici (USB/Disk)</span>
                            </button>
                            <button onclick="window.slide16StorageGame.check('bulut')" class="p-3 rounded-2xl bg-slate-800 hover:bg-teal-600 text-white font-bold text-xs sm:text-sm border border-slate-700 shadow-md transition-all active:scale-95 flex flex-col items-center gap-1">
                                <i class="fa-solid fa-cloud text-yellow-400 text-lg"></i>
                                <span>Bulut Depolama</span>
                            </button>
                        </div>

                        <div id="s16-fb" class="mt-3 hidden"></div>
                    </div>
                </div>
            `
        },

        // Slayt 17 — Mini değerlendirme
        {
            id: 17,
            title: "MİNİ DEĞERLENDİRME TESTİ 📝",
            subtitle: "5 Soruda Konu Bilgimizi Ölçelim",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "TEST",
            icon: "fa-solid fa-clipboard-question",
            bgColor: "from-slate-900 via-indigo-950 to-slate-900",
            gradient: "from-slate-900 via-indigo-950 to-slate-900",
            content: `
                <div class="max-w-2xl mx-auto space-y-4 text-left my-auto py-2">
                    <div id="s17-card" class="p-5 sm:p-6 rounded-3xl bg-slate-850 border-2 border-indigo-500/40 shadow-2xl space-y-3">
                        <div class="flex items-center justify-between mb-1">
                            <span id="s17-counter" class="px-3 py-1 bg-yellow-400/20 text-yellow-300 font-extrabold text-xs rounded-full border border-yellow-400/30">Soru 1 / 5</span>
                            <span id="s17-score" class="px-3 py-1 bg-indigo-500/20 text-cyan-300 font-bold text-xs rounded-full border border-indigo-400/30">Puan: 0 / 100</span>
                        </div>
                        <h3 id="s17-qtext" class="text-sm sm:text-base font-black text-white min-h-[44px]">
                            Bilgisayarın donanım parçalarını yöneten ve çalışmasını sağlayan tüm programlara ne ad verilir?
                        </h3>
                        <div id="s17-opts" class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            <button onclick="window.slide17MiniQuiz.answer(0)" class="s17-opt-btn p-3 rounded-xl bg-slate-800 hover:bg-indigo-900/60 border border-slate-700 hover:border-cyan-400 text-left text-xs sm:text-sm font-bold text-white transition-all flex items-center gap-2 group active:scale-98">
                                <span class="w-6 h-6 rounded-lg bg-indigo-500/20 text-cyan-300 flex items-center justify-center text-xs group-hover:bg-cyan-400 group-hover:text-slate-950 font-black">A</span>
                                <span>Donanım</span>
                            </button>
                            <button onclick="window.slide17MiniQuiz.answer(1)" class="s17-opt-btn p-3 rounded-xl bg-slate-800 hover:bg-indigo-900/60 border border-slate-700 hover:border-cyan-400 text-left text-xs sm:text-sm font-bold text-white transition-all flex items-center gap-2 group active:scale-98">
                                <span class="w-6 h-6 rounded-lg bg-indigo-500/20 text-cyan-300 flex items-center justify-center text-xs group-hover:bg-cyan-400 group-hover:text-slate-950 font-black">B</span>
                                <span>Yazılım</span>
                            </button>
                            <button onclick="window.slide17MiniQuiz.answer(2)" class="s17-opt-btn p-3 rounded-xl bg-slate-800 hover:bg-indigo-900/60 border border-slate-700 hover:border-cyan-400 text-left text-xs sm:text-sm font-bold text-white transition-all flex items-center gap-2 group active:scale-98">
                                <span class="w-6 h-6 rounded-lg bg-indigo-500/20 text-cyan-300 flex items-center justify-center text-xs group-hover:bg-cyan-400 group-hover:text-slate-950 font-black">C</span>
                                <span>Anakart</span>
                            </button>
                            <button onclick="window.slide17MiniQuiz.answer(3)" class="s17-opt-btn p-3 rounded-xl bg-slate-800 hover:bg-indigo-900/60 border border-slate-700 hover:border-cyan-400 text-left text-xs sm:text-sm font-bold text-white transition-all flex items-center gap-2 group active:scale-98">
                                <span class="w-6 h-6 rounded-lg bg-indigo-500/20 text-cyan-300 flex items-center justify-center text-xs group-hover:bg-cyan-400 group-hover:text-slate-950 font-black">D</span>
                                <span>İşlemci</span>
                            </button>
                        </div>
                        <div id="s17-fb" class="mt-3 hidden"></div>
                    </div>
                </div>
            `
        },

        // Slayt 18 — Konu özeti ve tartışma
        {
            id: 18,
            title: "KONU ÖZETİ VE SINIF TARTIŞMASI 🌟",
            subtitle: "Bugün Neler Öğrendik? Sınıfça Düşünelim!",
            topic: "5. KONU - 2 • BTY.5.1.5",
            badge: "ÖZET & TARTIŞMA",
            icon: "fa-solid fa-flag-checkered",
            bgColor: "from-slate-900 via-indigo-950 to-purple-950",
            gradient: "from-slate-900 via-indigo-950 to-purple-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 text-left my-auto py-2">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Özet Kartı -->
                        <div class="p-4 rounded-2xl bg-slate-850 border border-indigo-400/40 shadow-lg space-y-2">
                            <span class="text-xs font-black text-cyan-300 uppercase tracking-wider block">📌 DERSİN ALTIN KURALLARI:</span>
                            <div class="space-y-1.5 text-xs text-slate-200">
                                <div class="flex items-start gap-2"><i class="fa-solid fa-check text-emerald-400 mt-0.5"></i><span><strong>Yazılım:</strong> Bilgisayarı çalıştıran programlar ve komutlardır.</span></div>
                                <div class="flex items-start gap-2"><i class="fa-solid fa-check text-emerald-400 mt-0.5"></i><span><strong>İşletim Sistemi:</strong> Donanımı yöneten ana yazılımdır (Pardus, Windows).</span></div>
                                <div class="flex items-start gap-2"><i class="fa-solid fa-check text-emerald-400 mt-0.5"></i><span><strong>Makine Dili:</strong> 0 ve 1 elektrik sinyallerinden oluşur.</span></div>
                                <div class="flex items-start gap-2"><i class="fa-solid fa-check text-emerald-400 mt-0.5"></i><span><strong>Kapasite:</strong> bit → Byte → KB → MB → GB → TB (1024 kat kuralı).</span></div>
                                <div class="flex items-start gap-2"><i class="fa-solid fa-check text-emerald-400 mt-0.5"></i><span><strong>Depolama:</strong> Dahili (SSD/HDD), Harici (USB) ve Bulut (Drive) olarak üçe ayrılır.</span></div>
                            </div>
                        </div>

                        <!-- Sınıf Tartışma Sorusu -->
                        <div class="p-4 rounded-2xl bg-gradient-to-br from-yellow-950/70 to-slate-900 border-2 border-yellow-400/50 shadow-xl space-y-3 flex flex-col justify-between">
                            <div class="space-y-2">
                                <div class="flex items-center gap-2 text-yellow-300 font-black text-xs uppercase tracking-wider">
                                    <i class="fa-solid fa-comments text-base"></i>
                                    <span>ÖĞRETMENİN TARTIŞMA SORUSU:</span>
                                </div>
                                <h3 class="text-sm sm:text-base font-black text-white leading-snug">
                                    “Önemli bir okul projeniz olsa; onu tek bir USB bellekte mi saklardınız, yoksa hem bilgisayarınızda hem de bulut depolamada mı yedeklerdiniz? Neden?”
                                </h3>
                            </div>
                            <div class="flex items-center gap-2 pt-1 flex-wrap">
                                <button onclick="app.goToSlide(0); sounds.playClick();" class="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-yellow-300 font-bold text-xs rounded-xl border border-slate-600">
                                    <i class="fa-solid fa-rotate-left mr-1"></i> Baştan Başlat
                                </button>
                                <button onclick="app.switchTab('games'); sounds.playClick();" class="px-3.5 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl shadow-md">
                                    <i class="fa-solid fa-gamepad mr-1"></i> Tekrar Oyunları 🎮
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    ],

    worksheetDocs: {
        tekrar: "assets/worksheets/bilgisayar_konusu_tekrar.png",
        tekrarHtml: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <div class="border-b-2 border-amber-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-amber-500/30 text-yellow-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            5. KONU • BTY.5.1.5 GENEL TEKRAR
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            BİLGİSAYAR VE BİLİŞİM SİSTEMLERİ GENEL TEKRAR
                        </h1>
                        <p class="text-xs text-amber-300">Öğretmen Bozok • Bozok Bilişim Portalı 2026</p>
                    </div>
                    <span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider shadow">
                        Tekrar Çalışma Kağıdı
                    </span>
                </div>

                <!-- 1. BİLGİSAYAR ÇALIŞMA MANTIĞI VE DÖNGÜSÜ -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-amber-500/30 space-y-3">
                    <div class="flex items-center gap-2">
                        <span class="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-slate-950 font-black text-sm">1</span>
                        <h3 class="text-base font-black text-yellow-300">BİLGİSAYARIN ÇALIŞMA MANTIĞI VE VERİ DÖNGÜSÜ</h3>
                    </div>
                    <p class="text-sm leading-relaxed">
                        Bilgisayar; kullanıcıdan aldığı ham verileri (girdi) işlemci ve bellek yardımıyla işleyen, sonuçları bize (çıktı) sunan ve gerektiğinde kalıcı depolama birimlerinde saklayan elektronik bir sistemdir.
                    </p>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs font-bold pt-1">
                        <div class="p-3 bg-slate-900 rounded-xl border border-emerald-500/40 text-emerald-300">
                            <i class="fa-solid fa-arrow-right-to-bracket text-lg mb-1 block"></i>
                            <span>1. Girdi (Veri)</span>
                        </div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-cyan-500/40 text-cyan-300">
                            <i class="fa-solid fa-microchip text-lg mb-1 block"></i>
                            <span>2. İşlem (CPU/RAM)</span>
                        </div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-purple-500/40 text-purple-300">
                            <i class="fa-solid fa-desktop text-lg mb-1 block"></i>
                            <span>3. Çıktı (Bilgi)</span>
                        </div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-amber-500/40 text-amber-300">
                            <i class="fa-solid fa-hard-drive text-lg mb-1 block"></i>
                            <span>4. Depolama (SSD/Disk)</span>
                        </div>
                    </div>
                </div>

                <!-- 2. DONANIM VE YAZILIM AYRIMI -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="p-4 bg-slate-850 rounded-2xl border border-indigo-500/30 space-y-2">
                        <h4 class="font-black text-indigo-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-microchip text-indigo-400"></i> DONANIM (Fiziksel Parçalar)
                        </h4>
                        <p class="text-xs text-slate-300 leading-relaxed">
                            Elle tutulup gözle görülebilen somut parçalardır. Kasa içindekiler <strong>İç Donanım</strong> (Anakart, İşlemci, RAM, Sabit Disk), dışındakiler ise <strong>Dış Donanım</strong> (Klavye, Fare, Monitör vb.) olarak ayrılır.
                        </p>
                    </div>
                    <div class="p-4 bg-slate-850 rounded-2xl border border-cyan-500/30 space-y-2">
                        <h4 class="font-black text-cyan-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-code text-cyan-400"></i> YAZILIM (Programlar & Komutlar)
                        </h4>
                        <p class="text-xs text-slate-300 leading-relaxed">
                            Donanımları çalıştıran ve belirli görevleri yerine getiren komutlar bütünüdür. <strong>İşletim Sistemleri</strong> (Windows, Pardus, Android) ve <strong>Uygulama Yazılımları</strong> (Word, Scratch, Paint) olarak ikiye ayrılır.
                        </p>
                    </div>
                </div>

                <!-- 3. GİRİŞ VE ÇIKIŞ BİRİMLERİ TABLOSU -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-emerald-500/30 space-y-3">
                    <div class="flex items-center gap-2">
                        <span class="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-black text-sm">2</span>
                        <h3 class="text-base font-black text-emerald-300">GİRİŞ, ÇIKIŞ VE ÇİFT YÖNLÜ BİRİMLER</h3>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div class="p-3 bg-slate-900 rounded-xl border border-emerald-400/30 space-y-1">
                            <strong class="text-emerald-400 font-bold block"><i class="fa-solid fa-arrow-right-to-bracket mr-1"></i>Giriş Birimleri:</strong>
                            <p class="text-slate-300">Klavye, Fare, Mikrofon, Web Kamerası, Tarayıcı, Oyun Kolu.</p>
                        </div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-cyan-400/30 space-y-1">
                            <strong class="text-cyan-400 font-bold block"><i class="fa-solid fa-desktop mr-1"></i>Çıkış Birimleri:</strong>
                            <p class="text-slate-300">Monitör (Ekran), Hoparlör, Kulaklık, Yazıcı (Printer), Projeksiyon.</p>
                        </div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-purple-400/30 space-y-1">
                            <strong class="text-purple-300 font-bold block"><i class="fa-solid fa-arrows-left-right mr-1"></i>Çift Yönlü Birimler:</strong>
                            <p class="text-slate-300">Dokunmatik Ekran, USB Bellek, Harici Disk, Modem.</p>
                        </div>
                    </div>
                </div>

                <!-- 4. KAPASİTE VE DEPOLAMA BİRİMLERİ -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-purple-500/30 space-y-3">
                    <div class="flex items-center gap-2">
                        <span class="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white font-black text-sm">3</span>
                        <h3 class="text-base font-black text-purple-300">KAPASİTE VE DEPOLAMA BİRİMLERİ</h3>
                    </div>
                    <div class="p-3 bg-slate-900 rounded-xl border border-slate-700 text-xs font-semibold text-center text-yellow-300">
                        Kapasite Merdiveni (Küçükten Büyüğe):<br>
                        <span class="text-white font-mono text-sm">Bit &lt; Byte (8 Bit) &lt; KB &lt; MB &lt; GB &lt; TB</span> (Her basamak 1024 katıdır)
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                        <div class="p-2.5 bg-slate-900/80 rounded-xl border border-slate-800">
                            <strong class="text-indigo-300 block">Dahili Depolama:</strong>
                            <span class="text-slate-400">SSD, Sabit Disk (Kasa içinde kalıcı)</span>
                        </div>
                        <div class="p-2.5 bg-slate-900/80 rounded-xl border border-slate-800">
                            <strong class="text-amber-300 block">Harici Depolama:</strong>
                            <span class="text-slate-400">USB Bellek, Taşınabilir Hard Disk</span>
                        </div>
                        <div class="p-2.5 bg-slate-900/80 rounded-xl border border-slate-800">
                            <strong class="text-cyan-300 block">Bulut Depolama:</strong>
                            <span class="text-slate-400">Google Drive, OneDrive (İnternet sunucuları)</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        sayfa1: "assets/worksheets/1.5_2_sayfa1.png",
        sayfa2: "assets/worksheets/1.5_2_sayfa2.png",
        sayfa3: "assets/worksheets/1.5_2_sayfa3.png",
        sayfa4: "assets/worksheets/1.5_2_sayfa4.png",
        cevap: "assets/docs/Cevap_Anahtari_BTY_5_1_5_Konu_2.pdf",
        defter: "assets/docs/Deftere_Yazilacaklar_BTY_5_1_5_Konu_2.pdf",
        pdfLinks: {
            cevapPdf: "assets/docs/Cevap_Anahtari_BTY_5_1_5_Konu_2.pdf",
            defterPdf: "assets/docs/Deftere_Yazilacaklar_BTY_5_1_5_Konu_2.pdf"
        },
        sayfa1Html: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <div class="border-b-2 border-indigo-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            5. KONU - 2 • BTY.5.1.5
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 1: YAZILIM VE YAZILIM TÜRLERİ
                        </h1>
                        <p class="text-xs text-indigo-300">Öğretmen Bozok • Bozok Bilişim Portalı</p>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        Sayfa: 1 / 4
                    </span>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-indigo-500/30 space-y-3">
                    <div class="flex items-center gap-2">
                        <span class="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black text-sm">1</span>
                        <h3 class="text-base font-black text-yellow-300">YAZILIM NEDİR?</h3>
                    </div>
                    <p class="text-sm leading-relaxed">
                        Yazılım, bilgisayarın çalışmasını ve çeşitli işlemleri yapmasını sağlayan komutlar bütünüdür. Günlük hayatta <strong>program</strong> veya <strong>uygulama</strong> olarak da adlandırılır. Donanım fiziksel beden ise, yazılım ona can veren ruhtur.
                    </p>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-cyan-500/30 space-y-3">
                    <div class="flex items-center gap-2">
                        <span class="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-white font-black text-sm">2</span>
                        <h3 class="text-base font-black text-cyan-300">YAZILIM TÜRLERİ</h3>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div class="p-3.5 bg-slate-900 rounded-xl border border-indigo-400/30 space-y-1.5">
                            <h4 class="font-black text-indigo-300 text-sm flex items-center gap-1.5">
                                <i class="fa-solid fa-gears"></i> İşletim Sistemi Yazılımları
                            </h4>
                            <p class="text-slate-300">Bilgisayarın donanım birimlerini yönetir, bilgisayarın açılmasını sağlar ve diğer yazılımların çalışması için zemin oluşturur.</p>
                            <div class="p-2 bg-slate-950 rounded-lg text-yellow-300 font-bold text-[11px]">
                                Örnekler: Windows, Pardus (Yerli & Milli), Linux, Android, iOS.
                            </div>
                        </div>
                        <div class="p-3.5 bg-slate-900 rounded-xl border border-emerald-400/30 space-y-1.5">
                            <h4 class="font-black text-emerald-300 text-sm flex items-center gap-1.5">
                                <i class="fa-solid fa-shapes"></i> Uygulama Yazılımları
                            </h4>
                            <p class="text-slate-300">Kullanıcının belirli bir işi (yazı yazma, resim yapma, internete girme, oyun oynama vb.) gerçekleştirmesi için üretilen yazılımlardır.</p>
                            <div class="p-2 bg-slate-950 rounded-lg text-yellow-300 font-bold text-[11px]">
                                Örnekler: Microsoft Word, Microsoft Excel, Scratch, Paint, WhatsApp.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-purple-500/30 space-y-2">
                    <h3 class="text-sm font-black text-purple-300 uppercase flex items-center gap-2">
                        <i class="fa-solid fa-microchip"></i> 3. MAKİNE DİLİ VE İKİLİ SAYI SİSTEMİ
                    </h3>
                    <p class="text-sm leading-relaxed">
                        Bilgisayarlar doğrudan Türkçe veya İngilizce anlamaz. Bilgisayarların ana dili <strong>0</strong> (elektrik yok) ve <strong>1</strong> (elektrik var) rakamlarından oluşan <strong>ikili sayı sistemi (binary)</strong> ve <strong>makine dilidir</strong>.
                    </p>
                </div>
            </div>
        `,
        sayfa2Html: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <div class="border-b-2 border-indigo-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            5. KONU - 2 • BTY.5.1.5
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 2: KAPASİTE BİRİMLERİ (BİT, BYTE, KB, MB, GB, TB)
                        </h1>
                        <p class="text-xs text-indigo-300">Hafıza Ölçü Birimleri ve 1024 Kat Kuralı</p>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        Sayfa: 2 / 4
                    </span>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-yellow-500/30 space-y-3">
                    <h3 class="text-base font-black text-yellow-300 uppercase flex items-center gap-2">
                        <i class="fa-solid fa-stairs"></i> KAPASİTE BİRİMLERİ VE DÖNÜŞÜM TABLOSU
                    </h3>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs border-collapse">
                            <thead>
                                <tr class="bg-slate-900 text-slate-300 border-b border-slate-700">
                                    <th class="p-2.5 font-bold">Birim Adı</th>
                                    <th class="p-2.5 font-bold">Kısaltması</th>
                                    <th class="p-2.5 font-bold">Eşdeğer Kapasite</th>
                                    <th class="p-2.5 font-bold">Gerçek Hayat Örneği</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-800">
                                <tr><td class="p-2.5 font-bold text-cyan-300">Bit</td><td class="p-2.5 font-mono">b</td><td class="p-2.5 font-semibold">En küçük veri (0 veya 1)</td><td class="p-2.5 text-slate-400">Tek bir elektrik sinyali</td></tr>
                                <tr><td class="p-2.5 font-bold text-cyan-300">Byte</td><td class="p-2.5 font-mono">B</td><td class="p-2.5 font-semibold text-yellow-400">8 Bit</td><td class="p-2.5 text-slate-400">Klavyedeki tek bir harf ('A', 'B')</td></tr>
                                <tr><td class="p-2.5 font-bold text-cyan-300">Kilobyte</td><td class="p-2.5 font-mono">KB</td><td class="p-2.5 font-semibold text-yellow-400">1024 Byte</td><td class="p-2.5 text-slate-400">Kısa bir not, metin belgesi</td></tr>
                                <tr><td class="p-2.5 font-bold text-cyan-300">Megabyte</td><td class="p-2.5 font-mono">MB</td><td class="p-2.5 font-semibold text-yellow-400">1024 Kilobyte</td><td class="p-2.5 text-slate-400">1 adet yüksek kaliteli fotoğraf, 1 MP3 şarkı</td></tr>
                                <tr><td class="p-2.5 font-bold text-cyan-300">Gigabyte</td><td class="p-2.5 font-mono">GB</td><td class="p-2.5 font-semibold text-yellow-400">1024 Megabyte</td><td class="p-2.5 text-slate-400">1 HD film, modern bir bilgisayar oyunu</td></tr>
                                <tr><td class="p-2.5 font-bold text-cyan-300">Terabyte</td><td class="p-2.5 font-mono">TB</td><td class="p-2.5 font-semibold text-yellow-400">1024 Gigabyte</td><td class="p-2.5 text-slate-400">Binlerce film, devasa sunucu ve arşivler</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="p-3 bg-slate-900 rounded-xl border border-cyan-400/30 text-center font-extrabold text-xs text-cyan-300">
                        Küçükten Büyüğe Sıralama: bit ➔ Byte ➔ KB ➔ MB ➔ GB ➔ TB
                    </div>
                </div>
            </div>
        `,
        sayfa3Html: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <div class="border-b-2 border-indigo-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            5. KONU - 2 • BTY.5.1.5
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 3: DEPOLAMA BİRİMLERİ (DAHİLİ, HARİCİ, BULUT)
                        </h1>
                        <p class="text-xs text-indigo-300">Verilerin Saklandığı Ortamlar ve Özellikleri</p>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        Sayfa: 3 / 4
                    </span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div class="p-4 bg-slate-850 rounded-2xl border border-blue-500/30 space-y-2">
                        <div class="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center text-lg">
                            <i class="fa-solid fa-hard-drive"></i>
                        </div>
                        <h3 class="font-black text-white text-sm">1. Dahili Depolama</h3>
                        <p class="text-slate-300">Bilgisayar veya cihazın içine monte edilmiş, sabit duran saklama birimleridir.</p>
                        <ul class="text-slate-400 space-y-1 list-disc pl-4 text-[11px]">
                            <li><strong>HDD (Hard Disk):</strong> Dönen manyetik diskler.</li>
                            <li><strong>SSD:</strong> Çok hızlı flash bellek yongaları.</li>
                        </ul>
                    </div>

                    <div class="p-4 bg-slate-850 rounded-2xl border border-amber-500/30 space-y-2">
                        <div class="w-10 h-10 rounded-xl bg-amber-600/30 text-amber-400 flex items-center justify-center text-lg">
                            <i class="fa-brands fa-usb"></i>
                        </div>
                        <h3 class="font-black text-white text-sm">2. Harici Depolama</h3>
                        <p class="text-slate-300">Taşınabilir, cebe sığan, farklı cihazlara takıp çıkarılabilen birimlerdir.</p>
                        <ul class="text-slate-400 space-y-1 list-disc pl-4 text-[11px]">
                            <li><strong>USB Flash Bellek:</strong> Cepte taşınan bellek.</li>
                            <li><strong>Hafıza Kartı (SD):</strong> Telefon ve kameralar.</li>
                            <li><strong>Harici Disk & CD/DVD:</strong> Taşınabilir yedekleme.</li>
                        </ul>
                    </div>

                    <div class="p-4 bg-slate-850 rounded-2xl border border-emerald-500/30 space-y-2">
                        <div class="w-10 h-10 rounded-xl bg-emerald-600/30 text-emerald-400 flex items-center justify-center text-lg">
                            <i class="fa-solid fa-cloud"></i>
                        </div>
                        <h3 class="font-black text-white text-sm">3. Bulut Depolama</h3>
                        <p class="text-slate-300">Verilerin internet üzerinden erişilen uzak ve güvenli sunucularda saklanmasıdır.</p>
                        <ul class="text-slate-400 space-y-1 list-disc pl-4 text-[11px]">
                            <li><strong>Google Drive:</strong> 15 GB ücretsiz alan.</li>
                            <li><strong>OneDrive & Yandex Disk:</strong> Güvenli bulut.</li>
                            <li>İnternet olan her yerden erişim sağlar.</li>
                        </ul>
                    </div>
                </div>
            </div>
        `,
        sayfa4Html: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <div class="border-b-2 border-indigo-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            5. KONU - 2 • BTY.5.1.5
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 4: PEKİŞTİRME ETKİNLİKLERİ VE GÖREVLER
                        </h1>
                        <p class="text-xs text-indigo-300">Eşleştirme, Doğru/Yanlış ve Gerçek Hayat Senaryoları</p>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        Sayfa: 4 / 4
                    </span>
                </div>

                <!-- ETKİNLİK 1: EŞLEŞTİRME -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-indigo-500/30 space-y-2 text-xs">
                    <h3 class="font-black text-yellow-300 text-sm flex items-center gap-2">
                        <i class="fa-solid fa-arrows-split-up-and-left"></i> ETKİNLİK 1: DEPOLAMA TÜRÜ EŞLEŞTİRMESİ
                    </h3>
                    <p class="text-slate-300">Donanımları uygun depolama türüyle (Dahili / Harici / Bulut) eşleştirin:</p>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 font-semibold">
                        <div class="p-2 bg-slate-900 rounded-lg border border-slate-700">1. HDD ➔ [ Dahili ]</div>
                        <div class="p-2 bg-slate-900 rounded-lg border border-slate-700">2. SSD ➔ [ Dahili ]</div>
                        <div class="p-2 bg-slate-900 rounded-lg border border-slate-700">3. USB Bellek ➔ [ Harici ]</div>
                        <div class="p-2 bg-slate-900 rounded-lg border border-slate-700">4. Hafıza Kartı (SD) ➔ [ Harici ]</div>
                        <div class="p-2 bg-slate-900 rounded-lg border border-slate-700">5. CD / DVD ➔ [ Harici ]</div>
                        <div class="p-2 bg-slate-900 rounded-lg border border-slate-700">6. Google Drive ➔ [ Bulut ]</div>
                    </div>
                </div>

                <!-- ETKİNLİK 2: DOĞRU / YANLIŞ -->
                <div class="p-4 bg-slate-850 rounded-2xl border border-emerald-500/30 space-y-2 text-xs">
                    <h3 class="font-black text-emerald-300 text-sm flex items-center gap-2">
                        <i class="fa-solid fa-square-check"></i> ETKİNLİK 2: DOĞRU MU YANLIŞ MI?
                    </h3>
                    <div class="space-y-1.5 text-slate-300">
                        <p>1. [ <strong class="text-emerald-400">D</strong> ] Yazılım olmadan donanım parçaları hiçbir işe yaramaz.</p>
                        <p>2. [ <strong class="text-emerald-400">D</strong> ] Pardus, TÜBİTAK tarafından geliştirilen milli işletim sistemimizdir.</p>
                        <p>3. [ <strong class="text-emerald-400">D</strong> ] 1 Byte tam olarak 8 Bit'in bir araya gelmesiyle oluşur.</p>
                        <p>4. [ <strong class="text-emerald-400">D</strong> ] 1024 Megabyte (MB) birleşerek 1 Gigabyte (GB) oluşturur.</p>
                        <p>5. [ <strong class="text-emerald-400">D</strong> ] SSD diskler mekanik disklere (HDD) göre çok daha hızlı ve darbelere dayanıklıdır.</p>
                        <p>6. [ <strong class="text-rose-400">Y</strong> ] Bulut depolamadaki dosyalara internet bağlantısı olmadan da her yerden erişilebilir. <em>(İnternet şarttır)</em></p>
                    </div>
                </div>
            </div>
        `,
        cevapHtml: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <div class="border-b-2 border-emerald-500/50 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-emerald-500/30 text-emerald-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            BTY.5.1.5 • 2. KONU RESMÎ ÇÖZÜMLER
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            RESMÎ CEVAP ANAHTARI
                        </h1>
                        <p class="text-xs text-emerald-300">Öğretmen Bozok • Yazılım, Kapasite Birimleri ve Depolama Birimleri</p>
                    </div>
                    <a href="assets/docs/Cevap_Anahtari_BTY_5_1_5_Konu_2.pdf" target="_blank" download class="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl shadow-md flex items-center gap-1.5">
                        <i class="fa-solid fa-download"></i> PDF İndir
                    </a>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-emerald-500/40 space-y-4 text-xs">
                    <div>
                        <h3 class="font-black text-yellow-300 text-sm mb-1.5">1. Sayfa – Yazılım ve Yazılım Türleri</h3>
                        <p><strong>İşletim sistemi:</strong> Windows, Pardus, Linux, Android, iOS.</p>
                        <p><strong>Uygulama yazılımı:</strong> Microsoft Word, Microsoft Excel, Scratch, WhatsApp.</p>
                        <p><strong>Makine dili:</strong> 0 ve 1 rakamlarından oluşan ikili sayı sistemi.</p>
                    </div>

                    <div class="border-t border-slate-700 pt-3">
                        <h3 class="font-black text-yellow-300 text-sm mb-1.5">2. Sayfa – Kapasite Birimleri</h3>
                        <p>• 8 bit = <strong>1 Byte (B)</strong></p>
                        <p>• 1024 Byte = <strong>1 Kilobyte (KB)</strong></p>
                        <p>• 1024 KB = <strong>1 Megabyte (MB)</strong></p>
                        <p>• 1024 MB = <strong>1 Gigabyte (GB)</strong></p>
                        <p>• 1024 GB = <strong>1 Terabyte (TB)</strong></p>
                        <p class="text-cyan-300 font-bold mt-1">Küçükten büyüğe: bit ➔ Byte ➔ KB ➔ MB ➔ GB ➔ TB</p>
                    </div>

                    <div class="border-t border-slate-700 pt-3">
                        <h3 class="font-black text-yellow-300 text-sm mb-1.5">3. Sayfa – Depolama Birimleri</h3>
                        <p><strong>Dahili:</strong> HDD, SSD.</p>
                        <p><strong>Harici:</strong> USB bellek, hafıza kartı, CD/DVD, taşınabilir disk.</p>
                        <p><strong>Bulut:</strong> Google Drive, Yandex Disk, OneDrive.</p>
                    </div>

                    <div class="border-t border-slate-700 pt-3">
                        <h3 class="font-black text-yellow-300 text-sm mb-1.5">4. Sayfa – Etkinlik Cevapları</h3>
                        <p><strong>Etkinlik 1 – Eşleştirme:</strong> HDD ➔ Dahili; SSD ➔ Dahili; USB bellek ➔ Harici; hafıza kartı (SD) ➔ Harici; CD/DVD ➔ Harici; Google Drive ➔ Bulut.</p>
                        <p class="mt-1"><strong>Etkinlik 2 – Doğru/Yanlış:</strong> 1-D, 2-D, 3-D, 4-D, 5-D, 6-Y.</p>
                        <p class="mt-1"><strong>Etkinlik 3 – Uygun depolama birimi:</strong> 1. Dahili. 2. Harici veya bulut. 3. Dahili; yedek için harici veya bulut da kabul edilir. 4. Bulut. 5. Harici.</p>
                        <p class="mt-1"><strong>Etkinlik 4 – Görseller:</strong> 1. HDD – Dahili. 2. SSD – Dahili. 3. USB bellek – Harici. 4. Hafıza kartı – Harici. 5. CD/DVD – Harici. 6. Bulut depolama – Bulut.</p>
                        <p class="mt-1"><strong>Etkinlik 5 – Senaryolar:</strong> 1. Harici veya bulut; yedek kopya oluşturur. 2. USB bellek veya bulut; başka bilgisayarda açılabilir. 3. Bulut veya harici; ek saklama alanı sağlar. 4. SSD; genellikle HDD'den daha hızlıdır.</p>
                    </div>
                </div>
            </div>
        `,
        defterHtml: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <div class="border-b-2 border-amber-500/50 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-amber-500/30 text-amber-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            BTY.5.1.5 • ÖĞRENCİ DERS NOTLARI
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            DEFTERE YAZILACAKLAR
                        </h1>
                        <p class="text-xs text-amber-300">BTY.5.1.5 – 2. Konu: Yazılım ve Kapasite Birimleri</p>
                    </div>
                    <a href="assets/docs/Deftere_Yazilacaklar_BTY_5_1_5_Konu_2.pdf" target="_blank" download class="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-md flex items-center gap-1.5">
                        <i class="fa-solid fa-download"></i> PDF İndir
                    </a>
                </div>

                <div class="p-5 bg-slate-850 rounded-2xl border border-amber-500/40 space-y-4 text-xs sm:text-sm leading-relaxed">
                    <div class="p-3 bg-slate-900 rounded-xl border border-slate-700">
                        <h3 class="font-black text-yellow-300 text-base mb-1">1. Yazılım Nedir?</h3>
                        <p class="text-slate-200">
                            Yazılım, bilgisayarın çalışmasını ve çeşitli işlemleri yapmasını sağlayan komutlar bütünüdür. Günlük hayatta <strong>program</strong> veya <strong>uygulama</strong> olarak da adlandırılır.
                        </p>
                    </div>

                    <div class="p-3 bg-slate-900 rounded-xl border border-slate-700 space-y-2">
                        <h3 class="font-black text-cyan-300 text-base mb-1">2. Yazılım Türleri</h3>
                        <p><strong>• İşletim sistemi yazılımları:</strong> Bilgisayarın donanım birimlerini yönetir ve diğer yazılımların çalışmasını sağlar. Örnekler: Windows, Pardus, Linux, Android ve iOS.</p>
                        <p><strong>• Uygulama yazılımları:</strong> Belirli işleri yapmak için kullanılır. Örnekler: Microsoft Word, Microsoft Excel, Scratch ve WhatsApp.</p>
                        <p class="text-slate-400 text-xs italic">İşletim sistemi, kullanıcı ile bilgisayar arasında iletişim kurulmasını sağlar. Uygulama yazılımları yazı yazma, hesaplama ve oyun oynama gibi işlerde kullanılır.</p>
                    </div>

                    <div class="p-3 bg-slate-900 rounded-xl border border-slate-700">
                        <h3 class="font-black text-purple-300 text-base mb-1">3. Makine Dili – İkili Sayı Sistemi</h3>
                        <p class="text-slate-200">
                            Bilgisayarlar makine dilini kullanır. Makine dili, <strong>0</strong> ve <strong>1</strong> rakamlarından oluşan ikili sayı sistemine dayanır.
                        </p>
                    </div>

                    <div class="p-3 bg-slate-900 rounded-xl border border-slate-700 space-y-1.5">
                        <h3 class="font-black text-yellow-300 text-base mb-1">4. Kapasite Birimleri</h3>
                        <p class="text-slate-200">Bilgisayar, tablet ve telefonlarda saklanan fotoğraf, video, müzik ve belgeler veridir. Verilerin depolamada kapladığı alana <strong>veri boyutu</strong> denir. Veri boyutu kapasite birimleriyle ölçülür:</p>
                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono font-bold text-xs pt-1 text-cyan-300">
                            <div class="p-2 bg-slate-950 rounded-lg">8 bit = 1 Byte (B)</div>
                            <div class="p-2 bg-slate-950 rounded-lg">1024 Byte = 1 KB</div>
                            <div class="p-2 bg-slate-950 rounded-lg">1024 KB = 1 MB</div>
                            <div class="p-2 bg-slate-950 rounded-lg">1024 MB = 1 GB</div>
                            <div class="p-2 bg-slate-950 rounded-lg">1024 GB = 1 TB</div>
                        </div>
                        <div class="p-2 bg-indigo-950 rounded-lg text-center font-bold text-yellow-300 text-xs mt-2">
                            Küçükten büyüğe sıralama: bit ➔ Byte ➔ KB ➔ MB ➔ GB ➔ TB
                        </div>
                    </div>

                    <div class="p-3 bg-slate-900 rounded-xl border border-slate-700 space-y-1.5">
                        <h3 class="font-black text-emerald-300 text-base mb-1">5. Depolama Birimleri</h3>
                        <p><strong>• Dahili depolama:</strong> Cihazın içinde bulunan veri saklama birimleridir. Örnekler: HDD (sabit disk) ve SSD (katı hâl diski). İşletim sistemi ve programlar bu birimlere yüklenebilir.</p>
                        <p><strong>• Harici depolama:</strong> Taşınabilen ve farklı cihazlarda kullanılabilen birimlerdir. Örnekler: USB bellek, hafıza kartı, CD/DVD ve taşınabilir disk.</p>
                        <p><strong>• Bulut depolama:</strong> Verilerin internet üzerindeki sunucularda saklanmasıdır. İnternet bağlantısıyla farklı yerlerden erişim sağlayabilir. Örnekler: Google Drive, Yandex Disk ve OneDrive.</p>
                    </div>

                    <div class="p-3 bg-amber-950/40 rounded-xl border border-amber-400/40 text-amber-200 font-bold text-xs">
                        💡 <strong>Hatırlayalım:</strong> Yazılımlar bilgisayarda işlem yapmamızı sağlar. Kapasite birimleri verilerin boyutunu ölçer. Depolama birimleri verileri saklar; önemli dosyaların yedeğini almak veri kaybını önlemeye yardımcı olur.
                    </div>
                </div>
            </div>
        `
    },

    // ========================================================
    // ❓ 3. PORTAL MİNİ TESTİ (BTY.5.1.5 Konu Soruları)
    // ========================================================
    questions: [
        null,
        null,
        {
            id: 2,
            type: "multiple_choice",
            title: "5. Hafta 2. Konu: Yazılım ve Kapasite Birimleri – Çoktan Seçmeli Test (12 Soru)",
            description: "Aşağıdaki test sorularını dikkatle okuyarak doğru seçeneği işaretleyiniz:",
            questions: [
                {
                    q: "Bilgisayarın donanım parçalarını yöneten ve çalışmasını sağlayan tüm programlara ne ad verilir?",
                    options: ["Yazıcı", "Yazılım", "Monitör", "Klavye"],
                    answer: 1,
                    explanation: "Fiziksel parçalar donanım, bu parçaları yönetip çalıştıran tüm programlar ise yazılımdır."
                },
                {
                    q: "TÜBİTAK tarafından geliştirilen ve etkileşimli tahtalarda kullanılan milli işletim sistemimiz hangisidir?",
                    options: ["Windows", "macOS", "Pardus", "Android"],
                    answer: 2,
                    explanation: "Pardus, TÜBİTAK tarafından geliştirilen yerli ve milli işletim sistemimizdir."
                },
                {
                    q: "Bilgisayarın hafızasındaki 0 veya 1 elektrik sinyalinden oluşan en küçük veri birimi hangisidir?",
                    options: ["Byte", "Kilobyte", "Megabyte", "Bit"],
                    answer: 3,
                    explanation: "Bilgisayarların makine dilinde kullandığı en küçük veri birimi 0 veya 1 olan Bit'tir."
                },
                {
                    q: "Klavyeden basılan tek bir harf veya boşluk karakteri bellekte ne kadar yer kaplar?",
                    options: ["1 Byte (8 Bit)", "1 KB", "1 MB", "1 GB"],
                    answer: 0,
                    explanation: "8 bit bir araya gelerek 1 Byte oluşturur ve her klavye karakteri hafızada 1 Byte yer tutar."
                },
                {
                    q: "1024 Megabyte (MB) birleştiğinde hangi kapasite birimine eşit olur?",
                    options: ["1 Terabyte", "1 Gigabyte (GB)", "1 Kilobyte", "1 Byte"],
                    answer: 1,
                    explanation: "1024 Megabyte = 1 Gigabyte (GB) eder."
                },
                {
                    q: "Aşağıdakilerden hangisi bir işletim sistemi (sistem yazılımı) DEĞİLDİR?",
                    options: ["Windows", "Paint", "Linux", "Android"],
                    answer: 1,
                    explanation: "Paint bir uygulama yazılımıdır (çizim programı). Windows, Linux ve Android işletim sistemidir."
                },
                {
                    q: "Bilgisayarın içinde bulunan, mekanik parçası olmayan, hızlı ve darbelere dayanıklı dahili depolama birimi hangisidir?",
                    options: ["SSD (Solid State Drive)", "Disket", "CD-ROM", "Manyetik Teyp"],
                    answer: 0,
                    explanation: "SSD (Katı Hâl Sürücüsü), hareketli parçası olmayan son derece hızlı bir dahili depolama birimidir."
                },
                {
                    q: "1024 Gigabyte (GB) kapasiteye eşit olan devasa depolama birimi hangisidir?",
                    options: ["Megabyte", "Kilobyte", "Byte", "Terabyte (TB)"],
                    answer: 3,
                    explanation: "1024 GB = 1 Terabyte (TB)'tır."
                },
                {
                    q: "Dosyalarımızın internet üzerinden uzak ve güvenli sunucularda saklanması yöntemine ne denir?",
                    options: ["Bulut Depolama", "Dahili Depolama", "Optik Sürücü", "RAM"],
                    answer: 0,
                    explanation: "İnternet üzerinden dosya saklama hizmetlerine Bulut Depolama (Cloud Storage) denir."
                },
                {
                    q: "Aşağıdaki kapasite birimlerinden hangisi EN KÜÇÜKTÜR?",
                    options: ["Gigabyte", "Megabyte", "Kilobyte (KB)", "Terabyte"],
                    answer: 2,
                    explanation: "Sıralama: Bit < Byte < KB < MB < GB < TB şeklindedir. Seçenekler arasında en küçüğü Kilobyte (KB)'tır."
                },
                {
                    q: "Bir ödev dosyasını evdeki bilgisayardan okulun akıllı tahtasına taşımak için en pratik harici birim hangisidir?",
                    options: ["USB Flash Bellek", "Kasa Güç Kaynağı", "İşlemci Fanı", "Anakart"],
                    answer: 0,
                    explanation: "USB Flash Bellek, taşınabilir ve pratik bir harici depolama aracıdır."
                },
                {
                    q: "Aşağıdakilerden hangisi bir bulut depolama hizmeti örneğidir?",
                    options: ["Google Drive", "VGA Kablosu", "Ekran Kartı", "Yazıcı Kartuşu"],
                    answer: 0,
                    explanation: "Google Drive, OneDrive ve Dropbox popüler bulut depolama hizmetleridir."
                }
            ]
        }
    ],

    // ========================================================
    // 🎮 4. SINIF İÇİ PEKİŞTİRME OYUNLARI VERİSİ
    // ========================================================
    gameData: {
        wheelQuiz: [
            {
                q: "Bilgisayarın donanım parçalarını yöneten ve çalışmasını sağlayan tüm programlara ne ad verilir?",
                question: "Bilgisayarın donanım parçalarını yöneten ve çalışmasını sağlayan tüm programlara ne ad verilir?",
                options: ["Donanım", "Yazılım", "Anakart", "İşlemci"],
                answer: 1,
                pts: 200,
                points: 200
            },
            {
                q: "TÜBİTAK tarafından geliştirilen ülkemizin yerli ve milli işletim sistemi hangisidir?",
                question: "TÜBİTAK tarafından geliştirilen ülkemizin yerli ve milli işletim sistemi hangisidir?",
                options: ["Windows", "macOS", "Pardus", "Android"],
                answer: 2,
                pts: 250,
                points: 250
            },
            {
                q: "Bilgisayarların ikili sayı sisteminde kullandığı en küçük veri birimi (0 veya 1) hangisidir?",
                question: "Bilgisayarların ikili sayı sisteminde kullandığı en küçük veri birimi (0 veya 1) hangisidir?",
                options: ["Byte", "Bit", "Kilobyte", "Gigabyte"],
                answer: 1,
                pts: 200,
                points: 200
            },
            {
                q: "Klavyeden basılan tek bir harf veya boşluk karakteri bellekte ne kadar yer kaplar?",
                question: "Klavyeden basılan tek bir harf veya boşluk karakteri bellekte ne kadar yer kaplar?",
                options: ["1 Byte (8 Bit)", "1 KB", "1 MB", "1 GB"],
                answer: 0,
                pts: 200,
                points: 200
            },
            {
                q: "1024 Megabyte (MB) birleşerek hangi kapasite birimini oluşturur?",
                question: "1024 Megabyte (MB) birleşerek hangi kapasite birimini oluşturur?",
                options: ["1 Terabyte", "1 Kilobyte", "1 Gigabyte (GB)", "1 Byte"],
                answer: 2,
                pts: 250,
                points: 250
            },
            {
                q: "Bilgisayarın içinde bulunan, mekanik parçası olmayan, hızlı ve darbelere dayanıklı dahili depolama birimi hangisidir?",
                question: "Bilgisayarın içinde bulunan, mekanik parçası olmayan, hızlı ve darbelere dayanıklı dahili depolama birimi hangisidir?",
                options: ["SSD (Solid State Drive)", "Disket", "CD-ROM", "Manyetik Teyp"],
                answer: 0,
                pts: 200,
                points: 200
            },
            {
                q: "Dosyalarımızın internet üzerinden uzak ve güvenli sunucularda saklanması yöntemine ne denir?",
                question: "Dosyalarımızın internet üzerinden uzak ve güvenli sunucularda saklanması yöntemine ne denir?",
                options: ["Bulut Depolama", "Dahili Depolama", "Optik Sürücü", "RAM Bellek"],
                answer: 0,
                pts: 200,
                points: 200
            },
            {
                q: "1024 Gigabyte (GB) kapasiteye eşit olan devasa depolama birimi hangisidir?",
                question: "1024 Gigabyte (GB) kapasiteye eşit olan devasa depolama birimi hangisidir?",
                options: ["Megabyte", "Kilobyte", "Byte", "Terabyte (TB)"],
                answer: 3,
                pts: 250,
                points: 250
            }
        ],

        matchConfig: {
            timer: 90,
            leftTitle: "Bilişim Kavramı 💻",
            rightTitle: "Tanımı & Eşleşmesi 🎯",
            instruction: "💡 <strong>Nasıl Oynanır?</strong> Soldan bir kavram seçin, ardından sağdaki doğru tanımıyla eşleştirin!"
        },
        matchCards: [
            {
                id: 1,
                text: "PARDUS",
                category: "TÜBİTAK Yerli & Milli İşletim Sistemi",
                icon: "fa-solid fa-shield-halved",
                rightIcon: "fa-solid fa-flag"
            },
            {
                id: 2,
                text: "Bit",
                category: "0 veya 1 Değerini Alan En Küçük Veri",
                icon: "fa-solid fa-microchip",
                rightIcon: "fa-solid fa-bolt"
            },
            {
                id: 3,
                text: "1 Byte",
                category: "8 Bit (Klavyedeki Tek Bir Harf)",
                icon: "fa-solid fa-font",
                rightIcon: "fa-solid fa-keyboard"
            },
            {
                id: 4,
                text: "1024 Megabyte",
                category: "1 Gigabyte (GB) Kapasite",
                icon: "fa-solid fa-database",
                rightIcon: "fa-solid fa-film"
            },
            {
                id: 5,
                text: "SSD",
                category: "Hızlı & Flash Yongalı Dahili Disk",
                icon: "fa-solid fa-bolt",
                rightIcon: "fa-solid fa-hard-drive"
            },
            {
                id: 6,
                text: "Bulut Depolama",
                category: "İnternet Sunucularında Güvenli Saklama",
                icon: "fa-solid fa-cloud",
                rightIcon: "fa-solid fa-globe"
            },
            {
                id: 7,
                text: "USB Flash Bellek",
                category: "Cepte Taşınan Popüler Harici Bellek",
                icon: "fa-brands fa-usb",
                rightIcon: "fa-solid fa-box-archive"
            },
            {
                id: 8,
                text: "Microsoft Word",
                category: "Ödev ve Metin Yazma Uygulama Yazılımı",
                icon: "fa-solid fa-file-word",
                rightIcon: "fa-solid fa-pen-nib"
            }
        ],

        reflexStatements: [
            {
                text: "Bilgisayardaki tüm donanımları yöneten ana programa İşletim Sistemi denir.",
                correct: true
            },
            {
                text: "Donanım olmadan yazılımlar tek başına çalışabilir.",
                correct: false
            },
            {
                text: "Pardus, TÜBİTAK tarafından geliştirilen yerli ve milli işletim sistemimizdir.",
                correct: true
            },
            {
                text: "Bilgisayarlar ikili sayı sisteminde yalnızca 0 ve 1 elektrik akımlarını anlar.",
                correct: true
            },
            {
                text: "1 Byte tam olarak 8 Bit'in birleşiminden meydana gelir.",
                correct: true
            },
            {
                text: "1024 Kilobyte (KB) birleşerek 1 Terabyte oluşturur.",
                correct: false
            },
            {
                text: "SSD diskler mekanik disklere (HDD) göre çok daha hızlı ve sessiz çalışır.",
                correct: true
            },
            {
                text: "Bulut depolamadaki dosyalara erişmek için internet bağlantısı gerekir.",
                correct: true
            },
            {
                text: "Word, Excel ve Scratch birer işletim sistemi örneğidir.",
                correct: false
            },
            {
                text: "En küçük depolama kapasitesi birimi Terabyte (TB)'tır.",
                correct: false
            },
            {
                text: "USB bellek, SD kart ve harici diskler taşınabilir depolama birimleridir.",
                correct: true
            },
            {
                text: "1024 Gigabyte (GB) tam 1 Terabyte (TB)'a eşittir.",
                correct: true
            }
        ],

        duelQuestions: [
            {
                q: "Bilgisayarın donanım parçalarını yöneten tüm programlara ne ad verilir?",
                options: ["Donanım", "Yazılım", "Anakart", "İşlemci"],
                answer: 1
            },
            {
                q: "TÜBİTAK tarafından geliştirilen milli işletim sistemimiz hangisidir?",
                options: ["Windows", "macOS", "Pardus", "Android"],
                answer: 2
            },
            {
                q: "Bilgisayarın kullandığı en küçük veri birimi (0 veya 1) hangisidir?",
                options: ["Byte", "Bit", "Kilobyte", "Gigabyte"],
                answer: 1
            },
            {
                q: "1024 Megabyte (MB) birleşerek hangi kapasite birimini oluşturur?",
                options: ["1 Terabyte", "1 Kilobyte", "1 Gigabyte (GB)", "1 Byte"],
                answer: 2
            },
            {
                q: "İnternet üzerinden uzak sunucularda dosya saklama yöntemine ne denir?",
                options: ["Bulut Depolama", "Dahili Depolama", "Optik Disk", "RAM"],
                answer: 0
            },
            {
                q: "Aşağıdakilerden hangisi bir işletim sistemi (sistem yazılımı) DEĞİLDİR?",
                options: ["Windows", "Pardus", "Paint", "Linux"],
                answer: 2
            },
            {
                q: "İçinde hareketli parça olmayan, flash yongalı çok hızlı dahili disk hangisidir?",
                options: ["SSD", "HDD", "CD-ROM", "Disket"],
                answer: 0
            },
            {
                q: "1024 Gigabyte (GB) kapasiteye eşit olan devasa birim hangisidir?",
                options: ["Kilobyte", "Megabyte", "Byte", "Terabyte (TB)"],
                answer: 3
            }
        ]
    },

    extraGames: [
        {
            badge: "Dedektiflik Görevi",
            badgeColor: "text-amber-300",
            title: "Yazılım Dedektifleri",
            desc: "İşletim sistemi ve uygulama yazılımları birbirine karıştı! İpuçlarını incele, delilleri doğru kategoriye teslim et!",
            icon: "fa-solid fa-magnifying-glass",
            iconBg: "bg-amber-500/30 text-amber-300",
            cardGradient: "from-amber-950/90 via-slate-900 to-indigo-950/90",
            border: "border-amber-500/50",
            descColor: "text-amber-100",
            btnText: "Dedektifliğe Başla!",
            btnIcon: "fa-solid fa-user-secret",
            btnGradient: "from-amber-500 via-orange-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/yazilim_dedektifleri.html', 'Yazılım Dedektifleri | Öğretmen Bozok')"
        },
        {
            badge: "Depolama Simülasyonu",
            badgeColor: "text-cyan-300",
            title: "Veriler Nereye Saklandı?",
            desc: "İç depolama (SSD/HDD), harici depolama (USB/SD) ve bulut depolama (Drive/OneDrive) birimlerini doğru senaryolarla eşleştir!",
            icon: "fa-solid fa-hard-drive",
            iconBg: "bg-cyan-500/30 text-cyan-300",
            cardGradient: "from-blue-950/90 via-slate-900 to-cyan-950/90",
            border: "border-cyan-500/50",
            descColor: "text-cyan-100",
            btnText: "Laboratuvarı Düzenle!",
            btnIcon: "fa-solid fa-server",
            btnGradient: "from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/veriler_nereye_saklandi.html', 'Veriler Nereye Saklandı? | Öğretmen Bozok')"
        },
        {
            badge: "Kaçış Odası",
            badgeColor: "text-emerald-300",
            title: "Dijital Kasa: Şifreyi Kır",
            desc: "5 kilitli güvenlik aşamasını tamamla! Yazılım, makine dili, kapasite merdiveni, birim dönüşümü ve depolama şifrelerini çözüp kasayı aç!",
            icon: "fa-solid fa-vault",
            iconBg: "bg-emerald-500/30 text-emerald-300",
            cardGradient: "from-emerald-950/90 via-slate-900 to-teal-950/90",
            border: "border-emerald-500/50",
            descColor: "text-emerald-100",
            btnText: "Kasayı Aç!",
            btnIcon: "fa-solid fa-key",
            btnGradient: "from-emerald-500 via-teal-600 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/dijital_kasa_sifreyi_kir.html', 'Dijital Kasa: Şifreyi Kır | Öğretmen Bozok')"
        },
        {
            badge: "2 Oyunculu Düello",
            badgeColor: "text-pink-300",
            title: "Teknoloji Hafıza Düellosu",
            desc: "Akıllı tahtada iki kişi karşılıklı hafıza kartlarını açın! Yazılım türleri, kapasite birimleri ve depolama eşleşmelerini bulan ekstra hamle kazanır!",
            icon: "fa-solid fa-clone",
            iconBg: "bg-pink-500/30 text-pink-300",
            cardGradient: "from-pink-950/90 via-slate-900 to-purple-950/90",
            border: "border-pink-500/50",
            descColor: "text-pink-100",
            btnText: "Düelloya Başla!",
            btnIcon: "fa-solid fa-gamepad",
            btnGradient: "from-pink-500 via-rose-600 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-black",
            action: "app.openStandaloneGame('games/teknoloji_hafiza_duellosu.html', 'Teknoloji Hafıza Düellosu | Öğretmen Bozok')"
        },
        {
            badge: "İkili Sistem",
            badgeColor: "text-teal-300",
            title: "Robotun Gizli Mesajı",
            desc: "Robo-5 yalnızca 0 ve 1 sinyalleriyle konuşuyor! Makine dili ve ikili örüntü görevlerini tamamla, robotun enerjisini %100 doldur!",
            icon: "fa-solid fa-robot",
            iconBg: "bg-teal-500/30 text-teal-300",
            cardGradient: "from-teal-950/90 via-slate-900 to-blue-950/90",
            border: "border-teal-500/50",
            descColor: "text-teal-100",
            btnText: "Robota Bağlan!",
            btnIcon: "fa-solid fa-bolt",
            btnGradient: "from-teal-500 via-cyan-600 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/robotun_gizli_mesaji.html', 'Robotun Gizli Mesajı | Öğretmen Bozok')"
        },
        {
            badge: "Bilgi Çarkı",
            badgeColor: "text-yellow-300",
            title: "Teknoloji Çarkı",
            desc: "Çarkı çevir, şansına gelen kategorideki (Yazılım, Makine Dili, Kapasite, Depolama) soruları cevaplayıp takımına puan kazandır!",
            icon: "fa-solid fa-dharmachakra",
            iconBg: "bg-yellow-500/30 text-yellow-300",
            cardGradient: "from-amber-950/90 via-slate-900 to-rose-950/90",
            border: "border-yellow-500/50",
            descColor: "text-yellow-100",
            btnText: "Çarkı Çevir!",
            btnIcon: "fa-solid fa-rotate",
            btnGradient: "from-yellow-500 via-amber-500 to-red-600 hover:from-yellow-400 hover:to-red-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/teknoloji_carki.html', 'Teknoloji Çarkı | Öğretmen Bozok')"
        },
        {
            badge: "BT Uzmanı",
            badgeColor: "text-sky-300",
            title: "Bilgisayarı Kurtar",
            desc: "Laboratuvar bilgisayarları arızalandı! Yazılım, makine dili, kapasite ve depolama problemlerini doğru teşhis ederek sistem sağlığını %100 yap!",
            icon: "fa-solid fa-laptop-medical",
            iconBg: "bg-sky-500/30 text-sky-300",
            cardGradient: "from-sky-950/90 via-slate-900 to-indigo-950/90",
            border: "border-sky-500/50",
            descColor: "text-sky-100",
            btnText: "Sistemi Kurtar!",
            btnIcon: "fa-solid fa-wrench",
            btnGradient: "from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-black",
            action: "app.openStandaloneGame('games/bilgisayari_kurtar.html', 'Bilgisayarı Kurtar | Öğretmen Bozok')"
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
            title: "Yazılım, Kapasite ve Depolama Kelime Avı",
            desc: "12x12 harf matrisinde gizlenen 10 yazılım, kapasite ve depolama terimini bul! Her oyunda kelimelerin yerleri rastgele değişir!",
            icon: "fa-solid fa-puzzle-piece",
            iconBg: "bg-amber-500/30 text-amber-300",
            cardGradient: "from-indigo-950/90 via-slate-900 to-purple-950/90",
            border: "border-amber-500/50",
            descColor: "text-amber-100",
            btnText: "Kelime Avına Başla!",
            btnIcon: "fa-solid fa-crosshairs",
            btnGradient: "from-amber-500 via-orange-500 to-purple-600 hover:from-amber-400 hover:to-purple-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/yazilim_kapasite_kelime_avi.html', 'Yazılım, Kapasite ve Depolama Kelime Avı | Öğretmen Bozok')"
        }
    ]
};
