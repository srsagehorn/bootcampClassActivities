const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it("Should return the string in reverse order", () => {
      const str = "blue";
      const newStr = "eulb";
      expect(new Algo().reverse(str)).toEqual(newStr);
    });
  });

  describe("isPalindrome", () => {
    it("Should return true if the string is the same forwards and backwards. False if not.", () => {
      let str = "hannah";
      const result = true;
      expect(new Algo().isPalindrome(str)).toEqual(result);
    });

    it("Should return true if the string is the same forwards and backwards. False if not.", () => {
      let str = "shannon";
      const result = false;
      expect(new Algo().isPalindrome(str)).toEqual(result);
    });
  });

  describe("capitalize", () => {
    it("Should return the string with the first letter capitalized.", () => {
      let str = "lolipop";
      let newStr = "Lolipop";
      expect(new Algo().capitalize(str)).toEqual(newStr);
    });
  });
});
