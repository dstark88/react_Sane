const mongoose = require("mongoose");
// const objectId = mongoose.Schema.Types.ObjectId
const Schema = mongoose.Schema;

const siteSchema = new Schema({
  // _id: objectId,
  country: String,
  state: String,
  county: String,
  city: String,
  facility: String,
  address: String,
  zip: { type: Number, min: 5, max: 5}, 
  latitude: Number,
  longitude: Number,
  phone_1: { type: String, min: 10, max: 14, required: true },
  phone_2: { type: String, min: 10, max: 14 },
  web_address: String,
  additional_info: String
});

const Site = mongoose.model("Site", siteSchema);

module.exports = Site;