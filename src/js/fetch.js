let resp;
let tags;
let pid;
let limit;
const apiUrl = "http://gelbooru.com/index.php?page=dapi&s=post&q=index&";

async function apiFetch() {
  document.querySelector("grid").innerHTML = '';
  tags = document.querySelector(".tags").value;
//  limit = document.querySelector(".limit").value;
  pid = document.querySelector(".page").value;

  resp = await Fletcher(`${apiUrl}limit=${limit}&pid=${pid}&tags=${tags} ${blacklist}&json=1`, "json");

  console.log("loaded images:");
  console.log(resp);
  populate();
}

function previousFetch() {
  document.querySelector(".page").value --;
  apiFetch();
}

function nextFetch() {
  document.querySelector(".page").value ++;
  apiFetch();
}

document.querySelector(".search").addEventListener("click", apiFetch)
document.querySelector(".previous").addEventListener("click", previousFetch)
document.querySelector(".next").addEventListener("click", nextFetch)

//fetch upon load
apiFetch();
