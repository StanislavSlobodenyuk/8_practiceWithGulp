const iconMenu = document.querySelector(".menu__icon");
const menu = document.querySelector('.menu');
console.log("Hi");
if (iconMenu) {
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('._lock');
        iconMenu.classList.toggle('_active');
        menu.classList.toggle('_active');
    });
}

let contentsStrategies_Slider = new Swiper('.contents-strategies__swiper',{


    // Кнопки пагінації 
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // увімкнути/вимкнути захват та рух слайдів мишею на ПК
    simulateTouch: true,
    // чутливість
    touchRatio: 1,
    // кут роботи властивості
    touchAngle: 45,
    // курсор при переміщені
    grabCursor: true,
    // перемикання при кліку на слайд
    slideToClickedSlide: true,
  

    // управління клавіатурою 
    keyboard: {
        // ввімкнути/вимкнути 
        enabled: true,
        // ввімкнути тільки тоді коли слайдер видно
        onlyInViewport: true,
        // ввімкнути керування за допомогою page up/down
        pageUpDown: true,
    },
    // кількість слайдів для показу читатти там відключення функціоналу якщо слайдів менше чим порібно 
    slidesPerView: 3,
    watchOverflow: true,

    // кількісь слайдів для листання
    slidesPerGroup: 1,

    // відступи між слайдами
    spaceBetween: 32,

    // швидкість перемикання слайдів
    speed: 1000,
    
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        665: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    }
});


const changeTheme = document.querySelector(".menu__button-ChangeTheme");

console.log(changeTheme);
if (changeTheme.length != 0) {
    changeTheme.addEventListener("click", function (elem) {
        document.body.classList.toggle('_green');
        console.log("All work!");                                                                               
    })
} 