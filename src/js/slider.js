import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination } from 'swiper/modules';

export const swiper = new Swiper('.swiper-container', {
    // Optional: Configuration options here
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
