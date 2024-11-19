// Creates a function that filters the room cards by rating
export async function filterByRating() {
    // Need the rating values from API
    const response = await fetch("https://lernia-sjj-assignments.vercel.app/api/challenges");
    const data = await response.json();

    // firstRate is the value of the first rating
    const firstRating = document.querySelector(".filter__first-rate");
    const firstRate = firstRating.querySelector("input[type='radio']:checked").value;

    // secondRate is the value of the second rating
    const secondRating = document.querySelector(".filter__second-rate");
    const secondRate = secondRating.querySelector("input[type='radio']:checked").value;

    const allChallenges = document.querySelectorAll(".challenges__room");

    if (firstRate && secondRate) {
        // i variable for looping the rating values
        let i = 0;
        allChallenges.forEach((challenge) => {
            // Implement API object inside DOM-elements
            challenge.domObject = data.challenges[i];
            // Make a variable for each rating value in the DOM-elements
            const challengeRating = challenge.domObject.rating;
            console.log(challengeRating);
            i++;
            if (challengeRating >= firstRate && challengeRating <= secondRate) {
                challenge.style.display = "";
            }
            else {
                challenge.style.display = "none";
            }
        });
    }
}