class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    addElement() {
        // add element to list
    }

    findJunction() {
        let slowPtr, fastPtr;
        slowPtr = this.head.next;
        fastPtr = this.head.next;

        while(fastPtr && fastPtr.next) {
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next;

            if(fastPtr.next) {
                fastPtr = fastPtr.next;
            }

            if(slowPtr===fastPtr) {
                slowPtr = this.head;
                while(slowPtr!==fastPtr) {
                    slowPtr= slowPtr.next;
                    fastPtr= fastPtr.next;
                }

                return slowPtr;
            }  
        }
        return null;
    }
}