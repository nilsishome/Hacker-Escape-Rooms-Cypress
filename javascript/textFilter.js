//Code to filter with user input text.

function filterByText() {
  const filter__text = document.querySelector("#filter__text");

  if (filter__text) {
    filter__text.addEventListener("input", () => {
      const searchText = filter__text.value.toLowerCase();
      const allRooms = document.querySelectorAll(".challenges__room");
    });
  }
}
