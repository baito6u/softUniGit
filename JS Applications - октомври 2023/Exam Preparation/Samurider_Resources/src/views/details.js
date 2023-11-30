import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";
import { userHelper } from "../userHelper.js";

const detailsTemplate = (item, isOwner) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${item.imageUrl}" alt="example1" />
      <p id="details-title">${item.model}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p class="year">Year: ${item.year}</p>
          <p class="mileage">Mileage: ${item.mileage} km.</p>
          <p class="contact">Contact Number: ${item.contact}</p>
          <p id="motorcycle-description">${item.about}</p>
        </div>
        <!--Edit and Delete are only for creator-->
        ${isOwner
          ? html`
              <div id="action-buttons">
                <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                <a @click=${deleteItem} href="javascript:void(0)" id="delete-btn">Delete</a>
              </div>
            `
          : ""}
      </div>
    </div>
  </section>
`;

let context = null;
export async function showDetailsView(ctx) {
  context = ctx;
  const id = ctx.params.id;
  const data = await dataService.getSingleItem(id);
  const isOwner = userHelper.getUserId() === data._ownerId;


  ctx.render(detailsTemplate(data, isOwner));
}

async function deleteItem() {
  const id = context.params.id;
  const choice = confirm('Are you sure you want to delete this bike?');
  if(choice) {
    await dataService.deleteItem(id);
    context.goTo("/dashboard");
  }

}
