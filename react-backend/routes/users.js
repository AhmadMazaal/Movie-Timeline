const Router = require("express").Router();
const User = require("../models/user.model");

Router.route("/signup").post((req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const repeatPassword = req.body.repeastPassword;

  const newUser = new User({
    email,
    username,
    password,
    repeatPassword,
  });
  newUser
    .save()
    .then(() => res.json("Signed up successfully!"))
    .catch((err) => console.log(`Error adding user: ${err}`));
});

module.exports = Router;
