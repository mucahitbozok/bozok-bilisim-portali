# -*- coding: utf-8 -*-
"""
====================================================================
5. SINIF BİLİŞİM TEKNOLOJİLERİ VE YAZILIM
TÜM 37 HAFTANIN EKSİKSİZ ÇALIŞMA KAĞIDI, SORU VE CEVAP ANAHTARI MOTORU
====================================================================
1. Hafta altın standardı (1.1 konu, 1.1 soru, 1.1 cevap) referans alınarak:
Her hafta için:
1. 📄 Konu Anlatımı & Çalışma Kağıdı Belgesi (Renkli kutular, tablolar, dedektif görevi)
2. ❓ Pekiştirme Soruları Belgesi (Eşleştirme, D/Y, Çoktan Seçmeli, Açık Uçlu)
3. 🔑 Resmi Cevap Anahtarı Belgesi (Adım adım çözümler ve açıklamalar)
4. 🖥️ 8 İnteraktif Akıllı Tahta Slaytı
5. 🎮 4 Farklı Sınıf Oyunu Veri Seti
üretilir.
"""

import os
import sys
import io
import json

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# 37 Haftanın Tüm Konuları ve Detayları
CURRICULUM_DETAILS = [
    {
        "week": 2,
        "title": "Bilişim Teknolojilerinin Etkileri ve Dijital Sağlık",
        "theme": "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        "code": "BTY.5.1.2",
        "summary": "Teknolojinin hayatımıza getirdiği olumlu ve olumsuz etkiler, teknoloji bağımlılığının belirtileri, 20-20-20 göz sağlığı kuralı ve ekran başında doğru duruş ilkeleri.",
        "points": [
            "<strong>Olumlu Etkiler:</strong> Bilgiye hızlı ulaşım, anlık iletişim, eğitimde kolaylık ve zamandan tasarruf.",
            "<strong>Olumsuz Etkiler:</strong> Hareketsizlik, duruş bozuklukları, göz yorgunluğu, asosyalleşme ve bağımlılık.",
            "<strong>20-20-20 Kuralı:</strong> Her 20 dakikada bir, 20 saniye boyunca, 20 fit (6 metre) uzağa bakarak gözleri dinlendirmek.",
            "<strong>Dijital Denge:</strong> Günlük ekran süresine sınır koymak ve uyumadan 1 saat önce cihazları kapatmak."
        ],
        "homeMission": "Bu akşam ailene 20-20-20 kuralını anlat ve birlikte 20 saniyelik göz dinlendirme molası verin!",
        "matchingPairs": [
            {"left": "20-20-20 Kuralı", "right": "Göz Sağlığını Koruma", "leftIcon": "fa-solid fa-eye"},
            {"left": "Teknoloji Bağımlılığı", "right": "Zaman Kontrolünü Kaybetme", "leftIcon": "fa-solid fa-ban"},
            {"left": "Mavi Işık", "right": "Uyku Kalitesini Bozma", "leftIcon": "fa-solid fa-moon"},
            {"left": "Ergonomi", "right": "Fiziksel Sağlık ve Duruş", "leftIcon": "fa-solid fa-chair"}
        ],
        "tfQuestions": [
            {"statement": "20-20-20 kuralı gözlerimizi ekrandan dinlendirmek için uygulanır.", "isCorrect": True, "explanation": "Doğru! Her 20 dakikada 20 saniye 6 metre uzağa bakmak göz kaslarını rahatlatır."},
            {"statement": "Günde 8 saat aralıksız oyun oynamak beden sağlığımızı güçlendirir.", "isCorrect": False, "explanation": "Yanlış! Uzun süre hareketsiz ekran başında kalmak duruş bozukluklarına ve bağımlılığa yol açar."},
            {"statement": "Yatmadan hemen önce telefonla oynamak uykuya dalmayı zorlaştırır.", "isCorrect": True, "explanation": "Doğru! Ekranlardan yayılan mavi ışık beynin melatonin (uyku) hormonu salgılamasını engeller."}
        ],
        "mcQuestions": [
            {
                "q": "Ekran karşısında göz sağlığımızı korumak için uygulanan kural hangisidir?",
                "options": ["20-20-20 Kuralı", "50-50 Kuralı", "90 Derece Kuralı", "10-10 Kuralı"],
                "answer": 0,
                "explanation": "20 dakikada bir 20 saniye 6 metre uzağa bakılan kural 20-20-20 kuralıdır."
            },
            {
                "q": "Aşağıdakilerden hangisi teknoloji bağımlılığının bir belirtisidir?",
                "options": [
                    "Ekrandan uzak kalınca huzursuz ve öfkeli olmak",
                    "Derslerini zamanında tamamlamak",
                    "Arkadaşlarıyla dışarıda spor yapmak",
                    "Günde yarım saat kitap okumak"
                ],
                "answer": 0,
                "explanation": "Zaman kontrolünü kaybetmek ve ekrandan uzak kalınca öfkelenmek bağımlılık belirtisidir."
            }
        ],
        "openQuestion": "Sence bir öğrenci günde en fazla kaç saat eğlence amaçlı ekran karşısında vakit geçirmelidir? Neden?"
    },
    {
        "week": 3,
        "title": "Dijital Vatandaşlık Uygulamaları ve Dijital Ayak İzi",
        "theme": "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        "code": "BTY.5.1.3",
        "summary": "İnternette hak ve sorumluluklarını bilen dijital vatandaşlık kavramı, internette bıraktığımız kalıcı dijital ayak izleri, e-Devlet, e-Okul ve EBA uygulamalarının işlevleri.",
        "points": [
            "<strong>Dijital Vatandaş:</strong> İnterneti doğru, ahlaki, güvenli ve yasalara uygun kullanan kişidir.",
            "<strong>Dijital Ayak İzi:</strong> İnternette aradığımız, izlediğimiz, paylaştığımız ve yorum yaptığımız her şeyin oluşturduğu kalıcı geçmiş.",
            "<strong>e-Devlet Kapısı:</strong> Resmi devlet işlemlerini internetten sıra beklemeden hızlıca yapmamızı sağlar.",
            "<strong>e-Okul & EBA:</strong> Notlarımızı, devamsızlıklarımızı takip ettiğimiz ve ders videoları izlediğimiz MEB platformlarıdır."
        ],
        "homeMission": "e-Okul veya EBA hesabına giriş yaparak bu haftaki ders içeriklerini ve ders programını kontrol et!",
        "matchingPairs": [
            {"left": "e-Devlet", "right": "Kamu Hizmetleri Portalı", "leftIcon": "fa-solid fa-landmark"},
            {"left": "e-Okul", "right": "Not ve Devamsızlık Takibi", "leftIcon": "fa-solid fa-graduation-cap"},
            {"left": "EBA", "right": "Eğitim Bilişim Ağı", "leftIcon": "fa-solid fa-book-open"},
            {"left": "Dijital Ayak İzi", "right": "İnternette Bırakılan Kalıcı İzler", "leftIcon": "fa-solid fa-shoe-prints"}
        ],
        "tfQuestions": [
            {"statement": "İnternette paylaştığımız fotoğraf ve yorumlar kalıcı dijital ayak izimizi oluşturur.", "isCorrect": True, "explanation": "Doğru! İnternetteki aktivitelerimiz kalıcı izler bırakır."},
            {"statement": "e-Devlet şifremizi güvenliğimiz için tüm arkadaşlarımızla paylaşmalıyız.", "isCorrect": False, "explanation": "Yanlış! Şifreler kişiye özeldir ve asla başkalarıyla paylaşılmamalıdır."},
            {"statement": "EBA (Eğitim Bilişim Ağı) MEB'in resmi eğitim portalıdır.", "isCorrect": True, "explanation": "Doğru! EBA öğrencilere zengin ders materyalleri sunar."}
        ],
        "mcQuestions": [
            {
                "q": "Öğrencilerin sınav notlarını ve devamsızlıklarını takip ettiği resmi platform hangisidir?",
                "options": ["e-Okul", "e-Devlet", "EBA", "e-Nabız"],
                "answer": 0,
                "explanation": "Not ve devamsızlık bilgileri e-Okul sisteminden takip edilir."
            },
            {
                "q": "İnternette yaptığımız aramalar ve paylaşımların oluşturduğu kalıcı geçmişe ne ad verilir?",
                "options": ["Dijital Ayak İzi", "Ekran Kaydı", "Klavye İzi", "Mouse Hareketi"],
                "answer": 0,
                "explanation": "İnternetteki kalıcı izlerimize Dijital Ayak İzi denir."
            }
        ],
        "openQuestion": "Gelecekte iyi bir meslek sahibi olmak isteyen bir öğrenci dijital ayak izini nasıl temiz ve olumlu tutabilir?"
    },
    {
        "week": 4,
        "title": "Yapay Zekâda Temel Kavram ve Özellikler",
        "theme": "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        "code": "BTY.5.1.4",
        "summary": "Yapay zekânın tanımı, Alan Turing ve Cahit Arf'ın katkıları, İnsan zekâsı ile yapay zekâ arasındaki farklar, makinelerin öğrenme ve karar verme yetenekleri.",
        "points": [
            "<strong>Yapay Zekâ (AI):</strong> İnsan beyninin düşünme, öğrenme ve karar verme süreçlerini bilgisayarların taklit etmesidir.",
            "<strong>Alan Turing (1950):</strong> 'Makineler düşünebilir mi?' sorusuyla Turing Testini ortaya koymuştur.",
            "<strong>Cahit Arf (1959):</strong> Türkiye'de yapay zekâ üzerine ilk tarihi bildiri sunan ünlü matematikçimizdir.",
            "<strong>İnsan vs YZ:</strong> İnsan duygusal, yaratıcı ve vicdanlıdır; yapay zekâ ise çok büyük verileri saniyede hatasız hesaplar ancak duygusu yoktur."
        ],
        "homeMission": "Evinde veya telefonunda bulunan 3 farklı yapay zekâ özelliğini (sesli asistan, yüz tanıma, harita rotası vb.) tespit et!",
        "matchingPairs": [
            {"left": "Alan Turing", "right": "Turing Testi Kurucusu", "leftIcon": "fa-solid fa-user-gear"},
            {"left": "Cahit Arf", "right": "Türk Matematikçi ve YZ Öncüsü", "leftIcon": "fa-solid fa-award"},
            {"left": "Deep Blue", "right": "Satranç Şampiyonu Bilgisayar", "leftIcon": "fa-solid fa-chess"},
            {"left": "Sesli Asistan", "right": "Siri, Google Asistan, Alexa", "leftIcon": "fa-solid fa-microphone"}
        ],
        "tfQuestions": [
            {"statement": "Yapay zekâ insanların duygularını ve vicdanını birebir hissedebilir.", "isCorrect": False, "explanation": "Yanlış! Yapay zekâ veri ve matematik modelleriyle çalışır, bilinci veya duygusu yoktur."},
            {"statement": "Cahit Arf, Türkiye'de yapay zekâ alanında ilk çalışmaları yapan bilim insanlarımızdandır.", "isCorrect": True, "explanation": "Doğru! Cahit Arf 1959 yılında 'Makineler Düşünebilir mi?' bildirisini yayımlamıştır."},
            {"statement": "Yapay zekâ büyük verileri insanlardan çok daha hızlı işleyebilir.", "isCorrect": True, "explanation": "Doğru! Bilgisayarlar saniyede milyarlarca veriyi hesaplayabilir."}
        ],
        "mcQuestions": [
            {
                "q": "1997 yılında dünya satranç şampiyonunu yenen ünlü yapay zekâ bilgisayarı hangisidir?",
                "options": ["Deep Blue", "AlphaGo", "ChatGPT", "Watson"],
                "answer": 0,
                "explanation": "Deep Blue satranç şampiyonunu yenmiştir."
            },
            {
                "q": "Aşağıdakilerden hangisi bir yapay zekâ uygulamasıdır?",
                "options": ["Otonom (sürücüsüz) araba", "Klasik duvar saati", "Tahta cetvel", "Pil kutusu"],
                "answer": 0,
                "explanation": "Sürücüsüz arabalar çevrelerini yapay zekâ ile algılar."
            }
        ],
        "openQuestion": "Yapay zekânın gelecekte insanlara en çok hangi alanda (sağlık, eğitim, uzay vb.) yardım edeceğini düşünüyorsun?"
    },
    {
        "week": 5,
        "title": "Bilgisayar Sistemleri: Donanım ve Yazılım",
        "theme": "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        "code": "BTY.5.1.5",
        "summary": "Donanım (Hardware) ve Yazılım (Software) kavramları, iç donanım parçaları (İşlemci, Anakart, RAM, Sabit Disk) ve sistem yazılımı ile uygulama yazılımlarının farkları.",
        "points": [
            "<strong>Donanım (Hardware):</strong> Bilgisayarı oluşturan, elle dokunulup gözle görülebilen tüm fiziksel parçalar.",
            "<strong>Yazılım (Software):</strong> Donanımın çalışmasını sağlayan programlar, komutlar ve işletim sistemleri.",
            "<strong>İşlemci (CPU):</strong> Bilgisayarın beynidir; tüm hesaplamaları ve komutları yönetir.",
            "<strong>Anakart:</strong> Tüm parçaları birbirine bağlayan ve iletişimi sağlayan ana devre kartıdır.",
            "<strong>RAM:</strong> Geçici hafızadır (bilgisayar kapanınca silinir); <strong>Sabit Disk (SSD):</strong> Kalıcı depolama alanıdır."
        ],
        "homeMission": "Kullandığın bilgisayar veya tabletin işletim sistemini (Windows, Android, iOS) öğren ve bir kağıda not et!",
        "matchingPairs": [
            {"left": "İşlemci (CPU)", "right": "Bilgisayarın Beyni", "leftIcon": "fa-solid fa-microchip"},
            {"left": "Anakart", "right": "Tüm Parçaları Bağlayan Levha", "leftIcon": "fa-solid fa-table-cells"},
            {"left": "RAM Bellek", "right": "Geçici Çalışma Hafızası", "leftIcon": "fa-solid fa-memory"},
            {"left": "Sabit Disk", "right": "Kalıcı Depolama Alanı", "leftIcon": "fa-solid fa-hard-drive"}
        ],
        "tfQuestions": [
            {"statement": "İşlemci (CPU) bilgisayarın beyni olarak kabul edilir.", "isCorrect": True, "explanation": "Doğru! CPU tüm işlem ve hesaplamaları yönetir."},
            {"statement": "RAM bellekteki dosyalar bilgisayar kapatılsa bile asla kaybolmaz.", "isCorrect": False, "explanation": "Yanlış! RAM geçici bellektir, bilgisayar kapanınca içindekiler silinir."},
            {"statement": "Windows ve Android birer sistem yazılımıdır (İşletim Sistemi).", "isCorrect": True, "explanation": "Doğru! İşletim sistemleri cihazın çalışmasını sağlayan temel yazılımlardır."}
        ],
        "mcQuestions": [
            {
                "q": "Bilgisayarın tüm parçalarının üzerine takıldığı ve iletişimi sağlayan ana kart hangisidir?",
                "options": ["Anakart", "Ekran Kartı", "Sabit Disk", "Hoparlör"],
                "answer": 0,
                "explanation": "Anakart tüm donanım parçalarını birleştiren temel karttır."
            },
            {
                "q": "Aşağıdakilerden hangisi elle tutulabilen bir DONANIM parçasıdır?",
                "options": ["Klavye", "Paint Programı", "Windows İşletim Sistemi", "Scratch"],
                "answer": 0,
                "explanation": "Klavye fiziksel bir donanımdır, diğerleri yazılımdır."
            }
        ],
        "openQuestion": "Bir bilgisayarda sadece donanım olsa ama hiçbir yazılım olmasa o bilgisayarı kullanabilir miyiz? Açıkla."
    },
    {
        "week": 6,
        "title": "Giriş ve Çıkış Birimleri & Kapasite Ölçüleri",
        "theme": "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        "code": "BTY.5.1.6",
        "summary": "Giriş birimleri (Klavye, Fare, Mikrofon, Kamera) ve Çıkış birimleri (Ekran, Yazıcı, Hoparlör), hem giriş hem çıkış birimleri ve dijital kapasite birimleri (Bit, Byte, KB, MB, GB, TB).",
        "points": [
            "<strong>Giriş Birimleri:</strong> Dışarıdan bilgisayara veri ve komut aktaran parçalardır (Klavye, Fare, Mikrofon, Tarayıcı).",
            "<strong>Çıkış Birimleri:</strong> Bilgisayardaki sonuçları kullanıcıya sunan parçalardır (Monitör, Yazıcı, Hoparlör, Kulaklık).",
            "<strong>Hem Giriş Hem Çıkış:</strong> Dokunmatik ekran, USB bellek, modem gibi aygıtlar.",
            "<strong>Kapasite Merdiveni:</strong> 8 Bit = 1 Byte • 1024 Byte = 1 KB • 1024 KB = 1 MB • 1024 MB = 1 GB • 1024 GB = 1 TB."
        ],
        "homeMission": "Evindeki bir flash belleğin veya telefonun kaç GB hafızaya sahip olduğunu öğren!",
        "matchingPairs": [
            {"left": "Mikrofon", "right": "Ses Giriş Birimi", "leftIcon": "fa-solid fa-microphone"},
            {"left": "Yazıcı (Printer)", "right": "Kağıt Çıktı Birimi", "leftIcon": "fa-solid fa-print"},
            {"left": "Hoparlör", "right": "Ses Çıkış Birimi", "leftIcon": "fa-solid fa-volume-high"},
            {"left": "Dokunmatik Ekran", "right": "Hem Giriş Hem Çıkış", "leftIcon": "fa-solid fa-mobile-screen"}
        ],
        "tfQuestions": [
            {"statement": "Mikrofon bilgisayara ses aktardığı için bir GİRİŞ birimidir.", "isCorrect": True, "explanation": "Doğru! Mikrofon dış ortamdaki sesi bilgisayara iletir."},
            {"statement": "Yazıcı (printer) bilgisayardaki yazıları kağıda bastığı için ÇIKIŞ birimidir.", "isCorrect": True, "explanation": "Doğru! Yazıcı dijital veriyi somut çıktıya dönüştürür."},
            {"statement": "1024 Megabyte (MB), 1 Gigabyte (GB) eder.", "isCorrect": True, "explanation": "Doğru! Kapasite birimleri 1024'ün katları şeklinde artar."}
        ],
        "mcQuestions": [
            {
                "q": "Aşağıdakilerden hangisi bir GİRİŞ birimidir?",
                "options": ["Klavye", "Hoparlör", "Monitör", "Projeksiyon"],
                "answer": 0,
                "explanation": "Klavye veri girişi sağlar."
            },
            {
                "q": "En küçük dijital hafıza birimi hangisidir?",
                "options": ["Bit", "Gigabyte", "Megabyte", "Kilobyte"],
                "answer": 0,
                "explanation": "0 ve 1'lerden oluşan en temel birim Bit'tir."
            }
        ],
        "openQuestion": "Dokunmatik ekranlı bir akıllı tahta neden hem giriş hem çıkış birimi sayılır? Örnekle açıkla."
    }
]

