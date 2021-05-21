class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty() {
        return this.length === 0;
    }


    push(value) {
        const newNode = new Node(value);
        // when no node is present in the linked list
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
        }else {
            // when at least one node is present in the linked list
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    pop() {
        // remove element from the tail of the node
        if(this.isEmpty()) {
            return null;
        }else if(this.length ===1) {
            // if only one element is present in the list
            const nodeToRemove = this.head;
            this.head = null;
            this.tail = null;
            this.length--;

            return nodeToRemove;
        }else {
            const nodeToRemove = this.tail;
            const secondLastElement = null;
            // loop to the end of the linked list and set the tail to null and tail-1 element to null
            const current = this.head;
            // loop to find the secondLastElement
            while(current) {
                if(current.next === this.tail){
                    secondLastElement = current;
                    break;
                }
                current = current.next;
            }
            // set the next of secondLast to null and tail to secondLastELement and finally decreement the length of pointer
            secondLastElement.next = null;
            this.tail = secondLastElement;
            this.length--;
            return nodeToRemove;
        }
    }
    // takes the index and return the node from Linked List
    get(index) {
        // check for falsy condition of the Linked List
        if(index<0 || index>=this.length || this.isEmpty()){
            return null
        }else if(index ===0) {
            return this.head;
        }else if(index=== this.length-1){
            return this.tail;
        }else {
            let linkedListIndex = 0;
            let current = this.head;
            while(current){
                if(linkedListIndex===index){
                    break;
                }else {
                    linkedListIndex++;
                }
            }
            return current;
        }
    }
}