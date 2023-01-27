// IMPORT?
const cE = (element) => document.createElement(element);
const qS = (type) => document.querySelector(type);
const bodyEl = document.body;
const BASE_URL = "https://api.themoviedb.org/3/tv/";
const BASE_URL_SEARCH = "https://api.themoviedb.org/3/search/tv?query=";
const API_KEY = "api_key=6df0175461882f84933b5dc354d7e3e4";
const BASE_URL_IMG = "https://image.tmdb.org/t/p/w500/";
const myTvEl = qS(".my_tv");
const mostPopularEl = qS(".most_popular");
const topRatedEl = qS(".top_rated");

const searchEl = qS(".search");

let myTvType;
let myTvMostPopular;
let myTvTopRated;
const GET = async (tvEndpoint = "popular?") => {
  const res = await fetch(BASE_URL + tvEndpoint + API_KEY);
  const data = await res.json();
  return data;
};
const GET_SEARCH = async (wordToSearch) => {
  const res = await fetch(BASE_URL_SEARCH + wordToSearch + "&" + API_KEY);
  const data = await res.json();
  return data;
};
const cardGenerator = (data, myTvType, divEl) => {
  myTvType = data.results;
  myTvType.forEach((element) => {
    const cardEl = cE("div");
    const imgEl = cE("img");

    cardEl.className = "card";
    imgEl.src = BASE_URL_IMG + element.poster_path;
    divEl.appendChild(cardEl);
    cardEl.appendChild(imgEl);
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

// GET("popular?").then((tvPopular) =>
//   cardGenerator(tvPopular, myTvMostPopular, mostPopularEl)
// );
// GET("top_rated?").then((tvTopRated) =>
//   cardGenerator(tvTopRated, myTvTopRated, topRatedEl)
// );

searchEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = e.target[0].value;
  GET_SEARCH(value).then((data) => {
    searchGen(data);
  });
});
