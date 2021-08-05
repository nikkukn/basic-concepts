// Q - How would you create all permutation of a string?

function swap(s, i, j) {
    let arr = s.split("")
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
    return arr.join("");
}


function findPermutations(str, left, right) {

    for(let i=1;i<str.length;i++){
        str = swap(str, left, i);
        findPermutations(str, left+1, r);
        str = swap(str, l, i)
    }
}
let inputStr = "abc";
findPermutations(inputStr, 0, inputStr.length-1)
