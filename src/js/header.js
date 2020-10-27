export let $header = $(window).scroll(function () {
    const scroll = $(window).scrollTop();    

    if (scroll > 0) {
        $(".header").removeClass(
            'header--height');
        $(".header").addClass(
            'header--scroll');

    }
    else {
        $(".header").removeClass(
            'header--scroll');
        $(".header").addClass(
            'header--height')
    } 
});