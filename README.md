# Wangy-Wangy: Judi Waifu Gacha Gacor

Situs web simulasi gacha berbasis HTML5, CSS3, dan JavaScript Vanilla dengan tema estetika Ombre Pink. Web ini menyajikan fitur roda keberuntungan (spin wheel) interaktif untuk mendapatkan waifu berdasarkan probabilitas rate tertentu.

---

## Fitur Utama

- Roda Keberuntungan (Spin Wheel): Animasi roda berputar berbasis CSS Transform dan Transition dengan penunjuk jarum yang akurat.
- Sistem Gacha Berbobot (Weighted Rate): Tingkat kelangkaan karakter acak berdasarkan probabilitas:
  - UR (Ultra Rare - 1%): Kokomi
  - SSR (Super Super Rare - 8%): Aqua, Asuna, Orihime
  - SR (Super Rare - 17.5%): Chizuru, Sakura
  - R (Rare - 20%): Hideri, Venti
- Sistem Saldo (Bawang): Pengelolaan saldo interaktif untuk keperluan gacha (160 Bawang per spin) lengkap dengan fitur modal pop-up top-up.
- Koleksi / Tas Waifu: Otomatis menyimpan daftar waifu yang berhasil didapatkan beserta gambarnya ke dalam daftar koleksi.
- Tampilan Responsive: Menggunakan kombinasi palet warna Ombre Pink.

---

## Teknologi yang Digunakan

- HTML5: Struktur utama antarmuka pengguna.
- CSS3: Styling kustom, layouting Flexbox dan Grid, serta animasi rotasi roda.
- JavaScript ES6: Logika manipulasi DOM, kalkulasi sudut rotasi presisi, dan algoritma weighted randomizer.

---

## Struktur Folder Proyek

judi-waifu/
|
|-- doksli/
|   |-- kokomi.jpeg
|   |-- aqua.jpg
|   |-- Asuna.jpg
|   |-- Orihime.jpg
|   |-- Chizuru.jpg
|   |-- Sakura.jpg
|   |-- Hideri.jpg
|   `-- Venti.jpg
|
|-- index.html
|-- style.css
|-- script.js
`-- README.md

---

## Cara Menjalankan Proyek

1. Unduh seluruh file proyek ke dalam satu folder di komputer kamu.
2. Pastikan file gambar waifu berada di dalam folder doksli sesuai nama yang terdaftar.
3. Buka file index.html menggunakan browser seperti Google Chrome, Microsoft Edge, atau Firefox.
