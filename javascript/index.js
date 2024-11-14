//variables.
const menuButton = document.querySelector(".header__menu-button");
const closeButton = document.querySelector(".header__navigation-close");
const navigationMenu = document.querySelector(".header__navigation");
const overlayBlur = document.querySelector(".overlay__blur");

//event-listeners.
menuButton.addEventListener("click", showMenu);
closeButton.addEventListener("click", hideMenu);
overlayBlur.addEventListener("click", hideMenu);

//Menu functions.
function showMenu() {
  navigationMenu.classList.add("overlay");
  overlayBlur.classList.add("active");
  document.body.style.overflow = "hidden";
}

function hideMenu() {
  navigationMenu.classList.remove("overlay");
  overlayBlur.classList.remove("active");
  document.body.style.overflow = "";
}

//Testing out to connect to the API

async function challengesApi() {
  const response = await fetch(
    "https://lernia-sjj-assignments.vercel.app/api/challenges"
  );
  const data = await response.json();
  return data;
}

async function generateRoom() {
  const data = await challengesApi();
  const roomData = data.challenges;
  const challenges__container = document.querySelector("#challenges__container");

  roomData.forEach((room) => {
    //Creating a room container for each room as in the previous HTML.
    const roomContainer = document.createElement("div");
    roomContainer.classList.add("room");
    challenges__container.appendChild(roomContainer);
    //Creating a div for the room inside the container
    const roomDiv = document.createElement("div");
    roomDiv.classList.add("room");
    roomContainer.appendChild(roomDiv);
    //creating an image for the room, using the rooms title as description
    const img = document.createElement("img");
    img.classList.add("room__img");
    img.src = room.image;
    img.alt = `Picture of the room ${room.title}`;
    roomDiv.appendChild(img);

    const heading = document.createElement("h3");
    heading.classList = ("room__heading");
    heading.textContent = (`${room.title} (${room.type})`)
    roomDiv.appendChild(heading);

  })
}
generateRoom();