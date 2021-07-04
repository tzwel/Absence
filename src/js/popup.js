window.onclick = e => {
    //console.log(e.target);
    //console.log(e.target.tagName);
    if (e.target.tagName == "IMG") {

      if (e.target.hasAttribute("original") === true && e.target.tagName == "IMG") {
        document.querySelector("display-wrapper > img").style.transform = "translate3d(0px,0px,0px)";

        yOffset = 0;
        xOffset = 0;

        console.log("klikniety obrazek");
        const originalClickedImageUrl = e.target.getAttribute("original");
        console.log(originalClickedImageUrl);
        document.querySelector("display-wrapper > img").src = "";
        document.querySelector("display-wrapper > img").src = originalClickedImageUrl;

        document.querySelector("display-wrapper > img").style.backgroundImage = `url("${e.target.getAttribute("src")}")`;


        if (document.querySelector("display-wrapper > img").src.includes(".gif") === false) {

          document.querySelector("display-wrapper > img").style.filter = "blur(4px)"
          document.querySelector("display-wrapper > img").addEventListener("load", popupLoad);
          function popupLoad() {
            document.querySelector("display-wrapper > img").style.filter = "blur(0)"
         //   document.querySelector("display-wrapper > img").style.backgroundImage = `url("")`;
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
