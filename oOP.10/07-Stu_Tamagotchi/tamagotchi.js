function DigitalPal = function() {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
  this.outside = false;
  this.houseCondition = 100;
  this.feed = function() {
    if (hungry) {
      console.log("That was yummy!");
      this.hungry = false;
      this.sleepy = true;
    } else {
      console.log("No thanks, I'm full.");
    }
  };
  this.sleep = function() {
    if (this.sleepy) {
      console.log("Zzzzzzz");
      this.sleepy = false;
      this.bored = true;
      increaseAge();
    } else {
      console.log("No way! I'm not tired!");
    }
  };
  this.play = function() {
    if (this.bored) {
      console.log("Yay! Lat'e play!");
      this.bored = false;
      this.hungry = true;
    } else {
      console.log("Not right now. Later?");
    }
  };
  this.increaseAge = function() {
    this.age++;
    console.log("Happy Birthday to me! I am" + age + "old!");
  };
  this.bark = function() {
    console.log("Woof woof!");
  };
  this.goOutside = function() {
    if (!this.outside) {
      console.log("Yay, I love the outdoors!");
      this.outside = true;
      this.bark();
    }
    else {
        console.log("We're already outside though...")
    }
  };
  this.goInside = function() {
      if (this.outside) {
          console.log("Do we have to? Fine...")
          this.outside = false
      }
      else {
          console.log("I'm already inside...")
      }
  }
  this.meow = function() {
    console.log("Meow meow!");
  };
  this.destroyFurniture = function() {
    if (this.houseCondition == 0) {
        return
    }
    else {
      this.houseCondition -= 10;
      console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
      this.bored = false;
      this.sleepy = true;
    }
  }
  this.buyNewFurniture  = function() {
      this.houseCondition += 50;
      console.log("Are you sure about that?")
  }
}

var dog = new DigitalPal()
var cat = new DigitalPal()

dog.feed = true
cat.meow()