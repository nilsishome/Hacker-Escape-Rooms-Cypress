export function navigation() {
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
  }

  function hideMenu() {
    navigationMenu.classList.remove("overlay");
    overlayBlur.classList.remove("active");
    document.body.style.overflow = "";
  }

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
