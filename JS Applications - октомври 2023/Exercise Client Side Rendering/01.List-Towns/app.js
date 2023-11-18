import { html, render } from "./node_modules/lit-html/lit-html.js";

document.getElementById("btnLoadTowns").addEventListener("click", onClick);
let input = document.querySelector("#towns");

function onClick(e) {
  e.preventDefault();
  const data = input.value.split(", ");
  input.value = ""; 

  renderTowns(data);
}
const renderTowns = (data) => {
const root = document.getElementById("root");
render(cardTemplate(data), root);
}
const cardTemplate = (data) => html`
    <ul>
      ${data.map((item) => html`<li>${item}</li>`)}
    </ul>
  `;