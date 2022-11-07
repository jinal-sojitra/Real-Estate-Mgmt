const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    no_of_rooms:{
	type:String,
	required:true
	},
    no_of_bathrooms:{
		type:String,
		required:true
	},	
	description:{
	type:String,
	required:true
},
type_of_property:{
	type:String,
	required:true
	},
    photos: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", propertySchema);
