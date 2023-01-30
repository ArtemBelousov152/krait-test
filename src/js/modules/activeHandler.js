const activeHandler = (itemList, activeClass) => {
    const sizeList = document.querySelectorAll(itemList)
    const active = activeClass;
    const disableClass = "disable";

    sizeList.forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains(disableClass)) {
                return;
            }

            sizeList.forEach(item => {
                item.classList.remove(active)
            })

            item.classList.add(active);
        })
    })


}

export default activeHandler;