document.querySelector(".minimize-button").addEventListener("click", minimize)
document.querySelector(".close-button").addEventListener("click", close)

function minimize() {
  remote.getCurrentWindow().minimize();
}

function close() {
  remote.getCurrentWindow().close();
}
