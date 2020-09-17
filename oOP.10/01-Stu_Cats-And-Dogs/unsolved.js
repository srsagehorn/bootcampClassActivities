function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = function () {
    if (this.raining == true) {
      console.log(this.noise);
    }
  };
}

var dogs = new Animal(true, "woof!");
var cats = new Animal(false, "meow!");

function massHysteria() {
  if (dogs.raining === true && cats.raining === true) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
}

massHysteria();
dogs.makeNoise();
cats.makeNoise();

cats.raining = true;
cats.makeNoise();
