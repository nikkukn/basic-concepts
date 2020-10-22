/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

const { maxHeaderSize } = require("http");


function height(root) {

    if (root === null)
        return 0;
    else {
        let leftHeight = height(root.left);
        let rightHeight = height(root.right);

        let result;
        if (leftHeight > rightHeight)
            result = leftHeight;
        else result = rightHeight;

        return result + 1
    }
}