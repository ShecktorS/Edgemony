const tendinaEl = document.querySelector(".tendina");
const buttonEl = document.querySelector(".loadingBtn");
const loadingEl = document.createElement("div");
const cartEl = document.querySelector(".cart");
const formEl = document.querySelector("#form");
const catHeadEl = document.querySelector(".categoryHeader");
const cartArr = [];
loadingEl.className = "loadingContainer";
loadingEl.textContent = "Caricamento...";
loadingEl.style.display = "none";
document.body.appendChild(loadingEl);
// ricordati di creare wishListArr
const consiglioEventFunc = () => {
  // EventListener hover "consigliaci un prodotto"
  formEl.addEventListener("mouseover", () =>
    catHeadEl.classList.add("categoryHeaderWhite")
  );
  formEl.addEventListener("mouseout", () =>
    catHeadEl.classList.remove("categoryHeaderWhite")
  );
};

consiglioEventFunc();

buttonEl.addEventListener("click", () => {
  buttonEl.style.display = "none";
  loadingEl.style.display = "block";
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => cardGenerator(data))
    .catch((e) => errorLoader());
});

const cardGenerator = (data) => {
  data.forEach((item) => {
    const cardContainerEl = document.querySelector(".cardContainer");
    const cardEl = document.createElement("div");
    const imgContainerEl = document.createElement("div");
    const imgEl = document.createElement("img");
    const likeBtnEl = document.createElement("div");
    const infoEl = document.createElement("div");
    const titleAndDescrEl = document.createElement("div");
    const titleEl = document.createElement("h2");
    const descrEl = document.createElement("p");
    const addToCartEl = document.createElement("button");
    const priceEl = document.createElement("h2");

    imgEl.setAttribute("src", item.images);
    likeBtnEl.setAttribute("data-micron", "flicker");
    titleEl.textContent = item.title.slice(0, 10);
    descrEl.textContent = item.description.slice(0, 30);
    addToCartEl.textContent = "Aggiungi al carrello!";
    priceEl.textContent = `€ ${item.price},00 `;
    likeBtnEl.textContent = "❤️";

    cardEl.className = "card";
    imgContainerEl.className = "imgContainer";
    likeBtnEl.className = "likeBtn";
    infoEl.className = "info";
    titleAndDescrEl.className = "titleAndDescr";
    titleEl.className = "title";
    descrEl.className = "descr";
    addToCartEl.className = "addToCart";
    priceEl.className = "price";

    cardContainerEl.appendChild(cardEl);
    cardEl.append(imgContainerEl, likeBtnEl, infoEl);
    imgContainerEl.appendChild(imgEl);
    infoEl.append(titleAndDescrEl, addToCartEl, priceEl);
    titleAndDescrEl.append(titleEl, descrEl);
    loadingEl.style.display = "none";

    addToCartEl.addEventListener("click", () => cartArr.push(item));
  });
};

const searchIdCreate = () => {
  const searchIdEl = document.createElement("div");
  const searchInput = document.createElement("input");
  searchIdEl.className = "searchIdBar";
  searchIdEl.classList.add("searchIdBarShow");
  searchInput.id = "searchInput";
  searchIdEl.appendChild(searchInput);
  document.body.appendChild(searchIdEl);
};

const errorLoader = () => {
  loadingEl.style.textAlign = "center";
  loadingEl.style.display = "block";
  loadingEl.style.color = "red";
  loadingEl.textContent = "Errore!";
  console.log(e);
};
