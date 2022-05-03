const User = require("../models/Users");
const { check, validationResult } = require("express-validator");

exports.signup = (req, res) => {
  const errors = validationResult(req);
  console.log(errors);

  // check for the present of error
  if (!errors.isEmpty()) {
    return res.status(422).json({
      err: errors.array()[0].msg,
      param: errors.array()[0].param,
    });
  }

  // then save the user in the database
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        err: "Not able to save the user",
      });
    }
    res.json({
      name: user.name,
      email: user.email,
      id: user._id,
    });
  });
};
