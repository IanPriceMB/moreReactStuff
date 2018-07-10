import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Homepage from "./pages/homepage";
import Signup from "./pages/signup";
import Proflie from "./pages/profile";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/signup/:id" component={Signup} />
      <Route exact path="/profile" component={Proflie} />
      </div>
    </Router>
    );
  }
}

export default App;
