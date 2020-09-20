const DayCare = require("../dayCare");
const Child = require("../child");

describe("DayCare", () => {
  it("Should not alow a child in over the age limit", () => {
    let jack = new Child("Jack", 10);
    let dayCare = new DayCare();
    dayCare.addChild(jack);
    expect(dayCare.children.length).toEqual(0);
  });

  it("Should not add a child if the daycare is full", () => {
    let kara = new Child("Kara", 3);
    let tommy = new Child("Tommy", 2);
    let lana = new Child("Lana", 2);
    let ali = new Child("Ali", 5);
    let kids = new DayCare();
    kids.addChild(kara);
    kids.addChild(tommy);
    kids.addChild(lana);
    kids.addChild(ali);
    expect(kids.children.length).toEqual(3);
  });
  //   it("Should not add a child under the age limit");
});
