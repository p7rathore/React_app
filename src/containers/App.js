import React, {Component} from 'react';
// import logo from './logo.svg';
import Persons from '../components/Persons/Persons';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';

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
				<Persons 
					persons= {this.state.persons}
					clicked= {this.deletePersonHandler}
					changed= {this.nameChangedHandler} 
				/>
			);	
			style.backgroundColor = 'red';
			style[':hover'] = {
				backgroundColor: "salmon",
				color: 'black'
			}
		}

		return (
			<StyleRoot>
				<div className = "App" >
					<Cockpit
						appTitle={this.props.title}
						persons= {this.state.persons}
						showPersons= {this.showPersons}
						clicked= {this.togglePersonsHandler} 
						style= {style}
					/>
					{persons}
				</div>
			</StyleRoot>
		);
  	}  
}

export default Radium(App);
