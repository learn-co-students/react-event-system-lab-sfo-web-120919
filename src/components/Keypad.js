// Code Keypad Component Here
import React, {Component} from 'react';


class Keypad extends Component {
  constructor(props) {
    super(props); 
  }

  handlePasswordEntry = () => {
    console.log("Entering password...")
  }

  render() {
    return (
      <div>
        <p>Hello from Keypad</p>
        <input type="password" onKeyUp={this.handlePasswordEntry}></input>
      </div>
    )
  }
}

export default Keypad
