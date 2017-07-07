(function () {

    var form = document.querySelector(".user-form");
    var loginButton = form.querySelector(".user-form__login-btn");
    var signupButton = form.querySelector(".user-form__signup-btn");


    loginButton.addEventListener("click", function (event) {
        event.preventDefault();
        location.href = "/login";
    });

    signupButton.addEventListener("click", function (event) {
        event.preventDefault();
        location.href = "/signup";
    });

})();