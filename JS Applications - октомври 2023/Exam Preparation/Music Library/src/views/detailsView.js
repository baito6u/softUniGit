import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../utils.js";
import * as dataService from "../api/dataService.js";

const detailsTemplate = (user, item, onDelete) => html`
	  <section id="details">
          <div id="details-wrapper">
            <p id="details-title">Album Details</p>
            <div id="img-wrapper">
              <img src=${item.imageUrl} alt="example1" />
            </div>
            <div id="info-wrapper">
              <p>
                <strong>Band:</strong><span id="details-singer">${
                  item.singer
                }</span>
              </p>
              <p>
                <strong>Album name:</strong
                ><span id="details-album">${item.album}</span>
              </p>
              <p>
                <strong>Release date:</strong
                ><span id="details-release">${item.release}</span>
              </p>
              <p><strong>Label:</strong><span id="details-label">${
                item.label
              }</span></p>
              <p>
                <strong>Sales:</strong
                ><span id="details-sales">${item.sales}</span>
              </p>
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
