$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    let offset = $(".success-wrap").offset().top;

    $(".success-penoboard").css({
        bottom: ((scroll/15)-5) + "%",
        opacity: (offset-500)/scroll        
    })

    $(".success-balls--1").css({
        bottom: ((scroll/20)-100) + "%"
    })

    $(".success-balls--2").css({
        bottom: ((scroll/10)-100) + "%"
    })

    $(".success-balls--3").css({
        left: -scroll/60 + "%",
        top: scroll/40 + "%",
    })

    $(".success-balls--4").css({
        right: -scroll/60 + "%",
        top: scroll/40 + "%",
    })
    
})