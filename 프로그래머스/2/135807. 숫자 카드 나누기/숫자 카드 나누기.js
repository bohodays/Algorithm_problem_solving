function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function getGCD(arr) {
    return arr.reduce((acc, num) => gcd(acc, num), arr[0]);
}

function isValidDivisor(divisor, arr) {
    return arr.every(num => num % divisor !== 0);
}

function solution(arrayA, arrayB) {
    let gcdA = getGCD(arrayA);
    let gcdB = getGCD(arrayB);
    
    let resultA = isValidDivisor(gcdA, arrayB) ? gcdA : 0;
    let resultB = isValidDivisor(gcdB, arrayA) ? gcdB : 0;
    
    return Math.max(resultA, resultB);
}
