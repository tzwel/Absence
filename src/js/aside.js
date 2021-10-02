document.querySelector(".open-saved-folder").addEventListener("click", event => {
    require("child_process").exec(`start ${savePath.replace("./","")}`);
});
