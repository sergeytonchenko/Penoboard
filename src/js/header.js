$(window).scroll(function () {
    const scroll = $(window).scrollTop();    

    if (scroll > 0) {
        $(".nav-list").css({
            padding: "0.5rem 1rem"         
        })
    }
    else {
        $(".nav-list").css({
            padding: "1.5rem 1rem"         
        })
    }

    

    
})
//fullscreen
const elem = document.querySelector('.info-btn');

elem.onclick = function () {
    document.documentElement.requestFullscreen();
   }    

