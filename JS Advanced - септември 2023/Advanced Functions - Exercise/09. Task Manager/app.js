function solve() {
  const formRef = document.querySelector("form");
  const taskRef = document.getElementById("task");
  const taskDescRef = document.getElementById("description");
  const dataRef = document.getElementById("date");
  const sectionRef = document.querySelectorAll("section");
  const openRef = sectionRef[1];
  const inProgress = sectionRef[2];
  const complete = sectionRef[3];

  formRef.addEventListener("submit", onSubmit);

  function onSubmit(event) {
    event.preventDefault();
    const taskValue = taskRef.value;
    const taskDesc = taskDescRef.value;
    const date = dataRef.value;

    if (!taskDesc || !taskValue || !date) {
      return;
    }
    let myArticle = createArticle(taskValue, taskDesc, date);
    openRef.children[1].appendChild(myArticle);
    taskRef.value = "";
    taskDescRef.value = "";
    dataRef.value = "";
  }
  function createArticle(name, desc, date) {
    let article = document.createElement("article");
    article.innerHTML = `
        <h3>${name}</h3>
        <p>Description: ${desc}</p>
        <p>Due Date: ${date}</p>
        <div class ="flex">
            <button class ="green">Start</button>
            <button class ="red">Delete</button>
        </div>
        `;

    const buttons = article.querySelectorAll("button");
    const startButton = buttons[0];
    const deleteButton = buttons[1];

    startButton.addEventListener("click", moveArticle);

    deleteButton.addEventListener("click", onDelete);
    return article;

    function moveArticle(event) {
      const article = event.target.parentElement.parentElement;
      const buttons = article.querySelectorAll("button");
      const deleteButton = buttons[0];
      const finishButton = buttons[1];

      deleteButton.textContent = "Delete";
      deleteButton.classList.remove("green");
      deleteButton.classList.add("red");
      finishButton.textContent = "Finish";
      finishButton.classList.remove("red");
      finishButton.classList.add("orange");

      deleteButton.removeEventListener("click", moveArticle);
      deleteButton.addEventListener("click", onDelete);

      finishButton.removeEventListener("click", onDelete);
      finishButton.addEventListener("click", onFinish);

      inProgress.children[1].appendChild(article);
    }

    function onFinish(event) {
      const article = event.target.parentElement.parentElement;
      event.target.parentElement.remove();
      complete.children[1].appendChild(article);
    }

    function onDelete(event) {
      event.target.parentElement.parentElement.remove();
    }
  }
}
