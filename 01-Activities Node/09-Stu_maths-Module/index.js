var maths = require("./maths");

var op = process.argv[2];
var a = parseInt(process.argv[3]);
var b = parseInt(process.argv[4]);

switch (op) {
  case "sum":
    console.log(maths.sum(a, b));
    break;
  case "differnce":
    console.log(maths.difference(a, b));
    break;
  case "product":
    console.log(maths.product(a, b));
    break;
  case "quotient":
    console.log(maths.quotient(a, b));
    break;
  default:
    console.log("nope");
}
