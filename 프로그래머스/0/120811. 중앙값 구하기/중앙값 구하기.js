function solution(array) {
    const sortedArray = array.sort((a, b) => a - b);
    return sortedArray[parseInt(sortedArray.length / 2)];
}