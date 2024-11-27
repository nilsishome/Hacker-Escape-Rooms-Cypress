
document.addEventListener("DOMContentLoaded", () => {
    const module3 = document.createElement("div");
    const module3_Container = document.createElement("div");
    const moduleTitle = document.createElement("h2");
    const challengesLink = document.createElement("a");
    
    module3.id = "module3";
    module3.className = "module3";
    module3_Container.className = "module3_Container";
    moduleTitle.className = "moduleTitle";
    challengesLink.className = "challengesLink";
  
    moduleTitle.textContent = "Thank you!";
    challengesLink.textContent = "Back to challenges";
    challengesLink.href = "http://127.0.0.1:5500/challenges.html";
  
    module3.appendChild(moduleTitle);
    module3.appendChild(challengesLink);


    document.body.appendChild(module3);
    module3.style.display = "block";
    
    
    console.log("oh richard darling \u{1F609}\u{FE0F} ");
    console.log(module3); // Logs the created module

    function closeModule3(event) {
        event.preventDefault();
        module3.style.display ="none";
        document.body.style.overflow ="";
        window.location.href = challengesLink.href;
    }
    challengesLink.addEventListener("click",closeModule3);
    
});
