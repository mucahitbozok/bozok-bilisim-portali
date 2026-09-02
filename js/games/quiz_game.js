// ==========================================
// Oyun 1: Bilişim Çarkıfeleği & Bilgi Yarışması
// Akıllı tahtada sınıf içi yarışma için tasarlandı.
// ==========================================

class WheelQuizGame {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.isSpinning = false;
        this.currentAngle = 0;
        this.score = 0;
        this.multiplier = 1;
        this.lifelines = { fiftyFifty: true, doublePoints: false };
        this.questions = [];
        this.currentQuestion = null;
        this.colors = [
            "#3B82F6", "#10B981", "#F59E0B", "#EC4899",
            "#8B5CF6", "#06B6D4", "#EF4444", "#84CC16"
        ];
        this.segments = [
            { text: "100 Puan", pts: 100 },
            { text: "200 Puan", pts: 200 },
            { text: "50 Puan", pts: 50 },
            { text: "300 Puan", pts: 300 },
            { text: "150 Puan", pts: 150 },
            { text: "2X Katla!", pts: "2X" },
            { text: "100 Puan", pts: 100 },
            { text: "Süper 500", pts: 500 }
        ];
    }

    init(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const data = (typeof app !== 'undefined' && app.getCurrentWeekData) ? app.getCurrentWeekData() : WEEK1_CONTENT;
        this.questions = [...(data.gameData?.wheelQuiz || WEEK1_CONTENT.gameData.wheelQuiz)];
        this.score = 0;
        this.multiplier = 1;
        this.lifelines = { fiftyFifty: true, doublePoints: false };

        container.innerHTML = `
            <div class="max-w-4xl mx-auto bg-slate-900/90 text-white rounded-3xl p-6 shadow-2xl border-4 border-yellow-400">
                <!-- Üst Bilgi Barı -->
                <div class="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-slate-700">
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 rounded-2xl bg-yellow-400/20 text-yellow-300 flex items-center justify-center text-2xl">
                            <i class="fa-solid fa-trophy"></i>
                        </div>
                        <div>
                            <span class="text-xs text-slate-400 uppercase tracking-wider font-bold">Toplam Puan</span>
                            <div id="wheel-score" class="text-3xl font-black text-yellow-400">0</div>
                        </div>
                    </div>

                    <div class="flex items-center gap-3">
                        <button id="btn-5050" onclick="wheelGame.useFiftyFifty()" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold text-sm flex items-center gap-2 border border-indigo-400 shadow-md transition-all">
                            <i class="fa-solid fa-wand-magic"></i> %50 Joker
                        </button>
                        <button onclick="wheelGame.resetGame()" class="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold text-sm text-slate-300 flex items-center gap-2 transition-all">
                            <i class="fa-solid fa-rotate-right"></i> Sıfırla
                        </button>
                    </div>
                </div>

                <!-- Oyun Alanı -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
                    <!-- Çark Alanı -->
                    <div class="lg:col-span-6 flex flex-col items-center justify-center relative">
                        <div class="relative w-[320px] h-[320px] sm:w-[360px] sm:h-[360px]">
                            <!-- Gösterge Oku -->
                            <div class="absolute -top-4 left-1/2 -translate-x-1/2 z-20 text-yellow-400 text-4xl drop-shadow-md animate-bounce">
                                <i class="fa-solid fa-caret-down"></i>
                            </div>
                            <!-- Canvas Çark -->
                            <canvas id="wheel-canvas" width="360" height="360" class="rounded-full shadow-2xl border-4 border-slate-700"></canvas>
                            <!-- Merkez Buton -->
                            <button id="spin-btn" onclick="wheelGame.spin()" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-500 to-amber-300 text-slate-950 font-black text-lg shadow-2xl flex items-center justify-center border-4 border-white hover:scale-110 active:scale-95 transition-all z-10">
                                ÇEVİR!
                            </button>
                        </div>
                        <p class="text-xs text-slate-400 mt-3 text-center">Çevir butonuna bas veya çarka dokun!</p>
                    </div>

                    <!-- Soru / Durum Paneli -->
                    <div class="lg:col-span-6">
                        <div id="wheel-question-box" class="bg-slate-800/80 rounded-2xl p-6 border-2 border-slate-700 min-h-[300px] flex flex-col justify-center items-center text-center">
                            <div class="text-6xl text-yellow-400/30 mb-4 animate-pulse">
                                <i class="fa-solid fa-dharmachakra"></i>
                            </div>
                            <h3 class="text-xl font-bold text-white mb-2">Çarkı Çevirmeye Hazır mısın?</h3>
                            <p class="text-slate-300 text-sm max-w-xs">
                                Çarkı çevir, gelen puana göre sorulan bilişim sorusunu doğru bilerek puanları topla!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.canvas = document.getElementById("wheel-canvas");
        if (this.canvas) {
            this.ctx = this.canvas.getContext("2d");
            this.drawWheel();
        }
    }

    drawWheel() {
        if (!this.ctx || !this.canvas) return;
        const numSegments = this.segments.length;
        const arc = (2 * Math.PI) / numSegments;
        const radius = this.canvas.width / 2;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < numSegments; i++) {
            const angle = this.currentAngle + i * arc;
            this.ctx.beginPath();
            this.ctx.fillStyle = this.colors[i % this.colors.length];
            this.ctx.moveTo(radius, radius);
            this.ctx.arc(radius, radius, radius - 6, angle, angle + arc);
            this.ctx.lineTo(radius, radius);
            this.ctx.fill();
            this.ctx.strokeStyle = "#ffffff";
            this.ctx.lineWidth = 3;
            this.ctx.stroke();

            // Segment Yazısı
            this.ctx.save();
            this.ctx.translate(radius, radius);
            this.ctx.rotate(angle + arc / 2);
            this.ctx.textAlign = "right";
            this.ctx.fillStyle = "#ffffff";
            this.ctx.font = "bold 15px sans-serif";
            this.ctx.shadowColor = "rgba(0,0,0,0.6)";
            this.ctx.shadowBlur = 4;
            this.ctx.fillText(this.segments[i].text, radius - 20, 5);
            this.ctx.restore();
        }
    }

    spin() {
        if (this.isSpinning) return;
        sounds.playClick();
        this.isSpinning = true;

        const spinBtn = document.getElementById("spin-btn");
        if (spinBtn) spinBtn.disabled = true;

        const extraRotations = 4 + Math.random() * 4;
        const targetAngle = this.currentAngle + extraRotations * 2 * Math.PI;
        const duration = 3500;
        const startTime = performance.now();
        const startAngle = this.currentAngle;

        let lastTickAngle = startAngle;

        const animate = (time) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            this.currentAngle = startAngle + (targetAngle - startAngle) * easeOut;

            if (Math.abs(this.currentAngle - lastTickAngle) > 0.4) {
                sounds.playWheelTick();
                lastTickAngle = this.currentAngle;
            }

            this.drawWheel();

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.isSpinning = false;
                if (spinBtn) spinBtn.disabled = false;
                this.onSpinComplete();
            }
        };

        requestAnimationFrame(animate);
    }

    onSpinComplete() {
        const numSegments = this.segments.length;
        const arc = (2 * Math.PI) / numSegments;
        // Normalize angle (top arrow is at -PI/2)
        const normalizedAngle = (1.5 * Math.PI - (this.currentAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
        const winningIndex = Math.floor(normalizedAngle / arc) % numSegments;
        const winningSegment = this.segments[winningIndex];

        let isDouble = false;
        if (winningSegment.pts === "2X") {
            this.multiplier = 2;
            sounds.playMatchSuccess();
            isDouble = true;
        }

        const pts = typeof winningSegment.pts === "number" ? winningSegment.pts * this.multiplier : 100 * this.multiplier;
        this.showQuestion(pts, isDouble);
    }

    stop() {
        this.isSpinning = false;
    }

    showQuestion(points, isDouble = false) {
        const data = (typeof app !== 'undefined' && app.getCurrentWeekData) ? app.getCurrentWeekData() : WEEK1_CONTENT;
        if (this.questions.length === 0) {
            this.questions = [...(data.gameData?.wheelQuiz || WEEK1_CONTENT.gameData.wheelQuiz)];
        }

        const randomIndex = Math.floor(Math.random() * this.questions.length);
        this.currentQuestion = { ...this.questions[randomIndex], activePoints: points };

        const box = document.getElementById("wheel-question-box");
        if (!box) return;

        box.innerHTML = `
            <div class="w-full text-left space-y-4">
                ${isDouble ? `
                    <div class="p-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black rounded-xl text-xs text-center animate-bounce shadow-md">
                        🔥 2X KATLAMA AKTİF! Bu soruda kazanacağın puan 2'ye katlanıyor!
                    </div>
                ` : ''}
                <div class="flex items-center justify-between">
                    <span class="px-3 py-1 bg-yellow-400 text-slate-950 font-black rounded-lg text-xs">
                        ÖDÜL: ${points} PUAN
                    </span>
                    <span class="text-xs text-slate-400">1. Hafta Pekiştirme</span>
                </div>
                <h4 class="text-lg font-bold text-white">${this.currentQuestion.question}</h4>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="wheel-options-container">
                    ${this.currentQuestion.options.map((opt, i) => `
                        <button id="wheel-opt-${i}" onclick="wheelGame.handleAnswer(${i})" class="p-3 bg-slate-700/80 hover:bg-indigo-600 rounded-xl text-left font-semibold text-white border border-slate-600 hover:border-indigo-400 transition-all flex items-center gap-3">
                            <span class="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-yellow-400 text-xs">${String.fromCharCode(65 + i)}</span>
                            <span>${opt}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    useFiftyFifty() {
        if (!this.lifelines.fiftyFifty || !this.currentQuestion) return;
        this.lifelines.fiftyFifty = false;
        sounds.playClick();

        const btn = document.getElementById("btn-5050");
        if (btn) {
            btn.disabled = true;
            btn.classList.add("opacity-40", "cursor-not-allowed");
        }

        const correct = this.currentQuestion.answer;
        let eliminated = 0;
        for (let i = 0; i < this.currentQuestion.options.length; i++) {
            if (i !== correct && eliminated < 2) {
                const optBtn = document.getElementById(`wheel-opt-${i}`);
                if (optBtn) {
                    optBtn.classList.add("opacity-20", "pointer-events-none");
                }
                eliminated++;
            }
        }
    }

    handleAnswer(selectedIndex) {
        if (!this.currentQuestion) return;
        const isCorrect = selectedIndex === this.currentQuestion.answer;

        const chosenBtn = document.getElementById(`wheel-opt-${selectedIndex}`);
        const correctBtn = document.getElementById(`wheel-opt-${this.currentQuestion.answer}`);

        // Disable all
        for (let i = 0; i < this.currentQuestion.options.length; i++) {
            const b = document.getElementById(`wheel-opt-${i}`);
            if (b) b.disabled = true;
        }

        if (isCorrect) {
            sounds.playCorrect();
            if (chosenBtn) chosenBtn.classList.add("!bg-emerald-600", "!border-emerald-400");
            this.score += this.currentQuestion.activePoints;
            this.multiplier = 1; // reset multiplier
            this.updateScore();
            this.showFeedback(true, `Tebrikler! +${this.currentQuestion.activePoints} Puan Kazandın! 🎉`);
        } else {
            sounds.playWrong();
            if (chosenBtn) chosenBtn.classList.add("!bg-rose-600", "!border-rose-400");
            if (correctBtn) correctBtn.classList.add("!bg-emerald-600", "!border-emerald-400");
            this.multiplier = 1;
            this.showFeedback(false, `Maalesef yanlış! Doğru cevap: <strong>${this.currentQuestion.options[this.currentQuestion.answer]}</strong> idi.`);
        }
    }

    showFeedback(isSuccess, message) {
        const box = document.getElementById("wheel-question-box");
        if (!box) return;

        setTimeout(() => {
            box.innerHTML = `
                <div class="text-center space-y-4 py-4">
                    <div class="text-5xl ${isSuccess ? 'text-emerald-400' : 'text-rose-400'}">
                        <i class="fa-solid ${isSuccess ? 'fa-circle-check animate-bounce' : 'fa-circle-xmark'}"></i>
                    </div>
                    <p class="text-lg font-bold text-white">${message}</p>
                    <button onclick="wheelGame.readyNextSpin()" class="px-6 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black rounded-xl shadow-lg transition-all">
                        Sonraki Tur İçin Çevir! 🔄
                    </button>
                </div>
            `;
        }, 1200);
    }

    readyNextSpin() {
        sounds.playClick();
        const box = document.getElementById("wheel-question-box");
        if (!box) return;
        box.innerHTML = `
            <div class="text-center space-y-3">
                <div class="text-5xl text-yellow-400 animate-pulse"><i class="fa-solid fa-dharmachakra"></i></div>
                <h3 class="text-xl font-bold text-white">Çarkı Tekrar Çevir!</h3>
                <p class="text-slate-300 text-sm">Hadi yeni puan ve soru seni bekliyor!</p>
            </div>
        `;
    }

    updateScore() {
        const scoreEl = document.getElementById("wheel-score");
        if (scoreEl) scoreEl.innerText = this.score;
    }

    resetGame() {
        sounds.playClick();
        this.init("game-container");
    }
}

const wheelGame = new WheelQuizGame();
