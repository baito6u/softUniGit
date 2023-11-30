import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const searchTemplate = (data, isResult) => html`
  <section id="search">
    <div class="form">
      <h2>Search</h2>
      <form class="search-form" @submit=${submitHandler}>
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
      </form>
    </div>
    ${isResult && result(data)}
  </section>
`;

const result = (items) => html`
  <h4>Results:</h4>
  <div class="search-result">
    ${items.length === 0
      ? html` <p class="no-result">No result.</p> `
      : items.map(item => fruitCardTemplate(item))}
  </div>
`;

const fruitCardTemplate = (item) => html`
  <div class="fruit">
    <img src="${item.imageUrl}" alt="example1" />
    <h3 class="title">${item.name}</h3>
    <p class="description">${item.description}</p>
    <a class="details-btn" href="/details/${item._id}">More Info</a>
  </div>
`;

let context = null;
export async function showSearchView(ctx) {
  context = ctx;
  searchManager();
}

async function submitHandler(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const { search } = Object.fromEntries(formData);

  if (!search) {
    return window.alert("Error");
  }

  searchManager(search);
}

async function searchManager(query) {
  if (query) {
    const data = await dataService.searchFruit(query);
    return context.render(searchTemplate(data, true));
  }
  context.render(searchTemplate());
}
