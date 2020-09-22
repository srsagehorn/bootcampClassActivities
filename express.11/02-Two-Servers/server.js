const http = require("http");

const PORT1 = 7000;
const PORT2 = 7500;

const server1 = http.createServer(function (req, res) {
  res.end("Smile at Dogs");
});

const server2 = http.createServer(function (req, res) {
  res.end("Where ever you go, there you are");
});

server1.listen(PORT1, function () {
  console.log("Server Listening on http://localhost:" + PORT1);
});
server2.listen(PORT2, function () {
  console.log("Server Listening on http://localhost:" + PORT2);
});
