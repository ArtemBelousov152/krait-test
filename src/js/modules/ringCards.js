

const ringCards = () => {
    const cards = document.querySelectorAll('.sale__card');

    cards.forEach(item => {
        const anchor = item.querySelector('.sale__content');
        const settings = document.createElement('div');
        

        settings.classList.add('sale__settings');
        settings.innerHTML = `<div class="sale__setting">
                            <div class="sale__setting_text">
                                Белое золото
                            </div>
                            <svg width="9" height="6" viewBox="0 0 9 6" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0.712158L4.23753 3.94969L7.47507 0.712158" stroke="#303030"
                                    stroke-width="2" />
                            </svg>
                        </div>
                        <div class="sale__setting">
                            <div class="sale__setting_text">
                                Размер: <span>16</span>
                            </div>
                            <svg width="9" height="6" viewBox="0 0 9 6" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0.712158L4.23753 3.94969L7.47507 0.712158" stroke="#303030"
                                    stroke-width="2" />
                            </svg>
                        </div>`

        item.addEventListener('click', () => {
            item.classList.add('sale__card_active');
            anchor.append(settings);
        })
    })
}

export default ringCards;