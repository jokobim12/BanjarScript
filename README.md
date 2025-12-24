# BanjarScript

**Bahasa pemrograman eksperimental berbasis JavaScript dengan cita rasa Banjar.**  
Tulis kode santai pakai bahasa Banjar, jalanin di mana aja!

![BanjarScript Icon](banjarscript-support/banjarscript-icon.png)

## 🚀 Instalasi & Persiapan

Hanya butuh 2 langkah untuk memulai:

### 1. Install BanjarScript (Global)

Pastikan kamu sudah punya [Node.js](https://nodejs.org) (v18+). Lalu jalankan terminal:

Windows:
```bash
npm i -g github:jokobim12/banjarscript
```

MacOS/Linux:
```bash
sudo npm i -g github:jokobim12/banjarscript
```

### 2. Setup VS Code (Warna & Icon)

Agar ngoding lebih asik, kita perlu mengaktifkan ekstensi VS Code. Cukup ketik perintah ini di terminal mana saja:

```bash
banjarscript setup
```

_(Lalu Reload/Restart VS Code kamu)_

---

## 📖 Cara Pakai

1. Buat file baru dengan akhiran `.bjs`, misalnya `coba.bjs`.
2. Tulis kodemu (lihat kamus di bawah).
3. Jalankan lewat terminal:
   ```bash
   banjarscript coba.bjs
   ```

---

## 📚 Kamus Kata Kunci (Cheatsheet)

| BanjarScript               | JavaScript    | Fungsi                            |
| -------------------------- | ------------- | --------------------------------- |
| `wadah` / `variabel`       | `let`         | Bikin variabel baru               |
| `konstanta`                | `const`       | Bikin nilai tetap (gabisa diubah) |
| `fungsi`                   | `function`    | Bikin fungsi                      |
| `tampaiakan` / `tampilkan` | `console.log` | Munculin tulisan di layar         |
| `mun`                      | `if`          | Cek kondisi (kalau...)            |
| `nanglain`                 | `else`        | Kalau tidak...                    |
| `gasan`                    | `for`         | Perulangan (looping)              |
| `selagi` / `munkada`       | `while`       | Ulangi selagi...                  |
| `balikan` / `bulikakan`    | `return`      | Balikin nilai                     |
| `bujur`                    | `true`        | Benar                             |
| `salah`                    | `false`       | Salah                             |
| `dan`                      | `&&`          | Operator logika DAN               |
| `atau`                     | `\|\|`        | Operator logika ATAU              |
| `bukan`                    | `!`           | Operator TIDAK / Bukan            |

---

## 💻 Contoh Program

### 1. Hello World

```javascript
tampaiakan("Halo Dunia!");
```

### 2. Perkenalan

```javascript
wadah data = {
  nama: "Joko Bimantaro",
  nim: "2401301001",
  prodi: "Teknologi Informasi",
  kampus: "Politeknik Negeri Tanah Laut",
  semester: 3
}

fungsi tampaiData(info) {
  tampaiakan("Nama: " + info.nama)
  tampaiakan("NIM: " + info.nim)
  tampaiakan("Program Studi: " + info.prodi)
  tampaiakan("Kampus: " + info.kampus)
  tampaiakan("Semester: " + info.semester)
}

tampaiData(data)
```

### 3. Sapa Kawan (Logika IF/ELSE)

```javascript
// Status kesehatan: garing = salah (artinya tidak sakit / sehat)
wadah garing = salah;
wadah kawanan = ["Udin", "Galuh", "Acil"];

fungsi cekKesehatan(daftarNama) {
  gasan (wadah i = 0; i < daftarNama.length; i++) {
    // Jika garing == salah (artinya sehat)
    mun (garing == salah) {
       tampaiakan(daftarNama[i], "Alhamdulillah, sehat walafiat!");
    } nanglain {
       tampaiakan(daftarNama[i], "Syafakallah, lekas sembuh lah...");
    }
  }
}

cekKesehatan(kawanan);
```

---

## 🤝 Kontribusi

Mau nambahin kosa kata baru? Atau nemu bug?
Silakan **Fork** repository ini, edit, dan ajukan **Pull Request**!

**Lisensi**: MIT License  
(c) Joko Bimantaro
