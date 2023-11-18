import { editPage } from "./edit.js";
import { showView } from "./utils.js";

const section = document.getElementById("movie-example");

export async function detailsPage(id) {
  console.log("detailsPage", id);

  // show/hide content
  showView(section);

  // get selected movie id
  const movie = await getMovie(id);
  
  section.replaceChildren(createMovieCard(movie));
}

function createMovieCard(movie) {
  const elem = document.createElement("div");
  elem.className = "container";
  elem.innerHTML = `
    <div class="row bg-light text-dark">
        <h1>Movie title: ${movie.title}</h1>
        <div class="col-md-8">
            <img class="img-thumbnail" src="${movie.img}" alt="Movie">
        </div>
        <div class="col-md-4 text-center">
            <h3 class="my-3 ">Movie Description</h3>
            <p>${movie.description}</p>
            <a class="btn btn-warning" id=${movie._id} href="#">Edit</a>
        </div>
    </div>
    `;

  return elem;
}

async function getMovie(id) {
  const request = await fetch(`http://localhost:3030/data/movies/${id}`);
  const movie = await request.json();

  return movie;
}

//edit
section.addEventListener("click", onEdit);

function onEdit(event) {
    event.preventDefault();

    const currentMovieId = event.target.id;
    if(event.target.tagName === "A" && event.target.textContent === "Edit") {
        console.log("editing");

        editPage(currentMovieId);
    }

}
