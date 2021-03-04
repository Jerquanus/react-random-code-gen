// Assignment Code

// Questions
var inputupper = confirm('Would you like uppercase letters?')
var inputlower = confirm('Would you like lowercase letters?')
var inputsymbols = confirm('Would you like symbols?')
var inputnumbers = confirm('Would you like numbers?')
var getlength = prompt(
  'How many characters would you like your password to have?'
)
function generatePassword(len, upper, lower, symbols, numbers) {
  var length = len
  let upperAlpha = upper ? 'abcdefghijklmnopqrstuvwxyz'.toUpperCase() : ''
  let lowerAlpha = lower ? 'abcdefghijklmnopqrstuvwxyz' : ''
  let finalSymbols = symbols ? '!@#$%^&*()' : ''
  let finalNumbers = numbers ? '0123456789' : ''
  charset = lowerAlpha + upperAlpha + finalSymbols + finalNumbers
  console.log('charset', charset)
  value = ''

  //  perform ++i increment before operation
  //  need a way to control the length 
  for (var i = 0, n = charset.length; i < length; ++i) {
    value += charset.charAt(Math.floor(Math.random() * n))
  }
  console.log('swann done', value)
  return value
}
// // the button
var generateBtn = document.querySelector('#generate')
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
function writePassword() {
  var password = generatePassword(
    getlength,
    inputupper,
    inputlower,
    inputsymbols,
    inputnumbers
  )
  var passwordText = document.querySelector('#password')
  passwordText.value = password
}

