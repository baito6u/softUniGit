import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../utils.js';
import * as dataService from "../api/dataService.js"

const detailsTemplate = (user, item, onDelete) => html`
	<section id="details">
		<div id="details-wrapper">
			<img id="details-img" src="${item.imageUrl}" alt="example1" />
			<p id="details-title">${item.model}</p>
			<div id="info-wrapper">
				<div id="details-description">
					<p class="year">Year: ${item.year}</p>
					<p class="mileage">Mileage: ${item.mileage} km.</p>
					<p class="contact">Contact Number: ${item.contact}</p>
					<p id="motorcycle-description">${item.about}</p>
				</div>
				${user && isLoggedInAndIsCreator(item) === 'isCreator'
					? html`<div id="action-buttons">
							<a href="/edit/${item._id}" id="edit-btn">Edit</a>
							<a @click=${onDelete} id="delete-btn">Delete</a>
					  </div>`
					: nothing}
			</div>
		</div>
	</section>
`;

function isLoggedInAndIsCreator(item) {
	const user = getUserData();

	if (user && user._id === item._ownerId) {
		return 'isCreator';
	}
	if (user) {
		return 'isNotCreator';
	}
	return 'isNotLoggedIn';
}

export async function detailsView(context) {
	const user = getUserData();
	const itemID = context.params.id;
	const item = await dataService.getItemById(itemID);

	context.render(detailsTemplate(user, item, onDelete));

	async function onDelete() {
		const choice = confirm('Are you sure you want to delete this item?');
		if (choice) {
			await dataService.deleteItemById(itemID);
			context.page.redirect('/catalog');
		}
	}
}
