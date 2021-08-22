/* 
Q - The Dutch national flag (DNF) problem is one of the most popular programming problems proposed by Edsger Dijkstra. The flag of the Netherlands consists of three colors: white, red, and blue. The task is to randomly arrange balls of white, red, and blue such that balls of the same color are placed together.
*/
const swap = (eleA, eleB)=> {
    let temp = eleA;
    eleA = eleB;
    eleB = temp;

    return [eleA, eleB];
}

function dutchNationalFlagProblem(nums){
    let low = 0;
    let mid = 0;
    let high = nums.length-1

    while(mid<=high){
        switch (arr[mid]) {
            case 0:
                [nums[low++], nums[mid++]] = swap(nums[low++], nums[mid++]);
                break;
                
            case 1:
                mid++;
                break;

            case 2:
                [nums[low++], nums[mid++]] = swap(nums[low++], nums[high--]);
            default:
                break;
        }
    }

    console.log("nums", nums);

    return nums;
}