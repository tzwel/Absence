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

function setItem(label, option) {
    const id = Math.floor(Math.random() * 12048);

    contextmenuNode.insertAdjacentHTML("beforeend", `
    <option optionId="${id}">
        ${label}
    </option>
    `);

    document.querySelector(`[optionId="${id}"]`).addEventListener("click", option);
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

function copy() { // else if madness
    console.log(activeElement.tagName);
    if (window.getSelection().toString()) {
        try {
            clipboard.writeText(window.getSelection().toString());
        } catch (err) {
            console.error("Failed to copy!", err);
        }

    } else if (rightClickedElement.tagName === "IMG") { 

        switch (rightClickedElement.hasAttribute("original")) {
        case true:
            clipboard.writeText(rightClickedElement.getAttribute("original"));
            break;
        
        default:
            clipboard.writeText(`https://gelbooru.com/index.php?page=post&s=view&id=${resp[clickedNumber]["id"]}`);
            break;
        }

    } else if (activeElement.value) { // fix
        clipboard.writeText(activeElement.value);
    }
}

function paste() {
    let clipboardText = "";

    if (activeElement.tagName === "INPUT") {
        navigator.clipboard.readText()
            .then(text => {
                clipboardText = text;
                activeElement.value = `${activeElement.value} ${clipboardText}`;
            });
    }
}

setItem("Copy", copy);
setItem("Paste", paste);