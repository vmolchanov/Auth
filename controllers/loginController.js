module.exports = (req, res) => {
    console.log(req.method);
    res.render("login", { scriptPath: "js/login.js" });
};
