// ==========================================
// 3. Hafta: Dijital Vatandaşlık Uygulamaları
// MEB 5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi
// Tam İnteraktif Ders Materyalleri ve Oyun Veritabanı
// Hazırlayan: Öğretmen Bozok
// ==========================================

window.WEEK3_CONTENT = {
    weekInfo: {
        weekNumber: 3,
        title: "Dijital Vatandaşlık Uygulamaları",
        code: "BTY.5.1.3. Dijital vatandaşlık uygulamalarını sınıflandırabilme",
        theme: "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        learningGoals: [
            "Dijital vatandaş ve dijital kimlik kavramlarını tanımlayabileceğim.",
            "İnternette bıraktığımız dijital ayak izinin kalıcılığını ve etkilerini fark edebileceğim.",
            "e-Devlet, e-Okul, EBA, e-Nabız ve MHRS gibi dijital vatandaşlık uygulamalarını sınıflandırabileceğim.",
            "Sanal ortamda dijital haklarımı, sorumluluklarımı ve dijital nezaket (netiquette) kurallarını uygulayabileceğim."
        ],
        images: {
            konu: null,
            soru: null,
            cevap: null
        }
    },

    // ========================================================
    // 🖥️ 1. İNTERAKTİF DERS SUNUSU (Akıllı Tahta Modu - 22 Slayt)
    // ========================================================
    slides: [
        {
            id: 1,
            title: "3. Hafta: Dijital Vatandaşlık Uygulamaları 🌐",
            subtitle: "Öğretmen Bozok ile Bilişim Teknolojileri ve Yazılım Dersi",
            type: "hero",
            badge: "GİRİŞ & HOŞ GELDİNİZ",
            icon: "fa-solid fa-passport",
            gradient: "from-blue-600 via-indigo-600 to-purple-800",
            content: `
                <div class="space-y-6 text-center max-w-4xl mx-auto py-4">
                    <div class="inline-flex items-center gap-3 px-6 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-yellow-300 font-black text-sm uppercase tracking-widest shadow-xl">
                        <i class="fa-solid fa-shield-halved text-blue-400"></i> 1. TEMA: BİLİŞİM TEKNOLOJİLERİNİN HAYATIMIZDAKİ YERİ
                    </div>
                    <h1 class="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight drop-shadow-2xl">
                        Dijital Vatandaşlık <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-emerald-300">Uygulamaları</span> 🛡️
                    </h1>
                    <p class="text-base sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        Fiziksel dünyada birer vatandaş olduğumuz gibi internet dünyasında da birer <strong>dijital vatandaşız</strong>! Dijital kimliğimizi, ayak izimizi ve e-Devlet uygulamalarını keşfetmeye hazır mısınız?
                    </p>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs sm:text-sm font-bold">
                        <div class="p-3 bg-white/10 rounded-2xl border border-white/10 text-yellow-300 flex items-center justify-center gap-2">
                            <i class="fa-solid fa-id-card"></i> Dijital Kimlik
                        </div>
                        <div class="p-3 bg-white/10 rounded-2xl border border-white/10 text-emerald-300 flex items-center justify-center gap-2">
                            <i class="fa-solid fa-shoe-prints"></i> Dijital Ayak İzi
                        </div>
                        <div class="p-3 bg-white/10 rounded-2xl border border-white/10 text-cyan-300 flex items-center justify-center gap-2">
                            <i class="fa-solid fa-building-columns"></i> e-Devlet & e-Okul
                        </div>
                        <div class="p-3 bg-white/10 rounded-2xl border border-white/10 text-pink-300 flex items-center justify-center gap-2">
                            <i class="fa-solid fa-heart-circle-check"></i> Dijital Nezaket
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 2,
            title: "Haftanın Öğrenme Hedefleri 🎯",
            subtitle: "Bu dersin sonunda neleri başarmış olacağız?",
            type: "cards",
            badge: "KAZANIMLAR & HEDEFLER",
            icon: "fa-solid fa-bullseye",
            gradient: "from-indigo-900 to-slate-900",
            content: `
                <div class="space-y-6">
                    <p class="text-sm sm:text-base text-slate-300">
                        Bu hafta boyunca yapacağımız interaktif etkinlikler ve sınıf oyunlarıyla şu 4 temel hedefi tamamlayacağız:
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="p-5 rounded-2xl bg-slate-800/90 border-2 border-indigo-500/40 flex items-start gap-4 shadow-lg">
                            <div class="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-2xl shrink-0 font-black">1</div>
                            <div class="space-y-1">
                                <h4 class="text-base font-black text-white">Dijital Kimlik & Vatandaşlık</h4>
                                <p class="text-xs sm:text-sm text-slate-300">Dijital dünyadaki varlığımızı ve iyi bir dijital vatandaşın özelliklerini öğreneceğiz.</p>
                            </div>
                        </div>
                        <div class="p-5 rounded-2xl bg-slate-800/90 border-2 border-emerald-500/40 flex items-start gap-4 shadow-lg">
                            <div class="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl shrink-0 font-black">2</div>
                            <div class="space-y-1">
                                <h4 class="text-base font-black text-white">Dijital Ayak İzi (Footprint)</h4>
                                <p class="text-xs sm:text-sm text-slate-300">İnternette attığımız her adımın nasıl iz bıraktığını ve kalıcı etkilerini inceleyeceğiz.</p>
                            </div>
                        </div>
                        <div class="p-5 rounded-2xl bg-slate-800/90 border-2 border-cyan-500/40 flex items-start gap-4 shadow-lg">
                            <div class="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl shrink-0 font-black">3</div>
                            <div class="space-y-1">
                                <h4 class="text-base font-black text-white">Kamu & Vatandaşlık Portalları</h4>
                                <p class="text-xs sm:text-sm text-slate-300">e-Devlet, e-Okul, EBA, e-Nabız ve MHRS gibi resmi platformları sınıflandıracağız.</p>
                            </div>
                        </div>
                        <div class="p-5 rounded-2xl bg-slate-800/90 border-2 border-pink-500/40 flex items-start gap-4 shadow-lg">
                            <div class="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center text-2xl shrink-0 font-black">4</div>
                            <div class="space-y-1">
                                <h4 class="text-base font-black text-white">Netiquette (Dijital Görgü Kuralları)</h4>
                                <p class="text-xs sm:text-sm text-slate-300">Siber zorbalığa karşı durmayı ve sanal ortamda saygılı, kibar iletişim kurmayı öğreneceğiz.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 3,
            title: "Vatandaş Kime Denir? Dijital Vatandaş Kimdir? 🤝",
            subtitle: "Fiziksel dünya ile dijital dünyanın vatandaşlık karşılaştırması",
            type: "comparison",
            badge: "TEMEL KAVRAM",
            icon: "fa-solid fa-users",
            gradient: "from-blue-900 to-indigo-950",
            content: `
                <div class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="p-6 rounded-3xl bg-blue-950/60 border-2 border-blue-500/50 space-y-4 shadow-xl">
                            <div class="flex items-center gap-3 text-blue-300">
                                <div class="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-2xl">
                                    <i class="fa-solid fa-city"></i>
                                </div>
                                <div>
                                    <span class="text-xs uppercase font-extrabold text-blue-400">Geleneksel Dünya</span>
                                    <h3 class="text-xl font-black text-white">Fiziksel Vatandaş</h3>
                                </div>
                            </div>
                            <ul class="space-y-2.5 text-xs sm:text-sm text-slate-200">
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-blue-400"></i> Bir ülkeye yasal bağlarla bağlı olan kişidir.</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-blue-400"></i> Hakları (eğitim, sağlık vb.) ve sorumlulukları vardır.</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-blue-400"></i> Çevresine, komşularına ve yasalara saygı duyar.</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-blue-400"></i> Kimliğini T.C. kimlik kartı ile belgeler.</li>
                            </ul>
                        </div>

                        <div class="p-6 rounded-3xl bg-emerald-950/60 border-2 border-emerald-500/50 space-y-4 shadow-xl">
                            <div class="flex items-center gap-3 text-emerald-300">
                                <div class="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-2xl">
                                    <i class="fa-solid fa-globe"></i>
                                </div>
                                <div>
                                    <span class="text-xs uppercase font-extrabold text-emerald-400">Sanal Dünya</span>
                                    <h3 class="text-xl font-black text-white">Dijital Vatandaş</h3>
                                </div>
                            </div>
                            <ul class="space-y-2.5 text-xs sm:text-sm text-slate-200">
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> İnterneti ve teknolojiyi bilinçli, ahlaki kullanan kişidir.</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> Dijital haklarını bilir, başkalarının hakkına saygı gösterir.</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> Siber zorbalık yapmaz, sanal nezakete (netiquette) uyar.</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> Dijital kimliğini ve ayak izini güvenle yönetir.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-2xl text-xs sm:text-sm text-yellow-200 flex items-center gap-3">
                        <i class="fa-solid fa-lightbulb text-yellow-400 text-xl shrink-0"></i>
                        <span><strong>Unutmayalım:</strong> Gerçek hayatta suç veya ayıp olan bir davranış, internet ortamında yapıldığında da suç ve ayıptır!</span>
                    </div>
                </div>
            `
        },
        {
            id: 4,
            title: "Dijital Kimlik Nedir? 🆔",
            subtitle: "İnternette bizi temsil eden sanal kimlik kartımız",
            type: "cards",
            badge: "DİJİTAL KİMLİK",
            icon: "fa-solid fa-id-badge",
            gradient: "from-purple-900 to-indigo-950",
            content: `
                <div class="space-y-6">
                    <p class="text-sm sm:text-base text-slate-200 leading-relaxed">
                        Fiziksel dünyada nasıl bir adımız, fotoğrafımız ve kimlik kartımız varsa; internet dünyasında da bizi tanımlayan her türlü bilgiye <strong>Dijital Kimlik</strong> denir.
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div class="p-5 rounded-2xl bg-slate-800/90 border border-purple-500/40 space-y-2 text-center">
                            <div class="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center text-2xl mx-auto">
                                <i class="fa-solid fa-user-circle"></i>
                            </div>
                            <h4 class="font-black text-white text-base">Profil & Kullanıcı Adı</h4>
                            <p class="text-xs text-slate-300">Sosyal medyada, oyunlarda ve sitelerde seçtiğimiz isimler ve profil fotoğrafları.</p>
                        </div>

                        <div class="p-5 rounded-2xl bg-slate-800/90 border border-blue-500/40 space-y-2 text-center">
                            <div class="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center text-2xl mx-auto">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <h4 class="font-black text-white text-base">E-Posta & Hesaplar</h4>
                            <p class="text-xs text-slate-300">EBA şifremiz, e-posta adresimiz, oyun hesaplarımız ve üyeliklerimiz.</p>
                        </div>

                        <div class="p-5 rounded-2xl bg-slate-800/90 border border-emerald-500/40 space-y-2 text-center">
                            <div class="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-2xl mx-auto">
                                <i class="fa-solid fa-comments"></i>
                            </div>
                            <h4 class="font-black text-white text-base">Paylaşım & Beğeniler</h4>
                            <p class="text-xs text-slate-300">Yazdığımız yorumlar, yüklediğimiz videolar, beğenilerimiz ve takip ettiğimiz kişiler.</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 5,
            title: "Dijital Kimliğimizi Nasıl Koruruz? 🔒",
            subtitle: "Sanal dünyada kimlik hırsızlığına karşı alınacak güvenlik önlemleri",
            type: "cards",
            badge: "GÜVENLİK & ÖNLEM",
            icon: "fa-solid fa-lock",
            gradient: "from-slate-900 to-indigo-950",
            content: `
                <div class="space-y-4">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/40 flex items-start gap-3">
                            <i class="fa-solid fa-key text-rose-400 text-xl mt-1"></i>
                            <div>
                                <h4 class="font-black text-white text-sm">1. Güçlü Parolalar Belirleyin</h4>
                                <p class="text-xs text-slate-300">En az 8-10 karakter; büyük harf, küçük harf, rakam ve özel işaret (*, #, ?) içeren şifreler kullanın.</p>
                            </div>
                        </div>

                        <div class="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40 flex items-start gap-3">
                            <i class="fa-solid fa-user-shield text-amber-400 text-xl mt-1"></i>
                            <div>
                                <h4 class="font-black text-white text-sm">2. Kişisel Bilgileri Gizleyin</h4>
                                <p class="text-xs text-slate-300">T.C. kimlik numaranızı, ev adresinizi, telefon numaranızı ve okul adınızı herkese açık paylaşmayın.</p>
                            </div>
                        </div>

                        <div class="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 flex items-start gap-3">
                            <i class="fa-solid fa-ban text-cyan-400 text-xl mt-1"></i>
                            <div>
                                <h4 class="font-black text-white text-sm">3. Şifrenizi Kimseye Vermeyin</h4>
                                <p class="text-xs text-slate-300">En yakın arkadaşınız bile olsa hesap şifrelerinizi asla paylaşmayın (Sadece ebeveyniniz bilmeli).</p>
                            </div>
                        </div>

                        <div class="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 flex items-start gap-3">
                            <i class="fa-solid fa-right-from-bracket text-emerald-400 text-xl mt-1"></i>
                            <div>
                                <h4 class="font-black text-white text-sm">4. Ortak Cihazlarda Çıkış Yapın</h4>
                                <p class="text-xs text-slate-300">Okuldaki veya kütüphanedeki bilgisayarlarda işiniz bittiğinde mutlaka "Oturumu Kapat" butonuna basın.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 6,
            title: "Dijital Ayak İzi (Digital Footprint) Nedir? 👣",
            subtitle: "İnternette attığımız her adım kalıcı bir iz bırakır",
            type: "cards",
            badge: "ÖNEMLİ KAVRAM",
            icon: "fa-solid fa-shoe-prints",
            gradient: "from-emerald-950 via-slate-900 to-indigo-950",
            content: `
                <div class="space-y-6">
                    <div class="p-6 rounded-3xl bg-emerald-900/40 border-2 border-emerald-500/40 flex flex-col md:flex-row items-center gap-6">
                        <div class="w-20 h-20 rounded-3xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-4xl shrink-0">
                            <i class="fa-solid fa-shoe-prints"></i>
                        </div>
                        <div class="space-y-2 text-center md:text-left">
                            <h3 class="text-2xl font-black text-white">İnternetteki Gölgemiz: Dijital Ayak İzi</h3>
                            <p class="text-sm text-emerald-100 leading-relaxed">
                                Kumsalda veya karda yürürken arkamızda ayak izleri kalır değil mi? İşte internette gezinirken, arama motoruna bir kelime yazarken veya bir video izlerken de arkamızda elektronik veriler bırakırız. Buna <strong>Dijital Ayak İzi</strong> denir.
                            </p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                            <span class="text-2xl">🔍</span>
                            <h4 class="font-black text-white text-sm mt-1">Arama Geçmişi</h4>
                            <p class="text-xs text-slate-400 mt-1">Google'da veya YouTube'da arattığımız konular.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                            <span class="text-2xl">📸</span>
                            <h4 class="font-black text-white text-sm mt-1">Paylaşılan İçerikler</h4>
                            <p class="text-xs text-slate-400 mt-1">Yüklediğimiz fotoğraflar, attığımız tweetler ve durumlar.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                            <span class="text-2xl">🍪</span>
                            <h4 class="font-black text-white text-sm mt-1">Çerezler & Konum</h4>
                            <p class="text-xs text-slate-400 mt-1">Girdiğimiz sitelerin cihazımıza kaydettiği veriler.</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 7,
            title: "Aktif ve Pasif Dijital Ayak İzi 📊",
            subtitle: "Farkında olarak ve olmayarak bıraktığımız izler",
            type: "comparison",
            badge: "İZ TÜRLERİ",
            icon: "fa-solid fa-code-compare",
            gradient: "from-indigo-950 to-blue-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="p-6 rounded-3xl bg-blue-950/60 border-2 border-blue-500/50 space-y-4 shadow-xl">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-300 flex items-center justify-center text-2xl">
                                <i class="fa-solid fa-hand-pointer"></i>
                            </div>
                            <div>
                                <span class="text-xs font-black uppercase text-blue-400">Bilinçli Olarak Bırakılan</span>
                                <h3 class="text-xl font-black text-white">1. Aktif Dijital Ayak İzi</h3>
                            </div>
                        </div>
                        <p class="text-xs sm:text-sm text-slate-200">
                            Kendi isteğimizle, bilerek ve isteyerek internete yüklediğimiz her türlü içeriktir.
                        </p>
                        <div class="space-y-2 text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl">
                            <div>📌 Sosyal medyaya fotoğraf ve video yüklemek</div>
                            <div>📌 Bir blog yazısına yorum yazmak</div>
                            <div>📌 Arkadaşımıza e-posta veya mesaj göndermek</div>
                        </div>
                    </div>

                    <div class="p-6 rounded-3xl bg-purple-950/60 border-2 border-purple-500/50 space-y-4 shadow-xl">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-300 flex items-center justify-center text-2xl">
                                <i class="fa-solid fa-ghost"></i>
                            </div>
                            <div>
                                <span class="text-xs font-black uppercase text-purple-400">Farkında Olmadan Bırakılan</span>
                                <h3 class="text-xl font-black text-white">2. Pasif Dijital Ayak İzi</h3>
                            </div>
                        </div>
                        <p class="text-xs sm:text-sm text-slate-200">
                            Biz doğrudan bir şey paylaşmasak bile, girdiğimiz sitelerin ve uygulamaların arka planda topladığı verilerdir.
                        </p>
                        <div class="space-y-2 text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl">
                            <div>📌 Ziyaret ettiğimiz web sitelerinin kayıtları (Çerezler)</div>
                            <div>📌 Harita uygulamasının kaydettiği konum verisi</div>
                            <div>📌 İnternete bağlandığımız IP adresimiz</div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 8,
            title: "İnternet Asla Unutmaz! 🐘",
            subtitle: "Dijital ayak izinin kalıcılığı ve geleceğimize etkileri",
            type: "cards",
            badge: "KRİTİK UYARI",
            icon: "fa-solid fa-triangle-exclamation",
            gradient: "from-amber-950 to-slate-900",
            content: `
                <div class="space-y-6">
                    <div class="p-5 rounded-3xl bg-amber-500/10 border-2 border-amber-500/40 space-y-3">
                        <h3 class="text-xl sm:text-2xl font-black text-yellow-300 flex items-center gap-2">
                            <i class="fa-solid fa-database"></i> "Sil" Butonuna Bassak Bile Gerçekten Silinir mi?
                        </h3>
                        <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                            İnternette paylaştığınız bir fotoğrafı veya mesajı silseniz bile, bir başkası o fotoğrafın <strong>ekran görüntüsünü (screenshot)</strong> almış olabilir ya da arama motorlarının veri tabanlarına kaydedilmiş olabilir!
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
                            <h4 class="font-black text-white text-sm flex items-center gap-2">
                                <i class="fa-solid fa-briefcase text-blue-400"></i> Gelecekteki İş & Okul Başvuruları
                            </h4>
                            <p class="text-xs text-slate-300">İleride üniversiteye veya işe başvururken kurumlar sizin dijital ayak izinizi ve sosyal medya geçmişinizi inceleyebilir.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
                            <h4 class="font-black text-white text-sm flex items-center gap-2">
                                <i class="fa-solid fa-medal text-emerald-400"></i> Saygınlık ve Güvenilirlik
                            </h4>
                            <p class="text-xs text-slate-300">Temiz bir dijital ayak izi, sanal dünyada saygın, güvenilir ve başarılı bir birey olarak tanınmanızı sağlar.</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 9,
            title: "Paylaşmadan Önce D.Ü.Ş.Ü.N. Kuralı! 🧠",
            subtitle: "Dijital ayak izimizi temiz ve olumlu tutmanın altın formülü",
            type: "cards",
            badge: "ALTIN KURAL",
            icon: "fa-solid fa-brain",
            gradient: "from-indigo-900 via-purple-900 to-slate-900",
            content: `
                <div class="space-y-5">
                    <p class="text-sm text-slate-300">
                        İnternette bir fotoğraf yüklemeden, yorum yapmadan veya bir mesaj göndermeden önce kendinize şu 5 soruyu sorun:
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-5 gap-3">
                        <div class="p-4 rounded-2xl bg-blue-950/80 border-2 border-blue-500/40 text-center space-y-2">
                            <span class="text-2xl font-black text-blue-400 block">D</span>
                            <h5 class="font-black text-white text-xs">DOĞRU MU?</h5>
                            <p class="text-[11px] text-slate-300">Yalan veya sahte haber mi, gerçek mi?</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-emerald-950/80 border-2 border-emerald-500/40 text-center space-y-2">
                            <span class="text-2xl font-black text-emerald-400 block">Ü</span>
                            <h5 class="font-black text-white text-xs">ÜZÜCÜ MÜ?</h5>
                            <p class="text-[11px] text-slate-300">Bir arkadaşımı kırıp üzer mi?</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-amber-950/80 border-2 border-amber-500/40 text-center space-y-2">
                            <span class="text-2xl font-black text-amber-400 block">Ş</span>
                            <h5 class="font-black text-white text-xs">ŞÜPHELİ Mİ?</h5>
                            <p class="text-[11px] text-slate-300">Güvensiz bir link veya tuzak içerik mi?</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-purple-950/80 border-2 border-purple-500/40 text-center space-y-2">
                            <span class="text-2xl font-black text-purple-400 block">Ü</span>
                            <h5 class="font-black text-white text-xs">ÜRETİCİ Mİ?</h5>
                            <p class="text-[11px] text-slate-300">Faydalı bir katkı sağlıyor mu?</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-pink-950/80 border-2 border-pink-500/40 text-center space-y-2">
                            <span class="text-2xl font-black text-pink-400 block">N</span>
                            <h5 class="font-black text-white text-xs">NAZİK Mİ?</h5>
                            <p class="text-[11px] text-slate-300">Kibar ve saygılı bir dil kullanıldı mı?</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 10,
            title: "Dijital Vatandaşlık Uygulamaları Nedir? 🏛️",
            subtitle: "Devlet hizmetleri internetle parmaklarımızın ucunda!",
            type: "cards",
            badge: "KAMU HİZMETLERİ",
            icon: "fa-solid fa-laptop-file",
            gradient: "from-blue-900 to-slate-900",
            content: `
                <div class="space-y-6">
                    <p class="text-sm sm:text-base text-slate-200 leading-relaxed">
                        Eskiden resmi bir evrak almak, hastaneden sıra numarası almak veya sınav sonucunu öğrenmek için saatlerce kuyrukta beklenirdi. Günümüzde devletimiz tüm bu hizmetleri internete taşımıştır. Bu uygulamalara <strong>Dijital Vatandaşlık Uygulamaları (e-Hizmetler)</strong> denir.
                    </p>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div class="p-4 rounded-2xl bg-slate-800 border border-indigo-500/30 text-center space-y-2">
                            <i class="fa-solid fa-building-flag text-red-400 text-3xl"></i>
                            <h4 class="font-black text-white text-sm">e-Devlet</h4>
                            <p class="text-xs text-slate-400">Kamu Kapısı</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800 border border-indigo-500/30 text-center space-y-2">
                            <i class="fa-solid fa-graduation-cap text-blue-400 text-3xl"></i>
                            <h4 class="font-black text-white text-sm">e-Okul & EBA</h4>
                            <p class="text-xs text-slate-400">Eğitim Portalları</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800 border border-indigo-500/30 text-center space-y-2">
                            <i class="fa-solid fa-heart-pulse text-emerald-400 text-3xl"></i>
                            <h4 class="font-black text-white text-sm">e-Nabız & MHRS</h4>
                            <p class="text-xs text-slate-400">Sağlık Hizmetleri</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800 border border-indigo-500/30 text-center space-y-2">
                            <i class="fa-solid fa-bus text-amber-400 text-3xl"></i>
                            <h4 class="font-black text-white text-sm">e-Belediye</h4>
                            <p class="text-xs text-slate-400">Ulaşım & Şehir</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 11,
            title: "e-Devlet Kapısı (turkiye.gov.tr) 🇹🇷",
            subtitle: "Devletin kısayolu: Tüm kamu hizmetleri tek adreste!",
            type: "cards",
            badge: "E-DEVLET KAPISI",
            icon: "fa-solid fa-landmark",
            gradient: "from-red-950 via-slate-900 to-indigo-950",
            content: `
                <div class="space-y-6">
                    <div class="p-5 rounded-3xl bg-red-950/40 border-2 border-red-500/40 flex items-center justify-between flex-wrap gap-4">
                        <div class="space-y-1">
                            <span class="text-xs font-bold text-red-300 uppercase tracking-widest">RESMİ DEVLET PORTALI</span>
                            <h3 class="text-2xl font-black text-white">www.turkiye.gov.tr</h3>
                            <p class="text-xs sm:text-sm text-slate-300">Vatandaşların kamu kurumlarına ait binlerce hizmete tek şifreyle 7/24 ulaşmasını sağlar.</p>
                        </div>
                        <div class="px-4 py-2 bg-red-600 text-white font-black text-sm rounded-xl shadow-lg">
                            <i class="fa-solid fa-lock"></i> Güvenli Giriş
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                        <div class="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-1">
                            <h4 class="font-black text-yellow-300"><i class="fa-solid fa-file-invoice"></i> Resmi Belgeler</h4>
                            <p class="text-slate-300">İkametgah belgesi, adli sicil kaydı, nüfus kayıt örneği alma.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-1">
                            <h4 class="font-black text-cyan-300"><i class="fa-solid fa-magnifying-glass"></i> Sorgulama İşlemleri</h4>
                            <p class="text-slate-300">Üzerimize kayıtlı hatlar, vergi borcu, dava dosyaları sorgulama.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-1">
                            <h4 class="font-black text-emerald-300"><i class="fa-solid fa-leaf"></i> Tasarruf & Hız</h4>
                            <p class="text-slate-300">Kağıt israfını önler, zaman ve yol masrafından tasarruf sağlar.</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 12,
            title: "Eğitimde Dijital Vatandaşlık: e-Okul 🎓",
            subtitle: "Notlar, devamsızlık ve karne takibi parmaklarınızın ucunda",
            type: "cards",
            badge: "EĞİTİM UYGULAMASI",
            icon: "fa-solid fa-school",
            gradient: "from-blue-900 to-indigo-950",
            content: `
                <div class="space-y-6">
                    <div class="p-6 rounded-3xl bg-blue-900/40 border-2 border-blue-500/40 space-y-3">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-300 flex items-center justify-center text-2xl">
                                <i class="fa-solid fa-graduation-cap"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-black text-white">e-Okul Veli Bilgilendirme Sistemi</h3>
                                <p class="text-xs text-blue-200">Millî Eğitim Bakanlığı resmi öğrenci takip platformu</p>
                            </div>
                        </div>
                        <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                            Öğrencilerin ve velilerin okul sürecini şeffaf şekilde takip etmesini sağlayan en önemli eğitim bilişim uygulamasıdır.
                        </p>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                        <div class="p-3.5 bg-slate-800 rounded-xl border border-slate-700">
                            <i class="fa-solid fa-star text-yellow-400 text-lg mb-1"></i>
                            <div class="font-black text-white">Sınav Notları</div>
                            <div class="text-slate-400">Yazılı ve sözlü sonuçları</div>
                        </div>
                        <div class="p-3.5 bg-slate-800 rounded-xl border border-slate-700">
                            <i class="fa-solid fa-calendar-xmark text-rose-400 text-lg mb-1"></i>
                            <div class="font-black text-white">Devamsızlık</div>
                            <div class="text-slate-400">Özürlü/özürsüz günler</div>
                        </div>
                        <div class="p-3.5 bg-slate-800 rounded-xl border border-slate-700">
                            <i class="fa-solid fa-award text-emerald-400 text-lg mb-1"></i>
                            <div class="font-black text-white">Takdir / Teşekkür</div>
                            <div class="text-slate-400">Dönem sonu belgeleri</div>
                        </div>
                        <div class="p-3.5 bg-slate-800 rounded-xl border border-slate-700">
                            <i class="fa-solid fa-book text-cyan-400 text-lg mb-1"></i>
                            <div class="font-black text-white">Ders Programı</div>
                            <div class="text-slate-400">Haftalık ders çizelgesi</div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 13,
            title: "Eğitim Bilişim Ağı (EBA) 💻",
            subtitle: "Türkiye'nin dijital eğitim ve öğrenme platformu",
            type: "cards",
            badge: "EĞİTİM PORTALI",
            icon: "fa-solid fa-display",
            gradient: "from-amber-950 via-slate-900 to-indigo-950",
            content: `
                <div class="space-y-6">
                    <div class="p-5 rounded-3xl bg-amber-500/10 border-2 border-amber-500/40 flex items-center justify-between flex-wrap gap-4">
                        <div class="space-y-1">
                            <span class="text-xs font-black text-amber-300 uppercase">EBA • www.eba.gov.tr</span>
                            <h3 class="text-2xl font-black text-white">Eğitim Bilişim Ağı</h3>
                            <p class="text-xs sm:text-sm text-slate-300">Öğretmen ve öğrencilerin ders materyallerine ücretsiz ulaştığı dijital kütüphane.</p>
                        </div>
                        <div class="px-4 py-2 bg-amber-500 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg">
                            <i class="fa-solid fa-book-open-reader"></i> Canlı Ders & Test
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                        <div class="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-1">
                            <h4 class="font-black text-amber-300"><i class="fa-solid fa-video"></i> Ders Videoları & Animasyonlar</h4>
                            <p class="text-slate-300">Konuları görsel ve eğlenceli şekilde anlatan binlerce video.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-1">
                            <h4 class="font-black text-blue-300"><i class="fa-solid fa-list-check"></i> Alıştırmalar & Denemeler</h4>
                            <p class="text-slate-300">Kendimizi test edebileceğimiz interaktif sorular ve testler.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-1">
                            <h4 class="font-black text-emerald-300"><i class="fa-solid fa-file-pdf"></i> Dijital Ders Kitapları</h4>
                            <p class="text-slate-300">Ders kitaplarının dijital versiyonlarına tek tıkla ulaşım.</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 14,
            title: "Sağlıkta Dijital Vatandaşlık: e-Nabız 🩺",
            subtitle: "Kişisel sağlık kaydınız ve sağlık geçmişiniz tek ekranda",
            type: "cards",
            badge: "SAĞLIK PORTALI",
            icon: "fa-solid fa-heart-pulse",
            gradient: "from-emerald-950 via-slate-900 to-indigo-950",
            content: `
                <div class="space-y-6">
                    <div class="p-6 rounded-3xl bg-emerald-950/50 border-2 border-emerald-500/40 space-y-3">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl">
                                <i class="fa-solid fa-laptop-medical"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-black text-white">e-Nabız Kişisel Sağlık Sistemi</h3>
                                <p class="text-xs text-emerald-300">T.C. Sağlık Bakanlığı resmi dijital sağlık arşivi</p>
                            </div>
                        </div>
                        <p class="text-xs sm:text-sm text-slate-200">
                            Hastanede yapılan tüm muayenelerin, çekilen röntgenlerin ve yazılan reçetelerin güvenle saklandığı kişisel sağlık dosyasıdır.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                        <div class="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-1">
                            <h4 class="font-black text-emerald-400"><i class="fa-solid fa-flask"></i> Tahlil Sonuçları</h4>
                            <p class="text-slate-300">Kan ve laboratuvar tahlillerini hastaneye gitmeden anında görme.</p>
                        </div>
                        <div class="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-1">
                            <h4 class="font-black text-cyan-400"><i class="fa-solid fa-pills"></i> Reçeteler & İlaçlar</h4>
                            <p class="text-slate-300">Doktorun yazdığı ilaçlar ve kullanım geçmişi takibi.</p>
                        </div>
                        <div class="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-1">
                            <h4 class="font-black text-yellow-400"><i class="fa-solid fa-syringe"></i> Aşı Takvimi</h4>
                            <p class="text-slate-300">Bebeklikten itibaren yapılan tüm aşıların dijital kaydı.</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 15,
            title: "Merkezi Hekim Randevu Sistemi (MHRS) 🏥",
            subtitle: "Hastanelerde sıra beklemeden doktor randevusu alma",
            type: "cards",
            badge: "MHRS • RANDEVU",
            icon: "fa-solid fa-hospital-user",
            gradient: "from-teal-950 via-slate-900 to-indigo-950",
            content: `
                <div class="space-y-6">
                    <div class="p-6 rounded-3xl bg-teal-950/50 border-2 border-teal-500/40 flex items-center justify-between flex-wrap gap-4">
                        <div class="space-y-1">
                            <span class="text-xs font-black text-teal-300 uppercase">MHRS • ALO 182 / mhrs.gov.tr</span>
                            <h3 class="text-2xl font-black text-white">Merkezi Hekim Randevu Sistemi</h3>
                            <p class="text-xs sm:text-sm text-slate-300">Hastanelerdeki yoğunluğu önleyen akıllı randevu platformu.</p>
                        </div>
                        <div class="px-4 py-2 bg-teal-600 text-white font-black text-xs sm:text-sm rounded-xl shadow-lg">
                            <i class="fa-solid fa-calendar-check"></i> 7/24 Randevu
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                        <div class="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-1">
                            <h4 class="font-black text-teal-300"><i class="fa-solid fa-clock"></i> Zaman Tasarrufu</h4>
                            <p class="text-slate-300">Sabahın erken saatlerinde hastanede kuyruk beklemeye son verir.</p>
                        </div>
                        <div class="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-1">
                            <h4 class="font-black text-emerald-300"><i class="fa-solid fa-user-doctor"></i> Hekim Seçme Hakkı</h4>
                            <p class="text-slate-300">İstediğimiz hastane, poliklinik ve doktoru kendimiz seçebiliriz.</p>
                        </div>
                        <div class="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-1">
                            <h4 class="font-black text-amber-300"><i class="fa-solid fa-phone"></i> Web & Mobil & Alo 182</h4>
                            <p class="text-slate-300">İster telefonla ister akıllı telefon uygulamasıyla kolayca alınır.</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 16,
            title: "Ulaşım ve Belediyede Dijital Uygulamalar 🚌",
            subtitle: "e-Belediye, toplu taşıma ve şehir yaşamı",
            type: "cards",
            badge: "ŞEHİR & ULAŞIM",
            icon: "fa-solid fa-city",
            gradient: "from-blue-950 via-slate-900 to-indigo-950",
            content: `
                <div class="space-y-6">
                    <p class="text-xs sm:text-sm text-slate-300">
                        Kamu uygulamaları sadece eğitim ve sağlıkla sınırlı değildir. Günlük yaşamımızda belediye ve ulaşım hizmetlerinde de dijitalleşme hayatımızı çok kolaylaştırır:
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div class="p-5 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
                            <i class="fa-solid fa-credit-card text-emerald-400 text-2xl"></i>
                            <h4 class="font-black text-white text-base">Kart Bakiye Yükleme</h4>
                            <p class="text-xs text-slate-300">Otobüs veya metro kartına cep telefonundan temassız bakiye yükleme.</p>
                        </div>

                        <div class="p-5 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
                            <i class="fa-solid fa-faucet-drip text-blue-400 text-2xl"></i>
                            <h4 class="font-black text-white text-base">e-Belediye Fatura Ödeme</h4>
                            <p class="text-xs text-slate-300">Su, çevre temizlik vergisi ve belediye harçlarını internetten ödeme.</p>
                        </div>

                        <div class="p-5 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
                            <i class="fa-solid fa-road text-amber-400 text-2xl"></i>
                            <h4 class="font-black text-white text-base">HGS / OGS Bakiye Takibi</h4>
                            <p class="text-xs text-slate-300">Köprü ve otoyol geçiş ücretlerini otomatik kontrol etme.</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 17,
            title: "Dijital Vatandaşın Hakları Nelerdir? ⚖️",
            subtitle: "Sanal ortamda korumamız gereken yasal haklarımız",
            type: "cards",
            badge: "DİJİTAL HAKLAR",
            icon: "fa-solid fa-scale-balanced",
            gradient: "from-indigo-950 to-purple-950",
            content: `
                <div class="space-y-4">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="p-4 rounded-2xl bg-indigo-950/60 border border-indigo-500/40 flex items-start gap-3">
                            <i class="fa-solid fa-eye-slash text-indigo-400 text-xl mt-1"></i>
                            <div>
                                <h4 class="font-black text-white text-sm">1. Mahremiyet ve Gizlilik Hakkı</h4>
                                <p class="text-xs text-slate-300">Kişisel verilerimiz iznimiz olmadan toplanamaz, kaydedilemez veya paylaşılamaz (KVKK).</p>
                            </div>
                        </div>

                        <div class="p-4 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 flex items-start gap-3">
                            <i class="fa-solid fa-wifi text-cyan-400 text-xl mt-1"></i>
                            <div>
                                <h4 class="font-black text-white text-sm">2. Bilgiye ve İnternete Erişim Hakkı</h4>
                                <p class="text-xs text-slate-300">Her vatandaş bilgi edinme ve dijital dünyadaki kamu hizmetlerinden yararlanma hakkına sahiptir.</p>
                            </div>
                        </div>

                        <div class="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 flex items-start gap-3">
                            <i class="fa-solid fa-shield-halved text-emerald-400 text-xl mt-1"></i>
                            <div>
                                <h4 class="font-black text-white text-sm">3. Dijital Güvenlik Hakkı</h4>
                                <p class="text-xs text-slate-300">Sanal ortamda dolandırıcılığa, saldırılara ve siber suçlara karşı korunma hakkımız vardır.</p>
                            </div>
                        </div>

                        <div class="p-4 rounded-2xl bg-pink-950/60 border border-pink-500/40 flex items-start gap-3">
                            <i class="fa-solid fa-comments text-pink-400 text-xl mt-1"></i>
                            <div>
                                <h4 class="font-black text-white text-sm">4. İfade ve Düşünce Özgürlüğü</h4>
                                <p class="text-xs text-slate-300">Başkalarına hakaret etmeden ve iftira atmadan kendi görüşlerimizi paylaşma hakkımız vardır.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 18,
            title: "Dijital Vatandaşın Sorumlulukları 📋",
            subtitle: "Haklarımızın yanında uymamız gereken görevlerimiz",
            type: "cards",
            badge: "SORUMLULUKLAR",
            icon: "fa-solid fa-list-check",
            gradient: "from-slate-900 to-indigo-950",
            content: `
                <div class="space-y-4">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="p-4 rounded-2xl bg-slate-800/90 border border-slate-700 flex items-start gap-3">
                            <i class="fa-solid fa-copyright text-yellow-400 text-xl mt-1"></i>
                            <div>
                                <h4 class="font-black text-white text-sm">1. Telif Haklarına Saygı</h4>
                                <p class="text-xs text-slate-300">Başkasına ait bir ödevi, resmi veya şarkıyı kendimizinmiş gibi kopyalayıp paylaşmamalıyız (Kaynak belirtmeliyiz).</p>
                            </div>
                        </div>

                        <div class="p-4 rounded-2xl bg-slate-800/90 border border-slate-700 flex items-start gap-3">
                            <i class="fa-solid fa-gavel text-rose-400 text-xl mt-1"></i>
                            <div>
                                <h4 class="font-black text-white text-sm">2. Bilişim Yasalarına Uymak</h4>
                                <p class="text-xs text-slate-300">İnternette korsan yazılım kullanmak, şifre kırmak veya sahte kimlik açmak bilişim suçudur.</p>
                            </div>
                        </div>

                        <div class="p-4 rounded-2xl bg-slate-800/90 border border-slate-700 flex items-start gap-3">
                            <i class="fa-solid fa-heart text-emerald-400 text-xl mt-1"></i>
                            <div>
                                <h4 class="font-black text-white text-sm">3. Başkalarının Mahremiyetine Saygı</h4>
                                <p class="text-xs text-slate-300">Arkadaşımızın fotoğrafını veya komik bir anını onun iznini almadan asla internete yüklememeliyiz.</p>
                            </div>
                        </div>

                        <div class="p-4 rounded-2xl bg-slate-800/90 border border-slate-700 flex items-start gap-3">
                            <i class="fa-solid fa-bullhorn text-cyan-400 text-xl mt-1"></i>
                            <div>
                                <h4 class="font-black text-white text-sm">4. Yanlış Bilgiyi Yaymamak</h4>
                                <p class="text-xs text-slate-300">Doğruluğundan emin olmadığımız asılsız dedikoduları ve sahte haberleri gruplarda paylaşmamalıyız.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 19,
            title: "Netiquette: Dijital Nezaket Kuralları 💬",
            subtitle: "İnternette centilmen ve saygılı bir iletişim rehberi",
            type: "cards",
            badge: "DİJİTAL NEZAKET",
            icon: "fa-solid fa-hand-holding-heart",
            gradient: "from-pink-950 via-slate-900 to-indigo-950",
            content: `
                <div class="space-y-5">
                    <p class="text-xs sm:text-sm text-slate-200">
                        <strong>Netiquette (Network + Etiquette):</strong> İnternet ortamında yazışırken, oyun oynarken ve yorum yaparken uymamız gereken görgü ve nezaket kurallarıdır.
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                        <div class="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/40 space-y-2">
                            <div class="text-rose-400 font-black text-base flex items-center gap-2">
                                <i class="fa-solid fa-font"></i> BÜYÜK HARFLE YAZMAYIN
                            </div>
                            <p class="text-slate-300">İnternette tamamı büyük harfle yazmak <strong>"karşı tarafa bağırmak"</strong> anlamına gelir. Kaba kabul edilir.</p>
                        </div>

                        <div class="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 space-y-2">
                            <div class="text-emerald-400 font-black text-base flex items-center gap-2">
                                <i class="fa-solid fa-face-smile"></i> Nazik & Teşekkürlü Dil
                            </div>
                            <p class="text-slate-300">Mesajlara "Merhaba" ile başlayın, yardım aldığınızda "Lütfen" ve "Teşekkür ederim" demeyi unutmayın.</p>
                        </div>

                        <div class="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 space-y-2">
                            <div class="text-cyan-400 font-black text-base flex items-center gap-2">
                                <i class="fa-solid fa-gamepad"></i> Oyunda Saygılı Olun
                            </div>
                            <p class="text-slate-300">Online oyunlarda yenilseniz bile hile yapmayın, küfür/hakaret içeren sözler sarf etmeyin.</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 20,
            title: "Siber Zorbalık ve Mücadele Yolları 🛑",
            subtitle: "Sanal ortamda baskı ve alaya karşı ne yapmalıyız?",
            type: "cards",
            badge: "GÜVENLİK REHBERİ",
            icon: "fa-solid fa-user-slash",
            gradient: "from-rose-950 via-slate-900 to-indigo-950",
            content: `
                <div class="space-y-6">
                    <div class="p-5 rounded-3xl bg-rose-950/50 border-2 border-rose-500/40 space-y-2">
                        <h4 class="text-lg font-black text-rose-300 flex items-center gap-2">
                            <i class="fa-solid fa-triangle-exclamation"></i> Siber Zorbalık Nedir?
                        </h4>
                        <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                            Bir kişinin teknolojik araçları kullanarak başkasını bilerek ve sürekli olarak rahatsız etmesi, alay etmesi, tehdit etmesi veya utandırmasıdır.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div class="p-5 rounded-2xl bg-slate-800 border-2 border-rose-500/30 space-y-2">
                            <div class="w-12 h-12 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-2xl mx-auto font-black">1</div>
                            <h5 class="font-black text-white text-base">CEVAP VERME!</h5>
                            <p class="text-xs text-slate-300">Zorbanın amacı sizi kızdırmaktır. Öfkeyle karşılık vermeyin.</p>
                        </div>
                        <div class="p-5 rounded-2xl bg-slate-800 border-2 border-amber-500/30 space-y-2">
                            <div class="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl mx-auto font-black">2</div>
                            <h5 class="font-black text-white text-base">KANIT AL VE ENGELLE!</h5>
                            <p class="text-xs text-slate-300">Ekran görüntüsü alarak kanıt oluşturun ve o kişiyi derhal engelleyin.</p>
                        </div>
                        <div class="p-5 rounded-2xl bg-slate-800 border-2 border-emerald-500/30 space-y-2">
                            <div class="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl mx-auto font-black">3</div>
                            <h5 class="font-black text-white text-base">YETİŞKİNE BİLDİR!</h5>
                            <p class="text-xs text-slate-300">Durumu hemen ailenize, rehber öğretmeninize veya Bilişim öğretmenine anlatın.</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 21,
            title: "Haftalık Konu Özeti & Altın İlkeler 🌟",
            subtitle: "3. Hafta: Dijital Vatandaşlık dersimizin özeti",
            type: "cards",
            badge: "KONU ÖZETİ",
            icon: "fa-solid fa-star",
            gradient: "from-blue-900 via-indigo-900 to-purple-900",
            content: `
                <div class="space-y-4">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                        <div class="p-4 rounded-2xl bg-slate-800/90 border border-blue-500/40 space-y-1.5">
                            <span class="text-blue-400 font-black">1. DİJİTAL VATANDAŞ:</span>
                            <p class="text-slate-200">Teknolojiyi etik, güvenli ve sorumlu kullanan; haklarını ve ödevlerini bilen bireydir.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800/90 border border-emerald-500/40 space-y-1.5">
                            <span class="text-emerald-400 font-black">2. DİJİTAL AYAK İZİ:</span>
                            <p class="text-slate-200">İnternette yaptığımız her arama ve paylaşımla bıraktığımız kalıcı izlerdir. Asla tamamen silinmez!</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800/90 border border-yellow-500/40 space-y-1.5">
                            <span class="text-yellow-400 font-black">3. E-DEVLET UYGULAMALARI:</span>
                            <p class="text-slate-200">e-Okul (Eğitim), e-Nabız (Sağlık), e-Devlet (Kamu), MHRS (Hastane randevu) hayatımızı kolaylaştırır.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-800/90 border border-pink-500/40 space-y-1.5">
                            <span class="text-pink-400 font-black">4. DİJİTAL NEZAKET (NETIQUETTE):</span>
                            <p class="text-slate-200">Büyük harfle bağırmayın, küfür/hakaretten kaçının, siber zorbalığa sessiz kalmayın!</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 22,
            title: "Tebrikler! Sunumu Tamamladınız 🎉",
            subtitle: "Şimdi bilgileri pekiştirme ve eğlenceli oyunlar oynama zamanı!",
            type: "hero",
            badge: "HAZIR MISINIZ?",
            icon: "fa-solid fa-flag-checkered",
            gradient: "from-emerald-600 via-teal-600 to-indigo-800",
            content: `
                <div class="text-center space-y-6 max-w-2xl mx-auto py-6">
                    <div class="w-24 h-24 rounded-full bg-white/20 text-yellow-300 flex items-center justify-center text-5xl mx-auto shadow-2xl animate-bounce">
                        🏆
                    </div>
                    <div class="space-y-2">
                        <h2 class="text-3xl sm:text-4xl font-black text-white">Harikasınız Bilişim Dedektifleri!</h2>
                        <p class="text-sm sm:text-base text-emerald-100">
                            3. Hafta "Dijital Vatandaşlık Uygulamaları" ders sunusunu başarıyla tamamladınız.
                        </p>
                    </div>
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <button onclick="app.switchTab('worksheet')" class="w-full sm:w-auto px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-white font-black text-sm rounded-2xl border border-white/20 shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95">
                            <i class="fa-solid fa-file-lines text-emerald-400"></i> Çalışma Kağıdını Aç
                        </button>
                        <button onclick="app.switchTab('quiz')" class="w-full sm:w-auto px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-white font-black text-sm rounded-2xl border border-white/20 shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95">
                            <i class="fa-solid fa-circle-question text-blue-400"></i> Pekiştirme Testine Başla
                        </button>
                        <button onclick="app.switchTab('games')" class="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black text-sm rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95">
                            <i class="fa-solid fa-gamepad"></i> Tekrar Oyunlarına Geç 🎮
                        </button>
                    </div>
                </div>
            `
        }
    ],

    // ========================================================
    // 📄 2. HAFTALIK ÇALIŞMA KAĞITLARI & DİJİTAL METİNLER
    // ========================================================
    worksheetDocs: {
        images: {
            konu: null,
            soru: null,
            cevap: null
        },
        konuHtml: `
        <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-indigo-500/50 shadow-2xl space-y-6">
            <!-- Belge Başlığı -->
            <div class="border-b-2 border-indigo-500/40 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                    <span class="px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black rounded-lg text-xs tracking-wider uppercase">1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri</span>
                    <h1 class="text-2xl sm:text-3xl font-black text-white mt-1">3. HAFTA: DİJİTAL VATANDAŞLIK UYGULAMALARI</h1>
                    <p class="text-xs text-indigo-200 font-semibold">T.C. Millî Eğitim Bakanlığı 5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi</p>
                </div>
                <div class="text-right text-xs text-yellow-300 font-bold bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <div>👨‍🏫 Öğretmen: Bozok</div>
                    <div>🎯 Kazanım: BTY.5.1.3</div>
                </div>
            </div>

            <!-- Konu Özeti -->
            <div class="bg-indigo-950/60 rounded-2xl p-5 border border-indigo-400/30 space-y-3">
                <h3 class="text-lg font-bold text-yellow-300 flex items-center gap-2">
                    <i class="fa-solid fa-book-open text-indigo-400"></i> Bu Hafta Ne Öğreniyoruz?
                </h3>
                <p class="text-sm text-indigo-100 leading-relaxed">
                    İnternet ortamında haklarımızı, sorumluluklarımızı ve güvenliğimizi bilmek en temel vatandaşlık görevidir. Bu hafta; dijital kimliğin ne olduğunu, internette bıraktığımız dijital ayak izinin önemini, e-Devlet, e-Okul, EBA, e-Nabız gibi resmi uygulamaların hayatımıza katkılarını ve dijital nezaket kurallarını öğreniyoruz.
                </p>
            </div>

            <!-- 4 Temel Kavram -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div class="p-3.5 bg-slate-800 rounded-xl border border-slate-700 space-y-1">
                    <span class="font-black text-blue-400 block text-sm">1. DİJİTAL VATANDAŞ</span>
                    <p class="text-slate-300">Teknolojiyi ahlaki, yasal ve güvenli kullanan bilinçli birey.</p>
                </div>
                <div class="p-3.5 bg-slate-800 rounded-xl border border-slate-700 space-y-1">
                    <span class="font-black text-purple-400 block text-sm">2. DİJİTAL KİMLİK</span>
                    <p class="text-slate-300">İnternette bizi temsil eden profil, hesap ve bilgilerin bütünü.</p>
                </div>
                <div class="p-3.5 bg-slate-800 rounded-xl border border-slate-700 space-y-1">
                    <span class="font-black text-emerald-400 block text-sm">3. DİJİTAL AYAK İZİ</span>
                    <p class="text-slate-300">İnternette yaptığımız her arama ve paylaşımla bıraktığımız kalıcı izler.</p>
                </div>
                <div class="p-3.5 bg-slate-800 rounded-xl border border-slate-700 space-y-1">
                    <span class="font-black text-pink-400 block text-sm">4. NETIQUETTE</span>
                    <p class="text-slate-300">İnternet dünyasındaki görgü ve nezaket kuralları (Centilmenlik).</p>
                </div>
            </div>

            <!-- Dijital Vatandaşlık Uygulamaları Tablosu -->
            <div class="space-y-3">
                <h3 class="text-base font-bold text-yellow-400 flex items-center gap-2">
                    <i class="fa-solid fa-table text-indigo-400"></i> Temel Dijital Vatandaşlık Uygulamaları
                </h3>
                <div class="overflow-x-auto">
                    <table class="w-full text-xs text-left border-collapse border border-slate-700">
                        <thead class="bg-slate-800 text-yellow-300 font-bold uppercase">
                            <tr>
                                <th class="p-3 border border-slate-700">Uygulama Adı</th>
                                <th class="p-3 border border-slate-700">Alanı</th>
                                <th class="p-3 border border-slate-700">Web Adresi</th>
                                <th class="p-3 border border-slate-700">Sağladığı Temel Hizmet</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-800 text-slate-200">
                            <tr class="hover:bg-slate-800/50">
                                <td class="p-3 border border-slate-700 font-bold text-red-400">e-Devlet Kapısı</td>
                                <td class="p-3 border border-slate-700">Kamu Hizmetleri</td>
                                <td class="p-3 border border-slate-700">turkiye.gov.tr</td>
                                <td class="p-3 border border-slate-700">Resmi belgeler, adli sicil, ikametgah, hat sorgulama vb.</td>
                            </tr>
                            <tr class="hover:bg-slate-800/50">
                                <td class="p-3 border border-slate-700 font-bold text-blue-400">e-Okul</td>
                                <td class="p-3 border border-slate-700">Eğitim</td>
                                <td class="p-3 border border-slate-700">e-okul.meb.gov.tr</td>
                                <td class="p-3 border border-slate-700">Sınav notları, devamsızlık durumu, karne ve ders çizelgesi.</td>
                            </tr>
                            <tr class="hover:bg-slate-800/50">
                                <td class="p-3 border border-slate-700 font-bold text-amber-400">EBA</td>
                                <td class="p-3 border border-slate-700">Eğitim</td>
                                <td class="p-3 border border-slate-700">eba.gov.tr</td>
                                <td class="p-3 border border-slate-700">Ders videoları, konu anlatımları, interaktif testler, canlı ders.</td>
                            </tr>
                            <tr class="hover:bg-slate-800/50">
                                <td class="p-3 border border-slate-700 font-bold text-emerald-400">e-Nabız</td>
                                <td class="p-3 border border-slate-700">Sağlık</td>
                                <td class="p-3 border border-slate-700">enabiz.gov.tr</td>
                                <td class="p-3 border border-slate-700">Geçmiş muayeneler, tahlil sonuçları, aşı ve ilaç takibi.</td>
                            </tr>
                            <tr class="hover:bg-slate-800/50">
                                <td class="p-3 border border-slate-700 font-bold text-teal-400">MHRS</td>
                                <td class="p-3 border border-slate-700">Sağlık</td>
                                <td class="p-3 border border-slate-700">mhrs.gov.tr (Alo 182)</td>
                                <td class="p-3 border border-slate-700">Devlet hastanelerinden ve doktorlardan online randevu alma.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        `,
        soruHtml: `
        <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-indigo-500/50 shadow-2xl space-y-6">
            <div class="border-b-2 border-indigo-500/40 pb-4">
                <span class="px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black rounded-lg text-xs tracking-wider uppercase">3. Hafta Çalışma Kağıdı Soruları</span>
                <h1 class="text-2xl font-black text-white mt-1">PEKİŞTİRME ETKİNLİĞİ & ÇALIŞMA SORULARI</h1>
            </div>

            <!-- Bölüm A: Boşluk Doldurma -->
            <div class="space-y-3">
                <h3 class="text-sm font-black text-yellow-300 uppercase">A) Aşağıdaki cümlelerdeki boşlukları uygun kelimelerle doldurunuz:</h3>
                <div class="space-y-2 text-xs text-slate-200">
                    <p>1. İnternette arama yaparken ve web sitelerinde gezinirken arkamızda bıraktığımız kalıcı elektronik izlere ........................................ denir.</p>
                    <p>2. Öğrencilerin sınav notlarını ve devamsızlık durumlarını takip ettikleri Millî Eğitim Bakanlığı sistemi ........................................ sistemidir.</p>
                    <p>3. Hastanelerden sıra beklemeden online randevu almamızı sağlayan resmi sistemin adı ........................................'dir.</p>
                    <p>4. İnternette yazışırken kelimelerin tamamını büyük harfle yazmak ........................................ anlamına gelir.</p>
                </div>
            </div>

            <!-- Bölüm B: Doğru mu Yanlış mı? -->
            <div class="space-y-3 pt-3 border-t border-slate-800">
                <h3 class="text-sm font-black text-emerald-300 uppercase">B) İfadelerin başına Doğru için (D), Yanlış için (Y) koyunuz:</h3>
                <div class="space-y-2 text-xs text-slate-200">
                    <p>( ... ) 1. İnternete yüklediğimiz bir fotoğrafı daha sonra silsek bile başkaları tarafından kaydedilmiş olabilir.</p>
                    <p>( ... ) 2. e-Devlet şifremizi güvenliğimiz için sosyal medyada arkadaşlarımızla paylaşmalıyız.</p>
                    <p>( ... ) 3. Siber zorbalığa uğradığımızda o kişiye aynı şekilde kaba sözlerle cevap vermeliyiz.</p>
                    <p>( ... ) 4. e-Nabız sistemi geçmiş tahlil ve aşı kayıtlarımıza ulaşmamızı sağlar.</p>
                </div>
            </div>
        </div>
        `,
        cevapHtml: `
        <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-emerald-500/50 shadow-2xl space-y-6">
            <div class="border-b-2 border-emerald-500/40 pb-4">
                <span class="px-3 py-1 bg-emerald-500/30 text-emerald-300 font-black rounded-lg text-xs tracking-wider uppercase">Cevap Anahtarı</span>
                <h1 class="text-2xl font-black text-white mt-1">3. HAFTA ÇALIŞMA KAĞIDI ÇÖZÜMLERİ</h1>
            </div>

            <div class="space-y-3">
                <h3 class="text-sm font-black text-yellow-300 uppercase">A) Boşluk Doldurma Çözümleri:</h3>
                <div class="space-y-1 text-xs text-slate-200">
                    <p>1. <strong>Dijital Ayak İzi</strong></p>
                    <p>2. <strong>e-Okul</strong></p>
                    <p>3. <strong>MHRS</strong> (Merkezi Hekim Randevu Sistemi)</p>
                    <p>4. <strong>Bağırmak</strong> (Kaba davranmak)</p>
                </div>
            </div>

            <div class="space-y-3 pt-3 border-t border-slate-800">
                <h3 class="text-sm font-black text-emerald-300 uppercase">B) Doğru / Yanlış Çözümleri:</h3>
                <div class="space-y-1 text-xs text-slate-200">
                    <p>1. <strong>( D ) DOĞRU:</strong> İnternete yüklenen içerikler ekran görüntüsü alınarak saklanabilir, kalıcıdır.</p>
                    <p>2. <strong>( Y ) YANLIŞ:</strong> e-Devlet ve tüm hesap şifreleri gizlidir, kimseyle paylaşılmaz.</p>
                    <p>3. <strong>( Y ) YANLIŞ:</strong> Siber zorbalık yapan kişiye misilleme yapılmaz; engellenip yetişkine haber verilir.</p>
                    <p>4. <strong>( D ) DOĞRU:</strong> e-Nabız Sağlık Bakanlığı'nın tahlil ve aşı takibi sistemidir.</p>
                </div>
            </div>
        </div>
        `
    },

    // ========================================================
    // ❓ 3. PEKİŞTİRME TESTİ & SORULARI
    // ========================================================
    questions: [
        // 0. Çoktan Seçmeli Test Soruları
        {
            type: "quiz",
            title: "3. Hafta: Dijital Vatandaşlık Testi",
            desc: "10 soruluk interaktif pekiştirme testi. Başarılar!",
            questions: [
                {
                    q: "Dijital dünyada haklarını ve sorumluluklarını bilen, teknolojiyi bilinçli, ahlaki ve güvenli kullanan bireye ne ad verilir?",
                    options: ["Dijital Vatandaş", "Sanal Oyuncu", "Web Tasarımcısı", "İnternet Korsanı"],
                    answer: 0,
                    explanation: "Tebrikler! Dijital dünyadaki hak ve sorumluluklarını bilerek teknolojiyi doğru kullanan kişiye Dijital Vatandaş denir."
                },
                {
                    q: "İnternette arama yaparken, siteleri gezerken ve paylaşım yaparken arkamızda bıraktığımız kalıcı verilere ne ad verilir?",
                    options: ["Parmak İzi", "Dijital Ayak İzi", "Ekran Görüntüsü", "İnternet Şifresi"],
                    answer: 1,
                    explanation: "Doğru cevap! İnternetteki her işlemimiz geride kalıcı bir dijital ayak izi bırakır."
                },
                {
                    q: "Aşağıdakilerden hangisi bir 'Aktif Dijital Ayak İzi' örneğidir?",
                    options: [
                        "Kendi isteğimizle sosyal medyaya video yüklemek",
                        "Ziyaret ettiğimiz sitenin çerezleri kaydetmesi",
                        "Telefonun arka planda konum verisini tutması",
                        "Bağlandığımız internetin IP adresini kaydetmesi"
                    ],
                    answer: 0,
                    explanation: "Kendi isteğimiz ve bilincimizle internete koyduğumuz paylaşımlar aktif dijital ayak izidir."
                },
                {
                    q: "Öğrencilerin sınav notlarını, devamsızlık durumlarını ve karne bilgilerini takip edebildikleri MEB platformu hangisidir?",
                    options: ["e-Nabız", "e-Okul", "MHRS", "e-Belediye"],
                    answer: 1,
                    explanation: "e-Okul, öğrenci ve velilerin okul bilgilerini takip ettiği resmi platformdur."
                },
                {
                    q: "Geçmiş muayenelerimizi, tahlil sonuçlarımızı ve aşı takvimimizi güvenli şekilde incelememizi sağlayan dijital sağlık uygulaması hangisidir?",
                    options: ["e-Nabız", "EBA", "ÖSYM", "e-Devlet"],
                    answer: 0,
                    explanation: "e-Nabız, kişisel sağlık kayıtlarımızı arşivleyen resmi sağlık uygulamasıdır."
                },
                {
                    q: "Hastanelerde sıra beklemeden doktor ve klinik seçerek randevu almamızı sağlayan sistem hangisidir?",
                    options: ["MHRS", "e-Okul", "EBA", "HGS"],
                    answer: 0,
                    explanation: "Merkezi Hekim Randevu Sistemi (MHRS - Alo 182), hastane randevusu almak için kullanılır."
                },
                {
                    q: "İnternette mesajlaşırken veya yorum yazarken KELİMELERİN TAMAMINI BÜYÜK HARFLE YAZMAK ne anlama gelir?",
                    options: [
                        "Karşı tarafa bağırmak ve kaba davranmak",
                        "Çok neşeli olduğunu göstermek",
                        "Daha hızlı yazabilmek",
                        "Gizli bir şifre göndermek"
                    ],
                    answer: 0,
                    explanation: "İnternet nezaket kurallarına (Netiquette) göre büyük harfle yazmak bağırmak anlamına gelir."
                },
                {
                    q: "İnternette tanımadığınız bir kişi sizi alaycı sözlerle rahatsız ederse (Siber Zorbalık) yapılması gereken İLK adım nedir?",
                    options: [
                        "Ona aynı kaba sözlerle cevap vermek",
                        "Kişiye cevap vermeden engelleyip ailemize ve öğretmenimize bildirmek",
                        "İnterneti ve bilgisayarı tamamen çöpe atmak",
                        "Kişiye şifremizi göndermek"
                    ],
                    answer: 1,
                    explanation: "Siber zorbalığa asla misilleme yapılmaz; kişi engellenir ve güvenilir bir yetişkine haber verilir."
                },
                {
                    q: "Aşağıdakilerden hangisi dijital vatandaşın SORUMLULUKLARINDAN biridir?",
                    options: [
                        "Başkalarına ait fotoğraf ve ödevleri izinsiz kopyalamamak (Telif hakkına saygı)",
                        "Arkadaşlarının şifrelerini ele geçirmeye çalışmak",
                        "Her gördüğü haberi doğrulamadan yaymak",
                        "Sadece büyük harflerle mesaj yazmak"
                    ],
                    answer: 0,
                    explanation: "Telif haklarına saygı duymak ve başkalarının içeriklerini izinsiz almamak temel sorumluluktur."
                },
                {
                    q: "İnternette bir paylaşım yapmadan önce aklımıza getirmemiz gereken 'DÜŞÜN' kuralındaki 'D' harfi neyi ifade eder?",
                    options: ["Doğru mu?", "Değerli mi?", "Dalgın mı?", "Deneme mi?"],
                    answer: 0,
                    explanation: "D.Ü.Ş.Ü.N. kuralında D harfi bilginin 'Doğru mu?' olduğunu sorgulamamızı temsil eder."
                }
            ]
        },

        // 1. Doğru / Yanlış Etkinliği
        {
            type: "true_false",
            title: "Doğru mu? Yanlış mı? Pekiştirme Etkinliği",
            items: [
                {
                    statement: "İnternete yüklediğimiz bir fotoğrafı sildiğimizde internet dünyasından her zaman tamamen silinmiş olur.",
                    correct: false,
                    explanation: "Yanlış! Ekran görüntüsü alınmış olabilir veya arama motoru sunucularında kalmış olabilir."
                },
                {
                    statement: "e-Devlet kapısı (turkiye.gov.tr) birçok kamu hizmetine tek şifreyle 7/24 ulaşmamızı sağlar.",
                    correct: true,
                    explanation: "Doğru! e-Devlet kapısı resmi devlet hizmetlerinin tek noktadan sunulduğu güvenli portaldır."
                },
                {
                    statement: "Dijital vatandaş, internette yazışırken ve oyun oynarken nezaket kurallarına (Netiquette) dikkat eder.",
                    correct: true,
                    explanation: "Doğru! İnternette saygılı ve kibar bir dil kullanmak dijital vatandaşlığın gereğidir."
                },
                {
                    statement: "e-Okul uygulaması hastanelerden tahlil sonuçlarımızı incelemek için kullanılır.",
                    correct: false,
                    explanation: "Yanlış! Tahlil sonuçları e-Nabız uygulamasından; okul notları ise e-Okul'dan incelenir."
                },
                {
                    statement: "İnternette tamamı büyük harflerle yazılan bir mesaj bağırmak anlamına gelir.",
                    correct: true,
                    explanation: "Doğru! Büyük harfle yazmak sanal ortamda bağırmak ve saygısızlık olarak algılanır."
                },
                {
                    statement: "Güvenliğimiz için ev adresimizi ve T.C. kimlik numaramızı sosyal medyada herkesle paylaşmalıyız.",
                    correct: false,
                    explanation: "Yanlış! Kişisel veriler gizli tutulmalı ve yabancılarla asla paylaşılmamalıdır."
                },
                {
                    statement: "EBA platformu Millî Eğitim Bakanlığı'nın ders videoları ve dijital kitaplar sunduğu resmi eğitim ağıdır.",
                    correct: true,
                    explanation: "Doğru! EBA (Eğitim Bilişim Ağı) öğrenci ve öğretmenlere zengin ders içeriği sunar."
                },
                {
                    statement: "Siber zorbalıkla karşılaştığımızda durumu ailemizden veya öğretmenimizden saklamalıyız.",
                    correct: false,
                    explanation: "Yanlış! Siber zorbalığa uğrandığında vakit kaybetmeden güvenilir bir yetişkine haber verilmelidir."
                }
            ]
        }
    ],

    // ========================================================
    // 🎮 4. TEKRAR OYUNLARI VERİTABANI
    // ========================================================
    gameData: {
        // Oyun 1: Çarkıfelek Soruları
        wheelQuiz: [
            {
                q: "Dijital dünyada haklarını ve sorumluluklarını bilen, teknolojiyi bilinçli kullanan bireye ne denir?",
                options: ["Dijital Vatandaş", "Sanal Oyuncu", "İnternet Korsanı", "Webmaster"],
                answer: 0,
                pts: 100
            },
            {
                q: "İnternette attığımız her adımın ve aramanın arkasında bıraktığı kalıcı izlere ne ad verilir?",
                options: ["Parmak İzi", "Dijital Ayak İzi", "Ekran Görüntüsü", "İnternet Hızı"],
                answer: 1,
                pts: 200
            },
            {
                q: "Resmi devlet hizmetlerine tek şifreyle 7/24 ulaşmamızı sağlayan resmi portal hangisidir?",
                options: ["e-Devlet", "Sosyal Medya", "Online Oyun", "Video Sitesi"],
                answer: 0,
                pts: 150
            },
            {
                q: "Öğrencilerin sınav notlarını ve devamsızlık durumlarını takip ettikleri MEB sistemi hangisidir?",
                options: ["e-Nabız", "e-Okul", "MHRS", "e-Belediye"],
                answer: 1,
                pts: 300
            },
            {
                q: "Hastanelerden sıra beklemeden randevu almamızı sağlayan sağlık sistemi hangisidir?",
                options: ["MHRS", "e-Okul", "EBA", "ÖSYM"],
                answer: 0,
                pts: 250
            },
            {
                q: "İnternette kelimelerin tamamını büyük harflerle yazmak ne anlama gelir?",
                options: ["Bağırmak & Kaba Davranmak", "Daha Hızlı Yazmak", "Neşeli Olmak", "Şifre Koymak"],
                answer: 0,
                pts: 200
            },
            {
                q: "Geçmiş tahlil sonuçlarımızı ve aşı takvimimizi görmemizi sağlayan dijital sağlık uygulaması hangisidir?",
                options: ["e-Nabız", "EBA", "e-Okul", "Haritalar"],
                answer: 0,
                pts: 150
            },
            {
                q: "İnternette görgü ve nezaket kurallarına verilen İngilizce kökenli isim hangisidir?",
                options: ["Netiquette", "Spam", "Hacker", "Download"],
                answer: 0,
                pts: 500
            }
        ],

        // Oyun 2: Kavram & Uygulama Eşleştirme (1'e 1 Net Eşleşme)
        matchConfig: {
            leftTitle: "Dijital Vatandaşlık & Uygulamalar 📋",
            rightTitle: "Hizmet Alanı & Açıklamaları 🎯",
            instruction: "💡 <strong>Nasıl Oynanır?</strong> Soldaki kavrama dokunun, ardından sağdaki doğru hizmet açıklamasına dokunarak eşleştirin!"
        },
        matchCards: [
            {
                id: 1,
                text: "e-Okul Sistemi",
                category: "Öğrenci sınav notları, devamsızlık ve karne takibi (Eğitim)",
                icon: "fa-solid fa-graduation-cap",
                rightIcon: "fa-solid fa-school"
            },
            {
                id: 2,
                text: "e-Nabız Sistemi",
                category: "Geçmiş tahlil sonuçları, aşı ve reçete arşivi (Sağlık)",
                icon: "fa-solid fa-heart-pulse",
                rightIcon: "fa-solid fa-hospital"
            },
            {
                id: 3,
                text: "e-Devlet Kapısı",
                category: "Tüm resmi kamu hizmetlerine tek şifreyle 7/24 erişim",
                icon: "fa-solid fa-landmark",
                rightIcon: "fa-solid fa-key"
            },
            {
                id: 4,
                text: "MHRS (Alo 182)",
                category: "Hastanelerden doktor ve klinik seçerek randevu alma",
                icon: "fa-solid fa-calendar-check",
                rightIcon: "fa-solid fa-user-doctor"
            },
            {
                id: 5,
                text: "EBA Portalı",
                category: "Ders videoları, dijital kitaplar ve eğitici testler",
                icon: "fa-solid fa-book-open-reader",
                rightIcon: "fa-solid fa-video"
            },
            {
                id: 6,
                text: "Dijital Ayak İzi",
                category: "İnternette attığımız her adımla arkamızda kalan kalıcı izler",
                icon: "fa-solid fa-shoe-prints",
                rightIcon: "fa-solid fa-database"
            },
            {
                id: 7,
                text: "Dijital Kimlik",
                category: "İnternette bizi temsil eden profil, hesap ve bilgiler bütünü",
                icon: "fa-solid fa-id-card",
                rightIcon: "fa-solid fa-user-check"
            },
            {
                id: 8,
                text: "Netiquette (Nezaket)",
                category: "Sanal ortamda saygılı, kibar ve görgülü iletişim kuralları",
                icon: "fa-solid fa-hand-holding-heart",
                rightIcon: "fa-solid fa-comments"
            }
        ],

        // Oyun 3: Hızlı Refleks Doğru / Yanlış İfadeleri
        reflexStatements: [
            {
                text: "İnternette paylaşılan hiçbir şey tamamen silinmeyebilir.",
                correct: true
            },
            {
                text: "e-Devlet şifremizi arkadaşlarımızla paylaşmamızda hiçbir sakınca yoktur.",
                correct: false
            },
            {
                text: "Mesajlarda kelimeleri tamamı büyük harflerle yazmak bağırmak anlamına gelir.",
                correct: true
            },
            {
                text: "e-Okul uygulaması hastanelerden doktor randevusu almak için kullanılır.",
                correct: false
            },
            {
                text: "Dijital vatandaş, internette başkalarının haklarına ve fikirlerine saygı duyar.",
                correct: true
            },
            {
                text: "Siber zorbalığa uğradığımızda o kişiye küfürle karşılık vermeliyiz.",
                correct: false
            },
            {
                text: "e-Nabız sistemi aşı kayıtlarımızı ve tahlil sonuçlarımızı güvenle saklar.",
                correct: true
            },
            {
                text: "İnternette doğru olup olmadığını bilmediğimiz haberleri yaymamalıyız.",
                correct: true
            }
        ],

        // Oyun 4: Sınıf Düellosu Soruları
        duelQuestions: [
            {
                q: "Dijital dünyada haklarını ve sorumluluklarını bilen kişiye ne ad verilir?",
                options: ["Sanal Oyuncu", "Dijital Vatandaş", "Bilgisayar Korsanı", "Sosyal Medyacı"],
                answer: 1
            },
            {
                q: "İnternette arkamızda bıraktığımız kalıcı arama ve paylaşım verilerine ne denir?",
                options: ["Dijital Ayak İzi", "Ekran Parlaklığı", "İnternet Kotası", "Parmak İzi"],
                answer: 0
            },
            {
                q: "Tüm kamu hizmetlerine tek bir şifreyle ulaşmamızı sağlayan resmi devlet portalı hangisidir?",
                options: ["Sosyal Ağ", "e-Devlet", "Video Kanalı", "Oyun Mağazası"],
                answer: 1
            },
            {
                q: "Öğrenci sınav notları ve devamsızlık durumları hangi MEB uygulamasından öğrenilir?",
                options: ["e-Okul", "e-Nabız", "MHRS", "e-Belediye"],
                answer: 0
            },
            {
                q: "Hastanelerden online randevu almamızı sağlayan sağlık sistemi hangisidir?",
                options: ["EBA", "MHRS", "e-Okul", "ÖSYM"],
                answer: 1
            },
            {
                q: "İnternette yazışırken tamamı büyük harfle yazmak ne anlama gelir?",
                options: ["Neşeli Olmak", "Hızlı Yazmak", "Bağırmak & Kaba Davranmak", "Gizli Şifre"],
                answer: 2
            }
        ]
    }
};
