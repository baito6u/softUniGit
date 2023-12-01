import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../utils.js";
import * as dataService from "../api/dataService.js";

const detailsTemplate = (user, item, onDelete) => html`
  <section id="details">
          <div id="details-wrapper">
            <img
              id="details-img"
              src="${item.imageUrl}"
              alt="example1"
            />
            <p id="details-title">${item.name}</p>
            <p id="details-category">
              Category: <span id="categories">${item.category}</span>
            </p>
            <p id="details-date">
              Date:<span id="date">${item.date}</span>
            </p>
            <div id="info-wrapper">
              <div id="details-description">
                <span>${item.description}</span>
              </div>
            </div>
        ${
          user && isLoggedInAndIsCreator(item) === "isCreator"
            ? html`<div id="action-buttons">
                <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} id="delete-btn">Delete</a>
              </div>`
            : nothing
        }
      </div>
    </div>
  </section>
`;

function isLoggedInAndIsCreator(item) {
  const user = getUserData();

  if (user && user._id === item._ownerId) {
    return "isCreator";
  }
  if (user) {
    return "isNotCreator";
  }
  return "isNotLoggedIn";
}

export async function detailsView(context) {
  const user = getUserData();
  const itemID = context.params.id;
  const item = await dataService.getItemById(itemID);

  context.render(detailsTemplate(user, item, onDelete));

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this item?");
    if (choice) {
      await dataService.deleteItemById(itemID);
      context.page.redirect("/catalog");
    }
  }
}
