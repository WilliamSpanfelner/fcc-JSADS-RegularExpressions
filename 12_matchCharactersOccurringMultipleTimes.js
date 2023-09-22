// Match Characters that Occur One or More Times
/* Use the plus (+) character to suffix characters that 
need matching multiple times. */

/*
/a+/g would return ['a', 'a'] from a string of abab
*/

/* You want to find matches when the letter s occurs one or 
more times in Mississippi.  Write a regex that uses the  + 
sign. */

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi;  // Change this line
let result = difficultSpelling.match(myRegex);

console.log(result);