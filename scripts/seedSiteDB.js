const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/saneDB"
);

const siteSeed = [
 
  {
  country: "United States",
  state: "Colorado",
  county: "Alamosa",
  city: "Alamosa",
  facility: "Valley Wide Health Systems", 
  latitude: 37.468189,
  longitude: -105.87429,
  phone_1: 719-588-8609,
  web_address: "https://vwhs.org/",
  }, 

  {
  country: "United States",
  state: "Colorado",
  county: "Morgan",
  city: "Fort Morgan",
  facility: "S.A.R.A. House",
  address: "418 Ensign St.",
  zip: 80701, 
  latitude: 40.251942,
  longitude: -103.802315,
  phone_1: 970-867-2121,
  web_address: "https://vwhs.org/",
  },
  
  {
  country: "United States",
  state: "Colorado",
  county: "Boulder",
  city: "Boulder",
  facility: "Boulder Community Health – Foothills",
  address: "4747 Arapahoe Ave",
  zip: 80303, 
  latitude: 40.01588,
  longitude: -105.238002,
  phone_1: 303-415-7600,
  web_address: "https://www.bch.org/Locations/Foothills-Hospital.aspx",
  }
];

db.Site
  .remove({})
  .then(() => db.Site.collection.insertMany(siteSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });