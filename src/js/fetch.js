let [resp, tags, pid, limit] = "undefined";
let trending = "";
const trendingThreshold = "10";
const apiUrl = "http://gelbooru.com/index.php?page=dapi&s=post&q=index&";
let caching = false;
let responseCache = [];

async function apiFetch() {
    if (!endlessscrolling) {
        document.querySelector("grid").innerHTML = "";
    }

    loading();

    tags = document.querySelector(".tags").value;
    pid = document.querySelector(".page").value - 1;
    // resp = await Fletcher(`${apiUrl}limit=${limit}&pid=${pid}&tags=${trending} ${tags} ${blacklists.default} ${blacklists.personal} &json=1`, "json");

    /*
    for (const cached of responseCache) {
        if (cached.pid === pid) {
            console.log(`strona ${cached.pid} jest w keszu`);
        }
    }*/

    resp = await Fletcher(`${apiUrl}limit=${limit}&pid=${pid}&tags=${trending} 
    ${tags
    // .replace("-", "_")
        .replace("r:", "rating:")
        .replace("rating:s", "rating:safe")
        .replace("rating:q", "rating:questionable")
        .replace("rating:e", "rating:explicit")
        .replace("rating:x", "rating:explicit")
        .replace("s:", "score:")} ${blacklists.personal} &json=1`, "json");

    if (resp["@attributes"].count === 0) {
        noresults();
    } else {
        if (caching) {
            responseCache.push({pid, resp});
        }
        populate();
    }
}

function previousFetch() {
    if (document.querySelector(".page").value <= 1) {
        return document.querySelector(".page").value = 1;
    }
    document.querySelector(".page").value --;
    selectedItems = 0;
    apiFetch();
}

function nextFetch() {
    document.querySelector(".page").value ++;
    selectedItems = 0;
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

function noresults() {
    document.querySelector("grid").innerHTML = `<loading> <span> No results for</span> <h3> ${tags} </h3> </loading>`;
    toasts.report.color = "red";
    toasts.report.header = "No results!";
    toast(toasts.report);
}

document.querySelector(".search").addEventListener("click", apiFetch);
document.querySelector(".previous").addEventListener("click", previousFetch);
document.querySelector(".next").addEventListener("click", nextFetch);

// fetch upon load
apiFetch();
