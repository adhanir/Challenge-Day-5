class first {
  run() {
    console.log("first");
  }
}
class second extends first {
  run() {
    console.log("second");
  }
}
class third extends first {
  run() {
    console.log("third");
  }
}

var a = new first();
var b = new second();
var c = new third();

a.run();
b.run();
c.run();
