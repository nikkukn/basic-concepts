// Q- From web page, how would u find similar words like rat, cat, bat and broom, groom etc.

// level is the number of same chars between two strings so that they can be called similar.

const specials = [',', '.', '-', ';', '/', '?', ':'];
/* 
This function will create a mapping between the word and chars
ex - "From"

return type - {
    letters: ["F", "r", "o", "m"],
    word: "From"
}

*/
function wordMappingandChar(word){
    let result = {}
    let wordArr = arr.split.split("");

    if(specials.indexOf(wordArr[wordArr.length-1])> -1){
        result.letters = wordArr.slice(0, -1);
        result.word = result.letters.join("");
    }else {
        result.letters = wordArr;
        result.word = word;
    }

    return result;
}

function findSimilarWords(text, level) {
    let wordsTemp = text.split(" "),
    words = [],
    curr,
    test,
    sameCount = 0,
    added = false,
    similar = [];

    // split and create word char mapping for each word.
    for(let i=0;i<wordsTemp.length;i++){
        let tempWord = wordsTemp[i];
        if(tempWord.length>2){
            words.push(wordMappingandChar(tempWord));
        }
    }
    

    for(let i=0;i<words.length;i++){
        curr = words[i]
        for(let j=0;j<words.length;j++){
            let noneOccured = false;
            let occuredAlready = false;
            test = words[j]

            if(i!==j){
                for(let k=0;k<curr.letters.length;k++){
                    if(curr.letters[k]===test.letters[k]){
                        sameCount++;
                        if(sameCount>=level){
                            if(similar.length>0){
                                // check if the word already exists

                                for(let n=0;n<similar.length;n++){
                                    curSimilar = similar[n];

                                    // if both exists in the array.
                                    if(curSimilar.indexOf(curr.word)> -1 && curSimilar.indexOf(test.word)> -1){
                                        occuredAlready = true;
                                        break;
                                    }else if(curSimilar.indexOf(curr.word) !== -1 && curSimilar.indexOf(test.word)=== -1){
                                        curSimilar.push(test.word);
                                        added = true;
                                    }else if(curSimilar.indexOf(curr.word) === -1 && curSimilar.indexOf(test.word)!== -1){
                                        curSimilar.push(curr.word);
                                        added = true;
                                    }

                                    if(added)
                                    break;

                                    //  both do not exist in the array
                                    if(!occuredAlready && !added){
                                        similar.push([curr.word, test.word]);
                                    }
                                }

                            }else {
                                similar.push([curr.word, test.word]);
                            }
                        }
                    }else{
                        sameCount = 0;
                    }
                }
            }
        }
    }
    return similar;
}

console.log(findSimilarWords(text, 3));