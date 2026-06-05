// Transpiled from coba.bjs
let tombol = document.getElementById("btnKirim");
let kotak = document.querySelector(".kotak");
let pesan = document.getElementById("pesan");

let sudahDiklik = false;

tombol.addEventListener("click", function() {
  if (sudahDiklik == false) {
    kotak.classList.add("aktif");
    kotak.textContent = "Alhamdulillah, aktif!";
    pesan.textContent = "Tombol sudah diklik!";
    sudahDiklik = true;
  } else {
    kotak.classList.remove("aktif");
    kotak.textContent = "Ini kotaknya";
    pesan.textContent = "Klik lagi untuk mengaktifkan.";
    sudahDiklik = false;
  }
});

