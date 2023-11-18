const main = document.querySelector("main")
const section = document.getElementById("comments");



section.remove();

export function showDetails() {
    main.replaceChildren(section);
    
    alert("details Work");
}

