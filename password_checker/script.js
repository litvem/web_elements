// Password visibility toggle
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function() {
    // Toggle the type attribute between password and text
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    // Toggle the eye/eye/slash icon
    this.classList.toggle("bi-eye");
    this.classList.toggle("bi-eye-slash");
});

// Password validation logic
document.getElementById("password").addEventListener("input", function() {
    const password = this.value;
    const upperCasePattern = /[A-Z]/;
    const lowerCasePattern = /[a-z]/;
    const numberPattern = /[0-9]/;
    const specialCharacterPattern = /[!@#$%^&*(),.?":;{}|<>[\]\\]/;
    const minLength = password.length >= 7;

    // Check length
    updateValidation("length", minLength);
    // Check other rules
    updateValidation("upperCase", upperCasePattern.test(password));
    updateValidation("lowerCase", lowerCasePattern.test(password));
    updateValidation("number", numberPattern.test(password));
    updateValidation("specialCharacter", specialCharacterPattern.test(password));
});

function updateValidation(elementId, isValid) {
    const element = document.getElementById(elementId);
    const icon = element.querySelector("i");

    if (isValid) {
        element.classList.remove("invalid");
        element.classList.add("valid");
        icon.classList.remove("bi-shield-x");
        icon.classList.add("bi-shield-check");
    } else {
        element.classList.remove("valid");
        element.classList.add("invalid");
        icon.classList.remove("bi-shield-check");
        icon.classList.add("bi-shield-x");
    }
}
