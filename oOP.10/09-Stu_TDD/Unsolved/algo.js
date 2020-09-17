function Algo() {}

Algo.prototype.reverse = function (str) {
  return str.split("").reverse().join("");
};

Algo.prototype.isPalindrome = function (str) {
  return str.split("").reverse().join("") === str ? true : false;
};

Algo.prototype.capitalize = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1, str.length);
};

module.exports = Algo;
