import React, { PureComponent} from 'react'
import Person from './Person/Person'

class Persons extends PureComponent { 
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

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("[UPDATE Persons.js] inside shouldComponentUpdate()","nextProps====", nextProps,"nextStat------", nextState)
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.chaged !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked;
    //     // return true
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log("[UPDATE Persons.js] inside componentWillUPdate()", nextProps, nextState)
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