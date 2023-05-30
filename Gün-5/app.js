const izinVer = $(".allow-btn")
const engelle = $(".block-btn")
const allowSee = $(".allow-div-see")
const blockSee = $(".block-div-see")
const hepsi =$(".hepsi")

izinVer.click(function (){
    hepsi.slideUp(500);
    allowSee.show(1000);
})

engelle.click(function (){
    hepsi.slideUp(500);
    blockSee.show(1000);
})