import { html } from "../../node_modules/lit-html/lit-html.js";
import * as motorbikesService from "../api/motorbikesService.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (bike, onSubmit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Fact</h2>
      <form class="edit-form" @submit=${onSubmit}>
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Category"
          .value=${bike.category}
        />
        <input
          type="text"
          name="image-url"
          id="image-url"
          placeholder="Image URL"
          .value=${bike.imageUrl}
        />
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          rows="10"
          cols="50"
          .value=${bike.description}
        ></textarea>
        <textarea
          id="additional-info"
          name="additional-info"
          placeholder="Additional Info"
          rows="10"
          cols="50"
          .value=${bike.moreInfo}
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  </section>
`;

async function onSubmit(context, data, e) {
  const bikeID = context.params.id;
  if (Object.values(data).some((x) => x == "")) {
    return alert("All fields are required");
  }

  await motorbikesService.updateBike(bikeID, {
    category: data.category,
    imageUrl: data["image-url"],
    description: data.description,
    moreInfo: data["additional-info"],
  });
  debugger
  e.target.reset();
  context.page.redirect(`/details/${bikeID}`);
}

export async function editView(context) {
  const bikeID = context.params.id;
  const bike = await motorbikesService.getBikeById(bikeID);
  context.render(editTemplate(bike, createSubmitHandler(context, onSubmit)));
}
