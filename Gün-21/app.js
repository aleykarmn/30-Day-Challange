
/*function tikla (){

}

let b =document.querySelector(".btn")

b.addEventListener("click",function (){

    tikla ()

    alert("Başarıyla Üye Oldunuz!")
})*/


const emailInput = document.querySelector(".email-kutu");
const passwordInput = document.querySelector(".sifre-kutu");
const kayitOl = document.querySelector(".kayit-btn");
const emailSakla = document.querySelector(".mail-error");

let inputValue ="";
const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


emailInput.addEventListener('blur',function (){
    inputValue = emailInput.value;
    console.log("input yazısı=",inputValue);

    if (emailRegex.test(inputValue)){
        emailSakla.classList.add('sakla');
        emailInput.style.borderColor ="green";
    }else{
        emailSakla.classList.remove ('sakla');
        emailSakla.textContent="Girdiğiniz E-posta adresi hatalı.";
    }
})

