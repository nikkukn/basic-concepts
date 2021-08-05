// Q- How will you verify a word as palindrome?

function checkPalindrome(str) {
    for(let i=0;i<str.length/2;i++){
        if(str[i]!==str[str.length-1-i]){
            return false;
        }
    }

    return true;
}


//  using inbuilt functions
function checkPalindromeUsingInbuiltFunctions(str){
    let revStr = str.split("").reverse().join("")

    return str === revStr;
}
