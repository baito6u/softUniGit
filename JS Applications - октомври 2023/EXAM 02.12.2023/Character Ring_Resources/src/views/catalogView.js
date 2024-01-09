import { html } from '../../node_modules/lit-html/lit-html.js';
import * as dataService from '../api/dataService.js';

const itemTemplate = (item) => html` <div class="character">
	<img src=${item.imageUrl} alt="example1" />
            <div class="hero-info">
              <h3 class="category">${item.category}</h3>
              <p class="description">
			  ${item.description}
              </p>
	<a class="details-btn" href="/details/${item._id}">More Info</a>
</div>`;

const catalogTemplate = (items) => html`
	<h2>Characters</h2>
	<section id="characters">
		${items.length > 0
			? items.map((item) => itemTemplate(item))
			: html`<h2>No added Heroes yet.</h2>`}
	</section>
`;

export async function catalogView(context) {
	const items = await dataService.getDashboardItems();
	
	context.render(catalogTemplate(items));
}
