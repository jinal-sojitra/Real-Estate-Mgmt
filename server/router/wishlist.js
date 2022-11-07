const { isSignedin, isAuthenticated } = require("../controller/auth");
const { getPropertyById } = require("../controller/property");
const { getUserById } = require("../controller/user");
const {
  addToWishlist,
  deleteFromWishlist,
  getWishlist,
  getWishlistById,
} = require("../controller/wishlist");

const router = require("express").Router();

router.param("userId", getUserById);
router.param("propertyId", getPropertyById);
router.param("wishlistId", getWishlistById);

router.post(
  "/wishlist/:userId/:propertyId",
  isSignedin,
  isAuthenticated,
  addToWishlist
);
router.delete(
  "/wishlist/:wishlistId",
  isSigned,
  isAuthenticated,
  deleteFromWishlist
);
router.get("/wishlists/:userId", isSigned, isAuthenticated, getWishlist);
