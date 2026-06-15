function isPalindrome(string) {
  // Start coding here
  const cleanWord = string.trim();
  const reversedWord = cleanWord.split('').reverse().join('');
  return cleanWord === reversedWord;
}
  

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false