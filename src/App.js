import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PersonList from './PersonList';

class App extends Component {
  state = { people: []};
  render() {
    return(
    <div className="App">
    <PersonList people={this.state.people}/>
    testttt
    </div>
  );
  }
}

export default App;
