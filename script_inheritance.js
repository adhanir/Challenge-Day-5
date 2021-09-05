class sepatu {
  parameter(brand) {
    this.brand = brand;
  }
  getBrand() {
    console.log(brand);
  }
}

class sepatu2 extends sepatu {
  parameter(brand, warna) {
    this.brand = brand;
    this.warna = warna;
  }
}

var shoes = new sepatu2("Nike", "Putih");
console.log(shoes);
