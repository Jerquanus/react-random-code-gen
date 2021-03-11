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
    const uppercase = window.confirm('Would you like uppercase letters?')
    const lowercase = window.confirm('Would you like lowercase letters?')
    const symbols = window.confirm('Would you like symbols?')
    const numbers = window.confirm('Would you like numbers?')
    const passlength = window.prompt('How many characters would you like your password to have?')

    // this.setState({}) all the values from above
    this.setState({
      uppercase,
      lowercase,
      symbols,
      numbers,
      passlength,
    });

    const password = this.newPass({ uppercase, lowercase, symbols, numbers, passlength })

    this.setState({ password })
  }
  // add all your methods for generating a password from the above state

  newPass = ({ uppercase, lowercase, symbols, numbers, passlength }) => {
    var length = passlength
    let upperAlpha = uppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : ''
    let lowerAlpha = lowercase ? 'abcdefghijklmnopqrstuvwxyz' : ''
    let finalSymbols = symbols ? '!@#$%^&*()' : ''
    let finalNumbers = numbers ? '0123456789' : ''

    let charset = lowerAlpha + upperAlpha + finalSymbols + finalNumbers
    // console.log('charset', charset)
    let value = ''

    //  perform ++i increment before operation
    //  need a way to control the length 
    for (var i = 0, n = charset.length; i < length; ++i) {
      value += charset.charAt(Math.floor(Math.random() * n))
    }
    // console.log('swann done', value)
    return value
  }

  // newPass = ({ getCharacters }) => {
  //   let charset = lowerAlpha + upperAlpha + finalSymbols + finalNumbers
  //   console.log('charset', charset)
  //   let value = ''

  //   //  perform ++i increment before operation
  //   //  need a way to control the length 
  //   for (var i = 0, n = charset.length; i < length; ++i) {
  //     value += charset.charAt(Math.floor(Math.random() * n))
  //   }
  //   console.log('swann done', value)
  //   return value
  // }

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
          <textarea value={this.state.password}></textarea>
        </div>

      </div>
    )
  }
}
// https://zoom.us/j/3471110935?pwd=alk4SWJjdEh4Qk1RNVg2L0xCemUvQT09#success
export default Codegen;