// let objects = []; // 1. Creo un array vuoto

// for (let object = 0; object <= 10; object++) {
//   // 2. Inserisco 10 elementi di tipo stringa scelti dall'utente
//   objects.push(
//     prompt("Inserisci degli oggetti che vedi nella tua camera da letto")
//   );
// }

// console.log(objects); // 3. Stampo la lista degli elementi e informo l'utente qualora nella sua lista ci siano elementi essenziali.

// if (objects.includes("letto" && "armadio" && "scrivania")) {
//   console.log("Nella tua stanza sono presenti 3 oggetti essenziali");
// } else if (objects.includes("letto" || "armadio" || "scrivania")) {
//   console.log("Nella tua stanza è presente almeno un oggetto essenziale");
// } else {
//   console.log("Nella tua stanza non è presente alcun oggetto essenziale");
// }

// --------------------------------------

//Avanzato

// console.log("utilizzando il for - in");

// let objects = [];

// for (let object = 0; object <= 10; object++) {
//   objects.push(
//     prompt("Inserisci degli oggetti che vedi nella tua camera da letto")
//   );
// }

// for (object in objects) {
//   console.log(objects[object]);
// }

console.log("utilizzando il for - of");

let objects = [];

for (let object = 0; object <= 10; object++) {
  objects.push(
    prompt("Inserisci degli oggetti che vedi nella tua camera da letto")
  );
}

for (object of objects) {
  console.log(object);
}

// console.log(objects[0]);
// console.log(objects[1]);
