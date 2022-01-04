let selectedItems = 0;

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
            clipboard.writeText(`https://gelbooru.com/index.php?page=post&s=view&id=${resp.post[clickedNumber]["id"]}`);
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

function refresh() {
    window.location.reload();
}

function opensaved() {
    require("child_process").exec(`start ${savePath.replace("./","")}`);
}

function select() {
    if (rightClickedElement.hasAttribute("loading")) {
        rightClickedElement.setAttribute("selected", "");
        selectedItems++;
    }
}

function deselect() {
    rightClickedElement.removeAttribute("selected");
    selectedItems--;
}

function deselectAll() {
    selectedItems = 0;
    const selectedImageNodes = document.querySelectorAll("[selected]");
    for (const image of selectedImageNodes) {
        image.removeAttribute("selected");
    }
}

function downloadSelected() {
    let prompt;
    //  if (document.querySelectorAll("grid > article > img").length === fileNum - 1) {
    //      prompt = confirm(`Do you really want to download ${fileNum} files?`);
    //  } else {
    //      prompt === true;
    //  }
    
    prompt = confirm(`Do you really want to download ${selectedItems} files?`);
    if (prompt === true) {
        
        const selectedImageNodes = document.querySelectorAll("[selected]");
        for (const image of selectedImageNodes) {
            downloadImage(image.getAttribute("original"), "bulk", image.id); // Show only 1 toast todo
        }
        deselectAll();
    }
}

function selectAll() {
    selectedItems = document.querySelector("grid").getElementsByTagName("article").length;
    const images = document.querySelectorAll("grid > article > img");
    for (const image of images) {
        image.setAttribute("selected", "");
    }
}