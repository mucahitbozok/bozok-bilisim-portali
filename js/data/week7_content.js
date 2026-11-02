// 5. SINIF BİLİŞİM TEKNOLOJİLERİ VE YAZILIM
// 2. TEMA: DİJİTAL ÜRÜN TASARIMI VE GELİŞTİRME
// 7. KONU (BTY.5.2.1): Görsel Düzenleme Programlarına Giriş
// Eksiksiz ve Kusursuz Akıllı Tahta İçerik Paketi (Öğretmen Bozok)

// İnteraktif Slayt 3: Piksel Büyüteci & Çizim Stüdyosu Motoru
window.week7Slide3PixelGame = {
    color: '#facc15',
    pixels: [
        0,0,1,1,1,1,0,0,
        0,1,0,0,0,0,1,0,
        1,0,1,0,0,1,0,1,
        1,0,0,0,0,0,0,1,
        1,0,1,0,0,1,0,1,
        1,0,0,1,1,0,0,1,
        0,1,0,0,0,0,1,0,
        0,0,1,1,1,1,0,0
    ].map(x => x ? '#facc15' : 0),
    setColor(c) {
        this.color = c;
        if (typeof sounds !== 'undefined') sounds.playClick();
        document.querySelectorAll('.s3-color-btn').forEach(b => {
            const match = (b.dataset.color === c);
            b.classList.toggle('ring-4', match);
            b.classList.toggle('ring-white', match);
        });
    },
    toggle(idx) {
        if (typeof sounds !== 'undefined') sounds.playClick();
        const cur = this.pixels[idx];
        this.pixels[idx] = (cur === this.color) ? 0 : this.color;
        this.render();
    },
    loadPreset(name) {
        if (typeof sounds !== 'undefined') sounds.playFanfare();
        if (name === 'smile') {
            this.pixels = [
                0,0,1,1,1,1,0,0,
                0,1,0,0,0,0,1,0,
                1,0,1,0,0,1,0,1,
                1,0,0,0,0,0,0,1,
                1,0,1,0,0,1,0,1,
                1,0,0,1,1,0,0,1,
                0,1,0,0,0,0,1,0,
                0,0,1,1,1,1,0,0
            ].map(x => x ? '#facc15' : 0);
        } else if (name === 'heart') {
            this.pixels = [
                0,1,1,0,0,1,1,0,
                1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,
                0,1,1,1,1,1,1,0,
                0,0,1,1,1,1,0,0,
                0,0,0,1,1,0,0,0,
                0,0,0,0,0,0,0,0
            ].map(x => x ? '#ef4444' : 0);
        } else if (name === 'rocket') {
            this.pixels = [
                0,0,0,1,1,0,0,0,
                0,0,1,1,1,1,0,0,
                0,0,1,0,0,1,0,0,
                0,1,1,1,1,1,1,0,
                0,1,1,1,1,1,1,0,
                1,1,0,1,1,0,1,1,
                1,0,0,1,1,0,0,1,
                0,0,1,0,0,1,0,0
            ].map(x => x ? '#38bdf8' : 0);
        } else if (name === 'clear') {
            this.pixels = new Array(64).fill(0);
        }
        this.render();
    },
    render() {
        const grid = document.getElementById('s3-pixel-grid');
        if (!grid) return;
        let activeCount = 0;
        grid.innerHTML = this.pixels.map((col, i) => {
            if (col !== 0) activeCount++;
            const bg = col === 0 ? 'background:#0f172a;' : `background:${col};`;
            const shadow = col === 0 ? '' : `box-shadow: 0 0 10px ${col}80;`;
            return `<div onclick="window.week7Slide3PixelGame.toggle(${i})" 
                         style="${bg} ${shadow} width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;" 
                         class="hover:scale-110 active:scale-95"
                         title="Piksel #${i+1}"></div>`;
        }).join('');
        const stat = document.getElementById('s3-pixel-stat');
        if (stat) stat.innerText = `Dolu Piksel: ${activeCount} / 64`;
    }
};

