function fibonacciAtPosition(n) {   // Using a for loop
    let a = 0, b = 1, result = 0;
    for (let i = 2; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    return n === 0 ? 0 : n === 1 ? 1 : result;
}

// Print 3rd and 7th Fibonacci numbers (0-based indexing)
console.log("3rd Fibonacci:", fibonacciAtPosition(3));  // Output: 2
console.log("7th Fibonacci:", fibonacciAtPosition(7));  // Output: 13





// function fibonacciRecursive(n) { // Using Recursion
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
// }

// // Print first n Fibonacci numbers using recursion
// function printFibonacciRecursive(n) {
//     console.log("Fibonacci Series using recursion:");
//     for (let i = 0; i < n; i++) {
//         console.log(fibonacciRecursive(i));
//     }
// }

// // Example usage:
// printFibonacciRecursive(10);  // First 10 Fibonacci numbers
