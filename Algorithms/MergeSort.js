// function to implement merge sorting in JS

function mergeSort(array) {
    if(array.length<2) {
        return array;
    }

    const middle = Math.floor(array/2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right))
}

// function merge two arrays on the basis of the outputs 
function merge(left, right) {
    const sorted = [];
    while(left.length && right.length) {
        if(left[0]<=right[0]) {
            sorted.push(left.shift())
        }else {
            sorted.push(right.shift())
        }
    }
    let results = [...sorted, ...left, ...right];
    return results;
}

// Time complexity - O(n logn)