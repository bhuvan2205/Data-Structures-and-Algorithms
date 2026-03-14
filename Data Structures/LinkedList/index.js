class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return;

    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  unShift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      return this;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    const isInvalidPosition = index < 0 || this.length <= index;

    if (isInvalidPosition) {
      return null;
    }

    let counter = 0;
    let current = this.head;

    while (counter < index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, value) {
    const foundNode = this.get(index);

    if (!foundNode) {
      return false;
    }

    foundNode.value = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === this.length) {
      return !!this.push(value);
    } else if (index === 0) {
      return !!this.unShift(value);
    }

    const newNode = new Node(value);
    const prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === this.length - 1) {
      return this.pop();
    } else if (index === 0) {
      return this.shift();
    }

    const prev = this.get(index - 1);
    const removedNode = prev.next;
    prev.next = removedNode.next;

    this.length--;
    return removedNode;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  }
}

const linkList = new SinglyLinkedList();

console.log(linkList.push(10));
console.log(linkList.push(20));
console.log(linkList.push(30));
console.log(linkList.insert(1, 15));
linkList.print();
linkList.reverse();
linkList.print();
