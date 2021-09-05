class sepatu {
  constructor(brand, warna) {
    this.brand = brand;
    this.warna = warna;
  }
  ukuran(size) {
    this.size = size;
  }
  getFunction() {
    console.log(this.brand);
    console.log(this.warna);
    console.log(this.size);
  }
}

var nike = new sepatu("Nike", "Abu-abu");
nike.ukuran("40");
nike.getFunction();
