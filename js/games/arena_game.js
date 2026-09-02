// ==========================================
// Oyun 5: Bilişim Teknolojileri Bilgi Arenası & Teknoloji Dedektifleri
// Hazırlayan: Öğretmen Bozok
// ==========================================

class ArenaGame {
    constructor() {
        this.activeWeek = 1;

        // 1. HAFTA SORULARI
        this.week1Questions = [
            {
                topic: "💡 BİLİŞİM KAVRAMI",
                question: "“BİLGİ” ve “İLETİŞİM” kelimelerinin bir araya gelmesiyle oluşan, bilginin toplanması, işlenmesi ve aktarılmasını sağlayan temel kavram hangisidir?",
                options: [
                    "Donanım",
                    "Bilişim",
                    "İnternet",
                    "Algoritma"
                ],
                correct: 1, // B
                explanation: "Harika! Bilgi + İletişim = BİLİŞİM kelimesini oluşturur."
            },
            {
                topic: "🚗 GÜNLÜK YAŞAM VE ULAŞIM",
                question: "Ahmet ve ailesi bilmedikleri bir şehre giderken yollarını bulmak ve en kısa rotayı çizmek için cep telefonundaki harita (navigasyon) uygulamasını açmıştır. Bu durum bilişim teknolojilerinin hangi alandaki kullanımına örnektir?",
                options: [
                    "Sağlık",
                    "Ulaşım",
                    "Bankacılık",
                    "Güvenlik"
                ],
                correct: 1, // B
                explanation: "Tebrikler! Harita ve navigasyon uygulamaları ulaşım alanında hayatımızı kolaylaştırır."
            },
            {
                topic: "⚙️ TEKNOLOJİ KAVRAMI",
                question: "İnsanların hayatını kolaylaştırmak, bir işi daha hızlı ve verimli yapmak için kullandığı bilgi, yöntem, araç ve tekniklerin bütününe ne ad verilir?",
                options: [
                    "Teknoloji",
                    "Sosyal Medya",
                    "Sadece Bilgisayar",
                    "Oyun"
                ],
                correct: 0, // A
                explanation: "Doğru! Hayatımızı kolaylaştırmak için geliştirilen araç, yöntem ve tekniklerin bütününe Teknoloji denir."
            },
            {
                topic: "🏥 SAĞLIK ALANINDA BİLİŞİM",
                question: "Hastaneye gitmeden önce internetten randevu almak (MHRS) ve tahlil sonuçlarını bilgisayardan incelemek teknolojinin hangi alandaki faydasına örnektir?",
                options: [
                    "Mimarlık ve Mühendislik",
                    "Sinema ve Televizyon",
                    "Sağlık",
                    "Üretim ve Sanayi"
                ],
                correct: 2, // C
                explanation: "Çok iyi! Hastane randevu sistemleri ve dijital tahliller sağlık alanındaki bilişim uygulamalarıdır."
            },
            {
                topic: "💬 İLETİŞİM KAVRAMI",
                question: "Bilginin, duygunun veya düşüncenin göndericiden alıcıya çeşitli araçlar veya yollarla aktarılmasına ne ad verilir?",
                options: [
                    "İletişim",
                    "Yazılım",
                    "Geri Dönüşüm",
                    "Depolama"
                ],
                correct: 0, // A
                explanation: "Tebrikler! Duygu, düşünce ve bilgilerin aktarılma sürecine İletişim denir."
            },
            {
                topic: "🎓 EĞİTİM ALANINDA BİLİŞİM",
                question: "Öğretmenimizin sınıfta ders anlatırken kullandığı dokunmatik akıllı tahta ve evde ders videoları izlediğimiz EBA platformu hangi alandadır?",
                options: [
                    "Bankacılık ve Finans",
                    "Eğitim",
                    "Ulaşım ve Seyahat",
                    "Tarım ve Hayvancılık"
                ],
                correct: 1, // B
                explanation: "Harika! Akıllı tahtalar, tabletler ve EBA eğitim alanındaki temel bilişim teknolojileridir."
            },
            {
                topic: "⚖️ FAYDA VE ZARAR DENGESİ",
                question: "Aşağıdakilerden hangisi bilişim teknolojilerinin kontrolsüz ve aşırı kullanımının olumsuz (zararlı) bir sonucudur?",
                options: [
                    "Bilgiye saniyeler içinde ulaşabilmek",
                    "Uzaktaki akrabalarla görüntülü konuşmak",
                    "Hareketsiz kalarak göz ve beden sağlığımızın bozulması",
                    "Ödevleri bilgisayarda daha düzenli hazırlamak"
                ],
                correct: 2, // C
                explanation: "Çok doğru! Saatlerce hareketsiz ekrana bakmak beden sağlığımızı ve gözlerimizi bozar."
            },
            {
                topic: "💳 BANKACILIK VE ALIŞVERİŞ",
                question: "Sokakta para çekmek veya yatırmak için kullandığımız ATM cihazları ile internetten güvenli alışveriş yapmak hangi alana örnektir?",
                options: [
                    "Bankacılık ve Alışveriş",
                    "Güvenlik ve Askeriye",
                    "Sağlık ve İlaç",
                    "Ulaşım ve Trafik"
                ],
                correct: 0, // A
                explanation: "Tebrikler! ATM'ler ve kartlı ödeme sistemleri bankacılık ve alışveriş alanındadır."
            },
            {
                topic: "🛡️ GÜVENLİK VE EMNİYET",
                question: "Şehirlerimizde sokakları ve trafiği 7/24 izleyen MOBESE kameraları bilişim teknolojilerinin hangi alanına girer?",
                options: [
                    "Eğlence ve Müzik",
                    "Güvenlik",
                    "Tarım",
                    "Sağlık"
                ],
                correct: 1, // B
                explanation: "Doğru! MOBESE ve güvenlik kameraları toplum huzurunu sağlamak için Güvenlik alanında kullanılır."
            },
            {
                topic: "🪑 ERGONOMİ VE SAĞLIKLI OTURUŞ",
                question: "Bilgisayar başında çalışırken ekrana olan mesafemiz yaklaşık ne kadar olmalı ve sırtımız nasıl durmalıdır?",
                options: [
                    "Ekrana 10 cm yakın olmalı ve kambur oturulmalı",
                    "Bir kol boyu (50-70 cm) uzakta olmalı ve sırt dik durmalı",
                    "Yatarak bilgisayar kullanılmalı",
                    "Ekran çok yukarıda olmalı ve baş arkaya eğilmeli"
                ],
                correct: 1, // B
                explanation: "Mükemmel! Bir kol boyu mesafe ve 90 derece dik oturuş omurga ve göz sağlığımızı korur."
            }
        ];

        // 2. HAFTA SORULARI (TEKNOLOJİ DEDEKTİFLERİ)
        this.week2Questions = [
            {
                topic: "🌟 OLUMLU ETKİLER",
                question: "Bilişim teknolojilerinin aşağıdakilerden hangisi olumlu etkilerinden biridir?",
                options: [
                    "Hareketsizliği artırması",
                    "Bilgiye kolay ulaşmayı sağlaması",
                    "İnsanları tembelliğe alıştırması",
                    "İnsanların birbirinden uzaklaşması"
                ],
                correct: 1, // B
                explanation: "Bilişim teknolojileri bilgiye kolay ulaşmamızı sağlayabilir."
            },
            {
                topic: "⚠️ OLUMSUZ ETKİLER",
                question: "Aşağıdakilerden hangisi bilişim teknolojilerinin olumsuz etkilerinden biridir?",
                options: [
                    "Zamandan tasarruf sağlamak",
                    "Hızlı haberleşmek",
                    "Hareketsiz yaşamı artırmak",
                    "Bilgiye kolay ulaşmak"
                ],
                correct: 2, // C
                explanation: "Aşırı ve kontrolsüz kullanım hareketsiz yaşamı artırarak sağlığı olumsuz etkileyebilir."
            },
            {
                topic: "🎯 ETKİYİ BUL!",
                question: "Ali her gün uzun süre bilgisayar oyunu oynuyor ve gün içinde çok az hareket ediyor. Bu durum aşağıdakilerden hangisine örnektir?",
                options: [
                    "Olumlu etki",
                    "Olumsuz etki",
                    "Zamandan tasarruf",
                    "Hızlı haberleşme"
                ],
                correct: 1, // B
                explanation: "Uzun süre hareketsiz kalmak sağlığımız açısından olumsuz sonuçlara yol açabilir."
            },
            {
                topic: "🌐 BİLGİYE ULAŞIM",
                question: "Bir öğrenci interneti kullanarak araştırma yapıyor ve ihtiyaç duyduğu bilgiye kısa sürede ulaşıyor. Bu durum hangi olumlu etkiyi gösterir?",
                options: [
                    "Hareketsizlik",
                    "Bağımlılık",
                    "Bilgiye kolay ulaşma",
                    "İnsanların birbirinden uzaklaşması"
                ],
                correct: 2, // C
                explanation: "İnternet ve bilişim araçları doğru bilgiye en kısa sürede ve kolayca ulaşmamıza yardım eder."
            },
            {
                topic: "🩺 DİJİTAL SAĞLIK",
                question: "Aşağıdakilerden hangisi teknolojik araçların yanlış veya fazla kullanımının sonuçlarından biri olabilir?",
                options: [
                    "Boyun ve kas ağrıları",
                    "Zamandan tasarruf",
                    "Bilgiye kolay ulaşma",
                    "Hızlı haberleşme"
                ],
                correct: 0, // A
                explanation: "Ekran başında yanlış duruş ve saatlerce hareketsiz kalmak boyun ve kas ağrılarına yol açar."
            },
            {
                topic: "👁️ GÖRME SAĞLIĞI",
                question: "Aşağıdakilerden hangisi teknolojinin fazla kullanımının görme sağlığı üzerindeki olası etkisidir?",
                options: [
                    "Görme sorunları",
                    "Daha hızlı iletişim",
                    "Bilgiye daha kolay ulaşma",
                    "Maliyet azalması"
                ],
                correct: 0, // A
                explanation: "Uzun süre mola vermeden ekrana bakmak göz yorgunluğuna ve görme sorunlarına sebep olabilir."
            },
            {
                topic: "🤝 ETKİYİ BUL!",
                question: "Zeynep teknolojik cihazlarla çok fazla zaman geçiriyor ve arkadaşlarıyla yüz yüze iletişime daha az zaman ayırıyor. Bu durum aşağıdakilerden hangisine örnektir?",
                options: [
                    "Olumlu etki",
                    "Olumsuz etki",
                    "Zamandan tasarruf",
                    "Bilgiye kolay ulaşma"
                ],
                correct: 1, // B
                explanation: "Yüz yüze iletişim yerine ekrana aşırı vakit ayırmak sosyal bağların ve arkadaşlıkların zayıflamasına neden olur."
            },
            {
                topic: "⚖️ ETKİ AYRIMI",
                question: "Aşağıdakilerden hangisi teknolojinin olumlu etkilerinden biri değildir?",
                options: [
                    "Hayatı kolaylaştırması",
                    "Zamandan tasarruf sağlaması",
                    "Hızlı haberleşmeyi sağlaması",
                    "Hareketsiz yaşamı artırması"
                ],
                correct: 3, // D
                explanation: "Hareketsiz yaşamı artırması teknolojinin olumsuz etkilerinden biridir."
            },
            {
                topic: "🛡️ SAĞLIK DEDEKTİFİ",
                question: "Bir öğrenci teknolojik cihazları yanlış ve fazla kullanmaya devam ediyor. Aşağıdakilerden hangisi ortaya çıkabilecek sorunlardan biridir?",
                options: [
                    "Teknoloji ve oyun bağımlılığı",
                    "Bilgiye kolay ulaşma",
                    "Hızlı haberleşme",
                    "Zamandan tasarruf"
                ],
                correct: 0, // A
                explanation: "Kontrolsüz ve sınırsız kullanım teknoloji ve oyun bağımlılığına sebep olabilir."
            },
            {
                topic: "🏆 BÜYÜK FİNAL",
                question: "Aşağıdakilerden hangisi teknolojiyi daha bilinçli kullanmaya yönelik en uygun davranıştır?",
                options: [
                    "Teknolojik cihazları gün boyunca hiç bırakmamak",
                    "Teknolojiyi yalnızca eğlence amacıyla kullanmak",
                    "Teknolojinin olumlu ve olumsuz etkilerini fark ederek kullanmak",
                    "Günün büyük bölümünü hareketsiz geçirmek"
                ],
                correct: 2, // C
                explanation: "Bilinçli dedektif; teknolojinin olumlu ve olumsuz yönlerini bilerek dengeli kullanan kişidir."
            }
        ];

        this.questions = this.week1Questions;
        this.currentIndex = 0;
        this.score = 0;
        this.correctCount = 0;
        this.wrongCount = 0;
        this.answered = false;
    }

