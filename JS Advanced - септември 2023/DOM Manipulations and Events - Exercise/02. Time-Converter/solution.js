function attachEventsListeners() {
  const buttonRef = Array.from(
    document.querySelectorAll('input[type="button"]')
  );
  const inputsRef = Array.from(document.querySelectorAll('input[type="text"]'));

  buttonRef.forEach((button) =>
    button.addEventListener("click", onclickHandler)
  );

  function onclickHandler(event) {
    let value = Number(event.target.parentElement.children[1].value);
    let unit = event.target.parentElement.children[1].id;

    switch (unit) {
      case "days":
        propagateValue(value);
        break;

      case "hours":
        propagateValue(value / 24);
        break;

      case "minutes":
        propagateValue(value / 24 / 60);
        break;
      case "seconds":
        propagateValue(value / 24 / 60 / 60);
        break;
    }
  }

  function propagateValue(value) {
    // value == days
    inputsRef[0].value = value;
    let currentValue = value * 24; // value == hours

    for (let i = 1; i < inputsRef.length; i++) {
      const inputField = inputsRef[i];
      inputField.value = currentValue;
      currentValue *= 60; // value == minutes and next iteration seconds
    }
  }
}
