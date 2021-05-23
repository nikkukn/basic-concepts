class Node {
    constructor(data) {
        this.value = data;
        this.edges = []; //connection of each node of the graph
    }
}


class Graph {
    constructor(directed=false){
        this.unidirected = directed;
        this.nodes = [];
    }

    // add Graph node and push it to the nodes array
    addValue(value) {
        this.nodes.push(new Node(value));
    }

    // removing a node from the graph
    removeNode(value) {
        // remove node from the node from the graph
        this.nodes = this.nodes.filter(node => node.value !== value)
        // remove edges from the Node for the removed value
        this.nodes.forEach(node=> {
            node.edges = node.edges.filter(edge=> edge.value!==value)
        });
    }

    // get a node from linked list
    getNode(value) {
        return this.nodes.find(node=>node.value===value)
    }

    // Adding an edge between two nodes
    addEdge(value1, value2) {
        const node1 = this.getNode(value1)
        const node2 = this.getNode(value2)
        node1.edges.push(node2)
        if(this.unidirected) 
            node2.edges.push(node1)
        return `An edge between ${node1.value} and ${node2.value} was added`;
    }

    dfs(graph, startValue) {
        let startNode = graph.getNode(startValue);
        let visitedNodesHash = graph.nodes.reduce((accumulator, currentNode)=> {
            accumulator[currentNode.value] = false;
            return accumulator;
        }, {})

        const exploreNode = (node) => {
            if(visitedNodesHash[node.value]) return 
            console.log(`${node.value} => `)

            visitedNodesHash[node.value] = true
            node.edges.forEach((edge)=> exploreNode(edge))
        }
        exploreNode(startNode);
    }

    bfs(graph, startValue) {
        let startNode = graph.getNode(startValue);
        let visitedNodesHash = graph.nodes.reduce((accumulator, currentNode) => {
            accumulator[currentNode.value] = false
            return accumulator
        }, {})

        const queue = new Queue();
        queue.enqueue(startNode);
        while(!queue.isEmpty()) {
            let currentNode = queue.dequeue();

            if(!visitedNodesHash[currentNode.value]){
                console.log(`${currentNode.value} => `)
                visitedNodesHash[currentNode.value] = true;
            }
            currentNode.edges.forEach((edge)=> {
                if(!visitedNodesHash[edge.value])
                    queue.enqueue(edge);
            })
        }
    }
}