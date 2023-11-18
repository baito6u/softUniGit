function focused() {
  const sectionElements = document.querySelectorAll("div div");
  const inputFields = document.getElementsByTagName("input");
  const inputFieldsArray = Array.from(inputFields);
  // [...inputFields] make html collection to array

  inputFieldsArray.forEach((input) => {
    input.addEventListener("focus", inputFocus);
    input.addEventListener("blur", inputBlur);
  });

  function inputFocus(e) {
    const sectionElement = e.target.parentNode;
    sectionElement.className = "focused";
    //sectionElement.classList.add('focused')
  }

  function inputBlur(e) {
    const sectionElement = e.target.parentNode;
    sectionElement.classList.remove("focused");
  }
}
