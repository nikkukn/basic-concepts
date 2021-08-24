// Q - We can use it to implement method overloading.


function addMethod(object, name, fn){
    let old = object[name];


    object[name] = function() {
        // Check the number of incoming arguments, 
        // compared to our overloaded function 
        if(fn.length === arguments.length){
            // If there was a match, run the function 
            return fn.apply(this, arguments);
        }
        // Otherwise, fallback to the old method 
        else if(typeof old === "function"){
            return old.apply( this, arguments );
        }
    }
}