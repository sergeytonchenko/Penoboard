$(window).scroll(function () {
    const scroll = $(window).scrollTop();

    console.log(scroll);

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
    
})