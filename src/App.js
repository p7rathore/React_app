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
		],
		showPersons: false
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

	togglePersonsHandler = () => {
		const doseShow = this.state.showPersons;
		this.setState({showPersons: !doseShow});
	}

	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice(); // old featuer
		const persons = [...this.state.persons] // es6 provide spread operator(...)
		persons.splice(personIndex, 1);
		this.setState({persons: persons});  
	}

	render(){
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			bordor: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		}
		let persons = null;
		if (this.state.showPersons){
			persons= (
				<div>
					{this.state.persons.map((person, index) => {
						return <Person 
									click = {() => this.deletePersonHandler(index)}
									name= {person.name} 
									age={person.age}
								/>
					})}
				</div>
			);	
		}
		return (
			<div className="App">
				<h1> Hii, I'm a React App</h1>
				<p>This is really working</p>
				<button style= {style} onClick= {this.togglePersonsHandler}>Toggle Persons</button>
				{persons}
			</div>
		);
  	}  
}

export default App;
