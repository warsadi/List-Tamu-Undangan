# Daftar Tamu Undangan Pernikahan Warsadi & Della 💍

Website daftar tamu undangan pernikahan mobile-friendly dengan fitur pencarian real-time dan dropdown list interaktif.

## ✨ Fitur Utama
1. **Desain Khusus Mobile & Elegan**: Tampilan estetik dengan palet warna champagne gold & warm ivory bertema pernikahan.
2. **Fitur Pencarian Real-Time (Search Bar)**: Terletak tepat di atas dropdown list, menyaring nama tamu secara langsung dan menandai (highlight) kata kunci yang dicari.
3. **2 Dropdown Accordion**:
   - **List Undangan Warsadi** (84 Tamu)
   - **List Undangan Della** (90 Tamu)
   - Badge jumlah tamu didesain cantik dengan aksen gold & ikon pengguna di bawah judul dropdown.
   - Dilengkapi bar ringkasan total tamu di bagian bawah list.
4. **Fitur Edit Nama Tamu Undangan**:
   - Terletak tepat di samping kiri ikon WhatsApp dengan tombol pensil elegan bernuansa emas pernikahan.
   - Popup modal modern dengan autofokus input, validasi otomatis, serta opsi mengembalikan ke nama awal jika diperlukan.
   - Perubahan nama tersimpan otomatis di penyimpanan lokal browser (`localStorage`) sehingga tidak hilang saat halaman di-refresh.
5. **Tombol Ikon WhatsApp (Copy dengan Animasi Bersih)**:
   - Cukup satu kali klik pada ikon WhatsApp, pesan template langsung tersalin dengan animasi ikon centang (✓) tanpa popup yang mengganggu.
   - Template pesan dan tautan undangan otomatis menyesuaikan dengan nama tamu yang telah diedit.
6. **Format Nomor Tamu Rata Kiri**: Nomor urut tersusun rapi dengan alignment rata kiri (`tabular-nums`).
7. **Auto Expand saat Pencarian**: Dropdown otomatis terbuka jika nama yang dicari ditemukan di dalam list.

## 🚀 Cara Menjalankan

### Cara 1: Langsung Buka di Browser
Cukup klik dua kali file `index.html` di file manager Anda atau buka melalui browser apa saja di HP / Laptop.

### Cara 2: Menjalankan Local Server (Python)
Jalankan perintah berikut di terminal:
```bash
python3 -m http.server 8000
```
Lalu buka di browser HP / Laptop Anda melalui URL:
`http://localhost:8000` (atau IP lokal jaringan Wi-Fi untuk diakses langsung dari HP).

### Cara 3: Deploy Gratis ke Internet
Proyek ini berbasis HTML, CSS, dan JavaScript murni (tanpa build step), sehingga bisa langsung di-upload secara gratis ke:
- **GitHub Pages**
- **Vercel**
- **Netlify**
- **Cloudflare Pages**
