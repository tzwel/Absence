let currentversion;

fs.readFile("./version", "utf8", async function (err,data) {
    if (err) {
        return console.log(err);
    }
    currentversion = await data.split(/\r?\n/);
    if (currentversion[1] === "dev") {
        checkforupdates();
    }
});

function checkforupdates() {
    try {
        // https://api.github.com/repos/user/repo/releases/latest
        // https://raw.githubusercontent.com/tzwel/Absence/main/version
        fetch("https://raw.githubusercontent.com/tzwel/Absence/main/version")
            .then((response) => response.text().then(vercheck));
    } catch (error) {
        console.log(`failed checking for updates ${error}`);
    }
}

function vercheck(response) { 
    console.log(`${response} ${currentversion[0]}`);
    response = response.toString();
    if (response === currentversion[0]) {
        console.log("up to date");  
    } else if (response > currentversion[0]) {
        toast(toasts.outdated);
        console.log("outdated");
    } else {
        toast(toasts.dev);
        console.log("dev");
    }
}
