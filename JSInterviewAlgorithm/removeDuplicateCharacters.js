// Q- How will you remove duplicate characters from a sting?

function removeDuplicateCharFromString(str){
    let len = str.length;

    let charCount = {}, newStr = [];

    for(let i=0;i<len;i++){
        if(charCount[str[i]]){
            charCount[str[i]]++;
        }else {
            charCount[str[i]] = 1;
        }
    }

    for(let k in charCount){
        if(charCount[k]===1){
            newStr.push(k);
        }
    }
    return newStr.join("")
}