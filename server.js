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

const mainPageController = require("./controllers/mainPageController");
const loginController = require("./controllers/loginController");
const signupController = require("./controllers/signupController");
const successfulSignupController = require("./controllers/successfulSignupController");

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ keys: ["secret"] }));
app.use(passport.initialize());
app.use(passport.session());

app.engine("hbs", handlebars.engine);
app.set("view engine", "hbs");

passport.use(new LocalStrategy((username, password, done) => {
        if (username !== "admin")
            return done(null, false, { message: "Неверный логин" });

        if (password !== "admin")
            return done(null, false, { message: "Неверный пароль" });

        return done(null, { username: "admin" });
    }
));

passport.serializeUser((user, done) => {
    done(null, user.username);
});

passport.deserializeUser((id, done) => {
    done(null, { username: id });
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
app.all("/signup", signupController);
app.get("/regsuc", successfulSignupController);

app.listen(config.port, () => console.log("Server is listening..."));

