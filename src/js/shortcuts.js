// ESC shortcut
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    event.preventDefault();
    document.querySelector("display-wrapper").classList.remove("open");
  }
});

// panic comma/tilde shortcut
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 188 || event.keyCode === 192) {
    event.preventDefault();
    remote.getCurrentWindow().minimize();
  }
});
