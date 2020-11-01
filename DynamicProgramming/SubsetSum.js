/*
Given a set of non negative numbers and a total,
find if there exists a  subset in this set whose sum is same as total.
*/

// no sum required, to find the subset having half of the total sum array.
function partition(arr) {
    let sum = 0;
    // find the sum of all the elements in the array.
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    if (sum % 2 !== 0) {
        return false;
    }

    sum = sum / 2;
    // set the value for 0 index in all the columns

    let temp = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        temp[i] = new Array(sum);
    }

    for (let i = 0; i < arr.length; i++) {
        temp[i][0] = true;
    }


    for (let i = 1; i < rows; i++) {
        for (j = 0; j < total; j++) {
            if (j - arr[i - 1] >= 0) { // j> arr[j]
                temp[i][j] = temp[i - 1][j] || temp[i - 1][j - arr[i - 1]];
            } else {
                temp[i][j] = temp[i - 1][j]; // copy element from the previous row.
            }
        }
    }

    return temp[arr.length][sum];
}


// function when sum and array both are provided.
function SubsetSum(arr, total) {
    let rows = arr.length;

    let temp = new Array(rows);

    for (let i = 0; i < rows; i++) {
        temp[i] = new Array(total);
    }

    for (let i = 0; i < rows; i++) {
        temp[i][0] = true;
    }

    for (let i = 1; i < rows; i++) {
        for (j = 0; j < total; j++) {
            if (j - arr[i - 1] >= 0) { // j> arr[j]
                temp[i][j] = temp[i - 1][j] || temp[i - 1][j - arr[i - 1]];
            } else {
                temp[i][j] = temp[i - 1][j]; // copy element from the previous row.
            }
        }
    }


    return temp[arr.length][total];
}


