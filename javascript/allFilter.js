// allFilters.js
import { filterByLabel } from './filterByLabel.js';
import { filterByRating, resetForm } from './rating_filter.js';
import { filterByText } from './textFilter.js';
import { filterType } from './type_filter.js';


export function allFilters() {


    const data = {
        types: [],
        labels: [],
        minRating: 0,
        maxRating: 0,
        text: "",
    };

    document.querySelector("#online-challenges").addEventListener('change', () => {
        if (data.types.includes("online")) {
            const i = data.types.indexOf("online");
            if (i > -1) {
                data.types.splice(i, 1);
            }
        }
        else {
            data.types.push("online");
        }
        console.log(data);
    })

    document.querySelector("#on-site-challenges").addEventListener('change', () => {
        if (data.types.includes("onsite")) {
            const index = data.types.indexOf("onsite");
            if (index > -1) { // only splice array when item is found
                data.types.splice(index, 1); // 2nd parameter means remove one item only
            }
        }
        else {
            data.types.push("onsite");
        }
        console.log(data);
    })


    const filterTag = document.querySelector(".filter__tag");
    const buttons = filterTag.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const buttonText = button.innerText.toLowerCase();
            if (data.labels.includes(buttonText)) {
                const index = data.labels.indexOf(buttonText);
                if (index > -1) { // only splice array when item is found
                    data.labels.splice(index, 1); // 2nd parameter means remove one item only
                }
            }
            else {
                data.labels.push(buttonText);
            }
            console.log(data);
        })
    })

    filterType();
    filterByLabel();
    filterByRating(data);
    filterByText(data);
    resetForm();
};
