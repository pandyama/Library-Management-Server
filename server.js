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

app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
