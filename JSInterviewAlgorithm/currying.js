// Q - How would you implement currying for any functions?

function curryingFn() {
    return function(...args){
        if(args.length<1) return this; // nothing to curry

        return this.apply(this, args.concat(arguments));
    }
}