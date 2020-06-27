console.log(process.argv);

var val1 = process.argv[2];
var val2 = process.argv[3];

if (val1 === val2) {
  console.log(true);
} else {
  console.log(false);
}
