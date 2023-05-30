const buyOnline = $(".btn-1");
const containerGizle = $(".container-gizle");
const uyariKutusu = $(".uyari-kutusu");
const yesBtn = $(".yes-btn");
const noBtn = $(".no-btn")
const siparisOlustu = $(".siparis-olustu-div")

buyOnline.click(function (){
    containerGizle.hide(100)
    uyariKutusu.show(500)
});

yesBtn.click(function (){
    siparisOlustu.show(500)
    uyariKutusu.hide(500)
});

noBtn.click(function (){
    containerGizle.show(500)
    uyariKutusu.hide(500)
})