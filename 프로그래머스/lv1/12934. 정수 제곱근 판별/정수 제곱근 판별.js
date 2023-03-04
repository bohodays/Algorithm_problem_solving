function solution(n) {
    const sqrtNumber = Math.sqrt(n);
    if (sqrtNumber === Math.floor(sqrtNumber)) {
        return (sqrtNumber + 1)**2;
    } else {
        return -1;
    }
}