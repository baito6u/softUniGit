import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../utils.js';
import * as motorbikesService from '../api/motorbikesService.js';

const detailsTemplate = (user, bike, onDelete) => html`
	<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${bike.imageUrl}" alt="example1" />
            <p id="details-category">${bike.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">
				${bike.description}
                </p>
                <p id="more-info">
				${bike.moreInfo}
                </p>
              </div>
				${user && isLoggedInAndIsCreator(bike) === 'isCreator'
					? html`<div id="action-buttons">
							<a href="/edit/${bike._id}" id="edit-btn">Edit</a>
							<a @click=${onDelete} id="delete-btn">Delete</a>
							<a href="" id="like-btn">Like</a>
					  </div>`
					: nothing}
			</div>
		</div>
	</section>
`;

function isLoggedInAndIsCreator(bike) {
	const user = getUserData();

	if (user && user._id === bike._ownerId) {
		return 'isCreator';
	}
	if (user) {
		return 'isNotCreator';
	}
	return 'isNotLoggedIn';
}

export async function detailsView(context) {
	const user = getUserData();
	const bikeID = context.params.id;
	const bike = await motorbikesService.getBikeById(bikeID);
debugger
	context.render(detailsTemplate(user, bike, onDelete));

	async function onDelete() {
		const choice = confirm('Are you sure you want to delete this bike?');
		if (choice) {
			await motorbikesService.deleteById(bikeID);
			context.page.redirect('/catalog');
		}
	}
}
