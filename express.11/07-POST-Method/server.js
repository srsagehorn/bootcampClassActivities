// Dependencies
const http = require("http");
const fs = require("fs");

const PORT = 8080;

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  req.on("data", function (data) {
    console.log(data.toString());
  });

  fs.readFile(__dirname + "/index.html", "utf-8", function (err, data) {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// Start our server
server.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
