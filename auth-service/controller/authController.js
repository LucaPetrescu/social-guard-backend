const axios = require("axios");
const passport = require("passport");

exports.registerUser =
  ("/register",
  (req, res) => {
    const { username, password } = req.body;

    console.log(`User registered: ${username}`);

    res.status(201).json({ message: "User registered successfully" });
  });

exports.loginUser =
  ("/login",
  passport.authenticate("local", { failureRedirect: "/auth/failure" }),
  (req, res) => {
    res.status(200).json({ message: "Logged in successfully" });
  });
