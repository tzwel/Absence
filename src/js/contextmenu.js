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

function copy() { 
    // else if madness
    // I'm really sorry
    if (window.getSelection().toString()) {
        try {
            clipboard.writeText(window.getSelection().toString());
        } catch (err) {
            console.error("Failed to copy!", err);
        }

    } else if (rightClickedElement.tagName === "IMG" && rightClickedElement.hasAttribute("copyable")) { 

        switch (rightClickedElement.hasAttribute("original")) {
        case true:
            clipboard.writeText(rightClickedElement.getAttribute("original"));
            toast(toasts.imageCopied);
            break;
        
        default:
            clipboard.writeText(`https://gelbooru.com/index.php?page=post&s=view&id=${resp[clickedNumber]["id"]}`);
            toast(toasts.imageCopied);
            break;
        }

    } else if (activeElement.value) { // fix later
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