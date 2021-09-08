const links = document.querySelectorAll("a[target]");
links.forEach(link => {
    link.addEventListener("click", openLink);
});

function openLink() {
    event.preventDefault();
    shell.openExternal(this.href);
}