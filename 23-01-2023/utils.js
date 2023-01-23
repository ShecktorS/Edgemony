// For createElement and querySelector

const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);
const cN = (element, classCss) => (element.className = classCss);

// create Card

const createCard = (quotes, div) => {
  const cardEl = cE("div");
  const quoteEl = cE("blockquote");
  const authorEl = cE("figcaption");

  cN(cardEl, "card");
  cN(quoteEl, "quote");
  cN(authorEl, "author");

  quoteEl.textContent = `«${quotes.quote}»`;
  authorEl.textContent = `-${quotes.author}`;

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
// Create async function

const GET = async (randomNumber) => {
  const res = await fetch(
    "https://dummyjson.com/quotes/" + randomNumber //random alla ricarica
  );
  const data = await res.json();
  return data;
};

export { cE, qS, cN, createCard, createBtnEl, GET };
