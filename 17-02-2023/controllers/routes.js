const express = require("express");
let router = express.Router();
const mongoose = require("mongoose");
const Artista = mongoose.model("artistaModel");

router.get("/", (req, res) => {
  res.render("addupdate", {
    viewTitle: "Inserisci un artista",
  });
});

router.post("/", (req, res) => {
  if (req.body._id == "") insertRecord(req, res);
  else updateRecord(req, res);
});

function insertRecord(req, res) {
  let artista = new Artista();
  artista.name = req.body.name;
  artista.surname = req.body.surname;
  artista.email = req.body.email;
  artista.mobile = req.body.mobile;
  artista.address = req.body.address;
  artista.text = req.body.text;
  artista.save((err, doc) => {
    if (!err) res.redirect("list");
    else console.log(`Errore nell' inserimento: ${err}`);
  });
}

function updateRecord(req, res) {
  Artista.updateOne(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, doc) => {
      if (!err) {
        res.redirect("list");
      } else {
        console.log("Errore durante l' update : " + err);
      }
    }
  );
}

router.get("/list", (req, res) => {
  Artista.find((err, docs) => {
    if (!err) {
      res.render("list", {
        artistalist: docs,
      });
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

router.get("/:id", (req, res) => {
  Artista.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("addupdate", {
        viewTitle: "Aggiornamento",
        artista: doc,
      });
    }
  });
});

router.get("/delete/:id", (req, res) => {
  Artista.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect("/list");
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

module.exports = router;
