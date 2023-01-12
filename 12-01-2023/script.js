import { todos, toDoList } from "./mocks.js"; //importo l'array di oggetti dal mocks.js

// Metodo FOREACH
todos.forEach((element) => console.log(element.id));

// Metodo MAP
const idArrayMap = todos.map((element) => element.id);
console.log(idArrayMap);

// Metodo FILTER
const idArrayFilter = todos
  .filter((element) => element.id >= 4)
  .map((element) => element.id);
console.log(idArrayFilter);

// ---------------------AVANZATO---------------------------

const listGen = (checkbox, todo) => {
  const todoEl = document.createElement("div");
  const checkboxEl = document.createElement("div");
  const textEl = document.createElement("p");

  todoEl.className = "todoDiv";
  checkboxEl.className = checkbox ? "checkboxTrue" : "checkboxFalse";
  textEl.textContent = todo;

  todoEl.append(checkboxEl, textEl);
  sectionEl.appendChild(todoEl);
};

const sectionEl = document.createElement("section");
sectionEl.className = "todoContainer";

toDoList.map((item) => listGen(item.completed, item.todo));

document.body.appendChild(sectionEl);
