/*
Convert class based inheritance code given below to ES5 code.
class Parent(name){
    constructor(name) {
        this.name = name
    }

    getName(){ return this.name }
}

class Children extends Parent {
    constructor(props) {
        super(props)
    }
}
 */


function Parent(name) {
    this.name = name;
}

Parent.prototype.getName = function () {
    return this.name;
}

function Child(name) {
    Parent.call(name);
}


Child.prototype = new Parent();