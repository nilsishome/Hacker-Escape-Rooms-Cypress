//JS for the modal, basic for closing to be able to work 
const Bookroom_modal = document.querySelector(".Bookroom_modal");
const overlay = document.querySelector(".overlay");

// Close the modal when clicking on the overlay
overlay.addEventListener("click", closeMenu);

function closeMenu() {
   Bookroom_modal.style.display = "none"; // Hides the modal
   overlay.style.display="none"; // hides the overlay
}