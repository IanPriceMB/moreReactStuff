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

  componentDidMount() {
    this.loadusers();
  }

  loadusers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, name: "", googleId: ""})
      )
      .catch(err => console.log(err));
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
        <div>
            <div>
              <h1>Users</h1>
            </div>
            {this.state.users.length ? (
              <ul>
                {this.state.users.map(user => (
                  <li key={user._id}>
                    <Link to={"/users/" + user._id}>
                      <strong>
                        {user.username} is {user.googleId}
                      </strong>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
      </div>
    );
  }
}

export default Homepage;
