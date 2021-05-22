// function to implement bubble sort in JS

function bubbleSort(array) {
    for(let i=0;i<array.length;i++) {
        for(let j=0;j<array.length -i-1;j++) {
            if(array[i]>array[j]){
                let temp = array[i];
                array[i] = array[j];
                array[j] = array[temp];
            }
        }
    }
    return array;
}

// Time Complexity - O(n^2)