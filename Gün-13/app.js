const saveBtn = $(".btn-1")
const saved = $(".hidden")
const container = $(".filter")

saveBtn.click(function (){
    container.fadeOut(500)
    saved.fadeIn(500)
    setTimeout(function (){
        about.addClass("display-flex")
    })
});
