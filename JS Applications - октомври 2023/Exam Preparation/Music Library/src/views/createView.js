import { html } from '../../node_modules/lit-html/lit-html.js';
import * as dataService from "../api/dataService.js"
import { createSubmitHandler } from '../utils.js';

const createTemplate = (onSubmit) => html`
	<section id="create">
          <div class="form">
            <h2>Add Album</h2>
            <form class="create-form" @submit=${onSubmit}>
              <input
                type="text"
                name="singer"
                id="album-singer"
                placeholder="Singer/Band"
              />
              <input
                type="text"
                name="album"
                id="album-album"
                placeholder="Album"
              />
              <input
                type="text"
                name="imageUrl"
                id="album-img"
                placeholder="Image url"
              />
              <input
                type="text"
                name="release"
                id="album-release"
                placeholder="Release date"
              />
              <input
                type="text"
                name="label"
                id="album-label"
                placeholder="Label"
              />
              <input
                type="text"
                name="sales"
                id="album-sales"
                placeholder="Sales"
              />

              <button type="submit">post</button>
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

	await dataService.create({
		singer: data.singer,
		album: data.album,
		imageUrl: data.imageUrl,
		release: data.release,
		label: data.label,
		sales: data.sales,
	});
debugger
	e.target.reset();
	context.page.redirect('/catalog');
}
