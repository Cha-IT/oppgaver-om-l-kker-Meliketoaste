const lagTabell = document.querySelector("#even")
const btnOdd = document.querySelector("#odd")
const divSvar = document.querySelector("#svar")

lagTabell.onclick = function() {
    let i = 0;
    let list = [];
    divSvar.innerHTML = list;
    console.log(list);
}

