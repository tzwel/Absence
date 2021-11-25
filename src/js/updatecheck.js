fs.readFile("./version", "utf8", function (err,data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});
