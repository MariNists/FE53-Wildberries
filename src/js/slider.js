import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export const swiper = new Swiper('.swiper-container', {
    // Optional: Configuration options here
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev', 
    
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: { 
    delay: 5000,
    },
});
