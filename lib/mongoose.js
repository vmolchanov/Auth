const config = require("../config/config");

const mongoose = require("mongoose");
mongoose.connect(config.mongoose.uri);

module.exports = mongoose;
