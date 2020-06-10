import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render(){
    // return (
    //   <div className="App">
    //     <h1> Hii, I'm a React App</h1>
    //   </div>
    // );
    // return (React.createElement('div', null, 'h1','hello')); //o/p: h1hello
    // return (React.createElement('div', null, React.createElement("h1", null, 'hello'))); // o/p: hello
    return (React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'hello')))//o/p: it's print at center b/c class is put
  }  

}

export default App;
