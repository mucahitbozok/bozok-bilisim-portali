// ==========================================
// BOZOK BİLİŞİM PORTALI - ANA UYGULAMA KONTROLCÜSÜ (SPA)
// Geliştirici: Öğretmen Bozok
// ==========================================

class App {
    constructor() {
        this.currentWeek = 1;
        this.currentTab = 'lecture';
        this.currentSlideIndex = 0;
        this.quizScore = 0;
        this.userAnswers = {};
        this.showAnswers = false;
    }

    init() {
        this.renderThemeNavBar();
        this.renderWeekSelector();
        this.loadWeek(1);
        this.setupKeyboard();

        document.addEventListener("fullscreenchange", () => this.updateFullscreenUI());
        document.addEventListener("webkitfullscreenchange", () => this.updateFullscreenUI());
    }

    // --- 6 MEB TEMASI HIZLI GEZİNME BARI ---
    renderThemeNavBar() {
        const navBar = document.getElementById("theme-nav-bar");
        if (!navBar) return;

        const data = (typeof CURRICULUM_DATA !== 'undefined') ? CURRICULUM_DATA : (window.CURRICULUM_DATA || []);
        const currentInfo = this.getCurriculumInfo(this.currentWeek);

        navBar.innerHTML = data.map(theme => {
            const isActive = (theme.id === currentInfo.themeId);
            const startWeek = theme.weeks[0]?.week || 1;
            const endWeek = theme.weeks[theme.weeks.length - 1]?.week || 1;
            const weekRange = (startWeek === endWeek) ? `${startWeek}. Hf` : `${startWeek}-${endWeek}. Hf`;
            const fullTitle = theme.title || theme.themeTitle || `Tema ${theme.id}`;
            const shortTitle = fullTitle.replace(/^\d+\.\s*Tema:\s*/i, '');
            const iconClass = theme.icon || theme.themeIcon || 'fa-solid fa-layer-group';
            const themeColor = theme.color || theme.themeColor || 'from-indigo-600 to-purple-700';

            return `
                <button onclick="app.selectTheme(${theme.id})" class="p-2.5 rounded-2xl border transition-all text-left flex flex-col justify-between group ${isActive ? `bg-gradient-to-r ${themeColor} border-yellow-400 text-white shadow-lg ring-2 ring-yellow-400/40 scale-[1.02]` : 'bg-slate-900/90 hover:bg-slate-800/90 border-slate-800 hover:border-slate-700 text-slate-300'}">
                    <div class="flex items-center justify-between w-full mb-1">
                        <span class="text-[10px] font-black uppercase tracking-wider ${isActive ? 'text-yellow-300' : 'text-slate-400'}">${theme.id}. TEMA</span>
                        <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-md ${isActive ? 'bg-black/30 text-white' : 'bg-slate-800 text-slate-400'}">${weekRange}</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="w-6 h-6 rounded-lg flex items-center justify-center text-xs shrink-0 ${isActive ? 'bg-white/20 text-yellow-300' : 'bg-slate-800 text-indigo-400 group-hover:bg-slate-700'}">
                            <i class="${iconClass}"></i>
                        </div>
                        <span class="text-xs font-bold leading-tight line-clamp-1 ${isActive ? 'text-white font-black' : 'text-slate-200'}">${shortTitle}</span>
                    </div>
                </button>
            `;
        }).join('');
    }

    selectTheme(themeId) {
        sounds.playClick();
        const data = (typeof CURRICULUM_DATA !== 'undefined') ? CURRICULUM_DATA : (window.CURRICULUM_DATA || []);
        const theme = data.find(t => t.id === themeId);
        if (theme && theme.weeks && theme.weeks.length > 0) {
            this.loadWeek(theme.weeks[0].week);
        }
    }

