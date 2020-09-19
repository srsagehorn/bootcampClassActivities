const Child = require("../child");

describe("Child", () => {
  it("Should throw an error for an empty name", () => {
    const name = "";
    const age = 2;
    expect(new Child(name, age)).toThrow(
      new Error("Expected parameter 'name' to be a non-empty string")
    );
  });

  it("Should throw an error for a negative number", () => {
    const name = "Shannon";
    const age = -5;
    expect(new Child(name, age)).toThrow(
      new Error("Expected parameter 'age' to be a non-negative number")
    );
  });

  it("Should create a new child", () => {
    const name = "Shannon";
    const age = 21;
    expect(new Child(name, age)).toBeInstanceOf(Child);
  });
});
