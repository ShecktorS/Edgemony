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
    const catEl = document.createElement("p");

    imgEl.setAttribute("src", item.images);
    likeBtnEl.setAttribute("data-micron", "flicker");
    titleEl.textContent = item.title.slice(0, 10);
    descrEl.textContent = item.description.slice(0, 30);
    addToCartEl.textContent = "Aggiungi al carrello!";
    priceEl.textContent = `€ ${item.price},00 `;
    catEl.textContent = `Categoria: ${item.category.name}`;
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
    catEl.className = "category";

    cardContainerEl.appendChild(cardEl);
    cardEl.append(imgContainerEl, likeBtnEl, infoEl);
    imgContainerEl.appendChild(imgEl);
    infoEl.append(titleAndDescrEl, addToCartEl, priceEl, catEl);
    titleAndDescrEl.append(titleEl, descrEl);
    loadingEl.style.display = "none";

    addToCartEl.addEventListener("click", () => {
      alert(`Hai aggiunto il prodotto (--- ${item.title} ---)  al carrello!`);
      cartArr.push(`Articolo ID:${item.id} ---> ${item.title}`);
      console.log(cartArr);
      addToCartFunc(item.title, `€ ${item.price},00 `);
    });

    // rmButtonCart.addEventListener("click", () => {
    //   rmvFromCartFunc();
    // });
  });
};
const tendinaEl = document.querySelector(".tendina");
const buttonEl = document.querySelector(".loadingBtn");
const loadingEl = document.createElement("div");
const cartEl = document.querySelector(".cart");
const cartArr = [];

cartEl.addEventListener("click", () => {
  console.log(cartArr);
  tendinaEl.classList.toggle("showTendina");
});

loadingEl.className = "loadingContainer";
loadingEl.textContent = "Caricamento...";
loadingEl.style.display = "none";
document.body.appendChild(loadingEl);

const addToCartFunc = (title, price) => {
  const productToCartEl = document.createElement("div");
  productToCartEl.className = "productCart";
  const titleCartEl = document.createElement("div");
  titleCartEl.className = "titleCart";
  const priceCartEl = document.createElement("div");
  priceCartEl.className = "priceCart";
  const rmButtonCart = document.createElement("div");
  rmButtonCart.className = "rmButton";
  const lineRmEl = document.createElement("div");

  tendinaEl.appendChild(productToCartEl);
  productToCartEl.append(titleCartEl, priceCartEl, rmButtonCart);
  titleCartEl.textContent = title;
  priceCartEl.textContent = price;
};

buttonEl.addEventListener("click", () => {
  buttonEl.style.display = "none";
  loadingEl.style.display = "block";
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => cardGenerator(data))
    .catch((e) => {
      loadingEl.style.textAlign = "center";
      loadingEl.style.display = "block";
      loadingEl.style.color = "red";
      loadingEl.textContent = "Errore!";
      console.log(e);
    });
});

// const rmvFromCartFunc = () => {
//   delete cartArr[x]
// };
