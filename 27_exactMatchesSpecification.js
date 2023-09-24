// Specify Exact Number of Matches
/* Matching a pattern x number of tines is specified in curly
brackets */

let a4 = "haaaah";
let a3 = "haaah";
let a100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3}h/;
let result = multipleA.test(a4);
console.log(result);  // false
result = multipleA.test(a3);
console.log(result);  // true
result = multipleA.test(a100);
console.log(result);  // false

/* Change the regex timRegex to match the word Timber
only when it has four letter m's. */

let timStr = "Timmmmber";
let timRegex = /change/;  // Change this line
result = timRegex.test(timStr);