    init(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        const week = (typeof app !== 'undefined' && app.currentWeek) ? app.currentWeek : 1;
        this.activeWeek = week;

        if (this.activeWeek === 2) {
            this.gameTitle = "Teknoloji Dedektifleri Arenası";
            this.gameSubtitle = "2. Hafta – Bilişim Teknolojilerinin Etkileri ve Dijital Sağlık";
            this.gameBadge = "🕵️‍♂️ 2. Hafta Özel Süper Tekrar Oyunu";
            this.questions = this.week2Questions;
        } else {
            this.gameTitle = "Bilişim Teknolojileri Bilgi Arenası";
            this.gameSubtitle = "1. Hafta – Bilişim Teknolojilerinin Günlük Yaşamdaki Önemi";
            this.gameBadge = "⭐ 1. Hafta Özel Süper Tekrar Oyunu";
            this.questions = this.week1Questions;
        }

        this.renderLobby();
    }

    renderLobby() {
        if (!this.container) return;

        const isWeek2 = (this.activeWeek === 2);

        this.container.innerHTML = `
            <div class="max-w-3xl mx-auto bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border-4 ${isWeek2 ? 'border-yellow-400' : 'border-indigo-500/50'} space-y-8 animate-pop">
                <!-- Üst Geri Butonu -->
                <div class="flex items-center justify-between border-b border-slate-800 pb-4">
                    <button onclick="app.renderGameHub()" class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-bold text-xs flex items-center gap-2 transition-all">
                        <i class="fa-solid fa-arrow-left"></i> Oyunlar Menüsüne Dön
                    </button>
                    <span class="px-3 py-1 ${isWeek2 ? 'bg-amber-500/20 text-yellow-300 border-amber-400/40' : 'bg-yellow-400/20 text-yellow-300 border-yellow-400/30'} font-extrabold text-xs rounded-full border">
                        ${this.gameBadge}
                    </span>
                </div>

                <!-- Giriş İçeriği -->
                <div class="text-center py-6 space-y-6 max-w-2xl mx-auto">
                    <div class="inline-flex p-4 bg-gradient-to-tr ${isWeek2 ? 'from-amber-500 to-yellow-300' : 'from-yellow-500 to-amber-300'} text-slate-950 rounded-3xl text-5xl shadow-xl animate-bounce">
                        <i class="fa-solid ${isWeek2 ? 'fa-magnifying-glass' : 'fa-crown'}"></i>
                    </div>

                    <div>
                        <h1 class="text-3xl sm:text-4xl font-black text-white">${this.gameTitle}</h1>
                        <h2 class="text-base sm:text-lg font-bold ${isWeek2 ? 'text-yellow-200' : 'text-indigo-300'} mt-1">${this.gameSubtitle}</h2>
                    </div>

                    <div class="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 text-sm text-slate-300 leading-relaxed text-left space-y-2">
                        <div class="font-bold text-yellow-300 flex items-center gap-2">
                            <i class="fa-solid fa-bullseye"></i> Arenanın Kuralları:
                        </div>
                        <ul class="space-y-1 text-xs sm:text-sm text-slate-200">
                            <li>✨ <strong>Toplam 10 Soru:</strong> Her doğru soru 10 Puan kazandırır.</li>
                            <li>💯 <strong>100 Tam Puan Hedefi:</strong> ${isWeek2 ? 'Teknoloji Dedektifi Ustası' : 'Bilişim Uzmanı'} rozetini kazanmak için yarış!</li>
                            <li>💡 <strong>Anlık Açıklamalar:</strong> Her soruda doğru cevabın nedenini öğren.</li>
                        </ul>
                    </div>

                    <div class="flex justify-center gap-4 flex-wrap pt-2">
                        <button onclick="arenaGame.startQuiz()" class="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-xl rounded-2xl shadow-2xl flex items-center gap-3 transition-all hover:scale-105 active:scale-95 border-2 border-emerald-300">
                            <i class="fa-solid fa-rocket"></i>
                            <span>Arenaya Başla!</span>
                        </button>
                    </div>
                </div>

                <div class="border-t border-slate-800 pt-4 text-center text-xs text-slate-500">
                    👨‍🏫 Hazırlayan: Öğretmen Bozok • Bozok Bilişim Portalı
                </div>
            </div>
        `;
    }

