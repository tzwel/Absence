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

function refresh() {
    window.location.reload();
}

function opensaved() {
    require("child_process").exec(`start ${savePath.replace("./","")}`);
}

setItem("Copy", copy);
setItem("Paste", paste);
setItem("Show saved images", opensaved);
setItem("Refresh client", refresh);