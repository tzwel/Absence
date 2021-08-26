
function populate() {
  if (resp.length === undefined || resp.length === 0) {
    generateReport();
    return console.log("No search results!");
  }
  document.querySelector("grid").innerHTML = '';

  for(let i = 0; i < resp.length; i++) {
    let img = [];
    let thumbnailUrl = "https://gelbooru.com/thumbnails/";
    const imageWrapper = document.createElement("article");
    const badge = document.createElement("badge");
    badge.innerHTML = ".gif";
    thumbnailUrl = `${thumbnailUrl}${resp[i].directory}/thumbnail_${resp[i].hash}.jpg`
    //console.log(thumbnailUrl);

    if (resp[i].file_url.includes("video-c") === true) {
       img = document.createElement("video");
       img.setAttribute("controls","");
       img.setAttribute("loop","");
       img.setAttribute("poster", thumbnailUrl);
       img.src = resp[i].file_url;
       imageWrapper.style.opacity = "1";
       imageWrapper.style.top = "0px";

    } else {
       img = document.createElement("img");
       img.addEventListener("load", imageLoad);
       img.src = thumbnailUrl;
       img.addEventListener("load", imageLoad);
    }

    if (resp[i].file_url.includes(".gif") === true) {
      imageWrapper.appendChild(badge);
    }

    function imageLoad() {
      imageWrapper.style.opacity = "1";
      imageWrapper.style.top = "0px";
    }
    img.setAttribute("number", [i]);
    img.setAttribute("loading", "lazy");
    document.querySelector("grid").insertAdjacentElement("beforeend", imageWrapper);
    let sampleUrl = `https://img3.gelbooru.com//samples/${resp[i].directory}/sample_${resp[i].file_url.replace("https://img3.gelbooru.com/images/","").replace(`${resp[i].directory}/`,"").replace("jpeg","jpg").replace("png","jpg")}`;
    //console.log(`kutas ${sampleUrl}`);
    img.setAttribute("original", `${resp[i].file_url}`);
    img.setAttribute("sample", sampleUrl);
    img.setAttribute("sampleBoolean", resp[i].sample);
    imageWrapper.insertAdjacentElement("beforeend", img);


  }

  generateReport();
}
