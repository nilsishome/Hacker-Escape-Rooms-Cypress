export function navigation() {
  //Getting all the buttons on index.html
  const onlineButton = document.querySelector(".introduction__button--online");
  const onlineButtonTwo = document.querySelector(".content__navigation-link");
  const onsiteButton = document.querySelector(".introduction__button--onsite");
  const onsiteButtonTwo = document.querySelector(".content__navigation-button");
  const bookOnsiteButton = document.querySelector(".play__button--book");
  const allChallengesButton = document.querySelector(
    ".play__button--challenges"
  );

  //Getting logo and title to navigate to "Homepage"
  const headerNavigation = document.querySelectorAll(
    ".header__logo, .header__title"
  );

  //Put all buttons in an array.
  const allButtons = [
    onlineButton,
    onsiteButton,
    bookOnsiteButton,
    allChallengesButton,
    onlineButtonTwo,
    onsiteButtonTwo,
  ];
  //For each button an eventListener gets added that on click navigates to challenges.html.
  allButtons.forEach((button) => {
    if (button) {
      button.addEventListener("click", () => {
        window.location.href = "./challenges.html";
      });
    }
  });

  headerNavigation.forEach((logo) => {
    if (logo) {
      logo.addEventListener("click", () => {
        window.location.href = "./index.html";
      });
    }
  });
}
