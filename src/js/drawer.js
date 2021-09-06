let drawer;
let drawerBackground;

if (document.querySelector("drawer")){

    if (document.querySelectorAll("drawer").length > 1) {
        console.error("there can only be 1 drawer on page");
    } else {
        drawer = document.querySelector("drawer");
        drawer.insertAdjacentHTML("afterend", "<drawer-background class='closed'></drawer-background>");
        drawerBackground = document.querySelector("drawer-background");    
          
    }

} else {
    console.info("no drawers found on page");
}

function drawerAction() {
    if (drawer.classList.contains("open")) {
        // drawer close
        drawer.classList.remove("open");
        drawerBackground.classList.add("closed");
    } else {
        drawer.classList.add("open");
        drawerBackground.classList.remove("closed");
    }
}

document.onclick = e => {
    //   console.log(e.target);
    //   console.log(e.target.tagName);
   
    if (e.target.tagName === "DRAWER-BACKGROUND") {
        drawerAction();
    }
   
};
