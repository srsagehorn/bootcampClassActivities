const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

function prompt() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "what is your name?",
    },
    {
      type: "input",
      name: "location",
      message: "where are you from?",
    },
    {
      type: "input",
      name: "hobby",
      message: "what do you do for fun",
    },
    {
      type: "input",
      name: "linkedin",
      message: "what is your linked in?",
    },
    {
      type: "input",
      name: "github",
      message: "what is your github?",
    },
  ]);
}

prompt().then(function (answer) {
  const html = `
  
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">My name is ${answer.name} </h1>
    <p class="lead">I live in ${answer.location}</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My github username is ${answer.github}</li>
      <li class="list-group-item">My linked in page is ${answer.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

  fs.writeFile("index.html", html, function () {
    console.log("saved");
  });

  console.log(answer);
});
