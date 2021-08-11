// Q - Find maximum (or minimum) sum of a subarray of size k

/*

Input  : arr[] = {100, 200, 300, 400}
         k = 2
Output : 700

Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}
         k = 4 
Output : 39
We get maximum sum by adding subarray {4, 2, 10, 23}
of size 4.

Input  : arr[] = {2, 3}
         k = 3
Output : Invalid
There is no subarray of size 3 as size of whole
array is 2. 

*/

function maximumSubArrayOfSizeK(arr, k){
    let sum = 0;
    let maxSum = 0;
    let window = [];

    for(let i=0;i<k;i++){
        window.push(arr[i]);
        sum+=arr[i];
    }


    for(let i=k;i<arr.length;i++){
      let prev = window[0];
      window.shift();
      window.push(arr[i]);
      let tempSum = sum;
      sum=sum - prev +arr[i]
      console.log(sum, tempSum)
      maxSum = Math.max(sum, tempSum);
    }


    return maxSum;
}

maximumSubArrayOfSizeK([100, 200, 300, 400],2)