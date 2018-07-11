import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';
import API from '../utils/API'

class Profile extends Component {
  state = {
    user: {},
    location: 'profile',
    discovers: []
  };

  componentDidMount() {
    this.loadInfo(this.props.match.params.id);
  }
  loadInfo = id => {
    API.getUser(id)
    .then(res => this.setState({ user: res.data }))
    .catch(err => console.log(err));
  };
  locationHandler = local => {
      this.setState({location: local});
  }
  handlePlayerFormSubmit = event => {
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
        .then(res => console.log(res))
        .catch(err => console.log(err));
      }
  };
  handleUniversityFormSubmit = event => {
    event.preventDefault();
    if (this.state.user.schoolName) {
        API.updateUser( this.state.user._id, {
            schoolName: this.state.user.schoolName,
            scoutName: this.state.user.scoutName,
            coach: this.state.user.coach,
            heroesOfTheStormOffered: this.state.user.heroesOfTheStormOffered,
            overwatchOffered: this.state.user.overwatchOffered,
            leagueOfLegendsOffered: this.state.user.leagueOfLegendsOffered,
            schoolCity: this.state.user.schoolCity,
            schoolState: this.state.user.schoolState,
        })
        .then(res => console.log(res))
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
  discoverUsers = event => {
      event.preventDefault();
        API.getSpecificUsers({type: 'university'})
        .then(res => this.setState({discovers: res.data}))
        .catch(err => console.log(err));
  }

  render() {
    return (
        <div>
            <header>

            </header>
            <nav>
                <ul>
                    <li onClick={() => this.locationHandler('profile')}>Profile</li>
                    <li onClick={() => this.locationHandler('discover')}>Discover</li>
                </ul>
            </nav>
        {this.state.user._id === this.props.match.params.id && this.state.user.type === 'player' && this.state.location==='profile' ? (
        <div>
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
                <button type='submit' onClick={this.handlePlayerFormSubmit}>Update</button>
                </form>
            </main>
        </div>
        ) : 
        this.state.user._id === this.props.match.params.id && this.state.user.type === 'university' && this.state.location==='profile' ?(
        <div>
            <main>
                <form>
                School Name:<br />
                <input type='text'  name="schoolName" defaultValue={this.state.user.schoolName}
                   onChange={this.handleInputChange}/>
                <br />
                Head Coach:<br />
                <input  name="coach" defaultValue={this.state.user.coach}
                  onChange={this.handleInputChange} />
                  <br />
                  Head Scout:<br />
                <input  name="scoutName" defaultValue={this.state.user.scoutName}
                  onChange={this.handleInputChange} />
                <br />
                Heroes of the Storm:<br />
                <button type='button' onClick={() => this.trueFalse('heroesOfTheStormOffered', true)}>yes</button>
                <button type='button' onClick={() =>this.trueFalse('heroesOfTheStormOffered', false)}>no</button>
                <br />
                Overwatch:<br />
                <button type='button' onClick={() => this.trueFalse('overwatchOffered', true)}>yes</button>
                <button type='button' onClick={() =>this.trueFalse('overwatchOffered', false)}>no</button>
                <br /> 
                League of Legends:<br />
                <button type='button' onClick={() => this.trueFalse('leagueOfLegendsOffered', true)}>yes</button>
                <button type='button' onClick={() =>this.trueFalse('leagueOfLegendsOffered', false)}>no</button>
                <br /> 
                City:<br />
                <input  name="schoolCity" defaultValue={this.state.user.schoolCity}
                   onChange={this.handleInputChange}/>
                <br />
                State:<br />
                <input  name="schoolState" defaultValue={this.state.user.schoolState}
                   onChange={this.handleInputChange}/>
                <br />
                <br />
                <button type='submit' onClick={this.handleUniversityFormSubmit}>Update</button>
                </form>
            </main>
        </div>
        ) : 
        this.state.user._id === this.props.match.params.id && this.state.user.type === 'player' && this.state.location==='discover' ? (
        <div>
            <button type='submit' onClick={this.discoverUsers}>Discover</button>
            {this.state.discovers.length ? (<ul>
                {this.state.discovers.map(discovered => (
                    
                  <li key={discovered._id}>
                    <h1>
                      <strong>
                        {discovered.schoolName} {discovered.schoolCity}, {discovered.schoolState} <br />
                      </strong>
                    </h1>
                      <h3>Esports available on campus</h3>
                      <ul>
                          {discovered.overwatchOffered ? (<li>Overwatch</li>):(<div></div>)}
                          {discovered.heroesOfTheStormOffered ? (<li>Hero of the Storm</li>):(<div></div>)}
                          {discovered.leagueOfLegendsOffered ? (<li>League of Legends</li>):(<div></div>)}
                      </ul>
                  </li>
                ))}
              </ul>) : ( <h3>No Results to Display</h3>)}
        </div>
        ) :
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
