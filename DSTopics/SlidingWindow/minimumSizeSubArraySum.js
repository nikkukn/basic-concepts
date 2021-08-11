// Q - Minimum Size Subarray Sum

/***
 Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
 
*/


function minimumSizeSubarraySum(nums,k){
    let sum = 0;
    
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    
    if(sum<target){
        return 0;
    }
    
    let j=0, tempSum = 0, minLen = Infinity;
    for(let i=0;i<nums.length;i++){
        tempSum+=nums[i];
        while(tempSum>=target){
            minLen = Math.min(i-j+1, minLen);
            tempSum-=nums[j];
            j++;
        }
    }
    
    return minLen;
}

minimumSizeSubarraySum([2,3,1,2,4,3], 7)