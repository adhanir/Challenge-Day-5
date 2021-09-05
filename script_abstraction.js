function sepatu() {
  this.brand;
  console.log("error");
}

sepatu.prototype.display = function () {
  return "brand : " + this.brand;
};

function shoes(merk) {
  this.brand = merk;
}

shoes.prototype = Object.create(sepatu.prototype);
var shoes = new shoes("Adidas");
console.log(shoes.display());
