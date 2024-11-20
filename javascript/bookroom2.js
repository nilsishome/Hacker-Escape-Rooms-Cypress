const formEl = document.querySelector(".book_form");



formEl.addEventListener("submit", async event => {
    event.preventDefault(); //prevents reloading the page when submit
    

    const data = new FormData(formEl);
    const payload = new URLSearchParams(data);

    //const data = Object.fromEntries(formData);//
    console.log([...payload]);

    

    
    const userInput_name = document.getElementById("name-text").value;
    const userInput_email = document.getElementById("email-text").value;
    const time_input = document.getElementById("time_options").value;
    const userInput_participants = document.getElementById("participants_number").value;


    const userInput = {
      challenge: 12 ,
      name: userInput_name,
      email: userInput_email,
      date: time_input, 
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

   


  
  

  