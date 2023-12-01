import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from "../api/dataService.js";
import { createSubmitHandler } from "../utils.js";

const createTemplate = (onSubmit) => html`
  <section id="create">
    <div class="form">
      <h2>Add Event</h2>
      <form class="create-form" @submit=${onSubmit}>
        <input type="text" name="name" id="name" placeholder="Event" />
        <input
          type="text"
          name="imageUrl"
          id="event-image"
          placeholder="Event Image URL"
        />
        <input
          type="text"
          name="category"
          id="event-category"
          placeholder="Category"
        />

        <textarea
          id="event-description"
          name="description"
          placeholder="Description"
          rows="5"
          cols="50"
        ></textarea>

        <input type="text" name="date" id="date" placeholder="When?" />

        <button type="submit">Add</button>
      </form>
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
    name: data.name,
    imageUrl: data.imageUrl,
    category: data.category,
    description: data.description,
    date: data.date,
  });

  e.target.reset();
  context.page.redirect("/catalog");
}
