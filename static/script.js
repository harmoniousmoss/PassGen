function updateLengthValue() {
  const length = document.getElementById("length").value;
  document.getElementById("length-value").textContent = length;
}

// Generate a password based on the current slider value
function generatePassword() {
  const length = document.getElementById("length").value;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  document.getElementById("password").value = password;
}

updateLengthValue();
