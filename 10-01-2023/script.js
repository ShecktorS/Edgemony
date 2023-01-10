// ------------ESERCIZIO 1-----------------

const createHero = () => {
  const bodyEl = document.body;
  const heroEl = document.createElement("div");
  const imgHeroEl = document.createElement("img");
  const titleHeroEl = document.createElement("h1");
  const subHeroEl = document.createElement("p");

  heroEl.className = "hero";

  imgHeroEl.setAttribute("src", "https://picsum.photos/500/600");
  imgHeroEl.setAttribute("class", "imgHero");

  titleHeroEl.textContent = "Lime Team";

  subHeroEl.textContent =
    "Unisciti anche tu al Lime Team e aiutaci a supportare tutti i tipi di agrumi!";

  heroEl.append(imgHeroEl, titleHeroEl, subHeroEl);
  bodyEl.appendChild(heroEl);
};

createHero();

// -------------ESERCIZIO AVANZATO------------------

// import { fruits } from "./mocks.js";
// console.log(fruits);

// const bodyEl = document.body;
// const heroEl = document.createElement("div");
// const imgHeroEl = document.createElement("img");
// const titleHeroEl = document.createElement("h1");
// const subHeroEl = document.createElement("p");
// const fruit1El = document.createElement("div");
// const fruit1titleEl = document.createElement("h2");
// const fruit1imgEl = document.createElement("img");
// const fruit1desEl = document.createElement("p");
// const fruit2El = document.createElement("div");
// const fruit2titleEl = document.createElement("h2");
// const fruit2imgEl = document.createElement("img");
// const fruit2desEl = document.createElement("p");
// const fruit3El = document.createElement("div");
// const fruit3titleEl = document.createElement("h2");
// const fruit3imgEl = document.createElement("img");
// const fruit3desEl = document.createElement("p");
// const fruitsListEl = document.createElement("div");

// heroEl.className = "hero";

// imgHeroEl.setAttribute("src", "https://picsum.photos/500/600");
// imgHeroEl.setAttribute("class", "imgHero");
// imgHeroEl.setAttribute("alt", "imgHero");

// titleHeroEl.textContent = "Lime Team";

// subHeroEl.textContent =
//   "Unisciti anche tu al Lime Team e aiutaci a supportare tutti i tipi di agrumi!";

// fruitsListEl.className = "fruitsList";

// fruit1El.className = "firstFruit";
// fruit2El.className = "secondFruit";
// fruit3El.className = "thirdFruit";

// fruit1titleEl.textContenT = fruits[0].title;
// fruit1imgEl

// heroEl.append(imgHeroEl, titleHeroEl, subHeroEl);
// fruit1El.append(fruit1titleEl, fruit1imgEl, fruit1desEl);
// fruit2El.append(fruit2titleEl, fruit2imgEl, fruit2desEl);
// fruit3El.append(fruit3titleEl, fruit3imgEl, fruit3desEl);
// fruitsListEl.append(fruit1El, fruit2El, fruit3El);
// bodyEl.append(heroEl, fruitsListEl);
