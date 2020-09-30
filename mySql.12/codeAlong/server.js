const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "rootroot",
  database: "icecream_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected to mysql as id ${connection.threadId}`);

  connection.query("SELECT * FROM songs", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
