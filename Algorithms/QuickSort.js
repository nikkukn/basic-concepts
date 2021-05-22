// function to implement QuickSort in JS

function quickSort(array) {
    if(array.length<2) return array;
    let pivotIndex = Math.floor(array.length/2);
    let pivot =  array[pivot];
    let less = []
    let greater = []

    for(let i=0; i<array.length;i++) {
        if(i!==pivotIndex) {
            array[i]<pivot? less.push(array[i]) : greater.push(array[i]);
        }
    }

    return [...quickSort(less), ...quickSort(greater)];
}


// Time Complexity - O(logn)