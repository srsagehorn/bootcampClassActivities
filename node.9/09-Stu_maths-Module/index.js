var math = require(maths.js)

var a = parseInt(process.argv[2])
var b = parseInt(process.argv[3])

switch {
    case "sum" : console.log(math.sum(a,b)) break,
    case "differnce" : console.log(math.difference(a,b)) break,
    case "product" : console.log(math.product(a,b)) break,
    case "quotient" : console.log(math.quotient(a,b)) break,
}