import {
  cE,
  qS,
  bodyEl,
  BASE_URL,
  BASE_URL_IMG,
  BASE_URL_SEARCH,
  API_KEY,
  myTvEl,
  mostPopularEl,
  topRatedEl,
  searchEl,
  GET,
  GET_SEARCH,
} from "./utils.js";

const closeWrapperEl = cE("div");
const overlayEl = cE("div");
overlayEl.className = "overlay";

closeWrapperEl.className = "cross";

const infoTvGen = (URL_img, element) => {
  const tvWrapperEl = cE("div");
  const containerTvImgEl = cE("div");
  const tvImgEl = cE("img");
  const infoTvEl = cE("div");
  const titleEl = cE("h2");
  const descriptionEl = cE("p");
  const firstAirDateEl = cE("p");

  tvImgEl.src = URL_img;
  titleEl.textContent = element.name;
  firstAirDateEl.textContent = element.first_air_date;
  element.overview === ""
    ? (descriptionEl.textContent = `The description for ${element.name} is not available.`)
    : (descriptionEl.textContent = element.overview);
  element.overview.lenght <= 200
    ? (descriptionEl.textContent = element.overview)
    : (descriptionEl.textContent = element.overview.slice(0, 200) + "...");

  tvWrapperEl.className = "tv_wrapper";
  containerTvImgEl.className = "container_tv_img";
  tvImgEl.className = "tv_img";
  infoTvEl.className = "info_tv";
  titleEl.className = "title";
  descriptionEl.className = "description";
  firstAirDateEl.className = "first_air_date";

  bodyEl.appendChild(overlayEl);
  overlayEl.appendChild(tvWrapperEl);
  tvWrapperEl.append(containerTvImgEl, infoTvEl);
  containerTvImgEl.appendChild(tvImgEl);
  infoTvEl.append(titleEl, firstAirDateEl, descriptionEl, closeWrapperEl);
};

let myTvType;
let myTvMostPopular;
let myTvTopRated;

const cardGenerator = (data, myTvType, divEl) => {
  myTvType = data.results;
  myTvType.forEach((element) => {
    const cardEl = cE("div");
    const imgEl = cE("img");

    cardEl.className = "card";
    imgEl.src = BASE_URL_IMG + element.poster_path;
    imgEl.setAttribute("draggable", "false");
    divEl.appendChild(cardEl);
    cardEl.appendChild(imgEl);

    cardEl.addEventListener("click", () => infoTvGen(imgEl.src, element));
  });
};

const searchGen = (data) => {
  const myData = data.results;
  myData.forEach((element) => {
    const divSearchEl = cE("div");
    const imgSearchEl = cE("img");

    divSearchEl.className = "div_search";
    imgSearchEl.src = BASE_URL_IMG + element.poster_path;

    bodyEl.appendChild(divSearchEl);
    divSearchEl.appendChild(imgSearchEl);
  });
};

GET("popular?").then((tvPopular) => {
  cardGenerator(tvPopular, myTvMostPopular, mostPopularEl);
});
GET("top_rated?").then((tvTopRated) =>
  cardGenerator(tvTopRated, myTvTopRated, topRatedEl)
);

closeWrapperEl.addEventListener("click", () => {
  overlayEl.textContent = "";
  overlayEl.remove();
});
// searchEl.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const valueOfInput = e.target[0].value;
//   GET_SEARCH(valueOfInput).then((data) => {
//     searchGen(data);
//   });
// });
// PER L'HTML

// Per visualizzare l'esercizio base invece dell'avanzato decommentare righe 54-59 e commmentare 61-67
