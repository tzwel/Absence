
const links = document.querySelectorAll("a[target]");
links.forEach(link => {
      link.addEventListener("click", openLink)
	//  console.log('es: ', link);
});

function openLink() {
    event.preventDefault()
  //  console.log(this); 
    shell.openExternal(this.href)
}