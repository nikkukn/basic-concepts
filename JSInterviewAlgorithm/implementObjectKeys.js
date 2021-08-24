// Q - Implement Object keys from scratch


Object.prototype.keys = function() {
    let keys = [];
    for(let i in this){
        keys.push(i);
    }

    return keys;
}

var obj = { a: 1, b: 2, c: 3 };
assert( obj.keys().length == 3, "We should only have 3 properties." ); 
 
delete Object.prototype.keys;