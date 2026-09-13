class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}

const wGraph = new WeightedGraph();
wGraph.addVertex("Trichy");
wGraph.addVertex("Chennai");
wGraph.addVertex("Pattukkottai");
wGraph.addEdge("Chennai", "Trichy", 350);
wGraph.addEdge("Pattukkottai", "Trichy", 90);

console.log(wGraph.adjacencyList);
