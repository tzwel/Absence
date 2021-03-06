const toasts = {};

async function toast(parameters) {
    const id = Math.floor(Math.random() * 12048);

    document.querySelector("toasts").insertAdjacentHTML("afterbegin", `
        <toast toastId="${id}" name="${parameters.name}"> 
            <h1> ${parameters.header} </h1>
            <p> ${parameters.message} </p>
        </toast>
    `);

    const thisToast = document.querySelector(`[toastId="${id}"]`);
    if (parameters.color) {
        thisToast.style.color = parameters.color;
        thisToast.style.borderColor = parameters.color;
    }
    await new Promise(resolve => setTimeout(resolve, parameters.timeOut));
    thisToast.classList.add("closing");
    await new Promise(resolve => setTimeout(resolve, 1000));
    thisToast.style.height = "0";
    thisToast.style.margin = "0";
    thisToast.style.padding = "0";
    await new Promise(resolve => setTimeout(resolve, 1000));
    thisToast.remove();
}