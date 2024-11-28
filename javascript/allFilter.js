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
    

    filterType();
    filterByLabel(data);
    filterByRating(data);
    filterByText(data);
    resetForm();
};
