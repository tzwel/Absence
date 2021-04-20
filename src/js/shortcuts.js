// ESC shortcut
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    event.preventDefault();
    document.querySelector("display-wrapper").classList.remove("open");
  }
});

// panic tilde shortcut
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 192) {
    event.preventDefault();
    remote.getCurrentWindow().minimize();
  }
});


// next/previous arrow shortcut
document.addEventListener("keydown", function(event) {
  if (!document.querySelector("display-wrapper").classList.contains("open")) {
    if (event.keyCode === 39) {
      event.preventDefault();
      nextFetch()
    }
    if (event.keyCode === 37) {
      event.preventDefault();
      previousFetch()
    }
  }
});
