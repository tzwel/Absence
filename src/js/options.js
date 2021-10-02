const trendingToggle = document.querySelector(".trendingToggle");
const reflowToggle = document.querySelector(".reflowToggle");
const mirrorLayoutToggle = document.querySelector(".mirrorLayout");
const mobileLayoutToggle = document.querySelector(".mobileView");
const compactToggle = document.querySelector(".compactLayout");

trendingToggle.addEventListener("click", toggleTrending);
reflowToggle.addEventListener("click", toggleReflow);
mirrorLayoutToggle.addEventListener("click", toggleMirror);
mobileLayoutToggle.addEventListener("click", toggleMobile);
compactToggle.addEventListener("click", toggleCompact);

function toggleTrending() {
    if (trendingToggle.checked) {
        trending = `score:>=${trendingThreshold}`;
        apiFetch();
    } else {
        trending = "";
    }
}

function toggleCompact() {
    if (compactToggle.checked) {
        reflowToggle.checked = false;
        localStorage.setItem("grid", "normal");

        document.querySelector("body").classList.add("compact");
        localStorage.setItem("mode", "compact");
    } else {
        document.querySelector("body").classList.remove("compact");
        localStorage.setItem("mode", "normal");
    }
}

function toggleReflow() {
    if (reflowToggle.checked) {
        document.querySelector("grid").classList.add("reflow");
        localStorage.setItem("grid", "reflow");
    } else {
        document.querySelector("grid").classList.remove("reflow");
        localStorage.setItem("grid", "normal");
    }
}

function toggleMirror() {
    if (mirrorLayoutToggle.checked) {
        document.querySelector("container").setAttribute("class", "mirror");
        localStorage.setItem("layout", "mirror");
    } else {
        document.querySelector("container").setAttribute("class", "");
        localStorage.setItem("layout", "normal");
    }
}

function toggleMobile() {
    if (mobileView.checked) {
        document.querySelector("body").setAttribute("class", "mobile");
        localStorage.setItem("layout", "mobile");
        mirrorLayoutToggle.checked = false;
    } else {
        document.querySelector("body").setAttribute("class", "");
        localStorage.setItem("layout", "normal");
    }
}

function readOptions() {
    if (localStorage.layout === "mirror") {
        document.querySelector("container").setAttribute("class", "mirror");
        mirrorLayoutToggle.checked = true;
    }
    if (localStorage.grid === "reflow") {
        reflowToggle.checked = true;
        document.querySelector("grid").setAttribute("class", "reflow");
    }
    if (localStorage.layout === "mobile") {
        document.querySelector("body").setAttribute("class", "mobile");
        mobileView.checked = true;
    }
    if (localStorage.mode === "compact") {
        document.querySelector("body").classList.add("compact");
        compactToggle.checked = true;
    }
}

readOptions();
