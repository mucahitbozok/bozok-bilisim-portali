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
        this.initialTimer = 60;
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
        clearInterval(this.timerInterval);

        const data = (typeof app !== 'undefined' && app.getCurrentWeekData) ? app.getCurrentWeekData() : WEEK1_CONTENT;
        this.items = [...(data.gameData?.matchCards || WEEK1_CONTENT.gameData.matchCards)];

        const config = data.gameData?.matchConfig || {};
        this.timer = (typeof config.timer === 'number') ? config.timer : (data.weekInfo?.weekNumber === 3 ? 90 : 60);
        this.initialTimer = this.timer;

        const leftTitle = config.leftTitle || "Bilişim Teknolojileri";
        const rightTitle = config.rightTitle || "Kullanım Alanları";
        const instruction = config.instruction || "💡 <strong>Nasıl Oynanır?</strong> Soldan bir kavrama dokun, ardından sağdan ait olduğu doğru alana/açıklamaya dokunarak eşleştir!";

        // Shuffle arrays
        const leftItems = [...this.items].sort(() => Math.random() - 0.5);
        const rightItems = [...this.items].sort(() => Math.random() - 0.5);

        container.innerHTML = `
            <div class="max-w-5xl mx-auto bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-3 sm:p-6 shadow-2xl border-2 sm:border-4 border-emerald-500">
                <!-- Üst Bilgi Barı -->
                <div class="flex items-center justify-between flex-wrap gap-2.5 sm:gap-4 pb-3 sm:pb-4 border-b border-slate-700">
                    <div class="flex items-center gap-2 sm:gap-3">
                        <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl sm:text-2xl shrink-0">
                            <i class="fa-solid fa-puzzle-piece"></i>
                        </div>
                        <div>
                            <span class="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-bold">Puan & Eşleşme</span>
                            <div class="flex items-center gap-2 sm:gap-4">
                                <span id="match-score" class="text-lg sm:text-2xl font-black text-emerald-400">0 Puan</span>
                                <span id="match-count" class="text-xs sm:text-sm bg-slate-800 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-slate-300">0 / ${this.items.length}</span>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center gap-2 sm:gap-4">
                        <div class="flex items-center gap-1.5 sm:gap-2 bg-slate-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl border border-slate-700">
                            <i class="fa-solid fa-stopwatch text-amber-400 text-base sm:text-xl"></i>
                            <span id="match-timer" class="text-lg sm:text-2xl font-black text-amber-400">${this.timer}s</span>
                        </div>
                        <button onclick="matchGame.resetGame()" class="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold text-xs sm:text-sm text-slate-300 flex items-center gap-1.5 sm:gap-2 transition-all active:scale-95">
                            <i class="fa-solid fa-rotate-right"></i> <span class="hidden xs:inline">Yeniden Başlat</span><span class="xs:hidden">Sıfırla</span>
                        </button>
                    </div>
                </div>

                <!-- Oyun Yönergesi -->
                <div class="bg-emerald-950/50 border border-emerald-500/40 rounded-xl sm:rounded-2xl p-3 sm:p-4 my-3 sm:my-4 text-center text-xs sm:text-sm md:text-base text-emerald-200 font-semibold shadow-inner">
                    ${instruction}
                </div>

                <!-- Eşleştirme Alanı -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-3 sm:mt-4 relative">
                    <!-- Sol Kolon -->
                    <div class="space-y-2.5 sm:space-y-3.5" id="match-left-column">
                        <h4 class="text-center font-black text-slate-200 text-xs sm:text-sm md:text-base tracking-wider uppercase mb-2 bg-slate-800/90 py-2 sm:py-2.5 rounded-xl border border-slate-700">${leftTitle}</h4>
                        ${leftItems.map(item => `
                            <button id="left-${item.id}" onclick="matchGame.selectLeft(${item.id})" class="match-card w-full p-3 sm:p-4 bg-slate-800 hover:bg-slate-750 border-2 border-slate-700 hover:border-blue-400 rounded-xl sm:rounded-2xl text-left font-bold text-white flex items-center gap-2.5 sm:gap-3.5 transition-all active:scale-95 shadow-md text-xs sm:text-sm md:text-base">
                                <div class="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-base sm:text-xl shrink-0">
                                    <i class="${item.icon}"></i>
                                </div>
                                <span class="leading-snug">${item.text}</span>
                            </button>
                        `).join('')}
                    </div>

                    <!-- Sağ Kolon -->
                    <div class="space-y-2.5 sm:space-y-3.5" id="match-right-column">
                        <h4 class="text-center font-black text-slate-200 text-xs sm:text-sm md:text-base tracking-wider uppercase mb-2 bg-slate-800/90 py-2 sm:py-2.5 rounded-xl border border-slate-700">${rightTitle}</h4>
                        ${rightItems.map(item => `
                            <button id="right-${item.id}" onclick="matchGame.selectRight(${item.id})" class="match-card w-full p-3 sm:p-4 bg-slate-800 hover:bg-slate-750 border-2 border-slate-700 hover:border-emerald-400 rounded-xl sm:rounded-2xl text-left font-bold text-white flex items-center gap-2.5 sm:gap-3.5 transition-all active:scale-95 shadow-md text-xs sm:text-sm md:text-base">
                                <div class="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-base sm:text-xl shrink-0">
                                    <i class="${item.rightIcon || 'fa-solid fa-circle-check'}"></i>
                                </div>
                                <span class="leading-snug">${item.category}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>

                <!-- Tebrik Modalı (Tamamlanınca) -->
                <div id="match-success-modal" class="hidden text-center py-6 sm:py-10 space-y-4">
                    <div class="text-5xl sm:text-7xl text-yellow-400 animate-bounce"><i class="fa-solid fa-trophy"></i></div>
                    <h3 class="text-2xl sm:text-3xl font-black text-white">TÜM EŞLEŞTİRMELER TAMAMLANDI! 🎉</h3>
                    <p class="text-emerald-300 text-sm sm:text-lg" id="match-final-msg"></p>
                    <button onclick="matchGame.resetGame()" class="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-sm sm:text-lg rounded-xl sm:rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all">
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
        } else if (window.innerWidth < 768) {
            // Mobilde öğrenci sol kartı seçtiğinde sağ sütuna yumuşak odaklanma sağla
            const rightCol = document.getElementById("match-right-column");
            if (rightCol) {
                const targetY = rightCol.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: targetY, behavior: 'smooth' });
            }
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

        const leftItem = this.items.find(x => x.id === this.selectedLeft);
        const rightItem = this.items.find(x => x.id === this.selectedRight);

        // Hem doğrudan ID eşleşmesi hem de aynı kategoriye/açıklamaya sahip olma toleransı
        const isMatch = (this.selectedLeft === this.selectedRight) || 
                        (leftItem && rightItem && leftItem.category === rightItem.category);

        if (isMatch) {
            // MATCH!
            sounds.playMatchSuccess();
            if (!this.matchedPairs.includes(this.selectedLeft)) this.matchedPairs.push(this.selectedLeft);
            if (!this.matchedPairs.includes(this.selectedRight)) this.matchedPairs.push(this.selectedRight);
            this.score += 150;

            if (leftEl) {
                leftEl.className = "w-full p-3 sm:p-4 bg-emerald-900/50 border-2 border-emerald-400 rounded-xl sm:rounded-2xl font-bold text-emerald-200 flex items-center gap-2.5 sm:gap-3.5 pointer-events-none opacity-90 shadow-inner text-xs sm:text-sm md:text-base";
                leftEl.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400 text-xl sm:text-2xl shrink-0"></i> <span class="line-through opacity-80">${leftItem ? leftItem.text : leftEl.innerText}</span>`;
            }
            if (rightEl) {
                rightEl.className = "w-full p-3 sm:p-4 bg-emerald-900/50 border-2 border-emerald-400 rounded-xl sm:rounded-2xl font-bold text-emerald-200 flex items-center gap-2.5 sm:gap-3.5 pointer-events-none opacity-90 shadow-inner text-xs sm:text-sm md:text-base";
                rightEl.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400 text-xl sm:text-2xl shrink-0"></i> <span class="line-through opacity-80">${rightItem ? rightItem.category : rightEl.innerText}</span>`;
            }

            this.updateStats();

            const completedCount = document.querySelectorAll('#match-left-column .pointer-events-none').length;
            if (completedCount >= this.items.length) {
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
        const elapsed = (this.initialTimer || 60) - this.timer;
        if (msg) msg.innerText = `Harika! ${elapsed} saniyede toplam ${this.score} puan topladın! 🚀`;
        if (modal) modal.classList.remove("hidden");
    }

    resetGame() {
        sounds.playClick();
        this.init("game-container");
    }
}

const matchGame = new MatchGame();
