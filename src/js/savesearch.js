document.addEventListener("keydown", function(event) {
    let tags = document.querySelector(".tags").value;
    localStorage.searches = tags;
});

function loadTags() {
    let tags = document.querySelector(".tags");
    tags.value = localStorage.searches;
}

loadTags();