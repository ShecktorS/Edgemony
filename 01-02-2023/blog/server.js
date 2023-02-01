const http = require("http");

const PORT = 3001;

let articoli = "I miei articoli";
let commenti = "I commenti";
let utenti = "Gli utenti";

const server = http.createServer((req, res) => {
  // if (req.url === "/") {
  //   res.writeHead(200, { "Content-Type": "text/plain" });
  //   res.end("Server operativo");
  // }
  // ;
  if (req.url === "/articoli") res.end(articoli);
  else if (req.url === "/commenti") res.end(commenti);
  else if (req.url === "/utenti") res.end(utenti);
  else res.writeHead(404);
  res.end("Pagina non trovata");
});

server.listen(PORT);
console.log(`Porta: ${PORT}`);
