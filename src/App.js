import React, {Component} from 'react';
// import logo from './logo.svg';
import Person from './Person/Person.js'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1> Hii, I'm a React App</h1>
        <Person name= "piyush" age="23" /> 
        <Person name= "deepak" age="25"> My Hobbies: Racing, Painting </Person>
        <Person name= "raj" age='21' />
      </div>
    );
  }  
}

export default App;
