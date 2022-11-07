const Wishlist = require("../model/wishlistSchema");

exports.getWishlistById = (req, res, next, id) => {
  Wishlist.findOne(id).exec((err, wishlist) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to find wishlist item!",
      });
    }
    req.wishlist = wishlist;
    next();
  });
};

exports.addToWishlist = (req, res) => {
  const { userId, propertyId } = req.param;

  const wishlist = new Wishlist({ userId, propertyId });
  wishlist.save((err, wishlist) => {
    if (err) {
      return res
        .status(400)
        .json({ error: "Unable to save item in wishlist!" });
    }
    return res.status(200).json(wishlist);
  });
};

exports.deleteFromWishlist = (req, res) => {
  Wishlist.deleteOne({ _id: req.param._id }).exec((err, wishlist) => {
    if (err) {
      return res
        .status(400)
        .json({ error: "Unable to delete item from wishlist!" });
    }

    return res.status(200).json(wishlist);
  });
};

exports.getWishlist = (req, res) => {
  const userId = req.param.userId;

  Wishlist.find({ user: userId })
    .populate("user property")
    .exec((err, wishlist) => {
      if (err) {
        return res.status(400).json({ error: "No items found!" });
      }

      return res.status(200).json(wishlist);
    });
};
