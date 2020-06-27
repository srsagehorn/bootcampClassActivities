var math = require("./maths.js");

var op = process.argv[2]
var a = parseInt(process.argv[3])
var b = parseInt(process.argv[4])

switch(op) {
    case "sum" : console.log(math.sum(a,b));
    break;
    case "differnce" : console.log(math.difference(a;b));
    break;
    case "product" : console.log(math.product(a,b)); break;
    case "quotient" : console.log(math.quotient(a,b)); break;
    default: console.log("nope")
}