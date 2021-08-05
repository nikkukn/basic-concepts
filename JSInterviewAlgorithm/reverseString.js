// Q- How would you reverse a string in JavaScript?

const reverseStrings = (str) => {
    let result = [];

    for(let i=0;i<str.length;i++){
        result.unshift(str[i]);
    }

    return result.join("")
}

// using direct function 
const reverseStringsUsingFunctions = (str)=> {
    if(!str || str.length<2) return str;
    else
    return str.split("").reverse().join("");
}