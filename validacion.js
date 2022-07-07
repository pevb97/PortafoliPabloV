//Haz tú validación en javascript acá
var menuDesli = document.querySelector(".menu__desli");
var menuNav = document.querySelector(".menu__nav");

var menuDeslizado = false;
menuDesli.addEventListener("click", function () {
    menuDeslizado = !menuDeslizado;
    if (menuDeslizado) {
        menuNav.classList.add("menu__nav__deslizado");
        menuDesli.src = "assets/bx-x.svg";
    }else{
        menuNav.classList.remove("menu__nav__deslizado");
        menuDesli.src = "assets/bx-menu.svg";
    }
    
});