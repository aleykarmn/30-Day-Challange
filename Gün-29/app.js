const buton =document.querySelector(".btn");
const sayi = document.querySelector(".sayi")


buton.addEventListener("click",function (){
    const spanDegeri = parseInt(sayi.textContent);
    sayi.textContent = spanDegeri + 1;
})



/*
const button = document.querySelector(".button-1");
const pElement = document.querySelector(".p-elementi");

button.addEventListener("click", function() {
    pElement.textContent = "Merhaba Aleyna";
});
*/

/*const degistirButon = $(".button-1");
const pElementi = $(".p-elementi");
degistirButon.click(function() {
    pElementi.text("Merhaba Aleyna");
});*/

/*const degistirButon = $(".button-1");
const pElementi = $(".p-elementi");
const input = $(".yazi-input");
degistirButon.click(function() {
    pElementi.text(input.val());
});*/




