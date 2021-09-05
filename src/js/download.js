const https = require("https");
const fs = require("fs");
const path = require("path");

toasts.download = {
    name: "Download message",
    header: "Downloading image",
    message: "",
    timeOut: 4000,
    background: "#172636"
};

document.querySelector(".download-link").addEventListener("click", (event) => {
    event.preventDefault();

    downloadImage(viewedImage.getAttribute("original"));
});

if (!fs.existsSync(savePath)) {
    fs.mkdir(savePath, (err) => {
        if (err) {
            throw err;
        }
        console.log("Directory is created.");
    });
}

// downloadImage();

function downloadImage(link) {
    const Dir = `${savePath}/${ resp[clickedNumber]["id"] } - Absence.${path.extname(link)}`; 

    console.log("Image is being downloaded"); 
    toasts.download.header = "Downloading image";
    toasts.download.background = "#172636";
    toast(toasts.download);

    https.get(link,(res) => {
        const fileDir = fs.createWriteStream(Dir);

        try {
            res.pipe(fileDir);            


            fileDir.on("finish",() => {
                fileDir.close();
                console.log("Download Completed"); 
                toasts.download.header = "Image downloaded";
                toasts.download.background = "#57a737";
                toast(toasts.download);
            });    
        } catch (error) {
            console.log(error);
        }

    });    
}