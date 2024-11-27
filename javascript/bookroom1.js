//Variables.
const modalContent = document.createElement("div");
const modalModal = document.createElement("div");
const modalText = document.createElement("p");
const modalDate = document.createElement("p");
const modalSection = document.createElement("section");
const modalTitle = document.createElement("h3");
const modalInput = document.createElement("input");
const modalSpan = document.createElement("span");
const modalButton = document.createElement("button");
const modalButtonClose = document.createElement("button");

// Sets classname on elements
modalModal.className = "modal";
modalContent.className = "modal__content";
// Span content
modalTitle.className = "modal__title";
modalText.className = "modal__p-text";
modalDate.className = "modal__p-date";
modalInput.className = "modal__input";
modalButton.className = "modal__button";
modalButtonClose.className = "modal__button_close";
modalButtonClose.addEventListener("click", () => {
    modalModal.setAttribute("id", "hidden");
})
// Sets text on elements
modalTitle.textContent = "Book room";
modalText.textContent = "What date would you like to come?";
modalDate.textContent = "Date";
modalButton.textContent = "Search available times";

// Input data
modalInput.type = "date";
modalInput.setAttribute("data-date-format", "YYYY MM DD");
modalModal.setAttribute("id", "hidden");

document.body.appendChild(modalSection);
modalSection.appendChild(modalModal);
modalModal.appendChild(modalContent);
modalContent.appendChild(modalSpan);
modalSpan.appendChild(modalTitle);
modalSpan.appendChild(modalText);
modalSpan.appendChild(modalDate);
modalSpan.appendChild(modalInput);
modalSpan.appendChild(modalButton);
modalSpan.appendChild(modalButtonClose);

/* const closeBooking1 = document.querySelector(".modal__button_close");
const windowBooking1 = document.querySelector(".modal");
const inputDate = document.querySelector(".modal__input");
const searchTimesBtn = document.querySelector(".modal__button"); */
const roomTitle = document.querySelector(".modal__title");
const room2Title = document.querySelector(".modal__title2");
const timeOption = document.querySelector("#time_options");

export function bookRoom() {
    const bookRoomButton = document.querySelectorAll(".room__button--onsite");
    bookRoomButton.forEach(button => {
        button.addEventListener("click", () => {
            const roomChallenge = button.closest(".challenges__room") || button.closest(".content__room");
            const title = roomChallenge.querySelector(".room__heading").textContent;
            const participantsText = roomChallenge.querySelector(".room__participants").textContent;
            const participantOption = document.querySelector("#participants_number");
            const minParticipants = parseInt(participantsText);
            const maxParticipants = parseInt(participantsText.split("-")[1]);
            console.log(minParticipants);
            console.log(maxParticipants);
            console.log(participantsText);
            
            modalModal.removeAttribute("id");
            modalTitle.textContent = `Book room "${title}" (step 1)`;

            if(room2Title) {
                room2Title.className = roomTitle.className;
                room2Title.textContent = roomTitle.textContent;
            }

            participantOption.innerHTML = "";

            for(let i = minParticipants; i <= maxParticipants; i++) {
                const option = document.createElement("option");
                option.value = i;
                option.textContent = `${i} participants`;
                participantOption.appendChild(option);
            }
        })
    })
}

 
let inputChallenge = 1 // 

//Takes date and gets slot data
function getDate() {
console.log("input date "+modalInput.value)
console.log("+")

if (modalInput.value==""){
    console.log("No date selected") // Error message if no date is selected
    return slotTimes
}


   //Menu-functions.
   function hideWindow() {
   modalModal.setAttribute("id","hidden")
   }

function sendData(data) {
    const time = data.slots
    console.log("This is sending "+data.slots+"and"+time)
}

// Collect data from api
let apiCall = `https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=${modalInput.value}&challenge=${inputChallenge}`;
let slotTimes = [];
// Checks the API if data is okay
fetch(apiCall)
.then(response => {
    if (!response.ok) {
        throw new Error("Network response was not ok"); // Error message if bad data
    }
    return response.json(); // Parse data from response
})
.then(data => {
    console.log("what is this "+data.slots);  // Handle the data from the API
    slotTimes = data;
    data.slots.forEach(slot => {
    console.log(slot)}) // Output available slots on that date
    slotTimes = data.slots;
    const event = new CustomEvent('arrayEvent', {
        detail: {
            message: 'Button clicked, sending array!',
            data: slotTimes, // Include the array
        },
    });
    hideWindow();
    
    // Dispatch the event on the document
    document.dispatchEvent(event);
   })
.catch(error => {
    console.error("There was a problem with the fetch operation", error);
})
};

modalButton.addEventListener("click",() => {
    getDate()
    document.querySelector(".overlay").style.display = "initial"; 
    document.querySelector(".Bookroom_modal").style.display = "flex";
    console.log("second modal");
    })