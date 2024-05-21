const apiKey = "api_key=8a24200f0c10095be3f6b2d87e3fdc1f"; //tmdb api
const baseUrl = "https://api.themoviedb.org/3";
const aipUrl = baseUrl + "/discover/movie?sort_by=popularity.desc&" + apiKey;
const imgUrl = "https://image.tmdb.org/t/p/original";

const conatiner = document.querySelector('.container')