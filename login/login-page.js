
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "ZerinNichols" && password === "467251zn") {
        alert("You have successfully logged in as ZerinNichols.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
        if (username === "Jimmy" && password === "jimmy123") {
        alert("You have successfully logged in as Jimmy.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
