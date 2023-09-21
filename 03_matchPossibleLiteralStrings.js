// Match a Literal String with Different Possibilities
// Search for multiple patterns or strings with the | operator

// /yes|no/
// /yes|no|maybe/

// the above regex expressions will match more than one pattern

/* Complete the regex petRegex to match the pets 
dog, cat, bird, or fish. */
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // change this line
let result = petRegex.test(petString);

console.log(result); // true