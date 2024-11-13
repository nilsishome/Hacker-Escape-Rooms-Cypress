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

  roomData.forEach(room => {
    const createRoom = document.createElement("div");
    createRoom.innerHTML = `
    <h2>${room.title}</h2>
    <img src="${room.image}" alt="placeholder"/>
    `;
    challenges__container.appendChild(createRoom);
  })
}
generateRoom();