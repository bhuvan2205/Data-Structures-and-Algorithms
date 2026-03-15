class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      const temp = this.first;
      this.first = node;
      node.next = temp;
    }

    this.size++;
    return this.size;
  }

  pop() {
    if (!this.first) {
      return undefined;
    }

    const temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return temp.value;
  }

  peek() {
    if (this.size === 0) return undefined;

    return this.first.value;
  }
}

// --- Example usage ---

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack);
console.log(stack.peek());
console.log(stack.pop());
