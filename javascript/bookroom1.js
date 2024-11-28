// Create HTML Elements 
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

// Set class names on elements
modalModal.className = "modal";
modalContent.className = "modal__content";
modalTitle.className = "modal__title";
modalText.className = "modal__p-text";
modalDate.className = "modal__p-date";
modalInput.className = "modal__input";
modalButton.className = "modal__button";
modalButtonClose.className = "modal__button_close";

// Sets text on elements
modalTitle.textContent = "Book room";
modalText.textContent = "What date would you like to come?";
modalDate.textContent = "Date";
modalButton.textContent = "Search available times";

// Type and atrributes
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
// const timeOption = document.querySelector("#time_options");

let inputChallenge = null;



// Adds a close button to the first modul
modalButtonClose.addEventListener("click", () => {
    modalModal.setAttribute("id", "hidden");
})



// Book room function
export function bookRoom() {
    const bookRoomButton = document.querySelectorAll(".room__button--onsite");
    bookRoomButton.forEach(button => {
        button.addEventListener("click", () => {
            const roomChallenge = button.closest(".challenges__room") || button.closest(".content__room");
            const roomId = roomChallenge.getAttribute("data-id");
            inputChallenge = roomId; // Set the global variable
            console.log(`Room ID: ${roomId}`);

            const title = roomChallenge.querySelector(".room__heading").textContent;
            const participantsText = roomChallenge.querySelector(".room__participants").textContent;
            const participantOption = document.querySelector("#participants_number");
            const minParticipants = parseInt(participantsText);
            const maxParticipants = parseInt(participantsText.split("-")[1]);

            console.log(minParticipants);
            console.log(maxParticipants);
            console.log(participantsText);

            // Update modal
            modalModal.removeAttribute("id");
            modalTitle.textContent = `Book room "${title}" (step 1)`;

            if (room2Title) {
                room2Title.className = roomTitle.className;
                room2Title.textContent = roomTitle.textContent;
            }

            // Populate participants dropdown
            participantOption.innerHTML = "";
            for (let i = minParticipants; i <= maxParticipants; i++) {
                const option = document.createElement("option");
                option.value = i;
                option.textContent = `${i} participants`;
                participantOption.appendChild(option);
            }
        });
    });
}

// Function to handle date input and fetch available slots
function getDate() {
    if (!modalInput.value) {
        console.log("No date selected");
        alert("No date selected")
        return;
    }

    const apiCall = `https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=${modalInput.value}&challenge=${inputChallenge}`;
    fetch(apiCall)
        .then(response => {
            if (!response.ok) {
                alert("Date has already passed");
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Available slots:", data.slots);

            const event = new CustomEvent("arrayEvent", {
                detail: {
                    message: "Button clicked, sending array!",
                    data: data.slots,
                    id: inputChallenge
                },
            });

            modalModal.setAttribute("id", "hidden");
            document.dispatchEvent(event);

            // Open the modal
            document.querySelector(".overlay").style.display = "initial";
            document.querySelector(".Bookroom_modal").style.display = "flex";
            console.log("Second modal opened");
        })
        .catch(error => {
            console.error("Fetch error:", error);
        });
}

// Add event listener to the modal button
modalButton.addEventListener("click", () => {
    getDate();
});