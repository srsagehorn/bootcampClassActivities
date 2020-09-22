var http = require("http");
var fs = require("fs");

var PORT = 8080;

const server = http.createServer(handleRequest);

// Start server
server.listen(PORT, function () {
  // Callback triggered when server is successfully listening.
  console.log("listening on port: " + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {
  // Capture the url the request is made to
  let path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {
    case "/foods":
    case "/movies":
    case "/frameworks":
      return display(path + ".html", res);
    default:
      return display("/index.html", res);
  }

  function display(file, res) {
    // use the fs package to read the file
    fs.readFile(__dirname + "/views/" + file, function (err, data) {
      if (err) throw err;
      // respond to the client with the HTML page
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
}
