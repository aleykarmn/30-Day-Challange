const closeIkon = $(".close-ikon");
const about = $(".about")
const openBtn = $(".open-btn")
const aboutGizle = $(".about-gizle")

openBtn.click(function (){
    about.fadeIn(500)
    openBtn.hide()
    setTimeout(function (){
        about.addClass("display-flex")
    })
})

closeIkon.click(function (){
    about.fadeIn(500)
    openBtn.fadeIn(500)
    setTimeout(function (){
        openBtn.addClass("display-flex")
    })
})

