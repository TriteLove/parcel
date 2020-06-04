class Graphs {
  constructor(w, h) {
    this.width = w;
    this.height = h;
  }
}

class Line extends Graphs {
  constructor(w, h) {
    super(w, h);
  }
}

let line1 = new Line(200, 200);

line1.width = 400;

console.log(`width: ${line1.width}, height: ${line1.height}`);
