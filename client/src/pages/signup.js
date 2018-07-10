import React, { Component } from 'react';
import API from "../utils/API";
import {
Link,
} from 'react-router-dom';

class Signup extends Component {
  state = {
    id: false,
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
        this.setState({ id: res.id, payed: res.payed, type:res.type  })
      })
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.updateUser({id: this.state.id, type: this.state.type, payed:this.state.payed})
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.id ? (
          <div>yes</div>
        ):(<div>no</div>)}
      <button onClick={() => this.handleFormSubmit}> 
      press me
      </button>
      </div>
    );
  }
}

export default Signup;
