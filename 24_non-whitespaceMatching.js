// Match Non-Whitespace Characters
/* Match everything except for whitespace characters
with \S which is equivalent to [^ \r\t\f\n\v] as it 
doesn't match whitespace, carriage return, tab, form feed,
and new line characters. */

let whitespace = "Whitespace. Whitespace everywhere.";
let nonSpaceRegex = /\S/g;
let result = whitespace.match(nonSpaceRegex).length;

console.log(result);  // 32

/* Change the regex countNonWhiteSpace to look for
multiple non-whitespace characters in a String. */

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; //Change this line
result = sample.match(countNonWhiteSpace);

console.log(result);  /* 
  [
    'W', 'h', 'i', 't', 'e', 's', 'p',
    'a', 'c', 'e', 'i', 's', 'i', 'm',
    'p', 'o', 'r', 't', 'a', 'n', 't',
    'i', 'n', 's', 'e', 'p', 'a', 'r',
    'a', 't', 'i', 'n', 'g', 'w', 'o',
    'r', 'd', 's'
  ]

  */