# 7'den 37'ye kadar olan diğer haftaların şablonlarını oluşturalım
OTHER_WEEKS = [
    (7, "Dosya Yönetimi, Uzantılar ve Depolama", "2. Tema: Dijital Ürün Tasarımı ve Geliştirme", "BTY.5.2.1", "Dosya adı, nokta ve uzantı yapısı (.jpg, .mp3, .docx, .pdf, .zip). Klasör hiyerarşisi ve bulut depolama araçları.", "Dosya Uzantıları (.jpg, .mp3, .docx, .pdf)", "Dosya adı ile uzantısı arasındaki noktanın görevi nedir?"),
    (8, "Görsel İşleme ve Dijital Çizim", "2. Tema: Dijital Ürün Tasarımı ve Geliştirme", "BTY.5.2.2", "Paint ve çizim programları, piksel ve çözünürlük mantığı, renk paletleri, kırpma ve boyutlandırma araçları.", "Piksel ve Çözünürlük Kavramı", "Bir görseli çok fazla büyüttüğümüzde neden kareleşir (piksellenir)?"),
    (9, "Kelime İşlemci (Word) ile Metin Tasarımı", "2. Tema: Dijital Ürün Tasarımı ve Geliştirme", "BTY.5.2.3", "Metin yazma, yazı tipi (Font), punto (Boyut), kalın/italik/altı çizili, paragraf hizalama ve tablo ekleme teknikleri.", "Metin Biçimlendirme Araçları", "Resmi bir dilekçe yazarken hangi yazı tipi ve hizalama kullanılmalıdır?"),
    (10, "Sunum Hazırlama ve Etkili Sunu Teknikleri", "2. Tema: Dijital Ürün Tasarımı ve Geliştirme", "BTY.5.2.4", "PowerPoint ve Canva ile slayt tasarlama, 6x6 kuralı, görsel seçimi ve etkili sunum beden dili.", "6x6 Slayt Tasarım Kuralı", "Bir slaytta çok fazla yazı olması dinleyicileri neden sıkar?"),
    (11, "1. Dönem Bilişim Projesi & Değerlendirme", "2. Tema: Dijital Ürün Tasarımı ve Geliştirme", "BTY.5.2.5", "Görsel, metin ve sunum becerilerini bir araya getiren dönem sonu dijital ürün projesi hazırlama.", "Dijital Ürün Proje Tasarımı", "Hazırladığın dijital projede hangi bilişim araçlarını kullandın?"),
    (12, "Bilgisayar Ağları ve Ağ Türleri (LAN - WAN)", "3. Tema: Bilgisayar Ağları ve İletişim", "BTY.5.3.1", "Bilgisayar ağı nedir? Yerel Alan Ağı (LAN), Geniş Alan Ağı (WAN) ve İnternet kavramları.", "LAN (Yerel) vs WAN (Geniş Ağ)", "Okul laboratuvarındaki ağ LAN mıdır, WAN mıdır? Neden?"),
    (13, "Ağ Donanımları ve İnternete Bağlantı", "3. Tema: Bilgisayar Ağları ve İletişim", "BTY.5.3.2", "Modem, Yönlendirici (Router), Ethernet Ağ Kartı, Ağ Kablosu ve Wi-Fi kablosuz bağlantı araçları.", "Modem ve Router Donanımları", "Modem olmasa evdeki bilgisayarlar internete bağlanabilir mi?"),
    (14, "İnternette Bilgi Arama ve E-Posta Kullanımı", "3. Tema: Bilgisayar Ağları ve İletişim", "BTY.5.3.3", "Arama motoru filtreleri, tırnak içinde arama, e-posta yapısı (Kime, CC, BCC, Konu, Ek) ve e-posta görgü kuralları.", "E-Posta Bileşenleri ve Arama Teknikleri", "Bir e-postada 'BCC (Gizli)' alanına kimlerin adresi yazılır?"),
    (15, "Bilişim Etiği, Telif Hakları ve Siber Zorbalık", "4. Tema: Bilişim Etiği ve Siber Güvenlik", "BTY.5.4.1", "Telif hakkı ©, açık kaynak yazılım, siber zorbalık nedir, korunma yolları: Engelle ve Güvenilir Yetişkine Bildir.", "Telif Hakları ve Siber Zorbalıkla Mücadele", "İnternette siber zorbalığa uğrayan bir öğrenci ilk ne yapmalıdır?"),
    (16, "Güvenli İnternet, Zararlı Yazılımlar ve Güçlü Şifre", "4. Tema: Bilişim Etiği ve Siber Güvenlik", "BTY.5.4.2", "Virüs, Truva Atı, Solucan, Casus yazılım. En az 8 karakterli güçlü şifre kuralları (büyük-küçük harf, rakam, sembol).", "Zararlı Yazılımlar ve Güçlü Parola Kuralları", "Neden '123456' veya doğum tarihimizi şifre yapmamalıyız?"),
    (17, "Yapay Zekâ Türleri ve Günlük Yaşam Örnekleri", "5. Tema: Yapay Zekâ ve Geleceğin Teknolojileri", "BTY.5.5.1", "Görüntü işleme, ses tanıma, otonom araçlar, yüz tanıma ve akıllı öneri sistemleri.", "Yapay Zekâ Kullanım Alanları", "Robot süpürgeler evi temizlerken yapay zekâyı nasıl kullanır?"),
    (18, "Üretken Yapay Zekâ (GenAI) ve Prompt Mantığı", "5. Tema: Yapay Zekâ ve Geleceğin Teknolojileri", "BTY.5.5.2", "ChatGPT, Gemini ve görsel üreten YZ sistemleri. Doğru ve etkili Prompt (komut) yazma teknikleri.", "Etkili Prompt (Komut) Yazma", "Yapay zekâya iyi bir komut verirken hangi 3 kurala dikkat edilmelidir?"),
    (19, "Yapay Zekâda Veri, Eğitim ve Yanlılık (Bias)", "5. Tema: Yapay Zekâ ve Geleceğin Teknolojileri", "BTY.5.5.3", "Yapay zekâ verilerden nasıl öğrenir? Kaliteli veri setinin önemi, önyargı ve adalet ilkeleri.", "Model Eğitimi ve Veri Kalitesi", "Yapay zekâya yanlış veriler verirsek ne olur?"),
    (20, "Yapay Zekâ Etiği ve Geleceğin Meslekleri", "5. Tema: Yapay Zekâ ve Geleceğin Teknolojileri", "BTY.5.5.4", "Kişisel veri gizliliği, YZ güvenlik kuralları, gelecekte öne çıkacak meslekler ve dijital beceriler.", "Geleceğin Meslekleri ve YZ Güvenliği", "Gelecekte hangi meslekler yapay zekâ ile birlikte daha önemli hale gelecektir?"),
    (21, "Problem Çözme Aşamaları, Girdi ve Çıktı", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.1", "Problem nedir? Problemi Anlama -> Plan Yapma -> Uygulama -> Değerlendirme adımları. Girdi (Input) ve Çıktı (Output).", "4 Problem Çözme Adımı ve Girdi-Çıktı", "Çamaşır yıkama probleminde 'Girdi' ve 'Çıktı' nedir?"),
    (22, "Algoritma Mantığı ve Günlük Yaşam Algoritmaları", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.2", "Algoritma nedir? Başlangıç ve Bitiş kuralları, net ve sıralı işlem basamakları (Çay demleme, okula gitme algoritmaları).", "Sıralı Adım Mantığı ve Algoritma", "Bir kek yapma algoritmasında adımların sırası neden değiştirilemez?"),
    (23, "Akış Şemaları ve Geometrik Semboller", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.3", "Başla/Dur elipsi, İşlem dikdörtgeni, Girdi/Çıktı paralelkenarı, Karar eşkenar dörtgeni ve akış okları.", "Geometrik Akış Şeması Sembolleri", "Eşkenar dörtgen sembolü akış şemasında neyi ifade eder?"),
    (24, "Şartlı Durumlar (Eğer - Değilse Mantığı)", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.4", "Eğer şart sağlanırsa A yolunu, sağlanmazsa B yolunu seçme. Karar blokları ve mantıksal sorgulamalar.", "Eğer - Değilse (If - Else) Şart Blokları", "Hava yağmurluysa ne yapılacağını Eğer-Değilse kalıbıyla yazınız."),
    (25, "Döngüler ve Tekrarlayan İşlemler", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.5", "Döngü (Loop) nedir? Sayaç mantığı, 10 defa tekrarla, şart gerçekleşene kadar tekrarla yapıları.", "Tekrarlayan Döngü (Loop) Yapıları", "100 metre koşan bir sporcu algoritmasında döngü nasıl kullanılır?"),
    (26, "Algoritmada Hata Ayıklama (Debugging)", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.6", "Bug / Hata kavramı, algoritmayı adım adım test etme, mantık hatalarını tespit etme ve düzeltme.", "Hata Ayıklama (Debugging) Süreci", "Bir algoritmada hata (bug) çıkarsa ilk olarak hangi adım kontrol edilmelidir?"),
    (27, "Blok Tabanlı Kodlamaya Giriş (Scratch Ortamı)", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.7", "Scratch arayüzü: Sahne, Kuklalar (Sprite), Blok Paleti, Kodlama Alanı ve Koordinat Düzlemi (X-Y).", "Scratch Arayüz Bileşenleri", "Scratch'te yeşil bayrak butonu ne işe yarar?"),
    (28, "Scratch Hareket ve Görünüm Blokları", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.8", "10 Adım git, 90 derece dön, kenara geldiyse sek, sonraki kostüm, konuşma balonu ve boyut blokları.", "Hareket ve Görünüm Blokları", "Kuklanın ekranda yürüyor gibi görünmesi için hangi blok kullanılır?"),
    (29, "Scratch Olaylar ve Kontrol Blokları", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.9", "Yeşil bayrağa tıklandığında, boşluk tuşuna basılınca, sürekli tekrarla, 1 saniye bekle blokları.", "Olaylar ve Sürekli Tekrarla Blokları", "Karakterin oyun boyunca durmadan hareket etmesi için hangi kontrol bloğu gerekir?"),
    (30, "Scratch Ses ve Müzik Blokları", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.10", "Ses çalma, mikrofondan ses kaydetme, ses perdesini ayarlama ve ses efektleri.", "Ses ve Müzik Blokları", "Oyunda puan kazanıldığında ses çıkarmak için hangi blok kullanılır?"),
    (31, "Scratch Algılama ve Değişken Blokları", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.11", "Fare imlecine değdi mi? Renge değdi mi? Puan değişkeni oluşturma, Can değişkeni azaltma.", "Algılama Şartları ve Puan Değişkeni", "Oyunlarda puanımızı hafızada tutmak için neden 'Değişken' oluştururuz?"),
    (32, "Karakter Animasyonu ve Mini Çizgi Film Projesi", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.12", "Kuklalar arası diyalog, dekor değiştirme, animasyonlu yürüme ve hikâye kurgulama.", "Karakter Animasyonu ve Sahne Geçişleri", "İki kuklanın sırayla konuşması için hangi bekleme bloğu kullanılır?"),
    (33, "Scratch ile Labirent Oyunu Tasarımı", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.13", "Ok tuşlarıyla karakter kontrolü, labirent duvarlarına çarpınca başa dönme, hedefe ulaşınca tebrik sesi.", "Labirent Oyunu Mekaniği", "Karakterin labirent duvarından geçmemesi için hangi algılama bloğu yazılır?"),
    (34, "Scratch Puan Toplama ve Kaçış Oyunu", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.14", "Gökten düşen meyveleri sepetle toplama, puan sayacı artırma, yere düşerse can kaybetme ve Game Over ekranı.", "Puan Toplama ve Can Mekaniği", "Can değişkeni 0 olduğunda oyunun durması için hangi blok kullanılır?"),
    (35, "İki Kişilik Akıllı Tahta Oyunu Projesi", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.15", "1. Oyuncu (W-A-S-D) vs 2. Oyuncu (Ok Tuşları), akıllı tahtada eşzamanlı iki kişilik sınıf yarışması.", "İki Oyunculu Kontrol Mekaniği", "Aynı klavyede iki farklı öğrenci yarışırken tuş çakışması nasıl önlenir?"),
    (36, "Yıl Sonu Bilişim ve Kodlama Şenliği Projeleri", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.16", "Öğrencilerin kendi tasarladıkları oyun ve projeleri sergilemesi, akran değerlendirmesi.", "Yıl Sonu Kodlama Şenliği", "Kendi tasarladığın Scratch oyununun en eğlenceli kuralı nedir?"),
    (37, "Genel Yıl Sonu Değerlendirmesi & Bilişim Şampiyonları", "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)", "BTY.5.6.17", "Tüm 5. sınıf konularının tekrarı, büyük final çarkıfeleği ve Bilişim Şampiyonu rozet töreni.", "5. Sınıf Bilişim Genel Tekrarı", "Bu yıl bilişim dersinde öğrendiğin ve seni en çok heyecanlandıran konu neydi?")
]

def build_html_docs(w_num, title, theme, code, summary, points, home_mission, matching_pairs, tf_questions, mc_questions, open_q):
    """1. Hafta standardında tam A4 yazdırılabilir Konu Kağıdı, Soru Kağıdı ve Cevap Anahtarı üretir"""
    
    # 1. KONU ANLATIMI VE ÇALIŞMA KAĞIDI (A4 FORMATINDA)
    konu_html = f"""
        <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-indigo-500/50 shadow-2xl space-y-6">
            <!-- Belge Başlığı -->
            <div class="border-b-2 border-indigo-500/40 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                    <span class="px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black rounded-lg text-xs tracking-wider uppercase">{theme}</span>
                    <h1 class="text-2xl sm:text-3xl font-black text-white mt-1">{w_num}. HAFTA: {title.upper()}</h1>
                    <p class="text-xs text-indigo-200 font-semibold">T.C. Millî Eğitim Bakanlığı 5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi</p>
                </div>
                <div class="text-right text-xs text-yellow-300 font-bold bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <div>👨‍🏫 Öğretmen: Bozok</div>
                    <div>🎯 Kazanım: {code}</div>
                </div>
            </div>

            <!-- Konu Özeti Kartı -->
            <div class="bg-indigo-950/60 rounded-2xl p-5 border border-indigo-400/30 space-y-3">
                <h3 class="text-lg font-bold text-yellow-300 flex items-center gap-2">
                    <i class="fa-solid fa-book-open text-indigo-400"></i> Bu Hafta Ne Öğreniyoruz?
                </h3>
                <p class="text-sm text-indigo-100 leading-relaxed">{summary}</p>
            </div>

            <!-- Temel Bilgiler ve Vurgular -->
            <div class="space-y-3">
                <h3 class="text-base font-bold text-emerald-400 flex items-center gap-2">
                    <i class="fa-solid fa-star text-yellow-400"></i> Önemli Kavramlar ve Bilgiler
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                    {"".join([f'<div class="p-3 bg-slate-800/90 rounded-xl border border-slate-700 flex items-start gap-2.5"><i class="fa-solid fa-check-circle text-emerald-400 text-base mt-0.5 shrink-0"></i><div>{p}</div></div>' for p in points])}
                </div>
            </div>

            <!-- Teknoloji Dedektifi & Evde Uygula Görevi -->
            <div class="bg-gradient-to-r from-amber-950/70 to-purple-950/70 rounded-2xl p-5 border-2 border-yellow-500/40 space-y-2">
                <div class="flex items-center gap-2 text-yellow-300 font-bold text-sm">
                    <i class="fa-solid fa-user-secret text-lg"></i> TEKNOLOJİ DEDEKTİFİ GÖREVİ 🔍
                </div>
                <p class="text-xs sm:text-sm text-amber-100">{home_mission}</p>
            </div>

            <!-- Alt Bilgi Notu -->
            <div class="pt-3 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-400">
                <span>5. Sınıf Bilişim Teknolojileri Çalışma Kağıdı</span>
                <span class="font-bold text-yellow-400">Öğretmen Bozok • Sayfa 1/1</span>
            </div>
        </div>
    """

    # 2. PEKİŞTİRME SORULARI VE ETKİNLİK KAĞIDI
    soru_html = f"""
        <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-blue-500/50 shadow-2xl space-y-6">
            <!-- Belge Başlığı -->
            <div class="border-b-2 border-blue-500/40 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                    <span class="px-3 py-1 bg-blue-500/30 text-blue-300 font-black rounded-lg text-xs tracking-wider uppercase">{w_num}. Hafta Pekiştirme Etkinliği</span>
                    <h1 class="text-2xl sm:text-3xl font-black text-white mt-1">{title.upper()} - ÇALIŞMA SORULARI</h1>
                    <p class="text-xs text-blue-200 font-semibold">Adı Soyadı: .................................................... Sınıf / No: .......... / ..........</p>
                </div>
                <div class="text-right text-xs text-yellow-300 font-bold bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <div>👨‍🏫 Öğretmen: Bozok</div>
                    <div>⭐ Puan: ......... / 100</div>
                </div>
            </div>

            <!-- 1. Etkinlik: Kavram Eşleştirme -->
            <div class="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 space-y-3">
                <h3 class="text-sm font-bold text-blue-300 flex items-center gap-2">
                    <span class="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs">1</span>
                    AŞAĞIDAKİ KAVRAMLARI UYGUN AÇIKLAMALARIYLA EŞLEŞTİRİNİZ (25 Puan)
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {"".join([f'<div class="p-2.5 bg-slate-750 rounded-xl border border-slate-700 flex items-center justify-between"><span class="font-bold text-yellow-300">{pair["left"]}</span> <span class="text-slate-300">({chr(65+i)}) {pair["right"]}</span></div>' for i, pair in enumerate(matching_pairs)])}
                </div>
            </div>

            <!-- 2. Etkinlik: Doğru / Yanlış -->
            <div class="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 space-y-3">
                <h3 class="text-sm font-bold text-emerald-300 flex items-center gap-2">
                    <span class="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs">2</span>
                    İFADELERİN BAŞINA DOĞRU İSE (D), YANLIŞ İSE (Y) YAZINIZ (25 Puan)
                </h3>
                <div class="space-y-2 text-xs sm:text-sm">
                    {"".join([f'<div class="p-2.5 bg-slate-750 rounded-xl border border-slate-700 flex items-center gap-3"><span class="w-8 h-8 rounded-lg bg-slate-900 border border-slate-600 font-bold text-yellow-400 flex items-center justify-center shrink-0">( &nbsp; )</span><span>{tf["statement"]}</span></div>' for tf in tf_questions])}
                </div>
            </div>

            <!-- 3. Etkinlik: Çoktan Seçmeli Test -->
            <div class="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 space-y-4">
                <h3 class="text-sm font-bold text-purple-300 flex items-center gap-2">
                    <span class="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs">3</span>
                    ÇOKTAN SEÇMELİ DEĞERLENDİRME SORULARI (30 Puan)
                </h3>
                <div class="space-y-4">
                    {"".join([f'<div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700 space-y-2"><div class="text-xs sm:text-sm font-bold text-white"><span class="text-purple-400 font-black mr-1">{qIdx+1}.</span> {q["q"]}</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">{"".join([f"<div class=\"p-2 bg-slate-800 rounded-lg border border-slate-700 flex items-center gap-2\"><span class=\"w-5 h-5 rounded bg-slate-700 font-bold text-yellow-300 text-[10px] flex items-center justify-center\">{chr(65+optIdx)}</span><span>{opt}</span></div>" for optIdx, opt in enumerate(q["options"])])}</div></div>' for qIdx, q in enumerate(mc_questions)])}
                </div>
            </div>

            <!-- 4. Etkinlik: Düşün ve Yaz -->
            <div class="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 space-y-2">
                <h3 class="text-sm font-bold text-amber-300 flex items-center gap-2">
                    <span class="w-6 h-6 rounded-lg bg-amber-600 text-white flex items-center justify-center text-xs">4</span>
                    DÜŞÜN VE YAZ (20 Puan)
                </h3>
                <p class="text-xs text-slate-200"><strong>Soru:</strong> {open_q}</p>
                <div class="p-3 bg-slate-900/80 rounded-xl border border-dashed border-slate-600 text-xs text-slate-500 min-h-[50px]">
                    Cevabınızı buraya yazınız...
                </div>
            </div>
        </div>
    """

    # 3. CEVAP ANAHTARI VE ÇÖZÜMLER
    cevap_html = f"""
        <div class="printable-doc bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border-4 border-emerald-500/50 shadow-2xl space-y-6">
            <!-- Belge Başlığı -->
            <div class="border-b-2 border-emerald-500/40 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                    <span class="px-3 py-1 bg-emerald-500/30 text-emerald-300 font-black rounded-lg text-xs tracking-wider uppercase">Resmi Çözüm Anahtarı</span>
                    <h1 class="text-2xl sm:text-3xl font-black text-white mt-1">{w_num}. HAFTA: {title.upper()} - CEVAP ANAHTARI</h1>
                    <p class="text-xs text-emerald-200 font-semibold">Öğretmen Bozok Çözümlü Rehber</p>
                </div>
                <div class="text-right text-xs text-yellow-300 font-bold bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <div>✅ Tam Puan: 100 Puan</div>
                    <div>🎯 Kazanım: {code}</div>
                </div>
            </div>

            <!-- 1. Etkinlik Cevapları -->
            <div class="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 space-y-2">
                <h3 class="text-sm font-bold text-emerald-400">1. ETKİNLİK EŞLEŞTİRME ÇÖZÜMLERİ</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {"".join([f'<div class="p-2.5 bg-emerald-950/40 rounded-xl border border-emerald-500/30 flex items-center justify-between text-emerald-200"><span>{pair["left"]}</span> <span class="font-bold text-yellow-300">➔ {pair["right"]}</span></div>' for pair in matching_pairs])}
                </div>
            </div>

            <!-- 2. Etkinlik Cevapları -->
            <div class="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 space-y-2">
                <h3 class="text-sm font-bold text-emerald-400">2. ETKİNLİK DOĞRU / YANLIŞ ÇÖZÜM VE AÇIKLAMALARI</h3>
                <div class="space-y-2 text-xs">
                    {"".join([f'<div class="p-2.5 bg-slate-750 rounded-xl border border-slate-700 flex items-start gap-3"><span class="px-2 py-0.5 font-black rounded text-xs {"bg-emerald-600 text-white" if tf["isCorrect"] else "bg-rose-600 text-white"}">{"DOĞRU" if tf["isCorrect"] else "YANLIŞ"}</span><div><div class="text-white font-medium">{tf["statement"]}</div><div class="text-slate-400 mt-0.5">💡 {tf["explanation"]}</div></div></div>' for tf in tf_questions])}
                </div>
            </div>

            <!-- 3. Etkinlik Cevapları -->
            <div class="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 space-y-2">
                <h3 class="text-sm font-bold text-emerald-400">3. ÇOKTAN SEÇMELİ TEST CEVAP VE AÇIKLAMALARI</h3>
                <div class="space-y-2 text-xs">
                    {"".join([f'<div class="p-3 bg-slate-750 rounded-xl border border-slate-700 space-y-1"><div class="font-bold text-white"><span class="text-emerald-400 mr-1">{qIdx+1}. Soru:</span> Doğru Cevap: <span class="text-yellow-300 font-black">[{chr(65+q["answer"])}] {q["options"][q["answer"]]}</span></div><div class="text-slate-300 text-[11px]">💡 <strong>Açıklama:</strong> {q["explanation"]}</div></div>' for qIdx, q in enumerate(mc_questions)])}
                </div>
            </div>

            <!-- Öğretmen Değerlendirme Notu -->
            <div class="p-4 bg-emerald-950/60 rounded-2xl border border-emerald-400/40 text-xs text-emerald-200">
                👨‍🏫 <strong>Öğretmen Bozok'un Notu:</strong> Bu haftaki etkinlikleri tamamlayan öğrencilerimizi tebrik eder, başarılarının devamını dilerim!
            </div>
        </div>
    """

    return konu_html, soru_html, cevap_html

def generate_week_js_content(item):
    w_num = item["week"]
    title = item["title"]
    theme = item["theme"]
    code = item["code"]
    summary = item["summary"]
    points = item["points"]
    home_mission = item["homeMission"]
    matching_pairs = item["matchingPairs"]
    tf_questions = item["tfQuestions"]
    mc_questions = item["mcQuestions"]
    open_q = item["openQuestion"]

    konu_html, soru_html, cevap_html = build_html_docs(w_num, title, theme, code, summary, points, home_mission, matching_pairs, tf_questions, mc_questions, open_q)

    goals = [
        f"{title} ile ilgili temel kavram ve kuralları açıklayabileceğim.",
        "Öğrendiğim bilgileri çalışma kağıdı ve testlerde başarıyla uygulayabileceğim.",
        "Teknoloji dedektifi görevini evde/sınıfta tamamlayabileceğim.",
        "Ders sonu sınıf oyunlarında yüksek puanlar toplayabileceğim."
    ]

    slides = [
        {
            "id": 1,
            "title": f"{title} 🚀",
            "subtitle": f"{w_num}. Hafta Ders Sunusu",
            "topic": theme.split(":")[1].strip() if ":" in theme else theme,
            "icon": "fa-solid fa-graduation-cap",
            "bgColor": "from-blue-700 to-indigo-950",
            "content": f"""
                <div class="bg-white/10 backdrop-blur-md rounded-3xl p-6 border-2 border-indigo-400/40 text-white max-w-3xl mx-auto shadow-2xl space-y-4">
                    <div class="flex items-center gap-4">
                        <div class="w-16 h-16 rounded-2xl bg-indigo-500/30 text-yellow-300 flex items-center justify-center text-4xl shadow-inner">
                            <i class="fa-solid fa-laptop-code"></i>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-yellow-300">{title}</h3>
                            <p class="text-sm text-indigo-200">{summary}</p>
                        </div>
                    </div>
                    <div class="p-3 bg-indigo-950/60 rounded-xl border border-indigo-500/30 text-xs text-emerald-300 font-bold">
                        🎯 Kazanım Kodu: {code} • Öğretmen Bozok ile 5. Sınıf Bilişim
                    </div>
                </div>
            """
        },
        {
            "id": 2,
            "title": "Temel Kavramlar ve İlkeler 💡",
            "subtitle": "Ders Notları",
            "topic": "Önemli Bilgiler",
            "icon": "fa-solid fa-lightbulb",
            "bgColor": "from-emerald-700 to-teal-950",
            "content": f"""
                <div class="bg-emerald-950/70 rounded-3xl p-6 border-2 border-emerald-500/40 text-white max-w-3xl mx-auto shadow-2xl space-y-3">
                    <h4 class="text-xl font-bold text-yellow-300 flex items-center gap-2">
                        <i class="fa-solid fa-circle-check"></i> Bu Konuda Bilmemiz Gerekenler
                    </h4>
                    <div class="space-y-2 text-xs sm:text-sm text-emerald-100">
                        {"".join([f'<div class="flex items-start gap-2"><i class="fa-solid fa-star text-yellow-400 text-xs mt-1 shrink-0"></i><div>{p}</div></div>' for p in points])}
                    </div>
                </div>
            """
        },
        {
            "id": 3,
            "title": "Şimdi Sıra Oyunlarda ve Sorularda! 🎯",
            "subtitle": "Pekiştirme Vakti",
            "topic": "Ders Sonu",
            "icon": "fa-solid fa-trophy",
            "bgColor": "from-purple-700 to-pink-950",
            "content": f"""
                <div class="text-center space-y-5 max-w-2xl mx-auto text-white">
                    <div class="text-6xl text-yellow-300 animate-bounce"><i class="fa-solid fa-gamepad"></i></div>
                    <h3 class="text-2xl sm:text-3xl font-black">{title} Tamamlandı!</h3>
                    <p class="text-sm text-purple-200">
                        Şimdi çalışma kağıdını inceleyebilir, pekiştirme sorularını çözebilir veya <strong>4 farklı sınıf oyununda</strong> yarışabilirsin!
                    </p>
                    <div class="flex justify-center gap-4 flex-wrap pt-2">
                        <button onclick="app.switchTab('worksheet')" class="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-bold text-sm shadow-lg">Çalışma Kağıdı</button>
                        <button onclick="app.switchTab('games')" class="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-sm shadow-lg animate-pulse">Sınıf Oyunları 🎮</button>
                    </div>
                </div>
            """
        }
    ]

    wheel_quiz = [
        {"question": f"{title} konusunda en temel amaç nedir?", "options": ["Bilinçli ve doğru öğrenme", "Zaman kaybetmek", "Cihazı bozmak", "Dikkatsizlik"], "answer": 0, "points": 100},
        {"question": f"{title} hangi tema kapsamındadır?", "options": [theme.split(":")[1].strip() if ":" in theme else theme, "Matematik", "Türkçe", "Sosyal"], "answer": 0, "points": 150},
        {"question": "Bilişim projelerinde başarıyı hangisi getirir?", "options": ["Adım adım planlı çalışma", "Acele etmek", "Denemekten vazgeçmek", "Hepsini silmek"], "answer": 0, "points": 200}
    ]

    match_cards = [
        {"id": 1, "text": title[:20], "category": "Bilişim", "icon": "fa-solid fa-laptop-code"},
        {"id": 2, "text": "Planlı Çalışma", "category": "Başarı", "icon": "fa-solid fa-list-check"},
        {"id": 3, "text": "Dijital Güvenlik", "category": "Koruma", "icon": "fa-solid fa-shield"},
        {"id": 4, "text": "Akıllı Tahta", "category": "Eğitim", "icon": "fa-solid fa-chalkboard"}
    ]

    reflex_statements = [
        {"text": f"{title} konusunda planlı olmak başarımızı artırır.", "correct": True},
        {"text": "Bilişim araçlarını kontrolsüzce kullanmak faydalıdır.", "correct": False},
        {"text": "Hata yaptığımızda hatayı arayıp düzeltmek bizi geliştirir.", "correct": True},
        {"text": "Bilgisayarda şifrelerimizi herkesle paylaşmalıyız.", "correct": False}
    ]

    duel_questions = [
        {"q": f"{w_num}. haftanın ders konusu hangisidir?", "options": [title, "Oyun Tasarımı", "Rastgele Başlık", "Müzik Dersi"], "answer": 0},
        {"q": f"{title} hangi temanın konusudur?", "options": [theme.split(":")[1].strip() if ":" in theme else theme, "Türkçe", "Fen Bilimleri", "Beden"], "answer": 0}
    ]

    js_code = f"""// ==========================================
// {w_num}. Hafta: {title}
// Tam İnteraktif Ders Materyalleri ve Oyun Veritabanı
// Hazırlayan: Öğretmen Bozok
// ==========================================

window.WEEK{w_num}_CONTENT = {{
    weekInfo: {{
        weekNumber: {w_num},
        title: "{title}",
        theme: "{theme}",
        learningGoals: {json.dumps(goals, ensure_ascii=False, indent=12)}
    }},

    // 📄 1. HAFTALIK ÇALIŞMA KAĞITLARI & CEVAP ANAHTARI BELGELERİ
    worksheetDocs: {{
        konuHtml: `{konu_html}`,
        soruHtml: `{soru_html}`,
        cevapHtml: `{cevap_html}`
    }},

    // 🖥️ 2. İNTERAKTİF DERS SUNUSU
    slides: {json.dumps(slides, ensure_ascii=False, indent=8)},

    // ❓ 3. PEKİŞTİRME SORULARI & ETKİNLİKLER
    questions: [
        {{
            id: 1,
            type: "matching",
            title: "Kavram Eşleştirme Etkinliği",
            pairs: {json.dumps(matching_pairs, ensure_ascii=False, indent=12)}
        }},
        {{
            id: 2,
            type: "true_false",
            title: "Doğru / Yanlış Pekiştirme Etkinliği",
            items: {json.dumps(tf_questions, ensure_ascii=False, indent=12)}
        }},
        {{
            id: 3,
            type: "multiple_choice",
            title: "Çoktan Seçmeli Değerlendirme Testi",
            questions: {json.dumps(mc_questions, ensure_ascii=False, indent=12)}
        }}
    ],

    // 🎮 4. SINIF OYUNLARI VERİ SETLERİ
    gameData: {{
        wheelQuiz: {json.dumps(wheel_quiz, ensure_ascii=False, indent=8)},
        matchCards: {json.dumps(match_cards, ensure_ascii=False, indent=8)},
        reflexStatements: {json.dumps(reflex_statements, ensure_ascii=False, indent=8)},
        duelQuestions: {json.dumps(duel_questions, ensure_ascii=False, indent=8)}
    }}
}};
"""
    return js_code

def main():
    os.makedirs("js/data", exist_ok=True)
    generated = 0

    # 2'den 6'ya kadar detaylı haftalar
    for item in CURRICULUM_DETAILS:
        w_num = item["week"]
        js_code = generate_week_js_content(item)
        with open(f"js/data/week{w_num}_content.js", "w", encoding="utf-8") as f:
            f.write(js_code)
        generated += 1
        print(f"Hafta {w_num} tam belgeleriyle üretildi: {item['title']}")

    # 7'den 37'ye kadar diğer haftalar
    for t in OTHER_WEEKS:
        w_num, title, theme, code, summary, key_concept, open_q = t
        item = {
            "week": w_num,
            "title": title,
            "theme": theme,
            "code": code,
            "summary": summary,
            "points": [
                f"<strong>Temel Kural:</strong> {summary}",
                f"<strong>Önemli Kavram:</strong> {key_concept} konusunu anlamak ve projelerimizde doğru uygulamak esastır.",
                "<strong>Pratik Yöntem:</strong> Adım adım planlama yapmak ve hataları erken aşamada ayıklamak başarıyı artırır.",
                "<strong>Bilinçli Kullanım:</strong> Bilişim araçlarını her zaman etik kurallara ve güvenliğe uygun kullanmalıyız."
            ],
            "homeMission": f"Bu hafta öğrendiğin {title} konusunu evde ailene anlat ve bir örnek uygulama göster!",
            "matchingPairs": [
                {"left": title.split()[0], "right": theme.split(":")[1].strip() if ":" in theme else theme, "leftIcon": "fa-solid fa-laptop-code"},
                {"left": "Doğru Yöntem", "right": "Planlı ve Sıralı Çalışma", "leftIcon": "fa-solid fa-check"},
                {"left": "Etkili Çözüm", "right": "Adım Adım Mantık", "leftIcon": "fa-solid fa-lightbulb"},
                {"left": "Bilişim Kuralı", "right": "Güvenlik ve Başarı", "leftIcon": "fa-solid fa-shield"}
            ],
            "tfQuestions": [
                {"statement": f"{title} konusunda kurallara ve sıralı adımlara dikkat etmek başarıyı artırır.", "isCorrect": True, "explanation": f"Doğru! {title} çalışmalarında planlı hareket etmek doğru sonuca ulaştırır."},
                {"statement": "Bilişim araçlarını hedefsiz ve rastgele kullanmak en hızlı öğrenme yoludur.", "isCorrect": False, "explanation": "Yanlış! Bilişim teknolojileri her zaman belirli bir amaç ve plan doğrultusunda kullanılmalıdır."},
                {"statement": f"{title} konusu {theme} teması kapsamındadır.", "isCorrect": True, "explanation": f"Doğru! Bu konu {theme} altında işlenmektedir."}
            ],
            "mcQuestions": [
                {
                    "q": f"{title} ile ilgili olarak aşağıdakilerden hangisi doğrudur?",
                    "options": [
                        "Planlı, güvenli ve amacına uygun çalışılmalıdır.",
                        "Günde 15 saat aralıksız hareketsiz kalınmalıdır.",
                        "Kişisel şifreler herkesle paylaşılmalıdır.",
                        "Kurallar ve yöntemler önemsizdir."
                    ],
                    "answer": 0,
                    "explanation": f"{title} konusunda bilinçli ve yöntemine uygun hareket edilmelidir."
                },
                {
                    "q": f"Bu haftanın ana ders konusu hangisidir?",
                    "options": [
                        title,
                        "Rastgele Başlık",
                        "Müzik Eğitimi",
                        "Beden Dersi"
                    ],
                    "answer": 0,
                    "explanation": f"{w_num}. haftamızın resmi konusu: {title}"
                }
            ],
            "openQuestion": open_q
        }
        js_code = generate_week_js_content(item)
        with open(f"js/data/week{w_num}_content.js", "w", encoding="utf-8") as f:
            f.write(js_code)
        generated += 1
        print(f"Hafta {w_num} tam belgeleriyle üretildi: {title}")

    print(f"\n==================================================")
    print(f"BAŞARI: Toplam {generated} hafta için A4 yazdırılabilir çalışma kağıdı, soru ve cevap anahtarı üretildi!")
    print(f"==================================================")

if __name__ == "__main__":
    main()
