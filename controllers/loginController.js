module.exports = (req, res) => {

    req.isAuthenticated() ? res.redirect("/user") : res.render("login", { scriptPath: "js/login.js" });

};
