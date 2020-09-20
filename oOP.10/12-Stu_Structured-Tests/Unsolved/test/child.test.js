let Child = require("../child");

describe("Child", () => {
  it("Should throw an error for an empty name", () => {
    let name = "";
    let age = 2;
    expect(new Child(name, age)).toThrowError(
      "Expected parameter 'name' to be a non-empty string"
    );
  });

  // it("Should throw an error for a negative number", () => {
  //   let name1 = "Shannon";
  //   let age1 = -5;
  //   expect(new Child(name1, age1)).toThrow(
  //     new Error("Expected parameter 'age' to be a non-negative number")
  //   );
  // });

  // it("Should throw an error for a non number age input", () => {
  //   let name2 = "Shannon";
  //   let age2 = "hi";
  //   expect(new Child(name2, age2)).toThrowError(
  //     "Expected parameter 'age' to be a non-negative number"
  //   );
  // });

  // it("Should create a new child", () => {
  //   let name3 = "Shannon";
  //   let age3 = 21;
  //   expect(new Child(name3, age3)).toBeInstanceOf(Child);
  // });

  // it("Should create a new child with acceptable inputs", () => {
  //   let name4 = "Harry Smith";
  //   let age4 = 2;
  //   expect(new Child(name4, age4)).toBeInstanceOf(Child);
  // });
});
