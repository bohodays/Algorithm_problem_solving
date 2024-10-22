function solution(arr) {
    const minValue = Math.min(...arr);
    arr.splice(arr.indexOf(minValue), 1);
    return arr.length ? arr : [-1];
}