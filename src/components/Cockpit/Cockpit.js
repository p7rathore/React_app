import React from 'react';
import Radium, {StyleRoot} from 'radium';
import './Cockpit.css'

const cockpit = (props) => {
    // const classes = ["red", 'bold'].join(' ')// "red bold"
    const assignClasses = []
    if(props.persons.length <= 2){
        assignClasses.push('red');
    }
    if(props.persons.length <= 1){
        assignClasses.push('bold');
    }

    return(
        <div>
            <h1> Hii, I'm a React App</h1>
            <p className={assignClasses.join(' ')}>Tis is really working</p>
            <button style={props.style} onClick= {props.clicked}>Toggle Persons</button>            
        </div>    
    );
}

export default Radium(cockpit);