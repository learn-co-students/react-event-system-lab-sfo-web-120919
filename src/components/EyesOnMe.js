// Code EyesOnMe Component Here
import React, {Component} from 'react';


class EyesOnMe extends Component {

  handleBlur = () => {
    console.log('Hey! Eyes on me!')
  }

  handleFocus = () => {
    console.log('Good!')
  }
  render() {
    return (
      <div>
        <p>Hello from Eyes on Me</p>
        <button onBlur={this.handleBlur} onFocus={this.handleFocus}>This is a button</button>
      </div>
    )
  }
}

export default EyesOnMe;