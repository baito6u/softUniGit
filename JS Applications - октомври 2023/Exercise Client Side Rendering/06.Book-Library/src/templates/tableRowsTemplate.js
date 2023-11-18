import { html } from "../../node_modules/lit-html/lit-html.js";

export const tableRowsTemplate = (context) => html `
${context.books.map((book) => bookRowsTemplate(book, context.deleteFunction, context.editBtnHandler))}
`

const bookRowsTemplate = (book, deleteFunc, updateHandler) => {
    return html `
         <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>
                    <button @click=${updateHandler.bind(null, book._id)}>Edit</button>
                    <button @click=${deleteFunc.bind(null, book._id)}>Delete</button>
                </td>
            </tr>
    `}