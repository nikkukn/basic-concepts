class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}


 class LinkedList {
    constructor() {
    this.head = null;
    this.size = 0;
    }

    addElement() {
        // define later
    }

    findMiddleElement() {
        let current;
        let slowPtr, fastPtr;
        if(this.head === null) { // empty list condition
            return this.head;
        }else {
            current = this.head;
            while(current.next) {
                slowPtr = current.next;
                fastPtr = current.next;

                if(fastPtr.next){
                    fastPtr=fastPtr.next;
                }
            }
            return slowPtr.element;
        }
    }
 }