import { applyFilters } from "./allFilter.js";

export function filterByLabel(data) {
  const filterTag = document.querySelector(".filter__tag");
  if (!filterTag) return; //If there is no filtertags, exit.
  const buttons = filterTag.querySelectorAll("button");
  buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
          e.preventDefault();
          button.classList.toggle("active");
          const buttonText = button.innerText.toLowerCase();
          if (data.labels.includes(buttonText)) {
              const index = data.labels.indexOf(buttonText);
              if (index > -1) { // only splice array when item is found
                    data.labels.splice(index, 1); // 2nd parameter means remove one item only
              }
          } else {
              data.labels.push(buttonText);
          }
          applyFilters(data);
          console.log(data);
        })
    })
}
