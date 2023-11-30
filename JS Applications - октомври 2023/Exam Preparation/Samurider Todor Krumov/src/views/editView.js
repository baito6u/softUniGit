import { html } from '../../node_modules/lit-html/lit-html.js';
import * as dataService from "../api/dataService.js"
import { createSubmitHandler } from '../utils.js';

const editTemplate = (item, onSubmit) => html`
	<section id="edit">
		<h2>Edit Motorcycle</h2>
		<div class="form">
			<h2>Edit Motorcycle</h2>
			<form class="edit-form" @submit=${onSubmit}>
				<input
					type="text"
					name="model"
					id="model"
					placeholder="Model"
					.value=${item.model}
				/>
				<input
					type="text"
					name="imageUrl"
					id="moto-image"
					placeholder="Moto Image"
					.value=${item.imageUrl}
				/>

				<input
					type="number"
					name="year"
					id="year"
					placeholder="Year"
					.value=${item.year}
				/>
				<input
					type="number"
					name="mileage"
					id="mileage"
					placeholder="mileage"
					.value=${item.mileage}
				/>
				<input
					type="number"
					name="contact"
					id="contact"
					placeholder="contact"
					.value=${item.contact}
				/>
				<textarea
					id="about"
					name="about"
					placeholder="about"
					rows="10"
					cols="50"
					.value=${item.about}
				></textarea>
				<button type="submit">Edit Motorcycle</button>
			</form>
		</div>
	</section>
`;

async function onSubmit(context, data, e) {
	const itemID = context.params.id;
	if (Object.values(data).some((x) => x == '')) {
		return alert('All fields are required');
	}

	await dataService.updateItem(itemID, {
		model: data.model,
		imageUrl: data.imageUrl,
		year: data.year,
		mileage: data.mileage,
		contact: data.contact,
		about: data.about,
	});

	e.target.reset();
	context.page.redirect(`/details/${itemID}`);
}

export async function editView(context) {
	const itemID = context.params.id;
	const item = await dataService.getItemById(itemID);
	context.render(editTemplate(item, createSubmitHandler(context, onSubmit)));
}
