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

  DFSRecursive(startingVertex) {
    const result = [];
    const visitedVertex = {};
    const adjacencyList = this.adjacencyList;

    const dfs = (vertex) => {
      // Exit from the function if no vertex
      if (!vertex) return null;

      visitedVertex[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visitedVertex[neighbor]) {
          return dfs(neighbor);
        }
      });
    };

    dfs(startingVertex);

    console.log(result);
  }

  DFSIterative(start) {
    const stack = [start];
    const result = [];
    const visitedVertex = {};
    let currentVertex;

    visitedVertex[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visitedVertex[neighbor]) {
          visitedVertex[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    console.log(result);
  }

  BFS(start) {
    const queue = [start];
    const result = [];
    const visitedVertex = {};
    visitedVertex[start] = true;

    while (queue.length) {
      const currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visitedVertex[neighbor]) {
          visitedVertex[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    console.log(result);
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph);

graph.DFSRecursive("A");
graph.DFSIterative("A");
graph.BFS("A");
