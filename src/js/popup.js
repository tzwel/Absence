const imageDisplayer = document.querySelector("display-wrapper > img");

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
        console.log(originalClickedImageUrl);
        imageDisplayer.src = "";
        imageDisplayer.src = originalClickedImageUrl;

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
