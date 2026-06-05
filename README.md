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

Agar ngoding lebih asik, aktifkan ekstensi VS Code dengan perintah:

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
4. Untuk dipakai di HTML, build dulu ke `.js`:
   ```bash
   banjarscript build coba.bjs
   ```

---

## 📚 Kamus Kata Kunci (Cheatsheet)

### Dasar

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

### Perubahan (Switch)

| BanjarScript  | JavaScript | Fungsi                                                                 |
| ------------- | ---------- | ---------------------------------------------------------------------- |
| `perubahan`   | `switch`   | Mengecek ekspresi                                                      |
| `kasus`       | `case`     | Mengecek kondisi nilai hasil ekspresi dari `perubahan`                 |
| `hancurakan`  | `break`    | Mengakhiri eksekusi dari blok kasus                                    |
| `dasarnya`    | `default`  | Jika tidak ada `kasus` yang cocok, mirip seperti `nanglain`            |

### Barisan (Array)

Untuk membuat barisan (array), gunakan sintaks `barisan[...]`:

```javascript
wadah buah = barisan["mangga", "rambutan", "durian"];
```

| BanjarScript           | JavaScript  | Fungsi                              |
| ---------------------- | ----------- | ----------------------------------- |
| `barisan[...]`         | `[...]`     | Membuat array baru                  |
| `.tambahDiHujung()`    | `.push()`   | Menambah data di akhir              |
| `.ambilDiHujung()`     | `.pop()`    | Mengambil & menghapus data terakhir |
| `.ambilDiAwal()`       | `.shift()`  | Mengambil & menghapus data pertama  |
| `.tambahDiAwal()`      | `.unshift()`| Menambah data di awal               |
| `.jumlahIsi`           | `.length`   | Jumlah data dalam barisan           |
| `.cariPosisi()`        | `.indexOf()`| Mencari posisi data                 |
| `.adaKah()`            | `.includes()`| Memeriksa keberadaan data          |
| `.ambilSebagian()`     | `.slice()`  | Mengambil sebagian data             |
| `.ubahDiTengah()`      | `.splice()` | Mengubah atau menghapus di tengah   |
| `.gabungJadiTulisan()` | `.join()`   | Menggabungkan menjadi teks          |

### DOM (Manipulasi HTML)

Digunakan saat BanjarScript dipakai di dalam halaman HTML (via `banjarscript build`).

**Memilih Elemen:**

| BanjarScript                  | JavaScript                    | Fungsi                          |
| ----------------------------- | ----------------------------- | ------------------------------- |
| `ambilElemenBedasarkanId()`   | `document.getElementById()`  | Ambil elemen berdasarkan id     |
| `pilihElemenLawanSelektor()`  | `document.querySelector()`   | Pilih satu elemen via selektor  |
| `pilihSemuaElemen()`          | `document.querySelectorAll()` | Pilih semua elemen via selektor |

**Event:**

| BanjarScript                | JavaScript          | Fungsi                    |
| --------------------------- | ------------------- | ------------------------- |
| `.tambahPangdangarKajadian()` | `.addEventListener()` | Menambahkan event listener |

**Kelas CSS:**

| BanjarScript             | JavaScript              | Fungsi                          |
| ------------------------ | ----------------------- | ------------------------------- |
| `.tambahKelasDiElemen()` | `.classList.add()`      | Menambah kelas CSS              |
| `.hapusKelasDiElemen()`  | `.classList.remove()`   | Menghapus kelas CSS             |
| `.tukarKelas()`          | `.classList.toggle()`   | Toggle kelas CSS (on/off)       |
| `.cekKelas()`            | `.classList.contains()` | Memeriksa apakah kelas ada      |

**Konten Elemen:**

| BanjarScript       | JavaScript      | Fungsi                        |
| ------------------ | --------------- | ----------------------------- |
| `.ubahTeksElemen`  | `.textContent`  | Mengubah teks dalam elemen    |
| `.ubahIsiHtml`     | `.innerHTML`    | Mengubah isi HTML dalam elemen |

**Atribut:**

| BanjarScript      | JavaScript           | Fungsi                    |
| ----------------- | -------------------- | ------------------------- |
| `.aturAtribut()`  | `.setAttribute()`    | Mengatur nilai atribut    |
| `.ambilAtribut()` | `.getAttribute()`    | Mengambil nilai atribut   |
| `.hapusAtribut()` | `.removeAttribute()` | Menghapus atribut         |

**Membuat & Menghapus Elemen:**

| BanjarScript       | JavaScript                 | Fungsi                      |
| ------------------ | -------------------------- | --------------------------- |
| `buatElemenBaru()` | `document.createElement()` | Membuat elemen HTML baru    |
| `.tambahAnak()`    | `.appendChild()`           | Menambahkan elemen anak     |
| `.hapusElemen()`   | `.remove()`                | Menghapus elemen dari DOM   |

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
wadah garing = salah;
wadah kawanan = ["Udin", "Galuh", "Acil"];

fungsi cekKesehatan(daftarNama) {
  gasan (wadah i = 0; i < daftarNama.length; i++) {
    mun (garing == salah) {
      tampaiakan(daftarNama[i], "Alhamdulillah, sehat walafiat!");
    } nanglain {
      tampaiakan(daftarNama[i], "Syafakallah, lekas sembuh lah...");
    }
  }
}

cekKesehatan(kawanan);
```

### 4. Perubahan (Switch)

```javascript
wadah hari = "Senin";

perubahan (hari) {
  kasus "Senin":
    tampaiakan("Mulai semangat!");
    hancurakan;
  kasus "Jumat":
    tampaiakan("Hampir weekend!");
    hancurakan;
  dasarnya:
    tampaiakan("Hari biasa aja.");
}
```

### 5. Barisan (Array)

```javascript
wadah buah = barisan["mangga", "rambutan", "durian"];

buah.tambahDiHujung("pisang");
tampaiakan("Isi barisan:", buah);
tampaiakan("Jumlah:", buah.jumlahIsi);
tampaiakan("Ada mangga?", buah.adaKah("mangga"));

wadah sebagian = buah.ambilSebagian(0, 2);
tampaiakan("Sebagian:", sebagian);

wadah teks = buah.gabungJadiTulisan(", ");
tampaiakan("Digabung:", teks);
```

### 6. Manipulasi DOM (di HTML)

`coba.bjs`:
```javascript
wadah tombol = ambilElemenBedasarkanId("btnKirim");
wadah kotak = pilihElemenLawanSelektor(".kotak");
wadah pesan = ambilElemenBedasarkanId("pesan");

wadah sudahDiklik = salah;

tombol.tambahPangdangarKajadian("click", fungsi() {
  mun (sudahDiklik == salah) {
    kotak.tambahKelasDiElemen("aktif");
    kotak.ubahTeksElemen = "Alhamdulillah, aktif!";
    pesan.ubahTeksElemen = "Tombol sudah diklik!";
    sudahDiklik = bujur;
  } nanglain {
    kotak.hapusKelasDiElemen("aktif");
    kotak.ubahTeksElemen = "Ini kotaknya";
    pesan.ubahTeksElemen = "Klik lagi untuk mengaktifkan.";
    sudahDiklik = salah;
  }
});
```

Build ke JS lalu pakai di HTML:
```bash
banjarscript build coba.bjs
```

```html
<script src="coba.js"></script>
```

---

## 🤝 Kontribusi

Mau nambahin kosa kata baru? Atau nemu bug?  
Silakan **Fork** repository ini, edit, dan ajukan **Pull Request**!

**Lisensi**: MIT License  
(c) Joko Bimantaro
