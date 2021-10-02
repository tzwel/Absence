let resp, tags, pid, limit;
let trending = "";
const trendingThreshold = "10";
const apiUrl = "http://gelbooru.com/index.php?page=dapi&s=post&q=index&";

async function apiFetch() {
    document.querySelector("grid").innerHTML = "";
    loading();

    tags = document.querySelector(".tags").value;
    pid = document.querySelector(".page").value;
    resp = await Fletcher(`${apiUrl}limit=${limit}&pid=${pid}&tags=${trending} ${tags} ${blacklists.default} &json=1`, "json");

    populate();
}

function previousFetch() {
    if (document.querySelector(".page").value <= 0) {
        return document.querySelector(".page").value = 0;
    }
    document.querySelector(".page").value --;
    apiFetch();
}

function nextFetch() {
    document.querySelector(".page").value ++;
    apiFetch();
}

function loading() {
    document.querySelector("grid").insertAdjacentHTML("beforeend", `
        <loading> 
            <span> Fetching... </span>
            <img class="spinner" src="./img/rotate-cw.svg" alt="spinner-loading"/>
        </loading>
    `);
}

document.querySelector(".search").addEventListener("click", apiFetch);
document.querySelector(".previous").addEventListener("click", previousFetch);
document.querySelector(".next").addEventListener("click", nextFetch);

// fetch upon load
apiFetch();
