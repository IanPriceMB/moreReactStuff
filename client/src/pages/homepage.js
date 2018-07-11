import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';
import API from '../utils/API'

class Homepage extends Component {
  state = {
    users: [],
    name: "",
    googleId: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.signUp()
  };

  render() {
    return (
      <div>
        <header>
          <span onClick={this.handleFormSubmit}>Sign in</span>
          <span>Sign up</span>
        </header>
        <img src='#' alt='logo'/>
          <button onClick={this.handleFormSubmit}> 
          Sign up
          </button>
      </div>
    );
  }
}

export default Homepage;
