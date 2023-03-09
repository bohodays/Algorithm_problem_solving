function solution(a, b) {
    const sumValue = a + b;
    let count = 0;
    
    let minValue = Math.min(a, b);
    let maxValue = Math.max(a, b);

    const valueCount = maxValue - minValue + 1;
    if (valueCount % 2 === 0) {
        return sumValue * (valueCount / 2);
    } else {
        return sumValue * Math.floor(valueCount / 2) + ((minValue + maxValue) / 2);
    }
}