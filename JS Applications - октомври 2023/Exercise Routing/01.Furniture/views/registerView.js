import {html, render} from "../node_modules/lit-html/lit-html.js"
import page from "../node_modules/page/page.mjs";
import { updateNav } from "../app.js";
import { post } from "../api.js";

const registerTemplate = () => html`
    <div class="row space-top">
      <div class="col-md-12">
        <h1>Register New User</h1>
        <p>Please fill all fields.</p>
      </div>
    </div>
    <form @submit="${onSubmit}">
      <div class="row space-top">
        <div class="col-md-4">
          <div class="form-group">
            <label class="form-control-label" for="email">Email</label>
            <input class="form-control" id="email" type="text" name="email" />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="password">Password</label>
            <input
              class="form-control"
              id="password"
              type="password"
              name="password"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="rePass">Repeat</label>
            <input
              class="form-control"
              id="rePass"
              type="password"
              name="rePass"
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Register" />
        </div>
      </div>
    </form>
`;

export async function registerView() {
  render(registerTemplate(), document.querySelector("body div.container"));
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get("email");
  const password = formData.get("password");
  const rePass = formData.get("rePass");

  if (!email || !password || !rePass) {
    throw new Error("Please fill all fields");
  }

  if (password !== rePass) {
    throw new Error("Passwords do not match");
  }

  const data = await post("/users/register", { email, password });
  const userData = {
    id: data._id,
    email: data.email,
    accessToken: data.accessToken,
  };

  sessionStorage.setItem("userData", JSON.stringify(userData));
  updateNav();
  page.redirect("/");
}
