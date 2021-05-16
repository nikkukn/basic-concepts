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

    delete(key) {
        return;
    }


}



let keys = ["the", "a", "there", "answer", "any", "by", "bye", "their","abc"]; 

let t = new Trie();
console.log("Keys to insert: ");
console.log(keys);

for (let i=0; i<keys.length; i++){
    t.insert(keys[i]);
}
