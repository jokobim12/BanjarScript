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
  console.log(`BanjarScript CLI\n\nUsage:\n  banjarscript <file.bjs>            Jalankan file BanjarScript\n  banjarscript --emit-js <file.bjs>   Keluarkan JavaScript hasil transpile ke stdout\n  banjarscript --help                 Tampilkan bantuan\n`);
}

const args = process.argv.slice(2);
if (args.length === 0 || args.includes("--help")) {
  printHelp();
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
