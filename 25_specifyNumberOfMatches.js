// Specify Upper and Lower Number of Matches
/*
Quantity specifiers declared with curly brackets {}
allow matching to occur a required number of times. 
The + is used to match one or more and * is for 
matching zero or more times.

To match only the letter a from three to five times in
the string ah, the regex would be /a{3,5}h/.
*/

let a6 = "aaaaaah";
let a4 = "aaaah";
let a2 = "aah";
let multipleA = /a{3,5}h/;
let result = multipleA.test(a6);
console.log(result);  // true
result = a6.match(multipleA);
console.log(result);  // [ 'aaaaah' ]
result = multipleA.test(a4);
console.log(result);  // true
result = a4.match(multipleA);
console.log(result);  // [ 'aaaah' ]
result = multipleA.test(a2);
console.log(result);  // false
result = a2.match(multipleA);
console.log(result);  // null
