import { applyFilters } from './allFilter.js'

export function filterType(data) {
    const onlineChallenges = document.querySelector("#online-challenges");
    const onsiteChallenges = document.querySelector("#on-site-challenges");

    if (onlineChallenges) {
        onlineChallenges.addEventListener('change', () => {

            if (onlineChallenges.checked) {

                if (!data.types.includes("online")) {
                    data.types.push("online");
                }
            } else {
                const i = data.types.indexOf("online");
                if (i > -1) {
                    data.types.splice(i, 1);
                }
            }
            applyFilters(data)
        })
    }
    if (onsiteChallenges) {
        onsiteChallenges.addEventListener('change', () => {
            if (onsiteChallenges.checked) {
                if (!data.types.includes("onsite")) {
                    data.types.push("onsite");
                }
            } else {
                const i = data.types.indexOf("onsite");
                if (i > -1) {
                    data.types.splice(i, 1);
                }
            }
            applyFilters(data)
        })
    }
}