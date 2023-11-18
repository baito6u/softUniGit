function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  const rows = document.querySelectorAll("tbody tr");

  function onClick() {
    const inputValueToLower = document
      .getElementById("searchField")
      .value.toLowerCase();

    for (const row of rows) {
      rowTextToLowerCase = row.textContent.toLowerCase();

      if (rowTextToLowerCase.includes(inputValueToLower)) {
        row.setAttribute("class", "select");
      } else {
        row.removeAttribute("class");
      }
    }
  }

}
