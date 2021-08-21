// Q - Count triplets with sum smaller than the given value, In small value find the one with least difference.


function tripletsWithSmallerSum(nums, target){
    nums.sort((a,b)=>a-b);
    let min = 0 , res;

    for(let i=0;i<nums.length-2;i++){
        if(nums[i]!==nums[i-1]){
            let left = i+1;
            let right = nums.length -1;

            while(left<right){
                let currentSum = nums[i]+nums[left]+nums[right];
                if(currentSum<target){
                    let remainder = target- currentSum;
                    if(Math.abs(remainder)>min){
                        min = Math.min(remainder);
                        res = currentSum;
                    }
                }
            }
        }
    }

    console.log("res", res)

    return res;
}