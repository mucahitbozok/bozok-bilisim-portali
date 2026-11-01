// ==========================================
// 1. TEMA GENEL TEKRARI VE DEĞERLENDİRME
// 1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri
// Kapsam: 1., 2., 3., 4., 5. ve 6. Konular (BTY.5.1.1 - BTY.5.1.6)
// Hazırlayan: Öğretmen Bozok
// ==========================================

// --- İNTERAKTİF SLAYT OYUNLARI & DEDEKTİF YARDIMCILARI ---

// Slayt 4: 1. Konu Kullanım Alanı Eşleştirme
window.tema1Slide4Game = {
    idx: 0,
    items: [
        { q: "Hastane randevusu alma (MHRS) ve tahlil sonuçlarını e-Nabız'dan görüntüleme", ans: "Sağlık", icon: "fa-hospital", exp: "🎉 DOĞRU! MHRS ve e-Nabız sağlık alanındaki bilişim teknolojisi uygulamalarıdır." },
        { q: "Uçak ve tren bileti sorgulama, navigasyon ile en kısa yolu bulma", ans: "Ulaşım", icon: "fa-plane-departure", exp: "🎉 DOĞRU! GPS haritaları ve online bilet sistemleri ulaşım alanına girer." },
        { q: "EBA üzerinden canlı ders yapma ve dijital kütüphaneden kitap okuma", ans: "Eğitim", icon: "fa-graduation-cap", exp: "🎉 DOĞRU! EBA, akıllı tahtalar ve dijital kitaplar eğitim alanındadır." },
        { q: "ATM'den para çekme, faturaları mobil uygulama ile anında ödeme", ans: "Bankacılık", icon: "fa-building-columns", exp: "🎉 DOĞRU! Mobil bankacılık ve temassız ödemeler bankacılık/finans alanıdır." },
        { q: "MOBESE kameraları ile şehir güvenliğini ve trafik kontrolünü sağlama", ans: "Güvenlik", icon: "fa-shield-halved", exp: "🎉 DOĞRU! MOBESE ve radar sistemleri güvenlik alanındaki bilişim uygulamalarıdır." }
    ],
    check: function(choice) {
        const item = this.items[this.idx];
        const fb = document.getElementById("t1s4-fb");
        if (!fb) return;
        fb.classList.remove("hidden");
        if (choice === item.ans) {
            if (typeof sounds !== "undefined") sounds.playCorrect();
            fb.className = "p-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-between gap-3 text-left animate-pop bg-emerald-950/90 border-2 border-emerald-500 text-emerald-200 shadow-lg";
            fb.innerHTML = `
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-400 text-2xl shrink-0"></i>
                    <span>${item.exp}</span>
                </div>
                <button onclick="window.tema1Slide4Game.next()" class="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl shadow-md shrink-0 flex items-center gap-1">
                    <span>Sonraki Soru</span> <i class="fa-solid fa-arrow-right"></i>
                </button>
            `;
        } else {
            if (typeof sounds !== "undefined") sounds.playWrong();
            fb.className = "p-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-between gap-3 text-left animate-pop bg-rose-950/90 border-2 border-rose-500 text-rose-200 shadow-lg";
            fb.innerHTML = `
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-circle-xmark text-rose-400 text-2xl shrink-0"></i>
                    <span>⚠️ Tekrar düşün! Bu durum <strong>${item.ans}</strong> alanına aittir.</span>
                </div>
                <button onclick="window.tema1Slide4Game.next()" class="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl border border-slate-600 shrink-0">
                    Geç 👉
                </button>
            `;
        }
    },
    next: function() {
        if (typeof sounds !== "undefined") sounds.playClick();
        this.idx = (this.idx + 1) % this.items.length;
        const item = this.items[this.idx];
        const qEl = document.getElementById("t1s4-q");
        const countEl = document.getElementById("t1s4-counter");
        const fb = document.getElementById("t1s4-fb");
        if (qEl) qEl.innerText = "“" + item.q + "”";
        if (countEl) countEl.innerText = "Soru: " + (this.idx + 1) + " / " + this.items.length;
        if (fb) fb.classList.add("hidden");
    }
};

// Slayt 12: 5. Konu Giriş / Çıkış Donanımı Tanıma
window.tema1Slide12Game = {
    idx: 0,
    items: [
        { name: "Klavye", type: "giris", desc: "Klavye; yazı ve komutları bilgisayara aktaran temel GİRİŞ birimidir." },
        { name: "Monitör (Ekran)", type: "cikis", desc: "Monitör; işlenen verileri bize görsel olarak sunan temel ÇIKIŞ birimidir." },
        { name: "Dokunmatik Ekran", type: "cift", desc: "Dokunmatik ekran; hem görüntüyü verir (Çıkış) hem dokunuşla komut alır (Giriş)!" },
        { name: "Hoparlör & Kulaklık", type: "cikis", desc: "Hoparlör ve kulaklık ses dalgalarını dışa aktaran ÇIKIŞ birimidir." },
        { name: "Mikrofon", type: "giris", desc: "Mikrofon; sesimizi bilgisayara dijital veri olarak gönderen GİRİŞ birimidir." },
        { name: "USB Bellek & Harici Disk", type: "cift", desc: "USB bellek hem içine dosya yazılan hem de okunan ÇİFT YÖNLÜ depolama birimidir." }
    ],
    check: function(selected) {
        const item = this.items[this.idx];
        const fb = document.getElementById("t1s12-fb");
        if (!fb) return;
        fb.classList.remove("hidden");
        if (selected === item.type) {
            if (typeof sounds !== "undefined") sounds.playCorrect();
            fb.className = "p-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-between gap-3 text-left animate-pop bg-emerald-950/90 border-2 border-emerald-500 text-emerald-200 shadow-lg";
            fb.innerHTML = `
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-400 text-2xl shrink-0"></i>
                    <span>🎉 DOĞRU! ${item.desc}</span>
                </div>
                <button onclick="window.tema1Slide12Game.next()" class="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl shadow-md shrink-0 flex items-center gap-1">
                    <span>Sonraki Donanım</span> <i class="fa-solid fa-arrow-right"></i>
                </button>
            `;
        } else {
            if (typeof sounds !== "undefined") sounds.playWrong();
            const typeNames = { giris: "Giriş Birimi", cikis: "Çıkış Birimi", cift: "Hem Giriş Hem Çıkış" };
            fb.className = "p-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-between gap-3 text-left animate-pop bg-rose-950/90 border-2 border-rose-500 text-rose-200 shadow-lg";
            fb.innerHTML = `
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-circle-xmark text-rose-400 text-2xl shrink-0"></i>
                    <span>⚠️ Tekrar düşün! ${item.name} bir <strong>${typeNames[item.type]}</strong>dir.</span>
                </div>
                <button onclick="window.tema1Slide12Game.next()" class="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl border border-slate-600 shrink-0">
                    Geç 👉
                </button>
            `;
        }
    },
    next: function() {
        if (typeof sounds !== "undefined") sounds.playClick();
        this.idx = (this.idx + 1) % this.items.length;
        const item = this.items[this.idx];
        const titleEl = document.getElementById("t1s12-title");
        const countEl = document.getElementById("t1s12-counter");
        const fb = document.getElementById("t1s12-fb");
        if (titleEl) titleEl.innerText = item.name;
        if (countEl) countEl.innerText = "Donanım: " + (this.idx + 1) + " / " + this.items.length;
        if (fb) fb.classList.add("hidden");
    }
};

// Slayt 19: 1. Tema Büyük Final Mini Quiz
window.tema1Slide19Quiz = {
    idx: 0,
    score: 0,
    questions: [
        {
            q: "1. Konu: Aşağıdakilerden hangisi bilişim teknolojilerinin eğitim alanındaki kullanımına örnektir?",
            opts: ["EBA üzerinden ders videosu izlemek", "Hastaneden randevu almak", "Uçak bileti satın almak", "ATM'den para çekmek"],
            ans: 0,
            exp: "Tebrikler! EBA ve akıllı tahta eğitim alanına aittir."
        },
        {
            q: "2. Konu: Bilgisayar başında gözlerimizi dinlendirmek için uyguladığımız '20-20-20 Kuralı'nda ne yapılır?",
            opts: ["Her 20 dakikada 20 saniye boyunca 20 fit (6 metre) uzağa bakılır", "20 saat aralıksız oyun oynanır", "20 dakika boyunca gözler ovuşturulur", "Ekran parlaklığı 20 katına çıkarılır"],
            ans: 0,
            exp: "Tebrikler! 20-20-20 kuralı göz kaslarını gevşetip dinlendirir."
        },
        {
            q: "3. Konu: İnternette yaptığımız aramalar ve ziyaret ettiğimiz sitelerin geride bıraktığı izlere ne denir?",
            opts: ["İşletim Sistemi", "Dijital Ayak İzi", "Kapasite Birimi", "Dosya Uzantısı"],
            ans: 1,
            exp: "Tebrikler! Dijital dünyadaki tüm aktivitelerimiz dijital ayak izimizi oluşturur."
        },
        {
            q: "4. Konu: Yapay zekâ ile insan zekâsı arasındaki en belirgin fark hangisidir?",
            opts: ["İnsanlar duygulara ve vicdana sahiptir, yapay zekâ sahip değildir", "Yapay zekâ canlı bir varlıktır", "İnsanlar veri işleyemez", "İkisi de tamamen aynı şekilde düşünür"],
            ans: 0,
            exp: "Tebrikler! İnsanlar sevgi, vicdan ve empati ile karar verir; yapay zekâ ise duygusuz ve salt veri odaklıdır."
        },
        {
            q: "5. ve 6. Konu: Aşağıdaki dosyalardan hangisi 'resim' dosyası türündedir?",
            opts: ["manzara.docx", "sarki.mp3", "tatil_foto.jpg", "program.exe"],
            ans: 2,
            exp: "Tebrikler! .jpg, .jpeg ve .png popüler resim ve fotoğraf uzantılarıdır."
        }
    ],
    answer: function(chosenIdx) {
        const q = this.questions[this.idx];
        const fb = document.getElementById("t1s19-fb");
        const allBtns = document.querySelectorAll(".t1s19-opt-btn");
        allBtns.forEach(b => b.disabled = true);

        if (chosenIdx === q.ans) {
            if (typeof sounds !== "undefined") sounds.playCorrect();
            this.score += 20;
            const scoreEl = document.getElementById("t1s19-score");
            if (scoreEl) scoreEl.innerText = this.score + " Puan";
            if (fb) {
                fb.className = "p-3 rounded-2xl bg-emerald-950/90 border-2 border-emerald-400 text-emerald-200 text-xs sm:text-sm font-bold animate-pop";
                fb.innerHTML = "🎉 DOĞRU! " + q.exp;
            }
        } else {
            if (typeof sounds !== "undefined") sounds.playWrong();
            if (fb) {
                fb.className = "p-3 rounded-2xl bg-rose-950/90 border-2 border-rose-400 text-rose-200 text-xs sm:text-sm font-bold animate-pop";
                fb.innerHTML = "⚠️ TEKRAR DÜŞÜN! Doğru Cevap: " + q.opts[q.ans] + " olmalıydı.";
            }
        }

        const nextBtn = document.getElementById("t1s19-next");
        if (nextBtn) nextBtn.classList.remove("hidden");
    },
    next: function() {
        if (typeof sounds !== "undefined") sounds.playClick();
        this.idx++;
        if (this.idx < this.questions.length) {
            const q = this.questions[this.idx];
            const qEl = document.getElementById("t1s19-q");
            const countEl = document.getElementById("t1s19-count");
            const fb = document.getElementById("t1s19-fb");
            const optsContainer = document.getElementById("t1s19-options");
            const nextBtn = document.getElementById("t1s19-next");

            if (qEl) qEl.innerText = q.q;
            if (countEl) countEl.innerText = "Soru: " + (this.idx + 1) + " / " + this.questions.length;
            if (fb) fb.classList.add("hidden");
            if (nextBtn) nextBtn.classList.add("hidden");

            if (optsContainer) {
                optsContainer.innerHTML = q.opts.map((opt, i) => `
                    <button onclick="window.tema1Slide19Quiz.answer(${i})" class="t1s19-opt-btn p-3 bg-slate-900/90 hover:bg-indigo-600 border border-slate-700 hover:border-yellow-400 rounded-xl text-left text-xs sm:text-sm font-bold text-white transition-all flex items-center gap-2">
                        <span class="w-6 h-6 rounded-lg bg-indigo-500/30 text-yellow-300 flex items-center justify-center text-xs shrink-0 font-black">${String.fromCharCode(65 + i)}</span>
                        <span>${opt}</span>
                    </button>
                `).join('');
            }
        } else {
            if (typeof sounds !== "undefined") sounds.playFanfare();
            const box = document.getElementById("t1s19-box");
            if (box) {
                box.innerHTML = `
                    <div class="p-6 text-center space-y-4 animate-pop">
                        <div class="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 flex items-center justify-center text-3xl mx-auto shadow-2xl animate-bounce">
                            <i class="fa-solid fa-trophy"></i>
                        </div>
                        <h3 class="text-2xl font-black text-white">BÜYÜK FİNAL TAMAMLANDI! 🏆</h3>
                        <div class="p-4 bg-slate-900/90 rounded-2xl border border-yellow-400/40 inline-block px-8">
                            <div class="text-xs text-slate-400 uppercase font-black">Toplam Skorun:</div>
                            <div class="text-4xl sm:text-5xl font-black text-yellow-400">${this.score} / 100</div>
                        </div>
                        <p class="text-xs sm:text-sm text-indigo-200 max-w-md mx-auto">
                            Tebrikler! 1. Tema'nın tüm konularını başarıyla tamamladın. Artık resmî bir <strong>1. Tema Bilişim Ustası</strong>sın!
                        </p>
                    </div>
                `;
            }
        }
    }
};

