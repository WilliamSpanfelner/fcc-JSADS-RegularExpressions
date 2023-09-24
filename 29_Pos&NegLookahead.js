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