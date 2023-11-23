import page from "./node_modules/page/page.mjs";
import { render } from "./node_modules/lit-html/lit-html.js";

import { showRegisterView } from "./src/views/registerView.js";
import { showLoginView } from "./src/views/loginView.js";
import { logoutView } from "./src/views/logoutView.js";
import { userHelper } from "./src/userHelper.js"
import { showHomeView } from "./src/views/homeView.js";
import { showBrowseView } from "./src/views/browseTeamsView.js";

const root = document.querySelector("main");
const userNav = document.getElementById("user");
const guestNav = document.getElementById("guest");

page(decorationContext);
page("/", showHomeView);
page("/browse", showBrowseView);
page("/login", showLoginView);
page("/register", showRegisterView);
page("/myTeams", () => console.log("myTeams"));
page("/myTeams", () => console.log("myTeams"));
page("/logout", logoutView);

export function updateNav() {
  const userData = userHelper.getUserData();
  if (userData) {
    userNav.style.display = "inline-block";
    guestNav.style.display = "none";
  } else {
    userNav.style.display = "none";
    guestNav.style.display = "inline-block";
  }
}

updateNav();
page.start();

function renderer(template) {
  render(template, root);
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
