import React, { Component} from 'react'
import Person from './Person/Person'

class Persons extends Component { 
    constructor(props){
        super(props)
        console.log("[Persons.js] inside constructor()")
    } 
    componentWillMount() {
        console.log("[Persons.js] inside componentwillMount()")
    }
    componentDidMount() {
        console.log("[Persons.js] inside componentDidMount()")
    }

    componentWillReceiveProps(nextProps) {
        console.log("[UPDATE Persons.js] inside componentWillReceiveProps()", nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[UPDATE Persons.js] inside shouldComponentUpdate()","nextProps====", nextProps,"nextStat------", nextState)
        // return false; // its means not delete person recorde when you click means not chenge props and state
        // return true; // when write true then delete person record when you click means props and state update
        return nextProps.persons !== this.props.persons// it's right way in place of return true it's work same as return true
    }

    componentWillUpdate() {
        console.log("[UPDATE Persons.js] inside componentWillUPdate()")
    }

    componentDidUpdate() {
        console.log("[UPDATE Persons.js] inside componentDidUpdate()")
    }

    render(){
        console.log("[persons.js] inside render()")
        return this.props.persons.map((person, index)=>{
            return <Person
                        click= {() => this.props.clicked(index)}
                        name= {person.name}
                        age= {person.age}
                        changed= {(event) => this.props.changed(event,person.id)}
                        key={person.id}
                    /> 
        });
    }
}

export default Persons