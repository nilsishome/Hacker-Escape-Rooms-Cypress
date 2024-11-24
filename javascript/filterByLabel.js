export function filterByLabel() {
    // Find all filter buttons from the dom.
    const filterButtons = document.querySelectorAll(".filter__tag button");
    

    //Array with all active labels that the user has clicked.
    let selectedLabels = [];


    //When the user clicks on our labels, the filter runs.
    filterButtons.forEach(filterButton => {
        filterButton.addEventListener("click", (e) => {
            //Prevents the site from reloading when the labels buttons are clicked.
            e.preventDefault();
            
            //Added a toggle to style with SCSS when the label is "active"
            filterButton.classList.toggle("active");
            //Gets the label on the specific label that has been clicked and makes it lowercase.
            const clickedLabel = filterButton.textContent.toLocaleLowerCase();
            //checks to see if this label is already chosen
            const labelsSelected = selectedLabels.includes(clickedLabel);

            if (!labelsSelected) {
                //If the label is not in the list, it gets added to the selectedLabels array.
                selectedLabels.push(clickedLabel);
                console.log(selectedLabels)
            } else {
                //If the label is in the array, it gets removed from the array.
                selectedLabels = selectedLabels.filter(label => label !== clickedLabel);
                console.log(selectedLabels)
            }

            const allChallenges = document.querySelectorAll(".challenges__room");

            allChallenges.forEach(challenge => {
                const challengesLabels = challenge.dataset.labels.split(",");
                console.log("Labels for this room", challengesLabels);

                if (selectedLabels.length === 0) {
                    challenge.style.display = "";
                    return;
                }
                console.log(selectedLabels);
            })
        })
    })
}