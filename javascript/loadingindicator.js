


document.addEventListener("DOMContentLoaded", () => {
   
 
});

export function showLoadingIndicator() {
    let loadingIndicator = document.getElementById("loadingIndicator");

    if (!loadingIndicator) {
      
        loadingIndicator = document.createElement("div");
        loadingIndicator.id = "loadingIndicator";
        document.body.appendChild(loadingIndicator);
    }

    loadingIndicator.style.display = "flex"; 
}


export function hideLoadingIndicator() {
    const loadingIndicator = document.getElementById("loadingIndicator");
    if (loadingIndicator) {
        loadingIndicator.style.display = "none"; 
    }
}