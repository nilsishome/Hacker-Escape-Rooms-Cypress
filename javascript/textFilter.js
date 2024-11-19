//Code to filter with user input text.

export function filterByText() {
  console.log("filterByText function says HELLO!");
  const searchInput = document.querySelector("#filter__text");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const searchText = searchInput.value.toLowerCase();
      const allChallenges = document.querySelectorAll(".challenges__room");
      console.log(searchText, allChallenges)
    });
  }
}
