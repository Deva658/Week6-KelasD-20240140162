# Week 5 Revision — Etalase & Caption

Dua halaman web statis (HTML + CSS + JS native, tanpa library) yang terhubung lewat nav bar sticky.

## Halaman

### Etalase (`public/index.html`)
Katalog produk yang datanya diambil dari [dummyjson.com/products](https://dummyjson.com/products).
- Cari produk berdasarkan nama
- Filter berdasarkan kategori
- Badge "Stok Menipis" untuk produk dengan stok di bawah 10

### Caption (`public/form.html`)
Generator caption produk untuk media sosial.
1. Isi **nama produk** dan **harga**
2. Pilih template: **Promo**, **Santai**, atau **Formal**
3. Klik **Buat Caption**, lalu caption lengkap dengan emoji dan hashtag muncul di bawah

Harga otomatis diformat ke Rupiah, nama produk otomatis dijadikan hashtag (`kopi susu aren` → `#KopiSusuAren`).

**Validasi** (pesan error muncul langsung di bawah input saat mengetik):

| Field | Aturan |
|---|---|
| Nama Produk | wajib, 3–60 karakter, harus mengandung huruf |
| Harga | wajib, angka bulat, Rp 1.000 – Rp 100.000.000 |

## Struktur Folder

```
week5-revision/
├── public/
│   ├── index.html      # halaman Etalase
│   ├── form.html       # halaman Caption
│   ├── css/
│   │   ├── index.css   # style utama, dipakai kedua halaman (warna, font, nav, header, footer)
│   │   └── form.css    # style khusus form (dimuat setelah index.css)
│   └── js/
│       ├── index.js    # fetch, cari, dan filter produk
│       └── form.js     # template caption dan validasi
├── latihan/
│   ├── fetch.js        # script uji coba fetch API
│   └── test.js         # script latihan
└── README.md
```

## Cara Menjalankan

Buka `public/index.html` di browser. Tidak perlu install apa pun, tapi halaman Etalase butuh koneksi internet untuk mengambil data produk.

## Kustomisasi

- **Tambah template caption:** tambahkan entri baru di objek `templates` di `public/js/form.js`, lalu tambahkan `<option>` dengan `value` yang sama di `public/form.html`.
- **Ubah batas validasi:** edit objek `rules` di `public/js/form.js`.
- **Tambah halaman baru:** tambahkan link di `<nav>` pada setiap file HTML, dan beri `aria-current="page"` pada link halaman yang sedang aktif.
