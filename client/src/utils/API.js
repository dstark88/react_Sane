import axios from "axios";

export default {
  // Gets all sites
  getSites: function() {
    return axios.get("/api/sites");
  },
  // // Gets the site with the given id
  findSites: function(siteInfo) {
    return axios.post("/api/sites/", siteInfo);
  },
  // Deletes the site with the given id
  deleteSite: function(id) {
    return axios.delete("/api/sites/" + id);
  },
  // Saves a site to the database
  // saveSite: function(bookData) {
  //   return axios.post("/api/sites", siteData);
  // }

  getPosts: function() {
    return axios.get("/api/posts");
  },
  // Gets the book with the given id
  getPosts: function(id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  savePost: function(postData) {
    return axios.post("/api/posts", postData);
  }
};
