// ==========================================
// Oyun 2: Kavram & Alan Eşleştirme Arenası (Match-Up)
// Akıllı tahta dokunmatik ve fare ile çift seçimli eşleme
// ==========================================

class MatchGame {
    constructor() {
        this.selectedLeft = null;
        this.selectedRight = null;
        this.matchedPairs = [];
        this.score = 0;
        this.timer = 60;
        this.timerInterval = null;
        this.items = [];
    }

    init(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        this.selectedLeft = null;
        this.selectedRight = null;
        this.matchedPairs = [];
        this.score = 0;
        this.timer = 60;
        clearInterval(this.timerInterval);

        const data = (typeof app !== 'undefined' && app.getCurrentWeekData) ? app.getCurrentWeekData() : WEEK1_CONTENT;
        this.items = [...(data.gameData?.matchCards || WEEK1_CONTENT.gameData.matchCards)];

        // Shuffle arrays
        const leftItems = [...this.items].sort(() => Math.random() - 0.5);
        const rightItems = [...this.items].sort(() => Math.random() - 0.5);

        container.innerHTML = `
            <div class="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-6 shadow-2xl border-4 border-emerald-500">
                <!-- Üst Bilgi Barı -->
                <div class="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-slate-700">
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl">
                            <i class="fa-solid fa-puzzle-piece"></i>
                        </div>
                        <div>
                            <span class="text-xs text-slate-400 uppercase tracking-wider font-bold">Puan & Eşleşme</span>
                            <div class="flex items-center gap-4">
                                <span id="match-score" class="text-2xl font-black text-emerald-400">0 Puan</span>
                                <span id="match-count" class="text-sm bg-slate-800 px-3 py-1 rounded-full text-slate-300">0 / ${this.items.length}</span>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center gap-4">
                        <div class="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-2xl border border-slate-700">
                            <i class="fa-solid fa-stopwatch text-amber-400 text-xl"></i>
                            <span id="match-timer" class="text-2xl font-black text-amber-400">60s</span>
                        </div>
                        <button onclick="matchGame.resetGame()" class="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold text-sm text-slate-300 flex items-center gap-2 transition-all">
                            <i class="fa-solid fa-rotate-right"></i> Yeniden Başlat
                        </button>
                    </div>
                </div>

                <!-- Oyun Yönergesi -->
                <div class="bg-emerald-950/40 border border-emerald-500/30 rounded-2xl p-3 my-4 text-center text-sm text-emerald-200">
                    💡 <strong>Nasıl Oynanır?</strong> Soldan bir teknolojiye dokun, ardından sağdan ait olduğu alana dokunarak eşleştir!
                </div>

                <!-- Eşleştirme Alanı -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 relative">
                    <!-- Sol Kolon (Teknolojiler) -->
                    <div class="space-y-3" id="match-left-column">
                        <h4 class="text-center font-bold text-slate-400 text-xs tracking-wider uppercase mb-2">Bilişim Teknolojileri</h4>
                        ${leftItems.map(item => `
                            <button id="left-${item.id}" onclick="matchGame.selectLeft(${item.id})" class="match-card w-full p-4 bg-slate-800 hover:bg-slate-750 border-2 border-slate-700 hover:border-blue-400 rounded-2xl text-left font-bold text-white flex items-center gap-3 transition-all active:scale-95 shadow-md">
                                <div class="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-lg shrink-0">
                                    <i class="${item.icon}"></i>
                                </div>
                                <span class="text-base">${item.text}</span>
                            </button>
                        `).join('')}
                    </div>

                    <!-- Sağ Kolon (Kullanım Alanları) -->
                    <div class="space-y-3" id="match-right-column">
                        <h4 class="text-center font-bold text-slate-400 text-xs tracking-wider uppercase mb-2">Kullanım Alanları</h4>
                        ${rightItems.map(item => `
                            <button id="right-${item.id}" onclick="matchGame.selectRight(${item.id})" class="match-card w-full p-4 bg-slate-800 hover:bg-slate-750 border-2 border-slate-700 hover:border-emerald-400 rounded-2xl text-left font-bold text-white flex items-center gap-3 transition-all active:scale-95 shadow-md">
                                <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg shrink-0">
                                    <i class="fa-solid fa-layer-group"></i>
                                </div>
                                <span class="text-base">${item.category}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>

                <!-- Tebrik Modalı (Tamamlanınca) -->
                <div id="match-success-modal" class="hidden text-center py-10 space-y-4">
                    <div class="text-7xl text-yellow-400 animate-bounce"><i class="fa-solid fa-trophy"></i></div>
                    <h3 class="text-3xl font-black text-white">TÜM EŞLEŞTİRMELER TAMAMLANDI! 🎉</h3>
                    <p class="text-emerald-300 text-lg" id="match-final-msg"></p>
                    <button onclick="matchGame.resetGame()" class="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-lg rounded-2xl shadow-xl hover:scale-105 transition-all">
                        Tekrar Oyna 🔄
                    </button>
                </div>
            </div>
        `;

        this.startTimer();
    }

    stop() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    startTimer() {
        this.stop();
        this.timerInterval = setInterval(() => {
            const timerEl = document.getElementById("match-timer");
            // Eğer kullanıcı başka bir sekmeye veya ekrana geçtiyse süreyi durdur
            if (!timerEl) {
                this.stop();
                return;
            }

            this.timer--;
            timerEl.innerText = `${this.timer}s`;
            if (this.timer <= 10) {
                timerEl.classList.add("text-rose-500", "animate-pulse");
            }

            if (this.timer <= 0) {
                this.stop();
                sounds.playWrong();
                this.showTimeOut();
            }
        }, 1000);
    }

    showTimeOut() {
        const leftCol = document.getElementById("match-left-column");
        const rightCol = document.getElementById("match-right-column");
        const modal = document.getElementById("match-success-modal");
        const msg = document.getElementById("match-final-msg");

        if (leftCol) leftCol.classList.add("hidden");
        if (rightCol) rightCol.classList.add("hidden");
        if (modal) {
            modal.innerHTML = `
                <div class="text-6xl text-amber-400 mb-2"><i class="fa-solid fa-hourglass-end"></i></div>
                <h3 class="text-2xl sm:text-3xl font-black text-white">SÜRE DOLDU!</h3>
                <p class="text-slate-300 text-sm">Süre bitti ama harika denedin! Eşleşen kartlar: ${this.matchedPairs.length} / ${this.items.length}</p>
                <div class="pt-3">
                    <button onclick="matchGame.resetGame()" class="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-base rounded-2xl shadow-xl hover:scale-105 transition-all">
                        Yeniden Dene 🔄
                    </button>
                </div>
            `;
            modal.classList.remove("hidden");
        }
    }

    selectLeft(id) {
        if (this.matchedPairs.includes(id)) return;
        sounds.playClick();

        if (this.selectedLeft) {
            const prev = document.getElementById(`left-${this.selectedLeft}`);
            if (prev) prev.classList.remove("!border-blue-500", "!bg-blue-900/50", "ring-4", "ring-blue-400/40");
        }

        this.selectedLeft = id;
        const current = document.getElementById(`left-${id}`);
        if (current) current.classList.add("!border-blue-500", "!bg-blue-900/50", "ring-4", "ring-blue-400/40");

        if (this.selectedRight) {
            this.checkMatch();
        }
    }

    selectRight(id) {
        if (this.matchedPairs.includes(id)) return;
        sounds.playClick();

        if (this.selectedRight) {
            const prev = document.getElementById(`right-${this.selectedRight}`);
            if (prev) prev.classList.remove("!border-emerald-500", "!bg-emerald-900/50", "ring-4", "ring-emerald-400/40");
        }

        this.selectedRight = id;
        const current = document.getElementById(`right-${id}`);
        if (current) current.classList.add("!border-emerald-500", "!bg-emerald-900/50", "ring-4", "ring-emerald-400/40");

        if (this.selectedLeft) {
            this.checkMatch();
        }
    }

    checkMatch() {
        const leftEl = document.getElementById(`left-${this.selectedLeft}`);
        const rightEl = document.getElementById(`right-${this.selectedRight}`);

        if (this.selectedLeft === this.selectedRight) {
            // MATCH!
            sounds.playMatchSuccess();
            this.matchedPairs.push(this.selectedLeft);
            this.score += 150;

            if (leftEl) {
                leftEl.className = "w-full p-4 bg-emerald-900/40 border-2 border-emerald-500 rounded-2xl font-bold text-emerald-300 flex items-center gap-3 pointer-events-none opacity-80";
                leftEl.innerHTML = `<i class="fa-solid fa-check text-emerald-400 text-xl"></i> <span>${leftEl.innerText}</span>`;
            }
            if (rightEl) {
                rightEl.className = "w-full p-4 bg-emerald-900/40 border-2 border-emerald-500 rounded-2xl font-bold text-emerald-300 flex items-center gap-3 pointer-events-none opacity-80";
                rightEl.innerHTML = `<i class="fa-solid fa-check text-emerald-400 text-xl"></i> <span>${rightEl.innerText}</span>`;
            }

            this.updateStats();

            if (this.matchedPairs.length === this.items.length) {
                clearInterval(this.timerInterval);
                sounds.playFanfare();
                this.showSuccess();
            }
        } else {
            // WRONG MATCH
            sounds.playWrong();
            if (leftEl) leftEl.classList.add("!border-rose-500", "!bg-rose-900/50", "animate-shake");
            if (rightEl) rightEl.classList.add("!border-rose-500", "!bg-rose-900/50", "animate-shake");

            setTimeout(() => {
                if (leftEl) leftEl.classList.remove("!border-rose-500", "!bg-rose-900/50", "!border-blue-500", "!bg-blue-900/50", "ring-4", "ring-blue-400/40", "animate-shake");
                if (rightEl) rightEl.classList.remove("!border-rose-500", "!bg-rose-900/50", "!border-emerald-500", "!bg-emerald-900/50", "ring-4", "ring-emerald-400/40", "animate-shake");
            }, 600);
        }

        this.selectedLeft = null;
        this.selectedRight = null;
    }

    updateStats() {
        const scoreEl = document.getElementById("match-score");
        const countEl = document.getElementById("match-count");
        if (scoreEl) scoreEl.innerText = `${this.score} Puan`;
        if (countEl) countEl.innerText = `${this.matchedPairs.length} / ${this.items.length}`;
    }

    showSuccess() {
        const leftCol = document.getElementById("match-left-column");
        const rightCol = document.getElementById("match-right-column");
        const modal = document.getElementById("match-success-modal");
        const msg = document.getElementById("match-final-msg");

        if (leftCol) leftCol.classList.add("hidden");
        if (rightCol) rightCol.classList.add("hidden");
        if (msg) msg.innerText = `Harika! ${60 - this.timer} saniyede toplam ${this.score} puan topladın! 🚀`;
        if (modal) modal.classList.remove("hidden");
    }

    resetGame() {
        sounds.playClick();
        this.init("game-container");
    }
}

const matchGame = new MatchGame();
