//const commentsLink = "https://gelbooru.com/index.php?page=dapi&s=comment&q=index&json=1&post_id=";

function loadDetails() {
  let clickedNumber = parseInt(clickedImageNumber, 10);
  console.log(resp[clickedNumber]);
  drawer.innerHTML = "";

 // let kurwa =   Fletcher(`${commentsLink}${resp[clickedNumber]["id"]}`, "blob");
 // console.log(kurwa);

  // temporary solution
  drawer.insertAdjacentHTML("beforeend", ` <h2> Tags </h2> <span style="max-height: 200px; overflow-y: auto" > ${resp[clickedNumber]["tags"].replace(/ /g, '</br>')} </span>`);
  drawer.insertAdjacentHTML("beforeend", `<h2> Source </h2> <span> ${resp[clickedNumber]["source"]} </span>`);
  drawer.insertAdjacentHTML("beforeend", `<h2> Rating </h2> <span> ${resp[clickedNumber]["rating"]} </span>`);
  drawer.insertAdjacentHTML("beforeend", `<h2> Likes </h2> <span> ${resp[clickedNumber]["score"]} </span>`);
//  drawer.insertAdjacentHTML("beforeend", `<h2> Comments </h2> <span> ${commentsLink + resp[clickedNumber]["id"]} </span>`);
}