const contextmenuNode = document.querySelector("contextmenu");
let activeElement = "";
let rightClickedElement = "";

function contextmenuAction(mouseX, mouseY) {

    clearContextmenu();

    if (!rightClickedElement.hasAttribute("large")) {
        if (!rightClickedElement.hasAttribute("selected") && rightClickedElement.tagName === "IMG") {
            setItem("Select (ctrl+lmb)", select);
            setItem("Select all", selectAll);
        } else if (rightClickedElement.tagName === "IMG") {
            setItem("Deselect", deselect);
        }   
    }

    if (selectedItems >= 1) {
        setItem("Deselect all", deselectAll);
        setItem("Download selected", downloadSelected);
    }

    setItem("Copy", copy);
    if (rightClickedElement.tagName === "INPUT") {
        setItem("Paste", paste);
    }

    setItem("Open saved images location", opensaved);
    setItem("Relaunch client (ctrl+r)", refresh);

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
    const flipmenu = event.clientX > window.innerWidth / 2;
    const contextMenuWidth = contextmenuNode.offsetWidth /2;
    
    if (flipmenu) {
        this.mouseX = event.clientX - contextMenuWidth + 20;
    } else {
        this.mouseX = event.clientX + 80;
    }
    this.mouseY = event.clientY;
    contextmenuAction(mouseX, mouseY);    
}, false);

window.addEventListener("click", (e) => {    
    if (e.target.tagName !== "BODY" && contextmenuNode.classList.contains("open")) {
        contextmenuAction();
    }
}, false);