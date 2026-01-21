console.log("Inside app.js");

// Ensure these IDs match your HTML exactly
const errorBtn = document.getElementById("error-btn");
const successBtn = document.getElementById("success-btn");
const infoText = document.getElementById("infoText");

// Only set text if the buttons actually exist to avoid "null" errors
if (errorBtn) errorBtn.textContent = "Error";
if (successBtn) successBtn.textContent = "Success";

function handleClickOnErrorBtn() {
  console.log("error button has been clicked");
  if (infoText) {
    infoText.textContent = "Error has occurred!";
    infoText.classList.add("error-text");
    infoText.classList.remove("success-text"); // Clean up other class
  }
}

function handleClickOnSuccessBtn() {
  console.log("success button has been clicked");
  if (infoText) {
    infoText.textContent = "Success!";
    infoText.classList.add("success-text");
    infoText.classList.remove("error-text"); // Clean up other class
  }
}

// FIX: Pass the function name WITHOUT parentheses ()
errorBtn.addEventListener("click", handleClickOnErrorBtn);
successBtn.addEventListener("click", handleClickOnSuccessBtn);