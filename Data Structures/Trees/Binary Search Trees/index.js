class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) {
        return undefined;
      } else if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) {
      return false;
    }

    var current = this.root;
    var found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    return found;
  }
}

// --- Example usage ---

const tree = new BinarySearchTree();
console.log(tree.insert(10));
console.log(tree.insert(5));
console.log(tree.insert(15));
console.log(tree.insert(2));
console.log(tree.insert(20));
console.log(tree.insert(12));
console.log(tree.insert(7));
console.log(tree.find(70));
