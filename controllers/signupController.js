const passwordHash = require("password-hash");
const UserModel = require("../models/userModel").UserModel;

const isValidName = require("../modules/signupFormValidation").isValidName;
const isValidSurname = require("../modules/signupFormValidation").isValidSurname;
const isValidMiddlename = require("../modules/signupFormValidation").isValidMiddlename;
const isValidEmail = require("../modules/signupFormValidation").isValidEmail;
const isValidPhone = require("../modules/signupFormValidation").isValidPhone;
const isValidGender = require("../modules/signupFormValidation").isValidGender;


module.exports = (req, res) => {
    switch (req.method) {
        case "GET":
            res.render("signup");
            break;

        case "POST":
            console.log(req.body);

            if (!isValidName(req.body.name) ||
                !isValidSurname(req.body.surname) ||
                !isValidMiddlename(req.body.middlename) ||
                !isValidEmail(req.body.email) ||
                !isValidPhone(req.body.phone) ||
                !isValidGender(req.body.gender)
            ) {
                return res.status(400).send("Некорректные данные!");
            }

            let hashedPassword = passwordHash.generate(req.body.password);

            let user = new UserModel({
                name: req.body.name,
                surname: req.body.surname,
                middlename: req.body.middlename,
                email: req.body.email,
                phone: req.body.phone,
                password: hashedPassword,
                gender: req.body.gender,
                about: req.body.about
            });

            user.save((err, user, affected) => {
                if (err)
                    throw err;

                console.log("User registered successful");

                res.redirect("/regsuc");
            });

            break;

        default:
            res.status(400);
    }
};
