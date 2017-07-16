const UserModel = require("../models/userModel").UserModel;
const mongoose = require("mongoose");


module.exports = (req, res) => {

    UserModel.findOne({ _id: mongoose.Types.ObjectId(req.user.id) }, (err, user) => {
        if (err) {
            return res.status(500).end();
        }

        console.log(user);

        res.render("user", {
            name: user.name,
            surname: user.surname,
            middlename: user.middlename,
            email: user.email,
            phone: user.phone,
            birthday: user.birthday
        });
    });

};
