const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

const opFunc = () => {
  const operation = prompt("inserisci l'operatore");
  const number1 = prompt("Inserisci il primo numero");
  const number2 = prompt("Inserisci il secondo numero");
  if (operation === "+") {
    return console.log(
      "Il risultato dell'operazione è",
      sum(+number1, +number2)
    );
  } else if (operation === "-") {
    return console.log(
      "Il risultato dell'operazione è",
      sub(+number1, +number2)
    );
  } else if (operation === "*") {
    return console.log(
      "Il risultato dell'operazione è",
      mult(+number1, +number2)
    );
  } else if (operation === "/") {
    return console.log(
      "Il risultato dell'operazione è",
      div(+number1, +number2)
    );
  }
};

opFunc();

// --------------------------------------------
