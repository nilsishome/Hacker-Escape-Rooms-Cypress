function generateBookroom2() {
//we create all elements on top of the other code//
const body = document.querySelector("body");
const overlay = document.createElement("div");
const bookroom_modal = document.createElement("section");
const book_modal = document.createElement("div");
const book_form = document.createElement("form"); 
const modal__title2 = document.createElement("h4");
const book_name_label = document.createElement("label");
const book_name_input = document.createElement("input");
const book_email_label = document.createElement("label");
const book_email_input = document.createElement("input");
const book_time_label = document.createElement("label");
const book_time_select = document.createElement("select");
const book_time_option = document.createElement("option");
const participants_label = document.createElement("label");
const participants_select = document.createElement("select");
const participants_number = document.createElement("option");
//the participants numbers are constructed at the end of this function//
const booking_button = document.createElement("button");



//sets classname and attributes on elements//
overlay.className = "overlay";
overlay.setAttribute("id", "hidden");
bookroom_modal.className = "Bookroom_modal";
bookroom_modal.setAttribute("id", "hidden");
book_modal.className = "book_modal";
book_form.className = "book_form";
modal__title2.className = "modal__title2";

book_name_label.className = "book_name";
book_name_label.setAttribute("for", "name-text");
book_name_input.type = "text";
book_name_input.id = "name-text";

book_email_label.className = "book_email";
book_email_label.setAttribute("for", "email-text");
book_email_input.type = "email";
book_email_input.id = "email-text";

book_time_label.className = "book_time";
book_time_label.setAttribute("for", "time_options");
book_time_select.id = "time_options";

participants_label.className = "book_participants";
participants_label.setAttribute("for", "participants_number");
participants_select.id = "participants_number";


booking_button.className = "booking_button";


//text on elements//
modal__title2.textContent = "Book room";
book_name_label.textContent = "Name";
book_email_label.textContent ="Email";
book_time_label.textContent = "What time?";
book_time_option.textContent = "Select time";
//these two values below are making sure 'Select time' is not selectable//
book_time_option.disabled = true;
book_time_option.selected = true;
participants_label.textContent = "How many participants?";
booking_button.textContent = "Submit booking";


//append all DOM-elements according to previous HTML-structure//
body.appendChild(overlay);
body.appendChild(bookroom_modal);
bookroom_modal.appendChild(book_modal);
book_modal.appendChild(book_form);
book_form.appendChild(modal__title2);
book_form.appendChild(book_name_label);
book_form.appendChild(book_name_input);
book_form.appendChild(book_email_label);
book_form.appendChild(book_email_input);
book_form.appendChild(book_time_label);
book_form.appendChild(book_time_select);
book_time_select.appendChild(book_time_option);
book_form.appendChild(participants_label);
book_form.appendChild(participants_select);
participants_select.appendChild(participants_number);
book_form.appendChild(booking_button);

}
generateBookroom2();


const formEl = document.querySelector(".book_form");


formEl.addEventListener("submit", event => {
    event.preventDefault(); //prevents reloading the page when submit
    const roomTitle = document.getElementsByClassName(".modal__title");
    roomTitle.innerHTML = "test"

    const data = new FormData(formEl);
    const payload = new URLSearchParams(data);

    //const data = Object.fromEntries(formData);//

    //This shows an empty array//
    console.log([...payload]);

    const userInput_name = document.getElementById("name-text").value;
    const userInput_email = document.getElementById("email-text").value;
    const date = new Date().toISOString();
    const userInput_time = document.getElementById("time_options").value;
    const userInput_participants = document.getElementById("participants_number").value;
    if (userInput_time === "Select time") {
      alert("You need to select a time!");
      return;
    }

    const userInput = {
      challenge: 12,
      name: userInput_name,
      email: userInput_email,
      date: date,
      time: userInput_time,
      participants: parseInt(userInput_participants, 10),
    };
    console.log("user input object:", userInput);

    fetch('https://lernia-sjj-assignments.vercel.app/api/booking/reservations', {
      method: 'POST',
      
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInput),  // Sending data in JSON format
    })
    .then(response => response.json())
    .then(data => console.log('Status:', data));

  
        console.log("Name:", userInput_name);
        console.log("Email:", userInput_email);
        console.log("Time:", userInput_time);
        console.log("Participants:", userInput_participants);
   });

    // Listen for the custom event

    // What does this do?
    document.addEventListener('arrayEvent', (event) => {
      const { message, data } = event.detail; // Extract the message and array
      
      console.log(message); // Log the message
      console.log('Received array:',data); // Log the array
      let newTime = data;
      console.log("this is the new time " + newTime)
      availableTimeNow(newTime)
  // alert(`Received array: ${data.join(', ')}`);
});

 //const availableTime = [newTime];

function availableTimeNow(newTime) {
  console.log(newTime,"hello1");
  // userInput_time.innertext ='<option value=""></options>';
  newTime.forEach((newTime) => {
    console.log(newTime,"hello2");
    const option = document.createElement("option");
    option.value = newTime;
    option.textContent = newTime;
    document.querySelector("#time_options").appendChild(option); 
  });
}
