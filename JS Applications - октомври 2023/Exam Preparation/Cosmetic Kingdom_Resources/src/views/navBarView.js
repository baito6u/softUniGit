import { render, html } from "../../node_modules/lit-html/lit-html.js";

const header = document.querySelector("header");

const loggedInTemplate = () => html`
<div class="user">
      <a href="/create">Add Product</a>
      <a href="/logout">Logout</a>
    </div>
`
const guestTemplate = () => html`
<div class="guest">
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </div>
`

const navBarTemplate = (isAuthenticated) => html`
  <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

  <nav>
    <div>
      <a href="#">Products</a>
    </div>
    ${isAuthenticated ? loggedInTemplate() : guestTemplate()}
  </nav>
`;

export function navBarView(ctx, next) {
    const isAuthenticated = ctx.authData;
    render(navBarTemplate(isAuthenticated), header);

    next();
}