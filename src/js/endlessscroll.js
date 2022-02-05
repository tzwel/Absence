let endlessscrolling = false;

const grid = document.querySelector("grid");
grid.onscroll = function() {
    if (grid.scrollTop + grid.clientHeight === grid.scrollHeight && document.querySelector("grid").getElementsByTagName("article").length !== 0 && endlessscrolling && !document.querySelector("loading")) {
        nextFetch();
    }
};