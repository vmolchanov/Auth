(function () {

    var form = document.querySelector(".login-form");
    var submit = form.querySelector("input[type=submit]");
    var username = document.getElementById("username-input");
    var password = document.getElementById("password-input");

    submit.addEventListener("click", function (event) {
        if (!username.value) {
            event.preventDefault();

            if (!username.classList.contains("login-form__username-input--invalid")) {
                username.classList.add("login-form__username-input--invalid");
            }
        } else {
            if (username.classList.contains("login-form__username-input--invalid")) {
                username.classList.remove("login-form__username-input--invalid");
            }
        }

        if (!password.value) {
            event.preventDefault();

            if (!password.classList.contains("login-form__password-input--invalid")) {
                password.classList.add("login-form__password-input--invalid");
            }
        } else {
            if (password.classList.contains("login-form__password-input--invalid")) {
                password.classList.remove("login-form__password-input--invalid");
            }
        }
    });


    username.addEventListener("input", onInput);

    password.addEventListener("input", onInput);


    var inputTimeout;

    function onInput(event) {
        clearTimeout(inputTimeout);
        inputTimeout = setTimeout(function () {
            event.target.style.borderColor = "#ccc";
        }, 100);
    }

})();