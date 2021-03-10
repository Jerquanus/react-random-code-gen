import React, { Component } from 'react';



class Codegen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // initial state for pwd length and all char bools
      uppercase: true,
      lowercase: false,
      symbols: false,
      numbers: false,
      passlength: 5,
    };
  }
  getCriteria = () => {
    // ask all prompts and confirms preceded by window.
    const uppercase = this.state.uppercase.window.confirm('Would you like uppercase letters?')
    const lowercase = this.state.lowercase.window.confirm('Would you like lowercase letters?')
    const symbols = this.state.symbols.window.confirm('Would you like symbols?')
    const numbers = this.state.numbers.window.confirm('Would you like numbers?')
    const passlength = this.state.length.window.prompt('How many characters would you like your password to have?')

    // this.setState({}) all the values from above
    this.setState({
      uppercase,
      lowercase,
      symbols,
      numbers,
      passlength,
    });


  }
  // add all your methods for generating a password from the above state


  render() {
    // run all the above methods to calculate the password before rendering    
    return (
      <div>
        <div>
          <h1> What would you like your password to contain?</h1>
          <h3> Uppercase Characters?</h3>
          <h3> Lowercase Characters?</h3>
          <h3> Symbol Characters?</h3>
          <h3> Numbers?</h3>
          <h2> How long would you like your password?</h2>
        </div>

        <button onClick={this.getCriteria}>Generate Password</button>

        <div>
          <textarea>{this.state.newPass}</textarea>
        </div>

      </div>
    )
  }
}

export default Codegen;