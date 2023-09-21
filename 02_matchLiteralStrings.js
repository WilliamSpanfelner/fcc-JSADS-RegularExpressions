// Match Literal Strings
const testStr = "Hello, my name is Kevin.";
const testRegex = /Kevin/;
let result = testRegex.test(testStr);

console.log(result);  // true

/* Note that the regex expression will not match other 
forms of the word Kevin like kevin or KEVIN */
const wrongRegex = /kevin/;
result = wrongRegex.test(testStr);

console.log(result);  // false

/* Complete the regex waldoRegex to find "Waldo" in the 
string waldoIsHiding with a literal match */

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
result = waldoRegex.test(waldoIsHiding);

console.log(result);  //true