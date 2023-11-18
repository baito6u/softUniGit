import { html } from "../../node_modules/lit-html/lit-html.js";
import { addFormTemplate, editFormTemplate } from "./formTemplates.js";
import { loadBtnTemplate } from "./loadBtnTemplate.js";
import { tableTemplate } from "./tableTemplate.js";

export const mainTemplate = () => {
  return html`
    ${loadBtnTemplate()} ${tableTemplate()}
    <form id="add-form">${addFormTemplate()}</form>
    <form id="edit-form" style="display: none"></form>
  `;
};

