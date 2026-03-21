class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
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

  DFSPostOrder() {
    let data = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      data.push(node.value);
    };

    traverse(this.root);
    return data;
  }
}

// --- Example usage ---

const tree = new Tree();
console.log(tree.insert(10));
console.log(tree.insert(5));
console.log(tree.insert(15));
console.log(tree.insert(2));
console.log(tree.insert(20));
console.log(tree.insert(12));
console.log(tree.insert(7));
console.log(tree.DFSPostOrder());
