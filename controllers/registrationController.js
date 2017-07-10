const passwordHash = require("password-hash");
const UserModel = require("../models/userModel").UserModel;


module.exports = (req, res) => {
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
};


function isValidName(name) {
    return name.length && name.search(/[^А-Яа-я]/i) === -1;
}


function isValidSurname(surname) {
    return isValidName(surname);
}


function isValidMiddlename(middlename) {
    return !middlename.length || isValidName(middlename);
}


function isValidEmail(email) {
    return email.indexOf("@") !== -1;
}


function isValidPhone(phone) {
    let correctPhone = phone.match(/\d/ig);

    return correctPhone.length === 11;
}


function isValidGender(gender) {
    return gender === "male" || gender === "female";
}
