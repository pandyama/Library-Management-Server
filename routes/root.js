var express = require("express");
var mainController = require("../controller/UserController");
var router = express.Router();
const { find } = require("../database/user");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

console.log("inside root.js");

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

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/success",
    failureRedirect: "/fail",
    failureFlash: true,
  })
);

router.post("/users/signup", mainController.register);

router.get("/fail", function (request, response, next) {
  console.log("fail");
  return response.status(200).json({ message: "failed" });
});

router.get("/success", function (request, response, next) {
  console.log("success");
  return response.status(200).json({ message: "authenticated" });
});

module.exports = router;
