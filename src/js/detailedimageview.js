function loadDetails() {
  let clickedNumber = parseInt(clickedImageNumber, 10);
  console.log(resp[clickedNumber]);
  drawer.innerHTML = "";
  // temporary solution
  drawer.insertAdjacentHTML("beforeend", ` <h2> Tags </h2> <span style="max-height: 200px; overflow-y: auto" > ${resp[clickedNumber]["tags"]} </span>`);
  drawer.insertAdjacentHTML("beforeend", `<h2> Source </h2> <span> ${resp[clickedNumber]["source"]} </span>`);
  drawer.insertAdjacentHTML("beforeend", `<h2> Rating </h2> <span> ${resp[clickedNumber]["rating"]} </span>`);
  drawer.insertAdjacentHTML("beforeend", `<h2> Likes </h2> <span> ${resp[clickedNumber]["score"]} </span>`);
}

