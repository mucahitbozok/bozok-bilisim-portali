// ==========================================
// 6. Konu: Dosya ve Klasör Yönetimi
// MEB 5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi
// BTY.5.1.6. Dosya ve klasör yönetimi ile ilgili temel işlemlerle çalışabilme
// Hazırlayan: Öğretmen Bozok
// ==========================================

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
            "Dosya kavramını, dosya adlandırma kurallarını ve yasaklı karakterleri belirleyebilme.",
            "Dosya uzantılarını (.docx, .jpg, .mp3, .mp4, .pdf, .zip vb.) ve dosya türlerini ayırt edebilme.",
            "Klasör (dizin) yapısını, klasör ağacını ve dosya hiyerarşisini düzenleyebilme.",
            "Dosya ve klasör sıkıştırma / arşivleme işlemlerini verimlilik kapsamında kullanabilme."
        ]
    },

    hideStandardGames: true,

    extraGames: [
        {
            badge: "Sıralama Simülasyonu",
            badgeColor: "text-purple-300",
            title: "Dosya & Uzantı Laboratuvarı",
            desc: "Karışık gelen dosyaları uzantılarına (.docx, .jpg, .mp3, .mp4, .zip vb.) göre 6 doğru klasöre tasnif et! Sürükle veya tıkla, komboları topla!",
            icon: "fa-solid fa-folder-tree",
            iconBg: "bg-purple-500/30 text-purple-300",
            cardGradient: "from-purple-950/90 via-slate-900 to-indigo-950/90",
            border: "border-purple-500/50",
            descColor: "text-purple-100",
            btnText: "Laboratuvara Gir!",
            btnIcon: "fa-solid fa-play",
            btnGradient: "from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-black",
            action: "app.openStandaloneGame('games/dosya_uzanti_laboratuvari.html', 'Dosya & Uzantı Laboratuvarı | Öğretmen Bozok')"
        }
    ],

    videos: [],

    slides: [
        {
            id: 1,
            title: "DOSYA VE KLASÖR YÖNETİMİ 📁",
            subtitle: "6. KONU • BTY.5.1.6",
            topic: "6. KONU • BTY.5.1.6",
            badge: "GİRİŞ & KAZANIM",
            icon: "fa-solid fa-folder-tree",
            bgColor: "from-slate-900 via-purple-950 to-indigo-950",
            gradient: "from-slate-900 via-purple-950 to-indigo-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-5 text-center my-auto py-2">
                    <div class="w-20 h-20 rounded-3xl bg-gradient-to-tr from-purple-500 to-cyan-500 text-white flex items-center justify-center text-4xl mx-auto shadow-2xl animate-bounce">
                        <i class="fa-solid fa-folder-tree"></i>
                    </div>

                    <div class="space-y-2">
                        <span class="px-4 py-1.5 bg-emerald-500/20 text-emerald-300 font-extrabold text-xs uppercase tracking-wider rounded-full border border-emerald-400/30">
                            6. KONU • BTY.5.1.6
                        </span>
                        <h2 class="text-3xl sm:text-4xl font-black text-white">
                            Dosya ve Klasör Yönetimi
                        </h2>
                        <p class="text-sm sm:text-base text-indigo-200 max-w-xl mx-auto leading-relaxed">
                            Dosya adı, dosya uzantısı, yasaklı karakterler ve klasör hiyerarşisi laboratuvarı! Bu konunun simülasyon oyununu hemen oynamak için aşağıdaki butona veya <strong>Tekrar Oyunları</strong> sekmesine tıklayabilirsiniz.
                        </p>
                    </div>

                    <div class="flex items-center justify-center gap-3 pt-2 flex-wrap">
                        <button onclick="app.openStandaloneGame('games/dosya_uzanti_laboratuvari.html', 'Dosya & Uzantı Laboratuvarı | Öğretmen Bozok'); sounds.playClick();" class="px-6 py-3.5 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-black text-sm rounded-2xl shadow-xl shadow-purple-500/25 flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95">
                            <i class="fa-solid fa-play"></i>
                            <span>Dosya & Uzantı Laboratuvarını Başlat 🎮</span>
                        </button>
                        <button onclick="app.switchTab('games'); sounds.playClick();" class="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm rounded-2xl border border-slate-700 shadow-lg flex items-center gap-2 transition-all active:scale-95">
                            <i class="fa-solid fa-gamepad text-purple-400"></i>
                            <span>Tekrar Oyunları Sekmesine Git</span>
                        </button>
                    </div>

                    <div class="pt-2 text-xs text-slate-400 flex items-center justify-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>Öğretmen Bozok • Bozok Bilişim Portalı 2026</span>
                    </div>
                </div>
            `
        }
    ],

    worksheetDocs: null,
    questions: [],
    gameData: null
};
