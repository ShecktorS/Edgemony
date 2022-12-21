// # Esercizio 1

// function course(firstEl) {
//   firstEl = prompt("Scegli una stringa");
//   return firstEl + " bootcamp";
// }

// console.log(course());

// # Esercizio 2

// const ettore = {
//   name: "Ettore",
//   surname: "Sanfilippo",
//   age: 26,
//   morningRoutine: "Seguire Lezione Bootcamp. ",
//   afternoonRoutine: "Fare esercitazione. ",
//   favouriteFood: ["Pizza", "Sushi", "Sasizza cunzata"],
//   routine: function () {
//     return (
//       this.morningRoutine +
//       this.afternoonRoutine +
//       "Sperimentare con JavaScript"
//     );
//   },
// };
// console.log(ettore.name);
// console.log(ettore.surname);
// console.log(ettore.age);
// console.log(ettore.morningRoutine);
// console.log(ettore.afternoonRoutine);
// console.log(ettore.favouriteFood[1]);
// console.log(ettore.routine());

// # Avanzato

// function calculator(num1, num2, operation) {
//   num1 = parseInt(prompt("Scgli il primo numero"));
//   num2 = parseInt(prompt("Scgli il primo numero"));
//   operation = prompt("Scegli una operazione tra + - * e /");
//   if (operation == "+") {
//     return num1 + num2;
//   } else if (operation == "-") {
//     return num1 - num2;
//   } else if (operation == "*") {
//     return num1 * num2;
//   } else if (operation == "/") {
//     return num1 / num2;
//   }
// }
// let risultato = calculator();
// console.log(risultato);

// function calculator(num, operation) {
//   num = [0, 0];
//   num[0] = parseInt(prompt("Scgli il primo numero"));
//   num[1] = parseInt(prompt("Scgli il primo numero"));
//   operation = prompt("Scegli una operazione tra + - * e /");
//   if (operation == "+") {
//     return num[0] + num[1];
//   } else if (operation == "-") {
//     return num[0] - num[1];
//   } else if (operation == "*") {
//     return num[0] * num[1];
//   } else if (operation == "/") {
//     return num[0] / num[1];
//   }
// }
// let risultato = calculator();
// console.log(risultato);
