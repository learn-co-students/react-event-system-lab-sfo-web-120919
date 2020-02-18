// Code EyesOnMe Component Here
import React, {Component} from 'react';


class EyesOnMe extends Component {
    
    state = {

    }

    handleOnFocus = () => {
        console.log("Good!")
    }

    handleOnBlur = () => {
        console.log("Hey! Eyes on me!")
    }
    
    render() {
        return (
           <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}>Click me!</button>
        )
    }
}

export default EyesOnMe