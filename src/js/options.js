

const reflowToggle = document.querySelector(".reflowToggle");
const mirrorLayoutToggle = document.querySelector(".mirrorLayout");

reflowToggle.addEventListener("click", toggleReflow)
mirrorLayoutToggle.addEventListener("click", toggleMirror)

function toggleReflow() {
  if (reflowToggle.checked) {
    document.querySelector("grid").setAttribute("class", "reflow")
    localStorage.setItem('grid', 'reflow');
  } else {
    document.querySelector("grid").setAttribute("class", "")
    localStorage.setItem('grid', 'normal');
  }
}

function toggleMirror() {
  if (mirrorLayoutToggle.checked) {
    document.querySelector("container").setAttribute("class", "mirror")
    localStorage.setItem('layout', 'mirror');
  } else {
    document.querySelector("container").setAttribute("class", "")
    localStorage.setItem('layout', 'normal');
  }
}

function readOptions() {
  if (localStorage.layout === "mirror") {
    document.querySelector("container").setAttribute("class", "mirror")
    mirrorLayoutToggle.checked = true;
  }
  if (localStorage.grid === "reflow") {
    reflowToggle.checked = true;
    document.querySelector("grid").setAttribute("class", "reflow")
  }
}

readOptions()
