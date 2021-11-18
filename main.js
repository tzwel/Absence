const {app, remote, BrowserWindow} = require("electron");
const path = require("path");

async function createWindow () {

    const mainWindow = new BrowserWindow({
        show: false,
        backgroundColor: "#1d1d1d",
        fullscreenable: true,
        transparent: false,
        frame: false,
        width: 1200,
        minWidth: 480,
        height: 600,
        minHeight: 700,
        webPreferences: {
            enableRemoteModule: true,
            contextIsolation: false,
            nodeIntegration: true
            // ,
            // devTools: false
        }
    });

    const loader = new BrowserWindow({ 
        transparent: true,
        titleBarStyle: "hidden",
        parent: mainWindow,
        frame: false,
        show: false,
        width: 150,
        height: 150,
        resizable: false,
        devTools: false,
        opacity: 1,
        hasShadow: false,
        alwaysOnTop: true
    });

    //  loader.loadFile("./src/loader.html");
    // mainWindow.loadFile("./src/index.html");

    loader.loadURL(`file://${__dirname}/src/loader.html`);
    loader.setIgnoreMouseEvents(true);
    mainWindow.loadURL(`file://${__dirname}/src/index.html`);

    // loader.once("ready-to-show", () => {
    loader.show();
    
    //  });

    mainWindow.setMenuBarVisibility(false);
    mainWindow.setIcon(path.join(__dirname, "/src/img/Absence-logo.png"));

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    mainWindow.webContents.once("dom-ready", () => {
        mainWindow.show();
        setTimeout(() => loader.destroy(), 4000);
    });

    /*
    mainWindow.once("dom-ready", () => {
        mainWindow.show();
        setTimeout(() => loader.destroy(), 4000);
        //  loader.hide();
        //   loader.close();
        //  loader.destroy();
    }); */
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

app.commandLine.appendSwitch("auto-detect", "false");
app.commandLine.appendSwitch("no-proxy-server");
