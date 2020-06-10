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

  switchNameHandler = (newName) => {
	this.setState({
		persons: [
			{name: newName, age: 23},
			{name: "Deepak Rathore", age: 25},
			{name: 'Raj Sharma', age: 21}
		]
	})
  }

  nameChangedHandler = (event) => {
	  this.setState({
		  persons: [
			  {name: "piyush", age: 23},
			  {name: event.target.value, age: 25},
			  {name: "raj", age: 21} 
		  ]
	  })
  }

  render(){
    return (
      <div className="App">
        <h1> Hii, I'm a React App</h1>
		<p>This is really working</p>
		<button onClick= {() => this.switchNameHandler("Piyush")}>Switch Name</button>
		<Person 
			name= {this.state.persons[0].name} 
			age={this.state.persons[0].age}
		/> 
		<Person 
			name= {this.state.persons[1].name} 
			age={this.state.persons[1].age}
			click= {() => this.switchNameHandler("Piyush Rathore")}
			changed= {this.nameChangedHandler}
		>
			My Hobbies: Racing, Painting 
		</Person>
		<Person 
			name= {this.state.persons[2].name} 
			age={this.state.persons[2].age} 
		/>
      </div>
    );
  }  
}

export default App;
