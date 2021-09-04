let options;

options = {
    defaultPath: app.getPath("documents") + `/${ Math.floor(Math.random() * 12048 ) } - Absence`,
};

try {
    dialog.showSaveDialog(null, options, (path) => {
        console.log(path);
    });
} catch (error) {
    console.log(error);
}

