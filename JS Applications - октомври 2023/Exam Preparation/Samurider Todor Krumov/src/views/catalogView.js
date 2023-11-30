import { html } from '../../node_modules/lit-html/lit-html.js';
import * as dataService from '../api/dataService.js';

const itemTemplate = (item) => html` <div class="motorcycle">
	<img src=${item.imageUrl} alt="example1" />
	<h3 class="model">${item.model}</h3>
	<p class="year">Year: ${item.year}</p>
	<p class="mileage">Mileage: ${item.mileage} km.</p>
	<p class="contact">Contact Number: ${item.contact}</p>
	<a class="details-btn" href="/details/${item._id}">More Info</a>
</div>`;

const catalogTemplate = (items) => html`
	<h2>Available Motorcycles</h2>
	<section id="dashboard">
		${items.length > 0
			? items.map((item) => itemTemplate(item))
			: html`<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`}
	</section>
`;

export async function catalogView(context) {
	const items = await dataService.getDashboardItems();
	context.render(catalogTemplate(items));
}
