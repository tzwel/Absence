const contextmenuNode = document.querySelector("contextmenu");
let activeElement = "";
let rightClickedElement = "";

function contextmenuAction(mouseX, mouseY) {

    clearContextmenu();
    setItem("Copy", copy);
    if (rightClickedElement.tagName === "INPUT") {
        setItem("Paste", paste);
    }

    if (!rightClickedElement.hasAttribute("large")) {
        if (!rightClickedElement.hasAttribute("selected")) {
            setItem("Select", select);
        } else {
            setItem("Deselect", deselect);
        }   
    }

    if (selectedItems >= 1) {
        setItem("Download selected", downloadSelected);
        setItem("Deselect all", deselectAll);
    }
    setItem("Show saved images", opensaved);
    setItem("Refresh client", refresh);

    const contextmenuNodeDisplay = contextmenuNode.classList.contains("open");
    switch (contextmenuNodeDisplay) {
    case false:
        contextmenuNode.classList.add("open");
        contextmenuNode.style.left = `${mouseX}px`;
        contextmenuNode.style.top = `${mouseY}px`;
        break;
    
    default:
        contextmenuNode.classList.remove("open");
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

function clearContextmenu() {
    contextmenuNode.innerHTML = "";
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
    if (e.target.tagName !== "BODY" && contextmenuNode.classList.contains("open")) {
        contextmenuAction();
    }
}, false);

