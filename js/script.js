document.addEventListener('DOMContentLoaded', () => {

    //select
    function select(selectActive) {
        const selects = document.querySelectorAll('[data-select]');
        selects.forEach((select, index) => {
            const options = select.querySelectorAll('[data-option]');
            select.addEventListener('click', () => {
                selects.forEach((select1, index1) => {
                    if (index != index1) {
                        select1.classList.remove(selectActive);
                        select1.lastElementChild.style.maxHeight = '0';
                    }
                });
                if (select.classList.contains(selectActive)) {
                    select.classList.remove(selectActive);
                    select.lastElementChild.style.maxHeight = '0';
                } else {
                    select.classList.add(selectActive);
                    select.lastElementChild.style.maxHeight = `${100 * options.length}%`;
                }
            });
            options.forEach(option => {
                option.addEventListener('click', () => {
                    select.firstElementChild.textContent = option.textContent;
                });
            });
        });
        document.addEventListener('click', (e) => {
            if (!e.target.hasAttribute('data-select') && e.target.parentElement && !e.target.parentElement.hasAttribute('data-select')) {
                selects.forEach(select => {
                    select.classList.remove(selectActive);
                    select.lastElementChild.style.maxHeight = '0';
                });
            }
        });
    }

    select('calc__select--active');

    // map

        // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [58.596304, 49.671203],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14
        });

        myMap.behaviors.disable('scrollZoom');

        myMap.geoObjects
        .add(new ymaps.Placemark([58.596304, 49.671203], {
            balloonContent: 'ул. Орловская, д. 51'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#735184'
        }));
    }


});