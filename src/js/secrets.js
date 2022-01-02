let currentTheme;

function switchTheme() {
    switch (currentTheme) {
    case "default":
        currentTheme = "midnight";
        localStorage.setItem("theme", "midnight");
        break;
        
    case "midnight":
        currentTheme = "dark";
        localStorage.setItem("theme", "dark");
        break;
        
    case "dark":
        currentTheme = "rule34";
        localStorage.setItem("theme", "rule34");
        break;
        
    case "rule34":
        currentTheme = "rose";
        localStorage.setItem("theme", "rose");
        break;
 
    case "rose":
        currentTheme = "minion";
        localStorage.setItem("theme", "minion");
        break;

    case "minion":
        currentTheme = "default";
        localStorage.setItem("theme", "default");
        break;        
        
    default:
        currentTheme = "default";
        localStorage.setItem("theme", "default");
        break;
    }
    loadTheme();
    toasts.theme.header = `Theme switched to ${currentTheme}`;
    toast(toasts.theme);
}

function loadTheme() {
    document.documentElement.setAttribute("data-theme", localStorage.theme); 
    currentTheme = localStorage.theme;

    if (typeof currentTheme === "undefined") {
        currentTheme = "default";
        localStorage.setItem("theme", "default");
    }
}

loadTheme();

document.querySelector("h1.logo").addEventListener("dblclick", () => {
    switchTheme();
});
  
/*

function konami(callback) {
    let kkeys = [];
    // up,up,down,down,left,right,left,right,B,A
    const konami = '38,38,40,40,37,39,37,39,66,65';
    return event => {
        kkeys.push(event.keyCode);
        if (kkeys.toString().indexOf(konami) >= 0) {
            callback();
            kkeys = [];
        }
    };
}
const handler = konami(() => {
    console.log('konami 1');
    alert("it's still not amoled");
});

window.addEventListener('keydown', handler);
window.addEventListener('keydown', konami(() => {
    console.log('konami 2');
}));

*/
