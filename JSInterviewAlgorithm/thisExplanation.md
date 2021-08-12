# How does this works in Javascript?

Javascript engine sets a property to the function called <b>this</b> which refers to the current execution context. <b>this</b> refers to an object and depends on how the object is called.

1. In the global context and inside the function this refers to window object.
2. Inside IIFE if we use this with "use strict" it refers to value undefined. To pass access window inside IIFE with "use strict", we have to pass this.

3. While executing function in the context of an object, the object becomes the value of this.

4. Inside setTimeout the value of this is window object.
5. If we use constructor to create an object, the value of this will refer to newly created object.

6. We can set the value of this to an arbitrary object by passing object as first parameter to call, bind or apply.

7. For dom event handler, value of this would refer to the element that fired the event.



