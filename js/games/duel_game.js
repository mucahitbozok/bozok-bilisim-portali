// ==========================================
// Oyun 4: Akıllı Tahta İkili Sınıf Düellosu (Takım A vs Takım B)
// Akıllı tahtaya 2 öğrencinin kalkıp canlı yarışması için tasarlandı.
// ==========================================

class DuelGame {
    constructor() {
        this.scoreA = 0;
        this.scoreB = 0;
        this.questions = [];
        this.currentIndex = 0;
        this.targetScore = 500;
        this.isRoundOver = false;
    }

    init(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        this.scoreA = 0;
        this.scoreB = 0;
        this.currentIndex = 0;
        this.isRoundOver = false;
        const data = (typeof app !== 'undefined' && app.getCurrentWeekData) ? app.getCurrentWeekData() : WEEK1_CONTENT;
        this.questions = [...(data.gameData?.duelQuestions || WEEK1_CONTENT.gameData.duelQuestions)].sort(() => Math.random() - 0.5);

        container.innerHTML = `
            <div class="max-w-5xl mx-auto bg-slate-900 text-white rounded-3xl p-6 shadow-2xl border-4 border-purple-500">
                <!-- Üst Başlık & Skor Çubuğu -->
                <div class="text-center pb-4 border-b border-slate-700">
                    <div class="flex items-center justify-between flex-wrap gap-4">
                        <!-- Takım A (Mavi) -->
                        <div class="flex items-center gap-3 bg-blue-950/60 border-2 border-blue-500 px-5 py-3 rounded-2xl shadow-lg">
                            <div class="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white text-2xl font-black">
                                A
                            </div>
                            <div class="text-left">
                                <span class="text-xs font-bold text-blue-300 uppercase">1. Takım (Mavi)</span>
                                <div id="duel-score-a" class="text-3xl font-black text-blue-400">0 Puan</div>
                            </div>
                        </div>

                        <!-- Ortadaki VS & Tur -->
                        <div class="flex flex-col items-center">
                            <span class="px-4 py-1 bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 text-white font-black text-xl rounded-full shadow-lg animate-pulse">
                                VS DÜELLO
                            </span>
                            <span id="duel-round-info" class="text-xs text-slate-400 font-bold mt-1">Soru: 1 / ${this.questions.length}</span>
                        </div>

                        <!-- Takım B (Kırmızı) -->
                        <div class="flex items-center gap-3 bg-rose-950/60 border-2 border-rose-500 px-5 py-3 rounded-2xl shadow-lg">
                            <div class="text-right">
                                <span class="text-xs font-bold text-rose-300 uppercase">2. Takım (Kırmızı)</span>
                                <div id="duel-score-b" class="text-3xl font-black text-rose-400">0 Puan</div>
                            </div>
                            <div class="w-12 h-12 rounded-xl bg-rose-500 flex items-center justify-center text-white text-2xl font-black">
                                B
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Ortak Soru Kutusu -->
                <div class="my-6 text-center p-6 bg-slate-800 rounded-2xl border-2 border-purple-400/50 shadow-inner">
                    <span class="text-xs font-bold text-yellow-400 uppercase tracking-widest block mb-1">DÜELLO SORUSU</span>
                    <h3 id="duel-question-text" class="text-2xl sm:text-3xl font-black text-white">
                        ${this.questions[0].q}
                    </h3>
                </div>

                <!-- İkili Yarışma Butonları (Solda Takım A - Sağda Takım B) -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Takım A Butonları -->
                    <div class="bg-blue-900/20 border-2 border-blue-500/40 rounded-3xl p-4 space-y-3">
                        <div class="text-center font-bold text-blue-300 text-sm mb-2 flex items-center justify-center gap-2">
                            <i class="fa-solid fa-hand-pointer"></i> 1. TAKIM ALANI
                        </div>
                        <div id="duel-options-a" class="space-y-2.5">
                            ${this.renderOptions("a")}
                        </div>
                    </div>

                    <!-- Takım B Butonları -->
                    <div class="bg-rose-900/20 border-2 border-rose-500/40 rounded-3xl p-4 space-y-3">
                        <div class="text-center font-bold text-rose-300 text-sm mb-2 flex items-center justify-center gap-2">
                            <i class="fa-solid fa-hand-pointer"></i> 2. TAKIM ALANI
                        </div>
                        <div id="duel-options-b" class="space-y-2.5">
                            ${this.renderOptions("b")}
                        </div>
                    </div>
                </div>

                <!-- Alt Butonlar -->
                <div class="flex justify-between items-center mt-6 pt-4 border-t border-slate-800">
                    <p class="text-xs text-slate-400">💡 İlk doğru cevaba basan takım +100 puan kazanır!</p>
                    <button onclick="duelGame.resetGame()" class="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold text-xs text-slate-300 transition-all">
                        <i class="fa-solid fa-rotate-right"></i> Düelloyu Yeniden Başlat
                    </button>
                </div>
            </div>
        `;
    }

