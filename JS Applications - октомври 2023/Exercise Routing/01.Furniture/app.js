import page from "./node_modules/page/page.mjs";
import { catalogView } from "./views/catalogView.js";
import { createView } from "./views/createView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { myFurnitureView } from "./views/myFurnitureView.js";
import { registerView } from "./views/registerView.js";

export function updateNav() {
  const userNav = document.getElementById("user");
  const guestNav = document.getElementById("guest");
  if (sessionStorage.getItem("userData") == null) {
    userNav.style.display = "none";
    guestNav.style.display = "inline-block";
  } else {
    userNav.style.display = "inline-block";
    guestNav.style.display = "none";
  }
}
// Start of the application
updateNav();
document.getElementById("logoutBtn").addEventListener("click", logoutView);

page("/", catalogView);
page("/create", createView);
page("/details/:id", detailsView);
page("/edit/:id", editView);
page("/login", loginView);
page("/my-publications", myFurnitureView);
page("/register", registerView);
page.start();
