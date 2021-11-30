let viewedImage;

document.addEventListener("keydown", function(event) {
    // ESC shortcut
    if (event.keyCode === 27) {
        event.preventDefault();
        if (drawer.classList.contains("open")) {
            drawerAction();
        }
        document.querySelector("display-wrapper").classList.remove("open");

    }

    // Space drawer shortut
    if (event.keyCode === 32) {
        if (isDisplayOpen()) {
            event.preventDefault();
            drawerAction();
        }
    }

    // panic tilde shortcut
    if (event.keyCode === 192) {
        event.preventDefault();
        remote.getCurrentWindow().minimize();
    }

    // search shortcut
    if (event.keyCode === 13) {
        event.preventDefault();
        if (!isDisplayOpen()) {
            apiFetch();
        } else {
            downloadImage(viewedImage.getAttribute("original"));
        }
    }

    // next/previous arrow shortcut
    if (!isDisplayOpen()) {
        if (document.activeElement === document.querySelector(".tags")) {
            return;
        }
        if (event.keyCode === 39) {
            event.preventDefault();
            nextFetch();
        }
        if (event.keyCode === 37) {
            event.preventDefault();
            previousFetch();
        }
    } else {
        if (event.keyCode === 39) {
            loadLargeImage("next");
        }
        if (event.keyCode === 37) {
            loadLargeImage("previous");
        }
    }
});

function isDisplayOpen() {
    if (document.querySelector("display-wrapper").classList.contains("open")) {
        return true;
    } else {
        return false;
    }
}

function loadLargeImage(direction) {
    if (direction === "next") {
        viewedImageNumber++;
    } else {
        viewedImageNumber --;
    }

    switch (viewedImageNumber) {
    case -1:
        return viewedImageNumber = 0;

    case 101:
        return viewedImageNumber = 100;

    default:
        break;
    }

    displayerScale = 1;
    imageDisplayer.style.transform = "translate3d(0px,0px,0px)";
    yOffset = 0;
    xOffset = 0;
    
    if (viewedImageNumber < document.querySelector("grid").getElementsByTagName("article").length) {
        try {
            viewedImage = document.querySelector(`article img[number='${viewedImageNumber}'`);
    
            imageDisplayer.src = "";
            imageDisplayer.style.backgroundImage = `url("${viewedImage.getAttribute("src")}")`;  
    
            if (viewedImage.getAttribute("sampleBoolean") === "1") {
                imageDisplayer.src = viewedImage.getAttribute("sample");
            } else {
                console.log("nie ma sampla");
                imageDisplayer.src = viewedImage.getAttribute("original");
            }

            scrollToView();
            imageBlur();
            loadDetails();
            
        } catch (error) {
            return console.log(`something went wrong! ${error}`);
        }
    } else {
        nextFetch();
        document.querySelector("display-wrapper").classList.remove("open");
    }
}

function scrollToView() {
    viewedImage.scrollIntoView({ behavior: "smooth", block: "center" });
}
