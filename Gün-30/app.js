const tooltipButon= $('.btn');
const tooltipKutusu= $('.tool-tip');

tooltipButon.hover(
    function (){
        tooltipKutusu.fadeIn(500);
    },
    function (){
        tooltipKutusu.fadeOut(500)
    }
)