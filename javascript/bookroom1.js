//Variables.
const closeBooking1 = document.querySelector(".modal__button_close");
const windowBooking1 = document.querySelector(".modal")
const inputDate = document.querySelector(".modal__input")
const searchTimesBtn = document.querySelector(".modal__button");
//Event-listners.
closeBooking1.addEventListener("click", hideWindow);

//Menu-functions.
function hideWindow() {
windowBooking1.setAttribute("id","hidden")
}

searchTimesBtn.addEventListener("click", getDate);

let inputChallenge = 1 // 

//Takes date and gets slot data 
function getDate() {
console.log(inputDate.value)
if (inputDate.value==""){
    console.log("No date selected") // Error message if no date is selected
    return
}

// Collect data from api
let apiCall = `https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=${inputDate.value}&challenge=${inputChallenge}`;

// Checks the API if data is okay
fetch(apiCall)
.then(response => {
    if (!response.ok) {
        throw new Error("Network response was not ok"); // Error message if bad data
    }
    return response.json(); // Parse data from response
})
.then(data => {
    console.log(data);  // Handle the data from the API
    data.slots.forEach(slot => {
    console.log(slot)}) // Output available slots on that date
})
.catch(error => {
    console.error("There was a problem with the fetch operation", error);
})

};



