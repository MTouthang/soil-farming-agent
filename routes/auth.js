const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

// import routes function from the controller
const { signup } = require("../controllers/auth");

router.post(
  "/signup",
  check("name", "name should be atleast 3 characters"),
  check("email", "email is not in proper format").isEmail(),
  check("password", "password should be atleast 6 char").isLength({ min: 6 }),

  signup
);

module.exports = router;
