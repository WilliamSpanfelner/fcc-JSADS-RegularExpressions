// Match Ending String Patterns
// Match string suffixes with the dollar sign ($) character

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
let result = storyRegex.test(theEnding);
console.log(result);  // true
let noEnding = "Sometimes a story will have to end";
result = storyRegex.test(noEnding);
console.log(result);  // false

/* Use the anchor character ($) to match the string caboose
at the end of the string caboose. */

let caboose = "The last car on a train is the caboose";
let lastRegex = /change/;  // Change this line
result = lastRegex.test(caboose);