$(window).scroll(function () {
    const scroll = $(window).scrollTop();    

    if (scroll > 0) {
        $(".header").css({
            height: "50px"         
        })
    }
    else {
        $(".header").css({
            height: "76px"         
        })
    } 
})

//fullscreen
const elem = document.querySelector('.info-btn');

elem.onclick = function () {
    document.documentElement.requestFullscreen();
}    

