// Q - Find the max difference of elements from two sorted array with non duplicate integer elements

var text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    // get first N character long string from a big message but dont cut the last word (word break problem)
function findFirstNCharFromStringWithoutLastWordCut(str, limit){
    let words  = str.split(" ")
    let count = 0;
    let curr;
    let result = []

    for(let i = 0;i<str.length;i++){
        curr = words[i];
        if(curr.length+ count<=limit){
            count+=curr.length;
            result.push(curr);
        }else {
            break;
        }
    }

    return result;
}

findFirstNCharFromStringWithoutLastWordCut(text, 30)