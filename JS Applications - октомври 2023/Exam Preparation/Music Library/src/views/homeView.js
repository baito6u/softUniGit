import { html } from "../../node_modules/lit-html/lit-html.js";

const homeTemplate = html` <section id="home">
  <h2 id="landing-text">
    <span>Add your favourite albums</span> <strong>||</strong>
    <span>Discover new ones right here!</span>
  </h2>
  <img src="./images/landing.png" alt="home" />
</section>`;

export async function homeView(context) {
  context.render(homeTemplate);
}
