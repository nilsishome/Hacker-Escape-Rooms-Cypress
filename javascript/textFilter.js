//Creates an function to be exported to index.js to work as a filter for user input-text.
export function filterByText() {
  //target the filter__text in the filter-modal.
  const searchInput = document.querySelector("#filter__text");
  //If the searchinput was found, the code runs.
  if (searchInput) {
    //added eventlistener that runs everytime the user inputs in the searchfield.
    searchInput.addEventListener("input", () => {
      //Converts the users text to lowercase to avoind problems with upper / lower case from the user.
      const searchText = searchInput.value.toLowerCase();
      //Targets the div that has all the challanges generated inside it.
      const allChallenges = document.querySelectorAll(".challenges__room");

      //ForEach that goes through one room at a time
      allChallenges.forEach((challenge) => {
        //Takes the room__heading & room__info, converts it to lowercase and stores in in the variables below.
        const title = challenge.querySelector(".room__heading").textContent.toLowerCase();
        const description = challenge.querySelector(".room__info").textContent.toLowerCase();

        //If-statement that checks if the searchtext is in either the title OR the description of the room.
        if (title.includes(searchText) || description.includes(searchText)) {
          //If a room has matching text, it gets displayed.
          challenge.style.display = "";
        } else {
          //If a room does NOT have matching text, it wont be displayed.
          challenge.style.display = "none";
        }
      });
    });
  }
}
