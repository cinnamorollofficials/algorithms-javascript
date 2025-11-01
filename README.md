# Algorithms in JavaScript

This repository contains implementations of various algorithms in JavaScript. Each algorithm is explained with its time complexity and use case.

## Algorithms Implemented

### 1. Sorting Algorithms
1. **Bubble Sort** - O(n²) - Best for small datasets or nearly sorted data.
2. **Selection Sort** - O(n²) - Useful when memory writes are costly.
3. **Insertion Sort** - O(n²), but O(n) for nearly sorted data - Efficient for small or nearly sorted datasets.
4. **Merge Sort** - O(n log n) -  Large datasets, stable sorting.
5. **Quick Sort** - O(n log n), but O(n²) in worst case - In-place sorting, general-purpose sorting.
6. **Heap Sort** - O(n log n) - When memory writes must be minimized.
7. **Counting Sort** -O(n + k) - When numbers have a small range.
8. **Radix Sort** -O(nk) - When sorting numbers with fixed digit lengths.

### 2. Searching Algorithms
1. **Linear Search** - O(n) - Works on unsorted arrays
2. **Binary Search** - O(log n) - Works only on sorted arrays
   - Iterative and Recursive implementations
3. **Jump Search** - O(√n) - Faster than Linear Search for large sorted datasets
4. **Interpolation Search** - O(log log n) - Best for uniformly distributed sorted data
5. **Exponential Search** - O(log n) - Useful for large sorted datasets with unknown size

### Graph Algorithms
1. **Breadth-First Search (BFS)** – O(V + E) – Traverses level-by-level using a queue
2. **Depth-First Search (DFS)** – O(V + E) – Explores as deep as possible using a stack/recursion

### Dynamic Programming
- Coming soon...

### Greedy Algorithms
- Coming soon...

### Divide and Conquer
- Coming soon...

### String Algorithms
- Coming soon...

### Backtracking
- Coming soon...

### Bit Manipulation
- Coming soon...

## Getting Started

Clone the repository:
```sh
git clone https://github.com/yourusername/algorithms-in-js.git
cd algorithms-in-js
```

Run the JavaScript code:
```sh
node algorithm.js
```

## Example Usage
```javascript
const arr = [10, 20, 30, 40, 50];
console.log(binarySearch(arr, 30)); // Output: 2
```

## Contributing
Feel free to fork this repository and submit pull requests for improvements!

## License
This project is licensed under the MIT License.

