class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    const node = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = node.prev;
      this.tail.next = null;
      node.prev = null;
    }

    this.length--;
    return node;
  }

  print() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unShift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length++;
    return this;
  }

  get(index) {
    const isInvalidIndex = index < 0 || index >= this.length;
    if (isInvalidIndex) return undefined;

    const startFromHead = index <= this.length / 2;
    let current = startFromHead ? this.head : this.tail;
    let count = startFromHead ? 0 : this.length - 1;

    while (count !== index) {
      current = startFromHead ? current.next : current.prev;
      count += startFromHead ? 1 : -1;
    }

    return current;
  }

  set(index, value) {
    const node = this.get(index);
    if (!node) return false;

    node.value = value;
    return true;
  }

  insert(index, value) {
    const isOutOfRange = index < 0 || index > this.length;
    if (isOutOfRange) return false;
    if (index === 0) return !!this.unShift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    newNode.next = nextNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    nextNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    const isOutOfRange = index < 0 || index > this.length;
    if (isOutOfRange) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();

    const removedNode = this.get(index);

    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }
}

// --- Example usage ---

const linkList = new DoublyLinkedList();

linkList.push(10);
linkList.push(20);
linkList.push(30);
linkList.push(40);

console.log(linkList.get(2));
console.log(linkList.insert(2, 25));
console.log(linkList.get(2));
