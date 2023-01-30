import sliderPromo from "./modules/sliderPromo";
import saleSlider from "./modules/saleSlider";
import citiesMenu from "./modules/citiesMenu";
import ringCards from "./modules/ringCards";
import navMenu from "./modules/navMenu";
import activeHandler from "./modules/activeHandler";

window.addEventListener('DOMContentLoaded', () => {

    sliderPromo();
    saleSlider();
    citiesMenu();
    ringCards();
    navMenu();
    activeHandler('.day__size_item', 'btn__size_active');
    activeHandler('.sale__btn', 'btn__oval_active');
})