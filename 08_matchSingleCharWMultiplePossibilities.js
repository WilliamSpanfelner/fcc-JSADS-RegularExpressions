// Match Single Character with Multiple Possibilities
/* Character classes are placed inside square brackets
and define a group of characters that you would like to
match. */

/* e.g. if it is desired to match big, bag and bug
but not bog, one might create a regex as follows
/b[iau]g/
*/

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
let result = bigStr.match(bgRegex);  // ["big"]
console.log(result);
result = bagStr.match(bgRegex);  // ["bag"]
console.log(result);
result = bugStr.match(bgRegex);  // ["bug"]
console.log(result);
result = bogStr.match(bgRegex);  // null
console.log(result);


/* Use a character class with vowels (a, e, i, o, u) in your
regex vowelRegex to find all the vowels in the string
quoteSample. */

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/;  // Change this line
result = vowelRegex;  // Change this line
