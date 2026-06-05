// Transpiled from contoh_barisan.bjs
// Contoh penggunaan barisan (array) di BanjarScript

let buah = ["mangga", "rambutan", "durian"];

// push - push
buah.push("pisang");
console.log("Setelah tambah di hujung:", buah);

// pop - pop
let terakhir = buah.pop();
console.log("Diambil dari hujung:", terakhir);

// unshift - unshift
buah.unshift("nanas");
console.log("Setelah tambah di awal:", buah);

// shift - shift
let pertama = buah.shift();
console.log("Diambil dari awal:", pertama);

// length - length
console.log("Jumlah isi barisan:", buah.length);

// indexOf - indexOf
console.log("Posisi 'durian':", buah.indexOf("durian"));

// includes - includes
console.log("Ada 'mangga'?", buah.includes("mangga"));

// slice - slice
let sebagian = buah.slice(0, 2);
console.log("Sebagian barisan:", sebagian);

// splice - splice
buah.splice(1, 1, "kelapa");
console.log("Setelah ubah di tengah:", buah);

// join - join
let teks = buah.join(", ");
console.log("Digabung jadi tulisan:", teks);

