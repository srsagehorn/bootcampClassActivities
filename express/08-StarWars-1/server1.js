// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;


const character = [
{
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000,
  routeName = "yoda"
};

{
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200,
  routeName = "darthMaul"
};

{
  name: "Obi Wan Kenobi",
  role: "Jedi",
  age: 35,
  forcePoints: 1000,
  routeName = "obiwan"
};
]

app.get('/:character', function(req, res){
  const chosen = req.params.character
  console.log(chosen)

  for ( let i =0 ; i<characters.length; i++) {
    if (chosen === characters[i].routeName) {
      res.json(characters[i])
    }
  }
  res.json(false)
  res.end()
})

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
