
import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { logoutPage } from "./logout.js";
import { updateNavBar } from "./utils.js";

// routes
const routes = {
    "/": homePage,
    "/login": loginPage,
    "/register": registerPage,
    "/logout": logoutPage
}
//nav bar
document.querySelector("nav").addEventListener("click", onNavigate);

function onNavigate(event) {
    event.preventDefault()
    if (event.target.tagName === "A" && event.target.href) {
      const url = new URL(event.target.href);
      const view = routes[url.pathname];
      view()
    // if (event.target.text === "Login") {
    //     loginPage();
    // } else if (event.target.text === "Register"){
    //     registerPage();
    // }else if (event.target.text === "Movies") {
    //     homePage();
    // }

    }
}

updateNavBar();
homePage();