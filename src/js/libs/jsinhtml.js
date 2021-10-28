let rerender;
(window.DOMContentLoaded = function () {
    let DOM =[];
    const regex = /(?<=\${).+?(?=\})/g;

    for (const i of document.querySelectorAll("body *:not(script)")) {
        if (i.innerHTML.includes("${") && !i.innerHTML.includes("</")) {
            console.log(i);
            DOM.push(i);
        }
    }

    for (const node of DOM) {
        const matches = node.innerHTML.match(regex);
        if (matches !== null) {
            for (const match of matches) {
                const nodeText = node.innerHTML;
                let evaluated = Function(`return ${match}`);
                node.innerHTML = nodeText.replace(`$\{${match}}`, `
                    <active init="${match}"> ${evaluated()} </active>
                `);
            }    
        }
    }

    rerender = function() {
        const actives = document.querySelectorAll("active");

        for (const active of actives) {
            let init = active.getAttribute("init");
            init = init.toString()
                .replace("${" ,"")
                .replace("}" ,"");
            let evaluated = Function(`return ${init}`);
            if (active.innerHTML !== evaluated().toString()) {
                active.innerHTML = evaluated();
            }

        }
    };
    
    setInterval(() => {
        rerender();
    }, 500);
})();