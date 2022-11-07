const express = require("express");
const dotenv = require("dotenv");
const formidable = require("formidable");
const fs = require("fs");
const router = express.Router();
const { check, validationResult } = require("express-validator");

dotenv.config({ path: "./config.env" });

require("../db/conn");

const { register, login } = require("../controller/auth");
const { getUserById } = require("../controller/user");

router.get("/", (req, res) => {
  res.send(`Home Page`);
});

router.param("userId", getUserById);
router.post("/register", register);

router.post(
  "/login",
  [
    check("password", "Password is required!").isLength({ min: 1 }),
    check("email", "Email is required!").isEmail(),
  ],
  login
);

module.exports = router;
