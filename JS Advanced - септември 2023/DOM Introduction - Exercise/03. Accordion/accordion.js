function toggle() {
    // constants
    const MORE = "More";
    const LESS = "Less";

    //capture elements from html
    const buttonSpan = document.querySelector(".button");
    const divWrapperText = document.querySelector("#extra");

    //toggleing functoinality of button
    buttonSpan.textContent = buttonSpan.textContent === MORE ? LESS : MORE;

    // hide / show the text
    divWrapperText.style.display =
        divWrapperText.style.display === "none" ||
            divWrapperText.style.display === ""
            ? divWrapperText.style.display = "block"
            : divWrapperText.style.display = "none";
}