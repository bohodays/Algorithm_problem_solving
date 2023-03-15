function solution(arr) {
    if (arr.length === 1) {
        return [-1];
    } else {
        const minValue = Math.min(...arr);
        const minValueIndex = arr.indexOf(minValue);
        arr.splice(minValueIndex, 1);
        return arr
    }
}