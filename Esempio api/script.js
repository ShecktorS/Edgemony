const buttonEl = document.querySelector(".btn");
const loaderEl = document.querySelector(".loader");
let clickCount = 0;
buttonEl.addEventListener("click", () => {
  clickCount++;
  // if (clickCount > 1) {
  //   divContainer.style = "display: none";
  // }
  console.log(clickCount);
  loaderEl.textContent = "Loading...";
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      dataManipulation(data);
    })
    .catch((e) => {
      loaderEl.textContent = "errore!";
      console.log(`Wuesto è il mio error: ${e}`);
    });
});

const dataManipulation = (data) => {
  loaderEl.textContent = "";
  data.forEach((item, index) => {
    const divContainer = document.createElement("div");
    const titleEl = document.createElement("h3");
    const idEl = document.createElement("p");

    divContainer.className = "card";
    titleEl.textContent = item.title;
    idEl.textContent = item.id;

    document.body.appendChild(divContainer);
    divContainer.append(titleEl, idEl);
  });
};
