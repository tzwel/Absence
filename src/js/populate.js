
function populate() {
  if (resp.length === undefined || resp.length === 0) {
    return console.log("No search results!");
  }
  document.querySelector("grid").innerHTML = '';

  for(let i = 0; i < resp.length; i++) {
    let img = [];
    let sampleUrl = "https://gelbooru.com/thumbnails/"
    const imageWrapper = document.createElement("article");
    const badge = document.createElement("badge");
    badge.innerHTML = ".gif";
    sampleUrl = `${sampleUrl}${resp[i].directory}/thumbnail_${resp[i].hash}.jpg`
    //console.log(sampleUrl);

    if (resp[i].file_url.includes("video-c") === true) {
       img = document.createElement("video");
       img.setAttribute("controls","");
       img.setAttribute("loop","");
       img.setAttribute("poster", sampleUrl);
       img.src = resp[i].file_url;
       imageWrapper.style.opacity = "1";
       imageWrapper.style.top = "0px";

    } else {
       img = document.createElement("img");
       img.addEventListener("load", imageLoad);
       img.src = sampleUrl;
       img.addEventListener("load", imageLoad);
    }

    if (resp[i].file_url.includes(".gif") === true) {
      imageWrapper.appendChild(badge);
    }


    function imageLoad() {
      imageWrapper.style.opacity = "1";
      imageWrapper.style.top = "0px";
    }

    document.querySelector("grid").insertAdjacentElement("beforeend", imageWrapper);
    img.setAttribute("original", `${resp[i].file_url}`);
    imageWrapper.insertAdjacentElement("beforeend", img);


  }
}
