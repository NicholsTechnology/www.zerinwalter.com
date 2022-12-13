
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "ZerinNichols" && password === "467251zn") {
        alert("You have successfully logged in as ZerinNichols.");
        window.location.replace("https://www.zerinnichols.com/mobile/home/437289473892748932748937248328734716-9324871892634738216432111460124-32/43728914732155264329103206432819536256512981302747389534611710/3877816435278104/user/zn/437021743892/710/");
    } else {
        loginErrorMsg.style.opacity = 1;
    }

})
