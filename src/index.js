import 'swiper/swiper-bundle.css';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import '@fancyapps/fancybox/dist/jquery.fancybox.min';
import 'mmenu-js/dist/mmenu.css';
import 'mmenu-js/dist/mmenu';
import 'mburger-css/dist/mburger.css';
import 'mburger-css/dist/mburger';
import './scss/main.scss';
import 'jquery-validation';
import './js/numscroller-1.0'
import {$header} from './js/header';
import {$menu} from './js/mmenu';
import './js/formLogin';
import './js/formReg';
import './js/slider';
import {$parralax} from './js/parralax';
import './js/map';

$(document).ready(function() {
    $menu;
    $parralax;
    $header;
})

//fullscreen
const elem = document.querySelector('.info-btn');

elem.onclick = function () {
    document.documentElement.requestFullscreen();
} 


