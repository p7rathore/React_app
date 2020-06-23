import React, { Component} from 'react';
import './Person.css';
import Radium from 'radium';
class Person extends Component { 
    render(){
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
    }
};
 
export default Radium(Person);