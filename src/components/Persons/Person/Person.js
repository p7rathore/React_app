import React, { Component} from 'react';
import './Person.css';
import Radium from 'radium';
import PropTypes from 'prop-types'
import withClass from '../../hoc/withClass'
import Aux from '../../hoc/Aux'
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
        if(this.props.position === 0){
            this.inputElement.focus();
        }    
    }

    render(){
        console.log("[Person.js] inside render()")
        const style = {
            '@media(min-width: 500px)':{
                width: '450px'
            }
        }
        return (
                // <div className="Person" style={style}> 
                // <WithClass classes="Person">
                <Aux>
                    <p onClick={this.props.click}> I'm a {this.props.name} and I am {this.props.age} year old!</p>
                    <p>{this.props.children}</p>
                    <input
                        ref= {(inp) => {this.inputElement = inp}} 
                        type="text" 
                        onChange={this.props.changed} 
                        value={this.props.name}
                    />
                {/* </div>     */}
                {/* </WithClass> */}
                </Aux>
            );
            // return [
            //     <p key='1' onClick={this.props.click}> I'm a {this.props.name} and I am {this.props.age} year old!</p>,
            //     <p key='2'>{this.props.children}</p>,
            //     <input key='3' type="text" onChange={this.props.changed} value={this.props.name}/>
            // ]
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string, // if wirte incorrect props type then appication show warning
    age: PropTypes.number,
    changed: PropTypes.func
};    
 
export default Radium(withClass(Person, "Person"));