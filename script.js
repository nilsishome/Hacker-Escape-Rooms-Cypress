//variables.
const menuButton = document.querySelector(".header__menu-button");
const closeButton = document.querySelector(".header__navigation-close");
const navigationMenu = document.querySelector(".header__navigation");
const overlayBlur = document.querySelector(".overlay__blur");

//event-listeners.
menuButton.addEventListener("click", showMenu);
closeButton.addEventListener("click", hideMenu);
overlayBlur.addEventListener("click", hideMenu);

//Menu functions.
function showMenu() {
    navigationMenu.classList.add("overlay");
    overlayBlur.classList.add("active");
    document.body.style.overflow = "hidden";
};

function hideMenu() {
    navigationMenu.classList.remove("overlay");
    overlayBlur.classList.remove("active");
    document.body.style.overflow = "";
};

