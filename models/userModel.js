const mongoose = require("../lib/mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    middlename: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    about: {
        type: String
    }
});

exports.UserModel = mongoose.model("User", schema);
