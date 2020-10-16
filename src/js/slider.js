import Swiper, { Autoplay, Pagination } from 'swiper';

Swiper.use([Autoplay, Pagination]);

let swiper = new Swiper('.swiper-container', { 
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
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

