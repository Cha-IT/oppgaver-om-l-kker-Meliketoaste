const btnEven = document.querySelector("#even")
const btnOdd = document.querySelector("#odd")
const divSvar = document.querySelector("#svar")

btnEven.onclick = function() {
    let i = 0;
    let list = [];
    for (i = 1; i < 100; i++) {

        if (i % 2 == 0) {
            list.push(i.toString());
        }
    }
    divSvar.innerHTML = list;
    console.log(list);
}

btnOdd.onclick = function() {
    let list = [];
    for (i = 1; i < 100; i++) {
        if (i % 2 == 1) {
            list.push(i.toString());
        }
    }
    divSvar.innerHTML = list;
    console.log(list);
}
