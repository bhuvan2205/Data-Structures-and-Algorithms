# Data Structures & Algorithms

---

## Algorithm

A **process or set of steps** to solve a certain problem.

**In other terms:**

```
Input ---> Algorithm ---> Output
```

### Steps to Solve Problems

1. **Understand the Problem**
2. **Explore Concrete Examples**
3. **Break it Down**
4. **Solve/Simplify**
5. **Look Back and Refactor**

### Solution Approaches

**Naive Solution:**
Straightforward attempt to solve a problem. In most cases, might not be the best solution.

**Trivial Solution:**
Best approach to solve the problem or optimal solution.

---

## Common Problem Solving Patterns

- **[Frequency Counter](Common%20Patterns/Frequency%20Counter)**  
  Uses objects or maps to count occurrences/frequencies of values, often to compare data or detect duplicates in linear time.
- **[Multiple Pointers](Common%20Patterns/Multiple%20Pointers)**  
  Uses two or more pointers/indexes that move through a structure (usually arrays) to find pairs, ranges, or counts without nested loops.
- **[Sliding Window](Common%20Patterns/Sliding%20Window)**  
  Maintains a window (contiguous subset) over a data structure to track sums, counts, or other metrics while moving the window efficiently.
- **[Back Tracking](Common%20Patterns/Back%20Tracking)**  
  Builds solutions incrementally and abandons a partial solution (backtracks) as soon as it can no longer lead to a valid complete solution.
- **[Greedy Algorithms](Common%20Patterns/Greedy%20Algorithms)**  
  Makes the locally optimal choice at each step with the hope of finding a global optimum, often used for optimization problems.
- **[Recursion](Common%20Patterns/Recursion)**  
  Solves a problem by having a function call itself with smaller inputs until reaching a base case, then combining the results.
  Inbuilt JS functions like `JSON.parse` / `JSON.stringify` also use recursion under the hood.

---

## Big O (Time Complexity)

To describe the **run time complexity** of the function — the relation between the **execution time** and **input** of the function.

**Examples:**

| Description      | Notation |
| ---------------- | -------- |
| f(n) is linear   | O(n)     |
| f(n) is constant | O(1)     |

![Big O Notation – Time vs Input Size](assets/big-o-notation.png)

---

## Big θ (Space Complexity)

To describe the **space (memory) complexity** of the function — the relation between the **memory space** and **input** of the function.

- **Auxiliary space complexity** → Space required by the algorithm itself (excluding input).

**Rules of thumb:**

| Type                               | Space |
| ---------------------------------- | ----- |
| Booleans, numbers, null, undefined | O(1)  |
| Strings, Arrays, Objects           | O(n)  |

---

## Logarithms

The **inverse of exponentiation** — in the same way division is the inverse of multiplication.

**Example:**

```
log₂(8) = 3     ⟺     2³ = 8
```

**General form:**

```
log₂(value) = exponent     ⟺     2^exponent = value
```

---

## Searching Algorithms

To find whether the given value exists in the data.

**Most common ways to implement:**

- **[Linear Search](Searching%20Algorithms/Linear%20Search)**
- **[Binary Search](Searching%20Algorithms/Binary%20Search)**

**Inbuilt JS methods that use searching algorithms:**

- **indexOf()**
- **includes()**
- **find()**
- **findIndex()**

### [Linear Search](Searching%20Algorithms/Linear%20Search)

Iterate over the data and check each value for a match. If the value matches, return `true` (or the index). Else, return `false` (or `-1`).

- **Time Complexity**: \(O(n)\)

### [Binary Search](Searching%20Algorithms/Binary%20Search)

1. Works using the **divide and conquer** method. To implement this we need `start` (0), `end` (length of the data) and `middle` \((left + right) / 2\).
2. Compare whether the middle value matches the target; if yes, return `true` (or the index).
3. If not, check if the target value is **greater** than the middle value; if yes, move `start` to `middle` and calculate the middle again.
4. Else (the target is **less** than the middle value), move `end` to `middle` and calculate the middle again.
5. Repeat the process until `start` and `end` meet; if there is still no match, return `false` (or `-1`).

- **Time Complexity**: \(O(\log n)\)

---

## Sorting Algorithms

To sort the data in a particular order (ascending/descending).

JS engines use various approaches to handle sorting. **V8** (Chrome, Node.js, Edge, etc.) typically uses **Timsort** for typical arrays, which is a hybrid algorithm derived from **Merge Sort** and **Insertion Sort**. **Firefox's** engine uses a **Merge Sort**.

By default, if no comparison function is provided, the `sort()` method converts array elements into strings and sorts them based on their UTF-16 code unit values, which often leads to incorrect results for numbers.

**Most common ways to implement:**

- Quick Sort
- Radix Sort
- Heap Sort
- Merge Sort
- Bubble Sort
- Insertion Sort
- Selection Sort
