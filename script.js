const body = document.querySelector("body")

const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const mashsalove = document.querySelector("#mashalove")
const nemasha = document.querySelector("#nemasha")



function weddingmasha() {
    mashsalove.style.display = "block"
    nemasha.style.display = "none"
}

function nemoyalubov() {
    nemasha.style.display = "block"
    mashsalove.style.display = "none"

}

btn1.addEventListener("click", weddingmasha)
btn2.addEventListener("click", nemoyalubov)
