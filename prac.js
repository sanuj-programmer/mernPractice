function fibonacciAtPosition(n) {   // Using a for loop
    let a = 0, b = 1, result = 0;
    for (let i = 2; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    return n === 0 ? 0 : n === 1 ? 1 : result;
}


