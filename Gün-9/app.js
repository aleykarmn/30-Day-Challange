const emailInput = $(".email");
const uyeOlBtn = $(".buton")
const emailSakla = $(".mail-error");
const card = $(".card");
const info = $(".info");
const cancelBtn = $(".cancel-btn")

let inputValue ="";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


emailInput.blur(function (){
    inputValue = emailInput.val();
    console.log("İnput yazısı=",inputValue);
    if (emailRegex.test(inputValue)){
        emailSakla.addClass('sakla');
    }else {
        emailSakla.removeClass("sakla");
        emailSakla.text("The Email address you entered is incorrect");
    }
})

uyeOlBtn.click(function (){
    card.hide(500)
    info.fadeIn(500)
})

cancelBtn.click(function (){
    card.fadeIn(500)
    info.hide(500)
})