    startQuiz() {
        sounds.playClick();
        this.currentIndex = 0;
        this.score = 0;
        this.correctCount = 0;
        this.wrongCount = 0;
        this.renderQuestionScreen();
    }

    renderQuestionScreen() {
        if (!this.container) return;

        this.answered = false;
        this.selectedIdx = null;
        const q = this.questions[this.currentIndex];
        const progress = ((this.currentIndex + 1) / this.questions.length) * 100;
        const isLast = (this.currentIndex === this.questions.length - 1);
        const isWeek2 = (this.activeWeek === 2);

        this.container.innerHTML = `
            <div class="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 ${isWeek2 ? 'border-yellow-400/80' : 'border-indigo-500/50'} space-y-6 animate-pop">
                <!-- Üst Bilgi Barı -->
                <div class="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-slate-700">
                    <button onclick="arenaGame.renderLobby()" class="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all border border-slate-700">
                        <i class="fa-solid fa-arrow-left"></i> Çıkış
                    </button>
                    <div class="flex items-center gap-3">
                        <span class="px-3 py-1 ${isWeek2 ? 'bg-amber-500/20 text-yellow-300 border-amber-500/30' : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'} font-extrabold text-xs rounded-xl border">
                            Soru: ${this.currentIndex + 1} / ${this.questions.length}
                        </span>
                        <span class="px-4 py-1 bg-yellow-500/20 text-yellow-300 font-black text-sm rounded-xl border border-yellow-500/30 flex items-center gap-1.5">
                            <i class="fa-solid fa-star"></i> ${this.score} Puan
                        </span>
                    </div>
                </div>

                <!-- İlerleme Çubuğu -->
                <div class="w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                    <div class="h-full bg-gradient-to-r ${isWeek2 ? 'from-amber-400 to-yellow-300' : 'from-blue-500 via-indigo-500 to-purple-500'} transition-all duration-300 rounded-full" style="width: ${progress}%"></div>
                </div>

                <!-- Soru Kartı -->
                <div class="bg-slate-800/90 rounded-2xl p-6 border-l-8 ${isWeek2 ? 'border-yellow-400' : 'border-indigo-500'} shadow-lg space-y-2">
                    <div class="text-xs font-black ${isWeek2 ? 'text-yellow-300' : 'text-indigo-400'} uppercase tracking-wider flex items-center gap-2">
                        <i class="fa-solid fa-tag"></i> ${q.topic}
                    </div>
                    <h3 class="text-lg sm:text-xl font-bold text-white leading-relaxed">
                        ${q.question}
                    </h3>
                </div>

                <!-- Seçenekler Grid -->
                <div id="arena-options-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    ${q.options.map((opt, idx) => `
                        <button id="arena-opt-${idx}" onclick="arenaGame.selectOption(${idx})" class="p-4 bg-slate-800 hover:bg-slate-750 border-2 border-slate-700 hover:border-yellow-400/60 rounded-2xl text-left font-bold text-white flex items-center gap-3.5 transition-all shadow-md active:scale-95 group">
                            <div class="w-9 h-9 rounded-xl bg-slate-700 group-hover:bg-yellow-400 text-yellow-300 group-hover:text-slate-950 font-black text-sm flex items-center justify-center shrink-0 transition-colors">
                                ${String.fromCharCode(65 + idx)}
                            </div>
                            <span class="text-sm sm:text-base leading-snug flex-1">${opt}</span>
                        </button>
                    `).join('')}
                </div>

                <!-- Geri Bildirim Açıklama Paneli (Cevaptan sonra açılır) -->
                <div id="arena-feedback" class="hidden rounded-2xl p-4 sm:p-5 border-2 space-y-1 animate-pop">
                    <div id="arena-feedback-title" class="font-black text-base flex items-center gap-2"></div>
                    <div id="arena-feedback-desc" class="text-xs sm:text-sm leading-relaxed text-slate-200"></div>
                </div>

                <!-- Sonraki Soru Butonu (Cevaptan sonra görünür) -->
                <div class="flex justify-between items-center pt-2">
                    <button onclick="arenaGame.prevQuestion()" ${this.currentIndex === 0 ? 'disabled' : ''} class="px-5 py-3 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none text-slate-200 font-bold text-xs rounded-xl border border-slate-700 flex items-center gap-2">
                        <i class="fa-solid fa-arrow-left"></i> Önceki Soru
                    </button>

                    <button id="arena-next-btn" onclick="arenaGame.nextQuestion()" class="hidden px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-base rounded-2xl shadow-xl flex items-center gap-2 transition-all hover:scale-105 animate-pulse">
                        <span>${isLast ? 'Sonuçları Gör 🏆' : 'Sonraki Soru ➔'}</span>
                    </button>
                </div>
            </div>
        `;
    }

