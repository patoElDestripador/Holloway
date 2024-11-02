// script.js
let attemptCount = 0;
const maxAttempts = 36;

document.getElementById("password-input").addEventListener("input", function() {
    const passwordInput = document.getElementById("password-input");
    const errorMessage = document.getElementById("error-message");
    const lockMessage = document.getElementById("lock-message");
    const correctPassword = "9374";

    if (attemptCount >= maxAttempts) {
        passwordInput.disabled = true;
        lockMessage.style.display = "block";
        errorMessage.style.display = "none";
        return;
    }

    if (passwordInput.value !== correctPassword && passwordInput.value !== "") {
        attemptCount++;
        passwordInput.classList.add("error");
        errorMessage.style.display = "block";
        if (attemptCount >= maxAttempts) {
            passwordInput.disabled = true;
            lockMessage.style.display = "block";
            errorMessage.style.display = "none";
        }
    } else {
        passwordInput.classList.remove("error");
        errorMessage.style.display = "none";
        sessionStorage.setItem("authenticated", "true"); // Guardar autenticación
        location.href = "Pagina2.html";
    }
});
