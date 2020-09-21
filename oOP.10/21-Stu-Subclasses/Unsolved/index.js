const Car = require("./car");
const Boat = require("./boat");

const mazda = new Car(2, 4, "honk", "white", 4);

const gibson = new Boat(1, 0, "brrr", ["jack", "jim"]);

console.log(gibson);
console.log(mazda);

console.log(mazda.useHorn());
console.log(gibson.useHorn());
