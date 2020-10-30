/*
Bubble sort algorithm
*/


let A = [11, 12, 22, 25, 34, 64, 90]

function BubbleSort(A) {

    for (let i = 0; i < A.length; i++) {

        for (let j = 0; j < A.length - i; j++) {

            if (A[j] > A[j + 1]) {
                let temp = A[j];
                A[j] = A[j + 1];
                A[j + 1] = temp;
            }
        }

    }
}