const express = require("express");
const hbs = require("hbs");

const PORT = 3352;
const app = express();
const myPreferences = {
  nome: "Romeo",
  pet: "gatto",
  color: "arancio",
  season: "estate",
  titolo: "Home Page",
};

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
  res.render("home", myPreferences);
});

app.get("/about", (req, res) => {
  res.render("about", {
    titolo: "About Page",
  });
});

app.get("/mi-presento", (req, res) => {
  res.render("mi-presento", {
    titolo: "pagina contatti",
    nome: "Ettore",
  });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  console.log(name);
  res.render("login", {
    nome: name,
  });
});

app.listen(PORT, () => console.log(`Server operativo su porta: ${PORT}`));
