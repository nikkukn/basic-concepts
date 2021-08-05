// Q-  How would you reverse words in a sentence?

const reverseWordsInStrings = (str) => {
    let rev = [];
    let wordLen = 0;

    for(let i=str.length;i>=0;i--){
        if(str===" "||i===0){
            rev.push(str.substr(i, wordLen+1));
            wordLen = 0;
        }else{
            wordLen;
        }
    }

    return rev.join(" ")
}

// another method

function reverseWordsInStringsUsingInbuiltFunction(str) {
    return str.split(" ").reverse().join(" ")
}