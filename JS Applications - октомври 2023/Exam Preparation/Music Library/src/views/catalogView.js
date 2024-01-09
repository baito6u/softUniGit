import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from "../api/dataService.js";

const itemTemplate = (item) => html`
  <li class="card">
    <img src=${item.imageUrl} alt="travis" />
    <p>
      <strong>Singer/Band: </strong><span class="singer">${item.singer}</span>
    </p>
    <p><strong>Album name: </strong><span class="album">${item.album}</span></p>
    <p><strong>Sales:</strong><span class="sales">${item.album}</span></p>
    <a class="details-btn" href="/details/${item._id}">Details</a>
  </li>
`;

const catalogTemplate = (items) => html`
  <section id="dashboard">
    <h2>Albums</h2>
    <ul class="card-wrapper">
      ${items.length > 0
        ? items.map((item) => itemTemplate(item))
        : html`<h2>There are no albums added yet.</h2>`}
    </ul>
  </section>
`;

export async function catalogView(context) {
  const items = await dataService.getDashboardItems();

  context.render(catalogTemplate(items));
}
