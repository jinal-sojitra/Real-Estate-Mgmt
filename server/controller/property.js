const formidable = require("formidable");
const fs = require("fs");
const Property = require("../model/propertySchema");
exports.getPropertyById = (req, res, next, id) => {
  Property.findById(id)
    .select("-photo")
    .exec((err, property) => {
      if (err) {
        return res.status(403).json({
          error: "No Properties Found!",
        });
      }

      req.property = property;
      next();
    });
};

exports.listProperty = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "Problem With Image.",
      });
    }

    //desctructing the fields
    const { name, address, price, city } = fields;

    if (!name || !address || !price || !city) {
      return res.status(400).json({
        error: "Please Include All Fields.",
      });
    }

    //TODO: restriction on field
    let property = new Property(fields);

    //handle file here
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "File Size too big!",
        });
      }
      property.photo.data = fs.readFileSync(file.photo.filepath);
      property.photo.contentType = file.photo.mimetype;
    }

    //save to the DB
    property.save((err, property) => {
      if (err) {
        return res.status(400).json({
          error: "Saving Property in DB Failed.",
        });
      }
      property.photo = undefined;
      return res.json(property);
    });
  });
};

exports.getImage = (req, res) => {
  if (req.property.photo.data) {
    res.set("Content-Type", req.property.photo.contentType);
    return res.send(req.property.photo.data);
  }
};

exports.getProperties = (req, res) => {
  Property.find()
    .select("-photo")
    .exec((err, properties) => {
      if (err) {
        return res.status(403).json({
          error: "No Properties Found!",
        });
      }

      return res.status(200).json(properties);
    });
};
