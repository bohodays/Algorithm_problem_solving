function solution(array, n) {
    array.sort();
    const values = array.map((item) => Math.abs(item - n));
    const minValue = Math.min(...values);
    const answer = array[values.indexOf(minValue)];
    return answer;
}