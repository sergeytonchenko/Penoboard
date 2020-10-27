import Swiper, { Autoplay, Pagination } from 'swiper';

Swiper.use([Autoplay, Pagination]);

let swiper = new Swiper('.swiper-container', { 
    // autoplay: {        
    //     delay: 3000,
    //     disableOnInteraction: false,
    //   },
    speed: 1000,
    direction: 'horizontal',
    loop: true, 
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '</span>';
      },
    }, 
  })

