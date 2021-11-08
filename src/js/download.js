const https = require("https");
const fs = require("fs");
const path = require("path");
const { log } = require("console");
const downloadArray = [];
let fileNum;

fs.readdir(savePath, (err, files) => {
    fileNum = files.length;
});

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
        toasts.path.color = "var(--accent-color)";
        toast(toasts.path);
        console.log("Directory is created.");
    });
}

function downloadImage(link, method = "default", id) {    
    let Dir;

    toasts.download.color = "var(--accent-color)";

    if (method === "default") {
        Dir = `${savePath}/${ resp[clickedNumber]["id"] } - Absence${path.extname(link)}`; 
        if (fs.existsSync(`${savePath}/${ resp[clickedNumber]["id"] } - Absence${path.extname(link)}`)) {
            return toast(toasts.fileExists);
        }
        downloadArray.push(resp[clickedNumber]["id"]);
        toasts.download.header = `Downloading file ${resp[clickedNumber]["id"]}...`;

    } else if (method === "bulk") {
        Dir = `${savePath}/${id} - Absence${path.extname(link)}`; 
        if (fs.existsSync(`${savePath}/${id} - Absence${path.extname(link)}`)) {
            return toast(toasts.fileExists);
        }
        downloadArray.push(id);
        toasts.download.header = `Downloading file ${id}...`;
    }

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
                downloadArray.shift();
                    
                fs.readdir(savePath, (err, files) => {
                    fileNum = files.length;
                });
    
                // generateReport(fileNum); // no idea why in the flying fuck this doesnt work
                // "temporary" "fix" in report.js
                // actualy not sih sieotrhdujiorkjhdsjekt hsjko
                // cant fix a retarded system
                // /////////////////////// sadadsa
            });
        } catch (error) {
            console.log(error);
            downloadArray.shift();
        }
    }); 
    
}