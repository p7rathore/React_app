import React, { Component} from 'react';
import './Person.css';
import Radium from 'radium';
class Person extends Component {
    constructor(props){
        super(props)
        console.log("[Person.js] inside constructor()")
    }

    componentWillMount() {
        console.log("[Person.js] inside componentWillMount()")
    }

    componentDidMount() {
        console.log("[Person.js] inside componentDidMount()")
    }

    render(){
        console.log("[Person.js] inside render()")
        const style = {
            '@media(min-width: 500px)':{
                width: '450px'
            }
        }
        return (
                <div className="Person" style={style}> 
                    <p onClick={this.props.click}> I'm a {this.props.name} and I am {this.props.age} year old!</p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.changed} value={this.props.name}/>
                </div>    
            );
            // return [
            //     <p key='1' onClick={this.props.click}> I'm a {this.props.name} and I am {this.props.age} year old!</p>,
            //     <p key='2'>{this.props.children}</p>,
            //     <input key='3' type="text" onChange={this.props.changed} value={this.props.name}/>
            // ]
    }
};
 
export default Radium(Person);