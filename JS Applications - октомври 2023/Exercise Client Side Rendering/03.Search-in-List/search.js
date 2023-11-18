import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";

const cardTemplate = (towns) => html`
  <ul>
    ${towns.map((town) => html`<li id=${town}>${town}</li>`)}
  </ul>
`;

const renderTowns = (towns) => {
  cardTemplate(towns);
  const rootElement = document.getElementById("towns");
  render(cardTemplate(towns), rootElement);
};

renderTowns(towns);

document.querySelector("BUTTON").addEventListener("click", search);

const searchTown = (towns, text) => {
  return towns.filter((town) => {
    if (town.includes(text)) {
      const match = document.getElementById(`${town}`);
      match.setAttribute("class", "active");
      return town;
    }
  });
};

function search() {
  const text = document.getElementById("searchText").value;
  const result = searchTown(towns, text);
  const resultHtml = document.getElementById("result");
  resultHtml.textContent = `${result.length} matches found`;
}
