// get words from user
let word1 = prompt("Enter first word:");
let word2 = prompt("Enter second word:");

// reverse a word
function reverse(str) {
  return str.split('').reverse().join('');
}

// show first word info
console.log("Original:", word1);
console.log("Reversed:", reverse(word1));
console.log("Is palindrome?", word1 === reverse(word1));

// show second word info
console.log("Original:", word2);
console.log("Reversed:", reverse(word2));
console.log("Is palindrome?", word2 === reverse(word2));