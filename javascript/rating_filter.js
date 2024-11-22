// Creates a function that filters the room cards by rating
export async function filterByRating() {
  // These variables are for identifying and using the stars and their values later
  const firstRating = document.querySelector(".filter__first-rate");
  const secondRating = document.querySelector(".filter__second-rate");
  const firstStars = firstRating.querySelectorAll("i");
  const secondStars = secondRating.querySelectorAll("i");

  // The rating values of the two existing starfields
  let firstRate = 0;
  let secondRate = 5;

  // These values make the stars 'disappear' if you double click on them
  // If these values get the same value as the index of the stars, all stars will be removed
  // (it will make sense later)
  let lastFirstStarIdx = -1;
  let lastSecondStarIdx = -1;

  if (firstStars && secondStars) {
    // This is the value and style transformation of the first stars
    firstStars.forEach((star, idx1) => {
      star.addEventListener("click", () => {
        if (lastFirstStarIdx === idx1) {
          firstStars.forEach((star) => {
            star.classList.remove("fa-solid");
            star.classList.add("fa-regular");
          });
          // These values resets the firstStar rating
          firstRate = 0;
          lastFirstStarIdx = -1;
        } else {
          firstRate = idx1 + 1;
          firstStars.forEach((star, idx2) => {
            if (idx1 >= idx2) {
              star.classList.remove("fa-regular");
              star.classList.add("fa-solid");
            } else {
              star.classList.remove("fa-solid");
              star.classList.add("fa-regular");
            }
          });
          lastFirstStarIdx = idx1;
        }
        updateFilter();
      });
    });

    // This is the value and style transformation of the second stars
    secondStars.forEach((star, idx1) => {
      star.addEventListener("click", () => {
        if (lastSecondStarIdx === idx1) {
          secondStars.forEach((star) => {
            star.classList.remove("fa-solid");
            star.classList.add("fa-regular");
          });
          // These values resets the secondStar rating
          secondRate = 5;
          lastSecondStarIdx = -1;
        } else {
          secondRate = idx1 + 1;
          secondStars.forEach((star, idx2) => {
            if (idx1 >= idx2) {
              star.classList.remove("fa-regular");
              star.classList.add("fa-solid");
            } else {
              star.classList.remove("fa-solid");
              star.classList.add("fa-regular");
            }
          });
          lastSecondStarIdx = idx1;
        }
        updateFilter();
      });
    });

    function updateFilter() {
      // allChallenges is representing each room
      const allChallenges = document.querySelectorAll(".challenges__room");

      allChallenges.forEach((challenge) => {
        // Targets the rating value of the cards rating
        const rating = challenge.rating;

        // A conditional statement that makes sure the rateInput values are correct
        if (rating >= firstRate && rating <= secondRate) {
          challenge.style.display = "";
        } else {
          challenge.style.display = "none";
        }
      });
    }
  }
}

// This function resets the checkboxes and radioboxes in probably all browsers
// (I've only seen this 'problem in Firefox')
export function resetForm() {
  const filterForm = document.querySelector(".filter__form");
  filterForm.reset();
}
