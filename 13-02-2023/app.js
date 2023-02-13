const express = require("express");
const hbs = require("hbs");
const session = require("cookie-session");
const bodyParser = require("body-parser");

const app = express();

const PORT = 2222;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "pippo esiste" }));

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
//Funzione che genera l'oggetto in base alla sezione del sito su cui ci si trova
const titoloFun = (title) => {
  return {
    titolo: title,
  };
};

//Funzione per evitare che la mia pagina sia visibile attraverso modifca dell'url

const checkPage = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/warning");
  }
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

// Per il form --- V ---
app.get("/login", (req, res) => res.render("login"));

app.post("/login", (req, res) => {
  console.log(`${req.body.name} / ${req.body.password}`);

  if (!req.body.name || !req.body.password) {
    res.status(400).render("login", {
      message: "Per favore, inserisci tutti i dati richiesti",
    });
  } else {
    let name = "pippo";
    let password = "pappa";
    let userAuth = { name: name, password: password };

    if (name == req.body.name && password == req.body.password) {
      req.session.user = userAuth;
      res.redirect("/private");
    } else {
      res.redirect("/warning");
    }
  }
});

app.get("/private", checkPage, (req, res) => {
  res.render("private");
});

app.get("/warning", (req, res) => res.render("warning"));

app.get("/logout", (req, res) => {
  console.log("Hai eseguito il logout con successo");
  req.session = null;
  res.redirect("/login");
});

app.get("*", (req, res) => {
  res.status(404).render("errore", titoloFun("Errore 404 😒"));
});

app.listen(PORT, () => console.log(`Server operativo sulla porta: ${PORT}`));
