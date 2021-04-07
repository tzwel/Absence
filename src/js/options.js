const reflowToggle = document.querySelector(".reflowToggle");
const mirrorLayoutToggle = document.querySelector(".mirrorLayout");

reflowToggle.addEventListener("click", toggleReflow)
mirrorLayoutToggle.addEventListener("click", toggleMirror)

function toggleReflow() {
  if (reflowToggle.checked) {
    document.querySelector("grid").setAttribute("class", "reflow")
  } else {
    document.querySelector("grid").setAttribute("class", "")
  }
}

function toggleMirror() {
  if (mirrorLayoutToggle.checked) {
    document.querySelector("container").setAttribute("class", "mirror")
  } else {
    document.querySelector("container").setAttribute("class", "")
  }
}
