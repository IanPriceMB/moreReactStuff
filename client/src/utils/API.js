import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Saves a book to the database
  updateUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  signOut: function() {
    return axios.get("/auth/passport/signout");
  },
  // signUp: function() {
  //   window.location.href = '/auth/passport/google'
  // }
  signUp: function() {
    return axios.get("/auth/passport/google");
  }
};