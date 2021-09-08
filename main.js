const {app, remote, BrowserWindow} = require("electron");
const path = require("path");

function createWindow () {
    const mainWindow = new BrowserWindow({
        fullscreenable: true,
        transparent: true,
        frame: false,
        width: 1200,
        minWidth: 480,
        height: 600,
        minHeight: 700,
        webPreferences: {
            enableRemoteModule: true,
            preload: path.join(__dirname, "preload.js"),
            contextIsolation: false,
            nodeIntegration: true// ,
            // devTools: false
        }
    });
    mainWindow.setMenuBarVisibility(false);
    mainWindow.loadFile("./src/index.html");
    mainWindow.setIcon(path.join(__dirname, "/src/img/Absence-logo.png"));
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow();

    app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
});
