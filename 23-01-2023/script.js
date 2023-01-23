import { cE, qS, cN, createCard, createBtnEl, GET } from "./utils.js";

const sectionEl = cE("div");
cN(sectionEl, "section_card");
const randomNumber = Math.floor(Math.random() * 30) + 1; // from 1 to 30

GET(randomNumber).then((data) => {
  createCard(data, sectionEl);
  createBtnEl(sectionEl);
});

document.body.appendChild(sectionEl);
