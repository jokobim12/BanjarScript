export function transpileBanjar(source, { filename = "input.bjs" } = {}) {
  const table = {
    // Variabel dan Konstanta
    wadah: "let",
    variabel: "let",   // opsional, jika ingin dua versi
    ubah: "let",       // opsional
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

    // Boolean
    bujur: "true",
    benar: "true",         // opsional
    salah: "false",

    // Operator
    dan: "&&",
    atau: "||",
    bukan: "!",

    // Output
    tampaiakan: "tampaiakan",
    tampilkan: "tampilkan"
  };
  let code = source;
  for (const [banjar, js] of Object.entries(table)) {
    code = code.replaceAll(new RegExp(`\\b${banjar}\\b`, "g"), js);
  }
  return `// Transpiled from ${filename}\n` + code + "\n";
}
