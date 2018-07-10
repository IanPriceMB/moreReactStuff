import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';
import API from '../utils/API'

class Profile extends Component {
  state = {
    user: {},
    location: 'profile'
  };

  componentDidMount() {
    this.loadInfo(this.props.match.params.id);
  }

  loadInfo = id => {
    API.getUser(id)
    .then(res => this.setState({ user: res.data }))
    .catch(err => console.log(err));
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.user.firstName && this.state.user.lastName) {
        API.updateUser( this.state.user._id, {
            firstName: this.state.user.firstName,
            lastName:  this.state.user.lastName,
            heroesOfTheStorm:  this.state.user.heroesOfTheStorm,
            gamerTag:  this.state.user. gamerTag,
            rank:  this.state.user.rank,
            heroesOfTheStormPrimary:  this.state.user.heroesOfTheStormPrimary,
            heroesOfTheStormSecondary:  this.state.user.heroesOfTheStormSecondary,
            age:  this.state.user.age,
            city:  this.state.user.city,
            state:  this.state.user.state
        })
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      }
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    let user = {...this.state.user}
    user[name] = value
    this.setState({user
    });
  };

  pressMe = () => {
    console.log(this.state)
  }
  trueFalse = (name, v) => {
      let user = {...this.state.user}
      user[name] = v
    this.setState({user
    })
  }
  render() {
    return (
        <div>
        {this.state.user._id === this.props.match.params.id && this.state.user.type === 'player' && this.state.location==='profile' ? (
          <div>
            <header></header>
            <nav>
                <ul>
                    <li>Profile</li>
                    <li>Search</li>
                </ul>
            </nav>
            <main>
                <form>
                First name:<br />
                <input type='text'  name="firstName" defaultValue={this.state.user.firstName}
                   onChange={this.handleInputChange}/>
                <br />
                Last name:<br />
                <input  name="lastName" defaultValue={this.state.user.lastName}
                  onChange={this.handleInputChange} />
                <br />
                Heroes of the Storm:<br />
                <button type='button' onClick={() => this.trueFalse('heroesOfTheStorm', true)}>yes</button>
                <button type='button' onClick={() =>this.trueFalse('heroesOfTheStorm', false)}>no</button>
                <br />
                Gamer Tag:<br />
                <input  name="gamerTag" defaultValue={this.state.user.gamerTag}
                  onChange={this.handleInputChange} />
                  <br />
                  {this.state.user.heroesOfTheStorm ? (
                    <div>
                    Primary Heroes of the Storm Role:<br />
                    <input  name="heroesOfTheStormPrimary" defaultValue={this.state.user.heroesOfTheStormPrimary}
                       onChange={this.handleInputChange}/>
                    <br />
                    Secondary Heroes of the Storm Role:<br />
                    <input  name="heroesOfTheStormSecondary" defaultValue={this.state.user.heroesOfTheStormSecondary}
                       onChange={this.handleInputChange}/>
                    <br />
                    </div>
                ):(<div></div>)}
                <br />
                Rank:<br />
                <input  name="rank" defaultValue={this.state.user.rank}
                   onChange={this.handleInputChange}/>
                <br />
                Age:<br />
                <input  name="age" defaultValue={this.state.user.age}
                   onChange={this.handleInputChange}/>
                <br />
                City:<br />
                <input  name="city" defaultValue={this.state.user.city}
                   onChange={this.handleInputChange}/>
                <br />
                State:<br />
                <input  name="state" defaultValue={this.state.user.state}
                   onChange={this.handleInputChange}/>
                <br />
                <br />
                <button type='submit' onClick={this.handleFormSubmit}>Update</button>
                </form>
            </main>


          </div>
        ) : 
        this.state.id && this.state.type === 'university' ? (
          <div>
            <div>
              uni
            </div>
            <button onClick={() => this.comeBackToThis()}>yes to paid</button>
          </div>) : 
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

export default Profile;
