const dragcontainer = document.querySelector("display-wrapper");
const draggableImage = document.querySelector("display-wrapper img");

let dragActive = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;
let xPos;
let yPos;

dragcontainer.addEventListener("mousedown", dragStart, false);
dragcontainer.addEventListener("mouseup", dragEnd, false);
dragcontainer.addEventListener("mousemove", drag, false);

function dragStart(e) {
    if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
    } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
    }

    if (e.target === draggableImage) {
        dragActive = true;
    }
}

function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    dragActive = false;
}

function drag(e) {
    if (dragActive) {
        // setPointer("dragging");
        imageDisplayer.style.transition = "";
        e.preventDefault();

        if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, draggableImage);
    } else {
        // setPointer("default");
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = `scale(${displayerScale})` + "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}
/*
function setPointer(pointer) {
    switch (pointer) {
    case "dragging":
        imageDisplayer.style.pointer = "none";
        break;
    
    default:
        imageDisplayer.style.pointer = "grab";
        break;
    }
} */