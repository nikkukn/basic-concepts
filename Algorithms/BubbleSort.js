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


// Bubble sort with a do while loop

function bubbleSortWithDoWhile(arr) {
    let index = 0;
    let swapped = false;
    do {
        swapped = false;
        arr.forEach((element, index) => {
            if(element > arr[index+1]) {
                let temp = arr[index+1];
                arr[index+1]= element;
                element = temp;
                swapped = true;
            }
        });
    }while(swapped)
    return arr;
}