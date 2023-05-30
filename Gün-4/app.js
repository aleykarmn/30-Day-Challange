const buton = $(".buton2")
const profil = $(".profilee")
const mesajKutusu = $(".mesaj-bolum")
const mesajKutusuGoster = $(".mesaj-kutusu-goster")

buton.click(function (){
    profil.slideUp(600);
    mesajKutusu.show(500);
    mesajKutusuGoster.show(500);
});