// Q - Could you implement clearAllTimeout() to clear all the timers ? This might be useful when we want to clear things up before page transition.


function clearAllTimeout(){
    
    let timerId = setTimeout(function(){})

    for(let i=timerId;i>0;i--){
        clearTimeout(i);
    }
}