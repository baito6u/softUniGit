import page from "./node_modules/page/page.mjs";
import { render } from "./node_modules/lit-html/lit-html.js";

import { userHelper } from "./src/userHelper.js";
import { userService } from "./src/userService.js";
import { showHomeView } from "./src/views/home.js";
import { showRegisterView } from "./src/views/register.js";
import { showLoginView } from "./src/views/login.js";
import { showDashboardView } from "./src/views/dashboard.js";
import { showDetailsView } from "./src/views/details.js";
import { showAddView } from "./src/views/add.js";
import { showEditView } from "./src/views/edit.js";
import { showSearchView } from "./src/views/search.js";


const root = document.querySelector("main");
const userNav = document.querySelector(".user");
const guestNav = document.querySelector(".guest");

page(decorationContext);
page("/", showHomeView);
page("/register", showRegisterView);
page("/login", showLoginView);
page("/dashboard", showDashboardView);
page("/add", showAddView);
page("/details/:id", showDetailsView);
page("/edit/:id", showEditView);
page("/logout", logout);
page("/search", showSearchView)

page.start();
updateNav();

async function logout() {
  await userService.logout();
 updateNav();
 goTo("/");
}

function renderer(template) {
  render(template, root);
}

function updateNav() {
  const userData = userHelper.getUserData();
  if (userData) {
    userNav.style.display = "block";  
    guestNav.style.display = "none";
  } else {
    userNav.style.display = "none";  
    guestNav.style.display = "block";
  }
}


export function goTo(path) {
  page.redirect(path);
}

function decorationContext(ctx, next) {
  ctx.render = renderer;
  ctx.updateNav = updateNav;
  ctx.goTo = goTo;

  next();
}


