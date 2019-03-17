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

  findSite: function(id) {
    return axios.get("/api/sites/" + id);
  },

  // Deletes with the given id
  deleteSite: function(id) {
    return axios.delete("/api/sites/" + id);
  },
  // Saves a site to the database
  // saveSite: function(bookData) {
  //   return axios.post("/api/sites", siteData);
  // }

  createPost: function(postInfo) {
    return axios.post("/api/posts/", postInfo);
  },
  // Gets with the given id
  getPosts: function() {
    return axios.get("/api/posts/");
  },
  // Gets the book with the given id
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves to the database
  savePost: function(postData) {
    return axios.post("/api/posts", postData);
  },

  createUser: function(userInfo) {
    return axios.post("/api/users/", userInfo);
  },
  // Gets with the given id
  getUsers: function() {
    return axios.get("/api/users/");
  },
  // Saves to the database
  // saveUser: function(userData) {
  //   return axios.post("/api/users", userData);
  // },
};
