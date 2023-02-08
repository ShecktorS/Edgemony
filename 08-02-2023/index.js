// Avete a disposizione un po' di materiale su cui lavorare: o il file data.js o il file articoli.json.
// Questo ultimo file è più ricco di contenuti per gestire meglio le nostre chiamate,
// creando e modificando il dati.
// Altrimenti, se preferite la risorsa js, sarebbe il caso di aggiungere nuovi elementi all'oggetto people.
// Non fate prove con le immagini perchè ne parleremo domani.
// Quindi, create un nuovo progetto, preparate la vostra risorsa, attivate postman e buon divertimento.
// Solo un'ultima cosa: se non lo avete già fatto provate in postman la chiamata post sulla route /login
// in modo che sia pronta per domani per essere collegata alla form. Visto che ci siete, aggiungete anche
// il controllo sullo stato 400.

const express = require("express");
const { articoli } = require("./articoli");

const test = express();
const PORT = 5565;

test.use(express.static("./public"));
test.use(express.urlencoded({ extended: true }));
test.use(express.json());

test.get("/api/articoli", (req, res) => {
  res.status(200).json({ success: true, data: articoli });
});

test.post("/api/articoli/new", (req, res) => {
  const { id, title, body } = req.body;
  if (!id || !title || !body) {
    return res.status(400).json({
      success: false,
      msg: "Mi dispiace... qualcosa è andato storto!",
    });
  }
  return res
    .status(200)
    .json({ success: true, articolo: { id: id, title: title, body: body } });
});

test.post("/login", (req, res) => {
  const { nome } = req.body;
  if (nome) {
    return res.status(200).send(`Benvenuto a te, ${nome}`);
  }
});

test.put("/api/articoli/edit/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const articolo = articoli.find((articolo) => articolo.id === Number(id));
  if (!articolo) {
    return res
      .status(400)
      .json({ success: false, msg: `Non alcun oggetto con l'id ${id} ` });
  }
  const nuovoArticolo = articoli.map((articolo) => {
    if (articolo.id === Number(id)) {
      articolo.title = title;
    }
    return articolo;
  });
  res.status(200).json({ success: true, data: nuovoArticolo });
});

test.delete("api/articoli/:id", (req, res) => {
  const articolo = articoli.find(
    (articolo) => articolo.id === Number(req.params.id)
  );

  if (!articolo) {
    res.status(400).json({
      success: false,
      msg: "Mi dispiace ma non esiste alcun articolo con questo nome",
    });
  }

  const nuovoArticolo = articoli.filter(
    (articolo) => articolo.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: nuovoArticolo });
});

test.listen(PORT, () => {
  console.log(`Il server è connesso alla porta ${PORT}`);
});
