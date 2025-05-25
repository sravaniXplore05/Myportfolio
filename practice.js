function handleSubmit() {
  const password = document.getElementById("password1").value;
  const confirmPassword = document.getElementById("password2").value;
  const passwordError = document.getElementById("passwordError");
  const confirmError = document.getElementById("confirmError");

  // Clear previous errors
  passwordError.textContent = "";
  confirmError.textContent = "";

  const regex = {
    number: /[0-9]/,
    specialChar: /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/,
    capital: /[A-Z]/,
    small: /[a-z]/,
    minLength: /.{8,}/
  };

  if (!regex.number.test(password)) {
    passwordError.textContent = "Password must contain at least one number.";
    return false;
  }

  if (!regex.specialChar.test(password)) {
    passwordError.textContent = "Password must contain at least one special character.";
    return false;
  }

  if (!regex.capital.test(password)) {
    passwordError.textContent = "Password must contain at least one capital letter.";
    return false;
  }

  if (!regex.small.test(password)) {
    passwordError.textContent = "Password must contain at least one small letter.";
    return false;
  }

  if (!regex.minLength.test(password)) {
    passwordError.textContent = "Password must be at least 8 characters long.";
    return false;
  }

  if (password !== confirmPassword) {
    confirmError.textContent = "Passwords do not match.";
    return false;
  }

  // Show success message or proceed
  confirmError.style.color = "green";
  confirmError.textContent = "Form submitted successfully!";
}
