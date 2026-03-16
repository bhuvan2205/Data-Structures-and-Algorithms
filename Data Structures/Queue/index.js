class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enQueue(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    }

    this.last.next = node;
    this.last = node;

    this.size++;
    return this.size;
  }

  deQueue() {
    if (!this.first) {
      return undefined;
    }

    const node = this.first;

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.size--;
    return node.value;
  }

  peek() {
    if (this.size === 0) return undefined;

    return this.first.value;
  }
}

// --- Example usage ---

const queue = new Queue();

queue.enQueue(10);
queue.enQueue(20);
queue.enQueue(30);
console.log(queue);
queue.deQueue();
console.log(queue);
