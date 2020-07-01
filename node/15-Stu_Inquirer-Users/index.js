var inquirer = require("inquirer");

var question = answer();

inquirer.prompt(question).then((answers) => {
  fs.writeFile("input.json", JSON.stringify(answers), function (err) {
    console.log(err);
  });
});

function answer() {
  return [
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "checkbox",
      message: "What languages do you know?",
      name: "lang",
      choices: ["JavaScript", "Python", "Java", "C++"],
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "comm",
      choices: ["email", "text", "Fb messenger"],
    },
  ];
}

fs.readFile("input.json"),
  function (err) {
    console.log(err);
  };
