const form = document.querySelector("#form");
const passwordElement = document.querySelector("#password");
const confirmPasswordElement = document.querySelector("#confirm-password");
const messageContainer = document.querySelector(".message-container");
const message = document.querySelector("#message");

let isValid = false;
let passwordsMatch = false;

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  console.log("user :", user);
}

function validateForm() {
  isValid = form.checkValidity();

  // Style error message
  if (!isValid) {
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    messageContainer.style.borderColor = red;
    return;
  }

  if (passwordElement.value === confirmPasswordElement.value) {
    passwordsMatch = true;
    passwordElement.style.borderColor = "green";
    confirmPasswordElement.style.borderColor = "green";
  } else {
    passwordsMatch = false;
    confirmPasswordElement.style.borderColor = "red";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    message.textContent = "Make sure both passwords match";
    return;
  }

  // Success message
  if (isValid & passwordsMatch) {
    message.textContent = "Successfully registered";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}

function processFormData(event) {
  event.preventDefault();

  validateForm();

  if (isValid && passwordsMatch) storeFormData();
}

// Event listeners
form.addEventListener("submit", processFormData);
