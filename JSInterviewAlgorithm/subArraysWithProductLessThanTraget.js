// Q - Subarrays with Product Less than a Target

var numSubarrayProductLessThanK = function(nums, k) {
    let res = [], count =0;
    
    let i=0;
    
    if(k<0) return 0;
    
    while(i<nums.length){
        if(nums[i]<k){
            res.push([nums[i]]);
            count++;
            let j = i+1;
            let tempProd = nums[i];
            while(j<nums.length){
                if(tempProd*nums[j]<k){
                    tempProd = tempProd*nums[j];
                    count++;
                }
                else {
                    break;
                }
                j++;
            }
        }
        i++;
    }
    return count
};