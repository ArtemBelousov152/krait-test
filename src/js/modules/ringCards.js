

const ringCards = () => {
    const cards = document.querySelectorAll('.sale__card');

    cards.forEach(item => {
        const anchor = item.querySelector('.sale__content');
        const settings = document.createElement('div');

        settings.classList.add('sale__settings');
        settings.innerHTML = `<div class="sale__setting material">
                                    <div class="sale__setting_text">
                                        Белое золото
                                    </div>
                                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 0.712158L4.23753 3.94969L7.47507 0.712158" stroke="#303030"
                                            stroke-width="2" />
                                    </svg>
                                </div>
                                <div class="sale__setting size">
                                    <div class="sale__setting_text">
                                        Размер: <span>16</span>
                                    </div>
                                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 0.712158L4.23753 3.94969L7.47507 0.712158" stroke="#303030"
                                            stroke-width="2" />
                                    </svg>
                                </div>
                                <div class="sale__setting_dropDown dropDown dropDown_material">
                                    <div class="dropDown__item">
                                        <div class="dropDown_name">Белое золото</div>
                                        <div class="dropDown__mark">
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.29998 7.9L0.56665 4.16667L1.28332 3.45L4.29998 6.46667L10.7 0.0666656L11.4167 0.783333L4.29998 7.9Z"
                                                    fill="black" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="dropDown__item">
                                        <div class="dropDown_name">Желтое золото</div>
                                    </div>
                                    <div class="dropDown__item">
                                        <div class="dropDown_name">Серебро</div>
                                    </div>
                                </div>`

        const materialBtn = settings.querySelector('.material');
        const sizeDrop = settings.querySelector('.size');
        const materialDrop = settings.querySelector('.dropDown_material');

        item.addEventListener('click', (e) => {
            const target = e.target;
            const its_setting = target == materialDrop || materialDrop.contains(target);
            const material_is_active = materialDrop.classList.contains('dropDown_active');
            const its_setting_btn = target == materialBtn || target.parentNode == materialBtn;

            if (its_setting_btn && !material_is_active) {
                materialDrop.classList.add('dropDown_active');

            } else if (its_setting_btn && material_is_active) {
                materialDrop.classList.remove('dropDown_active');

            } else if (!its_setting && !its_setting_btn && material_is_active) {
                materialDrop.classList.remove('dropDown_active');
            }
        })

        document.addEventListener('click', (e) => {

            const target = e.target;
            const its_card = target == item || item.contains(target);
            const menu_is_active = item.classList.contains('sale__card_active');

            if (its_card) {
                item.classList.add('sale__card_active');
                anchor.append(settings);

            } else if (!its_card && menu_is_active) {
                item.classList.remove('sale__card_active');
                anchor.removeChild(settings);
            }
        })
    })
}

export default ringCards;