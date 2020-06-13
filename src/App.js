import React, {Component} from 'react';
// import logo from './logo.svg';
import Person from './Person/Person.js';
import Radium, {StyleRoot} from 'radium';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import './App.css';

class App extends Component {
	state = {
		persons: [
			{id: 'a1', name:"Piyush", age: 23},
			{id: 'a2', name:"Deepak", age: 25},
			{id: 'a3', name: "Raj", age: 21}
		],
		showPersons: false
	}
	
	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(person => {
			return person.id === id
		});

		//const person = this.state.persons[personIndex] this not right approch

		//const person = Object.assign({}, this.state.persons[personsIndex]) it's a old approch (ES5)
		
		const person = {
			...this.state.persons[personIndex]// and it's ES6 approch
		}
		
		person.name = event.target.value

		const persons = [...this.state.persons]
		persons[personIndex] = person

		this.setState({persons: persons});
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
			backgroundColor: 'green',
			color: 'white',
			font: 'inherit',
			bordor: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
			':hover':{            // it's a sudo selector use after install Radium pkg
				backgroundColor: 'lightgreen',
				color: 'black'
			}
		}
		let persons = null;
		if (this.state.showPersons){
			persons= (
				<div>
					{this.state.persons.map((person, index) => {
						return <ErrorBoundary key={person.id}>
									<Person 
										click = {() => this.deletePersonHandler(index)}
										name= {person.name} 
										age={person.age}
										changed={(event) => this.nameChangedHandler(event,person.id)} 
									/>
								</ErrorBoundary>	
					})}
				</div>
			);	
			style.backgroundColor = 'red';
			style[':hover'] = {
				backgroundColor: "salmon",
				color: 'black'
			}
		}

		// const classes = ["red", 'bold'].join(' ')// "red bold"
		const assignClasses= [];
		if(this.state.persons.length <= 2){
			assignClasses.push('red');
		}
		if(this.state.persons.length <=1){
			assignClasses.push('bold');
		}


		return (
			<StyleRoot>
				<div className = "App" >
					<h1> Hii, I'm a React App</h1>
					<p className={assignClasses.join(' ')}>This is really working</p>
					<button style={style} onClick= {this.togglePersonsHandler}>Toggle Persons</button>
					{persons}
				</div>
			</StyleRoot>
		);
  	}  
}

export default Radium(App);
