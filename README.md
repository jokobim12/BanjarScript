# BanjarScript

Bahasa pemrograman _eksperimental_ berbasis JavaScript.  
Tulis kode dengan kata kunci Banjar, jalankan via CLI seperti bahasa modern!

---

## Daftar Kata Kunci BanjarScript

| BanjarScript                  | JavaScript    | Keterangan                        |
| ----------------------------- | ------------- | --------------------------------- | --- | ----------- |
| `wadah`, `variabel`, `ubah`   | `let`         | Variabel (boleh pilih salah satu) |
| `konstanta`                   | `const`       | Konstanta                         |
| `fungsi`                      | `function`    | Definisi fungsi                   |
| `balikan`, `bulikakan`        | `return`      | Mengembalikan nilai dari fungsi   |
| `mun`                         | `if`          | Kondisi if                        |
| `nanglain`, `lain`            | `else`        | Kondisi else                      |
| `munkada`, `selagi`, `selama` | `while`       | Perulangan while                  |
| `gasan`                       | `for`         | Perulangan for                    |
| `bujur`, `benar`              | `true`        | Boolean true                      |
| `salah`                       | `false`       | Boolean false                     |
| `dan`                         | `&&`          | Operator AND                      |
| `atau`                        | `             |                                   | `   | Operator OR |
| `bukan`                       | `!`           | Operator NOT                      |
| `tampaiakan`, `tampilkan`     | `console.log` | Output ke terminal                |

## Instalasi

**Syarat:** Node.js v18+

### Install global dari GitHub

```bash
npm i -g github:jokobim12/banjarscript

```

## Cara Menjalankan BanjarScript

1. Buat file BanjarScript baru, misal coba.bjs
2. Isi kode BanjarScript, contoh:

```bash
tampaiakan("hello world")
```

3. Jalankan pada terminal project:

```bash
banjarscript coba.bjs
```

## Contoh Program

```bash
wadah angka = [1, 2, 3];
fungsi cetakSemua(data) {
  gasan (wadah i = 0; i < data.length; i = i + 1) {
    tampaiakan("Data ke", i, "=", data[i]);
  }
}
cetakSemua(angka);
```

## VS Code Support

3. Jalankan perintah berikut untuk mengaktifkan warna dan icon di VS Code:

```bash
banjarscript setup
```

4. Reload VS Code (Ctrl+R)

## Kontribusi

Saran, issue, dan pull request sangat diterima!

- Fork repo ini
- Buat branch baru
- Ajukan pull request ke main

## Lisensi

MIT License
(c) Joko Bimantaro
