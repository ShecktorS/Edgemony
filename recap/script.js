const bodyEl = document.querySelector("body");
const div = document.createElement("div");
const btnEl = document.createElement("button");

div.style =
  "height: 200px; width: 200px; background-color: black; display: flex; position: relative";

bodyEl.append(div);

const nome = "Rino";
const cognome = "Lillo";
const funzione = (valore1, valore2) => {
  console.log(`Nome: ${valore1} - Cognome: ${valore2}`);
};

funzione(nome, cognome);
