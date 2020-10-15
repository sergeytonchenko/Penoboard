$(document).ready(function () {

    let show = true;
    
    $(window).on("scroll load resize", function () {
        if (!show) return false; 
        let w_top = $(window).scrollTop(); 
        let e_top = $(".success-territory__num").offset().top; 
        if (w_top + 900 >= e_top) {
            $('.success-territory__num').css('opacity', '1');
            $('.success-territory__num').spincrement({
                    thousandSeparator: "",
                    duration: 2500
                });
            show = false;
        }
    });

});