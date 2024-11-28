
function generateModule3() {
    const body = document.querySelector("body");
    const module3 = document.createElement("div");
    const moduleTitle = document.createElement("h2");
    const challengesLink = document.createElement("a");
  
    
    module3.id = "module3";
    module3.className = "module3";
    moduleTitle.className = "moduleTitle";
    challengesLink.className = "challengesLink";
  
    
    moduleTitle.textContent = "Thank you!";
    challengesLink.textContent = "Back to challenges";
    challengesLink.href = "http://127.0.0.1:5500/challenges.html";  // Update with the correct URL for challenges page
  
   
    module3.appendChild(moduleTitle);
    module3.appendChild(challengesLink);
  
    
    body.appendChild(module3);
    module3.style.display = "none";  
  }
  
  // Generate module3 when the page loads
  generateModule3();