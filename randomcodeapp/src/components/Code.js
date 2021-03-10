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
      length: 5,
    };
  }
  getCriteria = () => {
    alert("ALERT")
    const uppercaseC =window.confirm("Would you like uppercase characters?");
    const lowercaseC =window.confirm; window("Would you like lowercase characters?");
    const symbolsC =window.confirm("Would you like symbols?");
    const numbersC =window.confirm("Would you like numbers?");
    const passwordlen =prompt("How long is the password? 8-128");

    // this.setState({}) all the values from above
    this.setState({
      uppercaseC: this.state.uppercase,
      lowercaseC: this.state.lowercase,
      symbolsC: this.state.symbols,
      numbersC: this.state.numbers,
      passwordlen: this.state.length
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
        </div>

        <button>Generate Password</button>

      </div>
    )
  }
}
export default Codegen;