import { register } from "../api/user.js";

const section = document.getElementById("registerView");
const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);

let ctx = null;

export function showRegister(context) {
  ctx = context;
  context.showSection(section);
}

async function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const { email, password, repeatPassword } = Object.fromEntries(formData);

  if (password !== repeatPassword) {
    alert("Password do not match");
  } else {
    await register(email, password);
    alert("Register successful");
    form.reset();
    ctx.updateNav();
    ctx.goTo("/catalog");
  }
}
