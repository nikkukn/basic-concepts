// Q - Implement your own bind in the function prototype javascript?


Function.prototype.myBind = function(){
    let fn = this;
    let args = Array.prototype.slice.call(arguments);
    let object = args.shift();


    return function() {
        return fn.apply(object, args.concat(Array.prototype.slice.call(arguments)))
    }
}


