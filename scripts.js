document.addEventListener("DOMContentLoaded", function () {
    const loginText = document.querySelector(".title-text .login");
    const loginForm = document.querySelector("form.login");
    const loginBtn = document.querySelector("label.login");
    const signupBtn = document.querySelector("label.signup");
    const signupLink = document.querySelector("form .signup-link a");

    signupBtn.onclick = () => {
        if (loginForm) {
            loginForm.style.marginLeft = "-50%";
        }
    };

    loginBtn.onclick = () => {
        if (loginForm) {
            loginForm.style.marginLeft = "0%";
        }
    };

    signupLink.onclick = () => {
        signupBtn.click();
        return false;
    };
});