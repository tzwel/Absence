const reflowToggle = document.querySelector(".reflowToggle");

reflowToggle.addEventListener("click", toggleReflow)

function toggleReflow() {
  if (reflowToggle.checked) {
    document.querySelector("grid").setAttribute("class", "reflow")
  } else {
    document.querySelector("grid").setAttribute("class", "")
  }
}
