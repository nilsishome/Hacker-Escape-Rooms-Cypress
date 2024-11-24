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
            //Gets the label on the specific label that has been clicked.
            const clickedLabel = filterButton.textContent.toLocaleLowerCase();
            console.log(clickedLabel);
        })
    })
}