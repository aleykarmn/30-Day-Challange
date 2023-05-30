const acordionItem = $(".accordion-item")

acordionItem.click(function (e){
    $(e.currentTarget).find('.accordion-description-container').slideToggle(500)
})