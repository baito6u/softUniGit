//hide all sections
// function hideAllSections(params) {
//     document.querySelectorAll(".viewSection").forEach(section => section.style.display = "none")
// }

export function showView(section) {
  document
    .querySelectorAll(".view-section")
    .forEach((section) => (section.style.display = "none"));

  section.style.display = "block";
}

export function updateNavBar() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const welcomeMsg = document.getElementById("welcome-msg");
  //if login user - update welcome msg, hide login and register btn, show logout
  if (user) {
    document
      .querySelectorAll(".user")
      .forEach((el) => (el.style.display = "inline-block"));

    document
      .querySelectorAll(".guest")
      .forEach((el) => (el.style.display = "none"));

    welcomeMsg.textContent = `Welcome, ${user.email}`;
    // else udate welcome msg, show login and register btn and hide logout
  } else {
    document
      .querySelectorAll(".user")
      .forEach((el) => (el.style.display = "none"));

    document
      .querySelectorAll(".guest")
      .forEach((el) => (el.style.display = "inline-block"));

    welcomeMsg.textContent = "";
  }
}
