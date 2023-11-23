import { html } from "../../node_modules/lit-html/lit-html.js";

import { userService } from "../userService.js";

const registerTemplate = (err) => html`
  <section id="register">
    <article class="narrow">
      <header class="pad-med">
        <h1>Register</h1>
      </header>
      <form @submit=${onSubmit} id="register-form" class="main-form pad-large">
        ${err ? html`<div class="error">${err}</div> ` : ""}
        <label>E-mail: <input type="text" name="email" /></label>
        <label>Username: <input type="text" name="username" /></label>
        <label>Password: <input type="password" name="password" /></label>
        <label>Repeat: <input type="password" name="repass" /></label>
        <input class="action cta" type="submit" value="Create Account" />
      </form>
      <footer class="pad-small">
        Already have an account?
        <a href="/login" class="invert">Sign in here</a>
      </footer>
    </article>
  </section>
`;

let context = null;

export function showRegisterView(ctx) {
  context = ctx;
  context.render(registerTemplate());
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get("email");
  const username = formData.get("username");
  const password = formData.get("password");
  const repass = formData.get("repass");

  if (email === "" || username === "" || password === "" || repass === "") {
    return context.render(registerTemplate("All fields are required."));
  }
  if (password !== repass) {
    return context.render(registerTemplate("Passwords do not match."));
  }
  if (password.length < 3) {
    return context.render(
      registerTemplate("Password must be at least 3 characters long.")
    );
  }

  await userService.register(email, username, password);

  context.updateNav();
  context.goTo("/");
}
