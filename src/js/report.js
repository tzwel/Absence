let content = "dynamicContent";

const report = `<report> ${content} </report>`;

function render(component, content, destination) {
    
    component = component.replace("dynamicContent", content);
    document.querySelector(destination).insertAdjacentHTML("beforeend", component);
}

function generateReport() {
    if (resp.length === undefined || resp.length === 0) {
        toasts.report.color = "red";
        toasts.report.header = "No results!";
        toast(toasts.report);
        return render(report, "No results", "grid");
    }
    render(report, `${document.querySelector("grid").getElementsByTagName("article").length} images fetched`, "grid");
}