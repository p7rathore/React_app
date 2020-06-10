import React, {Component} from 'react';
// import logo from './logo.svg';
import Person from './Person/Person.js'
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name:"Piyush", age: 23},
	  {name:"Deepak", age: 25},
	  {name: "Raj", age: 21}
	]
  }

  switchNameHandler = () => {
	  console.log("was clicked!");
  }

  render(){
    return (
      <div className="App">
        <h1> Hii, I'm a React App</h1>
		<p>This is really working</p>
		<button onClick= {this.switchNameHandler}>Switch Name</button>
		<Person name= {this.state.persons[0].name} age={this.state.persons[0].age} /> 
        <Person name= {this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Racing, Painting </Person>
        <Person name= {this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }  
}

export default App;
