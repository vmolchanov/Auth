(function () {

    var form = document.querySelector(".signup-form");
    var submit = form.querySelector("input[type=submit]");

    var name = form.querySelector(".signup-form__person-name label + input");
    var surname = form.querySelector(".signup-form__person-surname label + input");
    var email = form.querySelector(".signup-form__email label + input");
    var password = form.querySelector(".signup-form__set-password label + input");
    var repeatPassword = form.querySelector(".signup-form__repeat-password label + input");

    var nameErrorLabel = form.querySelector(".signup-form__empty-person-name");
    var emailErrorLabel = form.querySelector(".signup-form__empty-email");
    var invalidEmailErrorLabel = form.querySelector(".signup-form__invalid-email");
    var passwordErrorLabel = form.querySelector(".signup-form__empty-password");
    var repeatPasswordErrorLabel = form.querySelector(".signup-form__wrong-password");

    var inputTimeout;

    console.log(invalidEmailErrorLabel);

    submit.addEventListener("click", function (event) {
        if (!name.value) {
            showInvalidInput(name, nameErrorLabel, "signup-form__empty-person-name--hidden", event);
        } else if (!nameErrorLabel.classList.contains("signup-form__empty-person-name--hidden")) {
            nameErrorLabel.classList.add("signup-form__empty-person-name--hidden");
        }

        if (!surname.value) {
            showInvalidInput(surname, nameErrorLabel, "signup-form__empty-person-name--hidden", event);
        } else if (!nameErrorLabel.classList.contains("signup-form__empty-person-name--hidden")) {
            nameErrorLabel.classList.add("signup-form__empty-person-name--hidden");
        }

        if (!email.value) {
            showInvalidInput(email, emailErrorLabel, "signup-form__empty-email--hidden", event);
        } else if (!emailErrorLabel.classList.contains("signup-form__empty-email--hidden")) {
            emailErrorLabel.classList.add("signup-form__empty-email--hidden");
        }

        if (email.value.indexOf("@") === -1 && email.value) {
            showInvalidInput(email, invalidEmailErrorLabel, "signup-form__invalid-email--hidden", event);
        } else if (!invalidEmailErrorLabel.classList.contains("signup-form__invalid-email--hidden")) {
            invalidEmailErrorLabel.classList.add("signup-form__invalid-email--hidden");
        }

        if (!password.value) {
            showInvalidInput(password, passwordErrorLabel, "signup-form__empty-password--hidden", event);
        } else if (!passwordErrorLabel.classList.contains("signup-form__empty-password--hidden")) {
            passwordErrorLabel.classList.add("signup-form__empty-password--hidden");
        }

        if (repeatPassword.value !== password.value || !password.value) {
            showInvalidInput(repeatPassword, repeatPasswordErrorLabel, "signup-form__wrong-password--hidden", event);
        } else if (!repeatPasswordErrorLabel.classList.contains("signup-form__wrong-password--hidden")) {
            repeatPasswordErrorLabel.classList.add("signup-form__wrong-password--hidden");
        }
    });

    name.addEventListener("input", onInput);

    surname.addEventListener("input", onInput);

    email.addEventListener("input", onInput);

    password.addEventListener("input", onInput);

    repeatPassword.addEventListener("input", onInput);


    function showInvalidInput(input, label, labelClass, event) {
        if (label.classList.contains(labelClass)) {
            label.classList.remove(labelClass);
        }

        input.style.borderColor = "#e00";
        event.preventDefault();
    }


    function onInput(event) {
        clearTimeout(inputTimeout);
        inputTimeout = setTimeout(function () {
            event.target.style.borderColor = "#ccc";
        }, 100);
    }

})();
