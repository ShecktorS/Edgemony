// Nel progetto statico manca una pagina 404 customizzata. Aggiungetela e gestitela nel sistema.

const express = require("express");
const hbs = require("hbs");
const app = express();

const PORT = 2222;

app.use(express.static("public"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
//Funzione che genera l'oggetto in base alla sezione del sito su cui ci si trova
const titoloFun = (title) => {
  return {
    titolo: title,
  };
};

app.get("/", (req, res) => {
  res.render("index", titoloFun("Home"));
});

app.get("/about", (req, res) => {
  res.render("about", titoloFun("About"));
});

app.get("/web-design", (req, res) => {
  res.render("web-design", titoloFun("Web Design"));
});

app.get("/contatti", (req, res) => {
  res.render("contatti", titoloFun("Contatti"));
});

app.get("/formazione", (req, res) => {
  res.render("/formazione", titoloFun("Formazione"));
});

app.get("*", (req, res) => {
  res.status(404).render("errore", titoloFun("Errore 404 😒"));
});

app.listen(PORT, () => console.log(`Server operativo sulla porta: ${PORT}`));
