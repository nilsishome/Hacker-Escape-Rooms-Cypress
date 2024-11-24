export function filterByLabel() {
  // Find all filter buttons from the dom.
  const filterButtons = document.querySelectorAll(".filter__tag button");

  //Array with all active labels that the user has clicked.
  let selectedLabels = [];

  //When the user clicks on our labels, the filter runs.
  filterButtons.forEach((filterButton) => {
    filterButton.addEventListener("click", (e) => {
      //Prevents the site from reloading when the labels buttons are clicked.
      e.preventDefault();

      //Added a toggle to style with SCSS when the label is "active"
      filterButton.classList.toggle("active");
      //Gets the label on the specific label that has been clicked and makes it lowercase.
      const clickedLabel = filterButton.textContent.toLowerCase();
      //checks to see if this label is already chosen
      const labelsSelected = selectedLabels.includes(clickedLabel);

      if (!labelsSelected) {
        //If the label is not in the list, it gets added to the selectedLabels array.
        selectedLabels.push(clickedLabel);
      } else {
        //If the label is in the array, it gets removed from the array.
        selectedLabels = selectedLabels.filter(
          (label) => label !== clickedLabel
        );
      }
      //Get all challenges that are located on challenges.html.
      const allChallenges = document.querySelectorAll(".challenges__room");

      allChallenges.forEach((challenge) => {
        const challengesLabels = challenge.dataset.labels.split(",");
        if (selectedLabels.length === 0) {
          challenge.style.display = "";
          return;
        }

        let showChallenges = true;
        console.log("selected filter to check:" + selectedLabels);

        selectedLabels.forEach((label) => {
          const challengeHasLabel = challengesLabels.includes(label);
          if (!challengeHasLabel) {
            showChallenges = false;
          }
        });

        if (showChallenges) {
          challenge.style.display = "";
        } else {
          challenge.style.display = "none";
        }
      });
    });
  });
}
