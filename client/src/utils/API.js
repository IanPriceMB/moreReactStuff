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
  updateUser: function(id, userData) {
    return axios.put("/api/users/" + id, userData);
  },
  signOut: function() {
    return axios.get("/auth/passport/signout");
  },
  signUp: function() {
    window.location.replace('http://localhost:3001/auth/passport/google')
  }
};
