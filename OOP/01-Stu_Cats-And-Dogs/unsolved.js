var cats = {
  raining: false,
  noise: "Meow!",
  makeNoise: makeNoise(),
};

var dogs = {
  raining: true,
  noise: "Woof!",
  makeNoise: makeNoise(),
};

function makeNoise() {
  if (this.raining == true) {
    console.log(this.noise);
  }
}

function mass() {
  if (dogs.raining === true && cats.raining === true) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
}

mass();
