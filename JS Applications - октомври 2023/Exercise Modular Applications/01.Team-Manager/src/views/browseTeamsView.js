import { html } from "../../node_modules/lit-html/lit-html.js";

import { userHelper } from "../userHelper.js";
import { dataService } from "../dataService.js";

const browseTemplate = (data, hasUser) => html`
  <section id="browse">
    <article class="pad-med">
      <h1>Team Browser</h1>
    </article>
    ${data.map(item => teamCardTemplate(item))}
    ${hasUser ? createTeamBtnTemplate() : ""}
  </section>
`;

const teamCardTemplate = (item) => html`
<article class="layout">
      <img src="${item.logoUrl}" class="team-logo left-col" />
      <div class="tm-preview">
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <span class="details">??? Members</span>
        <div><a href="/details/${item._id}" class="action">See details</a></div>
      </div>
    </article>
`

const createTeamBtnTemplate = () => html`
  <article class="layout narrow">
    <div class="pad-small">
      <a href="#" class="action cta">Create Team</a>
    </div>
  </article>
`;

export async function showBrowseView(ctx) {
  const userData = userHelper.getUserData();
  const allTeams = await dataService.getAllTeam();
  debugger
  ctx.render(browseTemplate(allTeams, !!userData));
}
