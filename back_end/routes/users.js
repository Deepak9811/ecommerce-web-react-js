var express = require("express");
const userRegister = require("../controller/User.controller");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/signup", (req, res, next) => {
  userRegister.userRegister(req, res);
});

router.post("/login", (req, res, next) => {
  userRegister.userLogin(req, res);
});

module.exports = router;
