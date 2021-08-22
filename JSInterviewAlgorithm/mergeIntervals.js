// Q - merge overlapping intervals 

function mergeOverlappingIntervals(intervals){
    
    if(!intervals ||intervals.length===0){
        return;
    }
    intervals.sort((a,b)=> {
        if(a[0]<b[0])
            return -1
        else 
            return 1
    })
    
    let result = [];
    result.push([intervals[0][0], intervals[0][1]]);
    
    for(let i=0;i<intervals.length;i++){
        let x1 = intervals[i][0];
        let y1 = intervals[i][1];
        
        let x2 = result[result.length-1][0];
        let y2 = result[result.length-1][1];
        
        if(y2>=x1){
            result[result.length-1][1] = Math.max(y1,y2);
        }
       else {
            result.push([x1, y1])
        }
    }
    
    return result;
}