const fortunes = [
  "Good luck will follow you today.",
  "You will meet someone who inspires you.",
  "A small surprise is waiting for you.",
  "Stay positive, and good things will come.",
  "Today is a great day to start something new."
];

// Get button and result area
const button = document.getElementById("fortune-btn");
const result = document.getElementById("fortune-result");

// Add click event
button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  result.textContent = fortunes[randomIndex];
});

const addBtn = document.getElementById("add-btn");
const newFortuneInput = document.getElementById("new-fortune");
const addResult = document.getElementById("add-result");

addBtn.addEventListener("click", () => {
  const newFortune = newFortuneInput.value.trim();
  if (newFortune) {
    fortunes.push(newFortune);
    addResult.textContent = "New fortune added!";
    newFortuneInput.value = ""; 
  } else {
    addResult.textContent = "Please write something first.";
  }
});