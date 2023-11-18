function validate() {
  let inputRef = document.getElementById("email");

  inputRef.addEventListener("change", onChange);

  function onChange(event) {
    let value = inputRef.value;
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    pattern.test(value)
      ? inputRef.classList.remove("error")
      : inputRef.classList.add("error");
  }
}