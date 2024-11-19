const formEl = document.querySelector(".book_form");



formEl.addEventListener("submit", async event => {
    event.preventDefault(); //prevents reloading the page when submit
    

    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);

    
    const name = document.getElementById("name-text").value;
    const email = document.getElementById("email-text").value;
    const time = document.getElementById("time_options").value;
    const participants = document.getElementById("participants_number").value;


        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Time:", time);
        console.log("Participants_number", participants);
   });

   


   const data = {
    challenge: 12,
    name: "text",
    email: "email",
    date: "2022-12-12",
    time: "time",
    participants: 6,
  };
   
   
   fetch('https://lernia-sjj-assignments.vercel.app/api/booking/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),  // Sending data in JSON format
  })
  .then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));

