function addItem() {
  // capture elements
  const inputFieldTextRef = document.getElementById("newItemText");
  const inputFieldValueRef = document.getElementById("newItemValue");
  const menu = document.getElementById("menu");

  //create new element
  const option = document.createElement("option");

  // setup option
  option.textContent = inputFieldTextRef.value;
  option.value = inputFieldValueRef.value;

  // append content
  menu.appendChild(option);

  // clear input value
  inputFieldTextRef.value = "";
  inputFieldValueRef.value = "";
}
