import { homePage } from "./home.js";
import { showView, updateNavBar } from "./utils.js";

const section = document.getElementById("form-login");

const form = section.querySelector("form");
form.addEventListener("submit", onSubmit);

export function loginPage() {
  console.log("...loginPage...");

  showView(section);
}

async function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  const email = formData.get("email");
  const password = formData.get("password");

  await login(email, password);

  form.reset();
  updateNavBar();
  homePage();
}
// reset form - hide all input fields
// update navigation
// update main section
async function login(email, password) {
  try {
    const response = await fetch("http://localhost:3030/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error(res.statusText);
    }
    //get info for user + token and store it in sessionStorage
    const user = await response.json();
    sessionStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    alert(error.message);
  }
}
