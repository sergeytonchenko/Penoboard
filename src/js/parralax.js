$(window).scroll(function () {
    const scroll = $(window).scrollTop();
    const offset = $(".success-wrap").offset().top;

    console.log(offset-200);
    console.log(scroll);
    console.log((offset-500)/scroll);

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