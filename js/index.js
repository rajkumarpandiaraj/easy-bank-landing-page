const hamMenu  = document.getElementById('ham-menu');
const menuClose  = document.getElementById('menu-close');
const menuHead = document.querySelector('.menu-head');




hamMenu.addEventListener('click', () => {
    menuHead.style.animationName = `dropDown` ;
    hamMenu.style.display = `none` ;
    menuClose.style.display = `block` ;
});

menuClose.addEventListener('click', () => {
    menuHead.style.animationName = `dropUp` ;
    hamMenu.style.display = `block` ;
    menuClose.style.display = `none` ;
});