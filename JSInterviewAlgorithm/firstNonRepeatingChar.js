// Q- How could you find the first non repeating char in a string?


function firstNonRepeatingChar(str){
    let len = str.length;

    let charSet = {};

    let i=0;
    while(i<len){
        if(charSet[str[i]]){
            charSet[str[i]] = charSet[str[i]]++;
        }else {
            charSet[str[i]] = 1;
        }
        i++;
    }

    for(let k in charSet){
        if(charSet[k]===1)
        return k;
    }
}