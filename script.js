const form = document.querySelector("#form");
const passwordElement = document.querySelector("#password");
const confirmPasswordElement = document.querySelector("#confirm-password");
const messageContainer = document.querySelector(".message-container");
const message = document.querySelector("#message");

let isValid = false;

function validateForm() {
  isValid = form.checkValidity();

  message.textContent = "Please fill out all fields.";
  message.style.color = "red";
  messageContainer.style.borderColor = red;
}

function processFormData(event) {
  event.preventDefault();
  validateForm();
}

// Event listeners
form.addEventListener("submit", processFormData);
