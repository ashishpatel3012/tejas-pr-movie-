const apiKey = "8a24200f0c10095be3f6b2d87e3fdc1f"; //tmdb api
const baseUrl = "https://api.themoviedb.org/3";
const apiUrl = baseUrl + "/discover/movie?sort_by=popularity.desc&" + apiKey;
const imgUrl = "https://image.tmdb.org/t/p/original";

// const imgClick = document.querySelector("#img-click");

const serachInput = document.querySelector(".serach-input");
const cardContainer = document.querySelector(".card-container");
const searchBtn = document.querySelector(".serach-btn");

// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8a24200f0c10095be3f6b2d87e3fdc1f

const showAlldata = async () => {
  let fetchData2 = await fetch(
    `https://api.themoviedb.org/3//discover/movie?sort_by=popularity.desc&api_key=${apiKey}`
  );
  let data = await fetchData2.json();
  // showMovies(data.results);
  console.log(data);
};
showAlldata(apiUrl);

const getData = async (movie) => {
  let fetchData = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${apiKey}`
  );

  let searchData = await fetchData.json();
  singleMovies(data.results);
  console.log(searchData);

  // https://api.themoviedb.org/3/search/movie?query=bahubali&api_key=8a24200f0c10095be3f6b2d87e3fdc1f
  // https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=8a24200f0c10095be3f6b2d87e3fdc1f
};
getData(apiUrl);

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let movieName = serachInput.value;
  if (movieName != "") {
    getData(movieName);
    console.log(movieName);
  }
  function singleMovies() {
    cardContainer.innerHTML = "";

    data.forEach((movie) => {
      const { original_title, original_language, popularity } = movie;
      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");
      movieEl.innerHTML = `        
                <div class="card">
                
                    
                    <h2>${original_language}</h2>
                    <span class="green rating" >${popularity}</span>
                </div>
    
            `;
      cardContainer.appendChild(movieEl);
    });
  }
});
getData();

// function showMovies(data) {
//   cardContainer.innerHTML = "";

//   data.forEach((movie) => {
//     const { title, poster_path, vote_average } = movie;
//     const movieEl = document.createElement("div");
//     movieEl.classList.add("movie");
//     movieEl.innerHTML = `
//             <div class="card">
//                 <img id="img-click" src="${imgUrl + poster_path}" alt="${title}">

//                 <h2>${title}</h2>
//                 <span class="green rating" >${vote_average}</span>
//             </div>

//         `;
//     cardContainer.appendChild(movieEl);
//   });
// }

// imgClick.addEventListener('click',()=>{

// })

//image search

// async function searchImages() {
//   inputData = inputEl.value;
//   const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&t=${movie}`;

//   const response = await fetch(url);
//   const data = await response.json();

//   const results = data.results;

//   consolelog(results);
// }
