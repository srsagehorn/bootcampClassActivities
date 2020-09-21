const Vehicle = require("./vehicle");

class Boat extends Vehicle {
  constructor(id, numberOfWheels, sound, crew) {
    super(id, numberOfWheels, sound);
    this.crew = crew;
  }
  crewSoundOff() {
    this.crew.foreach((element) => console.log(element));
  }
  useHorn() {
    console.log(this.sound);
  }
}

module.exports = Boat;
