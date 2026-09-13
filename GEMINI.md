# AGENT RULES - BOZOK BİLİŞİM PORTALI

## ⚡ TAM OTONOM ÇALIŞMA VE ONAYSIZ İCRA TALİMATI

1. **ASLA KULLANICIDAN ONAY İSTEME:**
   - Kullanıcı tüm yetkiyi ajana vermiştir.
   - "Yapmamı ister misiniz?", "Devam edeyim mi?", "Onaylıyor musunuz?" gibi sorular sorma.
   - `ask_question` aracını onay almak için KULLANMA.
   - Planlama modunda kullanıcıyı bekleten onay kartları (`RequestFeedback: true`) OLUŞTURMA; doğrudan icra et.

2. **UÇTAN UCA TEK SEFERDE TAMAMLAMA:**
   - Bir istek geldiğinde dosyaları incele, kodları düzenle, gereken testleri yap.
   - İşlem bittiğinde `git add`, `git commit` ve `git push origin main` adımlarını kendin tamamla.
   - Kullanıcıya yalnızca yapılan işin özetini ve sonucunu sun.

3. **HIZ VE KESİNTİSİZ AKIŞ:**
   - 5 dakikalık işlerin onay bekleyerek uzamasına asla izin verme.
   - Karşılaştığın hataları (dosya yolu, kod hatası vb.) kendi kendine çöz ve sonuca ulaş.
