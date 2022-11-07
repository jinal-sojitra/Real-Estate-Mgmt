const router = require("express").Router();

const { isSignedin, isAuthenticated } = require("../controller/auth");
const {
  listProperty,
  getProperties,
  getPropertyById,
  getImage,
} = require("../controller/property");

router.param("propertyId", getPropertyById);

router.post("/list-property", isSignedin, isAuthenticated, listProperty);

router.get("/property/image/:propertyId", getImage);

router.get("/property/:propertyId", (req, res) => {
  return res.status(200).json(req.property);
});

router.get("/properties", getProperties);

module.exports = router;
