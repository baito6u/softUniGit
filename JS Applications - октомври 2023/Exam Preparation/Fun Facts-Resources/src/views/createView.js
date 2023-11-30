import { html } from '../../node_modules/lit-html/lit-html.js';
import * as motorbikesService from '../api/motorbikesService.js';
import { createSubmitHandler } from '../utils.js';

const createTemplate = (onSubmit) => html`
	<section id="create">
          <div class="form">
            <h2>Add Fact</h2>
            <form class="create-form" @submit=${onSubmit}>
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Category"
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
              />
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                rows="10"
                cols="50"
              ></textarea>
              <textarea
                id="additional-info"
                name="additional-info"
                placeholder="Additional Info"
                rows="10"
                cols="50"
              ></textarea>
              <button type="submit">Add Fact</button>
            </form>
          </div>
        </section>
`;

export async function createView(context) {
	context.render(createTemplate(createSubmitHandler(context, onSubmit)));
}

async function onSubmit(context, data, e) {
	if (Object.values(data).some((x) => x == '')) {
		return alert('All fields are required!');
	}

	await motorbikesService.create({ 
		category: data.category,
		imageUrl: data["image-url"], 
		description: data.description, 
		moreInfo: data["additional-info"],
	});
debugger
	e.target.reset();
	context.page.redirect('/catalog');
}
