const fs = require("fs");

fs.readFile("animals.json", "utf8", function (err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];

  for (var i = 0; i < animalJSON.length; i++) {
    if (animalJSON[i].species == "cat") {
      cats.push(animalJSON[i]);
    } else {
      dogs.push(animalJSON[i]);
    }
  }

  fcats = JSON.stringify(cats);
  fdogs = JSON.stringify(dogs);

  fs.writeFile("dogs.json", fdogs);
  fs.writeFile("cats.json", fcats);
});
