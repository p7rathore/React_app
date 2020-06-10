import React from 'react'
// const person = function () {
    //it's a es5 normal function 
// }


const person = () => {// it's a ES6 Arrow function 
    // return <p> I'm a Person Math.floor(Math.random() * 30) year old!</p> // o/p same as tex  t
    return <p> I'm a Person {Math.floor(Math.random()* 30)} year old!</p> // it's right way   
};

export default person;