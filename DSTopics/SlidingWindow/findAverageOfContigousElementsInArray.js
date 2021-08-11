// Q - Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

/*
Example - [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
*/

function averageOfContigousArrays(arr, k){
    let sum = 0;
    let window = [];
    let result = [];
    let lastIndex = k-1;

    // calculate first subset sum.
    for(let i=0;i<k;i++){
        window.push(arr[i]);
        sum+=arr[i];
    }
    

    result[0] = sum/k;

    for(let i=1;lastIndex<arr.length;i++){
        let prev = window[0]; // take the first element from the window array
        window.shift();    // remove the element
        lastIndex=lastIndex+1;  // increement the last index to new element in the window array
        window.push(arr[lastIndex]);
        

        //check to insure that lastIndex is not out of bounds.
        if(arr[lastIndex]){
          sum = sum - prev + arr[lastIndex];

          result.push(sum/k);
        }
    }

    return result;
}

averageOfContigousArrays([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)