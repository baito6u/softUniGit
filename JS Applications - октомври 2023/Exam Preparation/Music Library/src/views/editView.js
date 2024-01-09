import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from "../api/dataService.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (item, onSubmit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Album</h2>
      <form class="edit-form" @submit=${onSubmit}>
	  <input
                type="text"
                name="singer"
                .value=${item.singer}
                id="album-singer"
                placeholder="Singer/Band"
              />
              <input
                type="text"
                name="album"
				.value=${item.album}
                id="album-album"
                placeholder="Album"
              />
              <input
                type="text"
                name="imageUrl"
				.value=${item.imageUrl}
                id="album-img"
                placeholder="Image url"
              />
              <input
                type="text"
                name="release"
				.value=${item.release}
                id="album-release"
                placeholder="Release date"
              />
              <input
                type="text"
                name="label"
				.value=${item.label}
                id="album-label"
                placeholder="Label"
              />
              <input
                type="text"
                name="sales"
				.value=${item.sales}
                id="album-sales"
                placeholder="Sales"
              />
        <button type="submit">Edit Motorcycle</button>
      </form>
    </div>
  </section>
`;

async function onSubmit(context, data, e) {
  const itemID = context.params.id;
  if (Object.values(data).some((x) => x == "")) {
    return alert("All fields are required");
  }

  await dataService.updateItem(itemID, {
    singer: data.singer,
    album: data.album,
    imageUrl: data.imageUrl,
    release: data.release,
    label: data.label,
    sales: data.sales,
  });

  e.target.reset();
  context.page.redirect(`/details/${itemID}`);
}

export async function editView(context) {
  const itemID = context.params.id;
  const item = await dataService.getItemById(itemID);
  context.render(editTemplate(item, createSubmitHandler(context, onSubmit)));
}