    selectOption(selectedIdx) {
        if (this.answered) return;
        this.answered = true;
        this.selectedIdx = selectedIdx;

        const q = this.questions[this.currentIndex];
        const isCorrect = (selectedIdx === q.correct);
        const letters = ['A', 'B', 'C', 'D'];

        // Butonları kilitle ve renklendir
        for (let i = 0; i < q.options.length; i++) {
            const btn = document.getElementById(`arena-opt-${i}`);
            if (!btn) continue;
            btn.disabled = true;

            if (i === q.correct) {
                btn.className = "p-4 bg-emerald-950/80 border-2 border-emerald-500 rounded-2xl text-left font-bold text-white flex items-center gap-3.5 shadow-lg ring-2 ring-emerald-400/50";
            }
            if (i === selectedIdx && !isCorrect) {
                btn.className = "p-4 bg-rose-950/80 border-2 border-rose-500 rounded-2xl text-left font-bold text-white flex items-center gap-3.5 shadow-lg animate-shake";
            }
        }

        const feedbackEl = document.getElementById("arena-feedback");
        const fbTitle = document.getElementById("arena-feedback-title");
        const fbDesc = document.getElementById("arena-feedback-desc");
        const nextBtn = document.getElementById("arena-next-btn");

        if (isCorrect) {
            this.score += 10;
            this.correctCount++;
            sounds.playCorrect();

            if (feedbackEl) {
                feedbackEl.className = "rounded-2xl p-4 sm:p-5 border-2 border-emerald-500/50 bg-emerald-950/60 space-y-1 animate-pop";
                fbTitle.className = "font-black text-base text-emerald-400 flex items-center gap-2";
                fbTitle.innerHTML = `<i class="fa-solid fa-circle-check text-xl"></i> Harika! Doğru Cevap (+10 Puan)`;
                fbDesc.innerHTML = `💡 <strong>Açıklama:</strong> ${q.explanation}`;
                feedbackEl.classList.remove("hidden");
            }
        } else {
            this.wrongCount++;
            sounds.playWrong();

            if (feedbackEl) {
                feedbackEl.className = "rounded-2xl p-4 sm:p-5 border-2 border-rose-500/50 bg-rose-950/60 space-y-1 animate-pop";
                fbTitle.className = "font-black text-base text-rose-400 flex items-center gap-2";
                fbTitle.innerHTML = `<i class="fa-solid fa-circle-xmark text-xl"></i> Tekrar düşün! Teknolojinin etkisini bulmaya çalış. (Doğru: [${letters[q.correct]}])`;
                fbDesc.innerHTML = `💡 <strong>Açıklama:</strong> ${q.explanation}`;
                feedbackEl.classList.remove("hidden");
            }
        }

        if (nextBtn) {
            nextBtn.classList.remove("hidden");
        }
    }

