class MaxBinaryHeap {
  constructor() {
    this.properties = [];
  }

  insert(value) {
    const bubbleUp = () => {
      let index = this.properties.length - 1;

      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        if (this.properties[index] <= this.properties[parentIndex]) {
          break;
        }
        [this.properties[index], this.properties[parentIndex]] = [
          this.properties[parentIndex],
          this.properties[index],
        ];

        index = parentIndex;
      }
    };

    this.properties.push(value);

    if (this.properties.length > 1) {
      bubbleUp();
    }
  }

  extractMax() {
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
          if (leftChildElement > element) {
            swapIndex = leftChildIndex;
          }
        }

        if (rightChildIndex < length) {
          rightChildElement = this.properties[rightChildIndex];
          if (
            (swapIndex === null && rightChildElement > element) ||
            (swapIndex !== null && rightChildElement > leftChildElement)
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

const heap = new MaxBinaryHeap();
heap.insert(10);
heap.insert(15);
heap.insert(25);
heap.insert(35);
heap.insert(45);
heap.insert(20);
heap.insert(2);
heap.insert(5);
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
