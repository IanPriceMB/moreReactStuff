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
        this.setState({ id: res.data._id, payed: res.data.payed, type: res.data.type })
      })
      .catch(err => console.log(err));
  };

  updateUser = (id, data) => {
    API.updateUser(id, data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  
  updateTypePlayer = () => {
    this.setState({
     type: 'player'
    });
  };
  updateTypeUniversity = () => {
    this.setState({
     type: 'university'
    });
  };
  comeBackToThis = () => {
    this.setState({
      payed: true
    })
  }
  pressMe = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        {this.state.id && !this.state.payed && this.state.type === '' ? (
          <div>
            <div>
              what are you?
            </div>
            <button onClick={() => this.updateTypePlayer()}>player</button>
            <button  onClick={() => this.updateTypeUniversity()}>university</button>
          </div>
        ): 
        this.state.id && !this.state.payed && (this.state.type === 'player' || 'university') ? (
          <div>
            <div>
              money
            </div>
            <button onClick={() => this.comeBackToThis()}>yes to paid</button>
          </div>) : 
        this.state.id && this.state.payed && (this.state.type === 'player' || 'university') ? (
          <Link to={'/profile/' + this.state.id}>
            <button onClick={() => this.updateUser(this.state.id, { type: this.state.type, payed: this.state.payed})}>
              next
            </button>
          </Link>) : 
        (
          <div>
            nothing for you!
          </div>
        )}
        <button onClick={() => this.pressMe()}> 
          press me
        </button>
      </div>
    );
  }
}

export default Signup;
