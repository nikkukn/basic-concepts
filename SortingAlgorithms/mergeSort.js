/*
Merge sort code
*/


function MergeSort(arr) {

    if (arr.length > 1) {
        let mid_idx = arr.length / 2;
        let leftArr = arr.splice(0, mid_idx);
        let rightArr = arr;

        leftArr.sort();
        rightArr.sort();

        let i = j = k = 0;

        // Copy data to temp arrays L[] and R[]
        while (i < leftArr.length && j < rightArr.length) {
            if (leftArr[i] < rightArr[j]) {
                arr[k] = leftArr[i];
                i += 1;
            }
            else {
                arr[k] = rightArr[j];
                j += 1;
            }
            k += 1;
        }

        // Checking if any element was left.
        while (i < leftArr.length) {
            arr[k] = leftArr[i];
            i += 1;
            k += 1;
        }

        while (j < rightArr.length) {
            arr[k] = rightArr[j];
            j += 1;
            k += 1;
        }
    }
}