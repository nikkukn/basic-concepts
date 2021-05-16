const TrieNode = require("./TrieNode")

class Trie {
    constructor() {
        this.root = new TrieNode(""); //Root Node
    }

    getIndex(t) {
        return t.charCodeAt(0) - "a".charCodeAt(0);  // this function will help in getting the child node index of the string
    }

    //  insertion in a trie
    insert(key) {
        if(key === null){
            return;
        }

        key = key.toLowerCase();
        let currentNode = this.root;  // initially the root will be the current node
        let index = 0;


        for( let i =0; i<key.length;i++){
            index = this.getIndex(key[i]);

            if(currentNode.children[index] === null) {
                currentNode.children[index] = new TrieNode(key[i]);
                console.log(String(key[i]) + "inserted")
            }

            currentNode = currentNode.children[index]
        }

        currentNode.markAsLeaf();
        console.log("'" + key + "' inserted");
    }


    search(key) {
        if(key === null){
            return false;
        }

        key = key.toLowerCase();
        let currentNode  = this.root;
        let index = 0;


        for (let i=0;i<key.length;i++){
            index = this.getIndex(key[i]);
            if(currentNode.children[index] === null) {
                return false;
            }
            currentNode = currentNode.children[index];
        }

        if(currentNode !== null && currentNode.isEndWord){
            return true;
        }
        return false;
    }

    hasNoChildren(currentNode) {
        for(let i=0;i<currentNode.children.length;i++){
            if(currentNode.children[i] === null){
                return true;
            }else {
                return false;
            }
        }
    }

    deleteHelper(key, currentNode, length, level) {
        let deletedSelf = false;

        if(currentNode === null) {
            console.log("Key does not exist!")
            return deletedSelf; 
        }

        if(level === length) {
            // if there are no nodes ahead of this node than we can easily delete this node.
            if(this.hasNoChildren(currentNode)){
                currentNode = null;
                deletedSelf = true;
            }else {
                // when the node has leafs ahead of it than we can simply unmark the leaf
                currentNode.unMarkAsLeaf()
                deletedSelf = false;
            }
        }else {
            let childNode = currentNode.children[this.getIndex(level)]
            let childDeleted = this.deleteHelper(key, currentNode, length, level+1)

            if(childDeleted){
                currentNode.children[this.getIndex(key[level])] = null;
                //If currentNode is leaf node that means currentNode is part of another key
                //and hence we can not delete this node and it's parent path nodes

                if(currentNode.isEndWord){
                    deletedSelf = false;
                }
                else if(this.hasNoChildren(currentNode) === false){
                //If childNode is deleted but if currentNode has more children then currentNode must be part of another key
                //So, we cannot delete currentNode
                    deletedSelf = false;
                }else {
                    currentNode = null;
                    deletedSelf = true;
                }
            }
            else {
                deletedSelf = false;
            }
        }
        return deletedSelf;

    }

    delete(key) {
        if(key=== null || this.root === key){
            console.log("None key or empty trie error");
            return false;
        }

        this.deleteHelper(key, this.root, key.length, 0)
    }


}



let keys = ["the", "a", "there", "answer", "any", "by", "bye", "their","abc"]; 

let t = new Trie();
console.log("Keys to insert: ");
console.log(keys);

for (let i=0; i<keys.length; i++){
    t.insert(keys[i]);
}
