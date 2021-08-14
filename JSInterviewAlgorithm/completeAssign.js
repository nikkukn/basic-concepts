// Q - Object.assign() assigns the enumerable properties, so getters are not copied, non-enumerable properties are ignored.


function completeAssign(target, ...sources) {
    // your code here
    if(target === null || target===undefined){
      throw new Error("target is null or undefined");
    }else{
      target = new Object(target);
      sources.map((ele)=> {
        if(ele === null || ele === undefined){
          return;
        }

        Object.defineProperties(target, Object.getOwnPropertyDescriptors(ele));
        Object.getOwnPropertySymbols(ele).forEach((s)=> {
            target[s] = ele[s];
        })
      })
    }
  
    console.log("target", target);
    return target;
  }
  
  const source = Object.create(
    {
      a: 3 // prototype
    },
    {
      b: {
        value: 4,
        enumerable: true // enumerable data descriptor
      },
      c: {
        value: 5, // non-enumerable data descriptor
      },
      d: { // non-enumerable accessor descriptor 
        get: function() {
          return this._d;
        },
        set: function(value) {
          this._d = value
        }
      },
      e: { // enumerable accessor descriptor 
        get: function() {
          return this._e;
        },
        set: function(value) {
          this._e = value
        },
        enumerable: true
      }
    }
  )
  
  completeAssign({}, source);