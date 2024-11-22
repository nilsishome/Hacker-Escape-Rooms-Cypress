export function filterByLabel() {
    //takes all filter buttons from .filter__tag.
    const labelButton = document.querySelectorAll(".filter__tag button");
    //Empry array to store the labels that are active
    let activeLabels = [];

    labelButton.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            button.classList.toggle("active");
        })
    })
}