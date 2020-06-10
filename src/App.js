import React, {Component} from 'react';
// import logo from './logo.svg';
import Person from './Person/Person.js'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1> Hii, I'm a React App</h1>
        <Person /> 
      </div>
    );
  }  
}

export default App;
