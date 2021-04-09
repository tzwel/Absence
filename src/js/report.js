let content = "dynamicContent";

const report = `<report> ${content} </report>`

function render(component, content, destination) {
  'use strict'
  component = component.replace("dynamicContent", content);
  document.querySelector(destination).insertAdjacentHTML("beforeend", component);
}


function generateReport() {
  render(report, `${document.querySelector("grid").getElementsByTagName("article").length} images loaded`, "grid")
}
