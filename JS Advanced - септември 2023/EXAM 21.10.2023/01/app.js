window.addEventListener("load", solution);

function solution() {
  const employeeInput = document.getElementById("employee");
  const categoryInput = document.getElementById("category");
  const urgencyInput = document.getElementById("urgency");
  const teamInput = document.getElementById("team");
  const descriptionInput = document.getElementById("description");
  const addButton = document.getElementById("add-btn");
  const previewForm = document.querySelector(".preview-list");
  const pendingForm = document.querySelector(".pending-list");
  const resolvedForm = document.querySelector(".resolved-list");

  addButton.addEventListener("click", function (e) {
    e.preventDefault();

    const employee = employeeInput.value;
    const category = categoryInput.value;
    const urgency = urgencyInput.value;
    const team = teamInput.value;
    const description = descriptionInput.value;

    if (!employee || !category || !urgency || !team || !description) {
      return;
    }

    const previewList = document.createElement("li");
    previewList.classList.add("problem-content");

    const previewArticle = document.createElement("article");

    const previewEmployee = document.createElement("p");
    previewEmployee.textContent = `From: ${employee}`;

    const previewCategory = document.createElement("p");
    previewCategory.textContent = `Category: ${category}`;

    const previewUrgency = document.createElement("p");
    previewUrgency.textContent = `Urgency: ${urgency}`;

    const previewTeam = document.createElement("p");
    previewTeam.textContent = `Assigned to: ${team}`;

    const previewDescription = document.createElement("p");
    previewDescription.textContent = `Description: ${description}`;

    const editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
    editButton.textContent = "Edit";

    const continueButton = document.createElement("button");
    continueButton.classList.add("continue-btn");
    continueButton.textContent = "Continue";

    previewArticle.appendChild(previewEmployee);
    previewArticle.appendChild(previewCategory);
    previewArticle.appendChild(previewUrgency);
    previewArticle.appendChild(previewTeam);
    previewArticle.appendChild(previewDescription);
    previewList.appendChild(previewArticle);
    previewList.appendChild(editButton);
    previewList.appendChild(continueButton);

    previewForm.appendChild(previewList);

    employeeInput.value = "";
    categoryInput.value = "";
    urgencyInput.value = "";
    teamInput.value = "";
    descriptionInput.value = "";
    addButton.disabled = true;

    editButton.addEventListener("click", () => {
      employeeInput.value = employee;
      categoryInput.value = category;
      urgencyInput.value = urgency;
      teamInput.value = team;
      descriptionInput.value = description;
      addButton.disabled = false;
      previewForm.removeChild(previewList);
    });

    continueButton.addEventListener("click", () => {
      const pendingList = document.createElement("li");
      pendingList.classList.add("problem-content");

      const pendingArticle = document.createElement("article");

      const pendingEmployee = document.createElement("p");
      pendingEmployee.textContent = `From: ${employee}`;

      const pendingCategory = document.createElement("p");
      pendingCategory.textContent = `Category: ${category}`;

      const pendingUrgency = document.createElement("p");
      pendingUrgency.textContent = `Urgency: ${urgency}`;

      const pendingTeam = document.createElement("p");
      pendingTeam.textContent = `Assigned to: ${team}`;

      const pendingDescription = document.createElement("p");
      pendingDescription.textContent = `Description: ${description}`;

      const resolvedButton = document.createElement("button");
      resolvedButton.classList.add("resolve-btn");
      resolvedButton.textContent = "Resolved";

      pendingArticle.appendChild(pendingEmployee);
      pendingArticle.appendChild(pendingCategory);
      pendingArticle.appendChild(pendingUrgency);
      pendingArticle.appendChild(pendingTeam);
      pendingArticle.appendChild(pendingDescription);
      pendingList.appendChild(pendingArticle);
      pendingList.appendChild(resolvedButton);

      pendingForm.appendChild(pendingList);

      employeeInput.value = "";
      categoryInput.value = "";
      urgencyInput.value = "";
      teamInput.value = "";
      descriptionInput.value = "";
      previewForm.removeChild(previewList);

      resolvedButton.addEventListener("click", () => {
        const resolvedList = document.createElement("li");
        pendingList.classList.add("problem-content");

        const resolvedArticle = document.createElement("article");

        const resolvedEmployee = document.createElement("p");
        resolvedEmployee.textContent = `From: ${employee}`;

        const resolvedCategory = document.createElement("p");
        resolvedCategory.textContent = `Category: ${category}`;

        const resolvedUrgency = document.createElement("p");
        resolvedUrgency.textContent = `Urgency: ${urgency}`;

        const resolvedTeam = document.createElement("p");
        resolvedTeam.textContent = `Assigned to: ${team}`;

        const resolvedDescription = document.createElement("p");
        resolvedDescription.textContent = `Description: ${description}`;

        const clearButton = document.createElement("button");
        clearButton.classList.add("clear-btn");
        clearButton.textContent = "Clear";

        resolvedArticle.appendChild(resolvedEmployee);
        resolvedArticle.appendChild(resolvedCategory);
        resolvedArticle.appendChild(resolvedUrgency);
        resolvedArticle.appendChild(resolvedTeam);
        resolvedArticle.appendChild(resolvedDescription);
        resolvedList.appendChild(resolvedArticle);
        resolvedList.appendChild(clearButton);

        resolvedForm.appendChild(resolvedList);

        employeeInput.value = "";
        categoryInput.value = "";
        urgencyInput.value = "";
        teamInput.value = "";
        descriptionInput.value = "";
        pendingForm.removeChild(pendingList);

        clearButton.addEventListener("click", () => {
          resolvedForm.removeChild(resolvedList);
        });
      });
    });
  });
}
