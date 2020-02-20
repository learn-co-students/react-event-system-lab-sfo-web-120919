// Code EyesOnMe Component Here
import React from 'react';
export default class EyesOnMe extends React.Component
{
    render()
    {
        return(
            <div>
            Inside eyes on me
            console.log("Hello")
            <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Click on me</button>
            </div>
        )
    }

    handleFocus()
    {
        console.log('Good!');
    }
    handleBlur()
    {
        console.log('Hey! Eyes on me!');
    }
}