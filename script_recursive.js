function baris(angka) {
  console.log(angka);

  var next = angka + 1;
  if (next <= 10) {
    baris(next);
  }
}
baris(4);
