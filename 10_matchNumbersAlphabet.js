// Match Numbers and Letters of the Alphabet
// The hyphen can be used to match numbers also

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
let result = jennyStr.match(myRegex);
console.log(result);

/* Create a single regex that matches a range of letters
between h and s, and a range of numbers between 2 and 6.
Remember to include the appropriate flags in the regex. */
let quoteSample = "Blueberry 3.141592653s are delicious.";
myRegex = /change/;  // Change this line
result = myRegex;  // Change this line