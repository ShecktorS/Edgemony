const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static("public/assets"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/contatti", (req, res) => {
  res.sendFile(__dirname + "/contatti.html");
});

app.get("/recensioni", (req, res) => {
  res.sendFile(__dirname + "/recensioni.html");
});

app.get("/strumenti", (req, res) => {
  res.sendFile(__dirname + "/strumenti.html");
});

app.get("/strumenti/API", (req, res) => {
  res.json([
    {
      id: 1,
      nome: "pianoforte",
      tipo: "percussioni",
      condizione: "usato",
      prezzo: 800,
    },
    {
      id: 2,
      nome: "flauto",
      tipo: "fiato",
      condizione: "nuvo",
      prezzo: 10,
    },
    {
      id: 3,
      nome: "corno",
      tipo: "fiato",
      condizione: "usato",
      prezzo: 80,
    },
    {
      id: 4,
      nome: "batteria",
      tipo: "percussioni",
      condizione: "usato",
      prezzo: 120,
    },
  ]);
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/not_found.html");
});

app.listen(PORT);

console.log(`Server operativo su porta ${PORT}`);
