const contextmenuNode = document.querySelector("contextmenu");
let activeElement = "";
let rightClickedElement = "";
contextmenuNode.style.display = "none";

function contextmenuAction(mouseX, mouseY) {
    const contextmenuNodeDisplay = contextmenuNode.style.display;
    switch (contextmenuNodeDisplay) {
    case "none":
        contextmenuNode.style.display = "flex";
        contextmenuNode.style.left = `${mouseX}px`;
        contextmenuNode.style.top = `${mouseY}px`;
        break;
    
    default:
        contextmenuNode.style.display = "none";
        break;
    }
}

function setItem(label, option, style = "") {
    const id = Math.floor(Math.random() * 12048);

    contextmenuNode.insertAdjacentHTML("beforeend", `
    <option optionId="${id}" class="${style}">
        ${label}
    </option>
    `);

    if (option !== "") {
        document.querySelector(`[optionId="${id}"]`).addEventListener("click", option);
    }
}

window.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    activeElement = document.activeElement;
    rightClickedElement = event.target;
    // if (event.target.tagName !== "IMG") {
    this.mouseX = event.clientX.toString();
    this.mouseY = event.clientY.toString();
    contextmenuAction(mouseX, mouseY);    
    // }
}, false);

window.addEventListener("click", (e) => {    
    if (e.target.tagName !== "BODY" && contextmenuNode.style.display !== "none") {
        contextmenuAction();
    }
}, false);

