import axios from "axios";

export default {
  // Gets all sites
  getSites: function() {
    return axios.get("/api/sites");
  },
  // Gets the site with the given id
  getSites: function(id) {
    return axios.get("/api/sites/" + id);
  },
  // Deletes the site with the given id
  deleteSite: function(id) {
    return axios.delete("/api/sites/" + id);
  },
  // Saves a site to the database
  saveSite: function(bookData) {
    return axios.post("/api/sites", siteData);
  }
};
