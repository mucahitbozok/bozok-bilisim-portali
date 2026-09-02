// ==========================================
// 2. Hafta: Bilişim Teknolojilerinin Etkileri ve Dijital Sağlık
// Tam İnteraktif Ders Materyalleri ve Oyun Veritabanı
// Hazırlayan: Öğretmen Bozok
// ==========================================

window.WEEK2_CONTENT = {
    weekInfo: {
        weekNumber: 2,
        title: "Bilişim Teknolojilerinin Etkileri ve Dijital Sağlık",
        theme: "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        learningGoals: [
            "Bilişim teknolojilerinin birey ve toplum üzerindeki olumlu ve olumsuz etkilerini ayırt edebileceğim.",
            "Ekran başında beden sağlığımızı korumak için 20-20-20 ve 90 derece ergonomi kurallarını uygulayabileceğim.",
            "Teknoloji bağımlılığının belirtilerini tanıyıp sağlıklı bir dijital denge kurabileceğim.",
            "Fiziksel güvenlik önlemlerini (kablo, priz ve şarj güvenliği) doğru şekilde açıklayabileceğim."
        ],
        images: {
            konu: "1.2 konu.png",
            soru: "1.2 soru.png",
            cevap: "1.2 cevap.png"
        }
    },

    // 📄 1. HAFTALIK ÇALIŞMA KAĞITLARI & CEVAP ANAHTARI BELGELERİ
    worksheetDocs: {
        images: {
            konu: "1.2 konu.png",
            soru: "1.2 soru.png",
            cevap: "1.2 cevap.png"
        },
        konuHtml: `
        <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-indigo-500/50 shadow-2xl space-y-6">
            <!-- Belge Başlığı -->
            <div class="border-b-2 border-indigo-500/40 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                    <span class="px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black rounded-lg text-xs tracking-wider uppercase">1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri</span>
                    <h1 class="text-2xl sm:text-3xl font-black text-white mt-1">2. HAFTA: BİLİŞİM TEKNOLOJİLERİNİN ETKİLERİ VE DİJİTAL SAĞLIK</h1>
                    <p class="text-xs text-indigo-200 font-semibold">T.C. Millî Eğitim Bakanlığı 5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi</p>
                </div>
                <div class="text-right text-xs text-yellow-300 font-bold bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <div>👨‍🏫 Öğretmen: Bozok</div>
                    <div>🎯 Kazanım: BTY.5.1.2</div>
                </div>
            </div>

            <!-- Konu Özeti Kartı -->
            <div class="bg-indigo-950/60 rounded-2xl p-5 border border-indigo-400/30 space-y-3">
                <h3 class="text-lg font-bold text-yellow-300 flex items-center gap-2">
                    <i class="fa-solid fa-book-open text-indigo-400"></i> Bu Hafta Ne Öğreniyoruz?
                </h3>
                <p class="text-sm text-indigo-100 leading-relaxed">
                    Teknoloji hayatımızı kolaylaştıran harika bir araçtır; ancak bilinçsiz ve kontrolsüz kullanıldığında beden ve ruh sağlığımızı olumsuz etkileyebilir. Bu hafta teknolojinin olumlu ve olumsuz yönlerini, teknoloji bağımlılığından korunma yollarını, 20-20-20 göz sağlığı kuralını ve ergonomik oturuş ilkelerini öğreniyoruz.
                </p>
            </div>

            <!-- Karşılaştırma Tablosu: Olumlu vs Olumsuz Etkiler -->
            <div class="space-y-3">
                <h3 class="text-base font-bold text-emerald-400 flex items-center gap-2">
                    <i class="fa-solid fa-scale-balanced text-yellow-400"></i> Teknolojinin İki Yüzü: Olumlu ve Olumsuz Etkiler
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <!-- Olumlu Etkiler -->
                    <div class="p-4 bg-emerald-950/40 rounded-2xl border border-emerald-500/40 space-y-2.5">
                        <div class="font-black text-emerald-300 flex items-center gap-2 text-sm pb-1 border-b border-emerald-500/30">
                            <i class="fa-solid fa-thumbs-up"></i> Olumlu Etkiler (Faydaları)
                        </div>
                        <ul class="space-y-1.5 text-emerald-100">
                            <li class="flex items-start gap-2"><i class="fa-solid fa-check text-emerald-400 mt-1 shrink-0"></i><span><strong>Bilgiye Hızlı Erişim:</strong> Kütüphanelere gitmeden saniyeler içinde araştırma yapabilme.</span></li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-check text-emerald-400 mt-1 shrink-0"></i><span><strong>Anlık İletişim:</strong> Dünyanın öbür ucundaki sevdiklerimizle görüntülü konuşabilme.</span></li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-check text-emerald-400 mt-1 shrink-0"></i><span><strong>Eğitimde Kolaylık:</strong> EBA, akıllı tahta ve simülasyonlarla zengin ders işleme.</span></li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-check text-emerald-400 mt-1 shrink-0"></i><span><strong>Zaman & Maliyet Tasarrufu:</strong> Fatura, alışveriş ve bankacılık işlemlerini tek tıkla tamamlama.</span></li>
                        </ul>
                    </div>

                    <!-- Olumsuz Etkiler -->
                    <div class="p-4 bg-rose-950/40 rounded-2xl border border-rose-500/40 space-y-2.5">
                        <div class="font-black text-rose-300 flex items-center gap-2 text-sm pb-1 border-b border-rose-500/30">
                            <i class="fa-solid fa-thumbs-down"></i> Olumsuz Etkiler (Zararları)
                        </div>
                        <ul class="space-y-1.5 text-rose-100">
                            <li class="flex items-start gap-2"><i class="fa-solid fa-triangle-exclamation text-rose-400 mt-1 shrink-0"></i><span><strong>Hareketsizlik ve Obezite:</strong> Saatlerce oturmaktan kaynaklanan fiziksel sağlık sorunları.</span></li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-triangle-exclamation text-rose-400 mt-1 shrink-0"></i><span><strong>Duruş Bozuklukları (Text Neck):</strong> Telefona sürekli eğik bakmaktan oluşan boyun ve omurga eğriliği.</span></li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-triangle-exclamation text-rose-400 mt-1 shrink-0"></i><span><strong>Göz Yorgunluğu & Kuruluğu:</strong> Ekrana uzun süre bakınca göz kırpma sayısının azalması.</span></li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-triangle-exclamation text-rose-400 mt-1 shrink-0"></i><span><strong>Sosyal İçe Kapanma & Bağımlılık:</strong> Gerçek hayattaki arkadaşlıklardan ve aileden kopma.</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Dijital Sağlığın 2 Temel Kuralı: 20-20-20 ve Ergonomi -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-4 bg-slate-800/90 rounded-2xl border border-indigo-500/30 space-y-2">
                    <div class="font-bold text-yellow-300 flex items-center gap-2 text-sm">
                        <i class="fa-solid fa-eye text-cyan-400"></i> 20-20-20 Göz Sağlığı Kuralı
                    </div>
                    <p class="text-xs text-slate-300 leading-relaxed">
                        Her <strong>20 dakikada bir</strong>, en az <strong>20 saniye</strong> boyunca, yaklaşık <strong>20 fit (6 metre)</strong> uzağa bakarak göz kaslarımızı gevşetmeli ve gözlerimizi bilinçli olarak kırpmalıyız.
                    </p>
                </div>
                <div class="p-4 bg-slate-800/90 rounded-2xl border border-indigo-500/30 space-y-2">
                    <div class="font-bold text-yellow-300 flex items-center gap-2 text-sm">
                        <i class="fa-solid fa-chair text-emerald-400"></i> Doğru Duruş (90 Derece Kuralı)
                    </div>
                    <p class="text-xs text-slate-300 leading-relaxed">
                        Kollar, dirsekler ve dizler <strong>90 derecelik</strong> dik açıda olmalı; ayaklar yere tam basmalı ve ekranın üst kenarı <strong>göz hizasında</strong> (50-70 cm uzaklıkta) bulunmalıdır.
                    </p>
                </div>
            </div>

            <!-- Teknoloji Dedektifi Görevi -->
            <div class="bg-gradient-to-r from-amber-950/70 to-purple-950/70 rounded-2xl p-5 border-2 border-yellow-500/40 space-y-2">
                <div class="flex items-center gap-2 text-yellow-300 font-bold text-sm">
                    <i class="fa-solid fa-user-secret text-lg"></i> TEKNOLOJİ DEDEKTİFİ GÖREVİ 🔍
                </div>
                <p class="text-xs sm:text-sm text-amber-100">
                    Bu akşam ailene <strong>20-20-20 kuralını</strong> öğret ve birlikte 20 saniyelik göz molası verin. Ardından evdeki bilgisayar/çalışma masasının ergonomisini inceleyerek sandalyenin ve ekranın açısını 90 derece kuralına göre ayarla!
                </p>
            </div>

            <!-- Alt Bilgi Notu -->
            <div class="pt-3 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-400">
                <span>5. Sınıf Bilişim Teknolojileri Çalışma Kağıdı • 2. Hafta</span>
                <span class="font-bold text-yellow-400">Öğretmen Bozok • Sayfa 1/1</span>
            </div>
        </div>
        `,

        soruHtml: `
        <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-blue-500/50 shadow-2xl space-y-6">
            <!-- Belge Başlığı -->
            <div class="border-b-2 border-blue-500/40 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                    <span class="px-3 py-1 bg-blue-500/30 text-blue-300 font-black rounded-lg text-xs tracking-wider uppercase">2. Hafta Pekiştirme Etkinliği</span>
                    <h1 class="text-2xl sm:text-3xl font-black text-white mt-1">BİLİŞİM TEKNOLOJİLERİNİN ETKİLERİ VE DİJİTAL SAĞLIK - ÇALIŞMA SORULARI</h1>
                    <p class="text-xs text-blue-200 font-semibold">Adı Soyadı: .................................................... Sınıf / No: .......... / ..........</p>
                </div>
                <div class="text-right text-xs text-yellow-300 font-bold bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <div>👨‍🏫 Öğretmen: Bozok</div>
                    <div>⭐ Puan: ......... / 100</div>
                </div>
            </div>

            <!-- 1. Etkinlik: Kavram Eşleştirme (20 Puan) -->
            <div class="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 space-y-3">
                <h3 class="text-sm font-bold text-blue-300 flex items-center gap-2">
                    <span class="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs">1</span>
                    AŞAĞIDAKİ KAVRAMLARI UYGUN AÇIKLAMALARIYLA EŞLEŞTİRİNİZ (4x5 = 20 Puan)
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div class="p-2.5 bg-slate-750 rounded-xl border border-slate-700 flex items-center justify-between">
                        <span class="font-bold text-yellow-300">1. 20-20-20 Kuralı</span>
                        <span class="text-slate-300">( &nbsp; ) Ekrandan yayılan ve uyku hormonunu bozan ışık</span>
                    </div>
                    <div class="p-2.5 bg-slate-750 rounded-xl border border-slate-700 flex items-center justify-between">
                        <span class="font-bold text-yellow-300">2. Text Neck (Metin Boynu)</span>
                        <span class="text-slate-300">( &nbsp; ) Her 20 dakikada 20 saniye 6 metre uzağa bakmak</span>
                    </div>
                    <div class="p-2.5 bg-slate-750 rounded-xl border border-slate-700 flex items-center justify-between">
                        <span class="font-bold text-yellow-300">3. Mavi Işık</span>
                        <span class="text-slate-300">( &nbsp; ) Sanal dünya ile gerçek yaşam süresini dengeleme</span>
                    </div>
                    <div class="p-2.5 bg-slate-750 rounded-xl border border-slate-700 flex items-center justify-between">
                        <span class="font-bold text-yellow-300">4. Dijital Denge</span>
                        <span class="text-slate-300">( &nbsp; ) Telefona sürekli eğik bakmaktan oluşan boyun ağrısı</span>
                    </div>
                </div>
            </div>

            <!-- 2. Etkinlik: Doğru / Yanlış (25 Puan) -->
            <div class="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 space-y-3">
                <h3 class="text-sm font-bold text-emerald-300 flex items-center gap-2">
                    <span class="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs">2</span>
                    İFADELERİN BAŞINA DOĞRU İSE (D), YANLIŞ İSE (Y) YAZINIZ (5x5 = 25 Puan)
                </h3>
                <div class="space-y-2 text-xs sm:text-sm">
                    <div class="p-2.5 bg-slate-750 rounded-xl border border-slate-700 flex items-center gap-3">
                        <span class="w-8 h-8 rounded-lg bg-slate-900 border border-slate-600 font-bold text-yellow-400 flex items-center justify-center shrink-0">( &nbsp; )</span>
                        <span>1. Bilgisayar ekranının üst kenarı göz hizamızda olmalı ve ekran bir kol boyu uzakta durmalıdır.</span>
                    </div>
                    <div class="p-2.5 bg-slate-750 rounded-xl border border-slate-700 flex items-center gap-3">
                        <span class="w-8 h-8 rounded-lg bg-slate-900 border border-slate-600 font-bold text-yellow-400 flex items-center justify-center shrink-0">( &nbsp; )</span>
                        <span>2. Akşam yatmadan hemen önce telefonla oynamak uykuya dalmayı kolaylaştırır ve derin uyku sağlar.</span>
                    </div>
                    <div class="p-2.5 bg-slate-750 rounded-xl border border-slate-700 flex items-center gap-3">
                        <span class="w-8 h-8 rounded-lg bg-slate-900 border border-slate-600 font-bold text-yellow-400 flex items-center justify-center shrink-0">( &nbsp; )</span>
                        <span>3. Ekrana uzun süre odaklandığımızda göz kırpma sıklığımız azalır, bu da göz kuruluğuna yol açar.</span>
                    </div>
                    <div class="p-2.5 bg-slate-750 rounded-xl border border-slate-700 flex items-center gap-3">
                        <span class="w-8 h-8 rounded-lg bg-slate-900 border border-slate-600 font-bold text-yellow-400 flex items-center justify-center shrink-0">( &nbsp; )</span>
                        <span>4. Ekrandan uzak kalındığında aşırı huzursuzluk, öfke ve yoksunluk hissetmek teknoloji bağımlılığı belirtisidir.</span>
                    </div>
                    <div class="p-2.5 bg-slate-750 rounded-xl border border-slate-700 flex items-center gap-3">
                        <span class="w-8 h-8 rounded-lg bg-slate-900 border border-slate-600 font-bold text-yellow-400 flex items-center justify-center shrink-0">( &nbsp; )</span>
                        <span>5. Islak ellerle priz ve kablolara dokunmak veya cihazı yastık altında şarj etmek tamamen güvenlidir.</span>
                    </div>
                </div>
            </div>

            <!-- 3. Etkinlik: Çoktan Seçmeli Test (40 Puan) -->
            <div class="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 space-y-4">
                <h3 class="text-sm font-bold text-purple-300 flex items-center gap-2">
                    <span class="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs">3</span>
                    ÇOKTAN SEÇMELİ DEĞERLENDİRME TESTİ (4x10 = 40 Puan)
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700 space-y-2">
                        <div class="text-xs font-bold text-white"><span class="text-purple-400 font-black mr-1">1.</span> 20-20-20 kuralında 20 saniye boyunca nereye bakılmalıdır?</div>
                        <div class="space-y-1 text-xs">
                            <div class="p-1.5 bg-slate-800 rounded border border-slate-700">A) Klavyeye</div>
                            <div class="p-1.5 bg-slate-800 rounded border border-slate-700">B) En az 6 metre (20 fit) uzağa</div>
                            <div class="p-1.5 bg-slate-800 rounded border border-slate-700">C) Ekrana daha yakından</div>
                            <div class="p-1.5 bg-slate-800 rounded border border-slate-700">D) Tavandaki lambaya</div>
                        </div>
                    </div>

                    <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700 space-y-2">
                        <div class="text-xs font-bold text-white"><span class="text-purple-400 font-black mr-1">2.</span> Aşağıdakilerden hangisi teknoloji bağımlılığının bir belirtisidir?</div>
                        <div class="space-y-1 text-xs">
                            <div class="p-1.5 bg-slate-800 rounded border border-slate-700">A) Ekran başında zaman kontrolünü tamamen kaybetmek</div>
                            <div class="p-1.5 bg-slate-800 rounded border border-slate-700">B) Derslerini zamanında bitirip spor yapmak</div>
                            <div class="p-1.5 bg-slate-800 rounded border border-slate-700">C) Günde sadece 1 saat araştırma yapmak</div>
                            <div class="p-1.5 bg-slate-800 rounded border border-slate-700">D) Ailesiyle birlikte akşam sohbet etmek</div>
                        </div>
                    </div>

                    <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700 space-y-2">
                        <div class="text-xs font-bold text-white"><span class="text-purple-400 font-black mr-1">3.</span> Bilgisayar başında oturan Selin'in sırt ağrısı çekmemesi için hangisini yapması YANLIŞTIR?</div>
                        <div class="space-y-1 text-xs">
                            <div class="p-1.5 bg-slate-800 rounded border border-slate-700">A) Sırtını koltuğa dik yaslamak</div>
                            <div class="p-1.5 bg-slate-800 rounded border border-slate-700">B) Dizlerini 90 derecelik açıda tutmak</div>
                            <div class="p-1.5 bg-slate-800 rounded border border-slate-700">C) Sandalyede öne doğru kamburlaşarak oturmak</div>
                            <div class="p-1.5 bg-slate-800 rounded border border-slate-700">D) Ayaklarını yere tam basmak</div>
                        </div>
                    </div>

                    <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700 space-y-2">
                        <div class="text-xs font-bold text-white"><span class="text-purple-400 font-black mr-1">4.</span> Gece geç saatlerde telefona bakmanın uyku düzenini bozmasının ana sebebi nedir?</div>
                        <div class="space-y-1 text-xs">
                            <div class="p-1.5 bg-slate-800 rounded border border-slate-700">A) Ekranın yaydığı mavi ışığın melatonin hormonunu engellemesi</div>
                            <div class="p-1.5 bg-slate-800 rounded border border-slate-700">B) Telefonun şarjının çabuk bitmesi</div>
                            <div class="p-1.5 bg-slate-800 rounded border border-slate-700">C) Ekranın aşırı soğuk olması</div>
                            <div class="p-1.5 bg-slate-800 rounded border border-slate-700">D) Hoparlörün çok yüksek ses çıkarması</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 4. Etkinlik: Düşün ve Yaz - Teknoloji Senaryosu (15 Puan) -->
            <div class="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 space-y-2">
                <h3 class="text-sm font-bold text-amber-300 flex items-center gap-2">
                    <span class="w-6 h-6 rounded-lg bg-amber-600 text-white flex items-center justify-center text-xs">4</span>
                    DÜŞÜN VE YAZ: TEKNOLOJİ DANIŞMANI OL! (15 Puan)
                </h3>
                <p class="text-xs text-slate-200">
                    <strong>Senaryo:</strong> Arkadaşın Can, okuldan geldikten sonra gece yarısına kadar aralıksız oyun oynuyor, yemeklerini bilgisayar başında yiyor ve sabahları boyun ağrısıyla uyanıyor. Can'a dijital sağlığını geri kazanması için <strong>3 önemli tavsiye</strong> yazınız:
                </p>
                <div class="p-3 bg-slate-900/80 rounded-xl border border-dashed border-slate-600 text-xs text-slate-400 min-h-[60px] space-y-1">
                    <div>1. ................................................................................................................................................................</div>
                    <div>2. ................................................................................................................................................................</div>
                    <div>3. ................................................................................................................................................................</div>
                </div>
            </div>
        </div>
        `,

        cevapHtml: `
        <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-emerald-500/50 shadow-2xl space-y-6">
            <!-- Belge Başlığı -->
            <div class="border-b-2 border-emerald-500/40 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                    <span class="px-3 py-1 bg-emerald-500/30 text-emerald-300 font-black rounded-lg text-xs tracking-wider uppercase">Resmi Çözüm Anahtarı</span>
                    <h1 class="text-2xl sm:text-3xl font-black text-white mt-1">2. HAFTA: BİLİŞİM TEKNOLOJİLERİNİN ETKİLERİ VE DİJİTAL SAĞLIK - CEVAP ANAHTARI</h1>
                    <p class="text-xs text-emerald-200 font-semibold">Öğretmen Bozok Çözümlü Rehber</p>
                </div>
                <div class="text-right text-xs text-yellow-300 font-bold bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <div>✅ Tam Puan: 100 Puan</div>
                    <div>🎯 Kazanım: BTY.5.1.2</div>
                </div>
            </div>

            <!-- 1. Etkinlik Cevapları -->
            <div class="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 space-y-2">
                <h3 class="text-sm font-bold text-emerald-400">1. ETKİNLİK EŞLEŞTİRME ÇÖZÜMLERİ (20 Puan)</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div class="p-2.5 bg-emerald-950/40 rounded-xl border border-emerald-500/30 flex items-center justify-between text-emerald-200">
                        <span>1. 20-20-20 Kuralı</span> <span class="font-bold text-yellow-300">➔ 20 dakikada bir 6 metre uzağa bakmak</span>
                    </div>
                    <div class="p-2.5 bg-emerald-950/40 rounded-xl border border-emerald-500/30 flex items-center justify-between text-emerald-200">
                        <span>2. Text Neck (Metin Boynu)</span> <span class="font-bold text-yellow-300">➔ Eğik bakmaktan oluşan boyun ağrısı</span>
                    </div>
                    <div class="p-2.5 bg-emerald-950/40 rounded-xl border border-emerald-500/30 flex items-center justify-between text-emerald-200">
                        <span>3. Mavi Işık</span> <span class="font-bold text-yellow-300">➔ Uyku hormonunu (melatonin) bozan ışık</span>
                    </div>
                    <div class="p-2.5 bg-emerald-950/40 rounded-xl border border-emerald-500/30 flex items-center justify-between text-emerald-200">
                        <span>4. Dijital Denge</span> <span class="font-bold text-yellow-300">➔ Sanal ile gerçek yaşamı dengeleme</span>
                    </div>
                </div>
            </div>

            <!-- 2. Etkinlik Cevapları -->
            <div class="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 space-y-2">
                <h3 class="text-sm font-bold text-emerald-400">2. ETKİNLİK DOĞRU / YANLIŞ ÇÖZÜM VE AÇIKLAMALARI (25 Puan)</h3>
                <div class="space-y-2 text-xs">
                    <div class="p-2.5 bg-slate-750 rounded-xl border border-slate-700 flex items-start gap-3">
                        <span class="px-2 py-0.5 font-black rounded text-xs bg-emerald-600 text-white shrink-0">1. DOĞRU</span>
                        <div><div class="text-white font-medium">Ekranın üst kenarı göz hizasında ve bir kol boyu uzakta olmalıdır.</div><div class="text-slate-400 mt-0.5">💡 Doğru! Bu pozisyon boyun kaslarımızın zorlanmasını engeller.</div></div>
                    </div>
                    <div class="p-2.5 bg-slate-750 rounded-xl border border-slate-700 flex items-start gap-3">
                        <span class="px-2 py-0.5 font-black rounded text-xs bg-rose-600 text-white shrink-0">2. YANLIŞ</span>
                        <div><div class="text-white font-medium">Yatmadan hemen önce telefonla oynamak uykuya dalmayı kolaylaştırır.</div><div class="text-slate-400 mt-0.5">💡 Yanlış! Mavi ışık melatonin hormonunu baskılar ve uykuya dalmayı güçleştirir.</div></div>
                    </div>
                    <div class="p-2.5 bg-slate-750 rounded-xl border border-slate-700 flex items-start gap-3">
                        <span class="px-2 py-0.5 font-black rounded text-xs bg-emerald-600 text-white shrink-0">3. DOĞRU</span>
                        <div><div class="text-white font-medium">Ekrana uzun süre bakınca göz kırpma sayısı azalır ve göz kuruluğu oluşur.</div><div class="text-slate-400 mt-0.5">💡 Doğru! Normalde dakikada 15-20 kez kırpan göz, ekrana bakarken 5-7 keze kadar düşer.</div></div>
                    </div>
                    <div class="p-2.5 bg-slate-750 rounded-xl border border-slate-700 flex items-start gap-3">
                        <span class="px-2 py-0.5 font-black rounded text-xs bg-emerald-600 text-white shrink-0">4. DOĞRU</span>
                        <div><div class="text-white font-medium">Ekrandan uzak kalınca aşırı öfke ve yoksunluk hissetmek bağımlılık belirtisidir.</div><div class="text-slate-400 mt-0.5">💡 Doğru! Yoksunluk ve zaman kontrolünü kaybetmek bağımlılığın en temel işaretidir.</div></div>
                    </div>
                    <div class="p-2.5 bg-slate-750 rounded-xl border border-slate-700 flex items-start gap-3">
                        <span class="px-2 py-0.5 font-black rounded text-xs bg-rose-600 text-white shrink-0">5. YANLIŞ</span>
                        <div><div class="text-white font-medium">Islak elle prizlere dokunmak veya yastık altında şarj etmek güvenlidir.</div><div class="text-slate-400 mt-0.5">💡 Yanlış! Islak el elektrik çarpmasına, yastık altı şarj ise aşırı ısınma ve yangın tehlikesine neden olur.</div></div>
                    </div>
                </div>
            </div>

            <!-- 3. Etkinlik Cevapları -->
            <div class="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 space-y-2">
                <h3 class="text-sm font-bold text-emerald-400">3. ÇOKTAN SEÇMELİ TEST CEVAP VE AÇIKLAMALARI (40 Puan)</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                    <div class="p-2.5 bg-slate-750 rounded-xl border border-slate-700 space-y-1">
                        <div class="font-bold text-white"><span class="text-emerald-400 mr-1">1. Soru:</span> Doğru Cevap: <span class="text-yellow-300 font-black">[B] En az 6 metre (20 fit) uzağa</span></div>
                        <div class="text-slate-300 text-[11px]">💡 20-20-20 kuralında 20 fit (yaklaşık 6 metre) uzağa bakılarak göz kasları dinlendirilir.</div>
                    </div>
                    <div class="p-2.5 bg-slate-750 rounded-xl border border-slate-700 space-y-1">
                        <div class="font-bold text-white"><span class="text-emerald-400 mr-1">2. Soru:</span> Doğru Cevap: <span class="text-yellow-300 font-black">[A] Ekran başında zaman kontrolünü tamamen kaybetmek</span></div>
                        <div class="text-slate-300 text-[11px]">💡 Zamanı unutmak ve ekrandan ayrılamamak teknoloji bağımlılığının kanıtıdır.</div>
                    </div>
                    <div class="p-2.5 bg-slate-750 rounded-xl border border-slate-700 space-y-1">
                        <div class="font-bold text-white"><span class="text-emerald-400 mr-1">3. Soru:</span> Doğru Cevap: <span class="text-yellow-300 font-black">[C] Sandalyede öne doğru kamburlaşarak oturmak</span></div>
                        <div class="text-slate-300 text-[11px]">💡 Kamburlaşmak omurgaya binen yükü artırır, sırtı dik yaslamak gerekir.</div>
                    </div>
                    <div class="p-2.5 bg-slate-750 rounded-xl border border-slate-700 space-y-1">
                        <div class="font-bold text-white"><span class="text-emerald-400 mr-1">4. Soru:</span> Doğru Cevap: <span class="text-yellow-300 font-black">[A] Ekranın mavi ışığının melatonin hormonunu engellemesi</span></div>
                        <div class="text-slate-300 text-[11px]">💡 Mavi ışık beyne "hâlâ gündüz" sinyali vererek uyku hormonunu durdurur.</div>
                    </div>
                </div>
            </div>

            <!-- 4. Etkinlik Örnek Çözümü -->
            <div class="p-4 bg-amber-950/40 rounded-2xl border border-amber-500/40 text-xs text-amber-200 space-y-1">
                <div class="font-bold text-yellow-300">4. DÜŞÜN VE YAZ ÖRNEK CEVABI (15 Puan):</div>
                <p>1. Günlük oyun süresine en fazla 1-1.5 saat sınırı koymalı ve süresi bitince bilgisayarı kapatmalıdır.</p>
                <p>2. Her 20-30 dakikada bir ayağa kalkıp esneme hareketleri yapmalı ve 20-20-20 kuralıyla gözlerini dinlendirmelidir.</p>
                <p>3. Yemeklerini masada ailesiyle yemeli, akşam yatmadan 1 saat önce tüm ekranları kapatıp kitap okumalıdır.</p>
            </div>

            <!-- Öğretmen Değerlendirme Notu -->
            <div class="p-4 bg-emerald-950/60 rounded-2xl border border-emerald-400/40 text-xs text-emerald-200 flex items-center gap-3">
                <i class="fa-solid fa-medal text-2xl text-yellow-400 shrink-0"></i>
                <div>
                    <strong>Öğretmen Bozok'un Değerlendirmesi:</strong> 2. Hafta ders etkinliklerini tamamlayarak dijital sağlık kurallarını başarıyla kavradınız. Artık birer Dijital Sağlık Elçisisiniz!
                </div>
            </div>
        </div>
        `
    },

    // 🖥️ 2. İNTERAKTİF DERS SUNUSU (8 Tam Slayt)
    // 🖥️ 2. İNTERAKTİF DERS SUNUSU (10 Tam Akıllı Tahta Slaytı)
    // 5. Sınıf Seviyesine ve İnfografiğe %100 Uyumlu
    // 🖥️ 2. İNTERAKTİF DERS SUNUSU (10 Tam Akıllı Tahta Slaytı)
    // 5. Sınıf Seviyesine ve İnfografiğe %100 Uyumlu
// 🖥️ 2. HAFTA ETKİLEŞİMLİ DERS SUNUSU (Akıllı Tahta Modu - 25 Slayt)
    // 🖥️ 2. HAFTA ETKİLEŞİMLİ DERS SUNUSU (Akıllı Tahta Modu - 25 Slayt)
    // 🖥️ 2. HAFTA ETKİLEŞİMLİ DERS SUNUSU (Akıllı Tahta Modu - 25 Slayt - Resimli Görsel Tasarım)
    slides: [
        // SLAYT 1: KAPAK
        {
            id: 1,
            title: "5. SINIF BİLİŞİM TEKNOLOJİLERİ",
            subtitle: "2. Hafta Ders Sunusu",
            topic: "KAZANIM: BTY.5.1.2",
            icon: "fa-solid fa-chalkboard-user",
            bgColor: "from-blue-700 via-indigo-800 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <span class="px-4 py-1.5 bg-yellow-400/20 text-yellow-300 font-extrabold text-xs uppercase tracking-widest rounded-full border border-yellow-400/40">
                            2. HAFTA • DERS SUNUSU
                        </span>
                        <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                            Bilişim Teknolojilerinin Etkileri ve Dijital Sağlık
                        </h1>
                        <p class="text-base sm:text-lg text-indigo-200 font-medium">
                            Kazanım: <span class="text-yellow-300 font-black">BTY.5.1.2</span>
                        </p>
                        <div class="pt-2">
                            <span class="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-yellow-300 font-bold text-sm shadow-lg">
                                <i class="fa-solid fa-graduation-cap text-lg"></i>
                                <span>Öğretmen Bozok • Bozok Bilişim Portalı</span>
                            </span>
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <div class="relative group rounded-3xl overflow-hidden border-4 border-indigo-400/40 shadow-2xl bg-slate-900/50">
                            <img src="assets/slides/dijital_saglik_durus.jpg" alt="Dijital Sağlık" class="w-full max-h-72 object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                                <span class="text-xs font-bold text-yellow-300">🌿 Sağlıklı ve Bilinçli Teknoloji Kullanımı</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 2: DERSİN KAZANIMI
        {
            id: 2,
            title: "Dersimizin Kazanımı 🎯",
            subtitle: "Bugün Ne Öğreneceğiz?",
            topic: "Milli Eğitim Bakanlığı Müfredatı",
            icon: "fa-solid fa-bullseye",
            bgColor: "from-indigo-700 via-purple-800 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-7 space-y-4 text-left">
                        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 font-black text-xs uppercase tracking-wider">
                            <i class="fa-solid fa-award"></i> BTY.5.1.2
                        </div>
                        <div class="bg-white/10 backdrop-blur-md rounded-3xl p-6 border-2 border-indigo-400/40 shadow-xl space-y-3">
                            <h3 class="text-xl sm:text-2xl font-black text-white leading-snug">
                                “Bilişim teknolojilerinin birey ve toplum üzerindeki etkilerini özetleyebilme.”
                            </h3>
                            <p class="text-sm text-indigo-100 font-medium">
                                Bu dersimizde teknolojinin getirdiği olumlu ve olumsuz etkileri inceleyecek, yanlış ve fazla kullanımın sağlığımız üzerindeki sonuçlarını öğreneceğiz.
                            </p>
                        </div>
                        <div class="grid grid-cols-3 gap-3">
                            <div class="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                                <span class="text-xs font-bold text-emerald-300 block">Olumlu Etkiler</span>
                                <span class="text-[10px] text-slate-300">5 temel fayda</span>
                            </div>
                            <div class="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                                <span class="text-xs font-bold text-rose-300 block">Olumsuz Etkiler</span>
                                <span class="text-[10px] text-slate-300">5 temel risk</span>
                            </div>
                            <div class="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                                <span class="text-xs font-bold text-cyan-300 block">Dijital Sağlık</span>
                                <span class="text-[10px] text-slate-300">5 sağlık problemi</span>
                            </div>
                        </div>
                    </div>
                    <div class="md:col-span-5 flex justify-center">
                        <img src="assets/slides/tech_discovery.jpg" alt="Ders Kazanımı" class="rounded-3xl border-4 border-indigo-400/30 shadow-2xl max-h-64 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 3: TEKNOLOJİNİN ETKİLERİ
        {
            id: 3,
            title: "Teknolojinin Etkileri ⚖️",
            subtitle: "Birey ve Toplum Üzerindeki Yansımalar",
            topic: "Konunun Ana Fikri",
            icon: "fa-solid fa-scale-balanced",
            bgColor: "from-blue-700 via-indigo-800 to-slate-900",
            content: `
                <div class="max-w-4xl mx-auto space-y-6 my-auto text-center py-2">
                    <div class="space-y-1">
                        <span class="text-xs font-black uppercase text-yellow-300 tracking-widest">TEMEL BAKIŞ</span>
                        <h2 class="text-2xl sm:text-3xl font-black text-white">
                            Bilişim Teknolojileri Hayatımızı Nasıl Etkiler?
                        </h2>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        <div class="p-6 bg-emerald-950/70 border-2 border-emerald-500/50 rounded-3xl space-y-3 shadow-xl text-left">
                            <div class="w-12 h-12 bg-emerald-500 text-slate-950 rounded-2xl flex items-center justify-center text-2xl font-black">
                                <i class="fa-solid fa-thumbs-up"></i>
                            </div>
                            <h3 class="text-2xl font-black text-emerald-300">Olumlu Etkiler</h3>
                            <p class="text-sm text-emerald-100 leading-relaxed">
                                Hayatı kolaylaştıran, bilgiye hızla ulaştıran, maliyeti ve zaman kaybını azaltan faydalı yönler.
                            </p>
                        </div>
                        <div class="p-6 bg-rose-950/70 border-2 border-rose-500/50 rounded-3xl space-y-3 shadow-xl text-left">
                            <div class="w-12 h-12 bg-rose-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black">
                                <i class="fa-solid fa-triangle-exclamation"></i>
                            </div>
                            <h3 class="text-2xl font-black text-rose-300">Olumsuz Etkiler</h3>
                            <p class="text-sm text-rose-100 leading-relaxed">
                                Kontrolsüz, yanlış ve aşırı kullanımın birey ve toplum üzerinde ortaya çıkardığı zararlı yönler.
                            </p>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 4: OLUMLU ETKİLER (GENEL BAKIŞ)
        {
            id: 4,
            title: "OLUMLU ETKİLER 🌟",
            subtitle: "Bilişim Teknolojilerinin 5 Temel Katkısı",
            topic: "Faydalı Yönler",
            icon: "fa-solid fa-star",
            bgColor: "from-emerald-700 via-teal-800 to-slate-900",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 my-auto py-2">
                    <div class="text-center space-y-1">
                        <span class="text-xs font-black uppercase text-yellow-300 tracking-widest">KAYNAKTAKİ 5 OLUMLU ETKİ</span>
                        <h3 class="text-2xl sm:text-3xl font-black text-white">Teknolojinin Sağladığı Kolaylıklar</h3>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
                        <div class="p-4 bg-slate-900/90 rounded-2xl border border-emerald-500/40 text-center space-y-2 shadow-xl">
                            <div class="w-12 h-12 bg-emerald-500/20 text-emerald-300 rounded-xl flex items-center justify-center text-2xl mx-auto"><i class="fa-solid fa-globe"></i></div>
                            <h4 class="font-black text-sm text-emerald-300">Bilgiye Kolay Ulaşma</h4>
                        </div>
                        <div class="p-4 bg-slate-900/90 rounded-2xl border border-emerald-500/40 text-center space-y-2 shadow-xl">
                            <div class="w-12 h-12 bg-teal-500/20 text-teal-300 rounded-xl flex items-center justify-center text-2xl mx-auto"><i class="fa-solid fa-coins"></i></div>
                            <h4 class="font-black text-sm text-teal-300">Maliyeti Azaltma</h4>
                        </div>
                        <div class="p-4 bg-slate-900/90 rounded-2xl border border-emerald-500/40 text-center space-y-2 shadow-xl">
                            <div class="w-12 h-12 bg-yellow-500/20 text-yellow-300 rounded-xl flex items-center justify-center text-2xl mx-auto"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
                            <h4 class="font-black text-sm text-yellow-300">Hayatı Kolaylaştırma</h4>
                        </div>
                        <div class="p-4 bg-slate-900/90 rounded-2xl border border-emerald-500/40 text-center space-y-2 shadow-xl">
                            <div class="w-12 h-12 bg-cyan-500/20 text-cyan-300 rounded-xl flex items-center justify-center text-2xl mx-auto"><i class="fa-solid fa-paper-plane"></i></div>
                            <h4 class="font-black text-sm text-cyan-300">Hızlı Haberleşme</h4>
                        </div>
                        <div class="p-4 bg-slate-900/90 rounded-2xl border border-emerald-500/40 text-center space-y-2 shadow-xl">
                            <div class="w-12 h-12 bg-blue-500/20 text-blue-300 rounded-xl flex items-center justify-center text-2xl mx-auto"><i class="fa-solid fa-stopwatch"></i></div>
                            <h4 class="font-black text-sm text-blue-300">Zamandan Tasarruf</h4>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 5: BİLGİYE KOLAY ULAŞMA
        {
            id: 5,
            title: "1. BİLGİYE KOLAY ULAŞMA 🌐",
            subtitle: "Olumlu Etkiler",
            topic: "1. Olumlu Etki",
            icon: "fa-solid fa-book-open-reader",
            bgColor: "from-blue-600 via-cyan-700 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg font-black text-xs uppercase tracking-wider">1. OLUMLU ETKİ</span>
                        <h3 class="text-2xl sm:text-3xl font-black text-white">
                            Bilgiye Kolay Ulaşmayı Sağlaması
                        </h3>
                        <p class="text-sm sm:text-base text-blue-100 leading-relaxed font-medium">
                            Bilişim teknolojileri sayesinde aradığımız bir konuyu, ders kaynaklarını, bilimsel araştırmaları ve ansiklopedi bilgilerini saniyeler içinde ekranımızda bulabiliriz.
                        </p>
                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-blue-500/30 text-xs text-slate-200">
                            📚 Eskiden kütüphanelerde günler süren bilgi arama süreci, günümüzde tek bir tıkla karşımıza gelmektedir.
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/bilgi_arastirma.jpg" alt="Bilgiye Kolay Ulaşma" class="rounded-3xl border-4 border-blue-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 6: MALİYETİ AZALTMA
        {
            id: 6,
            title: "2. MALİYETİ AZALTMA 💰",
            subtitle: "Olumlu Etkiler",
            topic: "2. Olumlu Etki",
            icon: "fa-solid fa-coins",
            bgColor: "from-teal-600 via-emerald-700 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <span class="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-lg font-black text-xs uppercase tracking-wider">2. OLUMLU ETKİ</span>
                        <h3 class="text-2xl sm:text-3xl font-black text-white">
                            Maliyeti Azaltması
                        </h3>
                        <p class="text-sm sm:text-base text-teal-100 leading-relaxed font-medium">
                            Bilişim araçları kağıt, baskı, kargo, ulaşım ve depolama harcamalarını azaltarak bireylerin ve kurumların bütçesine büyük tasarruf sağlar.
                        </p>
                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-teal-500/30 text-xs text-slate-200">
                            📄 Milyonlarca sayfa kağıt yerine dijital doküman kullanılması hem maliyeti düşürür hem de doğayı korur.
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/guvenlik_bankacilik.jpg" alt="Maliyeti Azaltma" class="rounded-3xl border-4 border-teal-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 7: HAYATI KOLAYLAŞTIRMA
        {
            id: 7,
            title: "3. HAYATI KOLAYLAŞTIRMA ✨",
            subtitle: "Olumlu Etkiler",
            topic: "3. Olumlu Etki",
            icon: "fa-solid fa-wand-magic-sparkles",
            bgColor: "from-indigo-600 via-purple-700 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <span class="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-lg font-black text-xs uppercase tracking-wider">3. OLUMLU ETKİ</span>
                        <h3 class="text-2xl sm:text-3xl font-black text-white">
                            Hayatımızı Kolaylaştırması
                        </h3>
                        <p class="text-sm sm:text-base text-indigo-100 leading-relaxed font-medium">
                            Zor, yorucu ve karmaşık işleri pratik adımlara dönüştürerek insanların günlük yaşamlarındaki yükü hafifletir ve konfor sağlar.
                        </p>
                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-indigo-500/30 text-xs text-slate-200">
                            💡 Sıra beklemeden randevu almak, evden çıkmadan resmi işlemleri halletmek hayatı kolaylaştırır.
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/teknoloji_araclar.jpg" alt="Hayatı Kolaylaştırma" class="rounded-3xl border-4 border-indigo-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 8: HIZLI HABERLEŞME
        {
            id: 8,
            title: "4. HIZLI HABERLEŞME ⚡",
            subtitle: "Olumlu Etkiler",
            topic: "4. Olumlu Etki",
            icon: "fa-solid fa-bolt",
            bgColor: "from-cyan-600 via-blue-700 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-lg font-black text-xs uppercase tracking-wider">4. OLUMLU ETKİ</span>
                        <h3 class="text-2xl sm:text-3xl font-black text-white">
                            Hızlı Haberleşmeyi Sağlaması
                        </h3>
                        <p class="text-sm sm:text-base text-cyan-100 leading-relaxed font-medium">
                            Mesafeler ne kadar uzak olursa olsun, dünyanın öteki ucundaki insanlarla anında mesajlaşma, sesli ve görüntülü bağlantı kurma imkanı sunar.
                        </p>
                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-cyan-500/30 text-xs text-slate-200">
                            🚀 Mektupların haftalarca sürdüğü dönemlerden, anında ses ve görüntü aktarabilen çağa ulaştık.
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/iletisim_ag.jpg" alt="Hızlı Haberleşme" class="rounded-3xl border-4 border-cyan-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 9: ZAMANDAN TASARRUF
        {
            id: 9,
            title: "5. ZAMANDAN TASARRUF ⏱️",
            subtitle: "Olumlu Etkiler",
            topic: "5. Olumlu Etki",
            icon: "fa-solid fa-stopwatch",
            bgColor: "from-blue-700 via-indigo-800 to-slate-900",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg font-black text-xs uppercase tracking-wider">5. OLUMLU ETKİ</span>
                        <h3 class="text-2xl sm:text-3xl font-black text-white">
                            Zamandan Tasarruf Sağlaması
                        </h3>
                        <p class="text-sm sm:text-base text-blue-100 leading-relaxed font-medium">
                            Günler veya haftalar sürebilecek hesaplamaları, banka işlemlerini, bilet alımlarını ve araştırmaları birkaç dakika içinde tamamlamamızı sağlar.
                        </p>
                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-blue-500/30 text-xs text-slate-200">
                            ⏳ Zamandan artakalan süreyi ailemize, arkadaşlarımıza ve spora ayırmamıza imkan tanır.
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/ulasim_navigasyon.jpg" alt="Zamandan Tasarruf" class="rounded-3xl border-4 border-blue-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 10: OLUMSUZ ETKİLER (GENEL BAKIŞ)
        {
            id: 10,
            title: "OLUMSUZ ETKİLER ⚠️",
            subtitle: "Bilişim Teknolojilerinin 5 Olumsuz Etkisi",
            topic: "Zararlı Yönler",
            icon: "fa-solid fa-triangle-exclamation",
            bgColor: "from-rose-700 via-red-800 to-slate-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 my-auto py-2">
                    <div class="text-center space-y-1">
                        <span class="text-xs font-black uppercase text-yellow-300 tracking-widest">KAYNAKTAKİ 5 OLUMSUZ ETKİ</span>
                        <h3 class="text-2xl sm:text-3xl font-black text-white">Teknolojinin Getirebileceği Riskler</h3>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
                        <div class="p-4 bg-slate-900/90 rounded-2xl border border-rose-500/40 text-center space-y-2 shadow-xl">
                            <div class="w-12 h-12 bg-rose-500/20 text-rose-300 rounded-xl flex items-center justify-center text-2xl mx-auto"><i class="fa-solid fa-couch"></i></div>
                            <h4 class="font-black text-sm text-rose-300">Tembelliğe Alıştırması</h4>
                        </div>
                        <div class="p-4 bg-slate-900/90 rounded-2xl border border-rose-500/40 text-center space-y-2 shadow-xl">
                            <div class="w-12 h-12 bg-orange-500/20 text-orange-300 rounded-xl flex items-center justify-center text-2xl mx-auto"><i class="fa-solid fa-user-slash"></i></div>
                            <h4 class="font-black text-sm text-orange-300">İşsizlik Artışı</h4>
                        </div>
                        <div class="p-4 bg-slate-900/90 rounded-2xl border border-rose-500/40 text-center space-y-2 shadow-xl">
                            <div class="w-12 h-12 bg-amber-500/20 text-yellow-300 rounded-xl flex items-center justify-center text-2xl mx-auto"><i class="fa-solid fa-link-slash"></i></div>
                            <h4 class="font-black text-sm text-yellow-300">Bağların Kaybolması</h4>
                        </div>
                        <div class="p-4 bg-slate-900/90 rounded-2xl border border-rose-500/40 text-center space-y-2 shadow-xl">
                            <div class="w-12 h-12 bg-red-500/20 text-red-300 rounded-xl flex items-center justify-center text-2xl mx-auto"><i class="fa-solid fa-person-falling"></i></div>
                            <h4 class="font-black text-sm text-red-300">Hareketsizlik & Obezite</h4>
                        </div>
                        <div class="p-4 bg-slate-900/90 rounded-2xl border border-rose-500/40 text-center space-y-2 shadow-xl">
                            <div class="w-12 h-12 bg-pink-500/20 text-pink-300 rounded-xl flex items-center justify-center text-2xl mx-auto"><i class="fa-solid fa-heart-crack"></i></div>
                            <h4 class="font-black text-sm text-pink-300">Sağlık Problemleri</h4>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 11: TEMBELLİĞE ALIŞTIRMASI
        {
            id: 11,
            title: "1. TEMBELLİĞE ALIŞTIRMASI 🛋️",
            subtitle: "Olumsuz Etkiler",
            topic: "1. Olumsuz Etki",
            icon: "fa-solid fa-bed",
            bgColor: "from-rose-800 via-red-900 to-slate-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <span class="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-lg font-black text-xs uppercase tracking-wider">1. OLUMSUZ ETKİ</span>
                        <h3 class="text-2xl sm:text-3xl font-black text-white">
                            İnsanları Tembelliğe Alıştırması
                        </h3>
                        <p class="text-sm sm:text-base text-rose-100 leading-relaxed font-medium">
                            Her işin teknolojiye devredilmesi, insanların fiziksel olarak hareket etme ve zihinsel olarak çaba sarf etme arzusunu zayıflatabilir.
                        </p>
                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-rose-500/30 text-xs text-slate-200">
                            ⚠️ Basit işler için bile yerinden kalkmamak veya araştırmak yerine kolaya kaçmak tembellik oluşturur.
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/oyun_bagimliligi.jpg" alt="Tembelliğe Alıştırma" class="rounded-3xl border-4 border-rose-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 12: İŞSİZLİK
        {
            id: 12,
            title: "2. İŞSİZLİK ORANININ ARTMASI 📉",
            subtitle: "Olumsuz Etkiler",
            topic: "2. Olumsuz Etki",
            icon: "fa-solid fa-user-xmark",
            bgColor: "from-orange-800 via-rose-900 to-slate-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <span class="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-lg font-black text-xs uppercase tracking-wider">2. OLUMSUZ ETKİ</span>
                        <h3 class="text-2xl sm:text-3xl font-black text-white">
                            İşsizlik Oranının Artması
                        </h3>
                        <p class="text-sm sm:text-base text-orange-100 leading-relaxed font-medium">
                            Fabrikalarda ve iş yerlerinde otomatik makinelerin ve robotların insan gücünün yerine geçmesi, bazı alanlarda işsizliğe yol açabilir.
                        </p>
                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-orange-500/30 text-xs text-slate-200">
                            ⚙️ Otomasyon yeni fırsatlar getirse de klasik insan gücüne olan ihtiyacı azaltabilir.
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/uretim_sanayi.jpg" alt="İşsizlik Riski" class="rounded-3xl border-4 border-orange-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 13: İNSANLAR ARASINDAKİ BAĞLAR
        {
            id: 13,
            title: "3. İNSANLAR ARASINDAKİ BAĞLAR 💔",
            subtitle: "Olumsuz Etkiler",
            topic: "3. Olumsuz Etki",
            icon: "fa-solid fa-link-slash",
            bgColor: "from-red-800 via-rose-950 to-slate-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <span class="px-3 py-1 bg-red-500/20 text-red-300 rounded-lg font-black text-xs uppercase tracking-wider">3. OLUMSUZ ETKİ</span>
                        <h3 class="text-xl sm:text-2xl font-black text-white">
                            “İnsanların birbiriyle olan bağının zamanla kaybolması”
                        </h3>
                        <p class="text-sm sm:text-base text-rose-100 leading-relaxed font-medium">
                            Yüz yüze konuşmak ve sohbet etmek yerine sürekli telefon ve ekranla vakit geçirmek, aile içi ve arkadaşlar arasındaki sosyal bağları zayıflatır.
                        </p>
                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-red-500/30 text-xs text-slate-200">
                            📱 Aynı ortamda otururken bile ekrana odaklanmak iletişimi ve samimiyeti koparır.
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/sosyal_baglar.jpg" alt="İnsanlar Arasındaki Bağlar" class="rounded-3xl border-4 border-red-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 14: HAREKETSİZLİK VE OBEZİTE
        {
            id: 14,
            title: "4. HAREKETSİZLİK VE OBEZİTE ⚠️",
            subtitle: "Olumsuz Etkiler",
            topic: "4. Olumsuz Etki",
            icon: "fa-solid fa-person-falling",
            bgColor: "from-rose-900 via-red-950 to-slate-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <span class="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-lg font-black text-xs uppercase tracking-wider">4. OLUMSUZ ETKİ</span>
                        <h3 class="text-xl sm:text-2xl font-black text-white">
                            “Hareketsiz ve sağlıksız beslenmeyle birlikte obezitenin artması”
                        </h3>
                        <p class="text-sm sm:text-base text-rose-100 leading-relaxed font-medium">
                            Ekran karşısında saatlerce kıpırdamadan oturmak, spordan uzak kalmak ve ekran başında atıştırmak obezite riskini artırır.
                        </p>
                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-rose-500/30 text-xs text-slate-200">
                            🏃‍♂️ Dışarıda hareketli oyunlar oynamak yerine sürekli ekranda kalmak bedeni zayıf düşürür.
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/karakter_yanlis.png" alt="Hareketsizlik" class="rounded-3xl border-4 border-rose-400/30 shadow-2xl max-h-72 object-contain bg-slate-900/70 p-4" />
                    </div>
                </div>
            `
        },

        // SLAYT 15: SAĞLIK PROBLEMLERİ
        {
            id: 15,
            title: "5. SAĞLIK PROBLEMLERİ 🩺",
            subtitle: "Olumsuz Etkiler",
            topic: "5. Olumsuz Etki",
            icon: "fa-solid fa-heart-pulse",
            bgColor: "from-red-900 via-rose-950 to-slate-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <span class="px-3 py-1 bg-red-500/20 text-red-300 rounded-lg font-black text-xs uppercase tracking-wider">5. OLUMSUZ ETKİ</span>
                        <h3 class="text-xl sm:text-2xl font-black text-white">
                            “Farklı sağlık problemlerinin ortaya çıkması”
                        </h3>
                        <p class="text-sm sm:text-base text-rose-100 leading-relaxed font-medium">
                            Teknolojinin ölçüsüz, yanlış ve kontrolsüz kullanımı vücudumuzun dengesini bozarak hem bedensel hem de ruhsal sağlık sorunlarına yol açar.
                        </p>
                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-red-500/30 text-xs text-slate-200">
                            ➡️ Şimdi dijital sağlık bölümünde bu sağlık sorunlarını tek tek inceleyelim.
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/ergonomi_karsilastirma.png" alt="Sağlık Problemleri" class="rounded-3xl border-4 border-red-400/30 shadow-2xl max-h-72 object-contain bg-slate-900/70 p-2" />
                    </div>
                </div>
            `
        },

        // SLAYT 16: TEKNOLOJİ VE SAĞLIK (ANA VURGU)
        {
            id: 16,
            title: "TEKNOLOJİ VE DİJİTAL SAĞLIK 🛡️",
            subtitle: "Önemli Uyarı",
            topic: "Dersimizin Temel İlkesi",
            icon: "fa-solid fa-shield-heart",
            bgColor: "from-indigo-800 via-purple-900 to-slate-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-7 space-y-4 text-left">
                        <div class="bg-slate-900/90 rounded-3xl p-6 border-4 border-yellow-400 shadow-2xl space-y-3">
                            <span class="px-3 py-1 bg-yellow-400/20 text-yellow-300 rounded-full font-black text-xs uppercase tracking-wider border border-yellow-400/40">
                                ANA KAYNAK CÜMLESİ
                            </span>
                            <h2 class="text-xl sm:text-2xl font-black text-white leading-relaxed">
                                “Bilgisayar ve diğer teknolojik araçların <span class="text-yellow-300 underline underline-offset-4">yanlış</span> veya <span class="text-yellow-300 underline underline-offset-4">fazla</span> kullanımı sağlık problemlerini de beraberinde getirir.”
                            </h2>
                        </div>
                        <p class="text-sm sm:text-base text-indigo-200 font-semibold">
                            Teknolojiden faydalanırken bedenimizi korumak bizim elimizdedir!
                        </p>
                    </div>
                    <div class="md:col-span-5 flex justify-center">
                        <img src="assets/slides/dijital_saglik_durus.jpg" alt="Duruş ve Sağlık" class="rounded-3xl border-4 border-yellow-400/30 shadow-2xl max-h-64 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 17: BOYUN KAS AĞRILARI
        {
            id: 17,
            title: "1. BOYUN KAS AĞRILARI 🦴",
            subtitle: "Dijital Sağlık Problemleri",
            topic: "1. Sağlık Problemi",
            icon: "fa-solid fa-person",
            bgColor: "from-red-800 via-rose-900 to-slate-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <span class="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-lg font-black text-xs uppercase tracking-wider">1. SAĞLIK PROBLEMİ</span>
                        <h3 class="text-2xl sm:text-3xl font-black text-white">
                            Boyun Kas Ağrıları
                        </h3>
                        <p class="text-sm sm:text-base text-rose-100 leading-relaxed font-medium">
                            Cep telefonuna veya ekrana sürekli başı aşağı eğerek bakmak, boyun ve omuz kaslarına aşırı yük bindirerek şiddetli ağrılara sebep olur.
                        </p>
                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-rose-500/30 text-xs text-slate-200">
                            ⚠️ Başımızı öne eğdikçe boyun omurlarına binen ağırlık katbekat artar.
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/yanlis_oturus.png" alt="Boyun Ağrısı" class="rounded-3xl border-4 border-rose-400/30 shadow-2xl max-h-72 object-contain bg-slate-900/70 p-4" />
                    </div>
                </div>
            `
        },

        // SLAYT 18: DURUŞ BOZUKLUKLARI
        {
            id: 18,
            title: "2. DURUŞ BOZUKLUKLARI 🪑",
            subtitle: "Dijital Sağlık Problemleri",
            topic: "2. Sağlık Problemi",
            icon: "fa-solid fa-chair",
            bgColor: "from-rose-800 via-red-900 to-slate-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <span class="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-lg font-black text-xs uppercase tracking-wider">2. SAĞLIK PROBLEMİ</span>
                        <h3 class="text-2xl sm:text-3xl font-black text-white">
                            Duruş Bozuklukları
                        </h3>
                        <p class="text-sm sm:text-base text-rose-100 leading-relaxed font-medium">
                            Bilgisayar başında kambur oturmak, koltukta desteksiz ve eğri pozisyonlarda kalmak omurganın doğal yapısını bozarak duruş eğriliklerine yol açar.
                        </p>
                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-rose-500/30 text-xs text-slate-200">
                            ⚠️ Dik oturma alışkanlığı kazanılmazsa kalıcı omurga eğrilikleri oluşabilir.
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/dijital_saglik_durus.jpg" alt="Duruş Bozuklukları" class="rounded-3xl border-4 border-rose-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 19: GÖRME BOZUKLUKLARI
        {
            id: 19,
            title: "3. GÖRME BOZUKLUKLARI 👁️",
            subtitle: "Dijital Sağlık Problemleri",
            topic: "3. Sağlık Problemi",
            icon: "fa-solid fa-eye",
            bgColor: "from-cyan-800 via-blue-900 to-slate-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-lg font-black text-xs uppercase tracking-wider">3. SAĞLIK PROBLEMİ</span>
                        <h3 class="text-2xl sm:text-3xl font-black text-white">
                            Görme Bozuklukları
                        </h3>
                        <p class="text-sm sm:text-base text-cyan-100 leading-relaxed font-medium">
                            Ekrana çok yakından ve aralıksız bakmak; göz kırpma sayısını azaltarak göz kuruluğuna, yanmaya, bulanık görmeye ve görme sorunlarına yol açar.
                        </p>
                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-cyan-500/30 text-xs text-slate-200">
                            👁️ Ekran mesafesine dikkat etmeli ve gözlerimizi belirli aralıklarla dinlendirmeliyiz.
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/goz_sagligi.jpg" alt="Göz Sağlığı" class="rounded-3xl border-4 border-cyan-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 20: TEKNOLOJİ VE OYUN BAĞIMLILIĞI
        {
            id: 20,
            title: "4. TEKNOLOJİ VE OYUN BAĞIMLILIĞI 🎮",
            subtitle: "Dijital Sağlık Problemleri",
            topic: "4. Sağlık Problemi",
            icon: "fa-solid fa-gamepad",
            bgColor: "from-purple-800 via-indigo-900 to-slate-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg font-black text-xs uppercase tracking-wider">4. SAĞLIK PROBLEMİ</span>
                        <h3 class="text-2xl sm:text-3xl font-black text-white">
                            Teknoloji ve Oyun Bağımlılığı
                        </h3>
                        <p class="text-sm sm:text-base text-purple-100 leading-relaxed font-medium">
                            Ekran başından ayrılamamak, zamanın nasıl geçtiğini fark edememek ve cihaz elinden alındığında öfkelenmek teknoloji bağımlılığının belirtisidir.
                        </p>
                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-purple-500/30 text-xs text-slate-200">
                            ⚠️ Dersleri, uykuyu ve aile ilişkilerini aksatacak kadar bağlanmak ciddi bir sorundur.
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/oyun_bagimliligi.jpg" alt="Teknoloji Bağımlılığı" class="rounded-3xl border-4 border-purple-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 21: PSİKOLOJİK BOZUKLUKLAR
        {
            id: 21,
            title: "5. PSİKOLOJİK BOZUKLUKLAR 🧠",
            subtitle: "Dijital Sağlık Problemleri",
            topic: "5. Sağlık Problemi",
            icon: "fa-solid fa-brain",
            bgColor: "from-rose-900 via-purple-950 to-slate-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-6 space-y-4 text-left">
                        <span class="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-lg font-black text-xs uppercase tracking-wider">5. SAĞLIK PROBLEMİ</span>
                        <h3 class="text-2xl sm:text-3xl font-black text-white">
                            Psikolojik Bozukluklar
                        </h3>
                        <p class="text-sm sm:text-base text-pink-100 leading-relaxed font-medium">
                            Sanal dünyada gereğinden fazla zaman geçirmek; gerçek hayattan kopma, yalnızlık hissi, aşırı stres, huzursuzluk ve uyku bozukluklarına sebep olabilir.
                        </p>
                        <div class="p-4 bg-slate-900/80 rounded-2xl border border-pink-500/30 text-xs text-slate-200">
                            ⚠️ Ruh sağlığımızı korumak için gerçek hayattaki arkadaşlarımızla vakit geçirmeliyiz.
                        </div>
                    </div>
                    <div class="md:col-span-6 flex justify-center">
                        <img src="assets/slides/sosyal_baglar.jpg" alt="Psikolojik Sağlık" class="rounded-3xl border-4 border-pink-400/30 shadow-2xl max-h-72 object-cover" />
                    </div>
                </div>
            `
        },

        // SLAYT 22: DİJİTAL SAĞLIK ÖZETİ
        {
            id: 22,
            title: "DİJİTAL SAĞLIK ÖZETİ 🩺",
            subtitle: "Kaynakta Belirtilen 5 Sağlık Problemi",
            topic: "Sağlık Şeması",
            icon: "fa-solid fa-shield-heart",
            bgColor: "from-indigo-800 via-purple-900 to-slate-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 my-auto py-2">
                    <div class="text-center space-y-1">
                        <span class="text-xs font-black uppercase text-yellow-300 tracking-widest">DİJİTAL SAĞLIK HARİTASI</span>
                        <h3 class="text-2xl sm:text-3xl font-black text-white">Yanlış ve Fazla Kullanımın Getirdiği 5 Problem</h3>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2 text-center">
                        <div class="p-3 bg-slate-900/90 rounded-2xl border border-rose-500/40 space-y-1 shadow-lg">
                            <div class="text-2xl text-rose-400"><i class="fa-solid fa-person"></i></div>
                            <h4 class="font-bold text-white text-xs">1. Boyun Ağrıları</h4>
                        </div>
                        <div class="p-3 bg-slate-900/90 rounded-2xl border border-rose-500/40 space-y-1 shadow-lg">
                            <div class="text-2xl text-rose-400"><i class="fa-solid fa-chair"></i></div>
                            <h4 class="font-bold text-white text-xs">2. Duruş Bozukluğu</h4>
                        </div>
                        <div class="p-3 bg-slate-900/90 rounded-2xl border border-cyan-500/40 space-y-1 shadow-lg">
                            <div class="text-2xl text-cyan-400"><i class="fa-solid fa-eye"></i></div>
                            <h4 class="font-bold text-white text-xs">3. Görme Sorunu</h4>
                        </div>
                        <div class="p-3 bg-slate-900/90 rounded-2xl border border-purple-500/40 space-y-1 shadow-lg">
                            <div class="text-2xl text-purple-400"><i class="fa-solid fa-gamepad"></i></div>
                            <h4 class="font-bold text-white text-xs">4. Bağımlılık</h4>
                        </div>
                        <div class="p-3 bg-slate-900/90 rounded-2xl border border-pink-500/40 space-y-1 shadow-lg">
                            <div class="text-2xl text-pink-400"><i class="fa-solid fa-brain"></i></div>
                            <h4 class="font-bold text-white text-xs">5. Psikolojik Sorun</h4>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 23: OLUMLU VE OLUMSUZ ETKİLER (İKİ SÜTUNLU ÖZET)
        {
            id: 23,
            title: "OLUMLU VE OLUMSUZ ETKİLER ⚖️",
            subtitle: "İki Sütunlu Karşılaştırma",
            topic: "Genel Değerlendirme",
            icon: "fa-solid fa-scale-balanced",
            bgColor: "from-blue-900 via-indigo-950 to-slate-950",
            content: `
                <div class="max-w-5xl mx-auto space-y-4 my-auto py-2">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="bg-emerald-950/70 rounded-3xl p-6 border-2 border-emerald-500/50 shadow-xl space-y-3">
                            <div class="flex items-center gap-3 border-b border-emerald-500/40 pb-3">
                                <i class="fa-solid fa-circle-check text-emerald-400 text-2xl"></i>
                                <h3 class="text-xl font-black text-emerald-300">OLUMLU ETKİLER</h3>
                            </div>
                            <ul class="space-y-2 text-xs sm:text-sm text-emerald-100">
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> Bilgiye kolay ulaşma</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> Maliyeti azaltma</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> Hayatı kolaylaştırma</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> Hızlı haberleşme</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> Zamandan tasarruf</li>
                            </ul>
                        </div>
                        <div class="bg-rose-950/70 rounded-3xl p-6 border-2 border-rose-500/50 shadow-xl space-y-3">
                            <div class="flex items-center gap-3 border-b border-rose-500/40 pb-3">
                                <i class="fa-solid fa-circle-exclamation text-rose-400 text-2xl"></i>
                                <h3 class="text-xl font-black text-rose-300">OLUMSUZ ETKİLER</h3>
                            </div>
                            <ul class="space-y-2 text-xs sm:text-sm text-rose-100">
                                <li class="flex items-center gap-2"><i class="fa-solid fa-xmark text-rose-400"></i> Tembelliğe alıştırma</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-xmark text-rose-400"></i> İşsizlik oranının artması</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-xmark text-rose-400"></i> İnsanlar arasındaki bağların zayıflaması</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-xmark text-rose-400"></i> Hareketsiz ve sağlıksız yaşamla obezitenin artması</li>
                                <li class="flex items-center gap-2"><i class="fa-solid fa-xmark text-rose-400"></i> Farklı sağlık problemleri</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 24: DERS ÖZETİ
        {
            id: 24,
            title: "2. HAFTA DERS ÖZETİ 📋",
            subtitle: "Neler Öğrendik?",
            topic: "Kavram Haritası",
            icon: "fa-solid fa-clipboard-check",
            bgColor: "from-indigo-800 via-purple-900 to-slate-950",
            content: `
                <div class="max-w-4xl mx-auto space-y-4 my-auto py-2">
                    <div class="text-center space-y-1">
                        <span class="text-xs font-black uppercase text-yellow-300 tracking-widest">KAVRAM HARİTASI</span>
                        <h3 class="text-2xl sm:text-3xl font-black text-white">2. Haftanın Özeti</h3>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                        <div class="p-3.5 bg-slate-900/90 rounded-2xl border border-emerald-500/40 space-y-1">
                            <strong class="text-emerald-300 block text-sm">1. OLUMLU ETKİLER:</strong>
                            <span class="text-slate-200">Bilgiye kolay ulaşım, azalan maliyet, pratik hayat, hızlı haberleşme, zaman tasarrufu.</span>
                        </div>
                        <div class="p-3.5 bg-slate-900/90 rounded-2xl border border-rose-500/40 space-y-1">
                            <strong class="text-rose-300 block text-sm">2. OLUMSUZ ETKİLER:</strong>
                            <span class="text-slate-200">Tembellik, işsizlik, bağların kaybolması, hareketsizlik ve obezite.</span>
                        </div>
                        <div class="p-3.5 bg-slate-900/90 rounded-2xl border border-yellow-500/40 space-y-1">
                            <strong class="text-yellow-300 block text-sm">3. TEKNOLOJİ VE SAĞLIK:</strong>
                            <span class="text-slate-200">Yanlış veya fazla kullanım sağlık problemlerini beraberinde getirir.</span>
                        </div>
                        <div class="p-3.5 bg-slate-900/90 rounded-2xl border border-cyan-500/40 space-y-1">
                            <strong class="text-cyan-300 block text-sm">4. SAĞLIK PROBLEMLERİ:</strong>
                            <span class="text-slate-200">Boyun ağrısı, duruş bozukluğu, görme sorunları, bağımlılık ve psikolojik bozukluklar.</span>
                        </div>
                    </div>
                </div>
            `
        },

        // SLAYT 25: KAPANIŞ
        {
            id: 25,
            title: "DERSİMİZ TAMAMLANDI! 👏",
            subtitle: "2. Hafta Kapanış",
            topic: "Kapanış Mesajı",
            icon: "fa-solid fa-flag-checkered",
            bgColor: "from-blue-700 via-indigo-900 to-slate-950",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2">
                    <div class="md:col-span-7 space-y-4 text-left">
                        <span class="px-4 py-1.5 bg-yellow-400/20 text-yellow-300 font-black text-xs uppercase tracking-wider rounded-full border border-yellow-400/40">
                            TEBRİKLER!
                        </span>
                        <div class="space-y-2">
                            <h2 class="text-xl sm:text-2xl font-black text-white leading-snug">
                                “BİLİŞİM TEKNOLOJİLERİNİN OLUMLU VE OLUMSUZ ETKİLERİ OLABİLİR.”
                            </h2>
                            <p class="text-sm sm:text-base text-yellow-300 font-extrabold leading-snug">
                                “YANLIŞ VEYA FAZLA KULLANIM SAĞLIK PROBLEMLERİNİ DE BERABERİNDE GETİREBİLİR.”
                            </p>
                        </div>
                        <div class="pt-2">
                            <span class="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-yellow-300 font-bold text-base shadow-xl">
                                <i class="fa-solid fa-award text-2xl"></i>
                                <span>2. Hafta • Öğretmen Bozok</span>
                            </span>
                        </div>
                    </div>
                    <div class="md:col-span-5 flex justify-center">
                        <img src="assets/slides/dijital_saglik_durus.jpg" alt="Ders Sonu" class="rounded-3xl border-4 border-yellow-400/40 shadow-2xl max-h-64 object-cover" />
                    </div>
                </div>
            `
        }
    ],

    questions: [
        {
            id: 1,
            type: "matching",
            title: "Teknolojinin Etkilerini Sınıflandır!",
            pairs: [
                { left: "Bilgiye kolay ulaşım", right: "Olumlu Etki", leftIcon: "fa-solid fa-globe" },
                { left: "Hareketsiz yaşam", right: "Olumsuz Etki", leftIcon: "fa-solid fa-couch" },
                { left: "Zamandan tasarruf", right: "Olumlu Etki", leftIcon: "fa-solid fa-stopwatch" },
                { left: "Bağımlılık yapabilmesi", right: "Olumsuz Etki", leftIcon: "fa-solid fa-link" },
                { left: "Hızlı haberleşme", right: "Olumlu Etki", leftIcon: "fa-solid fa-paper-plane" },
                { left: "Duruş bozuklukları", right: "Olumsuz Etki", leftIcon: "fa-solid fa-child-reaching" }
            ]
        },
        {
            id: 2,
            type: "true_false",
            title: "1. Etkinlik: Doğru / Yanlış Pekiştirme Soruları",
            items: [
                {
                    statement: "Bilişim teknolojileri doğru ve bilinçli kullanıldığında bilgiye ulaşmamızı kolaylaştırır ve zamandan tasarruf sağlar.",
                    isCorrect: true,
                    explanation: "Doğru! Teknoloji bilgiye saniyeler içinde ulaşmamızı sağlar ve hayatımızı kolaylaştırır."
                },
                {
                    statement: "Aynı teknoloji doğru kullanıldığında fayda sağlar; aşırı ve yanlış kullanıldığında ise zarar verebilir.",
                    isCorrect: true,
                    explanation: "Doğru! Slaytlarımızdaki temel kural: Teknoloji bir araçtır, önemli olan onu nasıl ve ne kadar kullandığımızdır."
                },
                {
                    statement: "Arkadaşlarla yüz yüze konuşmak ve aileyle vakit geçirmek yerine sürekli telefonla ilgilenmek sosyal bağlarımızı güçlendirir.",
                    isCorrect: false,
                    explanation: "Yanlış! Yüz yüze iletişim yerine sürekli telefona bakmak bağları zayıflatır ve yalnızlığa neden olabilir."
                },
                {
                    statement: "Geceleri geç saatlere kadar sosyal medyada vakit geçirmek ve uyku saatlerini ertelemek beden ve zihin sağlığımızı olumsuz etkiler.",
                    isCorrect: true,
                    explanation: "Doğru! Uykusuzluk gün boyu yorgunluğa ve derslerde dikkat dağınıklığına yol açar."
                },
                {
                    statement: "Dijital sağlık; teknolojiyi kullanırken bedenimizin ve ruhumuzun sağlığını korumak anlamına gelir.",
                    isCorrect: true,
                    explanation: "Doğru! Dijital sağlık, teknolojiyi bilinçli, dengeli ve ölçülü kullanmaktır."
                },
                {
                    statement: "Ekran başında saatlerce aralıksız oyun oynamak ve dışarı çıkmamak fiziksel sağlığımız için çok faydalıdır.",
                    isCorrect: false,
                    explanation: "Yanlış! Saatlerce hareketsiz kalmak göz yorgunluğuna, tembelliğe ve duruş bozukluklarına sebep olur."
                },
                {
                    statement: "İnternetten ders videoları izleyerek araştırma ve ödev yapmak teknolojinin olumlu kullanımına bir örnektir.",
                    isCorrect: true,
                    explanation: "Doğru! Eğitim amacıyla kullanım ders başarısını ve öğrenmeyi artırır."
                },
                {
                    statement: "Daha hareketli ve sağlıklı bir yaşam için ekran süremizi planlamalı, düzenli mola vermeli ve spora vakit ayırmalıyız.",
                    isCorrect: true,
                    explanation: "Doğru! Dengeli kullanım alışkanlıklarımız bedenimizi dinç ve sağlıklı tutmanın anahtarıdır."
                }
            ]
        },
        {
            id: 3,
            type: "multiple_choice",
            title: "2. Etkinlik: Çoktan Seçmeli Değerlendirme Testi",
            questions: [
                {
                    q: "Aşağıdakilerden hangisi bilişim teknolojilerinin hayatımıza sağladığı OLUMLU etkilerden biridir?",
                    options: [
                        "Hareketsiz yaşamı artırması",
                        "Zamandan tasarruf sağlaması ve bilgiye kolay ulaşım",
                        "İnsanlar arasındaki bağları zayıflatması",
                        "Tembelliğe yol açabilmesi"
                    ],
                    answer: 1,
                    explanation: "Bilişim teknolojileri işlerimizi hızlandırır, zamandan tasarruf sağlar ve bilgiye kolayca erişmemize yardımcı olur."
                },
                {
                    q: "Ali her akşam 4 saat boyunca bilgisayarda oyun oynamakta ve dışarı çıkmamaktadır. Ali'nin bu davranışı ve olası sonucu için hangisi doğrudur?",
                    options: [
                        "Olumlu etki - Spor ve kondisyon becerilerini artırır",
                        "Olumlu etki - Günlük zamandan tasarruf sağlar",
                        "Olumsuz etki - Hareketsiz kalır, gözleri yorulur ve sağlığı olumsuz etkilenir",
                        "Olumlu etki - Aile ve arkadaşlık bağlarını güçlendirir"
                    ],
                    answer: 2,
                    explanation: "Çalışma kağıdımızdaki 1. senaryoya göre; aşırı oyun oynamak hareketsizliğe, göz yorgunluğuna ve sağlık problemlerine yol açar."
                },
                {
                    q: "Aynı teknoloji doğru kullanıldığında fayda, yanlış kullanıldığında zarar verir. Buna göre akıllı telefonu DOĞRU KULLANMAYA örnek hangisidir?",
                    options: [
                        "Gece geç saatlere kadar telefonla oyun oynamak",
                        "Yemek masasında ve arkadaşlarla sohbet ederken telefona bakmak",
                        "Eğitim uygulamalarıyla araştırma yapmak ve ders videosu izlemek",
                        "Gün boyu ekrandan gözünü ayırmadan vakit geçirmek"
                    ],
                    answer: 2,
                    explanation: "Eğitim ve araştırma amacıyla ölçülü kullanım teknolojiyi faydalı bir araca dönüştürür."
                },
                {
                    q: "Aşağıdaki eşleştirmelerden hangisinde teknolojinin kullanım alanı YANLIŞ belirtilmiştir?",
                    options: [
                        "Online dersler ve araştırma ➔ EĞİTİM",
                        "Randevu alma ve e-sağlık hizmetleri ➔ SAĞLIK",
                        "Harita uygulamaları ve online bilet ➔ ULAŞIM",
                        "İnternet bankacılığı ve online alışveriş ➔ HAREKETSİZLİK"
                    ],
                    answer: 3,
                    explanation: "İnternet bankacılığı ve online alışveriş 'Bankacılık ve Alışveriş' alanına aittir."
                },
                {
                    q: "'Dijital Sağlık' kavramı aşağıdakilerden hangisini ifade eder?",
                    options: [
                        "Teknolojik cihazları hiç kapatmadan kullanmak",
                        "Teknolojiyi kullanırken bedenimizin ve ruhumuzun sağlığını korumak",
                        "En pahalı ve en yeni cihazları satın almak",
                        "Sadece oyun videoları izleyerek vakit geçirmek"
                    ],
                    answer: 1,
                    explanation: "Dijital sağlık; ekran karşısında bedenimizi ve ruhumuzu koruyarak dengeli, bilinçli ve ölçülü yaşamaktır."
                },
                {
                    q: "Dersimizin özetinde öğrendiğimiz sağlıklı teknoloji kullanımının ALTIN FORMÜLÜ hangisidir?",
                    options: [
                        "Hızlı + Pahalı + Sürekli Kullanım",
                        "Doğru + Bilinçli + Dengeli Kullanım",
                        "Gece + Gündüz + Ekranda Kalım",
                        "Yalnız + Sessiz + Hareketsiz Kullanım"
                    ],
                    answer: 1,
                    explanation: "Slaytlarımızın ve infografiğimizin altın formülü: DOĞRU + BİLİNÇLİ + DENGELİ KULLANIM'dır."
                }
            ]
        }
    ],

// 🎮 4. SINIF OYUNLARI VERİ SETLERİ (Slaytlara ve İnfografiğe %100 Uyumlu)
    gameData: {
        wheelQuiz: [
            {
                question: "Aşağıdakilerden hangisi teknolojinin hayatımıza getirdiği olumlu bir etkidir?",
                options: ["Tembellik", "Bilgiye kolay ve hızlı ulaşım", "Göz yorgunluğu", "Bağımlılık"],
                answer: 1,
                points: 100
            },
            {
                question: "Hangisi teknolojinin olumsuz etkileri arasında yer alır?",
                options: ["Haberleşmeyi hızlandırma", "Zamandan tasarruf", "Hareketsiz yaşam ve duruş bozuklukları", "Maliyeti azaltma"],
                answer: 2,
                points: 150
            },
            {
                question: "Aynı teknolojiyi doğru kullanmaya hangisi örnek verilebilir?",
                options: ["Ders videosu izleyip araştırma yapmak", "Gece geç saatlere kadar oyun oynamak", "Yemek yerken ekrana bakmak", "Sohbet ederken telefonla ilgilenmek"],
                answer: 0,
                points: 200
            },
            {
                question: "Teknolojiyi kullanırken beden ve ruh sağlığımızı korumaya ne ad verilir?",
                options: ["Dijital Sağlık", "Dijital Oyun", "Sanal Alışveriş", "Robotik Kodlama"],
                answer: 0,
                points: 200
            },
            {
                question: "Harita uygulamaları ve online bilet alma teknolojinin hangi kullanım alanına girer?",
                options: ["Eğitim", "Ulaşım", "Bankacılık", "Günlük Yaşam"],
                answer: 1,
                points: 250
            },
            {
                question: "Randevu alma ve e-sağlık hizmetleri hangi alandaki bilişim teknolojisidir?",
                options: ["Sağlık", "Ulaşım", "Eğlence", "Oyun"],
                answer: 0,
                points: 250
            },
            {
                question: "Mert'in arkadaşlarıyla yüz yüze konuşmak yerine sürekli telefona bakması neye yol açabilir?",
                options: ["Sosyal bağların güçlenmesine", "İnsanlar arasındaki bağların zayıflamasına", "Daha hızlı koşmasına", "Uykusunun artmasına"],
                answer: 1,
                points: 300
            },
            {
                question: "Dersimizin altın formülü olan doğru kullanım üçlüsü hangisidir?",
                options: ["Doğru + Bilinçli + Dengeli", "Hızlı + Pahalı + Sürekli", "Oyun + Müzik + Ekran", "Sessiz + Yalnız + Hareketsiz"],
                answer: 0,
                points: 300
            }
        ],
        matchCards: [
            {
                id: 1,
                text: "Bilgiye Kolay Ulaşım",
                category: "Olumlu Etki",
                icon: "fa-solid fa-globe"
            },
            {
                id: 2,
                text: "Zamandan Tasarruf",
                category: "Olumlu Etki",
                icon: "fa-solid fa-stopwatch"
            },
            {
                id: 3,
                text: "Hareketsiz Yaşam",
                category: "Olumsuz Etki",
                icon: "fa-solid fa-couch"
            },
            {
                id: 4,
                text: "Bağımlılık & Zaman Kaybı",
                category: "Olumsuz Etki",
                icon: "fa-solid fa-link"
            },
            {
                id: 5,
                text: "Harita & Online Bilet",
                category: "Ulaşım Alanı",
                icon: "fa-solid fa-map-location-dot"
            },
            {
                id: 6,
                text: "Online Ders & Araştırma",
                category: "Eğitim Alanı",
                icon: "fa-solid fa-graduation-cap"
            },
            {
                id: 7,
                text: "Beden & Ruh Sağlığı",
                category: "Dijital Sağlık",
                icon: "fa-solid fa-shield-heart"
            },
            {
                id: 8,
                text: "Doğru + Bilinçli + Dengeli",
                category: "Altın Formül",
                icon: "fa-solid fa-award"
            }
        ],
        reflexStatements: [
            {
                text: "Bilişim teknolojileri bilgiye hızlı ulaşmamızı ve zamandan tasarruf etmemizi sağlar.",
                correct: true
            },
            {
                text: "Gece geç saatlere kadar ekranda kalmak uyku düzenimize hiçbir zarar vermez.",
                correct: false
            },
            {
                text: "Aynı teknoloji doğru kullanıldığında fayda, yanlış kullanıldığında zarar verebilir.",
                correct: true
            },
            {
                text: "Günde 8 saat aralıksız oyun oynamak beden sağlığımızı güçlendirir.",
                correct: false
            },
            {
                text: "Dijital sağlık; teknolojiyi bilinçli, dengeli ve ölçülü kullanmaktır.",
                correct: true
            },
            {
                text: "Arkadaşlarla buluşunca konuşmak yerine telefona bakmak bağları zayıflatır.",
                correct: true
            },
            {
                text: "Online ders videoları izleyerek ödev yapmak teknolojinin olumlu kullanımına örnektir.",
                correct: true
            },
            {
                text: "Teknoloji tek başına zararlıdır, insan hayatını hiçbir şekilde kolaylaştırmaz.",
                correct: false
            }
        ],
        duelQuestions: [
            {
                q: "Aşağıdakilerden hangisi teknolojinin hayatımıza getirdiği olumlu bir etkidir?",
                options: ["Tembellik", "Bilgiye kolay ulaşım", "Göz yorgunluğu", "Hareketsizlik"],
                answer: 1
            },
            {
                q: "Aşağıdakilerden hangisi teknolojinin olumsuz etkilerinden biridir?",
                options: ["Zamandan tasarruf", "Hızlı haberleşme", "Bağların zayıflaması", "Hayatı kolaylaştırma"],
                answer: 2
            },
            {
                q: "Teknolojiyi kullanırken beden ve ruh sağlığını korumaya ne ad verilir?",
                options: ["Dijital Sağlık", "Sanal Alışveriş", "Navigasyon", "Otomasyon"],
                answer: 0
            },
            {
                q: "Harita uygulamaları ve online bilet alma hangi alandaki bilişim teknolojisidir?",
                options: ["Eğitim", "Sağlık", "Ulaşım", "Bankacılık"],
                answer: 2
            },
            {
                q: "Akıllı telefonu 'DOĞRU KULLANMAK' hangisidir?",
                options: ["Eğitim ve araştırma yapmak", "Gece uykusuz oyun oynamak", "Yemek yerken ekrana bakmak", "Sohbette telefona gömülmek"],
                answer: 0
            },
            {
                q: "Dersimizde öğrendiğimiz sağlıklı kullanım ALTIN FORMÜLÜ hangisidir?",
                options: ["Doğru + Bilinçli + Dengeli", "Hızlı + Pahalı + Sürekli", "Oyun + Müzik + Gece", "Yalnız + Sessiz + Hareketsiz"],
                answer: 0
            }
        ]
    }
};
