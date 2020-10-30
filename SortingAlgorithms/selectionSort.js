/*
Selection sort algorithm
*/


let arr = [64, 25, 12, 22, 11]

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let min_idx = 0;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min_idx] > arr[j]) {
                min_idx = j;
            }
        }
        let temp = arr[i]
        arr[i] = arr[min_idx]
        arr[min_idx] = temp
    }
}