password = document.querySelector("#password")
confirm_password = document.querySelector("#confirm_password")
button = document.querySelector("#formButton")
message = document.createElement("p")
container = document.querySelector("#myform")

function checkMatching(password, confirm_password) {
  if (password.value === confirm_password.value) {
    return true
  } else {
    return false
  }
}

button.addEventListener("click", (event) => {
  event.preventDefault()
  // Check if the form is valid according to the native browser validation (minlength, required)
  if (!password.checkValidity() || !confirm_password.checkValidity()) {
    message.textContent = "Passwords must be at least 8 characters long."
    container.append(message)
    return // Exit if native validation fails
  }

  const result = checkMatching(password, confirm_password)
  if (!result) {
    message.textContent = "Passwords don't match"
    container.append(message)
  } else {
    message.textContent = ""
  }
})
