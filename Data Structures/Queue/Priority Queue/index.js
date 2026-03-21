class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.properties = [];
  }

  enQueue(value, priority) {
    const bubbleUp = () => {
      let index = this.properties.length - 1;

      while (index > 0) {
        const element = this.properties[index];
        const parentIndex = Math.floor((index - 1) / 2);
        const parentElement = this.properties[parentIndex];

        if (element.priority <= parentElement.priority) {
          break;
        }

        [this.properties[parentIndex], this.properties[index]] = [
          this.properties[index],
          this.properties[parentIndex],
        ];
        index = parentIndex;
      }
    };

    const node = new Node(value, priority);
    this.properties.push(node);
    bubbleUp();
  }

  deQueue() {
    const sinkDown = () => {
      let index = 0;
      const length = this.properties.length;

      while (true) {
        let swapIndex = null;
        let leftChildIndex = index * 2 + 1;
        let rightChildIndex = index * 2 + 2;
        let leftChildElement, rightChildElement;
        const element = this.properties[index];

        if (leftChildIndex < length) {
          leftChildElement = this.properties[leftChildIndex];
          if (leftChildElement.priority > element.priority) {
            swapIndex = leftChildIndex;
          }
        }

        if (rightChildIndex < length) {
          rightChildElement = this.properties[rightChildIndex];
          if (
            (swapIndex === null &&
              rightChildElement.priority > element.priority) ||
            (swapIndex !== null &&
              rightChildElement.priority > leftChildElement.priority)
          ) {
            swapIndex = rightChildIndex;
          }
        }

        if (!swapIndex) break;

        [this.properties[index], this.properties[swapIndex]] = [
          this.properties[swapIndex],
          this.properties[index],
        ];
        index = swapIndex;
      }
    };

    const oldMax = this.properties[0];
    const end = this.properties.pop();

    if (this.properties.length > 0) {
      this.properties[0] = end;
      sinkDown();
    }

    return oldMax;
  }
}

// --- Example usage ---

const queue = new PriorityQueue();

queue.enQueue("pay Bill", 2);
queue.enQueue("Bike Service", 1);
queue.enQueue("Wash Clothes", 3);
queue.enQueue("Gym Workout", 4);
console.log(queue);
queue.deQueue();
console.log(queue);
