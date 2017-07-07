(function () {

    var form = document.querySelector(".signup-form");
    var submit = form.querySelector("input[type=submit]");


    submit.addEventListener("click", function (event) {
        event.preventDefault();

        var name = form.querySelector(".signup-form__person-name label + input");
        var surname = form.querySelector(".signup-form__person-surname label + input");
        var email = form.querySelector(".signup-form__email label + input");
        var password = form.querySelector(".signup-form__set-password label + input");
        var repeatPassword = form.querySelector(".signup-form__repeat-password label + input");


    });

})();
