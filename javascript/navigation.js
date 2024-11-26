export function navigation() {
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
