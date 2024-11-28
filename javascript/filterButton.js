
const filterModalButton = document.querySelector(".filter__button");
const filterForm = document.querySelector(".filter__form");
const filterFormCloseButton = document.querySelector(".filter__form__close-button");


filterModalButton.addEventListener("click", showFilterModal);
filterFormCloseButton.addEventListener("click", closeFilterModal);


function showFilterModal() {
    filterForm.style.display = "block";
    filterModalButton.style.display = "none";
 }
 
 function closeFilterModal() {
    filterForm.style.display = "none";
    filterModalButton.style.display = "";
 }