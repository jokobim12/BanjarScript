export function transpileBanjar(source, { filename = "input.bjs" } = {}) {
  const table = {
    // Variabel dan Konstanta
    wadah: "let",
    variabel: "let",   // opsional, jika ingin dua versi
    konstanta: "const",

    // Fungsi & Return
    fungsi: "function",
    balikan: "return",
    bulikakan: "return",

    // Conditional & Loop
    mun: "if",
    nanglain: "else",
    lain: "else",          // opsional, biar umum
    munkada: "while",
    selagi: "while",       // opsional
    selama: "while",       // opsional
    gasan: "for",

    //switch & case condition
    perubahan:'switch',
    kasus:'case',
    hancurakan:'break',
    dasarnya:'default',

    // Array
    jumlahIsi: "length",

    // Boolean
    bujur: "true",
    benar: "true",         // opsional
    salah: "false",

    // Operator
    dan: "&&",
    atau: "||",
    bukan: "!",

    //input
    masukakan: "masukakan",

    // Output
    tampaiakan: "console.log",
    tampilkan: "console.log",
  };
  
  // Frasa multi-kata (Array methods)
  const arrayMethods = {
    "tambahDiHujung": "push",
    "ambilDiHujung": "pop",
    "ambilDiAwal": "shift",
    "tambahDiAwal": "unshift",
    "cariPosisi": "indexOf",
    "adaKah": "includes",
    "ambilSebagian": "slice",
    "ubahDiTengah": "splice",
    "gabungJadiTulisan": "join",
  };

  // Frasa multi-kata (DOM HTML)
  const phrases = {
    "ambilElemenBedasarkanId": "document.getElementById",
    "pilihElemenLawanSelektor": "document.querySelector",
    "pilihSemuaElemen": "document.querySelectorAll",

    "tambahPangdangarKajadian": "addEventListener",

    "tambahKelasDiElemen": "classList.add",
    "hapusKelasDiElemen": "classList.remove",
    "tukarKelas": "classList.toggle",
    "cekKelas": "classList.contains",

    "ubahTeksElemen": "textContent",
    "ubahIsiHtml": "innerHTML",

    "aturAtribut": "setAttribute",
    "ambilAtribut": "getAttribute",
    "hapusAtribut": "removeAttribute",

    "buatElemenBaru": "document.createElement",
    "tambahAnak": "appendChild",
    "hapusElemen": "remove",
  };

  let code = source;
  // Transpile barisan[...] -> [...]
  code = code.replace(/\bbarisan\s*\[/g, "[");
  for (const [banjar, js] of Object.entries(arrayMethods)) {
    code = code.replaceAll(new RegExp(`\\b${banjar}\\b`, "g"), js);
  }
  for (const [banjar, js] of Object.entries(phrases)) {
    code = code.replaceAll(banjar, js);
  }
  for (const [banjar, js] of Object.entries(table)) {
    code = code.replaceAll(new RegExp(`\\b${banjar}\\b`, "g"), js);
  }
  return `// Transpiled from ${filename}\n` + code + "\n";
}
