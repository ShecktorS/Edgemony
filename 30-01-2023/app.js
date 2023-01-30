const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("Home page");
  else if (req.url === "/students") res.end("Studenti");
  else if (req.url === "/courses") res.end("Corsi");
  else {
    res.writeHead(404);
    res.end("La pagina richiesta non e' stata trovata");
  }
});

server.listen(3000);
