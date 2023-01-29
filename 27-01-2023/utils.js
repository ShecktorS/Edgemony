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

// function fetch

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

export {
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
};
