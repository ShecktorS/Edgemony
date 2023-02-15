const MongoClient = require("mongodb").MongoClient;
let url = "mongodb+srv://ShecktorS:****@cluster0.0ymyk8h.mongodb.net/test";

MongoClient.connect(url)
  .then((db) => {
    accountsDb = db;
    collection = accountsDb.db("school");
    console.log("database connesso");
  })
  .catch((err) => {
    console.log(err);
  });

//CREARE UN NUOVO COLLEZIONE
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  let dbase = db.db("school");
  dbase.createCollection("students", function (err, res) {
    if (err) throw err;
    console.log("Collection creata");
    db.close();
  });
});

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  let dbase = db.db("school");
  dbase.createCollection("courses", function (err, res) {
    if (err) throw err;
    console.log("Collection creata");
    db.close();
  });
});

//INSERIMENTO DI PIU' CAMPI => QUERY INSERTMANY()
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");

  let myObj = [
    {
      nome: "Geronimo",
      cognome: "Martinez",
      matricola: "0665647",
      corsi: ["Letteratura inglese", "Italianistica"],
      esami: ["Inglese scritto", "arte"],
    },
    {
      nome: "Sabrina",
      cognome: "Shugar",
      matricola: "0665647",
      corsi: ["Matematica di base"],
      esami: [
        "Algebra lineare",
        "Analisi",
        "Psicologia dei processi decisionali",
      ],
    },
    {
      nome: "Marta",
      cognome: "Garret",
      matricola: "0765665",
      corsi: [
        "Psicosintomatologia dei Zengin",
        "Seminario sulla competizione bilineare",
        "Psicologia clinica",
      ],
      esami: ["Storia economica e sociale dello spettacolo"],
    },
    {
      nome: "Fabrizio",
      cognome: "Diluito",
      matricola: "0664547",
      corsi: ["Nessuno"],
      esami: ["Prova finale"],
    },
  ];

  dbase.collection("students").insertMany(myObj, (err, res) => {
    if (err) throw err;
    console.log(`Numero di record inseriti: ${res.insertedCount}`);
    db.close();
  });
});

//SELEZIONO TUTTI I DATI
/*MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbase = db.db("demo6");
    dbase.collection('utenti').find({}).toArray(function (err, res) {
        if (err) throw err;
        console.log(res)
        db.close();
    })
})*/

//SELEZIONO UN DATO CON FILTRO
/*MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbase = db.db("demo6");
    let query = {anni:'34'}
    dbase.collection('utenti').find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res)
        db.close();
    })
})*/
