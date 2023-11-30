import { html } from "../../node_modules/lit-html/lit-html.js";
import * as motorbikesServices from "../api/motorbikesService.js";

const itemTemplate = (bike) => html` <div class="fact">
  <img src=${bike.imageUrl} alt="example1" />
  <h3 class="category">${bike.category}</h3>
  <p class="description">${bike.description}</p>
  <a class="details-btn" href="/details/${bike._id}">More Info</a>
</div>`;

const catalogTemplate = (bikes) => html`
  <h2>Fun Facts</h2>
  <section id="dashboard">
    ${bikes.length > 0
      ? bikes.map((bike) => itemTemplate(bike))
      : html`<h2 class="no-avaliable">No Fun Facts yet.</h2>`}
  </section>
`;

export async function catalogView(context) {
  const bikes = await motorbikesServices.getDashboardBikes();
  context.render(catalogTemplate(bikes));
}
