const Vehicle = require("./vehicle");

class Car extends Vehicle {
  constructor(id, numberOfWheels, sound, color, passengers) {
    super(id, numberOfWheels, sound);
    this.color = color;
    this.passengers = passengers;
  }
  checkPassengers() {
    if (this.passengers > 4) {
      console.log("there are too many passengers");
    }
  }
  useHorn() {
    console.log(this.sound);
  }
}

module.exports = Car;
