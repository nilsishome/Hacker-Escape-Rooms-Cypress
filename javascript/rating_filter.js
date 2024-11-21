// Creates a function that filters the room cards by rating
export async function filterByRating() {

  const firstRating = document.querySelector(".filter__first-rate");
  const secondRating = document.querySelector(".filter__second-rate");

  // rateInput is the absolute first radiobox input on the page
  const rateInput = document.querySelectorAll("input[type='radio']");

  // For loop that iterates through ALL starInputs, instead of only the first one
  for (let i = 0; i < rateInput.length; i++) {
    rateInput[i].addEventListener("input", () => {
      // firstRate is the value of the first rateInput
      const firstRate = firstRating.querySelector(
        "input[type='radio']:checked"
      );
      // secondRate is the value of the second rateInput
      const secondRate = secondRating.querySelector(
        "input[type='radio']:checked"
      );
      // allChallenges is representing each room
      const allChallenges = document.querySelectorAll(".challenges__room");
      
      // Conditional statement that makes sure the starInputs are active
      if (firstRate && secondRate) {
        allChallenges.forEach((challenge) => {

          // Targets the rating value of the cards rating
          const rating = challenge.rating;

          // Another conditional statement that makes sure the rateInput values are correct
          if (
            rating >= firstRate.value &&
            rating <= secondRate.value
          ) {
            challenge.style.display = "";
          } else {
            challenge.style.display = "none";
          }
        });
      }
    });
  }
}

// This function resets the checkboxes and radioboxes in probably all browsers 
// (I've only seen this 'problem in Firefox')
export function resetForm() {
  const filterForm = document.querySelector(".filter__form");
  filterForm.reset();
}