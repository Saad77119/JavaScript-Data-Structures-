// For Two Params 
function EucledianGCD(a, b) {
    if (b === 0) {
        return a;
    }
    return EucledianGCD(b, a % b);
}
const gcd = EucledianGCD(20, 3)
console.log("🚀 ~ file: eucledian-greatest-common-divisor.js:21 ~ gcd:", gcd)
    // For Multi Params
function EucledianMultiParamGCD(...numbers) {
    let result = numbers.shift();
    for (const number of numbers) {
        result = EucledianGCD(result, number);
        if (result == 1)
            return result;
    }
    return result;
}
const gcdNumber = EucledianMultiParamGCD(20, 25, 35, 40)
console.log("🚀 ~ file: eucledian-greatest-common-divisor.js:21 ~ gcd:", gcdNumber)