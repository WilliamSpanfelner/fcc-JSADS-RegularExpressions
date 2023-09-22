// Match All Numbers
/* The shorthand character class for matching 
numerics is \d (equivalent to [0-9])

/* Use the shorthand character class \d to count how many
digits are in movie titles. Written out numbers("six" instead 
of 6) do not count. */

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;  // Change this line
let result = movieName.match(numRegex);

console.log(numRegex, result, result.length);