// Q - Display number which is repeated for event times in an array;

function findElementsWhichAppearEvenTimesInArray(arr) {
    let eleMapping = {}
    for(let i=0;i<arr.length;i++){
        if(eleMapping[arr[i]]){
            eleMapping[arr[i]]++
        }else eleMapping[arr[i]] = 1
    }

    return Object.keys(eleMapping).filter(ele=> eleMapping[ele]%2===0)
}