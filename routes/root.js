var express = require("express");
var mainController = require("../controller/UserController");
var router = express.Router();

console.log("inside root.js");

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
