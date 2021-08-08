// Q - How To Traverse the DOM?

/*
Given HTML str 
<ul>
<li>node</li>
<li><span>node</span><a href="#">node</a><p>node</p></li>
<li>node</li>
</ul>
*/

// identify root node from html 
let rootNode = document.getElementById("root");
let paragraphs = document.getElementById("p");




// to iterate through the child nodes...
for(let i=0;i<rootNode.childNodes.length;i++){
    let childNodes = rootNode.childNodes[i];
    console.log(childNodes);
}

// dealing with array indices 
for(let i=rootNode.firstChild;i!==null;i = i.nextSibling){
    // put your code here!!!
}

// traverse DOM node using parentNode property.

while(node = node.parentChild){
    // put your code here...
}
// dealing with element and text nodes
if(node.nodeType === Node.ELEMENT_NODE){
    // do element processing...
}else if(node.nodeType === Node.TEXT_NODE){
    // do text processing...
}else {
    // something else (comments, document fragments, etc)
}