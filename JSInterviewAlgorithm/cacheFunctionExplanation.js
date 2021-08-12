// Q - How could you cache execution of any function?


function cacheExecution(fn) {
    let cache = {};

    return function(arg) {
        if(cache[arg]){
            return cache[arg];
        }else {
            cache[arg] = fn(arg);
            return cache[arg];
        }
    }
}


// Q -  What if you are passing more than one argument?
let cache = {}
return function() {
    let args = arguments;
    let key = [].slice.call(args).join("");

    if(cache[key]){
        return cache[key];
    }else {
        cache[key] = fn.apply(this, args);
        return cache[key];
    }
}