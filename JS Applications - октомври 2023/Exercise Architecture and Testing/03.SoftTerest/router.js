export function initializer(links) {
  const main = document.getElementById("mainView");
  document.querySelector("nav").addEventListener("click", onNavigate);

  const context = {
    showSection,
    goTo,
    updateNav,
  };
  return context;

  function showSection(section) {
    main.replaceChildren(section);
  }

  function onNavigate(event) {
    event.preventDefault();

    let target = event.target;
    if (target.tagName === "IMG") {
      target = target.parentElement;
    }
    if (target.tagName === "A") {
      const url = new URL(target.href);
      goTo(url.pathname);
    }
    // if (target.tagName !== "A" && target.tagName !== "IMG") {
    //     return
    // }
    console.log(event.target);
  }

  function goTo(name, ...params) {
    const handler = links[name];
    if (typeof handler === "function") {
      handler(context, ...params);
    }
  }

  function updateNav() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      document
        .querySelectorAll(".user")
        .forEach((el) => (el.style.display = "block"));
      document
        .querySelectorAll(".guest")
        .forEach((el) => (el.style.display = "none"));
    } else {
      document
        .querySelectorAll(".user")
        .forEach((el) => (el.style.display = "none"));
      document
        .querySelectorAll(".guest")
        .forEach((el) => (el.style.display = "block"));
    }
  }
}
