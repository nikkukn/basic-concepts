class Stack {
    constructor() {
        this.stack = []
    }

    getLength() {
        return this.stack.length;
    }

    push(element){
       return this.stack.push(element);
    }

    pop() {
        return this.stack.pop()
    }

    peek() {
        return this.stack[this.stack.length -1]
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}