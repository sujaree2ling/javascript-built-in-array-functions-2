function isPalindrome(string) {
  // Start coding here
  return(string.trim() === string.trim().split("").reverse().join("")) ? true :false
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false