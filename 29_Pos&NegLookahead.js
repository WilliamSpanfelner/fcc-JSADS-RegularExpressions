// Positive and Negative Lookahead
/* A lookahead will look for the presence or not 
of a character */

let quit = "qu";
let noquit = 'qt';
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;
let result = quit.match(quRegex);
console.log(result);  // [ 'q' ]
result = noquit.match(qRegex);
console.log(result);  // [ 'q' ]

// Check a password with lookahead
let password = "abc123"
let checkPass = /(?=\w{3,6})(?=\D*\d)/;  
//check pw is between 3 and 6 characters and contains at least one number
result = checkPass.test(password);
console.log(result);  // true

/* Use lookaheads in the pwRegex to match passwords that 
are greater than 5 characters long, and have two 
consecutive digits. */

sampleWords = ['astronaut', 'bana12', 'abc123', '8pass99', 'astr1on11aut']

let sampleWord = sampleWords[0];
let pwRegex = /(?=\w{6,})(?=\D*\d{2})/;  // Change this AudioListener
result = pwRegex.test(sampleWord);

console.log(sampleWord, result, sampleWord.match(pwRegex));