window.WEEK7_CONTENT = {
    weekInfo: {
    "weekNumber": 7,
    "topicNumber": 7,
    "customLabel": "7. Konu",
    "title": "Görsel Düzenleme Programlarına Giriş",
    "code": "BTY.5.2.1 Görsel düzenleme programlarından yararlanabilme",
    "theme": "2. Tema: Dijital Ürün Tasarımı ve Geliştirme",
    "isPending": false,
    "themeColor": "from-purple-600 to-pink-700",
    "learningGoals": [
        "Görsellerin temel yapısını ve özelliklerini tanır (piksel, bitmap ve vektörel grafik).",
        "Görsel ihtiyacına en uygun dosya formatını (.jpg, .png, .gif, .svg, .ai) seçer.",
        "Amaca uygun görsel düzenleme programını (Paint, Canva, GIMP, Photoshop, Illustrator) belirler.",
        "Temel görsel düzenleme işlemlerini (kırpma, döndürme, boyutlandırma, renk ayarı) uygular.",
        "Dijital ürün tasarım sürecini, görsel bütünlüğü, telif haklarını ve yapay zekâ etiğini kavrar."
    ],
    "images": {
        "cover": "assets/slides/veri_isleme_dongusu.jpg",
        "sayfa1": "assets/worksheets/2.1_sayfa1.png",
        "sayfa2": "assets/worksheets/2.1_sayfa2.png",
        "sayfa3": "assets/worksheets/2.1_sayfa3.png",
        "sayfa4": "assets/worksheets/2.1_sayfa4.png"
    }
},
    gameData: {
    "wheelQuiz": [
        {
            "question": "Ekrandaki görüntüyü oluşturan en küçük renkli kare birime ne ad verilir?",
            "options": [
                "Piksel",
                "Megabayt",
                "Vektör",
                "Çözünürlük"
            ],
            "answer": 0,
            "points": 100
        },
        {
            "question": "Telefon veya kamera ile çekilen gerçek hayat fotoğrafları hangi tür görüntüdür?",
            "options": [
                "Vektörel Grafik",
                "Bitmap (Nokta Eşlemli)",
                "3D Model",
                "Metin Dosyası"
            ],
            "answer": 1,
            "points": 100
        },
        {
            "question": "Matematiksel çizgilerle çizilen ve büyütüldüğünde asla bozulmayan görüntü hangisidir?",
            "options": [
                "Bitmap",
                "Piksel Tabanlı",
                "Vektörel Görüntü",
                "Ham Fotoğraf"
            ],
            "answer": 2,
            "points": 150
        },
        {
            "question": "Şeffaf (saydam) arka planı destekleyen ve logolarda sıkça kullanılan uzantı?",
            "options": [
                ".JPG",
                ".PNG",
                ".BMP",
                ".TXT"
            ],
            "answer": 1,
            "points": 100
        },
        {
            "question": "Kısa süreli döngüsel hareketli animasyonlar oluşturmak için kullanılan format?",
            "options": [
                ".GIF",
                ".PDF",
                ".MP3",
                ".DOCX"
            ],
            "answer": 0,
            "points": 100
        },
        {
            "question": "Web sitelerinde büyüyüp küçülen logoların net kalması için kullanılan standart vektör uzantısı?",
            "options": [
                ".SVG",
                ".JPG",
                ".BMP",
                ".GIF"
            ],
            "answer": 0,
            "points": 150
        },
        {
            "question": "Windows ile birlikte gelen temel ve pratik resim çizim programı hangisidir?",
            "options": [
                "Adobe Photoshop",
                "Paint",
                "Blender",
                "Canva"
            ],
            "answer": 1,
            "points": 100
        },
        {
            "question": "Hazır şablonlarla web üzerinden kolayca afiş ve broşür hazırlanan popüler araç?",
            "options": [
                "Canva",
                "Excel",
                "Not Defteri",
                "Hesap Makinesi"
            ],
            "answer": 0,
            "points": 100
        },
        {
            "question": "Piksel tabanlı profesyonel fotoğraf düzenleme ve rötuş programı hangisidir?",
            "options": [
                "Photoshop",
                "Word",
                "PowerPoint",
                "Scratch"
            ],
            "answer": 0,
            "points": 150
        },
        {
            "question": "Fotoğrafın istenmeyen kenar alanlarını kesip çıkarma işlemine ne ad verilir?",
            "options": [
                "Kırpma (Crop)",
                "Döndürme (Rotate)",
                "Boyutlandırma",
                "Filtreleme"
            ],
            "answer": 0,
            "points": 100
        },
        {
            "question": "Yan veya baş aşağı çekilmiş fotoğrafı dik ve düzgün konuma getirme işlemi?",
            "options": [
                "Döndürme (Rotate)",
                "Kırpma",
                "Doygunluk",
                "Silme"
            ],
            "answer": 0,
            "points": 100
        },
        {
            "question": "Dijital ürün tasarım sürecinin ilk ve en önemli aşaması hangisidir?",
            "options": [
                "Problemi Belirleme",
                "Hemen Baskıya Gönderme",
                "Rastgele Boyama",
                "Yazı Tipini Büyütme"
            ],
            "answer": 0,
            "points": 150
        }
    ],
    "matchConfig": {
        "matchCount": 8,
        "timeLimit": 60
    },
    "matchCards": [
        {
            "id": 1,
            "text": "Piksel",
            "category": "Görüntünün En Küçük Renkli Karesi",
            "icon": "fa-solid fa-border-all"
        },
        {
            "id": 2,
            "text": "Bitmap",
            "category": "Piksellerden Oluşan Gerçekçi Fotoğraf",
            "icon": "fa-solid fa-camera"
        },
        {
            "id": 3,
            "text": "Vektörel",
            "category": "Sonsuz Büyüyebilen Çizgisel Grafik",
            "icon": "fa-solid fa-bezier-curve"
        },
        {
            "id": 4,
            "text": ".PNG",
            "category": "Saydam / Şeffaf Arka Plan Destekli Format",
            "icon": "fa-solid fa-clone"
        },
        {
            "id": 5,
            "text": ".GIF",
            "category": "Kısa Süreli Hareketli Animasyon",
            "icon": "fa-solid fa-play"
        },
        {
            "id": 6,
            "text": "Kırpma (Crop)",
            "category": "İstenmeyen Kenarları Kesip Atma",
            "icon": "fa-solid fa-crop-simple"
        },
        {
            "id": 7,
            "text": "Canva",
            "category": "Hazır Şablonlu Web Afiş Tasarım Aracı",
            "icon": "fa-solid fa-cloud"
        },
        {
            "id": 8,
            "text": "Photoshop",
            "category": "Profesyonel Piksel Fotoğraf Düzenleyici",
            "icon": "fa-solid fa-wand-magic-sparkles"
        }
    ],
    "reflexStatements": [
        {
            "text": "Telefonla çekilen manzara fotoğrafları piksel tabanlı (Bitmap) görüntüdür.",
            "correct": true
        },
        {
            "text": "Vektörel görüntüler çok fazla büyütüldüğünde kenarları hemen bozulur ve piksellenir.",
            "correct": false
        },
        {
            "text": ".PNG formatı şeffaf (saydam) arka planı destekler.",
            "correct": true
        },
        {
            "text": ".JPG fotoğraflar şeffaf arka planı desteklemez, boşlukları renkle doldurur.",
            "correct": true
        },
        {
            "text": "Paint, profesyonel 3 boyutlu film animasyonları hazırlamak için tasarlanmıştır.",
            "correct": false
        },
        {
            "text": ".SVG dosyaları web tarayıcılarında çalışan ölçeklenebilir vektör formatıdır.",
            "correct": true
        },
        {
            "text": "Çözünürlük bir görseldeki veya ekrandaki toplam piksel yoğunluğudur.",
            "correct": true
        },
        {
            "text": "Fotoğrafı döndürmek (Rotate) sadece görselin parlaklık ayarını artırır.",
            "correct": false
        },
        {
            "text": "Kırpma (Crop) işlemi fotoğrafın kenarındaki gereksiz detayları kesmeyi sağlar.",
            "correct": true
        },
        {
            "text": "İnternette bulduğumuz her resmi sahibinden izin almadan dilediğimizce satabiliriz.",
            "correct": false
        },
        {
            "text": "Adobe Illustrator piksel tabanlı değil vektörel çizim programıdır.",
            "correct": true
        },
        {
            "text": ".GIF formatı en fazla 256 renk desteklediği için fotoğraf kalitesi düşüktür.",
            "correct": true
        },
        {
            "text": "Boyutlandırma yaparken en-boy oranını kilitlemek fotoğrafın basık görünmesini engeller.",
            "correct": true
        },
        {
            "text": "Tasarım sürecinin ilk aşaması hemen renkleri seçip matbaaya göndermektir.",
            "correct": false
        },
        {
            "text": "GIMP, açık kaynak kodlu ve ücretsiz gelişmiş bir görsel düzenleyicidir.",
            "correct": true
        },
        {
            "text": "Bitmap görüntüler çizgisel formüllerle değil renkli piksellerle oluşur.",
            "correct": true
        }
    ],
    "duelQuestions": [
        {
            "q": "Görüntüyü oluşturan en küçük renkli kare birim hangisidir?",
            "options": [
                "Piksel",
                "Bit",
                "Bayt",
                "Klasör"
            ],
            "answer": 0
        },
        {
            "q": "Telefon kamerasıyla çekilen okul fotoğrafı hangi tür görüntüdür?",
            "options": [
                "Vektörel",
                "Bitmap",
                "Algoritma",
                "Ses Dalgaları"
            ],
            "answer": 1
        },
        {
            "q": "Sonsuz büyütüldüğünde asla kalitesi bozulmayan görüntü türü?",
            "options": [
                "Bitmap",
                "Vektörel",
                "Piksel Haritası",
                "Ham Baskı"
            ],
            "answer": 1
        },
        {
            "q": "Şeffaf (saydam) arka planı destekleyen görüntü uzantısı hangisidir?",
            "options": [
                ".PNG",
                ".JPG",
                ".BMP",
                ".TXT"
            ],
            "answer": 0
        },
        {
            "q": "Kısa döngülü hareketli animasyonları oynatan dosya formatı?",
            "options": [
                ".MP3",
                ".GIF",
                ".PDF",
                ".DOCX"
            ],
            "answer": 1
        },
        {
            "q": "Bir şirket logosunu hem küçük rozete hem gökdelene basmak için hangi tür uygundur?",
            "options": [
                "Bitmap",
                "Vektörel",
                "Piksel Izgarası",
                "Ekran Görüntüsü"
            ],
            "answer": 1
        },
        {
            "q": "Web standartlarında kullanılan en yaygın vektör dosya uzantısı hangisidir?",
            "options": [
                ".SVG",
                ".JPG",
                ".BMP",
                ".GIF"
            ],
            "answer": 0
        },
        {
            "q": "Windows işletim sistemiyle hazır gelen pratik çizim programı?",
            "options": [
                "Canva",
                "Paint",
                "Illustrator",
                "Tinkercad"
            ],
            "answer": 1
        },
        {
            "q": "Hazır şablonlarla webde afiş ve sunum yapmayı kolaylaştıran popüler araç?",
            "options": [
                "Canva",
                "Excel",
                "Hesap Makinesi",
                "BIOS"
            ],
            "answer": 0
        },
        {
            "q": "Profesyonel piksel tabanlı fotoğraf rötuş programı hangisidir?",
            "options": [
                "Adobe Photoshop",
                "Adobe Illustrator",
                "Not Defteri",
                "WordPad"
            ],
            "answer": 0
        },
        {
            "q": "Fotoğrafın kenarlarındaki gereksiz alanları kesip atma işlemine ne ad verilir?",
            "options": [
                "Kırpma (Crop)",
                "Döndürme",
                "Doygunluk",
                "Yakınlaştırma"
            ],
            "answer": 0
        },
        {
            "q": "Ters veya yan çekilmiş bir fotoğrafı düzgün hâle getirme işlemi?",
            "options": [
                "Döndürme (Rotate)",
                "Kırpma",
                "Silme",
                "Boyutlandırma"
            ],
            "answer": 0
        },
        {
            "q": "Afiş tasarlarken uzaktan okunabilirliği artırmak için neye dikkat edilir?",
            "options": [
                "Zıt (Kontrast) Renkler",
                "Çok Küçük Yazı",
                "10 Farklı Yazı Tipi",
                "Karmaşık Arka Plan"
            ],
            "answer": 0
        },
        {
            "q": "İnternetten bulduğumuz bir görseli kullanırken nasıl davranmalıyız?",
            "options": [
                "İzin Almalı / Telifsiz Seçmeliyiz",
                "İzinsiz Satmalıyız",
                "İmzayı Silmeliyiz",
                "Fark Etmez"
            ],
            "answer": 0
        },
        {
            "q": "Tasarım sürecinin ilk aşaması hangisidir?",
            "options": [
                "Problemi Belirleme",
                "Hemen Çizim",
                "Matbaa Baskısı",
                "Filtre Seçimi"
            ],
            "answer": 0
        }
    ]
},
    extraGames: [
    {
        "id": "piksel_dedektifleri",
        "badge": "Dedektiflik Görevi 🔍",
        "badgeColor": "text-indigo-300",
        "title": "1. Piksel Dedektifleri",
        "desc": "Bitmap, vektörel görüntü ve piksellerin gizemini büyüteçle çöz! 10 gizemli soru, 100 puan.",
        "icon": "fa-solid fa-magnifying-glass",
        "iconBg": "bg-indigo-500/30 text-indigo-300",
        "cardGradient": "from-indigo-950/90 via-slate-900 to-purple-950/90",
        "border": "border-indigo-500/50",
        "descColor": "text-indigo-100",
        "btnText": "Dedektifliğe Başla!",
        "btnIcon": "fa-solid fa-magnifying-glass",
        "btnGradient": "from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-black",
        "action": "app.openStandaloneGame('games/piksel_dedektifleri.html', 'Piksel Dedektifleri | Öğretmen Bozok')"
    },
    {
        "id": "uzanti_avcilari",
        "badge": "Hedef Avı 🎯",
        "badgeColor": "text-emerald-300",
        "title": "2. Uzantı Avcıları",
        "desc": "JPG, PNG, GIF, BMP, SVG ve AI dosya uzantılarını hedefe al, doğru dosya türlerini eksiksiz avla!",
        "icon": "fa-solid fa-crosshairs",
        "iconBg": "bg-emerald-500/30 text-emerald-300",
        "cardGradient": "from-emerald-950/90 via-slate-900 to-teal-950/90",
        "border": "border-emerald-500/50",
        "descColor": "text-emerald-100",
        "btnText": "Avı Başlat!",
        "btnIcon": "fa-solid fa-bullseye",
        "btnGradient": "from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black",
        "action": "app.openStandaloneGame('games/uzanti_avcilari.html', 'Uzantı Avcıları | Öğretmen Bozok')"
    },
    {
        "id": "hangi_programi_secmeliyim",
        "badge": "Tasarım Stüdyosu 🎨",
        "badgeColor": "text-fuchsia-300",
        "title": "3. Hangi Programı Seçmeliyim?",
        "desc": "Paint, Canva, Photoshop, Illustrator, GIMP ve Tinkercad arasından göreve en uygun aracı seç!",
        "icon": "fa-solid fa-palette",
        "iconBg": "bg-fuchsia-500/30 text-fuchsia-300",
        "cardGradient": "from-fuchsia-950/90 via-slate-900 to-pink-950/90",
        "border": "border-fuchsia-500/50",
        "descColor": "text-fuchsia-100",
        "btnText": "Stüdyoya Gir!",
        "btnIcon": "fa-solid fa-wand-magic-sparkles",
        "btnGradient": "from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white font-black",
        "action": "app.openStandaloneGame('games/hangi_programi_secmeliyim.html', 'Hangi Programı Seçmeliyim? | Öğretmen Bozok')"
    },
    {
        "id": "tasarim_ustalari",
        "badge": "Usta Tasarımcı 👑",
        "badgeColor": "text-amber-300",
        "title": "4. Tasarım Ustaları",
        "desc": "Afiş analizi, görsel bütünlük, okunabilirlik, telif hakları ve yapay zekâ etiği arenası!",
        "icon": "fa-solid fa-crown",
        "iconBg": "bg-amber-500/30 text-amber-300",
        "cardGradient": "from-amber-950/90 via-slate-900 to-orange-950/90",
        "border": "border-amber-500/50",
        "descColor": "text-amber-100",
        "btnText": "Arenaya Çık!",
        "btnIcon": "fa-solid fa-trophy",
        "btnGradient": "from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black",
        "action": "app.openStandaloneGame('games/tasarim_ustalari.html', 'Tasarım Ustaları | Öğretmen Bozok')"
    },
    {
        "id": "gorsel_duzenleme_kelime_avi",
        "badge": "Kelime Avı 🧩",
        "badgeColor": "text-purple-300",
        "title": "5. Görsel Düzenleme Kelime Avı",
        "desc": "12x12 harf matrisinde gizlenen 10 görsel düzenleme, piksel ve vektör terimini bul! Her oyunda kelimelerin yerleri rastgele değişir!",
        "icon": "fa-solid fa-puzzle-piece",
        "iconBg": "bg-purple-500/30 text-purple-300",
        "cardGradient": "from-purple-950/90 via-slate-900 to-pink-950/90",
        "border": "border-purple-500/50",
        "descColor": "text-purple-100",
        "btnText": "Kelime Avına Başla!",
        "btnIcon": "fa-solid fa-crosshairs",
        "btnGradient": "from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black",
        "action": "app.openStandaloneGame('games/gorsel_duzenleme_kelime_avi.html', 'Görsel Düzenleme Kelime Avı | Öğretmen Bozok')"
    }
],
    slides: [
    {
        "id": 1,
        "title": "GÖRSEL DÜZENLEME PROGRAMLARINA GİRİŞ 🎨",
        "subtitle": "7. KONU • BTY.5.2.1",
        "topic": "2. TEMA • BTY.5.2.1",
        "badge": "GİRİŞ & KAZANIM",
        "icon": "fa-solid fa-wand-magic-sparkles",
        "bgColor": "from-slate-900 via-purple-950 to-indigo-950",
        "gradient": "from-slate-900 via-purple-950 to-indigo-950",
        "content": "\n            <div class=\"grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-6xl mx-auto my-auto py-2\">\n                <div class=\"md:col-span-7 space-y-4 text-left\">\n                    <div class=\"flex items-center gap-2 flex-wrap\">\n                        <span class=\"px-4 py-1.5 bg-purple-500/20 text-purple-300 font-extrabold text-sm sm:text-base uppercase tracking-wider rounded-full border border-purple-400/40 shadow-sm\">\n                            2. TEMA: DİJİTAL ÜRÜN TASARIMI VE GELİŞTİRME\n                        </span>\n                        <span class=\"px-3 py-1 bg-pink-500/20 text-pink-300 font-bold text-xs rounded-full border border-pink-400/30\">\n                            ⚡ BTY.5.2.1\n                        </span>\n                    </div>\n\n                    <h1 class=\"text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-xl\">\n                        GÖRSEL DÜZENLEME <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300\">PROGRAMLARI</span>\n                    </h1>\n\n                    <div class=\"p-4 sm:p-5 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-yellow-400/40 shadow-xl space-y-2\">\n                        <div class=\"flex items-center gap-2 text-yellow-300 font-black text-xs sm:text-sm uppercase tracking-widest\">\n                            <i class=\"fa-solid fa-bullseye text-base text-yellow-400\"></i>\n                            <span>MEB RESMÎ DERS KAZANIMI:</span>\n                        </div>\n                        <div contenteditable=\"true\" spellcheck=\"false\" class=\"text-base sm:text-lg md:text-xl font-extrabold text-white leading-snug bg-black/30 p-2.5 rounded-xl border border-yellow-400/30 cursor-text focus:outline-none focus:ring-2 focus:ring-yellow-400\" title=\"Kazanım metnini akıllı tahtada doğrudan düzenleyebilirsiniz\">\n                            BTY.5.2.1. Görsel düzenleme programlarından yararlanabilme\n                        </div>\n                        <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-xs text-purple-200\">\n                            <div>• a) Görsellerin temel yapısını tanır (piksel, bitmap, vektörel).</div>\n                            <div>• b) Uygun dosya biçimini (JPG, PNG, GIF, SVG, AI) seçer.</div>\n                            <div>• c) Uygun programı seçip temel düzenlemeleri yapar.</div>\n                            <div>• ç) Tasarım süreci, telif ve yapay zekâ etiğini kavrar.</div>\n                        </div>\n                    </div>\n\n                    <div class=\"p-3.5 sm:p-4 bg-purple-950/80 rounded-2xl border border-purple-400/30 flex items-start gap-3 shadow-lg\">\n                        <div class=\"w-10 h-10 rounded-xl bg-purple-500/30 text-yellow-300 flex items-center justify-center text-xl shrink-0 mt-0.5\">\n                            <i class=\"fa-solid fa-lightbulb\"></i>\n                        </div>\n                        <p class=\"text-sm sm:text-base font-semibold text-purple-100 leading-relaxed\">\n                            “Piksellerden vektörlere, dosya uzantılarından afiş tasarımına kadar dijital görsel dünyasını birlikte keşfetmeye hazır mısınız?”\n                        </p>\n                    </div>\n\n                    <div class=\"pt-1 flex items-center gap-3 flex-wrap\">\n                        <span class=\"inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-yellow-300 font-bold text-xs sm:text-sm shadow-md\">\n                            <i class=\"fa-solid fa-chalkboard-user text-base\"></i>\n                            <span>Öğretmen Bozok • Bozok Bilişim Portalı</span>\n                        </span>\n                        <button onclick=\"app.nextSlide(); sounds.playClick();\" class=\"px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95\">\n                            <span>Ders Başlasın</span>\n                            <i class=\"fa-solid fa-arrow-right\"></i>\n                        </button>\n                    </div>\n                </div>\n\n                <div class=\"md:col-span-5 flex justify-center\">\n                    <div class=\"relative w-full max-w-sm sm:max-w-md rounded-3xl p-3 bg-gradient-to-tr from-pink-500/30 via-purple-500/20 to-cyan-500/30 border-2 border-pink-400/30 shadow-2xl backdrop-blur-sm group\">\n                        <div class=\"relative w-full aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/20\">\n                            <img src=\"assets/slides/veri_isleme_dongusu.jpg\" alt=\"Görsel Düzenleme Portalı\" class=\"w-full h-full object-cover group-hover:scale-105 transition-transform duration-700\">\n                            <div class=\"absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex flex-col justify-end p-3.5 pointer-events-none\">\n                                <span class=\"px-3 py-1 bg-pink-500/90 text-white font-extrabold text-xs rounded-full shadow-lg backdrop-blur-md w-fit mb-1 border border-pink-300/40\">\n                                    🎨 2. Tema Tasarım İstasyonu\n                                </span>\n                                <p class=\"text-[11px] sm:text-xs text-slate-200 font-semibold drop-shadow-md\">\n                                    Pikseller, Dosya Formatları, Programlar & Dijital Tasarım\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"grid grid-cols-3 gap-2 mt-2.5\">\n                            <div class=\"p-2 bg-slate-900/90 rounded-xl border border-pink-500/40 text-center\">\n                                <span class=\"text-xs font-black text-pink-400 block\"><i class=\"fa-solid fa-border-all mr-1\"></i>Piksel</span>\n                                <span class=\"text-[10px] text-slate-300\">Bitmap & Vektör</span>\n                            </div>\n                            <div class=\"p-2 bg-slate-900/90 rounded-xl border border-purple-500/40 text-center\">\n                                <span class=\"text-xs font-black text-purple-400 block\"><i class=\"fa-solid fa-file-image mr-1\"></i>Formatlar</span>\n                                <span class=\"text-[10px] text-slate-300\">JPG, PNG, SVG</span>\n                            </div>\n                            <div class=\"p-2 bg-slate-900/90 rounded-xl border border-cyan-500/40 text-center\">\n                                <span class=\"text-xs font-black text-cyan-400 block\"><i class=\"fa-solid fa-palette mr-1\"></i>Araçlar</span>\n                                <span class=\"text-[10px] text-slate-300\">Canva & GIMP</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 2,
        "title": "Bölüm 1: Görsel Nedir? Fotoğraf, Resim ve Çizim Farkı 🖼️",
        "subtitle": "Görsel Türleri & Üretim Şekilleri",
        "topic": "2. TEMA • BTY.5.2.1",
        "badge": "BÖLÜM 1",
        "icon": "fa-solid fa-image",
        "bgColor": "from-slate-900 via-indigo-950 to-purple-950",
        "gradient": "from-slate-900 via-indigo-950 to-purple-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-6 my-auto\">\n                <div class=\"p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center\">\n                    <p class=\"text-base sm:text-xl font-bold text-yellow-300 leading-relaxed\">\n                        “Gözümüzle gördüğümüz, bilgi veya duygu aktaran her türlü çizim, fotoğraf, grafik ve resme <strong>GÖRSEL</strong> denir.”\n                    </p>\n                </div>\n\n                <div class=\"grid grid-cols-1 md:grid-cols-3 gap-5\">\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border-2 border-sky-400/50 shadow-xl space-y-3\">\n                        <div class=\"w-14 h-14 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center text-3xl\">\n                            <i class=\"fa-solid fa-camera\"></i>\n                        </div>\n                        <h3 class=\"text-xl font-black text-white\">1. Fotoğraf</h3>\n                        <p class=\"text-xs text-sky-200 font-semibold\">Işığın kamera sensörüne kaydı</p>\n                        <p class=\"text-sm text-slate-300 leading-relaxed\">\n                            Telefon veya fotoğraf makinesiyle çekilen gerçek dünya kayıtlarıdır. Milyonlarca renkli pikselden oluşur.\n                        </p>\n                        <span class=\"inline-block px-3 py-1 bg-sky-500/20 text-sky-300 rounded-lg text-xs font-bold\">Örnek: Manzara, Portre</span>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border-2 border-emerald-400/50 shadow-xl space-y-3\">\n                        <div class=\"w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl\">\n                            <i class=\"fa-solid fa-paintbrush\"></i>\n                        </div>\n                        <h3 class=\"text-xl font-black text-white\">2. Resim & Çizim</h3>\n                        <p class=\"text-xs text-emerald-200 font-semibold\">Sanatsal ifade & El emeği</p>\n                        <p class=\"text-sm text-slate-300 leading-relaxed\">\n                            Boya, fırça, kâğıt veya grafik tablet kalemiyle insanın hayal gücünü yansıtarak çizdiği sanatsal eserlerdir.\n                        </p>\n                        <span class=\"inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-lg text-xs font-bold\">Örnek: Yağlı boya, Karakalem</span>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border-2 border-purple-400/50 shadow-xl space-y-3\">\n                        <div class=\"w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-3xl\">\n                            <i class=\"fa-solid fa-shapes\"></i>\n                        </div>\n                        <h3 class=\"text-xl font-black text-white\">3. Grafik & İllüstrasyon</h3>\n                        <p class=\"text-xs text-purple-200 font-semibold\">Dijital tasarım & Semboller</p>\n                        <p class=\"text-sm text-slate-300 leading-relaxed\">\n                            Bilgisayar yazılımlarıyla oluşturulan logolar, şemalar, afiş grafikleri ve infografiklerdir. Çoğunlukla vektöreldir.\n                        </p>\n                        <span class=\"inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-xs font-bold\">Örnek: Okul Logosu, Web İkonu</span>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 3,
        "title": "Piksel Nedir? İnteraktif Piksel Stüdyosu 🔍",
        "subtitle": "Picture + Element = Pixel",
        "topic": "2. TEMA • BTY.5.2.1",
        "badge": "İNTERAKTİF PİKSEL",
        "icon": "fa-solid fa-magnifying-glass-plus",
        "bgColor": "from-slate-900 via-purple-950 to-indigo-950",
        "gradient": "from-slate-900 via-purple-950 to-indigo-950",
        "content": "\n                <div class=\"grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto my-auto py-2\">\n                    <!-- Sol Taraf: Tanım, Kurallar ve Palet -->\n                    <div class=\"md:col-span-6 space-y-4 text-left\">\n                        <div class=\"p-4 rounded-2xl bg-indigo-900/60 border border-indigo-400/40 space-y-2\">\n                            <span class=\"text-xs font-extrabold uppercase tracking-wider text-yellow-300\">Temel Tanım</span>\n                            <h3 class=\"text-xl sm:text-2xl font-black text-white\">Picture (Resim) + Element (Öğe)</h3>\n                            <p class=\"text-xs sm:text-sm text-slate-200 leading-relaxed\">\n                                Dijital ekrandaki görüntüyü oluşturan, yan yana dizilmiş <strong>en küçük renkli kare birime PİKSEL</strong> denir.\n                            </p>\n                        </div>\n\n                        <!-- Palet & Renk Seçimi -->\n                        <div class=\"p-3.5 bg-slate-800/90 rounded-2xl border border-slate-700 space-y-2.5\">\n                            <div class=\"flex items-center justify-between text-xs font-black text-yellow-300\">\n                                <span>🎨 Çizim Rengini Seç:</span>\n                                <span id=\"s3-pixel-stat\" class=\"text-cyan-300 font-mono\">Dolu Piksel: 24 / 64</span>\n                            </div>\n                            <div class=\"flex items-center gap-2 flex-wrap\">\n                                <button onclick=\"window.week7Slide3PixelGame.setColor('#facc15')\" data-color=\"#facc15\" class=\"s3-color-btn w-9 h-9 rounded-xl bg-yellow-400 ring-4 ring-white shadow transition-all hover:scale-110 active:scale-95\" title=\"Sarı\"></button>\n                                <button onclick=\"window.week7Slide3PixelGame.setColor('#38bdf8')\" data-color=\"#38bdf8\" class=\"s3-color-btn w-9 h-9 rounded-xl bg-sky-400 shadow transition-all hover:scale-110 active:scale-95\" title=\"Mavi / Camgöbeği\"></button>\n                                <button onclick=\"window.week7Slide3PixelGame.setColor('#ef4444')\" data-color=\"#ef4444\" class=\"s3-color-btn w-9 h-9 rounded-xl bg-red-500 shadow transition-all hover:scale-110 active:scale-95\" title=\"Kırmızı\"></button>\n                                <button onclick=\"window.week7Slide3PixelGame.setColor('#10b981')\" data-color=\"#10b981\" class=\"s3-color-btn w-9 h-9 rounded-xl bg-emerald-500 shadow transition-all hover:scale-110 active:scale-95\" title=\"Yeşil\"></button>\n                                <button onclick=\"window.week7Slide3PixelGame.setColor('#c084fc')\" data-color=\"#c084fc\" class=\"s3-color-btn w-9 h-9 rounded-xl bg-purple-400 shadow transition-all hover:scale-110 active:scale-95\" title=\"Mor\"></button>\n                                <button onclick=\"window.week7Slide3PixelGame.setColor('#0f172a')\" data-color=\"#0f172a\" class=\"s3-color-btn w-9 h-9 rounded-xl bg-slate-900 border border-slate-600 shadow transition-all hover:scale-110 active:scale-95 flex items-center justify-center text-xs text-slate-300 font-bold\" title=\"Silgi / Temizle\">\n                                    <i class=\"fa-solid fa-eraser\"></i>\n                                </button>\n                            </div>\n                        </div>\n\n                        <!-- Şablon Butonları -->\n                        <div class=\"flex items-center gap-2 flex-wrap\">\n                            <span class=\"text-xs font-bold text-slate-400\">Hazır Şablonlar:</span>\n                            <button onclick=\"window.week7Slide3PixelGame.loadPreset('smile')\" class=\"px-3 py-1.5 bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-300 border border-yellow-400/40 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95\">\n                                😀 Gülen Yüz\n                            </button>\n                            <button onclick=\"window.week7Slide3PixelGame.loadPreset('heart')\" class=\"px-3 py-1.5 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95\">\n                                ❤️ Kalp\n                            </button>\n                            <button onclick=\"window.week7Slide3PixelGame.loadPreset('rocket')\" class=\"px-3 py-1.5 bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95\">\n                                🚀 Roket\n                            </button>\n                            <button onclick=\"window.week7Slide3PixelGame.loadPreset('clear')\" class=\"px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95\">\n                                🧹 Temizle\n                            </button>\n                        </div>\n                    </div>\n\n                    <!-- Sağ Taraf: 8x8 İnteraktif Akıllı Tahta Kanvası -->\n                    <div class=\"md:col-span-6 flex flex-col items-center justify-center p-5 bg-slate-900/90 rounded-3xl border-2 border-yellow-400/50 shadow-2xl space-y-3\">\n                        <div class=\"flex items-center justify-between w-full\">\n                            <span class=\"text-xs font-black uppercase tracking-widest text-yellow-300\">\n                                <i class=\"fa-solid fa-hand-pointer mr-1.5 animate-bounce\"></i> Akıllı Tahta Dokunmatik Kanvas\n                            </span>\n                            <span class=\"text-[11px] font-bold text-indigo-300\">8 x 8 = 64 Piksel</span>\n                        </div>\n\n                        <div id=\"s3-pixel-grid\" class=\"grid grid-cols-8 gap-1.5 p-3.5 bg-slate-950 rounded-2xl border-2 border-indigo-400/50 shadow-inner w-full max-w-[340px]\">\n                            <div onclick=\"window.week7Slide3PixelGame.toggle(0)\" id=\"s3-px-0\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #1\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(1)\" id=\"s3-px-1\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #2\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(2)\" id=\"s3-px-2\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #3\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(3)\" id=\"s3-px-3\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #4\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(4)\" id=\"s3-px-4\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #5\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(5)\" id=\"s3-px-5\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #6\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(6)\" id=\"s3-px-6\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #7\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(7)\" id=\"s3-px-7\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #8\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(8)\" id=\"s3-px-8\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #9\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(9)\" id=\"s3-px-9\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #10\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(10)\" id=\"s3-px-10\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #11\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(11)\" id=\"s3-px-11\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #12\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(12)\" id=\"s3-px-12\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #13\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(13)\" id=\"s3-px-13\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #14\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(14)\" id=\"s3-px-14\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #15\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(15)\" id=\"s3-px-15\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #16\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(16)\" id=\"s3-px-16\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #17\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(17)\" id=\"s3-px-17\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #18\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(18)\" id=\"s3-px-18\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #19\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(19)\" id=\"s3-px-19\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #20\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(20)\" id=\"s3-px-20\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #21\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(21)\" id=\"s3-px-21\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #22\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(22)\" id=\"s3-px-22\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #23\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(23)\" id=\"s3-px-23\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #24\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(24)\" id=\"s3-px-24\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #25\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(25)\" id=\"s3-px-25\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #26\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(26)\" id=\"s3-px-26\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #27\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(27)\" id=\"s3-px-27\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #28\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(28)\" id=\"s3-px-28\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #29\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(29)\" id=\"s3-px-29\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #30\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(30)\" id=\"s3-px-30\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #31\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(31)\" id=\"s3-px-31\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #32\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(32)\" id=\"s3-px-32\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #33\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(33)\" id=\"s3-px-33\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #34\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(34)\" id=\"s3-px-34\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #35\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(35)\" id=\"s3-px-35\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #36\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(36)\" id=\"s3-px-36\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #37\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(37)\" id=\"s3-px-37\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #38\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(38)\" id=\"s3-px-38\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #39\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(39)\" id=\"s3-px-39\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #40\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(40)\" id=\"s3-px-40\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #41\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(41)\" id=\"s3-px-41\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #42\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(42)\" id=\"s3-px-42\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #43\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(43)\" id=\"s3-px-43\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #44\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(44)\" id=\"s3-px-44\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #45\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(45)\" id=\"s3-px-45\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #46\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(46)\" id=\"s3-px-46\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #47\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(47)\" id=\"s3-px-47\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #48\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(48)\" id=\"s3-px-48\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #49\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(49)\" id=\"s3-px-49\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #50\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(50)\" id=\"s3-px-50\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #51\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(51)\" id=\"s3-px-51\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #52\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(52)\" id=\"s3-px-52\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #53\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(53)\" id=\"s3-px-53\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #54\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(54)\" id=\"s3-px-54\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #55\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(55)\" id=\"s3-px-55\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #56\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(56)\" id=\"s3-px-56\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #57\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(57)\" id=\"s3-px-57\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #58\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(58)\" id=\"s3-px-58\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #59\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(59)\" id=\"s3-px-59\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #60\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(60)\" id=\"s3-px-60\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #61\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(61)\" id=\"s3-px-61\" style=\"background:#facc15; box-shadow:0 0 10px #facc1580; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #62\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(62)\" id=\"s3-px-62\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #63\"></div><div onclick=\"window.week7Slide3PixelGame.toggle(63)\" id=\"s3-px-63\" style=\"background:#0f172a; width:100%; aspect-ratio:1/1; border-radius:6px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition:all 0.15s;\" class=\"hover:scale-110 active:scale-95\" title=\"Piksel #64\"></div>\n                        </div>\n\n                        <p class=\"text-[11px] text-center text-slate-300 font-medium\">\n                            💡 <strong>Akıllı Tahta İpucu:</strong> Karelere dokunarak kendi piksel çiziminizi yapabilir ya da hazır şablonları açıp pikselleri yakından inceleyebilirsiniz!\n                        </p>\n                    </div>\n\n                    <img src=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'/>\" \n                         onload=\"window.week7Slide3PixelGame && window.week7Slide3PixelGame.render()\" \n                         style=\"display:none;\" />\n                </div>\n            "
    },
    {
        "id": 4,
        "title": "Bitmap (Nokta Eşlemli) Görüntüler ve Özellikleri 📸",
        "subtitle": "Piksel Tabanlı Görsel Mimarisi",
        "topic": "2. TEMA • BTY.5.2.1",
        "badge": "BITMAP",
        "icon": "fa-solid fa-border-all",
        "bgColor": "from-slate-900 via-indigo-950 to-purple-950",
        "gradient": "from-slate-900 via-indigo-950 to-purple-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-6 my-auto\">\n                <div class=\"p-5 rounded-2xl bg-indigo-950/80 border-2 border-indigo-400/40 text-center\">\n                    <p class=\"text-base sm:text-lg font-bold text-indigo-100 leading-relaxed\">\n                        “Piksellerin satır ve sütunlar hâlinde bir mozaik gibi yan yana dizilmesiyle oluşan görüntülere <strong>BITMAP (Nokta Eşlemli)</strong> denir.”\n                    </p>\n                </div>\n\n                <div class=\"grid grid-cols-1 md:grid-cols-2 gap-5\">\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3\">\n                        <div class=\"flex items-center gap-3 text-emerald-400 text-lg font-black\">\n                            <i class=\"fa-solid fa-circle-check\"></i>\n                            <h4>Güçlü Yönleri (Neden Kullanılır?)</h4>\n                        </div>\n                        <ul class=\"space-y-2 text-xs sm:text-sm text-slate-200\">\n                            <li>• <strong>Gerçekçi Renk Geçişleri:</strong> Milyonlarca farklı renk tonunu ve gölgeyi kusursuz kaydeder.</li>\n                            <li>• <strong>Fotoğraf Standardı:</strong> Kameralar, telefonlar ve tarayıcılar doğrudan bitmap üretir.</li>\n                            <li>• <strong>Detay Zenginliği:</strong> Doğa manzaraları ve insan yüzü gibi karmaşık detayları aktarır.</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3\">\n                        <div class=\"flex items-center gap-3 text-rose-400 text-lg font-black\">\n                            <i class=\"fa-solid fa-triangle-exclamation\"></i>\n                            <h4>Zayıf Yönleri (Nelere Dikkat Edilmeli?)</h4>\n                        </div>\n                        <ul class=\"space-y-2 text-xs sm:text-sm text-slate-200\">\n                            <li>• <strong>Büyütmede Kalite Kaybı:</strong> Çok büyütüldüğünde piksellenir ve bulanıklaşır.</li>\n                            <li>• <strong>Sabit Çözünürlük:</strong> Piksel sayısı çekildiği anda sabitlenir, sonradan eklenemez.</li>\n                            <li>• <strong>Büyük Dosya Boyutu:</strong> Yüksek çözünürlükte depolama alanını hızlı doldurur.</li>\n                        </ul>\n                    </div>\n                </div>\n\n                <div class=\"p-4 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-between gap-4 flex-wrap text-xs sm:text-sm text-purple-200\">\n                    <span>💡 En Yaygın Bitmap Formatları: <strong>.JPG, .JPEG, .PNG, .GIF, .BMP</strong></span>\n                    <span class=\"text-yellow-300 font-bold\">Fotoğraflar = Daima Bitmap</span>\n                </div>\n            </div>\n        "
    },
    {
        "id": 5,
        "title": "Vektörel (Çizgisel) Görüntüler ve Matematiksel Gücü 📐",
        "subtitle": "Formüllerle Çizilen Kusursuz Grafikler",
        "topic": "2. TEMA • BTY.5.2.1",
        "badge": "VEKTÖR",
        "icon": "fa-solid fa-bezier-curve",
        "bgColor": "from-slate-900 via-purple-950 to-indigo-950",
        "gradient": "from-slate-900 via-purple-950 to-indigo-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-6 my-auto\">\n                <div class=\"p-5 rounded-2xl bg-purple-950/80 border-2 border-purple-400/40 text-center\">\n                    <p class=\"text-base sm:text-lg font-bold text-purple-100 leading-relaxed\">\n                        “Piksel yerine matematiksel formüller, noktalar ve geometrik çizgilerle tanımlanan görüntülere <strong>VEKTÖREL GÖRÜNTÜ</strong> denir.”\n                    </p>\n                </div>\n\n                <div class=\"grid grid-cols-1 md:grid-cols-3 gap-5\">\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border-2 border-yellow-400/40 space-y-3\">\n                        <div class=\"w-12 h-12 rounded-xl bg-yellow-400/20 text-yellow-300 flex items-center justify-center text-2xl font-black\">\n                            <i class=\"fa-solid fa-infinity\"></i>\n                        </div>\n                        <h4 class=\"text-lg font-black text-white\">Sonsuz Büyütme</h4>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            İster bir bozuk para kadar küçük, ister bir gökdelenin boyu kadar devasa yapın; kenarlar asla tırtıklanmaz, jilet gibi keskin kalır!\n                        </p>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border-2 border-cyan-400/40 space-y-3\">\n                        <div class=\"w-12 h-12 rounded-xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center text-2xl font-black\">\n                            <i class=\"fa-solid fa-hard-drive\"></i>\n                        </div>\n                        <h4 class=\"text-lg font-black text-white\">Küçük Dosya Boyutu</h4>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Milyonlarca pikseli değil, sadece çizginin başlangıç ve bitiş koordinatlarını kaydettiği için dosyalar son derece hafiftir.\n                        </p>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border-2 border-pink-400/40 space-y-3\">\n                        <div class=\"w-12 h-12 rounded-xl bg-pink-400/20 text-pink-300 flex items-center justify-center text-2xl font-black\">\n                            <i class=\"fa-solid fa-award\"></i>\n                        </div>\n                        <h4 class=\"text-lg font-black text-white\">Logo ve İkon Tasarımı</h4>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Şirket logoları, trafik levhaları, tipografi ve web ikonları daima vektörel olarak tasarlanır ve kullanılır.\n                        </p>\n                    </div>\n                </div>\n\n                <div class=\"p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between gap-4 flex-wrap text-xs sm:text-sm text-cyan-200\">\n                    <span>💡 En Yaygın Vektör Formatları: <strong>.SVG, .EPS, .AI</strong></span>\n                    <span class=\"text-yellow-300 font-bold\">Logolar & İkonlar = Daima Vektörel</span>\n                </div>\n            </div>\n        "
    },
    {
        "id": 6,
        "title": "Büyük Karşılaştırma: Bitmap vs Vektörel ⚖️",
        "subtitle": "Hangi Türü Ne Zaman Seçmeliyiz?",
        "topic": "2. TEMA • BTY.5.2.1",
        "badge": "KARŞILAŞTIRMA",
        "icon": "fa-solid fa-scale-balanced",
        "bgColor": "from-slate-900 via-indigo-950 to-purple-950",
        "gradient": "from-slate-900 via-indigo-950 to-purple-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-4 my-auto\">\n                <div class=\"overflow-x-auto rounded-2xl border-2 border-indigo-500/40 shadow-2xl bg-slate-950/90\">\n                    <table class=\"w-full text-left text-xs sm:text-sm\">\n                        <thead class=\"bg-indigo-900/60 text-yellow-300 font-black uppercase tracking-wider border-b border-indigo-700/60\">\n                            <tr>\n                                <th class=\"p-3.5 sm:p-4\">Özellik</th>\n                                <th class=\"p-3.5 sm:p-4 text-cyan-300\"><i class=\"fa-solid fa-border-all mr-1.5\"></i>Bitmap (Piksel Tabanlı)</th>\n                                <th class=\"p-3.5 sm:p-4 text-pink-300\"><i class=\"fa-solid fa-bezier-curve mr-1.5\"></i>Vektörel (Çizgisel)</th>\n                            </tr>\n                        </thead>\n                        <tbody class=\"divide-y divide-slate-800 text-slate-200\">\n                            <tr class=\"hover:bg-slate-850/60\">\n                                <td class=\"p-3.5 sm:p-4 font-bold text-white\">Temel Yapı Taşı</td>\n                                <td class=\"p-3.5 sm:p-4 text-cyan-200\">Renkli küçük kareler (Pikseller)</td>\n                                <td class=\"p-3.5 sm:p-4 text-pink-200\">Matematiksel çizgiler, açılar ve formüller</td>\n                            </tr>\n                            <tr class=\"hover:bg-slate-850/60\">\n                                <td class=\"p-3.5 sm:p-4 font-bold text-white\">Büyütüldüğünde</td>\n                                <td class=\"p-3.5 sm:p-4 text-rose-300 font-bold\">Bozulur, piksellenir ve bulanıklaşır ✗</td>\n                                <td class=\"p-3.5 sm:p-4 text-emerald-300 font-bold\">Asla bozulmaz, jilet gibi net kalır ✓</td>\n                            </tr>\n                            <tr class=\"hover:bg-slate-850/60\">\n                                <td class=\"p-3.5 sm:p-4 font-bold text-white\">En Uygun Alan</td>\n                                <td class=\"p-3.5 sm:p-4\">Doğa fotoğrafları, insan portresi, anı resimleri</td>\n                                <td class=\"p-3.5 sm:p-4\">Logolar, amblemler, simgeler, bina afişleri</td>\n                            </tr>\n                            <tr class=\"hover:bg-slate-850/60\">\n                                <td class=\"p-3.5 sm:p-4 font-bold text-white\">Dosya Uzantıları</td>\n                                <td class=\"p-3.5 sm:p-4 font-mono text-xs text-yellow-300\">.JPG, .PNG, .GIF, .BMP</td>\n                                <td class=\"p-3.5 sm:p-4 font-mono text-xs text-yellow-300\">.SVG, .EPS, .AI</td>\n                            </tr>\n                            <tr class=\"hover:bg-slate-850/60\">\n                                <td class=\"p-3.5 sm:p-4 font-bold text-white\">Popüler Programlar</td>\n                                <td class=\"p-3.5 sm:p-4\">Paint, Photoshop, GIMP, Canva</td>\n                                <td class=\"p-3.5 sm:p-4\">Adobe Illustrator, Inkscape, CorelDRAW</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n\n                <div class=\"p-3 rounded-xl bg-indigo-950/60 border border-indigo-400/30 text-center text-xs text-indigo-200\">\n                    📌 <strong>Özet Kural:</strong> Gerçek hayattan bir anı çekiyorsan <strong>Bitmap</strong>; sıfırdan logo ve simge çiziyorsan <strong>Vektör</strong>!\n                </div>\n            </div>\n        "
    },
    {
        "id": 7,
        "title": "Sınıf İçi Dedektif Görevi: Hangisini Seçmelisin? 🕵️‍♂️",
        "subtitle": "Akıllı Tahtada Cevabı Dokunarak Bul",
        "topic": "2. TEMA • BTY.5.2.1",
        "badge": "ETKİLEŞİM",
        "icon": "fa-solid fa-circle-question",
        "bgColor": "from-slate-900 via-purple-950 to-indigo-950",
        "gradient": "from-slate-900 via-purple-950 to-indigo-950",
        "content": "\n            <div class=\"max-w-4xl mx-auto space-y-6 my-auto text-center\">\n                <div class=\"p-6 rounded-3xl bg-slate-800/90 border-2 border-yellow-400/50 shadow-2xl space-y-4\">\n                    <span class=\"px-4 py-1.5 bg-yellow-400/20 text-yellow-300 font-black text-xs uppercase tracking-widest rounded-full border border-yellow-400/30\">\n                        Dedektif Sorusu\n                    </span>\n                    <h3 class=\"text-xl sm:text-2xl font-black text-white leading-relaxed\">\n                        “Okulunuz için tasarladığınız yeni logonun hem küçücük bir öğrenci yaka rozetine hem de okul binasının devasa ön cephe afişine basılması gerekiyor. Hangi görüntü türünü tercih etmelisiniz?”\n                    </h3>\n                </div>\n\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4\">\n                    <button onclick=\"app.handleSlideChoice(this, false, 'slide7-feedback', 'Bitmap görüntü dev bina afişine basıldığında aşırı büyütüleceği için piksellenir ve bozulur!')\" class=\"p-5 rounded-2xl bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 hover:border-rose-400 text-left transition-all group shadow-lg\">\n                        <div class=\"flex items-center gap-3\">\n                            <span class=\"w-10 h-10 rounded-xl bg-rose-500/20 text-rose-300 flex items-center justify-center font-black text-lg\">A</span>\n                            <div>\n                                <h4 class=\"font-bold text-white text-base\">Bitmap (Piksel Tabanlı)</h4>\n                                <p class=\"text-xs text-slate-400\">Çünkü pikseller her boyutta aynıdır.</p>\n                            </div>\n                        </div>\n                    </button>\n\n                    <button onclick=\"app.handleSlideChoice(this, true, 'slide7-feedback', 'Harika seçim! Vektörel grafikler matematiksel olduğu için ister rozet ister bina boyunda olsun sıfır kalite kaybıyla net kalır!')\" class=\"p-5 rounded-2xl bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 hover:border-emerald-400 text-left transition-all group shadow-lg\">\n                        <div class=\"flex items-center gap-3\">\n                            <span class=\"w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-black text-lg\">B</span>\n                            <div>\n                                <h4 class=\"font-bold text-white text-base\">Vektörel (Çizgisel)</h4>\n                                <p class=\"text-xs text-slate-400\">Çünkü ne kadar büyütülürse büyütülsün kalitesi bozulmaz.</p>\n                            </div>\n                        </div>\n                    </button>\n                </div>\n\n                <div id=\"slide7-feedback\" class=\"hidden p-4 rounded-2xl bg-slate-800 border-2 text-sm font-bold text-white transition-all shadow-xl\"></div>\n            </div>\n        "
    },
    {
        "id": 8,
        "title": "Bölüm 2: Görüntü Dosyası Nedir? Dosya Adı ve Uzantısı 📄",
        "subtitle": "Noktanın Sağındaki Sihirli Dünya",
        "topic": "2. TEMA • BTY.5.2.1",
        "badge": "BÖLÜM 2",
        "icon": "fa-solid fa-file-code",
        "bgColor": "from-slate-900 via-indigo-950 to-purple-950",
        "gradient": "from-slate-900 via-indigo-950 to-purple-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-6 my-auto\">\n                <div class=\"p-6 rounded-3xl bg-slate-950/80 border-2 border-indigo-400/50 shadow-2xl text-center space-y-4\">\n                    <span class=\"text-xs font-black uppercase tracking-widest text-indigo-300\">Bir Dijital Dosyanın Anatomisi</span>\n                    \n                    <div class=\"inline-flex items-center gap-3 p-4 bg-slate-900 rounded-2xl border border-slate-700 font-mono text-2xl sm:text-3xl font-black\">\n                        <span class=\"text-cyan-400\">okul_etkinligi</span>\n                        <span class=\"text-yellow-400 text-4xl\">.</span>\n                        <span class=\"text-pink-400\">png</span>\n                    </div>\n\n                    <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-left\">\n                        <div class=\"p-3.5 bg-slate-900/80 rounded-xl border border-cyan-500/30\">\n                            <span class=\"text-xs font-bold text-cyan-400 block mb-1\">1. Dosya Adı:</span>\n                            <p class=\"text-xs text-slate-300\">Dosyanın içeriğini anlatan anlamlı isimdir. (Kullanıcı belirler)</p>\n                        </div>\n                        <div class=\"p-3.5 bg-slate-900/80 rounded-xl border border-yellow-500/30\">\n                            <span class=\"text-xs font-bold text-yellow-400 block mb-1\">2. Nokta (.):</span>\n                            <p class=\"text-xs text-slate-300\">Dosya adı ile uzantıyı birbirinden ayıran sınır çizgisidir.</p>\n                        </div>\n                        <div class=\"p-3.5 bg-slate-900/80 rounded-xl border border-pink-500/30\">\n                            <span class=\"text-xs font-bold text-pink-400 block mb-1\">3. Dosya Uzantısı:</span>\n                            <p class=\"text-xs text-slate-300\">Dosyanın türünü ve hangi programla açılacağını işletim sistemine bildirir.</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 flex items-center gap-3 text-xs sm:text-sm text-amber-200\">\n                    <i class=\"fa-solid fa-lightbulb text-yellow-400 text-2xl shrink-0\"></i>\n                    <span><strong>Önemli Kural:</strong> Bir dosyanın uzantısını rastgele siler veya değiştirirseniz bilgisayar o dosyanın türünü tanıyamaz ve açamayabilir!</span>\n                </div>\n            </div>\n        "
    },
    {
        "id": 9,
        "title": "Bitmap Görüntü Dosyası Uzantıları (.jpg, .png, .gif, .bmp) 🗂️",
        "subtitle": "Piksel Tabanlı Dosya Ailesi",
        "topic": "2. TEMA • BTY.5.2.1",
        "badge": "FORMATLAR",
        "icon": "fa-solid fa-file-image",
        "bgColor": "from-slate-900 via-purple-950 to-indigo-950",
        "gradient": "from-slate-900 via-purple-950 to-indigo-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-5 my-auto\">\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4\">\n                    <div class=\"p-4 sm:p-5 rounded-2xl bg-slate-800/80 border-2 border-amber-400/40 space-y-2\">\n                        <div class=\"flex items-center justify-between\">\n                            <span class=\"text-xs font-mono font-black text-amber-400 px-2.5 py-1 bg-amber-400/20 rounded-lg\">.JPG / .JPEG</span>\n                            <span class=\"text-xs text-slate-400 font-bold\">Fotoğraf Standardı</span>\n                        </div>\n                        <h4 class=\"text-base sm:text-lg font-black text-white\">Sıkıştırılmış Fotoğraf</h4>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Milyonlarca rengi saklar, dosya boyutu küçüktür. <strong>Şeffaf (saydam) arka planı DESTEKLEMEZ</strong>; arka planı beyaz veya renkli doldurur.\n                        </p>\n                    </div>\n\n                    <div class=\"p-4 sm:p-5 rounded-2xl bg-slate-800/80 border-2 border-cyan-400/40 space-y-2\">\n                        <div class=\"flex items-center justify-between\">\n                            <span class=\"text-xs font-mono font-black text-cyan-400 px-2.5 py-1 bg-cyan-400/20 rounded-lg\">.PNG</span>\n                            <span class=\"text-xs text-slate-400 font-bold\">Şeffaf Web Formatı</span>\n                        </div>\n                        <h4 class=\"text-base sm:text-lg font-black text-white\">Saydam Arka Plan Kralı</h4>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Kayıpsız sıkıştırır. <strong>Saydam (şeffaf) arka planı destekler</strong>. Logolar, butonlar ve grafikler için web dünyasının vazgeçilmezidir.\n                        </p>\n                    </div>\n\n                    <div class=\"p-4 sm:p-5 rounded-2xl bg-slate-800/80 border-2 border-emerald-400/40 space-y-2\">\n                        <div class=\"flex items-center justify-between\">\n                            <span class=\"text-xs font-mono font-black text-emerald-400 px-2.5 py-1 bg-emerald-400/20 rounded-lg\">.GIF</span>\n                            <span class=\"text-xs text-slate-400 font-bold\">Hareketli Animasyon</span>\n                        </div>\n                        <h4 class=\"text-base sm:text-lg font-black text-white\">Kısa Döngülü Animasyon</h4>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Birden fazla kareyi ardı ardına oynatarak kısa animasyonlar sağlar. En fazla <strong>256 renk</strong> desteklediği için fotoğraf kalitesi düşüktür.\n                        </p>\n                    </div>\n\n                    <div class=\"p-4 sm:p-5 rounded-2xl bg-slate-800/80 border-2 border-purple-400/40 space-y-2\">\n                        <div class=\"flex items-center justify-between\">\n                            <span class=\"text-xs font-mono font-black text-purple-400 px-2.5 py-1 bg-purple-400/20 rounded-lg\">.BMP</span>\n                            <span class=\"text-xs text-slate-400 font-bold\">Ham Piksel</span>\n                        </div>\n                        <h4 class=\"text-base sm:text-lg font-black text-white\">Sıkıştırılmamış Ham Resim</h4>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Pikselleri hiçbir sıkıştırma olmadan ham olarak saklar. Çok kaliteli ancak <strong>dosya boyutu devasadır</strong>, webde pek tercih edilmez.\n                        </p>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 10,
        "title": "Vektörel Dosya Uzantıları (.svg, .eps, .ai) 📐",
        "subtitle": "Çizgisel ve Baskı Formatları",
        "topic": "2. TEMA • BTY.5.2.1",
        "badge": "FORMATLAR",
        "icon": "fa-solid fa-vector-square",
        "bgColor": "from-slate-900 via-indigo-950 to-purple-950",
        "gradient": "from-slate-900 via-indigo-950 to-purple-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-5 my-auto\">\n                <div class=\"grid grid-cols-1 md:grid-cols-3 gap-5\">\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border-2 border-yellow-400/40 space-y-3\">\n                        <span class=\"text-xs font-mono font-black text-yellow-300 px-2.5 py-1 bg-yellow-400/20 rounded-lg block w-fit\">.SVG</span>\n                        <h4 class=\"text-lg font-black text-white\">Scalable Vector Graphics</h4>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Web tarayıcılarının doğrudan gösterebildiği standart vektör formatıdır. Web sitelerindeki logolar ve ikonlar SVG olarak yüklenir.\n                        </p>\n                        <span class=\"text-[11px] text-yellow-200 block font-semibold\">🌐 Web Dostu & Hafif</span>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border-2 border-pink-400/40 space-y-3\">\n                        <span class=\"text-xs font-mono font-black text-pink-300 px-2.5 py-1 bg-pink-400/20 rounded-lg block w-fit\">.AI</span>\n                        <h4 class=\"text-lg font-black text-white\">Adobe Illustrator Dosyası</h4>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            İllüstratör programının kendi çalışma projesidir. Katmanları, eğrileri ve çizim kılavuzlarını saklar; daha sonra tekrar düzenlenebilir.\n                        </p>\n                        <span class=\"text-[11px] text-pink-200 block font-semibold\">🎨 Düzenlenebilir Proje</span>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border-2 border-cyan-400/40 space-y-3\">\n                        <span class=\"text-xs font-mono font-black text-cyan-300 px-2.5 py-1 bg-cyan-400/20 rounded-lg block w-fit\">.EPS</span>\n                        <h4 class=\"text-lg font-black text-white\">Encapsulated PostScript</h4>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Matbaalar, dev tabela üreticileri ve endüstriyel baskı makineleri için kullanılan yüksek kaliteli evrensel vektör standardıdır.\n                        </p>\n                        <span class=\"text-[11px] text-cyan-200 block font-semibold\">🖨️ Matbaa & Baskı Standardı</span>\n                    </div>\n                </div>\n\n                <div class=\"p-4 rounded-xl bg-slate-950/80 border border-slate-700 text-center text-xs sm:text-sm text-slate-300\">\n                    💡 <strong>Unutmayın:</strong> Bir web sitesine logo koyarken <strong>SVG</strong> veya <strong>PNG</strong> seçilir; JPG seçilirse logonun kenarında beyaz kutu kalabilir!\n                </div>\n            </div>\n        "
    },
    {
        "id": 11,
        "title": "Doğru Dosya Biçimini Seçme Rehberi (Karar Ağacı) 🌲",
        "subtitle": "Hangi Durumda Hangi Uzantıyı Kullanmalısın?",
        "topic": "2. TEMA • BTY.5.2.1",
        "badge": "REHBER",
        "icon": "fa-solid fa-sitemap",
        "bgColor": "from-slate-900 via-purple-950 to-indigo-950",
        "gradient": "from-slate-900 via-purple-950 to-indigo-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-4 my-auto\">\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5\">\n                    <div class=\"p-4 rounded-2xl bg-amber-950/60 border-2 border-amber-500/50 space-y-2 text-center\">\n                        <div class=\"text-3xl text-amber-400 mb-1\"><i class=\"fa-solid fa-camera\"></i></div>\n                        <h4 class=\"font-black text-white text-base\">Fotoğraf Çektin mi?</h4>\n                        <p class=\"text-xs text-amber-200\">Manzara, okul gezisi, portre</p>\n                        <div class=\"pt-2\">\n                            <span class=\"px-3 py-1.5 bg-amber-400 text-slate-950 font-black text-xs rounded-xl shadow\">👉 .JPG Seç!</span>\n                        </div>\n                    </div>\n\n                    <div class=\"p-4 rounded-2xl bg-cyan-950/60 border-2 border-cyan-500/50 space-y-2 text-center\">\n                        <div class=\"text-3xl text-cyan-400 mb-1\"><i class=\"fa-solid fa-clone\"></i></div>\n                        <h4 class=\"font-black text-white text-base\">Arka Plan Şeffaf mı?</h4>\n                        <p class=\"text-xs text-cyan-200\">Logo, buton, nesne dekupe</p>\n                        <div class=\"pt-2\">\n                            <span class=\"px-3 py-1.5 bg-cyan-400 text-slate-950 font-black text-xs rounded-xl shadow\">👉 .PNG Seç!</span>\n                        </div>\n                    </div>\n\n                    <div class=\"p-4 rounded-2xl bg-emerald-950/60 border-2 border-emerald-500/50 space-y-2 text-center\">\n                        <div class=\"text-3xl text-emerald-400 mb-1\"><i class=\"fa-solid fa-play\"></i></div>\n                        <h4 class=\"font-black text-white text-base\">Hareket / Animasyon mu?</h4>\n                        <p class=\"text-xs text-emerald-200\">Kısa döngülü komik anlar</p>\n                        <div class=\"pt-2\">\n                            <span class=\"px-3 py-1.5 bg-emerald-400 text-slate-950 font-black text-xs rounded-xl shadow\">👉 .GIF Seç!</span>\n                        </div>\n                    </div>\n\n                    <div class=\"p-4 rounded-2xl bg-purple-950/60 border-2 border-purple-500/50 space-y-2 text-center\">\n                        <div class=\"text-3xl text-purple-400 mb-1\"><i class=\"fa-solid fa-maximize\"></i></div>\n                        <h4 class=\"font-black text-white text-base\">Dev Boyutta Basılacak mı?</h4>\n                        <p class=\"text-xs text-purple-200\">Bina afişi, sonsuz netlik</p>\n                        <div class=\"pt-2\">\n                            <span class=\"px-3 py-1.5 bg-purple-400 text-slate-950 font-black text-xs rounded-xl shadow\">👉 .SVG / .AI Seç!</span>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"p-4 rounded-2xl bg-slate-900 border border-slate-700 text-center\">\n                    <p class=\"text-xs sm:text-sm text-yellow-300 font-bold\">\n                        🧠 Altın Kural: Yanlış format seçimi afişinizi ya aşırı ağırlaştırır ya da kalitesini düşürür!\n                    </p>\n                </div>\n            </div>\n        "
    },
    {
        "id": 12,
        "title": "Bölüm 3: Görsel İşleme Programı Nedir? 🛠️",
        "subtitle": "Dijital Tasarımcının Araç Çantası",
        "topic": "2. TEMA • BTY.5.2.1",
        "badge": "BÖLÜM 3",
        "icon": "fa-solid fa-laptop-code",
        "bgColor": "from-slate-900 via-indigo-950 to-purple-950",
        "gradient": "from-slate-900 via-indigo-950 to-purple-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-6 my-auto\">\n                <div class=\"p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center\">\n                    <p class=\"text-base sm:text-lg font-bold text-yellow-300 leading-relaxed\">\n                        “Fotoğrafları ve çizimleri bilgisayar ortamında düzenlemek, kırpmak, renklendirmek veya sıfırdan afiş oluşturmak için kullanılan yazılımlara <strong>Görsel Düzenleme Programı</strong> denir.”\n                    </p>\n                </div>\n\n                <div class=\"grid grid-cols-1 md:grid-cols-3 gap-5\">\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-3\">\n                        <div class=\"w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl mx-auto\">\n                            <i class=\"fa-solid fa-wand-magic-sparkles\"></i>\n                        </div>\n                        <h4 class=\"font-black text-white text-base\">Düzeltme & İyileştirme</h4>\n                        <p class=\"text-xs text-slate-300 leading-relaxed\">Karanlık fotoğrafları aydınlatma, kırmızı gözleri düzeltme, istenmeyen nesneleri silme.</p>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-3\">\n                        <div class=\"w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center text-2xl mx-auto\">\n                            <i class=\"fa-solid fa-layer-group\"></i>\n                        </div>\n                        <h4 class=\"font-black text-white text-base\">Katmanlı Tasarım</h4>\n                        <p class=\"text-xs text-slate-300 leading-relaxed\">Görselin üzerine yazı, logo, simge ve şekiller ekleyerek yeni bir afiş veya broşür üretme.</p>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-3\">\n                        <div class=\"w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl mx-auto\">\n                            <i class=\"fa-solid fa-file-export\"></i>\n                        </div>\n                        <h4 class=\"font-black text-white text-base\">Doğru Dışa Aktarma</h4>\n                        <p class=\"text-xs text-slate-300 leading-relaxed\">Çalışmayı baskı için PDF veya web için JPG/PNG formatında dışarıya kaydetme.</p>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 13,
        "title": "Giriş & Pratik Araçlar: Paint, Canva, Google Çizimler 🖌️",
        "subtitle": "Hızlı, Kolay ve Kullanışlı Tasarım Çözümleri",
        "topic": "2. TEMA • BTY.5.2.1",
        "badge": "PRATİK ARAÇLAR",
        "icon": "fa-solid fa-paintbrush",
        "bgColor": "from-slate-900 via-purple-950 to-indigo-950",
        "gradient": "from-slate-900 via-purple-950 to-indigo-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-5 my-auto\">\n                <div class=\"grid grid-cols-1 md:grid-cols-3 gap-5\">\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border-2 border-blue-400/50 space-y-3\">\n                        <div class=\"flex items-center gap-3\">\n                            <div class=\"w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl font-black\">\n                                <i class=\"fa-solid fa-paint-roller\"></i>\n                            </div>\n                            <div>\n                                <h4 class=\"font-black text-white text-lg\">Paint</h4>\n                                <span class=\"text-xs text-blue-300 font-bold\">Windows Yerleşik</span>\n                            </div>\n                        </div>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Her Windows bilgisayarda hazırdır. Basit resim çizme, fotoğraf kırpma ve boyutlandırma için en pratik başlangıç programıdır.\n                        </p>\n                        <div class=\"text-[11px] text-yellow-300 font-semibold\">• İnternetsiz çalışır • Temel araçlar</div>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border-2 border-cyan-400/50 space-y-3\">\n                        <div class=\"flex items-center gap-3\">\n                            <div class=\"w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl font-black\">\n                                <i class=\"fa-solid fa-cloud\"></i>\n                            </div>\n                            <div>\n                                <h4 class=\"font-black text-white text-lg\">Canva</h4>\n                                <span class=\"text-xs text-cyan-300 font-bold\">Çevrim İçi Şablon Devi</span>\n                            </div>\n                        </div>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Web tarayıcısından çalışır. Milyonlarca hazır afiş, sunum ve broşür şablonuyla profesyonel görünümlü tasarımlar yapmayı çok kolaylaştırır.\n                        </p>\n                        <div class=\"text-[11px] text-cyan-300 font-semibold\">• Hazır Şablonlar • Sürükle-Bırak</div>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border-2 border-emerald-400/50 space-y-3\">\n                        <div class=\"flex items-center gap-3\">\n                            <div class=\"w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl font-black\">\n                                <i class=\"fa-solid fa-shapes\"></i>\n                            </div>\n                            <div>\n                                <h4 class=\"font-black text-white text-lg\">Google Çizimler</h4>\n                                <span class=\"text-xs text-emerald-300 font-bold\">İşbirlikçi & Ücretsiz</span>\n                            </div>\n                        </div>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Google hesabıyla ücretsiz kullanılır. Akış şemaları, kavram haritaları ve şemalar çizmek, arkadaşlarınızla aynı anda çalışmak için idealdir.\n                        </p>\n                        <div class=\"text-[11px] text-emerald-300 font-semibold\">• Ortak Çalışma • Bulut Kaydı</div>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 14,
        "title": "İleri ve Profesyonel Programlar: Photoshop, Illustrator, GIMP, Tinkercad 🚀",
        "subtitle": "Sektör Standartları ve Açık Kaynak Çözümler",
        "topic": "2. TEMA • BTY.5.2.1",
        "badge": "İLERİ PROGRAMLAR",
        "icon": "fa-solid fa-cube",
        "bgColor": "from-slate-900 via-indigo-950 to-purple-950",
        "gradient": "from-slate-900 via-indigo-950 to-purple-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-4 my-auto\">\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4\">\n                    <div class=\"p-4 rounded-2xl bg-slate-800/80 border-2 border-blue-500/40 space-y-2\">\n                        <div class=\"flex items-center gap-2\">\n                            <span class=\"w-8 h-8 rounded-lg bg-blue-600 text-white font-black flex items-center justify-center text-xs\">Ps</span>\n                            <h4 class=\"font-black text-white text-base\">Adobe Photoshop</h4>\n                        </div>\n                        <p class=\"text-xs text-slate-300 leading-relaxed\">\n                            Dünyada fotoğraf düzenleme ve rötuş denince akla ilk gelen piksel tabanlı endüstri standardı yazılımdır.\n                        </p>\n                    </div>\n\n                    <div class=\"p-4 rounded-2xl bg-slate-800/80 border-2 border-amber-500/40 space-y-2\">\n                        <div class=\"flex items-center gap-2\">\n                            <span class=\"w-8 h-8 rounded-lg bg-amber-600 text-white font-black flex items-center justify-center text-xs\">Ai</span>\n                            <h4 class=\"font-black text-white text-base\">Adobe Illustrator</h4>\n                        </div>\n                        <p class=\"text-xs text-slate-300 leading-relaxed\">\n                            Profesyonel vektörel grafik, amblem, logo ve tipografi tasarımında küresel ölçekte en yaygın kullanılan yazılımdır.\n                        </p>\n                    </div>\n\n                    <div class=\"p-4 rounded-2xl bg-slate-800/80 border-2 border-purple-500/40 space-y-2\">\n                        <div class=\"flex items-center gap-2\">\n                            <span class=\"w-8 h-8 rounded-lg bg-purple-600 text-white font-black flex items-center justify-center text-xs\">G</span>\n                            <h4 class=\"font-black text-white text-base\">GIMP (Açık Kaynak Kodlu)</h4>\n                        </div>\n                        <p class=\"text-xs text-slate-300 leading-relaxed\">\n                            Tamamen ücretsiz, açık kaynak kodlu ve katman destekli güçlü bir görsel düzenleyicidir. Photoshop'un özgür alternatifidir.\n                        </p>\n                    </div>\n\n                    <div class=\"p-4 rounded-2xl bg-slate-800/80 border-2 border-emerald-500/40 space-y-2\">\n                        <div class=\"flex items-center gap-2\">\n                            <span class=\"w-8 h-8 rounded-lg bg-emerald-600 text-white font-black flex items-center justify-center text-xs\">3D</span>\n                            <h4 class=\"font-black text-white text-base\">Autodesk Tinkercad</h4>\n                        </div>\n                        <p class=\"text-xs text-slate-300 leading-relaxed\">\n                            Tarayıcıda çalışan, 3 boyutlu modelleme ve tasarım yapmayı çocuk oyuncağı hâline getiren eğlenceli bir araçtır.\n                        </p>\n                    </div>\n                </div>\n\n                <div class=\"p-3.5 rounded-xl bg-indigo-950/80 border border-indigo-400/30 text-center text-xs text-indigo-200\">\n                    💡 <strong>Önemli Ayrım:</strong> Photoshop piksel (bitmap) düzenlerken, Illustrator matematiksel vektör çizer!\n                </div>\n            </div>\n        "
    },
    {
        "id": 15,
        "title": "Görsel Programları Karşılaştırma Matrisi 📊",
        "subtitle": "Hangi Görev İçin Hangi Yazılım Doğru?",
        "topic": "2. TEMA • BTY.5.2.1",
        "badge": "MATRİS",
        "icon": "fa-solid fa-table-list",
        "bgColor": "from-slate-900 via-purple-950 to-indigo-950",
        "gradient": "from-slate-900 via-purple-950 to-indigo-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-4 my-auto\">\n                <div class=\"overflow-x-auto rounded-2xl border-2 border-purple-500/40 shadow-2xl bg-slate-950/90\">\n                    <table class=\"w-full text-left text-xs sm:text-sm\">\n                        <thead class=\"bg-purple-900/60 text-yellow-300 font-black uppercase tracking-wider border-b border-purple-700/60\">\n                            <tr>\n                                <th class=\"p-3 sm:p-3.5\">Program</th>\n                                <th class=\"p-3 sm:p-3.5\">Tür</th>\n                                <th class=\"p-3 sm:p-3.5\">Erişim & Ücret</th>\n                                <th class=\"p-3 sm:p-3.5\">Zorluk</th>\n                                <th class=\"p-3 sm:p-3.5\">En Uygun Görev</th>\n                            </tr>\n                        </thead>\n                        <tbody class=\"divide-y divide-slate-800 text-slate-200\">\n                            <tr class=\"hover:bg-slate-850\">\n                                <td class=\"p-3 font-bold text-white\"><i class=\"fa-solid fa-paint-roller text-blue-400 mr-1.5\"></i>Paint</td>\n                                <td class=\"p-3 text-cyan-300\">Bitmap</td>\n                                <td class=\"p-3 text-emerald-400 font-bold\">Ücretsiz (Windows)</td>\n                                <td class=\"p-3 text-emerald-300\">Çok Kolay ⭐</td>\n                                <td class=\"p-3\">Hızlı kırpma, basit karalama</td>\n                            </tr>\n                            <tr class=\"hover:bg-slate-850\">\n                                <td class=\"p-3 font-bold text-white\"><i class=\"fa-solid fa-cloud text-cyan-400 mr-1.5\"></i>Canva</td>\n                                <td class=\"p-3 text-purple-300\">Hibrit (Şablon)</td>\n                                <td class=\"p-3 text-emerald-400 font-bold\">Ücretsiz (Web)</td>\n                                <td class=\"p-3 text-emerald-300\">Kolay ⭐⭐</td>\n                                <td class=\"p-3\">Okul afişi, sunum, broşür</td>\n                            </tr>\n                            <tr class=\"hover:bg-slate-850\">\n                                <td class=\"p-3 font-bold text-white\"><i class=\"fa-solid fa-paw text-purple-400 mr-1.5\"></i>GIMP</td>\n                                <td class=\"p-3 text-cyan-300\">Bitmap</td>\n                                <td class=\"p-3 text-emerald-400 font-bold\">Açık Kaynak (Ücretsiz)</td>\n                                <td class=\"p-3 text-amber-300\">Orta ⭐⭐⭐</td>\n                                <td class=\"p-3\">Katmanlı fotoğraf işleme</td>\n                            </tr>\n                            <tr class=\"hover:bg-slate-850\">\n                                <td class=\"p-3 font-bold text-white\"><i class=\"fa-solid fa-camera text-indigo-400 mr-1.5\"></i>Photoshop</td>\n                                <td class=\"p-3 text-cyan-300\">Bitmap</td>\n                                <td class=\"p-3 text-rose-400 font-bold\">Ücretli Lisans</td>\n                                <td class=\"p-3 text-rose-300\">İleri ⭐⭐⭐⭐</td>\n                                <td class=\"p-3\">Profesyonel fotoğraf rötuşu</td>\n                            </tr>\n                            <tr class=\"hover:bg-slate-850\">\n                                <td class=\"p-3 font-bold text-white\"><i class=\"fa-solid fa-bezier-curve text-amber-400 mr-1.5\"></i>Illustrator</td>\n                                <td class=\"p-3 text-pink-300\">Vektörel</td>\n                                <td class=\"p-3 text-rose-400 font-bold\">Ücretli Lisans</td>\n                                <td class=\"p-3 text-rose-300\">İleri ⭐⭐⭐⭐</td>\n                                <td class=\"p-3\">Vektörel logo & amblem</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        "
    },
    {
        "id": 16,
        "title": "Temel Düzenleme İşlemleri: Kırpma, Döndürme, Boyutlandırma ✂️",
        "subtitle": "Her Tasarımcının Bilmesi Gereken 3 Temel Hamle",
        "topic": "2. TEMA • BTY.5.2.1",
        "badge": "DÜZENLEME",
        "icon": "fa-solid fa-crop-simple",
        "bgColor": "from-slate-900 via-indigo-950 to-purple-950",
        "gradient": "from-slate-900 via-indigo-950 to-purple-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-6 my-auto\">\n                <div class=\"grid grid-cols-1 md:grid-cols-3 gap-5\">\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border-2 border-yellow-400/40 space-y-3\">\n                        <div class=\"w-12 h-12 rounded-xl bg-yellow-400/20 text-yellow-300 flex items-center justify-center text-2xl font-black\">\n                            <i class=\"fa-solid fa-crop\"></i>\n                        </div>\n                        <h4 class=\"text-lg font-black text-white\">1. Kırpma (Crop)</h4>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Fotoğrafın gereksiz veya dikkat dağıtıcı kenar kısımlarını kesip atmak, izleyicinin dikkatini sadece ana nesneye toplamak için kullanılır.\n                        </p>\n                        <span class=\"text-[11px] text-yellow-300 font-semibold block\">🎯 Odak Noktasını Belirler</span>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border-2 border-cyan-400/40 space-y-3\">\n                        <div class=\"w-12 h-12 rounded-xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center text-2xl font-black\">\n                            <i class=\"fa-solid fa-rotate\"></i>\n                        </div>\n                        <h4 class=\"text-lg font-black text-white\">2. Döndürme (Rotate)</h4>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Telefonla yan veya baş aşağı çekilmiş fotoğrafları 90°, 180° veya istenen açıda çevirerek düzgün bakış açısına getirmeyi sağlar.\n                        </p>\n                        <span class=\"text-[11px] text-cyan-300 font-semibold block\">🔄 Açıyı Düzeltir</span>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border-2 border-emerald-400/40 space-y-3\">\n                        <div class=\"w-12 h-12 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center text-2xl font-black\">\n                            <i class=\"fa-solid fa-up-right-and-down-left-from-center\"></i>\n                        </div>\n                        <h4 class=\"text-lg font-black text-white\">3. Boyutlandırma (Resize)</h4>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Görselin genişlik ve yükseklik piksel ölçülerini büyütme veya küçültmedir. En-boy oranını (Aspect Ratio) kilitlemek görselin basık görünmesini önler!\n                        </p>\n                        <span class=\"text-[11px] text-emerald-300 font-semibold block\">📐 Orantılı Büyütüp Küçültür</span>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 17,
        "title": "İleri Düzenleme: Renk Ayarları, Metin ve Şekil Ekleme 🎨",
        "subtitle": "Afişinizi Zenginleştiren Görsel Katmanlar",
        "topic": "2. TEMA • BTY.5.2.1",
        "badge": "İLERİ DÜZENLEME",
        "icon": "fa-solid fa-sliders",
        "bgColor": "from-slate-900 via-purple-950 to-indigo-950",
        "gradient": "from-slate-900 via-purple-950 to-indigo-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-5 my-auto\">\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-5\">\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3\">\n                        <div class=\"flex items-center gap-2 text-yellow-300 font-black text-base\">\n                            <i class=\"fa-solid fa-sun\"></i>\n                            <h4>Parlaklık & Kontrast Ayarı</h4>\n                        </div>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Karanlık çıkmış fotoğrafları aydınlatır, açık-koyu renk farkını (kontrast) belirginleştirerek ayrıntıların canlanmasını sağlar.\n                        </p>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3\">\n                        <div class=\"flex items-center gap-2 text-pink-300 font-black text-base\">\n                            <i class=\"fa-solid fa-droplet\"></i>\n                            <h4>Doygunluk (Renk Canlılığı)</h4>\n                        </div>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Renklerin solgunluğunu giderip canlı hâle getirir ya da doygunluğu sıfırlayarak nostaljik siyah-beyaz fotoğraflar üretir.\n                        </p>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3\">\n                        <div class=\"flex items-center gap-2 text-cyan-300 font-black text-base\">\n                            <i class=\"fa-solid fa-font\"></i>\n                            <h4>Metin (Yazı) Aracı (T)</h4>\n                        </div>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Afişlere başlık, tarih ve mesaj ekler. Arka planla zıt renkte fontlar seçmek okunabilirliği katbekat artırır.\n                        </p>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3\">\n                        <div class=\"flex items-center gap-2 text-emerald-300 font-black text-base\">\n                            <i class=\"fa-solid fa-shapes\"></i>\n                            <h4>Geometrik Şekiller & Çerçeveler</h4>\n                        </div>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Kutucuklar, ok işaretleri ve rozetler kullanarak önemli bilgileri çerçeve içine alıp dikkat çekici hâle getirir.\n                        </p>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 18,
        "title": "Bölüm 4: Dijital Ürün Nedir? Afiş, Broşür, Sunum, Logo 📢",
        "subtitle": "Fikirden Dijital Eserlere Dönüşüm",
        "topic": "2. TEMA • BTY.5.2.1",
        "badge": "BÖLÜM 4",
        "icon": "fa-solid fa-bullhorn",
        "bgColor": "from-slate-900 via-indigo-950 to-purple-950",
        "gradient": "from-slate-900 via-indigo-950 to-purple-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-5 my-auto\">\n                <div class=\"p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center\">\n                    <p class=\"text-base sm:text-lg font-bold text-yellow-300 leading-relaxed\">\n                        “Bilişim araçları kullanılarak belirli bir amaca hizmet etmek üzere tasarlanan her türlü görsel içeriğe <strong>DİJİTAL ÜRÜN</strong> denir.”\n                    </p>\n                </div>\n\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4\">\n                    <div class=\"p-4 rounded-2xl bg-slate-800/80 border-2 border-indigo-500/40 text-center space-y-2\">\n                        <div class=\"text-3xl text-indigo-400 mb-1\"><i class=\"fa-solid fa-scroll\"></i></div>\n                        <h4 class=\"font-black text-white text-base\">Afiş (Poster)</h4>\n                        <p class=\"text-xs text-slate-300\">Uzaktan hemen fark edilen, tek bir mesajı veya etkinliği duyuran görsel.</p>\n                    </div>\n\n                    <div class=\"p-4 rounded-2xl bg-slate-800/80 border-2 border-pink-500/40 text-center space-y-2\">\n                        <div class=\"text-3xl text-pink-400 mb-1\"><i class=\"fa-solid fa-book-open\"></i></div>\n                        <h4 class=\"font-black text-white text-base\">Broşür</h4>\n                        <p class=\"text-xs text-slate-300\">Katlamalı, detaylı bilgi veren ve insanları bilgilendiren tanıtım materyali.</p>\n                    </div>\n\n                    <div class=\"p-4 rounded-2xl bg-slate-800/80 border-2 border-cyan-500/40 text-center space-y-2\">\n                        <div class=\"text-3xl text-cyan-400 mb-1\"><i class=\"fa-solid fa-tv\"></i></div>\n                        <h4 class=\"font-black text-white text-base\">Ders Sunumu</h4>\n                        <p class=\"text-xs text-slate-300\">Anlatımı destekleyen, bol görselli ve az yazılı etkileşimli slaytlar.</p>\n                    </div>\n\n                    <div class=\"p-4 rounded-2xl bg-slate-800/80 border-2 border-amber-500/40 text-center space-y-2\">\n                        <div class=\"text-3xl text-amber-400 mb-1\"><i class=\"fa-solid fa-shield\"></i></div>\n                        <h4 class=\"font-black text-white text-base\">Kurumsal Logo</h4>\n                        <p class=\"text-xs text-slate-300\">Bir okulu veya markayı temsil eden akılda kalıcı, sade simge.</p>\n                    </div>\n                </div>\n            </div>\n        "
    },
    {
        "id": 19,
        "title": "Tasarım Sürecinin 4 Aşaması (Görsel Akış Şeması) 🔄",
        "subtitle": "Fikirden Nihai Tasarıma Adım Adım Yol Haritası",
        "topic": "2. TEMA • BTY.5.2.1",
        "badge": "TASARIM SÜRECİ",
        "icon": "fa-solid fa-arrows-split-up-and-left",
        "bgColor": "from-slate-900 via-purple-950 to-indigo-950",
        "gradient": "from-slate-900 via-purple-950 to-indigo-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-5 my-auto\">\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4\">\n                    <div class=\"p-4 rounded-2xl bg-slate-800/80 border-2 border-blue-500/50 space-y-2\">\n                        <div class=\"w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center font-black\">1</div>\n                        <h4 class=\"font-black text-white text-base\">Problemi Belirleme</h4>\n                        <p class=\"text-xs text-slate-300 leading-relaxed\">\n                            Bu afiş neyi çözecek? Hedef kitlemiz kimler (öğrenciler mi, veliler mi)? Amaç ne?\n                        </p>\n                    </div>\n\n                    <div class=\"p-4 rounded-2xl bg-slate-800/80 border-2 border-cyan-500/50 space-y-2\">\n                        <div class=\"w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-black\">2</div>\n                        <h4 class=\"font-black text-white text-base\">Kurgu ve Senaryo</h4>\n                        <p class=\"text-xs text-slate-300 leading-relaxed\">\n                            Hangi slogan kullanılacak? Taslak kâğıda elle kaba yerleşim çizilir (Storyboard / Wireframe).\n                        </p>\n                    </div>\n\n                    <div class=\"p-4 rounded-2xl bg-slate-800/80 border-2 border-purple-500/50 space-y-2\">\n                        <div class=\"w-8 h-8 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-black\">3</div>\n                        <h4 class=\"font-black text-white text-base\">Ürün Geliştirme</h4>\n                        <p class=\"text-xs text-slate-300 leading-relaxed\">\n                            Canva veya GIMP açılarak renkler, fontlar, şekiller ve görseller dijital ortama aktarılır.\n                        </p>\n                    </div>\n\n                    <div class=\"p-4 rounded-2xl bg-slate-800/80 border-2 border-emerald-500/50 space-y-2\">\n                        <div class=\"w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-black\">4</div>\n                        <h4 class=\"font-black text-white text-base\">Değerlendirme</h4>\n                        <p class=\"text-xs text-slate-300 leading-relaxed\">\n                            Yazı uzaktan okunuyor mu? Renkler uyumlu mu? Telif sorunu var mı? Kontrol edilip dışa aktarılır.\n                        </p>\n                    </div>\n                </div>\n\n                <div class=\"p-4 rounded-2xl bg-indigo-950/80 border border-indigo-400/30 text-center\">\n                    <p class=\"text-xs sm:text-sm text-indigo-100 font-semibold\">\n                        💡 Başarılı bir tasarımcı asla düşünmeden bilgisayar başına oturmaz; önce problemi ve kurguyu belirler!\n                    </p>\n                </div>\n            </div>\n        "
    },
    {
        "id": 20,
        "title": "Tasarım İlkeleri, Telif Hakkı, Yapay Zekâ Etiği ve Büyük Özet 🛡️",
        "subtitle": "Bilinçli ve Sorumlu Dijital Tasarımcı",
        "topic": "2. TEMA • BTY.5.2.1",
        "badge": "BÜYÜK ÖZET",
        "icon": "fa-solid fa-shield-halved",
        "bgColor": "from-slate-900 via-purple-950 to-indigo-950",
        "gradient": "from-slate-900 via-purple-950 to-indigo-950",
        "content": "\n            <div class=\"max-w-5xl mx-auto space-y-5 my-auto\">\n                <div class=\"grid grid-cols-1 md:grid-cols-3 gap-5\">\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border-2 border-yellow-400/40 space-y-3\">\n                        <div class=\"w-12 h-12 rounded-xl bg-yellow-400/20 text-yellow-300 flex items-center justify-center text-2xl font-black\">\n                            <i class=\"fa-solid fa-eye\"></i>\n                        </div>\n                        <h4 class=\"text-lg font-black text-white\">Görsel Bütünlük</h4>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Afişte en fazla 2-3 yazı tipi kullanın. Zıt (kontrast) renklerle yazıları uzaktan okunabilir kılın. Karmaşadan kaçının!\n                        </p>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border-2 border-rose-400/40 space-y-3\">\n                        <div class=\"w-12 h-12 rounded-xl bg-rose-400/20 text-rose-300 flex items-center justify-center text-2xl font-black\">\n                            <i class=\"fa-solid fa-copyright\"></i>\n                        </div>\n                        <h4 class=\"text-lg font-black text-white\">Telif Haklarına Saygı</h4>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            İnternetteki her resim serbest değildir! Sahibinden izin alın, telifsiz (Creative Commons) kütüphaneleri kullanın ve kaynak belirtin.\n                        </p>\n                    </div>\n\n                    <div class=\"p-5 rounded-2xl bg-slate-800/80 border-2 border-cyan-400/40 space-y-3\">\n                        <div class=\"w-12 h-12 rounded-xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center text-2xl font-black\">\n                            <i class=\"fa-solid fa-robot\"></i>\n                        </div>\n                        <h4 class=\"text-lg font-black text-white\">Yapay Zekâ Etiği</h4>\n                        <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                            Yapay zekâyla görsel üretirken insanları aldatıcı sahte görüntüler (deepfake) üretmeyin; yapay zekâyı yaratıcı bir asistan olarak kullanın.\n                        </p>\n                    </div>\n                </div>\n\n                <div class=\"p-4 rounded-2xl bg-gradient-to-r from-purple-900/80 to-indigo-900/80 border-2 border-yellow-400/40 flex items-center justify-between gap-4 flex-wrap shadow-xl\">\n                    <div class=\"flex items-center gap-3\">\n                        <span class=\"text-3xl\">🎉</span>\n                        <div>\n                            <h4 class=\"font-black text-white text-sm sm:text-base\">Tebrikler! 7. Konu Sunumunu Başarıyla Tamamladınız!</h4>\n                            <p class=\"text-xs text-purple-200\">Şimdi Çalışma Kağıtlarını çözebilir ve 4 özel oyun arenasında rekor kırabilirsiniz!</p>\n                        </div>\n                    </div>\n                    <button onclick=\"app.switchTab('games'); sounds.playFanfare();\" class=\"px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95\">\n                        <i class=\"fa-solid fa-gamepad\"></i>\n                        <span>Oyun Arenasına Geç ➔</span>\n                    </button>\n                </div>\n            </div>\n        "
    }
],
    worksheetDocs: {
    "sayfa1Html": "\n            <div class=\"max-w-4xl mx-auto bg-slate-900 text-slate-100 p-6 sm:p-10 rounded-3xl border-2 border-indigo-500/40 space-y-6\">\n                <header class=\"border-b border-indigo-500/30 pb-4 flex items-center justify-between\">\n                    <div>\n                        <div class=\"text-xs font-bold text-indigo-400 uppercase\">Öğretmen Bozok • 5. Sınıf Bilişim Teknolojileri ve Yazılım</div>\n                        <h1 class=\"text-2xl font-black text-white\">Bölüm 1: Görsel ve Görüntü Türleri (1. Sayfa)</h1>\n                    </div>\n                    <span class=\"px-3 py-1 bg-indigo-500/20 text-indigo-300 font-bold rounded-lg text-xs\">BTY.5.2.1 • Sayfa 1</span>\n                </header>\n\n                <div class=\"space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                    <div class=\"bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-2\">\n                        <h3 class=\"font-bold text-white text-base text-indigo-300\">1. Görsel Nedir? Fotoğraf, Resim ve Çizim Farkı</h3>\n                        <p>\n                            Görsel; gözle görülebilen, bir anlam veya duygu aktaran resim, fotoğraf, şema ve çizimlerin genel adıdır. Fotoğraf makineyle gerçek dünyanın kaydıdır. Resim sanatçının el emeği ve duygusudur. Çizim/Grafik ise sembol, şema ve krokilerdir.\n                        </p>\n                    </div>\n\n                    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n                        <div class=\"bg-slate-800/80 p-4 rounded-2xl border border-sky-500/30 space-y-2\">\n                            <h4 class=\"font-bold text-sky-400 text-sm\">Piksel (Pixel) Nedir?</h4>\n                            <p>\n                                Dijital ekranlarda görüntüyü oluşturan en küçük renkli kare birimdir. Milyonlarca piksel yan yana gelerek gördüğümüz pürüzsüz fotoğrafları oluşturur. Çözünürlük ne kadar yüksekse görüntü o kadar nettir.\n                            </p>\n                        </div>\n\n                        <div class=\"bg-slate-800/80 p-4 rounded-2xl border border-emerald-500/30 space-y-2\">\n                            <h4 class=\"font-bold text-emerald-400 text-sm\">Bitmap vs Vektörel</h4>\n                            <p>\n                                <strong>Bitmap:</strong> Piksel ızgarasından oluşur (JPG, PNG). Büyütüldüğünde piksellenir ve bozulur.<br>\n                                <strong>Vektörel:</strong> Matematiksel formüllerle çizilir (SVG, AI). Ne kadar büyütülürse büyütülsün kalitesini korur.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ",
    "sayfa2Html": "\n            <div class=\"max-w-4xl mx-auto bg-slate-900 text-slate-100 p-6 sm:p-10 rounded-3xl border-2 border-indigo-500/40 space-y-6\">\n                <header class=\"border-b border-indigo-500/30 pb-4 flex items-center justify-between\">\n                    <div>\n                        <div class=\"text-xs font-bold text-indigo-400 uppercase\">Öğretmen Bozok • 5. Sınıf Bilişim Teknolojileri ve Yazılım</div>\n                        <h1 class=\"text-2xl font-black text-white\">Bölüm 2: Görüntü Dosyaları ve Uzantıları (2. Sayfa)</h1>\n                    </div>\n                    <span class=\"px-3 py-1 bg-indigo-500/20 text-indigo-300 font-bold rounded-lg text-xs\">BTY.5.2.1 • Sayfa 2</span>\n                </header>\n\n                <div class=\"space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                    <div class=\"bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-2\">\n                        <h3 class=\"font-bold text-white text-base text-emerald-300\">Dosya Uzantısı Nedir ve Neden Önemlidir?</h3>\n                        <p>\n                            Dosya adından sonra gelen nokta ve harfler (örn: <code>.jpg</code>, <code>.png</code>) dosyanın türünü belirtir. İşletim sistemi bu uzantıya bakarak dosyayı doğru grafik yazılımıyla açar.\n                        </p>\n                    </div>\n\n                    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n                        <div class=\"bg-slate-800/80 p-4 rounded-2xl border border-sky-500/30 space-y-2\">\n                            <h4 class=\"font-bold text-sky-400 text-sm\">Bitmap Uzantıları:</h4>\n                            <ul class=\"space-y-1 text-xs\">\n                                <li>• <strong>.JPG / .JPEG:</strong> Standart fotoğraf, yüksek sıkıştırma.</li>\n                                <li>• <strong>.PNG:</strong> Saydam (şeffaf) arka plan, net web grafikleri.</li>\n                                <li>• <strong>.GIF:</strong> Kısa hareketli animasyonlar.</li>\n                                <li>• <strong>.BMP:</strong> Windows Paint'in eski sıkıştırmasız büyük formatı.</li>\n                                <li>• <strong>.TIFF:</strong> Kayıpsız matbaa baskı standardı.</li>\n                            </ul>\n                        </div>\n\n                        <div class=\"bg-slate-800/80 p-4 rounded-2xl border border-emerald-500/30 space-y-2\">\n                            <h4 class=\"font-bold text-emerald-400 text-sm\">Vektörel Uzantılar:</h4>\n                            <ul class=\"space-y-1 text-xs\">\n                                <li>• <strong>.SVG:</strong> Web tarayıcılarında açılan ölçeklenebilir vektör.</li>\n                                <li>• <strong>.EPS:</strong> Matbaalar arası evrensel vektörel aktarım.</li>\n                                <li>• <strong>.AI:</strong> Adobe Illustrator yerel proje dosyası.</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ",
    "sayfa3Html": "\n            <div class=\"max-w-4xl mx-auto bg-slate-900 text-slate-100 p-6 sm:p-10 rounded-3xl border-2 border-indigo-500/40 space-y-6\">\n                <header class=\"border-b border-indigo-500/30 pb-4 flex items-center justify-between\">\n                    <div>\n                        <div class=\"text-xs font-bold text-indigo-400 uppercase\">Öğretmen Bozok • 5. Sınıf Bilişim Teknolojileri ve Yazılım</div>\n                        <h1 class=\"text-2xl font-black text-white\">Bölüm 3: Görsel İşleme Programları & Düzenleme (3. Sayfa)</h1>\n                    </div>\n                    <span class=\"px-3 py-1 bg-indigo-500/20 text-indigo-300 font-bold rounded-lg text-xs\">BTY.5.2.1 • Sayfa 3</span>\n                </header>\n\n                <div class=\"space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                    <div class=\"bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-2\">\n                        <h3 class=\"font-bold text-white text-base text-fuchsia-300\">Popüler Grafik Programları</h3>\n                        <div class=\"grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs pt-1\">\n                            <div class=\"p-2 bg-slate-900 rounded-xl\"><strong>Paint:</strong> Temel serbest çizim</div>\n                            <div class=\"p-2 bg-slate-900 rounded-xl\"><strong>Canva:</strong> Hazır şablonlu afiş</div>\n                            <div class=\"p-2 bg-slate-900 rounded-xl\"><strong>Photoshop:</strong> Profesyonel rötuş</div>\n                            <div class=\"p-2 bg-slate-900 rounded-xl\"><strong>Illustrator:</strong> Vektörel logo</div>\n                        </div>\n                    </div>\n\n                    <div class=\"bg-slate-800/80 p-4 rounded-2xl border border-amber-500/30 space-y-2\">\n                        <h4 class=\"font-bold text-amber-300 text-sm\">Görsel Düzenleme İşlemleri</h4>\n                        <ul class=\"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs\">\n                            <li>• <strong>Kırpma (Crop):</strong> İstenmeyen kenar boşluklarını kesip çıkarma.</li>\n                            <li>• <strong>Döndürme (Rotate):</strong> Yan duran görseli dik konuma getirme.</li>\n                            <li>• <strong>Boyutlandırma (Resize):</strong> En ve boy ölçülerini değiştirme.</li>\n                            <li>• <strong>Renk Ayarı:</strong> Parlaklık, kontrast ve doygunluğu düzenleme.</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        ",
    "sayfa4Html": "\n            <div class=\"max-w-4xl mx-auto bg-slate-900 text-slate-100 p-6 sm:p-10 rounded-3xl border-2 border-indigo-500/40 space-y-6\">\n                <header class=\"border-b border-indigo-500/30 pb-4 flex items-center justify-between\">\n                    <div>\n                        <div class=\"text-xs font-bold text-indigo-400 uppercase\">Öğretmen Bozok • 5. Sınıf Bilişim Teknolojileri ve Yazılım</div>\n                        <h1 class=\"text-2xl font-black text-white\">Bölüm 4: Dijital Ürün Tasarımı, Telif ve Etik (4. Sayfa)</h1>\n                    </div>\n                    <span class=\"px-3 py-1 bg-indigo-500/20 text-indigo-300 font-bold rounded-lg text-xs\">BTY.5.2.1 • Sayfa 4</span>\n                </header>\n\n                <div class=\"space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                    <div class=\"bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-2\">\n                        <h3 class=\"font-bold text-white text-base text-amber-300\">Tasarım Sürecinin 4 Aşaması</h3>\n                        <div class=\"grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs text-center pt-1\">\n                            <div class=\"p-2 bg-slate-900 rounded-xl border border-indigo-500/30\">1. Problemi Belirle</div>\n                            <div class=\"p-2 bg-slate-900 rounded-xl border border-purple-500/30\">2. Planla & Kurgu</div>\n                            <div class=\"p-2 bg-slate-900 rounded-xl border border-pink-500/30\">3. Tasarla & Geliştir</div>\n                            <div class=\"p-2 bg-slate-900 rounded-xl border border-emerald-500/30\">4. Kontrol Et & Paylaş</div>\n                        </div>\n                    </div>\n\n                    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n                        <div class=\"bg-slate-800/80 p-4 rounded-2xl border border-rose-500/30 space-y-2\">\n                            <h4 class=\"font-bold text-rose-300 text-sm\">Telif Hakkı & Yapay Zekâ Etiği</h4>\n                            <p class=\"text-xs\">\n                                Başkalarının ürettiği eserler telif hakkı ile korunur. İzinsiz kullanılamaz, kaynak belirtilmelidir. Yapay zekâ ile görsel üretirken sahte ve yanıltıcı içeriklerden kaçınılmalıdır.\n                            </p>\n                        </div>\n\n                        <div class=\"bg-slate-800/80 p-4 rounded-2xl border border-emerald-500/30 space-y-2\">\n                            <h4 class=\"font-bold text-emerald-300 text-sm\">Düzenli Dosya Adlandırma</h4>\n                            <p class=\"text-xs\">\n                                Dosyalar 'Ad_Soyad_Cevre_Afisi_v1.png' gibi konu ve isim belirten anlamlı adlarla kaydedilmeli, masaüstü karmaşasından kaçınılmalıdır.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ",
    "cevapHtml": "\n            <div class=\"max-w-4xl mx-auto bg-slate-900 text-slate-100 p-6 sm:p-10 rounded-3xl border-2 border-emerald-500/40 space-y-6\">\n                <header class=\"border-b border-emerald-500/30 pb-4 flex items-center justify-between\">\n                    <div>\n                        <div class=\"text-xs font-bold text-emerald-400 uppercase\">Öğretmen Bozok • Resmî Çözüm Rehberi</div>\n                        <h1 class=\"text-2xl font-black text-white\">7. Konu (BTY.5.2.1) Resmî Cevap Anahtarı</h1>\n                    </div>\n                    <span class=\"px-3 py-1 bg-emerald-500/20 text-emerald-300 font-bold rounded-lg text-xs\">25 Soru Çözümü</span>\n                </header>\n\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs leading-relaxed\">\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>1. Soru:</strong> B (Fotoğraf)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>2. Soru:</strong> C (Piksellerden)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>3. Soru:</strong> A (Görüntünün piksellerden oluşması)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>4. Soru:</strong> D (Büyütüldüğünde kalitesini koruması)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>5. Soru:</strong> A (Vektörel görüntü)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>6. Soru:</strong> B (Dosyanın uzantısını)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>7. Soru:</strong> C (SVG)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>8. Soru:</strong> A (GIF)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>9. Soru:</strong> D (resim.png)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>10. Soru:</strong> B (JPG)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>11. Soru:</strong> C (Paint)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>12. Soru:</strong> A (Canva)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>13. Soru:</strong> D (GIMP)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>14. Soru:</strong> B (Adobe Photoshop)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>15. Soru:</strong> C (Adobe Illustrator)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>16. Soru:</strong> A (Kırpma)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>17. Soru:</strong> C (Döndürme)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>18. Soru:</strong> B (Boyutlandırma)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>19. Soru:</strong> D (Renk düzenleme)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>20. Soru:</strong> A (Metin ve şekil ekleme)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>21. Soru:</strong> B (Problemi belirlemelidir)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>22. Soru:</strong> C (Görsel bütünlük ve okunabilirlik)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>23. Soru:</strong> A (Görselin telif hakkına dikkat etmeli)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>24. Soru:</strong> D (Etik kurallara ve telif haklarına dikkat etmek)</div>\n                    <div class=\"p-3 bg-slate-800 rounded-xl\"><strong>25. Soru:</strong> B (Ad_Soyad_Cevre_Afisi.png)</div>\n                </div>\n            </div>\n        ",
    "defterHtml": "\n            <div class=\"max-w-4xl mx-auto bg-slate-900 text-slate-100 p-6 sm:p-10 rounded-3xl border-2 border-purple-500/40 space-y-6\">\n                <header class=\"border-b border-purple-500/30 pb-4 flex items-center justify-between\">\n                    <div>\n                        <div class=\"text-xs font-bold text-purple-400 uppercase\">Öğretmen Bozok • Öğrenci Defter Notları</div>\n                        <h1 class=\"text-2xl font-black text-white\">7. Konu (BTY.5.2.1) Deftere Yazılacaklar</h1>\n                    </div>\n                    <span class=\"px-3 py-1 bg-purple-500/20 text-purple-300 font-bold rounded-lg text-xs\">Özet Not</span>\n                </header>\n\n                <div class=\"space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans\">\n                    <div class=\"p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2\">\n                        <h3 class=\"font-bold text-white text-sm text-amber-300\">📌 Deftere Not: Piksel, Bitmap ve Vektör</h3>\n                        <p>\n                            • <strong>Piksel:</strong> Ekrandaki en küçük renkli karedir.<br>\n                            • <strong>Bitmap:</strong> Piksellerden oluşur, büyütülünce piksellenir (JPG, PNG).<br>\n                            • <strong>Vektörel:</strong> Matematiksel formüllerle çizilir, büyütülünce ASLA bozulmaz (SVG, AI).\n                        </p>\n                    </div>\n\n                    <div class=\"p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2\">\n                        <h3 class=\"font-bold text-white text-sm text-sky-300\">📌 Deftere Not: Dosya Uzantıları ve Programlar</h3>\n                        <p>\n                            • <strong>JPG:</strong> Fotoğraflar için standart format.<br>\n                            • <strong>PNG:</strong> Şeffaf (saydam) arka plan desteği.<br>\n                            • <strong>GIF:</strong> Kısa hareketli animasyonlar.<br>\n                            • <strong>SVG:</strong> Web vektörel çizim formatı.<br>\n                            • <strong>Canva / Paint:</strong> Hızlı ve pratik çizim/afiş araçları.<br>\n                            • <strong>Photoshop:</strong> Fotoğraf düzenleme • <strong>Illustrator:</strong> Vektörel logo çizimi.\n                        </p>\n                    </div>\n\n                    <div class=\"p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2\">\n                        <h3 class=\"font-bold text-white text-sm text-emerald-300\">📌 Deftere Not: Tasarımın 4 Aşaması</h3>\n                        <p>\n                            1. Problemi Belirle ➔ 2. Planla ve Kurgu Oluştur ➔ 3. Tasarla ve Geliştir ➔ 4. Kontrol Et ve Paylaş.<br>\n                            • <strong>Telif Hakkı:</strong> Başkalarının eserine saygı duy, izin al ve kaynak belirt!\n                        </p>\n                    </div>\n                </div>\n            </div>\n        "
},
    questions: {
    "trueFalse": [
        {
            "q": "Kamera veya akıllı telefonla çekilen tüm fotoğraflar piksel tabanlı (Bitmap) görüntülerdir.",
            "answer": true,
            "explanation": "Doğru! Gerçek dünya kayıtları sensörlerin kaydettiği renkli piksellerden oluşur."
        },
        {
            "q": "Vektörel görüntüler büyütüldüğünde kenarları tırtıklı hâle gelir ve kalitesi hemen bozulur.",
            "answer": false,
            "explanation": "Yanlış! Vektörel görüntüler matematiksel formüllerle çizildiği için ne kadar büyütülürse büyütülsün kalitesini korur."
        },
        {
            "q": "PNG formatı şeffaf (saydam) arka planı destekler ve logolarda sıkça kullanılır.",
            "answer": true,
            "explanation": "Doğru! PNG şeffaflığı desteklediği için web logoları ve simgeleri için en popüler formattır."
        },
        {
            "q": "GIF dosya biçimi kısa süreli döngüsel hareketli animasyonlar oluşturmak için kullanılır.",
            "answer": true,
            "explanation": "Doğru! GIF birden fazla kareyi ardışık oynatarak hareketli animasyonlar sağlar."
        },
        {
            "q": "SVG, EPS ve AI dosya uzantıları piksel tabanlı bitmap formatlarıdır.",
            "answer": false,
            "explanation": "Yanlış! SVG, EPS ve AI formatları Vektörel (çizgisel) görüntü formatlarıdır."
        },
        {
            "q": "Paint, Windows işletim sistemiyle hazır gelen temel ve pratik bir çizim programıdır.",
            "answer": true,
            "explanation": "Doğru! Paint, temel çizim ve düzenleme işlemleri için kullanılan standart bir programdır."
        },
        {
            "q": "Adobe Photoshop programı, yalnızca vektörel logo çizimi için tasarlanmış bir programdır.",
            "answer": false,
            "explanation": "Yanlış! Photoshop piksel tabanlı fotoğraf düzenleme yazılımıdır; vektörel logo için Illustrator kullanılır."
        },
        {
            "q": "Kırpma (Crop) işlemi, bir fotoğrafın istenmeyen kenar alanlarını kesip çıkarmayı sağlar.",
            "answer": true,
            "explanation": "Doğru! Kırpma ile istenmeyen kenar detayları kesilerek ana nesneye odaklanılır."
        },
        {
            "q": "Dijital ürün tasarım sürecinin ilk aşaması hemen renkleri seçip afişi baskıya göndermektir.",
            "answer": false,
            "explanation": "Yanlış! Tasarım sürecinin ilk aşaması 'Problemi Belirleme' ve hedef kitleyi analiz etmektir."
        },
        {
            "q": "İnternette bulunan tüm görseller telifsizdir ve sahibinden izin almadan istenildiği gibi kullanılabilir.",
            "answer": false,
            "explanation": "Yanlış! Eserler telif hakkı ile korunur; izin almak, telifsiz görselleri seçmek veya kaynak belirtmek gerekir."
        }
    ],
    "multipleChoice": [
        {
            "q": "1. Ece, telefonuyla okul bahçesinin fotoğrafını çekiyor. Bu görüntü aşağıdakilerden hangisine örnektir?",
            "options": [
                "Vektörel çizim",
                "Fotoğraf",
                "Animasyon",
                "Metin belgesi"
            ],
            "answer": 1,
            "explanation": "Kamera ve telefonla çekilen gerçek dünya kayıtları 'Fotoğraf'tır ve piksel tabanlı (bitmap) görüntülerdir."
        },
        {
            "q": "2. Bitmap (nokta eşlemli) görüntüler hangi temel yapılardan oluşur?",
            "options": [
                "Seslerden",
                "Harflerden",
                "Piksellerden",
                "Klasörlerden"
            ],
            "answer": 2,
            "explanation": "Bitmap görüntüler milyonlarca küçük renkli kare olan 'piksel'lerin yan yana gelmesiyle oluşur."
        },
        {
            "q": "3. Bir fotoğraf bilgisayarda çok fazla büyütüldüğünde küçük kareler belirginleşiyor. Bunun temel nedeni nedir?",
            "options": [
                "Görüntünün piksellerden oluşması",
                "Dosyanın silinmesi",
                "Bilgisayarın kapanması",
                "Görüntünün ses içermesi"
            ],
            "answer": 0,
            "explanation": "Fotoğraflar sabit sayıda pikselden oluştuğu için aşırı büyütüldüklerinde bu kareler gözle görünür hâle gelir (pikselleşme)."
        },
        {
            "q": "4. Aşağıdakilerden hangisi VEKTÖREL görüntülerin en önemli özelliklerinden biridir?",
            "options": [
                "Yalnızca fotoğraflardan oluşması",
                "Büyütüldüğünde mutlaka bozulması",
                "Sadece siyah-beyaz olması",
                "Büyütüldüğünde kalitesini koruması"
            ],
            "answer": 3,
            "explanation": "Vektörel görseller matematiksel çizgi ve formüllerle oluşturulduğu için ne kadar büyütülürse büyütülsün kalitesini korur."
        },
        {
            "q": "5. Bir şirket logosunun hem küçücük bir kalemde hem de dev bir bina afişinde kullanılacağı düşünülürse hangi görüntü türü daha uygun olur?",
            "options": [
                "Vektörel görüntü",
                "Ses dosyası",
                "Metin dosyası",
                "Video dosyası"
            ],
            "answer": 0,
            "explanation": "Logolar farklı boyutlarda esnekçe ve sıfır kalite kaybıyla kullanılabilmesi için vektörel olarak hazırlanmalıdır."
        },
        {
            "q": "6. 'tatil_fotografi.jpg' dosyasındaki '.jpg' ifadesi neyi belirtir?",
            "options": [
                "Dosyanın boyutunu",
                "Dosyanın uzantısını",
                "Dosyanın oluşturulduğu kişiyi",
                "Bilgisayarın adını"
            ],
            "answer": 1,
            "explanation": "Noktadan sonraki kısım (.jpg) dosyanın türünü ve formatını belirten 'dosya uzantısı'dır."
        },
        {
            "q": "7. Aşağıdakilerden hangisi kaynaklarda VEKTÖREL görüntü dosya uzantısı olarak verilmiştir?",
            "options": [
                "JPG",
                "BMP",
                "SVG",
                "JPEG"
            ],
            "answer": 2,
            "explanation": "SVG (Scalable Vector Graphics), webde ve dijital ortamda en yaygın kullanılan vektörel dosya uzantısıdır."
        },
        {
            "q": "8. Kısa süreli hareketli görsellerle (animasyonlarla) karşılaşabileceğimiz dosya biçimi hangisidir?",
            "options": [
                "GIF",
                "TXT",
                "DOCX",
                "XLSX"
            ],
            "answer": 0,
            "explanation": "GIF formatı hareketli kareleri ardışık oynatarak animasyonlar oluşturulmasına olanak tanır."
        },
        {
            "q": "9. Aşağıdaki dosyalardan hangisi bir GÖRÜNTÜ (resim) dosyasıdır?",
            "options": [
                "odev.docx",
                "liste.xlsx",
                "muzik.mp3",
                "resim.png"
            ],
            "answer": 3,
            "explanation": "resim.png bir görsel (resim) dosyasıdır. docx metin, xlsx tablo, mp3 ise ses dosyasıdır."
        },
        {
            "q": "10. Aşağıdakilerden hangisi kaynaklarda VEKTÖREL dosya uzantısı örneği olarak VERİLMEMİŞTİR?",
            "options": [
                "EPS",
                "JPG",
                "AI",
                "SVG"
            ],
            "answer": 1,
            "explanation": "JPG piksel tabanlı (Bitmap) bir fotoğraf formatıdır; EPS, AI ve SVG ise vektörel formatlardır."
        },
        {
            "q": "11. Ali, bilgisayarında temel araçlarla basit bir resim çizmek istiyor. Hangi programdan yararlanabilir?",
            "options": [
                "Hesap makinesi",
                "Müzik çalar",
                "Paint",
                "Takvim"
            ],
            "answer": 2,
            "explanation": "Paint, Windows ile gelen basit ve pratik resim çizim programıdır."
        },
        {
            "q": "12. Okul etkinliği için hazır şablonlar ve zengin grafiklerle renkli bir afiş hazırlamak isteyen Zeynep hangi programdan yararlanabilir?",
            "options": [
                "Canva",
                "Hesap makinesi",
                "Dosya yöneticisi",
                "Not Defteri"
            ],
            "answer": 0,
            "explanation": "Canva, zengin şablon kütüphanesi ve kolay arayüzü ile afiş, broşür ve sunum hazırlamak için ideal bir web programıdır."
        },
        {
            "q": "13. Aşağıdakilerden hangisi ücretsiz ve açık kaynak kodlu gelişmiş bir görsel işleme programıdır?",
            "options": [
                "Saat",
                "Takvim",
                "Müzik çalar",
                "GIMP"
            ],
            "answer": 3,
            "explanation": "GIMP, katman destekli ve açık kaynak kodlu güçlü bir görsel düzenleme yazılımıdır."
        },
        {
            "q": "14. Profesyonel fotoğraf düzenleme ve rötuş konusunda dünyada en yaygın kullanılan program aşağıdakilerden hangisidir?",
            "options": [
                "Paint dışındaki hiçbir program kullanılamaz.",
                "Adobe Photoshop",
                "Hesap makinesi",
                "Dosya sıkıştırma aracı"
            ],
            "answer": 1,
            "explanation": "Adobe Photoshop, piksel tabanlı profesyonel fotoğraf düzenlemede endüstri standardıdır."
        },
        {
            "q": "15. Vektörel çizimler ve logolar hazırlamak isteyen bir tasarımcı aşağıdaki programlardan hangisini tercih edebilir?",
            "options": [
                "Müzik çalar",
                "Takvim",
                "Adobe Illustrator",
                "Hesap makinesi"
            ],
            "answer": 2,
            "explanation": "Adobe Illustrator, vektörel grafikler, amblemler ve çizimler hazırlamak için geliştirilmiş profesyonel bir yazılımdır."
        },
        {
            "q": "16. Bir fotoğrafın gereksiz kenarlarını kaldırıp yalnızca istenen bölümünü bırakmak isteyen öğrenci hangi işlemi yapmalıdır?",
            "options": [
                "Kırpma",
                "Döndürme",
                "Yazdırma",
                "Silme"
            ],
            "answer": 0,
            "explanation": "Kırpma (Crop) işlemi, fotoğrafın istenmeyen kenar alanlarını keserek odaklanılan kısmı çerçeveler."
        },
        {
            "q": "17. Yan çekilmiş bir fotoğrafı dik ve düzgün hâle getirmek için hangi işlem kullanılır?",
            "options": [
                "Kopyalama",
                "Boyutlandırma",
                "Döndürme",
                "Dosya adlandırma"
            ],
            "answer": 2,
            "explanation": "Döndürme (Rotate) işlemi, görselin açısını çevirerek yatay veya dikey konuma getirir."
        },
        {
            "q": "18. Hazırladığı afişin boyutları ekrana göre çok büyük olan Mert, afişi küçültmek istiyor. Hangi işlemi kullanmalıdır?",
            "options": [
                "Kırpma",
                "Boyutlandırma",
                "Silme",
                "Yeniden adlandırma"
            ],
            "answer": 1,
            "explanation": "Boyutlandırma (Resize) işlemi, görselin en-boy piksel ölçülerini büyütmek veya küçültmek için kullanılır."
        },
        {
            "q": "19. Bir fotoğrafın renklerini daha canlı, parlak ve net hâle getirmek isteyen öğrenci hangi düzenlemeyi yapmalıdır?",
            "options": [
                "Dosyayı silme",
                "Klasör oluşturma",
                "Dosyayı taşıma",
                "Renk düzenleme"
            ],
            "answer": 3,
            "explanation": "Renk düzenleme (parlaklık, kontrast, doygunluk) işlemi ile görselin renk tonları canlılaştırılır."
        },
        {
            "q": "20. Bir öğrenci hazırladığı görsele konuyla ilgili başlık ve geometrik şekiller eklemek istiyor. Hangi işlemlerden yararlanabilir?",
            "options": [
                "Metin ve şekil ekleme",
                "Bilgisayarı kapatma",
                "Dosyayı silme",
                "Klasörü yeniden adlandırma"
            ],
            "answer": 0,
            "explanation": "Görsel işleme programlarındaki metin (T) ve şekil araçları ile görsele başlık, açıklama ve simgeler eklenir."
        },
        {
            "q": "21. Okulunda çevre temizliği konusunda farkındalık oluşturmak isteyen bir öğrenci, afiş tasarımına başlarken öncelikle ne yapmalıdır?",
            "options": [
                "Bilgisayarı kapatmalıdır.",
                "Problemi belirlemelidir.",
                "Rastgele görseller seçmelidir.",
                "Dosyalarını silmelidir."
            ],
            "answer": 1,
            "explanation": "Tasarım sürecinin ilk aşaması 'Problemi Belirleme'dir (Afiş neyi çözecek, kime hitap edecek?)."
        },
        {
            "q": "22. Dijital ürün tasarımında aşağıdakilerden hangisi en önemli ilkelerden biridir?",
            "options": [
                "Yazıların okunamayacak kadar küçük olması",
                "Her rengin bir arada kullanılması",
                "Görsel bütünlük ve okunabilirlik",
                "Konuyla ilgisiz görseller kullanılması"
            ],
            "answer": 2,
            "explanation": "Başarılı bir afiş veya broşürde görsel bütünlük, sade tasarım ve uzaktan okunabilirlik esastır."
        },
        {
            "q": "23. Elif, internetten bulduğu bir görseli ödevinde kullanmak istiyor. Nasıl davranmalıdır?",
            "options": [
                "Görselin telif hakkına dikkat etmeli ve gerektiğinde kaynağını belirtmelidir.",
                "Görseli kendisininmiş gibi göstermelidir.",
                "Görselin sahibini gizlemelidir.",
                "Görseli izinsiz her yerde kullanmalıdır."
            ],
            "answer": 0,
            "explanation": "Başkalarının ürettiği eserler telif hakkıyla korunur; izin almak ve kaynak belirtmek ahlaki ve yasal kuraldır."
        },
        {
            "q": "24. Yapay zekâ ile görsel oluştururken aşağıdakilerden hangisi DOĞRU bir davranıştır?",
            "options": [
                "İnsanları yanıltacak sahte görseller hazırlamak",
                "Başkalarının haklarını önemsememek",
                "Her üretilen görselin gerçek olduğunu düşünmek",
                "Etik kurallara ve telif haklarına dikkat etmek"
            ],
            "answer": 3,
            "explanation": "Yapay zekâ araçlarıyla görsel üretirken etik kurallara, telif haklarına saygı gösterilmeli ve insanları aldatıcı sahte görseller üretilmemelidir."
        },
        {
            "q": "25. Öğrenci, hazırladığı çevre afişini daha sonra kolayca bulabilmek için hangi dosya adını tercih etmelidir?",
            "options": [
                "12345.png",
                "Ad_Soyad_Cevre_Afisi.png",
                "Yeni_Dosya_1.png",
                "Dosya.png"
            ],
            "answer": 1,
            "explanation": "Düzenli dosya adlandırma kuralına göre öğrenci adı, konu ve anlamlı kelimeler (örn: Ad_Soyad_Cevre_Afisi.png) kullanılmalıdır."
        }
    ]
}
};

window.WEEK_7_CONTENT = window.WEEK7_CONTENT;
