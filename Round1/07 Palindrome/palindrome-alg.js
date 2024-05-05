const isPalindrome = (string) => {


    let reverse_string  = "";
    let isPalindrome;
  
  
    // For loop to reverse the string given ...
    for(let i = string.length; i > 0; i--) {
        reverse_string = reverse_string + string[i-1];
    }

    // if statment for checking the palindrome 
    if(string === reverse_string){
        isPalindrome = true;

    } else {
        isPalindrome = false
    }

   return isPalindrome;

module.exports = isPalindrome;