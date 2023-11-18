window.addEventListener("load", solve);

function solve() {
  const carModelInput = document.getElementById("car-model");
  const carYearInput = document.getElementById("car-year");
  const partNameInput = document.getElementById("part-name");
  const partNumberInput = document.getElementById("part-number");
  const conditionInput = document.getElementById("condition");
  const infoList = document.querySelector(".info-list");
  const confirmList = document.querySelector(".confirm-list");
  const nextButton = document.getElementById("next-btn");
  const completeImg = document.getElementById("complete-img");
  const completeText = document.getElementById("complete-text");

  nextButton.addEventListener("click", function (event) {
    completeImg.style.visibility = "hidden";
    completeText.textContent = "";

    const carModel = carModelInput.value;
    const carYear = parseInt(carYearInput.value);
    const partName = partNameInput.value;
    const partNumber = parseInt(partNumberInput.value);
    const condition = conditionInput.value;

    if (
      carModel !== "" &&
      !isNaN(carYear) &&
      carYear >= 1980 &&
      carYear <= 2023 &&
      partName !== "" &&
      !isNaN(partNumber) &&
      condition !== ""
    ) {
      const listEl = document.createElement("li");
      const articleEl = document.createElement("article");
      const carModelEl = document.createElement("p");
      const carYearEl = document.createElement("p");
      const partNameEl = document.createElement("p");
      const partNumberEl = document.createElement("p");
      const conditionEl = document.createElement("p");

      const editButton = document.createElement("button");
      const continueButton = document.createElement("button");

      listEl.className = "part-content";
      editButton.className = "edit-btn";
      continueButton.className = "continue-btn";

      carModel.textContent = `Car Model: ${carModel}`;
      carYearEl.textContent = `Car Year: ${carYear}`;
      partNameEl.textContent = `Part Name: ${partName}`;
      partNumberEl.textContent = `Part Number: ${partNumber}`;
      conditionEl.textContent = `Condition: ${condition}`;

      editButton.textContent = "Edit";
      continueButton.textContent = "Continue";

      articleEl.appendChild(carModelEl);
      articleEl.appendChild(carYearEl);
      articleEl.appendChild(partNameEl);
      articleEl.appendChild(partNumberEl);
      articleEl.appendChild(conditionEl);
      listEl.appendChild(articleEl);
      listEl.appendChild(editButton);
      listEl.appendChild(continueButton);

      infoList.appendChild(listEl);

      carModelInput.value = "";
      carYearInput.value = "";
      partNameInput.value = "";
      partNumberInput.value = "";
      conditionInput.value = "";

      nextButton.disabled = true;

      editButton.addEventListener("click", function () {
        carModelInput.value = carModel;
        carYearInput.value = carYear;
        partNameInput.value = partName;
        partNumberInput.value = partNumber;
        conditionInput.value = condition;

        listEl.remove();
        nextButton.disabled = false;
      });

      continueButton.addEventListener("click", function () {
        const confirmListItem = document.createElement("li");
        confirmListItem.setAttribute("class", "part-content");

        let articleElementContinue = document.createElement("article");
        articleElementContinue = articleEl;

        let confirmBtn = document.createElement("button");
        confirmBtn.setAttribute("class", "confirm-btn");
        confirmBtn.textContent = "Confirm";

        let cancelBtn = document.createElement("button");
        cancelBtn.setAttribute("class", "cancel-btn");
        cancelBtn.textContent = "Cancel";


        confirmBtn.addEventListener("click", function () {
          confirmList.removeChild(confirmListItem);
          confirmBtn.disabled = false;
          completeImg.style.visibility = "visible";
          completeText.textContent = "Part is Ordered!";

          infoList.remove();
        });

    
        cancelBtn.addEventListener("click", function () {
          confirmList.removeChild(confirmListItem);
          nextButton.disabled = false;
          infoList.remove();
        });

        confirmListItem.appendChild(articleElementContinue);
        confirmListItem.appendChild(confirmBtn);
        confirmListItem.appendChild(cancelBtn);
        confirmList.appendChild(confirmListItem);

        infoList.removeChild(listEl);
      });

      
    }
  });
}