    // --- MÜFREDAT & HAFTA SEÇİCİ ---
    renderWeekSelector() {
        const selector = document.getElementById("week-select-dropdown");
        const curriculumGrid = document.getElementById("curriculum-modal-grid");
        const data = (typeof CURRICULUM_DATA !== 'undefined') ? CURRICULUM_DATA : (window.CURRICULUM_DATA || []);

        if (selector) {
            selector.innerHTML = "";
            data.forEach(theme => {
                const optGroup = document.createElement("optgroup");
                const fullThemeTitle = theme.title || theme.themeTitle || `${theme.id}. Tema`;
                optGroup.label = fullThemeTitle;
                theme.weeks.forEach(w => {
                    const opt = document.createElement("option");
                    opt.value = w.week;
                    opt.innerText = `${w.week}. Hafta: ${w.title}`;
                    opt.selected = w.week === this.currentWeek;
                    optGroup.appendChild(opt);
                });
                selector.appendChild(optGroup);
            });

            selector.onchange = (e) => {
                sounds.playClick();
                this.loadWeek(parseInt(e.target.value));
            };
        }

        if (curriculumGrid) {
            curriculumGrid.innerHTML = data.map(theme => {
                const fullThemeTitle = theme.title || theme.themeTitle || `${theme.id}. Tema`;
                const themeIcon = theme.icon || theme.themeIcon || 'fa-solid fa-layer-group';

                return `
                    <div class="bg-slate-800/90 rounded-2xl p-5 border border-slate-700 shadow-xl space-y-4">
                        <div class="flex items-center gap-3 pb-3 border-b border-slate-700">
                            <div class="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl">
                                <i class="${themeIcon}"></i>
                            </div>
                            <h4 class="font-black text-white text-base">${fullThemeTitle}</h4>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            ${theme.weeks.map(w => `
                                <button onclick="app.selectWeekFromModal(${w.week})" class="p-3 bg-slate-750 hover:bg-indigo-600 rounded-xl text-left border ${w.week === this.currentWeek ? 'border-yellow-400 bg-indigo-950/80 ring-2 ring-yellow-400/50' : 'border-slate-700'} transition-all flex items-start justify-between gap-2 group">
                                    <div>
                                        <div class="text-xs font-bold ${w.week === this.currentWeek ? 'text-yellow-400' : 'text-slate-400 group-hover:text-indigo-200'}">${w.week}. Hafta • ${w.code}</div>
                                        <div class="text-sm font-bold text-white leading-tight mt-0.5">${w.title}</div>
                                    </div>
                                    <span class="px-2 py-0.5 rounded text-[10px] font-extrabold ${w.isAvailable ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/40' : 'bg-slate-800 text-amber-300/80 border border-slate-700'}">${w.isAvailable ? 'Hazır' : 'Yakında'}</span>
                                </button>
                            `).join('')}
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    selectWeekFromModal(weekNum) {
        sounds.playClick();
        this.closeCurriculumModal();
        this.loadWeek(weekNum);
    }

    openCurriculumModal() {
        sounds.playClick();
        const modal = document.getElementById("curriculum-modal");
        if (modal) modal.classList.remove("hidden");
    }

    closeCurriculumModal() {
        sounds.playClick();
        const modal = document.getElementById("curriculum-modal");
        if (modal) modal.classList.add("hidden");
    }

    getCurriculumInfo(weekNum) {
        const data = (typeof CURRICULUM_DATA !== 'undefined') ? CURRICULUM_DATA : (window.CURRICULUM_DATA || []);
        if (data && data.length) {
            for (const theme of data) {
                const w = theme.weeks.find(x => x.week === weekNum);
                if (w) {
                    return {
                        themeId: theme.id,
                        themeTitle: theme.title || theme.themeTitle || `${theme.id}. Tema`,
                        themeIcon: theme.icon || theme.themeIcon || "fa-solid fa-laptop-code",
                        themeColor: theme.color || theme.themeColor || "from-blue-600 to-indigo-700",
                        weekData: w
                    };
                }
            }
        }
        return {
            themeId: 1,
            themeTitle: "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
            themeIcon: "fa-solid fa-laptop-code",
            themeColor: "from-blue-600 to-indigo-700",
            weekData: null
        };
    }

    getCurrentWeekData() {
        return window[`WEEK${this.currentWeek}_CONTENT`] || window.WEEK1_CONTENT;
    }

    loadWeek(weekNum) {
        this.currentWeek = weekNum;
        const selector = document.getElementById("week-select-dropdown");
        if (selector) selector.value = weekNum;

        const info = this.getCurriculumInfo(weekNum);
        const data = this.getCurrentWeekData();

        // Update header banner
        const titleEl = document.getElementById("active-week-title");
        const badgeEl = document.getElementById("active-week-badge");
        const bannerEl = document.getElementById("week-selector-bar");

        const displayTitle = info.weekData ? info.weekData.title : (data.weekInfo?.title || `${weekNum}. Hafta Konusu`);
        if (titleEl) titleEl.innerText = `${weekNum}. Hafta: ${displayTitle}`;
        if (badgeEl) {
            badgeEl.innerHTML = `<i class="${info.themeIcon}"></i> ${info.themeTitle}`;
        }

        if (bannerEl && info.themeColor) {
            bannerEl.className = `bg-gradient-to-r ${info.themeColor} rounded-3xl p-5 border border-white/20 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all duration-500`;
        }

        // Aktif haftaya özel standart başlık butonları
        const actionBtnContainer = document.getElementById("week-action-buttons");
        if (actionBtnContainer) {
            actionBtnContainer.innerHTML = `
                <button onclick="app.switchTab('games')" class="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-black text-xs rounded-xl shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95" title="Tekrar Oyunları Sekmesine Git">
                    <i class="fa-solid fa-gamepad"></i>
                    <span>Tekrar Oyunları 🎮</span>
                </button>
                <span class="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3.5 py-2 rounded-xl font-bold flex items-center gap-1.5">
                    <i class="fa-solid fa-circle-check"></i> Akıllı Tahta & Dokunmatik Uyumlu
                </span>
            `;
        }

        // Temaların hızlı gezinti çubuğundaki aktif tema vurgusunu güncelle
        this.renderThemeNavBar();

        // Reset views
        this.currentSlideIndex = 0;
        this.renderSlides();
        this.renderWorksheet();
        this.renderQuiz();
        this.renderGameHub();

        this.switchTab(this.currentTab);
    }

    stopAllGames() {
        if (typeof matchGame !== 'undefined' && matchGame.stop) matchGame.stop();
        if (typeof reflexGame !== 'undefined' && reflexGame.stop) reflexGame.stop();
        if (typeof wheelGame !== 'undefined' && wheelGame.stop) wheelGame.stop();
        if (typeof arenaGame !== 'undefined' && arenaGame.stop) arenaGame.stop();
    }

    // --- SEKME YÖNETİMİ ---
    switchTab(tabName) {
        sounds.playClick();
        this.stopAllGames();
        this.currentTab = tabName;

        const tabs = ['lecture', 'worksheet', 'quiz', 'games'];
        tabs.forEach(t => {
            const btn = document.getElementById(`tab-btn-${t}`);
            const view = document.getElementById(`view-${t}`);
            if (btn) {
                if (t === tabName) {
                    btn.classList.add("active");
                } else {
                    btn.classList.remove("active");
                }
            }
            if (view) {
                if (t === tabName) {
                    view.classList.remove("hidden");
                    view.classList.add("animate-pop");
                } else {
                    view.classList.add("hidden");
                }
            }
        });

        if (tabName === 'games') {
            this.renderGameHub();
        }
    }

    renderPendingPlaceholder(containerId, sectionName, icon = "fa-solid fa-calendar-check") {
        const container = document.getElementById(containerId);
        if (!container) return;

        const info = this.getCurriculumInfo(this.currentWeek);
        const displayTitle = info.weekData ? info.weekData.title : `${this.currentWeek}. Hafta Konusu`;
        const code = info.weekData ? info.weekData.code : '';

        container.className = "w-full min-h-[440px] flex items-center justify-center p-4";
        container.innerHTML = `
            <div class="glass-panel w-full rounded-3xl p-8 sm:p-14 text-center max-w-3xl mx-auto space-y-6 shadow-2xl border-2 border-yellow-400/30 animate-pop my-4">
                <div class="w-20 h-20 rounded-3xl bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 mx-auto flex items-center justify-center text-4xl shadow-inner">
                    <i class="${icon}"></i>
                </div>
                
                <div class="space-y-2">
                    <span class="px-4 py-1.5 bg-yellow-400/20 text-yellow-300 font-black rounded-xl text-xs uppercase tracking-widest border border-yellow-400/30">
                        ${this.currentWeek}. Hafta • ${sectionName}
                    </span>
                    <h2 class="text-2xl sm:text-3xl font-black text-white leading-snug">
                        ${displayTitle}
                    </h2>
                    ${code ? `<p class="text-xs sm:text-sm text-indigo-200/80 font-medium max-w-xl mx-auto">${code}</p>` : ''}
                </div>

                <div class="p-6 bg-slate-900/90 rounded-2xl border-2 border-yellow-400/40 max-w-lg mx-auto shadow-xl space-y-2">
                    <div class="text-base sm:text-lg font-black text-yellow-300 flex items-center justify-center gap-2">
                        <i class="fa-solid fa-clock-rotate-left"></i>
                        <span>İlgili hafta gelince içerikler yüklenecektir</span>
                    </div>
                    <p class="text-xs text-slate-300">
                        Bu haftanın ders materyalleri MEB müfredat takvimine uygun olarak Öğretmen Bozok tarafından hazırlanıp ilgili hafta başında sisteme yüklenecektir.
                    </p>
                </div>

                <div class="pt-2 text-xs text-slate-400 flex items-center justify-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                    <span>5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi</span>
                </div>
            </div>
        `;
    }

    // --- 1. DERS ANLATIMI & SUNU SİSTEMİ ---
    renderSlides() {
        const data = this.getCurrentWeekData();
        const slides = data.slides || [];
        const slide = slides[this.currentSlideIndex];
        const container = document.getElementById("slide-display-area");
        const progress = document.getElementById("slide-progress-bar");
        const counter = document.getElementById("slide-counter-badge");
        const prevBtn = document.getElementById("slide-prev-btn");
        const nextBtn = document.getElementById("slide-next-btn");

        if (this.currentWeek >= 3 || !slides.length || !slide) {
            if (progress) progress.style.width = "0%";
            if (counter) counter.innerText = "- / -";
            if (prevBtn) prevBtn.disabled = true;
            if (nextBtn) nextBtn.disabled = true;
            this.renderPendingPlaceholder("slide-display-area", "Etkileşimli Ders Sunusu", "fa-solid fa-tv");
            return;
        }

        if (progress) {
            const pct = ((this.currentSlideIndex + 1) / slides.length) * 100;
            progress.style.width = `${pct}%`;
        }

        if (counter) {
            counter.innerText = `${this.currentSlideIndex + 1} / ${slides.length}`;
        }

        if (prevBtn) prevBtn.disabled = this.currentSlideIndex === 0;
        if (nextBtn) {
            if (this.currentSlideIndex === slides.length - 1) {
                nextBtn.innerHTML = `Sunu Sonu ✨`;
                nextBtn.classList.add("opacity-50", "pointer-events-none");
            } else {
                nextBtn.innerHTML = `Sonraki Slayt <i class="fa-solid fa-arrow-right"></i>`;
                nextBtn.classList.remove("opacity-50", "pointer-events-none");
            }
        }

        container.className = `slide-card w-full h-full rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl bg-gradient-to-br ${slide.bgColor} border-2 border-white/20 flex flex-col justify-between select-none`;
        container.innerHTML = `
            <!-- Slayt Başlık -->
            <div class="flex items-center justify-between border-b border-white/20 pb-3 mb-3 shrink-0">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-yellow-300 text-2xl shadow-inner shrink-0">
                        <i class="${slide.icon}"></i>
                    </div>
                    <div>
                        <span class="text-xs uppercase tracking-widest text-yellow-300 font-bold">${slide.topic}</span>
                        <h2 class="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight">${slide.title}</h2>
                    </div>
                </div>
                <span class="text-sm font-bold text-white/70 hidden sm:inline-block">${slide.subtitle}</span>
            </div>

            <!-- Slayt İçeriği (Sabit Boyutta Ortalı ve Taşmaz) -->
            <div class="slide-content-scroll my-auto py-2">
                ${slide.content}
            </div>

            <!-- Slayt Alt Bilgi -->
            <div class="flex justify-between items-center pt-3 border-t border-white/20 text-xs text-white/70 mt-3 shrink-0">
                <span>Öğretmen Bozok • 5. Sınıf Bilişim Teknolojileri</span>
                <span>Akıllı Tahta Sunu Modu 🖥️</span>
            </div>
        `;
    }

    nextSlide() {
        const data = this.getCurrentWeekData();
        const slides = data.slides || [];
        if (this.currentSlideIndex < slides.length - 1) {
            sounds.playClick();
            this.currentSlideIndex++;
            this.renderSlides();
        } else {
            // Son slayta ulaşıldığında sunuda kal
            sounds.playFanfare();
        }
    }

    prevSlide() {
        if (this.currentSlideIndex > 0) {
            sounds.playClick();
            this.currentSlideIndex--;
            this.renderSlides();
        }
    }

    goToSlide(index) {
        sounds.playClick();
        this.closeSlideMenu();
        const data = this.getCurrentWeekData();
        const slides = data.slides || [];
        if (index >= 0 && index < slides.length) {
            this.currentSlideIndex = index;
            this.renderSlides();
        }
    }

    openSlideMenu() {
        sounds.playClick();
        const modal = document.getElementById("slide-menu-modal");
        const list = document.getElementById("slide-menu-list");
        if (!modal || !list) return;

        const data = this.getCurrentWeekData();
        const slides = data.slides || [];

        list.innerHTML = slides.map((s, idx) => `
            <button onclick="app.goToSlide(${idx})" class="w-full p-3.5 rounded-2xl border text-left flex items-center justify-between gap-3 transition-all ${idx === this.currentSlideIndex ? 'bg-indigo-600 border-yellow-400 text-white font-black ring-2 ring-yellow-400/50 scale-[1.01]' : 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-slate-200'}">
                <div class="flex items-center gap-3">
                    <span class="w-8 h-8 rounded-xl bg-slate-900/60 flex items-center justify-center text-xs font-black ${idx === this.currentSlideIndex ? 'text-yellow-300' : 'text-indigo-400'}">${idx + 1}</span>
                    <div>
                        <div class="text-[11px] font-bold ${idx === this.currentSlideIndex ? 'text-indigo-200' : 'text-slate-400'}">${s.topic || `Slayt ${idx + 1}`}</div>
                        <div class="text-sm font-bold text-white">${s.title}</div>
                    </div>
                </div>
                <i class="fa-solid fa-chevron-right text-xs text-slate-400"></i>
            </button>
        `).join('');

        modal.classList.remove("hidden");
    }

    closeSlideMenu() {
        sounds.playClick();
        const modal = document.getElementById("slide-menu-modal");
        if (modal) modal.classList.add("hidden");
    }

    togglePresentationFullscreen() {
        sounds.playClick();
        const elem = document.getElementById("view-lecture");
        if (!elem) return;

        const isFS = !!(document.fullscreenElement || document.webkitFullscreenElement);
        if (!isFS) {
            if (elem.requestFullscreen) {
                elem.requestFullscreen().catch(() => {});
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen().catch(() => {});
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }

    updateFullscreenUI() {
        const isFS = !!(document.fullscreenElement || document.webkitFullscreenElement);
        const icon = document.getElementById("fullscreen-btn-icon");
        const text = document.getElementById("fullscreen-btn-text");
        const bottomIcon = document.getElementById("bottom-fullscreen-icon");
        const bottomText = document.getElementById("bottom-fullscreen-text");
        const lectureEl = document.getElementById("view-lecture");

        if (isFS) {
            if (icon) icon.className = "fa-solid fa-compress text-base text-yellow-300";
            if (text) text.innerText = "Ekranı Küçült";
            if (bottomIcon) bottomIcon.className = "fa-solid fa-compress text-base text-yellow-300";
            if (bottomText) bottomText.innerText = "Ekranı Küçült";
            if (lectureEl) lectureEl.classList.add("is-fullscreen");
        } else {
            if (icon) icon.className = "fa-solid fa-expand text-base";
            if (text) text.innerText = "Tam Ekran";
            if (bottomIcon) bottomIcon.className = "fa-solid fa-expand text-base";
            if (bottomText) bottomText.innerText = "Tam Ekran";
            if (lectureEl) lectureEl.classList.remove("is-fullscreen");
        }
    }

    // --- 2. ÇALIŞMA KAĞIDI & FOTOĞRAFLI BELGE GÖRÜNTÜLEYİCİ ---
    renderWorksheet() {
        const wsContainer = document.getElementById("worksheet-render-area");
        if (!wsContainer) return;

        const data = this.getCurrentWeekData();
        const images = data.weekInfo?.images || data.worksheetDocs?.images || (this.currentWeek === 1 ? { konu: "1.1 konu.png", soru: "1.1 soru.png", cevap: "1.1 cevap.png" } : null);

        if (!this.activePhotoDoc) this.activePhotoDoc = 'konu'; // 'konu', 'soru', 'cevap'
        if (!this.photoZoom) this.photoZoom = 1.0;

        if (this.currentWeek >= 3 || (!images && !data.worksheetDocs?.konuHtml)) {
            this.renderPendingPlaceholder("worksheet-render-area", "Çalışma Kağıtları & Cevap Anahtarı", "fa-solid fa-file-lines");
            return;
        }

        if (images) {
            const imgMap = {
                konu: { src: images.konu, title: `${this.currentWeek}. Hafta Konu Anlatımı & Çalışma Kağıdı`, icon: "fa-solid fa-book-open", badge: "Konu Özeti" },
                soru: { src: images.soru, title: `${this.currentWeek}. Hafta Pekiştirme Soruları & Etkinlikler`, icon: "fa-solid fa-circle-question", badge: "Sorular & Görevler" },
                cevap: { src: images.cevap, title: `${this.currentWeek}. Hafta Resmi Cevap Anahtarı`, icon: "fa-solid fa-key", badge: "Çözümler & Cevaplar" }
            };

            const currentDoc = imgMap[this.activePhotoDoc] || imgMap.konu;

            wsContainer.innerHTML = `
                <div class="bg-slate-900 text-white rounded-3xl p-4 sm:p-8 border-4 border-indigo-500/50 shadow-2xl space-y-6">
                    <!-- Üst Başlık & Belge Seçim Butonları -->
                    <div class="flex flex-col lg:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-700">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-2xl shadow-lg">
                                <i class="fa-solid fa-file-image"></i>
                            </div>
                            <div>
                                <h2 class="text-xl sm:text-2xl font-black text-white">Orijinal Çalışma ve Soru Belgeleri</h2>
                                <p class="text-xs text-indigo-300 font-semibold">Öğretmen Bozok • ${this.currentWeek}. Hafta Ders Materyalleri</p>
                            </div>
                        </div>

                        <!-- 3 Ana Belge Sekmesi -->
                        <div class="flex items-center gap-2 bg-slate-800 p-1.5 rounded-2xl border border-slate-700 flex-wrap justify-center">
                            <button onclick="app.setPhotoDoc('konu')" class="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${this.activePhotoDoc === 'konu' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-300 hover:bg-slate-700'}">
                                <i class="fa-solid fa-book-open text-yellow-400"></i>
                                <span>1. Konu Kağıdı</span>
                            </button>
                            <button onclick="app.setPhotoDoc('soru')" class="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${this.activePhotoDoc === 'soru' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-300 hover:bg-slate-700'}">
                                <i class="fa-solid fa-circle-question text-cyan-400"></i>
                                <span>2. Pekiştirme Soruları</span>
                            </button>
                            <button onclick="app.setPhotoDoc('cevap')" class="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${this.activePhotoDoc === 'cevap' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-300 hover:bg-slate-700'}">
                                <i class="fa-solid fa-key text-yellow-300"></i>
                                <span>3. Cevap Anahtarı</span>
                            </button>
                        </div>
                    </div>

                    <!-- Kontrol Araç Çubuğu (Yakınlaştırma, Tam Ekran, Yazdırma) -->
                    <div class="flex items-center justify-between gap-3 bg-slate-800/80 p-3 rounded-2xl border border-slate-700 flex-wrap">
                        <div class="flex items-center gap-2">
                            <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-xl border border-indigo-500/30 flex items-center gap-1.5">
                                <i class="${currentDoc.icon}"></i> ${currentDoc.badge}
                            </span>
                            <span class="text-xs text-slate-300 font-semibold hidden sm:inline">${currentDoc.title}</span>
                        </div>

                        <div class="flex items-center gap-2 flex-wrap">
                            <!-- Yakınlaştır / Uzaklaştır -->
                            <div class="flex items-center bg-slate-900 rounded-xl border border-slate-700 p-1">
                                <button onclick="app.zoomPhoto(-0.15)" class="w-8 h-8 rounded-lg hover:bg-slate-800 text-slate-200 flex items-center justify-center text-sm transition-all" title="Uzaklaştır">
                                    <i class="fa-solid fa-magnifying-glass-minus"></i>
                                </button>
                                <span id="photo-zoom-val" class="px-2 text-xs font-bold text-yellow-400 min-w-[45px] text-center">${Math.round(this.photoZoom * 100)}%</span>
                                <button onclick="app.zoomPhoto(0.15)" class="w-8 h-8 rounded-lg hover:bg-slate-800 text-slate-200 flex items-center justify-center text-sm transition-all" title="Yakınlaştır">
                                    <i class="fa-solid fa-magnifying-glass-plus"></i>
                                </button>
                                <button onclick="app.resetPhotoZoom()" class="px-2 h-8 rounded-lg hover:bg-slate-800 text-slate-400 text-xs font-semibold" title="Sıfırla">
                                    Sıfırla
                                </button>
                            </div>

                            <!-- Tam Ekran Lightbox -->
                            <button onclick="app.openPhotoLightbox('${currentDoc.src}', '${currentDoc.title}')" class="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-md">
                                <i class="fa-solid fa-expand"></i> Tam Ekran Aç
                            </button>

                            <!-- Yazdır -->
                            <button onclick="app.printPhoto('${currentDoc.src}')" class="px-3.5 py-2 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all">
                                <i class="fa-solid fa-print"></i> Yazdır
                            </button>

                            <!-- Doğrudan Fotoğrafı Aç -->
                            <a href="${currentDoc.src}" target="_blank" class="px-3.5 py-2 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all">
                                <i class="fa-solid fa-arrow-up-right-from-square"></i> Sekmede Aç
                            </a>
                        </div>
                    </div>

                    <!-- Fotoğraf Görüntüleme Alanı (Scroll & Zoom Desteği) -->
                    <div class="relative bg-slate-950 rounded-2xl border-2 border-slate-800 overflow-auto p-4 flex justify-center items-start min-h-[500px] max-h-[75vh]">
                        <div id="photo-container" class="transition-transform duration-200 origin-top" style="transform: scale(${this.photoZoom});">
                            <img id="active-photo-img" src="${currentDoc.src}" alt="${currentDoc.title}" class="max-w-full h-auto rounded-xl shadow-2xl cursor-zoom-in border border-slate-700" onclick="app.openPhotoLightbox('${currentDoc.src}', '${currentDoc.title}')">
                        </div>
                    </div>

                    <!-- Alt Bilgi Notu -->
                    <div class="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 pt-2 border-t border-slate-800">
                        <div class="flex items-center gap-2">
                            <i class="fa-solid fa-circle-info text-yellow-400"></i>
                            <span>Görsele tıklayarak veya <strong>Tam Ekran Aç</strong> butonuna basarak akıllı tahtada devasa boyutta büyütebilirsiniz.</span>
                        </div>
                        <div class="font-bold text-yellow-400">Öğretmen Bozok • Bozok Bilişim Portalı</div>
                    </div>
                </div>
            `;
        } else {
            // Dijital Çalışma Kağıtları & Cevap Anahtarı (Tüm 37 Hafta İçin)
            const docs = data.worksheetDocs || {};
            let activeContent = docs.konuHtml;
            if (this.activePhotoDoc === 'soru') activeContent = docs.soruHtml;
            if (this.activePhotoDoc === 'cevap') activeContent = docs.cevapHtml;

            wsContainer.innerHTML = `
                <div class="space-y-6 max-w-5xl mx-auto">
                    <!-- 3 Ana Belge Sekmesi Barı -->
                    <div class="bg-slate-900/90 rounded-3xl p-4 border border-indigo-500/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-xl">
                                <i class="fa-solid fa-file-lines"></i>
                            </div>
                            <div>
                                <h3 class="font-black text-white text-base">${this.currentWeek}. Hafta Ders Materyalleri</h3>
                                <p class="text-xs text-indigo-300">Öğretmen Bozok • Bozok Bilişim Portalı</p>
                            </div>
                        </div>

                        <!-- Sekme Butonları -->
                        <div class="flex items-center gap-2 bg-slate-800 p-1.5 rounded-2xl border border-slate-700 flex-wrap justify-center">
                            <button onclick="app.setPhotoDoc('konu')" class="px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${this.activePhotoDoc === 'konu' ? 'bg-indigo-600 text-white shadow-lg ring-2 ring-indigo-400/50' : 'text-slate-300 hover:bg-slate-700'}">
                                <i class="fa-solid fa-book-open text-yellow-400"></i>
                                <span>1. Konu Kağıdı</span>
                            </button>
                            <button onclick="app.setPhotoDoc('soru')" class="px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${this.activePhotoDoc === 'soru' ? 'bg-blue-600 text-white shadow-lg ring-2 ring-blue-400/50' : 'text-slate-300 hover:bg-slate-700'}">
                                <i class="fa-solid fa-circle-question text-cyan-400"></i>
                                <span>2. Pekiştirme Soruları</span>
                            </button>
                            <button onclick="app.setPhotoDoc('cevap')" class="px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${this.activePhotoDoc === 'cevap' ? 'bg-emerald-600 text-white shadow-lg ring-2 ring-emerald-400/50' : 'text-slate-300 hover:bg-slate-700'}">
                                <i class="fa-solid fa-key text-yellow-300"></i>
                                <span>3. Cevap Anahtarı</span>
                            </button>
                        </div>

                        <!-- Yazdır Butonu -->
                        <button onclick="window.print()" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center gap-2 transition-all shadow-md shrink-0">
                            <i class="fa-solid fa-print"></i> A4 Yazdır / PDF
                        </button>
                    </div>

                    <!-- Aktif Belge İçeriği (A4 Formatında ve Şık) -->
                    <div id="active-printable-document" class="animate-pop">
                        ${activeContent || '<div class="p-6 text-center text-slate-400">Bu haftanın belgesi hazırlanıyor...</div>'}
                    </div>
                </div>
            `;
        }
    }

    setPhotoDoc(docType) {
        sounds.playClick();
        this.activePhotoDoc = docType;
        this.photoZoom = 1.0;
        this.renderWorksheet();
    }

    zoomPhoto(delta) {
        sounds.playClick();
        this.photoZoom = Math.min(Math.max(0.5, this.photoZoom + delta), 2.5);
        const container = document.getElementById("photo-container");
        const valEl = document.getElementById("photo-zoom-val");
        if (container) {
            container.style.transform = `scale(${this.photoZoom})`;
        }
        if (valEl) {
            valEl.innerText = `${Math.round(this.photoZoom * 100)}%`;
        }
    }

    resetPhotoZoom() {
        sounds.playClick();
        this.photoZoom = 1.0;
        const container = document.getElementById("photo-container");
        const valEl = document.getElementById("photo-zoom-val");
        if (container) container.style.transform = `scale(1)`;
        if (valEl) valEl.innerText = `100%`;
    }

    openPhotoLightbox(src, title) {
        sounds.playClick();
        const modal = document.getElementById("lightbox-modal");
        const img = document.getElementById("lightbox-img");
        const titleEl = document.getElementById("lightbox-title");

        if (modal && img) {
            img.src = src;
            if (titleEl) titleEl.innerText = title || "Çalışma Belgesi";
            modal.classList.remove("hidden");
        }
    }

    closePhotoLightbox() {
        sounds.playClick();
        const modal = document.getElementById("lightbox-modal");
        if (modal) modal.classList.add("hidden");
    }

    printPhoto(src) {
        sounds.playClick();
        const win = window.open('', '_blank');
        win.document.write(`
            <html>
            <head>
                <title>Yazdır - Öğretmen Bozok Çalışma Kağıdı</title>
                <style>
                    body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background: #fff; }
                    img { max-width: 100%; height: auto; page-break-inside: avoid; }
                    @page { size: A4 portrait; margin: 5mm; }
                </style>
            </head>
            <body onload="window.print(); window.close();">
                <img src="${src}" />
            </body>
            </html>
        `);
        win.document.close();
    }

    // --- 3. PEKİŞTİRME SORULARI & TEST MODÜLÜ ---
    renderQuiz() {
        const quizContainer = document.getElementById("quiz-render-area");
        if (!quizContainer) return;

        const data = this.getCurrentWeekData();
        const questions = data.questions || [];
        const images = data.weekInfo?.images;

        if (this.currentWeek >= 3 || !questions || !questions.length) {
            this.renderPendingPlaceholder("quiz-render-area", "Pekiştirme Testi & Etkinlikler", "fa-solid fa-clipboard-question");
            return;
        }

        quizContainer.innerHTML = `
            <div class="max-w-4xl mx-auto space-y-8">
                <!-- Orijinal Fotoğraf Hızlı Erişim Barı (Varsa) -->
                ${images ? `
                <div class="bg-gradient-to-r from-blue-900/60 to-indigo-900/60 rounded-2xl p-4 border border-blue-500/40 flex items-center justify-between gap-4 flex-wrap shadow-xl">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-xl bg-blue-500/30 text-yellow-300 flex items-center justify-center text-xl">
                            <i class="fa-solid fa-file-image"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-white text-sm">Orijinal Soru & Cevap Fotoğrafları</h4>
                            <p class="text-xs text-blue-200">Çalışma kağıdını veya çözümlü cevap anahtarını tam boyutta açın</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 flex-wrap">
                        <button onclick="app.openPhotoLightbox('${images.soru}', 'Pekiştirme Soruları & Etkinlikler')" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs flex items-center gap-2 transition-all shadow-md">
                            <i class="fa-solid fa-circle-question"></i> Soru Kağıdını Aç
                        </button>
                        <button onclick="app.openPhotoLightbox('${images.cevap}', 'Cevap Anahtarı (Çözümler)')" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center gap-2 transition-all shadow-md">
                            <i class="fa-solid fa-key"></i> Cevap Anahtarını Aç
                        </button>
                    </div>
                </div>
                ` : ''}

                <!-- 1. Etkinlik: Doğru / Yanlış Testi -->
                ${questions[1] ? `
                <div class="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border-2 border-indigo-500/50 shadow-2xl space-y-4">
                    <div class="flex items-center justify-between border-b border-slate-700 pb-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-xl font-bold">1</div>
                            <div>
                                <h3 class="text-xl font-black text-white">${questions[1].title || 'Doğru / Yanlış Pekiştirme Etkinliği'}</h3>
                                <p class="text-xs text-slate-400">İfadeleri okuyarak Doğru veya Yanlış butonuna basınız.</p>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-4 pt-2">
                        ${questions[1].items.map((item, idx) => `
                            <div id="tf-item-${idx}" class="p-4 bg-slate-800 rounded-2xl border border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all">
                                <div class="text-sm font-semibold text-white leading-relaxed">
                                    <span class="text-indigo-400 font-bold mr-2">${idx + 1}.</span>
                                    ${item.statement}
                                </div>
                                <div class="flex items-center gap-2 shrink-0">
                                    <button onclick="app.checkTF(${idx}, true)" class="tf-btn-true px-4 py-2 bg-slate-700 hover:bg-emerald-600 rounded-xl font-bold text-xs text-white transition-all flex items-center gap-1.5">
                                        <i class="fa-solid fa-check"></i> Doğru
                                    </button>
                                    <button onclick="app.checkTF(${idx}, false)" class="tf-btn-false px-4 py-2 bg-slate-700 hover:bg-rose-600 rounded-xl font-bold text-xs text-white transition-all flex items-center gap-1.5">
                                        <i class="fa-solid fa-xmark"></i> Yanlış
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}

                <!-- 2. Etkinlik: Çoktan Seçmeli Test -->
                ${questions[2] ? `
                <div class="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border-2 border-purple-500/50 shadow-2xl space-y-6">
                    <div class="flex items-center justify-between border-b border-slate-700 pb-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl font-bold">2</div>
                            <div>
                                <h3 class="text-xl font-black text-white">${questions[2].title || 'Çoktan Seçmeli Değerlendirme Testi'}</h3>
                                <p class="text-xs text-slate-400">Doğru şıkkı işaretleyerek kendinizi test edin.</p>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-6">
                        ${questions[2].questions.map((q, qIdx) => `
                            <div class="p-5 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-3">
                                <h4 class="text-base font-bold text-white leading-relaxed">
                                    <span class="text-purple-400 font-bold">${qIdx + 1}.</span> ${q.q}
                                </h4>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                    ${q.options.map((opt, optIdx) => `
                                        <button id="mc-btn-${qIdx}-${optIdx}" onclick="app.checkMC(${qIdx}, ${optIdx})" class="p-3 bg-slate-750 hover:bg-purple-600 border border-slate-700 rounded-xl text-left text-sm font-semibold text-white flex items-center gap-2.5 transition-all">
                                            <span class="w-6 h-6 rounded-lg bg-slate-800 text-yellow-400 text-xs font-bold flex items-center justify-center shrink-0">
                                                ${String.fromCharCode(65 + optIdx)}
                                            </span>
                                            <span>${opt}</span>
                                        </button>
                                    `).join('')}
                                </div>
                                <div id="mc-exp-${qIdx}" class="hidden p-3 bg-slate-900/80 rounded-xl text-xs text-indigo-200 border border-indigo-500/30"></div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}

                <!-- 3. Etkinlik: Haftalık Öz Değerlendirme Emojileri -->
                <div class="bg-gradient-to-r from-indigo-900/60 to-purple-900/60 rounded-3xl p-6 border-2 border-indigo-400/40 text-center space-y-4 shadow-xl">
                    <h4 class="text-lg font-black text-white">Bu Konuyu Ne Kadar Anladım? 🌟</h4>
                    <div class="flex justify-center gap-4 sm:gap-8 flex-wrap">
                        <button onclick="app.rateTopic(1)" class="p-3 bg-slate-800 hover:bg-slate-700 rounded-2xl text-center border border-slate-700 hover:scale-110 transition-all">
                            <div class="text-3xl mb-1">😟</div>
                            <span class="text-xs text-slate-300">Hiç Anlamadım</span>
                        </button>
                        <button onclick="app.rateTopic(2)" class="p-3 bg-slate-800 hover:bg-slate-700 rounded-2xl text-center border border-slate-700 hover:scale-110 transition-all">
                            <div class="text-3xl mb-1">😐</div>
                            <span class="text-xs text-slate-300">Biraz Anladım</span>
                        </button>
                        <button onclick="app.rateTopic(3)" class="p-3 bg-slate-800 hover:bg-slate-700 rounded-2xl text-center border border-slate-700 hover:scale-110 transition-all">
                            <div class="text-3xl mb-1">🙂</div>
                            <span class="text-xs text-slate-300">Orta Düzey</span>
                        </button>
                        <button onclick="app.rateTopic(4)" class="p-3 bg-slate-800 hover:bg-slate-700 rounded-2xl text-center border border-slate-700 hover:scale-110 transition-all">
                            <div class="text-3xl mb-1">😃</div>
                            <span class="text-xs text-slate-300">İyi Anladım</span>
                        </button>
                        <button onclick="app.rateTopic(5)" class="p-3 bg-slate-800 hover:bg-slate-700 rounded-2xl text-center border border-slate-700 hover:scale-110 transition-all">
                            <div class="text-3xl mb-1">🤩</div>
                            <span class="text-xs text-slate-300">Çok İyi Anladım!</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    checkTF(itemIdx, userAns) {
        const data = this.getCurrentWeekData();
        const item = data.questions?.[1]?.items?.[itemIdx];
        if (!item) return;
        const container = document.getElementById(`tf-item-${itemIdx}`);
        const isRight = userAns === item.isCorrect;

        if (isRight) {
            sounds.playCorrect();
            if (container) {
                container.className = "p-4 bg-emerald-950/60 rounded-2xl border-2 border-emerald-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all";
            }
        } else {
            sounds.playWrong();
            if (container) {
                container.className = "p-4 bg-rose-950/60 rounded-2xl border-2 border-rose-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all animate-shake";
            }
        }
    }

    checkMC(qIdx, optIdx) {
        const data = this.getCurrentWeekData();
        const q = data.questions?.[2]?.questions?.[qIdx];
        if (!q) return;
        const isRight = optIdx === q.answer;
        const selectedBtn = document.getElementById(`mc-btn-${qIdx}-${optIdx}`);
        const correctBtn = document.getElementById(`mc-btn-${qIdx}-${q.answer}`);
        const expEl = document.getElementById(`mc-exp-${qIdx}`);

        // Disable options for this question
        for (let i = 0; i < q.options.length; i++) {
            const b = document.getElementById(`mc-btn-${qIdx}-${i}`);
            if (b) b.disabled = true;
        }

        if (isRight) {
            sounds.playCorrect();
            if (selectedBtn) selectedBtn.classList.add("!bg-emerald-600", "!border-emerald-400");
        } else {
            sounds.playWrong();
            if (selectedBtn) selectedBtn.classList.add("!bg-rose-600", "!border-rose-400");
            if (correctBtn) correctBtn.classList.add("!bg-emerald-600", "!border-emerald-400");
        }

        if (expEl) {
            expEl.innerHTML = `<strong>Açıklama:</strong> ${q.explanation}`;
            expEl.classList.remove("hidden");
        }
    }

    rateTopic(rating) {
        sounds.playFanfare();
        alert(`🌟 Harika! Değerlendirmeniz kaydedildi. Teşekkürler!`);
    }

    // --- 4. TEKRAR OYUNLARI ARENASI MODÜLÜ ---
    renderGameHub() {
        const gameContainer = document.getElementById("game-container");
        if (!gameContainer) return;

        const data = this.getCurrentWeekData();
        if (this.currentWeek >= 3 || !data.gameData || !data.gameData.wheelQuiz) {
            this.renderPendingPlaceholder("game-container", "Sınıf İçi Tekrar Oyunları", "fa-solid fa-gamepad");
            return;
        }

        const isWeek1 = (this.currentWeek === 1);
        const isWeek2 = (this.currentWeek === 2);
        const hasArena = (isWeek1 || isWeek2);

        gameContainer.innerHTML = `
            <div class="max-w-5xl mx-auto space-y-8">
                <!-- Oyunlar Başlık -->
                <div class="text-center space-y-3">
                    <span class="px-4 py-1.5 bg-yellow-400/20 text-yellow-300 font-extrabold text-xs uppercase tracking-widest rounded-full border border-yellow-400/30">
                        🎮 Sınıf İçi Pekiştirme Oyunları
                    </span>
                    <h2 class="text-3xl sm:text-4xl font-black text-white">${isWeek1 ? '1. Hafta Oyun Arenası (6 Farklı Oyun Modu 🎮)' : (isWeek2 ? '2. Hafta Oyun Arenası (7 Farklı Oyun Modu 🎮)' : 'Bir Oyun Modu Seç ve Başla!')}</h2>
                    <p class="text-slate-400 text-sm max-w-xl mx-auto">
                        Akıllı tahtada tüm sınıfla çarkıfelek oynayabilir, teknoloji mahkemesi kurabilir, maceralara atılabilir veya hızlı reflekslerini test edebilirsin!
                    </p>
                </div>

                <!-- Oyun Kartları Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    ${isWeek1 ? `
                    <!-- Oyun 5: 1. Hafta Özel Tekrar Oyunu (Bilgi Arenası) -->
                    <div class="game-mode-card bg-gradient-to-br from-blue-900/90 to-indigo-950/90 rounded-3xl p-6 border-2 border-blue-500/50 shadow-2xl flex flex-col justify-between space-y-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-yellow-500/30 text-yellow-400 flex items-center justify-center text-3xl shadow-inner shrink-0">
                                <i class="fa-solid fa-crown"></i>
                            </div>
                            <div>
                                <span class="text-xs font-bold text-yellow-300 uppercase">5. Oyun Modu (Özel)</span>
                                <h3 class="text-xl font-black text-white">Bilgi Arenası</h3>
                            </div>
                        </div>
                        <p class="text-sm text-indigo-100 flex-1">
                            1. haftanın tüm kazanımlarını ve kullanım alanlarını kapsayan 10 soruluk interaktif yarışma arenası!
                        </p>
                        <button onclick="app.launchGame('arena')" class="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-base rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95">
                            <i class="fa-solid fa-rocket"></i> Arenaya Gir!
                        </button>
                    </div>

                    <!-- Oyun 6: 1. Hafta Özel Dedektiflik Oyunu (Bilişim Teknolojileri Dedektifleri) -->
                    <div class="game-mode-card bg-gradient-to-br from-cyan-900/90 to-teal-950/90 rounded-3xl p-6 border-2 border-cyan-500/50 shadow-2xl flex flex-col justify-between space-y-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-cyan-500/30 text-cyan-300 flex items-center justify-center text-3xl shadow-inner shrink-0">
                                <i class="fa-solid fa-user-secret"></i>
                            </div>
                            <div>
                                <span class="text-xs font-bold text-cyan-300 uppercase">6. Oyun Modu (Vaka)</span>
                                <h3 class="text-xl font-black text-white">Bilişim Dedektifleri</h3>
                            </div>
                        </div>
                        <p class="text-sm text-cyan-100 flex-1">
                            Olay yerindeki ipuçlarını topla, kullanım alanını doğru tespit et ve vakaları çözerek dedektif ol!
                        </p>
                        <button onclick="app.openStandaloneGame('games/bilisim_teknolojileri_dedektifleri.html', 'Bilişim Teknolojileri Dedektifleri | Öğretmen Bozok')" class="w-full py-3.5 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-black text-base rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95">
                            <i class="fa-solid fa-magnifying-glass"></i> Dedektifliği Başlat!
                        </button>
                    </div>
                    ` : ''}

                    ${isWeek2 ? `
                    <!-- Oyun 5: 2. Hafta Özel Tekrar Oyunu (Teknoloji Dedektifleri) -->
                    <div class="game-mode-card bg-gradient-to-br from-amber-900/90 to-yellow-950/90 rounded-3xl p-6 border-2 border-amber-500/50 shadow-2xl flex flex-col justify-between space-y-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-amber-500/30 text-amber-300 flex items-center justify-center text-3xl shadow-inner shrink-0">
                                <i class="fa-solid fa-user-secret"></i>
                            </div>
                            <div>
                                <span class="text-xs font-bold text-amber-300 uppercase">5. Oyun Modu (Özel)</span>
                                <h3 class="text-xl font-black text-white">Teknoloji Dedektifleri</h3>
                            </div>
                        </div>
                        <p class="text-sm text-amber-100 flex-1">
                            Olumlu ve olumsuz etkileri incele, dijital sağlık ipuçlarını takip et ve usta dedektif rozetini kazan!
                        </p>
                        <button onclick="app.openStandaloneGame('games/tekrar oyunu hafta 2.html', 'Teknoloji Dedektifleri Arenası | Öğretmen Bozok')" class="w-full py-3.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-base rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95">
                            <i class="fa-solid fa-magnifying-glass"></i> Dedektifliği Başlat!
                        </button>
                    </div>

                    <!-- Oyun 6: 2. Hafta Özel Oyunu (Teknoloji Mahkemesi) -->
                    <div class="game-mode-card bg-gradient-to-br from-orange-900/90 to-stone-950/90 rounded-3xl p-6 border-2 border-orange-500/50 shadow-2xl flex flex-col justify-between space-y-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-orange-500/30 text-orange-300 flex items-center justify-center text-3xl shadow-inner shrink-0">
                                <i class="fa-solid fa-gavel"></i>
                            </div>
                            <div>
                                <span class="text-xs font-bold text-orange-300 uppercase">6. Oyun Modu (Mahkeme)</span>
                                <h3 class="text-xl font-black text-white">Teknoloji Mahkemesi</h3>
                            </div>
                        </div>
                        <p class="text-sm text-orange-100 flex-1">
                            Sınıfça mahkemeye girin! Davalarda hakim ve jüri olun, delilleri inceleyip adil kararı verin!
                        </p>
                        <button onclick="app.openStandaloneGame('games/teknoloji_mahkemesi.html', 'Teknoloji Mahkemesi | Öğretmen Bozok')" class="w-full py-3.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-base rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95">
                            <i class="fa-solid fa-gavel"></i> Mahkemeyi Başlat!
                        </button>
                    </div>

                    <!-- Oyun 7: 2. Hafta Özel Oyunu (Bir Günlük Teknoloji Macerası) -->
                    <div class="game-mode-card bg-gradient-to-br from-emerald-900/90 to-teal-950/90 rounded-3xl p-6 border-2 border-emerald-500/50 shadow-2xl flex flex-col justify-between space-y-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-emerald-500/30 text-emerald-300 flex items-center justify-center text-3xl shadow-inner shrink-0">
                                <i class="fa-solid fa-compass"></i>
                            </div>
                            <div>
                                <span class="text-xs font-bold text-emerald-300 uppercase">7. Oyun Modu (Macera)</span>
                                <h3 class="text-xl font-black text-white">Teknoloji Macerası</h3>
                            </div>
                        </div>
                        <p class="text-sm text-emerald-100 flex-1">
                            Sabahtan geceye 24 saatlik serüvene çık! Doğru tercihler yaparak ekran süreni ve sağlığını koru!
                        </p>
                        <button onclick="app.openStandaloneGame('games/bir_gunluk_teknoloji_maceras.html', 'Bir Günlük Teknoloji Macerası | Öğretmen Bozok')" class="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-base rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95">
                            <i class="fa-solid fa-play"></i> Maceraya Başla!
                        </button>
                    </div>
                    ` : ''}

                    <!-- Oyun 1: Çarkıfelek -->
                    <div class="game-mode-card bg-gradient-to-br from-indigo-900/90 to-blue-900/90 rounded-3xl p-6 border-2 border-indigo-500/50 shadow-2xl flex flex-col justify-between space-y-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-indigo-500/30 text-yellow-400 flex items-center justify-center text-3xl shadow-inner">
                                <i class="fa-solid fa-dharmachakra"></i>
                            </div>
                            <div>
                                <span class="text-xs font-bold text-indigo-300 uppercase">1. Oyun Modu</span>
                                <h3 class="text-xl font-black text-white">Bilişim Çarkıfeleği</h3>
                            </div>
                        </div>
                        <p class="text-sm text-indigo-100">
                            Çarkı çevirerek puanları topla, jokerleri kullan ve sınıfın şampiyonu ol!
                        </p>
                        <button onclick="app.launchGame('wheel')" class="w-full py-3.5 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-black text-base rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all">
                            <i class="fa-solid fa-play"></i> Çarkıfeleği Başlat
                        </button>
                    </div>

                    <!-- Oyun 2: Eşleştirme -->
                    <div class="game-mode-card bg-gradient-to-br from-emerald-900/90 to-teal-900/90 rounded-3xl p-6 border-2 border-emerald-500/50 shadow-2xl flex flex-col justify-between space-y-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-emerald-500/30 text-emerald-300 flex items-center justify-center text-3xl shadow-inner">
                                <i class="fa-solid fa-puzzle-piece"></i>
                            </div>
                            <div>
                                <span class="text-xs font-bold text-emerald-300 uppercase">2. Oyun Modu</span>
                                <h3 class="text-xl font-black text-white">Kavram & Alan Eşleştirme</h3>
                            </div>
                        </div>
                        <p class="text-sm text-emerald-100">
                            Bilişim teknolojilerini kullanım alanlarıyla en hızlı şekilde eşleştir, süreyi yen!
                        </p>
                        <button onclick="app.launchGame('match')" class="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-base rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all">
                            <i class="fa-solid fa-play"></i> Eşleştirmeye Başla
                        </button>
                    </div>

                    <!-- Oyun 3: Refleks -->
                    <div class="game-mode-card bg-gradient-to-br from-cyan-900/90 to-blue-950/90 rounded-3xl p-6 border-2 border-cyan-500/50 shadow-2xl flex flex-col justify-between space-y-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-cyan-500/30 text-cyan-300 flex items-center justify-center text-3xl shadow-inner">
                                <i class="fa-solid fa-bolt-lightning"></i>
                            </div>
                            <div>
                                <span class="text-xs font-bold text-cyan-300 uppercase">3. Oyun Modu</span>
                                <h3 class="text-xl font-black text-white">Hızlı Doğru mu Yanlış mı?</h3>
                            </div>
                        </div>
                        <p class="text-sm text-cyan-100">
                            Hızla akan kartları değerlendir, seri yaparak kombo puanları topla!
                        </p>
                        <button onclick="app.launchGame('reflex')" class="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-black text-base rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all">
                            <i class="fa-solid fa-play"></i> Refleks Oyununu Başlat
                        </button>
                    </div>

                    <!-- Oyun 4: Düello -->
                    <div class="game-mode-card bg-gradient-to-br from-purple-900/90 to-pink-900/90 rounded-3xl p-6 border-2 border-purple-500/50 shadow-2xl flex flex-col justify-between space-y-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-purple-500/30 text-pink-300 flex items-center justify-center text-3xl shadow-inner">
                                <i class="fa-solid fa-users"></i>
                            </div>
                            <div>
                                <span class="text-xs font-bold text-purple-300 uppercase">4. Oyun Modu (Sınıf İçi)</span>
                                <h3 class="text-xl font-black text-white">Akıllı Tahta İkili Düello</h3>
                            </div>
                        </div>
                        <p class="text-sm text-purple-100">
                            Tahtayı ikiye bölen ve iki öğrencinin aynı anda canlı yarışabileceği sınıf modu!
                        </p>
                        <button onclick="app.launchGame('duel')" class="w-full py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-black text-base rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all">
                            <i class="fa-solid fa-play"></i> Sınıf Düellosunu Başlat
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    launchGame(gameType) {
        sounds.playClick();
        this.stopAllGames();
        if (gameType === 'wheel') {
            wheelGame.init("game-container");
        } else if (gameType === 'match') {
            matchGame.init("game-container");
        } else if (gameType === 'reflex') {
            reflexGame.init("game-container");
        } else if (gameType === 'duel') {
            duelGame.init("game-container");
        } else if (gameType === 'arena') {
            arenaGame.init("game-container");
        }
    }

    // --- KLAVYE VE DOKUNMATİK AKILLI TAHTA KONTROLLERİ ---
    setupKeyboard() {
        const handleKeyDown = (e) => {
            // Kullanıcı form/input alanındaysa tuşları engelleme
            const targetTag = e.target ? e.target.tagName.toLowerCase() : '';
            if (['input', 'textarea', 'select'].includes(targetTag)) return;

            // Bağımsız oyun penceresi açıksa tuşları oyuna bırak
            const standaloneModal = document.getElementById("standalone-game-modal");
            if (standaloneModal && !standaloneModal.classList.contains("hidden")) return;

            // Açık modalları Escape ile kapatma desteği
            if (e.key === "Escape") {
                const slideMenu = document.getElementById("slide-menu-modal");
                if (slideMenu && !slideMenu.classList.contains("hidden")) {
                    this.closeSlideMenu();
                    return;
                }
                const curriculumModal = document.getElementById("curriculum-modal");
                if (curriculumModal && !curriculumModal.classList.contains("hidden")) {
                    this.closeCurriculumModal();
                    return;
                }
                const lightbox = document.getElementById("lightbox-modal");
                if (lightbox && !lightbox.classList.contains("hidden")) {
                    this.closePhotoLightbox();
                    return;
                }
            }

            // Slayt sekmesi aktif mi kontrol et
            const lectureView = document.getElementById("view-lecture");
            const isLectureActive = (this.currentTab === 'lecture') || (lectureView && !lectureView.classList.contains("hidden"));

            if (isLectureActive) {
                // İleri tuşları: Sağ Ok, PageDown, Boşluk (Space), Aşağı Ok
                const isNextKey = (
                    e.key === "ArrowRight" ||
                    e.key === "Right" ||
                    e.code === "ArrowRight" ||
                    e.keyCode === 39 ||
                    e.key === "PageDown" ||
                    e.keyCode === 34 ||
                    e.key === "ArrowDown" ||
                    e.keyCode === 40 ||
                    e.key === " " ||
                    e.code === "Space"
                );

                // Geri tuşları: Sol Ok, PageUp, Yukarı Ok
                const isPrevKey = (
                    e.key === "ArrowLeft" ||
                    e.key === "Left" ||
                    e.code === "ArrowLeft" ||
                    e.keyCode === 37 ||
                    e.key === "PageUp" ||
                    e.keyCode === 33 ||
                    e.key === "ArrowUp" ||
                    e.keyCode === 38
                );

                if (isNextKey) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.nextSlide();
                } else if (isPrevKey) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.prevSlide();
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown, { capture: true, passive: false });

        // Akıllı Tahta Dokunmatik Kaydırma (Swipe) Desteği
        const slideArea = document.getElementById("slide-display-area");
        if (slideArea) {
            let touchStartX = 0;
            let touchStartY = 0;

            slideArea.addEventListener("touchstart", (e) => {
                touchStartX = e.changedTouches[0].screenX;
                touchStartY = e.changedTouches[0].screenY;
            }, { passive: true });

            slideArea.addEventListener("touchend", (e) => {
                const diffX = e.changedTouches[0].screenX - touchStartX;
                const diffY = e.changedTouches[0].screenY - touchStartY;
                if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
                    if (diffX < 0) {
                        this.nextSlide(); // Parmağı sola kaydırınca -> sonraki slayt
                    } else {
                        this.prevSlide(); // Parmağı sağa kaydırınca -> önceki slayt
                    }
                }
            }, { passive: true });
        }
    }

    openStandaloneGame(url, title = "Bilişim Teknolojileri Dedektifleri") {
        sounds.playClick();
        const modal = document.getElementById("standalone-game-modal");
        const iframe = document.getElementById("standalone-game-iframe");
        const titleEl = document.getElementById("standalone-game-title");
        
        let targetUrl = url;
        if (!targetUrl.startsWith('http') && !targetUrl.startsWith('games/') && !targetUrl.startsWith('/')) {
            targetUrl = 'games/' + targetUrl;
        }

        if (!modal || !iframe) {
            window.open(targetUrl, "_blank");
            return;
        }
        iframe.src = targetUrl;
        if (titleEl) titleEl.innerText = title;
        modal.classList.remove("hidden");
        document.body.classList.add("overflow-hidden");
    }

    closeStandaloneGame() {
        sounds.playClick();
        const modal = document.getElementById("standalone-game-modal");
        const iframe = document.getElementById("standalone-game-iframe");
        if (modal) modal.classList.add("hidden");
        if (iframe) iframe.src = "";
        document.body.classList.remove("overflow-hidden");
    }

    toggleAudio() {
        const isMuted = sounds.toggleMute();
        const icon = document.getElementById("audio-toggle-icon");
        if (icon) {
            if (isMuted) {
                icon.className = "fa-solid fa-volume-xmark text-rose-400";
            } else {
                icon.className = "fa-solid fa-volume-high text-emerald-400";
            }
        }
    }
}

const app = new App();
window.onload = () => app.init();
