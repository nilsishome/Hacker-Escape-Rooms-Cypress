//JS for the modal, basic for closing to be able to work 
const Bookroom_modal = document.querySelector(".Bookroom_modal");
const overlay = document.querySelector(".overlay");
const filterModalButton = document.querySelector(".filter__button");
const filterForm = document.querySelector(".filter__form");
const filterFormCloseButton = document.querySelector(".filter__form__close-button");

// Close the modal when clicking on the overlay
overlay.addEventListener("click", closeMenu);
filterModalButton.addEventListener("click", showFilterModal);
filterFormCloseButton.addEventListener("click", closeFilterModal);

function closeMenu() {
   Bookroom_modal.style.display = "none"; // Hides the modal
   overlay.style.display="none"; // hides the overlay
}

function showFilterModal() {
   filterForm.style.display = "block";
   filterModalButton.style.display = "none";
}

function closeFilterModal() {
   filterForm.style.display = "none";
   filterModalButton.style.display = "";
}