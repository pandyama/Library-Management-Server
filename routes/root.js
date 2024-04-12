var express = require("express");
var mainController = require("../controller/UserController");
// var form_controller = require("../controller/formController");
var router = express.Router();

console.log("inside root.js");
router.post("/users/signup", mainController.register);

// router.post("/login", mainController.login); // Login Route

// router.post("/logs", form_controller.logs);

// router.get("/auth", verifyToken, function (req, res) {
//   console.log("----------------------");
//   console.log("Request Received at /auth");
//   console.log("----------------------");
//   return res.status(200).json({ message: "authenticated" });
// });

router.get("/fail", function (request, response, next) {
  // console.log("🚀 ~ request:", request);
  console.log("fail");
  return response.status(200).json({ message: "failed" });
});

router.get("/success", function (request, response, next) {
  console.log("success");
  return response.status(200).json({ message: "authenticated" });
});

module.exports = router;
