function notify(message) {
  const divRef = document.getElementById("notification");
  divRef.textContent = message;
  divRef.style.display = "block";

  divRef.addEventListener("click", toggleVisibility);

  function toggleVisibility(event) {
    divRef.style.display = "none";
  }
}
