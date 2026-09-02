// ==========================================
// 5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi
// 37 Haftalık MEB Yıllık Planı ve Müfredat Haritası
// ==========================================

const CURRICULUM_DATA = [
    {
        "id": 1,
        "title": "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        "icon": "fa-solid fa-laptop-code",
        "color": "from-blue-600 to-indigo-700",
        "weeks": [
            {
                "week": 1,
                "title": "Bilişim Teknolojilerinin Günlük Yaşamdaki Önemi",
                "code": "BTY.5.1.1. Günlük yaşamda kullanılan bilişim teknolojilerini sınıflandırabilme",
                "outcome": "a) Bilişim teknolojilerine ilişkin temel kavramları belirler. b) Geçmişten günümüze bilişim teknolojilerindeki benzerlikleri ve farklılıkları ilişkilendirir. c) Bilişim teknolojilerini kullanım alanlarına göre gruplandırır.",
                "isAvailable": true,
                "badge": "Hazır"
            },
            {
                "week": 2,
                "title": "Bilişim Teknolojilerinin Etkileri ve Dijital Sağlık",
                "code": "BTY.5.1.2. Bilişim teknolojilerinin birey ve toplum üzerindeki etkilerini özetleyebilme",
                "outcome": "a) Farklı bilişim teknolojilerinin olumlu ve olumsuz yönleri ile ilgili çözümleme yapar. b) Farklı bilişim teknolojilerinin kullanımına göre fiziksel güvenlik önlemleri ile ilgili sınıflandırma yapar. c) Bilişim teknolojilerini kullanmanın beden ve ruh sağlığı üzerindeki etkilerini kendi cümleleriyle ifade eder.",
                "isAvailable": true,
                "badge": "Hazır"
            },
            {
                "week": 3,
                "title": "Dijital Vatandaşlık Uygulamaları",
                "code": "BTY.5.1.3. Dijital vatandaşlık uygulamalarını sınıflandırabilme",
                "outcome": "a) Dijital kimlik kavramını belirler. b) Dijital ayak izinin etkilerini bilişim teknolojilerinin kullanım alanları ile ilişkilendirir. c) Dijital vatandaşlık uygulamalarını kullanım alanlarına göre gruplandır",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 4,
                "title": "Yapay Zekâda Temel Kavram ve Özellikler",
                "code": "BTY.5.1.4. Yapay zekâ ile ilgili temel kavramları ve özellikleri sorgulayabilme",
                "outcome": "a) Yapay zekâ ile ilgili temel kavram ve özelliklere ilişkin merak ettiği konuları tanımlar. b) Yapay zekâ ile ilgili temel kavram ve özellikleri hakkında sorular sorar. c) Yapay zekâ ile ilgili temel kavram ve özellikleri hakkında bilgi toplar. ç) Yapay zekâ ile ilgili temel kavram ve özellikleri hakkında toplanan bilgilerin doğruluğunu değerlendirir. d) Yapay zekânın olası etkilerine ilişkin topladığı bilgiler üzerinden çıkarım yapar.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 5,
                "title": "Bilgisayar Sistemlerinin Kullanımı",
                "code": "BTY.5.1.5. Bilgisayar sistemlerini çözümleyebilme",
                "outcome": "a) Bilgisayar sistemlerinin temel bileşenlerini belirler. b) Bilgisayar sistemlerinin temel bileşenleri arasındaki ilişkileri belirler.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 6,
                "title": "Dosya ve Klasör Yönetimi",
                "code": "BTY.5.1.6. Dosya ve klasör yönetimi ile ilgili temel işlemlerle çalışabilme",
                "outcome": "a) Temel dosya ve klasör düzenleme işlemlerini belirler.\nb) Temel dosya ve klasör düzenleme işlemlerini kullanır.\nc) Dosya ve klasör sıkıştırma işlemlerini verimlilik kapsamında değerlendirir.",
                "isAvailable": false,
                "badge": "Yakında"
            }
        ],
        "themeTitle": "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        "themeIcon": "fa-solid fa-laptop-code",
        "themeColor": "from-blue-600 to-indigo-700"
    },
    {
        "id": 2,
        "title": "2. Tema: Dijital Ürün Tasarımı ve Geliştirme",
        "icon": "fa-solid fa-wand-magic-sparkles",
        "color": "from-purple-600 to-pink-700",
        "weeks": [
            {
                "week": 7,
                "title": "Görsel Düzenleme Programlarına Giriş",
                "code": "BTY.5.2.1 Görsel düzenleme programlarından yararlanabilme",
                "outcome": "a) Görsellerin temel özelliklerini tanır. b) Uygun görsel düzenleme programını belirler. c) Belirlenen görsel düzenleme programının arayüz özelliklerini kullanır. ç) Kullanılan görsel düzenleme programını kullanım alanları/verimliliği açısından değerlendirir.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 8,
                "title": "Görsel Tasarıma Yönelik Kurgu Oluşturma",
                "code": "BTY.5.2.2 Görsel için kurgu oluşturabilme",
                "outcome": "a) Görsel tasarlanacak gerçek hayat problemini belirler. b) Görsel hazırlama sürecinde kullanılacak hikâye/senaryo unsurlarını belirler. c) Belirlenen unsurları kapsayan hikâye/senaryo oluşturur. ç) Hikâyeyi/senaryoyu bütünlük/kullanışlılık açısından değerlendirir.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 9,
                "title": "Görsel Ürün Geliştirme",
                "code": "BTY.5.2.3 Görsel dosyası geliştirebilme",
                "outcome": "a) Tasarlanan hikâye/senaryo unsurlarına uygun bir görsel oluşturur.\nb) Oluşturulan görseli belirlenen ölçütler açısından değerlendirir.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 10,
                "title": "Kelime İşlemci Programlarına Giriş, Kelime İşlemci Dosyası Geliştirme",
                "code": "BTY.5.2.4 Kelime işlemci programlarından yararlanabilme, BTY.5.2.5 Kelime işlemci belgesi oluşturabilme,",
                "outcome": "a)          Kelime işlemci programlarının temel özelliklerini tanır.\nb)          Uygun kelime işlemci programını belirler.\nc)           Belirlenen kelime işlemci programının arayüz özelliklerini kullanır.\nç)           Kullanılan kelime işlemci programını kullanım alanları/verimliliği açısından değerlendirir.\n\na)          Kelime işlemci dosyası oluşturur.\nb)          Oluşturulan kelime işlemci dosyasını belirlenen ölçütler açısından değerlendirir.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 11,
                "title": "Sunum Programlarına Giriş, Sunum Dosyası Oluşturma",
                "code": "BTY.5.2.6 Sunum programlarından yararlanabilme, BTY.5.2.7 Sunum dosyası geliştirebilme",
                "outcome": "a)          Sunum programlarının temel özelliklerini tanır.\nb)          Uygun sunum programını belirler.\nc)           Belirlenen sunum programının arayüz özelliklerini kullanır.\nç)           Kullanılan sunum programını kullanım alanları/verimliliği açısından değerlendirir.\n\na)          Sunum dosyası oluşturur.\nb)          Oluşturulan sunum dosyasını belirlenen ölçütler açısından değerlendirir.",
                "isAvailable": false,
                "badge": "Yakında"
            }
        ],
        "themeTitle": "2. Tema: Dijital Ürün Tasarımı ve Geliştirme",
        "themeIcon": "fa-solid fa-wand-magic-sparkles",
        "themeColor": "from-purple-600 to-pink-700"
    },
    {
        "id": 3,
        "title": "3. Tema: Bilgisayar Ağları ve İletişim",
        "icon": "fa-solid fa-network-wired",
        "color": "from-teal-600 to-emerald-700",
        "weeks": [
            {
                "week": 12,
                "title": "Bilgisayar Ağları ve Ağ Bileşenleri",
                "code": "BTY.5.3.1. Bilgisayar ağları ve bileşenlerini sorgulayabilme",
                "outcome": "a)          Bilgisayar ağları ve bileşenleri ile ilgili merak ettiği konuları tanımlar.\nb)          Bilgisayar ağları ve bileşenleri hakkında sorular sorar.\nc)          Bilgisayar ağları ve bileşenleri hakkında bilgi toplar.\nç)          Bilgisayar ağları ve bileşenleri hakkında topladığı bilgilerin doğruluğunu değerlendirir.\nd)          Bilgisayar ağları ve bileşenleri hakkında topladığı bilgiler hakkında çıkarım yapar.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 13,
                "title": "Bilgisayar Ağ Türleri ve Bağlanma Yöntemleri",
                "code": "BTY.5.3.2. Bilgisayar ağları ve bağlanma yöntemlerini sınıflandırabilme",
                "outcome": "a)          Bilgisayar ağlarında kullanılan bağlanma yöntemlerini belirler.\nb)          Bilgisayar ağlarında kullanılan bağlanma yöntem ve teknolojilerini ilişkilendirir.\nc)           Bilgisayar ağlarında kullanılan bileşenlerin işlevlerini gruplandırır.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 14,
                "title": "Bilgisayar Ağları ve Ağ Bileşenleri",
                "code": "BTY.5.3.3. İnternet ile amacına uygun olarak çalışabilme",
                "outcome": "a)          İnternette bilgiye ulaşmak için uygun kaynakları belirler.\nb)          Bilginin doğruluğunu değerlendirmek için internetteki farklı bilgi kaynaklarını kullanır.\nc).         Bilgiye ulaşmak için kullandığı kaynakları uygunluk/verimlilik kapsamında değerlendirir.",
                "isAvailable": false,
                "badge": "Yakında"
            }
        ],
        "themeTitle": "3. Tema: Bilgisayar Ağları ve İletişim",
        "themeIcon": "fa-solid fa-network-wired",
        "themeColor": "from-teal-600 to-emerald-700"
    },
    {
        "id": 4,
        "title": "4. Tema: Bilişim Etiği ve Siber Güvenlik",
        "icon": "fa-solid fa-shield-halved",
        "color": "from-amber-600 to-orange-700",
        "weeks": [
            {
                "week": 15,
                "title": "Bilişim Etiği ve İlkeleri",
                "code": "BTY.5.4.1. Bilişim etiği kural ve ilkelerini yorumlayabilme",
                "outcome": "a) Bilişim etiği ile ilgili temel kavramları inceler. b) Bilişim etiği kural ve ilkelerini bağlamdan kopmadan günlük hayatta kullanılacak şekilde dönüştürür. c) Bilişim etiği kural ve ilkelerine uygun davranmanın önemini yeniden ifade eder.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 16,
                "title": "Dijital Ortamlarda Gizlilik ve Güvenlik",
                "code": "BTY.5.4.2. Dijital ortamlarda gizlilik ve güvenlik önlemlerini yönetebilme",
                "outcome": "a) Dijital ortamlarda karşılaşabileceği gizlilik ve güvenlik risklerini belirler. b) Dijital ortamlarda alabileceği gizlilik ve güvenlik önlemlerini belirler. c) Dijital ortamlarda bilgi gizliliği ve güvenliğinin temel bileşenlerini ayırt eder. ç) Dijital ortamda karşılaşılan bir durumu gizlilik ve güvenlik önlemleri açısından değerlendirir.",
                "isAvailable": false,
                "badge": "Yakında"
            }
        ],
        "themeTitle": "4. Tema: Bilişim Etiği ve Siber Güvenlik",
        "themeIcon": "fa-solid fa-shield-halved",
        "themeColor": "from-amber-600 to-orange-700"
    },
    {
        "id": 5,
        "title": "5. Tema: Yapay Zekâ ve Geleceğin Teknolojileri",
        "icon": "fa-solid fa-brain",
        "color": "from-rose-600 to-red-700",
        "weeks": [
            {
                "week": 17,
                "title": "Yapay Zekâ Kullanım Alanları ve Alt Dalları",
                "code": "BTY.5.5.1. Yapay zekâ uygulamalarını sınıflandırabilme",
                "outcome": "a)          Yapay zekâ uygulamalarını belirler.\nb)          Yapay zekâ uygulamalarının çalışma sistemi bileşenlerini ilişkilendirir.\nc)           Yapay zekâ uygulamalarını alt boyutlara göre gruplandırır.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 18,
                "title": "Yapay Zekâ Kullanım Alanları ve Alt Dalları",
                "code": "BTY.5.5.1. Yapay zekâ uygulamalarını sınıflandırabilme",
                "outcome": "a)          Yapay zekâ uygulamalarını belirler.\nb)          Yapay zekâ uygulamalarının çalışma sistemi bileşenlerini ilişkilendirir.\nc)           Yapay zekâ uygulamalarını alt boyutlara göre gruplandırır.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 19,
                "title": "Yapay Zekâda Güvenlik",
                "code": "BTY.5.5.2. Yapay zekâya ilişkin etik ve güvenlik/gizlilik önlemlerini yönetebilme",
                "outcome": "a)          Yapay zekâda etik ve güvenlik/gizlilik risklerini belirler.\nb)          Yapay zekâda etik ve güvenlik/gizlilik önlemlerini belirler.\nc)          Yapay zekâda etik ilkelerin ve bilgi güvenliğinin/gizliliğinin temel bileşenlerini ayırt eder.\nç)          Yapay zekâ uygulamalarını etik ilkeler ile e-güvenlik/e-gizlilik açısından değerlendirir.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 20,
                "title": "Yapay Zekâda Güvenlik",
                "code": "BTY.5.5.2. Yapay zekâya ilişkin etik ve güvenlik/gizlilik önlemlerini yönetebilme",
                "outcome": "a)          Yapay zekâda etik ve güvenlik/gizlilik risklerini belirler.\nb)          Yapay zekâda etik ve güvenlik/gizlilik önlemlerini belirler.\nc)          Yapay zekâda etik ilkelerin ve bilgi güvenliğinin/gizliliğinin temel bileşenlerini ayırt eder.\nç)          Yapay zekâ uygulamalarını etik ilkeler ile e-güvenlik/e-gizlilik açısından değerlendirir.",
                "isAvailable": false,
                "badge": "Yakında"
            }
        ],
        "themeTitle": "5. Tema: Yapay Zekâ ve Geleceğin Teknolojileri",
        "themeIcon": "fa-solid fa-brain",
        "themeColor": "from-rose-600 to-red-700"
    },
    {
        "id": 6,
        "title": "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)",
        "icon": "fa-solid fa-code",
        "color": "from-emerald-600 to-cyan-700",
        "weeks": [
            {
                "week": 21,
                "title": "Problem Belirleme ve Algoritma Oluşturma",
                "code": "BTY.5.6.1. Problem çözümü için algoritmik düşünebilme",
                "outcome": "a) Günlük yaşamda karşılaştığı bir problemi belirler. b) Belirlediği problemin girdi ve çıktılarını belirler. c) Belirlediği problemin çözümüne ilişkin işlem adımlarını listeler. ç) İşlem adımlarını akış şeması ile gösterir.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 22,
                "title": "Problem Belirleme ve Algoritma Oluşturma",
                "code": "BTY.5.6.1. Problem çözümü için algoritmik düşünebilme",
                "outcome": "a) Günlük yaşamda karşılaştığı bir problemi belirler. b) Belirlediği problemin girdi ve çıktılarını belirler. c) Belirlediği problemin çözümüne ilişkin işlem adımlarını listeler. ç) İşlem adımlarını akış şeması ile gösterir.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 23,
                "title": "Problem Belirleme ve Algoritma Oluşturma",
                "code": "BTY.5.6.1. Problem çözümü için algoritmik düşünebilme",
                "outcome": "a) Günlük yaşamda karşılaştığı bir problemi belirler. b) Belirlediği problemin girdi ve çıktılarını belirler. c) Belirlediği problemin çözümüne ilişkin işlem adımlarını listeler. ç) İşlem adımlarını akış şeması ile gösterir.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 24,
                "title": "Algoritma Test Etme ve Geri Bildirim Alma",
                "code": "BTY.5.6.2. Algoritma oluşturmada test edebilme-hata ayıklayabilme",
                "outcome": "a)          Geliştirdiği algoritmayı test eder.\nb)          Hataları ayıklayarak algoritmayı kullanıma hazır hâle getirir.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 25,
                "title": "Algoritma Test Etme ve Geri Bildirim Alma",
                "code": "BTY.5.6.2. Algoritma oluşturmada test edebilme-hata ayıklayabilme",
                "outcome": "a)          Geliştirdiği algoritmayı test eder.\nb)          Hataları ayıklayarak algoritmayı kullanıma hazır hâle getirir.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 26,
                "title": "Algoritma Test Etme ve Geri Bildirim Alma",
                "code": "BTY.5.6.2. Algoritma oluşturmada test edebilme-hata ayıklayabilme",
                "outcome": "a)          Geliştirdiği algoritmayı test eder.\nb)          Hataları ayıklayarak algoritmayı kullanıma hazır hâle getirir.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 27,
                "title": "Yazılımda Kullanılan Bileşenler",
                "code": "BTY.5.6.3. Yazılım geliştirme sürecinde kullanılan bileşenlerden yararlanabilme",
                "outcome": "a)          Yazılım geliştirme sürecinin bileşenlerini tanımlar.\nb)          Yazılım geliştirme sürecinin bileşenlerini kullanır.\nc)           Yazılım geliştirme sürecinde kullandığı bileşenleri değerlendirir.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 28,
                "title": "Yazılımda Kullanılan Bileşenler",
                "code": "BTY.5.6.3. Yazılım geliştirme sürecinde kullanılan bileşenlerden yararlanabilme",
                "outcome": "a)          Yazılım geliştirme sürecinin bileşenlerini tanımlar.\nb)          Yazılım geliştirme sürecinin bileşenlerini kullanır.\nc)           Yazılım geliştirme sürecinde kullandığı bileşenleri değerlendirir.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 29,
                "title": "Yazılımda Kullanılan Bileşenler",
                "code": "BTY.5.6.3. Yazılım geliştirme sürecinde kullanılan bileşenlerden yararlanabilme",
                "outcome": "a)          Yazılım geliştirme sürecinin bileşenlerini tanımlar.\nb)          Yazılım geliştirme sürecinin bileşenlerini kullanır.\nc)           Yazılım geliştirme sürecinde kullandığı bileşenleri değerlendirir.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 30,
                "title": "Yazılımda Kullanılan Bileşenler",
                "code": "BTY.5.6.3. Yazılım geliştirme sürecinde kullanılan bileşenlerden yararlanabilme",
                "outcome": "a)          Yazılım geliştirme sürecinin bileşenlerini tanımlar.\nb)          Yazılım geliştirme sürecinin bileşenlerini kullanır.\nc)           Yazılım geliştirme sürecinde kullandığı bileşenleri değerlendirir.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 31,
                "title": "Yazılımda Kullanılan Bileşenler",
                "code": "BTY.5.6.3. Yazılım geliştirme sürecinde kullanılan bileşenlerden yararlanabilme",
                "outcome": "a)          Yazılım geliştirme sürecinin bileşenlerini tanımlar.\nb)          Yazılım geliştirme sürecinin bileşenlerini kullanır.\nc)           Yazılım geliştirme sürecinde kullandığı bileşenleri değerlendirir.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 32,
                "title": "Blok Tabanlı Ortamda Yazılım Geliştirme",
                "code": "BTY.5.6.4. Blok tabanlı ortamda yazılım geliştirme sürecini yönetebilme",
                "outcome": "a)          Blok tabanlı ortamda yazılım geliştirme sürecini planlar.\nb)          Blok tabanlı ortamda yazılımı tasarlar.\nc)          Blok tabanlı ortamda yazılımı oluşturur.\nç)          Blok tabanlı ortamda oluşturulan yazılımı değerlendirir.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 33,
                "title": "Blok Tabanlı Ortamda Yazılım Geliştirme",
                "code": "BTY.5.6.4. Blok tabanlı ortamda yazılım geliştirme sürecini yönetebilme",
                "outcome": "a)          Blok tabanlı ortamda yazılım geliştirme sürecini planlar.\nb)          Blok tabanlı ortamda yazılımı tasarlar.\nc)          Blok tabanlı ortamda yazılımı oluşturur.\nç)          Blok tabanlı ortamda oluşturulan yazılımı değerlendirir.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 34,
                "title": "Blok Tabanlı Ortamda Yazılım Geliştirme",
                "code": "BTY.5.6.4. Blok tabanlı ortamda yazılım geliştirme sürecini yönetebilme",
                "outcome": "a)          Blok tabanlı ortamda yazılım geliştirme sürecini planlar.\nb)          Blok tabanlı ortamda yazılımı tasarlar.\nc)          Blok tabanlı ortamda yazılımı oluşturur.\nç)          Blok tabanlı ortamda oluşturulan yazılımı değerlendirir.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 35,
                "title": "Blok Tabanlı Ortamda Yazılım Geliştirme",
                "code": "BTY.5.6.4. Blok tabanlı ortamda yazılım geliştirme sürecini yönetebilme",
                "outcome": "a)          Blok tabanlı ortamda yazılım geliştirme sürecini planlar.\nb)          Blok tabanlı ortamda yazılımı tasarlar.\nc)          Blok tabanlı ortamda yazılımı oluşturur.\nç)          Blok tabanlı ortamda oluşturulan yazılımı değerlendirir.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 36,
                "title": "Blok Tabanlı Ortamda Yazılım Geliştirme",
                "code": "BTY.5.6.4. Blok tabanlı ortamda yazılım geliştirme sürecini yönetebilme",
                "outcome": "a)          Blok tabanlı ortamda yazılım geliştirme sürecini planlar.\nb)          Blok tabanlı ortamda yazılımı tasarlar.\nc)          Blok tabanlı ortamda yazılımı oluşturur.\nç)          Blok tabanlı ortamda oluşturulan yazılımı değerlendirir.",
                "isAvailable": false,
                "badge": "Yakında"
            },
            {
                "week": 37,
                "title": "Blok Tabanlı Ortamda Yazılım Geliştirme",
                "code": "BTY.5.6.4. Blok tabanlı ortamda yazılım geliştirme sürecini yönetebilme",
                "outcome": "a)          Blok tabanlı ortamda yazılım geliştirme sürecini planlar.\nb)          Blok tabanlı ortamda yazılımı tasarlar.\nc)          Blok tabanlı ortamda yazılımı oluşturur.\nç)          Blok tabanlı ortamda oluşturulan yazılımı değerlendirir.",
                "isAvailable": false,
                "badge": "Yakında"
            }
        ],
        "themeTitle": "6. Tema: Yazılım Tasarımı ve Programlama (Algoritmalar)",
        "themeIcon": "fa-solid fa-code",
        "themeColor": "from-emerald-600 to-cyan-700"
    }
];

window.CURRICULUM_DATA = CURRICULUM_DATA;
