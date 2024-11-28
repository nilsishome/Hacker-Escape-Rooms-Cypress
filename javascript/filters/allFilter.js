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

    filterType(data);
    filterByLabel(data);
    filterByRating(data);
    filterByText(data);
    resetForm();
};

export function applyFilters(types) {
    const allChallenges = document.querySelectorAll(".challenges__room");

    allChallenges.forEach(room => {
        room.style.display = "none";
    });

    if (types.length === 0) {
        allChallenges.forEach(room => {
            room.style.display = "";
        });
        return;
    }

    const filteredRooms = Array.from(allChallenges).filter(room => 
        types.includes(room.getAttribute("id"))
    );
    filteredRooms.forEach(room => {
        room.style.display = "";
    })
}