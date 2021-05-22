class Node {
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class BinaryTree {
    constructor()  {
        this.root = null;
    }

    // add a node in the tree
    addNode(value) {
        if(this.root === null) {
            this.root = new Node(value);
            return;
        }else {
            let currentNode = this.root;
            let added = false;

            while(!added && currentNode) {
                // don't add duplicates
                if(value === currentNode.value) {
                    return "Cannot add duplicate values"
                }

                // if the node is smaller than the node value.
                if(value<currentNode.value) {

                    if(currentNode.leftChild === null) {
                        currentNode.leftChild = new Node(value);
                        added = true;
                    }else {
                        currentNode = currentNode.leftChild;
                    }
                } else if(value>currentNode.value) { // if the value is greater than current node value
                    if(currentNode.rightChild === null) {
                        currentNode.rightChild = new Node(value)
                        added = true;
                    }
                    else {
                        currentNode = currentNode.rightChild;
                    }
                }
            }
        }
    }


    // remove a node from the tree.
    removeNode(value) {
        let currentNode = this.root;
        let nodeFound = false;
        let parentNode = null;
        let nodeToRemove;

        while(!nodeFound) {
            if(currentNode === null || currentNode.value === null) {
                return "The node was not Found!"
            }

            if(currentNode.value === value){
                nodeToRemove = currentNode;
                nodeFound = true;
            }else if(currentNode.value>value) {
                parentNode = currentNode;
                currentNode = currentNode.leftChild;
            }else{
                parentNode = currentNode;
                currentNode = currentNode.rightChild;
            }
        }

        
        const nodeToRemoveIsParentsLeftChild = parentNode.leftChild === nodeToRemove;

        // if the node to remove is the leaf node.
        if(nodeToRemove.leftChild === null && nodeToRemove.rightChild === null) {
            if(nodeToRemoveIsParentsLeftChild) {
                parentNode.leftChild = null;
            }else {
                parentNode.rightChild = null;
            }
        }else if(nodeToRemove.leftChild!== null && nodeToRemove.rightChild === null){
            // node has one child
            if(nodeToRemoveIsParentsLeftChild) {
                parentNode.leftChild = nodeToRemove.leftChild;
            }else {
                parentNode.rightChild = nodeToRemove.leftChild;
            }

        }else if(nodeToRemove.rightChild !== null && nodeToRemove.leftChild === null) {
            // node has one child
            if(nodeToRemoveIsParentsLeftChild) {
                parentNode.leftChild = nodeToRemove.rightChild;
            }else {
                parentNode.rightChild = nodeToRemove.rightChild;
            }
        }else {
            // node has two child
            const leftSubTree = nodeToRemove.leftChild;
            const rightSubTree = nodeToRemove.rightChild;

            // set parent child to left or right subtree
            if(nodeToRemoveIsParentsLeftChild) {
                parentNode.leftChild = rightSubTree;
            }else {
                parentNode.rightChild = rightSubTree;
            }


            // find the lowest free space on the left side of the right sub tree and add the leftsubtree

            let currentLeftNode = rightSubTree;
            let currentLeftParent;

            let foundSpace = false;
            // iterate through the left child of rightSubtree and find a suitable place where the value of left child if null
            while(!foundSpace) {
                if(currentLeftNode === null) {
                    foundSpace = true;
                }else {
                    currentLeftNode = currentLeftNode.leftChild;
                    currentLeftParent = currentLeftNode;
                }
            }
            currentLeftParent.leftChild = leftSubTree;
            return "The node was successfully deleted";
        } 
    }
}