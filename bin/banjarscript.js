#!/usr/bin/env node
import fs from "fs";
import path from "path";
import url from "url";
import vm from "vm";
import { transpileBanjar } from "../lib/transpile.js";
import { runtimePrelude } from "../lib/runtime.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function printHelp() {
  console.log(`BanjarScript CLI\n\nUsage:\n  banjarscript <file.bjs>            Jalankan file BanjarScript\n  banjarscript --emit-js <file.bjs>   Keluarkan JavaScript hasil transpile ke stdout\n  banjarscript setup                  Install ekstensi VS Code otomatis\n  banjarscript --help                 Tampilkan bantuan\n`);
}


// Helper untuk copy folder recursive
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  if (!exists) return;
  
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

const args = process.argv.slice(2);
if (args.length === 0 || args.includes("--help")) {
  printHelp();
  process.exit(0);
}

// Handle Setup Command
if (args[0] === "setup" || args[0] === "setup-vscode") {
  console.log("🛠️  Sedang menyiapkan BanjarScript untuk VS Code...");
  
  const homeDir = process.env.HOME || process.env.USERPROFILE;
  const vscodeExtDir = path.join(homeDir, ".vscode", "extensions");
  
  // Source folder is sibling to 'bin' -> '../banjarscript-support'
  const sourceDir = path.resolve(__dirname, "..", "banjarscript-support");

  // Read package.json to get version
  const pkgPath = path.join(sourceDir, "package.json");
  let version = "0.0.1";
  if (fs.existsSync(pkgPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
      version = pkg.version || "0.0.1";
    } catch (e) {
      console.warn("⚠️  Gagal membaca versi, menggunakan default 0.0.1");
    }
  }

  const targetDir = path.join(vscodeExtDir, `jokobim.banjarscript-support-${version}`);

  if (!fs.existsSync(sourceDir)) {
    console.error("❌ Error: Folder banjarscript-support tidak ditemukan dalam paket ini.");
    process.exit(1);
  }

  try {
    // Clean old installs (remove any jokobim.banjarscript-support-*)
    if (fs.existsSync(vscodeExtDir)) {
      const extensions = fs.readdirSync(vscodeExtDir);
      extensions.forEach(ext => {
        if (ext.startsWith("jokobim.banjarscript-support-")) {
            console.log(`🗑️  Menghapus versi lama: ${ext}`);
          fs.rmSync(path.join(vscodeExtDir, ext), { recursive: true, force: true });
        }
      });
    }
    
    // Copy new files
    copyRecursiveSync(sourceDir, targetDir);
    
    console.log("✅ Berhasil! Ekstensi BanjarScript telah dipasang.");
    console.log("👉 Silakan RELOAD / Restart VS Code kamu untuk melihat efeknya.");
  } catch (err) {
    console.error("❌ Gagal menginstall ekstensi:", err.message);
    process.exit(1);
  }
  
  process.exit(0);
}

const emitJs = args[0] === "--emit-js";
const file = emitJs ? args[1] : args[0];
if (!file) {
  console.error("Error: File .bjs tidak ditemukan. Lihat --help.");
  process.exit(1);
}

const absPath = path.resolve(process.cwd(), file);
if (!fs.existsSync(absPath)) {
  console.error(`Error: File tidak ada -> ${absPath}`);
  process.exit(1);
}

const src = fs.readFileSync(absPath, "utf-8");
const js = runtimePrelude + "\n" + transpileBanjar(src, { filename: path.basename(file) });

if (emitJs) {
  process.stdout.write(js);
  process.exit(0);
}

// Eksekusi aman dengan VM
const sandbox = {
  console,
  module: {},
  process,
  __dirname: path.dirname(absPath),
  __filename: absPath,
  global: {},
};

try {
  const script = new vm.Script(js, { filename: file });
  const context = vm.createContext(sandbox);
  script.runInContext(context);
} catch (err) {
  console.error("\n[BanjarScript Runtime Error]\n" + err.stack);
  process.exit(1);
}
