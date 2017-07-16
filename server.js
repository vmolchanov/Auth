const config = require("./config/config")

const express = require("express");

const app = express();

const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("cookie-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const handlebars = require("express-handlebars").create({ defaultLayout: "index", extname: ".hbs" });
const passwordHash = require("password-hash");

const mainPageController = require("./controllers/mainPageController");
const loginController = require("./controllers/loginController");
const signupController = require("./controllers/signupController");
const successfulSignupController = require("./controllers/successfulSignupController");
const userController = require("./controllers/userController");

const UserModel = require("./models/userModel").UserModel;

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ keys: ["secret"] }));
app.use(passport.initialize());
app.use(passport.session());

app.engine("hbs", handlebars.engine);
app.set("view engine", "hbs");

passport.use(new LocalStrategy((username, password, done) => {

    UserModel.findOne({ email: username }, (err, person) => {
        if (err) {
            console.log("Error here!!!");
            console.log(err);
            return done(err);
        }

        if (person) {
            if (passwordHash.verify(password, person.password)) {
                return done(null, person);
            } else {
                return done(null, false, { message: "Неправильный пароль" });
            }
        } else {
            return done(null, false, { message: "Пользователь не найден" });
        }
    });

}));

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    done(null, { id: id });
});

const auth = passport.authenticate(
    "local",
    {
        successRedirect: "/user",
        failureRedirect: "/login"
    }
);


app.get("/", mainPageController);
app.get("/login", loginController);
app.post("/login", auth);
app.all("/signup", signupController);
app.get("/regsuc", successfulSignupController);

const mustBeAuthenticated = (req, res, next) => req.isAuthenticated() ? next() : res.redirect("/");

app.all("/user", mustBeAuthenticated);

app.get("/user", userController);

app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

app.listen(config.port, () => console.log("Server is listening..."));

