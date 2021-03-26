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

  console.log(resp);
  populate();
}

document.querySelector(".search").addEventListener("click", apiFetch)
