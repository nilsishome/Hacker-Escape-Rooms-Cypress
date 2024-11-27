
document.addEventListener("DOMContentLoaded", () => {
    const module3 = document.createElement("div");
    const module3_Container = document.createElement("div");
    const moduleTitle = document.createElement("h2");
    const challengesLink = document.createElement("a");
    
  
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
    
    
    console.log("Script is running");
console.log(module3); // Logs the created module

});
