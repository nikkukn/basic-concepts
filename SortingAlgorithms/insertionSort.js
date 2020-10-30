/*
Insertion sort code
*/

function InsertionSort(A) {

    for (let i = 1; i < A.length; i++) {
        let key = A[i];

        let j = i - 1;
        while (j > 0 && key < A[i]) {  // to traverse the subarray
            A[j + 1] = A[j];
            j = -1;
        }
        A[j + 1] = key;
    }
}