class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return 2 * this.radius;
  }

  set diameter(value) {
    this.radius = value / 2;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);

// class Circle {
//     constructor(x) {
//         this.radius = x;
//     }

//     get radius() {
//         return this._radius
//     }

//     set radius(x) {
//         if (typeof(x) !== 'number') {
//             throw new Error('Radius must be a number')
//         }
//         this._radius = x;
//     }

//     get diameters() {
//         return this.radius * 2;
//     }

// }

// let myCircle = new Circle(4);

// console.log(myCircle.radius);
// console.log(myCircle.diameters);
