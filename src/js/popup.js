const imageDisplayer = document.querySelector("display-wrapper > img");
let clickedImageNumber, viewedImageNumber, sampleClickedImageUrl, originalClickedImageUrl;

window.onclick = e => {
    let target = e.target;
    if (target.tagName === "IMG") {

        if (target.hasAttribute("original") === true && target.tagName === "IMG") {
            imageDisplayer.style.transform = "translate3d(0px,0px,0px)";

            yOffset = 0;
            xOffset = 0;

            console.log("klikniety obrazek");

            originalClickedImageUrl = target.getAttribute("original");
            sampleClickedImageUrl = target.getAttribute("sample");
            clickedImageNumber = target.getAttribute("number");
            console.log(originalClickedImageUrl);
            imageDisplayer.src = "";
            viewedImageNumber = target.getAttribute("number");

            if (target.getAttribute("sampleBoolean") === "1") {
                imageDisplayer.src = sampleClickedImageUrl;
            } else {
                console.log("nie ma sampla");
                imageDisplayer.src = originalClickedImageUrl;
            }

            loadDetails();

            imageDisplayer.style.backgroundImage = `url("${target.getAttribute("src")}")`;

            imageBlur();

            viewedImage = document.querySelector(`article img[number='${viewedImageNumber}'`);

            document.querySelector("display-wrapper").classList.add("open");
        }
    }

    if (target.tagName === "DISPLAY-WRAPPER") {
        document.querySelector("display-wrapper").classList.remove("open");
    }
};

function imageBlur() {
    if (imageDisplayer.src.includes(".gif") === false) {
        imageDisplayer.style.filter = "blur(4px)";
        imageDisplayer.addEventListener("load", popupLoad);
    }
}

function popupLoad() {
    imageDisplayer.style.filter = "blur(0)";
}