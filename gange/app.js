const lagTabell = document.querySelector("#gange")
const divSvar = document.querySelector("#svar")



lagTabell.onclick = function() {

    let list = [
    ];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            list.push([]);
            list[j].push(j*i);
        }
    }


    divSvar.innerHTML = list;
    console.log(list);
}

