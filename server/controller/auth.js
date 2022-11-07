const express = require("express");
const dotenv = require("dotenv");
const formidable = require("formidable");
const fs = require("fs");
const { validationResult } = require("express-validator");
dotenv.config({ path: "./config.env" });
const jwt = require("jsonwebtoken");
const { expressjwt } = require("express-jwt");

require("../db/conn");
const User = require("../model/userSchema");

exports.register = async (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: JSON.stringify(err),
      });
    }

    //destructuring the fields
    const { email, name, role, password, cpassword, contact, city } = fields;

    // return res.json({ email, name, role, password, cpassword, contact, city });

    if (
      !email ||
      !name ||
      !role ||
      !password ||
      !cpassword ||
      !contact ||
      !city
    ) {
      return res.status(400).json({
        error: "Please Include All Fields.",
      });
    }

    if (password != cpassword) {
      return res
        .status(422)
        .json({ error: "Password and Confirm Password must be Same" });
    }

    if (password.length < 8) {
      return res
        .status(422)
        .json({ error: "Password length must be 8 or more" });
    }
    var emailRegex =
      /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

    const isEmailValid = function (email) {
      if (!email) return false;

      if (email.length > 254) return false;

      var valid = emailRegex.test(email);
      if (!valid) return false;

      // Further checking of some things regex can't handle
      var parts = email.split("@");
      if (parts[0].length > 64) return false;

      var domainParts = parts[1].split(".");
      if (
        domainParts.some(function (part) {
          return part.length > 63;
        })
      )
        return false;
      return true;
    };

    if (!isEmailValid(email)) {
      return res.status(400).json({ error: "Please give valid email!" });
    }

    User.findOne({ email: email }).then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "Email already Exist" });
      }

      let user = new User({
        email,
        name,
        role,
        password,
        contact,
        city,
      });

      //handle file here
      if (!file.photo) {
        return res.status(400).json({
          error: "Please upload Aadharcard image!",
        });
      }
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "Photo Size too big!",
        });
      }
      user.aadharCardPhoto.data = fs.readFileSync(file.photo.filepath);
      user.aadharCardPhoto.contentType = file.photo.mimetype;

      //save to the DB
      user.save((err, u) => {
        if (err) {
          console.log(err);
          return res.status(400).json({
            error: "Failed to register user!",
          });
        }
        u.aadharCardPhoto = undefined;
        return res.json(u);
      });
    });
  });
};

exports.login = (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
      param: errors.array()[0].param,
    });
  }

  User.findOne({ email }, function (err, user) {
    if (err || !user) {
      return res.status(400).json({
        error: "User email Does not exists.",
      });
    }
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and Password do not match.",
      });
    }

    //create cookie token
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);

    //put token in cookie
    res.cookie("token", token, { expire: new Date() + 999 });

    //send response to front end
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, name, email, role } });
  });
};

exports.isSignedin = expressjwt({
  secret: process.env.SECRET,
  userProperty: "auth",
  algorithms: ["HS512", "RS512"],
});

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "ok",
  });
};

//custom middlewares
exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: "ACCESS DENIED.",
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role !== "admin") {
    return res.status(403).json({
      error: "You are not ADMIN, ACCESS DENIED.",
    });
  }
  next();
};
exports.isBuyer = (req, res, next) => {
  if (req.profile.role !== "buyer") {
    return res.status(403).json({
      error: "You are not ADMIN, ACCESS DENIED.",
    });
  }
  next();
};
exports.isSeller = (req, res, next) => {
  if (req.profile.role !== "seller") {
    return res.status(403).json({
      error: "You are not ADMIN, ACCESS DENIED.",
    });
  }
  next();
};
