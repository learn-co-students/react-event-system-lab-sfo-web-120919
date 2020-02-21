import React from 'react'

class EyesOnMe extends React.Component {

    handleBlur = () => {
        console.log("Hey! Eyes on me!")
    }

    handleFocus = () => {
        console.log("Good!")
    }
    render() {
        return <button onBlur={this.handleBlur} onFocus={this.handleFocus}></button>
    }

}


export default EyesOnMe