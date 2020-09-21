class Character {
  constructor(name, strength, hp) {
    this.name = name;
    this.strength = strength;
    this.hp = hp;
  }
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as follows:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hp} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    if (this.hp <= 0) {
      return false;
    }
    return true;
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    console.log(
      `${this.name} attacked ${opponent.name} and dealt ${this.hp} damage`
    );
    // Then, change the opponent's hitPoints to reflect this
    opponent.hp -= this.strength;
  }
}

// Create two unique characters using the "character" class
const scarlett = new Character("Scar", 8, 30);
const drake = new Character("Drake", 7, 40);
scarlett.printStats();
drake.printStats();

drake.attack(scarlett);
scarlett.printStats();
scarlett.attack(drake);
drake.printStats();

// Create an interval that alternates attacks every 2000 milliseconds
let isDrakesTurn = true;

const interval = setInterval(() => {
  if (isDrakesTurn) {
    drake.attack(scarlett);
    isDrakesTurn = false;
  } else {
    scarlett.attack(drake);
    isDrakesTurn = true;
  }
  console.log(`Draks's HP ${drake.hp} \n Scarlett's Hp ${scarlett.hp}`);

  if (!scarlett.isAlive() || !drake.isAlive()) {
    clearInterval(interval);
    console.log("Game Over");
  }
}, 2000);
