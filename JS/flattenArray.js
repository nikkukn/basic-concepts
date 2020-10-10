/*
Create a function to flatten nested array
*/

let arr = [1, 2, [3, 4, [5, 6, [7, [8, 9, 10]]]]];

flatArr = (arr) => {
    console.log("arr", arr)
    let temp = []
    return arr.reduce((total, item) => {

        return total.concat(Array.isArray(item) ? flatArr(item) : item);
    }, temp)
}

let result = flatArr(arr)