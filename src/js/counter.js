require ('jq-numscroll/src/js/core')



$(document).ready(function () {

    $(".numscroller").numScroll();

    // let show1 = true; 
    // let show2 = true;    
    // $(window).on("scroll load resize", function () {
    //     if (!show1) return false; 
    //     let w_top = $(window).scrollTop(); 
    //     let e_top = $(".success-territory__num").offset().top; 
    //     if (w_top + 900 >= e_top) {
    //         $('.num-count').css('opacity', '1');
    //         $('.num-count').spincrement({
    //                 thousandSeparator: "",
    //                 duration: 1800
    //             });
    //         show1 = false;
    //     }
    // });
    
    // $(window).on("scroll load resize", function () {
    //     if (!show2) return false; 
    //     let w_top = $(window).scrollTop(); 
    //     let a_top = $(".success-content__num").offset().top; 
    //     if (w_top + 900 >= a_top) {
    //         $('.success-content__num').css('opacity', '1');
    //         $('.success-content__num').spincrement({
    //                 thousandSeparator: "",
    //                 duration: 1800
    //             });
    //         show2 = false;
    //     }
    // });
});
