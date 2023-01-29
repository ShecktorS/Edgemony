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

const infoTvGen = () => {
  GET("top_rated?", (data) => data).then((data) => {
    const tvs = data.results;
    console.log(tvs);

    tvs.forEach((element) => {
      const overlayEl = cE("div");
      const tvWrapperEl = cE("div");
      const tvImgEl = cE("img");
      const infoTvEl = cE("div");
      const titleEl = cE("h2");
      const descriptionEl = cE("p");
      const castEl = cE("p");
      const closeWrapperEl = cE("div");

      tvImgEl.setAttribute("src", BASE_URL_IMG + element.poster_path); // da sistemare

      overlayEl.className = "overlay";
      tvWrapperEl.className = "tv_wrapper";
      tvImgEl.className = "tv_img";
      infoTvEl.className = "info_tv";
      titleEl.className = "title";
      descriptionEl.className = "description";
      castEl.className = "cast";
      closeWrapperEl.className = "cross";

      bodyEl.appendChild(overlayEl);
      overlayEl.appendChild(tvWrapperEl);
      tvWrapperEl.append(tvImgEl, infoTvEl);
    });
  });
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

    cardEl.addEventListener("click", infoTvGen);
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

// searchEl.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const valueOfInput = e.target[0].value;
//   GET_SEARCH(valueOfInput).then((data) => {
//     searchGen(data);
//   });
// });
// PER L'HTML

// Per visualizzare l'esercizio base invece dell'avanzato decommentare righe 54-59 e commmentare 61-67
