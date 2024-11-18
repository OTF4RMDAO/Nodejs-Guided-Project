const generatePassword = require('generate-password'); // Load the module

// Generate a random password
const password = generatePassword.generate({
  length: 10, // Set the password length
  numbers: true, // Include numbers
  symbols: true, // Include symbols
});

console.log('Generated password: ' + password);
