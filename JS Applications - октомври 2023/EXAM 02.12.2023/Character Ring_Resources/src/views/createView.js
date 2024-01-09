import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from "../api/dataService.js";
import { createSubmitHandler } from "../utils.js";

const createTemplate = (onSubmit) => html`<section id="create">
<div class="form">
  <img class="border" src="./images/border.png" alt="" />
  <h2>Add Character</h2>
  <form class="create-form" @submit=${onSubmit}>
	<input
	  type="text"
	  name="category"
	  id="category"
	  placeholder="Character Type"
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
	  rows="2"
	  cols="10"
	></textarea>
	<textarea
	  id="additional-info"
	  name="additional-info"
	  placeholder="Additional Info"
	  rows="2"
	  cols="10"
	></textarea>
	<button type="submit">Add Character</button>
  </form>
  <img class="border" src="./images/border.png" alt="" />
</div>
</section>
`;

export async function createView(context) {
  context.render(createTemplate(createSubmitHandler(context, onSubmit)));
}

async function onSubmit(context, data, e) {
  if (Object.values(data).some((x) => x == "")) {
    return alert("All fields are required!");
  }

  await dataService.create({
    category: data.category,
    imageUrl: data["image-url"],
    description: data.description,
    moreInfo: data["additional-info"],
  });
  e.target.reset();
  context.page.redirect("/catalog");
}
