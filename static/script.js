// Update the password length display
function updateLengthValue() {
  const length = document.getElementById("length").value;
  document.getElementById("length-value").textContent = length;
}

// Generate a password by fetching from the Rust backend
function generatePassword() {
  const length = document.getElementById("length").value;

  fetch(`/generate-password/${length}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("password").value = data.password;
    });
}

// Set the initial length value
updateLengthValue();
