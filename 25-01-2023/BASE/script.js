import mockJSON from "./mock.json" assert { type: "json" };

const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);
const cN = (element, classCss) => (element.className = classCss);

const sectionEl = cE("div");
cN(sectionEl, "section_card");

const { quotes } = mockJSON;
const randomNumber = Math.floor(Math.random() * 30) + 1; // from 1 to 30

const createCard = (quotes, div, numQuote) => {
  const cardEl = cE("div");
  const quoteEl = cE("blockquote");
  const authorEl = cE("figcaption");

  cN(cardEl, "card");
  cN(quoteEl, "quote");
  cN(authorEl, "author");

  quoteEl.textContent = `«${quotes[numQuote].quote}»`;
  authorEl.textContent = `-${quotes[numQuote].author}`;

  cardEl.append(quoteEl, authorEl);
  return div.appendChild(cardEl);
};

const createBtnEl = (div) => {
  const changeQuoteBtnEl = cE("button");
  cN(changeQuoteBtnEl, "change_quote");
  changeQuoteBtnEl.textContent = "Trova un'altra citazione!";
  div.appendChild(changeQuoteBtnEl);
  return changeQuoteBtnEl.addEventListener("click", () => location.reload());
};

createCard(quotes, sectionEl, Math.floor(Math.random() * 20 + 1));
createBtnEl(sectionEl);

document.body.appendChild(sectionEl);
