const card = document.querySelector(".card")
const tikla = document.querySelector(".firs-btn")
const element =document.querySelector(".card")

tikla.addEventListener("click",function (){
    element.classList.remove("sakla");
})

const ikon = document.querySelector(".svg")

ikon.addEventListener("click",function (){
    element.classList.add("sakla");
})

