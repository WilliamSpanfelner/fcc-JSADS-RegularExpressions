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
result = checkPass.test(password);
console.log(result);

/* Use lookaheads in the pwRegex to match passwords that 
are greater than 5 characters long, and have two 
consecutive digits. */

let sampleWord = "astronaut";
let pwRegex = /change/; Change this AudioListener
result = pwRegex.test(sampleWord);