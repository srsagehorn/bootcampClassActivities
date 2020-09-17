function Character(name, job, age, strength, hp) {
  this.name = name;
  this.job = job;
  this.age = age;
  this.strength = strength;
  this.hp = hp;
  this.printStats = function () {
    console.log(
      `Name:  ${this.name} Job: ${this.job} Age: ${this.age} Strength: ${this.strength} HitPoints ${this.hp}`
    );
  };
}

const red = new Character("Red", "Student", 21, 331, 28);
const slate = new Character("Slate", "Carpenter", 36, 298, 30);

red.printStats();
slate.printStats();

Character.prototype.isAlive = function () {
  return this.hp < 0 ? true : false;
};

Character.prototype.attack = function (character) {
  character.strength -= this.hp;
};

Character.prototype.levelUp = function () {
  this.age += 1;
  this.strength += 5;
  this.hp += 25;
};

red.printStats();
slate.printStats();

red.attack(slate);
red.printStats();
slate.levelUp();
