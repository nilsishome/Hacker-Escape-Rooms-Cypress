export function navigation() {
  //variables.
  const menuButton = document.querySelector(".header__menu-button");
  const closeButton = document.querySelector(".header__navigation-close");
  const navigationMenu = document.querySelector(".header__navigation");
  const overlayBlur = document.querySelector(".overlay__blur");
  const modalButtonClose = document.querySelector("#modal1__button_close");
  const modalButtonClose2 = document.querySelector("#modal2__button_close");
  const modalModal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal__content");
  const bookRoomModal = document.querySelector(".Bookroom_modal");
  const overlay = document.querySelector(".overlay");

  //event-listeners.
  menuButton.addEventListener("click", showMenu);
  closeButton.addEventListener("click", hideMenu);
  overlayBlur.addEventListener("click", hideMenu);

  //Menu function overlay for mobile menu.
  function showMenu() {
    navigationMenu.classList.add("overlay");
    overlayBlur.classList.add("active");
    document.body.style.overflow = "hidden";
  }
  //Close the overlay on mobile.
  function hideMenu() {
    navigationMenu.classList.remove("overlay");
    overlayBlur.classList.remove("active");
    document.body.style.overflow = "";
  }
  //Navigation for closing the booking modal.
  modalButtonClose.addEventListener("click", () => {
    modalModal.setAttribute("id", "hidden");
    modalContent.setAttribute("id", "hidden");
  });
  modalButtonClose2.addEventListener("click", () => {
    bookRoomModal.style.display = "none";
    overlay.style.display = "none";
  });

  function filterModalNavigation() {
    const filterModalButton = document.querySelector(".filter__button");
    const filterForm = document.querySelector(".filter__form");
    const filterFormCloseButton = document.querySelector(
      ".filter__form__close-button"
    );

    if (filterModalButton && filterForm && filterFormCloseButton) {
      filterModalButton.addEventListener("click", showFilterModal);
      filterFormCloseButton.addEventListener("click", closeFilterModal);
    }
    function showFilterModal() {
      filterForm.style.display = "block";
      filterModalButton.style.display = "none";
    }
    function closeFilterModal() {
      filterForm.style.display = "none";
      filterModalButton.style.display = "";
    }
  }
  filterModalNavigation();

  // Closes booking modal step 2, when clicking on the overlay outside of the modal.
  //JS for the modal, basic for closing to be able to work
  document.addEventListener("DOMContentLoaded", () => {
    const overlay1 = modalModal;
    const overlay2 = overlay;
    if (overlay1) {
      overlay1.addEventListener("click", closeMenu);
    }
    if (overlay2) {
      overlay2.addEventListener("click", closeMenu);
    }

    function closeMenu() {
      const bookRoomModal1 = modalContent;
      const bookRoomModal2 = bookRoomModal;
      // These are two different methods to reach the same desired outcome
      // It is because the functionality slightly differs from the first two bookmodals
      if (bookRoomModal1) {
        bookRoomModal1.setAttribute("id", "hidden");
        overlay1.setAttribute("id", "hidden");
      }
      if (bookRoomModal2) {
        bookRoomModal2.style.display = "none";
        overlay2.style.display = "none";
      }
    }
  });

  //Getting all the buttons on index.html
  const indexButtonNavigation = document.querySelectorAll(
    ".introduction__button--online, .content__navigation-link, .introduction__button--onsite, .content__navigation-button, .play__button--book, .play__button--challenges"
  );
  //Getting logo and title to navigate to "Homepage"
  const headerNavigation = document.querySelectorAll(
    ".header__logo, .header__title"
  );
  //For each button an eventListener gets added that on click navigates to challenges.html.
  indexButtonNavigation.forEach((button) => {
    if (button) {
      button.addEventListener("click", () => {
        window.location.href = "./challenges.html";
      });
    }
  });
  //foreach to add eventlistener to logo and logotitle and onclick navigate to index.html
  headerNavigation.forEach((logo) => {
    if (logo) {
      logo.addEventListener("click", () => {
        window.location.href = "./index.html";
      });
    }
  });
}
