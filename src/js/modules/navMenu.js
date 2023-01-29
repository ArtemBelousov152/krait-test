const navMenu = () => {
    const navBtn = document.querySelector('.header__navBtn');
    const navCloseBtn = document.querySelector('.header__close_nav');
    const nav = document.querySelector('.header__navMobile');
    
    const menuBtn = document.querySelector('.header__menuBtn');
    const menuCloseBtn = document.querySelector('.header__close_menu')
    const menu = document.querySelector('.header__menu');

    // Логика для откытия меню
    menuBtn.addEventListener('click', () => {
        menu.classList.add('header__menu_active');
    })

    menuCloseBtn.addEventListener('click', () => {
        menu.classList.remove('header__menu_active');
    })

    // Логика для открытия меню навигации
    navBtn.addEventListener('click', () => {
        nav.classList.add('header__navMobile_active');
    })

    navCloseBtn.addEventListener('click', () => {
        nav.classList.remove('header__navMobile_active');
    })
}

export default navMenu;