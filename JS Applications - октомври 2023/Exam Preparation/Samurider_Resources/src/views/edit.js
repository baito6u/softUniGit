import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const editTemplate = (item) => html`
  <section id="edit">
    <h2>Edit Motorcycle</h2>
    <div class="form">
      <h2>Edit Motorcycle</h2>
      <form @submit=${submitHandler} class="edit-form">
        <input
          type="text"
          name="model"
          id="model"
          value=${item.model}
          placeholder="Model"
        />
        <input
          type="text"
          name="imageUrl"
          id="moto-image"
          value=${item.imageUrl}
          placeholder="Moto Image"
        />
        <input
          type="number"
          name="year"
          id="year"
          value=${item.year}
          placeholder="Year"
        />
        <input
          type="number"
          name="mileage"
          id="mileage"
          value=${item.mileage}
          placeholder="mileage"
        />
        <input
          type="number"
          name="contact"
          id="contact"
          value=${item.contact}
          placeholder="contact"
        />
        <textarea
          id="about"
          name="about"
          placeholder="about"
          rows="10"
          cols="50"
        >
${item.about}</textarea
        >
        <button type="submit">Edit Motorcycle</button>
      </form>
    </div>
  </section>
`;

let context = null;
export async function showEditView(ctx) {
  context = ctx;
  const id = ctx.params.id;
  const data = await dataService.getSingleItem(id);
  debugger;
  ctx.render(editTemplate(data));
}

async function submitHandler(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const { model, imageUrl, year, mileage, contact, about } =
    Object.fromEntries(formData);
  
  if (!model || !imageUrl || !year || !mileage || !contact || !about) {
    return window.alert("Error");
  }

  const id = context.params.id;
  await dataService.updateItem(id, {
    model,
    imageUrl,
    year,
    mileage,
    contact,
    about,
  });
  context.goTo(`/details/${id}`);
}
