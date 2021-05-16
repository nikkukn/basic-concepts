class TrieNode {
    constructor(char) {
        this.children = [];  // each node will have array of 26 letters of english alphabet to mark the presence

        for(let i=0;i<26;i++) {
            this.children[i] = null;
        }

        this.character = char;
        this.isEndWord = false; // to denote the end of the word.
    }


    // Function to mark current node as leaf
    markAsLeaf() {
        this.isEndWord = true;
    }

    // Function to unmark the current Node as leaf
    unMarkAsLeaf() {
        this.isEndWord = false;
    }
}


module.exports  = {TrieNode}