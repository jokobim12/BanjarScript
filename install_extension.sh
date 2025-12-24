#!/bin/bash

# Pastikan berada di root project
if [ ! -d "banjarscript-support" ]; then
    echo "Error: Jalankan script ini dari root folder BanjarScript!"
    exit 1
fi

echo "📦 Menginstall ekstensi BanjarScript ke VS Code..."

# Cek apakah command 'code' tersedia
if ! command -v code &> /dev/null; then
    echo "Error: VS Code (command 'code') tidak ditemukan."
    echo "Tips: Buka VS Code, tekan Ctrl+Shift+P, ketik 'Shell Command: Install 'code' command in PATH'"
    exit 1
fi

# Lokasi folder extensions VS Code
EXT_DIR="$HOME/.vscode/extensions/jokobim.banjarscript-support-0.0.1"

# Bersihkan instalasi lama jika ada
rm -rf "$EXT_DIR"

# Copy folder ekstensi ke direktori extensions VS Code
mkdir -p "$EXT_DIR"
cp -r banjarscript-support/* "$EXT_DIR"

echo "✅ Berhasil diinstall!"
echo "🔄 Silakan RELOAD window VS Code (Ctrl+R) atau restart VS Code untuk melihat hasilnya."
