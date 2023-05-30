const accordionItem= $('.accordion-item');



//Burada tek yapmamız gereken sorulara basıldığında display:none olarak ayarladığımız açıklama kısmını göstermek
//Bunun için slideToggle kullanabiliriz tam biçilmiş kaftan bu animasyonlar için.
//Hatırlarsan biz parent() kodu ile ebeveyn divi bulabiliyorduk.
//Aynı şekilde .find() kodu ile de ebeveyne basıldığında çocukları bulmak için kullanabilirsin.

accordionItem.click(function (e) {
    $(e.currentTarget).find('.accordion-description-container').slideToggle(500);
})