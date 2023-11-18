import { render } from "./node_modules/lit-html/lit-html.js";
import {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
} from "./src/api.js";
import { mainTemplate } from "./src/templates/mainTemplate.js";
import { tableRowsTemplate } from "./src/templates/tableRowsTemplate.js";
import { editBtnHandler } from "./src/actions.js";

const documentBody = document.querySelector("body");
render(mainTemplate(), documentBody);

documentBody.querySelector("#loadBooks").addEventListener("click", async () => {
  const booksData = await getAllBooks();
  const section = documentBody.querySelector("table tbody");
  const books = [];
  for (const id in booksData) {
    books.push({
      author: booksData[id].author,
      title: booksData[id].title,
      _id: id,
    });
  }
  const context = {
    books,
    deleteFunction,
    editBtnHandler,
  };
  render(tableRowsTemplate(context), section);
});

const addFormElement = document.querySelector("#add-form");
addFormElement.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(addFormElement);
  const title = formData.get("title");
  const author = formData.get("author");

  if (!title || !author) {
    return alert("Please fill all fields");
  }

  const book = {
    title,
    author,
  };
  await createBook(book).then(() => {
    addFormElement.reset();
    documentBody.querySelector("#loadBooks").click();
  });
});

const editFormElement = documentBody.querySelector("#edit-form");

editFormElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(editFormElement);
  const id = formData.get("id");
  const title = formData.get("title");
  const author = formData.get("author");

  if (!title || !author) {
    return alert("Please fill all fields");
  }

  const book = {
    title,
    author,
  };

  updateBook(id, book).then(() => {
    documentBody.querySelector("#loadBooks").click();
    editFormElement.style.display = "none";
    editFormElement.reset();
    addFormElement.style.display = "block";
  });
});

function deleteFunction(id) {
  deleteBook(id);
  documentBody.querySelector("#loadBooks").click();
}
