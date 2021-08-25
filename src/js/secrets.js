if (localStorage.theme === "darker") {
    document.documentElement.setAttribute('data-theme', 'dark');
}

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
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'darker');
});

window.addEventListener('keydown', handler);
window.addEventListener('keydown', konami(() => {
    console.log('konami 2');
}));