module.exports = (req, res) => {
    switch (req.method) {
        case "GET":
            res.render("login", {scriptPath: "js/login.js"});
            break;
    }
};
