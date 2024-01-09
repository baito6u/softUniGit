import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from "../api/dataService.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (item, onSubmit) => html`
  <section id="edit">
    <div class="form">
      <img class="border" src="./images/border.png" alt="" />
      <h2>Edit Character</h2>
      <form class="edit-form" @submit=${onSubmit}>
        <input
          type="text"
          name="category"
          .value=${item.category}
          id="category"
          placeholder="Character Type"
        />
        <input
          type="text"
          name="image-url"
          .value=${item.imageUrl}
          id="image-url"
          placeholder="Image URL"
        />
        <textarea
          id="description"
          name="description"
          .value=${item.description}
          placeholder="Description"
          rows="2"
          cols="10"
        ></textarea>
        <textarea
          id="additional-info"
          name="additional-info"
          .value=${item.moreInfo}
          placeholder="Additional Info"
          rows="2"
          cols="10"
        ></textarea>
        <button type="submit">Edit</button>
      </form>
      <img class="border" src="./images/border.png" alt="" />
    </div>
  </section>
`;

async function onSubmit(context, data, e) {
  const itemID = context.params.id;
  if (Object.values(data).some((x) => x == "")) {
    return alert("All fields are required");
  }

  await dataService.updateItem(itemID, {
    category: data.category,
    imageUrl: data["image-url"],
    description: data.description,
    moreInfo: data["additional-info"],
  });

  e.target.reset();
  context.page.redirect(`/details/${itemID}`);
}

export async function editView(context) {
  const itemID = context.params.id;
  const item = await dataService.getItemById(itemID);
  debugger
  context.render(editTemplate(item, createSubmitHandler(context, onSubmit)));
}
