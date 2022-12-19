let operation = prompt(
  "Ciao, scrivi l'operazione che vuoi farmi svolgere. Scegli tra: addizione, sottrazione, moltiplicazione, divisione."
);

if (
  operation === "addizione" ||
  operation === "sottrazione" ||
  operation === "moltiplicazione" ||
  operation === "divisione"
) {
  console.log("Hai scelto " + operation);
  alert(
    "Adesso ti chiederò due numeri e svolgerò l'operazione che hai richiesto :)"
  );

  let number1 = prompt("Digita il primo numero");
  console.log("Hai scelto come primo numero " + number1);

  let number2 = prompt("Digita il secondo numero");
  console.log("Hai scelto come secondo numero " + number2);

  num1 = +number1;
  num2 = +number2;

  if (operation === "addizione") {
    console.log("Il risultato è " + (num1 + num2));
  } else if (operation === "moltiplicazione") {
    console.log("Il risultato è " + num1 * num2);
  } else if (operation === "sottrazione" && num1 >= num2) {
    console.log("Il risultato è " + (num1 - num2));
  } else if (operation === "divisione" && num1 >= num2) {
    console.log("Il risultato è " + num1 / num2);
  } else {
    console.log("Errore!");
    console.log(
      "Il secondo numero è più grande del primo. Per favore inserisci dei numeri validi per la tua " +
        operation
    );
  }
} else {
  console.log("Devi inserire un'operazione valida!");
}

// Utilizzando Switch

// let operation = prompt(
//   "Ciao, scrivi l'operazione che vuoi farmi svolgere. Scegli tra: addizione, sottrazione, moltiplicazione, divisione."
// );
// console.log("Hai scelto " + operation);
// alert(
//   "Adesso ti chiederò due numeri e svolgerò l'operazione che hai richiesto :)"
// );
// let number1 = prompt("Digita il primo numero");
// console.log("Hai scelto come primo numero " + number1);

// let number2 = prompt("Digita il secondo numero");
// console.log("Hai scelto come secondo numero " + number2);

// num1 = +number1;
// num2 = +number2;

// switch (operation) {
//   case "addizione":
//     console.log("Il risultato è " + (num1 + num2));
//     break;
//   case "moltiplicazione":
//     console.log("Il risultato è " + num1 * num2);
//     break;
//   case "sottrazione" && num1 >= num2:
//     console.log("Il risultato è " + (num1 - num2));
//     break;
//   case "divisione" && num1 >= num2:
//     console.log("Il risultato è " + num1 / num2);
//     break;
//   default:
//     console.log(
//       "Attenzione! Devi inserire un'operazione valida o dei numeri validi!"
//     );
// }
