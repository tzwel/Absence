let content = "dynamicContent";

const report = content;

function render(component, content, destination) {
    try {
        component = component.replace("dynamicContent", content);
        document.querySelector(destination).innerHTML = "";
        document.querySelector(destination).insertAdjacentHTML("beforeend", component);   
    } catch (err) {
        console.log(err);
    }
}

function generateReport(fileNum) {
    if (resp.length === undefined || resp.length === 0) {
        toasts.report.color = "red";
        toasts.report.header = "No results!";
        toast(toasts.report);
        return render(report,`
            <loading> <span> No results </span> </loading>
        `, "grid");
    }
    render(report, `
    ${document.querySelector("grid").getElementsByTagName("article").length} images fetched </br>
    ${fileNum} files downloaded
    `, "report");
}