# 🚀 Bozok Bilişim Portalı

> **5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi** için Öğretmen Bozok tarafından geliştirilmiş, MEB müfredatına %100 uyumlu, akıllı tahta dostu interaktif ders sunuları, çalışma kağıtları ve eğitsel oyunlar platformu.

---

## 🌟 Öne Çıkan Özellikler

- 🖥️ **Akıllı Tahta Uyumlu Sabit Slayt Sunuları:** 
  - Boyutları sabitlenmiş (zıplama yapmayan), dikey ortalı ve taşmayan slayt arayüzü.
  - Slayt kenarlarında dev dokunmatik yan ok butonları (`<` ve `>`).
  - Tek dokunuşla çalışan **Tam Ekran (Fullscreen)** ve **Ekranı Küçült** desteği.
  - Klavye yön tuşları (`←` / `→`), sunum kumandası (`PageDown` / `PageUp`) ve dokunmatik ekran kaydırma (swipe) kontrolü.
- 📄 **Yazdırılabilir & İnteraktif Çalışma Kağıtları:**
  - Konu anlatımı, soru fasikülü ve cevap anahtarı.
  - Fotoğraflı ve vektörel akıllı tahta yakınlaştırma (zoom) desteği.
- 🎮 **Oyun Arenası & Pekiştirme Oyunları:**
  - 🎡 **Bilişim Çarkıfeleği**
  - 🧩 **Kavram & Alan Eşleştirme**
  - ⚡ **Hızlı Refleks Oyunu** (Doğru mu Yanlış mı?)
  - 👥 **Akıllı Tahta Canlı İkili Düello**
  - 👑 **Bilişim Teknolojileri Bilgi Arenası**
  - 🕵️‍♂️ **Bilişim Dedektifleri** & **Teknoloji Dedektifleri**
  - ⚖️ **Teknoloji Mahkemesi**
  - 🧭 **Bir Günlük Teknoloji Macerası**
- 📅 **37 Haftalık MEB Yıllık Planı Entegrasyonu:**
  - 6 MEB Teması hızlı gezinme çubuğu.
  - 37 haftanın tüm kazanım ve ders akışı.

---

## 📁 Proje Klasör Yapısı

```text
5.sinifbilsim/
├── index.html                 # Ana Tek Sayfa Uygulaması (SPA)
├── README.md                  # Proje Açıklaması ve Kılavuz
├── .gitignore                 # Git yoksayma listesi (API anahtarları korunur)
├── .env.example               # Örnek çevre değişkenleri
│
├── assets/                    # Medya ve görsel materyaller
│   ├── slides/                # Ders sunuları için yüksek çözünürlüklü görseller
│   └── worksheets/            # Çalışma kağıdı ve cevap anahtarı görselleri
│
├── css/                       # Stil dosyaları
│   └── style.css              # Özel temalar, tam ekran ve animasyon kuralları
│
├── games/                     # Bağımsız tam ekran simülasyon ve vaka oyunları
│   ├── bilisim_teknolojileri_dedektifleri.html
│   ├── teknoloji_mahkemesi.html
│   ├── bir_gunluk_teknoloji_maceras.html
│   └── tekrar oyunu hafta 2.html
│
├── js/                        # Uygulama motoru ve oyun mantığı
│   ├── app.js                 # Ana SPA denetleyicisi, klavye ve dokunmatik yönetim
│   ├── audio.js               # Ses efektleri yöneticisi
│   ├── data/                  # 37 haftalık müfredat ve hafta içerikleri
│   │   ├── curriculum.js
│   │   ├── week1_content.js ... week37_content.js
│   └── games/                 # Dahili mini oyun modülleri (Arena, Düello vb.)
│
├── docs/                      # Müfredat kaynak belgeleri (Word / Excel planlar)
└── scripts/                   # Müfredat oluşturma ve yardımcı araçlar
```

---

## 🚀 Çalıştırma

Herhangi bir sunucu kurulumu gerektirmez. `index.html` dosyasını tarayıcınızda veya akıllı tahtanızda çift tıklayarak hemen açabilirsiniz.

---

**Geliştirici:** Öğretmen Bozok  
*Geleceğin bilişimcileri için sevgiyle geliştirildi.* ❤️
