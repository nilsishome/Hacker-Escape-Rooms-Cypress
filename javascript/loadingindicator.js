export function showLoadingIndicator() {
    let loadingIndicator = document.getElementById("loading-indicator");
    if (!loadingIndicator) {
        loadingIndicator = document.createElement("div");
        loadingIndicator.id = "loading-indicator";
       
        document.body.appendChild(loadingIndicator);
    }
}

export function hideLoadingIndicator() {
    const loadingIndicator = document.getElementById("loading-indicator");
    if (loadingIndicator) {
        loadingIndicator.remove();
    }
}