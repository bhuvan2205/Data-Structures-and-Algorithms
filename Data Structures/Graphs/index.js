class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex1]) {
      throw new Error("Invalid Vertex");
    }

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex1]) {
      throw new Error("Invalid Vertex");
    }

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2,
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1,
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacencyVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(adjacencyVertex, vertex);
    }

    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();

graph.addVertex("Chennai");
graph.addVertex("Thanjavur");
graph.addVertex("Pattukkottai");
graph.addVertex("Trichy");
graph.addVertex("Perambalur");
graph.addVertex("Madurai");

graph.addEdge("Pattukkottai", "Thanjavur");
graph.addEdge("Perambalur", "Trichy");
graph.addEdge("Perambalur", "Chennai");
graph.addEdge("Trichy", "Thanjavur");
graph.addEdge("Madurai", "Trichy");
graph.addEdge("Pattukkottai", "Chennai");
graph.addEdge("Madurai", "Chennai");
console.log(graph);

graph.removeEdge("Pattukkottai", "Thanjavur");
console.log(graph);

graph.removeVertex("Pattukkottai");
console.log(graph);
