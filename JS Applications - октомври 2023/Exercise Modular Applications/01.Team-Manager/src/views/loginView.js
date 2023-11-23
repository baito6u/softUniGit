import { html } from "../../node_modules/lit-html/lit-html.js";

import { api } from "../api.js";
import { userService } from "../userService.js";
import { updateNav } from "../../app.js";

const loginTemplate = (err) => html`
  <section id="login">
    <article class="narrow">
      <header class="pad-med">
        <h1>Login</h1>
      </header>
      <form @submit=${onSubmit} id="login-form" class="main-form pad-large">
        ${err ? html`<div class="error">${err}</div> ` : ""}
        <label>E-mail: <input type="text" name="email" /></label>
        <label>Password: <input type="password" name="password" /></label>
        <input class="action cta" type="submit" value="Sign In" />
      </form>
      <footer class="pad-small">
        Don't have an account? <a href="/register" class="invert">Sign up here</a>
      </footer>
    </article>
  </section>
`;

let context = null;

export function showLoginView(ctx) {
  context = ctx;
  context.render(loginTemplate());
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get("email");
  const password = formData.get("password");

  if (email === "" || password === "") {
    return context.render(loginTemplate("All fields are required."));
  }

  await userService.login(email, password);
  context.updateNav();
  context.goTo("/")
}
