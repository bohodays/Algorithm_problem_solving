function solution(numbers) {
    const sortedNums = numbers.sort((a, b) => b - a);
    return sortedNums[0] * sortedNums[1];
}