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

    findMiddleElement() {
        let current;
        let slowPtr, fastPtr;
        if(this.head === null) {
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