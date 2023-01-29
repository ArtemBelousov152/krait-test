
const citiesMenu = () => {
    const dropDown = document.querySelector('.header__dropDown')
    const citiesBtn = document.querySelector('.header__city')
    const arrow = document.querySelector('.header__smallArrow');

    document.addEventListener('click', (e) => {
        const target = e.target;
        const its_dropDown = target == dropDown || dropDown.contains(target);
        const its_citiesBtn = target.parentNode == citiesBtn;
        const menu_is_active = dropDown.classList.contains('dropDown_active');

        if (its_citiesBtn && !menu_is_active) {
            dropDown.classList.add('dropDown_active');
            arrow.classList.add('header__smallArrow_active');

        } else if (its_citiesBtn && menu_is_active) {
            dropDown.classList.remove('dropDown_active');
            arrow.classList.remove('header__smallArrow_active');

        } else if (!its_dropDown && !its_citiesBtn && menu_is_active) {
            dropDown.classList.remove('dropDown_active');
            arrow.classList.remove('header__smallArrow_active');
        }
    })
}

export default citiesMenu;