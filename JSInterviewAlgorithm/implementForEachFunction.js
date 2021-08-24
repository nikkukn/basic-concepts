// Q - implement  your own forEach function.


if(!Array.prototype.forEach){
    Array.prototype.forEach = function(fn){
        for(let i=0;i<this.length;i++){
            fn(this[i], i, this);
        }
    }
}

["a", "b", "c"].forEach(function(value, index, array){ 
    assert( value, "Is in position " + index + " out of " + (array.length - 1) ); 
});