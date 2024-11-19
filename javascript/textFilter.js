//Code to filter with user input text.

export function filterByText() {
  console.log("filterByText function says HELLO!");
  const searchInput = document.querySelector("#filter__text");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      console.log("This is a test");
    });
  }
}
