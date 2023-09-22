// Match Characters that Occur Zero or More Times
// The asterix (*) character suffix matches 0 or more times

let soccerWord = "gooooooooooal!";
let gPhrase = 'gut feeling';
let oPhrase = 'over the moon';
let goRegex = /go*/;
let result = soccerWord.match(goRegex);
console.log(result);  // [ 'goooooooooo' ]
result = gPhrase.match(goRegex);
console.log(result);  // [ 'g' ]
result = oPhrase.match(goRegex);
console.log(result);  // null


/* 
For this challenge, chewieQuote has been initialized as the 
string Aaaaaaaaaaaaaaaaaaaarrrgh! behind the scenes.
Create a regex chewieRegex that uses the * character to 
match an uppercase A character immediately followed by 
zero or more lowercase a characters in chewieQuote.
Your regex does not need flags or character classes, and it 
should not match any of the other quotes. */

//Only change code below this line
let chewieQuote = "Aaaaaaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;  // Change this line
//Only chnage code above this line
result = chewieQuote.match(chewieRegex);

console.log(result);  // [ 'Aaaaaaaaaaaaaaaaaaaa' ]