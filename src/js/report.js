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
    if (resp.post.length === undefined || resp.post.length === 0) {
        toasts.report.color = "red";
        toasts.report.header = "No results!";
        toast(toasts.report);
        return render(report,`
            <loading> <span> No results </span> </loading>
        `, "grid");
    }
    render(report, `
    ${document.querySelector("grid").getElementsByTagName("article").length} images fetched </br>
    ${fileNum} files downloaded </br>
    Currently downloading ${downloadArray.length} file(s)
    `, "report");
}