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
import './js/header';
import './js/mmenu';
import './js/formLogin';
import './js/formReg';
import './js/slider';
import './js/parralax';
import './js/map';

let script = document.createElement('script');
script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDoau3_-oGhkZ50NRJ0WBnKYsmn2b_KYRY&callback=initMap&libraries=&v=weekly";
document.body.append(script)


