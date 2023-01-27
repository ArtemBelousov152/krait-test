import Swiper, { Pagination } from "swiper";

Swiper.use([Pagination])

const saleSlider = () => {

    //Слайдер для блока распродаж
    const priceSlider = new Swiper('.sale__slider', {
        slidesPerView: '4',
        spaceBetween: 20,
    })

    document.querySelector(".sale__arrow_left").addEventListener('click', () => {
        priceSlider.slidePrev(600);

    })
    document.querySelector(".sale__arrow_right").addEventListener('click', () => {
        priceSlider.slideNext(600);
    })

    //Слайдер для картинок в карточках
    const imgSlider = new Swiper('.sale__img', {
        slidesPerView: 'auto',
        hashNavigation: {
            watchState: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    })
}

export default saleSlider;