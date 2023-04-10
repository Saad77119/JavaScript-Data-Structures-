function factorial(n = 1) {
    if (n === 1) {
        return 1
    }
    return n * factorial(n - 1);
}

let factorialVAlue = factorial(5);