window.WEEKtema1_tekrar_CONTENT = {
    weekInfo: {
        weekNumber: "tema1_tekrar",
        topicNumber: "1. Tema Tekrar",
        customLabel: "1. Tema Tekrar",
        title: "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri Genel Tekrarı",
        code: "1. TEMA KAPSAMLI GENEL TEKRARI (1, 2, 3, 4, 5 ve 6. Konular • BTY.5.1.1 - BTY.5.1.6)",
        theme: "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        isPending: false,
        learningGoals: [
            "1. Konu: Bilişim teknolojilerinin günlük yaşamdaki önemi ve temel kullanım alanlarını (eğitim, sağlık, ulaşım, bankacılık, güvenlik, iletişim) özetleyebileceğim.",
            "2. Konu: Bilişimin birey ve topluma olumlu/olumsuz etkilerini değerlendirip ergonomi ve dijital sağlık kurallarını uygulayabileceğim.",
            "3. Konu: Dijital vatandaşlık, dijital kimlik, aktif/pasif dijital ayak izi ve e-Devlet kapısı hizmetlerini ayırt edebileceğim.",
            "4. Konu: Yapay zekâ kavramını, veri işleme mantığını ve insan zekâsı ile farklarını sorgulayabileceğim.",
            "5. Konu: İç/dış donanım, giriş/çıkış birimleri, yazılım türleri, makine dili (0-1) ve kapasite basamaklarını (Bit'ten TB'ye) sıralayabileceğim.",
            "6. Konu: Dosya yapısını (Ad + Nokta + Uzantı), klasör ağacını, kısayolları, arama filtrelerini ve sıkıştırma mantığını uygulayabileceğim."
        ],
        images: {
            cover: "assets/slides/donanim_sistem_kapak.jpg",
            sayfa1: "assets/worksheets/1.4_sayfa1.png",
            sayfa2: "assets/worksheets/1.4_sayfa2.png",
            sayfa3: "assets/worksheets/1.5_2_sayfa1.png",
            sayfa4: "assets/worksheets/1.6_sayfa1.png",
            tekrar: "assets/worksheets/bilgisayar_konusu_tekrar.png",
            cevap: "assets/worksheets/bilgisayar_konusu_tekrar.png",
            defter: "assets/worksheets/bilgisayar_konusu_tekrar.png"
        }
    },

    videos: [],

    // ========================================================
    // 🖥️ 1. İNTERAKTİF DERS SUNUSU (Akıllı Tahta Modu - 20 Slayt)
    // ========================================================
    slides: [
        // Slayt 1 — Kapak
        {
            id: 1,
            title: "1. TEMA BÜYÜK GENEL TEKRARI",
            subtitle: "Bilişim Teknolojilerinin Hayatımızdaki Yeri (1-6. Konular)",
            topic: "1. TEMA: BTY.5.1.1 - BTY.5.1.6 KAPSAMI",
            badge: "🏆 1. TEMA BÜYÜK FİNALİ",
            icon: "fa-solid fa-trophy",
            bgColor: "from-slate-900 via-indigo-950 to-purple-950",
            gradient: "from-slate-900 via-indigo-950 to-purple-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-6xl mx-auto my-auto py-2">
                    <div class="md:col-span-7 space-y-4 text-left">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="px-4 py-1.5 bg-yellow-400/20 text-yellow-300 font-extrabold text-sm sm:text-base uppercase tracking-wider rounded-full border border-yellow-400/40 shadow-sm">
                                5. SINIF BİLİŞİM TEKNOLOJİLERİ VE YAZILIM
                            </span>
                            <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 font-bold text-xs rounded-full border border-cyan-400/30">
                                🌟 1. Tema Dönem Sonu Tekrarı
                            </span>
                        </div>

                        <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-xl">
                            1. TEMA BÜYÜK GENEL TEKRARI 🎓
                        </h1>

                        <div class="p-4 sm:p-5 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-indigo-400/50 shadow-xl space-y-1.5">
                            <div class="flex items-center gap-2 text-yellow-300 font-black text-xs sm:text-sm uppercase tracking-widest">
                                <i class="fa-solid fa-bullseye text-base text-yellow-400"></i>
                                <span>TEMA KAPSAMI:</span>
                            </div>
                            <p class="text-lg sm:text-xl font-extrabold text-white leading-snug">
                                <span class="text-yellow-300 font-black">1. Tema:</span> Bilişim Teknolojilerinin Hayatımızdaki Yeri (1. Konudan 6. Konuya Kadar Tüm Kazanımlar).
                            </p>
                        </div>

                        <div class="p-3.5 bg-indigo-950/80 rounded-2xl border border-indigo-400/30 flex items-start gap-3 shadow-lg">
                            <div class="w-10 h-10 rounded-xl bg-indigo-500/30 text-yellow-300 flex items-center justify-center text-xl shrink-0 mt-0.5">
                                <i class="fa-solid fa-award"></i>
                            </div>
                            <p class="text-xs sm:text-sm font-semibold text-indigo-100 leading-relaxed">
                                “Bu çalışmada 1. Tema boyunca öğrendiğimiz tüm konuları özetleyecek, interaktif tahta sorularını çözecek ve 10 dev turnuva oyunuyla eğleneceğiz!”
                            </p>
                        </div>

                        <div class="pt-1 flex items-center gap-2">
                            <span class="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-yellow-300 font-bold text-xs sm:text-sm shadow-md">
                                <i class="fa-solid fa-chalkboard-user text-base"></i>
                                <span>Öğretmen Bozok • Bozok Bilişim Portalı 2026</span>
                            </span>
                        </div>
                    </div>

                    <div class="md:col-span-5 flex justify-center">
                        <div class="relative w-full max-w-sm aspect-square rounded-3xl p-3 bg-gradient-to-tr from-yellow-400/30 via-indigo-500/20 to-purple-500/30 border-2 border-white/20 shadow-2xl backdrop-blur-sm group">
                            <div class="w-full h-full rounded-2xl overflow-hidden shadow-inner flex flex-col items-center justify-center p-6 bg-slate-900/90 text-center space-y-4">
                                <div class="w-24 h-24 rounded-2xl bg-gradient-to-tr from-amber-400 via-orange-500 to-yellow-300 flex items-center justify-center text-slate-950 text-5xl shadow-2xl animate-bounce">
                                    <i class="fa-solid fa-trophy"></i>
                                </div>
                                <div class="space-y-1">
                                    <h4 class="text-xl font-black text-white">1. Tema Şampiyonası</h4>
                                    <p class="text-xs text-slate-400">6 Konu • 20 Slayt • 10 Oyun Arenası</p>
                                </div>
                                <div class="px-4 py-1.5 bg-amber-500/20 border border-amber-400/40 text-yellow-300 font-black text-xs rounded-full">
                                    🚀 Büyük Tekrar Başlıyor
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 2 — Tema Yol Haritası (1-6. Konular)
        {
            id: 2,
            title: "1. TEMA YOL HARİTASI",
            subtitle: "Hangi Konuları Öğrendik?",
            topic: "TEMA GENEL BAKIŞ",
            badge: "KONU LİSTESİ",
            icon: "fa-solid fa-map-location-dot",
            bgColor: "from-slate-900 via-indigo-950 to-blue-950",
            gradient: "from-slate-900 via-indigo-950 to-blue-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 text-left my-auto py-2">
                    <div class="text-center space-y-1">
                        <h2 class="text-2xl sm:text-3xl font-black text-white">1. Tema'da Neler Öğrendik? 🗺️</h2>
                        <p class="text-xs sm:text-sm text-indigo-200">1. Temamız bilişim teknolojilerini tanımak, etkilerini kavramak ve bilgisayarı ustaca kullanmak üzerine kuruluydu.</p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                        <div class="p-4 bg-slate-850/90 rounded-2xl border border-blue-500/40 space-y-1.5">
                            <div class="flex items-center gap-2 text-blue-400 font-black text-sm">
                                <span class="w-6 h-6 rounded-lg bg-blue-500/30 flex items-center justify-center text-xs">1</span>
                                <h4>Bilişim Teknolojileri</h4>
                            </div>
                            <p class="text-xs text-slate-300 leading-relaxed">Temel kavramlar, geçmişten günümüze gelişim ve 6 büyük kullanım alanı (eğitim, sağlık vb.).</p>
                        </div>
                        <div class="p-4 bg-slate-850/90 rounded-2xl border border-emerald-500/40 space-y-1.5">
                            <div class="flex items-center gap-2 text-emerald-400 font-black text-sm">
                                <span class="w-6 h-6 rounded-lg bg-emerald-500/30 flex items-center justify-center text-xs">2</span>
                                <h4>Bilişimin Etkileri & Sağlık</h4>
                            </div>
                            <p class="text-xs text-slate-300 leading-relaxed">Olumlu ve olumsuz etkiler, ergonomik oturuş kuralları, 20-20-20 kuralı ve bağımlılık önlemleri.</p>
                        </div>
                        <div class="p-4 bg-slate-850/90 rounded-2xl border border-cyan-500/40 space-y-1.5">
                            <div class="flex items-center gap-2 text-cyan-400 font-black text-sm">
                                <span class="w-6 h-6 rounded-lg bg-cyan-500/30 flex items-center justify-center text-xs">3</span>
                                <h4>Dijital Vatandaşlık</h4>
                            </div>
                            <p class="text-xs text-slate-300 leading-relaxed">Dijital kimlik, aktif/pasif dijital ayak izi ve e-Devlet (turkiye.gov.tr) kamu hizmetleri.</p>
                        </div>
                        <div class="p-4 bg-slate-850/90 rounded-2xl border border-purple-500/40 space-y-1.5">
                            <div class="flex items-center gap-2 text-purple-400 font-black text-sm">
                                <span class="w-6 h-6 rounded-lg bg-purple-500/30 flex items-center justify-center text-xs">4</span>
                                <h4>Yapay Zekâ Dünyası</h4>
                            </div>
                            <p class="text-xs text-slate-300 leading-relaxed">Veri → Karar zinciri, insan zekâsı vs yapay zekâ, otonom araçlar ve etik sorumluluk.</p>
                        </div>
                        <div class="p-4 bg-slate-850/90 rounded-2xl border border-amber-500/40 space-y-1.5">
                            <div class="flex items-center gap-2 text-amber-400 font-black text-sm">
                                <span class="w-6 h-6 rounded-lg bg-amber-500/30 flex items-center justify-center text-xs">5</span>
                                <h4>Donanım & Yazılım</h4>
                            </div>
                            <p class="text-xs text-slate-300 leading-relaxed">İç/dış donanım, giriş/çıkış aygıtları, işletim sistemi vs uygulama yazılımları, 0-1 makine dili ve kapasite merdiveni.</p>
                        </div>
                        <div class="p-4 bg-slate-850/90 rounded-2xl border border-rose-500/40 space-y-1.5">
                            <div class="flex items-center gap-2 text-rose-400 font-black text-sm">
                                <span class="w-6 h-6 rounded-lg bg-rose-500/30 flex items-center justify-center text-xs">6</span>
                                <h4>Dosya & Klasör Yönetimi</h4>
                            </div>
                            <p class="text-xs text-slate-300 leading-relaxed">Dosya Adı + Nokta + Uzantı yapısı, klasör hiyerarşisi, kısayollar (Ctrl+C, Ctrl+V), arama (*) ve ZIP sıkıştırma.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 3 — 1. Konu Özeti (Bilişim Teknolojileri ve Kullanım Alanları)
        {
            id: 3,
            title: "1. KONU ÖZETİ: BİLİŞİM TEKNOLOJİLERİ",
            subtitle: "BTY.5.1.1 Kazanımı",
            topic: "1. KONU TEKRARI",
            badge: "1. KONU",
            icon: "fa-solid fa-laptop",
            bgColor: "from-slate-900 via-blue-950 to-indigo-900",
            gradient: "from-slate-900 via-blue-950 to-indigo-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 text-left my-auto py-2">
                    <div class="border-b border-blue-500/30 pb-3 flex items-center justify-between">
                        <div>
                            <span class="text-xs font-bold text-blue-400 uppercase tracking-wider">KAZANIM: BTY.5.1.1</span>
                            <h2 class="text-2xl font-black text-white">Bilişim Teknolojileri ve Kullanım Alanları</h2>
                        </div>
                        <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-xl text-xs font-extrabold border border-blue-500/30">1. Konu</span>
                    </div>

                    <div class="p-4 bg-slate-850/80 rounded-2xl border border-slate-700 space-y-2">
                        <h4 class="font-bold text-yellow-300 text-sm">💡 Bilişim Teknolojisi Nedir?</h4>
                        <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                            Bilginin toplanması, işlenmesi, saklanması ve bir yerden başka bir yere elektronik araçlarla iletilmesini sağlayan tüm teknolojik araçlara <strong>Bilişim Teknolojileri (BT)</strong> denir.
                        </p>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                        <div class="p-3 bg-slate-900 rounded-xl border border-blue-500/30">
                            <strong class="text-blue-300 block mb-1"><i class="fa-solid fa-graduation-cap mr-1"></i>Eğitim</strong>
                            <span>EBA, akıllı tahta, dijital kütüphaneler, online sınavlar.</span>
                        </div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-emerald-500/30">
                            <strong class="text-emerald-300 block mb-1"><i class="fa-solid fa-heart-pulse mr-1"></i>Sağlık</strong>
                            <span>MHRS randevu, e-Nabız, tomografi/MR, dijital tahlil.</span>
                        </div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-cyan-500/30">
                            <strong class="text-cyan-300 block mb-1"><i class="fa-solid fa-plane mr-1"></i>Ulaşım</strong>
                            <span>Navigasyon/GPS, online bilet, radar ve otopilot.</span>
                        </div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-amber-500/30">
                            <strong class="text-amber-300 block mb-1"><i class="fa-solid fa-building-columns mr-1"></i>Bankacılık</strong>
                            <span>ATM, mobil bankacılık, temassız kart, havale/EFT.</span>
                        </div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-purple-500/30">
                            <strong class="text-purple-300 block mb-1"><i class="fa-solid fa-shield-halved mr-1"></i>Güvenlik</strong>
                            <span>MOBESE kameraları, alarm sistemleri, yüz tanıma.</span>
                        </div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-pink-500/30">
                            <strong class="text-pink-300 block mb-1"><i class="fa-solid fa-comments mr-1"></i>İletişim</strong>
                            <span>E-posta, anlık mesajlaşma, görüntülü arama.</span>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 4 — 1. Konu İnteraktif Turnuva Sorusu
        {
            id: 4,
            title: "1. KONU İNTERAKTİF SORUSU",
            subtitle: "Hangi Kullanım Alanı?",
            topic: "İNTERAKTİF DEDEKTİF",
            badge: "SORU & ETKİNLİK",
            icon: "fa-solid fa-circle-question",
            bgColor: "from-slate-900 via-blue-950 to-indigo-950",
            gradient: "from-slate-900 via-blue-950 to-indigo-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-5 text-center my-auto py-2">
                    <div class="space-y-1">
                        <span id="t1s4-counter" class="px-3 py-1 bg-yellow-400/20 text-yellow-300 font-black rounded-full text-xs uppercase border border-yellow-400/30">
                            Soru: 1 / 5
                        </span>
                        <h3 class="text-xl sm:text-2xl font-black text-white">Bu Senaryo Hangi Kullanım Alanına Aittir?</h3>
                    </div>

                    <div class="p-5 bg-slate-850 rounded-2xl border-2 border-indigo-500/40 shadow-xl">
                        <p id="t1s4-q" class="text-base sm:text-lg font-bold text-yellow-300">
                            “Hastane randevusu alma (MHRS) ve tahlil sonuçlarını e-Nabız'dan görüntüleme”
                        </p>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-w-2xl mx-auto">
                        <button onclick="window.tema1Slide4Game.check('Sağlık')" class="p-3 bg-slate-800 hover:bg-emerald-600 rounded-xl border border-slate-700 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2">
                            <i class="fa-solid fa-heart-pulse text-emerald-400"></i> Sağlık
                        </button>
                        <button onclick="window.tema1Slide4Game.check('Eğitim')" class="p-3 bg-slate-800 hover:bg-blue-600 rounded-xl border border-slate-700 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2">
                            <i class="fa-solid fa-graduation-cap text-blue-400"></i> Eğitim
                        </button>
                        <button onclick="window.tema1Slide4Game.check('Ulaşım')" class="p-3 bg-slate-800 hover:bg-cyan-600 rounded-xl border border-slate-700 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2">
                            <i class="fa-solid fa-plane text-cyan-400"></i> Ulaşım
                        </button>
                        <button onclick="window.tema1Slide4Game.check('Bankacılık')" class="p-3 bg-slate-800 hover:bg-amber-600 rounded-xl border border-slate-700 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2">
                            <i class="fa-solid fa-building-columns text-amber-400"></i> Bankacılık
                        </button>
                        <button onclick="window.tema1Slide4Game.check('Güvenlik')" class="p-3 bg-slate-800 hover:bg-purple-600 rounded-xl border border-slate-700 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2">
                            <i class="fa-solid fa-shield-halved text-purple-400"></i> Güvenlik
                        </button>
                        <button onclick="window.tema1Slide4Game.check('İletişim')" class="p-3 bg-slate-800 hover:bg-pink-600 rounded-xl border border-slate-700 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2">
                            <i class="fa-solid fa-comments text-pink-400"></i> İletişim
                        </button>
                    </div>

                    <div id="t1s4-fb" class="hidden min-h-[50px]"></div>
                </div>
            `
        },

        // Slayt 5 — 2. Konu Özeti (Bilişimin Etkileri, Ergonomi & Dijital Sağlık)
        {
            id: 5,
            title: "2. KONU ÖZETİ: ETKİLER & DİJİTAL SAĞLIK",
            subtitle: "BTY.5.1.2 Kazanımı",
            topic: "2. KONU TEKRARI",
            badge: "2. KONU",
            icon: "fa-solid fa-heart-pulse",
            bgColor: "from-slate-900 via-emerald-950 to-slate-900",
            gradient: "from-slate-900 via-emerald-950 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 text-left my-auto py-2">
                    <div class="border-b border-emerald-500/30 pb-3 flex items-center justify-between">
                        <div>
                            <span class="text-xs font-bold text-emerald-400 uppercase tracking-wider">KAZANIM: BTY.5.1.2</span>
                            <h2 class="text-2xl font-black text-white">Bilişimin Etkileri, Ergonomi ve Dijital Sağlık</h2>
                        </div>
                        <span class="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-xl text-xs font-extrabold border border-emerald-500/30">2. Konu</span>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="p-4 bg-emerald-950/40 rounded-2xl border border-emerald-500/40 space-y-2">
                            <h4 class="font-black text-emerald-300 text-sm flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-emerald-400"></i> Olumlu Etkileri
                            </h4>
                            <ul class="text-xs text-slate-200 space-y-1">
                                <li>• Bilgiye hızlı ve kolay ulaşım sağlar.</li>
                                <li>• Zamandan ve enerjiden tasarruf ettirir.</li>
                                <li>• Mesafeleri ortadan kaldırarak hızlı haberleşmeyi sağlar.</li>
                                <li>• İşlemleri dijitalleştirerek maliyetleri düşürür.</li>
                            </ul>
                        </div>
                        <div class="p-4 bg-rose-950/40 rounded-2xl border border-rose-500/40 space-y-2">
                            <h4 class="font-black text-rose-300 text-sm flex items-center gap-2">
                                <i class="fa-solid fa-triangle-exclamation text-rose-400"></i> Olumsuz Etkileri (Riskler)
                            </h4>
                            <ul class="text-xs text-slate-200 space-y-1">
                                <li>• Hareketsizlik, obezite ve duruş bozuklukları.</li>
                                <li>• Göz kuruluğu ve görme yorgunluğu.</li>
                                <li>• Teknoloji ve oyun bağımlılığı.</li>
                                <li>• Sosyal bağların ve yüz yüze iletişimin zayıflaması.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="p-3.5 bg-slate-850 rounded-2xl border border-yellow-500/30 flex items-center justify-between flex-wrap gap-2 text-xs">
                        <div class="flex items-center gap-2">
                            <i class="fa-solid fa-eye text-yellow-400 text-lg"></i>
                            <span class="text-yellow-200 font-bold">20-20-20 Kuralı:</span>
                            <span class="text-slate-300">Her 20 dakikada bir, 20 saniye boyunca, 20 fit (6 metre) uzağa bakarak gözlerini dinlendir!</span>
                        </div>
                        <span class="px-2 py-0.5 bg-yellow-400/20 text-yellow-300 font-bold rounded">Ergonomi Kuralı</span>
                    </div>
                </div>
            `
        },

        // Slayt 6 — 2. Konu İnteraktif Soru (Ergonomi Dedektifi)
        {
            id: 6,
            title: "2. KONU İNTERAKTİF SORUSU",
            subtitle: "Ergonomi ve Sağlık Dedektifi",
            topic: "DİJİTAL SAĞLIK",
            badge: "DEDEKTİF SORUSU",
            icon: "fa-solid fa-user-doctor",
            bgColor: "from-slate-900 via-emerald-950 to-teal-950",
            gradient: "from-slate-900 via-emerald-950 to-teal-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 text-center my-auto py-2">
                    <span class="px-3 py-1 bg-emerald-400/20 text-emerald-300 font-black rounded-full text-xs uppercase border border-emerald-400/30">
                        Sağlık & Ergonomi Testi
                    </span>
                    <h3 class="text-xl sm:text-2xl font-black text-white">Aşağıdaki davranışlardan hangisi DOĞRU bir ergonomi kuralıdır?</h3>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto pt-2">
                        <button onclick="this.classList.add('bg-rose-600', 'text-white'); alert('⚠️ YANLIŞ! Ekran tam göz hizasında veya biraz altında olmalıdır.');" class="p-4 bg-slate-850 hover:bg-slate-800 rounded-2xl border border-slate-700 text-left text-xs sm:text-sm font-semibold text-slate-200 transition-all flex items-center gap-3">
                            <span class="w-8 h-8 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center font-black shrink-0">A</span>
                            <span>Monitöre çok yakından (10 cm) bakmak</span>
                        </button>
                        <button onclick="this.classList.add('bg-emerald-600', 'text-white'); alert('🎉 TEBRİKLER! Sırt dik olmalı, ayaklar yere basmalı ve ekranla 50-70 cm mesafe korunmalıdır.');" class="p-4 bg-slate-850 hover:bg-slate-800 rounded-2xl border border-slate-700 text-left text-xs sm:text-sm font-semibold text-slate-200 transition-all flex items-center gap-3">
                            <span class="w-8 h-8 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center font-black shrink-0">B</span>
                            <span>Sırt dik, kollar 90 derece ve ekran göz mesafesinde oturmak</span>
                        </button>
                        <button onclick="this.classList.add('bg-rose-600', 'text-white'); alert('⚠️ YANLIŞ! Saatlerce kıpırdamamak bel ve boyun fıtığına yol açar.');" class="p-4 bg-slate-850 hover:bg-slate-800 rounded-2xl border border-slate-700 text-left text-xs sm:text-sm font-semibold text-slate-200 transition-all flex items-center gap-3">
                            <span class="w-8 h-8 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center font-black shrink-0">C</span>
                            <span>Hiç mola vermeden 5 saat boyunca aralıksız oyun oynamak</span>
                        </button>
                        <button onclick="this.classList.add('bg-rose-600', 'text-white'); alert('⚠️ YANLIŞ! Ayaklar havada sallanmamalı, yere düz basmalıdır.');" class="p-4 bg-slate-850 hover:bg-slate-800 rounded-2xl border border-slate-700 text-left text-xs sm:text-sm font-semibold text-slate-200 transition-all flex items-center gap-3">
                            <span class="w-8 h-8 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center font-black shrink-0">D</span>
                            <span>Koltukta kambur şekilde ayakları masaya uzatarak oturmak</span>
                        </button>
                    </div>
                </div>
            `
        },

        // Slayt 7 — 3. Konu Özeti (Dijital Vatandaşlık & e-Devlet)
        {
            id: 7,
            title: "3. KONU ÖZETİ: DİJİTAL VATANDAŞLIK",
            subtitle: "BTY.5.1.3 Kazanımı",
            topic: "3. KONU TEKRARI",
            badge: "3. KONU",
            icon: "fa-solid fa-id-card",
            bgColor: "from-slate-900 via-cyan-950 to-blue-950",
            gradient: "from-slate-900 via-cyan-950 to-blue-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 text-left my-auto py-2">
                    <div class="border-b border-cyan-500/30 pb-3 flex items-center justify-between">
                        <div>
                            <span class="text-xs font-bold text-cyan-400 uppercase tracking-wider">KAZANIM: BTY.5.1.3</span>
                            <h2 class="text-2xl font-black text-white">Dijital Vatandaşlık, Ayak İzi ve e-Devlet</h2>
                        </div>
                        <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-xl text-xs font-extrabold border border-cyan-500/30">3. Konu</span>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div class="p-3.5 bg-slate-850 rounded-2xl border border-cyan-400/30 space-y-1">
                            <strong class="text-cyan-300 text-sm block">1. Dijital Kimlik</strong>
                            <p class="text-slate-300 leading-relaxed">İnternette kullandığımız profil fotoğrafları, kullanıcı adları, biyografiler ve bizi sanalda temsil eden bilgilerdir.</p>
                        </div>
                        <div class="p-3.5 bg-slate-850 rounded-2xl border border-amber-400/30 space-y-1">
                            <strong class="text-yellow-300 text-sm block">2. Dijital Ayak İzi</strong>
                            <p class="text-slate-300 leading-relaxed"><strong>Aktif:</strong> Kendi paylaştığımız fotoğraf ve yorumlar.<br><strong>Pasif:</strong> Ziyaret ettiğimiz sitelerin IP ve çerez kayıtlarıdır.</p>
                        </div>
                        <div class="p-3.5 bg-slate-850 rounded-2xl border border-emerald-400/30 space-y-1">
                            <strong class="text-emerald-300 text-sm block">3. e-Devlet (turkiye.gov.tr)</strong>
                            <p class="text-slate-300 leading-relaxed">Kamu kurumlarının işlemlerini internetten sıra beklemeden hızlıca yapmamızı sağlayan güvenli portaldır.</p>
                        </div>
                    </div>

                    <div class="p-3.5 bg-slate-900 rounded-2xl border border-slate-700 text-xs text-slate-300 leading-relaxed">
                        <strong class="text-white block font-bold mb-1">🌟 İyi Bir Dijital Vatandaş:</strong>
                        Başkalarının haklarına saygı duyar, siber zorbalık yapmaz, doğruluğundan emin olmadığı haberleri yaymaz ve güçlü şifreler kullanır.
                    </div>
                </div>
            `
        },

        // Slayt 8 — 3. Konu İnteraktif Soru (Ayak İzi Dedektifi)
        {
            id: 8,
            title: "3. KONU İNTERAKTİF SORUSU",
            subtitle: "Aktif mi, Pasif mi?",
            topic: "DİJİTAL AYAK İZİ",
            badge: "AYAK İZİ DEDEKTİFİ",
            icon: "fa-solid fa-shoe-prints",
            bgColor: "from-slate-900 via-indigo-950 to-cyan-950",
            gradient: "from-slate-900 via-indigo-950 to-cyan-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 text-center my-auto py-2">
                    <span class="px-3 py-1 bg-cyan-400/20 text-cyan-300 font-black rounded-full text-xs uppercase border border-cyan-400/30">
                        Ayak İzi Sınıflandırması
                    </span>
                    <h3 class="text-xl sm:text-2xl font-black text-white">Bir sosyal medya uygulamasına fotoğraf yükleyip altına yorum yazmak hangi ayak izidir?</h3>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-3">
                        <button onclick="this.classList.add('bg-emerald-600', 'text-white'); alert('🎉 DOĞRU! Kendi isteğimizle bilerek paylaştığımız her içerik AKTİF DİJİTAL AYAK İZİDİR.');" class="p-5 bg-slate-850 hover:bg-slate-800 rounded-2xl border-2 border-emerald-500/50 text-white font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-lg">
                            <i class="fa-solid fa-circle-check text-emerald-400 text-xl"></i>
                            <span>AKTİF DİJİTAL AYAK İZİ</span>
                        </button>
                        <button onclick="this.classList.add('bg-rose-600', 'text-white'); alert('⚠️ TEKRAR DÜŞÜN! Pasif ayak izi, kullanıcının farkında olmadan arka planda (çerezler, IP vb.) bırakılan izlerdir.');" class="p-5 bg-slate-850 hover:bg-slate-800 rounded-2xl border-2 border-rose-500/50 text-white font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-lg">
                            <i class="fa-solid fa-circle-xmark text-rose-400 text-xl"></i>
                            <span>PASİF DİJİTAL AYAK İZİ</span>
                        </button>
                    </div>
                </div>
            `
        },

        // Slayt 9 — 4. Konu Özeti (Yapay Zekâda Temel Kavramlar)
        {
            id: 9,
            title: "4. KONU ÖZETİ: YAPAY ZEKÂ DÜNYASI",
            subtitle: "BTY.5.1.4 Kazanımı",
            topic: "4. KONU TEKRARI",
            badge: "4. KONU",
            icon: "fa-solid fa-robot",
            bgColor: "from-slate-900 via-purple-950 to-indigo-950",
            gradient: "from-slate-900 via-purple-950 to-indigo-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 text-left my-auto py-2">
                    <div class="border-b border-purple-500/30 pb-3 flex items-center justify-between">
                        <div>
                            <span class="text-xs font-bold text-purple-400 uppercase tracking-wider">KAZANIM: BTY.5.1.4</span>
                            <h2 class="text-2xl font-black text-white">Yapay Zekâ ve Temel Çalışma Mantığı</h2>
                        </div>
                        <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-xl text-xs font-extrabold border border-purple-500/30">4. Konu</span>
                    </div>

                    <div class="p-4 bg-slate-850/80 rounded-2xl border border-purple-500/30 space-y-2">
                        <h4 class="font-bold text-yellow-300 text-sm">🤖 Yapay Zekâ (AI) Nedir?</h4>
                        <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                            İnsanların düşünme, öğrenme, örüntü tanıma ve karar verme becerilerini bilgisayar programları aracılığıyla taklit eden ileri teknolojidir.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div class="p-3.5 bg-slate-900 rounded-xl border border-purple-400/30 space-y-1">
                            <strong class="text-purple-300 font-bold block">İnsan Zekâsı:</strong>
                            <p class="text-slate-300">• Deneyimlerle ve duyularla öğrenir.<br>• Duygulara, vicdana ve hayal gücüne sahiptir.<br>• Yorulur, acıkır ve dinlenmeye ihtiyaç duyar.</p>
                        </div>
                        <div class="p-3.5 bg-slate-900 rounded-xl border border-cyan-400/30 space-y-1">
                            <strong class="text-cyan-300 font-bold block">Yapay Zekâ:</strong>
                            <p class="text-slate-300">• Büyük veri kümeleriyle (Data) öğrenir.<br>• Duyguları ve hisleri yoktur, salt mantıksaldır.<br>• Milyarlarca veriyi saniyeler içinde hatasız hesaplar.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 10 — 4. Konu İnteraktif Soru
        {
            id: 10,
            title: "4. KONU İNTERAKTİF SORUSU",
            subtitle: "Yapay Zekâ Örneği",
            topic: "YAPAY ZEKÂ ANALİZİ",
            badge: "SORU & ETKİNLİK",
            icon: "fa-solid fa-microchip",
            bgColor: "from-slate-900 via-purple-950 to-slate-900",
            gradient: "from-slate-900 via-purple-950 to-slate-900",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 text-center my-auto py-2">
                    <span class="px-3 py-1 bg-purple-400/20 text-purple-300 font-black rounded-full text-xs uppercase border border-purple-400/30">
                        Yapay Zekâ Algılama
                    </span>
                    <h3 class="text-xl sm:text-2xl font-black text-white">Aşağıdakilerden hangisi bir yapay zekâ uygulamasına örnektir?</h3>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto pt-2">
                        <button onclick="this.classList.add('bg-emerald-600', 'text-white'); alert('🎉 TEBRİKLER! Otonom araçlar kameralardan gelen görüntüleri işleyerek durur ve karar verir.');" class="p-4 bg-slate-850 hover:bg-slate-800 rounded-2xl border border-slate-700 text-left text-xs sm:text-sm font-semibold text-slate-200 transition-all flex items-center gap-3">
                            <span class="w-8 h-8 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center font-black shrink-0">A</span>
                            <span>Sürücüsüz (otonom) aracın kırmızı ışıkta kendi kendine durması</span>
                        </button>
                        <button onclick="this.classList.add('bg-rose-600', 'text-white'); alert('⚠️ YANLIŞ! Bu işlem basit bir elektrik anahtarı mekanizmasıdır.');" class="p-4 bg-slate-850 hover:bg-slate-800 rounded-2xl border border-slate-700 text-left text-xs sm:text-sm font-semibold text-slate-200 transition-all flex items-center gap-3">
                            <span class="w-8 h-8 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center font-black shrink-0">B</span>
                            <span>Odanın ışık düğmesine basınca lambanın yanması</span>
                        </button>
                        <button onclick="this.classList.add('bg-rose-600', 'text-white'); alert('⚠️ YANLIŞ! Bu geleneksel bir mekanik alettir.');" class="p-4 bg-slate-850 hover:bg-slate-800 rounded-2xl border border-slate-700 text-left text-xs sm:text-sm font-semibold text-slate-200 transition-all flex items-center gap-3">
                            <span class="w-8 h-8 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center font-black shrink-0">C</span>
                            <span>Kurşun kalemi kalemtıraşla açmak</span>
                        </button>
                        <button onclick="this.classList.add('bg-rose-600', 'text-white'); alert('⚠️ YANLIŞ! Deftere yazı yazmak fiziksel bir insan eylemidir.');" class="p-4 bg-slate-850 hover:bg-slate-800 rounded-2xl border border-slate-700 text-left text-xs sm:text-sm font-semibold text-slate-200 transition-all flex items-center gap-3">
                            <span class="w-8 h-8 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center font-black shrink-0">D</span>
                            <span>Defter sayfasına el yazısıyla not almak</span>
                        </button>
                    </div>
                </div>
            `
        },

        // Slayt 11 — 5. Konu - 1 Özeti (Bilgisayar, İç & Dış Donanım)
        {
            id: 11,
            title: "5. KONU - 1 ÖZETİ: DONANIM BİRİMLERİ",
            subtitle: "BTY.5.1.5 Kazanımı",
            topic: "5. KONU - 1 TEKRARI",
            badge: "5. KONU - 1",
            icon: "fa-solid fa-server",
            bgColor: "from-slate-900 via-indigo-950 to-blue-900",
            gradient: "from-slate-900 via-indigo-950 to-blue-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 text-left my-auto py-2">
                    <div class="border-b border-indigo-500/30 pb-3 flex items-center justify-between">
                        <div>
                            <span class="text-xs font-bold text-indigo-400 uppercase tracking-wider">KAZANIM: BTY.5.1.5</span>
                            <h2 class="text-2xl font-black text-white">Donanım: İç Donanım, Dış Donanım ve Birimler</h2>
                        </div>
                        <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-xl text-xs font-extrabold border border-indigo-500/30">5. Konu - 1</span>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div class="p-4 bg-slate-850 rounded-2xl border border-indigo-400/30 space-y-1">
                            <strong class="text-indigo-300 text-sm block"><i class="fa-solid fa-cube mr-1"></i>İç Donanım (Kasa İçi):</strong>
                            <p class="text-slate-300 leading-relaxed">• <strong>İşlemci (CPU):</strong> Bilgisayarın beynidir, hesaplamaları yapar.<br>• <strong>Anakart:</strong> Parçaları birbirine bağlayan ana omurgadır.<br>• <strong>RAM Bellek:</strong> Geçici hafızadır, elektrik kesilince silinir.<br>• <strong>Sabit Disk (SSD/HDD):</strong> Kalıcı depolama merkezidir.</p>
                        </div>
                        <div class="p-4 bg-slate-850 rounded-2xl border border-cyan-400/30 space-y-1">
                            <strong class="text-cyan-300 text-sm block"><i class="fa-solid fa-network-wired mr-1"></i>Dış Donanım (Çevre Birimleri):</strong>
                            <p class="text-slate-300 leading-relaxed">• <strong>Giriş:</strong> Klavye, fare, mikrofon, kamera, tarayıcı.<br>• <strong>Çıkış:</strong> Monitör, hoparlör, kulaklık, yazıcı, projeksiyon.<br>• <strong>Çift Yönlü:</strong> Dokunmatik ekran, USB bellek, harici disk.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 12 — 5. Konu - 1 İnteraktif Donanım Tanıma
        {
            id: 12,
            title: "5. KONU - 1 İNTERAKTİF SORUSU",
            subtitle: "Giriş mi, Çıkış mı, Çift Yönlü mü?",
            topic: "DONANIM SINIFLANDIRMA",
            badge: "İNTERAKTİF OYUN",
            icon: "fa-solid fa-gamepad",
            bgColor: "from-slate-900 via-indigo-950 to-slate-900",
            gradient: "from-slate-900 via-indigo-950 to-slate-900",
            content: `
                <div class="max-w-4xl mx-auto space-y-5 text-center my-auto py-2">
                    <div class="space-y-1">
                        <span id="t1s12-counter" class="px-3 py-1 bg-yellow-400/20 text-yellow-300 font-black rounded-full text-xs uppercase border border-yellow-400/30">
                            Donanım: 1 / 6
                        </span>
                        <h3 class="text-xl sm:text-2xl font-black text-white">Bu Donanım Verinin Yönüne Göre Hangi Birimdir?</h3>
                    </div>

                    <div class="p-6 bg-slate-850 rounded-2xl border-2 border-indigo-500/40 shadow-xl inline-block px-12">
                        <div class="text-3xl font-black text-yellow-300 tracking-wide" id="t1s12-title">
                            Klavye
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto">
                        <button onclick="window.tema1Slide12Game.check('giris')" class="p-4 bg-slate-800 hover:bg-emerald-600 rounded-2xl border border-slate-700 text-white font-bold text-sm transition-all flex items-center justify-center gap-2">
                            <i class="fa-solid fa-arrow-right-to-bracket text-emerald-400"></i> Giriş Birimi
                        </button>
                        <button onclick="window.tema1Slide12Game.check('cikis')" class="p-4 bg-slate-800 hover:bg-blue-600 rounded-2xl border border-slate-700 text-white font-bold text-sm transition-all flex items-center justify-center gap-2">
                            <i class="fa-solid fa-desktop text-blue-400"></i> Çıkış Birimi
                        </button>
                        <button onclick="window.tema1Slide12Game.check('cift')" class="p-4 bg-slate-800 hover:bg-purple-600 rounded-2xl border border-slate-700 text-white font-bold text-sm transition-all flex items-center justify-center gap-2">
                            <i class="fa-solid fa-arrows-left-right text-purple-400"></i> Hem Giriş Hem Çıkış
                        </button>
                    </div>

                    <div id="t1s12-fb" class="hidden min-h-[50px]"></div>
                </div>
            `
        },

        // Slayt 13 — 5. Konu - 2 Özeti (Yazılım Türleri & Makine Dili)
        {
            id: 13,
            title: "5. KONU - 2 ÖZETİ: YAZILIM & MAKİNE DİLİ",
            subtitle: "BTY.5.1.5 Kazanımı",
            topic: "5. KONU - 2 TEKRARI",
            badge: "5. KONU - 2",
            icon: "fa-solid fa-code",
            bgColor: "from-slate-900 via-indigo-950 to-purple-950",
            gradient: "from-slate-900 via-indigo-950 to-purple-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 text-left my-auto py-2">
                    <div class="border-b border-indigo-500/30 pb-3 flex items-center justify-between">
                        <div>
                            <span class="text-xs font-bold text-indigo-400 uppercase tracking-wider">KAZANIM: BTY.5.1.5</span>
                            <h2 class="text-2xl font-black text-white">Yazılım Türleri ve 0-1 Makine Dili</h2>
                        </div>
                        <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-xl text-xs font-extrabold border border-purple-500/30">5. Konu - 2</span>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div class="p-4 bg-slate-850 rounded-2xl border border-indigo-400/30 space-y-1.5">
                            <h4 class="font-black text-indigo-300 text-sm flex items-center gap-2">
                                <i class="fa-solid fa-gears"></i> İşletim Sistemleri
                            </h4>
                            <p class="text-slate-300 leading-relaxed">Donanımı yöneten ve diğer tüm programların çalışmasını sağlayan ana yazılımdır.</p>
                            <span class="text-yellow-300 font-bold block">Örnek: Windows, Pardus (Milli), macOS, Android, iOS.</span>
                        </div>
                        <div class="p-4 bg-slate-850 rounded-2xl border border-emerald-400/30 space-y-1.5">
                            <h4 class="font-black text-emerald-300 text-sm flex items-center gap-2">
                                <i class="fa-solid fa-shapes"></i> Uygulama Yazılımları
                            </h4>
                            <p class="text-slate-300 leading-relaxed">Belirli bir işi (yazı, resim, müzik, oyun) yapmak için kullandığımız programlardır.</p>
                            <span class="text-emerald-300 font-bold block">Örnek: Word, Excel, Paint, Scratch, VLC Player.</span>
                        </div>
                    </div>

                    <div class="p-3.5 bg-slate-900 rounded-2xl border border-cyan-500/30 flex items-center justify-between flex-wrap gap-2 text-xs">
                        <div class="flex items-center gap-2">
                            <i class="fa-solid fa-binary text-cyan-400 text-lg"></i>
                            <span class="text-cyan-200 font-bold">Makine Dili (0 ve 1):</span>
                            <span class="text-slate-300">Bilgisayarlar insan dilini değil, yalnızca 0 (Akım Yok) ve 1 (Akım Var) elektrik sinyallerini anlar.</span>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 14 — 5. Konu - 2 Özeti (Kapasite Merdiveni & Depolama)
        {
            id: 14,
            title: "5. KONU - 2 ÖZETİ: KAPASİTE & DEPOLAMA",
            subtitle: "Bit'ten TB'ye",
            topic: "KAPASİTE & DEPOLAMA",
            badge: "KAPASİTE BASAMAKLARI",
            icon: "fa-solid fa-stairs",
            bgColor: "from-slate-900 via-amber-950 to-slate-900",
            gradient: "from-slate-900 via-amber-950 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 text-left my-auto py-2">
                    <div class="border-b border-amber-500/30 pb-3 flex items-center justify-between">
                        <div>
                            <span class="text-xs font-bold text-amber-400 uppercase tracking-wider">KAZANIM: BTY.5.1.5</span>
                            <h2 class="text-2xl font-black text-white">Kapasite Merdiveni ve Depolama Türleri</h2>
                        </div>
                        <span class="px-3 py-1 bg-amber-500/20 text-yellow-300 rounded-xl text-xs font-extrabold border border-amber-500/30">1024 Kat Kuralı</span>
                    </div>

                    <div class="p-3.5 bg-slate-850 rounded-2xl border border-amber-400/40 text-center space-y-1">
                        <span class="text-xs text-amber-300 font-black uppercase">Kapasite Merdiveni (Küçükten Büyüğe):</span>
                        <div class="text-sm sm:text-base font-black text-white font-mono flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
                            <span class="text-cyan-300">Bit</span> &lt; 
                            <span class="text-yellow-300">Byte (8 Bit)</span> &lt; 
                            <span class="text-emerald-300">KB</span> &lt; 
                            <span class="text-blue-300">MB</span> &lt; 
                            <span class="text-purple-300">GB</span> &lt; 
                            <span class="text-rose-300">TB</span>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div class="p-3 bg-slate-900 rounded-xl border border-indigo-400/30">
                            <strong class="text-indigo-300 block mb-1">Dahili Depolama:</strong>
                            <p class="text-slate-300">Kasa içindeki SSD ve Sabit Disklerdir. İşletim sistemi buraya kurulur.</p>
                        </div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-amber-400/30">
                            <strong class="text-yellow-300 block mb-1">Harici Depolama:</strong>
                            <p class="text-slate-300">USB Flash bellek ve taşınabilir disklerdir. Dosya taşımayı sağlar.</p>
                        </div>
                        <div class="p-3 bg-slate-900 rounded-xl border border-cyan-400/30">
                            <strong class="text-cyan-300 block mb-1">Bulut Depolama:</strong>
                            <p class="text-slate-300">Google Drive ve OneDrive gibi internet sunucularında dosya saklama alanıdır.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 15 — 5. Konu - 2 İnteraktif Soru
        {
            id: 15,
            title: "5. KONU - 2 İNTERAKTİF SORUSU",
            subtitle: "Depolama ve Kapasite Seçimi",
            topic: "DEPOLAMA KARARI",
            badge: "İNTERAKTİF TEST",
            icon: "fa-solid fa-cloud-arrow-up",
            bgColor: "from-slate-900 via-amber-950 to-indigo-950",
            gradient: "from-slate-900 via-amber-950 to-indigo-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 text-center my-auto py-2">
                    <span class="px-3 py-1 bg-amber-400/20 text-yellow-300 font-black rounded-full text-xs uppercase border border-amber-400/30">
                        Depolama Senaryosu
                    </span>
                    <h3 class="text-xl sm:text-2xl font-black text-white">Tatil fotoğraflarınıza hem telefonunuzdan hem okuldan hem de tabletten internetle ulaşmak için hangi depolama kullanılır?</h3>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto pt-2">
                        <button onclick="this.classList.add('bg-rose-600', 'text-white'); alert('⚠️ YANLIŞ! Sabit disk kasaya bağlıdır, uzaktan internetle erişilmez.');" class="p-4 bg-slate-850 hover:bg-slate-800 rounded-2xl border border-slate-700 text-white font-bold text-xs sm:text-sm transition-all flex flex-col items-center gap-1">
                            <i class="fa-solid fa-hard-drive text-amber-400 text-2xl mb-1"></i>
                            <span>Dahili Sabit Disk</span>
                        </button>
                        <button onclick="this.classList.add('bg-rose-600', 'text-white'); alert('⚠️ YANLIŞ! USB bellek fiziksel olarak yanınızda olmalıdır.');" class="p-4 bg-slate-850 hover:bg-slate-800 rounded-2xl border border-slate-700 text-white font-bold text-xs sm:text-sm transition-all flex flex-col items-center gap-1">
                            <i class="fa-solid fa-usb text-purple-400 text-2xl mb-1"></i>
                            <span>USB Flash Bellek</span>
                        </button>
                        <button onclick="this.classList.add('bg-emerald-600', 'text-white'); alert('🎉 TEBRİKLER! Bulut depolama sayesinde internete bağlı her cihazdan dosyalarımıza anında erişebiliriz.');" class="p-4 bg-slate-850 hover:bg-slate-800 rounded-2xl border border-slate-700 text-white font-bold text-xs sm:text-sm transition-all flex flex-col items-center gap-1">
                            <i class="fa-solid fa-cloud text-cyan-400 text-2xl mb-1"></i>
                            <span>Bulut Depolama (Drive/Cloud)</span>
                        </button>
                    </div>
                </div>
            `
        },

        // Slayt 16 — 6. Konu Özeti (Dosya ve Klasör Yönetimi)
        {
            id: 16,
            title: "6. KONU ÖZETİ: DOSYA & KLASÖR",
            subtitle: "BTY.5.1.6 Kazanımı",
            topic: "6. KONU TEKRARI",
            badge: "6. KONU",
            icon: "fa-solid fa-folder-tree",
            bgColor: "from-slate-900 via-rose-950 to-slate-900",
            gradient: "from-slate-900 via-rose-950 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 text-left my-auto py-2">
                    <div class="border-b border-rose-500/30 pb-3 flex items-center justify-between">
                        <div>
                            <span class="text-xs font-bold text-rose-400 uppercase tracking-wider">KAZANIM: BTY.5.1.6</span>
                            <h2 class="text-2xl font-black text-white">Dosya Yapısı ve Klasör Hiyerarşisi</h2>
                        </div>
                        <span class="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-xl text-xs font-extrabold border border-rose-500/30">6. Konu</span>
                    </div>

                    <div class="p-4 bg-slate-850 rounded-2xl border border-rose-400/40 text-center space-y-2">
                        <span class="text-xs text-rose-300 font-black uppercase">Dosyanın Altın Formülü:</span>
                        <div class="text-lg sm:text-xl font-black text-white font-mono flex items-center justify-center gap-2">
                            <span class="px-3 py-1 bg-blue-900/60 rounded-xl border border-blue-400/50 text-blue-200">Dosya Adı</span>
                            <span class="text-yellow-400 font-extrabold text-2xl">.</span>
                            <span class="px-3 py-1 bg-purple-900/60 rounded-xl border border-purple-400/50 text-purple-200">Dosya Uzantısı</span>
                        </div>
                        <p class="text-xs text-slate-300">Örnek: <strong>odev.docx</strong> (Dosya Adı: odev • Ayırıcı: . • Uzantı: docx)</p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div class="p-3.5 bg-slate-900 rounded-xl border border-slate-700">
                            <strong class="text-yellow-300 block mb-1">Klasör (Dizin) Nedir?</strong>
                            <p class="text-slate-300">Dosyaları düzenli tutmak, kategorilere ayırmak ve kaybolmalarını önlemek için kullanılan sanal çantalardır. Klasörlerin uzantısı olmaz!</p>
                        </div>
                        <div class="p-3.5 bg-slate-900 rounded-xl border border-slate-700">
                            <strong class="text-cyan-300 block mb-1">Kullanılamayan Karakterler:</strong>
                            <p class="text-slate-300">Dosya ve klasör isimlerinde sistem tarafından ayrılmış olan <strong>\ / : * ? " &lt; &gt; |</strong> karakterleri kullanılamaz.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // Slayt 17 — 6. Konu Özeti (Uzantılar & Kısayollar)
        {
            id: 17,
            title: "6. KONU ÖZETİ: UZANTILAR & KISAYOLLAR",
            subtitle: "Hangi Uzantı, Hangi Dosya?",
            topic: "UZANTILAR & KISAYOLLAR",
            badge: "PRATİK BİLGİLER",
            icon: "fa-solid fa-keyboard",
            bgColor: "from-slate-900 via-indigo-950 to-rose-950",
            gradient: "from-slate-900 via-indigo-950 to-rose-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 text-left my-auto py-2">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="p-4 bg-slate-850 rounded-2xl border border-cyan-500/40 space-y-2">
                            <h4 class="font-black text-cyan-300 text-sm flex items-center gap-2">
                                <i class="fa-solid fa-file-code"></i> Popüler Dosya Uzantıları
                            </h4>
                            <div class="grid grid-cols-2 gap-2 text-xs text-slate-300">
                                <div>• <strong>.docx / .doc:</strong> Word Yazısı</div>
                                <div>• <strong>.pdf:</strong> Belge / Kitap</div>
                                <div>• <strong>.jpg / .png:</strong> Resim / Fotoğraf</div>
                                <div>• <strong>.mp3 / .wav:</strong> Ses / Müzik</div>
                                <div>• <strong>.mp4 / .avi:</strong> Video / Film</div>
                                <div>• <strong>.zip / .rar:</strong> Sıkıştırılmış Arşiv</div>
                            </div>
                        </div>

                        <div class="p-4 bg-slate-850 rounded-2xl border border-purple-500/40 space-y-2">
                            <h4 class="font-black text-purple-300 text-sm flex items-center gap-2">
                                <i class="fa-solid fa-bolt"></i> En Önemli Kısayollar
                            </h4>
                            <div class="space-y-1 text-xs text-slate-300">
                                <p class="flex justify-between p-1 bg-slate-900 rounded"><span>Kopyala:</span><strong class="text-yellow-300">Ctrl + C</strong></p>
                                <p class="flex justify-between p-1 bg-slate-900 rounded"><span>Kes:</span><strong class="text-yellow-300">Ctrl + X</strong></p>
                                <p class="flex justify-between p-1 bg-slate-900 rounded"><span>Yapıştır:</span><strong class="text-yellow-300">Ctrl + V</strong></p>
                                <p class="flex justify-between p-1 bg-slate-900 rounded"><span>Geri Al:</span><strong class="text-yellow-300">Ctrl + Z</strong></p>
                                <p class="flex justify-between p-1 bg-slate-900 rounded"><span>Yeniden Adlandır:</span><strong class="text-yellow-300">F2</strong></p>
                            </div>
                        </div>
                    </div>

                    <div class="p-3 bg-slate-900 rounded-xl border border-slate-700 text-xs text-center text-slate-300">
                        ⚡ <strong>Arama İpucu:</strong> Tüm Word belgelerini bulmak için arama çubuğuna <code class="text-yellow-300 font-bold">*.docx</code> yazılır!
                    </div>
                </div>
            `
        },

        // Slayt 18 — 6. Konu İnteraktif Soru
        {
            id: 18,
            title: "6. KONU İNTERAKTİF SORUSU",
            subtitle: "Uzantı Dedektifi",
            topic: "DOSYA DEDEKTİFİ",
            badge: "UZANTI TESPİTİ",
            icon: "fa-solid fa-magnifying-glass",
            bgColor: "from-slate-900 via-rose-950 to-indigo-950",
            gradient: "from-slate-900 via-rose-950 to-indigo-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 text-center my-auto py-2">
                    <span class="px-3 py-1 bg-rose-400/20 text-rose-300 font-black rounded-full text-xs uppercase border border-rose-400/30">
                        Dosya Dedektifliği
                    </span>
                    <h3 class="text-xl sm:text-2xl font-black text-white">Bilgisayarda 'kutlama_videosu.mp4' adlı bir dosya gördünüz. Bu dosya hangi türdedir?</h3>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto pt-2">
                        <button onclick="this.classList.add('bg-rose-600', 'text-white'); alert('⚠️ YANLIŞ! Ses dosyaları .mp3 veya .wav uzantılı olur.');" class="p-4 bg-slate-850 hover:bg-slate-800 rounded-2xl border border-slate-700 text-white font-bold text-xs sm:text-sm transition-all flex flex-col items-center gap-1">
                            <i class="fa-solid fa-music text-amber-400 text-2xl mb-1"></i>
                            <span>Ses / Müzik</span>
                        </button>
                        <button onclick="this.classList.add('bg-emerald-600', 'text-white'); alert('🎉 TEBRİKLER! .mp4 ve .avi uzantıları video dosyalarıdır.');" class="p-4 bg-slate-850 hover:bg-slate-800 rounded-2xl border border-slate-700 text-white font-bold text-xs sm:text-sm transition-all flex flex-col items-center gap-1">
                            <i class="fa-solid fa-film text-purple-400 text-2xl mb-1"></i>
                            <span>Video / Hareketli Görüntü</span>
                        </button>
                        <button onclick="this.classList.add('bg-rose-600', 'text-white'); alert('⚠️ YANLIŞ! Resim dosyaları .jpg veya .png uzantılı olur.');" class="p-4 bg-slate-850 hover:bg-slate-800 rounded-2xl border border-slate-700 text-white font-bold text-xs sm:text-sm transition-all flex flex-col items-center gap-1">
                            <i class="fa-solid fa-image text-emerald-400 text-2xl mb-1"></i>
                            <span>Fotoğraf / Resim</span>
                        </button>
                        <button onclick="this.classList.add('bg-rose-600', 'text-white'); alert('⚠️ YANLIŞ! Yazı belgeleri .docx veya .pdf uzantılı olur.');" class="p-4 bg-slate-850 hover:bg-slate-800 rounded-2xl border border-slate-700 text-white font-bold text-xs sm:text-sm transition-all flex flex-col items-center gap-1">
                            <i class="fa-solid fa-file-lines text-blue-400 text-2xl mb-1"></i>
                            <span>Yazı / Metin Belgesi</span>
                        </button>
                    </div>
                </div>
            `
        },

        // Slayt 19 — 1. Tema Büyük Final Mini Quiz
        {
            id: 19,
            title: "1. TEMA BÜYÜK FİNAL QUİZİ",
            subtitle: "5 Kilit Soruyla Şampiyonluk",
            topic: "BÜYÜK FİNAL TESTİ",
            badge: "🏆 50 PUANLIK TEST",
            icon: "fa-solid fa-award",
            bgColor: "from-slate-900 via-indigo-950 to-amber-950",
            gradient: "from-slate-900 via-indigo-950 to-amber-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 text-center my-auto py-2" id="t1s19-box">
                    <div class="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-800">
                        <span id="t1s19-count" class="px-3 py-1 bg-yellow-400/20 text-yellow-300 font-black rounded-full text-xs uppercase border border-yellow-400/30">
                            Soru: 1 / 5
                        </span>
                        <span id="t1s19-score" class="px-3.5 py-1 bg-emerald-500/20 text-emerald-300 font-black rounded-xl text-xs border border-emerald-500/30">
                            0 Puan
                        </span>
                    </div>

                    <h3 id="t1s19-q" class="text-base sm:text-xl font-bold text-white leading-relaxed">
                        1. Konu: Aşağıdakilerden hangisi bilişim teknolojilerinin eğitim alanındaki kullanımına örnektir?
                    </h3>

                    <div id="t1s19-options" class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto pt-2">
                        <button onclick="window.tema1Slide19Quiz.answer(0)" class="t1s19-opt-btn p-3 bg-slate-900/90 hover:bg-indigo-600 border border-slate-700 hover:border-yellow-400 rounded-xl text-left text-xs sm:text-sm font-bold text-white transition-all flex items-center gap-2">
                            <span class="w-6 h-6 rounded-lg bg-indigo-500/30 text-yellow-300 flex items-center justify-center text-xs shrink-0 font-black">A</span>
                            <span>EBA üzerinden ders videosu izlemek</span>
                        </button>
                        <button onclick="window.tema1Slide19Quiz.answer(1)" class="t1s19-opt-btn p-3 bg-slate-900/90 hover:bg-indigo-600 border border-slate-700 hover:border-yellow-400 rounded-xl text-left text-xs sm:text-sm font-bold text-white transition-all flex items-center gap-2">
                            <span class="w-6 h-6 rounded-lg bg-indigo-500/30 text-yellow-300 flex items-center justify-center text-xs shrink-0 font-black">B</span>
                            <span>Hastaneden randevu almak</span>
                        </button>
                        <button onclick="window.tema1Slide19Quiz.answer(2)" class="t1s19-opt-btn p-3 bg-slate-900/90 hover:bg-indigo-600 border border-slate-700 hover:border-yellow-400 rounded-xl text-left text-xs sm:text-sm font-bold text-white transition-all flex items-center gap-2">
                            <span class="w-6 h-6 rounded-lg bg-indigo-500/30 text-yellow-300 flex items-center justify-center text-xs shrink-0 font-black">C</span>
                            <span>Uçak bileti satın almak</span>
                        </button>
                        <button onclick="window.tema1Slide19Quiz.answer(3)" class="t1s19-opt-btn p-3 bg-slate-900/90 hover:bg-indigo-600 border border-slate-700 hover:border-yellow-400 rounded-xl text-left text-xs sm:text-sm font-bold text-white transition-all flex items-center gap-2">
                            <span class="w-6 h-6 rounded-lg bg-indigo-500/30 text-yellow-300 flex items-center justify-center text-xs shrink-0 font-black">D</span>
                            <span>ATM'den para çekmek</span>
                        </button>
                    </div>

                    <div id="t1s19-fb" class="hidden min-h-[45px]"></div>
                    <button id="t1s19-next" onclick="window.tema1Slide19Quiz.next()" class="hidden px-6 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95 mx-auto">
                        Sonraki Soruya Geç ➔
                    </button>
                </div>
            `
        },

        // Slayt 20 — Tebrikler ve 1. Tema Başarı Sertifikası
        {
            id: 20,
            title: "TEBRİKLER! 1. TEMA TAMAMLANDI",
            subtitle: "1. Tema Bilişim Ustası Rozeti",
            topic: "BAŞARI SERTİFİKASI",
            badge: "🏆 ŞAMPİYONLUK",
            icon: "fa-solid fa-crown",
            bgColor: "from-slate-900 via-yellow-950 to-slate-900",
            gradient: "from-slate-900 via-yellow-950 to-slate-900",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 text-center my-auto py-2">
                    <div class="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 text-slate-950 flex items-center justify-center text-4xl mx-auto shadow-2xl animate-bounce">
                        <i class="fa-solid fa-crown"></i>
                    </div>

                    <div class="space-y-1">
                        <span class="px-3.5 py-1 bg-yellow-400/20 text-yellow-300 font-black rounded-full text-xs uppercase border border-yellow-400/30">
                            TEBRİKLER ŞAMPİYON! 🥇
                        </span>
                        <h2 class="text-2xl sm:text-4xl font-black text-white">1. TEMAYI BAŞARIYLA BİTİRDİN!</h2>
                    </div>

                    <div class="p-5 bg-slate-850/90 rounded-2xl border-2 border-yellow-400/40 text-left max-w-xl mx-auto space-y-2 text-xs sm:text-sm">
                        <div class="flex items-center gap-2 text-emerald-400 font-bold">
                            <i class="fa-solid fa-circle-check"></i>
                            <span>Bilişim teknolojilerini ve kullanım alanlarını biliyorum.</span>
                        </div>
                        <div class="flex items-center gap-2 text-emerald-400 font-bold">
                            <i class="fa-solid fa-circle-check"></i>
                            <span>Dijital sağlık ve ergonomi kurallarını uyguluyorum.</span>
                        </div>
                        <div class="flex items-center gap-2 text-emerald-400 font-bold">
                            <i class="fa-solid fa-circle-check"></i>
                            <span>Dijital ayak izimi bilinçli yönetiyorum.</span>
                        </div>
                        <div class="flex items-center gap-2 text-emerald-400 font-bold">
                            <i class="fa-solid fa-circle-check"></i>
                            <span>Yapay zekânın temel mantığını kavradım.</span>
                        </div>
                        <div class="flex items-center gap-2 text-emerald-400 font-bold">
                            <i class="fa-solid fa-circle-check"></i>
                            <span>Donanım, yazılım, makine dili ve kapasite basamaklarını öğrendim.</span>
                        </div>
                        <div class="flex items-center gap-2 text-emerald-400 font-bold">
                            <i class="fa-solid fa-circle-check"></i>
                            <span>Dosyalarımı ve klasörlerimi düzenleyip sıkıştırabiliyorum.</span>
                        </div>
                    </div>

                    <div class="pt-2">
                        <p class="text-xs text-slate-400">Şimdi Oyunlar sekmesinden 1. Tema turnuva oyunlarını oynayabilir veya Pekiştirme Testini çözebilirsin!</p>
                    </div>
                </div>
            `
        }
    ],

    // ========================================================
    // 📄 2. YAZDIRILABİLİR DİJİTAL METİN & ÇALIŞMA KAĞIDI (4 SAYFA)
    // ========================================================
    worksheetDocs: {
        sayfa1: "assets/worksheets/1.4_sayfa1.png",
        sayfa2: "assets/worksheets/1.4_sayfa2.png",
        sayfa3: "assets/worksheets/1.5_2_sayfa1.png",
        sayfa4: "assets/worksheets/1.6_sayfa1.png",
        tekrar: "assets/worksheets/bilgisayar_konusu_tekrar.png",
        cevap: "assets/worksheets/bilgisayar_konusu_tekrar.png",
        defter: "assets/worksheets/bilgisayar_konusu_tekrar.png",

        sayfa1Html: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <div class="border-b-2 border-indigo-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            1. TEMA BÜYÜK TEKRARI • BTY.5.1.1 & BTY.5.1.2 & BTY.5.1.3
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 1: BİLİŞİM ALANLARI, DİJİTAL SAĞLIK & VATANDAŞLIK
                        </h1>
                        <p class="text-xs text-indigo-300">Öğretmen Bozok • Bozok Bilişim Portalı 2026</p>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        Sayfa: 1 / 4
                    </span>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-blue-500/30 space-y-2">
                    <h3 class="text-sm font-black text-blue-300 uppercase">1. Bilişim Teknolojileri ve 6 Büyük Kullanım Alanı</h3>
                    <p class="text-xs text-slate-300 leading-relaxed">
                        Bilgiyi işleyen, saklayan ve aktaran teknolojilerdir. <strong>Eğitim</strong> (EBA, akıllı tahta), <strong>Sağlık</strong> (MHRS, e-Nabız), <strong>Ulaşım</strong> (Navigasyon, online bilet), <strong>Bankacılık</strong> (ATM, mobil ödeme), <strong>Güvenlik</strong> (MOBESE, radar) ve <strong>İletişim</strong> (e-posta, görüntülü görüşme) temel alanlarıdır.
                    </p>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-emerald-500/30 space-y-2">
                    <h3 class="text-sm font-black text-emerald-300 uppercase">2. Ergonomi ve Dijital Sağlık Kuralları</h3>
                    <p class="text-xs text-slate-300 leading-relaxed">
                        • <strong>Oturuş:</strong> Sırt dik, kollar ve dizler 90 derece bükülü olmalıdır.<br>
                        • <strong>Ekran Mesafesi:</strong> Göz ile ekran arasında 50-70 cm (bir kol boyu) mesafe olmalıdır.<br>
                        • <strong>20-20-20 Kuralı:</strong> Her 20 dakikada bir, 20 saniye boyunca 20 fit (6 metre) uzağa bakılmalıdır.
                    </p>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-cyan-500/30 space-y-2">
                    <h3 class="text-sm font-black text-cyan-300 uppercase">3. Dijital Vatandaşlık ve Ayak İzi</h3>
                    <p class="text-xs text-slate-300 leading-relaxed">
                        • <strong>Aktif Dijital Ayak İzi:</strong> Kendi isteğimizle paylaştığımız fotoğraflar, videolar ve yorumlardır.<br>
                        • <strong>Pasif Dijital Ayak İzi:</strong> Ziyaret ettiğimiz sitelerin arka planda tuttuğu IP, konum ve çerez kayıtlarıdır.<br>
                        • <strong>e-Devlet:</strong> Kamu hizmetlerinin internet üzerinden güvenle yürütülmesini sağlar.
                    </p>
                </div>
            </div>
        `,

        sayfa2Html: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <div class="border-b-2 border-indigo-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-purple-500/30 text-purple-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            1. TEMA BÜYÜK TEKRARI • BTY.5.1.4
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 2: YAPAY ZEKÂ DÜNYASI VE KAVRAMLAR
                        </h1>
                        <p class="text-xs text-purple-300">Öğretmen Bozok • Bozok Bilişim Portalı 2026</p>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        Sayfa: 2 / 4
                    </span>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-purple-500/30 space-y-2">
                    <h3 class="text-sm font-black text-purple-300 uppercase">1. Yapay Zekânın Çalışma Prensibi: Veri → Karar</h3>
                    <p class="text-xs text-slate-300 leading-relaxed">
                        Yapay zekâ insanlar gibi biyolojik beyne veya duygulara sahip değildir. Büyük veri kümelerini (Data) analiz ederek örüntüleri öğrenir ve bu verilere göre en mantıklı kararı üretir.
                    </p>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-indigo-500/30 space-y-2">
                    <h3 class="text-sm font-black text-indigo-300 uppercase">2. İnsan Zekâsı vs Yapay Zekâ</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                        <div class="p-2.5 bg-slate-900 rounded-xl border border-slate-700">
                            <strong class="text-yellow-300 block mb-1">İnsan Zekâsı:</strong>
                            Deneyimle öğrenir. Empati, vicdan, sevgi, üzüntü gibi duyguları vardır. Hayal kurar ve ahlaki kararlar verir.
                        </div>
                        <div class="p-2.5 bg-slate-900 rounded-xl border border-slate-700">
                            <strong class="text-cyan-300 block mb-1">Yapay Zekâ:</strong>
                            Veriyle öğrenir. Duygusuzdur. Saniyede milyarlarca hesaplamayı insandan kat kat hızlı yapar.
                        </div>
                    </div>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-emerald-500/30 space-y-2">
                    <h3 class="text-sm font-black text-emerald-300 uppercase">3. Günlük Hayatta Yapay Zekâ</h3>
                    <p class="text-xs text-slate-300 leading-relaxed">
                        Telefonların yüz tanıma kilidi, sesli asistanlar (Siri, Google Asistan), YouTube video önerileri, sürücüsüz arabalar ve otomatik dil çeviri programları yapay zekâ teknolojisi kullanır.
                    </p>
                </div>
            </div>
        `,

        sayfa3Html: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <div class="border-b-2 border-indigo-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-amber-500/30 text-yellow-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            1. TEMA BÜYÜK TEKRARI • BTY.5.1.5
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 3: DONANIM, YAZILIM, MAKİNE DİLİ & KAPASİTE
                        </h1>
                        <p class="text-xs text-amber-300">Öğretmen Bozok • Bozok Bilişim Portalı 2026</p>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        Sayfa: 3 / 4
                    </span>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-indigo-500/30 space-y-2">
                    <h3 class="text-sm font-black text-indigo-300 uppercase">1. Donanım ve Birimler</h3>
                    <p class="text-xs text-slate-300 leading-relaxed">
                        • <strong>İç Donanım:</strong> İşlemci (CPU), Anakart, RAM Bellek, Sabit Disk (SSD/HDD), Ekran Kartı, Güç Kaynağı.<br>
                        • <strong>Giriş Birimleri:</strong> Klavye, fare, mikrofon, kamera, tarayıcı.<br>
                        • <strong>Çıkış Birimleri:</strong> Monitör, hoparlör, kulaklık, yazıcı, projeksiyon.<br>
                        • <strong>Çift Yönlü:</strong> Dokunmatik ekran, USB bellek, harici disk.
                    </p>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-purple-500/30 space-y-2">
                    <h3 class="text-sm font-black text-purple-300 uppercase">2. Yazılım Türleri ve 0-1 Makine Dili</h3>
                    <p class="text-xs text-slate-300 leading-relaxed">
                        • <strong>İşletim Sistemleri:</strong> Windows, Pardus (Milli), Android, macOS.<br>
                        • <strong>Uygulama Yazılımları:</strong> Word, Scratch, Paint, Chrome.<br>
                        • <strong>Makine Dili:</strong> Bilgisayar sadece 0 (Elektrik Yok) ve 1 (Elektrik Var) ikili sayı sistemini anlar.
                    </p>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-amber-500/30 space-y-2">
                    <h3 class="text-sm font-black text-yellow-300 uppercase">3. Kapasite Merdiveni (1024 Kat Kuralı)</h3>
                    <p class="text-xs text-slate-300 leading-relaxed font-mono">
                        Bit &lt; Byte (8 Bit) &lt; KB &lt; MB &lt; GB &lt; TB (Her basamak bir öncekinin 1024 katıdır)
                    </p>
                </div>
            </div>
        `,

        sayfa4Html: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <div class="border-b-2 border-indigo-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-rose-500/30 text-rose-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            1. TEMA BÜYÜK TEKRARI • BTY.5.1.6
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            SAYFA 4: DOSYA VE KLASÖR YÖNETİMİ
                        </h1>
                        <p class="text-xs text-rose-300">Öğretmen Bozok • Bozok Bilişim Portalı 2026</p>
                    </div>
                    <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-black">
                        Sayfa: 4 / 4
                    </span>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-rose-500/30 space-y-2">
                    <h3 class="text-sm font-black text-rose-300 uppercase">1. Dosya Yapısı: Dosya Adı + Nokta + Uzantı</h3>
                    <p class="text-xs text-slate-300 leading-relaxed">
                        Dosya adı kullanıcı tarafından verilir, nokta ayırıcıdır, uzantı ise dosyanın türünü belirler.<br>
                        Örnek: <strong>proje.docx</strong> (.docx = Word Belgesi)
                    </p>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-cyan-500/30 space-y-2">
                    <h3 class="text-sm font-black text-cyan-300 uppercase">2. Popüler Uzantılar ve Dosya Türleri</h3>
                    <p class="text-xs text-slate-300 leading-relaxed">
                        • <strong>Yazı / Belge:</strong> .docx, .pdf, .txt<br>
                        • <strong>Resim / Fotoğraf:</strong> .jpg, .jpeg, .png<br>
                        • <strong>Ses / Müzik:</strong> .mp3, .wav<br>
                        • <strong>Video / Film:</strong> .mp4, .avi<br>
                        • <strong>Sıkıştırma / Arşiv:</strong> .zip, .rar
                    </p>
                </div>

                <div class="p-4 bg-slate-850 rounded-2xl border border-purple-500/30 space-y-2">
                    <h3 class="text-sm font-black text-purple-300 uppercase">3. Temel Kısayollar ve Arama İpuçları</h3>
                    <p class="text-xs text-slate-300 leading-relaxed">
                        • <strong>Ctrl + C:</strong> Kopyala &bull; <strong>Ctrl + X:</strong> Kes &bull; <strong>Ctrl + V:</strong> Yapıştır &bull; <strong>Ctrl + Z:</strong> Geri Al &bull; <strong>F2:</strong> Yeniden Adlandır<br>
                        • <strong>Arama (*):</strong> Tüm resimleri bulmak için <code class="text-yellow-300">*.jpg</code> veya <code class="text-yellow-300">*.png</code> yazılır.
                    </p>
                </div>
            </div>
        `,

        tekrarHtml: `
            <div class="space-y-6 text-slate-100 print:text-black">
                <div class="border-b-2 border-amber-500/40 pb-4 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <span class="px-3 py-1 bg-amber-500/30 text-yellow-300 font-black rounded-lg text-xs tracking-wider uppercase">
                            1. TEMA ŞAMPİYONLAR ÖZETİ
                        </span>
                        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">
                            1. TEMA BİLİŞİM TEKNOLOJİLERİ SENTEZ TABLOSU
                        </h1>
                        <p class="text-xs text-amber-300">Öğretmen Bozok • Bozok Bilişim Portalı 2026</p>
                    </div>
                    <span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider shadow">
                        Büyük Özet
                    </span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div class="p-4 bg-slate-850 rounded-2xl border border-blue-500/40 space-y-2">
                        <strong class="text-blue-300 font-bold text-sm block">1. & 2. Konular Kilit Noktaları:</strong>
                        <p class="text-slate-300 leading-relaxed">• Bilişim her alanda zamandan ve paradan tasarruf sağlar.<br>• Ekran başında saatlerce kıpırdamamak sağlığa zararlıdır.<br>• 20-20-20 kuralı gözlerimizi korur.</p>
                    </div>
                    <div class="p-4 bg-slate-850 rounded-2xl border border-cyan-500/40 space-y-2">
                        <strong class="text-cyan-300 font-bold text-sm block">3. & 4. Konular Kilit Noktaları:</strong>
                        <p class="text-slate-300 leading-relaxed">• İnternetteki her hareketimiz dijital ayak izimizi oluşturur.<br>• e-Devlet kapısı (turkiye.gov.tr) güvenli kamu hizmetidir.<br>• Yapay zekâ veriyle beslenir; insan gibi duygusu ve vicdanı yoktur.</p>
                    </div>
                    <div class="p-4 bg-slate-850 rounded-2xl border border-amber-500/40 space-y-2">
                        <strong class="text-amber-300 font-bold text-sm block">5. Konu Kilit Noktaları:</strong>
                        <p class="text-slate-300 leading-relaxed">• İşlemci (CPU) bilgisayarın beynidir.<br>• İşletim sistemi olmadan bilgisayar açılamaz (Windows, Pardus vb.).<br>• Bilgisayarlar 0 ve 1 makine diliyle çalışır.<br>• 1024 kat kuralı: 1024 MB = 1 GB eder.</p>
                    </div>
                    <div class="p-4 bg-slate-850 rounded-2xl border border-rose-500/40 space-y-2">
                        <strong class="text-rose-300 font-bold text-sm block">6. Konu Kilit Noktaları:</strong>
                        <p class="text-slate-300 leading-relaxed">• Dosya adı + nokta + uzantı.<br>• .docx (Word), .pdf (Belge), .jpg (Resim), .mp3 (Ses), .mp4 (Video), .zip (Arşiv).<br>• Ctrl+C kopyalar, Ctrl+V yapıştırır, F2 yeniden adlandırır.</p>
                    </div>
                </div>
            </div>
        `
    },

    // ========================================================
    // ❓ 3. PEKİŞTİRME TESTİ & ETKİNLİKLER (15 D/Y + 10 Çoktan Seçmeli)
    // ========================================================
    questions: {
        trueFalse: [
            {
                q: "1. Konu: EBA ve akıllı tahta uygulamaları bilişim teknolojilerinin eğitim alanındaki kullanımına örnektir.",
                answer: true,
                explanation: "Doğru! EBA ve akıllı tahtalar eğitimde kullanılan en temel bilişim araçlarıdır."
            },
            {
                q: "1. Konu: Bilişim teknolojileri günlük hayatta yalnızca oyun oynamak için kullanılır.",
                answer: false,
                explanation: "Yanlış! Bilişim teknolojileri sağlık, ulaşım, eğitim, bankacılık ve güvenlik gibi onlarca alanda hayatı kolaylaştırır."
            },
            {
                q: "2. Konu: Bilgisayar başında dik oturmak, sırtı desteklemek ve ekrandan 50-70 cm uzakta durmak doğru bir ergonomi kuralıdır.",
                answer: true,
                explanation: "Doğru! Bu kurallar omurga ve göz sağlığımızı korumak için zorunludur."
            },
            {
                q: "2. Konu: Ekran süresini sınırlamadan günde 8 saat aralıksız oyun oynamak sağlığa hiçbir zarar vermez.",
                answer: false,
                explanation: "Yanlış! Uzun süre hareketsiz ekrana bakmak göz yorgunluğuna, duruş bozukluğuna ve teknoloji bağımlılığına yol açar."
            },
            {
                q: "3. Konu: Kendi isteğimizle sosyal medyada paylaştığımız fotoğraf ve yorumlar 'Aktif Dijital Ayak İzi'dir.",
                answer: true,
                explanation: "Doğru! Bilerek ve isteyerek internete yüklediğimiz içerikler aktif dijital ayak izimizi oluşturur."
            },
            {
                q: "3. Konu: e-Devlet kapısına şifresiz ve herkesin görebileceği şekilde güvenli olmayan sitelerden girilmelidir.",
                answer: false,
                explanation: "Yanlış! e-Devlet kapısına yalnızca turkiye.gov.tr adresinden T.C. kimlik numarası ve gizli şifre ile girilmelidir."
            },
            {
                q: "4. Konu: Yapay zekâ sistemleri insan beyni gibi biyolojik duygulara, sevince ve üzüntüye sahiptir.",
                answer: false,
                explanation: "Yanlış! Yapay zekâ duygusuzdur; yalnızca sayılar, algoritmalar ve mantıksal veri analiziyle çalışır."
            },
            {
                q: "4. Konu: Telefonların yüz tanıma kilidi ve YouTube'un video önerme algoritması yapay zekâ uygulamasıdır.",
                answer: true,
                explanation: "Doğru! Görüntü işleme ve izleme geçmişi analizi yapay zekâ modelleriyle gerçekleştirilir."
            },
            {
                q: "5. Konu: İşlemci (CPU), bilgisayarın tüm mantıksal ve matematiksel işlemlerini gerçekleştiren 'beyin' donanımıdır.",
                answer: true,
                explanation: "Doğru! İşlemci bilgisayarın en temel karar ve işlem merkezidir."
            },
            {
                q: "5. Konu: Monitör ve hoparlör bilgisayara dış dünyadan veri giren 'Giriş Birimleri'dir.",
                answer: false,
                explanation: "Yanlış! Monitör görüntüyü, hoparlör sesi dışarıya aktaran 'Çıkış Birimleri'dir."
            },
            {
                q: "5. Konu: TÜBİTAK tarafından geliştirilen yerli ve milli işletim sistemimizin adı PARDUS'tur.",
                answer: true,
                explanation: "Doğru! Pardus ülkemizin gururu milli işletim sistemimizdir."
            },
            {
                q: "5. Konu: Kapasite merdiveninde 1 Gigabyte (GB), 1024 Megabyte (MB)'a eşittir.",
                answer: true,
                explanation: "Doğru! Kapasite birimleri arasında 1024 kat kuralı geçerlidir (1 GB = 1024 MB)."
            },
            {
                q: "6. Konu: 'manzara.docx' dosyasındaki '.docx' uzantısı bu dosyanın bir Word yazı belgesi olduğunu gösterir.",
                answer: true,
                explanation: "Doğru! .docx Microsoft Word ve LibreOffice Writer kelime işlemci programlarının resmi uzantısıdır."
            },
            {
                q: "6. Konu: Bir dosya silindiğinde doğrudan yok olur, Geri Dönüşüm Kutusundan asla geri kurtarılamaz.",
                answer: false,
                explanation: "Yanlış! Normal silinen dosyalar Geri Dönüşüm Kutusu'na gider ve oradan 'Geri Yükle' ile kurtarılabilir."
            },
            {
                q: "6. Konu: Dosyaları ZIP veya RAR ile sıkıştırmak onların diskte kapladığı alanı küçültür ve paylaşımı kolaylaştırır.",
                answer: true,
                explanation: "Doğru! Dosya sıkıştırma hem disk tasarrufu sağlar hem de onlarca dosyayı tek pakette birleştirir."
            }
        ],

        multipleChoice: [
            {
                q: "1. Konu: 'Hastanedeki doktorun tahlil sonuçlarını bilgisayar ekranından inceleyip tedavi planlaması' bilişim teknolojilerinin hangi alandaki kullanımına örnektir?",
                options: ["Eğitim", "Ulaşım", "Sağlık", "Bankacılık"],
                answer: 2, // C
                explanation: "Tahlil sonuçları, röntgen incelemeleri ve MHRS randevu sistemleri SAĞLIK alanına aittir."
            },
            {
                q: "2. Konu: Aşağıdakilerden hangisi teknolojinin insan hayatına sağladığı OLUMLU etkilerden biridir?",
                options: ["İşlemleri hızlandırarak zamandan tasarruf sağlaması", "Hareketsiz yaşam nedeniyle obeziteye yol açması", "Yüz yüze arkadaşlık ilişkilerini zayıflatması", "Gözlerde kuruluk ve görme bozukluğu yapması"],
                answer: 0, // A
                explanation: "Zamandan tasarruf sağlamak ve bilgiye kolayca ulaşmak teknolojinin en büyük olumlu etkisidir."
            },
            {
                q: "3. Konu: Aşağıdaki davranışlardan hangisi iyi ve bilinçli bir 'Dijital Vatandaş'a YAKIŞMAZ?",
                options: ["Güçlü ve tahmin edilmesi zor şifreler kullanmak", "İnternette başkalarının haklarına saygılı olmak", "Doğruluğundan emin olduğu güvenilir kaynakları takip etmek", "İnternette başkalarıyla alay etmek ve siber zorbalık yapmak"],
                answer: 3, // D
                explanation: "Siber zorbalık yapmak, başkalarını rahatsız etmek ve hakaret etmek dijital vatandaşlık kurallarına tamamen aykırıdır."
            },
            {
                q: "4. Konu: İnsan zekâsı ile yapay zekâ arasındaki en temel fark aşağıdakilerden hangisidir?",
                options: ["Yapay zekânın canlı bir biyolojik varlık olması", "İnsanların vicdan, duygu ve empati ile karar vermesi", "Yapay zekânın hiçbir veriyi hesaplayamaması", "İnsanların hiçbir zaman hata yapmaması"],
                answer: 1, // B
                explanation: "İnsanlar duyguları, vicdanı ve ahlaki değerleriyle karar verirken; yapay zekâ duygusuzdur ve salt veri hesaplaması yapar."
            },
            {
                q: "5. Konu: Bilgisayara sesimizi aktaran mikrofon ile ekrandan bize sesi duyuran hoparlör sırasıyla hangi birimlerdir?",
                options: ["Çıkış Birimi — Giriş Birimi", "Dahili Donanım — Harici Donanım", "Giriş Birimi — Çıkış Birimi", "İşletim Sistemi — Uygulama Yazılımı"],
                answer: 2, // C
                explanation: "Mikrofon sesi içeri aktardığı için GİRİŞ, hoparlör sesi bize sunduğu için ÇIKIŞ birimidir."
            },
            {
                q: "6. Konu: Bilgisayar donanımlarının çalışmasını sağlayan ve kullanıcı ile bilgisayar arasında köprü kuran temel yazılım türü hangisidir?",
                options: ["İşletim Sistemi Yazılımları (Windows, Pardus vb.)", "Kelime İşlemci Programı (Word)", "İnternet Tarayıcısı (Chrome)", "Çizim Programı (Paint)"],
                answer: 0, // A
                explanation: "İşletim sistemi olmadan hiçbir donanım çalışmaz ve hiçbir uygulama açılamaz."
            },
            {
                q: "7. Konu: Bilgisayarların hafıza ve depolama kapasite birimlerinin KÜÇÜKTEN BÜYÜĞE doğru sıralanışı hangisidir?",
                options: ["TB < GB < MB < KB", "Byte < Bit < MB < GB", "GB < MB < KB < Byte", "Bit < Byte < KB < MB < GB < TB"],
                answer: 3, // D
                explanation: "Doğru sıralama en küçükten büyüğe: Bit < Byte < Kilobyte (KB) < Megabyte (MB) < Gigabyte (GB) < Terabyte (TB)'dir."
            },
            {
                q: "8. Konu: 'tatil_fotografi.jpg' isimli bir dosyada '.jpg' kısmı neyi ifade etmektedir?",
                options: ["Dosyanın kaydedildiği klasörü", "Dosyanın uzantısını ve resim türünde olduğunu", "Dosyayı yazan kişinin ismini", "Dosyanın silinmiş olduğunu"],
                answer: 1, // B
                explanation: "Noktadan sonraki kısım dosya uzantısıdır; .jpg ve .png dosyaların resim olduğunu belirtir."
            },
            {
                q: "9. Konu: Bir dosyayı kopyalamak ve başka bir klasöre yapıştırmak için sırasıyla hangi klavye kısayolları kullanılır?",
                options: ["Ctrl + X ve Ctrl + Z", "Ctrl + A ve Ctrl + S", "Ctrl + C ve Ctrl + V", "Ctrl + Z ve Ctrl + Y"],
                answer: 2, // C
                explanation: "Ctrl + C (Copy) kopyalar, Ctrl + V (Paste) yapıştırır."
            },
            {
                q: "10. Konu: Bilgisayarda çok yer kaplayan bir fotoğraf albümünün boyutunu küçültmek ve e-postayla tek bir paket halinde göndermek için hangi işlem yapılır?",
                options: ["Dosyaları Sıkıştırma (ZIP / RAR)", "Dosyaların Adını Silme", "Bilgisayarı Kapatma", "Dosyaları Çöp Kutusuna Atma"],
                answer: 0, // A
                explanation: "Sıkıştırma (ZIP/RAR) dosya boyutunu azaltır ve birden çok dosyayı tek arşiv paketi haline getirir."
            }
        ]
    },

    // ========================================================
    // 🎮 4. SINIF İÇİ TURNUVA VE PEKİŞTİRME OYUNLARI (10 DEV MOD)
    // ========================================================
    hideStandardGames: true,

    extraGames: [
        {
            badge: "Büyük Final Turnuvası 🏆",
            badgeColor: "text-amber-300",
            title: "Bilişim Büyük Finali",
            desc: "1. Tema'nın 1-6. konularını kapsayan 4 aşamalı dev final! Hızlı soru, eşleştirme, sıralama ve şampiyonluk aşaması seni bekliyor!",
            icon: "fa-solid fa-crown",
            iconBg: "bg-amber-500/30 text-amber-300",
            cardGradient: "from-amber-950/90 via-slate-900 to-indigo-950/90",
            border: "border-amber-500/50",
            descColor: "text-amber-100",
            btnText: "Büyük Finale Başla!",
            btnIcon: "fa-solid fa-trophy",
            btnGradient: "from-amber-500 via-orange-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/bilisim_buyuk_finali.html', 'Bilişim Büyük Finali | Öğretmen Bozok')"
        },
        {
            badge: "Şampiyonlar Çarkı 🎡",
            badgeColor: "text-cyan-300",
            title: "Bilişim Çarkıfeleği (1. Tema Şampiyonası)",
            desc: "Akıllı tahtada çarkı çevir, 1. Tema'nın tüm kategorilerinden puanları topla! Jokerleri stratejik kullanarak zirveye çık!",
            icon: "fa-solid fa-dharmachakra",
            iconBg: "bg-cyan-500/30 text-cyan-300",
            cardGradient: "from-blue-950/90 via-slate-900 to-cyan-950/90",
            border: "border-cyan-500/50",
            descColor: "text-cyan-100",
            btnText: "Çarkıfeleği Başlat!",
            btnIcon: "fa-solid fa-play",
            btnGradient: "from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/bilisim_carki_3_hafta.html', 'Bilişim Çarkıfeleği | Öğretmen Bozok')"
        },
        {
            badge: "Sınıf İçi Takım Yarışı ⚡",
            badgeColor: "text-emerald-300",
            title: "Bilişim Takım Yarışı (A vs B Takımı)",
            desc: "Sınıfı ikiye böl: Mavi Takım ve Yeşil Takım! Akıllı tahtada karşılıklı yarışarak 1. Tema şampiyonu takımı belirleyin!",
            icon: "fa-solid fa-people-group",
            iconBg: "bg-emerald-500/30 text-emerald-300",
            cardGradient: "from-emerald-950/90 via-slate-900 to-teal-950/90",
            border: "border-emerald-500/50",
            descColor: "text-emerald-100",
            btnText: "Takım Yarışına Gir!",
            btnIcon: "fa-solid fa-flag-checkered",
            btnGradient: "from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/bilisim_takim_yarisi.html', 'Bilişim Takım Yarışı | Öğretmen Bozok')"
        },
        {
            badge: "Donanım & Yazılım Çarkı 🎯",
            badgeColor: "text-purple-300",
            title: "Teknoloji Çarkı (Donanım, Yazılım & Kapasite)",
            desc: "İç donanım, dış donanım, makine dili ve kapasite merdiveni soruları! Çarkı çevir, takım puanlarını topla!",
            icon: "fa-solid fa-microchip",
            iconBg: "bg-purple-500/30 text-purple-300",
            cardGradient: "from-purple-950/90 via-slate-900 to-indigo-950/90",
            border: "border-purple-500/50",
            descColor: "text-purple-100",
            btnText: "Çarkı Döndür!",
            btnIcon: "fa-solid fa-rotate",
            btnGradient: "from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-black",
            action: "app.openStandaloneGame('games/teknoloji_carki.html', 'Teknoloji Çarkı | Öğretmen Bozok')"
        },
        {
            badge: "0-1 Kod Çözücü 🤖",
            badgeColor: "text-yellow-300",
            title: "Robotun Gizli Mesajı",
            desc: "Makine dili ikili kodları (0 ve 1 sinyalleri) çözerek robotun sakladığı gizli mesajı açığa çıkar!",
            icon: "fa-solid fa-robot",
            iconBg: "bg-yellow-500/30 text-yellow-300",
            cardGradient: "from-amber-950/90 via-slate-900 to-blue-950/90",
            border: "border-yellow-500/50",
            descColor: "text-yellow-100",
            btnText: "Kodu Çöz!",
            btnIcon: "fa-solid fa-unlock-keyhole",
            btnGradient: "from-yellow-500 via-amber-500 to-cyan-500 hover:from-yellow-400 hover:to-cyan-400 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/robotun_gizli_mesaji.html', 'Robotun Gizli Mesajı | Öğretmen Bozok')"
        },
        {
            badge: "Etik & Karar Simülasyonu ⚖️",
            badgeColor: "text-rose-300",
            title: "Teknoloji Mahkemesi",
            desc: "Teknolojinin olumlu ve olumsuz etkilerini yargıla! Duruşma salonunda delilleri incele, doğru kararı ver!",
            icon: "fa-solid fa-gavel",
            iconBg: "bg-rose-500/30 text-rose-300",
            cardGradient: "from-rose-950/90 via-slate-900 to-red-950/90",
            border: "border-rose-500/50",
            descColor: "text-rose-100",
            btnText: "Duruşmaya Başla!",
            btnIcon: "fa-solid fa-scale-balanced",
            btnGradient: "from-rose-500 via-pink-600 to-purple-600 hover:from-rose-400 hover:to-purple-500 text-white font-black",
            action: "app.openStandaloneGame('games/teknoloji_mahkemesi.html', 'Teknoloji Mahkemesi | Öğretmen Bozok')"
        },
        {
            badge: "Zekâ & Görev İstasyonu 🧠",
            badgeColor: "text-cyan-300",
            title: "Yapay Zekâ Görev Merkezi",
            desc: "Veri analizinden karar mekanizmalarına, otonom araçlardan görüntü işlemeye kadar 4 dev yapay zekâ simülasyonu!",
            icon: "fa-solid fa-brain",
            iconBg: "bg-cyan-500/30 text-cyan-300",
            cardGradient: "from-cyan-950/90 via-slate-900 to-indigo-950/90",
            border: "border-cyan-500/50",
            descColor: "text-cyan-100",
            btnText: "Merkeze Bağlan!",
            btnIcon: "fa-solid fa-satellite-dish",
            btnGradient: "from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/yapay_zeka_gorev_merkezi.html', 'Yapay Zekâ Görev Merkezi | Öğretmen Bozok')"
        },
        {
            badge: "7 Dev Mod Bir Arada 📁",
            badgeColor: "text-amber-300",
            title: "Dosya & Klasör Oyun Merkezi",
            desc: "Dosya Dedektifleri, Klasör Düzenleme, Kısayol Ustası, Çöp Kutusu Kurtarma, Arama ve Sıkıştırma tek ekranda!",
            icon: "fa-solid fa-folder-tree",
            iconBg: "bg-amber-500/30 text-amber-300",
            cardGradient: "from-amber-950/90 via-slate-900 to-indigo-950/90",
            border: "border-amber-500/50",
            descColor: "text-amber-100",
            btnText: "Oyun Merkezini Aç!",
            btnIcon: "fa-solid fa-folder-open",
            btnGradient: "from-amber-500 via-orange-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/dosya_klasor_oyun_merkezi.html', 'Dosya & Klasör Oyun Merkezi | Öğretmen Bozok')"
        },
        {
            badge: "Günün Kararları 🚀",
            badgeColor: "text-pink-300",
            title: "Bir Günlük Teknoloji Macerası",
            desc: "Karakterini seç, sabah 08:00'den geceye kadar teknolojik kararlar vererek bilinçli teknoloji puanlarını topla!",
            icon: "fa-solid fa-compass",
            iconBg: "bg-pink-500/30 text-pink-300",
            cardGradient: "from-pink-950/90 via-slate-900 to-purple-950/90",
            border: "border-pink-500/50",
            descColor: "text-pink-100",
            btnText: "Maceraya Atıl!",
            btnIcon: "fa-solid fa-play",
            btnGradient: "from-pink-500 via-rose-600 to-indigo-600 hover:from-pink-400 hover:to-indigo-500 text-white font-black",
            action: "app.openStandaloneGame('games/bir_gunluk_teknoloji_maceras.html', 'Bir Günlük Teknoloji Macerası | Öğretmen Bozok')"
        },
        {
            badge: "Teknik Servis Atölyesi 🛠️",
            badgeColor: "text-emerald-300",
            title: "Bilgisayarı Kurtar (Arıza Çözme)",
            desc: "Mavi ekran, donanım temassızlığı, yavaşlama ve yazılım hatalarını çözerek bilgisayarları çalışır hale getir!",
            icon: "fa-solid fa-screwdriver-wrench",
            iconBg: "bg-emerald-500/30 text-emerald-300",
            cardGradient: "from-emerald-950/90 via-slate-900 to-teal-950/90",
            border: "border-emerald-500/50",
            descColor: "text-emerald-100",
            btnText: "Arızayı Çöz!",
            btnIcon: "fa-solid fa-wrench",
            btnGradient: "from-emerald-500 via-teal-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 text-slate-950 font-black",
            action: "app.openStandaloneGame('games/bilgisayari_kurtar.html', 'Bilgisayarı Kurtar | Öğretmen Bozok')"
        }
    ],

    gameData: null
};

// Çift uyumluluk için değişkenleri global pencereye bağla
window.WEEKTEMA1_TEKRAR_CONTENT = window.WEEKtema1_tekrar_CONTENT;
window.WEEK_tema1_tekrar_CONTENT = window.WEEKtema1_tekrar_CONTENT;