    renderOptions(team) {
        const q = this.questions[this.currentIndex];
        const isTeamA = team === "a";
        const btnClass = isTeamA
            ? "w-full p-4 bg-slate-800 hover:bg-blue-600 border-2 border-blue-500/50 rounded-2xl text-left font-bold text-white transition-all active:scale-95 text-base flex items-center gap-3 shadow-md"
            : "w-full p-4 bg-slate-800 hover:bg-rose-600 border-2 border-rose-500/50 rounded-2xl text-left font-bold text-white transition-all active:scale-95 text-base flex items-center gap-3 shadow-md";

        return q.options.map((opt, i) => `
            <button id="duel-btn-${team}-${i}" onclick="duelGame.handleAnswer('${team}', ${i})" class="${btnClass}">
                <span class="w-8 h-8 rounded-xl ${isTeamA ? 'bg-blue-500' : 'bg-rose-500'} text-white flex items-center justify-center font-black text-sm shrink-0">
                    ${String.fromCharCode(65 + i)}
                </span>
                <span>${opt}</span>
            </button>
        `).join('');
    }

    handleAnswer(team, selectedIndex) {
        if (this.isRoundOver) return;

        const currentQ = this.questions[this.currentIndex];
        const isCorrect = selectedIndex === currentQ.answer;
        const btn = document.getElementById(`duel-btn-${team}-${selectedIndex}`);

        if (isCorrect) {
            this.isRoundOver = true;
            sounds.playCorrect();

            if (team === 'a') {
                this.scoreA += 100;
                if (btn) btn.classList.add("!bg-emerald-600", "!border-emerald-400");
            } else {
                this.scoreB += 100;
                if (btn) btn.classList.add("!bg-emerald-600", "!border-emerald-400");
            }

            this.updateScores();

            setTimeout(() => {
                this.nextRound();
            }, 1200);
        } else {
            sounds.playWrong();
            if (team === 'a') {
                this.scoreA = Math.max(0, this.scoreA - 50);
            } else {
                this.scoreB = Math.max(0, this.scoreB - 50);
            }
            if (btn) {
                btn.classList.add("!bg-slate-900", "opacity-40", "pointer-events-none");
            }
            this.updateScores();
        }
    }

    nextRound() {
        this.currentIndex++;
        this.isRoundOver = false;

        if (this.currentIndex >= this.questions.length) {
            this.finishDuel();
            return;
        }

        const qText = document.getElementById("duel-question-text");
        const rInfo = document.getElementById("duel-round-info");
        const optsA = document.getElementById("duel-options-a");
        const optsB = document.getElementById("duel-options-b");

        if (qText) qText.innerText = this.questions[this.currentIndex].q;
        if (rInfo) rInfo.innerText = `Soru: ${this.currentIndex + 1} / ${this.questions.length}`;
        if (optsA) optsA.innerHTML = this.renderOptions("a");
        if (optsB) optsB.innerHTML = this.renderOptions("b");
    }

    updateScores() {
        const scoreAEl = document.getElementById("duel-score-a");
        const scoreBEl = document.getElementById("duel-score-b");

        if (scoreAEl) scoreAEl.innerText = `${this.scoreA} Puan`;
        if (scoreBEl) scoreBEl.innerText = `${this.scoreB} Puan`;
    }

    finishDuel() {
        sounds.playFanfare();
        let winnerMsg = "";
        let winnerColor = "";

        if (this.scoreA > this.scoreB) {
            winnerMsg = "🏆 1. TAKIM (MAVİ) KAZANDI!";
            winnerColor = "text-blue-400";
        } else if (this.scoreB > this.scoreA) {
            winnerMsg = "🏆 2. TAKIM (KIRMIZI) KAZANDI!";
            winnerColor = "text-rose-400";
        } else {
            winnerMsg = "🤝 DOSTLUK KAZANDI! BERABERE!";
            winnerColor = "text-yellow-400";
        }

        const container = document.getElementById("game-container");
        if (container) {
            container.innerHTML = `
                <div class="max-w-3xl mx-auto bg-slate-900 text-white rounded-3xl p-10 text-center shadow-2xl border-4 border-yellow-400 space-y-6">
                    <div class="text-7xl animate-bounce">👑</div>
                    <h2 class="text-3xl sm:text-4xl font-black ${winnerColor}">${winnerMsg}</h2>
                    <div class="flex justify-center gap-8 text-xl font-bold">
                        <div class="text-blue-400">Takım A: ${this.scoreA} Puan</div>
                        <div class="text-rose-400">Takım B: ${this.scoreB} Puan</div>
                    </div>
                    <button onclick="duelGame.resetGame()" class="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-lg rounded-2xl shadow-xl hover:scale-105 transition-all">
                        Yeni Düello Başlat ⚔️
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

const duelGame = new DuelGame();
