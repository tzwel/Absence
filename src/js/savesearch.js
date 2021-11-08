let searchTags;

document.addEventListener("keyup", () => {
    searchTags = document.querySelector(".tags").value;
    localStorage.searches = searchTags;
});

function loadTags() {
    if (localStorage.searches !== "undefined") {
        searchTags = document.querySelector(".tags");
        searchTags.value = localStorage.searches;    
    }
}

loadTags();