import React, {Component} from 'react';

// const withClass = (WrappedComponent, className) => {
//     return (props) => ( // here we return function 
//         <div className={className}>
//             <WrappedComponent {...props}/>
//         </div>    
//     )
// };

const withClass = (WrappedComponent, className) => {
    return class extends Component {    // Now Return class 
        render () {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }
}
export default withClass;
