document.querySelector(".open-saved-folder").addEventListener("click", () => {
    require("child_process").exec(`start ${savePath.replace("./","")}`);
});