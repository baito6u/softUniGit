import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from "../api/dataService.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (item, onSubmit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Event</h2>
      <form class="edit-form" @submit=${onSubmit}>
        <input type="text" name="name" .value=${item.name} id="name" placeholder="Event" />
        <input
          type="text"
          name="imageUrl"
		  .value=${item.imageUrl}
          id="event-image"
          placeholder="Event Image"
        />
        <input
          type="text"
          name="category"
		  .value=${item.category}
          id="event-category"
          placeholder="Category"
        />

        <textarea
          id="event-description"
          name="description"
		  .value=${item.description}
          placeholder="Description"
          rows="5"
          cols="50"
        ></textarea>

        <label for="date-and-time">Event Time:</label>
        <input type="text" name="date" .value=${item.date} id="date" placeholder="When?" />

        <button type="submit">Edit</button>
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
    name: data.name,
    imageUrl: data.imageUrl,
    category: data.category,
    description: data.description,
    date: data.date,
  });

  e.target.reset();
  context.page.redirect(`/details/${itemID}`);
}

export async function editView(context) {
  const itemID = context.params.id;
  const item = await dataService.getItemById(itemID);
  context.render(editTemplate(item, createSubmitHandler(context, onSubmit)));
}
