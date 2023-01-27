import Swiper, { Pagination } from "swiper";

Swiper.use([Pagination])

const sliderPromo = () => {
    const swiper = new Swiper(".promo__slider", {
        slidesPerView: 'auto',
        hashNavigation: {
            watchState: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    document.querySelector(".promo__left").addEventListener('click', () => {
        swiper.slidePrev(600);

    })
    document.querySelector(".promo__right").addEventListener('click', () => {
        swiper.slideNext(600);
    })
}

export default sliderPromo;

