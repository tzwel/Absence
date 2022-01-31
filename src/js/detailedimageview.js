// const commentsLink = "https://gelbooru.com/index.php?page=dapi&s=comment&q=index&json=1&post_id=";
const tagInfoLink = "https://gelbooru.com/index.php?page=dapi&s=tag&q=index&json=1&names=";
const artistLink = "https://gelbooru.com/index.php?page=post&s=list&tags=";
let clickedNumber = 0;
let imageTags;
const fetching = "Fetching...";

async function loadDetails() {
    if (!document.querySelector("display-wrapper").classList.contains("open")) {
        clickedNumber = parseInt(clickedImageNumber, 10);
    } else {
        clickedNumber = parseInt(viewedImageNumber, 10);
    }
  
    drawer.innerHTML = "";

    // temporary solution

    drawer.insertAdjacentHTML("beforeend", `
    <h2> Artist </h2> 
    <a artist onclick='event.preventDefault();searchBy("artist")'>
     ${fetching} </a>
    `);

    drawer.insertAdjacentHTML("beforeend", `
    <h2> Character </h2> 
    <a character onclick='event.preventDefault();searchBy("character")'>
     ${fetching} </a>
    `);

    drawer.insertAdjacentHTML("beforeend", ` <h2> Tags </h2> <span style="max-height: 200px; overflow-y: auto" > ${resp.post[clickedNumber]["tags"].replace(/ /g, "</br>")} </span>`);
    
    switch (resp.post[clickedNumber]["rating"]) {
    case "e":
        drawer.insertAdjacentHTML("beforeend",`
        <h2> Rating </h2> <span style="color:#f72828"> explicit </span>
      `);
        break;

    case "q":
        drawer.insertAdjacentHTML("beforeend",`
         <h2> Rating </h2> <span style="color:#efe031"> questionable </span>
      `);
        break;
  
    case "s":
        drawer.insertAdjacentHTML("beforeend",`
      <h2> Rating </h2> <span style="color:#83f753"> safe </span>
      `);
        break;

    default:
        drawer.insertAdjacentHTML("beforeend", `<h2> Rating </h2> <span> ${resp.post[clickedNumber]["rating"]} </span>`);
        break;
    }

    drawer.insertAdjacentHTML("beforeend", `<h2> Likes </h2> <span> ${resp.post[clickedNumber]["score"]} </span>`);

    drawer.insertAdjacentHTML("beforeend", `<h2> Dimensions </h2> <span> ${resp.post[clickedNumber]["width"]} x ${resp.post[clickedNumber]["height"]}px </span>`);

    drawer.insertAdjacentHTML("beforeend", `<h2> Id </h2> <span> ${resp.post[clickedNumber]["id"]} </span>`);

    drawer.insertAdjacentHTML("beforeend", `<a target="_blank" 
    onclick="event.preventDefault();
    shell.openExternal(this.href);"
    href="https://gelbooru.com/index.php?page=post&s=view&id=${resp.post[clickedNumber]["id"]}"> Open in browser </a>`);

    if (resp.post[clickedNumber]["source"]) {
        drawer.insertAdjacentHTML("beforeend", `<a target="_blank" 
        onclick="event.preventDefault();
        shell.openExternal(this.href);"
        href="${resp.post[clickedNumber]["source"]}"> Source </a>`);    
    } // navigator.clipboard.writeText(text)

    if (`${resp.post[clickedNumber]["sample"]}` === "0") {
        drawer.insertAdjacentHTML("beforeend", "<span> This image doesn't have a larger version. </span>");
    }

    // STUFF FOR DRAWER HERE     ---------------------------------------

    // imageTags = await fetchTags();

    /* drawer.querySelector("a[artist]").innerHTML = imageTags.artist.replace(/_/g," ");
    if (imageTags.artist !== "no artist specified") {
        drawer.querySelector("a[artist]").href = artistLink + imageTags.artist;
    }
    drawer.querySelector("a[character]").innerHTML = imageTags.character.replace(/_/g," ");
    if (imageTags.character !== "no character specified") {
        drawer.querySelector("a[character]").href = artistLink + imageTags.character;
    }*/
    const fetchedJsonTags = await fetchTagsJson();
    drawer.querySelector("a[artist]").innerHTML = "no artist specified";
    drawer.querySelector("a[character]").innerHTML = "no character specified";
    for (const tag of fetchedJsonTags.tag) {
        if (tag.type === 1) {
            drawer.querySelector("a[artist]").innerHTML = tag.name;
        }
        if (tag.type === 4) {
            drawer.querySelector("a[character]").innerHTML = tag.name;
        }
    }
}

async function fetchTagsJson() {
    const currentTags = resp.post[clickedNumber]["tags"].replace(/ /g, "+");
    const tagInfo = await fetch(`${tagInfoLink}${currentTags}`);
    const json = await tagInfo.json();
    return json;
}

/*
async function fetchTags() {
    const currentTags = resp.post[clickedNumber]["tags"].replace(/ /g, "+");
    const tagInfo = await fetch(`${tagInfoLink}${currentTags}`);
    console.log(`${tagInfoLink}${currentTags}`);
    if (tagInfo.ok) {
        let text = await tagInfo.text();
        parser = new DOMParser();
        xml = parser.parseFromString(text, "text/xml");
        //  xml.querySelector("[tags]")[0].childNodes[0].nodeValue;
        // console.log(xml);
        console.log(xml);
        let artistTag;
        let characterTag;

        try {
            artistTag = xml.querySelector("[type='1']").getAttribute("name");
        } catch (error) {
            artistTag = "no artist specified";
            console.log("no artist " + error);
        }

        try {
            characterTag = xml.querySelector("[type='4']").getAttribute("name");
        } catch (error) {
            characterTag = "no character specified";
            console.log("no character " + error);
        }

        const response = {
            artist: "This feature has been broken by latest gelbooru api changes",
            character: "This feature has been broken by latest gelbooru api changes"
        };

        return response;

    } else {
        console.log("error");
    }
}
*/
function searchBy(what) {
    document.querySelector(".page").value = 0;
    switch (what) {
    case "artist":
        document.querySelector(".tags").value = document.querySelector("a[artist]").innerHTML;
        break;

    case "character":
        document.querySelector(".tags").value = document.querySelector("a[character]").innerHTML;
        break;
    }

    if (drawer.classList.contains("open")) {
        drawerAction();
    }
    document.querySelector("display-wrapper").classList.remove("open");
    apiFetch();
}