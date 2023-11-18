window.addEventListener("load", solve);

function solve() {
  const firstNameInputEl = document.getElementById("first-name");
  const lastNameInputEl = document.getElementById("last-name");
  const ageInputEl = document.getElementById("age");
  const genderInputEl = document.getElementById("genderSelect");
  const dishDescriptionInputEl = document.getElementById("task");
  const submitBtnEl = document.getElementById("form-btn");
  const inProgressUlEl = document.getElementById("in-progress");
  const finishedUlEl = document.getElementById("finished");
  const progressCountEl = document.getElementById("progress-count");
  const clearBtnEl = document.getElementById("clear-btn");

  const areInputFieldsEmpty = () => {
    return (
      firstNameInputEl.value.length === 0 ||
      lastNameInputEl.value.length === 0 ||
      ageInputEl.value.length === 0 ||
      genderInputEl.value.length === 0 ||
      dishDescriptionInputEl.value.length === 0
    );
  };

  let counter = 0;

  submitBtnEl.addEventListener("click", addDish);
  clearBtnEl.addEventListener("click", clearFinished);

  function clearFinished() {
    finishedUlEl.innerHTML = "";
  }

  function createInProgressEl() {
    // Create elements
    const listItemEl = document.createElement("li");
    listItemEl.className = "each-line";
    const articleEl = document.createElement("article");
    const headingEl = document.createElement("h4");
    const genderAndAgeEl = document.createElement("p");
    const dishDescriptionEl = document.createElement("p");

    // Add classes and text
    const editBtnEl = document.createElement("button");
    editBtnEl.textContent = "Edit";
    editBtnEl.className = "edit-btn";
    const completeBtnEl = document.createElement("button");
    completeBtnEl.textContent = "Mark as complete";
    completeBtnEl.className = "complete-btn";

    headingEl.textContent = `${firstNameInputEl.value} ${lastNameInputEl.value}`;
    genderAndAgeEl.textContent = `${genderInputEl.value}, ${ageInputEl.value}`;
    dishDescriptionEl.textContent = `Dish description: ${dishDescriptionInputEl.value}`;

    // Add event listeners to edit and complete buttons
    editBtnEl.addEventListener("click", editDish);
    completeBtnEl.addEventListener("click", completeDish);

    // Construct the whole layout
    articleEl.appendChild(headingEl);
    articleEl.appendChild(genderAndAgeEl);
    articleEl.appendChild(dishDescriptionEl);
    articleEl.appendChild(editBtnEl);
    articleEl.appendChild(completeBtnEl);
    listItemEl.appendChild(articleEl);

    // Returned the composed list item
    return listItemEl;
  }

  function completeDish(e) {
    const editedDishEl = e.target.parentNode.parentNode;

    // Clone the pressed dish element
    const clonedDishEl = editedDishEl.cloneNode(true);
    const articleClone = clonedDishEl.querySelector("article");
    const editBtnClone = articleClone.querySelector(".edit-btn");
    const completeBtnClone = articleClone.querySelector(".complete-btn");

    // Remove the buttons from the clone cuz there is no edit or mark as complete functionality there
    articleClone.removeChild(completeBtnClone);
    articleClone.removeChild(editBtnClone);

    // Add the clone into the DOM in the finished section
    finishedUlEl.appendChild(clonedDishEl);

    // Remove the old existing element from the in progress section
    inProgressUlEl.removeChild(editedDishEl);

    removeOneFromProgressCount();
  }

  function editDish(e) {
    const editedDishEl = e.target.parentNode.parentNode;

    const headingText = editedDishEl.querySelector("h4");
    const firstNameAndLastNameText = headingText.textContent.split(" ");
    const firstNameText = firstNameAndLastNameText[0];
    const lastNameText = firstNameAndLastNameText[1];
    firstNameInputEl.value = firstNameText;
    lastNameInputEl.value = lastNameText;

    const genderAndAgeText = editedDishEl
      .querySelector("p")
      .textContent.split(", ");
    const genderText = genderAndAgeText[0];
    const ageText = genderAndAgeText[1];
    genderInputEl.value = genderText;
    ageInputEl.value = ageText;

    const dishDescriptionText = editedDishEl
      .querySelectorAll("p")[1]
      .textContent.replace("Dish description: ", "");
    dishDescriptionInputEl.value = dishDescriptionText;

    removeItemFromInProgress(editedDishEl);
  }

  function removeItemFromInProgress(item) {
    inProgressUlEl.removeChild(item);
  }

  function addDish(e) {
    if (areInputFieldsEmpty()) return;

    const listItemEl = createInProgressEl();
    inProgressUlEl.appendChild(listItemEl);
    clearInputFields();
    addOneToProgressCount();
  }

  function addOneToProgressCount() {
    counter++;
    progressCountEl.textContent = counter;
  }

  function removeOneFromProgressCount() {
    counter--;
    progressCountEl.textContent = counter;
  }

  function clearInputFields() {
    firstNameInputEl.value = "";
    lastNameInputEl.value = "";
    ageInputEl.value = "";
    genderInputEl.value = "";
    dishDescriptionInputEl.value = "";
  }
}
