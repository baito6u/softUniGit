import { html } from "../../node_modules/lit-html/lit-html.js";

import { userService } from "../userService.js";

const loginTemplate = () => html`
  <section id="login">
    <div class="form">
      <h2>Login</h2>
      <form class="login-form" @submit=${submitHandler}>
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit">login</button>
        <p class="message">
          Not registered? <a href="/register">Create an account</a>
        </p>
      </form>
    </div>
  </section>
`;

let context = null;
export function showLoginView(ctx) {
  context = ctx;
  context.render(loginTemplate());
}

async function submitHandler(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get("email");
  const password = formData.get("password");
  debugger;

  if (email === "" || password === "") {
    return window.alert("Error");
  }

  await userService.login(email, password);

  context.updateNav();
  context.goTo("/");
}
