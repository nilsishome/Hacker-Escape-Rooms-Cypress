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



//JS for the modal, basic for closing to be able to work 
const Bookroom_modal = document.querySelector(".Bookroom_modal");
const overlay = document.querySelector(".overlay");

// Close the modal when clicking on the overlay
overlay.addEventListener("click", closeMenu);

function closeMenu() {
   Bookroom_modal.style.display = "none"; // Hides the modal
   overlay.style.display="none"; // hides the overlay
}
