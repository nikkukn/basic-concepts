// Q - How could you implement moveLeft animation?


function leftAnimation(ele, distance) {
    let left = 0;

    // using setInterval to draw every 10 secs 
    let timerId = setInterval(()=> {
        left++;
        ele.style.left = left + 'px';

        if(left===distance){
            clearInterval(timerId);
        }
    }, 10) // taking 10 ms as the standard starting time.
}