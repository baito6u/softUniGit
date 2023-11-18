function solve() {
  const CAMEL_CASE = "Camel Case";
  const PASCAL_CASE = "Pascal Case";

  const inputValueLowerCase = document
    .getElementById("text")
    .value.toLowerCase();
  const currentCaseValue = document.getElementById("naming-convention").value;
  const result = document.getElementById("result");

  if (currentCaseValue !== CAMEL_CASE && currentCaseValue !== PASCAL_CASE) {
    result.textContent = "Error!";
    return;
  }

  const arrayOfString = inputValueLowerCase.split(" ");
  let output = "";
  let startingPoint = 0;

  if (currentCaseValue === CAMEL_CASE) {
    output += arrayOfString[0];
    startingPoint = 1;
  }

  for (let i = startingPoint; i < arrayOfString.length; i++) {
    const currentWord = arrayOfString[i];
    output +=
      currentWord[0].toUpperCase() + currentWord.slice(1, currentWord.length);

    result.textContent = output;
  }
}
