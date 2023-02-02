const http = require("http");
const fs = require("fs");
const PORT = 2000;

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      let homepage = fs.readFileSync("index.html");
      res.end(homepage);
    } else if (req.url === "/chi-sono") {
      res.writeHead(200, { "Content-Type": "text/html" });
      let chiSono = fs.readFileSync("chi-sono.html");
      res.end(chiSono);
    } else if (req.url === "/API/books") {
      res.writeHead(200, { "Content-Type": "application/json" });
      let books = fs.readFileSync("lista.json");
      res.end(books);
    } else {
      res.writeHead(404);
      res.end("Pagina non trovata");
    }
  })
  .listen(PORT);
