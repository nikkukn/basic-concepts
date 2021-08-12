// Q - Implement your own bind in the function prototype javascript?


Function.prototype.customBind = function(context, ...args) {
    let self = this;
    return function(){
        return self.apply(context, args);
    }
}


