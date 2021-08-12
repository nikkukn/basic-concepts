// Q - How would you apply asynchronous call without any help of library?

let queue = []
function step(i) {
    function callback(){
        // recurrsivly call the function one by one.
        step(i+1);  
    }
    // till the time all the promises are not executed take the execution one by one.
    if(i<queue.length){
        queue[i].fn.apply(null, queue[i].args.concat(callback));
    }else {
        //  all done.

    }
}