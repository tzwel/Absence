const https = require("https");
const fs = require("fs");
const path = require("path");

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
    const Dir = `${savePath}/${ Math.floor(Math.random() * 12048 ) } - Absence.${path.extname(link)}`; 

    https.get(link,(res) => {
        const fileDir = fs.createWriteStream(Dir);

        try {
            res.pipe(fileDir);
            console.log("Image is being downloaded"); 
            fileDir.on("finish",() => {
                fileDir.close();
                console.log("Download Completed"); 
            });    
        } catch (error) {
            console.log(error);
        }

    });    
}