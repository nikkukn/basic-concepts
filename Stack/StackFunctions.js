/*
Implementing simple stack and its function in Javacsript.
*/

class Stack {
    // Using array to implement stack in JS.
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        // remove the top element from the stack.
        if (this.items.length === 0) {
            return "Underflow";
        } else {
            this.items.pop();
        }
    }

    peek() {
        // return the top element from the stack but don't delete it.
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        // return true if stack is empty
        return this.items.length === 0
    }

    printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + ""

            return str;
        }
    }
}


//function to perform postfix evaluation of a given expression.

function PostFixExpression(exp) {

    let stack = new Stack();
    for (let i = 0; i < exp.length; i++) {
        let c = exp[i];
        if (!isNaN(c)) { // check for integers in the array
            stack.push(c - '0') // convert the string to number by subtracting it from 0
        } else {
            let val1 = stack.pop();
            let val2 = stack.pop();
            if (val1 === "Underflow" || val2 === "Underflow") {
                return "Can't perform postfix operation!"
            } else {
                switch (c) {
                    case '+':
                        stack.push(val1 + val2)
                        break;
                    case '-':
                        stack.push(val1 - val2)
                        break;
                    case '*':
                        stack.push(val1 * val2);
                        break;
                    case '/':
                        stack.push(val1 / val2);
                        break;
                }
            }
        }
    }

    return stack.pop()
}


console.log(PostFixExpression("235*+8-"));

console.log(PostFixExpression("23*+"))