const User = require("../model/userSchema");

exports.getUserById = (req, res, next, id) => {
  User.findById(id)
    .select("-photo")
    .exec((err, user) => {
      if (err) {
        return res.status(403).json({
          error: "No Properties Found!",
        });
      }
      req.profile = user;
      next();
    });
};
exports.getUserImage = (req, res) => {
  if (req.profile.photo.data) {
    res.set("Content-Type", req.profile.photo.contentType);
    return res.send(req.profile.photo.data);
  }
};
