class Node {
    constructor(element) {
        this.element = element;
        this.npx = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor(props) {
        this.head = null;
        this.size = 0;
    }

    // XOR the element
    XOR(node1, node2) {
        return node1 ^ node2;
    }

    // inserting into XOR Linked List
    insert() {
        let newNode = new Node(1);
        newNode.npx = XOR(this.head, null);
        // logic to update the next pointer of the previous element once the next element is being set.

        // (null ^ 1)^ null will nullify null and the output will be 1
        if(this.head !== null) {
            let next = XOR(this.head.npx, null);
            this.head.npx = XOR(newNode, next)
        }

        // change the head node to the last node
        this.head = newNode;
    }

    createXORLinkedList() {

    }
}