const nameInput = $(".email-uyari");
const name = $(".name")
const emailSakla= $('.mail-error');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isimSoyisimDeneme = $('.isim-1')
let inputValue ="";
const buton = $(".buton");

nameInput.blur(function () {
    inputValue = nameInput.val();
    if(emailRegex.test(inputValue)){
        emailSakla.hide(400);
       /* nameInput.classList.add("green-border-color");*/
    }
    else{
        emailSakla.show(500);
        emailSakla.text("Girdiğiniz Eposta adresiniz hatalı.")
    }
});

buton.click(function (){
    if (isimSoyisimDeneme.val("")){
        alert("Formunuz Başarıyla Gönderildi")
        /* ama varya herseyi anlamıssın en çok buna sevindim süpersin çok heyecanlandım anlatan iyi olunca böyle oluyo
        * bak varya 1 hafta önce nerdeydin şuan nerdesin cidden ya farketmeden gelişiyo insan
        * hafif hafif algoritma da kurmaya başladın süperrrrrrrrrrr sen bana bunu ziple at
        * teşekkür ederim hpcamm attım wp den müsait olunca bakarsınson halini mi attın hayır dur öyle atimynen bir sorunlara bakarım cansınde öyle you too me too  metoo nice to meet y
        * yazklar olsn nicenaptım ki sana very nice    durrr esprimi bölme
        * nice to meet you good bye good bye
        *  */
    }
    else{
        alert("Lütfen boş alanları doldurunuz")

    }
})
