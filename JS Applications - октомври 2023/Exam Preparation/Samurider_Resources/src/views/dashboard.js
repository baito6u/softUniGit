import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";



const cardTemplate = (item) => html`
  <div class="motorcycle">
    <img src="${item.imageUrl}" alt="example1" />
    <h3 class="model">${item.model}</h3>
    <p class="year">Year: ${item.year}</p>
    <p class="mileage">Mileage: ${item.mileage}</p>
    <p class="contact">Contact Number: ${item.contact}</p>
    <a class="details-btn" href="/details/${item._id}">More Info</a>
  </div>
`;

const dashboardTemplate = (data) => html`
  <h2>Available Motorcycles</h2>
  <section id="dashboard">
    ${data.length > 0
      ? data.map((item) => cardTemplate(item))
      : html`<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`}
  </section>
`;

export async function showDashboardView(ctx) {
  const data = await dataService.getallItems();
  ctx.render(dashboardTemplate(data));
}
