// ==========================================
// 4. Konu: Yapay Zekâda Temel Kavram ve Özellikler
// MEB 5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi
// Tam İnteraktif Ders Materyalleri ve Oyun Veritabanı
// Hazırlayan: Öğretmen Bozok
// ==========================================

window.WEEK4_CONTENT = {
    weekInfo: {
        weekNumber: 4,
        topicNumber: 4,
        customLabel: "4. Konu",
        title: "Yapay Zekâda Temel Kavram ve Özellikler",
        code: "BTY.5.1.4. Yapay zekâ ile ilgili temel kavramları ve özellikleri sorgulayabilme",
        theme: "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        isPending: false,
        learningGoals: [
            "Doğal insan zekâsı ile bilgisayarların yapay zekâsı arasındaki farkları kavrayacağım.",
            "Yapay zekânın temel çalışma mantığını (Veri, Model Eğitimi, Tahmin & Karar Verme) keşfedeceğim.",
            "Günlük yaşamda karşılaştığım yapay zekâ uygulamalarını (sesli asistan, yüz tanıma, akıllı öneriler, otonom araçlar) sınıflandırabileceğim.",
            "Yapay zekânın ürettiği bilgilerin doğruluğunu sorgulamayı ve güvenli kullanım ilkelerini uygulayabileceğim."
        ],
        images: {
            konu: "assets/worksheets/1.4_konu.png",
            soru: "assets/worksheets/1.4_soru.png",
            cevap: "assets/worksheets/1.4_cevap.png"
        }
    },

    // 🎬 KONU İLE ALAKALI VİDEOLAR
    videos: [],

    // ========================================================
    // 🖥️ 1. İNTERAKTİF DERS SUNUSU (Akıllı Tahta Modu - 18 Slayt)
    // ========================================================
    slides: [
        // SLAYT 1 — KAPAK
        {
            id: 1,
            title: "5. SINIF BİLİŞİM TEKNOLOJİLERİ",
            subtitle: "4. Konu Ders Sunusu",
            topic: "KAZANIM: BTY.5.1.4",
            badge: "KAZANIM: BTY.5.1.4",
            icon: "fa-solid fa-brain",
            bgColor: "from-blue-700 via-indigo-800 to-slate-900",
            gradient: "from-blue-700 via-indigo-800 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-6xl mx-auto my-auto py-2">
                    <div class="md:col-span-7 space-y-4 text-left">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="px-4 py-1.5 bg-yellow-400/20 text-yellow-300 font-extrabold text-sm sm:text-base uppercase tracking-wider rounded-full border border-yellow-400/40">
                                5. Sınıf Bilişim Teknolojileri • 4. Konu
                            </span>
                            <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 font-bold text-xs rounded-full border border-cyan-400/30">
                                🤖 Akıllı Teknolojiler & Gelecek
                            </span>
                        </div>

                        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-black text-white tracking-tight leading-tight drop-shadow-lg">
                            YAPAY ZEKÂDA TEMEL KAVRAM VE ÖZELLİKLER
                        </h1>

                        <div class="p-4 sm:p-5 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-indigo-400/50 shadow-xl space-y-1.5">
                            <div class="flex items-center gap-2 text-yellow-300 font-black text-xs sm:text-sm uppercase tracking-widest">
                                <i class="fa-solid fa-bullseye text-base text-yellow-400"></i>
                                <span>ÖĞRENME ÇIKTISI:</span>
                            </div>
                            <p class="text-xl sm:text-2xl md:text-[23px] font-extrabold text-white leading-snug">
                                <span class="text-yellow-300 font-black">BTY.5.1.4 –</span> Yapay zekâ ile ilgili temel kavramları ve özellikleri sorgulayabilme.
                            </p>
                        </div>

                        <div class="p-3.5 sm:p-4 bg-indigo-950/80 rounded-2xl border border-indigo-400/30 flex items-start gap-3 shadow-lg">
                            <div class="w-9 h-9 rounded-xl bg-indigo-500/30 text-yellow-300 flex items-center justify-center text-lg shrink-0 mt-0.5">
                                <i class="fa-solid fa-lightbulb"></i>
                            </div>
                            <p class="text-sm sm:text-base font-semibold text-indigo-100 leading-relaxed">
                                “Makineler gerçekten düşünebilir mi? Telefonumuz yüzümüzü nasıl tanıyor? Gelin yapay zekânın heyecan dolu dünyasını birlikte keşfedelim!”
                            </p>
                        </div>

                        <div class="pt-1 flex items-center gap-2">
                            <span class="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-yellow-300 font-bold text-xs sm:text-sm shadow-md">
                                <i class="fa-solid fa-chalkboard-user text-base"></i>
                                <span>Öğretmen Bozok • Bozok Bilişim Portalı</span>
                            </span>
                        </div>
                    </div>

                    <div class="md:col-span-5 flex justify-center">
                        <div class="relative w-full max-w-sm sm:max-w-md aspect-square rounded-3xl p-3 bg-gradient-to-tr from-cyan-400/30 via-indigo-500/20 to-pink-500/30 border-2 border-white/20 shadow-2xl backdrop-blur-sm group">
                            <div class="w-full h-full rounded-2xl overflow-hidden shadow-inner flex flex-col items-center justify-center p-6 bg-slate-900/90 text-center space-y-4">
                                <div class="w-24 h-24 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white text-5xl shadow-xl shadow-cyan-500/30">
                                    <i class="fa-solid fa-robot"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-black text-white">Akıllı Zihinlerin Çağı</h3>
                                    <p class="text-xs text-indigo-300 font-medium mt-1">İnsan Zekâsı 🤝 Yapay Zekâ</p>
                                </div>
                                <div class="grid grid-cols-2 gap-2 w-full pt-2">
                                    <div class="p-2 bg-indigo-950/60 rounded-xl border border-indigo-500/30 text-center">
                                        <div class="text-xs text-yellow-400 font-bold">Veri & Model</div>
                                        <div class="text-[11px] text-slate-300">Öğrenme Sistemi</div>
                                    </div>
                                    <div class="p-2 bg-indigo-950/60 rounded-xl border border-indigo-500/30 text-center">
                                        <div class="text-xs text-emerald-400 font-bold">Doğal vs Yapay</div>
                                        <div class="text-[11px] text-slate-300">Akıllı Çözümleme</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 2 — BUGÜN NELER KEŞFEDECEĞİZ?
        {
            id: 2,
            title: "BUGÜN NELER KEŞFEDECEĞİZ? 🎯",
            subtitle: "Dersimizin 4 Temel Hedefi",
            topic: "KAZANIM: BTY.5.1.4",
            badge: "DERS HEDEFLERİ",
            icon: "fa-solid fa-compass",
            bgColor: "from-indigo-800 via-slate-900 to-blue-900",
            gradient: "from-indigo-800 via-slate-900 to-blue-900",
            content: `
                <div class="max-w-5xl mx-auto my-auto py-2 space-y-6">
                    <div class="text-center space-y-2">
                        <span class="px-4 py-1.5 bg-yellow-400/20 text-yellow-300 font-extrabold text-xs uppercase tracking-widest rounded-full border border-yellow-400/30">
                            Merak Ettiklerimiz & Sorularımız
                        </span>
                        <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-white">Yapay Zekânın 4 Büyük Sorusu</h2>
                        <p class="text-sm sm:text-base text-indigo-200">Bu dersin sonunda şu 4 soruya rahatlıkla cevap verebileceğiz:</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        <div class="p-4 bg-slate-900/80 rounded-2xl border-2 border-cyan-500/40 shadow-xl space-y-2 flex items-start gap-4">
                            <div class="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl shrink-0">
                                1
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-white">Zekâ Nedir? Doğal ile Yapay Arasındaki Fark Ne?</h3>
                                <p class="text-xs text-slate-300 leading-relaxed">İnsan aklı nasıl çalışır, makinelerin yapay zekâsı nasıl çalışır? İkisi arasındaki temel farklar nelerdir?</p>
                            </div>
                        </div>

                        <div class="p-4 bg-slate-900/80 rounded-2xl border-2 border-emerald-500/40 shadow-xl space-y-2 flex items-start gap-4">
                            <div class="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl shrink-0">
                                2
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-white">Yapay Zekâ Nasıl Öğrenir ve Karar Verir?</h3>
                                <p class="text-xs text-slate-300 leading-relaxed">Veri (data) neden yapay zekânın yemeği gibidir? Model eğitimi ve tahmin süreci nasıl işler?</p>
                            </div>
                        </div>

                        <div class="p-4 bg-slate-900/80 rounded-2xl border-2 border-purple-500/40 shadow-xl space-y-2 flex items-start gap-4">
                            <div class="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl shrink-0">
                                3
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-white">Günlük Hayatımızda Nerede Saklanıyor?</h3>
                                <p class="text-xs text-slate-300 leading-relaxed">Yüz tanıma, sesli asistanlar, YouTube önerileri, otonom arabalar ve hastanedeki teşhis cihazları.</p>
                            </div>
                        </div>

                        <div class="p-4 bg-slate-900/80 rounded-2xl border-2 border-amber-500/40 shadow-xl space-y-2 flex items-start gap-4">
                            <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl shrink-0">
                                4
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-white">Yapay Zekâya Her Zaman Güvenebilir miyiz?</h3>
                                <p class="text-xs text-slate-300 leading-relaxed">Yapay zekâ hata yapar mı? Bilgileri nasıl teyit etmeliyiz ve kişisel verilerimizi nasıl korumalıyız?</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 3 — ZEKÂ NEDİR? DOĞAL İNSAN ZEKÂSI
        {
            id: 3,
            title: "ZEKÂ NEDİR? DOĞAL İNSAN ZEKÂSI 🧠",
            subtitle: "Düşünme, Hissetme ve Öğrenme Gücü",
            topic: "KAZANIM: BTY.5.1.4",
            badge: "DOĞAL ZEKÂ",
            icon: "fa-solid fa-head-side-virus",
            bgColor: "from-blue-900 via-indigo-950 to-slate-900",
            gradient: "from-blue-900 via-indigo-950 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto my-auto py-2 space-y-5 text-left">
                    <div class="p-4 sm:p-5 bg-gradient-to-r from-blue-950 to-indigo-950 rounded-2xl border-2 border-blue-400/40 shadow-xl flex items-center gap-4">
                        <div class="w-14 h-14 rounded-2xl bg-blue-500/20 text-blue-300 flex items-center justify-center text-3xl shrink-0">
                            <i class="fa-solid fa-brain"></i>
                        </div>
                        <div>
                            <h2 class="text-xl sm:text-2xl font-black text-white">Doğal Zekâ (İnsan Zekâsı) Nedir?</h2>
                            <p class="text-xs sm:text-sm text-indigo-200 mt-0.5">
                                İnsanın çevresini algılama, deneyimlerden ders çıkarma, yeni durumlara uyum sağlama, problem çözme ve <strong class="text-yellow-300">duygularıyla</strong> anlamlandırma yeteneğidir.
                            </p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-slate-700 space-y-2">
                            <div class="w-10 h-10 rounded-xl bg-yellow-400/20 text-yellow-300 flex items-center justify-center text-xl">
                                <i class="fa-solid fa-lightbulb"></i>
                            </div>
                            <h3 class="text-base font-bold text-white">Hayal Gücü & Yaratıcılık</h3>
                            <p class="text-xs text-slate-300">İnsan daha önce hiç var olmayan bir resmi, masalı veya icadı hayal gücüyle sıfırdan üretebilir.</p>
                        </div>

                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-slate-700 space-y-2">
                            <div class="w-10 h-10 rounded-xl bg-pink-400/20 text-pink-300 flex items-center justify-center text-xl">
                                <i class="fa-solid fa-heart"></i>
                            </div>
                            <h3 class="text-base font-bold text-white">Duygular & Empati</h3>
                            <p class="text-xs text-slate-300">İnsan üzüntü, sevinç, korku ve merhamet duyar. Arkadaşının yüzüne bakınca ne hissettiğini hemen anlar.</p>
                        </div>

                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-slate-700 space-y-2">
                            <div class="w-10 h-10 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center text-xl">
                                <i class="fa-solid fa-seedling"></i>
                            </div>
                            <h3 class="text-base font-bold text-white">Hatasından Ders Çıkarma</h3>
                            <p class="text-xs text-slate-300">Bir kez sobaya dokunup eli yanan çocuk, bir daha sobaya dokunmaması gerektiğini tek seferde öğrenir.</p>
                        </div>
                    </div>

                    <div class="p-3 bg-amber-500/10 rounded-xl border border-amber-500/30 text-xs text-amber-200 flex items-center gap-2.5">
                        <i class="fa-solid fa-circle-exclamation text-yellow-400 text-base shrink-0"></i>
                        <span><strong>Unutmayalım:</strong> Dünyadaki tüm yapay zekâ programlarını ve süper bilgisayarları tasarlayan güç, <u>insanın doğal zekâsıdır!</u></span>
                    </div>
                </div>
            `
        },

        // SLAYT 4 — YAPAY ZEKÂ (AI) NEDİR?
        {
            id: 4,
            title: "YAPAY ZEKÂ (AI) NEDİR? 🤖",
            subtitle: "Bilgisayarların Akıllı Davranma Sanatı",
            topic: "KAZANIM: BTY.5.1.4",
            badge: "YAPAY ZEKÂ TANIMI",
            icon: "fa-solid fa-microchip",
            bgColor: "from-indigo-900 via-purple-950 to-slate-900",
            gradient: "from-indigo-900 via-purple-950 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto my-auto py-2 space-y-5 text-left">
                    <div class="p-5 bg-gradient-to-r from-purple-950 to-indigo-950 rounded-2xl border-2 border-purple-400/50 shadow-xl space-y-2">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 rounded-xl bg-purple-500/30 text-purple-300 flex items-center justify-center text-2xl shrink-0">
                                <i class="fa-solid fa-robot"></i>
                            </div>
                            <h2 class="text-xl sm:text-2xl font-black text-white">Yapay Zekâ (Artificial Intelligence - AI)</h2>
                        </div>
                        <p class="text-sm sm:text-base text-purple-100 leading-relaxed">
                            İnsan zekâsına özgü olan <strong class="text-yellow-300">öğrenme, problem çözme, karar verme, ses tanıma ve görsel algılama</strong> gibi yeteneklerin bilgisayar sistemleri ve algoritmalar tarafından taklit edilmesidir.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-slate-700 space-y-2">
                            <h3 class="text-base font-bold text-cyan-300 flex items-center gap-2">
                                <i class="fa-solid fa-calculator text-slate-400"></i> Klasik Programlar
                            </h3>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Sadece programcının yazdığı kuralları uygular. Yeni bir durumla karşılaşınca kendiliğinden öğrenemez. (Örneğin: Basit bir hesap makinesi 2+2=4 yapar, fazlasını düşünemez).
                            </p>
                        </div>

                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-purple-500/40 space-y-2 bg-purple-950/20">
                            <h3 class="text-base font-bold text-yellow-300 flex items-center gap-2">
                                <i class="fa-solid fa-wand-magic-sparkles text-yellow-400"></i> Yapay Zekâlı Sistemler
                            </h3>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Kendisine verilen binlerce örneği inceleyerek kuralları <strong>kendi keşfeder</strong> ve daha önce hiç görmediği bir fotoğrafta kedi olup olmadığını tahmin edebilir!
                            </p>
                        </div>
                    </div>

                    <div class="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center justify-between flex-wrap gap-2 text-xs">
                        <span class="text-slate-300 font-semibold"><i class="fa-solid fa-tag text-indigo-400 mr-1.5"></i>Kısaltması:</span>
                        <span class="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 font-bold rounded-lg border border-indigo-500/30">Türkçe: YZ (Yapay Zekâ)</span>
                        <span class="px-2.5 py-1 bg-purple-500/20 text-purple-300 font-bold rounded-lg border border-purple-500/30">İngilizce: AI (Artificial Intelligence)</span>
                    </div>
                </div>
            `
        },

        // SLAYT 5 — YAPAY ZEKÂ NASIL ÇALIŞIR?
        {
            id: 5,
            title: "YAPAY ZEKÂ NASIL ÇALIŞIR? ⚙️",
            subtitle: "3 Temel Aşamalı Zekâ Döngüsü",
            topic: "KAZANIM: BTY.5.1.4",
            badge: "ÇALIŞMA MANTIĞI",
            icon: "fa-solid fa-gears",
            bgColor: "from-slate-900 via-indigo-950 to-blue-900",
            gradient: "from-slate-900 via-indigo-950 to-blue-900",
            content: `
                <div class="max-w-5xl mx-auto my-auto py-2 space-y-5 text-left">
                    <div class="text-center space-y-1">
                        <h2 class="text-xl sm:text-2xl font-black text-white">Yapay Zekânın 3 Aşamalı Yolculuğu</h2>
                        <p class="text-xs sm:text-sm text-slate-300">Bir yapay zekâ sıfırdan nasıl eğitilir ve akıllı kararlar verir?</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <!-- 1. Adım -->
                        <div class="p-4 bg-slate-900/90 rounded-2xl border-2 border-cyan-500/50 shadow-xl space-y-3 relative group">
                            <div class="flex items-center justify-between">
                                <span class="w-8 h-8 rounded-lg bg-cyan-500 text-slate-950 font-black flex items-center justify-center text-sm">1</span>
                                <i class="fa-solid fa-database text-2xl text-cyan-400"></i>
                            </div>
                            <h3 class="text-base font-bold text-white">1. Veri Toplama (Girdi)</h3>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Sisteme binlerce kedi ve köpek fotoğrafı yüklenir. Yapay zekâ bu fotoğrafların kulak, burun ve tüy yapılarını inceler.
                            </p>
                            <span class="inline-block px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-[10px] font-bold rounded">Hammadde: Veri</span>
                        </div>

                        <!-- 2. Adım -->
                        <div class="p-4 bg-slate-900/90 rounded-2xl border-2 border-yellow-500/50 shadow-xl space-y-3 relative group">
                            <div class="flex items-center justify-between">
                                <span class="w-8 h-8 rounded-lg bg-yellow-500 text-slate-950 font-black flex items-center justify-center text-sm">2</span>
                                <i class="fa-solid fa-microchip text-2xl text-yellow-400"></i>
                            </div>
                            <h3 class="text-base font-bold text-white">2. Model Eğitimi (Öğrenme)</h3>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Algoritmalar sayesinde ortak desenleri kavrar. "Kedilerin kulakları sivri, köpeklerin burunları daha geniştir" gibi bağlantılar kurar.
                            </p>
                            <span class="inline-block px-2 py-0.5 bg-yellow-500/20 text-yellow-300 text-[10px] font-bold rounded">Süreç: Algoritma</span>
                        </div>

                        <!-- 3. Adım -->
                        <div class="p-4 bg-slate-900/90 rounded-2xl border-2 border-emerald-500/50 shadow-xl space-y-3 relative group">
                            <div class="flex items-center justify-between">
                                <span class="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 font-black flex items-center justify-center text-sm">3</span>
                                <i class="fa-solid fa-square-check text-2xl text-emerald-400"></i>
                            </div>
                            <h3 class="text-base font-bold text-white">3. Tahmin & Karar (Çıktı)</h3>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Karşısına daha önce hiç görmediği yeni bir resim konulduğunda: "%98 ihtimalle bu bir kedidir!" diyerek doğru kararı verir.
                            </p>
                            <span class="inline-block px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold rounded">Sonuç: Akıllı Karar</span>
                        </div>
                    </div>

                    <div class="p-3 bg-indigo-950/60 rounded-xl border border-indigo-400/30 text-center text-xs text-indigo-200">
                        🔁 <strong>Özet Formül:</strong> <span class="text-cyan-300 font-bold">Veri</span> + <span class="text-yellow-300 font-bold">Algoritma (Matematiksel Model)</span> = <span class="text-emerald-300 font-bold">Yapay Zekâ Kararı</span>
                    </div>
                </div>
            `
        },

        // SLAYT 6 — VERİ (DATA) NEDİR?
        {
            id: 6,
            title: "VERİ (DATA) — YAPAY ZEKÂNIN BESİNİ! 📊",
            subtitle: "Bilgisayarların Öğrenmek İçin Tükettiği Bilgiler",
            topic: "KAZANIM: BTY.5.1.4",
            badge: "VERİNİN ÖNEMİ",
            icon: "fa-solid fa-chart-pie",
            bgColor: "from-blue-900 via-slate-900 to-indigo-900",
            gradient: "from-blue-900 via-slate-900 to-indigo-900",
            content: `
                <div class="max-w-5xl mx-auto my-auto py-2 space-y-5 text-left">
                    <div class="p-4 sm:p-5 bg-gradient-to-r from-blue-950 to-slate-900 rounded-2xl border-2 border-cyan-400/40 shadow-xl flex items-center gap-4">
                        <div class="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-3xl shrink-0">
                            <i class="fa-solid fa-database"></i>
                        </div>
                        <div>
                            <h2 class="text-xl sm:text-2xl font-black text-white">"Veri Olmadan Yapay Zekâ Olamaz!"</h2>
                            <p class="text-xs sm:text-sm text-slate-300 mt-0.5">
                                İnsanlar kitap okuyarak ve tecrübe ederek öğrenir; yapay zekâ ise <strong>büyük veri yığınlarını (Big Data)</strong> tarayarak öğrenir.
                            </p>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                        <div class="p-3.5 bg-slate-900/80 rounded-xl border border-slate-700 space-y-1.5">
                            <div class="text-2xl text-yellow-400"><i class="fa-solid fa-image"></i></div>
                            <div class="text-xs font-bold text-white">Görseller & Videolar</div>
                            <div class="text-[11px] text-slate-400">Yüz tanıma, nesne bulma</div>
                        </div>

                        <div class="p-3.5 bg-slate-900/80 rounded-xl border border-slate-700 space-y-1.5">
                            <div class="text-2xl text-emerald-400"><i class="fa-solid fa-microphone-lines"></i></div>
                            <div class="text-xs font-bold text-white">Ses Kayıtları</div>
                            <div class="text-[11px] text-slate-400">Sesli asistan, dikte</div>
                        </div>

                        <div class="p-3.5 bg-slate-900/80 rounded-xl border border-slate-700 space-y-1.5">
                            <div class="text-2xl text-cyan-400"><i class="fa-solid fa-file-lines"></i></div>
                            <div class="text-xs font-bold text-white">Yazılar & Kitaplar</div>
                            <div class="text-[11px] text-slate-400">Çeviri, metin yazma</div>
                        </div>

                        <div class="p-3.5 bg-slate-900/80 rounded-xl border border-slate-700 space-y-1.5">
                            <div class="text-2xl text-purple-400"><i class="fa-solid fa-hashtag"></i></div>
                            <div class="text-xs font-bold text-white">Sayılar & Ölçümler</div>
                            <div class="text-[11px] text-slate-400">Hava durumu, borsa, sensör</div>
                        </div>
                    </div>

                    <div class="p-4 bg-red-950/30 rounded-2xl border border-red-500/40 text-xs text-red-200 flex items-start gap-3">
                        <i class="fa-solid fa-triangle-exclamation text-red-400 text-lg shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-white">Çöp İçeri, Çöp Dışarı Kuralı (Garbage In, Garbage Out):</strong>
                            <p class="mt-0.5">Eğer yapay zekâya yanlış veya eksik veri verirseniz, o da yanlış ve yanıltıcı kararlar verir. Verinin kalitesi ve doğruluğu hayati önem taşır!</p>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 7 — DOĞAL ZEKÂ VS YAPAY ZEKÂ
        {
            id: 7,
            title: "DOĞAL ZEKÂ VS YAPAY ZEKÂ ⚖️",
            subtitle: "İnsan Aklı ile Makine Aklının Karşılaştırması",
            topic: "KAZANIM: BTY.5.1.4",
            badge: "KARŞILAŞTIRMA",
            icon: "fa-solid fa-scale-balanced",
            bgColor: "from-indigo-950 via-slate-900 to-purple-950",
            gradient: "from-indigo-950 via-slate-900 to-purple-950",
            content: `
                <div class="max-w-5xl mx-auto my-auto py-2 space-y-4 text-left">
                    <div class="text-center">
                        <h2 class="text-xl sm:text-2xl font-black text-white">Hangisi Hangi Alanda Daha Güçlü?</h2>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Doğal İnsan Zekâsı -->
                        <div class="p-4 bg-blue-950/50 rounded-2xl border-2 border-blue-500/40 shadow-xl space-y-3">
                            <div class="flex items-center gap-2.5 pb-2 border-b border-blue-500/30 text-blue-300 font-black text-base">
                                <i class="fa-solid fa-user text-xl"></i>
                                <span>Doğal Zekâ (İnsan)</span>
                            </div>
                            <ul class="space-y-2 text-xs text-slate-200">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-emerald-400 mt-0.5"></i>
                                    <span><strong>Gerçek duyguları</strong> ve empati yeteneği vardır.</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-emerald-400 mt-0.5"></i>
                                    <span><strong>Sıfırdan yaratıcılık:</strong> Özgün sanat ve hikâyeler üretir.</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-emerald-400 mt-0.5"></i>
                                    <span><strong>Bilinç ve ahlak:</strong> Neyin iyi, neyin kötü olduğunu vicdanıyla tartar.</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-minus text-amber-400 mt-0.5"></i>
                                    <span>Yorulur, uykusu gelir, dikkat dağınıklığı yaşayabilir.</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Yapay Zekâ -->
                        <div class="p-4 bg-purple-950/50 rounded-2xl border-2 border-purple-500/40 shadow-xl space-y-3">
                            <div class="flex items-center gap-2.5 pb-2 border-b border-purple-500/30 text-purple-300 font-black text-base">
                                <i class="fa-solid fa-robot text-xl"></i>
                                <span>Yapay Zekâ (Makine)</span>
                            </div>
                            <ul class="space-y-2 text-xs text-slate-200">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-emerald-400 mt-0.5"></i>
                                    <span><strong>Işık hızında işlem:</strong> Milyonlarca veriyi 1 saniyede tarar.</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check text-emerald-400 mt-0.5"></i>
                                    <span><strong>Yorulmaz & Unutmaz:</strong> 7/24 aralıksız aynı dikkatle çalışır.</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-xmark text-red-400 mt-0.5"></i>
                                    <span><strong>Duyguları yoktur:</strong> Üzülmez, sevinmez, acı hissetmez.</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-xmark text-red-400 mt-0.5"></i>
                                    <span><strong>Bilinçsizdir:</strong> Ne yaptığının farkında olmadan sadece kodları çalıştırır.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="p-3 bg-slate-800/80 rounded-xl border border-slate-700 text-center text-xs text-indigo-200 font-medium">
                        💡 <strong>Önemli Sonuç:</strong> Yapay zekâ insanın rakibi değil; insan aklını güçlendiren <span class="text-yellow-300 font-bold">akıllı bir yol arkadaşıdır.</span>
                    </div>
                </div>
            `
        },

        // SLAYT 8 — GÜNLÜK HAYATTA YAPAY ZEKÂ: TELEFONLAR
        {
            id: 8,
            title: "GÜNLÜK HAYATTA YAPAY ZEKÂ 📱",
            subtitle: "Akıllı Telefonlarımızdaki Gizli Zekâ",
            topic: "KAZANIM: BTY.5.1.4",
            badge: "KULLANIM ALANLARI",
            icon: "fa-solid fa-mobile-screen-button",
            bgColor: "from-blue-900 via-indigo-900 to-slate-900",
            gradient: "from-blue-900 via-indigo-900 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto my-auto py-2 space-y-4 text-left">
                    <div class="text-center">
                        <h2 class="text-xl sm:text-2xl font-black text-white">Cebimizdeki Yapay Zekâ Örnekleri</h2>
                        <p class="text-xs sm:text-sm text-slate-300">Farkında olmadan her gün onlarca kez kullandığımız yapay zekâ özellikleri:</p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div class="p-3.5 bg-slate-900/80 rounded-2xl border border-slate-700 flex items-start gap-3">
                            <div class="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xl shrink-0">
                                <i class="fa-solid fa-microphone"></i>
                            </div>
                            <div>
                                <h3 class="text-sm font-bold text-white">Sesli Asistanlar (Siri, Google Asistan)</h3>
                                <p class="text-[11px] text-slate-300 mt-0.5">"Bugün hava nasıl?" dediğimizde sesimizi tanır, anlamlandırır ve internetten cevabı bulup konuşarak söyler.</p>
                            </div>
                        </div>

                        <div class="p-3.5 bg-slate-900/80 rounded-2xl border border-slate-700 flex items-start gap-3">
                            <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl shrink-0">
                                <i class="fa-solid fa-id-card-clip"></i>
                            </div>
                            <div>
                                <h3 class="text-sm font-bold text-white">Yüz Tanıma ile Kilit Açma (Face ID)</h3>
                                <p class="text-[11px] text-slate-300 mt-0.5">Karanlıkta bile yüzümüzdeki binlerce noktayı tarayarak telefonun gerçek sahibini hatasız doğrular.</p>
                            </div>
                        </div>

                        <div class="p-3.5 bg-slate-900/80 rounded-2xl border border-slate-700 flex items-start gap-3">
                            <div class="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center text-xl shrink-0">
                                <i class="fa-solid fa-camera"></i>
                            </div>
                            <div>
                                <h3 class="text-sm font-bold text-white">Akıllı Kamera ve Portre Modu</h3>
                                <p class="text-[11px] text-slate-300 mt-0.5">Kamerayı çiçeğe, yemeğe veya insana tuttuğumuzda nesneyi algılar, ışığı ve arka plan bulanıklığını otomatik ayarlar.</p>
                            </div>
                        </div>

                        <div class="p-3.5 bg-slate-900/80 rounded-2xl border border-slate-700 flex items-start gap-3">
                            <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl shrink-0">
                                <i class="fa-solid fa-language"></i>
                            </div>
                            <div>
                                <h3 class="text-sm font-bold text-white">Anında Çeviri & Yazı Tahmini</h3>
                                <p class="text-[11px] text-slate-300 mt-0.5">Klavyede yazarken bir sonraki kelimeyi tahmin eder; tabeladaki yabancı dili kameradan anında Türkçeye çevirir.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 9 — İNTERNET, SOSYAL MEDYA VE EĞLENCE
        {
            id: 9,
            title: "İNTERNET VE EĞLENCEDE YAPAY ZEKÂ 🎬",
            subtitle: "Zevklerimizi Bilen Akıllı Öneri Algoritmaları",
            topic: "KAZANIM: BTY.5.1.4",
            badge: "EĞLENCE VE MEDYA",
            icon: "fa-solid fa-film",
            bgColor: "from-purple-950 via-slate-900 to-indigo-950",
            gradient: "from-purple-950 via-slate-900 to-indigo-950",
            content: `
                <div class="max-w-5xl mx-auto my-auto py-2 space-y-5 text-left">
                    <div class="p-4 bg-gradient-to-r from-purple-950 to-indigo-950 rounded-2xl border-2 border-pink-500/30 text-center space-y-1">
                        <h2 class="text-xl sm:text-2xl font-black text-white">"Sana Özel Önerilenler" Nasıl Ortaya Çıkıyor?</h2>
                        <p class="text-xs sm:text-sm text-pink-200">YouTube, Spotify veya oyunlar ne izlemek ve dinlemek istediğimizi nereden biliyor?</p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-slate-700 space-y-2">
                            <div class="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center text-xl">
                                <i class="fa-brands fa-youtube"></i>
                            </div>
                            <h3 class="text-sm font-bold text-white">Video & Dizi Önerileri</h3>
                            <p class="text-xs text-slate-300">Geçmişte izlediğin videoları analiz eder ve zevkine en uygun yeni videoları ana sayfana yerleştirir.</p>
                        </div>

                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-slate-700 space-y-2">
                            <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl">
                                <i class="fa-solid fa-music"></i>
                            </div>
                            <h3 class="text-sm font-bold text-white">Haftalık Müzik Keşfi</h3>
                            <p class="text-xs text-slate-300">Sevdiğin şarkıların ritmini, temposunu ve tarzını öğrenip sana özel "Haftalık Keşif Listesi" hazırlar.</p>
                        </div>

                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-slate-700 space-y-2">
                            <div class="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-xl">
                                <i class="fa-solid fa-gamepad"></i>
                            </div>
                            <h3 class="text-sm font-bold text-white">Oyunlardaki Akıllı Botlar</h3>
                            <p class="text-xs text-slate-300">Bilgisayara karşı maç yaparken taktik geliştiren, seni pusuya düşüren veya zorluk derecesini ayarlayan rakiplerdir.</p>
                        </div>
                    </div>

                    <div class="p-3 bg-purple-900/30 rounded-xl border border-purple-500/30 text-xs text-purple-200">
                        🎯 <strong>Öneri Algoritması:</strong> Her tıkın, her beğenin bir veridir! YZ bu veriyi okuyarak ilgi alanlarının haritasını çıkarır.
                    </div>
                </div>
            `
        },

        // SLAYT 10 — SAĞLIK VE ULAŞIMDA YAPAY ZEKÂ
        {
            id: 10,
            title: "SAĞLIK VE ULAŞIMDA YAPAY ZEKÂ 🩺🚗",
            subtitle: "Hayat Kurtaran ve Güvenliği Artıran Teknolojiler",
            topic: "KAZANIM: BTY.5.1.4",
            badge: "SAĞLIK VE ULAŞIM",
            icon: "fa-solid fa-car-on",
            bgColor: "from-blue-900 via-slate-900 to-emerald-950",
            gradient: "from-blue-900 via-slate-900 to-emerald-950",
            content: `
                <div class="max-w-5xl mx-auto my-auto py-2 space-y-5 text-left">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Ulaşım -->
                        <div class="p-4 sm:p-5 bg-slate-900/90 rounded-2xl border-2 border-cyan-500/40 shadow-xl space-y-3">
                            <div class="flex items-center gap-3 text-cyan-400">
                                <div class="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-2xl">
                                    <i class="fa-solid fa-car-side"></i>
                                </div>
                                <h3 class="text-lg font-black text-white">Ulaşımda Yapay Zekâ</h3>
                            </div>
                            <ul class="space-y-2 text-xs text-slate-300">
                                <li class="p-2 bg-slate-800/80 rounded-xl">
                                    <strong class="text-cyan-300">Otonom (Sürücüsüz) Araçlar:</strong> Kameralar ve sensörlerle yolu, yayaları ve ışıkları görerek şoförsüz güvenle yol alır.
                                </li>
                                <li class="p-2 bg-slate-800/80 rounded-xl">
                                    <strong class="text-cyan-300">Akıllı Harita & Navigasyon:</strong> Trafik sıkışmadan önce yüzlerce aracın hızını analiz edip bizi en hızlı boş yola yönlendirir.
                                </li>
                            </ul>
                        </div>

                        <!-- Sağlık -->
                        <div class="p-4 sm:p-5 bg-slate-900/90 rounded-2xl border-2 border-emerald-500/40 shadow-xl space-y-3">
                            <div class="flex items-center gap-3 text-emerald-400">
                                <div class="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-2xl">
                                    <i class="fa-solid fa-heart-pulse"></i>
                                </div>
                                <h3 class="text-lg font-black text-white">Sağlıkta Yapay Zekâ</h3>
                            </div>
                            <ul class="space-y-2 text-xs text-slate-300">
                                <li class="p-2 bg-slate-800/80 rounded-xl">
                                    <strong class="text-emerald-300">Erken Teşhis:</strong> Milyonlarca röntgen ve MR filmini doktorlardan daha hızlı tarayarak gözden kaçabilecek mikro tümörleri bulur.
                                </li>
                                <li class="p-2 bg-slate-800/80 rounded-xl">
                                    <strong class="text-emerald-300">Yeni İlaç Keşfi:</strong> Yıllar sürecek kimyasal deneyleri bilgisayarda simüle ederek aylar içinde aşı ve ilaç formülü bulur.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="p-3 bg-emerald-950/40 rounded-xl border border-emerald-500/30 text-xs text-emerald-200 text-center">
                        🚑 <strong>Kritik Not:</strong> Yapay zekâ doktorların ve şoförlerin yerine tamamen geçmek için değil; hata payını sıfıra indirmek için kullanılır.
                    </div>
                </div>
            `
        },

        // SLAYT 11 — ROBOTLAR VE YAPAY ZEKÂ AYNI MI?
        {
            id: 11,
            title: "ROBOTLAR VE YAPAY ZEKÂ AYNI MIDIR? 🤖💡",
            subtitle: "Donanım ile Yazılım Arasındaki Temel Fark",
            topic: "KAZANIM: BTY.5.1.4",
            badge: "SIKÇA YAPILAN HATA",
            icon: "fa-solid fa-question",
            bgColor: "from-slate-900 via-indigo-950 to-blue-950",
            gradient: "from-slate-900 via-indigo-950 to-blue-950",
            content: `
                <div class="max-w-5xl mx-auto my-auto py-2 space-y-5 text-left">
                    <div class="p-4 bg-gradient-to-r from-amber-950/70 to-slate-900 rounded-2xl border-2 border-yellow-400/50 shadow-xl flex items-center gap-4">
                        <div class="w-14 h-14 rounded-2xl bg-yellow-400/20 text-yellow-300 flex items-center justify-center text-3xl shrink-0">
                            <i class="fa-solid fa-lightbulb"></i>
                        </div>
                        <div>
                            <h2 class="text-xl sm:text-2xl font-black text-white">"Her Robot Yapay Zekâlı mıdır?"</h2>
                            <p class="text-xs sm:text-sm text-yellow-100">
                                <strong>HAYIR!</strong> Bu ikisi sıklıkla birbirine karıştırılır. Farkı insan bedeni ve aklına benzetebiliriz:
                            </p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-slate-700 space-y-2">
                            <div class="flex items-center gap-2 text-cyan-400 font-bold text-base">
                                <i class="fa-solid fa-microchip"></i> Robot = Donanım (Beden)
                            </div>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Motorları, tekerlekleri, sensörleri ve metal kolları olan fiziksel bir makinedir. Örneğin otomobil fabrikasında sürekli aynı noktaya kaynak yapan bir robot kol düşünün; sadece kendine verilen emri tekrar eder, öğrenmez.
                            </p>
                        </div>

                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-slate-700 space-y-2">
                            <div class="flex items-center gap-2 text-purple-400 font-bold text-base">
                                <i class="fa-solid fa-brain"></i> Yapay Zekâ = Yazılım (Zihin)
                            </div>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Fiziksel bir gövdesi olmak zorunda değildir! Telefonumuzdaki bir kod parçası veya internetteki bir sohbet botu da yapay zekâdır. Düşünür, hesaplar ve karar verir.
                            </p>
                        </div>
                    </div>

                    <div class="p-3.5 bg-indigo-950/80 rounded-xl border border-indigo-400/40 text-center text-xs text-indigo-100">
                        🤝 <strong>Birlikte Çalışırlarsa Ne Olur?</strong> Bir robotun içine yapay zekâ beyni koyarsanız; yerdeki çorabı halıdan ayırt eden <strong>akıllı robot süpürgeler</strong> veya engelleri aşıp paket taşıyan <strong>akıllı insansı robotlar</strong> ortaya çıkar!
                    </div>
                </div>
            `
        },

        // SLAYT 12 — YAPAY ZEKÂ HER ŞEYİ DOĞRU BİLİR Mİ?
        {
            id: 12,
            title: "YAPAY ZEKÂ HER ŞEYİ DOĞRU BİLİR Mİ? ⚠️",
            subtitle: "Hatalar, Yanılsamalar ve Halüsinasyon Gerçeği",
            topic: "KAZANIM: BTY.5.1.4",
            badge: "KRİTİK UYARI",
            icon: "fa-solid fa-triangle-exclamation",
            bgColor: "from-red-950 via-slate-900 to-indigo-950",
            gradient: "from-red-950 via-slate-900 to-indigo-950",
            content: `
                <div class="max-w-5xl mx-auto my-auto py-2 space-y-5 text-left">
                    <div class="p-4 sm:p-5 bg-red-950/40 rounded-2xl border-2 border-red-500/50 shadow-xl space-y-2">
                        <div class="flex items-center gap-3 text-red-400">
                            <i class="fa-solid fa-circle-exclamation text-2xl"></i>
                            <h2 class="text-xl sm:text-2xl font-black text-white">Yapay Zekâ da Hata Yapar!</h2>
                        </div>
                        <p class="text-xs sm:text-sm text-red-200 leading-relaxed">
                            Yapay zekâ sihirli bir varlık değildir. Yalnızca verilerden istatistik çıkaran bir bilgisayar programıdır. Bu yüzden bazen <strong>çok kendinden emin bir şekilde tamamen yanlış bilgiler</strong> uydurabilir!
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-slate-700 space-y-2">
                            <div class="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center text-xl">
                                <i class="fa-solid fa-ghost"></i>
                            </div>
                            <h3 class="text-sm font-bold text-white">Yapay Zekâ Halüsinasyonu</h3>
                            <p class="text-xs text-slate-300">Cevabını tam bilmediği bir soruda gerçeğe benzeyen ama tamamen uydurma tarihler, isimler veya kitaplar yazabilir.</p>
                        </div>

                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-slate-700 space-y-2">
                            <div class="w-10 h-10 rounded-xl bg-purple-400/20 text-purple-300 flex items-center justify-center text-xl">
                                <i class="fa-solid fa-scale-unbalanced"></i>
                            </div>
                            <h3 class="text-sm font-bold text-white">Yanlı ve Önyargılı Veriler</h3>
                            <p class="text-xs text-slate-300">İnternetteki yazılarda ırkçılık veya yanlış fikirler varsa, yapay zekâ bu hataları doğru zannedip tekrar edebilir.</p>
                        </div>

                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-slate-700 space-y-2">
                            <div class="w-10 h-10 rounded-xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center text-xl">
                                <i class="fa-solid fa-clock-rotate-left"></i>
                            </div>
                            <h3 class="text-sm font-bold text-white">Eski / Güncel Olmayan Veri</h3>
                            <p class="text-xs text-slate-300">Dün gerçekleşen bir depremi veya yeni çıkan bir yasayı henüz öğrenmemiş olabilir.</p>
                        </div>
                    </div>

                    <div class="p-3 bg-yellow-500/10 rounded-xl border border-yellow-500/30 text-xs text-yellow-200 text-center font-bold">
                        🔍 Altın Kural: Yapay zekâdan aldığın her bilgiyi öğretmenine, ders kitabına veya resmî kaynaklara sorarak TEYİT ET!
                    </div>
                </div>
            `
        },

        // SLAYT 13 — YAPAY ZEKÂ VE BİLGİ DOĞRULAMA
        {
            id: 13,
            title: "BİLGİ DOĞRULAMA VE GÜVENLİK 🛡️",
            subtitle: "Yapay Zekâyı Kullanırken 4 Güvenlik Kuralı",
            topic: "KAZANIM: BTY.5.1.4",
            badge: "GÜVENLİ KULLANIM",
            icon: "fa-solid fa-shield-halved",
            bgColor: "from-blue-950 via-slate-900 to-indigo-950",
            gradient: "from-blue-950 via-slate-900 to-indigo-950",
            content: `
                <div class="max-w-5xl mx-auto my-auto py-2 space-y-4 text-left">
                    <div class="text-center">
                        <h2 class="text-xl sm:text-2xl font-black text-white">Bilinçli Öğrencinin Güvenlik Kalkanı</h2>
                        <p class="text-xs sm:text-sm text-slate-300">Yapay zekâ araçlarıyla sohbet ederken nelere dikkat etmeliyiz?</p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div class="p-3.5 bg-slate-900/80 rounded-2xl border-2 border-red-500/40 flex items-start gap-3">
                            <div class="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center text-xl shrink-0">
                                <i class="fa-solid fa-key"></i>
                            </div>
                            <div>
                                <h3 class="text-sm font-bold text-white">1. Asla Kişisel Bilgi Verme!</h3>
                                <p class="text-[11px] text-slate-300 mt-0.5">T.C. kimlik numaranı, ev adresini, okulunun adını veya şifrelerini yapay zekâ pencerelerine asla yazma.</p>
                            </div>
                        </div>

                        <div class="p-3.5 bg-slate-900/80 rounded-2xl border-2 border-yellow-500/40 flex items-start gap-3">
                            <div class="w-10 h-10 rounded-xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center text-xl shrink-0">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div>
                                <h3 class="text-sm font-bold text-white">2. Çapraz Kontrol Yap!</h3>
                                <p class="text-[11px] text-slate-300 mt-0.5">Ödevin için aldığın bir cevabı en az iki farklı güvenilir siteden veya kitaptan doğrulamadan defterine yazma.</p>
                            </div>
                        </div>

                        <div class="p-3.5 bg-slate-900/80 rounded-2xl border-2 border-purple-500/40 flex items-start gap-3">
                            <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl shrink-0">
                                <i class="fa-solid fa-user-secret"></i>
                            </div>
                            <div>
                                <h3 class="text-sm font-bold text-white">3. Sahte Görsellere Dikkat (Deepfake)!</h3>
                                <p class="text-[11px] text-slate-300 mt-0.5">Yapay zekâ gerçekte hiç yaşanmamış sahte videolar ve fotoğraflar üretebilir. Her gördüğün videoya hemen inanma.</p>
                            </div>
                        </div>

                        <div class="p-3.5 bg-slate-900/80 rounded-2xl border-2 border-emerald-500/40 flex items-start gap-3">
                            <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl shrink-0">
                                <i class="fa-solid fa-pen-nib"></i>
                            </div>
                            <div>
                                <h3 class="text-sm font-bold text-white">4. Ödevini Ona Yaptırma, Ondan Öğren!</h3>
                                <p class="text-[11px] text-slate-300 mt-0.5">Yapay zekâya ödevini baştan sona yazdırmak tembellik yapar. Ona soru sor, fikir al ama ödevini kendi cümlelerinle yaz.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 14 — YAPAY ZEKÂNIN FAYDALARI
        {
            id: 14,
            title: "YAPAY ZEKÂNIN OLUMLU ETKİLERİ 🚀",
            subtitle: "İnsanlığa Sağladığı 5 Büyük Süper Güç",
            topic: "KAZANIM: BTY.5.1.4",
            badge: "FAYDALAR",
            icon: "fa-solid fa-rocket",
            bgColor: "from-emerald-950 via-slate-900 to-indigo-950",
            gradient: "from-emerald-950 via-slate-900 to-indigo-950",
            content: `
                <div class="max-w-5xl mx-auto my-auto py-2 space-y-4 text-left">
                    <div class="text-center">
                        <h2 class="text-xl sm:text-2xl font-black text-white">Yapay Zekâ Dünyayı Nasıl İyileştiriyor?</h2>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        <div class="p-3.5 bg-slate-900/80 rounded-xl border border-emerald-500/30 space-y-1.5">
                            <div class="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg">
                                <i class="fa-solid fa-stopwatch-20"></i>
                            </div>
                            <h3 class="text-sm font-bold text-white">Devasa Zaman Tasarrufu</h3>
                            <p class="text-[11px] text-slate-300">İnsanların haftalarca sürecek hesaplama ve veri incelemelerini dakikalar içinde bitirir.</p>
                        </div>

                        <div class="p-3.5 bg-slate-900/80 rounded-xl border border-cyan-500/30 space-y-1.5">
                            <div class="w-9 h-9 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-lg">
                                <i class="fa-solid fa-person-shelter"></i>
                            </div>
                            <h3 class="text-sm font-bold text-white">Tehlikeli İşlerde Güvenlik</h3>
                            <p class="text-[11px] text-slate-300">Madenlerde, yangınlarda veya nükleer santrallerde insanların yerine akıllı robotlar girer.</p>
                        </div>

                        <div class="p-3.5 bg-slate-900/80 rounded-xl border border-purple-500/30 space-y-1.5">
                            <div class="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-lg">
                                <i class="fa-solid fa-graduation-cap"></i>
                            </div>
                            <h3 class="text-sm font-bold text-white">Kişiye Özel Eğitim</h3>
                            <p class="text-[11px] text-slate-300">Her öğrencinin zorlandığı konuyu tespit edip ona özel hızda ve tarzda soru üretir.</p>
                        </div>

                        <div class="p-3.5 bg-slate-900/80 rounded-xl border border-yellow-500/30 space-y-1.5">
                            <div class="w-9 h-9 rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center text-lg">
                                <i class="fa-solid fa-seedling"></i>
                            </div>
                            <h3 class="text-sm font-bold text-white">Akıllı Tarım & Çevre</h3>
                            <p class="text-[11px] text-slate-300">Tarladaki hangi bitkinin suya veya ilaca ihtiyacı olduğunu uydudan tespit ederek israfı önler.</p>
                        </div>

                        <div class="p-3.5 bg-slate-900/80 rounded-xl border border-pink-500/30 space-y-1.5">
                            <div class="w-9 h-9 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center text-lg">
                                <i class="fa-solid fa-hands-holding-child"></i>
                            </div>
                            <h3 class="text-sm font-bold text-white">Engelli Bireylere Destek</h3>
                            <p class="text-[11px] text-slate-300">Görme engellilere çevresindeki eşyaları seslendirir, işitme engellilere sesleri anında yazıya döker.</p>
                        </div>

                        <div class="p-3.5 bg-slate-900/80 rounded-xl border border-blue-500/30 space-y-1.5">
                            <div class="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-lg">
                                <i class="fa-solid fa-microscope"></i>
                            </div>
                            <h3 class="text-sm font-bold text-white">Uzay & Bilimsel Keşifler</h3>
                            <p class="text-[11px] text-slate-300">Mars'taki keşif araçları rotalarını YZ ile çizer, uzak galaksilerdeki yeni gezegenleri keşfeder.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 15 — OLASI RİSKLER VE ETİK
        {
            id: 15,
            title: "OLASI RİSKLER VE ETİK SORULAR 🛡️",
            subtitle: "Teknolojiyi Doğru ve Adaletli Kullanma Sorumluluğu",
            topic: "KAZANIM: BTY.5.1.4",
            badge: "ETİK VE RİSKLER",
            icon: "fa-solid fa-scale-unbalanced-flip",
            bgColor: "from-slate-900 via-indigo-950 to-amber-950",
            gradient: "from-slate-900 via-indigo-950 to-amber-950",
            content: `
                <div class="max-w-5xl mx-auto my-auto py-2 space-y-4 text-left">
                    <div class="p-4 bg-amber-950/40 rounded-2xl border-2 border-amber-500/40 shadow-xl space-y-1 text-center">
                        <h2 class="text-xl sm:text-2xl font-black text-white">Büyük Güç, Büyük Sorumluluk Getirir!</h2>
                        <p class="text-xs sm:text-sm text-amber-200">Yapay zekâ hızla gelişirken insanlık olarak hangi risklere karşı uyanık olmalıyız?</p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div class="p-3.5 bg-slate-900/80 rounded-xl border border-slate-700 space-y-1">
                            <h3 class="text-sm font-bold text-red-300 flex items-center gap-2">
                                <i class="fa-solid fa-bed"></i> Düşünce Tembelliği
                            </h3>
                            <p class="text-xs text-slate-300">Her soruyu ve kararı yapay zekâya bırakırsak problem çözme ve eleştirel düşünme kaslarımız zayıflayabilir.</p>
                        </div>

                        <div class="p-3.5 bg-slate-900/80 rounded-xl border border-slate-700 space-y-1">
                            <h3 class="text-sm font-bold text-yellow-300 flex items-center gap-2">
                                <i class="fa-solid fa-masks-theater"></i> Sahte İçerik ve Dolandırıcılık
                            </h3>
                            <p class="text-xs text-slate-300">İnsanların sesini taklit edip anne-babamızı arayan veya ünlü birinin ağzından sahte video üreten kötü niyetli kişiler olabilir.</p>
                        </div>

                        <div class="p-3.5 bg-slate-900/80 rounded-xl border border-slate-700 space-y-1">
                            <h3 class="text-sm font-bold text-purple-300 flex items-center gap-2">
                                <i class="fa-solid fa-lock-open"></i> Gizlilik İhlalleri
                            </h3>
                            <p class="text-xs text-slate-300">Yapay zekâ şirketlerinin kullanıcıların özel mesajlarını ve fotoğraflarını izinsiz olarak model eğitiminde kullanma riski.</p>
                        </div>

                        <div class="p-3.5 bg-slate-900/80 rounded-xl border border-slate-700 space-y-1">
                            <h3 class="text-sm font-bold text-cyan-300 flex items-center gap-2">
                                <i class="fa-solid fa-copyright"></i> Emek Hırsızlığı & Telif Hakkı
                            </h3>
                            <p class="text-xs text-slate-300">Sanatçıların ve yazarların yıllarca emek verip çizdiği resimleri izinsiz taklit edip kendi eseri gibi sunma tehlikesi.</p>
                        </div>
                    </div>

                    <div class="p-3 bg-indigo-950/60 rounded-xl border border-indigo-500/30 text-xs text-indigo-200 text-center">
                        📜 <strong>Etik İlke:</strong> Yapay zekâ hiçbir zaman insanlara zarar vermek, kandırmak veya haksızlık yapmak için kullanılmamalıdır.
                    </div>
                </div>
            `
        },

        // SLAYT 16 — GELECEĞİN MESLEKLERİ VE YAPAY ZEKÂ
        {
            id: 16,
            title: "GELECEĞİN MESLEKLERİ VE YAPAY ZEKÂ 🔮",
            subtitle: "Siz Büyüdüğünüzde Hangi Meslekler Popüler Olacak?",
            topic: "KAZANIM: BTY.5.1.4",
            badge: "GELECEK VE KARİYER",
            icon: "fa-solid fa-user-astronaut",
            bgColor: "from-indigo-900 via-purple-950 to-slate-900",
            gradient: "from-indigo-900 via-purple-950 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto my-auto py-2 space-y-5 text-left">
                    <div class="text-center space-y-1">
                        <h2 class="text-xl sm:text-2xl font-black text-white">Yapay Zekâ Meslekleri Nasıl Değiştiriyor?</h2>
                        <p class="text-xs sm:text-sm text-slate-300">"Robotlar işimizi elimizden mi alacak?" sorusunun gerçek cevabı:</p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-cyan-500/40 space-y-2">
                            <div class="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xl">
                                <i class="fa-solid fa-code"></i>
                            </div>
                            <h3 class="text-sm font-bold text-white">Yapay Zekâ Mühendisi</h3>
                            <p class="text-xs text-slate-300">Yeni zeki algoritmalar tasarlayan, modelleri eğiten ve dünyayı değiştiren akıllı programlar kodlayan kişiler.</p>
                        </div>

                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-yellow-500/40 space-y-2">
                            <div class="w-10 h-10 rounded-xl bg-yellow-500/20 text-yellow-300 flex items-center justify-center text-xl">
                                <i class="fa-solid fa-chart-line"></i>
                            </div>
                            <h3 class="text-sm font-bold text-white">Veri Bilimci (Data Scientist)</h3>
                            <p class="text-xs text-slate-300">Büyük veri yığınlarını temizleyen, sınıflandıran ve yapay zekânın öğrenmesi için hazır hale getiren uzmanlar.</p>
                        </div>

                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-emerald-500/40 space-y-2">
                            <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xl">
                                <i class="fa-solid fa-scale-balanced"></i>
                            </div>
                            <h3 class="text-sm font-bold text-white">Yapay Zekâ Etik Uzmanı</h3>
                            <p class="text-xs text-slate-300">Yapay zekânın adil, tarafsız ve insan haklarına saygılı çalışmasını denetleyen modern hukuk ve ahlak liderleri.</p>
                        </div>
                    </div>

                    <div class="p-4 bg-gradient-to-r from-blue-950 to-indigo-950 rounded-2xl border border-indigo-400/40 flex items-center gap-3 text-xs sm:text-sm text-indigo-100">
                        <i class="fa-solid fa-star text-yellow-400 text-2xl shrink-0"></i>
                        <span>
                            <strong>Unutma:</strong> Yapay zekâ insanın yerini almayacak; ama <u>yapay zekâyı iyi kullanan insanlar</u>, kullanmayanların önüne geçecek!
                        </span>
                    </div>
                </div>
            `
        },

        // SLAYT 17 — İNTERAKTİF SINIF SORULARI
        {
            id: 17,
            title: "HANGİSİ YAPAY ZEKÂ? BİRLİKTE BULALIM! 🤔",
            subtitle: "Sınıf İçi İnteraktif Beyin Fırtınası",
            topic: "KAZANIM: BTY.5.1.4",
            badge: "CANLI ETKİNLİK",
            icon: "fa-solid fa-circle-question",
            bgColor: "from-blue-900 via-indigo-950 to-slate-900",
            gradient: "from-blue-900 via-indigo-950 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto my-auto py-2 space-y-4 text-left">
                    <div class="text-center">
                        <span class="px-3.5 py-1 bg-yellow-400/20 text-yellow-300 text-xs font-bold rounded-full border border-yellow-400/30 uppercase tracking-wider">Akıllı Tahta Yarışması</span>
                        <h2 class="text-xl sm:text-2xl font-black text-white mt-1">Bu Cihaz ve Programlardan Hangisinde Yapay Zekâ Vardır?</h2>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div class="p-3.5 bg-slate-900/90 rounded-2xl border border-slate-700 flex items-center justify-between">
                            <div>
                                <h4 class="text-sm font-bold text-white">1. Çalar Saatin Sabah 07:00'de Çalması</h4>
                                <p class="text-[11px] text-slate-400">Önceden kurulan saate göre zil çalar.</p>
                            </div>
                            <span class="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-black rounded-lg border border-slate-600 shrink-0">Normal Kod</span>
                        </div>

                        <div class="p-3.5 bg-slate-900/90 rounded-2xl border border-purple-500/40 flex items-center justify-between">
                            <div>
                                <h4 class="text-sm font-bold text-white">2. Telefonun Sahibinin Yüzünü Tanıması</h4>
                                <p class="text-[11px] text-slate-400">Gözlük taksa bile sahibini algılar.</p>
                            </div>
                            <span class="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-black rounded-lg border border-purple-500/40 shrink-0">✨ Yapay Zekâ</span>
                        </div>

                        <div class="p-3.5 bg-slate-900/90 rounded-2xl border border-slate-700 flex items-center justify-between">
                            <div>
                                <h4 class="text-sm font-bold text-white">3. Basit Hesap Makinesinde 45x12 Yapmak</h4>
                                <p class="text-[11px] text-slate-400">Sabit matematiksel formülü uygular.</p>
                            </div>
                            <span class="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-black rounded-lg border border-slate-600 shrink-0">Normal Kod</span>
                        </div>

                        <div class="p-3.5 bg-slate-900/90 rounded-2xl border border-purple-500/40 flex items-center justify-between">
                            <div>
                                <h4 class="text-sm font-bold text-white">4. Trafiğe Göre En Hızlı Yolu Bulan Harita</h4>
                                <p class="text-[11px] text-slate-400">Anlık yoğunlukları tahmin edip rota çizer.</p>
                            </div>
                            <span class="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-black rounded-lg border border-purple-500/40 shrink-0">✨ Yapay Zekâ</span>
                        </div>
                    </div>

                    <div class="p-3 bg-emerald-950/40 rounded-xl border border-emerald-500/30 text-center text-xs text-emerald-200">
                        👏 <strong>Tebrikler!</strong> Veriden öğrenen, kendini geliştiren ve tahmin yürüten sistemler yapay zekâdır!
                    </div>
                </div>
            `
        },

        // SLAYT 18 — DERS SONU ÖZETİ & 5 ALTIN KURAL
        {
            id: 18,
            title: "YAPAY ZEKÂNIN 5 ALTIN ÇIKARIMI 🏆",
            subtitle: "Ders Sonu Özeti & Öğrenci Manifestosu",
            topic: "KAZANIM: BTY.5.1.4",
            badge: "DERS ÖZETİ",
            icon: "fa-solid fa-award",
            bgColor: "from-blue-700 via-indigo-800 to-slate-900",
            gradient: "from-blue-700 via-indigo-800 to-slate-900",
            content: `
                <div class="max-w-5xl mx-auto my-auto py-2 space-y-4 text-left">
                    <div class="text-center space-y-1">
                        <span class="px-4 py-1 bg-yellow-400/20 text-yellow-300 text-xs font-black rounded-full border border-yellow-400/40 uppercase tracking-widest">
                            Tebrikler! 4. Konuyu Tamamladınız
                        </span>
                        <h2 class="text-2xl sm:text-3xl font-black text-white">Unutmaman Gereken 5 Altın Madde</h2>
                    </div>

                    <div class="space-y-2.5">
                        <div class="p-3 bg-slate-900/90 rounded-xl border border-slate-700 flex items-center gap-3">
                            <span class="w-7 h-7 rounded-lg bg-yellow-400 text-slate-950 font-black flex items-center justify-center text-xs shrink-0">1</span>
                            <p class="text-xs sm:text-sm text-slate-200"><strong>Yapay Zekâ veriden beslenir:</strong> Kaliteli ve doğru veri olmadan akıllı kararlar veremez.</p>
                        </div>

                        <div class="p-3 bg-slate-900/90 rounded-xl border border-slate-700 flex items-center gap-3">
                            <span class="w-7 h-7 rounded-lg bg-yellow-400 text-slate-950 font-black flex items-center justify-center text-xs shrink-0">2</span>
                            <p class="text-xs sm:text-sm text-slate-200"><strong>İnsan zekâsı eşsizdir:</strong> Duygular, vicdan, empati ve gerçek yaratıcılık sadece insana aittir.</p>
                        </div>

                        <div class="p-3 bg-slate-900/90 rounded-xl border border-slate-700 flex items-center gap-3">
                            <span class="w-7 h-7 rounded-lg bg-yellow-400 text-slate-950 font-black flex items-center justify-center text-xs shrink-0">3</span>
                            <p class="text-xs sm:text-sm text-slate-200"><strong>Her bilgiye körü körüne inanma:</strong> Yapay zekâ halüsinasyon görebilir; bilgileri daima teyit et!</p>
                        </div>

                        <div class="p-3 bg-slate-900/90 rounded-xl border border-slate-700 flex items-center gap-3">
                            <span class="w-7 h-7 rounded-lg bg-yellow-400 text-slate-950 font-black flex items-center justify-center text-xs shrink-0">4</span>
                            <p class="text-xs sm:text-sm text-slate-200"><strong>Kişisel bilgilerini koru:</strong> Şifrelerini, adresini ve kimlik numaranı asla sohbet botlarına yazma.</p>
                        </div>

                        <div class="p-3 bg-slate-900/90 rounded-xl border border-slate-700 flex items-center gap-3">
                            <span class="w-7 h-7 rounded-lg bg-yellow-400 text-slate-950 font-black flex items-center justify-center text-xs shrink-0">5</span>
                            <p class="text-xs sm:text-sm text-slate-200"><strong>Akıllı bir asistan olarak kullan:</strong> Ödevini ona yaptırma, ondan öğrenerek kendini geliştir!</p>
                        </div>
                    </div>

                    <div class="pt-1 text-center">
                        <span class="text-xs text-indigo-300 font-semibold">
                            Şimdi Çalışma Kâğıdı ve Eğlenceli Oyunlarla Bilgilerimizi Test Etme Zamanı! 🎮
                        </span>
                    </div>
                </div>
            `
        }
    ],

    // ========================================================
    // 📄 2. ÇALIŞMA KÂĞITLARI & RESMİ DERS MATERYALLERİ
    // ========================================================
    worksheetDocs: {
        images: {
            konu: "assets/worksheets/1.4_konu.png",
            soru: "assets/worksheets/1.4_soru.png",
            cevap: "assets/worksheets/1.4_cevap.png"
        },
        konuHtml: `
            <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-indigo-500/50 shadow-2xl space-y-6">
                <div class="border-b-2 border-indigo-500/40 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                        <span class="text-xs font-bold text-yellow-400 uppercase tracking-widest">Öğretmen Bozok • MEB 5. Sınıf Bilişim Teknolojileri</span>
                        <h2 class="text-2xl sm:text-3xl font-black text-white mt-1">4. Konu: Yapay Zekâda Temel Kavram ve Özellikler</h2>
                        <p class="text-xs text-indigo-300">Kazanım: BTY.5.1.4. Yapay zekâ ile ilgili temel kavramları ve özellikleri sorgulayabilme</p>
                    </div>
                    <span class="px-3 py-1.5 bg-indigo-600/40 border border-indigo-400/50 rounded-xl text-xs font-extrabold text-white shrink-0">Ders Özeti Kâğıdı</span>
                </div>

                <div class="space-y-4 text-sm leading-relaxed text-slate-200">
                    <div class="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                        <h3 class="font-bold text-yellow-300 text-base mb-1">1. Zekâ Nedir? Doğal Zekâ vs. Yapay Zekâ</h3>
                        <p><strong>Doğal Zekâ:</strong> İnsanların doğuştan sahip olduğu öğrenme, anlama, hayal kurma, empati yapma ve duygularıyla karar verme yeteneğidir. İnsanlar hatalarından ders çıkarır ve yaratıcıdır.</p>
                        <p class="mt-1"><strong>Yapay Zekâ (AI):</strong> İnsan zekâsına benzer yeteneklerin (öğrenme, problem çözme, karar verme) bilgisayar sistemleri ve algoritmalar tarafından taklit edilmesidir.</p>
                    </div>

                    <div class="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                        <h3 class="font-bold text-cyan-300 text-base mb-1">2. Yapay Zekâ Nasıl Çalışır? (3 Aşamalı Döngü)</h3>
                        <ul class="list-disc list-inside space-y-1 mt-1 text-slate-300">
                            <li><strong>1. Veri Toplama (Girdi):</strong> Sisteme binlerce örnek görsel, ses, metin veya sayı verilir. Veri, yapay zekânın yakıtıdır.</li>
                            <li><strong>2. Model Eğitimi (Öğrenme):</strong> Algoritmalar sayesinde veriler arasındaki gizli kurallar ve desenler çıkarılır.</li>
                            <li><strong>3. Tahmin & Karar (Çıktı):</strong> Yeni bir durumla karşılaşıldığında geçmiş veriye dayanarak en doğru karar verilir.</li>
                        </ul>
                    </div>

                    <div class="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                        <h3 class="font-bold text-emerald-300 text-base mb-1">3. Günlük Hayattaki Önemli Yapay Zekâ Uygulamaları</h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-xs">
                            <div class="p-2 bg-slate-900 rounded-lg">📱 <strong>Sesli Asistanlar:</strong> Siri, Google Asistan, sesle komut alma.</div>
                            <div class="p-2 bg-slate-900 rounded-lg">👤 <strong>Yüz Tanıma:</strong> Telefon ekran kilidi açma, güvenli geçiş.</div>
                            <div class="p-2 bg-slate-900 rounded-lg">🚗 <strong>Otonom Araçlar:</strong> Sürücüsüz gidebilen akıllı arabalar.</div>
                            <div class="p-2 bg-slate-900 rounded-lg">🎬 <strong>Öneri Sistemleri:</strong> YouTube, Netflix, Spotify müzik ve video tavsiyeleri.</div>
                            <div class="p-2 bg-slate-900 rounded-lg">🩺 <strong>Sağlıkta Teşhis:</strong> Röntgen filmlerini tarayan teşhis sistemleri.</div>
                            <div class="p-2 bg-slate-900 rounded-lg">🗺️ <strong>Akıllı Navigasyon:</strong> Trafiği tahmin eden harita uygulamaları.</div>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-800/80 rounded-2xl border border-red-500/30">
                        <h3 class="font-bold text-red-300 text-base mb-1">4. Bilgi Doğrulama ve Etik Kurallar</h3>
                        <p>Yapay zekâ da hata yapabilir (Halüsinasyon). Bu yüzden aldığımız bilgileri mutlaka ders kitaplarından ve öğretmenimizden teyit etmeliyiz. Ayrıca kişisel kimlik bilgilerimizi, ev adresimizi ve şifrelerimizi asla yapay zekâ programlarına yazmamalıyız!</p>
                    </div>
                </div>
            </div>
        `,
        soruHtml: `
            <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-indigo-500/50 shadow-2xl space-y-6">
                <div class="border-b-2 border-indigo-500/40 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                        <span class="text-xs font-bold text-yellow-400 uppercase tracking-widest">Öğrenci Adı - Soyadı / Sınıfı: ....................................................</span>
                        <h2 class="text-2xl sm:text-3xl font-black text-white mt-1">4. Konu: Etkinlik & Pekiştirme Kâğıdı</h2>
                        <p class="text-xs text-indigo-300">Yapay Zekâda Temel Kavram ve Özellikler Çalışma Sayfası</p>
                    </div>
                    <span class="px-3 py-1.5 bg-yellow-400/20 border border-yellow-400/40 rounded-xl text-xs font-extrabold text-yellow-300 shrink-0">Etkinlik Formu</span>
                </div>

                <div class="space-y-5 text-sm">
                    <div class="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-3">
                        <h3 class="font-bold text-yellow-300 text-base">ETKİNLİK 1: Doğru mu? Yanlış mı? (D / Y Yazınız)</h3>
                        <ol class="list-decimal list-inside space-y-2 text-xs text-slate-200">
                            <li>( ... ) Yapay zekânın yeni şeyler öğrenebilmesi için en önemli hammadde "Veri"dir.</li>
                            <li>( ... ) Bir çalar saatin kurulan saatte çalması yapay zekâ sayesinde gerçekleşir.</li>
                            <li>( ... ) Yapay zekâ da insanlar gibi acı, sevinç ve korku gibi duygular hisseder.</li>
                            <li>( ... ) Telefonlardaki yüz tanıma sistemi yapay zekâ teknolojisi kullanır.</li>
                            <li>( ... ) Yapay zekânın verdiği her bilgi %100 doğrudur, kontrol etmeye gerek yoktur.</li>
                        </ol>
                    </div>

                    <div class="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-3">
                        <h3 class="font-bold text-cyan-300 text-base">ETKİNLİK 2: Boşluk Doldurma</h3>
                        <p class="text-xs text-slate-400">Verilen kelimeleri uygun boşluklara yerleştiriniz: <em>[ Veri, Halüsinasyon, Doğal Zekâ, Otonom, Algoritma ]</em></p>
                        <ol class="list-decimal list-inside space-y-2 text-xs text-slate-200">
                            <li>İnsanın doğuştan sahip olduğu öğrenme ve duygu gücüne ................................... denir.</li>
                            <li>Sürücüsü olmadan kameralar ve yapay zekâyla giden araçlara ................................... araç denir.</li>
                            <li>Yapay zekânın bilmediği bir konuda gerçekmiş gibi uydurma cevap vermesine ................................... denir.</li>
                            <li>Yapay zekânın öğrenmesi için kullanılan resim, ses ve metinlerin tümüne ................................... adı verilir.</li>
                        </ol>
                    </div>

                    <div class="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2">
                        <h3 class="font-bold text-emerald-300 text-base">ETKİNLİK 3: Açık Uçlu Düşünme Sorusu</h3>
                        <p class="text-xs text-slate-300 leading-relaxed">
                            "Bir robotun bedeni vardır ama yapay zekâsı olmak zorunda değildir." Bu cümleyi bir örnekle açıklayınız:
                        </p>
                        <div class="h-16 border-2 border-dashed border-slate-600 rounded-xl p-2 text-xs text-slate-400">
                            Cevabınız: ..........................................................................................................................................................
                        </div>
                    </div>
                </div>
            </div>
        `,
        cevapHtml: `
            <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-emerald-500/50 shadow-2xl space-y-6">
                <div class="border-b-2 border-emerald-500/40 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                        <span class="text-xs font-bold text-emerald-400 uppercase tracking-widest">Öğretmen Bozok • Resmî Öğretmen Rehberi</span>
                        <h2 class="text-2xl sm:text-3xl font-black text-white mt-1">4. Konu: Etkinlik Resmî Cevap Anahtarı</h2>
                        <p class="text-xs text-emerald-300">Yapay Zekâda Temel Kavram ve Özellikler Çözüm Tablosu</p>
                    </div>
                    <span class="px-3 py-1.5 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-xs font-extrabold text-emerald-300 shrink-0">Cevap Anahtarı</span>
                </div>

                <div class="space-y-5 text-sm">
                    <div class="p-4 bg-slate-800/80 rounded-2xl border border-emerald-500/30 space-y-2">
                        <h3 class="font-bold text-emerald-300 text-base">ETKİNLİK 1 CEVAPLARI (D / Y)</h3>
                        <ul class="space-y-1.5 text-xs text-slate-200">
                            <li><strong>1. ( DOĞRU )</strong> Veri, yapay zekânın temel besinidir ve öğrenmenin kaynağıdır.</li>
                            <li><strong>2. ( YANLIŞ )</strong> Çalar saat basit kural tabanlı bir mekanik/kod sistemidir, yapay zekâ değildir.</li>
                            <li><strong>3. ( YANLIŞ )</strong> Yapay zekânın duyguları, bilinci ve canı yoktur.</li>
                            <li><strong>4. ( DOĞRU )</strong> Yüz tanıma kamera görüntüsündeki biyometrik desenleri YZ ile eşleştirir.</li>
                            <li><strong>5. ( YANLIŞ )</strong> Yapay zekâ hata yapabilir (halüsinasyon); bilgiler doğrulanmalıdır.</li>
                        </ul>
                    </div>

                    <div class="p-4 bg-slate-800/80 rounded-2xl border border-cyan-500/30 space-y-2">
                        <h3 class="font-bold text-cyan-300 text-base">ETKİNLİK 2 CEVAPLARI (Boşluk Doldurma)</h3>
                        <ul class="space-y-1.5 text-xs text-slate-200">
                            <li>1. İnsanın doğuştan sahip olduğu öğrenme ve duygu gücüne <strong>Doğal Zekâ</strong> denir.</li>
                            <li>2. Sürücüsü olmadan kameralar ve yapay zekâyla giden araçlara <strong>Otonom</strong> araç denir.</li>
                            <li>3. Yapay zekânın bilmediği bir konuda gerçekmiş gibi uydurma cevap vermesine <strong>Halüsinasyon</strong> denir.</li>
                            <li>4. Yapay zekânın öğrenmesi için kullanılan resim, ses ve metinlerin tümüne <strong>Veri</strong> adı verilir.</li>
                        </ul>
                    </div>

                    <div class="p-4 bg-slate-800/80 rounded-2xl border border-yellow-500/30 space-y-2">
                        <h3 class="font-bold text-yellow-300 text-base">ETKİNLİK 3 CEVABI (Örnek Açıklama)</h3>
                        <p class="text-xs text-slate-200 leading-relaxed">
                            <strong>Örnek Cevap:</strong> Fabrikada otomobil parçalarını birleştiren bir robot kol fiziksel olarak bir robottur (donanımdır), fakat sadece kendine yüklenen aynı hareketi tekrarlar, çevresini öğrenmez. Akıllı bir süpürge ise yerdeki eşyaları algılayıp harita çıkardığı için yapay zekâlı bir robottur.
                        </p>
                    </div>
                </div>
            </div>
        `
    },

    // ========================================================
    // 📝 3. DEĞERLENDİRME VE ETKİNLİK TESTLERİ (Tab 3)
    // ========================================================
    questions: [
        // 1. Eşleştirme Etkinliği
        {
            id: 1,
            type: "matching",
            title: "Gerçek Hayat Durumları & Yapay Zekâ Teknolojileri Eşleştirmesi",
            description: "Aşağıdaki günlük hayat senaryolarını çözümleyen en uygun yapay zekâ uygulamasıyla eşleştiriniz:",
            pairs: [
                {
                    left: "Ali'nin telefonuna 'Annemi ara' dediğinde telefonun rehberden anneyi bulup araması",
                    right: "Sesli Asistan (Siri / Google Asistan)",
                    leftIcon: "fa-solid fa-microphone"
                },
                {
                    left: "Karanlık bir odada bile telefonun ekran kilidinin sahibinin yüzünü görüp açılması",
                    right: "Yüz Tanıma Sistemi (Face ID)",
                    leftIcon: "fa-solid fa-id-badge"
                },
                {
                    left: "Sürücünün direksiyona dokunmadan aracın kırmızı ışıkta durup yayaya yol vermesi",
                    right: "Otonom (Sürücüsüz) Araç",
                    leftIcon: "fa-solid fa-car"
                },
                {
                    left: "YouTube'da bilim kurgu videosu izledikten sonra ana sayfada uzay belgeselleri çıkması",
                    right: "Akıllı Öneri Algoritması",
                    leftIcon: "fa-solid fa-play"
                },
                {
                    left: "Hastanede doktorun binlerce röntgen filmini saniyeler içinde tarayıp lekeyi bulması",
                    right: "Tıbbi Görüntü Analizi",
                    leftIcon: "fa-solid fa-file-medical"
                },
                {
                    left: "Harita uygulamasının sabah trafiği oluşmadan önce bizi arka sokaklardan götürmesi",
                    right: "Akıllı Navigasyon & Trafik Tahmini",
                    leftIcon: "fa-solid fa-map-location-dot"
                },
                {
                    left: "Kamerayı İngilizce tabelaya tuttuğumuzda tabelanın anında Türkçeye dönüşmesi",
                    right: "Görsel Çeviri Yazılımı",
                    leftIcon: "fa-solid fa-language"
                }
            ]
        },

        // 2. Doğru / Yanlış Testi
        {
            id: 2,
            type: "true_false",
            title: "Doğru mu? Yanlış mı? Pekiştirme Etkinliği",
            items: [
                {
                    statement: "Yapay zekânın öğrenebilmesi ve doğru kararlar verebilmesi için en temel hammadde 'Veri'dir.",
                    correctAnswer: true,
                    explanation: "Doğru! Yapay zekâ büyük veri yığınlarını (görsel, ses, metin) inceleyerek kuralları öğrenir."
                },
                {
                    statement: "Her robotun içinde mutlaka yapay zekâ bulunmak zorundadır.",
                    correctAnswer: false,
                    explanation: "Yanlış! Birçok fabrika robotu sadece önceden yazılmış sabit komutları tekrarlar, yapay zekâ barındırmaz."
                },
                {
                    statement: "Doğal zekâya sahip insanlar duygularıyla, empatiyle ve hayal güçleriyle karar verebilirler.",
                    correctAnswer: true,
                    explanation: "Doğru! İnsanları makinelerden ayıran en büyük güç duygular, ahlak ve yaratıcılıktır."
                },
                {
                    statement: "Yapay zekâ da insanlar gibi yorulur, uykusu gelir ve dikkat dağınıklığı yaşar.",
                    correctAnswer: false,
                    explanation: "Yanlış! Yapay zekâ bilgisayar donanımı üzerinde 7/24 hiç durmaksızın aynı hızda çalışabilir."
                },
                {
                    statement: "Yapay zekâ programları bazen tamamen uydurma ve yanlış bilgiler üretebilir (Halüsinasyon).",
                    correctAnswer: true,
                    explanation: "Doğru! Yapay zekâ her zaman doğruyu bilmez, ürettiği bilgileri güvenilir kaynaklardan teyit etmeliyiz."
                },
                {
                    statement: "Sohbet botlarına ve yapay zekâ sitelerine ev adresimizi ve şifrelerimizi güvenle yazabiliriz.",
                    correctAnswer: false,
                    explanation: "Yanlış! Kişisel verilerimizi ve şifrelerimizi yapay zekâ araçlarına asla yazmamalıyız."
                },
                {
                    statement: "Otonom araçlar kameraları ve yapay zekâ algoritmaları sayesinde yayaları algılayıp fren yapabilir.",
                    correctAnswer: true,
                    explanation: "Doğru! Otonom araçlar çevresini yapay zekâ ile sürekli analiz eder."
                },
                {
                    statement: "Hesap makinesinde 15 ile 20'yi çarpmak yapay zekâya bir örnektir.",
                    correctAnswer: false,
                    explanation: "Yanlış! Hesap makinesi sadece önceden belirlenmiş matematik kuralını işletir, öğrenme yapmaz."
                },
                {
                    statement: "Yapay zekâ doktorların yerine geçmek için değil, doktorların hastalıkları daha hızlı teşhis etmesine yardımcı olmak için kullanılır.",
                    correctAnswer: true,
                    explanation: "Doğru! Yapay zekâ insan uzmanların hata payını azaltan akıllı bir yardımcıdır."
                },
                {
                    statement: "Ödevlerimizin tamamını yapay zekâya yazdırmak bizim zihinsel gelişimimizi olumlu etkiler.",
                    correctAnswer: false,
                    explanation: "Yanlış! Ödevleri yapay zekâya yaptırmak tembellik yaratır; YZ'den fikir almalı ama ödevi kendimiz yapmalıyız."
                }
            ]
        },

        // 3. Çoktan Seçmeli Test
        {
            id: 3,
            type: "multiple_choice",
            title: "Çoktan Seçmeli Değerlendirme Testi",
            items: [
                {
                    id: 1,
                    question: "İnsan zekâsına benzer şekilde öğrenme, problem çözme ve karar verme yeteneklerinin bilgisayarlar tarafından taklit edilmesine ne ad verilir?",
                    options: [
                        "İşletim Sistemi",
                        "Yapay Zekâ (AI)",
                        "Ağ Bağlantısı",
                        "Donanım Birimi"
                    ],
                    correctAnswer: 1,
                    explanation: "İnsan zekâsının makineler ve algoritmalar tarafından taklit edilmesine Yapay Zekâ (Artificial Intelligence - AI) denir."
                },
                {
                    id: 2,
                    question: "Yapay zekânın yeni bir konuyu öğrenip kendini geliştirebilmesi için tüketmesi gereken en temel unsur aşağıdakilerden hangisidir?",
                    options: [
                        "Yüksek Elektrik",
                        "Veri (Data)",
                        "Renkli Yazıcı",
                        "Hızlı Klavye"
                    ],
                    correctAnswer: 1,
                    explanation: "Veri, yapay zekânın besinidir. Fotoğraflar, sesler ve yazılar olmadan yapay zekâ öğrenemez."
                },
                {
                    id: 3,
                    question: "Aşağıdakilerden hangisi yalnızca 'Doğal İnsan Zekâsına' ait bir özelliktir ve yapay zekâda bulunmaz?",
                    options: [
                        "Milyonlarca veriyi 1 saniyede taramak",
                        "Empati kurmak ve gerçek duygular hissetmek",
                        "7/24 hiç yorulmadan işlem yapmak",
                        "Kayıtlı bilgileri hiç unutmamak"
                    ],
                    correctAnswer: 1,
                    explanation: "Empati, sevgi, üzüntü, vicdan ve ahlak yalnızca doğal insan zekâsına aittir."
                },
                {
                    id: 4,
                    question: "Telefonumuzun karanlıkta bile yüzümüzü algılayıp kilit ekranını açması hangi yapay zekâ alanına girer?",
                    options: [
                        "Biyometrik Yüz Tanıma",
                        "Ekran Parlaklığı Ayarı",
                        "Bluetooth Bağlantısı",
                        "Pil Tasarruf Modu"
                    ],
                    correctAnswer: 0,
                    explanation: "Yüz tanıma, kamera görüntüsündeki noktaları yapay zekâ ile eşleştiren biyometrik bir sistemdir."
                },
                {
                    id: 5,
                    question: "Yapay zekâ ile ilgili olarak aşağıda verilen ifadelerden hangisi DOĞRUDUR?",
                    options: [
                        "Yapay zekâ asla hata yapmaz, her zaman %100 doğru bilgi verir.",
                        "Her robot aynı zamanda bir yapay zekâdır.",
                        "Yapay zekâdan alınan bilgiler güvenilir kaynaklardan teyit edilmelidir.",
                        "Yapay zekâya ev adresimizi ve şifremizi güvenle söyleyebiliriz."
                    ],
                    correctAnswer: 2,
                    explanation: "Yapay zekâ bazen yanlış veya uydurma bilgiler verebilir (halüsinasyon); bu yüzden mutlaka teyit edilmelidir."
                },
                {
                    id: 6,
                    question: "YouTube veya Spotify gibi platformlarda daha önce izlediğimiz ve dinlediğimiz içeriklere benzer yeni öneriler sunulmasını sağlayan sistem nedir?",
                    options: [
                        "Ekran Kartı",
                        "Akıllı Öneri Algoritması",
                        "Modem Cihazı",
                        "Sabit Disk Belleği"
                    ],
                    correctAnswer: 1,
                    explanation: "Kullanıcı tercihlerini inceleyerek kişiye özel tavsiye üreten sistemlere akıllı öneri algoritmaları denir."
                },
                {
                    id: 7,
                    question: "Sürücüsü olmadan yoldaki şeritleri, yayaları ve trafik ışıklarını kameralarla görerek ilerleyen araçlara ne ad verilir?",
                    options: [
                        "Manuel Araç",
                        "Otonom (Sürücüsüz) Araç",
                        "Analog Araba",
                        "Mekanik Bisiklet"
                    ],
                    correctAnswer: 1,
                    explanation: "Kendi kendine gidebilen sürücüsüz araçlara otonom araç denir."
                },
                {
                    id: 8,
                    question: "Yapay zekâ sisteminin bilmediği bir soruya gerçeğe benzeyen ama tamamen uydurma bir cevap üretmesi durumuna ne denir?",
                    options: [
                        "Halüsinasyon (Yanılsama)",
                        "Virüs Bulaşması",
                        "İnternet Kopması",
                        "Format Atma"
                    ],
                    correctAnswer: 0,
                    explanation: "Yapay zekânın gerçek dışı bilgileri kendinden emin bir şekilde uydurmasına 'halüsinasyon' denir."
                },
                {
                    id: 9,
                    question: "Aşağıdakilerden hangisi yapay zekâ teknolojisinin insanlığa sağladığı OLUMLU faydalardan biri DEĞİLDİR?",
                    options: [
                        "Hastanelerde kanser ve hastalıkların erken teşhis edilmesi",
                        "Yangın ve maden gibi tehlikeli yerlere insanların yerine girmesi",
                        "Öğrencilerin düşünmeyi bırakıp zihinsel tembellik yaşaması",
                        "Engelli bireylerin hayatını kolaylaştıran sesli ve görsel destekler sunması"
                    ],
                    correctAnswer: 2,
                    explanation: "Düşünmeyi bırakmak ve zihinsel tembellik bir fayda değil, yapay zekânın olumsuz bir riskidir."
                },
                {
                    id: 10,
                    question: "Yapay zekâ çağında başarılı bir öğrenci olmak isteyen bir kişi aşağıdakilerden hangisini YAPMALIDIR?",
                    options: [
                        "Ödevlerinin tamamını yapay zekâya kopyala-yapıştır ile yaptırmalıdır.",
                        "Yapay zekâyı öğrenmeyi hızlandıran bir yardımcı olarak kullanıp eleştirel düşünmelidir.",
                        "Yapay zekâya özel şifrelerini ve kimlik bilgilerini öğretmelidir.",
                        "İnternette gördüğü tüm yapay zekâ videolarına sorgulamadan inanmalıdır."
                    ],
                    correctAnswer: 1,
                    explanation: "En doğru yaklaşım, yapay zekâyı zihnimizi güçlendiren akıllı bir yardımcı olarak kullanmaktır."
                }
            ]
        }
    ],

    // ========================================================
    // 🎮 4. AKILLI TAHTA OYUNLARI VE ETKİNLİK VERİLERİ (Tab 4)
    // ========================================================
    gameData: {
        // Çarkıfelek Oyunu
        wheelQuiz: [
            {
                q: "İnsan zekâsının bilgisayarlar tarafından taklit edilmesine ne ad verilir?",
                question: "İnsan zekâsının bilgisayarlar tarafından taklit edilmesine ne ad verilir?",
                options: ["Yapay Zekâ (AI)", "İşletim Sistemi", "Ağ Kablosu", "RAM Bellek"],
                answer: 0,
                pts: 100,
                points: 100
            },
            {
                q: "Yapay zekânın öğrenebilmesi için en gerekli temel hammadde nedir?",
                question: "Yapay zekânın öğrenebilmesi için en gerekli temel hammadde nedir?",
                options: ["Veri (Data)", "Pil Enerjisi", "Renkli Ekran", "Hızlı Mouse"],
                answer: 0,
                pts: 150,
                points: 150
            },
            {
                q: "Aşağıdakilerden hangisi yalnızca insanlara ait bir özelliktir?",
                question: "Aşağıdakilerden hangisi yalnızca insanlara ait bir özelliktir?",
                options: ["Empati ve Duygular", "1 saniyede milyon hesap", "Hiç uyumamak", "Sabit diskte saklamak"],
                answer: 0,
                pts: 100,
                points: 100
            },
            {
                q: "Karanlıkta bile telefonumuzun yüzümüzü tanıyıp kilidi açması hangi teknolojidir?",
                question: "Karanlıkta bile telefonumuzun yüzümüzü tanıyıp kilidi açması hangi teknolojidir?",
                options: ["Yüz Tanıma (Face ID)", "Ekran Koruyucu", "Uçak Modu", "Flaş Işığı"],
                answer: 0,
                pts: 120,
                points: 120
            },
            {
                q: "Sürücüsü olmadan yoldaki yayaları ve ışıkları algılayan araçlara ne denir?",
                question: "Sürücüsü olmadan yoldaki yayaları ve ışıkları algılayan araçlara ne denir?",
                options: ["Otonom Araç", "Mekanik Fayton", "Manuel Vites", "Klasik Bisiklet"],
                answer: 0,
                pts: 130,
                points: 130
            },
            {
                q: "Yapay zekânın bilmediği konuda kendinden emin uydurma bilgi üretmesine ne ad verilir?",
                question: "Yapay zekânın bilmediği konuda kendinden emin uydurma bilgi üretmesine ne ad verilir?",
                options: ["Halüsinasyon", "Güncelleme", "Format", "Yedekleme"],
                answer: 0,
                pts: 200,
                points: 200
            },
            {
                q: "YouTube'un sevdiğin tarzda videoları karşına çıkarmasını ne sağlar?",
                question: "YouTube'un sevdiğin tarzda videoları karşına çıkarmasını ne sağlar?",
                options: ["Öneri Algoritması", "Ekran Parlaklığı", "Hoparlör Sesi", "Klavye Işığı"],
                answer: 0,
                pts: 110,
                points: 110
            },
            {
                q: "Hangisi klasik kural tabanlı bir programdır (Yapay zekâ değildir)?",
                question: "Hangisi klasik kural tabanlı bir programdır (Yapay zekâ değildir)?",
                options: ["Basit Hesap Makinesi", "Sesli Asistan Siri", "Otonom Tesla Araç", "Tıbbi Teşhis Yapay Zekâsı"],
                answer: 0,
                pts: 140,
                points: 140
            },
            {
                q: "Yapay zekâya soru sorarken aşağıdakilerden hangisini ASLA vermemeliyiz?",
                question: "Yapay zekâya soru sorarken aşağıdakilerden hangisini ASLA vermemeliyiz?",
                options: ["Ev adresimiz ve şifremiz", "Matematik sorusu", "İngilizce kelime", "Tarihi bir soru"],
                answer: 0,
                pts: 150,
                points: 150
            },
            {
                q: "Sağlık alanında yapay zekâ en çok hangi amaçla kullanılır?",
                question: "Sağlık alanında yapay zekâ en çok hangi amaçla kullanılır?",
                options: ["Hastalıkları Erken Teşhis", "Hastane boyamak", "İlaç fiyatı artırmak", "Yemek pişirmek"],
                answer: 0,
                pts: 120,
                points: 120
            },
            {
                q: "Robot ile yapay zekâ arasındaki farkı en iyi hangisi açıklar?",
                question: "Robot ile yapay zekâ arasındaki farkı en iyi hangisi açıklar?",
                options: ["Robot bedendir, YZ zihindir", "İkisi tamamen aynıdır", "Robot yazılımdır, YZ demirdir", "Robot düşünür, YZ çalışır"],
                answer: 0,
                pts: 160,
                points: 160
            },
            {
                q: "Yapay zekâ çağında başarılı olmak için hangisini yapmalıyız?",
                question: "Yapay zekâ çağında başarılı olmak için hangisini yapmalıyız?",
                options: ["Onu öğrenme asistanı yapmak", "Ödevi ona kopyalatmak", "Düşünmeyi bırakmak", "Hiç kullanmamak"],
                answer: 0,
                pts: 150,
                points: 150
            }
        ],

        // Hafıza & Eşleştirme Kartları
        matchCards: [
            {
                id: 1,
                text: "Yapay zekânın öğrenmesi için gereken en temel yakıt",
                category: "Veri (Data)",
                icon: "fa-solid fa-database",
                rightIcon: "fa-solid fa-server"
            },
            {
                id: 2,
                text: "Yalnızca insanlara özgü sevgi, üzüntü ve empati gücü",
                category: "Doğal Zekâ",
                icon: "fa-solid fa-heart",
                rightIcon: "fa-solid fa-brain"
            },
            {
                id: 3,
                text: "Sürücüsüz şekilde yayaları ve şeritleri gören araç",
                category: "Otonom Araç",
                icon: "fa-solid fa-car",
                rightIcon: "fa-solid fa-road"
            },
            {
                id: 4,
                text: "Sesimizi dinleyip komutlarımızı uygulayan zeki yardımcı",
                category: "Sesli Asistan",
                icon: "fa-solid fa-microphone",
                rightIcon: "fa-solid fa-mobile"
            },
            {
                id: 5,
                text: "Makinelerin verilerden kural çıkarıp kendini geliştirmesi",
                category: "Makine Öğrenmesi",
                icon: "fa-solid fa-gears",
                rightIcon: "fa-solid fa-laptop-code"
            },
            {
                id: 6,
                text: "Karanlıkta dahi telefon ekran kilidini açan biyometri",
                category: "Yüz Tanıma",
                icon: "fa-solid fa-id-badge",
                rightIcon: "fa-solid fa-camera"
            },
            {
                id: 7,
                text: "Yapay zekânın gerçekmiş gibi uydurma bilgi vermesi",
                category: "Halüsinasyon",
                icon: "fa-solid fa-ghost",
                rightIcon: "fa-solid fa-triangle-exclamation"
            },
            {
                id: 8,
                text: "Zevklerimize göre video ve müzik tavsiye eden sistem",
                category: "Öneri Algoritması",
                icon: "fa-solid fa-play",
                rightIcon: "fa-solid fa-thumbs-up"
            }
        ],

        // Hızlı Refleks Oyunu
        reflexStatements: [
            { text: "Yapay zekâ verilerden öğrenerek karar veren bir yazılımdır.", correct: true },
            { text: "Her robotun içinde mutlaka yapay zekâ bulunmak zorundadır.", correct: false },
            { text: "İnsanların sahip olduğu vicdan ve duygular yapay zekâda yoktur.", correct: true },
            { text: "Yapay zekânın verdiği her bilgi tartışmasız olarak %100 doğrudur.", correct: false },
            { text: "Yüz tanıma ve sesli asistanlar birer yapay zekâ uygulamasıdır.", correct: true },
            { text: "Basit bir pilli duvar saati yapay zekâ ile çalışır.", correct: false },
            { text: "Otonom araçlar kameralarla yolu ve yayaları analiz eder.", correct: true },
            { text: "Yapay zekâya ev adresimizi ve şifremizi söylemekte hiçbir sakınca yoktur.", correct: false },
            { text: "Yapay zekâ tıp alanında erken hastalık teşhisine yardımcı olur.", correct: true },
            { text: "Hesap makinesi 2+2=4 işlemini yapay zekâ ile yapar.", correct: false },
            { text: "Yapay zekânın uydurma bilgi üretmesine halüsinasyon denir.", correct: true },
            { text: "Yapay zekâ da insanlar gibi geceleri uyumak zorundadır.", correct: false },
            { text: "YouTube öneri sistemi izlediğin videolara göre tavsiye üretir.", correct: true },
            { text: "Ödevlerimizi yapay zekâya yaptırmak zekâmızı geliştirir.", correct: false }
        ],

        // 2 Kişilik / 2 Takımlı Sınıf Düellosu
        duelQuestions: [
            {
                q: "Makinelerin insan gibi düşünüp karar vermesine ne ad verilir?",
                question: "Makinelerin insan gibi düşünüp karar vermesine ne ad verilir?",
                options: ["İşletim Sistemi", "Yapay Zekâ (AI)", "Ekran Kartı", "Modem"],
                answer: 1
            },
            {
                q: "Yapay zekânın öğrenmesi için kullanılan en önemli girdi nedir?",
                question: "Yapay zekânın öğrenmesi için kullanılan en önemli girdi nedir?",
                options: ["Veri (Data)", "Pil", "Yazıcı Mürekkebi", "Hoparlör"],
                answer: 0
            },
            {
                q: "Hangisi yalnızca insana özgüdür ve makinelerde bulunmaz?",
                question: "Hangisi yalnızca insana özgüdür ve makinelerde bulunmaz?",
                options: ["Empati ve Duygular", "Hızlı hesaplama", "Kayıtlı hafıza", "Yorulmama"],
                answer: 0
            },
            {
                q: "Kendi kendine yayaları görüp duran araçlara ne denir?",
                question: "Kendi kendine yayaları görüp duran araçlara ne denir?",
                options: ["Manuel Araba", "Otonom Araç", "Bisiklet", "Paten"],
                answer: 1
            },
            {
                q: "Yapay zekânın bilmediği konuda uydurma cevap vermesine ne denir?",
                question: "Yapay zekânın bilmediği konuda uydurma cevap vermesine ne denir?",
                options: ["Halüsinasyon", "Güncelleme", "Format", "Yedek"],
                answer: 0
            },
            {
                q: "Hangisinde yapay zekâ KULLANILMAZ?",
                question: "Hangisinde yapay zekâ KULLANILMAZ?",
                options: ["Yüz Tanıma", "Sesli Asistan", "Basit Mekanik Duvar Saati", "Akıllı Öneri Sistemi"],
                answer: 2
            },
            {
                q: "Yapay zekâya hangisini ASLA söylememeliyiz?",
                question: "Yapay zekâya hangisini ASLA söylememeliyiz?",
                options: ["Şifrelerimiz ve Ev Adresimiz", "Tarih Sorusu", "İngilizce Cümle", "Bilimsel Merak"],
                answer: 0
            },
            {
                q: "Yapay zekâdan alınan bilgiler ne yapılmalıdır?",
                question: "Yapay zekâdan alınan bilgiler ne yapılmalıdır?",
                options: ["Güvenilir kaynaklardan teyit edilmelidir", "Hemen inanılmalıdır", "Ezberlenmelidir", "Silinmelidir"],
                answer: 0
            }
        ]
    }
};
