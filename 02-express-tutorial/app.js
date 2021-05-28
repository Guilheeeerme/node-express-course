const http = require("http");

const server = http.createServer((request, response) => {
  console.log("user hit the server");
  response.end("home page");
});

server.listen(5000);
