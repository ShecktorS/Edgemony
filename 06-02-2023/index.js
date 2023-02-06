const express = require("express");
const { books } = require("./books.js"); // importo i dati dei libri
const authorize = require("./auth"); // importo l'autorizzazione per poter accedere alle mie API
const PORT = 4009;

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(
    '<h1>Questa è la HOME</h1><a href="./my-books">Clicca qui per vedere i miei libri</a>'
  );
});

app.get("/my-books", (req, res) => {
  res.sendFile(__dirname + "/my-books.html");
});

app.get("/API/books", authorize, (req, res) => {
  res.sendFile((JSON = __dirname + "/lista-libri.json"));
});

app.get("/API/books-under20", authorize, (req, res) => {
  const someBooks = books.filter((book) => book.price < 20);
  res.json(someBooks);
});

app.listen(PORT, () => {
  console.log(`Il Server è in ascolto nella porta: ${PORT}`);
});
