// Først henter vi ut alle elementene vi skal bruke fra HTML
const password = document.querySelector("#passwd")
const btnSubmit = document.querySelector("#submit")
const divSvar = document.querySelector("#svar")

let wrongPasswords = 0;

btnSubmit.onclick = function() {
    let output = password.value;
    console.log(output)
    if (output == "car" && wrongPasswords < 3) {

        console.log("Woah")
        divSvar.innerHTML = "Logged in";
    } else if (wrongPasswords < 3) {
        wrongPasswords += 1;

        divSvar.innerHTML = "Wrong password";
    } else {

        divSvar.innerHTML = "Too many wrong passwords";
    }
}
