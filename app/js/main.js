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