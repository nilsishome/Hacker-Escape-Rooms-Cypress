const formEl = document.querySelector(".book_form");



formEl.addEventListener("submit", async event => {
    event.preventDefault(); //prevents reloading the page when submit
    const roomTitle = document.getElementsByClassName(".modal__title");
    roomTitle.innerHTML = "test"

    const data = new FormData(formEl);
    const payload = new URLSearchParams(data);

    //const data = Object.fromEntries(formData);//
    console.log([...payload]);

    const userInput_name = document.getElementById("name-text").value;
    const userInput_email = document.getElementById("email-text").value;
    const userInput_time = document.getElementById("time_options").value;
    const userInput_participants = document.getElementById("participants_number").value;
    

    const userInput = {
      challenge: 12 ,
      name: userInput_name,
      email: userInput_email,
      date: userInput_time,
      time: new Date().toISOString(),
      participants: parseInt(userInput_participants,10),
    };
    console.log("user input object:",userInput);

    fetch('https://lernia-sjj-assignments.vercel.app/api/booking/reservations', {
      method: 'POST',
      
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInput),  // Sending data in JSON format
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));

  
        console.log("Name:", userInput_name);
        console.log("Email:", userInput_email);
        console.log("Time:", new Date().toISOString());
        console.log("Participants_number", userInput_participants);
   });

    // Listen for the custom event
    document.addEventListener('arrayEvent', (event) => {
      const { message, data } = event.detail; // Extract the message and array
      
      console.log(message); // Log the message
      console.log('Received array:',data); // Log the array
      const newTime = data;
      console.log("this is the new time "+newTime)
      availableTimeNow(newTime)
  // alert(`Received array: ${data.join(', ')}`);
});

// const availableTime = [newTime];

function availableTimeNow(newTime) {
  console.log(newTime,"hello1");
  userInput_time = document.getElementById("time_options");
  // userInput_time.innerHTML ='<option value=""></options>';

  newTime.forEach((newTime) => {
    console.log(newTime,"hello2");
    const option = document.createElement("option");
    option.value = newTime;
    option.textContent = newTime;
    userInput_time.appendChild(option);
    
  });
}