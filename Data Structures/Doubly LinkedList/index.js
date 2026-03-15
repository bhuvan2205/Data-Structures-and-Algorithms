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
}

const linkList = new DoublyLinkedList();
console.log(linkList.push(10));
console.log(linkList.push(20));
console.log(linkList.push(30));
console.log(linkList.pop());
linkList.print();
console.log(linkList.unShift(5));
linkList.print();
console.log(linkList.shift());
linkList.print();
