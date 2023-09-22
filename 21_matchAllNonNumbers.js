// Match All Non-numbers
/* The shortcut character class for non-numerics is 
\D which is equivalent to [^0-9] */

/* Use the shorthand character class for non-digits \D to 
count how many non-digits are in movie titles. */
let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/;  // Change this line
let result = movieName.match(noNumRegex);

console.log(noNumRegex, result, result.length);
