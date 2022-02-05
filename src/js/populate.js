let globalimagenumber = 0;

function populate() {
    if (resp.post.length === undefined || resp.post.length === 0 || resp["@attributes"].count === 0) {
        return console.log("No search results!");
    }
    if (!endlessscrolling) {
        document.querySelector("grid").innerHTML = "";
    } else {
        document.querySelector("loading").remove();
    }

    for (let i = 0; i < resp.post.length; i++) {
        let img = [];
        let thumbnailUrl = "https://gelbooru.com/thumbnails/";
        const imageWrapper = document.createElement("article");
        const badge = document.createElement("badge");
        badge.innerHTML = ".gif";
        thumbnailUrl = `${resp.post[i].preview_url}`;

        if (resp.post[i].file_url.includes(".mp4") === true || resp.post[i].file_url.includes(".webm") === true) {
            img = document.createElement("video");
            img.setAttribute("controls","");
            img.setAttribute("loop","");
            img.setAttribute("poster", thumbnailUrl);
            img.src = resp.post[i].file_url;
            imageWrapper.style.opacity = "1";
            imageWrapper.style.top = "0px";

        } else {
            img = document.createElement("img");
            img.src = thumbnailUrl;
            img.addEventListener("load", imageLoad);
        }

        if (resp.post[i].file_url.includes(".gif") === true) {
            imageWrapper.appendChild(badge);
        }

        function imageLoad() {
            imageWrapper.style.opacity = "1";
            imageWrapper.style.top = "0px";
        }

        const imgScore = resp.post[i].score;

        if (trendingToggle.checked) {
            imageWrapper.insertAdjacentHTML("beforeend", `<likes>${imgScore}^</likes>`);
        }
        if (endlessscrolling) {
            img.setAttribute("number", globalimagenumber.toString());
            globalimagenumber++;
        } else {
            img.setAttribute("number", [i]);
        }

        img.setAttribute("loading", "lazy");
        document.querySelector("grid").insertAdjacentElement("beforeend", imageWrapper);

        // REWRITE THIS
        // URGENT
        let sampleUrl = `https://img3.gelbooru.com//samples/${resp.post[i].directory}/sample_${resp.post[i].file_url.replace("https://img3.gelbooru.com/","").replace("https://video-cdn3.gelbooru.com/","").replace(`${resp.post[i].directory}/`,"").replace("images/","").replace("jpeg","jpg").replace("png","jpg")}`;
        // console.log(`kutas ${sampleUrl}`);
        img.setAttribute("original", `${resp.post[i].file_url}`);
        img.setAttribute("sample", sampleUrl);
        img.setAttribute("sampleBoolean", resp.post[i].sample);
        img.setAttribute("id", resp.post[i].id);
        img.setAttribute("copyable", "");
        imageWrapper.insertAdjacentElement("beforeend", img);

        /*   imageWrapper.insertAdjacentHTML("beforeend", `<download-button
        onclick="downloadImage('${img.getAttribute("original")}', 'fromgrid')"> bedzielink </download-button>`); */
    }
    render();
}