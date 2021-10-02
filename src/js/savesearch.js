document.addEventListener("keyup", function(event) {
        let tags = document.querySelector(".tags").value;
        localStorage.searches = tags;
});

function loadTags() {
    if (!document.querySelector(".tags").value === "undefined") {
        let tags = document.querySelector(".tags");
        tags.value = localStorage.searches;
    }
}

loadTags();