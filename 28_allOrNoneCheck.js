// Check for All or None
/* Suffixing a regex element with a question mark
(?) will check for zero or one character. The question
mark can be thought of as indicating an element as
optional. */

let american = 'color';
let british = 'colour';
let rainbowRegex = /colou?r/;
let result = rainbowRegex.test(american);
console.log(result);  // true
result = rainbowRegex.test(british);
console.log(result);  // true
