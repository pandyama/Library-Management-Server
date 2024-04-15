/**
 * - install yarn using `npm install -g yarn` global
 * - run `yarn init` to initialize a yarn project with package.json
 * - https://www.linode.com/docs/guides/install-and-use-the-yarn-package-manager/
 *
 * - PASSPORT
 *    - https://medium.com/@prashantramnyc/node-js-with-passport-authentication-simplified-76ca65ee91e5
 */
const bodyParser = require("body-parser");
var express = require("express");
const app = require("express")();
var indexRouter = require("./routes/root");

//Import the main Passport and Express-Session library
const passport = require("passport");
const session = require("express-session");
const flash = require("express-flash");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;

const { find } = require("./database/user");

app.use(express.urlencoded({ extended: false }));
app.use(flash());

//Middleware
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json());
app.use(passport.initialize()); // init passport on every route call
app.use(passport.session()); //allow passport to use "express-session"

authUser = async (user, password, done) => {
  const findUser = await find({ email: "test@gmail.com" });

  const testUser = {
    username: "sally",
    password: "sally123",
  };
  console.log(`Value of "User" in authUser function ----> ${user}`);
  console.log(`Value of "Password" in authUser function ----> ${password}`);

  try {
    if (password === testUser.password) {
      return done(null, { id: 123, name: "sally" });
    } else {
      return done(null, false, { message: "Password incorrect" });
    }
  } catch (e) {
    return done(e);
  }
};

passport.use(new LocalStrategy(authUser));

passport.serializeUser((user, done) => {
  console.log(`--------> Serialize User`);
  console.log(user);

  done(null, user);
});

passport.deserializeUser((id, done) => {
  console.log("---------> Deserialize Id");
  console.log(id);

  done(null, { name: "Kyle", id: 123 });
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/success",
    failureRedirect: "/fail",
    failureFlash: true,
  })
);

app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
