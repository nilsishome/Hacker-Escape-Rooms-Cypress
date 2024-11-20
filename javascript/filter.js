/*
 *  [ ] Make rateInput.values null or undefined when page reload.
 *  [x] Make rateInput.values go below value = 1.
 */

// Creates a function that filters the room cards by rating
export async function filterByRating() {
  // Need the rating values from API
  const response = await fetch(
    "https://lernia-sjj-assignments.vercel.app/api/challenges"
  );
  const data = await response.json();

  const firstRating = document.querySelector(".filter__first-rate");
  const secondRating = document.querySelector(".filter__second-rate");

  // allChallenges is representing each room, and rateInput is the absolute first radiobox input on the page
  const allChallenges = document.querySelectorAll(".challenges__room");
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
      console.log(firstRate.value + "\n" + secondRate.value);
      
      // Conditional statement that makes sure the starInputs are active
      if (firstRate && secondRate) {
        // j variable for looping the rating values
        let j = 0;
        allChallenges.forEach((challenge) => {
          // Implement API object inside DOM-elements
          challenge.domObject = data.challenges[j];
          // Make a variable for each rating value in the DOM-elements
          const challengeRating = challenge.domObject.rating;
          console.log("HELLOOOO");
          j++;
          // Another conditional statement that makes sure the rateInput values are correct
          if (
            challengeRating >= firstRate.value &&
            challengeRating <= secondRate.value
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