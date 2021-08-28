let favorites = [];


function addToFavorites() {
    const currentImageLink = document.querySelector("display-wrapper img").src;
    console.log(favorites);
    console.log(localStorage.favorites);

    // console.log(favorites);

    if (favorites.includes(currentImageLink) || localStorage.favorites.includes(currentImageLink)) {
        return;
    }
    //  console.log("xd");
    favorites.push(currentImageLink);
    // localStorage.setItem('favorites', localStorage.favorites + currentImageLink + ", ");
    localStorage.setItem("favorites", JSON.stringify(favorites));
    favorites = JSON.parse(localStorage.favorites);

}

function resetFavorites() {
    localStorage.favorites = "";
    favorites = "";
}

document.querySelector(".add-to-favorites").addEventListener("click", addToFavorites);
