// ==========================================
// Oyun 3: Hızlı Doğru mu Yanlış mı? (Refleks Oyunu)
// Seri şekilde gelen ifadeleri değerlendirme oyunu
// ==========================================

class ReflexGame {
    constructor() {
        this.statements = [];
        this.currentIndex = 0;
        this.score = 0;
        this.streak = 0;
        this.lives = 3;
        this.maxLives = 3;
        this.timeLeft = 10;
        this.timerInterval = null;
    }

    init(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const data = (typeof app !== 'undefined' && app.getCurrentWeekData) ? app.getCurrentWeekData() : WEEK1_CONTENT;
        this.statements = [...(data.gameData?.reflexStatements || WEEK1_CONTENT.gameData.reflexStatements)].sort(() => Math.random() - 0.5);
        this.currentIndex = 0;
        this.score = 0;
        this.streak = 0;
        this.lives = 3;
        clearInterval(this.timerInterval);

        container.innerHTML = `
            <div class="max-w-3xl mx-auto bg-slate-900 text-white rounded-3xl p-6 shadow-2xl border-4 border-cyan-500">
                <!-- Üst Panel -->
                <div class="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-slate-700">
                    <!-- Canlar -->
                    <div class="flex items-center gap-2" id="reflex-lives">
                        ${this.renderLives()}
                    </div>

                    <!-- Skor & Seri -->
                    <div class="flex items-center gap-4">
                        <div class="text-center">
                            <span class="text-xs text-slate-400 font-bold uppercase">Seri</span>
                            <div id="reflex-streak" class="text-lg font-black text-amber-400 flex items-center gap-1">
                                <i class="fa-solid fa-fire text-orange-500"></i> 0x
                            </div>
                        </div>
                        <div class="text-center">
                            <span class="text-xs text-slate-400 font-bold uppercase">Skor</span>
                            <div id="reflex-score" class="text-2xl font-black text-cyan-400">0</div>
                        </div>
                    </div>

                    <button onclick="reflexGame.resetGame()" class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold text-xs text-slate-300 transition-all">
                        <i class="fa-solid fa-rotate-right"></i> Sıfırla
                    </button>
                </div>

                <!-- Süre Çubuğu -->
                <div class="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden my-4">
                    <div id="reflex-progress" class="bg-cyan-400 h-full w-full transition-all duration-100 ease-linear"></div>
                </div>

                <!-- Kart Alanı -->
                <div id="reflex-card-area" class="my-6 min-h-[180px] flex items-center justify-center text-center p-6 bg-slate-800/80 rounded-3xl border-2 border-slate-700 shadow-inner">
                    <div id="reflex-statement-text" class="text-xl sm:text-2xl font-extrabold text-white leading-relaxed">
                        ${this.statements[0].text}
                    </div>
                </div>

                <!-- Cevap Butonları (Akıllı Tahtada Büyük Butonlar) -->
                <div class="grid grid-cols-2 gap-4 sm:gap-6 mt-6">
                    <button onclick="reflexGame.answer(false)" class="p-5 sm:p-6 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-black text-2xl rounded-2xl shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-all border-b-4 border-red-800">
                        <i class="fa-solid fa-xmark text-3xl"></i> YANLIŞ
                    </button>
                    <button onclick="reflexGame.answer(true)" class="p-5 sm:p-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-2xl rounded-2xl shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-all border-b-4 border-emerald-800">
                        <i class="fa-solid fa-check text-3xl"></i> DOĞRU
                    </button>
                </div>

                <p class="text-xs text-slate-400 text-center mt-4">
                    💡 Klavye ile oynamak için Sol Ok (Yanlış) ve Sağ Ok (Doğru) tuşlarını da kullanabilirsiniz.
                </p>
            </div>
        `;

        this.startCardTimer();
        this.setupKeyboard();
    }

    renderLives() {
        let html = "";
        for (let i = 0; i < this.maxLives; i++) {
            if (i < this.lives) {
                html += `<i class="fa-solid fa-heart text-red-500 text-2xl animate-pulse"></i>`;
            } else {
                html += `<i class="fa-regular fa-heart text-slate-600 text-2xl"></i>`;
            }
        }
        return html;
    }

    stop() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    startCardTimer() {
        this.stop();
        this.timeLeft = 8;

        this.timerInterval = setInterval(() => {
            const progressBar = document.getElementById("reflex-progress");
            const cardArea = document.getElementById("reflex-card-area");

            // Eğer kullanıcı başka bir sekmeye veya butona geçtiyse süreyi durdur
            if (!progressBar || !cardArea) {
                this.stop();
                return;
            }

            this.timeLeft -= 0.1;
            const percentage = Math.max((this.timeLeft / 8) * 100, 0);

            progressBar.style.width = `${percentage}%`;
            if (percentage < 30) {
                progressBar.className = "bg-rose-500 h-full transition-all duration-100 ease-linear";
            } else {
                progressBar.className = "bg-cyan-400 h-full transition-all duration-100 ease-linear";
            }

            if (this.timeLeft <= 0) {
                this.stop();
                this.handleTimeout();
            }
        }, 100);
    }

