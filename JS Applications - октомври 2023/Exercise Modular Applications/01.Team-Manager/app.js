import page from "./node_modules/page/page.mjs";
import { render } from "./node_modules/lit-html/lit-html.js";
import { showRegisterView } from "./src/views/registerView.js";

const root = document.querySelector("main");

page(decorationContext)
page("/", ()=> console.log("home"))
page("/browse", ()=> console.log("Browse Teams"))
page("/login", ()=> console.log("Login"))
page("/register", showRegisterView)
page("/myTeams", ()=> console.log("myTeams"))
page("/myTeams", ()=> console.log("myTeams"))
page("/logout", ()=> console.log("logout"))

page.start();

function renderer(template) {
    render(template, root);
}

function decorationContext(ctx, next) {
    ctx.render = renderer;
    next();
}