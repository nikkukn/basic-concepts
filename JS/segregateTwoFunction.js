/*
Given a input array of varying length, segregate all the 2's at the end of the array.
*/


let inputArr = [2, 9, 1, 5, 2, 3, 1, 2, 7, 4, 3, 8, 29, 2, 4, 6, 54, 32, 2, 100]

function segregateTwo(arr) {
    let count = 0;

    let temp = arr.filter(ele => {
        if (ele === 2) {
            count += 1;
            return false
        } else return ele
    })

    let twosArr = new Array(count).fill(2);
    return (temp.concat(twosArr));
}

let result = segregateTwo(inputArr);
console.log("result", result)