    handleTimeout() {
        sounds.playWrong();
        this.lives--;
        this.streak = 0;
        this.updateStats();

        if (this.lives <= 0) {
            this.gameOver();
        } else {
            this.nextCard();
        }
    }

    answer(userAnswer) {
        if (this.currentIndex >= this.statements.length || this.lives <= 0) return;
        clearInterval(this.timerInterval);

        const current = this.statements[this.currentIndex];
        const isCorrect = userAnswer === current.correct;
        const cardArea = document.getElementById("reflex-card-area");

        if (isCorrect) {
            sounds.playCorrect();
            this.streak++;
            const multiplier = Math.min(this.streak, 5);
            this.score += 50 * multiplier;

            if (cardArea) {
                cardArea.classList.add("!border-emerald-500", "!bg-emerald-950/60");
            }
        } else {
            sounds.playWrong();
            this.lives--;
            this.streak = 0;

            if (cardArea) {
                cardArea.classList.add("!border-rose-500", "!bg-rose-950/60", "animate-shake");
            }
        }

        this.updateStats();

        setTimeout(() => {
            if (cardArea) {
                cardArea.className = "my-6 min-h-[180px] flex items-center justify-center text-center p-6 bg-slate-800/80 rounded-3xl border-2 border-slate-700 shadow-inner";
            }

            if (this.lives <= 0) {
                this.gameOver();
            } else {
                this.currentIndex++;
                if (this.currentIndex < this.statements.length) {
                    this.nextCard();
                } else {
                    this.victory();
                }
            }
        }, 350);
    }

    nextCard() {
        const textEl = document.getElementById("reflex-statement-text");
        if (textEl && this.statements[this.currentIndex]) {
            textEl.innerText = this.statements[this.currentIndex].text;
        }
        this.startCardTimer();
    }

    updateStats() {
        const livesEl = document.getElementById("reflex-lives");
        const streakEl = document.getElementById("reflex-streak");
        const scoreEl = document.getElementById("reflex-score");

        if (livesEl) livesEl.innerHTML = this.renderLives();
        if (streakEl) streakEl.innerHTML = `<i class="fa-solid fa-fire text-orange-500"></i> ${this.streak}x`;
        if (scoreEl) scoreEl.innerText = this.score;
    }

    setupKeyboard() {
        document.onkeydown = (e) => {
            if (document.getElementById("reflex-card-area")) {
                if (e.key === "ArrowLeft") this.answer(false);
                if (e.key === "ArrowRight") this.answer(true);
            }
        };
    }

    gameOver() {
        clearInterval(this.timerInterval);
        sounds.playWrong();
        const cardArea = document.getElementById("reflex-card-area");
        if (cardArea) {
            cardArea.innerHTML = `
                <div class="space-y-4">
                    <div class="text-6xl text-rose-500"><i class="fa-solid fa-heart-crack"></i></div>
                    <h3 class="text-2xl font-black text-white">OYUN BİTTİ!</h3>
                    <p class="text-slate-300">Toplam Puanın: <strong class="text-yellow-400 text-xl">${this.score}</strong></p>
                    <button onclick="reflexGame.resetGame()" class="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-xl">
                        Tekrar Dene 🔄
                    </button>
                </div>
            `;
        }
    }

    victory() {
        clearInterval(this.timerInterval);
        sounds.playFanfare();
        const cardArea = document.getElementById("reflex-card-area");
        if (cardArea) {
            cardArea.innerHTML = `
                <div class="space-y-4">
                    <div class="text-6xl text-yellow-400 animate-bounce"><i class="fa-solid fa-crown"></i></div>
                    <h3 class="text-2xl font-black text-white">TEBRİKLER! TÜM KARTLARI TAMAMLADIN!</h3>
                    <p class="text-emerald-300">Harika Refleksler! Toplam Skorun: <strong class="text-yellow-400 text-2xl">${this.score}</strong></p>
                    <button onclick="reflexGame.resetGame()" class="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black rounded-xl shadow-xl hover:scale-105 transition-all">
                        Yeniden Oyna 🚀
                    </button>
                </div>
            `;
        }
    }

    resetGame() {
        sounds.playClick();
        this.init("game-container");
    }
}

const reflexGame = new ReflexGame();
