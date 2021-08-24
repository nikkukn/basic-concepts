// Q - How can we implement looping with a callback?


function loop(array, fn){
    for(let i=0;i<array.length;i++){
        fn.call(array, array[i], i);
    }
}

var num = 0;
loop([0,1,2], function(value, i){
    value===num++;
    this instanceof Array;
})