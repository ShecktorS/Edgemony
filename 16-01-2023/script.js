// ----------ESERCIZIO BASE----------

// fetch("https://api.escuelajs.co/api/v1/products")
//   .then((res) => res.json())
//   .then((data) => printFunction(data));

// const printFunction = (data) =>
//   data.forEach((element) => {
//     console.log("----------");
//     console.log(element.title);
//     console.log(element.description);
//   });

// ----------ESERCIZIO AVANZATO----------

const buttonEl = document.querySelector(".loadingBtn");
const loadingEl = document.createElement("div");
loadingEl.className = "loadingContainer";
loadingEl.textContent = "Caricamento...";
loadingEl.style.display = "none";
document.body.appendChild(loadingEl);

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

const cardGenerator = (data) => {
  data.forEach((item) => {
    const cardEl = document.createElement("div");
    const imgContainerEl = document.createElement("div");
    const imgEl = document.createElement("img");
    const likeBtnEl = document.createElement("div");
    const infoEl = document.createElement("div");
    const titleAndDescrEl = document.createElement("div");
    const titleEl = document.createElement("h2");
    const descrEl = document.createElement("p");
    const priceEl = document.createElement("h2");
    const catEl = document.createElement("p");

    imgEl.setAttribute("src", item.images);
    titleEl.textContent = item.title;
    descrEl.textContent = item.description;
    priceEl.textContent = `${item.price} €`;
    catEl.textContent = `Categoria: ${item.category.name}`;
    likeBtnEl.textContent = "❤️";

    cardEl.className = "card";
    imgContainerEl.className = "imgContainer";
    likeBtnEl.className = "likeBtn";
    infoEl.className = "info";
    titleAndDescrEl.className = "titleAndDescr";
    titleEl.className = "title";
    descrEl.className = "descr";
    priceEl.className = "price";
    catEl.className = "category";

    document.body.appendChild(cardEl);
    cardEl.append(imgContainerEl, likeBtnEl, infoEl);
    imgContainerEl.appendChild(imgEl);
    infoEl.append(titleAndDescrEl, priceEl, catEl);
    titleAndDescrEl.append(titleEl, descrEl);
    loadingEl.style.display = "none";
  });
};
