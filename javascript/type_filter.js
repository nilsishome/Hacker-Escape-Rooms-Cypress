export default function filterType() {
    const onlineChallenges = document.querySelector("#online-challenges");

    // Checking if filter button can be worked with
    if (onlineChallenges) {
        // Add event listener on online challenges filter button
        onlineChallenges.addEventListener("change", () => {
            // put all DOM elements with class challenges__room in one variable
            const allChallenges = document.querySelectorAll(".challenges__room");
            // Go through that variable
            allChallenges.forEach((challenge) => {
                // If button has been clicked already this will change 
                // back all the on site elements to show again
                if (challenge.style.display === "none") {
                    challenge.style.display = "";
                } 
                // Else "hide" the onsite cards
                else {
                    if (challenge.getAttribute("id") === "online") {
                        challenge.style.display = "";
                    } else {
                        challenge.style.display = 'none';
                    }
                }
            })
        });
    }
};