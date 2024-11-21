/*
 * [ ] Make rating checkboxes act like radio selection, only one at a time
 */

// Creates a function that filters the room cards by rating
export async function filterByRating() {

  const filterRating = document.querySelector(".filter__rating");
  const firstRating = document.querySelector(".filter__first-rate");
  const secondRating = document.querySelector(".filter__second-rate");

  const rateInput = filterRating.querySelectorAll("input[type='checkbox']");

  rateInput.forEach((input) => {
    input.addEventListener("input", () => {
      // firstRate is the value of the first rateInput
      const firstRate = firstRating.querySelector(
        "input[type='checkbox']:checked"
      );
      // secondRate is the value of the second rateInput
      const secondRate = secondRating.querySelector(
        "input[type='checkbox']:checked"
      );

      function selectOnlyThis(id) {
        for (var i = 1;i <= 4; i++)
        {
            input[i].checked = false;
        }
        document.getElementById(id).checked = true;
      }

      input.addEventListener("click", () => {
        selectOnlyThis(input);
      });

      console.log(firstRate.value + "\n" + secondRate.value);

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
  });
}

// This function resets the checkboxes and radioboxes in probably all browsers 
// (I've only seen this 'problem in Firefox')
export function resetForm() {
  const filterForm = document.querySelector(".filter__form");
  filterForm.reset();
}