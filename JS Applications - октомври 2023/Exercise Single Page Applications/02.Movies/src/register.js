import { showView } from "./utils.js";

const section = document.getElementById("form-sign-up");

export function registerPage() {
    console.log("...registerPage...");
    
    showView(section);
}

// Steps:
  // add event listener
  // get form data
  // form data validation (ex: password must be at least 6 characters)
  // request + save user's data to sessionStorage
  // error handling
  // form.reset()
  // updateNavBar();
  // homePage();