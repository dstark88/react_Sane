const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const siteSchema = new Schema({
  country: String,
  state: String,
  county: String,
  city: String,
  facility: String,
  address: String,
  zip: { type: Number, min: 5, max: 5}, 
  latitude: Schema.Types.Decimal128,
  longitude: Schema.Types.Decimal128,
  phone_1: { type: String, min: 10, max: 12, required: true },
  phone_2: { type: String, min: 10, max: 12 },
  web_address: String,
  additional_info: String
});

const Site = mongoose.model("Site", siteSchema);

module.exports = Site;