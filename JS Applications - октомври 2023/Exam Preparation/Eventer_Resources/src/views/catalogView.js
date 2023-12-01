import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from "../api/dataService.js";

const itemTemplate = (item) => html`<div class="event">
  <img src=${item.imageUrl} alt="example1" />
  <p class="title">${item.name}</p>
  <p class="date">${item.date}</p>
  <a class="details-btn" href="/details/${item._id}">Details</a>
</div>`;

const catalogTemplate = (items) => html`
  <h2>Current Events</h2>
  <section id="dashboard">
    ${items.length > 0
      ? items.map((item) => itemTemplate(item))
      : html`<h4>No Events yet.</h4>`}
  </section>
`;

export async function catalogView(context) {
  const items = await dataService.getDashboardItems();
  context.render(catalogTemplate(items));
}
