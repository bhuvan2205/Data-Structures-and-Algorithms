const commonPatterns = {
  frequencyCounter: {
    name: "Frequency Counter",
    description:
      "Uses objects or maps to count occurrences/frequencies of values to compare data, detect duplicates, or compute statistics in linear time.",
    examplesPath: "Common Patterns/Frequency Counter",
  },
  multiplePointers: {
    name: "Multiple Pointers",
    description:
      "Uses two or more pointers/indexes that move through a structure (usually arrays) to find pairs, ranges, or counts without nested loops.",
    examplesPath: "Common Patterns/Multiple Pointers",
  },
  slidingWindow: {
    name: "Sliding Window",
    description:
      "Maintains a window (contiguous subset) over a data structure to track sums, counts, or other metrics while moving the window efficiently.",
    examplesPath: "Common Patterns/Sliding Window",
  },
  backTracking: {
    name: "Back Tracking",
    description:
      "Builds solutions incrementally and abandons a partial solution (backtracks) as soon as it can no longer lead to a valid complete solution.",
    examplesPath: "Common Patterns/Back Tracking",
  },
  greedyAlgorithms: {
    name: "Greedy Algorithms",
    description:
      "Makes the locally optimal choice at each step with the hope of finding a global optimum, often used for optimization problems.",
    examplesPath: "Common Patterns/Greedy Algorithms",
  },
  recursion: {
    name: "Recursion",
    description:
      "Solves a problem by having a function call itself with smaller inputs until reaching a base case, then combining the results.",
    examplesPath: "Common Patterns/Recursion",
  },
};

module.exports = commonPatterns;

