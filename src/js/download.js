const https = require("https");
const fs = require("fs");
const path = require("path");

toasts.download = {
    name: "Download message",
    header: "Downloading image",
    message: "",
    timeOut: 4000,
    color: "var(--accent-color)"
};

toasts.path = {
    name: "Path message",
    header: "",
    message: "",
    timeOut: 4000,
    color: "var(--accent-color)"
};

document.querySelector(".download-link").addEventListener("click", (event) => {
    event.preventDefault();

    downloadImage(viewedImage.getAttribute("original"));
});

if (!fs.existsSync(savePath)) {
    fs.mkdir(savePath, (err) => {
        if (err) {
            toasts.path.header = "Error creating download directory";
            toasts.path.color = "red";
            toast(toasts.path);
            throw err;
        }
        toasts.path.header = "Creating download directory...";
        toasts.path.color = "lime";
        toast(toasts.path);
        console.log("Directory is created.");
    });
}

// downloadImage();

function downloadImage(link) {
    const Dir = `${savePath}/${ resp[clickedNumber]["id"] } - Absence${path.extname(link)}`; 

    console.log("Image is being downloaded"); 
    toasts.download.color = "var(--accent-color)";
    toasts.download.header = `Downloading file ${resp[clickedNumber]["id"]}...`;
    toast(toasts.download);

    https.get(link,(res) => {
        const fileDir = fs.createWriteStream(Dir);

        try {
            res.pipe(fileDir);            

            fileDir.on("finish",() => {
                fileDir.close();
                console.log("Download Completed"); 
                toasts.download.color = "lime";
                toasts.download.header = "File downloaded";
                toast(toasts.download);
            });
        } catch (error) {
            console.log(error);
        }
    });    
}