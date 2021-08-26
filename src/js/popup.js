const imageDisplayer = document.querySelector("display-wrapper > img");
let clickedImageNumber;

window.onclick = e => {
    //console.log(e.target);
    //console.log(e.target.tagName);
    if (e.target.tagName == "IMG") {

      if (e.target.hasAttribute("original") === true && e.target.tagName == "IMG") {
        imageDisplayer.style.transform = "translate3d(0px,0px,0px)";

        yOffset = 0;
        xOffset = 0;

        console.log("klikniety obrazek");


        const originalClickedImageUrl = e.target.getAttribute("original");
        const sampleClickedImageUrl = e.target.getAttribute("sample");
        clickedImageNumber = e.target.getAttribute("number");
        console.log(originalClickedImageUrl);
        imageDisplayer.src = "";

        if (e.target.getAttribute("sampleBoolean") === "1") {
          imageDisplayer.src = sampleClickedImageUrl;
        } else {
          console.log("nie ma sampla");
          imageDisplayer.src = originalClickedImageUrl;
        }

        loadDetails();


        imageDisplayer.style.backgroundImage = `url("${e.target.getAttribute("src")}")`;


        if (imageDisplayer.src.includes(".gif") === false) {

          imageDisplayer.style.filter = "blur(4px)"
          imageDisplayer.addEventListener("load", popupLoad);
          function popupLoad() {
            imageDisplayer.style.filter = "blur(0)"
         //   imageDisplayer.style.backgroundImage = `url("")`;
          }

        }


        document.querySelector(".download-link").href = originalClickedImageUrl;
        localStorage.currentImageDetails = originalClickedImageUrl;
        console.log(`local ${localStorage.currentImageDetails}`);
        document.querySelector("display-wrapper").classList.add("open");
      }
    }

    if (e.target.tagName === "DISPLAY-WRAPPER") {
      document.querySelector("display-wrapper").classList.remove("open");

    }

};
