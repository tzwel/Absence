document.querySelector(".minimize-button").addEventListener("click", minimize);
document.querySelector(".fullscreen-button").addEventListener("click", fullscreen);
document.querySelector(".close-button").addEventListener("click", close);

//localStorage.setItem('fullscreen', 'off');

function minimize() {
  remote.getCurrentWindow().minimize();
}

function close() {
  remote.getCurrentWindow().close();
}

// temporary solution
if (localStorage.fullscreen === "on") {
  remote.getCurrentWindow().maximize();
}

/*
function fullscreen() {
  if (localStorage.fullscreen === "off") {
    localStorage.setItem('fullscreen', 'on');
    remote.getCurrentWindow().maximize();
  } else {
    remote.getCurrentWindow().unmaximize();
    localStorage.setItem('fullscreen', 'off');
  }
}
*/
// stolen from other open source booru client
function fullscreen() {
  let window = remote.getCurrentWindow();
  if (!window.isMaximized()) {
    window.maximize();
    localStorage.setItem('fullscreen', 'on');
  } else {
    window.unmaximize();
    localStorage.setItem('fullscreen', 'off');
  }
}