const toasts = {};

async function toast(parameters) {
    const id = Math.floor(Math.random() * 12048);

    document.querySelector("toasts").insertAdjacentHTML("beforeend", `
        <toast toastId="${id}" name="${parameters.name}"> 
            <h1> ${parameters.header} </h1>
            <p> ${parameters.message} </p>
        </toast>
    `);
    if (parameters.background) {
        document.querySelector(`[toastId="${id}"]`).style.background = parameters.background;
    }
    await new Promise(resolve => setTimeout(resolve, parameters.timeOut));
    document.querySelector(`[name="${parameters.name}"]`).remove();
}
