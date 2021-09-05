// const commentsLink = "https://gelbooru.com/index.php?page=dapi&s=comment&q=index&json=1&post_id=";
let clickedNumber;

function loadDetails() {
    if (!document.querySelector("display-wrapper").classList.contains("open")) {
        clickedNumber = parseInt(clickedImageNumber, 10);
    } else {
        clickedNumber = parseInt(viewedImageNumber, 10);
    }
  
    console.log(resp[clickedNumber]);
    drawer.innerHTML = "";


    // temporary solution
    drawer.insertAdjacentHTML("beforeend", ` <h2> Tags </h2> <span style="max-height: 200px; overflow-y: auto" > ${resp[clickedNumber]["tags"].replace(/ /g, "</br>")} </span>`);
  
    switch (resp[clickedNumber]["rating"]) {
    case "e":
        drawer.insertAdjacentHTML("beforeend",`
        <h2> Rating </h2> <span style="color:#f72828"> explicit </span>
      `);
        break;

    case "q":
        drawer.insertAdjacentHTML("beforeend",`
         <h2> Rating </h2> <span style="color:#efe031"> questionable </span>
      `);
        break;
  
    case "s":
        drawer.insertAdjacentHTML("beforeend",`
      <h2> Rating </h2> <span style="color:#83f753"> safe </span>
      `);
        break;

    default:
        drawer.insertAdjacentHTML("beforeend", `<h2> Rating </h2> <span> ${resp[clickedNumber]["rating"]} </span>`);
        break;
    }

    drawer.insertAdjacentHTML("beforeend", `<h2> Likes </h2> <span> ${resp[clickedNumber]["score"]} </span>`);

    drawer.insertAdjacentHTML("beforeend", `<a target="_blank" 
    onclick="event.preventDefault();
    shell.openExternal(this.href);"
    href="https://gelbooru.com/index.php?page=post&s=view&id=${resp[clickedNumber]["id"]}"> Open in browser <a>`);

    if (`${resp[clickedNumber]["sample"]}` === "0") {
        drawer.insertAdjacentHTML("beforeend", "<h2> This image doesn't have a smaller version. </h2>");
    }
//  drawer.insertAdjacentHTML("beforeend", `<h2> Comments </h2> <span> ${commentsLink + resp[clickedNumber]["id"]} </span>`);
}