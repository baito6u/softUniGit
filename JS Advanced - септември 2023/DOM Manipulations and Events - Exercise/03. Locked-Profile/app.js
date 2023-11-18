function lockedProfile() {
  // constants
  const SHOW_MORE = "Show more";
  const HIDE_IT = "Hide it";

  // get elements
  const buttonRef = Array.from(document.querySelectorAll("button"));
  
  // attach event listener
  buttonRef.forEach((button) => {
    button.addEventListener("click", onclickHandler);
  });
  
  // on click event
  function onclickHandler(event) {
    const divChildren = Array.from(event.target.parentElement.children);
    const locked = divChildren[2].checked;

    // if locked - do nothing
    if (locked) {
      return;
    }

    // else enable functionality
    const hiddenFieldsElement = event.target.previousElementSibling;

    if (event.target.textContent === SHOW_MORE) {
      hiddenFieldsElement.style.display = "inline";
      event.target.textContent = HIDE_IT;
      return;
    }

    hiddenFieldsElement.style.display = "";
    event.target.textContent = SHOW_MORE;
  }
}