    prevQuestion() {
        if (this.currentIndex > 0) {
            sounds.playClick();
            this.currentIndex--;
            this.renderQuestionScreen();
        }
    }

    nextQuestion() {
        sounds.playClick();
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.renderQuestionScreen();
        } else {
            this.finishQuiz();
        }
    }

    finishQuiz() {
        sounds.playFanfare();
        if (!this.container) return;

        const isWeek2 = (this.activeWeek === 2);
        let badge = "";
        let badgeColor = "";

        if (this.score >= 90) {
            badge = isWeek2 ? "Teknoloji Dedektifi Ustası! 🕵️‍♂️🥇" : "Bilişim Arenası Şampiyonu! 🏆";
            badgeColor = "from-yellow-400 to-amber-500 text-slate-950";
        } else if (this.score >= 70) {
            badge = isWeek2 ? "Çok İyi Dedektif! 🥈" : "Bilişim Kıdemli Kaptanı! 🥈";
            badgeColor = "from-cyan-400 to-blue-500 text-white";
        } else if (this.score >= 50) {
            badge = isWeek2 ? "İyi Gidiyorsun! 🥉" : "Bilişim Kaşifi! 🥉";
            badgeColor = "from-emerald-400 to-teal-500 text-slate-950";
        } else {
            badge = "Bir Kez Daha Tekrar Edelim! 🔄";
            badgeColor = "from-rose-500 to-orange-500 text-white";
        }

        this.container.innerHTML = `
            <div class="max-w-3xl mx-auto bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border-4 ${isWeek2 ? 'border-yellow-400' : 'border-indigo-500/50'} text-center space-y-6 animate-pop">
                
                <div class="w-24 h-24 rounded-full bg-gradient-to-tr ${badgeColor} mx-auto flex items-center justify-center text-5xl shadow-2xl animate-bounce">
                    <i class="fa-solid ${isWeek2 ? 'fa-award' : 'fa-trophy'}"></i>
                </div>

                <div class="space-y-1">
                    <span class="px-3.5 py-1 bg-yellow-400/20 text-yellow-300 font-black rounded-xl text-xs uppercase tracking-widest border border-yellow-400/30">
                        ${isWeek2 ? 'DEDEKTİF RAPORU' : 'ARENA SONUÇ RAPORU'}
                    </span>
                    <h2 class="text-3xl sm:text-4xl font-black text-white">${isWeek2 ? 'TEKNOLOJİ DEDEKTİFİ RAPORUN' : 'Tebrikler! Arena Tamamlandı!'}</h2>
                </div>

                <!-- Skor Kartı -->
                <div class="p-5 bg-slate-800/90 rounded-2xl border border-slate-700 inline-block px-10 shadow-inner">
                    <div class="text-xs text-slate-400 uppercase font-extrabold tracking-wider">TOPLAM PUANIN</div>
                    <div class="text-5xl sm:text-6xl font-black text-yellow-400 my-1">${this.score} <span class="text-2xl text-slate-400 font-bold">/ 100</span></div>
                    <div class="px-4 py-1.5 rounded-full text-xs sm:text-sm font-black mt-2 bg-gradient-to-r ${badgeColor}">
                        ${badge}
                    </div>
                </div>

                <!-- İstatistikler -->
                <div class="grid grid-cols-2 gap-4 max-w-md mx-auto text-sm">
                    <div class="p-4 bg-emerald-950/60 rounded-2xl border border-emerald-500/40 text-emerald-300">
                        <div class="text-2xl font-black">${this.correctCount}</div>
                        <div class="text-xs font-semibold">Doğru Cevap</div>
                    </div>
                    <div class="p-4 bg-rose-950/60 rounded-2xl border border-rose-500/40 text-rose-300">
                        <div class="text-2xl font-black">${this.wrongCount}</div>
                        <div class="text-xs font-semibold">Yanlış Cevap</div>
                    </div>
                </div>

                ${isWeek2 ? `
                <!-- 2. Hafta Dedektiflik Maddeleri -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto text-xs sm:text-sm">
                    <div class="p-3 bg-slate-850 rounded-xl border border-emerald-500/30 flex items-center gap-2.5 text-emerald-200">
                        <i class="fa-solid fa-circle-check text-emerald-400 text-base shrink-0"></i>
                        <span>Teknolojinin olumlu etkilerini biliyorum.</span>
                    </div>
                    <div class="p-3 bg-slate-850 rounded-xl border border-emerald-500/30 flex items-center gap-2.5 text-emerald-200">
                        <i class="fa-solid fa-circle-check text-emerald-400 text-base shrink-0"></i>
                        <span>Olumsuz etkilerini fark edebiliyorum.</span>
                    </div>
                    <div class="p-3 bg-slate-850 rounded-xl border border-emerald-500/30 flex items-center gap-2.5 text-emerald-200">
                        <i class="fa-solid fa-circle-check text-emerald-400 text-base shrink-0"></i>
                        <span>Dijital sağlığımı korumanın önemini biliyorum.</span>
                    </div>
                    <div class="p-3 bg-slate-850 rounded-xl border border-emerald-500/30 flex items-center gap-2.5 text-emerald-200">
                        <i class="fa-solid fa-circle-check text-emerald-400 text-base shrink-0"></i>
                        <span>Teknolojiyi bilinçli kullanabilirim.</span>
                    </div>
                </div>

                <div class="p-4 bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 rounded-2xl border border-yellow-400/40 text-yellow-200 font-bold text-xs sm:text-sm max-w-xl mx-auto">
                    “Teknoloji hayatımızı kolaylaştırır. Önemli olan onu nasıl kullandığımızdır!”
                </div>
                ` : ''}

                <!-- Butonlar -->
                <div class="flex justify-center gap-4 flex-wrap pt-2">
                    <button onclick="arenaGame.startQuiz()" class="px-7 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-sm sm:text-base rounded-2xl shadow-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95 border-2 border-emerald-300">
                        <i class="fa-solid fa-rotate-right"></i>
                        <span>Tekrar Oyna</span>
                    </button>
                    <button onclick="arenaGame.renderLobby()" class="px-7 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm sm:text-base rounded-2xl shadow-lg flex items-center gap-2 transition-all border border-slate-700">
                        <i class="fa-solid fa-house"></i>
                        <span>Arena Menüsü</span>
                    </button>
                </div>
            </div>
        `;
    }

    stop() {
        // Gerekli temizlik
    }
}

const arenaGame = new ArenaGame();
window.arenaGame = arenaGame;
