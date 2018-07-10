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
      // .then(res => console.log(res))
      // .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <header>
          {/* <Link to='/auth/passport/google'>  */}
          <span onClick={this.handleFormSubmit}>Sign in</span>
          {/* </Link> */}
          <Link to='/auth/google'> 
          <span>Sign up</span>
          </Link>
        </header>
        <img src='#' alt='logo'/>
        <Link to='/auth/google'>
          <button onClick={this.handleFormSubmit}> 
          Sign up
          </button>
        </Link>
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
