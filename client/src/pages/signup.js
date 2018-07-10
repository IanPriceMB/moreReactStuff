import React, { Component } from 'react';
import API from "../utils/API";
import {
Link,
} from 'react-router-dom';

class Signup extends Component {
  state = {
    id: '',
    payed: false,
    type: ''
  }

  componentDidMount() {
    this.changeState(this.props.match.params.id);
  }

  changeState = id => {
    API.getUser(id)
      .then(res =>{
        console.log(res)
        this.setState({ id: res.id  })
      }

      )
      .catch(err => console.log(err));
  };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };
  handleFormSubmit = event => {
    event.preventDefault();
    API.signOut()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {this.props.match.params.id}
        hello you are here
        <Link to='/auth/google'> 
          <span>Sign in</span>
      <button onClick={() => this.handleFormSubmit}> 
      press me
      </button>
      </Link>
      </div>
    );
  }
}

export default Signup;
