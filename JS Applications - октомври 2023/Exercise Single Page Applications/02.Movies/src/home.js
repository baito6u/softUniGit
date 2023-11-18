import { showView } from "./utils.js";
import { detailsPage } from "./details.js";

const section = document.getElementById("home-page");

const catalog = section.querySelector(
  "#movie .card-deck.d-flex.justify-content-center"
);

catalog.addEventListener("click", onMovieDetails);

function onMovieDetails(event) {
  if (event.target.tagName === "BUTTON") {
    event.preventDefault();

    // get selected movie id
    // show/hide content
    const selectedMovieId = event.target.dataset.id;
    detailsPage(selectedMovieId);

  }
}

export function homePage() {
  console.log("...HomePage...");
  //hide all sections and show only homePage Section
  showView(section);

  //display movies
  //get movies

  displayMovies();
}

async function displayMovies() {
  //display loading indicator

  const movies = await getMovies();

  //remove loading indicator
  catalog.replaceChildren(...movies.map(createMoviePreview));
}

function createMoviePreview(movie) {
  const listElement = document.createElement("li");
  listElement.className = "card mb-4";
  listElement.innerHTML = ` <img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
        <a href="/details/${movie._id}">
            <button data-id="${movie._id}" type="button" class="btn btn-info">Details</button>
        </a>
    </div>
    <div class="card-footer">
    </div>`;

  return listElement;
}

async function getMovies() {
  const request = await fetch("http://localhost:3030/data/movies");
  const movies = await request.json();

  return movies;
}
