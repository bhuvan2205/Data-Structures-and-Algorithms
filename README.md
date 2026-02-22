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

---

## Big O (Time Complexity)

To describe the **run time complexity** of the function — the relation between the **execution time** and **input** of the function.

**Examples:**

| Description        | Notation |
|--------------------|----------|
| f(n) is linear     | O(n)     |
| f(n) is constant   | O(1)     |

![Big O Notation – Time vs Input Size](assets/big-o-notation.png)

---

## Big θ (Space Complexity)

To describe the **space (memory) complexity** of the function — the relation between the **memory space** and **input** of the function.

- **Auxiliary space complexity** → Space required by the algorithm itself (excluding input).

**Rules of thumb:**

| Type                          | Space  |
|-------------------------------|--------|
| Booleans, numbers, null, undefined | O(1)   |
| Strings, Arrays, Objects      | O(n)   |

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
