
const module3 = document.createElement("div");
const moduleTitle = document.createElement("h2");
const challengesLink = document.createElement("a");



module3.className ="module2";
moduleTitle.className ="moduleTitle";
challengesLink.className ="challengesLink";


moduleTitle.textContent = "Thank you!";
challengesLink.textContent = "Back to challenges"

challengesLink.href = "http://127.0.0.1:5500/challenges.html";

module3.appendChild(moduleTitle);
module3.appendChild(challengesLink);

document.body.appendChild(module3);
 
  