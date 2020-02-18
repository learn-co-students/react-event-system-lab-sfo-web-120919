// Code Keypad Component Here
import React, {Component} from 'react';

class Keypad extends Component {
     state = {
        password: ""
     }

     render() {
         return (
             <input type="password" value={this.state.password} onKeyUp={() => console.log("Entering password...")} />
         )
     }
}

export default Keypad